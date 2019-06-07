import React from 'react';
import { isTemplateElement } from '@babel/types';
import moment from 'moment';

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div class="card z-depth-0">
        <div class="card-content">
          <span class="card-title">Notifications</span>
          <ul className="notifcation">
            {notifications &&
              notifications.map(notificaion => {
                return (
                  <li key={notificaion.id}>
                    <span className="pink-text">{notificaion.user}</span>
                    <span> {notificaion.content}</span>
                    <div class="grey-text note-date">
                      {moment(notificaion.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
