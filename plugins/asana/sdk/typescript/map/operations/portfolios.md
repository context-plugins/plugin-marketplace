<!-- Generated file — do not edit; regenerated with the SDK. -->

# Portfolios — operations

Accessor: `client.portfolios` · Source: `src/resources/portfolios.ts` · 12 operations · Request and error types: namespace `Portfolios`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addCustomFieldSettingForPortfolio

- **Signature**: `addCustomFieldSettingForPortfolio(request: Portfolios.AddCustomFieldSettingForPortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosAddCustomFieldSettingResponse, Portfolios.AddCustomFieldSettingForPortfolioError>`
- **Wire**: `POST /portfolios/{portfolio_gid}/addCustomFieldSetting`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PortfoliosAddCustomFieldSettingResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Portfolios.AddCustomFieldSettingForPortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolios.AddCustomFieldSettingForPortfolioRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portfolioGid` | `path` | `portfolio_gid` | `string` | yes |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no |
| `body` | `body` | — | `PortfoliosAddCustomFieldSettingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosAddCustomFieldSettingRequest` | `portfoliosAddCustomFieldSettingRequestSchema` | `src/models/portfolios-add-custom-field-setting-request.ts` |
| `PortfoliosAddCustomFieldSettingResponse` | `portfoliosAddCustomFieldSettingResponseSchema` | `src/models/portfolios-add-custom-field-setting-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### addItemForPortfolio

- **Signature**: `addItemForPortfolio(request: Portfolios.AddItemForPortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosAddItemResponse, Portfolios.AddItemForPortfolioError>`
- **Wire**: `POST /portfolios/{portfolio_gid}/addItem`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PortfoliosAddItemResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Portfolios.AddItemForPortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolios.AddItemForPortfolioRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `portfolioGid` | `path` | `portfolio_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `PortfoliosAddItemRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosAddItemRequest` | `portfoliosAddItemRequestSchema` | `src/models/portfolios-add-item-request.ts` |
| `PortfoliosAddItemResponse` | `portfoliosAddItemResponseSchema` | `src/models/portfolios-add-item-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### addMembersForPortfolio

- **Signature**: `addMembersForPortfolio(request: Portfolios.AddMembersForPortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosAddMembersResponse, Portfolios.AddMembersForPortfolioError>`
- **Wire**: `POST /portfolios/{portfolio_gid}/addMembers`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PortfoliosAddMembersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Portfolios.AddMembersForPortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolios.AddMembersForPortfolioRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `portfolioGid` | `path` | `portfolio_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `PortfoliosAddMembersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosAddMembersRequest` | `portfoliosAddMembersRequestSchema` | `src/models/portfolios-add-members-request.ts` |
| `PortfoliosAddMembersResponse` | `portfoliosAddMembersResponseSchema` | `src/models/portfolios-add-members-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createPortfolio

