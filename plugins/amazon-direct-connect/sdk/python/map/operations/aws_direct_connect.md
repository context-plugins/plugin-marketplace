<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsDirectConnect — operations

Accessor: `client.aws_direct_connect` · Source: `aws_direct_connect/apis/aws_direct_connect.py` · 63 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aws_direct_connect.accept_direct_connect_gateway_association_proposal

- **Route**: `POST /#AcceptDirectConnectGatewayAssociationProposal`
- **Auth**: `sigv4`
- **Signature**: `def accept_direct_connect_gateway_association_proposal(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AcceptDirectConnectGatewayAssociationProposalErrorBody]`
- **Error**: `AcceptDirectConnectGatewayAssociationProposalErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `aws_direct_connect/models/enums/x_amz_target.py` |
| `AcceptDirectConnectGatewayAssociationProposalErrorBody` | `aws_direct_connect/errors/accept_direct_connect_gateway_association_proposal_error.py` |

### client.aws_direct_connect.allocate_connection_on_interconnect

- **Route**: `POST /#AllocateConnectionOnInterconnect`
- **Auth**: `sigv4`
- **Signature**: `def allocate_connection_on_interconnect(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AllocateConnectionOnInterconnectErrorBody]`
- **Error**: `AllocateConnectionOnInterconnectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `aws_direct_connect/models/enums/x_amz_target4.py` |
| `AllocateConnectionOnInterconnectErrorBody` | `aws_direct_connect/errors/allocate_connection_on_interconnect_error.py` |

### client.aws_direct_connect.allocate_hosted_connection

- **Route**: `POST /#AllocateHostedConnection`
- **Auth**: `sigv4`
- **Signature**: `def allocate_hosted_connection(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AllocateHostedConnectionErrorBody]`
- **Error**: `AllocateHostedConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5OrStr` | `aws_direct_connect/models/enums/x_amz_target5.py` |
| `AllocateHostedConnectionErrorBody` | `aws_direct_connect/errors/allocate_hosted_connection_error.py` |

### client.aws_direct_connect.allocate_private_virtual_interface

- **Route**: `POST /#AllocatePrivateVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def allocate_private_virtual_interface(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AllocatePrivateVirtualInterfaceErrorBody]`
- **Error**: `AllocatePrivateVirtualInterfaceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6OrStr` | `aws_direct_connect/models/enums/x_amz_target6.py` |
| `AllocatePrivateVirtualInterfaceErrorBody` | `aws_direct_connect/errors/allocate_private_virtual_interface_error.py` |

### client.aws_direct_connect.allocate_public_virtual_interface

- **Route**: `POST /#AllocatePublicVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def allocate_public_virtual_interface(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AllocatePublicVirtualInterfaceErrorBody]`
- **Error**: `AllocatePublicVirtualInterfaceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7OrStr` | `aws_direct_connect/models/enums/x_amz_target7.py` |
| `AllocatePublicVirtualInterfaceErrorBody` | `aws_direct_connect/errors/allocate_public_virtual_interface_error.py` |

### client.aws_direct_connect.allocate_transit_virtual_interface

- **Route**: `POST /#AllocateTransitVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def allocate_transit_virtual_interface(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AllocateTransitVirtualInterfaceErrorBody]`
- **Error**: `AllocateTransitVirtualInterfaceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8OrStr` | `aws_direct_connect/models/enums/x_amz_target8.py` |
| `AllocateTransitVirtualInterfaceErrorBody` | `aws_direct_connect/errors/allocate_transit_virtual_interface_error.py` |

### client.aws_direct_connect.associate_connection_with_lag

- **Route**: `POST /#AssociateConnectionWithLag`
- **Auth**: `sigv4`
- **Signature**: `def associate_connection_with_lag(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssociateConnectionWithLagErrorBody]`
- **Error**: `AssociateConnectionWithLagErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget14OrStr` | `aws_direct_connect/models/enums/x_amz_target14.py` |
| `AssociateConnectionWithLagErrorBody` | `aws_direct_connect/errors/associate_connection_with_lag_error.py` |

### client.aws_direct_connect.associate_hosted_connection

