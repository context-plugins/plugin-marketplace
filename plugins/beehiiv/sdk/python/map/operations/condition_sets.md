<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConditionSets — operations

Accessor: `client.condition_sets` · Source: `beehiiv/apis/condition_sets.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.condition_sets.index9

- **Route**: `GET /publications/{publicationId}/condition_sets`
- **Server**: `default`
- **Signature**: `def index9(publication_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, page: int | None = None, purpose: ConditionSetPurposeOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `limit` — query · `cursor` — query · `page` — query · `purpose` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `ConditionSetsListResponse`
- **Returns (raw)**: `ApiResult[ConditionSetsListResponse, Index9ErrorBody]`
- **Error**: `Index9ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConditionSetPurposeOrStr` | `beehiiv/models/enums/condition_set_purpose.py` |
| `ConditionSetsListResponse` | `beehiiv/models/condition_sets_list_response.py` |
| `Index9ErrorBody` | `beehiiv/errors/index9_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.condition_sets.show6

- **Route**: `GET /publications/{publicationId}/condition_sets/{conditionSetId}`
- **Server**: `default`
- **Signature**: `def show6(publication_id: str, condition_set_id: str, authorization: str, *, expand: list[ConditionSetShowExpandItemsOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `condition_set_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `condition_set_id` — path `conditionSetId` · `expand` — query `expand[]` · `authorization` — header `Authorization`
- **Returns (parsed)**: `ConditionSetShowResponse`
- **Returns (raw)**: `ApiResult[ConditionSetShowResponse, Show6ErrorBody]`
- **Error**: `Show6ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConditionSetShowExpandItemsOrStr` | `beehiiv/models/enums/condition_set_show_expand_items.py` |
| `ConditionSetShowResponse` | `beehiiv/models/condition_set_show_response.py` |
| `Show6ErrorBody` | `beehiiv/errors/show6_error.py` |
| `Error` | `beehiiv/models/error.py` |