- **Signature**: `createPortfolio(request: Portfolios.CreatePortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosResponse1, Portfolios.CreatePortfolioError>`
- **Wire**: `POST /portfolios`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PortfoliosResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Portfolios.CreatePortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolios.CreatePortfolioRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `PortfoliosRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosRequest` | `portfoliosRequestSchema` | `src/models/portfolios-request.ts` |
| `PortfoliosResponse1` | `portfoliosResponse1Schema` | `src/models/portfolios-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deletePortfolio

- **Signature**: `deletePortfolio(request: Portfolios.DeletePortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosResponse4, Portfolios.DeletePortfolioError>`
- **Wire**: `DELETE /portfolios/{portfolio_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PortfoliosResponse4`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Portfolios.DeletePortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolios.DeletePortfolioRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `portfolioGid` | `path` | `portfolio_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosResponse4` | `portfoliosResponse4Schema` | `src/models/portfolios-response4.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getItemsForPortfolio

- **Signature**: `getItemsForPortfolio(request: Portfolios.GetItemsForPortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosItemsResponse, Portfolios.GetItemsForPortfolioError>`
- **Wire**: `GET /portfolios/{portfolio_gid}/items`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PortfoliosItemsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Portfolios.GetItemsForPortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolios.GetItemsForPortfolioRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `portfolioGid` | `path` | `portfolio_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosItemsResponse` | `portfoliosItemsResponseSchema` | `src/models/portfolios-items-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getPortfolio

- **Signature**: `getPortfolio(request: Portfolios.GetPortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosResponse1, Portfolios.GetPortfolioError>`
- **Wire**: `GET /portfolios/{portfolio_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PortfoliosResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Portfolios.GetPortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolios.GetPortfolioRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `portfolioGid` | `path` | `portfolio_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosResponse1` | `portfoliosResponse1Schema` | `src/models/portfolios-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getPortfolios

- **Signature**: `getPortfolios(request: Portfolios.GetPortfoliosRequest, options?: RequestOptions): ApiPromise<PortfoliosResponse, Portfolios.GetPortfoliosError>`
- **Wire**: `GET /portfolios`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PortfoliosResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Portfolios.GetPortfoliosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolios.GetPortfoliosRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspace` | `query` | — | `string` | yes | — |
| `owner` | `query` | — | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosResponse` | `portfoliosResponseSchema` | `src/models/portfolios-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeCustomFieldSettingForPortfolio

- **Signature**: `removeCustomFieldSettingForPortfolio(request: Portfolios.RemoveCustomFieldSettingForPortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosRemoveCustomFieldSettingResponse, Portfolios.RemoveCustomFieldSettingForPortfolioError>`
- **Wire**: `POST /portfolios/{portfolio_gid}/removeCustomFieldSetting`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PortfoliosRemoveCustomFieldSettingResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Portfolios.RemoveCustomFieldSettingForPortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolios.RemoveCustomFieldSettingForPortfolioRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portfolioGid` | `path` | `portfolio_gid` | `string` | yes |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no |
| `body` | `body` | — | `PortfoliosRemoveCustomFieldSettingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosRemoveCustomFieldSettingRequest` | `portfoliosRemoveCustomFieldSettingRequestSchema` | `src/models/portfolios-remove-custom-field-setting-request.ts` |
| `PortfoliosRemoveCustomFieldSettingResponse` | `portfoliosRemoveCustomFieldSettingResponseSchema` | `src/models/portfolios-remove-custom-field-setting-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeItemForPortfolio

- **Signature**: `removeItemForPortfolio(request: Portfolios.RemoveItemForPortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosRemoveItemResponse, Portfolios.RemoveItemForPortfolioError>`
- **Wire**: `POST /portfolios/{portfolio_gid}/removeItem`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PortfoliosRemoveItemResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Portfolios.RemoveItemForPortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolios.RemoveItemForPortfolioRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `portfolioGid` | `path` | `portfolio_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `PortfoliosRemoveItemRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosRemoveItemRequest` | `portfoliosRemoveItemRequestSchema` | `src/models/portfolios-remove-item-request.ts` |
| `PortfoliosRemoveItemResponse` | `portfoliosRemoveItemResponseSchema` | `src/models/portfolios-remove-item-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeMembersForPortfolio

- **Signature**: `removeMembersForPortfolio(request: Portfolios.RemoveMembersForPortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosRemoveMembersResponse, Portfolios.RemoveMembersForPortfolioError>`
- **Wire**: `POST /portfolios/{portfolio_gid}/removeMembers`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PortfoliosRemoveMembersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Portfolios.RemoveMembersForPortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolios.RemoveMembersForPortfolioRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `portfolioGid` | `path` | `portfolio_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `PortfoliosRemoveMembersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosRemoveMembersRequest` | `portfoliosRemoveMembersRequestSchema` | `src/models/portfolios-remove-members-request.ts` |
| `PortfoliosRemoveMembersResponse` | `portfoliosRemoveMembersResponseSchema` | `src/models/portfolios-remove-members-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updatePortfolio

- **Signature**: `updatePortfolio(request: Portfolios.UpdatePortfolioRequest, options?: RequestOptions): ApiPromise<PortfoliosResponse1, Portfolios.UpdatePortfolioError>`
- **Wire**: `PUT /portfolios/{portfolio_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PortfoliosResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Portfolios.UpdatePortfolioError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Portfolios.UpdatePortfolioRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `portfolioGid` | `path` | `portfolio_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `PortfoliosRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortfoliosRequest` | `portfoliosRequestSchema` | `src/models/portfolios-request.ts` |
| `PortfoliosResponse1` | `portfoliosResponse1Schema` | `src/models/portfolios-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

