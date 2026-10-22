<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsPullRequestsBeta — operations

Accessor: `client.insightsPullRequestsBeta` · Source: `src/resources/insights-pull-requests-beta.ts` · 1 operation · Request and error types: namespace `InsightsPullRequestsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPullRequests

- **Signature**: `getPullRequests(request: InsightsPullRequestsBeta.GetPullRequestsRequest, options?: RequestOptions): ApiPromise<PullRequestCollectionRep, InsightsPullRequestsBeta.GetPullRequestsError>`
- **Wire**: `GET /api/v2/engineering-insights/pull-requests`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PullRequestCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsPullRequestsBeta.GetPullRequestsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsPullRequestsBeta.GetPullRequestsRequest` (12):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `query` | `string` | yes |
| `environmentKey` | `query` | `string` | no |
| `applicationKey` | `query` | `string` | no |
| `status` | `query` | `string` | no |
| `query` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `expand` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `from` | `query` | `Date` (date-time) | no |
| `to` | `query` | `Date` (date-time) | no |
| `after` | `query` | `string` | no |
| `before` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PullRequestCollectionRep` | `pullRequestCollectionRepSchema` | `src/models/pull-request-collection-rep.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

