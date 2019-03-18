/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface CldVideo {
    'analytics': boolean;
    'autoShowRecommendations': boolean;
    'autoplay': boolean;
    'autoplayMode': string;
    'cloudName': string;
    'control': 'play' | 'pause' | 'stop';
    'controls': boolean;
    'crop': string;
    'fluid': boolean;
    'fontFace': string;
    'height': number;
    'loop': boolean;
    'muted': boolean;
    'preload': string;
    'publicId': string;
    'urlTransformation': string;
    'videoId': string;
    'videoTitle': string;
    'width': number;
  }
  interface CldVideoAttributes extends StencilHTMLAttributes {
    'analytics'?: boolean;
    'autoShowRecommendations'?: boolean;
    'autoplay'?: boolean;
    'autoplayMode'?: string;
    'cloudName'?: string;
    'control'?: 'play' | 'pause' | 'stop';
    'controls'?: boolean;
    'crop'?: string;
    'fluid'?: boolean;
    'fontFace'?: string;
    'height'?: number;
    'loop'?: boolean;
    'muted'?: boolean;
    'preload'?: string;
    'publicId'?: string;
    'urlTransformation'?: string;
    'videoId'?: string;
    'videoTitle'?: string;
    'width'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'CldVideo': Components.CldVideo;
  }

  interface StencilIntrinsicElements {
    'cld-video': Components.CldVideoAttributes;
  }


  interface HTMLCldVideoElement extends Components.CldVideo, HTMLStencilElement {}
  var HTMLCldVideoElement: {
    prototype: HTMLCldVideoElement;
    new (): HTMLCldVideoElement;
  };

  interface HTMLElementTagNameMap {
    'cld-video': HTMLCldVideoElement
  }

  interface ElementTagNameMap {
    'cld-video': HTMLCldVideoElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
