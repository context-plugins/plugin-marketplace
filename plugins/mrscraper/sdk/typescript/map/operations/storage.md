<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.storage` · Source: `src/resources/storage.ts` · 1 operation · Request and error types: namespace `Storage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mr-scraper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getStorageByKey

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getStorageByKey(request: Storage.GetStorageByKeyRequest, options?: RequestOptions): ApiPromise<undefined, Storage.GetStorageByKeyError>`
- **Wire**: `GET /storage/{key}`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MrScraperError` with `kind: "api"`, an instance of `Storage.GetStorageByKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"storage400Error1"` [400] `Storage400Error1` · `"error401"` [401] `Record<string, unknown>` · `"storage403Error1"` [403] `Storage403Error1` · `"storage404Error1"` [404] `Storage404Error1` · `"storage503Error1"` [503] `Storage503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Storage.GetStorageByKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Storage400Error1` | `storage400Error1Schema` | `src/models/storage400-error1.ts` |
| `Storage403Error1` | `storage403Error1Schema` | `src/models/storage403-error1.ts` |
| `Storage404Error1` | `storage404Error1Schema` | `src/models/storage404-error1.ts` |
| `Storage503Error1` | `storage503Error1Schema` | `src/models/storage503-error1.ts` |

