<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apps — operations

Accessor: `client.apps` · Source: `applike/apis/apps.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.apps.post_management_v1_app

- **Route**: `POST /management/v1/app`
- **Auth**: `api_key_auth`
- **Server**: `default_management_app_partner_connection_api`
- **Signature**: `def post_management_v1_app(*, body: CreateAppRequest | CreateAppRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AppOutput`
- **Returns (raw)**: `ApiResult[AppOutput, PostManagementV1AppErrorBody]`
- **Error**: `PostManagementV1AppErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateAppRequest` | `applike/models/create_app_request.py` |
| `CreateAppRequestDict` | `applike/models/create_app_request.py` |
| `AppOutput` | `applike/models/app_output.py` |
| `PostManagementV1AppErrorBody` | `applike/errors/post_management_v1_app_error.py` |
| `ErrorResponse` | `applike/models/error_response.py` |

### client.apps.post_management_v1_apps

- **Route**: `POST /management/v1/apps`
- **Auth**: `api_key_auth`
- **Server**: `default_management_app_partner_connection_api`
- **Signature**: `def post_management_v1_apps(*, body: ListAppsRequest | ListAppsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListAppsResponse`
- **Returns (raw)**: `ApiResult[ListAppsResponse, PostManagementV1AppsErrorBody]`
- **Error**: `PostManagementV1AppsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `ListAppsRequest` | `applike/models/list_apps_request.py` |
| `ListAppsRequestDict` | `applike/models/list_apps_request.py` |
| `ListAppsResponse` | `applike/models/list_apps_response.py` |
| `PostManagementV1AppsErrorBody` | `applike/errors/post_management_v1_apps_error.py` |
| `ErrorResponse` | `applike/models/error_response.py` |

