<!-- Generated file — do not edit; regenerated with the SDK. -->

# EmployeeApi — operations

Accessor: `client.employee_api` · Source: `flow_account/apis/employee_api.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.employee_api.employee_count

- **Route**: `GET /Employee/count`
- **Auth**: `bearer`
- **Signature**: `def employee_count(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.employee_api.employee_create

- **Route**: `POST /Employee`
- **Auth**: `bearer`
- **Signature**: `def employee_create(body: EmployeeModel | EmployeeModelDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `EmployeeModel` | `flow_account/models/employee_model.py` |
| `EmployeeModelDict` | `flow_account/models/employee_model.py` |

### client.employee_api.employee_edit

- **Route**: `PUT /Employee`
- **Auth**: `bearer`
- **Signature**: `def employee_edit(body: EmployeeModel | EmployeeModelDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `EmployeeModel` | `flow_account/models/employee_model.py` |
| `EmployeeModelDict` | `flow_account/models/employee_model.py` |

### client.employee_api.employee_get_by_id

- **Route**: `GET /Employee/{id}`
- **Auth**: `bearer`
- **Signature**: `def employee_get_by_id(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.employee_api.employee_get_list

- **Route**: `GET /Employee`
- **Auth**: `bearer`
- **Signature**: `def employee_get_list(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.employee_api.employee_remove

- **Route**: `DELETE /Employee/{id}`
- **Auth**: `bearer`
- **Signature**: `def employee_remove(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

