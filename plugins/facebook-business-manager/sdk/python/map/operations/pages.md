<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pages — operations

Accessor: `client.pages` · Source: `facebook_business_manager/apis/pages.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.pages.get_page

- **Route**: `GET /{page_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_page(page_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_id`
- **Params**: `page_id` — path · `fields` — query
- **Returns (parsed)**: `Page`
- **Returns (raw)**: `ApiResult[Page, GetPageErrorBody]`
- **Error**: `GetPageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Page` | `facebook_business_manager/models/page.py` |
| `GetPageErrorBody` | `facebook_business_manager/errors/get_page_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.pages.subscribe_page_app

- **Route**: `POST /{page_id}/subscribed_apps`
- **Auth**: `bearer_auth`
- **Signature**: `def subscribe_page_app(page_id: str, body: SubscribedAppsRequest | SubscribedAppsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_id`, `body`
- **Params**: `page_id` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi`
- **Returns (raw)**: `ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, SubscribePageAppErrorBody]`
- **Error**: `SubscribePageAppErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscribedAppsRequest` | `facebook_business_manager/models/subscribed_apps_request.py` |
| `SubscribedAppsRequestDict` | `facebook_business_manager/models/subscribed_apps_request.py` |
| `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi` | `facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py` |
| `SubscribePageAppErrorBody` | `facebook_business_manager/errors/subscribe_page_app_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

