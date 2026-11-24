<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.items` · Source: `src/resources/items.ts` · 5 operations · Request and error types: namespace `Items`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createItem

- **Signature**: `createItem(request: Items.CreateItemRequest, options?: RequestOptions): ApiPromise<Item, Items.CreateItemError>`
- **Wire**: `POST /companies({company_id})/items`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Item`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Items.CreateItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.CreateItemRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `body` | `body` | — | `ItemCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemCreate` | `itemCreateSchema` | `src/models/item-create.ts` |
| `Item` | `itemSchema` | `src/models/item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteItem

- **Signature**: `deleteItem(request: Items.DeleteItemRequest, options?: RequestOptions): ApiPromise<undefined, Items.DeleteItemError>`
- **Wire**: `DELETE /companies({company_id})/items({item_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Items.DeleteItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.DeleteItemRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `itemId` | `path` | `item_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getItem

- **Signature**: `getItem(request: Items.GetItemRequest, options?: RequestOptions): ApiPromise<Item, Items.GetItemError>`
- **Wire**: `GET /companies({company_id})/items({item_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Item`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Items.GetItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.GetItemRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `itemId` | `path` | `item_id` | `string` | yes |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Item` | `itemSchema` | `src/models/item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listItems

- **Signature**: `listItems(request: Items.ListItemsRequest, options?: RequestOptions): ApiPromise<CompaniesApiItemsResponse, Items.ListItemsError>`
- **Wire**: `GET /companies({company_id})/items`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiItemsResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Items.ListItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.ListItemsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiItemsResponse` | `companiesApiItemsResponseSchema` | `src/models/companies-api-items-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateItem

- **Signature**: `updateItem(request: Items.UpdateItemRequest, options?: RequestOptions): ApiPromise<Item, Items.UpdateItemError>`
- **Wire**: `PATCH /companies({company_id})/items({item_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Item`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Items.UpdateItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.UpdateItemRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `itemId` | `path` | `item_id` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | yes |
| `body` | `body` | — | `ItemUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemUpdate` | `itemUpdateSchema` | `src/models/item-update.ts` |
| `Item` | `itemSchema` | `src/models/item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