- **Route**: `POST /#AssociateHostedConnection`
- **Auth**: `sigv4`
- **Signature**: `def associate_hosted_connection(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssociateHostedConnectionErrorBody]`
- **Error**: `AssociateHostedConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget21OrStr` | `aws_direct_connect/models/enums/x_amz_target21.py` |
| `AssociateHostedConnectionErrorBody` | `aws_direct_connect/errors/associate_hosted_connection_error.py` |

### client.aws_direct_connect.associate_mac_sec_key

- **Route**: `POST /#AssociateMacSecKey`
- **Auth**: `sigv4`
- **Signature**: `def associate_mac_sec_key(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssociateMacSecKeyErrorBody]`
- **Error**: `AssociateMacSecKeyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget23OrStr` | `aws_direct_connect/models/enums/x_amz_target23.py` |
| `AssociateMacSecKeyErrorBody` | `aws_direct_connect/errors/associate_mac_sec_key_error.py` |

### client.aws_direct_connect.associate_virtual_interface

- **Route**: `POST /#AssociateVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def associate_virtual_interface(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssociateVirtualInterfaceErrorBody]`
- **Error**: `AssociateVirtualInterfaceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget25OrStr` | `aws_direct_connect/models/enums/x_amz_target25.py` |
| `AssociateVirtualInterfaceErrorBody` | `aws_direct_connect/errors/associate_virtual_interface_error.py` |

### client.aws_direct_connect.confirm_connection

- **Route**: `POST /#ConfirmConnection`
- **Auth**: `sigv4`
- **Signature**: `def confirm_connection(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ConfirmConnectionErrorBody]`
- **Error**: `ConfirmConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9OrStr` | `aws_direct_connect/models/enums/x_amz_target9.py` |
| `ConfirmConnectionErrorBody` | `aws_direct_connect/errors/confirm_connection_error.py` |

### client.aws_direct_connect.confirm_customer_agreement

- **Route**: `POST /#ConfirmCustomerAgreement`
- **Auth**: `sigv4`
- **Signature**: `def confirm_customer_agreement(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ConfirmCustomerAgreementErrorBody]`
- **Error**: `ConfirmCustomerAgreementErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget10OrStr` | `aws_direct_connect/models/enums/x_amz_target10.py` |
| `ConfirmCustomerAgreementErrorBody` | `aws_direct_connect/errors/confirm_customer_agreement_error.py` |

### client.aws_direct_connect.confirm_private_virtual_interface

- **Route**: `POST /#ConfirmPrivateVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def confirm_private_virtual_interface(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ConfirmPrivateVirtualInterfaceErrorBody]`
- **Error**: `ConfirmPrivateVirtualInterfaceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget11OrStr` | `aws_direct_connect/models/enums/x_amz_target11.py` |
| `ConfirmPrivateVirtualInterfaceErrorBody` | `aws_direct_connect/errors/confirm_private_virtual_interface_error.py` |

### client.aws_direct_connect.confirm_public_virtual_interface

- **Route**: `POST /#ConfirmPublicVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def confirm_public_virtual_interface(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ConfirmPublicVirtualInterfaceErrorBody]`
- **Error**: `ConfirmPublicVirtualInterfaceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget12OrStr` | `aws_direct_connect/models/enums/x_amz_target12.py` |
| `ConfirmPublicVirtualInterfaceErrorBody` | `aws_direct_connect/errors/confirm_public_virtual_interface_error.py` |

### client.aws_direct_connect.confirm_transit_virtual_interface

- **Route**: `POST /#ConfirmTransitVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def confirm_transit_virtual_interface(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ConfirmTransitVirtualInterfaceErrorBody]`
- **Error**: `ConfirmTransitVirtualInterfaceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget13OrStr` | `aws_direct_connect/models/enums/x_amz_target13.py` |
| `ConfirmTransitVirtualInterfaceErrorBody` | `aws_direct_connect/errors/confirm_transit_virtual_interface_error.py` |

### client.aws_direct_connect.create_bgp_peer

- **Route**: `POST /#CreateBGPPeer`
- **Auth**: `sigv4`
- **Signature**: `def create_bgp_peer(x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateBgpPeerErrorBody]`
- **Error**: `CreateBgpPeerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget28OrStr` | `aws_direct_connect/models/enums/x_amz_target28.py` |
| `CreateBgpPeerErrorBody` | `aws_direct_connect/errors/create_bgp_peer_error.py` |

