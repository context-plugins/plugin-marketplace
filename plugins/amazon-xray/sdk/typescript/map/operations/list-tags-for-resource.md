<!-- Generated file — do not edit; regenerated with the SDK. -->

# ListTagsForResource — operations

Accessor: `client.listTagsForResource` · Source: `src/resources/list-tags-for-resource.ts` · 1 operation · Request and error types: namespace `ListTagsForResource`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listTagsForResource

- **Signature**: `listTagsForResource(request?: ListTagsForResource.ListTagsForResourceRequestParams, options?: RequestOptions): ApiPromise<ListTagsForResourceResponse, ListTagsForResource.ListTagsForResourceError>`
- **Wire**: `POST /ListTagsForResource`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListTagsForResourceResponse`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `ListTagsForResource.ListTagsForResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ListTagsForResource.ListTagsForResourceRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListTagsForResourceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTagsForResourceRequest` | `listTagsForResourceRequestSchema` | `src/models/list-tags-for-resource-request.ts` |
| `ListTagsForResourceResponse` | `listTagsForResourceResponseSchema` | `src/models/list-tags-for-resource-response.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

