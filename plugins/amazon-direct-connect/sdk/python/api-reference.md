# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AwsDirectConnectClient](aws_direct_connect/client.py)

## AwsDirectConnect

> Source: [AwsDirectConnect](aws_direct_connect/apis/aws_direct_connect.py)

<details>
<summary><code>def accept_direct_connect_gateway_association_proposal(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.accept_direct_connect_gateway_association_proposal(
        XAmzTarget.OVERTURE_SERVICE_ACCEPT_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcceptDirectConnectGatewayAssociationProposalErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.accept_direct_connect_gateway_association_proposal(
        XAmzTarget.OVERTURE_SERVICE_ACCEPT_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcceptDirectConnectGatewayAssociationProposalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](aws_direct_connect/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AcceptDirectConnectGatewayAssociationProposalErrorBody](aws_direct_connect/errors/accept_direct_connect_gateway_association_proposal_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def allocate_connection_on_interconnect(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.allocate_connection_on_interconnect(
        XAmzTarget4.OVERTURE_SERVICE_ALLOCATE_CONNECTION_ON_INTERCONNECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocateConnectionOnInterconnectErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.allocate_connection_on_interconnect(
        XAmzTarget4.OVERTURE_SERVICE_ALLOCATE_CONNECTION_ON_INTERCONNECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocateConnectionOnInterconnectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](aws_direct_connect/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AllocateConnectionOnInterconnectErrorBody](aws_direct_connect/errors/allocate_connection_on_interconnect_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def allocate_hosted_connection(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects. Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.allocate_hosted_connection(XAmzTarget5.OVERTURE_SERVICE_ALLOCATE_HOSTED_CONNECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocateHostedConnectionErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.allocate_hosted_connection(
        XAmzTarget5.OVERTURE_SERVICE_ALLOCATE_HOSTED_CONNECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocateHostedConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5OrStr](aws_direct_connect/models/enums/x_amz_target5.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AllocateHostedConnectionErrorBody](aws_direct_connect/errors/allocate_hosted_connection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def allocate_private_virtual_interface(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a private virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until then, the virtual interface is in the Confirming state and is not available to handle traffic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.allocate_private_virtual_interface(
        XAmzTarget6.OVERTURE_SERVICE_ALLOCATE_PRIVATE_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocatePrivateVirtualInterfaceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.allocate_private_virtual_interface(
        XAmzTarget6.OVERTURE_SERVICE_ALLOCATE_PRIVATE_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocatePrivateVirtualInterfaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6OrStr](aws_direct_connect/models/enums/x_amz_target6.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AllocatePrivateVirtualInterfaceErrorBody](aws_direct_connect/errors/allocate_private_virtual_interface_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def allocate_public_virtual_interface(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a public virtual interface to be owned by the specified Amazon Web Services account. The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this function must be confirmed by the owner using ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.allocate_public_virtual_interface(
        XAmzTarget7.OVERTURE_SERVICE_ALLOCATE_PUBLIC_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocatePublicVirtualInterfaceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.allocate_public_virtual_interface(
        XAmzTarget7.OVERTURE_SERVICE_ALLOCATE_PUBLIC_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocatePublicVirtualInterfaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7OrStr](aws_direct_connect/models/enums/x_amz_target7.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AllocatePublicVirtualInterfaceErrorBody](aws_direct_connect/errors/allocate_public_virtual_interface_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def allocate_transit_virtual_interface(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway. The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account. After you create a transit virtual interface, it must be confirmed by the owner using ConfirmTransitVirtualInterface. Until this step has been completed, the transit virtual interface is in the requested state and is not available to handle traffic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.allocate_transit_virtual_interface(
        XAmzTarget8.OVERTURE_SERVICE_ALLOCATE_TRANSIT_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocateTransitVirtualInterfaceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.allocate_transit_virtual_interface(
        XAmzTarget8.OVERTURE_SERVICE_ALLOCATE_TRANSIT_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocateTransitVirtualInterfaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8OrStr](aws_direct_connect/models/enums/x_amz_target8.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AllocateTransitVirtualInterfaceErrorBody](aws_direct_connect/errors/allocate_transit_virtual_interface_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associate_connection_with_lag(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails. Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG. For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.associate_connection_with_lag(XAmzTarget14.OVERTURE_SERVICE_ASSOCIATE_CONNECTION_WITH_LAG)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateConnectionWithLagErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.associate_connection_with_lag(
        XAmzTarget14.OVERTURE_SERVICE_ASSOCIATE_CONNECTION_WITH_LAG
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateConnectionWithLagErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget14OrStr](aws_direct_connect/models/enums/x_amz_target14.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AssociateConnectionWithLagErrorBody](aws_direct_connect/errors/associate_connection_with_lag_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associate_hosted_connection(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to Amazon Web Services as it is being migrated. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.associate_hosted_connection(XAmzTarget21.OVERTURE_SERVICE_ASSOCIATE_HOSTED_CONNECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateHostedConnectionErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.associate_hosted_connection(
        XAmzTarget21.OVERTURE_SERVICE_ASSOCIATE_HOSTED_CONNECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateHostedConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget21OrStr](aws_direct_connect/models/enums/x_amz_target21.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AssociateHostedConnectionErrorBody](aws_direct_connect/errors/associate_hosted_connection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associate_mac_sec_key(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with a Direct Connect connection. You must supply either the secretARN, or the CKN/CAK (ckn and cak) pair in the request. For information about MAC Security (MACsec) key considerations, see MACsec pre-shared CKN/CAK key considerations in the Direct Connect User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.associate_mac_sec_key(XAmzTarget23.OVERTURE_SERVICE_ASSOCIATE_MAC_SEC_KEY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateMacSecKeyErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.associate_mac_sec_key(XAmzTarget23.OVERTURE_SERVICE_ASSOCIATE_MAC_SEC_KEY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateMacSecKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget23OrStr](aws_direct_connect/models/enums/x_amz_target23.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AssociateMacSecKeyErrorBody](aws_direct_connect/errors/associate_mac_sec_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associate_virtual_interface(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails. Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using AssociateHostedConnection. To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.associate_virtual_interface(XAmzTarget25.OVERTURE_SERVICE_ASSOCIATE_VIRTUAL_INTERFACE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateVirtualInterfaceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.associate_virtual_interface(
        XAmzTarget25.OVERTURE_SERVICE_ASSOCIATE_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateVirtualInterfaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget25OrStr](aws_direct_connect/models/enums/x_amz_target25.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AssociateVirtualInterfaceErrorBody](aws_direct_connect/errors/associate_virtual_interface_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def confirm_connection(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted connection is initially in the Ordering state, and remains in this state until the owner confirms creation of the hosted connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.confirm_connection(XAmzTarget9.OVERTURE_SERVICE_CONFIRM_CONNECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmConnectionErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.confirm_connection(XAmzTarget9.OVERTURE_SERVICE_CONFIRM_CONNECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9OrStr](aws_direct_connect/models/enums/x_amz_target9.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ConfirmConnectionErrorBody](aws_direct_connect/errors/confirm_connection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def confirm_customer_agreement(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.confirm_customer_agreement(XAmzTarget10.OVERTURE_SERVICE_CONFIRM_CUSTOMER_AGREEMENT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmCustomerAgreementErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.confirm_customer_agreement(
        XAmzTarget10.OVERTURE_SERVICE_CONFIRM_CUSTOMER_AGREEMENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmCustomerAgreementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget10OrStr](aws_direct_connect/models/enums/x_amz_target10.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ConfirmCustomerAgreementErrorBody](aws_direct_connect/errors/confirm_customer_agreement_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def confirm_private_virtual_interface(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts ownership of a private virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.confirm_private_virtual_interface(
        XAmzTarget11.OVERTURE_SERVICE_CONFIRM_PRIVATE_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmPrivateVirtualInterfaceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.confirm_private_virtual_interface(
        XAmzTarget11.OVERTURE_SERVICE_CONFIRM_PRIVATE_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmPrivateVirtualInterfaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget11OrStr](aws_direct_connect/models/enums/x_amz_target11.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ConfirmPrivateVirtualInterfaceErrorBody](aws_direct_connect/errors/confirm_private_virtual_interface_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def confirm_public_virtual_interface(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts ownership of a public virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.confirm_public_virtual_interface(
        XAmzTarget12.OVERTURE_SERVICE_CONFIRM_PUBLIC_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmPublicVirtualInterfaceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.confirm_public_virtual_interface(
        XAmzTarget12.OVERTURE_SERVICE_CONFIRM_PUBLIC_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmPublicVirtualInterfaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget12OrStr](aws_direct_connect/models/enums/x_amz_target12.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ConfirmPublicVirtualInterfaceErrorBody](aws_direct_connect/errors/confirm_public_virtual_interface_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def confirm_transit_virtual_interface(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts ownership of a transit virtual interface created by another Amazon Web Services account. After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.confirm_transit_virtual_interface(
        XAmzTarget13.OVERTURE_SERVICE_CONFIRM_TRANSIT_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmTransitVirtualInterfaceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.confirm_transit_virtual_interface(
        XAmzTarget13.OVERTURE_SERVICE_CONFIRM_TRANSIT_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmTransitVirtualInterfaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget13OrStr](aws_direct_connect/models/enums/x_amz_target13.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ConfirmTransitVirtualInterfaceErrorBody](aws_direct_connect/errors/confirm_transit_virtual_interface_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bgp_peer(x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a BGP peer on the specified virtual interface. You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family. If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface. When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses. If you let Amazon Web Services auto-assign IPv4 addresses, a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you intend to use the customer router peer IP address as the source and destination for traffic. Instead you should use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see Address Allocation for Private Internets. For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.create_bgp_peer(XAmzTarget28.OVERTURE_SERVICE_CREATE_BGP_PEER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBgpPeerErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.create_bgp_peer(XAmzTarget28.OVERTURE_SERVICE_CREATE_BGP_PEER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBgpPeerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget28OrStr](aws_direct_connect/models/enums/x_amz_target28.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[CreateBgpPeerErrorBody](aws_direct_connect/errors/create_bgp_peer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_connection(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a connection between a customer network and a specific Direct Connect location. A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router. To find the locations for your Region, use DescribeLocations. You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.create_connection(XAmzTarget15.OVERTURE_SERVICE_CREATE_CONNECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateConnectionErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.create_connection(XAmzTarget15.OVERTURE_SERVICE_CREATE_CONNECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget15OrStr](aws_direct_connect/models/enums/x_amz_target15.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[CreateConnectionErrorBody](aws_direct_connect/errors/create_connection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_direct_connect_gateway(x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.create_direct_connect_gateway(XAmzTarget30.OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDirectConnectGatewayErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.create_direct_connect_gateway(
        XAmzTarget30.OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDirectConnectGatewayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget30OrStr](aws_direct_connect/models/enums/x_amz_target30.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[CreateDirectConnectGatewayErrorBody](aws_direct_connect/errors/create_direct_connect_gateway_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_direct_connect_gateway_association(x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.create_direct_connect_gateway_association(
        XAmzTarget34.OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDirectConnectGatewayAssociationErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.create_direct_connect_gateway_association(
        XAmzTarget34.OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDirectConnectGatewayAssociationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget34OrStr](aws_direct_connect/models/enums/x_amz_target34.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[CreateDirectConnectGatewayAssociationErrorBody](aws_direct_connect/errors/create_direct_connect_gateway_association_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_direct_connect_gateway_association_proposal(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway. You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.create_direct_connect_gateway_association_proposal(
        XAmzTarget1.OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDirectConnectGatewayAssociationProposalErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.create_direct_connect_gateway_association_proposal(
        XAmzTarget1.OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDirectConnectGatewayAssociationProposalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](aws_direct_connect/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[CreateDirectConnectGatewayAssociationProposalErrorBody](aws_direct_connect/errors/create_direct_connect_gateway_association_proposal_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_interconnect(x_amz_target: XAmzTarget38OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location. An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect router. You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created. For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling AllocateHostedConnection. The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Co

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.create_interconnect(XAmzTarget38.OVERTURE_SERVICE_CREATE_INTERCONNECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInterconnectErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.create_interconnect(XAmzTarget38.OVERTURE_SERVICE_CREATE_INTERCONNECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInterconnectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget38OrStr](aws_direct_connect/models/enums/x_amz_target38.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[CreateInterconnectErrorBody](aws_direct_connect/errors/create_interconnect_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_lag(x_amz_target: XAmzTarget41OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface. All connections in a LAG must use the same bandwidth (either 1Gbps, 10Gbps, 100Gbps, or 400Gbps) and must terminate at the same Direct Connect endpoint. You can have up to 10 dedicated connections per location. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is created.. You can specify an existing physical dedicated connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.create_lag(XAmzTarget41.OVERTURE_SERVICE_CREATE_LAG)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateLagErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.create_lag(XAmzTarget41.OVERTURE_SERVICE_CREATE_LAG)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateLagErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget41OrStr](aws_direct_connect/models/enums/x_amz_target41.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[CreateLagErrorBody](aws_direct_connect/errors/create_lag_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_private_virtual_interface(x_amz_target: XAmzTarget45OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.create_private_virtual_interface(
        XAmzTarget45.OVERTURE_SERVICE_CREATE_PRIVATE_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePrivateVirtualInterfaceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.create_private_virtual_interface(
        XAmzTarget45.OVERTURE_SERVICE_CREATE_PRIVATE_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePrivateVirtualInterfaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget45OrStr](aws_direct_connect/models/enums/x_amz_target45.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[CreatePrivateVirtualInterfaceErrorBody](aws_direct_connect/errors/create_private_virtual_interface_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_public_virtual_interface(x_amz_target: XAmzTarget46OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3. When creating an IPv6 public virtual interface (addressFamily is ipv6), leave the customer and amazon address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.create_public_virtual_interface(
        XAmzTarget46.OVERTURE_SERVICE_CREATE_PUBLIC_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePublicVirtualInterfaceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.create_public_virtual_interface(
        XAmzTarget46.OVERTURE_SERVICE_CREATE_PUBLIC_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePublicVirtualInterfaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget46OrStr](aws_direct_connect/models/enums/x_amz_target46.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[CreatePublicVirtualInterfaceErrorBody](aws_direct_connect/errors/create_public_virtual_interface_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_transit_virtual_interface(x_amz_target: XAmzTarget47OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway. If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails. A jumbo MTU value must be either 1500 or 8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.create_transit_virtual_interface(
        XAmzTarget47.OVERTURE_SERVICE_CREATE_TRANSIT_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTransitVirtualInterfaceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.create_transit_virtual_interface(
        XAmzTarget47.OVERTURE_SERVICE_CREATE_TRANSIT_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTransitVirtualInterfaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget47OrStr](aws_direct_connect/models/enums/x_amz_target47.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[CreateTransitVirtualInterfaceErrorBody](aws_direct_connect/errors/create_transit_virtual_interface_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bgp_peer(x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN. You cannot delete the last BGP peer from a virtual interface.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.delete_bgp_peer(XAmzTarget29.OVERTURE_SERVICE_DELETE_BGP_PEER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBgpPeerErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.delete_bgp_peer(XAmzTarget29.OVERTURE_SERVICE_DELETE_BGP_PEER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBgpPeerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget29OrStr](aws_direct_connect/models/enums/x_amz_target29.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DeleteBgpPeerErrorBody](aws_direct_connect/errors/delete_bgp_peer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_connection(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified connection. Deleting a connection only stops the Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you must cancel your service with them separately.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.delete_connection(XAmzTarget16.OVERTURE_SERVICE_DELETE_CONNECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteConnectionErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.delete_connection(XAmzTarget16.OVERTURE_SERVICE_DELETE_CONNECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget16OrStr](aws_direct_connect/models/enums/x_amz_target16.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DeleteConnectionErrorBody](aws_direct_connect/errors/delete_connection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_direct_connect_gateway(x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.delete_direct_connect_gateway(XAmzTarget31.OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDirectConnectGatewayErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.delete_direct_connect_gateway(
        XAmzTarget31.OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDirectConnectGatewayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget31OrStr](aws_direct_connect/models/enums/x_amz_target31.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DeleteDirectConnectGatewayErrorBody](aws_direct_connect/errors/delete_direct_connect_gateway_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_direct_connect_gateway_association(x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the association between the specified Direct Connect gateway and virtual private gateway. We recommend that you specify the associationID to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the virtualGatewayId and directConnectGatewayId to delete an association.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.delete_direct_connect_gateway_association(
        XAmzTarget35.OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDirectConnectGatewayAssociationErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.delete_direct_connect_gateway_association(
        XAmzTarget35.OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDirectConnectGatewayAssociationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget35OrStr](aws_direct_connect/models/enums/x_amz_target35.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DeleteDirectConnectGatewayAssociationErrorBody](aws_direct_connect/errors/delete_direct_connect_gateway_association_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_direct_connect_gateway_association_proposal(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.delete_direct_connect_gateway_association_proposal(
        XAmzTarget2.OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDirectConnectGatewayAssociationProposalErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.delete_direct_connect_gateway_association_proposal(
        XAmzTarget2.OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDirectConnectGatewayAssociationProposalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](aws_direct_connect/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DeleteDirectConnectGatewayAssociationProposalErrorBody](aws_direct_connect/errors/delete_direct_connect_gateway_association_proposal_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_interconnect(x_amz_target: XAmzTarget39OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified interconnect. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.delete_interconnect(XAmzTarget39.OVERTURE_SERVICE_DELETE_INTERCONNECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteInterconnectErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.delete_interconnect(XAmzTarget39.OVERTURE_SERVICE_DELETE_INTERCONNECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteInterconnectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget39OrStr](aws_direct_connect/models/enums/x_amz_target39.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DeleteInterconnectErrorBody](aws_direct_connect/errors/delete_interconnect_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_lag(x_amz_target: XAmzTarget42OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.delete_lag(XAmzTarget42.OVERTURE_SERVICE_DELETE_LAG)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteLagErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.delete_lag(XAmzTarget42.OVERTURE_SERVICE_DELETE_LAG)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteLagErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget42OrStr](aws_direct_connect/models/enums/x_amz_target42.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DeleteLagErrorBody](aws_direct_connect/errors/delete_lag_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_virtual_interface(x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a virtual interface.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.delete_virtual_interface(XAmzTarget26.OVERTURE_SERVICE_DELETE_VIRTUAL_INTERFACE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteVirtualInterfaceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.delete_virtual_interface(
        XAmzTarget26.OVERTURE_SERVICE_DELETE_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteVirtualInterfaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget26OrStr](aws_direct_connect/models/enums/x_amz_target26.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DeleteVirtualInterfaceErrorBody](aws_direct_connect/errors/delete_virtual_interface_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_connection_loa(x_amz_target: XAmzTarget48OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for a connection. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects at Direct Connect Locations in the Direct Connect User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_connection_loa(XAmzTarget48.OVERTURE_SERVICE_DESCRIBE_CONNECTION_LOA)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeConnectionLoaErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_connection_loa(XAmzTarget48.OVERTURE_SERVICE_DESCRIBE_CONNECTION_LOA)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeConnectionLoaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget48OrStr](aws_direct_connect/models/enums/x_amz_target48.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeConnectionLoaErrorBody](aws_direct_connect/errors/describe_connection_loa_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_connections(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Displays the specified connection or all connections in this Region.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_connections(XAmzTarget17.OVERTURE_SERVICE_DESCRIBE_CONNECTIONS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeConnectionsErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_connections(XAmzTarget17.OVERTURE_SERVICE_DESCRIBE_CONNECTIONS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeConnectionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget17OrStr](aws_direct_connect/models/enums/x_amz_target17.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeConnectionsErrorBody](aws_direct_connect/errors/describe_connections_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_connections_on_interconnect(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated. Use DescribeHostedConnections instead. Lists the connections that have been provisioned on the specified interconnect. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_connections_on_interconnect(
        XAmzTarget18.OVERTURE_SERVICE_DESCRIBE_CONNECTIONS_ON_INTERCONNECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeConnectionsOnInterconnectErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_connections_on_interconnect(
        XAmzTarget18.OVERTURE_SERVICE_DESCRIBE_CONNECTIONS_ON_INTERCONNECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeConnectionsOnInterconnectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget18OrStr](aws_direct_connect/models/enums/x_amz_target18.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeConnectionsOnInterconnectErrorBody](aws_direct_connect/errors/describe_connections_on_interconnect_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_customer_metadata(x_amz_target: XAmzTarget49OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get and view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_customer_metadata(XAmzTarget49.OVERTURE_SERVICE_DESCRIBE_CUSTOMER_METADATA)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCustomerMetadataErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_customer_metadata(
        XAmzTarget49.OVERTURE_SERVICE_DESCRIBE_CUSTOMER_METADATA
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCustomerMetadataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget49OrStr](aws_direct_connect/models/enums/x_amz_target49.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeCustomerMetadataErrorBody](aws_direct_connect/errors/describe_customer_metadata_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_direct_connect_gateway_association_proposals(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_direct_connect_gateway_association_proposals(
        XAmzTarget3.OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSALS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDirectConnectGatewayAssociationProposalsErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_direct_connect_gateway_association_proposals(
        XAmzTarget3.OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSALS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDirectConnectGatewayAssociationProposalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](aws_direct_connect/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeDirectConnectGatewayAssociationProposalsErrorBody](aws_direct_connect/errors/describe_direct_connect_gateway_association_proposals_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_direct_connect_gateway_associations(x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following: A Direct Connect gateway The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway. A virtual private gateway The response contains the Direct Connect gateway. A transit gateway The response contains the Direct Connect gateway. A Direct Connect gateway and a virtual private gateway The response contains the association between the Direct Connect gateway and virtual private gateway. A Direct Connect gateway and a transit gateway The response contains the association between the Direct Connect gateway and transit gateway. A Direct Connect gateway and a virtual private gateway The response contains the association between the Direct Connect gateway and virtual private gateway. A Direct Connect gateway association to a Cloud WAN core network The response contains the Cloud WAN core network ID that the Direct Connect gateway is associated to.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_direct_connect_gateway_associations(
        XAmzTarget36.OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDirectConnectGatewayAssociationsErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_direct_connect_gateway_associations(
        XAmzTarget36.OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDirectConnectGatewayAssociationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget36OrStr](aws_direct_connect/models/enums/x_amz_target36.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeDirectConnectGatewayAssociationsErrorBody](aws_direct_connect/errors/describe_direct_connect_gateway_associations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_direct_connect_gateway_attachments(x_amz_target: XAmzTarget50OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_direct_connect_gateway_attachments(
        XAmzTarget50.OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ATTACHMENTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDirectConnectGatewayAttachmentsErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_direct_connect_gateway_attachments(
        XAmzTarget50.OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ATTACHMENTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDirectConnectGatewayAttachmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget50OrStr](aws_direct_connect/models/enums/x_amz_target50.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeDirectConnectGatewayAttachmentsErrorBody](aws_direct_connect/errors/describe_direct_connect_gateway_attachments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_direct_connect_gateways(x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_direct_connect_gateways(
        XAmzTarget32.OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAYS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDirectConnectGatewaysErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_direct_connect_gateways(
        XAmzTarget32.OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAYS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDirectConnectGatewaysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget32OrStr](aws_direct_connect/models/enums/x_amz_target32.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeDirectConnectGatewaysErrorBody](aws_direct_connect/errors/describe_direct_connect_gateways_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_hosted_connections(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG). Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_hosted_connections(XAmzTarget22.OVERTURE_SERVICE_DESCRIBE_HOSTED_CONNECTIONS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeHostedConnectionsErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_hosted_connections(
        XAmzTarget22.OVERTURE_SERVICE_DESCRIBE_HOSTED_CONNECTIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeHostedConnectionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget22OrStr](aws_direct_connect/models/enums/x_amz_target22.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeHostedConnectionsErrorBody](aws_direct_connect/errors/describe_hosted_connections_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_interconnect_loa(x_amz_target: XAmzTarget51OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for the specified interconnect. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects at Direct Connect Locations in the Direct Connect User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_interconnect_loa(XAmzTarget51.OVERTURE_SERVICE_DESCRIBE_INTERCONNECT_LOA)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeInterconnectLoaErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_interconnect_loa(
        XAmzTarget51.OVERTURE_SERVICE_DESCRIBE_INTERCONNECT_LOA
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeInterconnectLoaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget51OrStr](aws_direct_connect/models/enums/x_amz_target51.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeInterconnectLoaErrorBody](aws_direct_connect/errors/describe_interconnect_loa_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_interconnects(x_amz_target: XAmzTarget40OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_interconnects(XAmzTarget40.OVERTURE_SERVICE_DESCRIBE_INTERCONNECTS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeInterconnectsErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_interconnects(XAmzTarget40.OVERTURE_SERVICE_DESCRIBE_INTERCONNECTS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeInterconnectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget40OrStr](aws_direct_connect/models/enums/x_amz_target40.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeInterconnectsErrorBody](aws_direct_connect/errors/describe_interconnects_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_lags(x_amz_target: XAmzTarget43OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes all your link aggregation groups (LAG) or the specified LAG.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_lags(XAmzTarget43.OVERTURE_SERVICE_DESCRIBE_LAGS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeLagsErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_lags(XAmzTarget43.OVERTURE_SERVICE_DESCRIBE_LAGS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeLagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget43OrStr](aws_direct_connect/models/enums/x_amz_target43.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeLagsErrorBody](aws_direct_connect/errors/describe_lags_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_loa(x_amz_target: XAmzTarget52OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG). The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects at Direct Connect Locations in the Direct Connect User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_loa(XAmzTarget52.OVERTURE_SERVICE_DESCRIBE_LOA)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeLoaErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_loa(XAmzTarget52.OVERTURE_SERVICE_DESCRIBE_LOA)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeLoaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget52OrStr](aws_direct_connect/models/enums/x_amz_target52.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeLoaErrorBody](aws_direct_connect/errors/describe_loa_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_locations(x_amz_target: XAmzTarget53OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that can be selected when calling CreateConnection or CreateInterconnect.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_locations(XAmzTarget53.OVERTURE_SERVICE_DESCRIBE_LOCATIONS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeLocationsErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_locations(XAmzTarget53.OVERTURE_SERVICE_DESCRIBE_LOCATIONS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeLocationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget53OrStr](aws_direct_connect/models/enums/x_amz_target53.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeLocationsErrorBody](aws_direct_connect/errors/describe_locations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_router_configuration(x_amz_target: XAmzTarget54OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Details about the router.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_router_configuration(XAmzTarget54.OVERTURE_SERVICE_DESCRIBE_ROUTER_CONFIGURATION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeRouterConfigurationErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_router_configuration(
        XAmzTarget54.OVERTURE_SERVICE_DESCRIBE_ROUTER_CONFIGURATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeRouterConfigurationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget54OrStr](aws_direct_connect/models/enums/x_amz_target54.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeRouterConfigurationErrorBody](aws_direct_connect/errors/describe_router_configuration_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_tags(x_amz_target: XAmzTarget55OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the tags associated with the specified Direct Connect resources.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_tags(XAmzTarget55.OVERTURE_SERVICE_DESCRIBE_TAGS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTagsErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_tags(XAmzTarget55.OVERTURE_SERVICE_DESCRIBE_TAGS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget55OrStr](aws_direct_connect/models/enums/x_amz_target55.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeTagsErrorBody](aws_direct_connect/errors/describe_tags_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_virtual_gateways(x_amz_target: XAmzTarget56OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated. Use DescribeVpnGateways instead. See DescribeVPNGateways in the Amazon Elastic Compute Cloud API Reference. Lists the virtual private gateways owned by the Amazon Web Services account. You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_virtual_gateways(XAmzTarget56.OVERTURE_SERVICE_DESCRIBE_VIRTUAL_GATEWAYS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeVirtualGatewaysErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_virtual_gateways(
        XAmzTarget56.OVERTURE_SERVICE_DESCRIBE_VIRTUAL_GATEWAYS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeVirtualGatewaysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget56OrStr](aws_direct_connect/models/enums/x_amz_target56.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeVirtualGatewaysErrorBody](aws_direct_connect/errors/describe_virtual_gateways_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_virtual_interfaces(x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned. A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network. If you're using an asn, the response includes the ASN value in both the asn and asnLong fields. If you're using asnLong, the response returns a value of 0 (zero) for the asn attribute because it exceeds the highest ASN value of 2,147,483,647 that it can support

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.describe_virtual_interfaces(XAmzTarget27.OVERTURE_SERVICE_DESCRIBE_VIRTUAL_INTERFACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeVirtualInterfacesErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.describe_virtual_interfaces(
        XAmzTarget27.OVERTURE_SERVICE_DESCRIBE_VIRTUAL_INTERFACES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeVirtualInterfacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget27OrStr](aws_direct_connect/models/enums/x_amz_target27.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DescribeVirtualInterfacesErrorBody](aws_direct_connect/errors/describe_virtual_interfaces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disassociate_connection_from_lag(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the DeleteConnection request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically converted to an interconnect. If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.disassociate_connection_from_lag(
        XAmzTarget19.OVERTURE_SERVICE_DISASSOCIATE_CONNECTION_FROM_LAG
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisassociateConnectionFromLagErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.disassociate_connection_from_lag(
        XAmzTarget19.OVERTURE_SERVICE_DISASSOCIATE_CONNECTION_FROM_LAG
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisassociateConnectionFromLagErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget19OrStr](aws_direct_connect/models/enums/x_amz_target19.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DisassociateConnectionFromLagErrorBody](aws_direct_connect/errors/disassociate_connection_from_lag_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disassociate_mac_sec_key(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the association between a MAC Security (MACsec) security key and a Direct Connect connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.disassociate_mac_sec_key(XAmzTarget24.OVERTURE_SERVICE_DISASSOCIATE_MAC_SEC_KEY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisassociateMacSecKeyErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.disassociate_mac_sec_key(
        XAmzTarget24.OVERTURE_SERVICE_DISASSOCIATE_MAC_SEC_KEY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisassociateMacSecKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget24OrStr](aws_direct_connect/models/enums/x_amz_target24.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DisassociateMacSecKeyErrorBody](aws_direct_connect/errors/disassociate_mac_sec_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_virtual_interface_test_history(x_amz_target: XAmzTarget57OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the virtual interface failover test history.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.list_virtual_interface_test_history(
        XAmzTarget57.OVERTURE_SERVICE_LIST_VIRTUAL_INTERFACE_TEST_HISTORY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVirtualInterfaceTestHistoryErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.list_virtual_interface_test_history(
        XAmzTarget57.OVERTURE_SERVICE_LIST_VIRTUAL_INTERFACE_TEST_HISTORY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVirtualInterfaceTestHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget57OrStr](aws_direct_connect/models/enums/x_amz_target57.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ListVirtualInterfaceTestHistoryErrorBody](aws_direct_connect/errors/list_virtual_interface_test_history_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_bgp_failover_test(x_amz_target: XAmzTarget58OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages. You can run the test on public, private, transit, and hosted virtual interfaces. You can use ListVirtualInterfaceTestHistory to view the virtual interface test history. If you need to stop the test before the test interval completes, use StopBgpFailoverTest.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.start_bgp_failover_test(XAmzTarget58.OVERTURE_SERVICE_START_BGP_FAILOVER_TEST)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBgpFailoverTestErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.start_bgp_failover_test(XAmzTarget58.OVERTURE_SERVICE_START_BGP_FAILOVER_TEST)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBgpFailoverTestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget58OrStr](aws_direct_connect/models/enums/x_amz_target58.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[StartBgpFailoverTestErrorBody](aws_direct_connect/errors/start_bgp_failover_test_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_bgp_failover_test(x_amz_target: XAmzTarget59OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops the virtual interface failover test.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.stop_bgp_failover_test(XAmzTarget59.OVERTURE_SERVICE_STOP_BGP_FAILOVER_TEST)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopBgpFailoverTestErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.stop_bgp_failover_test(XAmzTarget59.OVERTURE_SERVICE_STOP_BGP_FAILOVER_TEST)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopBgpFailoverTestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget59OrStr](aws_direct_connect/models/enums/x_amz_target59.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[StopBgpFailoverTestErrorBody](aws_direct_connect/errors/stop_bgp_failover_test_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource(x_amz_target: XAmzTarget60OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.tag_resource(XAmzTarget60.OVERTURE_SERVICE_TAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.tag_resource(XAmzTarget60.OVERTURE_SERVICE_TAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget60OrStr](aws_direct_connect/models/enums/x_amz_target60.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[TagResourceErrorBody](aws_direct_connect/errors/tag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_resource(x_amz_target: XAmzTarget61OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes one or more tags from the specified Direct Connect resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.untag_resource(XAmzTarget61.OVERTURE_SERVICE_UNTAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.untag_resource(XAmzTarget61.OVERTURE_SERVICE_UNTAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget61OrStr](aws_direct_connect/models/enums/x_amz_target61.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[UntagResourceErrorBody](aws_direct_connect/errors/untag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_connection(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the Direct Connect connection configuration. You can update the following parameters for a connection: The connection name The connection's MAC Security (MACsec) encryption mode.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.update_connection(XAmzTarget20.OVERTURE_SERVICE_UPDATE_CONNECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateConnectionErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.update_connection(XAmzTarget20.OVERTURE_SERVICE_UPDATE_CONNECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget20OrStr](aws_direct_connect/models/enums/x_amz_target20.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[UpdateConnectionErrorBody](aws_direct_connect/errors/update_connection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_direct_connect_gateway(x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name of a current Direct Connect gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.update_direct_connect_gateway(XAmzTarget33.OVERTURE_SERVICE_UPDATE_DIRECT_CONNECT_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDirectConnectGatewayErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.update_direct_connect_gateway(
        XAmzTarget33.OVERTURE_SERVICE_UPDATE_DIRECT_CONNECT_GATEWAY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDirectConnectGatewayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget33OrStr](aws_direct_connect/models/enums/x_amz_target33.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[UpdateDirectConnectGatewayErrorBody](aws_direct_connect/errors/update_direct_connect_gateway_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_direct_connect_gateway_association(x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified attributes of the Direct Connect gateway association. Add or remove prefixes from the association.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.update_direct_connect_gateway_association(
        XAmzTarget37.OVERTURE_SERVICE_UPDATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDirectConnectGatewayAssociationErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.update_direct_connect_gateway_association(
        XAmzTarget37.OVERTURE_SERVICE_UPDATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDirectConnectGatewayAssociationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget37OrStr](aws_direct_connect/models/enums/x_amz_target37.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[UpdateDirectConnectGatewayAssociationErrorBody](aws_direct_connect/errors/update_direct_connect_gateway_association_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_lag(x_amz_target: XAmzTarget44OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the attributes of the specified link aggregation group (LAG). You can update the following LAG attributes: The name of the LAG. The value for the minimum number of connections that must be operational for the LAG itself to be operational. The LAG's MACsec encryption mode. Amazon Web Services assigns this value to each connection which is part of the LAG. The tags If you adjust the threshold value for the minimum number of operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become non-operational.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.update_lag(XAmzTarget44.OVERTURE_SERVICE_UPDATE_LAG)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateLagErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.update_lag(XAmzTarget44.OVERTURE_SERVICE_UPDATE_LAG)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateLagErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget44OrStr](aws_direct_connect/models/enums/x_amz_target44.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[UpdateLagErrorBody](aws_direct_connect/errors/update_lag_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_virtual_interface_attributes(x_amz_target: XAmzTarget62OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified attributes of the specified virtual private interface. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.aws_direct_connect.update_virtual_interface_attributes(
        XAmzTarget62.OVERTURE_SERVICE_UPDATE_VIRTUAL_INTERFACE_ATTRIBUTES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateVirtualInterfaceAttributesErrorBody
```

**Async**

```python
try:
    await async_client.aws_direct_connect.update_virtual_interface_attributes(
        XAmzTarget62.OVERTURE_SERVICE_UPDATE_VIRTUAL_INTERFACE_ATTRIBUTES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateVirtualInterfaceAttributesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget62OrStr](aws_direct_connect/models/enums/x_amz_target62.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[UpdateVirtualInterfaceAttributesErrorBody](aws_direct_connect/errors/update_virtual_interface_attributes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](aws_direct_connect/apis/operations.py)

<details>
<summary><code>def allocate_connection_on_interconnect2(x_amz_target: XAmzTargetAwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.allocate_connection_on_interconnect2(
        XAmzTargetAwsDirectConnectOperationsApi.OVERTURE_SERVICE_ALLOCATE_CONNECTION_ON_INTERCONNECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocateConnectionOnInterconnect2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.allocate_connection_on_interconnect2(
        XAmzTargetAwsDirectConnectOperationsApi.OVERTURE_SERVICE_ALLOCATE_CONNECTION_ON_INTERCONNECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocateConnectionOnInterconnect2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AllocateConnectionOnInterconnect2ErrorBody](aws_direct_connect/errors/allocate_connection_on_interconnect2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def allocate_hosted_connection2(x_amz_target: XAmzTarget1AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects. Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.allocate_hosted_connection2(
        XAmzTarget1AwsDirectConnectOperationsApi.OVERTURE_SERVICE_ALLOCATE_HOSTED_CONNECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocateHostedConnection2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.allocate_hosted_connection2(
        XAmzTarget1AwsDirectConnectOperationsApi.OVERTURE_SERVICE_ALLOCATE_HOSTED_CONNECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocateHostedConnection2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target1_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AllocateHostedConnection2ErrorBody](aws_direct_connect/errors/allocate_hosted_connection2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def allocate_private_virtual_interface2(x_amz_target: XAmzTarget2AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a private virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until then, the virtual interface is in the Confirming state and is not available to handle traffic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.allocate_private_virtual_interface2(
        XAmzTarget2AwsDirectConnectOperationsApi.OVERTURE_SERVICE_ALLOCATE_PRIVATE_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocatePrivateVirtualInterface2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.allocate_private_virtual_interface2(
        XAmzTarget2AwsDirectConnectOperationsApi.OVERTURE_SERVICE_ALLOCATE_PRIVATE_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocatePrivateVirtualInterface2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target2_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AllocatePrivateVirtualInterface2ErrorBody](aws_direct_connect/errors/allocate_private_virtual_interface2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def allocate_public_virtual_interface2(x_amz_target: XAmzTarget3AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a public virtual interface to be owned by the specified Amazon Web Services account. The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this function must be confirmed by the owner using ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.allocate_public_virtual_interface2(
        XAmzTarget3AwsDirectConnectOperationsApi.OVERTURE_SERVICE_ALLOCATE_PUBLIC_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocatePublicVirtualInterface2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.allocate_public_virtual_interface2(
        XAmzTarget3AwsDirectConnectOperationsApi.OVERTURE_SERVICE_ALLOCATE_PUBLIC_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocatePublicVirtualInterface2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target3_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AllocatePublicVirtualInterface2ErrorBody](aws_direct_connect/errors/allocate_public_virtual_interface2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def allocate_transit_virtual_interface2(x_amz_target: XAmzTarget4AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway. The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account. After you create a transit virtual interface, it must be confirmed by the owner using ConfirmTransitVirtualInterface. Until this step has been completed, the transit virtual interface is in the requested state and is not available to handle traffic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.allocate_transit_virtual_interface2(
        XAmzTarget4AwsDirectConnectOperationsApi.OVERTURE_SERVICE_ALLOCATE_TRANSIT_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocateTransitVirtualInterface2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.allocate_transit_virtual_interface2(
        XAmzTarget4AwsDirectConnectOperationsApi.OVERTURE_SERVICE_ALLOCATE_TRANSIT_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AllocateTransitVirtualInterface2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target4_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AllocateTransitVirtualInterface2ErrorBody](aws_direct_connect/errors/allocate_transit_virtual_interface2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associate_connections_to_resiliency_group(x_amz_target: XAmzTarget10AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates one or more connections with the specified resiliency group. This operation is atomic: either all of the specified connections are associated, or the operation fails and no changes are made.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.associate_connections_to_resiliency_group(
        XAmzTarget10AwsDirectConnectOperationsApi.OVERTURE_SERVICE_ASSOCIATE_CONNECTIONS_TO_RESILIENCY_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateConnectionsToResiliencyGroupErrorBody
```

**Async**

```python
try:
    await async_client.operations.associate_connections_to_resiliency_group(
        XAmzTarget10AwsDirectConnectOperationsApi.OVERTURE_SERVICE_ASSOCIATE_CONNECTIONS_TO_RESILIENCY_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateConnectionsToResiliencyGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget10AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target10_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[AssociateConnectionsToResiliencyGroupErrorBody](aws_direct_connect/errors/associate_connections_to_resiliency_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def confirm_connection2(x_amz_target: XAmzTarget5AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted connection is initially in the Ordering state, and remains in this state until the owner confirms creation of the hosted connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.confirm_connection2(XAmzTarget5AwsDirectConnectOperationsApi.OVERTURE_SERVICE_CONFIRM_CONNECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmConnection2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.confirm_connection2(
        XAmzTarget5AwsDirectConnectOperationsApi.OVERTURE_SERVICE_CONFIRM_CONNECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmConnection2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target5_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ConfirmConnection2ErrorBody](aws_direct_connect/errors/confirm_connection2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def confirm_customer_agreement2(x_amz_target: XAmzTarget6AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.confirm_customer_agreement2(
        XAmzTarget6AwsDirectConnectOperationsApi.OVERTURE_SERVICE_CONFIRM_CUSTOMER_AGREEMENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmCustomerAgreement2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.confirm_customer_agreement2(
        XAmzTarget6AwsDirectConnectOperationsApi.OVERTURE_SERVICE_CONFIRM_CUSTOMER_AGREEMENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmCustomerAgreement2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target6_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ConfirmCustomerAgreement2ErrorBody](aws_direct_connect/errors/confirm_customer_agreement2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def confirm_private_virtual_interface2(x_amz_target: XAmzTarget7AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts ownership of a private virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.confirm_private_virtual_interface2(
        XAmzTarget7AwsDirectConnectOperationsApi.OVERTURE_SERVICE_CONFIRM_PRIVATE_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmPrivateVirtualInterface2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.confirm_private_virtual_interface2(
        XAmzTarget7AwsDirectConnectOperationsApi.OVERTURE_SERVICE_CONFIRM_PRIVATE_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmPrivateVirtualInterface2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target7_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ConfirmPrivateVirtualInterface2ErrorBody](aws_direct_connect/errors/confirm_private_virtual_interface2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def confirm_public_virtual_interface2(x_amz_target: XAmzTarget8AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts ownership of a public virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.confirm_public_virtual_interface2(
        XAmzTarget8AwsDirectConnectOperationsApi.OVERTURE_SERVICE_CONFIRM_PUBLIC_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmPublicVirtualInterface2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.confirm_public_virtual_interface2(
        XAmzTarget8AwsDirectConnectOperationsApi.OVERTURE_SERVICE_CONFIRM_PUBLIC_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmPublicVirtualInterface2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target8_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ConfirmPublicVirtualInterface2ErrorBody](aws_direct_connect/errors/confirm_public_virtual_interface2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def confirm_transit_virtual_interface2(x_amz_target: XAmzTarget9AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts ownership of a transit virtual interface created by another Amazon Web Services account. After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.confirm_transit_virtual_interface2(
        XAmzTarget9AwsDirectConnectOperationsApi.OVERTURE_SERVICE_CONFIRM_TRANSIT_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmTransitVirtualInterface2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.confirm_transit_virtual_interface2(
        XAmzTarget9AwsDirectConnectOperationsApi.OVERTURE_SERVICE_CONFIRM_TRANSIT_VIRTUAL_INTERFACE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ConfirmTransitVirtualInterface2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target9_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ConfirmTransitVirtualInterface2ErrorBody](aws_direct_connect/errors/confirm_transit_virtual_interface2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disassociate_connections_from_resiliency_group(x_amz_target: XAmzTarget11AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disassociates one or more connections from the specified resiliency group. This operation is atomic: either all of the specified connections are disassociated, or the operation fails and no changes are made.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.disassociate_connections_from_resiliency_group(
        XAmzTarget11AwsDirectConnectOperationsApi.OVERTURE_SERVICE_DISASSOCIATE_CONNECTIONS_FROM_RESILIENCY_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisassociateConnectionsFromResiliencyGroupErrorBody
```

**Async**

```python
try:
    await async_client.operations.disassociate_connections_from_resiliency_group(
        XAmzTarget11AwsDirectConnectOperationsApi.OVERTURE_SERVICE_DISASSOCIATE_CONNECTIONS_FROM_RESILIENCY_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisassociateConnectionsFromResiliencyGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget11AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target11_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DisassociateConnectionsFromResiliencyGroupErrorBody](aws_direct_connect/errors/disassociate_connections_from_resiliency_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_resiliency_group_associations(x_amz_target: XAmzTarget12AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the connection associations for the specified resiliency group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.list_resiliency_group_associations(
        XAmzTarget12AwsDirectConnectOperationsApi.OVERTURE_SERVICE_LIST_RESILIENCY_GROUP_ASSOCIATIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListResiliencyGroupAssociationsErrorBody
```

**Async**

```python
try:
    await async_client.operations.list_resiliency_group_associations(
        XAmzTarget12AwsDirectConnectOperationsApi.OVERTURE_SERVICE_LIST_RESILIENCY_GROUP_ASSOCIATIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListResiliencyGroupAssociationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget12AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target12_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ListResiliencyGroupAssociationsErrorBody](aws_direct_connect/errors/list_resiliency_group_associations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_virtual_interface_routes(x_amz_target: XAmzTarget13AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the routes for the specified virtual interface. Use the routeDirection filter to control which routes are returned: accepted: routes received from the customer network over the virtual interface. advertised: routes advertised to the customer network over the virtual interface.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.list_virtual_interface_routes(
        XAmzTarget13AwsDirectConnectOperationsApi.OVERTURE_SERVICE_LIST_VIRTUAL_INTERFACE_ROUTES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVirtualInterfaceRoutesErrorBody
```

**Async**

```python
try:
    await async_client.operations.list_virtual_interface_routes(
        XAmzTarget13AwsDirectConnectOperationsApi.OVERTURE_SERVICE_LIST_VIRTUAL_INTERFACE_ROUTES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVirtualInterfaceRoutesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget13AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target13_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ListVirtualInterfaceRoutesErrorBody](aws_direct_connect/errors/list_virtual_interface_routes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_connections_billing_mode(x_amz_target: XAmzTarget14AwsDirectConnectOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the billing mode for the specified Direct Connect connections. You can update the billing mode for up to 200 connections in a single request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.update_connections_billing_mode(
        XAmzTarget14AwsDirectConnectOperationsApi.OVERTURE_SERVICE_UPDATE_CONNECTIONS_BILLING_MODE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateConnectionsBillingModeErrorBody
```

**Async**

```python
try:
    await async_client.operations.update_connections_billing_mode(
        XAmzTarget14AwsDirectConnectOperationsApi.OVERTURE_SERVICE_UPDATE_CONNECTIONS_BILLING_MODE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateConnectionsBillingModeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget14AwsDirectConnectOperationsApiOrStr](aws_direct_connect/models/enums/x_amz_target14_aws_direct_connect_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[UpdateConnectionsBillingModeErrorBody](aws_direct_connect/errors/update_connections_billing_mode_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ResiliencyGroupApi

> Source: [ResiliencyGroupApi](aws_direct_connect/apis/resiliency_group_api.py)

<details>
<summary><code>def create_resiliency_group(x_amz_target: XAmzTargetAwsDirectConnectResiliencyGroupApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a resiliency group. A resiliency group lets you group Direct Connect connections together and manage them as a single unit to meet a target resiliency model.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.resiliency_group_api.create_resiliency_group(
        XAmzTargetAwsDirectConnectResiliencyGroupApi.OVERTURE_SERVICE_CREATE_RESILIENCY_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateResiliencyGroupErrorBody
```

**Async**

```python
try:
    await async_client.resiliency_group_api.create_resiliency_group(
        XAmzTargetAwsDirectConnectResiliencyGroupApi.OVERTURE_SERVICE_CREATE_RESILIENCY_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateResiliencyGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsDirectConnectResiliencyGroupApiOrStr](aws_direct_connect/models/enums/x_amz_target_aws_direct_connect_resiliency_group_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[CreateResiliencyGroupErrorBody](aws_direct_connect/errors/create_resiliency_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_resiliency_group(x_amz_target: XAmzTarget1AwsDirectConnectResiliencyGroupApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified resiliency group. Deletion is asynchronous: the resiliency group transitions through the deleting state before it reaches the deleted state. The response returns the resiliency group so you can observe its current state without a subsequent GetResiliencyGroup call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.resiliency_group_api.delete_resiliency_group(
        XAmzTarget1AwsDirectConnectResiliencyGroupApi.OVERTURE_SERVICE_DELETE_RESILIENCY_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResiliencyGroupErrorBody
```

**Async**

```python
try:
    await async_client.resiliency_group_api.delete_resiliency_group(
        XAmzTarget1AwsDirectConnectResiliencyGroupApi.OVERTURE_SERVICE_DELETE_RESILIENCY_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResiliencyGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsDirectConnectResiliencyGroupApiOrStr](aws_direct_connect/models/enums/x_amz_target1_aws_direct_connect_resiliency_group_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[DeleteResiliencyGroupErrorBody](aws_direct_connect/errors/delete_resiliency_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_resiliency_group(x_amz_target: XAmzTarget2AwsDirectConnectResiliencyGroupApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about the specified resiliency group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.resiliency_group_api.get_resiliency_group(
        XAmzTarget2AwsDirectConnectResiliencyGroupApi.OVERTURE_SERVICE_GET_RESILIENCY_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetResiliencyGroupErrorBody
```

**Async**

```python
try:
    await async_client.resiliency_group_api.get_resiliency_group(
        XAmzTarget2AwsDirectConnectResiliencyGroupApi.OVERTURE_SERVICE_GET_RESILIENCY_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetResiliencyGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsDirectConnectResiliencyGroupApiOrStr](aws_direct_connect/models/enums/x_amz_target2_aws_direct_connect_resiliency_group_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[GetResiliencyGroupErrorBody](aws_direct_connect/errors/get_resiliency_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_resiliency_groups(x_amz_target: XAmzTarget3AwsDirectConnectResiliencyGroupApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the resiliency groups owned by your Amazon Web Services account in the current Amazon Web Services Region.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.resiliency_group_api.list_resiliency_groups(
        XAmzTarget3AwsDirectConnectResiliencyGroupApi.OVERTURE_SERVICE_LIST_RESILIENCY_GROUPS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListResiliencyGroupsErrorBody
```

**Async**

```python
try:
    await async_client.resiliency_group_api.list_resiliency_groups(
        XAmzTarget3AwsDirectConnectResiliencyGroupApi.OVERTURE_SERVICE_LIST_RESILIENCY_GROUPS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListResiliencyGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsDirectConnectResiliencyGroupApiOrStr](aws_direct_connect/models/enums/x_amz_target3_aws_direct_connect_resiliency_group_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[ListResiliencyGroupsErrorBody](aws_direct_connect/errors/list_resiliency_groups_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_resiliency_group(x_amz_target: XAmzTarget4AwsDirectConnectResiliencyGroupApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name of the specified resiliency group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.resiliency_group_api.update_resiliency_group(
        XAmzTarget4AwsDirectConnectResiliencyGroupApi.OVERTURE_SERVICE_UPDATE_RESILIENCY_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateResiliencyGroupErrorBody
```

**Async**

```python
try:
    await async_client.resiliency_group_api.update_resiliency_group(
        XAmzTarget4AwsDirectConnectResiliencyGroupApi.OVERTURE_SERVICE_UPDATE_RESILIENCY_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateResiliencyGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsDirectConnectResiliencyGroupApiOrStr](aws_direct_connect/models/enums/x_amz_target4_aws_direct_connect_resiliency_group_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_direct_connect/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_direct_connect/core/exceptions.py)&#91;[UpdateResiliencyGroupErrorBody](aws_direct_connect/errors/update_resiliency_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_direct_connect/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_direct_connect/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

