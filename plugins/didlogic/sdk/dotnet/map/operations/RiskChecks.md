<!-- Generated file — do not edit; regenerated with the SDK. -->

# RiskChecks — operations

Accessor: `client.RiskChecks` · Source: `src/DidLogic/Api/RiskChecks.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### NumbersRiskChecksCreate

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersRiskChecksCreate(NumbersRiskChecksCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV2NumbersRiskChecksResponse1`
- **Error**: `ApiException<NumbersRiskChecksCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2NumbersRiskChecks401Error1([NotNullWhen(true)] out ApiV2NumbersRiskChecks401Error1? value)` [401] · `TryGetApiV2NumbersRiskChecks403Error1([NotNullWhen(true)] out ApiV2NumbersRiskChecks403Error1? value)` [403] · `TryGetApiV2NumbersRiskChecksResponse21([NotNullWhen(true)] out ApiV2NumbersRiskChecksResponse21? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersRiskChecksCreateRequest` | `src/DidLogic/Requests/RiskChecks/NumbersRiskChecksCreateRequest.cs` |
| `ApiV2NumbersRiskChecksRequest` | `src/DidLogic/Models/ApiV2NumbersRiskChecksRequest.cs` |
| `ApiV2NumbersRiskChecksResponse1` | `src/DidLogic/Models/ApiV2NumbersRiskChecksResponse1.cs` |
| `NumbersRiskChecksCreateError` | `src/DidLogic/Errors/NumbersRiskChecksCreateError.cs` |
| `ApiV2NumbersRiskChecks401Error1` | `src/DidLogic/Models/ApiV2NumbersRiskChecks401Error1.cs` |
| `ApiV2NumbersRiskChecks403Error1` | `src/DidLogic/Models/ApiV2NumbersRiskChecks403Error1.cs` |
| `ApiV2NumbersRiskChecksResponse21` | `src/DidLogic/Models/AnyOf/ApiV2NumbersRiskChecksResponse21.cs` |

### NumbersRiskChecksIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersRiskChecksIndex(NumbersRiskChecksIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `task_ids` ← `TaskIds`, `status` ← `Status`, `created_at_from` ← `CreatedAtFrom`, `created_at_to` ← `CreatedAtTo`, `processed_at_from` ← `ProcessedAtFrom`, `processed_at_to` ← `ProcessedAtTo`, `order_by` ← `OrderBy`, `order` ← `Order`, `page` ← `Page`, `per_page` ← `PerPage`
- **Returns**: `ApiV2NumbersRiskChecksResponse`
- **Error**: `ApiException<NumbersRiskChecksIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2NumbersRiskChecks401Error1([NotNullWhen(true)] out ApiV2NumbersRiskChecks401Error1? value)` [401] · `TryGetApiV2NumbersRiskChecks403Error1([NotNullWhen(true)] out ApiV2NumbersRiskChecks403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersRiskChecksIndexRequest` | `src/DidLogic/Requests/RiskChecks/NumbersRiskChecksIndexRequest.cs` |
| `StatusDidlogicComRiskChecksApi` | `src/DidLogic/Models/Enums/StatusDidlogicComRiskChecksApi.cs` |
| `Order` | `src/DidLogic/Models/Enums/Order.cs` |
| `ApiV2NumbersRiskChecksResponse` | `src/DidLogic/Models/ApiV2NumbersRiskChecksResponse.cs` |
| `NumbersRiskChecksIndexError` | `src/DidLogic/Errors/NumbersRiskChecksIndexError.cs` |
| `ApiV2NumbersRiskChecks401Error1` | `src/DidLogic/Models/ApiV2NumbersRiskChecks401Error1.cs` |
| `ApiV2NumbersRiskChecks403Error1` | `src/DidLogic/Models/ApiV2NumbersRiskChecks403Error1.cs` |

### NumbersRiskChecksLogs

- **Auth**: `options.BearerAuth`
- **Signature**: `NumbersRiskChecksLogs(NumbersRiskChecksLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `ids` ← `Ids`, `task_ids` ← `TaskIds`, `number` ← `Number`, `status` ← `Status`, `risk_level` ← `RiskLevel`, `created_at_from` ← `CreatedAtFrom`, `created_at_to` ← `CreatedAtTo`, `processed_at_from` ← `ProcessedAtFrom`, `processed_at_to` ← `ProcessedAtTo`, `order_by` ← `OrderBy`, `order` ← `Order`, `page` ← `Page`, `per_page` ← `PerPage`
- **Returns**: `ApiV2NumbersRiskChecksLogsResponse`
- **Error**: `ApiException<NumbersRiskChecksLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2NumbersRiskChecksLogs401Error1([NotNullWhen(true)] out ApiV2NumbersRiskChecksLogs401Error1? value)` [401] · `TryGetApiV2NumbersRiskChecksLogs403Error1([NotNullWhen(true)] out ApiV2NumbersRiskChecksLogs403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersRiskChecksLogsRequest` | `src/DidLogic/Requests/RiskChecks/NumbersRiskChecksLogsRequest.cs` |
| `StatusDidlogicComRiskChecksApi` | `src/DidLogic/Models/Enums/StatusDidlogicComRiskChecksApi.cs` |
| `RiskLevel` | `src/DidLogic/Models/Enums/RiskLevel.cs` |
| `Order` | `src/DidLogic/Models/Enums/Order.cs` |
| `ApiV2NumbersRiskChecksLogsResponse` | `src/DidLogic/Models/ApiV2NumbersRiskChecksLogsResponse.cs` |
| `NumbersRiskChecksLogsError` | `src/DidLogic/Errors/NumbersRiskChecksLogsError.cs` |
| `ApiV2NumbersRiskChecksLogs401Error1` | `src/DidLogic/Models/ApiV2NumbersRiskChecksLogs401Error1.cs` |
| `ApiV2NumbersRiskChecksLogs403Error1` | `src/DidLogic/Models/ApiV2NumbersRiskChecksLogs403Error1.cs` |

