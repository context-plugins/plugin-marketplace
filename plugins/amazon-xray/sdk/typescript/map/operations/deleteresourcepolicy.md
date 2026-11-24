<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deleteresourcepolicy — operations

Accessor: `client.deleteresourcepolicy` · Source: `src/resources/deleteresourcepolicy.ts` · 1 operation · Request and error types: namespace `Deleteresourcepolicy`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteResourcePolicy

- **Signature**: `deleteResourcePolicy(request?: Deleteresourcepolicy.DeleteResourcePolicyRequestParams, options?: RequestOptions): ApiPromise<Record<string, unknown>, Deleteresourcepolicy.DeleteResourcePolicyError>`
- **Wire**: `POST /DeleteResourcePolicy`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Deleteresourcepolicy.DeleteResourcePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidPolicyRevisionIdException"` [400] `InvalidPolicyRevisionIdException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deleteresourcepolicy.DeleteResourcePolicyRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteResourcePolicyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteResourcePolicyRequest` | `deleteResourcePolicyRequestSchema` | `src/models/delete-resource-policy-request.ts` |
| `InvalidPolicyRevisionIdException` | `invalidPolicyRevisionIdExceptionSchema` | `src/models/invalid-policy-revision-id-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

