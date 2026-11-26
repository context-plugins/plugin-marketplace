<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.Account` · Source: `src/Search1Api/Api/Account.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Usage

- **Auth**: `options.BearerAuth`
- **Signature**: `Usage(UsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `period` ← `Period`
- **Returns**: `UsageResponse`
- **Error**: `ApiException<UsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UsageRequest` | `src/Search1Api/Requests/Account/UsageRequest.cs` |
| `Period` | `src/Search1Api/Models/Enums/Period.cs` |
| `UsageResponse` | `src/Search1Api/Models/UsageResponse.cs` |
| `UsageError` | `src/Search1Api/Errors/UsageError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

