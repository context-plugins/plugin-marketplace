<!-- Generated file — do not edit; regenerated with the SDK. -->

# Traces — operations

Accessor: `client.traces` · Source: `paid/apis/traces.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.traces.get_traces

- **Route**: `GET /traces`
- **Server**: `default`
- **Signature**: `def get_traces(authorization: str, *, limit: int | None = 100, offset: int | None = 0, start_time: RFC3339DateTime | None = None, end_time: RFC3339DateTime | None = None, external_customer_id: str | None = None, external_product_id: str | None = None, external_agent_id: str | None = None, metadata: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `limit` — query · `offset` — query · `start_time` — query `startTime` · `end_time` — query `endTime` · `external_customer_id` — query `externalCustomerId` · `external_product_id` — query `externalProductId` · `external_agent_id` — query `externalAgentId` · `metadata` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `TracesResponse`
- **Returns (raw)**: `ApiResult[TracesResponse, GetTracesErrorBody]`
- **Error**: `GetTracesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TracesResponse` | `paid/models/traces_response.py` |
| `GetTracesErrorBody` | `paid/errors/get_traces_error.py` |
| `Error` | `paid/models/error.py` |

