<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesSubdomains — operations

Accessor: `client.databasesSubdomains` · Source: `src/resources/databases-subdomains.ts` · 3 operations · Request and error types: namespace `DatabasesSubdomains`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dbSubdomainsDaily

- **Signature**: `dbSubdomainsDaily(request?: DatabasesSubdomains.DbSubdomainsDailyRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesSubdomains.DbSubdomainsDailyError>`
- **Wire**: `GET /v3.2/download/dbupdate/daily/subdomains`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesSubdomains.DbSubdomainsDailyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesSubdomains.DbSubdomainsDailyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbSubdomainsMonthly

- **Signature**: `dbSubdomainsMonthly(request?: DatabasesSubdomains.DbSubdomainsMonthlyRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesSubdomains.DbSubdomainsMonthlyError>`
- **Wire**: `GET /v3.2/download/dbupdate/monthly/subdomains`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesSubdomains.DbSubdomainsMonthlyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesSubdomains.DbSubdomainsMonthlyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbSubdomainsWeekly

- **Signature**: `dbSubdomainsWeekly(request?: DatabasesSubdomains.DbSubdomainsWeeklyRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesSubdomains.DbSubdomainsWeeklyError>`
- **Wire**: `GET /v3.2/download/dbupdate/weekly/subdomains`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesSubdomains.DbSubdomainsWeeklyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesSubdomains.DbSubdomainsWeeklyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

