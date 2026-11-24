<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payees — operations

Accessor: `client.payees` · Source: `basiq/apis/payees.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.payees.get_payee_details

- **Route**: `GET /users/{userId}/payees/{payeeId}`
- **Auth**: `services_token`
- **Signature**: `def get_payee_details(user_id: UUID, payee_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `payee_id`
- **Params**: `user_id` — path `userId` · `payee_id` — path `payeeId`
- **Returns (parsed)**: `PayeeDetailsResponse`
- **Returns (raw)**: `ApiResult[PayeeDetailsResponse, GetPayeeDetailsErrorBody]`
- **Error**: `GetPayeeDetailsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorSchema` [400] · `UnauthorizedErrorSchema` [401] · `ForbiddenAccessError1` [403] · `NotFoundErrorSchema` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayeeDetailsResponse` | `basiq/models/payee_details_response.py` |
| `GetPayeeDetailsErrorBody` | `basiq/errors/get_payee_details_error.py` |
| `BadRequestErrorSchema` | `basiq/models/bad_request_error_schema.py` |
| `UnauthorizedErrorSchema` | `basiq/models/unauthorized_error_schema.py` |
| `ForbiddenAccessError1` | `basiq/models/forbidden_access_error1.py` |
| `NotFoundErrorSchema` | `basiq/models/not_found_error_schema.py` |

### client.payees.get_payees

- **Route**: `GET /users/{userId}/payees`
- **Auth**: `services_token`
- **Signature**: `def get_payees(user_id: UUID, *, limit: int | None = 25, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `limit` — query · `filter_` — query `filter`
- **Returns (parsed)**: `PayeesListResponse`
- **Returns (raw)**: `ApiResult[PayeesListResponse, GetPayeesErrorBody]`
- **Error**: `GetPayeesErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorSchema` [400] · `UnauthorizedErrorSchema` [401] · `ForbiddenAccessError1` [403] · `NotFoundErrorSchema` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayeesListResponse` | `basiq/models/payees_list_response.py` |
| `GetPayeesErrorBody` | `basiq/errors/get_payees_error.py` |
| `BadRequestErrorSchema` | `basiq/models/bad_request_error_schema.py` |
| `UnauthorizedErrorSchema` | `basiq/models/unauthorized_error_schema.py` |
| `ForbiddenAccessError1` | `basiq/models/forbidden_access_error1.py` |
| `NotFoundErrorSchema` | `basiq/models/not_found_error_schema.py` |

