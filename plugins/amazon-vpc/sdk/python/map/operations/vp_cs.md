<!-- Generated file — do not edit; regenerated with the SDK. -->

# VpCs — operations

Accessor: `client.vp_cs` · Source: `amazon_vpc/apis/vp_cs.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.vp_cs.create_vpc

- **Route**: `GET /?Action=CreateVpc`
- **Auth**: `sigv4_auth`
- **Signature**: `def create_vpc(cidr_block: str, *, amazon_provided_ipv6_cidr_block: bool | None = None, instance_tenancy: InstanceTenancy1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `cidr_block`
- **Params**: `cidr_block` — query `CidrBlock` · `amazon_provided_ipv6_cidr_block` — query `AmazonProvidedIpv6CidrBlock` · `instance_tenancy` — query `InstanceTenancy`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateVpcErrorBody]`
- **Error**: `CreateVpcErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `InstanceTenancy1OrStr` | `amazon_vpc/models/enums/instance_tenancy1.py` |
| `CreateVpcErrorBody` | `amazon_vpc/errors/create_vpc_error.py` |

### client.vp_cs.delete_vpc

- **Route**: `GET /?Action=DeleteVpc`
- **Auth**: `sigv4_auth`
- **Signature**: `def delete_vpc(vpc_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vpc_id`
- **Params**: `vpc_id` — query `VpcId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteVpcErrorBody]`
- **Error**: `DeleteVpcErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteVpcErrorBody` | `amazon_vpc/errors/delete_vpc_error.py` |

### client.vp_cs.describe_vpcs

- **Route**: `GET /?Action=DescribeVpcs`
- **Auth**: `sigv4_auth`
- **Signature**: `def describe_vpcs(*, vpc_id: list[str] | None = None, filter_: list[str] | None = None, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `vpc_id` — query `VpcId` · `filter_` — query `Filter` · `max_results` — query `MaxResults` · `next_token` — query `NextToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeVpcsErrorBody]`
- **Error**: `DescribeVpcsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeVpcsErrorBody` | `amazon_vpc/errors/describe_vpcs_error.py` |

### client.vp_cs.modify_vpc_attribute

- **Route**: `GET /?Action=ModifyVpcAttribute`
- **Auth**: `sigv4_auth`
- **Signature**: `def modify_vpc_attribute(vpc_id: str, *, enable_dns_support_value: bool | None = None, enable_dns_hostnames_value: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vpc_id`
- **Params**: `vpc_id` — query `VpcId` · `enable_dns_support_value` — query `EnableDnsSupport.Value` · `enable_dns_hostnames_value` — query `EnableDnsHostnames.Value`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ModifyVpcAttributeErrorBody]`
- **Error**: `ModifyVpcAttributeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `ModifyVpcAttributeErrorBody` | `amazon_vpc/errors/modify_vpc_attribute_error.py` |

