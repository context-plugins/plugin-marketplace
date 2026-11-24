<!-- Generated file — do not edit; regenerated with the SDK. -->

# AggregatesAndCompliance — operations

Accessor: `client.aggregates_and_compliance` · Source: `common_elements/apis/aggregates_and_compliance.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aggregates_and_compliance.compliance_scan

- **Route**: `POST /api/v1/compliance/scan`
- **Auth**: `bearer_auth`
- **Signature**: `def compliance_scan(body: ApiV1ComplianceScanRequest | ApiV1ComplianceScanRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ComplianceScanResponse`
- **Returns (raw)**: `ApiResult[ApiV1ComplianceScanResponse, ComplianceScanErrorBody]`
- **Error**: `ComplianceScanErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ComplianceScanRequest` | `common_elements/models/api_v1_compliance_scan_request.py` |
| `ApiV1ComplianceScanRequestDict` | `common_elements/models/api_v1_compliance_scan_request.py` |
| `ApiV1ComplianceScanResponse` | `common_elements/models/api_v1_compliance_scan_response.py` |
| `ComplianceScanErrorBody` | `common_elements/errors/compliance_scan_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.aggregates_and_compliance.geo_state_summary

- **Route**: `GET /api/v1/geo/state-summary`
- **Auth**: `bearer_auth`
- **Signature**: `def geo_state_summary(*, state: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `state` — query
- **Returns (parsed)**: `ApiV1GeoStateSummaryResponse`
- **Returns (raw)**: `ApiResult[ApiV1GeoStateSummaryResponse, GeoStateSummaryErrorBody]`
- **Error**: `GeoStateSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1GeoStateSummaryResponse` | `common_elements/models/api_v1_geo_state_summary_response.py` |
| `GeoStateSummaryErrorBody` | `common_elements/errors/geo_state_summary_error.py` |
| `Error` | `common_elements/models/error.py` |

