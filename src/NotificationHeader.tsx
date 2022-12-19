import './NotificationHeader.scss'

type props = {
    notificationCount:number,
    handleAllNotifications:Function
}
function NotificationHeader({notificationCount,handleAllNotifications}:props)
{
    return (<div className='notification-header'>
        <h1>Notifications <span>{notificationCount}</span></h1>
        <div>
            <a href="#" onClick={(e) => handleAllNotifications(e)}>Mark all as read</a>
        </div>
    </div>)
}

export default NotificationHeader;