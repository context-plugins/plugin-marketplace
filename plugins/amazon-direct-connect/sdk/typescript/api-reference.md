# Reference

> Source: [AwsDirectConnectClient](src/client.ts)

## AwsDirectConnect

> Source: [AwsDirectConnect](src/resources/aws-direct-connect.ts)

<details>
<summary><code>acceptDirectConnectGatewayAssociationProposal(request: AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.acceptDirectConnectGatewayAssociationProposal({
    xAmzTarget: XAmzTarget.OvertureServiceAcceptDirectConnectGatewayAssociationProposal,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .acceptDirectConnectGatewayAssociationProposal({
    xAmzTarget: XAmzTarget.OvertureServiceAcceptDirectConnectGatewayAssociationProposal,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget](src/models/xamz-target.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.acceptDirectConnectGatewayAssociationProposal(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.acceptDirectConnectGatewayAssociationProposal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allocateConnectionOnInterconnect(request: AwsDirectConnect.AllocateConnectionOnInterconnectRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.AllocateConnectionOnInterconnectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.allocateConnectionOnInterconnect({
    xAmzTarget: XAmzTarget4.OvertureServiceAllocateConnectionOnInterconnect,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.AllocateConnectionOnInterconnectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .allocateConnectionOnInterconnect({
    xAmzTarget: XAmzTarget4.OvertureServiceAllocateConnectionOnInterconnect,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget4](src/models/xamz-target4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.allocateConnectionOnInterconnect(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.AllocateConnectionOnInterconnectError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.allocateConnectionOnInterconnect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.AllocateConnectionOnInterconnectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allocateHostedConnection(request: AwsDirectConnect.AllocateHostedConnectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.AllocateHostedConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects. Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.allocateHostedConnection({
    xAmzTarget: XAmzTarget5.OvertureServiceAllocateHostedConnection,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.AllocateHostedConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .allocateHostedConnection({ xAmzTarget: XAmzTarget5.OvertureServiceAllocateHostedConnection })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget5](src/models/xamz-target5.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.allocateHostedConnection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.AllocateHostedConnectionError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.allocateHostedConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.AllocateHostedConnectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allocatePrivateVirtualInterface(request: AwsDirectConnect.AllocatePrivateVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.AllocatePrivateVirtualInterfaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a private virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until then, the virtual interface is in the Confirming state and is not available to handle traffic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.allocatePrivateVirtualInterface({
    xAmzTarget: XAmzTarget6.OvertureServiceAllocatePrivateVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.AllocatePrivateVirtualInterfaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .allocatePrivateVirtualInterface({ xAmzTarget: XAmzTarget6.OvertureServiceAllocatePrivateVirtualInterface })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget6](src/models/xamz-target6.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.allocatePrivateVirtualInterface(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.AllocatePrivateVirtualInterfaceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.allocatePrivateVirtualInterface(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.AllocatePrivateVirtualInterfaceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allocatePublicVirtualInterface(request: AwsDirectConnect.AllocatePublicVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.AllocatePublicVirtualInterfaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a public virtual interface to be owned by the specified Amazon Web Services account. The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this function must be confirmed by the owner using ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.allocatePublicVirtualInterface({
    xAmzTarget: XAmzTarget7.OvertureServiceAllocatePublicVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.AllocatePublicVirtualInterfaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .allocatePublicVirtualInterface({ xAmzTarget: XAmzTarget7.OvertureServiceAllocatePublicVirtualInterface })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget7](src/models/xamz-target7.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.allocatePublicVirtualInterface(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.AllocatePublicVirtualInterfaceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.allocatePublicVirtualInterface(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.AllocatePublicVirtualInterfaceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allocateTransitVirtualInterface(request: AwsDirectConnect.AllocateTransitVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.AllocateTransitVirtualInterfaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway. The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account. After you create a transit virtual interface, it must be confirmed by the owner using ConfirmTransitVirtualInterface. Until this step has been completed, the transit virtual interface is in the requested state and is not available to handle traffic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.allocateTransitVirtualInterface({
    xAmzTarget: XAmzTarget8.OvertureServiceAllocateTransitVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.AllocateTransitVirtualInterfaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .allocateTransitVirtualInterface({ xAmzTarget: XAmzTarget8.OvertureServiceAllocateTransitVirtualInterface })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget8](src/models/xamz-target8.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.allocateTransitVirtualInterface(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.AllocateTransitVirtualInterfaceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.allocateTransitVirtualInterface(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.AllocateTransitVirtualInterfaceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associateConnectionWithLag(request: AwsDirectConnect.AssociateConnectionWithLagRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.AssociateConnectionWithLagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails. Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG. For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.associateConnectionWithLag({
    xAmzTarget: XAmzTarget14.OvertureServiceAssociateConnectionWithLag,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.AssociateConnectionWithLagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .associateConnectionWithLag({ xAmzTarget: XAmzTarget14.OvertureServiceAssociateConnectionWithLag })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget14](src/models/xamz-target14.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.associateConnectionWithLag(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.AssociateConnectionWithLagError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.associateConnectionWithLag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.AssociateConnectionWithLagError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associateHostedConnection(request: AwsDirectConnect.AssociateHostedConnectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.AssociateHostedConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to Amazon Web Services as it is being migrated. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.associateHostedConnection({
    xAmzTarget: XAmzTarget21.OvertureServiceAssociateHostedConnection,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.AssociateHostedConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .associateHostedConnection({ xAmzTarget: XAmzTarget21.OvertureServiceAssociateHostedConnection })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget21](src/models/xamz-target21.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.associateHostedConnection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.AssociateHostedConnectionError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.associateHostedConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.AssociateHostedConnectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associateMacSecKey(request: AwsDirectConnect.AssociateMacSecKeyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.AssociateMacSecKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with a Direct Connect connection. You must supply either the secretARN, or the CKN/CAK (ckn and cak) pair in the request. For information about MAC Security (MACsec) key considerations, see MACsec pre-shared CKN/CAK key considerations in the Direct Connect User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.associateMacSecKey({
    xAmzTarget: XAmzTarget23.OvertureServiceAssociateMacSecKey,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.AssociateMacSecKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .associateMacSecKey({ xAmzTarget: XAmzTarget23.OvertureServiceAssociateMacSecKey })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget23](src/models/xamz-target23.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.associateMacSecKey(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.AssociateMacSecKeyError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.associateMacSecKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.AssociateMacSecKeyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associateVirtualInterface(request: AwsDirectConnect.AssociateVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.AssociateVirtualInterfaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails. Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using AssociateHostedConnection. To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.associateVirtualInterface({
    xAmzTarget: XAmzTarget25.OvertureServiceAssociateVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.AssociateVirtualInterfaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .associateVirtualInterface({ xAmzTarget: XAmzTarget25.OvertureServiceAssociateVirtualInterface })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget25](src/models/xamz-target25.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.associateVirtualInterface(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.AssociateVirtualInterfaceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.associateVirtualInterface(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.AssociateVirtualInterfaceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmConnection(request: AwsDirectConnect.ConfirmConnectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.ConfirmConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted connection is initially in the Ordering state, and remains in this state until the owner confirms creation of the hosted connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.confirmConnection({
    xAmzTarget: XAmzTarget9.OvertureServiceConfirmConnection,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.ConfirmConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .confirmConnection({ xAmzTarget: XAmzTarget9.OvertureServiceConfirmConnection })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget9](src/models/xamz-target9.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.confirmConnection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.ConfirmConnectionError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.confirmConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.ConfirmConnectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmCustomerAgreement(request: AwsDirectConnect.ConfirmCustomerAgreementRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.ConfirmCustomerAgreementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.confirmCustomerAgreement({
    xAmzTarget: XAmzTarget10.OvertureServiceConfirmCustomerAgreement,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.ConfirmCustomerAgreementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .confirmCustomerAgreement({ xAmzTarget: XAmzTarget10.OvertureServiceConfirmCustomerAgreement })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget10](src/models/xamz-target10.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.confirmCustomerAgreement(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.ConfirmCustomerAgreementError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.confirmCustomerAgreement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.ConfirmCustomerAgreementError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmPrivateVirtualInterface(request: AwsDirectConnect.ConfirmPrivateVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.ConfirmPrivateVirtualInterfaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts ownership of a private virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.confirmPrivateVirtualInterface({
    xAmzTarget: XAmzTarget11.OvertureServiceConfirmPrivateVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.ConfirmPrivateVirtualInterfaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .confirmPrivateVirtualInterface({ xAmzTarget: XAmzTarget11.OvertureServiceConfirmPrivateVirtualInterface })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget11](src/models/xamz-target11.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.confirmPrivateVirtualInterface(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.ConfirmPrivateVirtualInterfaceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.confirmPrivateVirtualInterface(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.ConfirmPrivateVirtualInterfaceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmPublicVirtualInterface(request: AwsDirectConnect.ConfirmPublicVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.ConfirmPublicVirtualInterfaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts ownership of a public virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.confirmPublicVirtualInterface({
    xAmzTarget: XAmzTarget12.OvertureServiceConfirmPublicVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.ConfirmPublicVirtualInterfaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .confirmPublicVirtualInterface({ xAmzTarget: XAmzTarget12.OvertureServiceConfirmPublicVirtualInterface })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget12](src/models/xamz-target12.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.confirmPublicVirtualInterface(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.ConfirmPublicVirtualInterfaceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.confirmPublicVirtualInterface(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.ConfirmPublicVirtualInterfaceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmTransitVirtualInterface(request: AwsDirectConnect.ConfirmTransitVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.ConfirmTransitVirtualInterfaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts ownership of a transit virtual interface created by another Amazon Web Services account. After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.confirmTransitVirtualInterface({
    xAmzTarget: XAmzTarget13.OvertureServiceConfirmTransitVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.ConfirmTransitVirtualInterfaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .confirmTransitVirtualInterface({ xAmzTarget: XAmzTarget13.OvertureServiceConfirmTransitVirtualInterface })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget13](src/models/xamz-target13.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.confirmTransitVirtualInterface(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.ConfirmTransitVirtualInterfaceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.confirmTransitVirtualInterface(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.ConfirmTransitVirtualInterfaceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBgpPeer(request: AwsDirectConnect.CreateBgpPeerRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.CreateBgpPeerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a BGP peer on the specified virtual interface. You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family. If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface. When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses. If you let Amazon Web Services auto-assign IPv4 addresses, a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you intend to use the customer router peer IP address as the source and destination for traffic. Instead you should use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see Address Allocation for Private Internets. For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.createBgpPeer({ xAmzTarget: XAmzTarget28.OvertureServiceCreateBgpPeer });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.CreateBgpPeerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .createBgpPeer({ xAmzTarget: XAmzTarget28.OvertureServiceCreateBgpPeer })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget28](src/models/xamz-target28.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.createBgpPeer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.CreateBgpPeerError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.createBgpPeer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.CreateBgpPeerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createConnection(request: AwsDirectConnect.CreateConnectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.CreateConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a connection between a customer network and a specific Direct Connect location. A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router. To find the locations for your Region, use DescribeLocations. You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.createConnection({
    xAmzTarget: XAmzTarget15.OvertureServiceCreateConnection,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.CreateConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .createConnection({ xAmzTarget: XAmzTarget15.OvertureServiceCreateConnection })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget15](src/models/xamz-target15.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.createConnection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.CreateConnectionError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.createConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.CreateConnectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDirectConnectGateway(request: AwsDirectConnect.CreateDirectConnectGatewayRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.CreateDirectConnectGatewayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.createDirectConnectGateway({
    xAmzTarget: XAmzTarget30.OvertureServiceCreateDirectConnectGateway,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.CreateDirectConnectGatewayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .createDirectConnectGateway({ xAmzTarget: XAmzTarget30.OvertureServiceCreateDirectConnectGateway })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget30](src/models/xamz-target30.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.createDirectConnectGateway(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.CreateDirectConnectGatewayError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.createDirectConnectGateway(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.CreateDirectConnectGatewayError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDirectConnectGatewayAssociation(request: AwsDirectConnect.CreateDirectConnectGatewayAssociationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.CreateDirectConnectGatewayAssociationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.createDirectConnectGatewayAssociation({
    xAmzTarget: XAmzTarget34.OvertureServiceCreateDirectConnectGatewayAssociation,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.CreateDirectConnectGatewayAssociationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .createDirectConnectGatewayAssociation({
    xAmzTarget: XAmzTarget34.OvertureServiceCreateDirectConnectGatewayAssociation,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget34](src/models/xamz-target34.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.createDirectConnectGatewayAssociation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.CreateDirectConnectGatewayAssociationError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.createDirectConnectGatewayAssociation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.CreateDirectConnectGatewayAssociationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDirectConnectGatewayAssociationProposal(request: AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway. You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.createDirectConnectGatewayAssociationProposal({
    xAmzTarget: XAmzTarget1.OvertureServiceCreateDirectConnectGatewayAssociationProposal,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .createDirectConnectGatewayAssociationProposal({
    xAmzTarget: XAmzTarget1.OvertureServiceCreateDirectConnectGatewayAssociationProposal,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget1](src/models/xamz-target1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.createDirectConnectGatewayAssociationProposal(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.createDirectConnectGatewayAssociationProposal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createInterconnect(request: AwsDirectConnect.CreateInterconnectRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.CreateInterconnectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location. An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect router. You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created. For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling AllocateHostedConnection. The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Co

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.createInterconnect({
    xAmzTarget: XAmzTarget38.OvertureServiceCreateInterconnect,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.CreateInterconnectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .createInterconnect({ xAmzTarget: XAmzTarget38.OvertureServiceCreateInterconnect })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget38](src/models/xamz-target38.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.createInterconnect(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.CreateInterconnectError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.createInterconnect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.CreateInterconnectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLag(request: AwsDirectConnect.CreateLagRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.CreateLagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface. All connections in a LAG must use the same bandwidth (either 1Gbps, 10Gbps, 100Gbps, or 400Gbps) and must terminate at the same Direct Connect endpoint. You can have up to 10 dedicated connections per location. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is created.. You can specify an existing physical dedicated connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.createLag({ xAmzTarget: XAmzTarget41.OvertureServiceCreateLag });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.CreateLagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .createLag({ xAmzTarget: XAmzTarget41.OvertureServiceCreateLag })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget41](src/models/xamz-target41.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.createLag(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.CreateLagError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.createLag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.CreateLagError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPrivateVirtualInterface(request: AwsDirectConnect.CreatePrivateVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.CreatePrivateVirtualInterfaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.createPrivateVirtualInterface({
    xAmzTarget: XAmzTarget45.OvertureServiceCreatePrivateVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.CreatePrivateVirtualInterfaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .createPrivateVirtualInterface({ xAmzTarget: XAmzTarget45.OvertureServiceCreatePrivateVirtualInterface })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget45](src/models/xamz-target45.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.createPrivateVirtualInterface(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.CreatePrivateVirtualInterfaceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.createPrivateVirtualInterface(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.CreatePrivateVirtualInterfaceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPublicVirtualInterface(request: AwsDirectConnect.CreatePublicVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.CreatePublicVirtualInterfaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3. When creating an IPv6 public virtual interface (addressFamily is ipv6), leave the customer and amazon address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.createPublicVirtualInterface({
    xAmzTarget: XAmzTarget46.OvertureServiceCreatePublicVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.CreatePublicVirtualInterfaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .createPublicVirtualInterface({ xAmzTarget: XAmzTarget46.OvertureServiceCreatePublicVirtualInterface })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget46](src/models/xamz-target46.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.createPublicVirtualInterface(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.CreatePublicVirtualInterfaceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.createPublicVirtualInterface(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.CreatePublicVirtualInterfaceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTransitVirtualInterface(request: AwsDirectConnect.CreateTransitVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.CreateTransitVirtualInterfaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway. If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails. A jumbo MTU value must be either 1500 or 8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.createTransitVirtualInterface({
    xAmzTarget: XAmzTarget47.OvertureServiceCreateTransitVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.CreateTransitVirtualInterfaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .createTransitVirtualInterface({ xAmzTarget: XAmzTarget47.OvertureServiceCreateTransitVirtualInterface })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget47](src/models/xamz-target47.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.createTransitVirtualInterface(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.CreateTransitVirtualInterfaceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.createTransitVirtualInterface(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.CreateTransitVirtualInterfaceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBgpPeer(request: AwsDirectConnect.DeleteBgpPeerRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DeleteBgpPeerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN. You cannot delete the last BGP peer from a virtual interface.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.deleteBgpPeer({ xAmzTarget: XAmzTarget29.OvertureServiceDeleteBgpPeer });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DeleteBgpPeerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .deleteBgpPeer({ xAmzTarget: XAmzTarget29.OvertureServiceDeleteBgpPeer })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget29](src/models/xamz-target29.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.deleteBgpPeer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DeleteBgpPeerError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.deleteBgpPeer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DeleteBgpPeerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteConnection(request: AwsDirectConnect.DeleteConnectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DeleteConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified connection. Deleting a connection only stops the Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you must cancel your service with them separately.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.deleteConnection({
    xAmzTarget: XAmzTarget16.OvertureServiceDeleteConnection,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DeleteConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .deleteConnection({ xAmzTarget: XAmzTarget16.OvertureServiceDeleteConnection })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget16](src/models/xamz-target16.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.deleteConnection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DeleteConnectionError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.deleteConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DeleteConnectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDirectConnectGateway(request: AwsDirectConnect.DeleteDirectConnectGatewayRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DeleteDirectConnectGatewayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.deleteDirectConnectGateway({
    xAmzTarget: XAmzTarget31.OvertureServiceDeleteDirectConnectGateway,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DeleteDirectConnectGatewayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .deleteDirectConnectGateway({ xAmzTarget: XAmzTarget31.OvertureServiceDeleteDirectConnectGateway })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget31](src/models/xamz-target31.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.deleteDirectConnectGateway(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DeleteDirectConnectGatewayError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.deleteDirectConnectGateway(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DeleteDirectConnectGatewayError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDirectConnectGatewayAssociation(request: AwsDirectConnect.DeleteDirectConnectGatewayAssociationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DeleteDirectConnectGatewayAssociationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the association between the specified Direct Connect gateway and virtual private gateway. We recommend that you specify the associationID to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the virtualGatewayId and directConnectGatewayId to delete an association.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.deleteDirectConnectGatewayAssociation({
    xAmzTarget: XAmzTarget35.OvertureServiceDeleteDirectConnectGatewayAssociation,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DeleteDirectConnectGatewayAssociationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .deleteDirectConnectGatewayAssociation({
    xAmzTarget: XAmzTarget35.OvertureServiceDeleteDirectConnectGatewayAssociation,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget35](src/models/xamz-target35.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.deleteDirectConnectGatewayAssociation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DeleteDirectConnectGatewayAssociationError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.deleteDirectConnectGatewayAssociation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DeleteDirectConnectGatewayAssociationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDirectConnectGatewayAssociationProposal(request: AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.deleteDirectConnectGatewayAssociationProposal({
    xAmzTarget: XAmzTarget2.OvertureServiceDeleteDirectConnectGatewayAssociationProposal,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .deleteDirectConnectGatewayAssociationProposal({
    xAmzTarget: XAmzTarget2.OvertureServiceDeleteDirectConnectGatewayAssociationProposal,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget2](src/models/xamz-target2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.deleteDirectConnectGatewayAssociationProposal(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.deleteDirectConnectGatewayAssociationProposal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInterconnect(request: AwsDirectConnect.DeleteInterconnectRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DeleteInterconnectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified interconnect. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.deleteInterconnect({
    xAmzTarget: XAmzTarget39.OvertureServiceDeleteInterconnect,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DeleteInterconnectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .deleteInterconnect({ xAmzTarget: XAmzTarget39.OvertureServiceDeleteInterconnect })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget39](src/models/xamz-target39.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.deleteInterconnect(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DeleteInterconnectError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.deleteInterconnect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DeleteInterconnectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLag(request: AwsDirectConnect.DeleteLagRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DeleteLagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.deleteLag({ xAmzTarget: XAmzTarget42.OvertureServiceDeleteLag });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DeleteLagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .deleteLag({ xAmzTarget: XAmzTarget42.OvertureServiceDeleteLag })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget42](src/models/xamz-target42.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.deleteLag(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DeleteLagError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.deleteLag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DeleteLagError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVirtualInterface(request: AwsDirectConnect.DeleteVirtualInterfaceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DeleteVirtualInterfaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a virtual interface.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.deleteVirtualInterface({
    xAmzTarget: XAmzTarget26.OvertureServiceDeleteVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DeleteVirtualInterfaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .deleteVirtualInterface({ xAmzTarget: XAmzTarget26.OvertureServiceDeleteVirtualInterface })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget26](src/models/xamz-target26.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.deleteVirtualInterface(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DeleteVirtualInterfaceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.deleteVirtualInterface(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DeleteVirtualInterfaceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeConnectionLoa(request: AwsDirectConnect.DescribeConnectionLoaRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeConnectionLoaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for a connection. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects at Direct Connect Locations in the Direct Connect User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeConnectionLoa({
    xAmzTarget: XAmzTarget48.OvertureServiceDescribeConnectionLoa,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeConnectionLoaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeConnectionLoa({ xAmzTarget: XAmzTarget48.OvertureServiceDescribeConnectionLoa })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget48](src/models/xamz-target48.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeConnectionLoa(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeConnectionLoaError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeConnectionLoa(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeConnectionLoaError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeConnections(request: AwsDirectConnect.DescribeConnectionsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeConnectionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Displays the specified connection or all connections in this Region.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeConnections({
    xAmzTarget: XAmzTarget17.OvertureServiceDescribeConnections,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeConnectionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeConnections({ xAmzTarget: XAmzTarget17.OvertureServiceDescribeConnections })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget17](src/models/xamz-target17.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeConnections(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeConnectionsError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeConnections(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeConnectionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeConnectionsOnInterconnect(request: AwsDirectConnect.DescribeConnectionsOnInterconnectRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeConnectionsOnInterconnectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated. Use DescribeHostedConnections instead. Lists the connections that have been provisioned on the specified interconnect. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeConnectionsOnInterconnect({
    xAmzTarget: XAmzTarget18.OvertureServiceDescribeConnectionsOnInterconnect,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeConnectionsOnInterconnectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeConnectionsOnInterconnect({
    xAmzTarget: XAmzTarget18.OvertureServiceDescribeConnectionsOnInterconnect,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget18](src/models/xamz-target18.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeConnectionsOnInterconnect(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeConnectionsOnInterconnectError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeConnectionsOnInterconnect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeConnectionsOnInterconnectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeCustomerMetadata(request: AwsDirectConnect.DescribeCustomerMetadataRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeCustomerMetadataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get and view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeCustomerMetadata({
    xAmzTarget: XAmzTarget49.OvertureServiceDescribeCustomerMetadata,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeCustomerMetadataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeCustomerMetadata({ xAmzTarget: XAmzTarget49.OvertureServiceDescribeCustomerMetadata })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget49](src/models/xamz-target49.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeCustomerMetadata(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeCustomerMetadataError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeCustomerMetadata(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeCustomerMetadataError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDirectConnectGatewayAssociationProposals(request: AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeDirectConnectGatewayAssociationProposals({
    xAmzTarget: XAmzTarget3.OvertureServiceDescribeDirectConnectGatewayAssociationProposals,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeDirectConnectGatewayAssociationProposals({
    xAmzTarget: XAmzTarget3.OvertureServiceDescribeDirectConnectGatewayAssociationProposals,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget3](src/models/xamz-target3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeDirectConnectGatewayAssociationProposals(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeDirectConnectGatewayAssociationProposals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDirectConnectGatewayAssociations(request: AwsDirectConnect.DescribeDirectConnectGatewayAssociationsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeDirectConnectGatewayAssociationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following: A Direct Connect gateway The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway. A virtual private gateway The response contains the Direct Connect gateway. A transit gateway The response contains the Direct Connect gateway. A Direct Connect gateway and a virtual private gateway The response contains the association between the Direct Connect gateway and virtual private gateway. A Direct Connect gateway and a transit gateway The response contains the association between the Direct Connect gateway and transit gateway. A Direct Connect gateway and a virtual private gateway The response contains the association between the Direct Connect gateway and virtual private gateway. A Direct Connect gateway association to a Cloud WAN core network The response contains the Cloud WAN core network ID that the Direct Connect gateway is associated to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeDirectConnectGatewayAssociations({
    xAmzTarget: XAmzTarget36.OvertureServiceDescribeDirectConnectGatewayAssociations,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeDirectConnectGatewayAssociationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeDirectConnectGatewayAssociations({
    xAmzTarget: XAmzTarget36.OvertureServiceDescribeDirectConnectGatewayAssociations,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget36](src/models/xamz-target36.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeDirectConnectGatewayAssociations(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeDirectConnectGatewayAssociationsError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeDirectConnectGatewayAssociations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeDirectConnectGatewayAssociationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDirectConnectGatewayAttachments(request: AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeDirectConnectGatewayAttachments({
    xAmzTarget: XAmzTarget50.OvertureServiceDescribeDirectConnectGatewayAttachments,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeDirectConnectGatewayAttachments({
    xAmzTarget: XAmzTarget50.OvertureServiceDescribeDirectConnectGatewayAttachments,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget50](src/models/xamz-target50.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeDirectConnectGatewayAttachments(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeDirectConnectGatewayAttachments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDirectConnectGateways(request: AwsDirectConnect.DescribeDirectConnectGatewaysRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeDirectConnectGatewaysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeDirectConnectGateways({
    xAmzTarget: XAmzTarget32.OvertureServiceDescribeDirectConnectGateways,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeDirectConnectGatewaysError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeDirectConnectGateways({ xAmzTarget: XAmzTarget32.OvertureServiceDescribeDirectConnectGateways })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget32](src/models/xamz-target32.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeDirectConnectGateways(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeDirectConnectGatewaysError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeDirectConnectGateways(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeDirectConnectGatewaysError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeHostedConnections(request: AwsDirectConnect.DescribeHostedConnectionsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeHostedConnectionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG). Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeHostedConnections({
    xAmzTarget: XAmzTarget22.OvertureServiceDescribeHostedConnections,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeHostedConnectionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeHostedConnections({ xAmzTarget: XAmzTarget22.OvertureServiceDescribeHostedConnections })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget22](src/models/xamz-target22.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeHostedConnections(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeHostedConnectionsError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeHostedConnections(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeHostedConnectionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeInterconnectLoa(request: AwsDirectConnect.DescribeInterconnectLoaRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeInterconnectLoaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for the specified interconnect. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects at Direct Connect Locations in the Direct Connect User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeInterconnectLoa({
    xAmzTarget: XAmzTarget51.OvertureServiceDescribeInterconnectLoa,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeInterconnectLoaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeInterconnectLoa({ xAmzTarget: XAmzTarget51.OvertureServiceDescribeInterconnectLoa })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget51](src/models/xamz-target51.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeInterconnectLoa(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeInterconnectLoaError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeInterconnectLoa(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeInterconnectLoaError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeInterconnects(request: AwsDirectConnect.DescribeInterconnectsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeInterconnectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeInterconnects({
    xAmzTarget: XAmzTarget40.OvertureServiceDescribeInterconnects,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeInterconnectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeInterconnects({ xAmzTarget: XAmzTarget40.OvertureServiceDescribeInterconnects })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget40](src/models/xamz-target40.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeInterconnects(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeInterconnectsError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeInterconnects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeInterconnectsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeLags(request: AwsDirectConnect.DescribeLagsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeLagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes all your link aggregation groups (LAG) or the specified LAG.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeLags({ xAmzTarget: XAmzTarget43.OvertureServiceDescribeLags });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeLagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeLags({ xAmzTarget: XAmzTarget43.OvertureServiceDescribeLags })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget43](src/models/xamz-target43.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeLags(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeLagsError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeLags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeLagsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeLoa(request: AwsDirectConnect.DescribeLoaRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeLoaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG). The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see Requesting Cross Connects at Direct Connect Locations in the Direct Connect User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeLoa({ xAmzTarget: XAmzTarget52.OvertureServiceDescribeLoa });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeLoaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeLoa({ xAmzTarget: XAmzTarget52.OvertureServiceDescribeLoa })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget52](src/models/xamz-target52.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeLoa(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeLoaError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeLoa(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeLoaError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeLocations(request: AwsDirectConnect.DescribeLocationsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeLocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that can be selected when calling CreateConnection or CreateInterconnect.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeLocations({
    xAmzTarget: XAmzTarget53.OvertureServiceDescribeLocations,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeLocationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeLocations({ xAmzTarget: XAmzTarget53.OvertureServiceDescribeLocations })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget53](src/models/xamz-target53.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeLocations(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeLocationsError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeLocations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeLocationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeRouterConfiguration(request: AwsDirectConnect.DescribeRouterConfigurationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeRouterConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Details about the router.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeRouterConfiguration({
    xAmzTarget: XAmzTarget54.OvertureServiceDescribeRouterConfiguration,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeRouterConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeRouterConfiguration({ xAmzTarget: XAmzTarget54.OvertureServiceDescribeRouterConfiguration })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget54](src/models/xamz-target54.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeRouterConfiguration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeRouterConfigurationError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeRouterConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeRouterConfigurationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeTags(request: AwsDirectConnect.DescribeTagsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the tags associated with the specified Direct Connect resources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeTags({ xAmzTarget: XAmzTarget55.OvertureServiceDescribeTags });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeTagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeTags({ xAmzTarget: XAmzTarget55.OvertureServiceDescribeTags })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget55](src/models/xamz-target55.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeTags(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeTagsError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeTagsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeVirtualGateways(request: AwsDirectConnect.DescribeVirtualGatewaysRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeVirtualGatewaysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated. Use DescribeVpnGateways instead. See DescribeVPNGateways in the Amazon Elastic Compute Cloud API Reference. Lists the virtual private gateways owned by the Amazon Web Services account. You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeVirtualGateways({
    xAmzTarget: XAmzTarget56.OvertureServiceDescribeVirtualGateways,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeVirtualGatewaysError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeVirtualGateways({ xAmzTarget: XAmzTarget56.OvertureServiceDescribeVirtualGateways })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget56](src/models/xamz-target56.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeVirtualGateways(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeVirtualGatewaysError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeVirtualGateways(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeVirtualGatewaysError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeVirtualInterfaces(request: AwsDirectConnect.DescribeVirtualInterfacesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DescribeVirtualInterfacesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned. A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network. If you're using an asn, the response includes the ASN value in both the asn and asnLong fields. If you're using asnLong, the response returns a value of 0 (zero) for the asn attribute because it exceeds the highest ASN value of 2,147,483,647 that it can support

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.describeVirtualInterfaces({
    xAmzTarget: XAmzTarget27.OvertureServiceDescribeVirtualInterfaces,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DescribeVirtualInterfacesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .describeVirtualInterfaces({ xAmzTarget: XAmzTarget27.OvertureServiceDescribeVirtualInterfaces })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget27](src/models/xamz-target27.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.describeVirtualInterfaces(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DescribeVirtualInterfacesError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.describeVirtualInterfaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DescribeVirtualInterfacesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disassociateConnectionFromLag(request: AwsDirectConnect.DisassociateConnectionFromLagRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DisassociateConnectionFromLagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the DeleteConnection request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically converted to an interconnect. If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.disassociateConnectionFromLag({
    xAmzTarget: XAmzTarget19.OvertureServiceDisassociateConnectionFromLag,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DisassociateConnectionFromLagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .disassociateConnectionFromLag({ xAmzTarget: XAmzTarget19.OvertureServiceDisassociateConnectionFromLag })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget19](src/models/xamz-target19.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.disassociateConnectionFromLag(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DisassociateConnectionFromLagError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.disassociateConnectionFromLag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DisassociateConnectionFromLagError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disassociateMacSecKey(request: AwsDirectConnect.DisassociateMacSecKeyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.DisassociateMacSecKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the association between a MAC Security (MACsec) security key and a Direct Connect connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.disassociateMacSecKey({
    xAmzTarget: XAmzTarget24.OvertureServiceDisassociateMacSecKey,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.DisassociateMacSecKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .disassociateMacSecKey({ xAmzTarget: XAmzTarget24.OvertureServiceDisassociateMacSecKey })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget24](src/models/xamz-target24.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.disassociateMacSecKey(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.DisassociateMacSecKeyError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.disassociateMacSecKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.DisassociateMacSecKeyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVirtualInterfaceTestHistory(request: AwsDirectConnect.ListVirtualInterfaceTestHistoryRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.ListVirtualInterfaceTestHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the virtual interface failover test history.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.listVirtualInterfaceTestHistory({
    xAmzTarget: XAmzTarget57.OvertureServiceListVirtualInterfaceTestHistory,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.ListVirtualInterfaceTestHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .listVirtualInterfaceTestHistory({
    xAmzTarget: XAmzTarget57.OvertureServiceListVirtualInterfaceTestHistory,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget57](src/models/xamz-target57.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.listVirtualInterfaceTestHistory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.ListVirtualInterfaceTestHistoryError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.listVirtualInterfaceTestHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.ListVirtualInterfaceTestHistoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startBgpFailoverTest(request: AwsDirectConnect.StartBgpFailoverTestRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.StartBgpFailoverTestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages. You can run the test on public, private, transit, and hosted virtual interfaces. You can use ListVirtualInterfaceTestHistory to view the virtual interface test history. If you need to stop the test before the test interval completes, use StopBgpFailoverTest.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.startBgpFailoverTest({
    xAmzTarget: XAmzTarget58.OvertureServiceStartBgpFailoverTest,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.StartBgpFailoverTestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .startBgpFailoverTest({ xAmzTarget: XAmzTarget58.OvertureServiceStartBgpFailoverTest })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget58](src/models/xamz-target58.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.startBgpFailoverTest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.StartBgpFailoverTestError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.startBgpFailoverTest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.StartBgpFailoverTestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopBgpFailoverTest(request: AwsDirectConnect.StopBgpFailoverTestRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.StopBgpFailoverTestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops the virtual interface failover test.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.stopBgpFailoverTest({
    xAmzTarget: XAmzTarget59.OvertureServiceStopBgpFailoverTest,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.StopBgpFailoverTestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .stopBgpFailoverTest({ xAmzTarget: XAmzTarget59.OvertureServiceStopBgpFailoverTest })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget59](src/models/xamz-target59.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.stopBgpFailoverTest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.StopBgpFailoverTestError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.stopBgpFailoverTest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.StopBgpFailoverTestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource(request: AwsDirectConnect.TagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.TagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.tagResource({ xAmzTarget: XAmzTarget60.OvertureServiceTagResource });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.TagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .tagResource({ xAmzTarget: XAmzTarget60.OvertureServiceTagResource })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget60](src/models/xamz-target60.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.tagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.TagResourceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.tagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.TagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagResource(request: AwsDirectConnect.UntagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.UntagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes one or more tags from the specified Direct Connect resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.untagResource({ xAmzTarget: XAmzTarget61.OvertureServiceUntagResource });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.UntagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .untagResource({ xAmzTarget: XAmzTarget61.OvertureServiceUntagResource })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget61](src/models/xamz-target61.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.untagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.UntagResourceError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.untagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.UntagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateConnection(request: AwsDirectConnect.UpdateConnectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.UpdateConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the Direct Connect connection configuration. You can update the following parameters for a connection: The connection name The connection's MAC Security (MACsec) encryption mode.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.updateConnection({
    xAmzTarget: XAmzTarget20.OvertureServiceUpdateConnection,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.UpdateConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .updateConnection({ xAmzTarget: XAmzTarget20.OvertureServiceUpdateConnection })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget20](src/models/xamz-target20.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.updateConnection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.UpdateConnectionError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.updateConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.UpdateConnectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDirectConnectGateway(request: AwsDirectConnect.UpdateDirectConnectGatewayRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.UpdateDirectConnectGatewayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name of a current Direct Connect gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.updateDirectConnectGateway({
    xAmzTarget: XAmzTarget33.OvertureServiceUpdateDirectConnectGateway,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.UpdateDirectConnectGatewayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .updateDirectConnectGateway({ xAmzTarget: XAmzTarget33.OvertureServiceUpdateDirectConnectGateway })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget33](src/models/xamz-target33.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.updateDirectConnectGateway(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.UpdateDirectConnectGatewayError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.updateDirectConnectGateway(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.UpdateDirectConnectGatewayError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDirectConnectGatewayAssociation(request: AwsDirectConnect.UpdateDirectConnectGatewayAssociationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.UpdateDirectConnectGatewayAssociationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified attributes of the Direct Connect gateway association. Add or remove prefixes from the association.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.updateDirectConnectGatewayAssociation({
    xAmzTarget: XAmzTarget37.OvertureServiceUpdateDirectConnectGatewayAssociation,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.UpdateDirectConnectGatewayAssociationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .updateDirectConnectGatewayAssociation({
    xAmzTarget: XAmzTarget37.OvertureServiceUpdateDirectConnectGatewayAssociation,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget37](src/models/xamz-target37.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.updateDirectConnectGatewayAssociation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.UpdateDirectConnectGatewayAssociationError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.updateDirectConnectGatewayAssociation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.UpdateDirectConnectGatewayAssociationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLag(request: AwsDirectConnect.UpdateLagRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.UpdateLagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the attributes of the specified link aggregation group (LAG). You can update the following LAG attributes: The name of the LAG. The value for the minimum number of connections that must be operational for the LAG itself to be operational. The LAG's MACsec encryption mode. Amazon Web Services assigns this value to each connection which is part of the LAG. The tags If you adjust the threshold value for the minimum number of operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become non-operational.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.updateLag({ xAmzTarget: XAmzTarget44.OvertureServiceUpdateLag });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.UpdateLagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .updateLag({ xAmzTarget: XAmzTarget44.OvertureServiceUpdateLag })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget44](src/models/xamz-target44.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.updateLag(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.UpdateLagError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.updateLag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.UpdateLagError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateVirtualInterfaceAttributes(request: AwsDirectConnect.UpdateVirtualInterfaceAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AwsDirectConnect.UpdateVirtualInterfaceAttributesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified attributes of the specified virtual private interface. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsDirectConnect.updateVirtualInterfaceAttributes({
    xAmzTarget: XAmzTarget62.OvertureServiceUpdateVirtualInterfaceAttributes,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsDirectConnect.UpdateVirtualInterfaceAttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsDirectConnect
  .updateVirtualInterfaceAttributes({
    xAmzTarget: XAmzTarget62.OvertureServiceUpdateVirtualInterfaceAttributes,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget62](src/models/xamz-target62.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsDirectConnect.updateVirtualInterfaceAttributes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsDirectConnect.UpdateVirtualInterfaceAttributesError](src/resources/aws-direct-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsDirectConnect.updateVirtualInterfaceAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsDirectConnect.UpdateVirtualInterfaceAttributesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>allocateConnectionOnInterconnect2(request: Operations.AllocateConnectionOnInterconnect2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.AllocateConnectionOnInterconnect2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.allocateConnectionOnInterconnect2({
    xAmzTarget: XAmzTargetAwsDirectConnectOperationsApi.OvertureServiceAllocateConnectionOnInterconnect,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.AllocateConnectionOnInterconnect2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .allocateConnectionOnInterconnect2({
    xAmzTarget: XAmzTargetAwsDirectConnectOperationsApi.OvertureServiceAllocateConnectionOnInterconnect,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsDirectConnectOperationsApi](src/models/xamz-target-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.allocateConnectionOnInterconnect2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.AllocateConnectionOnInterconnect2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.allocateConnectionOnInterconnect2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.AllocateConnectionOnInterconnect2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allocateHostedConnection2(request: Operations.AllocateHostedConnection2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.AllocateHostedConnection2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects. Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity. Intended for use by Direct Connect Partners only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.allocateHostedConnection2({
    xAmzTarget: XAmzTarget1AwsDirectConnectOperationsApi.OvertureServiceAllocateHostedConnection,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.AllocateHostedConnection2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .allocateHostedConnection2({
    xAmzTarget: XAmzTarget1AwsDirectConnectOperationsApi.OvertureServiceAllocateHostedConnection,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsDirectConnectOperationsApi](src/models/xamz-target1-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.allocateHostedConnection2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.AllocateHostedConnection2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.allocateHostedConnection2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.AllocateHostedConnection2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allocatePrivateVirtualInterface2(request: Operations.AllocatePrivateVirtualInterface2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.AllocatePrivateVirtualInterface2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a private virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until then, the virtual interface is in the Confirming state and is not available to handle traffic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.allocatePrivateVirtualInterface2({
    xAmzTarget: XAmzTarget2AwsDirectConnectOperationsApi.OvertureServiceAllocatePrivateVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.AllocatePrivateVirtualInterface2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .allocatePrivateVirtualInterface2({
    xAmzTarget: XAmzTarget2AwsDirectConnectOperationsApi.OvertureServiceAllocatePrivateVirtualInterface,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsDirectConnectOperationsApi](src/models/xamz-target2-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.allocatePrivateVirtualInterface2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.AllocatePrivateVirtualInterface2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.allocatePrivateVirtualInterface2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.AllocatePrivateVirtualInterface2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allocatePublicVirtualInterface2(request: Operations.AllocatePublicVirtualInterface2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.AllocatePublicVirtualInterface2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a public virtual interface to be owned by the specified Amazon Web Services account. The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this function must be confirmed by the owner using ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.allocatePublicVirtualInterface2({
    xAmzTarget: XAmzTarget3AwsDirectConnectOperationsApi.OvertureServiceAllocatePublicVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.AllocatePublicVirtualInterface2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .allocatePublicVirtualInterface2({
    xAmzTarget: XAmzTarget3AwsDirectConnectOperationsApi.OvertureServiceAllocatePublicVirtualInterface,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsDirectConnectOperationsApi](src/models/xamz-target3-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.allocatePublicVirtualInterface2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.AllocatePublicVirtualInterface2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.allocatePublicVirtualInterface2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.AllocatePublicVirtualInterface2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allocateTransitVirtualInterface2(request: Operations.AllocateTransitVirtualInterface2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.AllocateTransitVirtualInterface2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway. The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account. After you create a transit virtual interface, it must be confirmed by the owner using ConfirmTransitVirtualInterface. Until this step has been completed, the transit virtual interface is in the requested state and is not available to handle traffic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.allocateTransitVirtualInterface2({
    xAmzTarget: XAmzTarget4AwsDirectConnectOperationsApi.OvertureServiceAllocateTransitVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.AllocateTransitVirtualInterface2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .allocateTransitVirtualInterface2({
    xAmzTarget: XAmzTarget4AwsDirectConnectOperationsApi.OvertureServiceAllocateTransitVirtualInterface,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsDirectConnectOperationsApi](src/models/xamz-target4-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.allocateTransitVirtualInterface2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.AllocateTransitVirtualInterface2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.allocateTransitVirtualInterface2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.AllocateTransitVirtualInterface2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associateConnectionsToResiliencyGroup(request: Operations.AssociateConnectionsToResiliencyGroupRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.AssociateConnectionsToResiliencyGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates one or more connections with the specified resiliency group. This operation is atomic: either all of the specified connections are associated, or the operation fails and no changes are made.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.associateConnectionsToResiliencyGroup({
    xAmzTarget:
      XAmzTarget10AwsDirectConnectOperationsApi.OvertureServiceAssociateConnectionsToResiliencyGroup,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.AssociateConnectionsToResiliencyGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .associateConnectionsToResiliencyGroup({
    xAmzTarget:
      XAmzTarget10AwsDirectConnectOperationsApi.OvertureServiceAssociateConnectionsToResiliencyGroup,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget10AwsDirectConnectOperationsApi](src/models/xamz-target10-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.associateConnectionsToResiliencyGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.AssociateConnectionsToResiliencyGroupError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.associateConnectionsToResiliencyGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.AssociateConnectionsToResiliencyGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmConnection2(request: Operations.ConfirmConnection2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ConfirmConnection2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted connection is initially in the Ordering state, and remains in this state until the owner confirms creation of the hosted connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.confirmConnection2({
    xAmzTarget: XAmzTarget5AwsDirectConnectOperationsApi.OvertureServiceConfirmConnection,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ConfirmConnection2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .confirmConnection2({
    xAmzTarget: XAmzTarget5AwsDirectConnectOperationsApi.OvertureServiceConfirmConnection,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget5AwsDirectConnectOperationsApi](src/models/xamz-target5-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.confirmConnection2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ConfirmConnection2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.confirmConnection2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ConfirmConnection2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmCustomerAgreement2(request: Operations.ConfirmCustomerAgreement2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ConfirmCustomerAgreement2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.confirmCustomerAgreement2({
    xAmzTarget: XAmzTarget6AwsDirectConnectOperationsApi.OvertureServiceConfirmCustomerAgreement,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ConfirmCustomerAgreement2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .confirmCustomerAgreement2({
    xAmzTarget: XAmzTarget6AwsDirectConnectOperationsApi.OvertureServiceConfirmCustomerAgreement,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget6AwsDirectConnectOperationsApi](src/models/xamz-target6-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.confirmCustomerAgreement2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ConfirmCustomerAgreement2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.confirmCustomerAgreement2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ConfirmCustomerAgreement2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmPrivateVirtualInterface2(request: Operations.ConfirmPrivateVirtualInterface2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ConfirmPrivateVirtualInterface2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts ownership of a private virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.confirmPrivateVirtualInterface2({
    xAmzTarget: XAmzTarget7AwsDirectConnectOperationsApi.OvertureServiceConfirmPrivateVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ConfirmPrivateVirtualInterface2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .confirmPrivateVirtualInterface2({
    xAmzTarget: XAmzTarget7AwsDirectConnectOperationsApi.OvertureServiceConfirmPrivateVirtualInterface,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget7AwsDirectConnectOperationsApi](src/models/xamz-target7-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.confirmPrivateVirtualInterface2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ConfirmPrivateVirtualInterface2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.confirmPrivateVirtualInterface2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ConfirmPrivateVirtualInterface2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmPublicVirtualInterface2(request: Operations.ConfirmPublicVirtualInterface2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ConfirmPublicVirtualInterface2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts ownership of a public virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.confirmPublicVirtualInterface2({
    xAmzTarget: XAmzTarget8AwsDirectConnectOperationsApi.OvertureServiceConfirmPublicVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ConfirmPublicVirtualInterface2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .confirmPublicVirtualInterface2({
    xAmzTarget: XAmzTarget8AwsDirectConnectOperationsApi.OvertureServiceConfirmPublicVirtualInterface,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget8AwsDirectConnectOperationsApi](src/models/xamz-target8-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.confirmPublicVirtualInterface2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ConfirmPublicVirtualInterface2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.confirmPublicVirtualInterface2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ConfirmPublicVirtualInterface2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmTransitVirtualInterface2(request: Operations.ConfirmTransitVirtualInterface2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ConfirmTransitVirtualInterface2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts ownership of a transit virtual interface created by another Amazon Web Services account. After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.confirmTransitVirtualInterface2({
    xAmzTarget: XAmzTarget9AwsDirectConnectOperationsApi.OvertureServiceConfirmTransitVirtualInterface,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ConfirmTransitVirtualInterface2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .confirmTransitVirtualInterface2({
    xAmzTarget: XAmzTarget9AwsDirectConnectOperationsApi.OvertureServiceConfirmTransitVirtualInterface,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget9AwsDirectConnectOperationsApi](src/models/xamz-target9-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.confirmTransitVirtualInterface2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ConfirmTransitVirtualInterface2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.confirmTransitVirtualInterface2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ConfirmTransitVirtualInterface2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disassociateConnectionsFromResiliencyGroup(request: Operations.DisassociateConnectionsFromResiliencyGroupRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DisassociateConnectionsFromResiliencyGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disassociates one or more connections from the specified resiliency group. This operation is atomic: either all of the specified connections are disassociated, or the operation fails and no changes are made.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.disassociateConnectionsFromResiliencyGroup({
    xAmzTarget:
      XAmzTarget11AwsDirectConnectOperationsApi.OvertureServiceDisassociateConnectionsFromResiliencyGroup,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DisassociateConnectionsFromResiliencyGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .disassociateConnectionsFromResiliencyGroup({
    xAmzTarget:
      XAmzTarget11AwsDirectConnectOperationsApi.OvertureServiceDisassociateConnectionsFromResiliencyGroup,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget11AwsDirectConnectOperationsApi](src/models/xamz-target11-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.disassociateConnectionsFromResiliencyGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DisassociateConnectionsFromResiliencyGroupError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.disassociateConnectionsFromResiliencyGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DisassociateConnectionsFromResiliencyGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResiliencyGroupAssociations(request: Operations.ListResiliencyGroupAssociationsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ListResiliencyGroupAssociationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the connection associations for the specified resiliency group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.listResiliencyGroupAssociations({
    xAmzTarget: XAmzTarget12AwsDirectConnectOperationsApi.OvertureServiceListResiliencyGroupAssociations,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ListResiliencyGroupAssociationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .listResiliencyGroupAssociations({
    xAmzTarget: XAmzTarget12AwsDirectConnectOperationsApi.OvertureServiceListResiliencyGroupAssociations,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget12AwsDirectConnectOperationsApi](src/models/xamz-target12-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.listResiliencyGroupAssociations(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ListResiliencyGroupAssociationsError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.listResiliencyGroupAssociations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ListResiliencyGroupAssociationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVirtualInterfaceRoutes(request: Operations.ListVirtualInterfaceRoutesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ListVirtualInterfaceRoutesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the routes for the specified virtual interface. Use the routeDirection filter to control which routes are returned: accepted: routes received from the customer network over the virtual interface. advertised: routes advertised to the customer network over the virtual interface.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.listVirtualInterfaceRoutes({
    xAmzTarget: XAmzTarget13AwsDirectConnectOperationsApi.OvertureServiceListVirtualInterfaceRoutes,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ListVirtualInterfaceRoutesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .listVirtualInterfaceRoutes({
    xAmzTarget: XAmzTarget13AwsDirectConnectOperationsApi.OvertureServiceListVirtualInterfaceRoutes,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget13AwsDirectConnectOperationsApi](src/models/xamz-target13-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.listVirtualInterfaceRoutes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ListVirtualInterfaceRoutesError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.listVirtualInterfaceRoutes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ListVirtualInterfaceRoutesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateConnectionsBillingMode(request: Operations.UpdateConnectionsBillingModeRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.UpdateConnectionsBillingModeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the billing mode for the specified Direct Connect connections. You can update the billing mode for up to 200 connections in a single request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.updateConnectionsBillingMode({
    xAmzTarget: XAmzTarget14AwsDirectConnectOperationsApi.OvertureServiceUpdateConnectionsBillingMode,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.UpdateConnectionsBillingModeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .updateConnectionsBillingMode({
    xAmzTarget: XAmzTarget14AwsDirectConnectOperationsApi.OvertureServiceUpdateConnectionsBillingMode,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget14AwsDirectConnectOperationsApi](src/models/xamz-target14-aws-direct-connect-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.updateConnectionsBillingMode(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.UpdateConnectionsBillingModeError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.updateConnectionsBillingMode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.UpdateConnectionsBillingModeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ResiliencyGroupApi

> Source: [ResiliencyGroupApi](src/resources/resiliency-group-api.ts)

<details>
<summary><code>createResiliencyGroup(request: ResiliencyGroupApi.CreateResiliencyGroupRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ResiliencyGroupApi.CreateResiliencyGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a resiliency group. A resiliency group lets you group Direct Connect connections together and manage them as a single unit to meet a target resiliency model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.resiliencyGroupApi.createResiliencyGroup({
    xAmzTarget: XAmzTargetAwsDirectConnectResiliencyGroupApi.OvertureServiceCreateResiliencyGroup,
  });
} catch (err) {
  // TODO: Handle 'err' of type ResiliencyGroupApi.CreateResiliencyGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resiliencyGroupApi
  .createResiliencyGroup({
    xAmzTarget: XAmzTargetAwsDirectConnectResiliencyGroupApi.OvertureServiceCreateResiliencyGroup,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsDirectConnectResiliencyGroupApi](src/models/xamz-target-aws-direct-connect-resiliency-group-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resiliencyGroupApi.createResiliencyGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ResiliencyGroupApi.CreateResiliencyGroupError](src/resources/resiliency-group-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resiliencyGroupApi.createResiliencyGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ResiliencyGroupApi.CreateResiliencyGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteResiliencyGroup(request: ResiliencyGroupApi.DeleteResiliencyGroupRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ResiliencyGroupApi.DeleteResiliencyGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified resiliency group. Deletion is asynchronous: the resiliency group transitions through the deleting state before it reaches the deleted state. The response returns the resiliency group so you can observe its current state without a subsequent GetResiliencyGroup call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.resiliencyGroupApi.deleteResiliencyGroup({
    xAmzTarget: XAmzTarget1AwsDirectConnectResiliencyGroupApi.OvertureServiceDeleteResiliencyGroup,
  });
} catch (err) {
  // TODO: Handle 'err' of type ResiliencyGroupApi.DeleteResiliencyGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resiliencyGroupApi
  .deleteResiliencyGroup({
    xAmzTarget: XAmzTarget1AwsDirectConnectResiliencyGroupApi.OvertureServiceDeleteResiliencyGroup,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsDirectConnectResiliencyGroupApi](src/models/xamz-target1-aws-direct-connect-resiliency-group-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resiliencyGroupApi.deleteResiliencyGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ResiliencyGroupApi.DeleteResiliencyGroupError](src/resources/resiliency-group-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resiliencyGroupApi.deleteResiliencyGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ResiliencyGroupApi.DeleteResiliencyGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResiliencyGroup(request: ResiliencyGroupApi.GetResiliencyGroupRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ResiliencyGroupApi.GetResiliencyGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about the specified resiliency group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.resiliencyGroupApi.getResiliencyGroup({
    xAmzTarget: XAmzTarget2AwsDirectConnectResiliencyGroupApi.OvertureServiceGetResiliencyGroup,
  });
} catch (err) {
  // TODO: Handle 'err' of type ResiliencyGroupApi.GetResiliencyGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resiliencyGroupApi
  .getResiliencyGroup({
    xAmzTarget: XAmzTarget2AwsDirectConnectResiliencyGroupApi.OvertureServiceGetResiliencyGroup,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsDirectConnectResiliencyGroupApi](src/models/xamz-target2-aws-direct-connect-resiliency-group-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resiliencyGroupApi.getResiliencyGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ResiliencyGroupApi.GetResiliencyGroupError](src/resources/resiliency-group-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resiliencyGroupApi.getResiliencyGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ResiliencyGroupApi.GetResiliencyGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResiliencyGroups(request: ResiliencyGroupApi.ListResiliencyGroupsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ResiliencyGroupApi.ListResiliencyGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the resiliency groups owned by your Amazon Web Services account in the current Amazon Web Services Region.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.resiliencyGroupApi.listResiliencyGroups({
    xAmzTarget: XAmzTarget3AwsDirectConnectResiliencyGroupApi.OvertureServiceListResiliencyGroups,
  });
} catch (err) {
  // TODO: Handle 'err' of type ResiliencyGroupApi.ListResiliencyGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resiliencyGroupApi
  .listResiliencyGroups({
    xAmzTarget: XAmzTarget3AwsDirectConnectResiliencyGroupApi.OvertureServiceListResiliencyGroups,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsDirectConnectResiliencyGroupApi](src/models/xamz-target3-aws-direct-connect-resiliency-group-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resiliencyGroupApi.listResiliencyGroups(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ResiliencyGroupApi.ListResiliencyGroupsError](src/resources/resiliency-group-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resiliencyGroupApi.listResiliencyGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ResiliencyGroupApi.ListResiliencyGroupsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateResiliencyGroup(request: ResiliencyGroupApi.UpdateResiliencyGroupRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ResiliencyGroupApi.UpdateResiliencyGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name of the specified resiliency group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.resiliencyGroupApi.updateResiliencyGroup({
    xAmzTarget: XAmzTarget4AwsDirectConnectResiliencyGroupApi.OvertureServiceUpdateResiliencyGroup,
  });
} catch (err) {
  // TODO: Handle 'err' of type ResiliencyGroupApi.UpdateResiliencyGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resiliencyGroupApi
  .updateResiliencyGroup({
    xAmzTarget: XAmzTarget4AwsDirectConnectResiliencyGroupApi.OvertureServiceUpdateResiliencyGroup,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsDirectConnectResiliencyGroupApi](src/models/xamz-target4-aws-direct-connect-resiliency-group-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resiliencyGroupApi.updateResiliencyGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ResiliencyGroupApi.UpdateResiliencyGroupError](src/resources/resiliency-group-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resiliencyGroupApi.updateResiliencyGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ResiliencyGroupApi.UpdateResiliencyGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsDirectConnectError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

