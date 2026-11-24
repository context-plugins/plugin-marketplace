<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentIntents — operations

Accessor: `client.payment_intents` · Source: `airwallex/apis/payment_intents.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.payment_intents.cancel_payment_intent

- **Route**: `POST /api/v1/payment_intents/{id}/cancel`
- **Auth**: `bearer_auth` OR (`client_id_header` AND `api_key_header`)
- **Signature**: `def cancel_payment_intent(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.payment_intents.capture_payment_intent

- **Route**: `POST /api/v1/payment_intents/{id}/capture`
- **Auth**: `bearer_auth` OR (`client_id_header` AND `api_key_header`)
- **Signature**: `def capture_payment_intent(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.payment_intents.confirm_payment_intent

- **Route**: `POST /api/v1/payment_intents/{id}/confirm`
- **Auth**: `bearer_auth` OR (`client_id_header` AND `api_key_header`)
- **Signature**: `def confirm_payment_intent(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.payment_intents.create_payment_intent

- **Route**: `POST /api/v1/payment_intents/create`
- **Auth**: `bearer_auth` OR (`client_id_header` AND `api_key_header`)
- **Signature**: `def create_payment_intent(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.payment_intents.get_payment_intent

- **Route**: `GET /api/v1/payment_intents/{id}`
- **Auth**: `bearer_auth` OR (`client_id_header` AND `api_key_header`)
- **Signature**: `def get_payment_intent(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

