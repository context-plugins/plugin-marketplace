<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deployments — operations

Accessor: `client.deployments` · Source: `boomi/apis/deployments.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.deployments.create_deployed_package

- **Route**: `POST /DeployedPackage`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def create_deployed_package(body: DeployedPackageInput | DeployedPackageInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DeployedPackage`
- **Returns (raw)**: `ApiResult[DeployedPackage, CreateDeployedPackageErrorBody]`
- **Error**: `CreateDeployedPackageErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeployedPackageInput` | `boomi/models/deployed_package_input.py` |
| `DeployedPackageInputDict` | `boomi/models/deployed_package_input.py` |
| `DeployedPackage` | `boomi/models/deployed_package.py` |
| `CreateDeployedPackageErrorBody` | `boomi/errors/create_deployed_package_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.deployments.delete_deployed_package

- **Route**: `DELETE /DeployedPackage/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def delete_deployed_package(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDeployedPackageErrorBody]`
- **Error**: `DeleteDeployedPackageErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteDeployedPackageErrorBody` | `boomi/errors/delete_deployed_package_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.deployments.get_deployed_package

- **Route**: `GET /DeployedPackage/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def get_deployed_package(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `DeployedPackage`
- **Returns (raw)**: `ApiResult[DeployedPackage, GetDeployedPackageErrorBody]`
- **Error**: `GetDeployedPackageErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeployedPackage` | `boomi/models/deployed_package.py` |
| `GetDeployedPackageErrorBody` | `boomi/errors/get_deployed_package_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.deployments.query_deployed_packages

- **Route**: `POST /DeployedPackage/query`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def query_deployed_packages(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DeployedPackageQueryResult`
- **Returns (raw)**: `ApiResult[DeployedPackageQueryResult, QueryDeployedPackagesErrorBody]`
- **Error**: `QueryDeployedPackagesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QueryRequest` | `boomi/models/query_request.py` |
| `QueryRequestDict` | `boomi/models/query_request.py` |
| `DeployedPackageQueryResult` | `boomi/models/deployed_package_query_result.py` |
| `QueryDeployedPackagesErrorBody` | `boomi/errors/query_deployed_packages_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

