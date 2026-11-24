<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connections — operations

Accessor: `client.connections` · Source: `basiq/apis/connections.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.connections.delete_connection

- **Route**: `DELETE /users/{userId}/connections/{connectionId}`
- **Auth**: `services_token`
- **Signature**: `def delete_connection(user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `connection_id`
- **Params**: `user_id` — path `userId` · `connection_id` — path `connectionId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteConnectionErrorBody]`
- **Error**: `DeleteConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `UsersConnections400Error1` [400] · `UsersConnections403Error1` [403] · `UsersConnections404Error1` [404] · `UsersConnections500Error1` [500] · `UsersConnections503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteConnectionErrorBody` | `basiq/errors/delete_connection_error.py` |
| `UsersConnections400Error1` | `basiq/models/users_connections400_error1.py` |
| `UsersConnections403Error1` | `basiq/models/users_connections403_error1.py` |
| `UsersConnections404Error1` | `basiq/models/users_connections404_error1.py` |
| `UsersConnections500Error1` | `basiq/models/users_connections500_error1.py` |
| `UsersConnections503Error1` | `basiq/models/users_connections503_error1.py` |

### client.connections.get_connection

- **Route**: `GET /users/{userId}/connections/{connectionId}`
- **Auth**: `services_token`
- **Signature**: `def get_connection(user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `connection_id`
- **Params**: `user_id` — path `userId` · `connection_id` — path `connectionId`
- **Returns (parsed)**: `ConnectionGetResponseResource`
- **Returns (raw)**: `ApiResult[ConnectionGetResponseResource, GetConnectionErrorBody]`
- **Error**: `GetConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `UsersConnections400Error1` [400] · `UsersConnections401Error1` [401] · `UsersConnections403Error1` [403] · `UsersConnections404Error1` [404] · `UsersConnections500Error1` [500] · `UsersConnections503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectionGetResponseResource` | `basiq/models/connection_get_response_resource.py` |
| `GetConnectionErrorBody` | `basiq/errors/get_connection_error.py` |
| `UsersConnections400Error1` | `basiq/models/users_connections400_error1.py` |
| `UsersConnections401Error1` | `basiq/models/users_connections401_error1.py` |
| `UsersConnections403Error1` | `basiq/models/users_connections403_error1.py` |
| `UsersConnections404Error1` | `basiq/models/users_connections404_error1.py` |
| `UsersConnections500Error1` | `basiq/models/users_connections500_error1.py` |
| `UsersConnections503Error1` | `basiq/models/users_connections503_error1.py` |

### client.connections.get_connections

- **Route**: `GET /users/{userId}/connections`
- **Auth**: `services_token`
- **Signature**: `def get_connections(user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `filter_` — query `filter`
- **Returns (parsed)**: `ConnectionsGetResponseResource`
- **Returns (raw)**: `ApiResult[ConnectionsGetResponseResource, GetConnectionsErrorBody]`
- **Error**: `GetConnectionsErrorBody` — **Case A (typed)**
- **Error arms**: `UsersConnections400Error1` [400] · `UsersConnections403Error1` [403] · `UsersConnections404Error1` [404] · `UsersConnections500Error1` [500] · `UsersConnections503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectionsGetResponseResource` | `basiq/models/connections_get_response_resource.py` |
| `GetConnectionsErrorBody` | `basiq/errors/get_connections_error.py` |
| `UsersConnections400Error1` | `basiq/models/users_connections400_error1.py` |
| `UsersConnections403Error1` | `basiq/models/users_connections403_error1.py` |
| `UsersConnections404Error1` | `basiq/models/users_connections404_error1.py` |
| `UsersConnections500Error1` | `basiq/models/users_connections500_error1.py` |
| `UsersConnections503Error1` | `basiq/models/users_connections503_error1.py` |

### client.connections.purge_connection_data

- **Route**: `POST /users/{userId}/connections/{connectionId}/purge`
- **Auth**: `services_token`
- **Signature**: `def purge_connection_data(user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `connection_id`
- **Params**: `user_id` — path `userId` · `connection_id` — path `connectionId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PurgeConnectionDataErrorBody]`
- **Error**: `PurgeConnectionDataErrorBody` — **Case A (typed)**
- **Error arms**: `UsersConnectionsPurge400Error1` [400] · `UsersConnectionsPurge403Error1` [403] · `UsersConnectionsPurge404Error1` [404] · `UsersConnectionsPurge500Error1` [500] · `UsersConnectionsPurge503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PurgeConnectionDataErrorBody` | `basiq/errors/purge_connection_data_error.py` |
| `UsersConnectionsPurge400Error1` | `basiq/models/users_connections_purge400_error1.py` |
| `UsersConnectionsPurge403Error1` | `basiq/models/users_connections_purge403_error1.py` |
| `UsersConnectionsPurge404Error1` | `basiq/models/users_connections_purge404_error1.py` |
| `UsersConnectionsPurge500Error1` | `basiq/models/users_connections_purge500_error1.py` |
| `UsersConnectionsPurge503Error1` | `basiq/models/users_connections_purge503_error1.py` |

### client.connections.refresh_connection

- **Route**: `POST /users/{userId}/connections/{connectionId}/refresh`
- **Auth**: `services_token`
- **Signature**: `def refresh_connection(user_id: str, connection_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `connection_id`
- **Params**: `user_id` — path `userId` · `connection_id` — path `connectionId`
- **Returns (parsed)**: `ConnectionResponseResource`
- **Returns (raw)**: `ApiResult[ConnectionResponseResource, RefreshConnectionErrorBody]`
- **Error**: `RefreshConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `UsersConnectionsRefresh400Error1` [400] · `UsersConnectionsRefresh403Error1` [403] · `UsersConnectionsRefresh404Error1` [404] · `UsersConnectionsRefresh500Error1` [500] · `UsersConnectionsRefresh503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectionResponseResource` | `basiq/models/connection_response_resource.py` |
| `RefreshConnectionErrorBody` | `basiq/errors/refresh_connection_error.py` |
| `UsersConnectionsRefresh400Error1` | `basiq/models/users_connections_refresh400_error1.py` |
| `UsersConnectionsRefresh403Error1` | `basiq/models/users_connections_refresh403_error1.py` |
| `UsersConnectionsRefresh404Error1` | `basiq/models/users_connections_refresh404_error1.py` |
| `UsersConnectionsRefresh500Error1` | `basiq/models/users_connections_refresh500_error1.py` |
| `UsersConnectionsRefresh503Error1` | `basiq/models/users_connections_refresh503_error1.py` |

### client.connections.refresh_connections

- **Route**: `POST /users/{userId}/connections/refresh`
- **Auth**: `services_token`
- **Signature**: `def refresh_connections(user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId`
- **Returns (parsed)**: `ConnectionsRefreshResource`
- **Returns (raw)**: `ApiResult[ConnectionsRefreshResource, RefreshConnectionsErrorBody]`
- **Error**: `RefreshConnectionsErrorBody` — **Case A (typed)**
- **Error arms**: `UsersConnectionsRefresh400Error1` [400] · `UsersConnectionsRefresh403Error1` [403] · `UsersConnectionsRefresh404Error1` [404] · `UsersConnectionsRefresh500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectionsRefreshResource` | `basiq/models/connections_refresh_resource.py` |
| `RefreshConnectionsErrorBody` | `basiq/errors/refresh_connections_error.py` |
| `UsersConnectionsRefresh400Error1` | `basiq/models/users_connections_refresh400_error1.py` |
| `UsersConnectionsRefresh403Error1` | `basiq/models/users_connections_refresh403_error1.py` |
| `UsersConnectionsRefresh404Error1` | `basiq/models/users_connections_refresh404_error1.py` |
| `UsersConnectionsRefresh500Error1` | `basiq/models/users_connections_refresh500_error1.py` |

