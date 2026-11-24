<!-- Generated file — do not edit; regenerated with the SDK. -->

# InstantSettlements — operations

Accessor: `client.instantSettlements` · Source: `src/resources/instant-settlements.ts` · 3 operations · Request and error types: namespace `InstantSettlements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createInstantSettlement

- **Signature**: `createInstantSettlement(request: InstantSettlements.CreateInstantSettlementRequest, options?: RequestOptions): ApiPromise<InstantSettlement, InstantSettlements.CreateInstantSettlementError>`
- **Wire**: `POST /settlements/ondemand`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InstantSettlement`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `InstantSettlements.CreateInstantSettlementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InstantSettlements.CreateInstantSettlementRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SettlementsOndemandRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SettlementsOndemandRequest` | `settlementsOndemandRequestSchema` | `src/models/settlements-ondemand-request.ts` |
| `InstantSettlement` | `instantSettlementSchema` | `src/models/instant-settlement.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchAllInstantSettlements

- **Signature**: `fetchAllInstantSettlements(request?: InstantSettlements.FetchAllInstantSettlementsRequest, options?: RequestOptions): ApiPromise<SettlementsOndemandResponse, InstantSettlements.FetchAllInstantSettlementsError>`
- **Wire**: `GET /settlements/ondemand`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SettlementsOndemandResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `InstantSettlements.FetchAllInstantSettlementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InstantSettlements.FetchAllInstantSettlementsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `from` | `query` | — | `number` | no | — |
| `to` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `10` |
| `skip` | `query` | — | `number` | no | `0` |
| `expand` | `query` | `expand[]` | `ExpandRazorpayInstantSettlementsApi` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpandRazorpayInstantSettlementsApi` | `expandRazorpayInstantSettlementsApiSchema` | `src/models/expand-razorpay-instant-settlements-api.ts` |
| `SettlementsOndemandResponse` | `settlementsOndemandResponseSchema` | `src/models/settlements-ondemand-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchInstantSettlement

- **Signature**: `fetchInstantSettlement(request: InstantSettlements.FetchInstantSettlementRequest, options?: RequestOptions): ApiPromise<InstantSettlement, InstantSettlements.FetchInstantSettlementError>`
- **Wire**: `GET /settlements/ondemand/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InstantSettlement`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `InstantSettlements.FetchInstantSettlementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InstantSettlements.FetchInstantSettlementRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `expand` | `query` | `expand[]` | `ExpandRazorpayInstantSettlementsApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpandRazorpayInstantSettlementsApi` | `expandRazorpayInstantSettlementsApiSchema` | `src/models/expand-razorpay-instant-settlements-api.ts` |
| `InstantSettlement` | `instantSettlementSchema` | `src/models/instant-settlement.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

