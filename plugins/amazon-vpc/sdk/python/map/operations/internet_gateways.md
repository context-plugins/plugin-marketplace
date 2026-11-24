<!-- Generated file — do not edit; regenerated with the SDK. -->

# InternetGateways — operations

Accessor: `client.internet_gateways` · Source: `amazon_vpc/apis/internet_gateways.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.internet_gateways.attach_internet_gateway

- **Route**: `GET /?Action=AttachInternetGateway`
- **Auth**: `sigv4_auth`
- **Signature**: `def attach_internet_gateway(internet_gateway_id: str, vpc_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `internet_gateway_id`, `vpc_id`
- **Params**: `internet_gateway_id` — query `InternetGatewayId` · `vpc_id` — query `VpcId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AttachInternetGatewayErrorBody]`
- **Error**: `AttachInternetGatewayErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `AttachInternetGatewayErrorBody` | `amazon_vpc/errors/attach_internet_gateway_error.py` |

### client.internet_gateways.create_internet_gateway

- **Route**: `GET /?Action=CreateInternetGateway`
- **Auth**: `sigv4_auth`
- **Signature**: `def create_internet_gateway(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateInternetGatewayErrorBody]`
- **Error**: `CreateInternetGatewayErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateInternetGatewayErrorBody` | `amazon_vpc/errors/create_internet_gateway_error.py` |

