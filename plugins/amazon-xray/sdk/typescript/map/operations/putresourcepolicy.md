<!-- Generated file — do not edit; regenerated with the SDK. -->

# Putresourcepolicy — operations

Accessor: `client.putresourcepolicy` · Source: `src/resources/putresourcepolicy.ts` · 1 operation · Request and error types: namespace `Putresourcepolicy`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### putResourcePolicy

- **Signature**: `putResourcePolicy(request?: Putresourcepolicy.PutResourcePolicyRequestParams, options?: RequestOptions): ApiPromise<PutResourcePolicyResult, Putresourcepolicy.PutResourcePolicyError>`
- **Wire**: `POST /PutResourcePolicy`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PutResourcePolicyResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Putresourcepolicy.PutResourcePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidPolicyRevisionIdException"` [400] `InvalidPolicyRevisionIdException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Putresourcepolicy.PutResourcePolicyRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PutResourcePolicyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PutResourcePolicyRequest` | `putResourcePolicyRequestSchema` | `src/models/put-resource-policy-request.ts` |
| `PutResourcePolicyResult` | `putResourcePolicyResultSchema` | `src/models/put-resource-policy-result.ts` |
| `InvalidPolicyRevisionIdException` | `invalidPolicyRevisionIdExceptionSchema` | `src/models/invalid-policy-revision-id-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

