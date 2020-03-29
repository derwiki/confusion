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
        const { dish } = this.props;
        if (!dish) {
            return null;
        }
        const { image, name, description, comments } = dish;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={image} alt={name} />
                            <CardBody>
                                <CardTitle>{name}</CardTitle>
                                <CardText>{description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(comments)}
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail;