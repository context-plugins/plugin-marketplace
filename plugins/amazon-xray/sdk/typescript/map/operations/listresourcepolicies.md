<!-- Generated file — do not edit; regenerated with the SDK. -->

# Listresourcepolicies — operations

Accessor: `client.listresourcepolicies` · Source: `src/resources/listresourcepolicies.ts` · 1 operation · Request and error types: namespace `Listresourcepolicies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listResourcePolicies

- **Signature**: `listResourcePolicies(request?: Listresourcepolicies.ListResourcePoliciesRequestParams, options?: RequestOptions): ApiPromise<ListResourcePoliciesResult, Listresourcepolicies.ListResourcePoliciesError>`
- **Wire**: `POST /ListResourcePolicies`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListResourcePoliciesResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Listresourcepolicies.ListResourcePoliciesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Listresourcepolicies.ListResourcePoliciesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListResourcePoliciesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResourcePoliciesRequest` | `listResourcePoliciesRequestSchema` | `src/models/list-resource-policies-request.ts` |
| `ListResourcePoliciesResult` | `listResourcePoliciesResultSchema` | `src/models/list-resource-policies-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

