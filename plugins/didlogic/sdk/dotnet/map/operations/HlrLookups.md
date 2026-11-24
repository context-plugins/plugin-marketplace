<!-- Generated file — do not edit; regenerated with the SDK. -->

# HlrLookups — operations

Accessor: `client.HlrLookups` · Source: `src/DidLogic/Api/HlrLookups.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### HlrCreate

- **Auth**: `options.BearerAuth`
- **Signature**: `HlrCreate(HlrCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV2HlrResponse`
- **Error**: `ApiException<HlrCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Hlr401Error1([NotNullWhen(true)] out ApiV2Hlr401Error1? value)` [401] · `TryGetApiV2Hlr403Error1([NotNullWhen(true)] out ApiV2Hlr403Error1? value)` [403] · `TryGetApiV2Hlr422Error1([NotNullWhen(true)] out ApiV2Hlr422Error1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HlrCreateRequest` | `src/DidLogic/Requests/HlrLookups/HlrCreateRequest.cs` |
| `ApiV2HlrRequest` | `src/DidLogic/Models/ApiV2HlrRequest.cs` |
| `ApiV2HlrResponse` | `src/DidLogic/Models/ApiV2HlrResponse.cs` |
| `HlrCreateError` | `src/DidLogic/Errors/HlrCreateError.cs` |
| `ApiV2Hlr401Error1` | `src/DidLogic/Models/ApiV2Hlr401Error1.cs` |
| `ApiV2Hlr403Error1` | `src/DidLogic/Models/ApiV2Hlr403Error1.cs` |
| `ApiV2Hlr422Error1` | `src/DidLogic/Models/ApiV2Hlr422Error1.cs` |

### HlrHistory

- **Auth**: `options.BearerAuth`
- **Signature**: `HlrHistory(HlrHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `ids` ← `Ids`, `task_ids` ← `TaskIds`, `number` ← `Number`, `number_start` ← `NumberStart`, `status` ← `Status`, `created_at_from` ← `CreatedAtFrom`, `created_at_to` ← `CreatedAtTo`, `processed_at_from` ← `ProcessedAtFrom`, `processed_at_to` ← `ProcessedAtTo`, `order_by` ← `OrderBy`, `order` ← `Order`, `page` ← `Page`, `per_page` ← `PerPage`
- **Returns**: `ApiV2HlrHistoryResponse`
- **Error**: `ApiException<HlrHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2HlrHistory401Error1([NotNullWhen(true)] out ApiV2HlrHistory401Error1? value)` [401] · `TryGetApiV2HlrHistory403Error1([NotNullWhen(true)] out ApiV2HlrHistory403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HlrHistoryRequest` | `src/DidLogic/Requests/HlrLookups/HlrHistoryRequest.cs` |
| `Status1` | `src/DidLogic/Models/Enums/Status1.cs` |
| `Order` | `src/DidLogic/Models/Enums/Order.cs` |
| `ApiV2HlrHistoryResponse` | `src/DidLogic/Models/ApiV2HlrHistoryResponse.cs` |
| `HlrHistoryError` | `src/DidLogic/Errors/HlrHistoryError.cs` |
| `ApiV2HlrHistory401Error1` | `src/DidLogic/Models/ApiV2HlrHistory401Error1.cs` |
| `ApiV2HlrHistory403Error1` | `src/DidLogic/Models/ApiV2HlrHistory403Error1.cs` |

