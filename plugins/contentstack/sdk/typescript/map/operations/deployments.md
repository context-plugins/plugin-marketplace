<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deployments — operations

Accessor: `client.deployments` · Source: `src/resources/deployments.ts` · 5 operations · Request and error types: namespace `Deployments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDeployment

- **Signature**: `createDeployment(request: Deployments.CreateDeploymentRequestParams, options?: RequestOptions): ApiPromise<Deployment, Deployments.CreateDeploymentError>`
- **Wire**: `POST /projects/{project_uid}/environments/{env_uid}/deployments`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Deployment`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Deployments.CreateDeploymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deployments.CreateDeploymentRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `envUid` | `path` | `env_uid` | `string` | yes |
| `body` | `body` | — | `CreateDeploymentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateDeploymentRequest` | `createDeploymentRequestSchema` | `src/models/create-deployment-request.ts` |
| `Deployment` | `deploymentSchema` | `src/models/deployment.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAllDeployments

- **Signature**: `getAllDeployments(request: Deployments.GetAllDeploymentsRequest, options?: RequestOptions): ApiPromise<DeploymentList, Deployments.GetAllDeploymentsError>`
- **Wire**: `GET /projects/{project_uid}/environments/{env_uid}/deployments`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeploymentList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Deployments.GetAllDeploymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deployments.GetAllDeploymentsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `envUid` | `path` | `env_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeploymentList` | `deploymentListSchema` | `src/models/deployment-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getDeployment

- **Signature**: `getDeployment(request: Deployments.GetDeploymentRequest, options?: RequestOptions): ApiPromise<Deployment, Deployments.GetDeploymentError>`
- **Wire**: `GET /projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Deployment`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Deployments.GetDeploymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deployments.GetDeploymentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `envUid` | `path` | `env_uid` | `string` | yes |
| `deployUid` | `path` | `deploy_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Deployment` | `deploymentSchema` | `src/models/deployment.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getDeploymentLogs

- **Signature**: `getDeploymentLogs(request: Deployments.GetDeploymentLogsRequest, options?: RequestOptions): ApiPromise<LogResponse, Deployments.GetDeploymentLogsError>`
- **Wire**: `GET /projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}/logs`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LogResponse`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Deployments.GetDeploymentLogsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deployments.GetDeploymentLogsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `envUid` | `path` | `env_uid` | `string` | yes |
| `deployUid` | `path` | `deploy_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LogResponse` | `logResponseSchema` | `src/models/log-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getServerLogs

- **Signature**: `getServerLogs(request: Deployments.GetServerLogsRequest, options?: RequestOptions): ApiPromise<LogResponse, Deployments.GetServerLogsError>`
- **Wire**: `GET /projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}/server-logs`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LogResponse`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Deployments.GetServerLogsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deployments.GetServerLogsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `envUid` | `path` | `env_uid` | `string` | yes |
| `deployUid` | `path` | `deploy_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LogResponse` | `logResponseSchema` | `src/models/log-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

