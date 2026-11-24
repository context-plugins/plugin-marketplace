<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesIpSecurity — operations

Accessor: `client.databasesIpSecurity` · Source: `src/resources/databases-ip-security.ts` · 2 operations · Request and error types: namespace `DatabasesIpSecurity`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dbIpSecurity

- **Signature**: `dbIpSecurity(request: DatabasesIpSecurity.DbIpSecurityRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesIpSecurity.DbIpSecurityError>`
- **Wire**: `GET /v3.3/download/snapshot/ip/security`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesIpSecurity.DbIpSecurityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesIpSecurity.DbIpSecurityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbIpSecurityStatus

- **Signature**: `dbIpSecurityStatus(options?: RequestOptions): ApiPromise<SnapshotStatus, DatabasesIpSecurity.DbIpSecurityStatusError>`
- **Wire**: `GET /v3.3/status/snapshot/ip/security`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SnapshotStatus`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesIpSecurity.DbIpSecurityStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SnapshotStatus` | `snapshotStatusSchema` | `src/models/snapshot-status.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

