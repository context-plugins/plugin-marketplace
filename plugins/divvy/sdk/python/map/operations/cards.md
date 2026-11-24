<!-- Generated file — do not edit; regenerated with the SDK. -->

# Cards — operations

Accessor: `client.cards` · Source: `divvy/apis/cards.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.cards.create_budget_card

- **Route**: `POST /v3/spend/cards`
- **Server**: `default`
- **Signature**: `def create_budget_card(body: CreateCardRequestDto | CreateCardRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `CardResponseDto`
- **Returns (raw)**: `ApiResult[CardResponseDto, CreateBudgetCardErrorBody]`
- **Error**: `CreateBudgetCardErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCardRequestDto` | `divvy/models/create_card_request_dto.py` |
| `CreateCardRequestDtoDict` | `divvy/models/create_card_request_dto.py` |
| `CardResponseDto` | `divvy/models/card_response_dto.py` |
| `CreateBudgetCardErrorBody` | `divvy/errors/create_budget_card_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.cards.delete_card

- **Route**: `DELETE /v3/spend/cards/{cardId}`
- **Server**: `default`
- **Signature**: `def delete_card(card_id: str, *, reason: UserDeletedReasonTypeOrStr | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `card_id`
- **Params**: `card_id` — path `cardId` · `reason` — query · `api_token` — header `apiToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCardErrorBody]`
- **Error**: `DeleteCardErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserDeletedReasonTypeOrStr` | `divvy/models/enums/user_deleted_reason_type.py` |
| `DeleteCardErrorBody` | `divvy/errors/delete_card_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.cards.freeze_card

- **Route**: `POST /v3/spend/cards/{cardId}/freeze`
- **Server**: `default`
- **Signature**: `def freeze_card(card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `card_id`
- **Params**: `card_id` — path `cardId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `CardResponseDto`
- **Returns (raw)**: `ApiResult[CardResponseDto, FreezeCardErrorBody]`
- **Error**: `FreezeCardErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CardResponseDto` | `divvy/models/card_response_dto.py` |
| `FreezeCardErrorBody` | `divvy/errors/freeze_card_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.cards.get_card

- **Route**: `GET /v3/spend/cards/{cardId}`
- **Server**: `default`
- **Signature**: `def get_card(card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `card_id`
- **Params**: `card_id` — path `cardId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `CardResponseDto`
- **Returns (raw)**: `ApiResult[CardResponseDto, GetCardErrorBody]`
- **Error**: `GetCardErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CardResponseDto` | `divvy/models/card_response_dto.py` |
| `GetCardErrorBody` | `divvy/errors/get_card_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.cards.get_pan_jwt

- **Route**: `GET /v3/spend/cards/{cardId}/pan-jwt`
- **Server**: `default`
- **Signature**: `def get_pan_jwt(card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `card_id`
- **Params**: `card_id` — path `cardId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `CardPanTokenResponseDto`
- **Returns (raw)**: `ApiResult[CardPanTokenResponseDto, GetPanJwtErrorBody]`
- **Error**: `GetPanJwtErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CardPanTokenResponseDto` | `divvy/models/card_pan_token_response_dto.py` |
| `GetPanJwtErrorBody` | `divvy/errors/get_pan_jwt_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.cards.list_cards

- **Route**: `GET /v3/spend/cards`
- **Server**: `default`
- **Signature**: `def list_cards(*, next_page: str | None = None, prev_page: str | None = None, max_: int | None = None, sort: str | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `next_page` — query `nextPage` · `prev_page` — query `prevPage` · `max_` — query `max` · `sort` — query · `filters` — query · `api_token` — header `apiToken`
- **Returns (parsed)**: `PaginationResponseDtoCardResponseDto`
- **Returns (raw)**: `ApiResult[PaginationResponseDtoCardResponseDto, ListCardsErrorBody]`
- **Error**: `ListCardsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginationResponseDtoCardResponseDto` | `divvy/models/pagination_response_dto_card_response_dto.py` |
| `ListCardsErrorBody` | `divvy/errors/list_cards_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.cards.unfreeze_card

- **Route**: `POST /v3/spend/cards/{cardId}/unfreeze`
- **Server**: `default`
- **Signature**: `def unfreeze_card(card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `card_id`
- **Params**: `card_id` — path `cardId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `CardResponseDto`
- **Returns (raw)**: `ApiResult[CardResponseDto, UnfreezeCardErrorBody]`
- **Error**: `UnfreezeCardErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CardResponseDto` | `divvy/models/card_response_dto.py` |
| `UnfreezeCardErrorBody` | `divvy/errors/unfreeze_card_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.cards.update_card

- **Route**: `PATCH /v3/spend/cards/{cardId}`
- **Server**: `default`
- **Signature**: `def update_card(card_id: str, body: UpdateCardRequestDto | UpdateCardRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `card_id`, `body`
- **Params**: `card_id` — path `cardId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `CardResponseDto`
- **Returns (raw)**: `ApiResult[CardResponseDto, UpdateCardErrorBody]`
- **Error**: `UpdateCardErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCardRequestDto` | `divvy/models/update_card_request_dto.py` |
| `UpdateCardRequestDtoDict` | `divvy/models/update_card_request_dto.py` |
| `CardResponseDto` | `divvy/models/card_response_dto.py` |
| `UpdateCardErrorBody` | `divvy/errors/update_card_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

