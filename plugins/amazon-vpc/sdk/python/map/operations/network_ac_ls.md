<!-- Generated file — do not edit; regenerated with the SDK. -->

# NetworkAcLs — operations

Accessor: `client.network_ac_ls` · Source: `amazon_vpc/apis/network_ac_ls.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.network_ac_ls.create_network_acl

- **Route**: `GET /?Action=CreateNetworkAcl`
- **Auth**: `sigv4_auth`
- **Signature**: `def create_network_acl(vpc_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vpc_id`
- **Params**: `vpc_id` — query `VpcId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateNetworkAclErrorBody]`
- **Error**: `CreateNetworkAclErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateNetworkAclErrorBody` | `amazon_vpc/errors/create_network_acl_error.py` |

### client.network_ac_ls.describe_network_acls

- **Route**: `GET /?Action=DescribeNetworkAcls`
- **Auth**: `sigv4_auth`
- **Signature**: `def describe_network_acls(*, network_acl_id: list[str] | None = None, filter_: list[str] | None = None, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `network_acl_id` — query `NetworkAclId` · `filter_` — query `Filter` · `max_results` — query `MaxResults` · `next_token` — query `NextToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeNetworkAclsErrorBody]`
- **Error**: `DescribeNetworkAclsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeNetworkAclsErrorBody` | `amazon_vpc/errors/describe_network_acls_error.py` |

