<!-- Generated file — do not edit; regenerated with the SDK. -->

# NetworkApi — operations

Accessor: `client.network_api` · Source: `bill/apis/network_api.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.network_api.accept_invitation

- **Route**: `POST /v3/network/invitation/accept`
- **Server**: `default`
- **Signature**: `def accept_invitation(body: AcceptInvitationRequestDto | AcceptInvitationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AcceptInvitationErrorBody]`
- **Error**: `AcceptInvitationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AcceptInvitationRequestDto` | `bill/models/accept_invitation_request_dto.py` |
| `AcceptInvitationRequestDtoDict` | `bill/models/accept_invitation_request_dto.py` |
| `AcceptInvitationErrorBody` | `bill/errors/accept_invitation_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.network_api.create_customer_invitation

- **Route**: `POST /v3/network/invitation/customer/{customerId}`
- **Server**: `default`
- **Signature**: `def create_customer_invitation(customer_id: str, body: CreateInvitationRequestDto | CreateInvitationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `body`
- **Params**: `customer_id` — path `customerId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateCustomerInvitationErrorBody]`
- **Error**: `CreateCustomerInvitationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateInvitationRequestDto` | `bill/models/create_invitation_request_dto.py` |
| `CreateInvitationRequestDtoDict` | `bill/models/create_invitation_request_dto.py` |
| `CreateCustomerInvitationErrorBody` | `bill/errors/create_customer_invitation_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.network_api.create_vendor_invitation

- **Route**: `POST /v3/network/invitation/vendor/{vendorId}`
- **Server**: `default`
- **Signature**: `def create_vendor_invitation(vendor_id: str, body: CreateInvitationRequestDto | CreateInvitationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`, `body`
- **Params**: `vendor_id` — path `vendorId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateVendorInvitationErrorBody]`
- **Error**: `CreateVendorInvitationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateInvitationRequestDto` | `bill/models/create_invitation_request_dto.py` |
| `CreateInvitationRequestDtoDict` | `bill/models/create_invitation_request_dto.py` |
| `CreateVendorInvitationErrorBody` | `bill/errors/create_vendor_invitation_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.network_api.delete_customer_invitation

- **Route**: `DELETE /v3/network/invitation/customer/{customerId}`
- **Server**: `default`
- **Signature**: `def delete_customer_invitation(customer_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCustomerInvitationErrorBody]`
- **Error**: `DeleteCustomerInvitationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCustomerInvitationErrorBody` | `bill/errors/delete_customer_invitation_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.network_api.delete_vendor_invitation

- **Route**: `DELETE /v3/network/invitation/vendor/{vendorId}`
- **Server**: `default`
- **Signature**: `def delete_vendor_invitation(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`
- **Params**: `vendor_id` — path `vendorId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteVendorInvitationErrorBody]`
- **Error**: `DeleteVendorInvitationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteVendorInvitationErrorBody` | `bill/errors/delete_vendor_invitation_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.network_api.get_customer_invitation

- **Route**: `GET /v3/network/invitation/customer/{customerId}`
- **Server**: `default`
- **Signature**: `def get_customer_invitation(customer_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `GetInvitationResponseDto`
- **Returns (raw)**: `ApiResult[GetInvitationResponseDto, GetCustomerInvitationErrorBody]`
- **Error**: `GetCustomerInvitationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetInvitationResponseDto` | `bill/models/get_invitation_response_dto.py` |
| `GetCustomerInvitationErrorBody` | `bill/errors/get_customer_invitation_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.network_api.get_vendor_invitation

- **Route**: `GET /v3/network/invitation/vendor/{vendorId}`
- **Server**: `default`
- **Signature**: `def get_vendor_invitation(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`
- **Params**: `vendor_id` — path `vendorId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `GetInvitationResponseDto`
- **Returns (raw)**: `ApiResult[GetInvitationResponseDto, GetVendorInvitationErrorBody]`
- **Error**: `GetVendorInvitationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetInvitationResponseDto` | `bill/models/get_invitation_response_dto.py` |
| `GetVendorInvitationErrorBody` | `bill/errors/get_vendor_invitation_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.network_api.invite_vendor_not_in_bill_network

- **Route**: `POST /v3/network/invitation/vendor/{vendorId}/email`
- **Server**: `default`
- **Signature**: `def invite_vendor_not_in_bill_network(vendor_id: str, body: InviteVendorNotInBillNetworkRequestDto | InviteVendorNotInBillNetworkRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`, `body`
- **Params**: `vendor_id` — path `vendorId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, InviteVendorNotInBillNetworkErrorBody]`
- **Error**: `InviteVendorNotInBillNetworkErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InviteVendorNotInBillNetworkRequestDto` | `bill/models/invite_vendor_not_in_bill_network_request_dto.py` |
| `InviteVendorNotInBillNetworkRequestDtoDict` | `bill/models/invite_vendor_not_in_bill_network_request_dto.py` |
| `InviteVendorNotInBillNetworkErrorBody` | `bill/errors/invite_vendor_not_in_bill_network_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.network_api.search

- **Route**: `GET /v3/network`
- **Server**: `default`
- **Signature**: `def search(name: str, *, scope: ScopeTypeOrStr | None = None, zip_or_postal_code: str | None = None, account_number: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — query · `scope` — query · `zip_or_postal_code` — query `zipOrPostalCode` · `account_number` — query `accountNumber` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `NetworkSearchResponseDto`
- **Returns (raw)**: `ApiResult[NetworkSearchResponseDto, SearchErrorBody]`
- **Error**: `SearchErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScopeTypeOrStr` | `bill/models/enums/scope_type.py` |
| `NetworkSearchResponseDto` | `bill/models/network_search_response_dto.py` |
| `SearchErrorBody` | `bill/errors/search_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

