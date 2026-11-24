<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesIpGeolocation — operations

Accessor: `client.databasesIpGeolocation` · Source: `src/resources/databases-ip-geolocation.ts` · 4 operations · Request and error types: namespace `DatabasesIpGeolocation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dbIpCity

- **Signature**: `dbIpCity(request: DatabasesIpGeolocation.DbIpCityRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesIpGeolocation.DbIpCityError>`
- **Wire**: `GET /v3.3/download/snapshot/ip/city`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesIpGeolocation.DbIpCityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesIpGeolocation.DbIpCityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbIpCityStatus

- **Signature**: `dbIpCityStatus(options?: RequestOptions): ApiPromise<SnapshotStatus, DatabasesIpGeolocation.DbIpCityStatusError>`
- **Wire**: `GET /v3.3/status/snapshot/ip/city`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SnapshotStatus`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesIpGeolocation.DbIpCityStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SnapshotStatus` | `snapshotStatusSchema` | `src/models/snapshot-status.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbIpCountry

- **Signature**: `dbIpCountry(request: DatabasesIpGeolocation.DbIpCountryRequest, options?: RequestOptions): ApiPromise<BinaryContent, DatabasesIpGeolocation.DbIpCountryError>`
- **Wire**: `GET /v3.3/download/snapshot/ip/country`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesIpGeolocation.DbIpCountryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatabasesIpGeolocation.DbIpCountryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dbIpCountryStatus

- **Signature**: `dbIpCountryStatus(options?: RequestOptions): ApiPromise<SnapshotStatus, DatabasesIpGeolocation.DbIpCountryStatusError>`
- **Wire**: `GET /v3.3/status/snapshot/ip/country`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SnapshotStatus`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DatabasesIpGeolocation.DbIpCountryStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SnapshotStatus` | `snapshotStatusSchema` | `src/models/snapshot-status.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

