<!-- Generated file — do not edit; regenerated with the SDK. -->

# JourneyExecution — operations

Accessor: `client.journeyExecution` · Source: `src/resources/journey-execution.ts` · 1 operation · Request and error types: namespace `JourneyExecution`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gbg-go-next-gen-flow-captain-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### generateAccessToken

- **Signature**: `generateAccessToken(request: JourneyExecution.GenerateAccessTokenRequest, options?: RequestOptions): ApiPromise<AsTokenOauth2Response, JourneyExecution.GenerateAccessTokenError>`
- **Wire**: `POST /as/token.oauth2`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AsTokenOauth2Response`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `JourneyExecution.GenerateAccessTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `JourneyExecution.GenerateAccessTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AsTokenOauth2Response` | `asTokenOauth2ResponseSchema` | `src/models/as-token-oauth2-response.ts` |

