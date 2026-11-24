<!-- Generated file — do not edit; regenerated with the SDK. -->

# SshKey — operations

Accessor: `client.ssh_key` · Source: `circle_ci/apis/ssh_key.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ssh_key.add_ssh_key

- **Route**: `POST /project/{vcs-type}/{username}/{project}/ssh-key`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def add_ssh_key(vcs_type: VcsTypeOrStr, username: str, project: str, body: ProjectProjectSshKeyRequest | ProjectProjectSshKeyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`, `body`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AddSshKeyErrorBody]`
- **Error**: `AddSshKeyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `ProjectProjectSshKeyRequest` | `circle_ci/models/project_project_ssh_key_request.py` |
| `ProjectProjectSshKeyRequestDict` | `circle_ci/models/project_project_ssh_key_request.py` |
| `AddSshKeyErrorBody` | `circle_ci/errors/add_ssh_key_error.py` |

### client.ssh_key.create_checkout_key2

- **Route**: `POST /project/{vcs-type}/{username}/{project}/checkout-key`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def create_checkout_key2(vcs_type: VcsTypeOrStr, username: str, project: str, body: ProjectProjectCheckoutKeyRequest | ProjectProjectCheckoutKeyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`, `body`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `CheckoutKeyCircleCiRestApiV1SshKeyApi`
- **Returns (raw)**: `ApiResult[CheckoutKeyCircleCiRestApiV1SshKeyApi, CreateCheckoutKey2ErrorBody]`
- **Error**: `CreateCheckoutKey2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `ProjectProjectCheckoutKeyRequest` | `circle_ci/models/project_project_checkout_key_request.py` |
| `ProjectProjectCheckoutKeyRequestDict` | `circle_ci/models/project_project_checkout_key_request.py` |
| `CheckoutKeyCircleCiRestApiV1SshKeyApi` | `circle_ci/models/checkout_key_circle_ci_rest_api_v1_ssh_key_api.py` |
| `CreateCheckoutKey2ErrorBody` | `circle_ci/errors/create_checkout_key2_error.py` |

### client.ssh_key.delete_checkout_key2

- **Route**: `DELETE /project/{vcs-type}/{username}/{project}/checkout-key/{fingerprint}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def delete_checkout_key2(vcs_type: VcsTypeOrStr, username: str, project: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`, `fingerprint`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `fingerprint` — path
- **Returns (parsed)**: `ProjectProjectCheckoutKeyFingerprintResponse`
- **Returns (raw)**: `ApiResult[ProjectProjectCheckoutKeyFingerprintResponse, DeleteCheckoutKey2ErrorBody]`
- **Error**: `DeleteCheckoutKey2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `ProjectProjectCheckoutKeyFingerprintResponse` | `circle_ci/models/project_project_checkout_key_fingerprint_response.py` |
| `DeleteCheckoutKey2ErrorBody` | `circle_ci/errors/delete_checkout_key2_error.py` |

### client.ssh_key.get_checkout_key2

- **Route**: `GET /project/{vcs-type}/{username}/{project}/checkout-key/{fingerprint}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def get_checkout_key2(vcs_type: VcsTypeOrStr, username: str, project: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`, `fingerprint`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `fingerprint` — path
- **Returns (parsed)**: `CheckoutKeyCircleCiRestApiV1SshKeyApi`
- **Returns (raw)**: `ApiResult[CheckoutKeyCircleCiRestApiV1SshKeyApi, GetCheckoutKey2ErrorBody]`
- **Error**: `GetCheckoutKey2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `CheckoutKeyCircleCiRestApiV1SshKeyApi` | `circle_ci/models/checkout_key_circle_ci_rest_api_v1_ssh_key_api.py` |
| `GetCheckoutKey2ErrorBody` | `circle_ci/errors/get_checkout_key2_error.py` |

### client.ssh_key.list_checkout_keys2

- **Route**: `GET /project/{vcs-type}/{username}/{project}/checkout-key`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def list_checkout_keys2(vcs_type: VcsTypeOrStr, username: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path
- **Returns (parsed)**: `list[CheckoutKeyCircleCiRestApiV1SshKeyApi]`
- **Returns (raw)**: `ApiResult[list[CheckoutKeyCircleCiRestApiV1SshKeyApi], ListCheckoutKeys2ErrorBody]`
- **Error**: `ListCheckoutKeys2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `CheckoutKeyCircleCiRestApiV1SshKeyApi` | `circle_ci/models/checkout_key_circle_ci_rest_api_v1_ssh_key_api.py` |
| `ListCheckoutKeys2ErrorBody` | `circle_ci/errors/list_checkout_keys2_error.py` |

