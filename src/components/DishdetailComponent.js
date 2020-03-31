import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function formatDate(date) {
    // formats like Jan XX, XXXX
    return new Date(date)
                .toLocaleDateString('en-EN', {weekday: undefined, month: 'short', day: 'numeric', year: 'numeric' })
}

function RenderDish({dish}) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

function RenderComments({comments}) {
    if (comments) {
        const renderedComments = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    {/* it's technically invalid to include <div> inside <li> (because they're both block elements), but it works */}
                    <div>{comment.comment}</div>
                    <div className='m-2'>
                        — {comment.author}, {formatDate(comment.date)}
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

const DishDetail = ({ dish }) => {
    if (!dish) {
        return null;
    }
    const { comments } = dish;

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={comments} />
                </div>
            </div>
        </div>
    )
}
export default DishDetail;