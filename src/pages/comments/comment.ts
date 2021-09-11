import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import { CommentsProvider } from '../../providers/offers/offers';
@Component({
  selector: 'page-Comment',
  templateUrl: 'Comment.html'
})
export class CommentPage {

  constructor(public nav: NavController) {
  }


}
