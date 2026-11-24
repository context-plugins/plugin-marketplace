<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.Reports` · Source: `src/DidLogic/Api/Reports.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AsrReportShow

- **Auth**: `options.BearerAuth`
- **Signature**: `AsrReportShow(AsrReportShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StartDate`, `EndDate`
- **Query params (wire ← C#)**: `start_date` ← `StartDate`, `end_date` ← `EndDate`
- **Returns**: `string`
- **Error**: `ApiException<AsrReportShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400] · `TryGetApiV1AsrReportResponse1([NotNullWhen(true)] out ApiV1AsrReportResponse1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AsrReportShowRequest` | `src/DidLogic/Requests/Reports/AsrReportShowRequest.cs` |
| `AsrReportShowError` | `src/DidLogic/Errors/AsrReportShowError.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |
| `ApiV1AsrReportResponse1` | `src/DidLogic/Models/AnyOf/ApiV1AsrReportResponse1.cs` |

### TransactionsIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `TransactionsIndex(TransactionsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StartDate`, `EndDate`, `Type`
- **Query params (wire ← C#)**: `start_date` ← `StartDate`, `end_date` ← `EndDate`, `type` ← `Type`
- **Returns**: `string`
- **Error**: `ApiException<TransactionsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400] · `TryGetApiV1Transactions403Error1([NotNullWhen(true)] out ApiV1Transactions403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionsIndexRequest` | `src/DidLogic/Requests/Reports/TransactionsIndexRequest.cs` |
| `TransactionsIndexError` | `src/DidLogic/Errors/TransactionsIndexError.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |
| `ApiV1Transactions403Error1` | `src/DidLogic/Models/ApiV1Transactions403Error1.cs` |

