<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connections — operations

Accessor: `client.connections` · Source: `prisma_reviews/apis/connections.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.connections.create_connect_link

- **Route**: `POST /v1/connect_links`
- **Auth**: `api_key`
- **Signature**: `def create_connect_link(*, body: V1ConnectLinksRequest | V1ConnectLinksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ConnectLink`
- **Returns (raw)**: `ApiResult[ConnectLink, CreateConnectLinkErrorBody]`
- **Error**: `CreateConnectLinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 422, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ConnectLinksRequest` | `prisma_reviews/models/v1_connect_links_request.py` |
| `V1ConnectLinksRequestDict` | `prisma_reviews/models/v1_connect_links_request.py` |
| `ConnectLink` | `prisma_reviews/models/connect_link.py` |
| `CreateConnectLinkErrorBody` | `prisma_reviews/errors/create_connect_link_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

### client.connections.create_connection

- **Route**: `POST /v1/connections`
- **Auth**: `api_key`
- **Signature**: `def create_connection(body: ConnectionInput | ConnectionInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ConnectionCreated`
- **Returns (raw)**: `ApiResult[ConnectionCreated, CreateConnectionErrorBody]`
- **Error**: `CreateConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 422, 429, 500, 501, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectionInput` | `prisma_reviews/models/connection_input.py` |
| `ConnectionInputDict` | `prisma_reviews/models/connection_input.py` |
| `ConnectionCreated` | `prisma_reviews/models/connection_created.py` |
| `CreateConnectionErrorBody` | `prisma_reviews/errors/create_connection_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

### client.connections.delete_connection

- **Route**: `DELETE /v1/connections/{id}`
- **Auth**: `api_key`
- **Signature**: `def delete_connection(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ConnectionDeleted`
- **Returns (raw)**: `ApiResult[ConnectionDeleted, DeleteConnectionErrorBody]`
- **Error**: `DeleteConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectionDeleted` | `prisma_reviews/models/connection_deleted.py` |
| `DeleteConnectionErrorBody` | `prisma_reviews/errors/delete_connection_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

### client.connections.list_connections

- **Route**: `GET /v1/connections`
- **Auth**: `api_key`
- **Signature**: `def list_connections(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ConnectionList`
- **Returns (raw)**: `ApiResult[ConnectionList, ListConnectionsErrorBody]`
- **Error**: `ListConnectionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectionList` | `prisma_reviews/models/connection_list.py` |
| `ListConnectionsErrorBody` | `prisma_reviews/errors/list_connections_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

