<!-- Generated file — do not edit; regenerated with the SDK. -->

# CurrencyApi — operations

Accessor: `client.currencyApi` · Source: `src/resources/currency-api.ts` · 1 operation · Request and error types: namespace `CurrencyApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listCurrencies

- **Signature**: `listCurrencies(request: CurrencyApi.ListCurrenciesRequest, options?: RequestOptions): ApiPromise<CompaniesApiCurrenciesResponse, CurrencyApi.ListCurrenciesError>`
- **Wire**: `GET /companies({company_id})/currencies`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiCurrenciesResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `CurrencyApi.ListCurrenciesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CurrencyApi.ListCurrenciesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiCurrenciesResponse` | `companiesApiCurrenciesResponseSchema` | `src/models/companies-api-currencies-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

