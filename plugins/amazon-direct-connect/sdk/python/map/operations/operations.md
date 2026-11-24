<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `aws_direct_connect/apis/operations.py` · 15 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.allocate_connection_on_interconnect2

- **Route**: `POST /#AllocateConnectionOnInterconnect`
- **Auth**: `sigv4`
- **Signature**: `def allocate_connection_on_interconnect2(x_amz_target: XAmzTargetAwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AllocateConnectionOnInterconnect2ErrorBody]`
- **Error**: `AllocateConnectionOnInterconnect2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target_aws_direct_connect_operations_api.py` |
| `AllocateConnectionOnInterconnect2ErrorBody` | `aws_direct_connect/errors/allocate_connection_on_interconnect2_error.py` |

### client.operations.allocate_hosted_connection2

- **Route**: `POST /#AllocateHostedConnection`
- **Auth**: `sigv4`
- **Signature**: `def allocate_hosted_connection2(x_amz_target: XAmzTarget1AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AllocateHostedConnection2ErrorBody]`
- **Error**: `AllocateHostedConnection2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target1_aws_direct_connect_operations_api.py` |
| `AllocateHostedConnection2ErrorBody` | `aws_direct_connect/errors/allocate_hosted_connection2_error.py` |

### client.operations.allocate_private_virtual_interface2

- **Route**: `POST /#AllocatePrivateVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def allocate_private_virtual_interface2(x_amz_target: XAmzTarget2AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AllocatePrivateVirtualInterface2ErrorBody]`
- **Error**: `AllocatePrivateVirtualInterface2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target2_aws_direct_connect_operations_api.py` |
| `AllocatePrivateVirtualInterface2ErrorBody` | `aws_direct_connect/errors/allocate_private_virtual_interface2_error.py` |

### client.operations.allocate_public_virtual_interface2

- **Route**: `POST /#AllocatePublicVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def allocate_public_virtual_interface2(x_amz_target: XAmzTarget3AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AllocatePublicVirtualInterface2ErrorBody]`
- **Error**: `AllocatePublicVirtualInterface2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target3_aws_direct_connect_operations_api.py` |
| `AllocatePublicVirtualInterface2ErrorBody` | `aws_direct_connect/errors/allocate_public_virtual_interface2_error.py` |

### client.operations.allocate_transit_virtual_interface2

- **Route**: `POST /#AllocateTransitVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def allocate_transit_virtual_interface2(x_amz_target: XAmzTarget4AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AllocateTransitVirtualInterface2ErrorBody]`
- **Error**: `AllocateTransitVirtualInterface2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target4_aws_direct_connect_operations_api.py` |
| `AllocateTransitVirtualInterface2ErrorBody` | `aws_direct_connect/errors/allocate_transit_virtual_interface2_error.py` |

### client.operations.associate_connections_to_resiliency_group

- **Route**: `POST /#AssociateConnectionsToResiliencyGroup`
- **Auth**: `sigv4`
- **Signature**: `def associate_connections_to_resiliency_group(x_amz_target: XAmzTarget10AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssociateConnectionsToResiliencyGroupErrorBody]`
- **Error**: `AssociateConnectionsToResiliencyGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget10AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target10_aws_direct_connect_operations_api.py` |
| `AssociateConnectionsToResiliencyGroupErrorBody` | `aws_direct_connect/errors/associate_connections_to_resiliency_group_error.py` |

### client.operations.confirm_connection2

- **Route**: `POST /#ConfirmConnection`
- **Auth**: `sigv4`
- **Signature**: `def confirm_connection2(x_amz_target: XAmzTarget5AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ConfirmConnection2ErrorBody]`
- **Error**: `ConfirmConnection2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target5_aws_direct_connect_operations_api.py` |
| `ConfirmConnection2ErrorBody` | `aws_direct_connect/errors/confirm_connection2_error.py` |

### client.operations.confirm_customer_agreement2

- **Route**: `POST /#ConfirmCustomerAgreement`
- **Auth**: `sigv4`
- **Signature**: `def confirm_customer_agreement2(x_amz_target: XAmzTarget6AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ConfirmCustomerAgreement2ErrorBody]`
- **Error**: `ConfirmCustomerAgreement2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target6_aws_direct_connect_operations_api.py` |
| `ConfirmCustomerAgreement2ErrorBody` | `aws_direct_connect/errors/confirm_customer_agreement2_error.py` |

### client.operations.confirm_private_virtual_interface2

- **Route**: `POST /#ConfirmPrivateVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def confirm_private_virtual_interface2(x_amz_target: XAmzTarget7AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ConfirmPrivateVirtualInterface2ErrorBody]`
- **Error**: `ConfirmPrivateVirtualInterface2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target7_aws_direct_connect_operations_api.py` |
| `ConfirmPrivateVirtualInterface2ErrorBody` | `aws_direct_connect/errors/confirm_private_virtual_interface2_error.py` |

### client.operations.confirm_public_virtual_interface2

- **Route**: `POST /#ConfirmPublicVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def confirm_public_virtual_interface2(x_amz_target: XAmzTarget8AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ConfirmPublicVirtualInterface2ErrorBody]`
- **Error**: `ConfirmPublicVirtualInterface2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target8_aws_direct_connect_operations_api.py` |
| `ConfirmPublicVirtualInterface2ErrorBody` | `aws_direct_connect/errors/confirm_public_virtual_interface2_error.py` |

### client.operations.confirm_transit_virtual_interface2

- **Route**: `POST /#ConfirmTransitVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def confirm_transit_virtual_interface2(x_amz_target: XAmzTarget9AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ConfirmTransitVirtualInterface2ErrorBody]`
- **Error**: `ConfirmTransitVirtualInterface2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target9_aws_direct_connect_operations_api.py` |
| `ConfirmTransitVirtualInterface2ErrorBody` | `aws_direct_connect/errors/confirm_transit_virtual_interface2_error.py` |

### client.operations.disassociate_connections_from_resiliency_group

- **Route**: `POST /#DisassociateConnectionsFromResiliencyGroup`
- **Auth**: `sigv4`
- **Signature**: `def disassociate_connections_from_resiliency_group(x_amz_target: XAmzTarget11AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DisassociateConnectionsFromResiliencyGroupErrorBody]`
- **Error**: `DisassociateConnectionsFromResiliencyGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget11AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target11_aws_direct_connect_operations_api.py` |
| `DisassociateConnectionsFromResiliencyGroupErrorBody` | `aws_direct_connect/errors/disassociate_connections_from_resiliency_group_error.py` |

### client.operations.list_resiliency_group_associations

- **Route**: `POST /#ListResiliencyGroupAssociations`
- **Auth**: `sigv4`
- **Signature**: `def list_resiliency_group_associations(x_amz_target: XAmzTarget12AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListResiliencyGroupAssociationsErrorBody]`
- **Error**: `ListResiliencyGroupAssociationsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget12AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target12_aws_direct_connect_operations_api.py` |
| `ListResiliencyGroupAssociationsErrorBody` | `aws_direct_connect/errors/list_resiliency_group_associations_error.py` |

### client.operations.list_virtual_interface_routes

- **Route**: `POST /#ListVirtualInterfaceRoutes`
- **Auth**: `sigv4`
- **Signature**: `def list_virtual_interface_routes(x_amz_target: XAmzTarget13AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListVirtualInterfaceRoutesErrorBody]`
- **Error**: `ListVirtualInterfaceRoutesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget13AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target13_aws_direct_connect_operations_api.py` |
| `ListVirtualInterfaceRoutesErrorBody` | `aws_direct_connect/errors/list_virtual_interface_routes_error.py` |

### client.operations.update_connections_billing_mode

- **Route**: `POST /#UpdateConnectionsBillingMode`
- **Auth**: `sigv4`
- **Signature**: `def update_connections_billing_mode(x_amz_target: XAmzTarget14AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateConnectionsBillingModeErrorBody]`
- **Error**: `UpdateConnectionsBillingModeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget14AwsDirectConnectOperationsApiOrStr` | `aws_direct_connect/models/enums/x_amz_target14_aws_direct_connect_operations_api.py` |
| `UpdateConnectionsBillingModeErrorBody` | `aws_direct_connect/errors/update_connections_billing_mode_error.py` |

