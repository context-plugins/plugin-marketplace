<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connections — operations

Accessor: `client.connections` · Source: `doi_t/apis/connections.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.connections.create_cloudflow_connection

- **Route**: `POST /cloudflow/v1/connections`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_cloudflow_connection(body: CloudflowV1ConnectionsRequest | CloudflowV1ConnectionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CloudflowConnection`
- **Returns (raw)**: `ApiResult[CloudflowConnection, CreateCloudflowConnectionErrorBody]`
- **Error**: `CreateCloudflowConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowV1ConnectionsRequest` | `doi_t/models/cloudflow_v1_connections_request.py` |
| `CloudflowV1ConnectionsRequestDict` | `doi_t/models/cloudflow_v1_connections_request.py` |
| `CloudflowConnection` | `doi_t/models/cloudflow_connection.py` |
| `CreateCloudflowConnectionErrorBody` | `doi_t/errors/create_cloudflow_connection_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.connections.delete_cloudflow_connection

- **Route**: `DELETE /cloudflow/v1/connections/{connectionId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_cloudflow_connection(connection_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `connection_id`
- **Params**: `connection_id` — path `connectionId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCloudflowConnectionErrorBody]`
- **Error**: `DeleteCloudflowConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `CloudflowV1Connections409Error1` [409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCloudflowConnectionErrorBody` | `doi_t/errors/delete_cloudflow_connection_error.py` |
| `Error` | `doi_t/models/error.py` |
| `CloudflowV1Connections409Error1` | `doi_t/models/cloudflow_v1_connections409_error1.py` |

### client.connections.get_cloudflow_connection

- **Route**: `GET /cloudflow/v1/connections/{connectionId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_cloudflow_connection(connection_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `connection_id`
- **Params**: `connection_id` — path `connectionId`
- **Returns (parsed)**: `CloudflowConnection`
- **Returns (raw)**: `ApiResult[CloudflowConnection, GetCloudflowConnectionErrorBody]`
- **Error**: `GetCloudflowConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowConnection` | `doi_t/models/cloudflow_connection.py` |
| `GetCloudflowConnectionErrorBody` | `doi_t/errors/get_cloudflow_connection_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.connections.list_cloudflow_connections

- **Route**: `GET /cloudflow/v1/connections`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_cloudflow_connections(*, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken`
- **Returns (parsed)**: `CloudflowConnectionListResponse`
- **Returns (raw)**: `ApiResult[CloudflowConnectionListResponse, ListCloudflowConnectionsErrorBody]`
- **Error**: `ListCloudflowConnectionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowConnectionListResponse` | `doi_t/models/cloudflow_connection_list_response.py` |
| `ListCloudflowConnectionsErrorBody` | `doi_t/errors/list_cloudflow_connections_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.connections.update_cloudflow_connection

- **Route**: `PATCH /cloudflow/v1/connections/{connectionId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_cloudflow_connection(connection_id: str, body: CloudflowV1ConnectionsRequest1 | CloudflowV1ConnectionsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `connection_id`, `body`
- **Params**: `connection_id` — path `connectionId` · `body` — JSON body
- **Returns (parsed)**: `CloudflowConnection`
- **Returns (raw)**: `ApiResult[CloudflowConnection, UpdateCloudflowConnectionErrorBody]`
- **Error**: `UpdateCloudflowConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudflowV1ConnectionsRequest1` | `doi_t/models/cloudflow_v1_connections_request1.py` |
| `CloudflowV1ConnectionsRequest1Dict` | `doi_t/models/cloudflow_v1_connections_request1.py` |
| `CloudflowConnection` | `doi_t/models/cloudflow_connection.py` |
| `UpdateCloudflowConnectionErrorBody` | `doi_t/errors/update_cloudflow_connection_error.py` |
| `Error` | `doi_t/models/error.py` |

