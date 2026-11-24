<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkSubscriptions — operations

Accessor: `client.bulk_subscriptions` · Source: `beehiiv/apis/bulk_subscriptions.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bulk_subscriptions.create3

- **Route**: `POST /publications/{publicationId}/bulk_subscriptions`
- **Server**: `default`
- **Signature**: `def create3(publication_id: str, authorization: str, *, body: PublicationsBulkSubscriptionsRequest | PublicationsBulkSubscriptionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `BulkSubscriptionCreateResponse`
- **Returns (raw)**: `ApiResult[BulkSubscriptionCreateResponse, Create3ErrorBody]`
- **Error**: `Create3ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsBulkSubscriptionsRequest` | `beehiiv/models/publications_bulk_subscriptions_request.py` |
| `PublicationsBulkSubscriptionsRequestDict` | `beehiiv/models/publications_bulk_subscriptions_request.py` |
| `BulkSubscriptionCreateResponse` | `beehiiv/models/bulk_subscription_create_response.py` |
| `Create3ErrorBody` | `beehiiv/errors/create3_error.py` |
| `Error` | `beehiiv/models/error.py` |

