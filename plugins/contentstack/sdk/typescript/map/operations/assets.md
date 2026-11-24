<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.assets` · Source: `src/resources/assets.ts` · 3 operations · Request and error types: namespace `Assets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllAssets

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllAssets(request: Assets.GetAllAssetsRequest, options?: RequestOptions): ApiPromise<AssetList, Assets.GetAllAssetsError>`
- **Wire**: `GET /assets`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AssetList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Assets.GetAllAssetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.GetAllAssetsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `skip` | `query` | — | `number` | no | `0` |
| `limit` | `query` | — | `number` | no | `100` |
| `includeCount` | `query` | `include_count` | `boolean` | no | — |
| `apiKey` | `header` | `api_key` | `string` | yes | — |
| `accessToken` | `header` | `access_token` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetList` | `assetListSchema` | `src/models/asset-list.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### getSingleAsset

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSingleAsset(request: Assets.GetSingleAssetRequest, options?: RequestOptions): ApiPromise<Asset, Assets.GetSingleAssetError>`
- **Wire**: `GET /assets/{asset_uid}`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Asset`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Assets.GetSingleAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"errorContentstackAssetsApi2"` [404] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.GetSingleAssetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `assetUid` | `path` | `asset_uid` | `string` | yes |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `accessToken` | `header` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Asset` | `assetSchema` | `src/models/asset.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

### uploadAsset

- **Server**: `defaultContentstackAssetsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `uploadAsset(request: Assets.UploadAssetRequest, options?: RequestOptions): ApiPromise<Asset2, Assets.UploadAssetError>`
- **Wire**: `POST /assets`
- **Auth**: all of `apiKey`, `deliveryToken` — both are sent
- **Request body**: `multipart/form-data` — every field marked `form`. `asset[upload]` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Asset2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Assets.UploadAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"errorContentstackAssetsApi"` [401] `ErrorContentstackAssetsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.UploadAssetRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `header` | `api_key` | `string` | yes |
| `authtoken` | `header` | — | `string` | no |
| `assetUpload` | `form` | `asset[upload]` | `FileInput` | no |
| `assetTitle` | `form` | `asset[title]` | `string` | no |
| `assetDescription` | `form` | `asset[description]` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Asset2` | `asset2Schema` | `src/models/asset2.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |
| `ErrorContentstackAssetsApi` | `errorContentstackAssetsApiSchema` | `src/models/error-contentstack-assets-api.ts` |

