<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deals — operations

Accessor: `client.deals` · Source: `src/resources/deals.ts` · 6 operations · Request types: namespace `Deals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `relm-crm`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDeal

- **Signature**: `createDeal(request: Deals.CreateDealRequest, options?: RequestOptions): ApiPromise<Deal, ApiError>`
- **Wire**: `POST /deals`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Deal`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Deals.CreateDealRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `DealInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DealInput` | `dealInputSchema` | `src/models/deal-input.ts` |
| `Deal` | `dealSchema` | `src/models/deal.ts` |

### deleteDeal

- **Signature**: `deleteDeal(request: Deals.DeleteDealRequest, options?: RequestOptions): ApiPromise<Deleted, ApiError>`
- **Wire**: `DELETE /deals/{id}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Deleted`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Deals.DeleteDealRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Deleted` | `deletedSchema` | `src/models/deleted.ts` |

### getDeal

- **Signature**: `getDeal(request: Deals.GetDealRequest, options?: RequestOptions): ApiPromise<Deal, ApiError>`
- **Wire**: `GET /deals/{id}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Deal`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Deals.GetDealRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Deal` | `dealSchema` | `src/models/deal.ts` |

### listDeals

- **Signature**: `listDeals(request?: Deals.ListDealsRequest, options?: RequestOptions): ApiPromise<DealList, ApiError>`
- **Wire**: `GET /deals`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DealList`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Deals.ListDealsRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `25` |
| `cursor` | `query` | — | `string` | no | — |
| `includeDeleted` | `query` | `include_deleted` | `boolean` | no | — |
| `q` | `query` | — | `string` | no | — |
| `pipeline` | `query` | — | `string` | no | — |
| `pipelineId` | `query` | `pipeline_id` | `string` | no | — |
| `stage` | `query` | — | `string` | no | — |
| `companyId` | `query` | `company_id` | `string` | no | — |
| `primaryContactId` | `query` | `primary_contact_id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DealList` | `dealListSchema` | `src/models/deal-list.ts` |

### restoreDeal

- **Signature**: `restoreDeal(request: Deals.RestoreDealRequest, options?: RequestOptions): ApiPromise<Deal, ApiError>`
- **Wire**: `POST /deals/{id}/restore`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Deal`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Deals.RestoreDealRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Deal` | `dealSchema` | `src/models/deal.ts` |

### updateDeal

- **Signature**: `updateDeal(request: Deals.UpdateDealRequest, options?: RequestOptions): ApiPromise<Deal, ApiError>`
- **Wire**: `PATCH /deals/{id}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Deal`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Deals.UpdateDealRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |
| `body` | `body` | — | `DealInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DealInput` | `dealInputSchema` | `src/models/deal-input.ts` |
| `Deal` | `dealSchema` | `src/models/deal.ts` |

