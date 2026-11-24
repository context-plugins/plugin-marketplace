<!-- Generated file — do not edit; regenerated with the SDK. -->

# Hybrid — operations

Accessor: `client.hybrid` · Source: `apigee/apis/hybrid.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.hybrid.apigee_hybrid_issuers_list

- **Route**: `GET /v1/hybrid/issuers`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_hybrid_issuers_list(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListHybridIssuersResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListHybridIssuersResponse, ApigeeHybridIssuersListErrorBody]`
- **Error**: `ApigeeHybridIssuersListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListHybridIssuersResponse` | `apigee/models/google_cloud_apigee_v1_list_hybrid_issuers_response.py` |
| `ApigeeHybridIssuersListErrorBody` | `apigee/errors/apigee_hybrid_issuers_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

