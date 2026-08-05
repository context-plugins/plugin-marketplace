# EventNotifications — operations

Accessor: `client.EventNotifications` · Source: `Api/EventNotifications.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateNotificationSubscription
- **HTTP**: `POST /notification-subscriptions` (EventNotifications (financialdataexchange-prod))
- **Notes**: Creates notification subscription entry on the server
- **Signature**: `CreateNotificationSubscription(Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, NotificationSubscriptionEntity? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NotificationSubscriptionEntity`
- **Error**: `SdkException<CreateNotificationSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 401, 405, 429, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteNotificationSubscription
- **HTTP**: `DELETE /notification-subscriptions/{subscriptionId}` (EventNotifications (financialdataexchange-prod))
- **Notes**: Delete a notification subscription
- **Signature**: `DeleteNotificationSubscription(string subscriptionId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteNotificationSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 401, 405, 429, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetNotificationSubscription
- **HTTP**: `GET /notification-subscriptions/{subscriptionId}` (EventNotifications (financialdataexchange-prod))
- **Notes**: Call to get notification subscription
- **Signature**: `GetNotificationSubscription(string subscriptionId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NotificationSubscriptionEntity`
- **Error**: `SdkException<GetNotificationSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 401, 405, 429, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetNotifications
- **HTTP**: `GET /notifications` (EventNotifications (financialdataexchange-prod))
- **Notes**: Get Notifications
- **Signature**: `GetNotifications(int? limit, string? offset, string? dataRecipientId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`limit` … `fdxApiActorType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `dataRecipientId` ← `dataRecipientId`
- **Returns**: `NotificationsEntity`
- **Error**: `SdkException<GetNotificationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [405, 429, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PublishNotification
- **HTTP**: `POST /notifications` (EventNotifications (financialdataexchange-prod))
- **Notes**: Publish Notification
- **Signature**: `PublishNotification(Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, NotificationEntity? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PublishNotificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [405, 429, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
