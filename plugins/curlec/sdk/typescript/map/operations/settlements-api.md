<!-- Generated file — do not edit; regenerated with the SDK. -->

# SettlementsApi — operations

Accessor: `client.settlementsApi` · Source: `src/resources/settlements-api.ts` · 3 operations · Request and error types: namespace `SettlementsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchAllSettlements

- **Signature**: `fetchAllSettlements(request?: SettlementsApi.FetchAllSettlementsRequest, options?: RequestOptions): ApiPromise<SettlementsResponse, SettlementsApi.FetchAllSettlementsError>`
- **Wire**: `GET /settlements`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SettlementsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `SettlementsApi.FetchAllSettlementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementsApi.FetchAllSettlementsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `from` | `query` | `number` | no | — |
| `to` | `query` | `number` | no | — |
| `count` | `query` | `number` | no | `10` |
| `skip` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SettlementsResponse` | `settlementsResponseSchema` | `src/models/settlements-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchSettlement

- **Signature**: `fetchSettlement(request: SettlementsApi.FetchSettlementRequest, options?: RequestOptions): ApiPromise<Settlement, SettlementsApi.FetchSettlementError>`
- **Wire**: `GET /settlements/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Settlement`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `SettlementsApi.FetchSettlementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementsApi.FetchSettlementRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Settlement` | `settlementSchema` | `src/models/settlement.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchSettlementRecon

- **Signature**: `fetchSettlementRecon(request: SettlementsApi.FetchSettlementReconRequest, options?: RequestOptions): ApiPromise<SettlementsReconCombinedResponse, SettlementsApi.FetchSettlementReconError>`
- **Wire**: `GET /settlements/recon/combined`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SettlementsReconCombinedResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `SettlementsApi.FetchSettlementReconError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementsApi.FetchSettlementReconRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `year` | `query` | `number` | yes | — |
| `month` | `query` | `number` | yes | — |
| `day` | `query` | `number` | no | — |
| `count` | `query` | `number` | no | `10` |
| `skip` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SettlementsReconCombinedResponse` | `settlementsReconCombinedResponseSchema` | `src/models/settlements-recon-combined-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

