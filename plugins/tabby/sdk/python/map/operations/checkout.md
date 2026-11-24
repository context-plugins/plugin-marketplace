<!-- Generated file — do not edit; regenerated with the SDK. -->

# Checkout — operations

Accessor: `client.checkout` · Source: `tabby/apis/checkout.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.checkout.get_checkout_session

- **Route**: `GET /api/v2/checkout/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_checkout_session(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `CheckoutSession`
- **Returns (raw)**: `ApiResult[CheckoutSession, GetCheckoutSessionErrorBody]`
- **Error**: `GetCheckoutSessionErrorBody` — **Case A (typed)**
- **Error arms**: `Error400` [400] · `Error401KeyDoesntExist` [401] · `Error403` [403] · `str` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckoutSession` | `tabby/models/checkout_session.py` |
| `GetCheckoutSessionErrorBody` | `tabby/errors/get_checkout_session_error.py` |
| `Error400` | `tabby/models/error400.py` |
| `Error401KeyDoesntExist` | `tabby/models/error401_key_doesnt_exist.py` |
| `Error403` | `tabby/models/error403.py` |

### client.checkout.post_checkout_session

- **Route**: `POST /api/v2/checkout`
- **Auth**: `bearer_auth`
- **Signature**: `def post_checkout_session(body: ApiV2CheckoutRequest | ApiV2CheckoutRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CheckoutSession`
- **Returns (raw)**: `ApiResult[CheckoutSession, PostCheckoutSessionErrorBody]`
- **Error**: `PostCheckoutSessionErrorBody` — **Case A (typed)**
- **Error arms**: `Error400CheckoutPost` [400] · `Error401MerchantNull` [401] · `Error403` [403] · `str` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2CheckoutRequest` | `tabby/models/api_v2_checkout_request.py` |
| `ApiV2CheckoutRequestDict` | `tabby/models/api_v2_checkout_request.py` |
| `CheckoutSession` | `tabby/models/checkout_session.py` |
| `PostCheckoutSessionErrorBody` | `tabby/errors/post_checkout_session_error.py` |
| `Error400CheckoutPost` | `tabby/models/error400_checkout_post.py` |
| `Error401MerchantNull` | `tabby/models/error401_merchant_null.py` |
| `Error403` | `tabby/models/error403.py` |

