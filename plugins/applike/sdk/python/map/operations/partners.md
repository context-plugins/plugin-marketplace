<!-- Generated file — do not edit; regenerated with the SDK. -->

# Partners — operations

Accessor: `client.partners` · Source: `applike/apis/partners.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.partners.post_management_v1_partners

- **Route**: `POST /management/v1/partners`
- **Auth**: `api_key_auth`
- **Server**: `default_management_app_partner_connection_api`
- **Signature**: `def post_management_v1_partners(*, body: ListPartnersRequest | ListPartnersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListPartnersResponse`
- **Returns (raw)**: `ApiResult[ListPartnersResponse, PostManagementV1PartnersErrorBody]`
- **Error**: `PostManagementV1PartnersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `ListPartnersRequest` | `applike/models/list_partners_request.py` |
| `ListPartnersRequestDict` | `applike/models/list_partners_request.py` |
| `ListPartnersResponse` | `applike/models/list_partners_response.py` |
| `PostManagementV1PartnersErrorBody` | `applike/errors/post_management_v1_partners_error.py` |
| `ErrorResponse` | `applike/models/error_response.py` |

