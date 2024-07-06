export class Products{
    brand;
    name;
    price;
    product_link;
    description;
    product_type;
    rating;
    category;
    image_link;

    constructor(_brand,_name,_price,_product_link,_description,_product_type,_rating,_category,
                _image_link) {
        this.brand=_brand;
        this.name=_name;
        this.price=_name;
        this.product_link=_product_link;
        this.rating=_rating;
        this.category=_category;
        this.description=_description;
        this.product_type=_product_type;
        this.image_link=_image_link;
    }
}