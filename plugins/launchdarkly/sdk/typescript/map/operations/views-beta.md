<!-- Generated file — do not edit; regenerated with the SDK. -->

# ViewsBeta — operations

Accessor: `client.viewsBeta` · Source: `src/resources/views-beta.ts` · 9 operations · Request and error types: namespace `ViewsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createView

- **Signature**: `createView(request: ViewsBeta.CreateViewRequest, options?: RequestOptions): ApiPromise<View, ViewsBeta.CreateViewError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/views`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `View`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ViewsBeta.CreateViewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ViewsBeta.CreateViewRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |
| `body` | `body` | — | `ViewPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `ViewPost` | `viewPostSchema` | `src/models/view-post.ts` |
| `View` | `viewSchema` | `src/models/view.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteView

- **Signature**: `deleteView(request: ViewsBeta.DeleteViewRequest, options?: RequestOptions): ApiPromise<undefined, ViewsBeta.DeleteViewError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/views/{viewKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ViewsBeta.DeleteViewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ViewsBeta.DeleteViewRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `viewKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLinkedResources

- **Signature**: `getLinkedResources(request: ViewsBeta.GetLinkedResourcesRequest, options?: RequestOptions): ApiPromise<ViewLinkedResources, ViewsBeta.GetLinkedResourcesError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/views/{viewKey}/linked/{resourceType}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ViewLinkedResources`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ViewsBeta.GetLinkedResourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ViewsBeta.GetLinkedResourcesRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes | — |
| `viewKey` | `path` | — | `string` | yes | — |
| `resourceType` | `path` | — | `ResourceType2` | yes | — |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `number` | no | — |
| `sort` | `query` | — | `Sort2` | no | `Sort2.LinkedAt` |
| `query` | `query` | — | `string` | no | — |
| `filter` | `query` | — | `string` | no | — |
| `environmentId` | `query` | — | `string` | no | — |
| `expand` | `query` | — | `Expand2[]` | no | — |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType2` | `resourceType2Schema` | `src/models/resource-type2.ts` |
| `Sort2` | `sort2Schema` | `src/models/sort2.ts` |
| `Expand2` | `expand2Schema` | `src/models/expand2.ts` |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `ViewLinkedResources` | `viewLinkedResourcesSchema` | `src/models/view-linked-resources.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getLinkedViews

- **Signature**: `getLinkedViews(request: ViewsBeta.GetLinkedViewsRequest, options?: RequestOptions): ApiPromise<Views, ViewsBeta.GetLinkedViewsError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/view-associations/{resourceType}/{resourceKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Views`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ViewsBeta.GetLinkedViewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ViewsBeta.GetLinkedViewsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `resourceType` | `path` | — | `ResourceType2` | yes |
| `resourceKey` | `path` | — | `string` | yes |
| `environmentId` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType2` | `resourceType2Schema` | `src/models/resource-type2.ts` |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `Views` | `viewsSchema` | `src/models/views.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getView

- **Signature**: `getView(request: ViewsBeta.GetViewRequest, options?: RequestOptions): ApiPromise<View, ViewsBeta.GetViewError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/views/{viewKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `View`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ViewsBeta.GetViewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ViewsBeta.GetViewRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `viewKey` | `path` | — | `string` | yes |
| `sort` | `query` | — | `Sort` | no |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |
| `filter` | `query` | — | `string` | no |
| `expand` | `query` | — | `Expand1[]` | no |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `Expand1` | `expand1Schema` | `src/models/expand1.ts` |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `View` | `viewSchema` | `src/models/view.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getViews

- **Signature**: `getViews(request: ViewsBeta.GetViewsRequest, options?: RequestOptions): ApiPromise<Views, ViewsBeta.GetViewsError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/views`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Views`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ViewsBeta.GetViewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ViewsBeta.GetViewsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `sort` | `query` | — | `Sort` | no |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |
| `filter` | `query` | — | `string` | no |
| `expand` | `query` | — | `Expand[]` | no |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `Expand` | `expandSchema` | `src/models/expand.ts` |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `Views` | `viewsSchema` | `src/models/views.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### linkResource

- **Signature**: `linkResource(request: ViewsBeta.LinkResourceRequest, options?: RequestOptions): ApiPromise<LinkResourceSuccessResponse, ViewsBeta.LinkResourceError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/views/{viewKey}/link/{resourceType}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkResourceSuccessResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ViewsBeta.LinkResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ViewsBeta.LinkResourceRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `viewKey` | `path` | — | `string` | yes |
| `resourceType` | `path` | — | `ResourceType2` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |
| `body` | `body` | — | `ViewLinkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType2` | `resourceType2Schema` | `src/models/resource-type2.ts` |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `ViewLinkRequest` | `viewLinkRequestSchema` | `src/models/unions/view-link-request.ts` |
| `LinkResourceSuccessResponse` | `linkResourceSuccessResponseSchema` | `src/models/link-resource-success-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### unlinkResource

- **Signature**: `unlinkResource(request: ViewsBeta.UnlinkResourceRequest, options?: RequestOptions): ApiPromise<UnlinkResourceSuccessResponse, ViewsBeta.UnlinkResourceError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/views/{viewKey}/link/{resourceType}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UnlinkResourceSuccessResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ViewsBeta.UnlinkResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ViewsBeta.UnlinkResourceRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `viewKey` | `path` | — | `string` | yes |
| `resourceType` | `path` | — | `ResourceType2` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |
| `body` | `body` | — | `ViewLinkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType2` | `resourceType2Schema` | `src/models/resource-type2.ts` |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `ViewLinkRequest` | `viewLinkRequestSchema` | `src/models/unions/view-link-request.ts` |
| `UnlinkResourceSuccessResponse` | `unlinkResourceSuccessResponseSchema` | `src/models/unlink-resource-success-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateView

- **Signature**: `updateView(request: ViewsBeta.UpdateViewRequest, options?: RequestOptions): ApiPromise<View, ViewsBeta.UpdateViewError>`
- **Wire**: `PATCH /api/v2/projects/{projectKey}/views/{viewKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `View`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ViewsBeta.UpdateViewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ViewsBeta.UpdateViewRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `viewKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |
| `body` | `body` | — | `ViewPatch` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `ViewPatch` | `viewPatchSchema` | `src/models/view-patch.ts` |
| `View` | `viewSchema` | `src/models/view.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

