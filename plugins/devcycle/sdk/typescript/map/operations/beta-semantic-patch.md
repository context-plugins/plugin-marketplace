<!-- Generated file — do not edit; regenerated with the SDK. -->

# BetaSemanticPatch — operations

Accessor: `client.betaSemanticPatch` · Source: `src/resources/beta-semantic-patch.ts` · 1 operation · Request and error types: namespace `BetaSemanticPatch`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### semanticPatchControllerSemanticUpdate

- **Signature**: `semanticPatchControllerSemanticUpdate(request: BetaSemanticPatch.SemanticPatchControllerSemanticUpdateRequest, options?: RequestOptions): ApiPromise<undefined, BetaSemanticPatch.SemanticPatchControllerSemanticUpdateError>`
- **Wire**: `PATCH /v1/semantic/projects/{project}/audiences/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `BetaSemanticPatch.SemanticPatchControllerSemanticUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BetaSemanticPatch.SemanticPatchControllerSemanticUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `AudiencePatchDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AudiencePatchDto` | `audiencePatchDtoSchema` | `src/models/audience-patch-dto.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |

