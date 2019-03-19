import { Component, Prop, State, Watch } from '@stencil/core';
import pick from 'lodash/pick';

@Component({
  tag: 'cld-video',
  styleUrl: 'cld-video.css',
  shadow: false
})
export class CloudinaryVideoPlayer {
  @Prop() analytics: boolean;
  @Prop() autoplay: boolean;
  @Prop() autoplayMode: string;
  @Prop() autoShowRecommendations: boolean;
  @Prop() cloudName: string;
  @Prop() control: 'play' | 'pause' | 'stop';
  @Prop() controls: boolean;
  @Prop() crop: string;
  @Prop() fluid: boolean;
  @Prop() fontFace: string;
  @Prop() height: number;
  @Prop() loop: boolean;
  @Prop() muted: boolean;
  @Prop() preload: string;
  @Prop() publicId: string;
  @Prop() urlTransformation: string;
  @Prop() videoId: string = "cld-video";
  @Prop() videoTitle: string;
  @Prop() width: number;

  @State() cld: any = null;
  @State() player: any = null;

  componentWillLoad() {
    this.cld = window['cloudinary'] && window['cloudinary'].Cloudinary.new({cloud_name: this.cloudName});
  }

  componentDidLoad() {
    this.player = this.cld && this.cld.videoPlayer(this.videoId, this.buildOptions());
  }

  componentDidUnload() {
    this.cld = null;
    this.player = null;
  }

  @Watch('control')
  controlHandler(newValue: string, _oldValue: string) {
    switch (newValue)  {
      case 'play':
        this.player.play();
        break;

      case 'pause':
        this.player.pause();
        break;

      case 'stop':
        this.player.stop();
        break;
    }
  }

  private buildOptions() {
    const options: {[k: string]: any} =
      pick(this, [
        'analytics',
        'autoplay',
        'autoplayMode',
        'autoShowRecommendations',
        'controls',
        'fluid',
        'fontFace',
        'loop',
        'muted',
        'preload',
        'publicId',
      ]);

    if (this.videoTitle) {
      options.info = options.info || {};
      options.info.title = this.videoTitle;
    }

    if (this.width || this.height || this.crop) {
      options.transformation = pick(this, ['width', 'height', 'crop']);
    }

    return options;
  }

  private getSrc() {
    const defaultOptions = this.urlTransformation ? this.urlTransformation + '/' : '';
    return `https://res.cloudinary.com/${this.cloudName}/video/upload/${defaultOptions}${this.publicId}`;
  }

  render() {
    return <video id={this.videoId} controls muted preload="metadata" class="cld-video-player cld-fluid">
      <source src={this.getSrc() + '.mp4'} type="video/mp4" />
      <source src={this.getSrc() + '.webm'} type="video/webm" />
      <source src={this.getSrc() + '.ogv'} type="video/ogg" />
      "Sorry, your browser doesn't support embedded videos."
    </video>
  }
}
