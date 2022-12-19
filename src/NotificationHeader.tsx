import { MouseEvent } from 'react';
import './NotificationHeader.scss'

type props = {
    notificationCount:number,
}
function NotificationHeader({notificationCount}:props)
{

    const readAllNotifications = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
    }

    return (<div className='notification-header'>
        <h1>Notifications <span>{notificationCount}</span></h1>
        <div>
            <a href="#" onClick={(e) => readAllNotifications(e)}>Mark all as read</a>
        </div>
    </div>)
}

export default NotificationHeader;