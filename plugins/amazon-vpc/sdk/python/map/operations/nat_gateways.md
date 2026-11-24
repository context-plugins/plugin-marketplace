<!-- Generated file — do not edit; regenerated with the SDK. -->

# NatGateways — operations

Accessor: `client.nat_gateways` · Source: `amazon_vpc/apis/nat_gateways.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.nat_gateways.create_nat_gateway

- **Route**: `GET /?Action=CreateNatGateway`
- **Auth**: `sigv4_auth`
- **Signature**: `def create_nat_gateway(subnet_id: str, *, allocation_id: str | None = None, connectivity_type: ConnectivityType1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `subnet_id`
- **Params**: `subnet_id` — query `SubnetId` · `allocation_id` — query `AllocationId` · `connectivity_type` — query `ConnectivityType`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateNatGatewayErrorBody]`
- **Error**: `CreateNatGatewayErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `ConnectivityType1OrStr` | `amazon_vpc/models/enums/connectivity_type1.py` |
| `CreateNatGatewayErrorBody` | `amazon_vpc/errors/create_nat_gateway_error.py` |

### client.nat_gateways.describe_nat_gateways

- **Route**: `GET /?Action=DescribeNatGateways`
- **Auth**: `sigv4_auth`
- **Signature**: `def describe_nat_gateways(*, nat_gateway_id: list[str] | None = None, filter_: list[str] | None = None, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `nat_gateway_id` — query `NatGatewayId` · `filter_` — query `Filter` · `max_results` — query `MaxResults` · `next_token` — query `NextToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeNatGatewaysErrorBody]`
- **Error**: `DescribeNatGatewaysErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeNatGatewaysErrorBody` | `amazon_vpc/errors/describe_nat_gateways_error.py` |

