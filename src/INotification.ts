export default interface Notification {
    name: string,
    action:string,
    event?: string,
    date: string,
    message?: string,
    avatar: string,
    isRead: boolean
}