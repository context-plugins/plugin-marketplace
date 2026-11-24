<!-- Generated file — do not edit; regenerated with the SDK. -->

# Cards — operations

Accessor: `client.cards` · Source: `src/resources/cards.ts` · 8 operations · Request and error types: namespace `Cards`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBudgetCard

- **Signature**: `createBudgetCard(request: Cards.CreateBudgetCardRequest, options?: RequestOptions): ApiPromise<CardResponseDto, Cards.CreateBudgetCardError>`
- **Wire**: `POST /v3/spend/cards`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CardResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Cards.CreateBudgetCardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Cards.CreateBudgetCardRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `CreateCardRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCardRequestDto` | `createCardRequestDtoSchema` | `src/models/create-card-request-dto.ts` |
| `CardResponseDto` | `cardResponseDtoSchema` | `src/models/card-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteCard

- **Signature**: `deleteCard(request: Cards.DeleteCardRequest, options?: RequestOptions): ApiPromise<undefined, Cards.DeleteCardError>`
- **Wire**: `DELETE /v3/spend/cards/{cardId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Cards.DeleteCardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Cards.DeleteCardRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cardId` | `path` | `string` | yes |
| `reason` | `query` | `UserDeletedReasonType` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserDeletedReasonType` | `userDeletedReasonTypeSchema` | `src/models/user-deleted-reason-type.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### freezeCard

- **Signature**: `freezeCard(request: Cards.FreezeCardRequest, options?: RequestOptions): ApiPromise<CardResponseDto, Cards.FreezeCardError>`
- **Wire**: `POST /v3/spend/cards/{cardId}/freeze`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CardResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Cards.FreezeCardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Cards.FreezeCardRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cardId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CardResponseDto` | `cardResponseDtoSchema` | `src/models/card-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getCard

- **Signature**: `getCard(request: Cards.GetCardRequest, options?: RequestOptions): ApiPromise<CardResponseDto, Cards.GetCardError>`
- **Wire**: `GET /v3/spend/cards/{cardId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CardResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Cards.GetCardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Cards.GetCardRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cardId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CardResponseDto` | `cardResponseDtoSchema` | `src/models/card-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getPanJwt

- **Signature**: `getPanJwt(request: Cards.GetPanJwtRequest, options?: RequestOptions): ApiPromise<CardPanTokenResponseDto, Cards.GetPanJwtError>`
- **Wire**: `GET /v3/spend/cards/{cardId}/pan-jwt`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CardPanTokenResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Cards.GetPanJwtError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Cards.GetPanJwtRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cardId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CardPanTokenResponseDto` | `cardPanTokenResponseDtoSchema` | `src/models/card-pan-token-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listCards

- **Signature**: `listCards(request?: Cards.ListCardsRequest, options?: RequestOptions): ApiPromise<PaginationResponseDtoCardResponseDto, Cards.ListCardsError>`
- **Wire**: `GET /v3/spend/cards`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginationResponseDtoCardResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Cards.ListCardsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Cards.ListCardsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `nextPage` | `query` | `string` | no |
| `prevPage` | `query` | `string` | no |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginationResponseDtoCardResponseDto` | `paginationResponseDtoCardResponseDtoSchema` | `src/models/pagination-response-dto-card-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### unfreezeCard

- **Signature**: `unfreezeCard(request: Cards.UnfreezeCardRequest, options?: RequestOptions): ApiPromise<CardResponseDto, Cards.UnfreezeCardError>`
- **Wire**: `POST /v3/spend/cards/{cardId}/unfreeze`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CardResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Cards.UnfreezeCardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Cards.UnfreezeCardRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cardId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CardResponseDto` | `cardResponseDtoSchema` | `src/models/card-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateCard

- **Signature**: `updateCard(request: Cards.UpdateCardRequest, options?: RequestOptions): ApiPromise<CardResponseDto, Cards.UpdateCardError>`
- **Wire**: `PATCH /v3/spend/cards/{cardId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CardResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Cards.UpdateCardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Cards.UpdateCardRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cardId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `UpdateCardRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCardRequestDto` | `updateCardRequestDtoSchema` | `src/models/update-card-request-dto.ts` |
| `CardResponseDto` | `cardResponseDtoSchema` | `src/models/card-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

