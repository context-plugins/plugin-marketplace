<!-- Generated file — do not edit; regenerated with the SDK. -->

# Datasources — operations

Accessor: `client.datasources` · Source: `src/resources/datasources.ts` · 3 operations · Request and error types: namespace `Datasources`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-indexing-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addOrUpdateDatasource

- **Signature**: `addOrUpdateDatasource(request: Datasources.AddOrUpdateDatasourceRequest, options?: RequestOptions): ApiPromise<undefined, Datasources.AddOrUpdateDatasourceError>`
- **Wire**: `POST /api/index/v1/adddatasource`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Datasources.AddOrUpdateDatasourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasources.AddOrUpdateDatasourceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CustomDatasourceConfig` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomDatasourceConfig` | `customDatasourceConfigSchema` | `src/models/custom-datasource-config.ts` |

### getDatasourceConfig

- **Signature**: `getDatasourceConfig(request: Datasources.GetDatasourceConfigRequestParams, options?: RequestOptions): ApiPromise<CustomDatasourceConfig, Datasources.GetDatasourceConfigError>`
- **Wire**: `POST /api/index/v1/getdatasourceconfig`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomDatasourceConfig`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Datasources.GetDatasourceConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasources.GetDatasourceConfigRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetDatasourceConfigRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDatasourceConfigRequest` | `getDatasourceConfigRequestSchema` | `src/models/get-datasource-config-request.ts` |
| `CustomDatasourceConfig` | `customDatasourceConfigSchema` | `src/models/custom-datasource-config.ts` |

### submitDatasourceData

- **Signature**: `submitDatasourceData(request: Datasources.SubmitDatasourceDataRequest, options?: RequestOptions): ApiPromise<RestApiIndexSubmissionsResponse, Datasources.SubmitDatasourceDataError>`
- **Wire**: `POST /rest/api/index/submissions/{datasourceInstance}/{type}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RestApiIndexSubmissionsResponse`
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `Datasources.SubmitDatasourceDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorInfoResponse"` [400] `ErrorInfoResponse` · `"errorInfoResponse2"` [401] `ErrorInfoResponse` · `"errorInfoResponse3"` [404] `ErrorInfoResponse` · `"error405"` [405] no body · `"error413"` [413] no body · `"errorInfoResponse4"` [500] `ErrorInfoResponse` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasources.SubmitDatasourceDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceInstance` | `path` | `string` | yes |
| `type` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestApiIndexSubmissionsResponse` | `restApiIndexSubmissionsResponseSchema` | `src/models/rest-api-index-submissions-response.ts` |
| `ErrorInfoResponse` | `errorInfoResponseSchema` | `src/models/error-info-response.ts` |