### client.aws_direct_connect.create_connection

- **Route**: `POST /#CreateConnection`
- **Auth**: `sigv4`
- **Signature**: `def create_connection(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateConnectionErrorBody]`
- **Error**: `CreateConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget15OrStr` | `aws_direct_connect/models/enums/x_amz_target15.py` |
| `CreateConnectionErrorBody` | `aws_direct_connect/errors/create_connection_error.py` |

### client.aws_direct_connect.create_direct_connect_gateway

- **Route**: `POST /#CreateDirectConnectGateway`
- **Auth**: `sigv4`
- **Signature**: `def create_direct_connect_gateway(x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateDirectConnectGatewayErrorBody]`
- **Error**: `CreateDirectConnectGatewayErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget30OrStr` | `aws_direct_connect/models/enums/x_amz_target30.py` |
| `CreateDirectConnectGatewayErrorBody` | `aws_direct_connect/errors/create_direct_connect_gateway_error.py` |

### client.aws_direct_connect.create_direct_connect_gateway_association

- **Route**: `POST /#CreateDirectConnectGatewayAssociation`
- **Auth**: `sigv4`
- **Signature**: `def create_direct_connect_gateway_association(x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateDirectConnectGatewayAssociationErrorBody]`
- **Error**: `CreateDirectConnectGatewayAssociationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget34OrStr` | `aws_direct_connect/models/enums/x_amz_target34.py` |
| `CreateDirectConnectGatewayAssociationErrorBody` | `aws_direct_connect/errors/create_direct_connect_gateway_association_error.py` |

### client.aws_direct_connect.create_direct_connect_gateway_association_proposal

- **Route**: `POST /#CreateDirectConnectGatewayAssociationProposal`
- **Auth**: `sigv4`
- **Signature**: `def create_direct_connect_gateway_association_proposal(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateDirectConnectGatewayAssociationProposalErrorBody]`
- **Error**: `CreateDirectConnectGatewayAssociationProposalErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `aws_direct_connect/models/enums/x_amz_target1.py` |
| `CreateDirectConnectGatewayAssociationProposalErrorBody` | `aws_direct_connect/errors/create_direct_connect_gateway_association_proposal_error.py` |

### client.aws_direct_connect.create_interconnect

- **Route**: `POST /#CreateInterconnect`
- **Auth**: `sigv4`
- **Signature**: `def create_interconnect(x_amz_target: XAmzTarget38OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateInterconnectErrorBody]`
- **Error**: `CreateInterconnectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget38OrStr` | `aws_direct_connect/models/enums/x_amz_target38.py` |
| `CreateInterconnectErrorBody` | `aws_direct_connect/errors/create_interconnect_error.py` |

### client.aws_direct_connect.create_lag

- **Route**: `POST /#CreateLag`
- **Auth**: `sigv4`
- **Signature**: `def create_lag(x_amz_target: XAmzTarget41OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateLagErrorBody]`
- **Error**: `CreateLagErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget41OrStr` | `aws_direct_connect/models/enums/x_amz_target41.py` |
| `CreateLagErrorBody` | `aws_direct_connect/errors/create_lag_error.py` |

### client.aws_direct_connect.create_private_virtual_interface

- **Route**: `POST /#CreatePrivateVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def create_private_virtual_interface(x_amz_target: XAmzTarget45OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreatePrivateVirtualInterfaceErrorBody]`
- **Error**: `CreatePrivateVirtualInterfaceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget45OrStr` | `aws_direct_connect/models/enums/x_amz_target45.py` |
| `CreatePrivateVirtualInterfaceErrorBody` | `aws_direct_connect/errors/create_private_virtual_interface_error.py` |

### client.aws_direct_connect.create_public_virtual_interface

- **Route**: `POST /#CreatePublicVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def create_public_virtual_interface(x_amz_target: XAmzTarget46OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreatePublicVirtualInterfaceErrorBody]`
- **Error**: `CreatePublicVirtualInterfaceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget46OrStr` | `aws_direct_connect/models/enums/x_amz_target46.py` |
| `CreatePublicVirtualInterfaceErrorBody` | `aws_direct_connect/errors/create_public_virtual_interface_error.py` |

