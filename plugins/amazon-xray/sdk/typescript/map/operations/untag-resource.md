<!-- Generated file — do not edit; regenerated with the SDK. -->

# UntagResource — operations

Accessor: `client.untagResource` · Source: `src/resources/untag-resource.ts` · 1 operation · Request and error types: namespace `UntagResource`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### untagResource

- **Signature**: `untagResource(request?: UntagResource.UntagResourceRequestParams, options?: RequestOptions): ApiPromise<Record<string, unknown>, UntagResource.UntagResourceError>`
- **Wire**: `POST /UntagResource`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `UntagResource.UntagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UntagResource.UntagResourceRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UntagResourceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UntagResourceRequest` | `untagResourceRequestSchema` | `src/models/untag-resource-request.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

