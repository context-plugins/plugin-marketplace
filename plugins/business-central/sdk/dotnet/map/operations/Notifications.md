<!-- Generated file — do not edit; regenerated with the SDK. -->

# Notifications — operations

Accessor: `client.Notifications` · Source: `src/Dynamics365BusinessCentral/Api/Notifications.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddNotificationRecipient

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `AddNotificationRecipient(AddNotificationRecipientRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`, `Body`
- **Returns**: `NotificationRecipient`
- **Error**: `ApiException<AddNotificationRecipientError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterNotificationsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterNotificationsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddNotificationRecipientRequest` | `src/Dynamics365BusinessCentral/Requests/Notifications/AddNotificationRecipientRequest.cs` |
| `NotificationRecipient` | `src/Dynamics365BusinessCentral/Models/NotificationRecipient.cs` |
| `AddNotificationRecipientError` | `src/Dynamics365BusinessCentral/Errors/AddNotificationRecipientError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterNotificationsApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterNotificationsApi.cs` |

### ListNotificationRecipients

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListNotificationRecipients(ListNotificationRecipientsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`
- **Returns**: `ApplicationsEnvironmentsNotificationsResponse`
- **Error**: `ApiException<ListNotificationRecipientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterNotificationsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterNotificationsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListNotificationRecipientsRequest` | `src/Dynamics365BusinessCentral/Requests/Notifications/ListNotificationRecipientsRequest.cs` |
| `ApplicationsEnvironmentsNotificationsResponse` | `src/Dynamics365BusinessCentral/Models/ApplicationsEnvironmentsNotificationsResponse.cs` |
| `ListNotificationRecipientsError` | `src/Dynamics365BusinessCentral/Errors/ListNotificationRecipientsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterNotificationsApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterNotificationsApi.cs` |

