# Reference

> Source: [AmazonVpcClient](src/client.ts)

## InternetGateways

> Source: [InternetGateways](src/resources/internet-gateways.ts)

<details>
<summary><code>attachInternetGateway(request: InternetGateways.AttachInternetGatewayRequest, options?: RequestOptions): ApiPromise&lt;undefined, InternetGateways.AttachInternetGatewayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the internet and the VPC.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.internetGateways.attachInternetGateway({
    internetGatewayId: "example-id",
    vpcId: "example-id",
  });
} catch (err) {
  // TODO: Handle 'err' of type InternetGateways.AttachInternetGatewayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.internetGateways
  .attachInternetGateway({ internetGatewayId: "example-id", vpcId: "example-id" })
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
| <code>internetGatewayId</code> | <code>string</code> | The ID of the internet gateway |
| <code>vpcId</code> | <code>string</code> | The ID of the VPC |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.internetGateways.attachInternetGateway(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[InternetGateways.AttachInternetGatewayError](src/resources/internet-gateways.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.internetGateways.attachInternetGateway(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, InternetGateways.AttachInternetGatewayError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createInternetGateway(options?: RequestOptions): ApiPromise&lt;undefined, InternetGateways.CreateInternetGatewayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an internet gateway for use with a VPC. After creating the internet gateway, you attach it to a VPC using AttachInternetGateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.internetGateways.createInternetGateway();
} catch (err) {
  // TODO: Handle 'err' of type InternetGateways.CreateInternetGatewayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.internetGateways.createInternetGateway().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.internetGateways.createInternetGateway()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[InternetGateways.CreateInternetGatewayError](src/resources/internet-gateways.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.internetGateways.createInternetGateway().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, InternetGateways.CreateInternetGatewayError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NatGateways

> Source: [NatGateways](src/resources/nat-gateways.ts)

<details>
<summary><code>createNatGateway(request: NatGateways.CreateNatGatewayRequest, options?: RequestOptions): ApiPromise&lt;undefined, NatGateways.CreateNatGatewayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a NAT gateway in the specified subnet. A NAT gateway enables instances in a private subnet to connect to the internet or other AWS services, but prevents the internet from initiating a connection with those instances.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.natGateways.createNatGateway({
    subnetId: "example-id",
    allocationId: "example-id",
    connectivityType: ConnectivityType1.Public,
  });
} catch (err) {
  // TODO: Handle 'err' of type NatGateways.CreateNatGatewayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.natGateways
  .createNatGateway({
    subnetId: "example-id",
    allocationId: "example-id",
    connectivityType: ConnectivityType1.Public,
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
| <code>subnetId</code> | <code>string</code> | The ID of the subnet in which to create the NAT gateway |
| <code>allocationId?</code> | <code>string</code> | The allocation ID of an Elastic IP address to associate with the NAT gateway |
| <code>connectivityType?</code> | <code>[ConnectivityType1](src/models/connectivity-type1.ts)</code> | Indicates whether the NAT gateway supports public or private connectivity |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.natGateways.createNatGateway(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[NatGateways.CreateNatGatewayError](src/resources/nat-gateways.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.natGateways.createNatGateway(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, NatGateways.CreateNatGatewayError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeNatGateways(request?: NatGateways.DescribeNatGatewaysRequest, options?: RequestOptions): ApiPromise&lt;undefined, NatGateways.DescribeNatGatewaysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes one or more of your NAT gateways. Returns information about the NAT gateway including its state, subnet, and associated Elastic IP address.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.natGateways.describeNatGateways({
    natGatewayId: ["example-id"],
    filter: ["example"],
    nextToken: "example",
  });
} catch (err) {
  // TODO: Handle 'err' of type NatGateways.DescribeNatGatewaysError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.natGateways
  .describeNatGateways({ natGatewayId: ["example-id"], filter: ["example"], nextToken: "example" })
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
| <code>natGatewayId?</code> | <code>string[]</code> | The IDs of the NAT gateways to describe |
| <code>filter?</code> | <code>string[]</code> | Filters to apply to the results |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return |
| <code>nextToken?</code> | <code>string</code> | Token for the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.natGateways.describeNatGateways(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[NatGateways.DescribeNatGatewaysError](src/resources/nat-gateways.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.natGateways.describeNatGateways(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, NatGateways.DescribeNatGatewaysError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NetworkAcLs

> Source: [NetworkAcLs](src/resources/network-ac-ls.ts)

<details>
<summary><code>createNetworkAcl(request: NetworkAcLs.CreateNetworkAclRequest, options?: RequestOptions): ApiPromise&lt;undefined, NetworkAcLs.CreateNetworkAclError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a network ACL in a VPC. Network ACLs provide an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.networkAcLs.createNetworkAcl({ vpcId: "example-id" });
} catch (err) {
  // TODO: Handle 'err' of type NetworkAcLs.CreateNetworkAclError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networkAcLs.createNetworkAcl({ vpcId: "example-id" }).asApiResult();
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
| <code>vpcId</code> | <code>string</code> | The ID of the VPC |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networkAcLs.createNetworkAcl(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[NetworkAcLs.CreateNetworkAclError](src/resources/network-ac-ls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networkAcLs.createNetworkAcl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, NetworkAcLs.CreateNetworkAclError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeNetworkAcls(request?: NetworkAcLs.DescribeNetworkAclsRequest, options?: RequestOptions): ApiPromise&lt;undefined, NetworkAcLs.DescribeNetworkAclsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes one or more of your network ACLs. A network ACL is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.networkAcLs.describeNetworkAcls({
    networkAclId: ["example-id"],
    filter: ["example"],
    nextToken: "example",
  });
} catch (err) {
  // TODO: Handle 'err' of type NetworkAcLs.DescribeNetworkAclsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networkAcLs
  .describeNetworkAcls({ networkAclId: ["example-id"], filter: ["example"], nextToken: "example" })
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
| <code>networkAclId?</code> | <code>string[]</code> | The IDs of the network ACLs to describe |
| <code>filter?</code> | <code>string[]</code> | Filters to apply to the results |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return |
| <code>nextToken?</code> | <code>string</code> | Token for the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networkAcLs.describeNetworkAcls(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[NetworkAcLs.DescribeNetworkAclsError](src/resources/network-ac-ls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networkAcLs.describeNetworkAcls(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, NetworkAcLs.DescribeNetworkAclsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RouteTables

> Source: [RouteTables](src/resources/route-tables.ts)

<details>
<summary><code>associateRouteTable(request: RouteTables.AssociateRouteTableRequest, options?: RequestOptions): ApiPromise&lt;undefined, RouteTables.AssociateRouteTableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates a subnet or gateway with a route table. The subnet and route table must be in the same VPC. This association causes traffic from the subnet to be routed according to the routes in the route table.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.routeTables.associateRouteTable({
    routeTableId: "example-id",
    subnetId: "example-id",
    gatewayId: "example-id",
  });
} catch (err) {
  // TODO: Handle 'err' of type RouteTables.AssociateRouteTableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.routeTables
  .associateRouteTable({ routeTableId: "example-id", subnetId: "example-id", gatewayId: "example-id" })
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
| <code>routeTableId</code> | <code>string</code> | The ID of the route table |
| <code>subnetId?</code> | <code>string</code> | The ID of the subnet |
| <code>gatewayId?</code> | <code>string</code> | The ID of the internet gateway or virtual private gateway |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.routeTables.associateRouteTable(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[RouteTables.AssociateRouteTableError](src/resources/route-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.routeTables.associateRouteTable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, RouteTables.AssociateRouteTableError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createRoute(request: RouteTables.CreateRouteRequest, options?: RequestOptions): ApiPromise&lt;undefined, RouteTables.CreateRouteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a route in a route table within a VPC. You must specify either a destination CIDR block or a prefix list ID. You must also specify exactly one of the targets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.routeTables.createRoute({
    routeTableId: "example-id",
    destinationCidrBlock: "example-id",
    gatewayId: "example-id",
    natGatewayId: "example-id",
    networkInterfaceId: "example-id",
  });
} catch (err) {
  // TODO: Handle 'err' of type RouteTables.CreateRouteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.routeTables
  .createRoute({
    routeTableId: "example-id",
    destinationCidrBlock: "example-id",
    gatewayId: "example-id",
    natGatewayId: "example-id",
    networkInterfaceId: "example-id",
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
| <code>routeTableId</code> | <code>string</code> | The ID of the route table for the route |
| <code>destinationCidrBlock?</code> | <code>string</code> | The IPv4 CIDR address block used for the destination match |
| <code>gatewayId?</code> | <code>string</code> | The ID of an internet gateway or virtual private gateway |
| <code>natGatewayId?</code> | <code>string</code> | The ID of a NAT gateway |
| <code>networkInterfaceId?</code> | <code>string</code> | The ID of a network interface |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.routeTables.createRoute(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[RouteTables.CreateRouteError](src/resources/route-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.routeTables.createRoute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, RouteTables.CreateRouteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createRouteTable(request: RouteTables.CreateRouteTableRequest, options?: RequestOptions): ApiPromise&lt;undefined, RouteTables.CreateRouteTableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.routeTables.createRouteTable({ vpcId: "example-id" });
} catch (err) {
  // TODO: Handle 'err' of type RouteTables.CreateRouteTableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.routeTables.createRouteTable({ vpcId: "example-id" }).asApiResult();
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
| <code>vpcId</code> | <code>string</code> | The ID of the VPC |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.routeTables.createRouteTable(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[RouteTables.CreateRouteTableError](src/resources/route-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.routeTables.createRouteTable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, RouteTables.CreateRouteTableError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeRouteTables(request?: RouteTables.DescribeRouteTablesRequest, options?: RequestOptions): ApiPromise&lt;undefined, RouteTables.DescribeRouteTablesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes one or more of your route tables. Each subnet in your VPC must be associated with a route table, which controls the routing for the subnet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.routeTables.describeRouteTables({
    routeTableId: ["example-id"],
    filter: ["example"],
    nextToken: "example",
  });
} catch (err) {
  // TODO: Handle 'err' of type RouteTables.DescribeRouteTablesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.routeTables
  .describeRouteTables({ routeTableId: ["example-id"], filter: ["example"], nextToken: "example" })
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
| <code>routeTableId?</code> | <code>string[]</code> | The IDs of the route tables to describe |
| <code>filter?</code> | <code>string[]</code> | Filters to apply to the results |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return |
| <code>nextToken?</code> | <code>string</code> | Token for the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.routeTables.describeRouteTables(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[RouteTables.DescribeRouteTablesError](src/resources/route-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.routeTables.describeRouteTables(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, RouteTables.DescribeRouteTablesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Subnets

> Source: [Subnets](src/resources/subnets.ts)

<details>
<summary><code>createSubnet(request: Subnets.CreateSubnetRequest, options?: RequestOptions): ApiPromise&lt;undefined, Subnets.CreateSubnetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a subnet in the specified VPC. The new subnet must have a CIDR block that is within the VPC CIDR block. You can optionally specify an Availability Zone in which to create the subnet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.subnets.createSubnet({
    vpcId: "example-id",
    cidrBlock: "example-id",
    availabilityZone: "example",
    ipv6CidrBlock: "example-id",
  });
} catch (err) {
  // TODO: Handle 'err' of type Subnets.CreateSubnetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subnets
  .createSubnet({
    vpcId: "example-id",
    cidrBlock: "example-id",
    availabilityZone: "example",
    ipv6CidrBlock: "example-id",
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
| <code>vpcId</code> | <code>string</code> | The ID of the VPC |
| <code>cidrBlock</code> | <code>string</code> | The IPv4 network range for the subnet in CIDR notation |
| <code>availabilityZone?</code> | <code>string</code> | The Availability Zone or Local Zone for the subnet |
| <code>ipv6CidrBlock?</code> | <code>string</code> | The IPv6 network range for the subnet in CIDR notation |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subnets.createSubnet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Subnets.CreateSubnetError](src/resources/subnets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subnets.createSubnet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Subnets.CreateSubnetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubnet(request: Subnets.DeleteSubnetRequest, options?: RequestOptions): ApiPromise&lt;undefined, Subnets.DeleteSubnetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.subnets.deleteSubnet({ subnetId: "example-id" });
} catch (err) {
  // TODO: Handle 'err' of type Subnets.DeleteSubnetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subnets.deleteSubnet({ subnetId: "example-id" }).asApiResult();
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
| <code>subnetId</code> | <code>string</code> | The ID of the subnet to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subnets.deleteSubnet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Subnets.DeleteSubnetError](src/resources/subnets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subnets.deleteSubnet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Subnets.DeleteSubnetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeSubnets(request?: Subnets.DescribeSubnetsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Subnets.DescribeSubnetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes one or more of your subnets. Returns information about the subnet including the CIDR block, Availability Zone, VPC, and state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.subnets.describeSubnets({
    subnetId: ["example-id"],
    filter: ["example"],
    nextToken: "example",
  });
} catch (err) {
  // TODO: Handle 'err' of type Subnets.DescribeSubnetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subnets
  .describeSubnets({ subnetId: ["example-id"], filter: ["example"], nextToken: "example" })
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
| <code>subnetId?</code> | <code>string[]</code> | The IDs of the subnets to describe |
| <code>filter?</code> | <code>string[]</code> | Filters to apply to the results |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return |
| <code>nextToken?</code> | <code>string</code> | Token for the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subnets.describeSubnets(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Subnets.DescribeSubnetsError](src/resources/subnets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subnets.describeSubnets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Subnets.DescribeSubnetsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VpCs

> Source: [VpCs](src/resources/vp-cs.ts)

<details>
<summary><code>createVpc(request: VpCs.CreateVpcRequest, options?: RequestOptions): ApiPromise&lt;undefined, VpCs.CreateVpcError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a VPC with the specified IPv4 CIDR block. The smallest VPC you can create uses a /28 netmask (16 IPv4 addresses), and the largest uses a /16 netmask (65,536 IPv4 addresses). After creating the VPC, you can add one or more subnets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vpCs.createVpc({
    cidrBlock: "example-id",
    amazonProvidedIpv6CidrBlock: true,
    instanceTenancy: InstanceTenancy1.Default,
  });
} catch (err) {
  // TODO: Handle 'err' of type VpCs.CreateVpcError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vpCs
  .createVpc({
    cidrBlock: "example-id",
    amazonProvidedIpv6CidrBlock: true,
    instanceTenancy: InstanceTenancy1.Default,
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
| <code>cidrBlock</code> | <code>string</code> | The IPv4 network range for the VPC in CIDR notation (e.g., 10.0.0.0/16) |
| <code>amazonProvidedIpv6CidrBlock?</code> | <code>boolean</code> | Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length |
| <code>instanceTenancy?</code> | <code>[InstanceTenancy1](src/models/instance-tenancy1.ts)</code> | The tenancy options for instances launched into the VPC |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vpCs.createVpc(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[VpCs.CreateVpcError](src/resources/vp-cs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vpCs.createVpc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, VpCs.CreateVpcError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVpc(request: VpCs.DeleteVpcRequest, options?: RequestOptions): ApiPromise&lt;undefined, VpCs.DeleteVpcError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the VPC before you can delete it. You must also delete all subnets associated with the VPC.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vpCs.deleteVpc({ vpcId: "example-id" });
} catch (err) {
  // TODO: Handle 'err' of type VpCs.DeleteVpcError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vpCs.deleteVpc({ vpcId: "example-id" }).asApiResult();
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
| <code>vpcId</code> | <code>string</code> | The ID of the VPC to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vpCs.deleteVpc(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[VpCs.DeleteVpcError](src/resources/vp-cs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vpCs.deleteVpc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, VpCs.DeleteVpcError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeVpcs(request?: VpCs.DescribeVpcsRequest, options?: RequestOptions): ApiPromise&lt;undefined, VpCs.DescribeVpcsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes one or more of your VPCs. Returns information about the VPC including the CIDR block, DHCP options set, state, and tags.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vpCs.describeVpcs({ vpcId: ["example-id"], filter: ["example"], nextToken: "example" });
} catch (err) {
  // TODO: Handle 'err' of type VpCs.DescribeVpcsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vpCs
  .describeVpcs({ vpcId: ["example-id"], filter: ["example"], nextToken: "example" })
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
| <code>vpcId?</code> | <code>string[]</code> | The IDs of the VPCs to describe |
| <code>filter?</code> | <code>string[]</code> | Filters to apply to the results |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return |
| <code>nextToken?</code> | <code>string</code> | Token for the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vpCs.describeVpcs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[VpCs.DescribeVpcsError](src/resources/vp-cs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vpCs.describeVpcs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, VpCs.DescribeVpcsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modifyVpcAttribute(request: VpCs.ModifyVpcAttributeRequest, options?: RequestOptions): ApiPromise&lt;undefined, VpCs.ModifyVpcAttributeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies the specified attribute of the specified VPC. You can modify the DNS resolution and DNS hostname attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vpCs.modifyVpcAttribute({
    vpcId: "example-id",
    enableDnsSupportValue: true,
    enableDnsHostnamesValue: true,
  });
} catch (err) {
  // TODO: Handle 'err' of type VpCs.ModifyVpcAttributeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vpCs
  .modifyVpcAttribute({ vpcId: "example-id", enableDnsSupportValue: true, enableDnsHostnamesValue: true })
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
| <code>vpcId</code> | <code>string</code> | The ID of the VPC |
| <code>enableDnsSupportValue?</code> | <code>boolean</code> | Indicates whether DNS resolution is supported for the VPC |
| <code>enableDnsHostnamesValue?</code> | <code>boolean</code> | Indicates whether instances launched in the VPC get DNS hostnames |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vpCs.modifyVpcAttribute(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[VpCs.ModifyVpcAttributeError](src/resources/vp-cs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vpCs.modifyVpcAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, VpCs.ModifyVpcAttributeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonVpcError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

