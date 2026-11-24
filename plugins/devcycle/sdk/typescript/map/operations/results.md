<!-- Generated file — do not edit; regenerated with the SDK. -->

# Results — operations

Accessor: `client.results` · Source: `src/resources/results.ts` · 3 operations · Request and error types: namespace `Results`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### resultsControllerGetEvaluationsPerHourByProject

- **Signature**: `resultsControllerGetEvaluationsPerHourByProject(request: Results.ResultsControllerGetEvaluationsPerHourByProjectRequest, options?: RequestOptions): ApiPromise<ResultProjectEvaluationsByHourDto, Results.ResultsControllerGetEvaluationsPerHourByProjectError>`
- **Wire**: `GET /v1/projects/{project}/results/evaluations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResultProjectEvaluationsByHourDto`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Results.ResultsControllerGetEvaluationsPerHourByProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Results.ResultsControllerGetEvaluationsPerHourByProjectRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `startDate` | `query` | `number` | no |
| `endDate` | `query` | `number` | no |
| `environment` | `query` | `string` | no |
| `period` | `query` | `Period` | no |
| `sdkType` | `query` | `SdkTypeDevCycleManagementResultsApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Period` | `periodSchema` | `src/models/period.ts` |
| `SdkTypeDevCycleManagementResultsApi` | `sdkTypeDevCycleManagementResultsApiSchema` | `src/models/sdk-type-dev-cycle-management-results-api.ts` |
| `ResultProjectEvaluationsByHourDto` | `resultProjectEvaluationsByHourDtoSchema` | `src/models/result-project-evaluations-by-hour-dto.ts` |

### resultsControllerGetTotalEvaluationsPerHourByFeature

- **Signature**: `resultsControllerGetTotalEvaluationsPerHourByFeature(request: Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest, options?: RequestOptions): ApiPromise<ResultEvaluationsByHourDto, Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureError>`
- **Wire**: `GET /v1/projects/{project}/features/{feature}/results/total-evaluations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResultEvaluationsByHourDto`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `startDate` | `query` | `number` | no |
| `endDate` | `query` | `number` | no |
| `platform` | `query` | `string` | no |
| `variable` | `query` | `string` | no |
| `environment` | `query` | `string` | no |
| `period` | `query` | `Period` | no |
| `sdkType` | `query` | `SdkTypeDevCycleManagementResultsApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Period` | `periodSchema` | `src/models/period.ts` |
| `SdkTypeDevCycleManagementResultsApi` | `sdkTypeDevCycleManagementResultsApiSchema` | `src/models/sdk-type-dev-cycle-management-results-api.ts` |
| `ResultEvaluationsByHourDto` | `resultEvaluationsByHourDtoSchema` | `src/models/result-evaluations-by-hour-dto.ts` |

### resultsControllerGetTotalEvaluationsPerHourByProject

- **Signature**: `resultsControllerGetTotalEvaluationsPerHourByProject(request: Results.ResultsControllerGetTotalEvaluationsPerHourByProjectRequest, options?: RequestOptions): ApiPromise<ResultProjectEvaluationsByHourDto, Results.ResultsControllerGetTotalEvaluationsPerHourByProjectError>`
- **Wire**: `GET /v1/projects/{project}/results/total-evaluations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResultProjectEvaluationsByHourDto`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Results.ResultsControllerGetTotalEvaluationsPerHourByProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Results.ResultsControllerGetTotalEvaluationsPerHourByProjectRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `startDate` | `query` | `number` | no |
| `endDate` | `query` | `number` | no |
| `environment` | `query` | `string` | no |
| `period` | `query` | `Period` | no |
| `sdkType` | `query` | `SdkTypeDevCycleManagementResultsApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Period` | `periodSchema` | `src/models/period.ts` |
| `SdkTypeDevCycleManagementResultsApi` | `sdkTypeDevCycleManagementResultsApiSchema` | `src/models/sdk-type-dev-cycle-management-results-api.ts` |
| `ResultProjectEvaluationsByHourDto` | `resultProjectEvaluationsByHourDtoSchema` | `src/models/result-project-evaluations-by-hour-dto.ts` |

