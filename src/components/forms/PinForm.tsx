import { useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";


export const PinForm = (props:any) => {

    const descriptionRef = useRef<HTMLInputElement>(null);
    const imageUrlRef = useRef<HTMLInputElement>(null);

    const handleSave = () => {
        const pin = {
            description: descriptionRef.current?.value,
            image_url: imageUrlRef.current?.value,
        }
        props.onSubmit(pin)
    }

    return (
        <Card
            className="max-w-md md:break-inside-avoid overflow-hidden"
        >
            <CardContent>
                
                <Input ref={descriptionRef} type="text"/>
                <Input ref={imageUrlRef} type="text"/>
                <Button onClick={handleSave}/>
            </CardContent>
        </Card>
    )
};