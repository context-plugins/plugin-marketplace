<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdNetworkReports — operations

Accessor: `client.AdNetworkReports` · Source: `src/Beehiiv/Api/AdNetworkReports.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AccountSummary

- **Signature**: `AccountSummary(AccountSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `start_date` ← `StartDate`, `end_date` ← `EndDate`
- **Returns**: `AdNetworkReportSummary`
- **Error**: `ApiException<AccountSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AccountSummaryRequest` | `src/Beehiiv/Requests/AdNetworkReports/AccountSummaryRequest.cs` |
| `AdNetworkReportSummary` | `src/Beehiiv/Models/AdNetworkReportSummary.cs` |
| `AccountSummaryError` | `src/Beehiiv/Errors/AccountSummaryError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Index2

- **Signature**: `Index2(Index2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `page` ← `Page`, `start_date` ← `StartDate`, `end_date` ← `EndDate`
- **Returns**: `AdNetworkReportsGetResponse`
- **Error**: `ApiException<Index2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index2Request` | `src/Beehiiv/Requests/AdNetworkReports/Index2Request.cs` |
| `AdNetworkReportsGetResponse` | `src/Beehiiv/Models/AdNetworkReportsGetResponse.cs` |
| `Index2Error` | `src/Beehiiv/Errors/Index2Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Summary

- **Signature**: `Summary(SummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `start_date` ← `StartDate`, `end_date` ← `EndDate`
- **Returns**: `AdNetworkReportSummary`
- **Error**: `ApiException<SummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SummaryRequest` | `src/Beehiiv/Requests/AdNetworkReports/SummaryRequest.cs` |
| `AdNetworkReportSummary` | `src/Beehiiv/Models/AdNetworkReportSummary.cs` |
| `SummaryError` | `src/Beehiiv/Errors/SummaryError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

