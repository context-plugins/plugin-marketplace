<!-- Generated file — do not edit; regenerated with the SDK. -->

# Drafts — operations

Accessor: `client.drafts` · Source: `src/resources/drafts.ts` · 1 operation · Request types: namespace `Drafts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postApiV1Drafts

- **Signature**: `postApiV1Drafts(request?: Drafts.PostApiV1DraftsRequest, options?: RequestOptions): ApiPromise<ApiV1DraftsResponse, ApiError>`
- **Wire**: `POST /api/v1/drafts`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1DraftsResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Drafts.PostApiV1DraftsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1DraftsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DraftsRequest` | `apiV1DraftsRequestSchema` | `src/models/api-v1-drafts-request.ts` |
| `ApiV1DraftsResponse` | `apiV1DraftsResponseSchema` | `src/models/api-v1-drafts-response.ts` |

