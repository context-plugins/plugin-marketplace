<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManifestApi — operations

Accessor: `client.manifest_api` · Source: `contentstack/apis/manifest_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.manifest_api.get_manifest

- **Route**: `GET /manifest`
- **Server**: `default_contentstack_events_api`
- **Signature**: `def get_manifest(x_project_uid: str, *, x_cs_personalize_user_uid: str | None = None, x_forwarded_for: str | None = None, user_agent: str | None = None, referer: str | None = None, x_page_url: str | None = None, x_live_attributes: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`
- **Params**: `x_project_uid` — header `x-project-uid` · `x_cs_personalize_user_uid` — header `x-cs-personalize-user-uid` · `x_forwarded_for` — header `x-forwarded-for` · `user_agent` — header `user-agent` · `referer` — header · `x_page_url` — header `x-page-url` · `x_live_attributes` — header `x-live-attributes`
- **Returns (parsed)**: `Manifest`
- **Returns (raw)**: `ApiResult[Manifest, GetManifestErrorBody]`
- **Error**: `GetManifestErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [400, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Manifest` | `contentstack/models/manifest.py` |
| `GetManifestErrorBody` | `contentstack/errors/get_manifest_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

