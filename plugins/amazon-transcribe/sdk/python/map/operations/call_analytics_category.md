<!-- Generated file — do not edit; regenerated with the SDK. -->

# CallAnalyticsCategory — operations

Accessor: `client.call_analytics_category` · Source: `amazon_transcribe/apis/call_analytics_category.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.call_analytics_category.create_call_analytics_category

- **Route**: `POST /#CreateCallAnalyticsCategory`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def create_call_analytics_category(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateCallAnalyticsCategoryErrorBody]`
- **Error**: `CreateCallAnalyticsCategoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `amazon_transcribe/models/enums/x_amz_target.py` |
| `CreateCallAnalyticsCategoryErrorBody` | `amazon_transcribe/errors/create_call_analytics_category_error.py` |

### client.call_analytics_category.delete_call_analytics_category

- **Route**: `POST /#DeleteCallAnalyticsCategory`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_call_analytics_category(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCallAnalyticsCategoryErrorBody]`
- **Error**: `DeleteCallAnalyticsCategoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `amazon_transcribe/models/enums/x_amz_target1.py` |
| `DeleteCallAnalyticsCategoryErrorBody` | `amazon_transcribe/errors/delete_call_analytics_category_error.py` |

### client.call_analytics_category.get_call_analytics_category

- **Route**: `POST /#GetCallAnalyticsCategory`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_call_analytics_category(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetCallAnalyticsCategoryErrorBody]`
- **Error**: `GetCallAnalyticsCategoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `amazon_transcribe/models/enums/x_amz_target2.py` |
| `GetCallAnalyticsCategoryErrorBody` | `amazon_transcribe/errors/get_call_analytics_category_error.py` |

### client.call_analytics_category.list_call_analytics_categories

- **Route**: `POST /#ListCallAnalyticsCategories`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def list_call_analytics_categories(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListCallAnalyticsCategoriesErrorBody]`
- **Error**: `ListCallAnalyticsCategoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `amazon_transcribe/models/enums/x_amz_target3.py` |
| `ListCallAnalyticsCategoriesErrorBody` | `amazon_transcribe/errors/list_call_analytics_categories_error.py` |

### client.call_analytics_category.update_call_analytics_category

- **Route**: `POST /#UpdateCallAnalyticsCategory`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def update_call_analytics_category(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateCallAnalyticsCategoryErrorBody]`
- **Error**: `UpdateCallAnalyticsCategoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `amazon_transcribe/models/enums/x_amz_target4.py` |
| `UpdateCallAnalyticsCategoryErrorBody` | `amazon_transcribe/errors/update_call_analytics_category_error.py` |

