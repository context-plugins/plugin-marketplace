<!-- Generated file — do not edit; regenerated with the SDK. -->

# Checks — operations

Accessor: `client.checks` · Source: `soda/apis/checks.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.checks.delete_api_v1_checks_check_id

- **Route**: `DELETE /api/v1/checks/{checkId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_checks_check_id(check_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `check_id`
- **Params**: `check_id` — path `checkId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteApiV1ChecksCheckIdErrorBody]`
- **Error**: `DeleteApiV1ChecksCheckIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteApiV1ChecksCheckIdErrorBody` | `soda/errors/delete_api_v1_checks_check_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.checks.get_api_v1_checks

- **Route**: `GET /api/v1/checks`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_checks(*, check_ids: str | None = None, data_standard_id: str | None = None, dataset_id: str | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `check_ids` — query `checkIds` · `data_standard_id` — query `dataStandardId` · `dataset_id` — query `datasetId` · `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiChecksResponse`
- **Returns (raw)**: `ApiResult[PublicApiChecksResponse, GetApiV1ChecksErrorBody]`
- **Error**: `GetApiV1ChecksErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiChecksResponse` | `soda/models/public_api_checks_response.py` |
| `GetApiV1ChecksErrorBody` | `soda/errors/get_api_v1_checks_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

