<!-- Generated file — do not edit; regenerated with the SDK. -->

# Exports — operations

Accessor: `client.exports` · Source: `bill/apis/exports.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.exports.get_download_link

- **Route**: `GET /v3/exports/{exportId}/download-link`
- **Server**: `default`
- **Signature**: `def get_download_link(export_id: int, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `export_id`
- **Params**: `export_id` — path `exportId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ExportDownloadLinkResponseDto`
- **Returns (raw)**: `ApiResult[ExportDownloadLinkResponseDto, GetDownloadLinkErrorBody]`
- **Error**: `GetDownloadLinkErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExportDownloadLinkResponseDto` | `bill/models/export_download_link_response_dto.py` |
| `GetDownloadLinkErrorBody` | `bill/errors/get_download_link_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.exports.list_exports

- **Route**: `GET /v3/exports`
- **Server**: `default`
- **Signature**: `def list_exports(*, max_: int | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoExportResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoExportResponseDto, ListExportsErrorBody]`
- **Error**: `ListExportsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoExportResponseDto` | `bill/models/list_response_dto_export_response_dto.py` |
| `ListExportsErrorBody` | `bill/errors/list_exports_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

