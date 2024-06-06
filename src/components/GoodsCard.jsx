import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function GoodsCard() {
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/goods")
            .then(res => res.json())
            .then(data => setGoods(data))
    }, [])

    return (
        <div style={{ display: "flex", flexWrap: "wrap", margin: "1% 5%" }}>
            {console.log(goods)}
            {goods.map((el) => (
                <Card style={{ width: "20%", margin: "40px", marginBottom: "0px", height: "420px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={el.image}
                            alt="стакан"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" style={{ height: "70px", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {el.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ height: "100px", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {el.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <div style={{ width: "100%", justifyContent: "space-between", display: "flex", alignItems: "center", }}>
                            <Typography variant="h5" color="initial">
                                {el.price} рублей
                            </Typography>
                            <Button size="small" color="primary" style={{ minHeight: "50px" }}>
                                Add to cart
                            </Button>
                        </div>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}
