<!-- Generated file — do not edit; regenerated with the SDK. -->

# JwtIssuer — operations

Accessor: `client.jwtIssuer` · Source: `src/resources/jwt-issuer.ts` · 1 operation · Request and error types: namespace `JwtIssuer`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `semrush`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postAppCenterApiV2JwtToken

- **Signature**: `postAppCenterApiV2JwtToken(request?: JwtIssuer.PostAppCenterApiV2JwtTokenRequest, options?: RequestOptions): ApiPromise<IssuerJwtResponse, JwtIssuer.PostAppCenterApiV2JwtTokenError>`
- **Wire**: `POST /app-center-api/v2/jwt-token/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IssuerJwtResponse`
- **Error**: `SemrushError` with `kind: "api"`, an instance of `JwtIssuer.PostAppCenterApiV2JwtTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"error401"` [401] `string` · `"error403"` [403] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `JwtIssuer.PostAppCenterApiV2JwtTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IssuerJwtRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IssuerJwtRequest` | `issuerJwtRequestSchema` | `src/models/issuer-jwt-request.ts` |
| `IssuerJwtResponse` | `issuerJwtResponseSchema` | `src/models/issuer-jwt-response.ts` |

