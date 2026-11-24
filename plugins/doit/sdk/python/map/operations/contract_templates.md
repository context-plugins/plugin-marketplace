<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContractTemplates — operations

Accessor: `client.contract_templates` · Source: `doi_t/apis/contract_templates.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.contract_templates.archive_contract_template

- **Route**: `DELETE /billing/v1/contract-templates/{templateID}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def archive_contract_template(template_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `template_id`
- **Params**: `template_id` — path `templateID`
- **Returns (parsed)**: `ContractTemplateResponse`
- **Returns (raw)**: `ApiResult[ContractTemplateResponse, ArchiveContractTemplateErrorBody]`
- **Error**: `ArchiveContractTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContractTemplateResponse` | `doi_t/models/contract_template_response.py` |
| `ArchiveContractTemplateErrorBody` | `doi_t/errors/archive_contract_template_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.contract_templates.assign_contract_template

- **Route**: `POST /billing/v1/contract-templates/{templateID}/actions/assign`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def assign_contract_template(template_id: str, body: AssignContractTemplateInput | AssignContractTemplateInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `template_id`, `body`
- **Params**: `template_id` — path `templateID` · `body` — JSON body
- **Returns (parsed)**: `AssignContractTemplateResponse`
- **Returns (raw)**: `ApiResult[AssignContractTemplateResponse, AssignContractTemplateErrorBody]`
- **Error**: `AssignContractTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AssignContractTemplateInput` | `doi_t/models/assign_contract_template_input.py` |
| `AssignContractTemplateInputDict` | `doi_t/models/assign_contract_template_input.py` |
| `AssignContractTemplateResponse` | `doi_t/models/assign_contract_template_response.py` |
| `AssignContractTemplateErrorBody` | `doi_t/errors/assign_contract_template_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.contract_templates.create_contract_template

- **Route**: `POST /billing/v1/contract-templates`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_contract_template(body: ContractTemplateInput | ContractTemplateInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ContractTemplateResponse`
- **Returns (raw)**: `ApiResult[ContractTemplateResponse, CreateContractTemplateErrorBody]`
- **Error**: `CreateContractTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContractTemplateInput` | `doi_t/models/contract_template_input.py` |
| `ContractTemplateInputDict` | `doi_t/models/contract_template_input.py` |
| `ContractTemplateResponse` | `doi_t/models/contract_template_response.py` |
| `CreateContractTemplateErrorBody` | `doi_t/errors/create_contract_template_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.contract_templates.get_contract_template

- **Route**: `GET /billing/v1/contract-templates/{templateID}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_contract_template(template_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `template_id`
- **Params**: `template_id` — path `templateID`
- **Returns (parsed)**: `ContractTemplateResponse`
- **Returns (raw)**: `ApiResult[ContractTemplateResponse, GetContractTemplateErrorBody]`
- **Error**: `GetContractTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContractTemplateResponse` | `doi_t/models/contract_template_response.py` |
| `GetContractTemplateErrorBody` | `doi_t/errors/get_contract_template_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.contract_templates.list_contract_templates

- **Route**: `GET /billing/v1/contract-templates`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_contract_templates(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[ContractTemplateResponse]`
- **Returns (raw)**: `ApiResult[list[ContractTemplateResponse], ListContractTemplatesErrorBody]`
- **Error**: `ListContractTemplatesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContractTemplateResponse` | `doi_t/models/contract_template_response.py` |
| `ListContractTemplatesErrorBody` | `doi_t/errors/list_contract_templates_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.contract_templates.update_contract_template

- **Route**: `PUT /billing/v1/contract-templates/{templateID}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_contract_template(template_id: str, body: ContractTemplateInput | ContractTemplateInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `template_id`, `body`
- **Params**: `template_id` — path `templateID` · `body` — JSON body
- **Returns (parsed)**: `ContractTemplateResponse`
- **Returns (raw)**: `ApiResult[ContractTemplateResponse, UpdateContractTemplateErrorBody]`
- **Error**: `UpdateContractTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContractTemplateInput` | `doi_t/models/contract_template_input.py` |
| `ContractTemplateInputDict` | `doi_t/models/contract_template_input.py` |
| `ContractTemplateResponse` | `doi_t/models/contract_template_response.py` |
| `UpdateContractTemplateErrorBody` | `doi_t/errors/update_contract_template_error.py` |
| `Error` | `doi_t/models/error.py` |

