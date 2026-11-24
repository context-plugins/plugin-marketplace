<!-- Generated file — do not edit; regenerated with the SDK. -->

# Disputes — operations

Accessor: `client.disputes` · Source: `src/resources/disputes.ts` · 4 operations · Request and error types: namespace `Disputes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acceptDispute

- **Signature**: `acceptDispute(request: Disputes.AcceptDisputeRequest, options?: RequestOptions): ApiPromise<Dispute, Disputes.AcceptDisputeError>`
- **Wire**: `POST /disputes/{id}/accept`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Dispute`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Disputes.AcceptDisputeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Disputes.AcceptDisputeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Dispute` | `disputeSchema` | `src/models/dispute.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### contestDispute

- **Signature**: `contestDispute(request: Disputes.ContestDisputeRequest, options?: RequestOptions): ApiPromise<Dispute, Disputes.ContestDisputeError>`
- **Wire**: `PATCH /disputes/{id}/contest`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Dispute`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Disputes.ContestDisputeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Disputes.ContestDisputeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `DisputesContestRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputesContestRequest` | `disputesContestRequestSchema` | `src/models/disputes-contest-request.ts` |
| `Dispute` | `disputeSchema` | `src/models/dispute.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchAllDisputes

- **Signature**: `fetchAllDisputes(request?: Disputes.FetchAllDisputesRequest, options?: RequestOptions): ApiPromise<DisputesResponse, Disputes.FetchAllDisputesError>`
- **Wire**: `GET /disputes`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisputesResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Disputes.FetchAllDisputesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Disputes.FetchAllDisputesRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `count` | `query` | — | `number` | no | `10` |
| `skip` | `query` | — | `number` | no | `0` |
| `expand` | `query` | `expand[]` | `Expand` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Expand` | `expandSchema` | `src/models/expand.ts` |
| `DisputesResponse` | `disputesResponseSchema` | `src/models/disputes-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchDispute

- **Signature**: `fetchDispute(request: Disputes.FetchDisputeRequest, options?: RequestOptions): ApiPromise<Dispute, Disputes.FetchDisputeError>`
- **Wire**: `GET /disputes/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Dispute`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Disputes.FetchDisputeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Disputes.FetchDisputeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Dispute` | `disputeSchema` | `src/models/dispute.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

