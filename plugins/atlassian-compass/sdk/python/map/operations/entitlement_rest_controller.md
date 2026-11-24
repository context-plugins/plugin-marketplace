<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntitlementRestController — operations

Accessor: `client.entitlement_rest_controller` · Source: `atlassian_compass/apis/entitlement_rest_controller.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.entitlement_rest_controller.evaluate_entitlements

- **Route**: `POST /compass/v1/entitlements`
- **Auth**: `basic_auth`
- **Signature**: `def evaluate_entitlements(body: EntitlementRequestDto | EntitlementRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EntitlementResponseDto`
- **Returns (raw)**: `ApiResult[EntitlementResponseDto, EvaluateEntitlementsErrorBody]`
- **Error**: `EvaluateEntitlementsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseDto` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntitlementRequestDto` | `atlassian_compass/models/entitlement_request_dto.py` |
| `EntitlementRequestDtoDict` | `atlassian_compass/models/entitlement_request_dto.py` |
| `EntitlementResponseDto` | `atlassian_compass/models/entitlement_response_dto.py` |
| `EvaluateEntitlementsErrorBody` | `atlassian_compass/errors/evaluate_entitlements_error.py` |
| `ErrorResponseDto` | `atlassian_compass/models/error_response_dto.py` |

