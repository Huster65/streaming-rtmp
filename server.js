const NodeMediaServer = require('node-media-server');

const config = {
  logType: 3, // 3: Debugging logs
  rtmp: {
    port: 1935, // Port for RTMP
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000, // Port for HTTP to serve HLS
    allow_origin: '*', // Allow cross-origin
  },
  trans: {
    ffmpeg: '/usr/bin/ffmpeg', // Path to FFmpeg binary
    tasks: [
      {
        app: 'live', // RTMP app name
        hls: true, // Enable HLS
        hlsFlags: '[hls_time=4:hls_list_size=10:hls_flags=delete_segments]', // HLS config
        dash: true, // Enable DASH if needed
        dashFlags: '[f=dash:window_size=5:extra_window_size=5]', // DASH config
      },
    ],
  },
};

const nms = new NodeMediaServer(config);
nms.run();
