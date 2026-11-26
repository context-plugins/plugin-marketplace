<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppPartnerConnectionApi — operations

Accessor: `client.app_partner_connection_api` · Source: `justtrack/apis/app_partner_connection_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.app_partner_connection_api.get_management_v1_app_by_app_id_connection_by_partner_id

- **Route**: `GET /management/v1/app/{appId}/connection/{partnerId}`
- **Auth**: `api_key_auth`
- **Server**: `default_management_app_partner_connection_api`
- **Signature**: `def get_management_v1_app_by_app_id_connection_by_partner_id(app_id: int, partner_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `app_id`, `partner_id`
- **Params**: `app_id` — path `appId` · `partner_id` — path `partnerId`
- **Returns (parsed)**: `AppPartnerConnection`
- **Returns (raw)**: `ApiResult[AppPartnerConnection, GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody]`
- **Error**: `GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `AppPartnerConnection` | `justtrack/models/app_partner_connection.py` |
| `GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody` | `justtrack/errors/get_management_v1_app_by_app_id_connection_by_partner_id_error.py` |
| `ErrorResponse` | `justtrack/models/error_response.py` |

### client.app_partner_connection_api.put_management_v1_app_by_app_id_connection_by_partner_id

- **Route**: `PUT /management/v1/app/{appId}/connection/{partnerId}`
- **Auth**: `api_key_auth`
- **Server**: `default_management_app_partner_connection_api`
- **Signature**: `def put_management_v1_app_by_app_id_connection_by_partner_id(app_id: int, partner_id: int, *, body: AppPartnerConnection | AppPartnerConnectionDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `app_id`, `partner_id`
- **Params**: `app_id` — path `appId` · `partner_id` — path `partnerId` · `body` — JSON body
- **Returns (parsed)**: `AppPartnerConnection`
- **Returns (raw)**: `ApiResult[AppPartnerConnection, PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody]`
- **Error**: `PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `AppPartnerConnection` | `justtrack/models/app_partner_connection.py` |
| `AppPartnerConnectionDict` | `justtrack/models/app_partner_connection.py` |
| `PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody` | `justtrack/errors/put_management_v1_app_by_app_id_connection_by_partner_id_error.py` |
| `ErrorResponse` | `justtrack/models/error_response.py` |

