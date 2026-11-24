<!-- Generated file — do not edit; regenerated with the SDK. -->

# Parsers — operations

Accessor: `client.parsers` · Source: `api_verve/apis/parsers.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.parsers.humannameparser

- **Route**: `GET /v1/humannameparser`
- **Auth**: `api_key`
- **Signature**: `def humannameparser(name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — query
- **Returns (parsed)**: `V1HumannameparserResponse`
- **Returns (raw)**: `ApiResult[V1HumannameparserResponse, HumannameparserErrorBody]`
- **Error**: `HumannameparserErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HumannameparserResponse` | `api_verve/models/v1_humannameparser_response.py` |
| `HumannameparserErrorBody` | `api_verve/errors/humannameparser_error.py` |

### client.parsers.rsstojson

- **Route**: `POST /v1/rsstojson`
- **Auth**: `api_key`
- **Signature**: `def rsstojson(body: V1RsstojsonRequest | V1RsstojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1RsstojsonResponse`
- **Returns (raw)**: `ApiResult[V1RsstojsonResponse, RsstojsonErrorBody]`
- **Error**: `RsstojsonErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RsstojsonRequest` | `api_verve/models/v1_rsstojson_request.py` |
| `V1RsstojsonRequestDict` | `api_verve/models/v1_rsstojson_request.py` |
| `V1RsstojsonResponse` | `api_verve/models/v1_rsstojson_response.py` |
| `RsstojsonErrorBody` | `api_verve/errors/rsstojson_error.py` |

### client.parsers.streetaddressparser

- **Route**: `GET /v1/streetaddressparser`
- **Auth**: `api_key`
- **Signature**: `def streetaddressparser(address: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `address`
- **Params**: `address` — query
- **Returns (parsed)**: `V1StreetaddressparserResponse`
- **Returns (raw)**: `ApiResult[V1StreetaddressparserResponse, StreetaddressparserErrorBody]`
- **Error**: `StreetaddressparserErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1StreetaddressparserResponse` | `api_verve/models/v1_streetaddressparser_response.py` |
| `StreetaddressparserErrorBody` | `api_verve/errors/streetaddressparser_error.py` |

### client.parsers.useragentparser

- **Route**: `POST /v1/useragentparser`
- **Auth**: `api_key`
- **Signature**: `def useragentparser(body: V1UseragentparserRequest | V1UseragentparserRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1UseragentparserResponse`
- **Returns (raw)**: `ApiResult[V1UseragentparserResponse, UseragentparserErrorBody]`
- **Error**: `UseragentparserErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UseragentparserRequest` | `api_verve/models/v1_useragentparser_request.py` |
| `V1UseragentparserRequestDict` | `api_verve/models/v1_useragentparser_request.py` |
| `V1UseragentparserResponse` | `api_verve/models/v1_useragentparser_response.py` |
| `UseragentparserErrorBody` | `api_verve/errors/useragentparser_error.py` |

