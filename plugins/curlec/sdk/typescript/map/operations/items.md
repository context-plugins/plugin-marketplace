<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.items` · Source: `src/resources/items.ts` · 5 operations · Request and error types: namespace `Items`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createItem

- **Signature**: `createItem(request: Items.CreateItemRequest, options?: RequestOptions): ApiPromise<Item, Items.CreateItemError>`
- **Wire**: `POST /items`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Item`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Items.CreateItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.CreateItemRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemsRequest` | `itemsRequestSchema` | `src/models/items-request.ts` |
| `Item` | `itemSchema` | `src/models/item.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteItem

- **Signature**: `deleteItem(request: Items.DeleteItemRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Items.DeleteItemError>`
- **Wire**: `DELETE /items/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Items.DeleteItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.DeleteItemRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchItem

- **Signature**: `fetchItem(request: Items.FetchItemRequest, options?: RequestOptions): ApiPromise<Item, Items.FetchItemError>`
- **Wire**: `GET /items/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Item`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Items.FetchItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.FetchItemRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Item` | `itemSchema` | `src/models/item.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listItems

- **Signature**: `listItems(request?: Items.ListItemsRequest, options?: RequestOptions): ApiPromise<ItemsResponse, Items.ListItemsError>`
- **Wire**: `GET /items`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ItemsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Items.ListItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.ListItemsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `count` | `query` | `number` | no | `10` |
| `skip` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemsResponse` | `itemsResponseSchema` | `src/models/items-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateItem

- **Signature**: `updateItem(request: Items.UpdateItemRequest, options?: RequestOptions): ApiPromise<Item, Items.UpdateItemError>`
- **Wire**: `PATCH /items/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Item`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Items.UpdateItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.UpdateItemRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ItemsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemsRequest1` | `itemsRequest1Schema` | `src/models/items-request1.ts` |
| `Item` | `itemSchema` | `src/models/item.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

