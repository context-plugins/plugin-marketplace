<!-- Generated file — do not edit; regenerated with the SDK. -->

# Datasets — operations

Accessor: `client.datasets` · Source: `src/resources/datasets.ts` · 24 operations · Request and error types: namespace `Datasets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1DatasetsRolesRoleId

- **Signature**: `deleteApiV1DatasetsRolesRoleId(request: Datasets.DeleteApiV1DatasetsRolesRoleIdRequest, options?: RequestOptions): ApiPromise<PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsRolesRoleIdError>`
- **Wire**: `DELETE /api/v1/datasets/roles/{roleId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiDeleteDatasetResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.DeleteApiV1DatasetsRolesRoleIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.DeleteApiV1DatasetsRolesRoleIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `roleId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDeleteDatasetResponse` | `publicApiDeleteDatasetResponseSchema` | `src/models/public-api-delete-dataset-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteApiV1DatasetsDatasetId

- **Signature**: `deleteApiV1DatasetsDatasetId(request: Datasets.DeleteApiV1DatasetsDatasetIdRequest, options?: RequestOptions): ApiPromise<PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsDatasetIdError>`
- **Wire**: `DELETE /api/v1/datasets/{datasetId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiDeleteDatasetResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.DeleteApiV1DatasetsDatasetIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.DeleteApiV1DatasetsDatasetIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDeleteDatasetResponse` | `publicApiDeleteDatasetResponseSchema` | `src/models/public-api-delete-dataset-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId

- **Signature**: `deleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(request: Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest, options?: RequestOptions): ApiPromise<PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError>`
- **Wire**: `DELETE /api/v1/datasets/{datasetId}/columnMetricMonitors/{monitorId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiDeleteDatasetResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |
| `monitorId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDeleteDatasetResponse` | `publicApiDeleteDatasetResponseSchema` | `src/models/public-api-delete-dataset-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId

- **Signature**: `deleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(request: Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest, options?: RequestOptions): ApiPromise<PublicApiDeleteDatasetResponse, Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError>`
- **Wire**: `DELETE /api/v1/datasets/{datasetId}/customSqlMonitors/{monitorId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiDeleteDatasetResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |
| `monitorId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDeleteDatasetResponse` | `publicApiDeleteDatasetResponseSchema` | `src/models/public-api-delete-dataset-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1Datasets

- **Signature**: `getApiV1Datasets(request?: Datasets.GetApiV1DatasetsRequest, options?: RequestOptions): ApiPromise<PublicApiDatasetsResponse, Datasets.GetApiV1DatasetsError>`
- **Wire**: `GET /api/v1/datasets`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiDatasetsResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.GetApiV1DatasetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.GetApiV1DatasetsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceName` | `query` | `string` | no |
| `from` | `query` | `Date` (date-time) | no |
| `page` | `query` | `number` | no |
| `search` | `query` | `string` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasetsResponse` | `publicApiDatasetsResponseSchema` | `src/models/public-api-datasets-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName

- **Signature**: `getApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName(request: Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest, options?: RequestOptions): ApiPromise<DatasetsContentDto, Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError>`
- **Wire**: `GET /api/v1/datasets/byDatasetQualifiedName/{datasetQualifiedName}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DatasetsContentDto`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetQualifiedName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatasetsContentDto` | `datasetsContentDtoSchema` | `src/models/datasets-content-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasetsRoles

- **Signature**: `getApiV1DatasetsRoles(request?: Datasets.GetApiV1DatasetsRolesRequest, options?: RequestOptions): ApiPromise<PublicApiDatasetRolesResponse, Datasets.GetApiV1DatasetsRolesError>`
- **Wire**: `GET /api/v1/datasets/roles`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiDatasetRolesResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.GetApiV1DatasetsRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.GetApiV1DatasetsRolesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasetRolesResponse` | `publicApiDatasetRolesResponseSchema` | `src/models/public-api-dataset-roles-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasetsDatasetId

- **Signature**: `getApiV1DatasetsDatasetId(request: Datasets.GetApiV1DatasetsDatasetIdRequest, options?: RequestOptions): ApiPromise<DatasetsContentDto, Datasets.GetApiV1DatasetsDatasetIdError>`
- **Wire**: `GET /api/v1/datasets/{datasetId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DatasetsContentDto`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.GetApiV1DatasetsDatasetIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.GetApiV1DatasetsDatasetIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatasetsContentDto` | `datasetsContentDtoSchema` | `src/models/datasets-content-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasetsDatasetIdColumns

- **Signature**: `getApiV1DatasetsDatasetIdColumns(request: Datasets.GetApiV1DatasetsDatasetIdColumnsRequest, options?: RequestOptions): ApiPromise<PublicApiListDatasetColumnsResponse, Datasets.GetApiV1DatasetsDatasetIdColumnsError>`
- **Wire**: `GET /api/v1/datasets/{datasetId}/columns`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiListDatasetColumnsResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.GetApiV1DatasetsDatasetIdColumnsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.GetApiV1DatasetsDatasetIdColumnsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiListDatasetColumnsResponse` | `publicApiListDatasetColumnsResponseSchema` | `src/models/public-api-list-dataset-columns-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasetsDatasetIdComputeWarehouse

- **Signature**: `getApiV1DatasetsDatasetIdComputeWarehouse(request: Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseRequest, options?: RequestOptions): ApiPromise<DatasetComputeWarehouseConfigurationDto, Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseError>`
- **Wire**: `GET /api/v1/datasets/{datasetId}/computeWarehouse`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DatasetComputeWarehouseConfigurationDto`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.GetApiV1DatasetsDatasetIdComputeWarehouseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatasetComputeWarehouseConfigurationDto` | `datasetComputeWarehouseConfigurationDtoSchema` | `src/models/dataset-compute-warehouse-configuration-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasetsDatasetIdDiagnosticsWarehouse

- **Signature**: `getApiV1DatasetsDatasetIdDiagnosticsWarehouse(request: Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest, options?: RequestOptions): ApiPromise<PublicApiDatasetDiagnosticsWarehouseResponse, Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError>`
- **Wire**: `GET /api/v1/datasets/{datasetId}/diagnosticsWarehouse`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiDatasetDiagnosticsWarehouseResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasetDiagnosticsWarehouseResponse` | `publicApiDatasetDiagnosticsWarehouseResponseSchema` | `src/models/public-api-dataset-diagnostics-warehouse-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasetsDatasetIdMetricMonitoring

- **Signature**: `getApiV1DatasetsDatasetIdMetricMonitoring(request: Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringRequest, options?: RequestOptions): ApiPromise<PublicApiDatasetMetricMonitoringResponse, Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringError>`
- **Wire**: `GET /api/v1/datasets/{datasetId}/metricMonitoring`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiDatasetMetricMonitoringResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.GetApiV1DatasetsDatasetIdMetricMonitoringRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasetMetricMonitoringResponse` | `publicApiDatasetMetricMonitoringResponseSchema` | `src/models/public-api-dataset-metric-monitoring-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasetsDatasetIdProfiling

- **Signature**: `getApiV1DatasetsDatasetIdProfiling(request: Datasets.GetApiV1DatasetsDatasetIdProfilingRequest, options?: RequestOptions): ApiPromise<PublicApiDatasetProfilingResponse, Datasets.GetApiV1DatasetsDatasetIdProfilingError>`
- **Wire**: `GET /api/v1/datasets/{datasetId}/profiling`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiDatasetProfilingResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.GetApiV1DatasetsDatasetIdProfilingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.GetApiV1DatasetsDatasetIdProfilingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasetProfilingResponse` | `publicApiDatasetProfilingResponseSchema` | `src/models/public-api-dataset-profiling-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasetsDatasetIdResponsibilities

- **Signature**: `getApiV1DatasetsDatasetIdResponsibilities(request: Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesRequest, options?: RequestOptions): ApiPromise<PublicApiDatasetResponsibilitiesResponse, Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesError>`
- **Wire**: `GET /api/v1/datasets/{datasetId}/responsibilities`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiDatasetResponsibilitiesResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.GetApiV1DatasetsDatasetIdResponsibilitiesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasetResponsibilitiesResponse` | `publicApiDatasetResponsibilitiesResponseSchema` | `src/models/public-api-dataset-responsibilities-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasetsRoles

- **Signature**: `postApiV1DatasetsRoles(request: Datasets.PostApiV1DatasetsRolesRequest, options?: RequestOptions): ApiPromise<PublicApiUpdateDatasetRoleResponse, Datasets.PostApiV1DatasetsRolesError>`
- **Wire**: `POST /api/v1/datasets/roles`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiUpdateDatasetRoleResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.PostApiV1DatasetsRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.PostApiV1DatasetsRolesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiDatasetRoleRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasetRoleRequestDto` | `publicApiDatasetRoleRequestDtoSchema` | `src/models/public-api-dataset-role-request-dto.ts` |
| `PublicApiUpdateDatasetRoleResponse` | `publicApiUpdateDatasetRoleResponseSchema` | `src/models/public-api-update-dataset-role-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasetsRolesRoleId

- **Signature**: `postApiV1DatasetsRolesRoleId(request: Datasets.PostApiV1DatasetsRolesRoleIdRequest, options?: RequestOptions): ApiPromise<PublicApiUpdateDatasetRoleResponse, Datasets.PostApiV1DatasetsRolesRoleIdError>`
- **Wire**: `POST /api/v1/datasets/roles/{roleId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiUpdateDatasetRoleResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.PostApiV1DatasetsRolesRoleIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.PostApiV1DatasetsRolesRoleIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `roleId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiDatasetRoleRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasetRoleRequestDto` | `publicApiDatasetRoleRequestDtoSchema` | `src/models/public-api-dataset-role-request-dto.ts` |
| `PublicApiUpdateDatasetRoleResponse` | `publicApiUpdateDatasetRoleResponseSchema` | `src/models/public-api-update-dataset-role-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasetsDatasetId

- **Signature**: `postApiV1DatasetsDatasetId(request: Datasets.PostApiV1DatasetsDatasetIdRequest, options?: RequestOptions): ApiPromise<DatasetsContentDto, Datasets.PostApiV1DatasetsDatasetIdError>`
- **Wire**: `POST /api/v1/datasets/{datasetId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DatasetsContentDto`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.PostApiV1DatasetsDatasetIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.PostApiV1DatasetsDatasetIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiUpdateDatasetDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUpdateDatasetDto` | `publicApiUpdateDatasetDtoSchema` | `src/models/public-api-update-dataset-dto.ts` |
| `DatasetsContentDto` | `datasetsContentDtoSchema` | `src/models/datasets-content-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasetsDatasetIdColumnAttributes

- **Signature**: `postApiV1DatasetsDatasetIdColumnAttributes(request: Datasets.PostApiV1DatasetsDatasetIdColumnAttributesRequest, options?: RequestOptions): ApiPromise<undefined, Datasets.PostApiV1DatasetsDatasetIdColumnAttributesError>`
- **Wire**: `POST /api/v1/datasets/{datasetId}/columnAttributes`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.PostApiV1DatasetsDatasetIdColumnAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.PostApiV1DatasetsDatasetIdColumnAttributesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiSetColumnAttributesRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiSetColumnAttributesRequestDto` | `publicApiSetColumnAttributesRequestDtoSchema` | `src/models/public-api-set-column-attributes-request-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasetsDatasetIdColumnMetricMonitors

- **Signature**: `postApiV1DatasetsDatasetIdColumnMetricMonitors(request: Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest, options?: RequestOptions): ApiPromise<PublicApiUpdateColumnMetricMonitorResponse, Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsError>`
- **Wire**: `POST /api/v1/datasets/{datasetId}/columnMetricMonitors`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiUpdateColumnMetricMonitorResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiCreateColumnMetricMonitorRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiCreateColumnMetricMonitorRequestDto` | `publicApiCreateColumnMetricMonitorRequestDtoSchema` | `src/models/public-api-create-column-metric-monitor-request-dto.ts` |
| `PublicApiUpdateColumnMetricMonitorResponse` | `publicApiUpdateColumnMetricMonitorResponseSchema` | `src/models/public-api-update-column-metric-monitor-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId

- **Signature**: `postApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(request: Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest, options?: RequestOptions): ApiPromise<PublicApiUpdateColumnMetricMonitorResponse, Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError>`
- **Wire**: `POST /api/v1/datasets/{datasetId}/columnMetricMonitors/{monitorId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiUpdateColumnMetricMonitorResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |
| `monitorId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiUpdateColumnMetricMonitorRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUpdateColumnMetricMonitorRequestDto` | `publicApiUpdateColumnMetricMonitorRequestDtoSchema` | `src/models/public-api-update-column-metric-monitor-request-dto.ts` |
| `PublicApiUpdateColumnMetricMonitorResponse` | `publicApiUpdateColumnMetricMonitorResponseSchema` | `src/models/public-api-update-column-metric-monitor-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasetsDatasetIdCustomSqlMonitors

- **Signature**: `postApiV1DatasetsDatasetIdCustomSqlMonitors(request: Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest, options?: RequestOptions): ApiPromise<PublicApiCreateCustomSqlMonitorResponse, Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsError>`
- **Wire**: `POST /api/v1/datasets/{datasetId}/customSqlMonitors`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiCreateCustomSqlMonitorResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiCreateCustomSqlMonitorRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiCreateCustomSqlMonitorRequestDto` | `publicApiCreateCustomSqlMonitorRequestDtoSchema` | `src/models/public-api-create-custom-sql-monitor-request-dto.ts` |
| `PublicApiCreateCustomSqlMonitorResponse` | `publicApiCreateCustomSqlMonitorResponseSchema` | `src/models/public-api-create-custom-sql-monitor-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId

- **Signature**: `postApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(request: Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest, options?: RequestOptions): ApiPromise<PublicApiUpdateCustomSqlMonitorResponse, Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError>`
- **Wire**: `POST /api/v1/datasets/{datasetId}/customSqlMonitors/{monitorId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiUpdateCustomSqlMonitorResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |
| `monitorId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiUpdateCustomSqlMonitorRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUpdateCustomSqlMonitorRequestDto` | `publicApiUpdateCustomSqlMonitorRequestDtoSchema` | `src/models/public-api-update-custom-sql-monitor-request-dto.ts` |
| `PublicApiUpdateCustomSqlMonitorResponse` | `publicApiUpdateCustomSqlMonitorResponseSchema` | `src/models/public-api-update-custom-sql-monitor-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection

- **Signature**: `postApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection(request: Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest, options?: RequestOptions): ApiPromise<undefined, Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError>`
- **Wire**: `POST /api/v1/datasets/{datasetId}/metricMonitoring/historicalMetricCollection`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasetsDatasetIdResponsibilities

- **Signature**: `postApiV1DatasetsDatasetIdResponsibilities(request: Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesRequest, options?: RequestOptions): ApiPromise<undefined, Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesError>`
- **Wire**: `POST /api/v1/datasets/{datasetId}/responsibilities`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.PostApiV1DatasetsDatasetIdResponsibilitiesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasetId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiUpdateDatasetResponsibilitiesRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUpdateDatasetResponsibilitiesRequestDto` | `publicApiUpdateDatasetResponsibilitiesRequestDtoSchema` | `src/models/public-api-update-dataset-responsibilities-request-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