### client.aws_direct_connect.create_transit_virtual_interface

- **Route**: `POST /#CreateTransitVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def create_transit_virtual_interface(x_amz_target: XAmzTarget47OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateTransitVirtualInterfaceErrorBody]`
- **Error**: `CreateTransitVirtualInterfaceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget47OrStr` | `aws_direct_connect/models/enums/x_amz_target47.py` |
| `CreateTransitVirtualInterfaceErrorBody` | `aws_direct_connect/errors/create_transit_virtual_interface_error.py` |

### client.aws_direct_connect.delete_bgp_peer

- **Route**: `POST /#DeleteBGPPeer`
- **Auth**: `sigv4`
- **Signature**: `def delete_bgp_peer(x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteBgpPeerErrorBody]`
- **Error**: `DeleteBgpPeerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget29OrStr` | `aws_direct_connect/models/enums/x_amz_target29.py` |
| `DeleteBgpPeerErrorBody` | `aws_direct_connect/errors/delete_bgp_peer_error.py` |

### client.aws_direct_connect.delete_connection

- **Route**: `POST /#DeleteConnection`
- **Auth**: `sigv4`
- **Signature**: `def delete_connection(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteConnectionErrorBody]`
- **Error**: `DeleteConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget16OrStr` | `aws_direct_connect/models/enums/x_amz_target16.py` |
| `DeleteConnectionErrorBody` | `aws_direct_connect/errors/delete_connection_error.py` |

### client.aws_direct_connect.delete_direct_connect_gateway

- **Route**: `POST /#DeleteDirectConnectGateway`
- **Auth**: `sigv4`
- **Signature**: `def delete_direct_connect_gateway(x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDirectConnectGatewayErrorBody]`
- **Error**: `DeleteDirectConnectGatewayErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget31OrStr` | `aws_direct_connect/models/enums/x_amz_target31.py` |
| `DeleteDirectConnectGatewayErrorBody` | `aws_direct_connect/errors/delete_direct_connect_gateway_error.py` |

### client.aws_direct_connect.delete_direct_connect_gateway_association

- **Route**: `POST /#DeleteDirectConnectGatewayAssociation`
- **Auth**: `sigv4`
- **Signature**: `def delete_direct_connect_gateway_association(x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDirectConnectGatewayAssociationErrorBody]`
- **Error**: `DeleteDirectConnectGatewayAssociationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget35OrStr` | `aws_direct_connect/models/enums/x_amz_target35.py` |
| `DeleteDirectConnectGatewayAssociationErrorBody` | `aws_direct_connect/errors/delete_direct_connect_gateway_association_error.py` |

### client.aws_direct_connect.delete_direct_connect_gateway_association_proposal

- **Route**: `POST /#DeleteDirectConnectGatewayAssociationProposal`
- **Auth**: `sigv4`
- **Signature**: `def delete_direct_connect_gateway_association_proposal(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDirectConnectGatewayAssociationProposalErrorBody]`
- **Error**: `DeleteDirectConnectGatewayAssociationProposalErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `aws_direct_connect/models/enums/x_amz_target2.py` |
| `DeleteDirectConnectGatewayAssociationProposalErrorBody` | `aws_direct_connect/errors/delete_direct_connect_gateway_association_proposal_error.py` |

### client.aws_direct_connect.delete_interconnect

- **Route**: `POST /#DeleteInterconnect`
- **Auth**: `sigv4`
- **Signature**: `def delete_interconnect(x_amz_target: XAmzTarget39OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteInterconnectErrorBody]`
- **Error**: `DeleteInterconnectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget39OrStr` | `aws_direct_connect/models/enums/x_amz_target39.py` |
| `DeleteInterconnectErrorBody` | `aws_direct_connect/errors/delete_interconnect_error.py` |

### client.aws_direct_connect.delete_lag

