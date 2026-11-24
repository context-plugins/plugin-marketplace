<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProfessionalsAndLicenses — operations

Accessor: `client.professionalsAndLicenses` · Source: `src/resources/professionals-and-licenses.ts` · 4 operations · Request and error types: namespace `ProfessionalsAndLicenses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `common-elements`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### licensesVerify

- **Signature**: `licensesVerify(request: ProfessionalsAndLicenses.LicensesVerifyRequest, options?: RequestOptions): ApiPromise<ApiV1LicensesVerifyResponse, ProfessionalsAndLicenses.LicensesVerifyError>`
- **Wire**: `GET /api/v1/licenses/verify`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1LicensesVerifyResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `ProfessionalsAndLicenses.LicensesVerifyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProfessionalsAndLicenses.LicensesVerifyRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `state` | `query` | — | `string` | yes |
| `licenseNumber` | `query` | `license_number` | `string` | no |
| `name` | `query` | — | `string` | no |
| `licenseType` | `query` | `license_type` | `string` | no |
| `limit` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1LicensesVerifyResponse` | `apiV1LicensesVerifyResponseSchema` | `src/models/api-v1-licenses-verify-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### professionalsAssociations

- **Signature**: `professionalsAssociations(request: ProfessionalsAndLicenses.ProfessionalsAssociationsRequest, options?: RequestOptions): ApiPromise<ApiV1ProfessionalsAssociationsResponse, ProfessionalsAndLicenses.ProfessionalsAssociationsError>`
- **Wire**: `GET /api/v1/professionals/{id}/associations`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ProfessionalsAssociationsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `ProfessionalsAndLicenses.ProfessionalsAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProfessionalsAndLicenses.ProfessionalsAssociationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ProfessionalsAssociationsResponse` | `apiV1ProfessionalsAssociationsResponseSchema` | `src/models/api-v1-professionals-associations-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### professionalsDetail

- **Signature**: `professionalsDetail(request: ProfessionalsAndLicenses.ProfessionalsDetailRequest, options?: RequestOptions): ApiPromise<ApiV1ProfessionalsResponse, ProfessionalsAndLicenses.ProfessionalsDetailError>`
- **Wire**: `GET /api/v1/professionals/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ProfessionalsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `ProfessionalsAndLicenses.ProfessionalsDetailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProfessionalsAndLicenses.ProfessionalsDetailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ProfessionalsResponse` | `apiV1ProfessionalsResponseSchema` | `src/models/api-v1-professionals-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### professionalsSearch

- **Signature**: `professionalsSearch(request?: ProfessionalsAndLicenses.ProfessionalsSearchRequest, options?: RequestOptions): ApiPromise<ApiV1ProfessionalsSearchResponse, ProfessionalsAndLicenses.ProfessionalsSearchError>`
- **Wire**: `GET /api/v1/professionals/search`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ProfessionalsSearchResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `ProfessionalsAndLicenses.ProfessionalsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProfessionalsAndLicenses.ProfessionalsSearchRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `q` | `query` | — | `string` | no |
| `state` | `query` | — | `string` | no |
| `licenseType` | `query` | `license_type` | `string` | no |
| `board` | `query` | — | `string` | no |
| `status` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ProfessionalsSearchResponse` | `apiV1ProfessionalsSearchResponseSchema` | `src/models/api-v1-professionals-search-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

