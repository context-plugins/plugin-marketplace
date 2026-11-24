<!-- Generated file — do not edit; regenerated with the SDK. -->

# Evidence — operations

Accessor: `client.evidence` · Source: `deliverd/apis/evidence.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.evidence.post_api_v1_evidence_verify

- **Route**: `POST /api/v1/evidence/verify`
- **Signature**: `def post_api_v1_evidence_verify(*, body: dict[str, Any] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1EvidenceVerifyResponse`
- **Returns (raw)**: `ApiResult[ApiV1EvidenceVerifyResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1EvidenceVerifyResponse` | `deliverd/models/api_v1_evidence_verify_response.py` |

