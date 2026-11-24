<!-- Generated file — do not edit; regenerated with the SDK. -->

# BrandKits — operations

Accessor: `client.brandKits` · Source: `src/resources/brand-kits.ts` · 5 operations · Request and error types: namespace `BrandKits`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBrandKit

- **Server**: `defaultContentstackBrandKitManagementBrandKitsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBrandKit(request: BrandKits.CreateBrandKitRequestParams, options?: RequestOptions): ApiPromise<BrandKit, BrandKits.CreateBrandKitError>`
- **Wire**: `POST /v1/brand-kits`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BrandKit`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `BrandKits.CreateBrandKitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BrandKits.CreateBrandKitRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `header` | `organization_uid` | `string` | yes |
| `body` | `body` | — | `CreateBrandKitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBrandKitRequest` | `createBrandKitRequestSchema` | `src/models/create-brand-kit-request.ts` |
| `BrandKit` | `brandKitSchema` | `src/models/brand-kit.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteBrandKit

- **Server**: `defaultContentstackBrandKitManagementBrandKitsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBrandKit(request: BrandKits.DeleteBrandKitRequest, options?: RequestOptions): ApiPromise<undefined, BrandKits.DeleteBrandKitError>`
- **Wire**: `DELETE /v1/brand-kits/{brand_kit_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `BrandKits.DeleteBrandKitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BrandKits.DeleteBrandKitRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandKitUid` | `path` | `brand_kit_uid` | `string` | yes |
| `organizationUid` | `header` | `organization_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAllBrandKits

- **Server**: `defaultContentstackBrandKitManagementBrandKitsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllBrandKits(request: BrandKits.GetAllBrandKitsRequest, options?: RequestOptions): ApiPromise<BrandKitList, BrandKits.GetAllBrandKitsError>`
- **Wire**: `GET /v1/brand-kits`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BrandKitList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `BrandKits.GetAllBrandKitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BrandKits.GetAllBrandKitsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `skip` | `query` | — | `number` | no | `0` |
| `limit` | `query` | — | `number` | no | `25` |
| `organizationUid` | `header` | `organization_uid` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `BrandKitList` | `brandKitListSchema` | `src/models/brand-kit-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getBrandKit

- **Server**: `defaultContentstackBrandKitManagementBrandKitsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBrandKit(request: BrandKits.GetBrandKitRequest, options?: RequestOptions): ApiPromise<BrandKit, BrandKits.GetBrandKitError>`
- **Wire**: `GET /v1/brand-kits/{brand_kit_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BrandKit`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `BrandKits.GetBrandKitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BrandKits.GetBrandKitRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandKitUid` | `path` | `brand_kit_uid` | `string` | yes |
| `organizationUid` | `header` | `organization_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BrandKit` | `brandKitSchema` | `src/models/brand-kit.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateBrandKit

- **Server**: `defaultContentstackBrandKitManagementBrandKitsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateBrandKit(request: BrandKits.UpdateBrandKitRequest, options?: RequestOptions): ApiPromise<BrandKit, BrandKits.UpdateBrandKitError>`
- **Wire**: `PUT /v1/brand-kits/{brand_kit_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BrandKit`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `BrandKits.UpdateBrandKitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BrandKits.UpdateBrandKitRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandKitUid` | `path` | `brand_kit_uid` | `string` | yes |
| `organizationUid` | `header` | `organization_uid` | `string` | yes |
| `body` | `body` | — | `CreateBrandKitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBrandKitRequest` | `createBrandKitRequestSchema` | `src/models/create-brand-kit-request.ts` |
| `BrandKit` | `brandKitSchema` | `src/models/brand-kit.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

