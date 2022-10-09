import { Notification } from 'electron';

let lastNotification: Notification;

export const createNotification = () => {
  if (lastNotification) {
    lastNotification.close();
  }
  lastNotification = new Notification({
    title: 'Twenty Twenty',
    body: 'It\'s time to take a break',
    silent: false
  });
  lastNotification.show();
};
