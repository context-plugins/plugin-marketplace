<!-- Generated file — do not edit; regenerated with the SDK. -->

# Security — operations

Accessor: `client.security` · Source: `api_verve/apis/security.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.security.csrparser

- **Route**: `POST /v1/csrparser`
- **Auth**: `api_key`
- **Signature**: `def csrparser(body: V1CsrparserRequest | V1CsrparserRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1CsrparserResponse`
- **Returns (raw)**: `ApiResult[V1CsrparserResponse, CsrparserErrorBody]`
- **Error**: `CsrparserErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CsrparserRequest` | `api_verve/models/v1_csrparser_request.py` |
| `V1CsrparserRequestDict` | `api_verve/models/v1_csrparser_request.py` |
| `V1CsrparserResponse` | `api_verve/models/v1_csrparser_response.py` |
| `CsrparserErrorBody` | `api_verve/errors/csrparser_error.py` |

### client.security.danevalidator

- **Route**: `POST /v1/danevalidator`
- **Auth**: `api_key`
- **Signature**: `def danevalidator(body: V1DanevalidatorRequest | V1DanevalidatorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1DanevalidatorResponse`
- **Returns (raw)**: `ApiResult[V1DanevalidatorResponse, DanevalidatorErrorBody]`
- **Error**: `DanevalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DanevalidatorRequest` | `api_verve/models/v1_danevalidator_request.py` |
| `V1DanevalidatorRequestDict` | `api_verve/models/v1_danevalidator_request.py` |
| `V1DanevalidatorResponse` | `api_verve/models/v1_danevalidator_response.py` |
| `DanevalidatorErrorBody` | `api_verve/errors/danevalidator_error.py` |

### client.security.hashgenerator

- **Route**: `GET /v1/hashgenerator`
- **Auth**: `api_key`
- **Signature**: `def hashgenerator(text: str, *, algorithms: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `text`
- **Params**: `text` — query · `algorithms` — query
- **Returns (parsed)**: `V1HashgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1HashgeneratorResponse, HashgeneratorErrorBody]`
- **Error**: `HashgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HashgeneratorResponse` | `api_verve/models/v1_hashgenerator_response.py` |
| `HashgeneratorErrorBody` | `api_verve/errors/hashgenerator_error.py` |

### client.security.hmac

- **Route**: `POST /v1/hmac`
- **Auth**: `api_key`
- **Signature**: `def hmac(body: V1HmacRequest | V1HmacRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1HmacResponse`
- **Returns (raw)**: `ApiResult[V1HmacResponse, HmacErrorBody]`
- **Error**: `HmacErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HmacRequest` | `api_verve/models/v1_hmac_request.py` |
| `V1HmacRequestDict` | `api_verve/models/v1_hmac_request.py` |
| `V1HmacResponse` | `api_verve/models/v1_hmac_response.py` |
| `HmacErrorBody` | `api_verve/errors/hmac_error.py` |

