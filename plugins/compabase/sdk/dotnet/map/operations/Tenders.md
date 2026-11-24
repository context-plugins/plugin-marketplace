<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tenders — operations

Accessor: `client.Tenders` · Source: `src/Compabase/Api/Tenders.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTenders

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetTenders(GetTendersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `industry` ← `Industry`, `source` ← `Source`, `region` ← `Region`, `city` ← `City`, `postal` ← `Postal`, `kind` ← `Kind`, `value_min` ← `ValueMin`, `value_max` ← `ValueMax`, `currency` ← `Currency`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `object`
- **Error**: `ApiException<GetTendersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTendersRequest` | `src/Compabase/Requests/Tenders/GetTendersRequest.cs` |
| `Status` | `src/Compabase/Models/Enums/Status.cs` |
| `Source` | `src/Compabase/Models/Enums/Source.cs` |
| `Kind` | `src/Compabase/Models/Enums/Kind.cs` |
| `Currency` | `src/Compabase/Models/Enums/Currency.cs` |
| `Limit` | `src/Compabase/Models/Enums/Limit.cs` |
| `GetTendersError` | `src/Compabase/Errors/GetTendersError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetTendersAwards

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetTendersAwards(GetTendersAwardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `industry` ← `Industry`, `min` ← `Min`
- **Returns**: `object`
- **Error**: `ApiException<GetTendersAwardsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTendersAwardsRequest` | `src/Compabase/Requests/Tenders/GetTendersAwardsRequest.cs` |
| `Industry` | `src/Compabase/Models/Enums/Industry.cs` |
| `Min` | `src/Compabase/Models/Enums/Min.cs` |
| `GetTendersAwardsError` | `src/Compabase/Errors/GetTendersAwardsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