- **Route**: `POST /#DeleteLag`
- **Auth**: `sigv4`
- **Signature**: `def delete_lag(x_amz_target: XAmzTarget42OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteLagErrorBody]`
- **Error**: `DeleteLagErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget42OrStr` | `aws_direct_connect/models/enums/x_amz_target42.py` |
| `DeleteLagErrorBody` | `aws_direct_connect/errors/delete_lag_error.py` |

### client.aws_direct_connect.delete_virtual_interface

- **Route**: `POST /#DeleteVirtualInterface`
- **Auth**: `sigv4`
- **Signature**: `def delete_virtual_interface(x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteVirtualInterfaceErrorBody]`
- **Error**: `DeleteVirtualInterfaceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget26OrStr` | `aws_direct_connect/models/enums/x_amz_target26.py` |
| `DeleteVirtualInterfaceErrorBody` | `aws_direct_connect/errors/delete_virtual_interface_error.py` |

### client.aws_direct_connect.describe_connection_loa

- **Route**: `POST /#DescribeConnectionLoa`
- **Auth**: `sigv4`
- **Signature**: `def describe_connection_loa(x_amz_target: XAmzTarget48OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeConnectionLoaErrorBody]`
- **Error**: `DescribeConnectionLoaErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget48OrStr` | `aws_direct_connect/models/enums/x_amz_target48.py` |
| `DescribeConnectionLoaErrorBody` | `aws_direct_connect/errors/describe_connection_loa_error.py` |

### client.aws_direct_connect.describe_connections

- **Route**: `POST /#DescribeConnections`
- **Auth**: `sigv4`
- **Signature**: `def describe_connections(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeConnectionsErrorBody]`
- **Error**: `DescribeConnectionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget17OrStr` | `aws_direct_connect/models/enums/x_amz_target17.py` |
| `DescribeConnectionsErrorBody` | `aws_direct_connect/errors/describe_connections_error.py` |

### client.aws_direct_connect.describe_connections_on_interconnect

- **Route**: `POST /#DescribeConnectionsOnInterconnect`
- **Auth**: `sigv4`
- **Signature**: `def describe_connections_on_interconnect(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeConnectionsOnInterconnectErrorBody]`
- **Error**: `DescribeConnectionsOnInterconnectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget18OrStr` | `aws_direct_connect/models/enums/x_amz_target18.py` |
| `DescribeConnectionsOnInterconnectErrorBody` | `aws_direct_connect/errors/describe_connections_on_interconnect_error.py` |

### client.aws_direct_connect.describe_customer_metadata

- **Route**: `POST /#DescribeCustomerMetadata`
- **Auth**: `sigv4`
- **Signature**: `def describe_customer_metadata(x_amz_target: XAmzTarget49OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeCustomerMetadataErrorBody]`
- **Error**: `DescribeCustomerMetadataErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget49OrStr` | `aws_direct_connect/models/enums/x_amz_target49.py` |
| `DescribeCustomerMetadataErrorBody` | `aws_direct_connect/errors/describe_customer_metadata_error.py` |

### client.aws_direct_connect.describe_direct_connect_gateway_association_proposals

- **Route**: `POST /#DescribeDirectConnectGatewayAssociationProposals`
- **Auth**: `sigv4`
- **Signature**: `def describe_direct_connect_gateway_association_proposals(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDirectConnectGatewayAssociationProposalsErrorBody]`
- **Error**: `DescribeDirectConnectGatewayAssociationProposalsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `aws_direct_connect/models/enums/x_amz_target3.py` |
| `DescribeDirectConnectGatewayAssociationProposalsErrorBody` | `aws_direct_connect/errors/describe_direct_connect_gateway_association_proposals_error.py` |

### client.aws_direct_connect.describe_direct_connect_gateway_associations

- **Route**: `POST /#DescribeDirectConnectGatewayAssociations`
- **Auth**: `sigv4`
- **Signature**: `def describe_direct_connect_gateway_associations(x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDirectConnectGatewayAssociationsErrorBody]`
- **Error**: `DescribeDirectConnectGatewayAssociationsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget36OrStr` | `aws_direct_connect/models/enums/x_amz_target36.py` |
| `DescribeDirectConnectGatewayAssociationsErrorBody` | `aws_direct_connect/errors/describe_direct_connect_gateway_associations_error.py` |

### client.aws_direct_connect.describe_direct_connect_gateway_attachments

