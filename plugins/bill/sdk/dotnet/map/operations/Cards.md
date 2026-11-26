<!-- Generated file — do not edit; regenerated with the SDK. -->

# Cards — operations

Accessor: `client.Cards` · Source: `src/Bill/Api/Cards.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBudgetCard

- **Signature**: `CreateBudgetCard(CreateBudgetCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CardResponseDto`
- **Error**: `ApiException<CreateBudgetCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBudgetCardRequest` | `src/Bill/Requests/Cards/CreateBudgetCardRequest.cs` |
| `CreateCardRequestDto` | `src/Bill/Models/CreateCardRequestDto.cs` |
| `CardResponseDto` | `src/Bill/Models/CardResponseDto.cs` |
| `CreateBudgetCardError` | `src/Bill/Errors/CreateBudgetCardError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteCard

- **Signature**: `DeleteCard(DeleteCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardId`
- **Query params (wire ← C#)**: `reason` ← `Reason`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCardRequest` | `src/Bill/Requests/Cards/DeleteCardRequest.cs` |
| `UserDeletedReasonType` | `src/Bill/Models/Enums/UserDeletedReasonType.cs` |
| `DeleteCardError` | `src/Bill/Errors/DeleteCardError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### FreezeCard

- **Signature**: `FreezeCard(FreezeCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardId`
- **Returns**: `CardResponseDto`
- **Error**: `ApiException<FreezeCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FreezeCardRequest` | `src/Bill/Requests/Cards/FreezeCardRequest.cs` |
| `CardResponseDto` | `src/Bill/Models/CardResponseDto.cs` |
| `FreezeCardError` | `src/Bill/Errors/FreezeCardError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetCard

- **Signature**: `GetCard(GetCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardId`
- **Returns**: `CardResponseDto`
- **Error**: `ApiException<GetCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCardRequest` | `src/Bill/Requests/Cards/GetCardRequest.cs` |
| `CardResponseDto` | `src/Bill/Models/CardResponseDto.cs` |
| `GetCardError` | `src/Bill/Errors/GetCardError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetPanJwt

- **Signature**: `GetPanJwt(GetPanJwtRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardId`
- **Returns**: `CardPanTokenResponseDto`
- **Error**: `ApiException<GetPanJwtError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPanJwtRequest` | `src/Bill/Requests/Cards/GetPanJwtRequest.cs` |
| `CardPanTokenResponseDto` | `src/Bill/Models/CardPanTokenResponseDto.cs` |
| `GetPanJwtError` | `src/Bill/Errors/GetPanJwtError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListCards

- **Signature**: `ListCards(ListCardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`
- **Returns**: `PaginationResponseDtoCardResponseDto`
- **Error**: `ApiException<ListCardsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCardsRequest` | `src/Bill/Requests/Cards/ListCardsRequest.cs` |
| `PaginationResponseDtoCardResponseDto` | `src/Bill/Models/PaginationResponseDtoCardResponseDto.cs` |
| `ListCardsError` | `src/Bill/Errors/ListCardsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UnfreezeCard

- **Signature**: `UnfreezeCard(UnfreezeCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardId`
- **Returns**: `CardResponseDto`
- **Error**: `ApiException<UnfreezeCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnfreezeCardRequest` | `src/Bill/Requests/Cards/UnfreezeCardRequest.cs` |
| `CardResponseDto` | `src/Bill/Models/CardResponseDto.cs` |
| `UnfreezeCardError` | `src/Bill/Errors/UnfreezeCardError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateCard

- **Signature**: `UpdateCard(UpdateCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardId`, `Body`
- **Returns**: `CardResponseDto`
- **Error**: `ApiException<UpdateCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCardRequest` | `src/Bill/Requests/Cards/UpdateCardRequest.cs` |
| `UpdateCardRequestDto` | `src/Bill/Models/UpdateCardRequestDto.cs` |
| `CardResponseDto` | `src/Bill/Models/CardResponseDto.cs` |
| `UpdateCardError` | `src/Bill/Errors/UpdateCardError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

