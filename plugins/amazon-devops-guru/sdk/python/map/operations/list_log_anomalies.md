<!-- Generated file — do not edit; regenerated with the SDK. -->

# ListLogAnomalies — operations

Accessor: `client.list_log_anomalies` · Source: `amazon_dev_ops_guru/apis/list_log_anomalies.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.list_log_anomalies.list_anomalous_log_groups

- **Route**: `POST /list-log-anomalies`
- **Auth**: `sigv4`
- **Signature**: `def list_anomalous_log_groups(*, body: ListLogAnomaliesRequest | ListLogAnomaliesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListAnomalousLogGroupsResponse`
- **Returns (raw)**: `ApiResult[ListAnomalousLogGroupsResponse, ListAnomalousLogGroupsErrorBody]`
- **Error**: `ListAnomalousLogGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListLogAnomaliesRequest` | `amazon_dev_ops_guru/models/list_log_anomalies_request.py` |
| `ListLogAnomaliesRequestDict` | `amazon_dev_ops_guru/models/list_log_anomalies_request.py` |
| `ListAnomalousLogGroupsResponse` | `amazon_dev_ops_guru/models/list_anomalous_log_groups_response.py` |
| `ListAnomalousLogGroupsErrorBody` | `amazon_dev_ops_guru/errors/list_anomalous_log_groups_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

