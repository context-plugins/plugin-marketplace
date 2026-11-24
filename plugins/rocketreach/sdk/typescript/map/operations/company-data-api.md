<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompanyDataApi — operations

Accessor: `client.companyDataApi` · Source: `src/resources/company-data-api.ts` · 5 operations · Request and error types: namespace `CompanyDataApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `rocket-reach`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCompanyLookup

- **Signature**: `createCompanyLookup(request?: CompanyDataApi.CreateCompanyLookupRequest, options?: RequestOptions): ApiPromise<CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CompanyDataApi.CreateCompanyLookupError>`
- **Wire**: `GET /company/lookup/`
- **Auth**: `rocketReachApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompiledCompanyApiSerializerWithExtendedCompanyAttributes`
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `CompanyDataApi.CreateCompanyLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompanyDataApi.CreateCompanyLookupRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domain` | `query` | — | `string` | no |
| `id` | `query` | — | `number` | no |
| `linkedinUrl` | `query` | `linkedin_url` | `string` | no |
| `name` | `query` | — | `string` | no |
| `ticker` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompiledCompanyApiSerializerWithExtendedCompanyAttributes` | `compiledCompanyApiSerializerWithExtendedCompanyAttributesSchema` | `src/models/compiled-company-api-serializer-with-extended-company-attributes.ts` |

### createCompanySearch

- **Signature**: `createCompanySearch(request?: CompanyDataApi.CreateCompanySearchRequest, options?: RequestOptions): ApiPromise<CompiledCompanyPublicDetails[], CompanyDataApi.CreateCompanySearchError>`
- **Wire**: `POST /searchCompany`
- **Auth**: `rocketReachApiKey`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompiledCompanyPublicDetails[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `CompanyDataApi.CreateCompanySearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompanyDataApi.CreateCompanySearchRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `start` | `form` | — | `number` | no | `1` |
| `pageSize` | `form` | `page_size` | `number` | no | `10` |
| `query` | `form` | — | `CompanyQuery1` | no | — |
| `orderBy` | `form` | `order_by` | `OrderByEnum` | no | `OrderByEnum.Relevance` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyQuery1` | `companyQuery1Schema` | `src/models/company-query1.ts` |
| `OrderByEnum` | `orderByEnumSchema` | `src/models/order-by-enum.ts` |
| `CompiledCompanyPublicDetails` | `compiledCompanyPublicDetailsSchema` | `src/models/compiled-company-public-details.ts` |

### createPersonAndCompanyLookup

- **Signature**: `createPersonAndCompanyLookup(request?: CompanyDataApi.CreatePersonAndCompanyLookupRequest, options?: RequestOptions): ApiPromise<ProfileApiSerializerWithCompiledCompany, CompanyDataApi.CreatePersonAndCompanyLookupError>`
- **Wire**: `GET /profile-company/lookup`
- **Auth**: `rocketReachApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProfileApiSerializerWithCompiledCompany`
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `CompanyDataApi.CreatePersonAndCompanyLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompanyDataApi.CreatePersonAndCompanyLookupRequest` (13):

| Field | Channel | Wire | Type | Req | Default | Style |
| --- | --- | --- | --- | --- | --- | --- |
| `currentEmployer` | `query` | `current_employer` | `string` | no | — | — |
| `email` | `query` | — | `string` | no | — | — |
| `id` | `query` | — | `number` | no | — | — |
| `linkedinExtUrl` | `query` | `linkedin_ext_url` | `string` | no | — | — |
| `linkedinUrl` | `query` | `linkedin_url` | `string` | no | — | — |
| `lookupType` | `query` | `lookup_type` | `LookupType` | no | — | — |
| `metadata` | `query` | — | `Record<string, unknown>` | no | — | `spread` |
| `name` | `query` | — | `string` | no | — | — |
| `npiNumber` | `query` | `npi_number` | `number` | no | — | — |
| `phone` | `query` | — | `string` | no | — | — |
| `returnCachedEmails` | `query` | `return_cached_emails` | `boolean` | no | `true` | — |
| `title` | `query` | — | `string` | no | — | — |
| `webhookId` | `query` | `webhook_id` | `number` | no | — | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `LookupType` | `lookupTypeSchema` | `src/models/lookup-type.ts` |
| `ProfileApiSerializerWithCompiledCompany` | `profileApiSerializerWithCompiledCompanySchema` | `src/models/profile-api-serializer-with-compiled-company.ts` |

### createUniversalCompanyLookup

- **Signature**: `createUniversalCompanyLookup(request?: CompanyDataApi.CreateUniversalCompanyLookupRequest, options?: RequestOptions): ApiPromise<CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CompanyDataApi.CreateUniversalCompanyLookupError>`
- **Wire**: `GET /universal/company/lookup`
- **Auth**: `rocketReachApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompiledCompanyApiSerializerWithExtendedCompanyAttributes`
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `CompanyDataApi.CreateUniversalCompanyLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompanyDataApi.CreateUniversalCompanyLookupRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domain` | `query` | — | `string` | no |
| `id` | `query` | — | `number` | no |
| `linkedinUrl` | `query` | `linkedin_url` | `string` | no |
| `name` | `query` | — | `string` | no |
| `ticker` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompiledCompanyApiSerializerWithExtendedCompanyAttributes` | `compiledCompanyApiSerializerWithExtendedCompanyAttributesSchema` | `src/models/compiled-company-api-serializer-with-extended-company-attributes.ts` |

### createUniversalCompanySearch

- **Signature**: `createUniversalCompanySearch(request?: CompanyDataApi.CreateUniversalCompanySearchRequest, options?: RequestOptions): ApiPromise<UniversalCreditCompanySearchOutput[], CompanyDataApi.CreateUniversalCompanySearchError>`
- **Wire**: `POST /universal/company/search`
- **Auth**: `rocketReachApiKey`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UniversalCreditCompanySearchOutput[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `CompanyDataApi.CreateUniversalCompanySearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompanyDataApi.CreateUniversalCompanySearchRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `start` | `form` | — | `number` | no | `1` |
| `pageSize` | `form` | `page_size` | `number` | no | `100` |
| `query` | `form` | — | `CompanyQuery` | no | — |
| `orderBy` | `form` | `order_by` | `OrderByEnum` | no | `OrderByEnum.Relevance` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyQuery` | `companyQuerySchema` | `src/models/company-query.ts` |
| `OrderByEnum` | `orderByEnumSchema` | `src/models/order-by-enum.ts` |
| `UniversalCreditCompanySearchOutput` | `universalCreditCompanySearchOutputSchema` | `src/models/universal-credit-company-search-output.ts` |

