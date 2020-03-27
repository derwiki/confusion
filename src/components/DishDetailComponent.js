import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    formatDate(date) {
        // formats like Jan XX, XXXX
        return new Date(date)
                 .toLocaleDateString('en-EN', {weekday: undefined, month: 'short', day: 'numeric', year: 'numeric' })
    }

    renderComments(comments) {
        if (comments) {
            const renderedComments = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        {/* it's technically invalid to include <div> inside <li> (because they're both block elements), but it works */}
                        <div>{comment.comment}</div>
                        <div className='m-2'>
                            — {comment.author}, {this.formatDate(comment.date)}
                        </div>
                    </li>
                )
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ol className='list-unstyled'>
                        {renderedComments}
                    </ol>
                </div>
            )
        } else {
            return (
                <div />
            )
        }
    }

    render() {
        return (
            <>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </>
        )
    }
}

export default DishDetail;