<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytic — operations

Accessor: `client.Analytic` · Source: `src/MrScraper/Api/Analytic.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1AnalyticStatuses

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiV1AnalyticStatuses(GetApiV1AnalyticStatusesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `apiTokenName` ← `ApiTokenName`, `domain` ← `Domain`, `endDate` ← `EndDate`, `startDate` ← `StartDate`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1AnalyticStatusesRequest` | `src/MrScraper/Requests/Analytic/GetApiV1AnalyticStatusesRequest.cs` |

