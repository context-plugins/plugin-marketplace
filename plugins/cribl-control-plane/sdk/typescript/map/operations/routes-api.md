<!-- Generated file — do not edit; regenerated with the SDK. -->

# RoutesApi — operations

Accessor: `client.routesApi` · Source: `src/resources/routes-api.ts` · 8 operations · Request and error types: namespace `RoutesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createRoutesAppendById

- **Signature**: `createRoutesAppendById(request: RoutesApi.CreateRoutesAppendByIdRequest, options?: RequestOptions): ApiPromise<CountedRoutes, RoutesApi.CreateRoutesAppendByIdError>`
- **Wire**: `POST /routes/{id}/append`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedRoutes`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `RoutesApi.CreateRoutesAppendByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RoutesApi.CreateRoutesAppendByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `RouteConfInput[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RouteConfInput` | `routeConfInputSchema` | `src/models/route-conf-input.ts` |
| `CountedRoutes` | `countedRoutesSchema` | `src/models/counted-routes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createRoutesAppendByPackAndId

- **Signature**: `createRoutesAppendByPackAndId(request: RoutesApi.CreateRoutesAppendByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedRoutes, RoutesApi.CreateRoutesAppendByPackAndIdError>`
- **Wire**: `POST /p/{pack}/routes/{id}/append`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedRoutes`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `RoutesApi.CreateRoutesAppendByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RoutesApi.CreateRoutesAppendByPackAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |
| `body` | `body` | `RouteConfInput[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RouteConfInput` | `routeConfInputSchema` | `src/models/route-conf-input.ts` |
| `CountedRoutes` | `countedRoutesSchema` | `src/models/counted-routes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getRoutes

- **Signature**: `getRoutes(request: RoutesApi.GetRoutesRequest, options?: RequestOptions): ApiPromise<PaginatedRoutes, RoutesApi.GetRoutesError>`
- **Wire**: `GET /routes`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedRoutes`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `RoutesApi.GetRoutesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RoutesApi.GetRoutesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedRoutes` | `paginatedRoutesSchema` | `src/models/paginated-routes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getRoutesById

- **Signature**: `getRoutesById(request: RoutesApi.GetRoutesByIdRequest, options?: RequestOptions): ApiPromise<CountedRoutes, RoutesApi.GetRoutesByIdError>`
- **Wire**: `GET /routes/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedRoutes`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `RoutesApi.GetRoutesByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RoutesApi.GetRoutesByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedRoutes` | `countedRoutesSchema` | `src/models/counted-routes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getRoutesByPack

- **Signature**: `getRoutesByPack(request: RoutesApi.GetRoutesByPackRequest, options?: RequestOptions): ApiPromise<PaginatedRoutes, RoutesApi.GetRoutesByPackError>`
- **Wire**: `GET /p/{pack}/routes`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedRoutes`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `RoutesApi.GetRoutesByPackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RoutesApi.GetRoutesByPackRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pack` | `path` | `string` | yes |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedRoutes` | `paginatedRoutesSchema` | `src/models/paginated-routes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getRoutesByPackAndId

- **Signature**: `getRoutesByPackAndId(request: RoutesApi.GetRoutesByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedRoutes, RoutesApi.GetRoutesByPackAndIdError>`
- **Wire**: `GET /p/{pack}/routes/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedRoutes`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `RoutesApi.GetRoutesByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RoutesApi.GetRoutesByPackAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedRoutes` | `countedRoutesSchema` | `src/models/counted-routes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateRoutesById

- **Signature**: `updateRoutesById(request: RoutesApi.UpdateRoutesByIdRequest, options?: RequestOptions): ApiPromise<CountedRoutes, RoutesApi.UpdateRoutesByIdError>`
- **Wire**: `PATCH /routes/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedRoutes`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `RoutesApi.UpdateRoutesByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RoutesApi.UpdateRoutesByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `RoutesInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoutesInput` | `routesInputSchema` | `src/models/routes-input.ts` |
| `CountedRoutes` | `countedRoutesSchema` | `src/models/counted-routes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateRoutesByPackAndId

- **Signature**: `updateRoutesByPackAndId(request: RoutesApi.UpdateRoutesByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedRoutes, RoutesApi.UpdateRoutesByPackAndIdError>`
- **Wire**: `PATCH /p/{pack}/routes/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedRoutes`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `RoutesApi.UpdateRoutesByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RoutesApi.UpdateRoutesByPackAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |
| `body` | `body` | `RoutesInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoutesInput` | `routesInputSchema` | `src/models/routes-input.ts` |
| `CountedRoutes` | `countedRoutesSchema` | `src/models/counted-routes.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

