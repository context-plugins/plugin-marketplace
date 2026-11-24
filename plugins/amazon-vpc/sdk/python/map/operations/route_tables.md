<!-- Generated file — do not edit; regenerated with the SDK. -->

# RouteTables — operations

Accessor: `client.route_tables` · Source: `amazon_vpc/apis/route_tables.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.route_tables.associate_route_table

- **Route**: `GET /?Action=AssociateRouteTable`
- **Auth**: `sigv4_auth`
- **Signature**: `def associate_route_table(route_table_id: str, *, subnet_id: str | None = None, gateway_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `route_table_id`
- **Params**: `route_table_id` — query `RouteTableId` · `subnet_id` — query `SubnetId` · `gateway_id` — query `GatewayId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssociateRouteTableErrorBody]`
- **Error**: `AssociateRouteTableErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `AssociateRouteTableErrorBody` | `amazon_vpc/errors/associate_route_table_error.py` |

### client.route_tables.create_route

- **Route**: `GET /?Action=CreateRoute`
- **Auth**: `sigv4_auth`
- **Signature**: `def create_route(route_table_id: str, *, destination_cidr_block: str | None = None, gateway_id: str | None = None, nat_gateway_id: str | None = None, network_interface_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `route_table_id`
- **Params**: `route_table_id` — query `RouteTableId` · `destination_cidr_block` — query `DestinationCidrBlock` · `gateway_id` — query `GatewayId` · `nat_gateway_id` — query `NatGatewayId` · `network_interface_id` — query `NetworkInterfaceId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateRouteErrorBody]`
- **Error**: `CreateRouteErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateRouteErrorBody` | `amazon_vpc/errors/create_route_error.py` |

### client.route_tables.create_route_table

- **Route**: `GET /?Action=CreateRouteTable`
- **Auth**: `sigv4_auth`
- **Signature**: `def create_route_table(vpc_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vpc_id`
- **Params**: `vpc_id` — query `VpcId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateRouteTableErrorBody]`
- **Error**: `CreateRouteTableErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateRouteTableErrorBody` | `amazon_vpc/errors/create_route_table_error.py` |

### client.route_tables.describe_route_tables

- **Route**: `GET /?Action=DescribeRouteTables`
- **Auth**: `sigv4_auth`
- **Signature**: `def describe_route_tables(*, route_table_id: list[str] | None = None, filter_: list[str] | None = None, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `route_table_id` — query `RouteTableId` · `filter_` — query `Filter` · `max_results` — query `MaxResults` · `next_token` — query `NextToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeRouteTablesErrorBody]`
- **Error**: `DescribeRouteTablesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeRouteTablesErrorBody` | `amazon_vpc/errors/describe_route_tables_error.py` |

