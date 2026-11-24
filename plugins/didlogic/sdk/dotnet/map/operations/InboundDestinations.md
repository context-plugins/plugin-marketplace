<!-- Generated file — do not edit; regenerated with the SDK. -->

# InboundDestinations — operations

Accessor: `client.InboundDestinations` · Source: `src/DidLogic/Api/InboundDestinations.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PurchasesDestinationsCreate

- **Auth**: `options.BearerAuth`
- **Signature**: `PurchasesDestinationsCreate(PurchasesDestinationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PurchaseId`, `Body`
- **Returns**: `ApiV1PurchasesDestinationsResponse1`
- **Error**: `ApiException<PurchasesDestinationsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PurchasesDestinations403Error1([NotNullWhen(true)] out ApiV1PurchasesDestinations403Error1? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PurchasesDestinationsCreateRequest` | `src/DidLogic/Requests/InboundDestinations/PurchasesDestinationsCreateRequest.cs` |
| `ApiV1PurchasesDestinationsRequest` | `src/DidLogic/Models/ApiV1PurchasesDestinationsRequest.cs` |
| `ApiV1PurchasesDestinationsResponse1` | `src/DidLogic/Models/ApiV1PurchasesDestinationsResponse1.cs` |
| `PurchasesDestinationsCreateError` | `src/DidLogic/Errors/PurchasesDestinationsCreateError.cs` |
| `ApiV1PurchasesDestinations403Error1` | `src/DidLogic/Models/ApiV1PurchasesDestinations403Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### PurchasesDestinationsDestroy

- **Auth**: `options.BearerAuth`
- **Signature**: `PurchasesDestinationsDestroy(PurchasesDestinationsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PurchaseId`, `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PurchasesDestinationsDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PurchasesDestinations403Error1([NotNullWhen(true)] out ApiV1PurchasesDestinations403Error1? value)` [403] · `TryGetApiV1PurchasesDestinationsResponse31([NotNullWhen(true)] out ApiV1PurchasesDestinationsResponse31? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PurchasesDestinationsDestroyRequest` | `src/DidLogic/Requests/InboundDestinations/PurchasesDestinationsDestroyRequest.cs` |
| `PurchasesDestinationsDestroyError` | `src/DidLogic/Errors/PurchasesDestinationsDestroyError.cs` |
| `ApiV1PurchasesDestinations403Error1` | `src/DidLogic/Models/ApiV1PurchasesDestinations403Error1.cs` |
| `ApiV1PurchasesDestinationsResponse31` | `src/DidLogic/Models/AnyOf/ApiV1PurchasesDestinationsResponse31.cs` |

### PurchasesDestinationsIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `PurchasesDestinationsIndex(PurchasesDestinationsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PurchaseId`
- **Returns**: `ApiV1PurchasesDestinationsResponse`
- **Error**: `ApiException<PurchasesDestinationsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PurchasesDestinations403Error1([NotNullWhen(true)] out ApiV1PurchasesDestinations403Error1? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PurchasesDestinationsIndexRequest` | `src/DidLogic/Requests/InboundDestinations/PurchasesDestinationsIndexRequest.cs` |
| `ApiV1PurchasesDestinationsResponse` | `src/DidLogic/Models/ApiV1PurchasesDestinationsResponse.cs` |
| `PurchasesDestinationsIndexError` | `src/DidLogic/Errors/PurchasesDestinationsIndexError.cs` |
| `ApiV1PurchasesDestinations403Error1` | `src/DidLogic/Models/ApiV1PurchasesDestinations403Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### PurchasesDestinationsUpdate

- **Auth**: `options.BearerAuth`
- **Signature**: `PurchasesDestinationsUpdate(PurchasesDestinationsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PurchaseId`, `Id`, `Body`
- **Returns**: `ApiV1PurchasesDestinationsResponse2`
- **Error**: `ApiException<PurchasesDestinationsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PurchasesDestinations403Error1([NotNullWhen(true)] out ApiV1PurchasesDestinations403Error1? value)` [403] · `TryGetApiV1PurchasesDestinationsResponse31([NotNullWhen(true)] out ApiV1PurchasesDestinationsResponse31? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PurchasesDestinationsUpdateRequest` | `src/DidLogic/Requests/InboundDestinations/PurchasesDestinationsUpdateRequest.cs` |
| `ApiV1PurchasesDestinationsRequest1` | `src/DidLogic/Models/ApiV1PurchasesDestinationsRequest1.cs` |
| `ApiV1PurchasesDestinationsResponse2` | `src/DidLogic/Models/ApiV1PurchasesDestinationsResponse2.cs` |
| `PurchasesDestinationsUpdateError` | `src/DidLogic/Errors/PurchasesDestinationsUpdateError.cs` |
| `ApiV1PurchasesDestinations403Error1` | `src/DidLogic/Models/ApiV1PurchasesDestinations403Error1.cs` |
| `ApiV1PurchasesDestinationsResponse31` | `src/DidLogic/Models/AnyOf/ApiV1PurchasesDestinationsResponse31.cs` |

