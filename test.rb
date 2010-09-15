require 'rubygems'
require 'bundler/setup'

require 'sinatra'
require 'app'
require 'rack/test'
require 'test/unit'
require 'leftright'

ENV['RACK_ENV'] = 'test'

class ResumeTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    Resume
  end

  def test_it_says_muriel
    get '/'
    assert last_response.ok?
    assert last_response. =~ /muriel/i
  end

end
