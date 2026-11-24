<!-- Generated file — do not edit; regenerated with the SDK. -->

# Countries — operations

Accessor: `client.countries` · Source: `src/resources/countries.ts` · 1 operation · Request and error types: namespace `Countries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloro`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCountries

- **Signature**: `getCountries(request?: Countries.GetCountriesRequest, options?: RequestOptions): ApiPromise<string[], Countries.GetCountriesError>`
- **Wire**: `GET /v1/countries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CloroError` with `kind: "api"`, an instance of `Countries.GetCountriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationErrorCloroDevCountriesApi"` [400] `ValidationErrorCloroDevCountriesApi` · `"authenticationErrorCloroDevCountriesApi"` [401] `AuthenticationErrorCloroDevCountriesApi` · `"notFoundErrorCloroDevCountriesApi"` [404] `NotFoundErrorCloroDevCountriesApi` · `"rateLimitErrorCloroDevCountriesApi"` [429] `RateLimitErrorCloroDevCountriesApi` · `"internalErrorCloroDevCountriesApi"` [500] `InternalErrorCloroDevCountriesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Countries.GetCountriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `model` | `query` | `Model` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Model` | `modelSchema` | `src/models/model.ts` |
| `ValidationErrorCloroDevCountriesApi` | `validationErrorCloroDevCountriesApiSchema` | `src/models/validation-error-cloro-dev-countries-api.ts` |
| `AuthenticationErrorCloroDevCountriesApi` | `authenticationErrorCloroDevCountriesApiSchema` | `src/models/authentication-error-cloro-dev-countries-api.ts` |
| `NotFoundErrorCloroDevCountriesApi` | `notFoundErrorCloroDevCountriesApiSchema` | `src/models/not-found-error-cloro-dev-countries-api.ts` |
| `RateLimitErrorCloroDevCountriesApi` | `rateLimitErrorCloroDevCountriesApiSchema` | `src/models/rate-limit-error-cloro-dev-countries-api.ts` |
| `InternalErrorCloroDevCountriesApi` | `internalErrorCloroDevCountriesApiSchema` | `src/models/internal-error-cloro-dev-countries-api.ts` |

