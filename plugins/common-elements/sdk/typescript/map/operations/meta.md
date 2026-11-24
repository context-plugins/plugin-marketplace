<!-- Generated file — do not edit; regenerated with the SDK. -->

# Meta — operations

Accessor: `client.meta` · Source: `src/resources/meta.ts` · 6 operations · Request and error types: namespace `Meta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `common-elements`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiStatus

- **Signature**: `getApiStatus(options?: RequestOptions): ApiPromise<Record<string, unknown>, Meta.GetApiStatusError>`
- **Wire**: `GET /api/v1/meta/status`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Meta.GetApiStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [500] `Error` · `"error2"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getDataDictionary

- **Signature**: `getDataDictionary(request?: Meta.GetDataDictionaryRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Meta.GetDataDictionaryError>`
- **Wire**: `GET /api/v1/meta/dictionary`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Meta.GetDataDictionaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Meta.GetDataDictionaryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resource` | `query` | — | `string` | no |
| `fillRates` | `query` | `fill_rates` | `FillRates` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FillRates` | `fillRatesSchema` | `src/models/fill-rates.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getKeyUsage

- **Signature**: `getKeyUsage(request?: Meta.GetKeyUsageRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Meta.GetKeyUsageError>`
- **Wire**: `GET /api/v1/meta/usage`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Meta.GetKeyUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Meta.GetKeyUsageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `days` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getMetaIndex

- **Signature**: `getMetaIndex(options?: RequestOptions): ApiPromise<Record<string, unknown>, Meta.GetMetaIndexError>`
- **Wire**: `GET /api/v1/meta`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Meta.GetMetaIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOpenApiDocument

- **Signature**: `getOpenApiDocument(request?: Meta.GetOpenApiDocumentRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Meta.GetOpenApiDocumentError>`
- **Wire**: `GET /api/v1/openapi`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Meta.GetOpenApiDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Meta.GetOpenApiDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `format` | `query` | `Format` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSandboxManifest

- **Signature**: `getSandboxManifest(options?: RequestOptions): ApiPromise<Record<string, unknown>, Meta.GetSandboxManifestError>`
- **Wire**: `GET /api/v1/meta/sandbox`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Meta.GetSandboxManifestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

