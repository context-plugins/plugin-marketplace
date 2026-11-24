<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deletesamplingrule — operations

Accessor: `client.deletesamplingrule` · Source: `src/resources/deletesamplingrule.ts` · 1 operation · Request and error types: namespace `Deletesamplingrule`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteSamplingRule

- **Signature**: `deleteSamplingRule(request?: Deletesamplingrule.DeleteSamplingRuleRequestParams, options?: RequestOptions): ApiPromise<DeleteSamplingRuleResult, Deletesamplingrule.DeleteSamplingRuleError>`
- **Wire**: `POST /DeleteSamplingRule`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteSamplingRuleResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Deletesamplingrule.DeleteSamplingRuleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deletesamplingrule.DeleteSamplingRuleRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteSamplingRuleRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteSamplingRuleRequest` | `deleteSamplingRuleRequestSchema` | `src/models/delete-sampling-rule-request.ts` |
| `DeleteSamplingRuleResult` | `deleteSamplingRuleResultSchema` | `src/models/delete-sampling-rule-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

