<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataSources — operations

Accessor: `client.dataSources` · Source: `src/resources/data-sources.ts` · 5 operations · Request and error types: namespace `DataSources`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dataSourcesCreate

- **Signature**: `dataSourcesCreate(request: DataSources.DataSourcesCreateRequest, options?: RequestOptions): ApiPromise<DataSourceDetailResponse, DataSources.DataSourcesCreateError>`
- **Wire**: `POST /api/v1/data_sources/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DataSourceDetailResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `DataSources.DataSourcesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.DataSourcesCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DataSourceCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataSourceCreateRequest` | `dataSourceCreateRequestSchema` | `src/models/data-source-create-request.ts` |
| `DataSourceDetailResponse` | `dataSourceDetailResponseSchema` | `src/models/data-source-detail-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### dataSourcesDelete

- **Signature**: `dataSourcesDelete(request: DataSources.DataSourcesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, DataSources.DataSourcesDeleteError>`
- **Wire**: `DELETE /api/v1/data_sources/{data_source_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `DataSources.DataSourcesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.DataSourcesDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `dataSourceId` | `path` | `data_source_id` | `number` | yes |
| `reason` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### dataSourcesGetById

- **Signature**: `dataSourcesGetById(request: DataSources.DataSourcesGetByIdRequest, options?: RequestOptions): ApiPromise<DataSourceDetailResponse, DataSources.DataSourcesGetByIdError>`
- **Wire**: `GET /api/v1/data_sources/{data_source_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DataSourceDetailResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `DataSources.DataSourcesGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.DataSourcesGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `dataSourceId` | `path` | `data_source_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataSourceDetailResponse` | `dataSourceDetailResponseSchema` | `src/models/data-source-detail-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### dataSourcesList

- **Signature**: `dataSourcesList(request: DataSources.DataSourcesListRequest, options?: RequestOptions): ApiPromise<ListResponseDataSourceMetadataResponse, DataSources.DataSourcesListError>`
- **Wire**: `GET /api/v1/data_sources/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDataSourceMetadataResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `DataSources.DataSourcesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.DataSourcesListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `DataSourceProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy4` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields4` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `DataSourceProperties` | `dataSourcePropertiesSchema` | `src/models/data-source-properties.ts` |
| `OrderBy4` | `orderBy4Schema` | `src/models/unions/order-by4.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields4` | `fields4Schema` | `src/models/unions/fields4.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseDataSourceMetadataResponse` | `listResponseDataSourceMetadataResponseSchema` | `src/models/list-response-data-source-metadata-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### dataSourcesUpdate

- **Signature**: `dataSourcesUpdate(request: DataSources.DataSourcesUpdateRequest, options?: RequestOptions): ApiPromise<DataSourceDetailResponse, DataSources.DataSourcesUpdateError>`
- **Wire**: `PUT /api/v1/data_sources/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DataSourceDetailResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `DataSources.DataSourcesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.DataSourcesUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DataSourceUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataSourceUpdateRequest` | `dataSourceUpdateRequestSchema` | `src/models/data-source-update-request.ts` |
| `DataSourceDetailResponse` | `dataSourceDetailResponseSchema` | `src/models/data-source-detail-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

