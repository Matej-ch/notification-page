import Notification from './INotification'
import './NotificationComponent.scss'

function NotificationComponent({notification}: {notification:Notification})
{
    const getImageUrl = (name:string) => {
        return new URL(`./assets/${name}`, import.meta.url).href.toString()
    }

    return (<div className={notification.isRead ? 'notification-body' : 'notification-body highlight'}>
        <img src={getImageUrl(notification.avatar)} alt={'avatar image ' + notification.name} width={45} height={45}/>
        <div className={'info'}>
            <span className={'name'}>{notification.name}</span>
            <span className={'action'}> {notification.action}</span>
            <span className={'event'}> {notification.event}</span>
            {!notification.isRead && <span className={'read'}>&nbsp;</span>}
            <div className={'date'}>{notification.date}</div>

            {notification.message && <div className={'private-message'}>{notification.message}</div>}
        </div>
    </div>)
}

export default NotificationComponent