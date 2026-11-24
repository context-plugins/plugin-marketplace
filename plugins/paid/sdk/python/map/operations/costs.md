<!-- Generated file — do not edit; regenerated with the SDK. -->

# Costs — operations

Accessor: `client.costs` · Source: `paid/apis/costs.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.costs.create_costs

- **Route**: `POST /costs/bulk`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def create_costs(authorization: str, *, body: CostIngestRequest | CostIngestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CostIngestResponse`
- **Returns (raw)**: `ApiResult[CostIngestResponse, CreateCostsErrorBody]`
- **Error**: `CreateCostsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CostIngestRequest` | `paid/models/cost_ingest_request.py` |
| `CostIngestRequestDict` | `paid/models/cost_ingest_request.py` |
| `CostIngestResponse` | `paid/models/cost_ingest_response.py` |
| `CreateCostsErrorBody` | `paid/errors/create_costs_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

