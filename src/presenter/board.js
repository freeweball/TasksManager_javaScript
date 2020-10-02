import BoardView from "../view/board.js";
import SortView from "../view/sort.js";
import TaskListView from "../view/task-list.js";
import NoTaskView from "../view/no-task.js";
import TaskView from "../view/task.js";
import TaskEditView from "../view/task-edit.js";
import LoadMoreButtonView from "../view/load-more-button.js";
import {render, RenderPosition} from "../utils/render.js";

const TASK_COUNT_PER_STEP = 8;

export default class Board {
    constructor(boardContainer) {
        this._boardContainer = boardContainer;

        this._boardComponent = new BoardView();
        this._sortComponent = new SortView();
        this._taskListComponent = new TaskListView();
        this._noTaskComponent = new NoTaskView();
    }

    init(boardTasks) {
        // Метод для инициализации (начала работы) модуля
        this._boardTasks = boardTasks.slice();

        render(this._boardContainer, this._boardComponent, RenderPosition.BEFOREEND);
        render(this._boardComponent, this._taskListComponent, RenderPosition.BEFOREEND);

        this._renderBoard();
    }

    _renderort() {
        // Метод для рендеринга сортировки
        render(this._boardComponent, this._sortComponent, RenderPosition.AFTERBEGIN);
    }

    _renderTask(task) {
        // Метод для создания и рендеринга компонетов задачи
    }

    _renderTasks(from, to) {
        // Метод для рендеринга N-задач за раз
        this._boardTasks
            .slice(from, to)
            .forEach((boardTask) => this._renderTask(boardTask));
        }
    }

    _renderNoTasks() {
        // Метод для рендеринга N-задач за раз
        render(this._boardComponent, this._noTaskComponent, RenderPosition.AFTERBEGIN);
    }

    _renderLoadMoreButton() {
        // Метод для отрисовки компонетов задачи
    }

    _renderBoard() {
        // Метод для инициализации (начала работы) модуля
        if (this._boardTasks.every((task) => task.isArchive)) {
            this._renderNoTasks();
            return;
          }
      
          this._renderSort();
      
          this._renderTasks(0, Math.min(this._boardTasks.length, TASK_COUNT_PER_STEP));
      
          if (this._boardTasks.length > TASK_COUNT_PER_STEP) {
            this._renderLoadMoreButton();
          }
    }
}