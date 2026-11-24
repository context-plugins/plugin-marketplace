<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deployments — operations

Accessor: `client.deployments` · Source: `contentstack/apis/deployments.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.deployments.create_deployment

- **Route**: `POST /projects/{project_uid}/environments/{env_uid}/deployments`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default`
- **Signature**: `def create_deployment(project_uid: str, env_uid: str, body: CreateDeploymentRequest | CreateDeploymentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`, `env_uid`, `body`
- **Params**: `project_uid` — path · `env_uid` — path · `body` — JSON body
- **Returns (parsed)**: `Deployment`
- **Returns (raw)**: `ApiResult[Deployment, CreateDeploymentErrorBody]`
- **Error**: `CreateDeploymentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateDeploymentRequest` | `contentstack/models/create_deployment_request.py` |
| `CreateDeploymentRequestDict` | `contentstack/models/create_deployment_request.py` |
| `Deployment` | `contentstack/models/deployment.py` |
| `CreateDeploymentErrorBody` | `contentstack/errors/create_deployment_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.deployments.get_all_deployments

- **Route**: `GET /projects/{project_uid}/environments/{env_uid}/deployments`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default`
- **Signature**: `def get_all_deployments(project_uid: str, env_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`, `env_uid`
- **Params**: `project_uid` — path · `env_uid` — path
- **Returns (parsed)**: `DeploymentList`
- **Returns (raw)**: `ApiResult[DeploymentList, GetAllDeploymentsErrorBody]`
- **Error**: `GetAllDeploymentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeploymentList` | `contentstack/models/deployment_list.py` |
| `GetAllDeploymentsErrorBody` | `contentstack/errors/get_all_deployments_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.deployments.get_deployment

- **Route**: `GET /projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default`
- **Signature**: `def get_deployment(project_uid: str, env_uid: str, deploy_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`, `env_uid`, `deploy_uid`
- **Params**: `project_uid` — path · `env_uid` — path · `deploy_uid` — path
- **Returns (parsed)**: `Deployment`
- **Returns (raw)**: `ApiResult[Deployment, GetDeploymentErrorBody]`
- **Error**: `GetDeploymentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Deployment` | `contentstack/models/deployment.py` |
| `GetDeploymentErrorBody` | `contentstack/errors/get_deployment_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.deployments.get_deployment_logs

- **Route**: `GET /projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}/logs`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default`
- **Signature**: `def get_deployment_logs(project_uid: str, env_uid: str, deploy_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`, `env_uid`, `deploy_uid`
- **Params**: `project_uid` — path · `env_uid` — path · `deploy_uid` — path
- **Returns (parsed)**: `LogResponse`
- **Returns (raw)**: `ApiResult[LogResponse, GetDeploymentLogsErrorBody]`
- **Error**: `GetDeploymentLogsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LogResponse` | `contentstack/models/log_response.py` |
| `GetDeploymentLogsErrorBody` | `contentstack/errors/get_deployment_logs_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.deployments.get_server_logs

- **Route**: `GET /projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}/server-logs`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default`
- **Signature**: `def get_server_logs(project_uid: str, env_uid: str, deploy_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`, `env_uid`, `deploy_uid`
- **Params**: `project_uid` — path · `env_uid` — path · `deploy_uid` — path
- **Returns (parsed)**: `LogResponse`
- **Returns (raw)**: `ApiResult[LogResponse, GetServerLogsErrorBody]`
- **Error**: `GetServerLogsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LogResponse` | `contentstack/models/log_response.py` |
| `GetServerLogsErrorBody` | `contentstack/errors/get_server_logs_error.py` |
| `Error` | `contentstack/models/error.py` |

