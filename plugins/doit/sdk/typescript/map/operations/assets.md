<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.assets` · Source: `src/resources/assets.ts` · 4 operations · Request and error types: namespace `Assets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAsset

- **Signature**: `createAsset(request?: Assets.CreateAssetRequest, options?: RequestOptions): ApiPromise<AssetResponse, Assets.CreateAssetError>`
- **Wire**: `POST /billing/v1/createAsset`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Assets.CreateAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"problemDetails6"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.CreateAssetRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `type` | `query` | `string` | no | `"amazon-web-services"` |
| `mode` | `query` | `string` | no | `"New"` |
| `accountName` | `query` | `string` | no | `"Account name"` |
| `rootEmail` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetResponse` | `assetResponseSchema` | `src/models/asset-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getAsset

- **Signature**: `getAsset(request: Assets.GetAssetRequest, options?: RequestOptions): ApiPromise<AssetItemDetailed, Assets.GetAssetError>`
- **Wire**: `GET /billing/v1/assets/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AssetItemDetailed`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Assets.GetAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.GetAssetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetItemDetailed` | `assetItemDetailedSchema` | `src/models/asset-item-detailed.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### idOfAsset

- **Signature**: `idOfAsset(request: Assets.IdOfAssetRequest, options?: RequestOptions): ApiPromise<BillingV1AssetsResponse1, Assets.IdOfAssetError>`
- **Wire**: `PATCH /billing/v1/assets/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BillingV1AssetsResponse1`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Assets.IdOfAssetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.IdOfAssetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `BillingV1AssetsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingV1AssetsRequest` | `billingV1AssetsRequestSchema` | `src/models/billing-v1-assets-request.ts` |
| `BillingV1AssetsResponse1` | `billingV1AssetsResponse1Schema` | `src/models/billing-v1-assets-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### idOfAssets

- **Signature**: `idOfAssets(request?: Assets.IdOfAssetsRequest, options?: RequestOptions): ApiPromise<BillingV1AssetsResponse, Assets.IdOfAssetsError>`
- **Wire**: `GET /billing/v1/assets`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillingV1AssetsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Assets.IdOfAssetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Assets.IdOfAssetsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `filter` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingV1AssetsResponse` | `billingV1AssetsResponseSchema` | `src/models/billing-v1-assets-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

