<!-- Generated file — do not edit; regenerated with the SDK. -->

# Replacements — operations

Accessor: `client.replacements` · Source: `instacart/apis/replacements.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.replacements.update_item_replacement

- **Route**: `PUT /v2/post_checkout/orders/{order_id}/items/{order_item_id}/replacement`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def update_item_replacement(order_id: str, order_item_id: str, body: ReplacementDecisionRequest | ReplacementDecisionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`, `order_item_id`, `body`
- **Params**: `order_id` — path · `order_item_id` — path · `body` — JSON body
- **Returns (parsed)**: `ReplacementResponse`
- **Returns (raw)**: `ApiResult[ReplacementResponse, UpdateItemReplacementErrorBody]`
- **Error**: `UpdateItemReplacementErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReplacementDecisionRequest` | `instacart/models/replacement_decision_request.py` |
| `ReplacementDecisionRequestDict` | `instacart/models/replacement_decision_request.py` |
| `ReplacementResponse` | `instacart/models/replacement_response.py` |
| `UpdateItemReplacementErrorBody` | `instacart/errors/update_item_replacement_error.py` |
| `Error` | `instacart/models/error.py` |

