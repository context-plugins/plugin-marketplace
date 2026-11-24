<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subnets — operations

Accessor: `client.subnets` · Source: `amazon_vpc/apis/subnets.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.subnets.create_subnet

- **Route**: `GET /?Action=CreateSubnet`
- **Auth**: `sigv4_auth`
- **Signature**: `def create_subnet(vpc_id: str, cidr_block: str, *, availability_zone: str | None = None, ipv6_cidr_block: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vpc_id`, `cidr_block`
- **Params**: `vpc_id` — query `VpcId` · `cidr_block` — query `CidrBlock` · `availability_zone` — query `AvailabilityZone` · `ipv6_cidr_block` — query `Ipv6CidrBlock`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateSubnetErrorBody]`
- **Error**: `CreateSubnetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSubnetErrorBody` | `amazon_vpc/errors/create_subnet_error.py` |

### client.subnets.delete_subnet

- **Route**: `GET /?Action=DeleteSubnet`
- **Auth**: `sigv4_auth`
- **Signature**: `def delete_subnet(subnet_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `subnet_id`
- **Params**: `subnet_id` — query `SubnetId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSubnetErrorBody]`
- **Error**: `DeleteSubnetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSubnetErrorBody` | `amazon_vpc/errors/delete_subnet_error.py` |

### client.subnets.describe_subnets

- **Route**: `GET /?Action=DescribeSubnets`
- **Auth**: `sigv4_auth`
- **Signature**: `def describe_subnets(*, subnet_id: list[str] | None = None, filter_: list[str] | None = None, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `subnet_id` — query `SubnetId` · `filter_` — query `Filter` · `max_results` — query `MaxResults` · `next_token` — query `NextToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeSubnetsErrorBody]`
- **Error**: `DescribeSubnetsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeSubnetsErrorBody` | `amazon_vpc/errors/describe_subnets_error.py` |

