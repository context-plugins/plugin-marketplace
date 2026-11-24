# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AmazonVpcClient](amazon_vpc/client.py)

## InternetGateways

> Source: [InternetGateways](amazon_vpc/apis/internet_gateways.py)

<details>
<summary><code>def attach_internet_gateway(internet_gateway_id: str, vpc_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.internet_gateways.attach_internet_gateway("example-id", "example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AttachInternetGatewayErrorBody
```

**Async**

```python
try:
    await async_client.internet_gateways.attach_internet_gateway("example-id", "example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AttachInternetGatewayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>internet_gateway_id</code> | <code>str</code> | The ID of the internet gateway |
| <code>vpc_id</code> | <code>str</code> | The ID of the VPC |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[AttachInternetGatewayErrorBody](amazon_vpc/errors/attach_internet_gateway_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_internet_gateway(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.internet_gateways.create_internet_gateway()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInternetGatewayErrorBody
```

**Async**

```python
try:
    await async_client.internet_gateways.create_internet_gateway()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInternetGatewayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[CreateInternetGatewayErrorBody](amazon_vpc/errors/create_internet_gateway_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## NatGateways

> Source: [NatGateways](amazon_vpc/apis/nat_gateways.py)

<details>
<summary><code>def create_nat_gateway(subnet_id: str, *, allocation_id: str | None = None, connectivity_type: ConnectivityType1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.nat_gateways.create_nat_gateway(
        "example-id", allocation_id="example-id", connectivity_type=ConnectivityType1.PUBLIC
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateNatGatewayErrorBody
```

**Async**

```python
try:
    await async_client.nat_gateways.create_nat_gateway(
        "example-id", allocation_id="example-id", connectivity_type=ConnectivityType1.PUBLIC
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateNatGatewayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subnet_id</code> | <code>str</code> | The ID of the subnet in which to create the NAT gateway |
| <code>allocation_id</code> | <code>str \| None</code> | The allocation ID of an Elastic IP address to associate with the NAT gateway<br>**Default**: <code>None</code> |
| <code>connectivity_type</code> | <code>[ConnectivityType1OrStr](amazon_vpc/models/enums/connectivity_type1.py) \| None</code> | Indicates whether the NAT gateway supports public or private connectivity<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[CreateNatGatewayErrorBody](amazon_vpc/errors/create_nat_gateway_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_nat_gateways(*, nat_gateway_id: list[str] | None = None, filter_: list[str] | None = None, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.nat_gateways.describe_nat_gateways(nat_gateway_id=["example-id"], filter_=["example"], next_token="example")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeNatGatewaysErrorBody
```

**Async**

```python
try:
    await async_client.nat_gateways.describe_nat_gateways(
        nat_gateway_id=["example-id"], filter_=["example"], next_token="example"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeNatGatewaysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nat_gateway_id</code> | <code>list&#91;str&#93; \| None</code> | The IDs of the NAT gateways to describe<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>list&#91;str&#93; \| None</code> | Filters to apply to the results<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of results to return<br>**Default**: <code>None</code> |
| <code>next_token</code> | <code>str \| None</code> | Token for the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[DescribeNatGatewaysErrorBody](amazon_vpc/errors/describe_nat_gateways_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## NetworkAcLs

> Source: [NetworkAcLs](amazon_vpc/apis/network_ac_ls.py)

<details>
<summary><code>def create_network_acl(vpc_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.network_ac_ls.create_network_acl("example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateNetworkAclErrorBody
```

**Async**

```python
try:
    await async_client.network_ac_ls.create_network_acl("example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateNetworkAclErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vpc_id</code> | <code>str</code> | The ID of the VPC |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[CreateNetworkAclErrorBody](amazon_vpc/errors/create_network_acl_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_network_acls(*, network_acl_id: list[str] | None = None, filter_: list[str] | None = None, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.network_ac_ls.describe_network_acls(network_acl_id=["example-id"], filter_=["example"], next_token="example")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeNetworkAclsErrorBody
```

**Async**

```python
try:
    await async_client.network_ac_ls.describe_network_acls(
        network_acl_id=["example-id"], filter_=["example"], next_token="example"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeNetworkAclsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>network_acl_id</code> | <code>list&#91;str&#93; \| None</code> | The IDs of the network ACLs to describe<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>list&#91;str&#93; \| None</code> | Filters to apply to the results<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of results to return<br>**Default**: <code>None</code> |
| <code>next_token</code> | <code>str \| None</code> | Token for the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[DescribeNetworkAclsErrorBody](amazon_vpc/errors/describe_network_acls_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## RouteTables

> Source: [RouteTables](amazon_vpc/apis/route_tables.py)

<details>
<summary><code>def associate_route_table(route_table_id: str, *, subnet_id: str | None = None, gateway_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.route_tables.associate_route_table("example-id", subnet_id="example-id", gateway_id="example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateRouteTableErrorBody
```

**Async**

```python
try:
    await async_client.route_tables.associate_route_table("example-id", subnet_id="example-id", gateway_id="example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateRouteTableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>route_table_id</code> | <code>str</code> | The ID of the route table |
| <code>subnet_id</code> | <code>str \| None</code> | The ID of the subnet<br>**Default**: <code>None</code> |
| <code>gateway_id</code> | <code>str \| None</code> | The ID of the internet gateway or virtual private gateway<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[AssociateRouteTableErrorBody](amazon_vpc/errors/associate_route_table_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_route(route_table_id: str, *, destination_cidr_block: str | None = None, gateway_id: str | None = None, nat_gateway_id: str | None = None, network_interface_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.route_tables.create_route(
        "example-id",
        destination_cidr_block="example-id",
        gateway_id="example-id",
        nat_gateway_id="example-id",
        network_interface_id="example-id",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRouteErrorBody
```

**Async**

```python
try:
    await async_client.route_tables.create_route(
        "example-id",
        destination_cidr_block="example-id",
        gateway_id="example-id",
        nat_gateway_id="example-id",
        network_interface_id="example-id",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRouteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>route_table_id</code> | <code>str</code> | The ID of the route table for the route |
| <code>destination_cidr_block</code> | <code>str \| None</code> | The IPv4 CIDR address block used for the destination match<br>**Default**: <code>None</code> |
| <code>gateway_id</code> | <code>str \| None</code> | The ID of an internet gateway or virtual private gateway<br>**Default**: <code>None</code> |
| <code>nat_gateway_id</code> | <code>str \| None</code> | The ID of a NAT gateway<br>**Default**: <code>None</code> |
| <code>network_interface_id</code> | <code>str \| None</code> | The ID of a network interface<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[CreateRouteErrorBody](amazon_vpc/errors/create_route_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_route_table(vpc_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.route_tables.create_route_table("example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRouteTableErrorBody
```

**Async**

```python
try:
    await async_client.route_tables.create_route_table("example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRouteTableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vpc_id</code> | <code>str</code> | The ID of the VPC |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[CreateRouteTableErrorBody](amazon_vpc/errors/create_route_table_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_route_tables(*, route_table_id: list[str] | None = None, filter_: list[str] | None = None, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.route_tables.describe_route_tables(route_table_id=["example-id"], filter_=["example"], next_token="example")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeRouteTablesErrorBody
```

**Async**

```python
try:
    await async_client.route_tables.describe_route_tables(
        route_table_id=["example-id"], filter_=["example"], next_token="example"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeRouteTablesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>route_table_id</code> | <code>list&#91;str&#93; \| None</code> | The IDs of the route tables to describe<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>list&#91;str&#93; \| None</code> | Filters to apply to the results<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of results to return<br>**Default**: <code>None</code> |
| <code>next_token</code> | <code>str \| None</code> | Token for the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[DescribeRouteTablesErrorBody](amazon_vpc/errors/describe_route_tables_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Subnets

> Source: [Subnets](amazon_vpc/apis/subnets.py)

<details>
<summary><code>def create_subnet(vpc_id: str, cidr_block: str, *, availability_zone: str | None = None, ipv6_cidr_block: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.subnets.create_subnet("example-id", "example-id", availability_zone="example", ipv6_cidr_block="example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSubnetErrorBody
```

**Async**

```python
try:
    await async_client.subnets.create_subnet(
        "example-id", "example-id", availability_zone="example", ipv6_cidr_block="example-id"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSubnetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vpc_id</code> | <code>str</code> | The ID of the VPC |
| <code>cidr_block</code> | <code>str</code> | The IPv4 network range for the subnet in CIDR notation |
| <code>availability_zone</code> | <code>str \| None</code> | The Availability Zone or Local Zone for the subnet<br>**Default**: <code>None</code> |
| <code>ipv6_cidr_block</code> | <code>str \| None</code> | The IPv6 network range for the subnet in CIDR notation<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[CreateSubnetErrorBody](amazon_vpc/errors/create_subnet_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_subnet(subnet_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.subnets.delete_subnet("example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSubnetErrorBody
```

**Async**

```python
try:
    await async_client.subnets.delete_subnet("example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSubnetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subnet_id</code> | <code>str</code> | The ID of the subnet to delete |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[DeleteSubnetErrorBody](amazon_vpc/errors/delete_subnet_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_subnets(*, subnet_id: list[str] | None = None, filter_: list[str] | None = None, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.subnets.describe_subnets(subnet_id=["example-id"], filter_=["example"], next_token="example")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSubnetsErrorBody
```

**Async**

```python
try:
    await async_client.subnets.describe_subnets(subnet_id=["example-id"], filter_=["example"], next_token="example")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSubnetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subnet_id</code> | <code>list&#91;str&#93; \| None</code> | The IDs of the subnets to describe<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>list&#91;str&#93; \| None</code> | Filters to apply to the results<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of results to return<br>**Default**: <code>None</code> |
| <code>next_token</code> | <code>str \| None</code> | Token for the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[DescribeSubnetsErrorBody](amazon_vpc/errors/describe_subnets_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## VpCs

> Source: [VpCs](amazon_vpc/apis/vp_cs.py)

<details>
<summary><code>def create_vpc(cidr_block: str, *, amazon_provided_ipv6_cidr_block: bool | None = None, instance_tenancy: InstanceTenancy1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.vp_cs.create_vpc(
        "example-id", amazon_provided_ipv6_cidr_block=True, instance_tenancy=InstanceTenancy1.DEFAULT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVpcErrorBody
```

**Async**

```python
try:
    await async_client.vp_cs.create_vpc(
        "example-id", amazon_provided_ipv6_cidr_block=True, instance_tenancy=InstanceTenancy1.DEFAULT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVpcErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cidr_block</code> | <code>str</code> | The IPv4 network range for the VPC in CIDR notation (e.g., 10.0.0.0/16) |
| <code>amazon_provided_ipv6_cidr_block</code> | <code>bool \| None</code> | Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length<br>**Default**: <code>None</code> |
| <code>instance_tenancy</code> | <code>[InstanceTenancy1OrStr](amazon_vpc/models/enums/instance_tenancy1.py) \| None</code> | The tenancy options for instances launched into the VPC<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[CreateVpcErrorBody](amazon_vpc/errors/create_vpc_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_vpc(vpc_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.vp_cs.delete_vpc("example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteVpcErrorBody
```

**Async**

```python
try:
    await async_client.vp_cs.delete_vpc("example-id")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteVpcErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vpc_id</code> | <code>str</code> | The ID of the VPC to delete |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[DeleteVpcErrorBody](amazon_vpc/errors/delete_vpc_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_vpcs(*, vpc_id: list[str] | None = None, filter_: list[str] | None = None, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.vp_cs.describe_vpcs(vpc_id=["example-id"], filter_=["example"], next_token="example")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeVpcsErrorBody
```

**Async**

```python
try:
    await async_client.vp_cs.describe_vpcs(vpc_id=["example-id"], filter_=["example"], next_token="example")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeVpcsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vpc_id</code> | <code>list&#91;str&#93; \| None</code> | The IDs of the VPCs to describe<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>list&#91;str&#93; \| None</code> | Filters to apply to the results<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | Maximum number of results to return<br>**Default**: <code>None</code> |
| <code>next_token</code> | <code>str \| None</code> | Token for the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[DescribeVpcsErrorBody](amazon_vpc/errors/describe_vpcs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def modify_vpc_attribute(vpc_id: str, *, enable_dns_support_value: bool | None = None, enable_dns_hostnames_value: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.vp_cs.modify_vpc_attribute("example-id", enable_dns_support_value=True, enable_dns_hostnames_value=True)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModifyVpcAttributeErrorBody
```

**Async**

```python
try:
    await async_client.vp_cs.modify_vpc_attribute(
        "example-id", enable_dns_support_value=True, enable_dns_hostnames_value=True
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModifyVpcAttributeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vpc_id</code> | <code>str</code> | The ID of the VPC |
| <code>enable_dns_support_value</code> | <code>bool \| None</code> | Indicates whether DNS resolution is supported for the VPC<br>**Default**: <code>None</code> |
| <code>enable_dns_hostnames_value</code> | <code>bool \| None</code> | Indicates whether instances launched in the VPC get DNS hostnames<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_vpc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_vpc/core/exceptions.py)&#91;[ModifyVpcAttributeErrorBody](amazon_vpc/errors/modify_vpc_attribute_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](amazon_vpc/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_vpc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

