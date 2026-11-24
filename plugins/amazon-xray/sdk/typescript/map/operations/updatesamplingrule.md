<!-- Generated file — do not edit; regenerated with the SDK. -->

# Updatesamplingrule — operations

Accessor: `client.updatesamplingrule` · Source: `src/resources/updatesamplingrule.ts` · 1 operation · Request and error types: namespace `Updatesamplingrule`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### updateSamplingRule

- **Signature**: `updateSamplingRule(request?: Updatesamplingrule.UpdateSamplingRuleRequestParams, options?: RequestOptions): ApiPromise<UpdateSamplingRuleResult, Updatesamplingrule.UpdateSamplingRuleError>`
- **Wire**: `POST /UpdateSamplingRule`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateSamplingRuleResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Updatesamplingrule.UpdateSamplingRuleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Updatesamplingrule.UpdateSamplingRuleRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateSamplingRuleRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSamplingRuleRequest` | `updateSamplingRuleRequestSchema` | `src/models/update-sampling-rule-request.ts` |
| `UpdateSamplingRuleResult` | `updateSamplingRuleResultSchema` | `src/models/update-sampling-rule-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