- **Route**: `POST /#DescribeDirectConnectGatewayAttachments`
- **Auth**: `sigv4`
- **Signature**: `def describe_direct_connect_gateway_attachments(x_amz_target: XAmzTarget50OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDirectConnectGatewayAttachmentsErrorBody]`
- **Error**: `DescribeDirectConnectGatewayAttachmentsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget50OrStr` | `aws_direct_connect/models/enums/x_amz_target50.py` |
| `DescribeDirectConnectGatewayAttachmentsErrorBody` | `aws_direct_connect/errors/describe_direct_connect_gateway_attachments_error.py` |

### client.aws_direct_connect.describe_direct_connect_gateways

- **Route**: `POST /#DescribeDirectConnectGateways`
- **Auth**: `sigv4`
- **Signature**: `def describe_direct_connect_gateways(x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDirectConnectGatewaysErrorBody]`
- **Error**: `DescribeDirectConnectGatewaysErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget32OrStr` | `aws_direct_connect/models/enums/x_amz_target32.py` |
| `DescribeDirectConnectGatewaysErrorBody` | `aws_direct_connect/errors/describe_direct_connect_gateways_error.py` |

### client.aws_direct_connect.describe_hosted_connections

- **Route**: `POST /#DescribeHostedConnections`
- **Auth**: `sigv4`
- **Signature**: `def describe_hosted_connections(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeHostedConnectionsErrorBody]`
- **Error**: `DescribeHostedConnectionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget22OrStr` | `aws_direct_connect/models/enums/x_amz_target22.py` |
| `DescribeHostedConnectionsErrorBody` | `aws_direct_connect/errors/describe_hosted_connections_error.py` |

### client.aws_direct_connect.describe_interconnect_loa

- **Route**: `POST /#DescribeInterconnectLoa`
- **Auth**: `sigv4`
- **Signature**: `def describe_interconnect_loa(x_amz_target: XAmzTarget51OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeInterconnectLoaErrorBody]`
- **Error**: `DescribeInterconnectLoaErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget51OrStr` | `aws_direct_connect/models/enums/x_amz_target51.py` |
| `DescribeInterconnectLoaErrorBody` | `aws_direct_connect/errors/describe_interconnect_loa_error.py` |

### client.aws_direct_connect.describe_interconnects

- **Route**: `POST /#DescribeInterconnects`
- **Auth**: `sigv4`
- **Signature**: `def describe_interconnects(x_amz_target: XAmzTarget40OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeInterconnectsErrorBody]`
- **Error**: `DescribeInterconnectsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget40OrStr` | `aws_direct_connect/models/enums/x_amz_target40.py` |
| `DescribeInterconnectsErrorBody` | `aws_direct_connect/errors/describe_interconnects_error.py` |

### client.aws_direct_connect.describe_lags

- **Route**: `POST /#DescribeLags`
- **Auth**: `sigv4`
- **Signature**: `def describe_lags(x_amz_target: XAmzTarget43OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeLagsErrorBody]`
- **Error**: `DescribeLagsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget43OrStr` | `aws_direct_connect/models/enums/x_amz_target43.py` |
| `DescribeLagsErrorBody` | `aws_direct_connect/errors/describe_lags_error.py` |

### client.aws_direct_connect.describe_loa

- **Route**: `POST /#DescribeLoa`
- **Auth**: `sigv4`
- **Signature**: `def describe_loa(x_amz_target: XAmzTarget52OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeLoaErrorBody]`
- **Error**: `DescribeLoaErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget52OrStr` | `aws_direct_connect/models/enums/x_amz_target52.py` |
| `DescribeLoaErrorBody` | `aws_direct_connect/errors/describe_loa_error.py` |

### client.aws_direct_connect.describe_locations

- **Route**: `POST /#DescribeLocations`
- **Auth**: `sigv4`
- **Signature**: `def describe_locations(x_amz_target: XAmzTarget53OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeLocationsErrorBody]`
- **Error**: `DescribeLocationsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget53OrStr` | `aws_direct_connect/models/enums/x_amz_target53.py` |
| `DescribeLocationsErrorBody` | `aws_direct_connect/errors/describe_locations_error.py` |

### client.aws_direct_connect.describe_router_configuration

