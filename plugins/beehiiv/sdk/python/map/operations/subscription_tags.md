<!-- Generated file — do not edit; regenerated with the SDK. -->

# SubscriptionTags — operations

Accessor: `client.subscription_tags` · Source: `beehiiv/apis/subscription_tags.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.subscription_tags.create10

- **Route**: `POST /publications/{publicationId}/subscriptions/{subscriptionId}/tags`
- **Server**: `default`
- **Signature**: `def create10(publication_id: str, subscription_id: str, authorization: str, *, body: PublicationsSubscriptionsTagsRequest | PublicationsSubscriptionsTagsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `subscription_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `subscription_id` — path `subscriptionId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `SubscriptionTagsCreateResponse`
- **Returns (raw)**: `ApiResult[SubscriptionTagsCreateResponse, Create10ErrorBody]`
- **Error**: `Create10ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsSubscriptionsTagsRequest` | `beehiiv/models/publications_subscriptions_tags_request.py` |
| `PublicationsSubscriptionsTagsRequestDict` | `beehiiv/models/publications_subscriptions_tags_request.py` |
| `SubscriptionTagsCreateResponse` | `beehiiv/models/subscription_tags_create_response.py` |
| `Create10ErrorBody` | `beehiiv/errors/create10_error.py` |
| `Error` | `beehiiv/models/error.py` |

