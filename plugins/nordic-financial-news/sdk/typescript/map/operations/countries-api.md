<!-- Generated file — do not edit; regenerated with the SDK. -->

# CountriesApi — operations

Accessor: `client.countriesApi` · Source: `src/resources/countries-api.ts` · 2 operations · Request and error types: namespace `CountriesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Countries

- **Signature**: `getApiV1Countries(request?: CountriesApi.GetApiV1CountriesRequest, options?: RequestOptions): ApiPromise<ApiV1CountriesResponse, CountriesApi.GetApiV1CountriesError>`
- **Wire**: `GET /api/v1/countries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CountriesResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `CountriesApi.GetApiV1CountriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CountriesApi.GetApiV1CountriesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `fields` | `query` | — | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CountriesResponse` | `apiV1CountriesResponseSchema` | `src/models/api-v1-countries-response.ts` |

### getApiV1CountriesByIdentifier

- **Signature**: `getApiV1CountriesByIdentifier(request: CountriesApi.GetApiV1CountriesByIdentifierRequest, options?: RequestOptions): ApiPromise<ApiV1CountriesResponse1, CountriesApi.GetApiV1CountriesByIdentifierError>`
- **Wire**: `GET /api/v1/countries/{identifier}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CountriesResponse1`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `CountriesApi.GetApiV1CountriesByIdentifierError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [404] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CountriesApi.GetApiV1CountriesByIdentifierRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identifier` | `path` | — | `string` | yes |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CountriesResponse1` | `apiV1CountriesResponse1Schema` | `src/models/api-v1-countries-response1.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

