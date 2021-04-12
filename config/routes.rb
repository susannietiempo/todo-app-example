Rails.application.routes.draw do

  resources :todos, only: [:create, :update, :destroy, :index] do
    collection do
      delete :clear
    end
  end

  root "/", controller: :index, action: :show, as: :index_show
  match "*path" => "index#show", :via => :all
end
