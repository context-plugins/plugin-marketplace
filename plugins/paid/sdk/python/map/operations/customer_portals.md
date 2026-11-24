<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerPortals — operations

Accessor: `client.customer_portals` · Source: `paid/apis/customer_portals.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.customer_portals.create_customer_portal

- **Route**: `POST /customer-portals/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def create_customer_portal(authorization: str, *, body: CreateCustomerPortalRequest | CreateCustomerPortalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomerPortal`
- **Returns (raw)**: `ApiResult[CustomerPortal, CreateCustomerPortalErrorBody]`
- **Error**: `CreateCustomerPortalErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCustomerPortalRequest` | `paid/models/create_customer_portal_request.py` |
| `CreateCustomerPortalRequestDict` | `paid/models/create_customer_portal_request.py` |
| `CustomerPortal` | `paid/models/customer_portal.py` |
| `CreateCustomerPortalErrorBody` | `paid/errors/create_customer_portal_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

