<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntitlementRestController — operations

Accessor: `client.entitlementRestController` · Source: `src/resources/entitlement-rest-controller.ts` · 1 operation · Request and error types: namespace `EntitlementRestController`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `atlassian-compass`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### evaluateEntitlements

- **Signature**: `evaluateEntitlements(request: EntitlementRestController.EvaluateEntitlementsRequest, options?: RequestOptions): ApiPromise<EntitlementResponseDto, EntitlementRestController.EvaluateEntitlementsError>`
- **Wire**: `POST /compass/v1/entitlements`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntitlementResponseDto`
- **Error**: `AtlassianCompassError` with `kind: "api"`, an instance of `EntitlementRestController.EvaluateEntitlementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseDto"` [401] `ErrorResponseDto` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntitlementRestController.EvaluateEntitlementsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `EntitlementRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntitlementRequestDto` | `entitlementRequestDtoSchema` | `src/models/entitlement-request-dto.ts` |
| `EntitlementResponseDto` | `entitlementResponseDtoSchema` | `src/models/entitlement-response-dto.ts` |
| `ErrorResponseDto` | `errorResponseDtoSchema` | `src/models/error-response-dto.ts` |

