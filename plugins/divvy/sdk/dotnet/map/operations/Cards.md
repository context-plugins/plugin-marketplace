<!-- Generated file — do not edit; regenerated with the SDK. -->

# Cards — operations

Accessor: `client.Cards` · Source: `src/Divvy/Api/Cards.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBudgetCard

- **Signature**: `CreateBudgetCard(CreateBudgetCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CardResponseDto`
- **Error**: `ApiException<CreateBudgetCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBudgetCardRequest` | `src/Divvy/Requests/Cards/CreateBudgetCardRequest.cs` |
| `CreateCardRequestDto` | `src/Divvy/Models/CreateCardRequestDto.cs` |
| `CardResponseDto` | `src/Divvy/Models/CardResponseDto.cs` |
| `CreateBudgetCardError` | `src/Divvy/Errors/CreateBudgetCardError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### DeleteCard

- **Signature**: `DeleteCard(DeleteCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardId`
- **Query params (wire ← C#)**: `reason` ← `Reason`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCardRequest` | `src/Divvy/Requests/Cards/DeleteCardRequest.cs` |
| `UserDeletedReasonType` | `src/Divvy/Models/Enums/UserDeletedReasonType.cs` |
| `DeleteCardError` | `src/Divvy/Errors/DeleteCardError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### FreezeCard

- **Signature**: `FreezeCard(FreezeCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardId`
- **Returns**: `CardResponseDto`
- **Error**: `ApiException<FreezeCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FreezeCardRequest` | `src/Divvy/Requests/Cards/FreezeCardRequest.cs` |
| `CardResponseDto` | `src/Divvy/Models/CardResponseDto.cs` |
| `FreezeCardError` | `src/Divvy/Errors/FreezeCardError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetCard

- **Signature**: `GetCard(GetCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardId`
- **Returns**: `CardResponseDto`
- **Error**: `ApiException<GetCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCardRequest` | `src/Divvy/Requests/Cards/GetCardRequest.cs` |
| `CardResponseDto` | `src/Divvy/Models/CardResponseDto.cs` |
| `GetCardError` | `src/Divvy/Errors/GetCardError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetPanJwt

- **Signature**: `GetPanJwt(GetPanJwtRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardId`
- **Returns**: `CardPanTokenResponseDto`
- **Error**: `ApiException<GetPanJwtError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPanJwtRequest` | `src/Divvy/Requests/Cards/GetPanJwtRequest.cs` |
| `CardPanTokenResponseDto` | `src/Divvy/Models/CardPanTokenResponseDto.cs` |
| `GetPanJwtError` | `src/Divvy/Errors/GetPanJwtError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListCards

- **Signature**: `ListCards(ListCardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`
- **Returns**: `PaginationResponseDtoCardResponseDto`
- **Error**: `ApiException<ListCardsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCardsRequest` | `src/Divvy/Requests/Cards/ListCardsRequest.cs` |
| `PaginationResponseDtoCardResponseDto` | `src/Divvy/Models/PaginationResponseDtoCardResponseDto.cs` |
| `ListCardsError` | `src/Divvy/Errors/ListCardsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UnfreezeCard

- **Signature**: `UnfreezeCard(UnfreezeCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardId`
- **Returns**: `CardResponseDto`
- **Error**: `ApiException<UnfreezeCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnfreezeCardRequest` | `src/Divvy/Requests/Cards/UnfreezeCardRequest.cs` |
| `CardResponseDto` | `src/Divvy/Models/CardResponseDto.cs` |
| `UnfreezeCardError` | `src/Divvy/Errors/UnfreezeCardError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateCard

- **Signature**: `UpdateCard(UpdateCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CardId`, `Body`
- **Returns**: `CardResponseDto`
- **Error**: `ApiException<UpdateCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCardRequest` | `src/Divvy/Requests/Cards/UpdateCardRequest.cs` |
| `UpdateCardRequestDto` | `src/Divvy/Models/UpdateCardRequestDto.cs` |
| `CardResponseDto` | `src/Divvy/Models/CardResponseDto.cs` |
| `UpdateCardError` | `src/Divvy/Errors/UpdateCardError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

