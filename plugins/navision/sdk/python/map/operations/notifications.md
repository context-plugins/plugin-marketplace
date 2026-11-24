<!-- Generated file — do not edit; regenerated with the SDK. -->

# Notifications — operations

Accessor: `client.notifications` · Source: `microsoft_dynamics_nav/apis/notifications.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.notifications.add_notification_recipient

- **Route**: `POST /applications/{applicationFamily}/environments/{environmentName}/notifications`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def add_notification_recipient(environment_name: str, body: NotificationRecipient | NotificationRecipientDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`, `body`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName` · `body` — JSON body
- **Returns (parsed)**: `NotificationRecipient`
- **Returns (raw)**: `ApiResult[NotificationRecipient, AddNotificationRecipientErrorBody]`
- **Error**: `AddNotificationRecipientErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterNotificationsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `NotificationRecipient` | `microsoft_dynamics_nav/models/notification_recipient.py` |
| `NotificationRecipientDict` | `microsoft_dynamics_nav/models/notification_recipient.py` |
| `AddNotificationRecipientErrorBody` | `microsoft_dynamics_nav/errors/add_notification_recipient_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterNotificationsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_notifications_api.py` |

### client.notifications.list_notification_recipients

- **Route**: `GET /applications/{applicationFamily}/environments/{environmentName}/notifications`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def list_notification_recipients(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName`
- **Returns (parsed)**: `ApplicationsEnvironmentsNotificationsResponse`
- **Returns (raw)**: `ApiResult[ApplicationsEnvironmentsNotificationsResponse, ListNotificationRecipientsErrorBody]`
- **Error**: `ListNotificationRecipientsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterNotificationsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationsEnvironmentsNotificationsResponse` | `microsoft_dynamics_nav/models/applications_environments_notifications_response.py` |
| `ListNotificationRecipientsErrorBody` | `microsoft_dynamics_nav/errors/list_notification_recipients_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterNotificationsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_notifications_api.py` |

