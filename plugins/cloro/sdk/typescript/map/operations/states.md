<!-- Generated file — do not edit; regenerated with the SDK. -->

# States — operations

Accessor: `client.states` · Source: `src/resources/states.ts` · 1 operation · Request and error types: namespace `States`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloro`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getStates

- **Signature**: `getStates(request: States.GetStatesRequest, options?: RequestOptions): ApiPromise<V1StatesResponse[], States.GetStatesError>`
- **Wire**: `GET /v1/states`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1StatesResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CloroError` with `kind: "api"`, an instance of `States.GetStatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevCountriesApi"` [400] `ValidationErrorCloroDevCountriesApi` · `"authenticationErrorCloroDevCountriesApi"` [401] `AuthenticationErrorCloroDevCountriesApi` · `"rateLimitErrorCloroDevStatesApi"` [429] `RateLimitErrorCloroDevStatesApi` · `"internalErrorCloroDevCountriesApi"` [500] `InternalErrorCloroDevCountriesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `States.GetStatesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1StatesResponse` | `v1StatesResponseSchema` | `src/models/v1-states-response.ts` |
| `ValidationErrorCloroDevCountriesApi` | `validationErrorCloroDevCountriesApiSchema` | `src/models/validation-error-cloro-dev-countries-api.ts` |
| `AuthenticationErrorCloroDevCountriesApi` | `authenticationErrorCloroDevCountriesApiSchema` | `src/models/authentication-error-cloro-dev-countries-api.ts` |
| `RateLimitErrorCloroDevStatesApi` | `rateLimitErrorCloroDevStatesApiSchema` | `src/models/rate-limit-error-cloro-dev-states-api.ts` |
| `InternalErrorCloroDevCountriesApi` | `internalErrorCloroDevCountriesApiSchema` | `src/models/internal-error-cloro-dev-countries-api.ts` |

