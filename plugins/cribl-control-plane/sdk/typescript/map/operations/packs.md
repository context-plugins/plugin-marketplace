<!-- Generated file — do not edit; regenerated with the SDK. -->

# Packs — operations

Accessor: `client.packs` · Source: `src/resources/packs.ts` · 6 operations · Request and error types: namespace `Packs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPacks

- **Signature**: `createPacks(request: Packs.CreatePacksRequest, options?: RequestOptions): ApiPromise<CountedPackInstallInfo, Packs.CreatePacksError>`
- **Wire**: `POST /packs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedPackInstallInfo`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Packs.CreatePacksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Packs.CreatePacksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PackRequestBody2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PackRequestBody2` | `packRequestBody2Schema` | `src/models/unions/pack-request-body2.ts` |
| `CountedPackInstallInfo` | `countedPackInstallInfoSchema` | `src/models/counted-pack-install-info.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deletePacksById

- **Signature**: `deletePacksById(request: Packs.DeletePacksByIdRequest, options?: RequestOptions): ApiPromise<CountedPackUninstallInfo, Packs.DeletePacksByIdError>`
- **Wire**: `DELETE /packs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedPackUninstallInfo`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Packs.DeletePacksByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error409"` [409] no body · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Packs.DeletePacksByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedPackUninstallInfo` | `countedPackUninstallInfoSchema` | `src/models/counted-pack-uninstall-info.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPacks

- **Signature**: `getPacks(request: Packs.GetPacksRequest, options?: RequestOptions): ApiPromise<PaginatedPackInfo, Packs.GetPacksError>`
- **Wire**: `GET /packs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedPackInfo`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Packs.GetPacksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Packs.GetPacksRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `with` | `query` | `string` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedPackInfo` | `paginatedPackInfoSchema` | `src/models/paginated-pack-info.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPacksById

- **Signature**: `getPacksById(request: Packs.GetPacksByIdRequest, options?: RequestOptions): ApiPromise<CountedPackInfo, Packs.GetPacksByIdError>`
- **Wire**: `GET /packs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedPackInfo`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Packs.GetPacksByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error409"` [409] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Packs.GetPacksByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedPackInfo` | `countedPackInfoSchema` | `src/models/counted-pack-info.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updatePacks

- **Signature**: `updatePacks(request: Packs.UpdatePacksRequest, options?: RequestOptions): ApiPromise<UploadPackResponse, Packs.UpdatePacksError>`
- **Wire**: `PUT /packs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/octet-stream` — the `body` field, sent as raw bytes with no schema over them. That media type is what the SDK declares; a value carrying its own wins outright
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadPackResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Packs.UpdatePacksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Packs.UpdatePacksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filename` | `query` | `string` | yes |
| `body` | `body` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadPackResponse` | `uploadPackResponseSchema` | `src/models/upload-pack-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updatePacksById

- **Signature**: `updatePacksById(request: Packs.UpdatePacksByIdRequest, options?: RequestOptions): ApiPromise<CountedPackInfo, Packs.UpdatePacksByIdError>`
- **Wire**: `PATCH /packs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedPackInfo`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Packs.UpdatePacksByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error409"` [409] no body · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Packs.UpdatePacksByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PackUpgradeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PackUpgradeRequest` | `packUpgradeRequestSchema` | `src/models/pack-upgrade-request.ts` |
| `CountedPackInfo` | `countedPackInfoSchema` | `src/models/counted-pack-info.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

