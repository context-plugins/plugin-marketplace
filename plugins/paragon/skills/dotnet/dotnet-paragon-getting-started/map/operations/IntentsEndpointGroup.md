# IntentsEndpointGroup — operations

Accessor: `client.IntentsEndpointGroup` · Source: `Api/IntentsEndpointGroup.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### EndpointGroupStaticListDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/endpoint-groups/endpoint-group={id}/static-list={index}` (Default)
- **Notes**: List of groups that is used to build a tunnel list. Tunnels from all the sources to all the destinations will be created
- **Signature**: `EndpointGroupStaticListDelete(string id, int index, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EndpointGroupStaticListDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EndpointGroupStaticListGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/endpoint-groups/endpoint-group={id}/static-list={index}` (Default)
- **Notes**: List of groups that is used to build a tunnel list. Tunnels from all the sources to all the destinations will be created
- **Signature**: `EndpointGroupStaticListGet(string id, int index, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EndpointGroupStaticListGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EndpointGroupStaticListPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/endpoint-groups/endpoint-group={id}/static-list={index}` (Default)
- **Notes**: List of groups that is used to build a tunnel list. Tunnels from all the sources to all the destinations will be created
- **Signature**: `EndpointGroupStaticListPut(string id, int index, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EndpointGroupStaticListPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EndpointGroupDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/endpoint-groups/endpoint-group={id}` (Default)
- **Notes**: removes juniper.endpoint.group.endpointgroups.EndpointGroup
- **Signature**: `EndpointGroupDelete(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EndpointGroupDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EndpointGroupGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/endpoint-groups/endpoint-group={id}` (Default)
- **Notes**: returns juniper.endpoint.group.endpointgroups.EndpointGroup
- **Signature**: `EndpointGroupGet(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EndpointGroupGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EndpointGroupPut
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/endpoint-groups/endpoint-group={id}` (Default)
- **Notes**: creates or updates juniper.endpoint.group.endpointgroups.EndpointGroup
- **Signature**: `EndpointGroupPut(string id, string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EndpointGroupPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EndpointGroupsGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/net-opt/endpoint-groups` (Default)
- **Notes**: returns juniper.endpoint.group.EndpointGroups
- **Signature**: `EndpointGroupsGet(string orgId, string topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EndpointGroupsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
