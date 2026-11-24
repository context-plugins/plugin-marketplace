<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vendors — operations

Accessor: `client.vendors` · Source: `microsoft_dynamics_nav/apis/vendors.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.vendors.create_vendor

- **Route**: `POST /companies({company_id})/vendors`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_vendor(company_id: UUID, body: VendorCreate | VendorCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `body`
- **Params**: `company_id` — path · `body` — JSON body
- **Returns (parsed)**: `Vendor`
- **Returns (raw)**: `ApiResult[Vendor, CreateVendorErrorBody]`
- **Error**: `CreateVendorErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorCreate` | `microsoft_dynamics_nav/models/vendor_create.py` |
| `VendorCreateDict` | `microsoft_dynamics_nav/models/vendor_create.py` |
| `Vendor` | `microsoft_dynamics_nav/models/vendor.py` |
| `CreateVendorErrorBody` | `microsoft_dynamics_nav/errors/create_vendor_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.vendors.delete_vendor

- **Route**: `DELETE /companies({company_id})/vendors({vendor_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def delete_vendor(company_id: UUID, vendor_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `vendor_id`
- **Params**: `company_id` — path · `vendor_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteVendorErrorBody]`
- **Error**: `DeleteVendorErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteVendorErrorBody` | `microsoft_dynamics_nav/errors/delete_vendor_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.vendors.get_vendor

- **Route**: `GET /companies({company_id})/vendors({vendor_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_vendor(company_id: UUID, vendor_id: UUID, *, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `vendor_id`
- **Params**: `company_id` — path · `vendor_id` — path · `select` — query `$select`
- **Returns (parsed)**: `Vendor`
- **Returns (raw)**: `ApiResult[Vendor, GetVendorErrorBody]`
- **Error**: `GetVendorErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Vendor` | `microsoft_dynamics_nav/models/vendor.py` |
| `GetVendorErrorBody` | `microsoft_dynamics_nav/errors/get_vendor_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.vendors.list_vendors

- **Route**: `GET /companies({company_id})/vendors`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_vendors(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `orderby` — query `$orderby` · `select` — query `$select`
- **Returns (parsed)**: `CompaniesApiVendorsResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiVendorsResponse, ListVendorsErrorBody]`
- **Error**: `ListVendorsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiVendorsResponse` | `microsoft_dynamics_nav/models/companies_api_vendors_response.py` |
| `ListVendorsErrorBody` | `microsoft_dynamics_nav/errors/list_vendors_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.vendors.update_vendor

- **Route**: `PATCH /companies({company_id})/vendors({vendor_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def update_vendor(company_id: UUID, vendor_id: UUID, if_match: str, body: VendorUpdate | VendorUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `vendor_id`, `if_match`, `body`
- **Params**: `company_id` — path · `vendor_id` — path · `if_match` — header `If-Match` · `body` — JSON body
- **Returns (parsed)**: `Vendor`
- **Returns (raw)**: `ApiResult[Vendor, UpdateVendorErrorBody]`
- **Error**: `UpdateVendorErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorUpdate` | `microsoft_dynamics_nav/models/vendor_update.py` |
| `VendorUpdateDict` | `microsoft_dynamics_nav/models/vendor_update.py` |
| `Vendor` | `microsoft_dynamics_nav/models/vendor.py` |
| `UpdateVendorErrorBody` | `microsoft_dynamics_nav/errors/update_vendor_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

