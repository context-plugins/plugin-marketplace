<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recommendations — operations

Accessor: `client.recommendations` · Source: `src/resources/recommendations.ts` · 1 operation · Request and error types: namespace `Recommendations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listRecommendations

- **Signature**: `listRecommendations(request?: Recommendations.ListRecommendationsRequest, options?: RequestOptions): ApiPromise<ListRecommendationsResponse, Recommendations.ListRecommendationsError>`
- **Wire**: `POST /recommendations`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListRecommendationsResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Recommendations.ListRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recommendations.ListRecommendationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RecommendationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecommendationsRequest` | `recommendationsRequestSchema` | `src/models/recommendations-request.ts` |
| `ListRecommendationsResponse` | `listRecommendationsResponseSchema` | `src/models/list-recommendations-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

