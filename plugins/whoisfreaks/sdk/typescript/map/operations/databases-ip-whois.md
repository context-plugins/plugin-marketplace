<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesIpWhois — operations

Accessor: `client.databasesIpWhois` · Source: `src/resources/databases-ip-whois.ts` · 2 operations · Request and error types: namespace `DatabasesIpWhois`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dbIpWhois

- **Signature**: `dbIpWhois(request: DatabasesIpWhois.DbIpWhoisRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesIpWhois.DbIpWhoisError>`
- **Wire**: `GET /v3.3/download/snapshot/ip/whois`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesIpWhois.DbIpWhoisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesIpWhois.DbIpWhoisRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbIpWhoisStatus

- **Signature**: `dbIpWhoisStatus(options?: RequestOptions): ApiPromise<SnapshotStatus, DatabasesIpWhois.DbIpWhoisStatusError>`
- **Wire**: `GET /v3.3/status/snapshot/ip/whois`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SnapshotStatus`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesIpWhois.DbIpWhoisStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SnapshotStatus` | `snapshotStatusSchema` | `src/models/snapshot-status.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

