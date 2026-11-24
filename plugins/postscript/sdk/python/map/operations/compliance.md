<!-- Generated file — do not edit; regenerated with the SDK. -->

# Compliance — operations

Accessor: `client.compliance` · Source: `postscript/apis/compliance.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.compliance.redact

- **Route**: `PATCH /api/v2/compliance/redact`
- **Auth**: `sec0`
- **Signature**: `def redact(*, x_postscript_shop_token: str | None = None, body: ApiV2ComplianceRedactRequest | ApiV2ComplianceRedactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_postscript_shop_token` — header `X-Postscript-Shop-Token` · `body` — JSON body
- **Returns (parsed)**: `ApiV2ComplianceRedactResponse`
- **Returns (raw)**: `ApiResult[ApiV2ComplianceRedactResponse, RedactErrorBody]`
- **Error**: `RedactErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2ComplianceRedact403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2ComplianceRedactRequest` | `postscript/models/api_v2_compliance_redact_request.py` |
| `ApiV2ComplianceRedactRequestDict` | `postscript/models/api_v2_compliance_redact_request.py` |
| `ApiV2ComplianceRedactResponse` | `postscript/models/api_v2_compliance_redact_response.py` |
| `RedactErrorBody` | `postscript/errors/redact_error.py` |
| `ApiV2ComplianceRedact403Error1` | `postscript/models/api_v2_compliance_redact403_error1.py` |

### client.compliance.unsubscribe

- **Route**: `PATCH /api/v2/compliance/unsubscribe`
- **Auth**: `sec0`
- **Signature**: `def unsubscribe(*, x_postscript_shop_token: str | None = None, body: ApiV2ComplianceUnsubscribeRequest | ApiV2ComplianceUnsubscribeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_postscript_shop_token` — header `X-Postscript-Shop-Token` · `body` — JSON body
- **Returns (parsed)**: `ApiV2ComplianceUnsubscribeResponse`
- **Returns (raw)**: `ApiResult[ApiV2ComplianceUnsubscribeResponse, UnsubscribeErrorBody]`
- **Error**: `UnsubscribeErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2ComplianceUnsubscribe403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2ComplianceUnsubscribeRequest` | `postscript/models/api_v2_compliance_unsubscribe_request.py` |
| `ApiV2ComplianceUnsubscribeRequestDict` | `postscript/models/api_v2_compliance_unsubscribe_request.py` |
| `ApiV2ComplianceUnsubscribeResponse` | `postscript/models/api_v2_compliance_unsubscribe_response.py` |
| `UnsubscribeErrorBody` | `postscript/errors/unsubscribe_error.py` |
| `ApiV2ComplianceUnsubscribe403Error1` | `postscript/models/api_v2_compliance_unsubscribe403_error1.py` |

