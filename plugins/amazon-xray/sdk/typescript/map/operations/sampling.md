<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sampling — operations

Accessor: `client.sampling` · Source: `src/resources/sampling.ts` · 1 operation · Request and error types: namespace `Sampling`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSamplingRules2

- **Signature**: `getSamplingRules2(request?: Sampling.GetSamplingRules2Request, options?: RequestOptions): ApiPromise<GetSamplingRulesResult, Sampling.GetSamplingRules2Error>`
- **Wire**: `POST /GetSamplingRules`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetSamplingRulesResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Sampling.GetSamplingRules2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sampling.GetSamplingRules2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetSamplingRulesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetSamplingRulesRequest` | `getSamplingRulesRequestSchema` | `src/models/get-sampling-rules-request.ts` |
| `GetSamplingRulesResult` | `getSamplingRulesResultSchema` | `src/models/get-sampling-rules-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

