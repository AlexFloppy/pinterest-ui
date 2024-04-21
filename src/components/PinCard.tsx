import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

export const PinCard = ({ image_url, authorId, description }: any) => {
    return (
        <Card
            key={authorId}
            className="max-w-md md:break-inside-avoid overflow-hidden"
        >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                    <AvatarImage
                        alt=""
                        src={image_url}
                    />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                    <CardTitle className="text-lg">{authorId}</CardTitle>
                    <CardDescription>{authorId}</CardDescription>
                </div>
            </CardHeader>

            <CardContent><img src={image_url} />{description}</CardContent>
        </Card>
    )
};