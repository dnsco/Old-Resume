#require 'rubygems'
#require 'bundler/setup'
#require 'sinatra'
#require 'app.rb'
#run Resume

#serve static site as everything is now js
use Rack::Static, :urls => ["/css", "/js", "/json", "/mustaches"], :root => "public"
run lambda { |env| [200, { 'Content-Type' => 'text/html', 'Cache-Control' => 'no-cache' }, File.open('public/index.html', File::RDONLY)] }


