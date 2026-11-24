<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserAttributes — operations

Accessor: `client.user_attributes` · Source: `contentstack/apis/user_attributes.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.user_attributes.merge_user_attributes

- **Route**: `POST /user-attributes/actions/merge`
- **Server**: `default_contentstack_events_api`
- **Signature**: `def merge_user_attributes(x_project_uid: str, body: MergeUserAttributesRequest | MergeUserAttributesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`, `body`
- **Params**: `x_project_uid` — header `x-project-uid` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, MergeUserAttributesErrorBody]`
- **Error**: `MergeUserAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [400, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MergeUserAttributesRequest` | `contentstack/models/merge_user_attributes_request.py` |
| `MergeUserAttributesRequestDict` | `contentstack/models/merge_user_attributes_request.py` |
| `MergeUserAttributesErrorBody` | `contentstack/errors/merge_user_attributes_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.user_attributes.set_user_attributes

- **Route**: `PATCH /user-attributes`
- **Server**: `default_contentstack_events_api`
- **Signature**: `def set_user_attributes(x_project_uid: str, body: dict[str, Any], *, x_cs_personalize_user_uid: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`, `body`
- **Params**: `x_project_uid` — header `x-project-uid` · `x_cs_personalize_user_uid` — header `x-cs-personalize-user-uid` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SetUserAttributesErrorBody]`
- **Error**: `SetUserAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [400, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetUserAttributesErrorBody` | `contentstack/errors/set_user_attributes_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

