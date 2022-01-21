import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';





const MyCard = () => {
    
    
    return (

        <div>
            <Card variant="outlined" >
                <CardContent>
                    <Typography  
                    variant='h4' 
                    color="textSecondary" 
                    gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography  
                    variant='h4' 
                    color="textSecondary" 
                    gutterBottom>
                        Word of the Day
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default MyCard
