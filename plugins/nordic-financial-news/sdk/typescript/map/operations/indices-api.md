<!-- Generated file — do not edit; regenerated with the SDK. -->

# IndicesApi — operations

Accessor: `client.indicesApi` · Source: `src/resources/indices-api.ts` · 3 operations · Request and error types: namespace `IndicesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Indices

- **Signature**: `getApiV1Indices(request?: IndicesApi.GetApiV1IndicesRequest, options?: RequestOptions): ApiPromise<ApiV1IndicesResponse, IndicesApi.GetApiV1IndicesError>`
- **Wire**: `GET /api/v1/indices`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1IndicesResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `IndicesApi.GetApiV1IndicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [401] `ProblemDetails` · `"problemDetails2"` [403] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IndicesApi.GetApiV1IndicesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `exchange` | `query` | — | `string` | no |
| `fields` | `query` | — | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1IndicesResponse` | `apiV1IndicesResponseSchema` | `src/models/api-v1-indices-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1IndicesByIdentifier

- **Signature**: `getApiV1IndicesByIdentifier(request: IndicesApi.GetApiV1IndicesByIdentifierRequest, options?: RequestOptions): ApiPromise<ApiV1IndicesResponse1, IndicesApi.GetApiV1IndicesByIdentifierError>`
- **Wire**: `GET /api/v1/indices/{identifier}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1IndicesResponse1`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `IndicesApi.GetApiV1IndicesByIdentifierError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [404] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IndicesApi.GetApiV1IndicesByIdentifierRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identifier` | `path` | — | `string` | yes |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1IndicesResponse1` | `apiV1IndicesResponse1Schema` | `src/models/api-v1-indices-response1.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1IndicesByIdentifierCompanies

- **Signature**: `getApiV1IndicesByIdentifierCompanies(request: IndicesApi.GetApiV1IndicesByIdentifierCompaniesRequest, options?: RequestOptions): ApiPromise<ApiV1IndicesCompaniesResponse, IndicesApi.GetApiV1IndicesByIdentifierCompaniesError>`
- **Wire**: `GET /api/v1/indices/{identifier}/companies`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1IndicesCompaniesResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `IndicesApi.GetApiV1IndicesByIdentifierCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [404] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IndicesApi.GetApiV1IndicesByIdentifierCompaniesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identifier` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1IndicesCompaniesResponse` | `apiV1IndicesCompaniesResponseSchema` | `src/models/api-v1-indices-companies-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

