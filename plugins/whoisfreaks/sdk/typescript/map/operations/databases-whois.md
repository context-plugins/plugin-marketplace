<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesWhois — operations

Accessor: `client.databasesWhois` · Source: `src/resources/databases-whois.ts` · 3 operations · Request and error types: namespace `DatabasesWhois`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dbWhoisDaily

- **Signature**: `dbWhoisDaily(request?: DatabasesWhois.DbWhoisDailyRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesWhois.DbWhoisDailyError>`
- **Wire**: `GET /v3.3/download/dbupdate/daily/domains/whois`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesWhois.DbWhoisDailyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesWhois.DbWhoisDailyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbWhoisMonthly

- **Signature**: `dbWhoisMonthly(request?: DatabasesWhois.DbWhoisMonthlyRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesWhois.DbWhoisMonthlyError>`
- **Wire**: `GET /v3.3/download/dbupdate/monthly/domains/whois`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesWhois.DbWhoisMonthlyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesWhois.DbWhoisMonthlyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbWhoisWeekly

- **Signature**: `dbWhoisWeekly(request?: DatabasesWhois.DbWhoisWeeklyRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesWhois.DbWhoisWeeklyError>`
- **Wire**: `GET /v3.3/download/dbupdate/weekly/domains/whois`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesWhois.DbWhoisWeeklyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesWhois.DbWhoisWeeklyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

