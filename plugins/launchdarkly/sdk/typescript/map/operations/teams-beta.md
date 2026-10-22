<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamsBeta — operations

Accessor: `client.teamsBeta` · Source: `src/resources/teams-beta.ts` · 1 operation · Request and error types: namespace `TeamsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### patchTeams

- **Signature**: `patchTeams(request: TeamsBeta.PatchTeamsRequest, options?: RequestOptions): ApiPromise<BulkEditTeamsRep, TeamsBeta.PatchTeamsError>`
- **Wire**: `PATCH /api/v2/teams`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkEditTeamsRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `TeamsBeta.PatchTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsBeta.PatchTeamsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TeamsPatchInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsPatchInput` | `teamsPatchInputSchema` | `src/models/teams-patch-input.ts` |
| `BulkEditTeamsRep` | `bulkEditTeamsRepSchema` | `src/models/bulk-edit-teams-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

