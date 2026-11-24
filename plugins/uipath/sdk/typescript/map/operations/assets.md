<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.assets` · Source: `src/resources/assets.ts` · 5 operations · Request and error types: namespace `Assets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAsset

- **Signature**: `createAsset(request: Assets.CreateAssetRequest, options?: RequestOptions): ApiPromise<Asset, Assets.CreateAssetError>`
- **Wire**: `POST /odata/Assets`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Asset`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Assets.CreateAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.CreateAssetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |
| `body` | `body` | — | `Asset` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Asset` | `assetSchema` | `src/models/asset.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteAsset

- **Signature**: `deleteAsset(request: Assets.DeleteAssetRequest, options?: RequestOptions): ApiPromise<undefined, Assets.DeleteAssetError>`
- **Wire**: `DELETE /odata/Assets({key})`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Assets.DeleteAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.DeleteAssetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `key` | `path` | — | `number` | yes |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAsset

- **Signature**: `getAsset(request: Assets.GetAssetRequest, options?: RequestOptions): ApiPromise<Asset, Assets.GetAssetError>`
- **Wire**: `GET /odata/Assets({key})`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Asset`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Assets.GetAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.GetAssetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `key` | `path` | — | `number` | yes |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Asset` | `assetSchema` | `src/models/asset.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listAssets

- **Signature**: `listAssets(request?: Assets.ListAssetsRequest, options?: RequestOptions): ApiPromise<ODataAssetCollection, Assets.ListAssetsError>`
- **Wire**: `GET /odata/Assets`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataAssetCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Assets.ListAssetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.ListAssetsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataAssetCollection` | `oDataAssetCollectionSchema` | `src/models/odata-asset-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateAsset

- **Signature**: `updateAsset(request: Assets.UpdateAssetRequest, options?: RequestOptions): ApiPromise<Asset, Assets.UpdateAssetError>`
- **Wire**: `PUT /odata/Assets({key})`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Asset`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Assets.UpdateAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.UpdateAssetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `key` | `path` | — | `number` | yes |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |
| `body` | `body` | — | `Asset` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Asset` | `assetSchema` | `src/models/asset.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

