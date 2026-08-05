# ServiceorchestrationOrder — operations

Accessor: `client.ServiceorchestrationOrder` · Source: `Api/ServiceorchestrationOrder.cs` · 19 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### OrderServiceCreateCustomer
- **HTTP**: `POST /service-orchestration/api/v1/orgs/{org_id}/order/customers` (Default)
- **Notes**: Create a Customer of an Organization . Customers can be created in active or inactive state. Only active customers can have service orders uploaded on their behalf.
- **Signature**: `OrderServiceCreateCustomer(string orgId, Customer body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateCustomerResponseDefinesAResponseToCreateACustomerOfASpecificOrganization`
- **Error**: `SdkException<OrderServiceCreateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceDeleteCustomer
- **HTTP**: `DELETE /service-orchestration/api/v1/orgs/{org_id}/order/customers/{custId}` (Default)
- **Notes**: Delete a Customer of an Organization . The service instances SIs associated with the Customer (if any) will also be deleted. This delete operation will only succeed if there are no errors deleting all the SIs.
- **Signature**: `OrderServiceDeleteCustomer(string orgId, string custId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<OrderServiceDeleteCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceDeleteInstance
- **HTTP**: `DELETE /service-orchestration/api/v1/orgs/{org_id}/order/customers/{custId}/instances/{instId}` (Default)
- **Notes**: Delete Service Instance ( SI ) for a Customer and all its associated service orders ( SOs ) including all the history. If the SI has already been deployed in the network, an SO with a delete operation must be uploaded first and the associated delete workflow must be executed to free the resources before making this API call. The SI deletion fails if there are any network resources that are currently allocated to this SI .
- **Signature**: `OrderServiceDeleteInstance(string orgId, string custId, string instId, string? token, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`
- **Returns**: `object`
- **Error**: `SdkException<OrderServiceDeleteInstanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceExecInstance
- **HTTP**: `POST /service-orchestration/api/v1/orgs/{org_id}/order/customers/{custId}/instances/{instId}/exec` (Default)
- **Notes**: Execute the workflow to perform the latest order on the specified Service Instance ( SI ). The orchestration engine determines which workflow to execute based on the operation of the latest SO as well the SD id and version. This API call returns immediately after starting the workflow.
- **Signature**: `OrderServiceExecInstance(string orgId, string custId, string instId, bool? queue, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `queue` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `queue` ← `queue`
- **Returns**: `ExecResponseIsAnExecOrActionResponseItIndicatesTheWorkflowIdWorkflowRunIdOrThe`
- **Error**: `SdkException<OrderServiceExecInstanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetAllInstances
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/instances` (Default)
- **Notes**: Get all Service Instances for an Organization irrespective of Customer. This includes the meta information and status from the latest SO per SI . Since the number of SIs per organization can be large, the orchestration engine allows you to divide the full SI list over a number of requests. By using the pagination header information, you can specify the index of the first object ( current-offset ) and number of objects( per-page ) to return per request. Additionally, the filter query parameter can be used to further limit the amount of returned information. See filter in Get Service Instances for more details.
- **Signature**: `OrderServiceGetAllInstances(string orgId, string? filter, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetAllInstancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetAllOrders
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/orders` (Default)
- **Notes**: Get all service orders for an Organization (including history) irrespective of customer. If multiple orders were executed against an SI , the list will contain multiple entries for the same SI - one per SO. Since the number of SOs in the Organization can be large, the orchestration engine allows you to divide the full SO list over a number of requests. By using the pagination header information, you can specify the index of the first object ( current-offset ) and number of objects( per-page ) to return per request. Additionally, the filter query parameter can be used to further limit the amount of returned information. See filter in Get Service Instances for more details. For example, the list in the Sample Response is using the following filter `.[]|{"instance_name": ."instance_id","design_id":."design_id", "status":."fh_config", "upload_time":."upload_time", operation: ."operation"}`
- **Signature**: `OrderServiceGetAllOrders(string orgId, string? filter, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetAllOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetConfigurations
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/customers/{custId}/instances/{instId}/configurations` (Default)
- **Notes**: Return all configurations that have been applied in the network as a result of provisioning this SI . This includes all devices , active assurance and insights configurations.
- **Signature**: `OrderServiceGetConfigurations(string orgId, string custId, string instId, string? filter, bool? dryRun, bool? diff, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `dryRun` — nullable, no default → **must pass explicitly**
  - `diff` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `dryRun` ← `dryRun`, `diff` ← `diff`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetConfigurationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetCustomer
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/customers/{custId}` (Default)
- **Notes**: Get a Customer of an Organization given the customer name or UUID.
- **Signature**: `OrderServiceGetCustomer(string orgId, string custId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Customer`
- **Error**: `SdkException<OrderServiceGetCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetCustomers
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/customers` (Default)
- **Notes**: Retrieves a list of Customers associated with an Organization .
- **Signature**: `OrderServiceGetCustomers(string orgId, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<CustomerList>`
- **Error**: `SdkException<OrderServiceGetCustomersError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetInstance
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/customers/{custId}/instances/{instId}` (Default)
- **Notes**: Get a Specific Service Instance ( SI ) of a Customer including the meta information from the latest uploaded SO . Use filter to control the list of attributes returned (if desired). If no filter is defined, the full SI/SO is returned. The provided Request Sample shows the result of the example filter.
- **Signature**: `OrderServiceGetInstance(string orgId, string custId, string instId, string? filter, string? namedFilter, string? args, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `namedFilter` — nullable, no default → **must pass explicitly**
  - `args` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `namedFilter` ← `namedFilter`, `args` ← `args`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetInstanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetInstances
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/customers/{custId}/instances` (Default)
- **Notes**: Get all Service Instances ( SIs ) associated with a Customer of an Organization including the meta information from the latest SO per SI . Since the number of SIs per customer can be large, the orchestration engine allows you to divide the full SI list over a number of requests. By using the pagination header information, you can specify the index of the first object ( current-offset ) and number of objects ( per-page ) to return per request. The results can also be sorted based on the ( sort-attribute header) in ascending or descending order ( sort-desc header). Additionally, the filter query parameter can be used to further limit the amount of returned information. See filter for more details.
- **Signature**: `OrderServiceGetInstances(string orgId, string custId, string? filter, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetInstancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetLock
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/customers/{custId}/instances/{instId}/lock` (Default)
- **Notes**: Get the last Service Order lock if any. If editing or executing a workflow failed on your SI due to the SI being currently locked, you can call this function for troubleshooting. It returns the last lock on the SI and other useful information including who last acquired the lock and when the lock expired/will expire.
- **Signature**: `OrderServiceGetLock(string orgId, string custId, string instId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OrderLockData`
- **Error**: `SdkException<OrderServiceGetLockError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetOrder
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/customers/{custId}/instances/{instId}/orders/{ordId}` (Default)
- **Notes**: Get a specific history service order for a Service Instance given the order_id.
- **Signature**: `OrderServiceGetOrder(string orgId, string custId, string instId, string ordId, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetOrders
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/customers/{custId}/instances/{instId}/orders` (Default)
- **Notes**: Get the Service Order history of a Service Instance. The returned list does NOT include the current service order.
- **Signature**: `OrderServiceGetOrders(string orgId, string custId, string instId, string? filter, string? namedFilter, string? args, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `namedFilter` ← `namedFilter`, `args` ← `args`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetServiceInstancesUpgradeList
- **HTTP**: `POST /service-orchestration/api/v1/orgs/{org_id}/order/instances-upgrade` (Default)
- **Notes**: RPC accepting a list of service instance and returning the order in which the Service Instances and dependencies need to be upgraded.
- **Signature**: `OrderServiceGetServiceInstancesUpgradeList(string orgId, IReadOnlyList<RpcGetServiceInstancesUpgradeListServiceInstanceUpgradeListRequestReturnsServiceInstanceUpgrad> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ServiceInstanceVersionIdlistIsAListOfServiceInstancesIdsPlusVersion>`
- **Error**: `SdkException<OrderServiceGetServiceInstancesUpgradeListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceUpdateCustomer
- **HTTP**: `PUT /service-orchestration/api/v1/orgs/{org_id}/order/customers/{custId}` (Default)
- **Notes**: Update a Customer of an Organization given the customer UUID.
- **Signature**: `OrderServiceUpdateCustomer(string orgId, string custId, Customer body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<OrderServiceUpdateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceUpgradeJqs
- **HTTP**: `POST /service-orchestration/api/v1/orgs/{org_id}/order/order/upgradeJQs` (Default)
- **Notes**: Apply JQs to the provided Order Instance
- **Signature**: `OrderServiceUpgradeJqs(string orgId, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceUpgradeJqsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceUploadOrder
- **HTTP**: `POST /service-orchestration/api/v1/orgs/{org_id}/order` (Default)
- **Notes**: Upload a Service Order ( SO ) on behalf of a Customer of an Organization . An SO typically contains a service instance ( SI ) together with some meta information including: * `customer_id`: Name or UUID of the customer on behalf of which the service order is being executed - `required` * `instance_id`: a user-defined unique name for the SI to identify it for future orders to be executed on the same instance `reqiured` * `design_id`: The name of a service design ( SD ) that the SI complies to - `required` * `design_version`: The service design version that the SI complies to. If no version is provided, the system will pick a default version - `optional` * `operation`: The operation that the order is performing. Operations include: create/modify and delete - `required` The provided Request Sample is an example of an SO to create topology network resources for an Organization. It complies to the topo service design. The SD , SM and default version associated with topo can be viewed via the Placement API. The provided SI is validated against the SM and the semantic validation rules ( JQs ) of the SD (if any). The SO is only accepted if it passes all the validation checks, otherwise a list of errors are returned. If no errors, the SO will be created and a workflow can be called against it using the Execute API call.
- **Signature**: `OrderServiceUploadOrder(string orgId, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<OrderServiceUploadOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlacerServiceGetServiceInstanceNetworkElements
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{orgId}/order/customers/{custId}/instances/{instId}/resources` (Default)
- **Notes**: Get Network Resources allocated for the Service instance ( SI ).
- **Signature**: `PlacerServiceGetServiceInstanceNetworkElements(string orgId, string custId, string instId, string? filter, string? poolfilter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `poolfilter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `poolfilter` ← `poolfilter`
- **Returns**: `object`
- **Error**: `SdkException<PlacerServiceGetServiceInstanceNetworkElementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
