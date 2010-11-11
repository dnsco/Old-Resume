#serve static site as everything is now js
use Rack::Static, :urls => ["/css", "/js", "/data", "/templates", "/documents"], :root => "public"
run lambda { |env| [200, { 'Content-Type' => 'text/html', 'Cache-Control' => 'public, max-age=6400'}, File.open('public/index.html', File::RDONLY)] }
