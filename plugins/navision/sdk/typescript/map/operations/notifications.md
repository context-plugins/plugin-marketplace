<!-- Generated file — do not edit; regenerated with the SDK. -->

# Notifications — operations

Accessor: `client.notifications` · Source: `src/resources/notifications.ts` · 2 operations · Request and error types: namespace `Notifications`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addNotificationRecipient

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `addNotificationRecipient(request: Notifications.AddNotificationRecipientRequest, options?: RequestOptions): ApiPromise<NotificationRecipient, Notifications.AddNotificationRecipientError>`
- **Wire**: `POST /applications/{applicationFamily}/environments/{environmentName}/notifications`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotificationRecipient`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Notifications.AddNotificationRecipientError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterNotificationsApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterNotificationsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notifications.AddNotificationRecipientRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |
| `body` | `body` | `NotificationRecipient` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationRecipient` | `notificationRecipientSchema` | `src/models/notification-recipient.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterNotificationsApi` | `errorResponseBusinessCentralAdministrationCenterNotificationsApiSchema` | `src/models/error-response-business-central-administration-center-notifications-api.ts` |

### listNotificationRecipients

- **Server**: `defaultBusinessCentralAdministrationCenterAppManagementApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listNotificationRecipients(request: Notifications.ListNotificationRecipientsRequest, options?: RequestOptions): ApiPromise<ApplicationsEnvironmentsNotificationsResponse, Notifications.ListNotificationRecipientsError>`
- **Wire**: `GET /applications/{applicationFamily}/environments/{environmentName}/notifications`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApplicationsEnvironmentsNotificationsResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Notifications.ListNotificationRecipientsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBusinessCentralAdministrationCenterNotificationsApi"` [401] `ErrorResponseBusinessCentralAdministrationCenterNotificationsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notifications.ListNotificationRecipientsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `applicationFamily` | `path` | `string` | no | `"BusinessCentral"` |
| `environmentName` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationsEnvironmentsNotificationsResponse` | `applicationsEnvironmentsNotificationsResponseSchema` | `src/models/applications-environments-notifications-response.ts` |
| `ErrorResponseBusinessCentralAdministrationCenterNotificationsApi` | `errorResponseBusinessCentralAdministrationCenterNotificationsApiSchema` | `src/models/error-response-business-central-administration-center-notifications-api.ts` |

