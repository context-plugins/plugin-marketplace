<!-- Generated file — do not edit; regenerated with the SDK. -->

# Audiences — operations

Accessor: `client.audiences` · Source: `src/resources/audiences.ts` · 1 operation · Request types: namespace `Audiences`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postApiV1AudiencesResolve

- **Signature**: `postApiV1AudiencesResolve(request?: Audiences.PostApiV1AudiencesResolveRequest, options?: RequestOptions): ApiPromise<ApiV1AudiencesResolveResponse, ApiError>`
- **Wire**: `POST /api/v1/audiences/resolve`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AudiencesResolveResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Audiences.PostApiV1AudiencesResolveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1AudiencesResolveRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AudiencesResolveRequest` | `apiV1AudiencesResolveRequestSchema` | `src/models/api-v1-audiences-resolve-request.ts` |
| `ApiV1AudiencesResolveResponse` | `apiV1AudiencesResolveResponseSchema` | `src/models/api-v1-audiences-resolve-response.ts` |