- **Route**: `POST /#DescribeRouterConfiguration`
- **Auth**: `sigv4`
- **Signature**: `def describe_router_configuration(x_amz_target: XAmzTarget54OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeRouterConfigurationErrorBody]`
- **Error**: `DescribeRouterConfigurationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget54OrStr` | `aws_direct_connect/models/enums/x_amz_target54.py` |
| `DescribeRouterConfigurationErrorBody` | `aws_direct_connect/errors/describe_router_configuration_error.py` |

### client.aws_direct_connect.describe_tags

- **Route**: `POST /#DescribeTags`
- **Auth**: `sigv4`
- **Signature**: `def describe_tags(x_amz_target: XAmzTarget55OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeTagsErrorBody]`
- **Error**: `DescribeTagsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget55OrStr` | `aws_direct_connect/models/enums/x_amz_target55.py` |
| `DescribeTagsErrorBody` | `aws_direct_connect/errors/describe_tags_error.py` |

### client.aws_direct_connect.describe_virtual_gateways

- **Route**: `POST /#DescribeVirtualGateways`
- **Auth**: `sigv4`
- **Signature**: `def describe_virtual_gateways(x_amz_target: XAmzTarget56OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeVirtualGatewaysErrorBody]`
- **Error**: `DescribeVirtualGatewaysErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget56OrStr` | `aws_direct_connect/models/enums/x_amz_target56.py` |
| `DescribeVirtualGatewaysErrorBody` | `aws_direct_connect/errors/describe_virtual_gateways_error.py` |

### client.aws_direct_connect.describe_virtual_interfaces

- **Route**: `POST /#DescribeVirtualInterfaces`
- **Auth**: `sigv4`
- **Signature**: `def describe_virtual_interfaces(x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeVirtualInterfacesErrorBody]`
- **Error**: `DescribeVirtualInterfacesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget27OrStr` | `aws_direct_connect/models/enums/x_amz_target27.py` |
| `DescribeVirtualInterfacesErrorBody` | `aws_direct_connect/errors/describe_virtual_interfaces_error.py` |

### client.aws_direct_connect.disassociate_connection_from_lag

- **Route**: `POST /#DisassociateConnectionFromLag`
- **Auth**: `sigv4`
- **Signature**: `def disassociate_connection_from_lag(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DisassociateConnectionFromLagErrorBody]`
- **Error**: `DisassociateConnectionFromLagErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget19OrStr` | `aws_direct_connect/models/enums/x_amz_target19.py` |
| `DisassociateConnectionFromLagErrorBody` | `aws_direct_connect/errors/disassociate_connection_from_lag_error.py` |

### client.aws_direct_connect.disassociate_mac_sec_key

- **Route**: `POST /#DisassociateMacSecKey`
- **Auth**: `sigv4`
- **Signature**: `def disassociate_mac_sec_key(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DisassociateMacSecKeyErrorBody]`
- **Error**: `DisassociateMacSecKeyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget24OrStr` | `aws_direct_connect/models/enums/x_amz_target24.py` |
| `DisassociateMacSecKeyErrorBody` | `aws_direct_connect/errors/disassociate_mac_sec_key_error.py` |

### client.aws_direct_connect.list_virtual_interface_test_history

- **Route**: `POST /#ListVirtualInterfaceTestHistory`
- **Auth**: `sigv4`
- **Signature**: `def list_virtual_interface_test_history(x_amz_target: XAmzTarget57OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListVirtualInterfaceTestHistoryErrorBody]`
- **Error**: `ListVirtualInterfaceTestHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget57OrStr` | `aws_direct_connect/models/enums/x_amz_target57.py` |
| `ListVirtualInterfaceTestHistoryErrorBody` | `aws_direct_connect/errors/list_virtual_interface_test_history_error.py` |

### client.aws_direct_connect.start_bgp_failover_test

- **Route**: `POST /#StartBgpFailoverTest`
- **Auth**: `sigv4`
- **Signature**: `def start_bgp_failover_test(x_amz_target: XAmzTarget58OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartBgpFailoverTestErrorBody]`
- **Error**: `StartBgpFailoverTestErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget58OrStr` | `aws_direct_connect/models/enums/x_amz_target58.py` |
| `StartBgpFailoverTestErrorBody` | `aws_direct_connect/errors/start_bgp_failover_test_error.py` |

