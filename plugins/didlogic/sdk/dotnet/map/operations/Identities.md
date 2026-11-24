<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identities — operations

Accessor: `client.Identities` · Source: `src/DidLogic/Api/Identities.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### IdentitiesCreate

- **Auth**: `options.BearerAuth`
- **Signature**: `IdentitiesCreate(IdentitiesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV2IdentitiesResponse1`
- **Error**: `ApiException<IdentitiesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Identities401Error1([NotNullWhen(true)] out ApiV2Identities401Error1? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IdentitiesCreateRequest` | `src/DidLogic/Requests/Identities/IdentitiesCreateRequest.cs` |
| `ApiV2IdentitiesRequest` | `src/DidLogic/Models/ApiV2IdentitiesRequest.cs` |
| `ApiV2IdentitiesResponse1` | `src/DidLogic/Models/ApiV2IdentitiesResponse1.cs` |
| `IdentitiesCreateError` | `src/DidLogic/Errors/IdentitiesCreateError.cs` |
| `ApiV2Identities401Error1` | `src/DidLogic/Models/ApiV2Identities401Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### IdentitiesDestroy

- **Auth**: `options.BearerAuth`
- **Signature**: `IdentitiesDestroy(IdentitiesDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV2IdentitiesResponse2`
- **Error**: `ApiException<IdentitiesDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Identities401Error1([NotNullWhen(true)] out ApiV2Identities401Error1? value)` [401] · `TryGetApiV2Identities404Error1([NotNullWhen(true)] out ApiV2Identities404Error1? value)` [404] · `TryGetApiV2Identities422Error1([NotNullWhen(true)] out ApiV2Identities422Error1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IdentitiesDestroyRequest` | `src/DidLogic/Requests/Identities/IdentitiesDestroyRequest.cs` |
| `ApiV2IdentitiesResponse2` | `src/DidLogic/Models/ApiV2IdentitiesResponse2.cs` |
| `IdentitiesDestroyError` | `src/DidLogic/Errors/IdentitiesDestroyError.cs` |
| `ApiV2Identities401Error1` | `src/DidLogic/Models/ApiV2Identities401Error1.cs` |
| `ApiV2Identities404Error1` | `src/DidLogic/Models/ApiV2Identities404Error1.cs` |
| `ApiV2Identities422Error1` | `src/DidLogic/Models/ApiV2Identities422Error1.cs` |

### IdentitiesIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `IdentitiesIndex(IdentitiesIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `ids` ← `Ids`, `name` ← `Name`, `created_at_from` ← `CreatedAtFrom`, `created_at_to` ← `CreatedAtTo`, `order_by` ← `OrderBy`, `order` ← `Order`, `page` ← `Page`, `per_page` ← `PerPage`
- **Returns**: `ApiV2IdentitiesResponse`
- **Error**: `ApiException<IdentitiesIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2Identities401Error1([NotNullWhen(true)] out ApiV2Identities401Error1? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IdentitiesIndexRequest` | `src/DidLogic/Requests/Identities/IdentitiesIndexRequest.cs` |
| `Order` | `src/DidLogic/Models/Enums/Order.cs` |
| `ApiV2IdentitiesResponse` | `src/DidLogic/Models/ApiV2IdentitiesResponse.cs` |
| `IdentitiesIndexError` | `src/DidLogic/Errors/IdentitiesIndexError.cs` |
| `ApiV2Identities401Error1` | `src/DidLogic/Models/ApiV2Identities401Error1.cs` |

