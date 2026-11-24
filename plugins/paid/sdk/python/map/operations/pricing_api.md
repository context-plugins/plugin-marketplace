<!-- Generated file — do not edit; regenerated with the SDK. -->

# PricingApi — operations

Accessor: `client.pricing_api` · Source: `paid/apis/pricing_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.pricing_api.get_pricing

- **Route**: `GET /pricing/{productAttributeId}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_pricing(product_attribute_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `product_attribute_id`, `authorization`
- **Params**: `product_attribute_id` — path `productAttributeId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `PricingResponse`
- **Returns (raw)**: `ApiResult[PricingResponse, GetPricingErrorBody]`
- **Error**: `GetPricingErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PricingResponse` | `paid/models/pricing_response.py` |
| `GetPricingErrorBody` | `paid/errors/get_pricing_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.pricing_api.list_pricing

- **Route**: `GET /pricing/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def list_pricing(product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `product_id`, `authorization`
- **Params**: `product_id` — query `productId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `PricingListResponse`
- **Returns (raw)**: `ApiResult[PricingListResponse, ListPricingErrorBody]`
- **Error**: `ListPricingErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PricingListResponse` | `paid/models/pricing_list_response.py` |
| `ListPricingErrorBody` | `paid/errors/list_pricing_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.pricing_api.update_pricing

- **Route**: `PUT /pricing/{productAttributeId}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def update_pricing(product_attribute_id: UUID, authorization: str, *, body: UpdatePricingRequest | UpdatePricingRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `product_attribute_id`, `authorization`
- **Params**: `product_attribute_id` — path `productAttributeId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `PricingResponse`
- **Returns (raw)**: `ApiResult[PricingResponse, UpdatePricingErrorBody]`
- **Error**: `UpdatePricingErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdatePricingRequest` | `paid/models/update_pricing_request.py` |
| `UpdatePricingRequestDict` | `paid/models/update_pricing_request.py` |
| `PricingResponse` | `paid/models/pricing_response.py` |
| `UpdatePricingErrorBody` | `paid/errors/update_pricing_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

