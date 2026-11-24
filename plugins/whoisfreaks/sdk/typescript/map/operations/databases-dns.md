<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesDns — operations

Accessor: `client.databasesDns` · Source: `src/resources/databases-dns.ts` · 3 operations · Request and error types: namespace `DatabasesDns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dbDnsDaily

- **Signature**: `dbDnsDaily(request?: DatabasesDns.DbDnsDailyRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesDns.DbDnsDailyError>`
- **Wire**: `GET /v3.2/download/dbupdate/daily/dns`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesDns.DbDnsDailyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesDns.DbDnsDailyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbDnsMonthly

- **Signature**: `dbDnsMonthly(request?: DatabasesDns.DbDnsMonthlyRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesDns.DbDnsMonthlyError>`
- **Wire**: `GET /v3.2/download/dbupdate/monthly/dns`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesDns.DbDnsMonthlyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesDns.DbDnsMonthlyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbDnsWeekly

- **Signature**: `dbDnsWeekly(request?: DatabasesDns.DbDnsWeeklyRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesDns.DbDnsWeeklyError>`
- **Wire**: `GET /v3.2/download/dbupdate/weekly/dns`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesDns.DbDnsWeeklyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesDns.DbDnsWeeklyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

