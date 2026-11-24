<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomViewsExperimental — operations

Accessor: `client.customViewsExperimental` · Source: `src/resources/custom-views-experimental.ts` · 8 operations · Request and error types: namespace `CustomViewsExperimental`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomView

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCustomView(request: CustomViewsExperimental.CreateCustomViewRequestParams, options?: RequestOptions): ApiPromise<CustomView, CustomViewsExperimental.CreateCustomViewError>`
- **Wire**: `POST /experimental/views/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomView`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomViewsExperimental.CreateCustomViewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomViewsExperimental.CreateCustomViewRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CreateCustomViewRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomViewRequest` | `createCustomViewRequestSchema` | `src/models/create-custom-view-request.ts` |
| `CustomView` | `customViewSchema` | `src/models/custom-view.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomView

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCustomView(request: CustomViewsExperimental.GetCustomViewRequest, options?: RequestOptions): ApiPromise<CustomViewDetail, CustomViewsExperimental.GetCustomViewError>`
- **Wire**: `GET /experimental/views/{displayId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomViewDetail`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomViewsExperimental.GetCustomViewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomViewsExperimental.GetCustomViewRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `displayId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomViewDetail` | `customViewDetailSchema` | `src/models/custom-view-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomViewData

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCustomViewData(request: CustomViewsExperimental.GetCustomViewDataRequest, options?: RequestOptions): ApiPromise<ViewDataResponse, CustomViewsExperimental.GetCustomViewDataError>`
- **Wire**: `GET /experimental/views/{displayId}/data`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ViewDataResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomViewsExperimental.GetCustomViewDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [408] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomViewsExperimental.GetCustomViewDataRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `displayId` | `path` | — | `string` | yes |
| `customerId` | `query` | — | `string` | no |
| `periodKind` | `query` | — | `ExperimentalViewsDisplayIdDataGetParametersPeriodKind` | no |
| `periodUnit` | `query` | — | `ExperimentalViewsDisplayIdDataGetParametersPeriodUnit` | no |
| `periodAmount` | `query` | — | `number` | no |
| `periodStart` | `query` | — | `string` | no |
| `periodEnd` | `query` | — | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExperimentalViewsDisplayIdDataGetParametersPeriodKind` | `experimentalViewsDisplayIdDataGetParametersPeriodKindSchema` | `src/models/experimental-views-display-id-data-get-parameters-period-kind.ts` |
| `ExperimentalViewsDisplayIdDataGetParametersPeriodUnit` | `experimentalViewsDisplayIdDataGetParametersPeriodUnitSchema` | `src/models/experimental-views-display-id-data-get-parameters-period-unit.ts` |
| `ViewDataResponse` | `viewDataResponseSchema` | `src/models/view-data-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomViewEmbedToken

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCustomViewEmbedToken(request: CustomViewsExperimental.GetCustomViewEmbedTokenRequest, options?: RequestOptions): ApiPromise<CustomViewEmbedTokenResponse, CustomViewsExperimental.GetCustomViewEmbedTokenError>`
- **Wire**: `GET /experimental/views/{displayId}/embed-token`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomViewEmbedTokenResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomViewsExperimental.GetCustomViewEmbedTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomViewsExperimental.GetCustomViewEmbedTokenRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `displayId` | `path` | — | `string` | yes |
| `customerId` | `query` | — | `string` | yes |
| `ttlSeconds` | `query` | — | `number` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomViewEmbedTokenResponse` | `customViewEmbedTokenResponseSchema` | `src/models/custom-view-embed-token-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCustomViews

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCustomViews(request: CustomViewsExperimental.ListCustomViewsRequest, options?: RequestOptions): ApiPromise<CustomViewListResponse, CustomViewsExperimental.ListCustomViewsError>`
- **Wire**: `GET /experimental/views/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomViewListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomViewsExperimental.ListCustomViewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomViewsExperimental.ListCustomViewsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomViewListResponse` | `customViewListResponseSchema` | `src/models/custom-view-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### publishCustomView

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `publishCustomView(request: CustomViewsExperimental.PublishCustomViewRequest, options?: RequestOptions): ApiPromise<CustomView, CustomViewsExperimental.PublishCustomViewError>`
- **Wire**: `POST /experimental/views/{displayId}/publish`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomView`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomViewsExperimental.PublishCustomViewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomViewsExperimental.PublishCustomViewRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `displayId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomView` | `customViewSchema` | `src/models/custom-view.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateCustomView

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCustomView(request: CustomViewsExperimental.UpdateCustomViewRequestParams, options?: RequestOptions): ApiPromise<CustomView, CustomViewsExperimental.UpdateCustomViewError>`
- **Wire**: `PATCH /experimental/views/{displayId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomView`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomViewsExperimental.UpdateCustomViewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomViewsExperimental.UpdateCustomViewRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `displayId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdateCustomViewRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomViewRequest` | `updateCustomViewRequestSchema` | `src/models/update-custom-view-request.ts` |
| `CustomView` | `customViewSchema` | `src/models/custom-view.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateCustomViewPeriod

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCustomViewPeriod(request: CustomViewsExperimental.UpdateCustomViewPeriodRequestParams, options?: RequestOptions): ApiPromise<CustomView, CustomViewsExperimental.UpdateCustomViewPeriodError>`
- **Wire**: `PATCH /experimental/views/{displayId}/period`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomView`
- **Error**: `PaidError` with `kind: "api"`, an instance of `CustomViewsExperimental.UpdateCustomViewPeriodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomViewsExperimental.UpdateCustomViewPeriodRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `displayId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdateCustomViewPeriodRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomViewPeriodRequest` | `updateCustomViewPeriodRequestSchema` | `src/models/update-custom-view-period-request.ts` |
| `CustomView` | `customViewSchema` | `src/models/custom-view.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

