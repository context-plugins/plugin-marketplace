<!-- Generated file — do not edit; regenerated with the SDK. -->

# Funds — operations

Accessor: `client.funds` · Source: `givebutter/apis/funds.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.funds.funds_destroy

- **Route**: `DELETE /v1/funds/{fund}`
- **Auth**: `http`
- **Signature**: `def funds_destroy(fund: str | None, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `fund`
- **Params**: `fund` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, FundsDestroyErrorBody]`
- **Error**: `FundsDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FundsDestroyErrorBody` | `givebutter/errors/funds_destroy_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.funds.funds_index

- **Route**: `GET /v1/funds`
- **Auth**: `http`
- **Signature**: `def funds_index(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1FundsResponse`
- **Returns (raw)**: `ApiResult[V1FundsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1FundsResponse` | `givebutter/models/v1_funds_response.py` |

### client.funds.funds_show

- **Route**: `GET /v1/funds/{fund}`
- **Auth**: `http`
- **Signature**: `def funds_show(fund: str | None, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `fund`
- **Params**: `fund` — path
- **Returns (parsed)**: `FundResource`
- **Returns (raw)**: `ApiResult[FundResource, FundsShowErrorBody]`
- **Error**: `FundsShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FundResource` | `givebutter/models/fund_resource.py` |
| `FundsShowErrorBody` | `givebutter/errors/funds_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.funds.funds_store

- **Route**: `POST /v1/funds`
- **Auth**: `http`
- **Signature**: `def funds_store(body: V1FundsRequest | V1FundsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `FundResource`
- **Returns (raw)**: `ApiResult[FundResource, FundsStoreErrorBody]`
- **Error**: `FundsStoreErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1FundsRequest` | `givebutter/models/v1_funds_request.py` |
| `V1FundsRequestDict` | `givebutter/models/v1_funds_request.py` |
| `FundResource` | `givebutter/models/fund_resource.py` |
| `FundsStoreErrorBody` | `givebutter/errors/funds_store_error.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.funds.funds_update

- **Route**: `PUT /v1/funds/{fund}`
- **Auth**: `http`
- **Signature**: `def funds_update(fund: str | None, body: V1FundsRequest | V1FundsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `fund`, `body`
- **Params**: `fund` — path · `body` — JSON body
- **Returns (parsed)**: `FundResource`
- **Returns (raw)**: `ApiResult[FundResource, FundsUpdateErrorBody]`
- **Error**: `FundsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1FundsRequest` | `givebutter/models/v1_funds_request.py` |
| `V1FundsRequestDict` | `givebutter/models/v1_funds_request.py` |
| `FundResource` | `givebutter/models/fund_resource.py` |
| `FundsUpdateErrorBody` | `givebutter/errors/funds_update_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

