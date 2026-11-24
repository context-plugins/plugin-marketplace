<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesNewlyRegistered — operations

Accessor: `client.databasesNewlyRegistered` · Source: `src/resources/databases-newly-registered.ts` · 7 operations · Request and error types: namespace `DatabasesNewlyRegistered`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dbNewlyCctld

- **Signature**: `dbNewlyCctld(request: DatabasesNewlyRegistered.DbNewlyCctldRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesNewlyRegistered.DbNewlyCctldError>`
- **Wire**: `GET /v3.1/download/domainer/cctld`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesNewlyRegistered.DbNewlyCctldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesNewlyRegistered.DbNewlyCctldRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `whois` | `query` | `boolean` | yes |
| `date` | `query` | `string` (date) | no |
| `tlds` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbNewlyCctldCleaned

- **Signature**: `dbNewlyCctldCleaned(request?: DatabasesNewlyRegistered.DbNewlyCctldCleanedRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesNewlyRegistered.DbNewlyCctldCleanedError>`
- **Wire**: `GET /v3.1/download/domainer/cctld/cleaned`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesNewlyRegistered.DbNewlyCctldCleanedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesNewlyRegistered.DbNewlyCctldCleanedRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbNewlyCctldJson

- **Signature**: `dbNewlyCctldJson(request?: DatabasesNewlyRegistered.DbNewlyCctldJsonRequest, options?: RequestOptions): ApiPromise<string[], DatabasesNewlyRegistered.DbNewlyCctldJsonError>`
- **Wire**: `GET /v3.1/domains/newly/cctld`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesNewlyRegistered.DbNewlyCctldJsonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesNewlyRegistered.DbNewlyCctldJsonRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |
| `tlds` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbNewlyDns

- **Signature**: `dbNewlyDns(request?: DatabasesNewlyRegistered.DbNewlyDnsRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesNewlyRegistered.DbNewlyDnsError>`
- **Wire**: `GET /v3.1/download/domainer/newly/dns`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesNewlyRegistered.DbNewlyDnsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesNewlyRegistered.DbNewlyDnsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbNewlyGtld

- **Signature**: `dbNewlyGtld(request: DatabasesNewlyRegistered.DbNewlyGtldRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesNewlyRegistered.DbNewlyGtldError>`
- **Wire**: `GET /v3.1/download/domainer/gtld`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesNewlyRegistered.DbNewlyGtldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesNewlyRegistered.DbNewlyGtldRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `whois` | `query` | `boolean` | yes |
| `date` | `query` | `string` (date) | no |
| `tlds` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbNewlyGtldCleaned

- **Signature**: `dbNewlyGtldCleaned(request?: DatabasesNewlyRegistered.DbNewlyGtldCleanedRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesNewlyRegistered.DbNewlyGtldCleanedError>`
- **Wire**: `GET /v3.1/download/domainer/gtld/cleaned`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesNewlyRegistered.DbNewlyGtldCleanedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesNewlyRegistered.DbNewlyGtldCleanedRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbNewlyGtldJson

- **Signature**: `dbNewlyGtldJson(request?: DatabasesNewlyRegistered.DbNewlyGtldJsonRequest, options?: RequestOptions): ApiPromise<string[], DatabasesNewlyRegistered.DbNewlyGtldJsonError>`
- **Wire**: `GET /v3.1/domains/newly/gtld`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesNewlyRegistered.DbNewlyGtldJsonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesNewlyRegistered.DbNewlyGtldJsonRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |
| `tlds` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

