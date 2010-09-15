require 'mustache/sinatra'
require 'json'

class Resume < Sinatra::Base
  register Mustache::Sinatra
  set :mustache, :templates => 'views/'

  get '/' do
    @title = "Mustache + Sinatra = Wonder"
    jobs =  JSON.parse(IO.read(File.join(File.dirname(__FILE__), '/public/json/jobs.json')))
    mustache :index,:layout => true, :locals => jobs
  end
end

