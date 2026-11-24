<!-- Generated file — do not edit; regenerated with the SDK. -->

# Processes — operations

Accessor: `client.processes` · Source: `ui_path/apis/processes.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.processes.list_processes

- **Route**: `GET /odata/Processes`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_processes(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `$filter` · `orderby` — query `$orderby` · `top` — query `$top` · `skip` — query `$skip` · `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId`
- **Returns (parsed)**: `ODataProcessCollection`
- **Returns (raw)**: `ApiResult[ODataProcessCollection, ListProcessesErrorBody]`
- **Error**: `ListProcessesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ODataProcessCollection` | `ui_path/models/o_data_process_collection.py` |
| `ListProcessesErrorBody` | `ui_path/errors/list_processes_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

