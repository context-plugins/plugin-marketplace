<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesAsnWhois — operations

Accessor: `client.databasesAsnWhois` · Source: `src/resources/databases-asn-whois.ts` · 2 operations · Request and error types: namespace `DatabasesAsnWhois`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dbAsnWhois

- **Signature**: `dbAsnWhois(request: DatabasesAsnWhois.DbAsnWhoisRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesAsnWhois.DbAsnWhoisError>`
- **Wire**: `GET /v3.3/download/snapshot/asn/whois`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesAsnWhois.DbAsnWhoisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesAsnWhois.DbAsnWhoisRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbAsnWhoisStatus

- **Signature**: `dbAsnWhoisStatus(options?: RequestOptions): ApiPromise<SnapshotStatus, DatabasesAsnWhois.DbAsnWhoisStatusError>`
- **Wire**: `GET /v3.3/status/snapshot/asn/whois`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SnapshotStatus`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesAsnWhois.DbAsnWhoisStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SnapshotStatus` | `snapshotStatusSchema` | `src/models/snapshot-status.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

