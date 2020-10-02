import BoardView from "../view/board.js";
import SortView from "../view/sort.js";
import TaskListView from "../view/task-list.js";
import NoTaskView from "../view/no-task.js";
import TaskView from "../view/task.js";
import TaskEditView from "../view/task-edit.js";
import LoadMoreButtonView from "../view/load-more-button.js";
import {render, RenderPosition} from "../utils/render.js";

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
    }

    _renderort() {
        // Метод для рендеринга сортировки
    }

    _renderTask() {
        // Метод для создания и рендеринга компонетов задачи
    }

    _renderTasks() {
        // Метод для рендеринга N-задач за раз
    }

    _renderNoTasks() {
        // Метод для рендеринга N-задач за раз
    }

    _renderLoadMoreButton() {
        // Метод для отрисовки компонетов задачи
    }

    _renderBoard() {
        // Метод для инициализации (начала работы) модуля
    }
}