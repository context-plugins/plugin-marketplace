<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesExpiringDropped — operations

Accessor: `client.databasesExpiringDropped` · Source: `src/resources/databases-expiring-dropped.ts` · 5 operations · Request and error types: namespace `DatabasesExpiringDropped`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dbDropped

- **Signature**: `dbDropped(request: DatabasesExpiringDropped.DbDroppedRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesExpiringDropped.DbDroppedError>`
- **Wire**: `GET /v3.1/download/domainer/dropped`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesExpiringDropped.DbDroppedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesExpiringDropped.DbDroppedRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `whois` | `query` | `boolean` | yes |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbDroppedBacklinks

- **Signature**: `dbDroppedBacklinks(request?: DatabasesExpiringDropped.DbDroppedBacklinksRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesExpiringDropped.DbDroppedBacklinksError>`
- **Wire**: `GET /v3.3/download/domainer/dropped/backlinks`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesExpiringDropped.DbDroppedBacklinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesExpiringDropped.DbDroppedBacklinksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `whois` | `query` | `boolean` | no |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbDroppedJson

- **Signature**: `dbDroppedJson(request?: DatabasesExpiringDropped.DbDroppedJsonRequest, options?: RequestOptions): ApiPromise<string[], DatabasesExpiringDropped.DbDroppedJsonError>`
- **Wire**: `GET /v3.1/domains/dropped`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesExpiringDropped.DbDroppedJsonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesExpiringDropped.DbDroppedJsonRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |
| `tlds` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbExpired

- **Signature**: `dbExpired(request: DatabasesExpiringDropped.DbExpiredRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesExpiringDropped.DbExpiredError>`
- **Wire**: `GET /v3.1/download/domainer/expired`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesExpiringDropped.DbExpiredError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesExpiringDropped.DbExpiredRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `whois` | `query` | `boolean` | yes |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbExpiredCleaned

- **Signature**: `dbExpiredCleaned(request?: DatabasesExpiringDropped.DbExpiredCleanedRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesExpiringDropped.DbExpiredCleanedError>`
- **Wire**: `GET /v3.1/download/domainer/expired/cleaned`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesExpiringDropped.DbExpiredCleanedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesExpiringDropped.DbExpiredCleanedRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

