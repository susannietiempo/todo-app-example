class TodosController < ApplicationController
  before_action :set_todo, only: [:update, :destroy]

  def index
    @todos = Todo.all
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render :create
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  def update
    if @todo.update(todoparams)
      render :update
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @todo.destroy
      render :destroy
    else
      render json: @todos.errors, status: :unprocessable_entity
    end
  end

  def clear
    if Todo.where(done: true).destroy_all
      head :ok
    else
      head :unprocessable_entity
    end
  end

  private

  def set_todo
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:text, :done)
  end
end
