<!-- Generated file — do not edit; regenerated with the SDK. -->

# Notifications — operations

Accessor: `client.notifications` · Source: `dynamics_365_business_central/apis/notifications.py` · 2 operations

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
| `NotificationRecipient` | `dynamics_365_business_central/models/notification_recipient.py` |
| `NotificationRecipientDict` | `dynamics_365_business_central/models/notification_recipient.py` |
| `AddNotificationRecipientErrorBody` | `dynamics_365_business_central/errors/add_notification_recipient_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterNotificationsApi` | `dynamics_365_business_central/models/error_response_business_central_administration_center_notifications_api.py` |

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
| `ApplicationsEnvironmentsNotificationsResponse` | `dynamics_365_business_central/models/applications_environments_notifications_response.py` |
| `ListNotificationRecipientsErrorBody` | `dynamics_365_business_central/errors/list_notification_recipients_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterNotificationsApi` | `dynamics_365_business_central/models/error_response_business_central_administration_center_notifications_api.py` |

