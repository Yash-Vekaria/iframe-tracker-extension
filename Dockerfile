# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.11-slim-buster


# Set current directory as ENV
ENV PATH=/crawler:$PATH


# Install dependencies
WORKDIR /crawler
COPY requirements.txt ./requirements.txt
RUN python3.11 -m pip install --upgrade pip
RUN pip install -r requirements.txt


# Virtual Display
RUN apt update
RUN apt install -y tigervnc-standalone-server default-jre wget


# Install chrome
RUN wget http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_120.0.6099.216-1_amd64.deb
RUN apt install -y ./google-chrome-stable_120.0.6099.216-1_amd64.deb unzip


# Copy server folder
COPY server /crawler/server


# Install npm packages
WORKDIR /crawler/server
RUN apt install -y nodejs npm
RUN npm install


# Copying required items
COPY crawl.py /crawler/crawl.py
COPY websites.csv /crawler/websites.csv
COPY extension /crawler/extension/
COPY output /crawler/output/


# Move back to the root directory
WORKDIR /crawler