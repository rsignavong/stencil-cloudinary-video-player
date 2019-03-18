![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# A WebComponent for Cloudinary Video Player

This WebComponent allows you to embed the Cloudinary Video Player to your application.

As Cloudinary Video Player third party library does not expose anything and scope directly the main object to `window`, you must include the following tags in your HTML:
```
<link href="node_modules/cloudinary-video-player/dist/cld-video-player.min.css" rel="stylesheet">

<script src="node_modules/lodash/lodash.js" type="text/javascript"></script>
<script src="node_modules/cloudinary-core/cloudinary-core.js" type="text/javascript"></script>
<script src="node_modules/cloudinary-video-player/dist/cld-video-player.min.js" type="text/javascript"></script>

```

or CDN version
```
<link href="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.css" rel="stylesheet">

<script src="https://unpkg.com/cloudinary-core/cloudinary-core-shrinkwrap.min.js" type="text/javascript"></script>
<script src="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js" type="text/javascript"></script>
```

Please refer to the [official Cloudinary Video Player API documentation](https://cloudinary.com/documentation/video_player_api_reference) or [npm package](https://www.npmjs.com/package/cloudinary-video-player) for more information.

If Cloudinary library has not loaded correctly on your page, the video player will load the native HTML5 video player of your browser as fallback.

That is why it is necessary to add the `url-transformation="w_940,h_354,c_limit"` attribute.

## Component Attributes
See [accepted attributes](./src/components/cld-video/readme.md).

## Using this component
```
<cld-video cloud-name="lightways" url-transformation="w_940,h_354,c_limit" video-id="video-123" video-title="My great video" public-id="folder/cl_public_id" width=940 height=354 crop="limit" controls></cld-video>
```

### Script tag
- Put a script tag similar to this `<script src='https://unpkg.com/stencil-cloudinary-video-player@1.0.0/dist/cld-video.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install stencil-cloudinary-video-player --save`
- Put a script tag similar to this `<script src='node_modules/stencil-cloudinary-video-player/dist/cld-video.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install stencil-cloudinary-video-player --save`
- Add an import to the npm packages `import stencil-cloudinary-video-player;`
- Then you can use the element anywhere in your template, JSX, html etc
