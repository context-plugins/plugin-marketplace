<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscribe — operations

Accessor: `client.subscribe` · Source: `celestia/apis/subscribe.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.subscribe.subscribe_to_website_newsletter

- **Route**: `POST /api/subscribe/`
- **Server**: `default_celestia_website_contact_api`
- **Signature**: `def subscribe_to_website_newsletter(body: SubscriptionInput | SubscriptionInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SuccessModel`
- **Returns (raw)**: `ApiResult[SuccessModel, SubscribeToWebsiteNewsletterErrorBody]`
- **Error**: `SubscribeToWebsiteNewsletterErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorCelestiaWebsiteContactApi` [400, 405, 408, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionInput` | `celestia/models/subscription_input.py` |
| `SubscriptionInputDict` | `celestia/models/subscription_input.py` |
| `SuccessModel` | `celestia/models/success_model.py` |
| `SubscribeToWebsiteNewsletterErrorBody` | `celestia/errors/subscribe_to_website_newsletter_error.py` |
| `ErrorCelestiaWebsiteContactApi` | `celestia/models/error_celestia_website_contact_api.py` |

