import {useState} from 'react'
import './App.scss'
import NotificationHeader from "./NotificationHeader";

interface Notification {
    name: string,
    action:string,
    event?: string,
    date: string,
    message?: string,
    avatar: string,
    isRead: boolean
}

function App() {

    const [notifications, setNotifications] = useState<Notification[]>([
        {
            name: 'Mark Webber',
            action: 'reacted to your recent post',
            event: 'My first tournament today!',
            date: '1m ago',
            avatar: 'avatar-mark-webber.webp',
            isRead: false,
        },
        {
            name: 'Angela Gray',
            action: 'followed you',
            event: '',
            date: '5m ago',
            avatar: 'avatar-angela-gray.webp',
            isRead: false,
        },
        {
            name: 'Jacob Thompson',
            action: 'has joined your group',
            event: 'Chess Club',
            date: '1 day ago',
            avatar: 'avatar-jacob-thompson.webp',
            isRead: false,
        },
        {
            name: 'Rizky Hasanuddin',
            action: 'sent you a private message',
            event: '',
            date: '5 days ago',
            message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game',
            avatar: 'avatar-rizky-hasanuddin.webp',
            isRead: false,
        },
        {
            name: 'Kimberly Smith',
            action: 'commented on your picture',
            event: '',
            date: '1 week ago',
            avatar: 'avatar-kimberly-smith.webp',
            isRead: true,
        },
        {
            name: 'Nathan Peterson',
            action: 'reacted to your recent post',
            event: '5 end-game strategies to increase your win rate',
            date: '2 weeks ago',
            avatar: 'avatar-nathan-peterson.webp',
            isRead: true,
        },
        {
            name: 'Anna Kim',
            action: 'left the group',
            event: 'Chess Club',
            date: '2 weeks ago',
            avatar: 'avatar-anna-kim.webp',
            isRead: true,
        },
    ]);

    return (
        <div className="App">
            <NotificationHeader notificationCount={notifications.length} />
        </div>
    )
}

export default App
