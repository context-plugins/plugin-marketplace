<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResourceCollections — operations

Accessor: `client.resourceCollections` · Source: `src/resources/resource-collections.ts` · 2 operations · Request and error types: namespace `ResourceCollections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getResourceCollection

- **Signature**: `getResourceCollection(request: ResourceCollections.GetResourceCollectionRequest, options?: RequestOptions): ApiPromise<GetResourceCollectionResponse, ResourceCollections.GetResourceCollectionError>`
- **Wire**: `GET /resource-collections/{ResourceCollectionType}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetResourceCollectionResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `ResourceCollections.GetResourceCollectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResourceCollections.GetResourceCollectionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resourceCollectionType` | `path` | `ResourceCollectionType` | `ResourceCollectionType` | yes |
| `nextToken` | `query` | `NextToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceCollectionType` | `resourceCollectionTypeSchema` | `src/models/resource-collection-type.ts` |
| `GetResourceCollectionResponse` | `getResourceCollectionResponseSchema` | `src/models/get-resource-collection-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### updateResourceCollection

- **Signature**: `updateResourceCollection(request?: ResourceCollections.UpdateResourceCollectionRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ResourceCollections.UpdateResourceCollectionError>`
- **Wire**: `PUT /resource-collections`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `ResourceCollections.UpdateResourceCollectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResourceCollections.UpdateResourceCollectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ResourceCollectionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceCollectionsRequest` | `resourceCollectionsRequestSchema` | `src/models/resource-collections-request.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

