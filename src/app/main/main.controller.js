export class MainController {
  constructor ($timeout, webDevTec, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1495377287609;
    this.toastr = toastr;

    this.activate($timeout, webDevTec);
  }
}
