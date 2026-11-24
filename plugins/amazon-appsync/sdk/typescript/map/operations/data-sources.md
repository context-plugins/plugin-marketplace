<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataSources — operations

Accessor: `client.dataSources` · Source: `src/resources/data-sources.ts` · 7 operations · Request and error types: namespace `DataSources`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-app-sync`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDataSource

- **Signature**: `createDataSource(request: DataSources.CreateDataSourceRequest, options?: RequestOptions): ApiPromise<CreateDataSourceResponse, DataSources.CreateDataSourceError>`
- **Wire**: `POST /v1/apis/{apiId}/datasources`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateDataSourceResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DataSources.CreateDataSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.CreateDataSourceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `body` | `body` | `V1ApisDatasourcesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisDatasourcesRequest` | `v1ApisDatasourcesRequestSchema` | `src/models/v1-apis-datasources-request.ts` |
| `CreateDataSourceResponse` | `createDataSourceResponseSchema` | `src/models/create-data-source-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### deleteDataSource

- **Signature**: `deleteDataSource(request: DataSources.DeleteDataSourceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, DataSources.DeleteDataSourceError>`
- **Wire**: `DELETE /v1/apis/{apiId}/datasources/{name}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DataSources.DeleteDataSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.DeleteDataSourceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### getDataSource

- **Signature**: `getDataSource(request: DataSources.GetDataSourceRequest, options?: RequestOptions): ApiPromise<GetDataSourceResponse, DataSources.GetDataSourceError>`
- **Wire**: `GET /v1/apis/{apiId}/datasources/{name}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetDataSourceResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DataSources.GetDataSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.GetDataSourceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDataSourceResponse` | `getDataSourceResponseSchema` | `src/models/get-data-source-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### getDataSourceIntrospection

- **Signature**: `getDataSourceIntrospection(request: DataSources.GetDataSourceIntrospectionRequest, options?: RequestOptions): ApiPromise<GetDataSourceIntrospectionResponse, DataSources.GetDataSourceIntrospectionError>`
- **Wire**: `GET /v1/datasources/introspections/{introspectionId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetDataSourceIntrospectionResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DataSources.GetDataSourceIntrospectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.GetDataSourceIntrospectionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `introspectionId` | `path` | — | `string` | yes |
| `includeModelsSdl` | `query` | `includeModelsSDL` | `boolean` | no |
| `nextToken` | `query` | — | `string` | no |
| `maxResults` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDataSourceIntrospectionResponse` | `getDataSourceIntrospectionResponseSchema` | `src/models/get-data-source-introspection-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### listDataSources

- **Signature**: `listDataSources(request: DataSources.ListDataSourcesRequest, options?: RequestOptions): ApiPromise<ListDataSourcesResponse, DataSources.ListDataSourcesError>`
- **Wire**: `GET /v1/apis/{apiId}/datasources`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDataSourcesResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DataSources.ListDataSourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.ListDataSourcesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `nextToken` | `query` | `string` | no |
| `maxResults` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListDataSourcesResponse` | `listDataSourcesResponseSchema` | `src/models/list-data-sources-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### startDataSourceIntrospection

- **Signature**: `startDataSourceIntrospection(request?: DataSources.StartDataSourceIntrospectionRequest, options?: RequestOptions): ApiPromise<StartDataSourceIntrospectionResponse, DataSources.StartDataSourceIntrospectionError>`
- **Wire**: `POST /v1/datasources/introspections`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartDataSourceIntrospectionResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DataSources.StartDataSourceIntrospectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.StartDataSourceIntrospectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1DatasourcesIntrospectionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DatasourcesIntrospectionsRequest` | `v1DatasourcesIntrospectionsRequestSchema` | `src/models/v1-datasources-introspections-request.ts` |
| `StartDataSourceIntrospectionResponse` | `startDataSourceIntrospectionResponseSchema` | `src/models/start-data-source-introspection-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### updateDataSource

- **Signature**: `updateDataSource(request: DataSources.UpdateDataSourceRequest, options?: RequestOptions): ApiPromise<UpdateDataSourceResponse, DataSources.UpdateDataSourceError>`
- **Wire**: `POST /v1/apis/{apiId}/datasources/{name}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateDataSourceResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `DataSources.UpdateDataSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.UpdateDataSourceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |
| `body` | `body` | `V1ApisDatasourcesRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisDatasourcesRequest1` | `v1ApisDatasourcesRequest1Schema` | `src/models/v1-apis-datasources-request1.ts` |
| `UpdateDataSourceResponse` | `updateDataSourceResponseSchema` | `src/models/update-data-source-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

