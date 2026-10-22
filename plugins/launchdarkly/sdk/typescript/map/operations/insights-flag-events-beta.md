<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsFlagEventsBeta — operations

Accessor: `client.insightsFlagEventsBeta` · Source: `src/resources/insights-flag-events-beta.ts` · 1 operation · Request and error types: namespace `InsightsFlagEventsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFlagEvents

- **Signature**: `getFlagEvents(request: InsightsFlagEventsBeta.GetFlagEventsRequest, options?: RequestOptions): ApiPromise<FlagEventCollectionRep, InsightsFlagEventsBeta.GetFlagEventsError>`
- **Wire**: `GET /api/v2/engineering-insights/flag-events`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlagEventCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsFlagEventsBeta.GetFlagEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsFlagEventsBeta.GetFlagEventsRequest` (13):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `query` | `string` | yes |
| `environmentKey` | `query` | `string` | yes |
| `applicationKey` | `query` | `string` | no |
| `query` | `query` | `string` | no |
| `impactSize` | `query` | `string` | no |
| `hasExperiments` | `query` | `boolean` | no |
| `global` | `query` | `string` | no |
| `expand` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `from` | `query` | `number` | no |
| `to` | `query` | `number` | no |
| `after` | `query` | `string` | no |
| `before` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagEventCollectionRep` | `flagEventCollectionRepSchema` | `src/models/flag-event-collection-rep.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

