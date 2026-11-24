<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.Accounts` · Source: `src/GoogleAnalytics/Api/Accounts.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AnalyticsadminAccountsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminAccountsDelete(AnalyticsadminAccountsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountsId`
- **Returns**: `object`
- **Error**: `ApiException<AnalyticsadminAccountsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminAccountsDeleteRequest` | `src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsDeleteRequest.cs` |
| `AnalyticsadminAccountsDeleteError` | `src/GoogleAnalytics/Errors/AnalyticsadminAccountsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminAccountsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminAccountsGet(AnalyticsadminAccountsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountsId`
- **Returns**: `GoogleAnalyticsAdminV1BetaAccount`
- **Error**: `ApiException<AnalyticsadminAccountsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminAccountsGetRequest` | `src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsGetRequest.cs` |
| `GoogleAnalyticsAdminV1BetaAccount` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaAccount.cs` |
| `AnalyticsadminAccountsGetError` | `src/GoogleAnalytics/Errors/AnalyticsadminAccountsGetError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminAccountsGetDataSharingSettings

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminAccountsGetDataSharingSettings(AnalyticsadminAccountsGetDataSharingSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountsId`
- **Returns**: `GoogleAnalyticsAdminV1BetaDataSharingSettings`
- **Error**: `ApiException<AnalyticsadminAccountsGetDataSharingSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminAccountsGetDataSharingSettingsRequest` | `src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsGetDataSharingSettingsRequest.cs` |
| `GoogleAnalyticsAdminV1BetaDataSharingSettings` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaDataSharingSettings.cs` |
| `AnalyticsadminAccountsGetDataSharingSettingsError` | `src/GoogleAnalytics/Errors/AnalyticsadminAccountsGetDataSharingSettingsError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminAccountsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminAccountsList(AnalyticsadminAccountsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `showDeleted` ← `ShowDeleted`
- **Returns**: `GoogleAnalyticsAdminV1BetaListAccountsResponse`
- **Error**: `ApiException<AnalyticsadminAccountsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminAccountsListRequest` | `src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsListRequest.cs` |
| `GoogleAnalyticsAdminV1BetaListAccountsResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListAccountsResponse.cs` |
| `AnalyticsadminAccountsListError` | `src/GoogleAnalytics/Errors/AnalyticsadminAccountsListError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminAccountsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminAccountsPatch(AnalyticsadminAccountsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleAnalyticsAdminV1BetaAccount`
- **Error**: `ApiException<AnalyticsadminAccountsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminAccountsPatchRequest` | `src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsPatchRequest.cs` |
| `GoogleAnalyticsAdminV1BetaAccount` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaAccount.cs` |
| `AnalyticsadminAccountsPatchError` | `src/GoogleAnalytics/Errors/AnalyticsadminAccountsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminAccountsProvisionAccountTicket

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminAccountsProvisionAccountTicket(AnalyticsadminAccountsProvisionAccountTicketRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse`
- **Error**: `ApiException<AnalyticsadminAccountsProvisionAccountTicketError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminAccountsProvisionAccountTicketRequest` | `src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsProvisionAccountTicketRequest.cs` |
| `GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest.cs` |
| `GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse.cs` |
| `AnalyticsadminAccountsProvisionAccountTicketError` | `src/GoogleAnalytics/Errors/AnalyticsadminAccountsProvisionAccountTicketError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminAccountsRunAccessReport

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminAccountsRunAccessReport(AnalyticsadminAccountsRunAccessReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountsId`, `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaRunAccessReportResponse`
- **Error**: `ApiException<AnalyticsadminAccountsRunAccessReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminAccountsRunAccessReportRequest` | `src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsRunAccessReportRequest.cs` |
| `GoogleAnalyticsAdminV1BetaRunAccessReportRequest` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaRunAccessReportRequest.cs` |
| `GoogleAnalyticsAdminV1BetaRunAccessReportResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaRunAccessReportResponse.cs` |
| `AnalyticsadminAccountsRunAccessReportError` | `src/GoogleAnalytics/Errors/AnalyticsadminAccountsRunAccessReportError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

### AnalyticsadminAccountsSearchChangeHistoryEvents

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminAccountsSearchChangeHistoryEvents(AnalyticsadminAccountsSearchChangeHistoryEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountsId`, `Body`
- **Returns**: `GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse`
- **Error**: `ApiException<AnalyticsadminAccountsSearchChangeHistoryEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminAccountsSearchChangeHistoryEventsRequest` | `src/GoogleAnalytics/Requests/Accounts/AnalyticsadminAccountsSearchChangeHistoryEventsRequest.cs` |
| `GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest.cs` |
| `GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse.cs` |
| `AnalyticsadminAccountsSearchChangeHistoryEventsError` | `src/GoogleAnalytics/Errors/AnalyticsadminAccountsSearchChangeHistoryEventsError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

