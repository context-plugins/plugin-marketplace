<!-- Generated file — do not edit; regenerated with the SDK. -->

# NewsletterListSubscriptions — operations

Accessor: `client.newsletter_list_subscriptions` · Source: `beehiiv/apis/newsletter_list_subscriptions.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.newsletter_list_subscriptions.create6

- **Route**: `POST /publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions`
- **Server**: `default`
- **Signature**: `def create6(publication_id: str, newsletter_list_id: str, authorization: str, *, body: PublicationsNewsletterListsSubscriptionsRequest | PublicationsNewsletterListsSubscriptionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `newsletter_list_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `newsletter_list_id` — path `newsletterListId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `NewsletterListSubscriptionResponse`
- **Returns (raw)**: `ApiResult[NewsletterListSubscriptionResponse, Create6ErrorBody]`
- **Error**: `Create6ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsNewsletterListsSubscriptionsRequest` | `beehiiv/models/publications_newsletter_lists_subscriptions_request.py` |
| `PublicationsNewsletterListsSubscriptionsRequestDict` | `beehiiv/models/publications_newsletter_lists_subscriptions_request.py` |
| `NewsletterListSubscriptionResponse` | `beehiiv/models/newsletter_list_subscription_response.py` |
| `Create6ErrorBody` | `beehiiv/errors/create6_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.newsletter_list_subscriptions.index13

- **Route**: `GET /publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions`
- **Server**: `default`
- **Signature**: `def index13(publication_id: str, newsletter_list_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, page: int | None = None, direction: RequestDirectionOrStr | None = RequestDirection.ASC, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `newsletter_list_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `newsletter_list_id` — path `newsletterListId` · `limit` — query · `cursor` — query · `page` — query · `direction` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `NewsletterListSubscriptionIndexResponse`
- **Returns (raw)**: `ApiResult[NewsletterListSubscriptionIndexResponse, Index13ErrorBody]`
- **Error**: `Index13ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RequestDirectionOrStr` | `beehiiv/models/enums/request_direction.py` |
| `NewsletterListSubscriptionIndexResponse` | `beehiiv/models/newsletter_list_subscription_index_response.py` |
| `Index13ErrorBody` | `beehiiv/errors/index13_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.newsletter_list_subscriptions.show9

- **Route**: `GET /publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/{newsletterListSubscriptionId}`
- **Server**: `default`
- **Signature**: `def show9(publication_id: str, newsletter_list_id: str, newsletter_list_subscription_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `newsletter_list_id`, `newsletter_list_subscription_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `newsletter_list_id` — path `newsletterListId` · `newsletter_list_subscription_id` — path `newsletterListSubscriptionId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `NewsletterListSubscriptionResponse`
- **Returns (raw)**: `ApiResult[NewsletterListSubscriptionResponse, Show9ErrorBody]`
- **Error**: `Show9ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `NewsletterListSubscriptionResponse` | `beehiiv/models/newsletter_list_subscription_response.py` |
| `Show9ErrorBody` | `beehiiv/errors/show9_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.newsletter_list_subscriptions.update

- **Route**: `PATCH /publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/{newsletterListSubscriptionId}`
- **Server**: `default`
- **Signature**: `def update(publication_id: str, newsletter_list_id: str, newsletter_list_subscription_id: str, authorization: str, *, body: PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest | PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `newsletter_list_id`, `newsletter_list_subscription_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `newsletter_list_id` — path `newsletterListId` · `newsletter_list_subscription_id` — path `newsletterListSubscriptionId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `NewsletterListSubscriptionResponse`
- **Returns (raw)**: `ApiResult[NewsletterListSubscriptionResponse, UpdateErrorBody]`
- **Error**: `UpdateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest` | `beehiiv/models/publications_newsletter_lists_subscriptions_newsletter_list_subscription_id_request.py` |
| `PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequestDict` | `beehiiv/models/publications_newsletter_lists_subscriptions_newsletter_list_subscription_id_request.py` |
| `NewsletterListSubscriptionResponse` | `beehiiv/models/newsletter_list_subscription_response.py` |
| `UpdateErrorBody` | `beehiiv/errors/update_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.newsletter_list_subscriptions.update_by_subscription_id

- **Route**: `PATCH /publications/{publicationId}/newsletter_lists/{newsletterListId}/subscriptions/by_subscription_id/{subscriptionId}`
- **Server**: `default`
- **Signature**: `def update_by_subscription_id(publication_id: str, newsletter_list_id: str, subscription_id: str, authorization: str, *, body: PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest | PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `newsletter_list_id`, `subscription_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `newsletter_list_id` — path `newsletterListId` · `subscription_id` — path `subscriptionId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `NewsletterListSubscriptionResponse`
- **Returns (raw)**: `ApiResult[NewsletterListSubscriptionResponse, UpdateBySubscriptionIdErrorBody]`
- **Error**: `UpdateBySubscriptionIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest` | `beehiiv/models/publications_newsletter_lists_subscriptions_by_subscription_id_subscription_id_request.py` |
| `PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestDict` | `beehiiv/models/publications_newsletter_lists_subscriptions_by_subscription_id_subscription_id_request.py` |
| `NewsletterListSubscriptionResponse` | `beehiiv/models/newsletter_list_subscription_response.py` |
| `UpdateBySubscriptionIdErrorBody` | `beehiiv/errors/update_by_subscription_id_error.py` |
| `Error` | `beehiiv/models/error.py` |

