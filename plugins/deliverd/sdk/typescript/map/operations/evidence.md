<!-- Generated file — do not edit; regenerated with the SDK. -->

# Evidence — operations

Accessor: `client.evidence` · Source: `src/resources/evidence.ts` · 1 operation · Request types: namespace `Evidence`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postApiV1EvidenceVerify

- **Signature**: `postApiV1EvidenceVerify(request?: Evidence.PostApiV1EvidenceVerifyRequest, options?: RequestOptions): ApiPromise<ApiV1EvidenceVerifyResponse, ApiError>`
- **Wire**: `POST /api/v1/evidence/verify`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1EvidenceVerifyResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Evidence.PostApiV1EvidenceVerifyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1EvidenceVerifyResponse` | `apiV1EvidenceVerifyResponseSchema` | `src/models/api-v1-evidence-verify-response.ts` |

