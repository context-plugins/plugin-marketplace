# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AmazonVpcClient](src/AmazonVpc/AmazonVpcClient.cs)

## InternetGateways

> Source: [InternetGateways](src/AmazonVpc/Api/InternetGateways.cs)

<details>
<summary><code>Task AttachInternetGateway(AttachInternetGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the internet and the VPC.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.InternetGateways.AttachInternetGateway(new AttachInternetGatewayRequest
    {
        InternetGatewayId = "example-id",
        VpcId = "example-id",
    });
}
catch (ApiException<AttachInternetGatewayError> ex)
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

<code>[AttachInternetGatewayRequest](src/AmazonVpc/Requests/InternetGateways/AttachInternetGatewayRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[AttachInternetGatewayError](src/AmazonVpc/Errors/AttachInternetGatewayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateInternetGateway(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an internet gateway for use with a VPC. After creating the internet gateway, you attach it to a VPC using AttachInternetGateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.InternetGateways.CreateInternetGateway();
}
catch (ApiException<CreateInternetGatewayError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[CreateInternetGatewayError](src/AmazonVpc/Errors/CreateInternetGatewayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## NatGateways

> Source: [NatGateways](src/AmazonVpc/Api/NatGateways.cs)

<details>
<summary><code>Task CreateNatGateway(CreateNatGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a NAT gateway in the specified subnet. A NAT gateway enables instances in a private subnet to connect to the internet or other AWS services, but prevents the internet from initiating a connection with those instances.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.NatGateways.CreateNatGateway(new CreateNatGatewayRequest
    {
        SubnetId = "example-id",
        AllocationId = "example-id",
        ConnectivityType = ConnectivityType1.Public,
    });
}
catch (ApiException<CreateNatGatewayError> ex)
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

<code>[CreateNatGatewayRequest](src/AmazonVpc/Requests/NatGateways/CreateNatGatewayRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[CreateNatGatewayError](src/AmazonVpc/Errors/CreateNatGatewayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeNatGateways(DescribeNatGatewaysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes one or more of your NAT gateways. Returns information about the NAT gateway including its state, subnet, and associated Elastic IP address.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.NatGateways.DescribeNatGateways(new DescribeNatGatewaysRequest
    {
        NatGatewayId = ["example-id"],
        Filter = ["example"],
        NextToken = "example",
    });
}
catch (ApiException<DescribeNatGatewaysError> ex)
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

<code>[DescribeNatGatewaysRequest](src/AmazonVpc/Requests/NatGateways/DescribeNatGatewaysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[DescribeNatGatewaysError](src/AmazonVpc/Errors/DescribeNatGatewaysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## NetworkAcLs

> Source: [NetworkAcLs](src/AmazonVpc/Api/NetworkAcLs.cs)

<details>
<summary><code>Task CreateNetworkAcl(CreateNetworkAclRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a network ACL in a VPC. Network ACLs provide an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.NetworkAcLs.CreateNetworkAcl(new CreateNetworkAclRequest { VpcId = "example-id" });
}
catch (ApiException<CreateNetworkAclError> ex)
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

<code>[CreateNetworkAclRequest](src/AmazonVpc/Requests/NetworkAcLs/CreateNetworkAclRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[CreateNetworkAclError](src/AmazonVpc/Errors/CreateNetworkAclError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeNetworkAcls(DescribeNetworkAclsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes one or more of your network ACLs. A network ACL is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.NetworkAcLs.DescribeNetworkAcls(new DescribeNetworkAclsRequest
    {
        NetworkAclId = ["example-id"],
        Filter = ["example"],
        NextToken = "example",
    });
}
catch (ApiException<DescribeNetworkAclsError> ex)
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

<code>[DescribeNetworkAclsRequest](src/AmazonVpc/Requests/NetworkAcLs/DescribeNetworkAclsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[DescribeNetworkAclsError](src/AmazonVpc/Errors/DescribeNetworkAclsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RouteTables

> Source: [RouteTables](src/AmazonVpc/Api/RouteTables.cs)

<details>
<summary><code>Task AssociateRouteTable(AssociateRouteTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates a subnet or gateway with a route table. The subnet and route table must be in the same VPC. This association causes traffic from the subnet to be routed according to the routes in the route table.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.RouteTables.AssociateRouteTable(new AssociateRouteTableRequest
    {
        RouteTableId = "example-id",
        SubnetId = "example-id",
        GatewayId = "example-id",
    });
}
catch (ApiException<AssociateRouteTableError> ex)
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

<code>[AssociateRouteTableRequest](src/AmazonVpc/Requests/RouteTables/AssociateRouteTableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[AssociateRouteTableError](src/AmazonVpc/Errors/AssociateRouteTableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateRoute(CreateRouteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a route in a route table within a VPC. You must specify either a destination CIDR block or a prefix list ID. You must also specify exactly one of the targets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.RouteTables.CreateRoute(new CreateRouteRequest
    {
        RouteTableId = "example-id",
        DestinationCidrBlock = "example-id",
        GatewayId = "example-id",
        NatGatewayId = "example-id",
        NetworkInterfaceId = "example-id",
    });
}
catch (ApiException<CreateRouteError> ex)
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

<code>[CreateRouteRequest](src/AmazonVpc/Requests/RouteTables/CreateRouteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[CreateRouteError](src/AmazonVpc/Errors/CreateRouteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateRouteTable(CreateRouteTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.RouteTables.CreateRouteTable(new CreateRouteTableRequest { VpcId = "example-id" });
}
catch (ApiException<CreateRouteTableError> ex)
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

<code>[CreateRouteTableRequest](src/AmazonVpc/Requests/RouteTables/CreateRouteTableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[CreateRouteTableError](src/AmazonVpc/Errors/CreateRouteTableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeRouteTables(DescribeRouteTablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes one or more of your route tables. Each subnet in your VPC must be associated with a route table, which controls the routing for the subnet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.RouteTables.DescribeRouteTables(new DescribeRouteTablesRequest
    {
        RouteTableId = ["example-id"],
        Filter = ["example"],
        NextToken = "example",
    });
}
catch (ApiException<DescribeRouteTablesError> ex)
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

<code>[DescribeRouteTablesRequest](src/AmazonVpc/Requests/RouteTables/DescribeRouteTablesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[DescribeRouteTablesError](src/AmazonVpc/Errors/DescribeRouteTablesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Subnets

> Source: [Subnets](src/AmazonVpc/Api/Subnets.cs)

<details>
<summary><code>Task CreateSubnet(CreateSubnetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a subnet in the specified VPC. The new subnet must have a CIDR block that is within the VPC CIDR block. You can optionally specify an Availability Zone in which to create the subnet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Subnets.CreateSubnet(new CreateSubnetRequest
    {
        VpcId = "example-id",
        CidrBlock = "example-id",
        AvailabilityZone = "example",
        Ipv6CidrBlock = "example-id",
    });
}
catch (ApiException<CreateSubnetError> ex)
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

<code>[CreateSubnetRequest](src/AmazonVpc/Requests/Subnets/CreateSubnetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[CreateSubnetError](src/AmazonVpc/Errors/CreateSubnetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSubnet(DeleteSubnetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Subnets.DeleteSubnet(new DeleteSubnetRequest { SubnetId = "example-id" });
}
catch (ApiException<DeleteSubnetError> ex)
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

<code>[DeleteSubnetRequest](src/AmazonVpc/Requests/Subnets/DeleteSubnetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[DeleteSubnetError](src/AmazonVpc/Errors/DeleteSubnetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeSubnets(DescribeSubnetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes one or more of your subnets. Returns information about the subnet including the CIDR block, Availability Zone, VPC, and state.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Subnets.DescribeSubnets(new DescribeSubnetsRequest
    {
        SubnetId = ["example-id"],
        Filter = ["example"],
        NextToken = "example",
    });
}
catch (ApiException<DescribeSubnetsError> ex)
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

<code>[DescribeSubnetsRequest](src/AmazonVpc/Requests/Subnets/DescribeSubnetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[DescribeSubnetsError](src/AmazonVpc/Errors/DescribeSubnetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VpCs

> Source: [VpCs](src/AmazonVpc/Api/VpCs.cs)

<details>
<summary><code>Task CreateVpc(CreateVpcRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a VPC with the specified IPv4 CIDR block. The smallest VPC you can create uses a /28 netmask (16 IPv4 addresses), and the largest uses a /16 netmask (65,536 IPv4 addresses). After creating the VPC, you can add one or more subnets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.VpCs.CreateVpc(new CreateVpcRequest
    {
        CidrBlock = "example-id",
        AmazonProvidedIpv6CidrBlock = true,
        InstanceTenancy = InstanceTenancy1.Default,
    });
}
catch (ApiException<CreateVpcError> ex)
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

<code>[CreateVpcRequest](src/AmazonVpc/Requests/VpCs/CreateVpcRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[CreateVpcError](src/AmazonVpc/Errors/CreateVpcError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteVpc(DeleteVpcRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the VPC before you can delete it. You must also delete all subnets associated with the VPC.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.VpCs.DeleteVpc(new DeleteVpcRequest { VpcId = "example-id" });
}
catch (ApiException<DeleteVpcError> ex)
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

<code>[DeleteVpcRequest](src/AmazonVpc/Requests/VpCs/DeleteVpcRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[DeleteVpcError](src/AmazonVpc/Errors/DeleteVpcError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeVpcs(DescribeVpcsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes one or more of your VPCs. Returns information about the VPC including the CIDR block, DHCP options set, state, and tags.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.VpCs.DescribeVpcs(new DescribeVpcsRequest
    {
        VpcId = ["example-id"],
        Filter = ["example"],
        NextToken = "example",
    });
}
catch (ApiException<DescribeVpcsError> ex)
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

<code>[DescribeVpcsRequest](src/AmazonVpc/Requests/VpCs/DescribeVpcsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[DescribeVpcsError](src/AmazonVpc/Errors/DescribeVpcsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ModifyVpcAttribute(ModifyVpcAttributeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies the specified attribute of the specified VPC. You can modify the DNS resolution and DNS hostname attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.VpCs.ModifyVpcAttribute(new ModifyVpcAttributeRequest
    {
        VpcId = "example-id",
        EnableDnsSupportValue = true,
        EnableDnsHostnamesValue = true,
    });
}
catch (ApiException<ModifyVpcAttributeError> ex)
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

<code>[ModifyVpcAttributeRequest](src/AmazonVpc/Requests/VpCs/ModifyVpcAttributeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonVpc/Core/Exceptions/ApiException.cs)&lt;[ModifyVpcAttributeError](src/AmazonVpc/Errors/ModifyVpcAttributeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

