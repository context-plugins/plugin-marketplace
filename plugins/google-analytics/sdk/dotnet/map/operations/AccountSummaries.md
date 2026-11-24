<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountSummaries — operations

Accessor: `client.AccountSummaries` · Source: `src/GoogleAnalytics/Api/AccountSummaries.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AnalyticsadminAccountSummariesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `AnalyticsadminAccountSummariesList(AnalyticsadminAccountSummariesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleAnalyticsAdminV1BetaListAccountSummariesResponse`
- **Error**: `ApiException<AnalyticsadminAccountSummariesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsadminAccountSummariesListRequest` | `src/GoogleAnalytics/Requests/AccountSummaries/AnalyticsadminAccountSummariesListRequest.cs` |
| `GoogleAnalyticsAdminV1BetaListAccountSummariesResponse` | `src/GoogleAnalytics/Models/GoogleAnalyticsAdminV1BetaListAccountSummariesResponse.cs` |
| `AnalyticsadminAccountSummariesListError` | `src/GoogleAnalytics/Errors/AnalyticsadminAccountSummariesListError.cs` |
| `GoogleRpcError` | `src/GoogleAnalytics/Models/GoogleRpcError.cs` |

