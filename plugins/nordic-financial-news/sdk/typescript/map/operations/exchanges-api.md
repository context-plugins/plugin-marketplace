<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExchangesApi — operations

Accessor: `client.exchangesApi` · Source: `src/resources/exchanges-api.ts` · 3 operations · Request and error types: namespace `ExchangesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Exchanges

- **Signature**: `getApiV1Exchanges(request?: ExchangesApi.GetApiV1ExchangesRequest, options?: RequestOptions): ApiPromise<ApiV1ExchangesResponse, ExchangesApi.GetApiV1ExchangesError>`
- **Wire**: `GET /api/v1/exchanges`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ExchangesResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `ExchangesApi.GetApiV1ExchangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [401] `ProblemDetails` · `"problemDetails2"` [403] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangesApi.GetApiV1ExchangesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `country` | `query` | — | `string` | no |
| `fields` | `query` | — | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ExchangesResponse` | `apiV1ExchangesResponseSchema` | `src/models/api-v1-exchanges-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1ExchangesByIdentifier

- **Signature**: `getApiV1ExchangesByIdentifier(request: ExchangesApi.GetApiV1ExchangesByIdentifierRequest, options?: RequestOptions): ApiPromise<ApiV1ExchangesResponse1, ExchangesApi.GetApiV1ExchangesByIdentifierError>`
- **Wire**: `GET /api/v1/exchanges/{identifier}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ExchangesResponse1`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `ExchangesApi.GetApiV1ExchangesByIdentifierError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [404] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangesApi.GetApiV1ExchangesByIdentifierRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identifier` | `path` | — | `string` | yes |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ExchangesResponse1` | `apiV1ExchangesResponse1Schema` | `src/models/api-v1-exchanges-response1.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1ExchangesByIdentifierCompanies

- **Signature**: `getApiV1ExchangesByIdentifierCompanies(request: ExchangesApi.GetApiV1ExchangesByIdentifierCompaniesRequest, options?: RequestOptions): ApiPromise<ApiV1ExchangesCompaniesResponse, ExchangesApi.GetApiV1ExchangesByIdentifierCompaniesError>`
- **Wire**: `GET /api/v1/exchanges/{identifier}/companies`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ExchangesCompaniesResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `ExchangesApi.GetApiV1ExchangesByIdentifierCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [404] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangesApi.GetApiV1ExchangesByIdentifierCompaniesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identifier` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ExchangesCompaniesResponse` | `apiV1ExchangesCompaniesResponseSchema` | `src/models/api-v1-exchanges-companies-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

