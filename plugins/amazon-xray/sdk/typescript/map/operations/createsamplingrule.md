<!-- Generated file — do not edit; regenerated with the SDK. -->

# Createsamplingrule — operations

Accessor: `client.createsamplingrule` · Source: `src/resources/createsamplingrule.ts` · 1 operation · Request and error types: namespace `Createsamplingrule`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSamplingRule

- **Signature**: `createSamplingRule(request?: Createsamplingrule.CreateSamplingRuleRequestParams, options?: RequestOptions): ApiPromise<CreateSamplingRuleResult, Createsamplingrule.CreateSamplingRuleError>`
- **Wire**: `POST /CreateSamplingRule`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateSamplingRuleResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Createsamplingrule.CreateSamplingRuleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Createsamplingrule.CreateSamplingRuleRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateSamplingRuleRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSamplingRuleRequest` | `createSamplingRuleRequestSchema` | `src/models/create-sampling-rule-request.ts` |
| `CreateSamplingRuleResult` | `createSamplingRuleResultSchema` | `src/models/create-sampling-rule-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

