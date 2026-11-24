<!-- Generated file — do not edit; regenerated with the SDK. -->

# AgentRail — operations

Accessor: `client.agentRail` · Source: `src/resources/agent-rail.ts` · 8 operations · Request and error types: namespace `AgentRail`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### buyCredit

- **Signature**: `buyCredit(request: AgentRail.BuyCreditRequestParams, options?: RequestOptions): ApiPromise<undefined, AgentRail.BuyCreditError>`
- **Wire**: `POST /api/agent/v1/credits`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `AgentRail.BuyCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"error409"` [409] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AgentRail.BuyCreditRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BuyCreditRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuyCreditRequest` | `buyCreditRequestSchema` | `src/models/buy-credit-request.ts` |

### creditBalance

- **Signature**: `creditBalance(options?: RequestOptions): ApiPromise<undefined, AgentRail.CreditBalanceError>`
- **Wire**: `GET /api/agent/v1/credits`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `AgentRail.CreditBalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### excerpt

- **Signature**: `excerpt(request: AgentRail.ExcerptRequest, options?: RequestOptions): ApiPromise<undefined, AgentRail.ExcerptError>`
- **Wire**: `GET /api/agent/v1/excerpt`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `AgentRail.ExcerptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AgentRail.ExcerptRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `episodeId` | `query` | `episode_id` | `number` | yes |
| `t` | `query` | — | `number` | yes |
| `seconds` | `query` | — | `number` | no |

### manifest

- **Signature**: `manifest(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /api/agent/v1`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AudioscrapeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### overview

- **Signature**: `overview(request: AgentRail.OverviewRequest, options?: RequestOptions): ApiPromise<undefined, AgentRail.OverviewError>`
- **Wire**: `GET /api/agent/v1/overview`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `AgentRail.OverviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AgentRail.OverviewRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `episodeId` | `query` | `episode_id` | `number` | yes |

### search

- **Signature**: `search(request: AgentRail.SearchRequestParams, options?: RequestOptions): ApiPromise<undefined, AgentRail.SearchError>`
- **Wire**: `POST /api/agent/v1/search`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `AgentRail.SearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AgentRail.SearchRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `scope` | `query` | `string` | no |
| `body` | `body` | `AgentSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentSearchRequest` | `agentSearchRequestSchema` | `src/models/agent-search-request.ts` |

### transcribe

- **Signature**: `transcribe(request: AgentRail.TranscribeRequest, options?: RequestOptions): ApiPromise<undefined, AgentRail.TranscribeError>`
- **Wire**: `POST /api/agent/v1/transcribe`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `AgentRail.TranscribeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AgentRail.TranscribeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AgentTranscribeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentTranscribeRequest` | `agentTranscribeRequestSchema` | `src/models/agent-transcribe-request.ts` |

### transcriptionStatus

- **Signature**: `transcriptionStatus(request: AgentRail.TranscriptionStatusRequest, options?: RequestOptions): ApiPromise<undefined, AgentRail.TranscriptionStatusError>`
- **Wire**: `GET /api/agent/v1/transcriptions/{job_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `AgentRail.TranscriptionStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AgentRail.TranscriptionStatusRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `number` | yes |

