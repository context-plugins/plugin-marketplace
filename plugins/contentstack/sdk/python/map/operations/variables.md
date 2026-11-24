<!-- Generated file — do not edit; regenerated with the SDK. -->

# Variables — operations

Accessor: `client.variables` · Source: `contentstack/apis/variables.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.variables.create_variable

- **Route**: `POST /v1/organizations/{organization_uid}/projects/{project_uid}/variables`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_automate_management_accounts_api`
- **Signature**: `def create_variable(organization_uid: str, project_uid: str, body: CreateVariableRequest | CreateVariableRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`, `body`
- **Params**: `organization_uid` — path · `project_uid` — path · `body` — JSON body
- **Returns (parsed)**: `Variable`
- **Returns (raw)**: `ApiResult[Variable, CreateVariableErrorBody]`
- **Error**: `CreateVariableErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateVariableRequest` | `contentstack/models/create_variable_request.py` |
| `CreateVariableRequestDict` | `contentstack/models/create_variable_request.py` |
| `Variable` | `contentstack/models/variable.py` |
| `CreateVariableErrorBody` | `contentstack/errors/create_variable_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.variables.get_all_variables

- **Route**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/variables`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_automate_management_accounts_api`
- **Signature**: `def get_all_variables(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`
- **Params**: `organization_uid` — path · `project_uid` — path
- **Returns (parsed)**: `VariableList`
- **Returns (raw)**: `ApiResult[VariableList, GetAllVariablesErrorBody]`
- **Error**: `GetAllVariablesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VariableList` | `contentstack/models/variable_list.py` |
| `GetAllVariablesErrorBody` | `contentstack/errors/get_all_variables_error.py` |
| `Error` | `contentstack/models/error.py` |

