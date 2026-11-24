<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credits — operations

Accessor: `client.credits` · Source: `src/resources/credits.ts` · 1 operation · Request and error types: namespace `Credits`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloro`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCredits

- **Signature**: `getCredits(options?: RequestOptions): ApiPromise<CreditsResponse, Credits.GetCreditsError>`
- **Wire**: `GET /v1/credits`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditsResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Credits.GetCreditsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authenticationErrorCloroDevCreditsApi"` [401] `AuthenticationErrorCloroDevCreditsApi` · `"rateLimitErrorCloroDevCreditsApi"` [429] `RateLimitErrorCloroDevCreditsApi` · `"internalErrorCloroDevCreditsApi"` [500] `InternalErrorCloroDevCreditsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditsResponse` | `creditsResponseSchema` | `src/models/credits-response.ts` |
| `AuthenticationErrorCloroDevCreditsApi` | `authenticationErrorCloroDevCreditsApiSchema` | `src/models/authentication-error-cloro-dev-credits-api.ts` |
| `RateLimitErrorCloroDevCreditsApi` | `rateLimitErrorCloroDevCreditsApiSchema` | `src/models/rate-limit-error-cloro-dev-credits-api.ts` |
| `InternalErrorCloroDevCreditsApi` | `internalErrorCloroDevCreditsApiSchema` | `src/models/internal-error-cloro-dev-credits-api.ts` |

