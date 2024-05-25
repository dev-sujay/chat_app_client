import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


const ChatBubble = ({ msg }) => {
    return (
        <div key={msg.id} className={`flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'}`}>
            {
                msg.user === 'AI' ? (
                    <Avatar>
                        <AvatarImage src={"https://adjdjfbjfbd"} alt="@shadcn" />
                        <AvatarFallback>
                            AI
                        </AvatarFallback>
                    </Avatar>
                ) : null
            }
            <div className={`p-2 mx-2 rounded-lg ${msg.user === 'You' ? 'bg-blue-500 dark:bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-600 dark:text-white'}`}>
                <p>{msg.text}</p>
            </div>
            {
                msg.user === 'You' ? (
                    <Avatar>
                        <AvatarImage src={"https://av"} alt="@shadcn" />
                        <AvatarFallback>
                            S
                        </AvatarFallback>
                    </Avatar>
                ) : null
            }
        </div>
    )
}

export default ChatBubble