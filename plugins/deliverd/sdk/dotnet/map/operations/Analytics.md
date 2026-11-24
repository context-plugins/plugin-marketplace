<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.Analytics` · Source: `src/Deliverd/Api/Analytics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Analytics

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Analytics(GetApiV1AnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `days` ← `Days`, `limit` ← `Limit`
- **Returns**: `ApiV1AnalyticsResponse`
- **Error**: `ApiException<GetApiV1AnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1AnalyticsRequest` | `src/Deliverd/Requests/Analytics/GetApiV1AnalyticsRequest.cs` |
| `ApiV1AnalyticsResponse` | `src/Deliverd/Models/ApiV1AnalyticsResponse.cs` |
| `GetApiV1AnalyticsError` | `src/Deliverd/Errors/GetApiV1AnalyticsError.cs` |

