<!-- Generated file — do not edit; regenerated with the SDK. -->

# Samplingtargets — operations

Accessor: `client.samplingtargets` · Source: `src/resources/samplingtargets.ts` · 1 operation · Request and error types: namespace `Samplingtargets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSamplingTargets

- **Signature**: `getSamplingTargets(request?: Samplingtargets.GetSamplingTargetsRequest, options?: RequestOptions): ApiPromise<GetSamplingTargetsResult, Samplingtargets.GetSamplingTargetsError>`
- **Wire**: `POST /SamplingTargets`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetSamplingTargetsResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Samplingtargets.GetSamplingTargetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Samplingtargets.GetSamplingTargetsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SamplingTargetsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SamplingTargetsRequest` | `samplingTargetsRequestSchema` | `src/models/sampling-targets-request.ts` |
| `GetSamplingTargetsResult` | `getSamplingTargetsResultSchema` | `src/models/get-sampling-targets-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

