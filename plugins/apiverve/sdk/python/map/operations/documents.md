<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `api_verve/apis/documents.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.documents.htmltopdf

- **Route**: `POST /v1/htmltopdf`
- **Auth**: `api_key`
- **Signature**: `def htmltopdf(body: V1HtmltopdfRequest | V1HtmltopdfRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1HtmltopdfResponse`
- **Returns (raw)**: `ApiResult[V1HtmltopdfResponse, HtmltopdfErrorBody]`
- **Error**: `HtmltopdfErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HtmltopdfRequest` | `api_verve/models/v1_htmltopdf_request.py` |
| `V1HtmltopdfRequestDict` | `api_verve/models/v1_htmltopdf_request.py` |
| `V1HtmltopdfResponse` | `api_verve/models/v1_htmltopdf_response.py` |
| `HtmltopdfErrorBody` | `api_verve/errors/htmltopdf_error.py` |

### client.documents.invoicegenerator

- **Route**: `POST /v1/invoicegenerator`
- **Auth**: `api_key`
- **Signature**: `def invoicegenerator(body: V1InvoicegeneratorRequest | V1InvoicegeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1InvoicegeneratorResponse`
- **Returns (raw)**: `ApiResult[V1InvoicegeneratorResponse, InvoicegeneratorErrorBody]`
- **Error**: `InvoicegeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1InvoicegeneratorRequest` | `api_verve/models/v1_invoicegenerator_request.py` |
| `V1InvoicegeneratorRequestDict` | `api_verve/models/v1_invoicegenerator_request.py` |
| `V1InvoicegeneratorResponse` | `api_verve/models/v1_invoicegenerator_response.py` |
| `InvoicegeneratorErrorBody` | `api_verve/errors/invoicegenerator_error.py` |

### client.documents.websitetopdf

- **Route**: `POST /v1/websitetopdf`
- **Auth**: `api_key`
- **Signature**: `def websitetopdf(body: V1WebsitetopdfRequest | V1WebsitetopdfRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1WebsitetopdfResponse`
- **Returns (raw)**: `ApiResult[V1WebsitetopdfResponse, WebsitetopdfErrorBody]`
- **Error**: `WebsitetopdfErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebsitetopdfRequest` | `api_verve/models/v1_websitetopdf_request.py` |
| `V1WebsitetopdfRequestDict` | `api_verve/models/v1_websitetopdf_request.py` |
| `V1WebsitetopdfResponse` | `api_verve/models/v1_websitetopdf_response.py` |
| `WebsitetopdfErrorBody` | `api_verve/errors/websitetopdf_error.py` |

