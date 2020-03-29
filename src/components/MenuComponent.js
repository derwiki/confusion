import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {
    render() {
        const { dishes, onClick } = this.props;
        const menu = dishes.map((dish) => {
            const { id, image, name } = dish;
            return (
                <div key={id} className="col-12 col-md-5 m-1">
                    <Card key={id} onClick={() => onClick(id)}>
                        <CardImg width="100%" src={image} alt={name} />
                        <CardImgOverlay>
                            <CardTitle>{name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;