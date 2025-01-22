# streaming-rtmp
git clone <repository-url>
cd rtmp-streaming

sudo docker build -t rtmp-streaming .
sudo docker run -p 1935:1935 -p 8000:8000 rtmp-streaming

ffmpeg -re -i sample.mp4 -c copy -f flv rtmp://localhost/live/stream

#View the Stream
ffplay rtmp://localhost/live/stream
