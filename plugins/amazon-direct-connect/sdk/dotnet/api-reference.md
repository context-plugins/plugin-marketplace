# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AwsDirectConnectClient](src/AwsDirectConnect/AwsDirectConnectClient.cs)

## AwsDirectConnectApi

> Source: [AwsDirectConnectApi](src/AwsDirectConnect/Api/AwsDirectConnectApi.cs)

<details>
<summary><code>Task AcceptDirectConnectGatewayAssociationProposal(AcceptDirectConnectGatewayAssociationProposalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.AcceptDirectConnectGatewayAssociationProposal(
        new AcceptDirectConnectGatewayAssociationProposalOperationRequest
        {
            XAmzTarget = XAmzTarget.OvertureServiceAcceptDirectConnectGatewayAssociationProposal,
        });
}
catch (ApiException<AcceptDirectConnectGatewayAssociationProposalError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AcceptDirectConnectGatewayAssociationProposalOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/AcceptDirectConnectGatewayAssociationProposalOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AcceptDirectConnectGatewayAssociationProposalError](src/AwsDirectConnect/Errors/AcceptDirectConnectGatewayAssociationProposalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AllocateConnectionOnInterconnect(AllocateConnectionOnInterconnectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.AllocateConnectionOnInterconnect(
        new AllocateConnectionOnInterconnectOperationRequest
        {
            XAmzTarget = XAmzTarget4.OvertureServiceAllocateConnectionOnInterconnect,
        });
}
catch (ApiException<AllocateConnectionOnInterconnectError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AllocateConnectionOnInterconnectOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/AllocateConnectionOnInterconnectOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AllocateConnectionOnInterconnectError](src/AwsDirectConnect/Errors/AllocateConnectionOnInterconnectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AllocateHostedConnection(AllocateHostedConnectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.AllocateHostedConnection(new AllocateHostedConnectionOperationRequest
    {
        XAmzTarget = XAmzTarget5.OvertureServiceAllocateHostedConnection,
    });
}
catch (ApiException<AllocateHostedConnectionError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AllocateHostedConnectionOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/AllocateHostedConnectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AllocateHostedConnectionError](src/AwsDirectConnect/Errors/AllocateHostedConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AllocatePrivateVirtualInterface(AllocatePrivateVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.AllocatePrivateVirtualInterface(new AllocatePrivateVirtualInterfaceOperationRequest
    {
        XAmzTarget = XAmzTarget6.OvertureServiceAllocatePrivateVirtualInterface,
    });
}
catch (ApiException<AllocatePrivateVirtualInterfaceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AllocatePrivateVirtualInterfaceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/AllocatePrivateVirtualInterfaceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AllocatePrivateVirtualInterfaceError](src/AwsDirectConnect/Errors/AllocatePrivateVirtualInterfaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AllocatePublicVirtualInterface(AllocatePublicVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.AllocatePublicVirtualInterface(new AllocatePublicVirtualInterfaceOperationRequest
    {
        XAmzTarget = XAmzTarget7.OvertureServiceAllocatePublicVirtualInterface,
    });
}
catch (ApiException<AllocatePublicVirtualInterfaceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AllocatePublicVirtualInterfaceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/AllocatePublicVirtualInterfaceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AllocatePublicVirtualInterfaceError](src/AwsDirectConnect/Errors/AllocatePublicVirtualInterfaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AllocateTransitVirtualInterface(AllocateTransitVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.AllocateTransitVirtualInterface(new AllocateTransitVirtualInterfaceOperationRequest
    {
        XAmzTarget = XAmzTarget8.OvertureServiceAllocateTransitVirtualInterface,
    });
}
catch (ApiException<AllocateTransitVirtualInterfaceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AllocateTransitVirtualInterfaceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/AllocateTransitVirtualInterfaceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AllocateTransitVirtualInterfaceError](src/AwsDirectConnect/Errors/AllocateTransitVirtualInterfaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AssociateConnectionWithLag(AssociateConnectionWithLagOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.AssociateConnectionWithLag(new AssociateConnectionWithLagOperationRequest
    {
        XAmzTarget = XAmzTarget14.OvertureServiceAssociateConnectionWithLag,
    });
}
catch (ApiException<AssociateConnectionWithLagError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociateConnectionWithLagOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/AssociateConnectionWithLagOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AssociateConnectionWithLagError](src/AwsDirectConnect/Errors/AssociateConnectionWithLagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AssociateHostedConnection(AssociateHostedConnectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.AssociateHostedConnection(new AssociateHostedConnectionOperationRequest
    {
        XAmzTarget = XAmzTarget21.OvertureServiceAssociateHostedConnection,
    });
}
catch (ApiException<AssociateHostedConnectionError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociateHostedConnectionOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/AssociateHostedConnectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AssociateHostedConnectionError](src/AwsDirectConnect/Errors/AssociateHostedConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AssociateMacSecKey(AssociateMacSecKeyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.AssociateMacSecKey(new AssociateMacSecKeyOperationRequest
    {
        XAmzTarget = XAmzTarget23.OvertureServiceAssociateMacSecKey,
    });
}
catch (ApiException<AssociateMacSecKeyError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociateMacSecKeyOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/AssociateMacSecKeyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AssociateMacSecKeyError](src/AwsDirectConnect/Errors/AssociateMacSecKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AssociateVirtualInterface(AssociateVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.AssociateVirtualInterface(new AssociateVirtualInterfaceOperationRequest
    {
        XAmzTarget = XAmzTarget25.OvertureServiceAssociateVirtualInterface,
    });
}
catch (ApiException<AssociateVirtualInterfaceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociateVirtualInterfaceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/AssociateVirtualInterfaceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AssociateVirtualInterfaceError](src/AwsDirectConnect/Errors/AssociateVirtualInterfaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ConfirmConnection(ConfirmConnectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.ConfirmConnection(new ConfirmConnectionOperationRequest
    {
        XAmzTarget = XAmzTarget9.OvertureServiceConfirmConnection,
    });
}
catch (ApiException<ConfirmConnectionError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConfirmConnectionOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/ConfirmConnectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ConfirmConnectionError](src/AwsDirectConnect/Errors/ConfirmConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ConfirmCustomerAgreement(ConfirmCustomerAgreementOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.ConfirmCustomerAgreement(new ConfirmCustomerAgreementOperationRequest
    {
        XAmzTarget = XAmzTarget10.OvertureServiceConfirmCustomerAgreement,
    });
}
catch (ApiException<ConfirmCustomerAgreementError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConfirmCustomerAgreementOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/ConfirmCustomerAgreementOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ConfirmCustomerAgreementError](src/AwsDirectConnect/Errors/ConfirmCustomerAgreementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ConfirmPrivateVirtualInterface(ConfirmPrivateVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.ConfirmPrivateVirtualInterface(new ConfirmPrivateVirtualInterfaceOperationRequest
    {
        XAmzTarget = XAmzTarget11.OvertureServiceConfirmPrivateVirtualInterface,
    });
}
catch (ApiException<ConfirmPrivateVirtualInterfaceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConfirmPrivateVirtualInterfaceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/ConfirmPrivateVirtualInterfaceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ConfirmPrivateVirtualInterfaceError](src/AwsDirectConnect/Errors/ConfirmPrivateVirtualInterfaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ConfirmPublicVirtualInterface(ConfirmPublicVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.ConfirmPublicVirtualInterface(new ConfirmPublicVirtualInterfaceOperationRequest
    {
        XAmzTarget = XAmzTarget12.OvertureServiceConfirmPublicVirtualInterface,
    });
}
catch (ApiException<ConfirmPublicVirtualInterfaceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConfirmPublicVirtualInterfaceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/ConfirmPublicVirtualInterfaceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ConfirmPublicVirtualInterfaceError](src/AwsDirectConnect/Errors/ConfirmPublicVirtualInterfaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ConfirmTransitVirtualInterface(ConfirmTransitVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.ConfirmTransitVirtualInterface(new ConfirmTransitVirtualInterfaceOperationRequest
    {
        XAmzTarget = XAmzTarget13.OvertureServiceConfirmTransitVirtualInterface,
    });
}
catch (ApiException<ConfirmTransitVirtualInterfaceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConfirmTransitVirtualInterfaceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/ConfirmTransitVirtualInterfaceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ConfirmTransitVirtualInterfaceError](src/AwsDirectConnect/Errors/ConfirmTransitVirtualInterfaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateBgpPeer(CreateBgpPeerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.CreateBgpPeer(new CreateBgpPeerOperationRequest
    {
        XAmzTarget = XAmzTarget28.OvertureServiceCreateBgpPeer,
    });
}
catch (ApiException<CreateBgpPeerError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBgpPeerOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateBgpPeerOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[CreateBgpPeerError](src/AwsDirectConnect/Errors/CreateBgpPeerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateConnection(CreateConnectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.CreateConnection(new CreateConnectionOperationRequest
    {
        XAmzTarget = XAmzTarget15.OvertureServiceCreateConnection,
    });
}
catch (ApiException<CreateConnectionError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateConnectionOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateConnectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[CreateConnectionError](src/AwsDirectConnect/Errors/CreateConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateDirectConnectGateway(CreateDirectConnectGatewayOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.CreateDirectConnectGateway(new CreateDirectConnectGatewayOperationRequest
    {
        XAmzTarget = XAmzTarget30.OvertureServiceCreateDirectConnectGateway,
    });
}
catch (ApiException<CreateDirectConnectGatewayError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDirectConnectGatewayOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateDirectConnectGatewayOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[CreateDirectConnectGatewayError](src/AwsDirectConnect/Errors/CreateDirectConnectGatewayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateDirectConnectGatewayAssociation(CreateDirectConnectGatewayAssociationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.CreateDirectConnectGatewayAssociation(
        new CreateDirectConnectGatewayAssociationOperationRequest
        {
            XAmzTarget = XAmzTarget34.OvertureServiceCreateDirectConnectGatewayAssociation,
        });
}
catch (ApiException<CreateDirectConnectGatewayAssociationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDirectConnectGatewayAssociationOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateDirectConnectGatewayAssociationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[CreateDirectConnectGatewayAssociationError](src/AwsDirectConnect/Errors/CreateDirectConnectGatewayAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateDirectConnectGatewayAssociationProposal(CreateDirectConnectGatewayAssociationProposalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.CreateDirectConnectGatewayAssociationProposal(
        new CreateDirectConnectGatewayAssociationProposalOperationRequest
        {
            XAmzTarget = XAmzTarget1.OvertureServiceCreateDirectConnectGatewayAssociationProposal,
        });
}
catch (ApiException<CreateDirectConnectGatewayAssociationProposalError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDirectConnectGatewayAssociationProposalOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateDirectConnectGatewayAssociationProposalOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[CreateDirectConnectGatewayAssociationProposalError](src/AwsDirectConnect/Errors/CreateDirectConnectGatewayAssociationProposalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateInterconnect(CreateInterconnectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.CreateInterconnect(new CreateInterconnectOperationRequest
    {
        XAmzTarget = XAmzTarget38.OvertureServiceCreateInterconnect,
    });
}
catch (ApiException<CreateInterconnectError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateInterconnectOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateInterconnectOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[CreateInterconnectError](src/AwsDirectConnect/Errors/CreateInterconnectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateLag(CreateLagOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.CreateLag(new CreateLagOperationRequest
    {
        XAmzTarget = XAmzTarget41.OvertureServiceCreateLag,
    });
}
catch (ApiException<CreateLagError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateLagOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateLagOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[CreateLagError](src/AwsDirectConnect/Errors/CreateLagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreatePrivateVirtualInterface(CreatePrivateVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.CreatePrivateVirtualInterface(new CreatePrivateVirtualInterfaceOperationRequest
    {
        XAmzTarget = XAmzTarget45.OvertureServiceCreatePrivateVirtualInterface,
    });
}
catch (ApiException<CreatePrivateVirtualInterfaceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePrivateVirtualInterfaceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreatePrivateVirtualInterfaceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[CreatePrivateVirtualInterfaceError](src/AwsDirectConnect/Errors/CreatePrivateVirtualInterfaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreatePublicVirtualInterface(CreatePublicVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.CreatePublicVirtualInterface(new CreatePublicVirtualInterfaceOperationRequest
    {
        XAmzTarget = XAmzTarget46.OvertureServiceCreatePublicVirtualInterface,
    });
}
catch (ApiException<CreatePublicVirtualInterfaceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePublicVirtualInterfaceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreatePublicVirtualInterfaceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[CreatePublicVirtualInterfaceError](src/AwsDirectConnect/Errors/CreatePublicVirtualInterfaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateTransitVirtualInterface(CreateTransitVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.CreateTransitVirtualInterface(new CreateTransitVirtualInterfaceOperationRequest
    {
        XAmzTarget = XAmzTarget47.OvertureServiceCreateTransitVirtualInterface,
    });
}
catch (ApiException<CreateTransitVirtualInterfaceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTransitVirtualInterfaceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/CreateTransitVirtualInterfaceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[CreateTransitVirtualInterfaceError](src/AwsDirectConnect/Errors/CreateTransitVirtualInterfaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteBgpPeer(DeleteBgpPeerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DeleteBgpPeer(new DeleteBgpPeerOperationRequest
    {
        XAmzTarget = XAmzTarget29.OvertureServiceDeleteBgpPeer,
    });
}
catch (ApiException<DeleteBgpPeerError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBgpPeerOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteBgpPeerOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DeleteBgpPeerError](src/AwsDirectConnect/Errors/DeleteBgpPeerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteConnection(DeleteConnectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DeleteConnection(new DeleteConnectionOperationRequest
    {
        XAmzTarget = XAmzTarget16.OvertureServiceDeleteConnection,
    });
}
catch (ApiException<DeleteConnectionError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteConnectionOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteConnectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DeleteConnectionError](src/AwsDirectConnect/Errors/DeleteConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDirectConnectGateway(DeleteDirectConnectGatewayOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DeleteDirectConnectGateway(new DeleteDirectConnectGatewayOperationRequest
    {
        XAmzTarget = XAmzTarget31.OvertureServiceDeleteDirectConnectGateway,
    });
}
catch (ApiException<DeleteDirectConnectGatewayError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDirectConnectGatewayOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteDirectConnectGatewayOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DeleteDirectConnectGatewayError](src/AwsDirectConnect/Errors/DeleteDirectConnectGatewayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDirectConnectGatewayAssociation(DeleteDirectConnectGatewayAssociationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DeleteDirectConnectGatewayAssociation(
        new DeleteDirectConnectGatewayAssociationOperationRequest
        {
            XAmzTarget = XAmzTarget35.OvertureServiceDeleteDirectConnectGatewayAssociation,
        });
}
catch (ApiException<DeleteDirectConnectGatewayAssociationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDirectConnectGatewayAssociationOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteDirectConnectGatewayAssociationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DeleteDirectConnectGatewayAssociationError](src/AwsDirectConnect/Errors/DeleteDirectConnectGatewayAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDirectConnectGatewayAssociationProposal(DeleteDirectConnectGatewayAssociationProposalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DeleteDirectConnectGatewayAssociationProposal(
        new DeleteDirectConnectGatewayAssociationProposalOperationRequest
        {
            XAmzTarget = XAmzTarget2.OvertureServiceDeleteDirectConnectGatewayAssociationProposal,
        });
}
catch (ApiException<DeleteDirectConnectGatewayAssociationProposalError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDirectConnectGatewayAssociationProposalOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteDirectConnectGatewayAssociationProposalOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DeleteDirectConnectGatewayAssociationProposalError](src/AwsDirectConnect/Errors/DeleteDirectConnectGatewayAssociationProposalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteInterconnect(DeleteInterconnectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DeleteInterconnect(new DeleteInterconnectOperationRequest
    {
        XAmzTarget = XAmzTarget39.OvertureServiceDeleteInterconnect,
    });
}
catch (ApiException<DeleteInterconnectError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteInterconnectOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteInterconnectOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DeleteInterconnectError](src/AwsDirectConnect/Errors/DeleteInterconnectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteLag(DeleteLagOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DeleteLag(new DeleteLagOperationRequest
    {
        XAmzTarget = XAmzTarget42.OvertureServiceDeleteLag,
    });
}
catch (ApiException<DeleteLagError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteLagOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteLagOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DeleteLagError](src/AwsDirectConnect/Errors/DeleteLagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteVirtualInterface(DeleteVirtualInterfaceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DeleteVirtualInterface(new DeleteVirtualInterfaceOperationRequest
    {
        XAmzTarget = XAmzTarget26.OvertureServiceDeleteVirtualInterface,
    });
}
catch (ApiException<DeleteVirtualInterfaceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteVirtualInterfaceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DeleteVirtualInterfaceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DeleteVirtualInterfaceError](src/AwsDirectConnect/Errors/DeleteVirtualInterfaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeConnectionLoa(DescribeConnectionLoaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeConnectionLoa(new DescribeConnectionLoaOperationRequest
    {
        XAmzTarget = XAmzTarget48.OvertureServiceDescribeConnectionLoa,
    });
}
catch (ApiException<DescribeConnectionLoaError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeConnectionLoaOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeConnectionLoaOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeConnectionLoaError](src/AwsDirectConnect/Errors/DescribeConnectionLoaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeConnections(DescribeConnectionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeConnections(new DescribeConnectionsOperationRequest
    {
        XAmzTarget = XAmzTarget17.OvertureServiceDescribeConnections,
    });
}
catch (ApiException<DescribeConnectionsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeConnectionsOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeConnectionsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeConnectionsError](src/AwsDirectConnect/Errors/DescribeConnectionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeConnectionsOnInterconnect(DescribeConnectionsOnInterconnectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeConnectionsOnInterconnect(
        new DescribeConnectionsOnInterconnectOperationRequest
        {
            XAmzTarget = XAmzTarget18.OvertureServiceDescribeConnectionsOnInterconnect,
        });
}
catch (ApiException<DescribeConnectionsOnInterconnectError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeConnectionsOnInterconnectOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeConnectionsOnInterconnectOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeConnectionsOnInterconnectError](src/AwsDirectConnect/Errors/DescribeConnectionsOnInterconnectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeCustomerMetadata(DescribeCustomerMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeCustomerMetadata(new DescribeCustomerMetadataRequest
    {
        XAmzTarget = XAmzTarget49.OvertureServiceDescribeCustomerMetadata,
    });
}
catch (ApiException<DescribeCustomerMetadataError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeCustomerMetadataRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeCustomerMetadataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeCustomerMetadataError](src/AwsDirectConnect/Errors/DescribeCustomerMetadataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeDirectConnectGatewayAssociationProposals(DescribeDirectConnectGatewayAssociationProposalsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeDirectConnectGatewayAssociationProposals(
        new DescribeDirectConnectGatewayAssociationProposalsOperationRequest
        {
            XAmzTarget = XAmzTarget3.OvertureServiceDescribeDirectConnectGatewayAssociationProposals,
        });
}
catch (ApiException<DescribeDirectConnectGatewayAssociationProposalsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeDirectConnectGatewayAssociationProposalsOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeDirectConnectGatewayAssociationProposalsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeDirectConnectGatewayAssociationProposalsError](src/AwsDirectConnect/Errors/DescribeDirectConnectGatewayAssociationProposalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeDirectConnectGatewayAssociations(DescribeDirectConnectGatewayAssociationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeDirectConnectGatewayAssociations(
        new DescribeDirectConnectGatewayAssociationsOperationRequest
        {
            XAmzTarget = XAmzTarget36.OvertureServiceDescribeDirectConnectGatewayAssociations,
        });
}
catch (ApiException<DescribeDirectConnectGatewayAssociationsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeDirectConnectGatewayAssociationsOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeDirectConnectGatewayAssociationsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeDirectConnectGatewayAssociationsError](src/AwsDirectConnect/Errors/DescribeDirectConnectGatewayAssociationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeDirectConnectGatewayAttachments(DescribeDirectConnectGatewayAttachmentsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeDirectConnectGatewayAttachments(
        new DescribeDirectConnectGatewayAttachmentsOperationRequest
        {
            XAmzTarget = XAmzTarget50.OvertureServiceDescribeDirectConnectGatewayAttachments,
        });
}
catch (ApiException<DescribeDirectConnectGatewayAttachmentsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeDirectConnectGatewayAttachmentsOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeDirectConnectGatewayAttachmentsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeDirectConnectGatewayAttachmentsError](src/AwsDirectConnect/Errors/DescribeDirectConnectGatewayAttachmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeDirectConnectGateways(DescribeDirectConnectGatewaysOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeDirectConnectGateways(new DescribeDirectConnectGatewaysOperationRequest
    {
        XAmzTarget = XAmzTarget32.OvertureServiceDescribeDirectConnectGateways,
    });
}
catch (ApiException<DescribeDirectConnectGatewaysError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeDirectConnectGatewaysOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeDirectConnectGatewaysOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeDirectConnectGatewaysError](src/AwsDirectConnect/Errors/DescribeDirectConnectGatewaysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeHostedConnections(DescribeHostedConnectionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeHostedConnections(new DescribeHostedConnectionsOperationRequest
    {
        XAmzTarget = XAmzTarget22.OvertureServiceDescribeHostedConnections,
    });
}
catch (ApiException<DescribeHostedConnectionsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeHostedConnectionsOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeHostedConnectionsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeHostedConnectionsError](src/AwsDirectConnect/Errors/DescribeHostedConnectionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeInterconnectLoa(DescribeInterconnectLoaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeInterconnectLoa(new DescribeInterconnectLoaOperationRequest
    {
        XAmzTarget = XAmzTarget51.OvertureServiceDescribeInterconnectLoa,
    });
}
catch (ApiException<DescribeInterconnectLoaError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeInterconnectLoaOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeInterconnectLoaOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeInterconnectLoaError](src/AwsDirectConnect/Errors/DescribeInterconnectLoaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeInterconnects(DescribeInterconnectsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeInterconnects(new DescribeInterconnectsOperationRequest
    {
        XAmzTarget = XAmzTarget40.OvertureServiceDescribeInterconnects,
    });
}
catch (ApiException<DescribeInterconnectsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeInterconnectsOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeInterconnectsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeInterconnectsError](src/AwsDirectConnect/Errors/DescribeInterconnectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeLags(DescribeLagsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeLags(new DescribeLagsOperationRequest
    {
        XAmzTarget = XAmzTarget43.OvertureServiceDescribeLags,
    });
}
catch (ApiException<DescribeLagsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeLagsOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeLagsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeLagsError](src/AwsDirectConnect/Errors/DescribeLagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeLoa(DescribeLoaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeLoa(new DescribeLoaOperationRequest
    {
        XAmzTarget = XAmzTarget52.OvertureServiceDescribeLoa,
    });
}
catch (ApiException<DescribeLoaError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeLoaOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeLoaOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeLoaError](src/AwsDirectConnect/Errors/DescribeLoaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeLocations(DescribeLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeLocations(new DescribeLocationsRequest
    {
        XAmzTarget = XAmzTarget53.OvertureServiceDescribeLocations,
    });
}
catch (ApiException<DescribeLocationsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeLocationsRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeLocationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeLocationsError](src/AwsDirectConnect/Errors/DescribeLocationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeRouterConfiguration(DescribeRouterConfigurationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeRouterConfiguration(new DescribeRouterConfigurationOperationRequest
    {
        XAmzTarget = XAmzTarget54.OvertureServiceDescribeRouterConfiguration,
    });
}
catch (ApiException<DescribeRouterConfigurationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeRouterConfigurationOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeRouterConfigurationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeRouterConfigurationError](src/AwsDirectConnect/Errors/DescribeRouterConfigurationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeTags(DescribeTagsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeTags(new DescribeTagsOperationRequest
    {
        XAmzTarget = XAmzTarget55.OvertureServiceDescribeTags,
    });
}
catch (ApiException<DescribeTagsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeTagsOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeTagsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeTagsError](src/AwsDirectConnect/Errors/DescribeTagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeVirtualGateways(DescribeVirtualGatewaysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeVirtualGateways(new DescribeVirtualGatewaysRequest
    {
        XAmzTarget = XAmzTarget56.OvertureServiceDescribeVirtualGateways,
    });
}
catch (ApiException<DescribeVirtualGatewaysError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeVirtualGatewaysRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeVirtualGatewaysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeVirtualGatewaysError](src/AwsDirectConnect/Errors/DescribeVirtualGatewaysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeVirtualInterfaces(DescribeVirtualInterfacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DescribeVirtualInterfaces(new DescribeVirtualInterfacesOperationRequest
    {
        XAmzTarget = XAmzTarget27.OvertureServiceDescribeVirtualInterfaces,
    });
}
catch (ApiException<DescribeVirtualInterfacesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeVirtualInterfacesOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DescribeVirtualInterfacesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DescribeVirtualInterfacesError](src/AwsDirectConnect/Errors/DescribeVirtualInterfacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DisassociateConnectionFromLag(DisassociateConnectionFromLagOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DisassociateConnectionFromLag(new DisassociateConnectionFromLagOperationRequest
    {
        XAmzTarget = XAmzTarget19.OvertureServiceDisassociateConnectionFromLag,
    });
}
catch (ApiException<DisassociateConnectionFromLagError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DisassociateConnectionFromLagOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DisassociateConnectionFromLagOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DisassociateConnectionFromLagError](src/AwsDirectConnect/Errors/DisassociateConnectionFromLagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DisassociateMacSecKey(DisassociateMacSecKeyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.DisassociateMacSecKey(new DisassociateMacSecKeyOperationRequest
    {
        XAmzTarget = XAmzTarget24.OvertureServiceDisassociateMacSecKey,
    });
}
catch (ApiException<DisassociateMacSecKeyError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DisassociateMacSecKeyOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/DisassociateMacSecKeyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DisassociateMacSecKeyError](src/AwsDirectConnect/Errors/DisassociateMacSecKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListVirtualInterfaceTestHistory(ListVirtualInterfaceTestHistoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.ListVirtualInterfaceTestHistory(new ListVirtualInterfaceTestHistoryOperationRequest
    {
        XAmzTarget = XAmzTarget57.OvertureServiceListVirtualInterfaceTestHistory,
    });
}
catch (ApiException<ListVirtualInterfaceTestHistoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListVirtualInterfaceTestHistoryOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/ListVirtualInterfaceTestHistoryOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ListVirtualInterfaceTestHistoryError](src/AwsDirectConnect/Errors/ListVirtualInterfaceTestHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartBgpFailoverTest(StartBgpFailoverTestOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.StartBgpFailoverTest(new StartBgpFailoverTestOperationRequest
    {
        XAmzTarget = XAmzTarget58.OvertureServiceStartBgpFailoverTest,
    });
}
catch (ApiException<StartBgpFailoverTestError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartBgpFailoverTestOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/StartBgpFailoverTestOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[StartBgpFailoverTestError](src/AwsDirectConnect/Errors/StartBgpFailoverTestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopBgpFailoverTest(StopBgpFailoverTestOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.StopBgpFailoverTest(new StopBgpFailoverTestOperationRequest
    {
        XAmzTarget = XAmzTarget59.OvertureServiceStopBgpFailoverTest,
    });
}
catch (ApiException<StopBgpFailoverTestError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopBgpFailoverTestOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/StopBgpFailoverTestOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[StopBgpFailoverTestError](src/AwsDirectConnect/Errors/StopBgpFailoverTestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TagResource(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.TagResource(new TagResourceOperationRequest
    {
        XAmzTarget = XAmzTarget60.OvertureServiceTagResource,
    });
}
catch (ApiException<TagResourceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TagResourceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/TagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[TagResourceError](src/AwsDirectConnect/Errors/TagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UntagResource(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.UntagResource(new UntagResourceOperationRequest
    {
        XAmzTarget = XAmzTarget61.OvertureServiceUntagResource,
    });
}
catch (ApiException<UntagResourceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UntagResourceOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/UntagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[UntagResourceError](src/AwsDirectConnect/Errors/UntagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateConnection(UpdateConnectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.UpdateConnection(new UpdateConnectionOperationRequest
    {
        XAmzTarget = XAmzTarget20.OvertureServiceUpdateConnection,
    });
}
catch (ApiException<UpdateConnectionError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateConnectionOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/UpdateConnectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[UpdateConnectionError](src/AwsDirectConnect/Errors/UpdateConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateDirectConnectGateway(UpdateDirectConnectGatewayOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.UpdateDirectConnectGateway(new UpdateDirectConnectGatewayOperationRequest
    {
        XAmzTarget = XAmzTarget33.OvertureServiceUpdateDirectConnectGateway,
    });
}
catch (ApiException<UpdateDirectConnectGatewayError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateDirectConnectGatewayOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/UpdateDirectConnectGatewayOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[UpdateDirectConnectGatewayError](src/AwsDirectConnect/Errors/UpdateDirectConnectGatewayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateDirectConnectGatewayAssociation(UpdateDirectConnectGatewayAssociationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.UpdateDirectConnectGatewayAssociation(
        new UpdateDirectConnectGatewayAssociationOperationRequest
        {
            XAmzTarget = XAmzTarget37.OvertureServiceUpdateDirectConnectGatewayAssociation,
        });
}
catch (ApiException<UpdateDirectConnectGatewayAssociationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateDirectConnectGatewayAssociationOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/UpdateDirectConnectGatewayAssociationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[UpdateDirectConnectGatewayAssociationError](src/AwsDirectConnect/Errors/UpdateDirectConnectGatewayAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateLag(UpdateLagOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.UpdateLag(new UpdateLagOperationRequest
    {
        XAmzTarget = XAmzTarget44.OvertureServiceUpdateLag,
    });
}
catch (ApiException<UpdateLagError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateLagOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/UpdateLagOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[UpdateLagError](src/AwsDirectConnect/Errors/UpdateLagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateVirtualInterfaceAttributes(UpdateVirtualInterfaceAttributesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AwsDirectConnectApi.UpdateVirtualInterfaceAttributes(
        new UpdateVirtualInterfaceAttributesOperationRequest
        {
            XAmzTarget = XAmzTarget62.OvertureServiceUpdateVirtualInterfaceAttributes,
        });
}
catch (ApiException<UpdateVirtualInterfaceAttributesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateVirtualInterfaceAttributesOperationRequest](src/AwsDirectConnect/Requests/AwsDirectConnectApi/UpdateVirtualInterfaceAttributesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[UpdateVirtualInterfaceAttributesError](src/AwsDirectConnect/Errors/UpdateVirtualInterfaceAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/AwsDirectConnect/Api/Operations.cs)

<details>
<summary><code>Task AllocateConnectionOnInterconnect2(AllocateConnectionOnInterconnect2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.AllocateConnectionOnInterconnect2(new AllocateConnectionOnInterconnect2Request
    {
        XAmzTarget = XAmzTargetAwsDirectConnectOperationsApi.OvertureServiceAllocateConnectionOnInterconnect,
    });
}
catch (ApiException<AllocateConnectionOnInterconnect2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AllocateConnectionOnInterconnect2Request](src/AwsDirectConnect/Requests/Operations/AllocateConnectionOnInterconnect2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AllocateConnectionOnInterconnect2Error](src/AwsDirectConnect/Errors/AllocateConnectionOnInterconnect2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AllocateHostedConnection2(AllocateHostedConnection2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.AllocateHostedConnection2(new AllocateHostedConnection2Request
    {
        XAmzTarget = XAmzTarget1AwsDirectConnectOperationsApi.OvertureServiceAllocateHostedConnection,
    });
}
catch (ApiException<AllocateHostedConnection2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AllocateHostedConnection2Request](src/AwsDirectConnect/Requests/Operations/AllocateHostedConnection2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AllocateHostedConnection2Error](src/AwsDirectConnect/Errors/AllocateHostedConnection2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AllocatePrivateVirtualInterface2(AllocatePrivateVirtualInterface2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.AllocatePrivateVirtualInterface2(new AllocatePrivateVirtualInterface2Request
    {
        XAmzTarget = XAmzTarget2AwsDirectConnectOperationsApi.OvertureServiceAllocatePrivateVirtualInterface,
    });
}
catch (ApiException<AllocatePrivateVirtualInterface2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AllocatePrivateVirtualInterface2Request](src/AwsDirectConnect/Requests/Operations/AllocatePrivateVirtualInterface2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AllocatePrivateVirtualInterface2Error](src/AwsDirectConnect/Errors/AllocatePrivateVirtualInterface2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AllocatePublicVirtualInterface2(AllocatePublicVirtualInterface2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.AllocatePublicVirtualInterface2(new AllocatePublicVirtualInterface2Request
    {
        XAmzTarget = XAmzTarget3AwsDirectConnectOperationsApi.OvertureServiceAllocatePublicVirtualInterface,
    });
}
catch (ApiException<AllocatePublicVirtualInterface2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AllocatePublicVirtualInterface2Request](src/AwsDirectConnect/Requests/Operations/AllocatePublicVirtualInterface2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AllocatePublicVirtualInterface2Error](src/AwsDirectConnect/Errors/AllocatePublicVirtualInterface2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AllocateTransitVirtualInterface2(AllocateTransitVirtualInterface2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.AllocateTransitVirtualInterface2(new AllocateTransitVirtualInterface2Request
    {
        XAmzTarget = XAmzTarget4AwsDirectConnectOperationsApi.OvertureServiceAllocateTransitVirtualInterface,
    });
}
catch (ApiException<AllocateTransitVirtualInterface2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AllocateTransitVirtualInterface2Request](src/AwsDirectConnect/Requests/Operations/AllocateTransitVirtualInterface2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AllocateTransitVirtualInterface2Error](src/AwsDirectConnect/Errors/AllocateTransitVirtualInterface2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AssociateConnectionsToResiliencyGroup(AssociateConnectionsToResiliencyGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.AssociateConnectionsToResiliencyGroup(
        new AssociateConnectionsToResiliencyGroupOperationRequest
        {
            XAmzTarget = XAmzTarget10AwsDirectConnectOperationsApi.OvertureServiceAssociateConnectionsToResiliencyGroup,
        });
}
catch (ApiException<AssociateConnectionsToResiliencyGroupError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociateConnectionsToResiliencyGroupOperationRequest](src/AwsDirectConnect/Requests/Operations/AssociateConnectionsToResiliencyGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[AssociateConnectionsToResiliencyGroupError](src/AwsDirectConnect/Errors/AssociateConnectionsToResiliencyGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ConfirmConnection2(ConfirmConnection2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ConfirmConnection2(new ConfirmConnection2Request
    {
        XAmzTarget = XAmzTarget5AwsDirectConnectOperationsApi.OvertureServiceConfirmConnection,
    });
}
catch (ApiException<ConfirmConnection2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConfirmConnection2Request](src/AwsDirectConnect/Requests/Operations/ConfirmConnection2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ConfirmConnection2Error](src/AwsDirectConnect/Errors/ConfirmConnection2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ConfirmCustomerAgreement2(ConfirmCustomerAgreement2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ConfirmCustomerAgreement2(new ConfirmCustomerAgreement2Request
    {
        XAmzTarget = XAmzTarget6AwsDirectConnectOperationsApi.OvertureServiceConfirmCustomerAgreement,
    });
}
catch (ApiException<ConfirmCustomerAgreement2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConfirmCustomerAgreement2Request](src/AwsDirectConnect/Requests/Operations/ConfirmCustomerAgreement2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ConfirmCustomerAgreement2Error](src/AwsDirectConnect/Errors/ConfirmCustomerAgreement2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ConfirmPrivateVirtualInterface2(ConfirmPrivateVirtualInterface2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ConfirmPrivateVirtualInterface2(new ConfirmPrivateVirtualInterface2Request
    {
        XAmzTarget = XAmzTarget7AwsDirectConnectOperationsApi.OvertureServiceConfirmPrivateVirtualInterface,
    });
}
catch (ApiException<ConfirmPrivateVirtualInterface2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConfirmPrivateVirtualInterface2Request](src/AwsDirectConnect/Requests/Operations/ConfirmPrivateVirtualInterface2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ConfirmPrivateVirtualInterface2Error](src/AwsDirectConnect/Errors/ConfirmPrivateVirtualInterface2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ConfirmPublicVirtualInterface2(ConfirmPublicVirtualInterface2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ConfirmPublicVirtualInterface2(new ConfirmPublicVirtualInterface2Request
    {
        XAmzTarget = XAmzTarget8AwsDirectConnectOperationsApi.OvertureServiceConfirmPublicVirtualInterface,
    });
}
catch (ApiException<ConfirmPublicVirtualInterface2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConfirmPublicVirtualInterface2Request](src/AwsDirectConnect/Requests/Operations/ConfirmPublicVirtualInterface2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ConfirmPublicVirtualInterface2Error](src/AwsDirectConnect/Errors/ConfirmPublicVirtualInterface2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ConfirmTransitVirtualInterface2(ConfirmTransitVirtualInterface2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ConfirmTransitVirtualInterface2(new ConfirmTransitVirtualInterface2Request
    {
        XAmzTarget = XAmzTarget9AwsDirectConnectOperationsApi.OvertureServiceConfirmTransitVirtualInterface,
    });
}
catch (ApiException<ConfirmTransitVirtualInterface2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConfirmTransitVirtualInterface2Request](src/AwsDirectConnect/Requests/Operations/ConfirmTransitVirtualInterface2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ConfirmTransitVirtualInterface2Error](src/AwsDirectConnect/Errors/ConfirmTransitVirtualInterface2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DisassociateConnectionsFromResiliencyGroup(DisassociateConnectionsFromResiliencyGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DisassociateConnectionsFromResiliencyGroup(
        new DisassociateConnectionsFromResiliencyGroupOperationRequest
        {
            XAmzTarget = XAmzTarget11AwsDirectConnectOperationsApi.OvertureServiceDisassociateConnectionsFromResiliencyGroup,
        });
}
catch (ApiException<DisassociateConnectionsFromResiliencyGroupError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DisassociateConnectionsFromResiliencyGroupOperationRequest](src/AwsDirectConnect/Requests/Operations/DisassociateConnectionsFromResiliencyGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DisassociateConnectionsFromResiliencyGroupError](src/AwsDirectConnect/Errors/DisassociateConnectionsFromResiliencyGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListResiliencyGroupAssociations(ListResiliencyGroupAssociationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ListResiliencyGroupAssociations(new ListResiliencyGroupAssociationsOperationRequest
    {
        XAmzTarget = XAmzTarget12AwsDirectConnectOperationsApi.OvertureServiceListResiliencyGroupAssociations,
    });
}
catch (ApiException<ListResiliencyGroupAssociationsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListResiliencyGroupAssociationsOperationRequest](src/AwsDirectConnect/Requests/Operations/ListResiliencyGroupAssociationsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ListResiliencyGroupAssociationsError](src/AwsDirectConnect/Errors/ListResiliencyGroupAssociationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListVirtualInterfaceRoutes(ListVirtualInterfaceRoutesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ListVirtualInterfaceRoutes(new ListVirtualInterfaceRoutesOperationRequest
    {
        XAmzTarget = XAmzTarget13AwsDirectConnectOperationsApi.OvertureServiceListVirtualInterfaceRoutes,
    });
}
catch (ApiException<ListVirtualInterfaceRoutesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListVirtualInterfaceRoutesOperationRequest](src/AwsDirectConnect/Requests/Operations/ListVirtualInterfaceRoutesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ListVirtualInterfaceRoutesError](src/AwsDirectConnect/Errors/ListVirtualInterfaceRoutesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateConnectionsBillingMode(UpdateConnectionsBillingModeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.UpdateConnectionsBillingMode(new UpdateConnectionsBillingModeOperationRequest
    {
        XAmzTarget = XAmzTarget14AwsDirectConnectOperationsApi.OvertureServiceUpdateConnectionsBillingMode,
    });
}
catch (ApiException<UpdateConnectionsBillingModeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateConnectionsBillingModeOperationRequest](src/AwsDirectConnect/Requests/Operations/UpdateConnectionsBillingModeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[UpdateConnectionsBillingModeError](src/AwsDirectConnect/Errors/UpdateConnectionsBillingModeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ResiliencyGroupApi

> Source: [ResiliencyGroupApi](src/AwsDirectConnect/Api/ResiliencyGroupApi.cs)

<details>
<summary><code>Task CreateResiliencyGroup(CreateResiliencyGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ResiliencyGroupApi.CreateResiliencyGroup(new CreateResiliencyGroupOperationRequest
    {
        XAmzTarget = XAmzTargetAwsDirectConnectResiliencyGroupApi.OvertureServiceCreateResiliencyGroup,
    });
}
catch (ApiException<CreateResiliencyGroupError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateResiliencyGroupOperationRequest](src/AwsDirectConnect/Requests/ResiliencyGroupApi/CreateResiliencyGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[CreateResiliencyGroupError](src/AwsDirectConnect/Errors/CreateResiliencyGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteResiliencyGroup(DeleteResiliencyGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ResiliencyGroupApi.DeleteResiliencyGroup(new DeleteResiliencyGroupOperationRequest
    {
        XAmzTarget = XAmzTarget1AwsDirectConnectResiliencyGroupApi.OvertureServiceDeleteResiliencyGroup,
    });
}
catch (ApiException<DeleteResiliencyGroupError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteResiliencyGroupOperationRequest](src/AwsDirectConnect/Requests/ResiliencyGroupApi/DeleteResiliencyGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[DeleteResiliencyGroupError](src/AwsDirectConnect/Errors/DeleteResiliencyGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetResiliencyGroup(GetResiliencyGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ResiliencyGroupApi.GetResiliencyGroup(new GetResiliencyGroupOperationRequest
    {
        XAmzTarget = XAmzTarget2AwsDirectConnectResiliencyGroupApi.OvertureServiceGetResiliencyGroup,
    });
}
catch (ApiException<GetResiliencyGroupError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetResiliencyGroupOperationRequest](src/AwsDirectConnect/Requests/ResiliencyGroupApi/GetResiliencyGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[GetResiliencyGroupError](src/AwsDirectConnect/Errors/GetResiliencyGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListResiliencyGroups(ListResiliencyGroupsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ResiliencyGroupApi.ListResiliencyGroups(new ListResiliencyGroupsOperationRequest
    {
        XAmzTarget = XAmzTarget3AwsDirectConnectResiliencyGroupApi.OvertureServiceListResiliencyGroups,
    });
}
catch (ApiException<ListResiliencyGroupsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListResiliencyGroupsOperationRequest](src/AwsDirectConnect/Requests/ResiliencyGroupApi/ListResiliencyGroupsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[ListResiliencyGroupsError](src/AwsDirectConnect/Errors/ListResiliencyGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateResiliencyGroup(UpdateResiliencyGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ResiliencyGroupApi.UpdateResiliencyGroup(new UpdateResiliencyGroupOperationRequest
    {
        XAmzTarget = XAmzTarget4AwsDirectConnectResiliencyGroupApi.OvertureServiceUpdateResiliencyGroup,
    });
}
catch (ApiException<UpdateResiliencyGroupError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateResiliencyGroupOperationRequest](src/AwsDirectConnect/Requests/ResiliencyGroupApi/UpdateResiliencyGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsDirectConnect/Core/Exceptions/ApiException.cs)&lt;[UpdateResiliencyGroupError](src/AwsDirectConnect/Errors/UpdateResiliencyGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

