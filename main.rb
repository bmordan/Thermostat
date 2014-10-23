require 'sinatra'

set :views, Proc.new { File.join(root, "views")}

get '/' do
  erb :thermostat
end