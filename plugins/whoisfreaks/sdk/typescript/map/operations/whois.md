<!-- Generated file — do not edit; regenerated with the SDK. -->

# Whois — operations

Accessor: `client.whois` · Source: `src/resources/whois.ts` · 4 operations · Request and error types: namespace `Whois`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkWhois

- **Signature**: `bulkWhois(request: Whois.BulkWhoisRequest, options?: RequestOptions): ApiPromise<BulkWhoisResponse, Whois.BulkWhoisError>`
- **Wire**: `POST /v2.0/bulkwhois/live`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkWhoisResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Whois.BulkWhoisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Whois.BulkWhoisRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `query` | `Format` | no | `Format.Json` |
| `body` | `body` | `V20BulkwhoisLiveRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `V20BulkwhoisLiveRequest` | `v20BulkwhoisLiveRequestSchema` | `src/models/v20-bulkwhois-live-request.ts` |
| `BulkWhoisResponse` | `bulkWhoisResponseSchema` | `src/models/bulk-whois-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### whoisHistory

- **Signature**: `whoisHistory(request: Whois.WhoisHistoryRequest, options?: RequestOptions): ApiPromise<WhoisHistoricalResponse, ApiError>`
- **Wire**: `GET /v2.0/whois/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WhoisHistoricalResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Whois.WhoisHistoryRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domainName` | `query` | `string` | yes |
| `page` | `query` | `number` | no |
| `format` | `query` | `Format` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `WhoisHistoricalResponse` | `whoisHistoricalResponseSchema` | `src/models/whois-historical-response.ts` |

### whoisLive

- **Signature**: `whoisLive(request: Whois.WhoisLiveRequest, options?: RequestOptions): ApiPromise<WhoisResponse, Whois.WhoisLiveError>`
- **Wire**: `GET /v2.0/whois/live`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WhoisResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Whois.WhoisLiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Whois.WhoisLiveRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `domainName` | `query` | `string` | yes | — |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `WhoisResponse` | `whoisResponseSchema` | `src/models/whois-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### whoisReverse

- **Signature**: `whoisReverse(request: Whois.WhoisReverseRequest, options?: RequestOptions): ApiPromise<ReverseWhoisResponse, ApiError>`
- **Wire**: `GET /v2.0/whois/reverse`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReverseWhoisResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Whois.WhoisReverseRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `keyword` | `query` | `string` | yes |
| `page` | `query` | `number` | no |
| `format` | `query` | `Format` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ReverseWhoisResponse` | `reverseWhoisResponseSchema` | `src/models/reverse-whois-response.ts` |