### client.aws_direct_connect.stop_bgp_failover_test

- **Route**: `POST /#StopBgpFailoverTest`
- **Auth**: `sigv4`
- **Signature**: `def stop_bgp_failover_test(x_amz_target: XAmzTarget59OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopBgpFailoverTestErrorBody]`
- **Error**: `StopBgpFailoverTestErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget59OrStr` | `aws_direct_connect/models/enums/x_amz_target59.py` |
| `StopBgpFailoverTestErrorBody` | `aws_direct_connect/errors/stop_bgp_failover_test_error.py` |

### client.aws_direct_connect.tag_resource

- **Route**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Signature**: `def tag_resource(x_amz_target: XAmzTarget60OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TagResourceErrorBody]`
- **Error**: `TagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget60OrStr` | `aws_direct_connect/models/enums/x_amz_target60.py` |
| `TagResourceErrorBody` | `aws_direct_connect/errors/tag_resource_error.py` |

### client.aws_direct_connect.untag_resource

- **Route**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Signature**: `def untag_resource(x_amz_target: XAmzTarget61OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UntagResourceErrorBody]`
- **Error**: `UntagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget61OrStr` | `aws_direct_connect/models/enums/x_amz_target61.py` |
| `UntagResourceErrorBody` | `aws_direct_connect/errors/untag_resource_error.py` |

### client.aws_direct_connect.update_connection

- **Route**: `POST /#UpdateConnection`
- **Auth**: `sigv4`
- **Signature**: `def update_connection(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateConnectionErrorBody]`
- **Error**: `UpdateConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget20OrStr` | `aws_direct_connect/models/enums/x_amz_target20.py` |
| `UpdateConnectionErrorBody` | `aws_direct_connect/errors/update_connection_error.py` |

### client.aws_direct_connect.update_direct_connect_gateway

- **Route**: `POST /#UpdateDirectConnectGateway`
- **Auth**: `sigv4`
- **Signature**: `def update_direct_connect_gateway(x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateDirectConnectGatewayErrorBody]`
- **Error**: `UpdateDirectConnectGatewayErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget33OrStr` | `aws_direct_connect/models/enums/x_amz_target33.py` |
| `UpdateDirectConnectGatewayErrorBody` | `aws_direct_connect/errors/update_direct_connect_gateway_error.py` |

### client.aws_direct_connect.update_direct_connect_gateway_association

- **Route**: `POST /#UpdateDirectConnectGatewayAssociation`
- **Auth**: `sigv4`
- **Signature**: `def update_direct_connect_gateway_association(x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateDirectConnectGatewayAssociationErrorBody]`
- **Error**: `UpdateDirectConnectGatewayAssociationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget37OrStr` | `aws_direct_connect/models/enums/x_amz_target37.py` |
| `UpdateDirectConnectGatewayAssociationErrorBody` | `aws_direct_connect/errors/update_direct_connect_gateway_association_error.py` |

### client.aws_direct_connect.update_lag

- **Route**: `POST /#UpdateLag`
- **Auth**: `sigv4`
- **Signature**: `def update_lag(x_amz_target: XAmzTarget44OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateLagErrorBody]`
- **Error**: `UpdateLagErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget44OrStr` | `aws_direct_connect/models/enums/x_amz_target44.py` |
| `UpdateLagErrorBody` | `aws_direct_connect/errors/update_lag_error.py` |

### client.aws_direct_connect.update_virtual_interface_attributes

- **Route**: `POST /#UpdateVirtualInterfaceAttributes`
- **Auth**: `sigv4`
- **Signature**: `def update_virtual_interface_attributes(x_amz_target: XAmzTarget62OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateVirtualInterfaceAttributesErrorBody]`
- **Error**: `UpdateVirtualInterfaceAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget62OrStr` | `aws_direct_connect/models/enums/x_amz_target62.py` |
| `UpdateVirtualInterfaceAttributesErrorBody` | `aws_direct_connect/errors/update_virtual_interface_attributes_error.py` |

