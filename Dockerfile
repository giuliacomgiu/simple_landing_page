FROM ruby:2.7.2-slim-buster
RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y libxml2-dev libxslt1-dev
RUN apt-get install -y nodejs
RUN apt-get install -y yarn
RUN apt-get install  -y sqlite3 libsqlite3-dev
#RUN apk add zlib-dev libxml2-dev libxslt-dev 
#RUN apk add nodejs=14.16.0-r0
#RUN apk add yarn=1.22.10-r0
#RUN apk add sqlite
#RUN gem install rails -v 6.1.3
RUN gem install bundler -v 2.1.4

WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle install
CMD ["/bin/setup"]

ADD . .
EXPOSE 3000
CMD ["rails", "server"]