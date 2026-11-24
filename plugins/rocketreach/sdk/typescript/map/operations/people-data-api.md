<!-- Generated file — do not edit; regenerated with the SDK. -->

# PeopleDataApi — operations

Accessor: `client.peopleDataApi` · Source: `src/resources/people-data-api.ts` · 9 operations · Request and error types: namespace `PeopleDataApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `rocket-reach`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkPersonLookupStatus

- **Signature**: `checkPersonLookupStatus(request?: PeopleDataApi.CheckPersonLookupStatusRequest, options?: RequestOptions): ApiPromise<ProfileApiCompiledCompany[], PeopleDataApi.CheckPersonLookupStatusError>`
- **Wire**: `GET /person/checkStatus`
- **Auth**: `rocketReachApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProfileApiCompiledCompany[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `PeopleDataApi.CheckPersonLookupStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PeopleDataApi.CheckPersonLookupStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `number[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileApiCompiledCompany` | `profileApiCompiledCompanySchema` | `src/models/profile-api-compiled-company.ts` |

### checkUniversalPersonLookupStatus

- **Signature**: `checkUniversalPersonLookupStatus(request?: PeopleDataApi.CheckUniversalPersonLookupStatusRequest, options?: RequestOptions): ApiPromise<UniversalCreditPersonLookupOutput[], PeopleDataApi.CheckUniversalPersonLookupStatusError>`
- **Wire**: `GET /universal/person/check_status`
- **Auth**: `rocketReachApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UniversalCreditPersonLookupOutput[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `PeopleDataApi.CheckUniversalPersonLookupStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PeopleDataApi.CheckUniversalPersonLookupStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `number[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UniversalCreditPersonLookupOutput` | `universalCreditPersonLookupOutputSchema` | `src/models/universal-credit-person-lookup-output.ts` |

### createPersonAndCompanyLookup2

- **Signature**: `createPersonAndCompanyLookup2(request?: PeopleDataApi.CreatePersonAndCompanyLookup2Request, options?: RequestOptions): ApiPromise<ProfileApiSerializerWithCompiledCompany, PeopleDataApi.CreatePersonAndCompanyLookup2Error>`
- **Wire**: `GET /profile-company/lookup`
- **Auth**: `rocketReachApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProfileApiSerializerWithCompiledCompany`
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `PeopleDataApi.CreatePersonAndCompanyLookup2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PeopleDataApi.CreatePersonAndCompanyLookup2Request` (13):

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

### createPersonBulkLookup

- **Signature**: `createPersonBulkLookup(request?: PeopleDataApi.CreatePersonBulkLookupRequest, options?: RequestOptions): ApiPromise<undefined, PeopleDataApi.CreatePersonBulkLookupError>`
- **Wire**: `POST /bulkLookup`
- **Auth**: `rocketReachApiKey`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `PeopleDataApi.CreatePersonBulkLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PeopleDataApi.CreatePersonBulkLookupRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `queries` | `form` | — | `ProfileMatch[]` | no | — |
| `profileList` | `form` | `profile_list` | `string` | no | `"API Bulk Lookup"` |
| `webhookId` | `form` | `webhook_id` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileMatch` | `profileMatchSchema` | `src/models/profile-match.ts` |

### createPersonLookup

- **Signature**: `createPersonLookup(request?: PeopleDataApi.CreatePersonLookupRequest, options?: RequestOptions): ApiPromise<ProfileApiWithMetadataCompiledCompany, PeopleDataApi.CreatePersonLookupError>`
- **Wire**: `GET /person/lookup`
- **Auth**: `rocketReachApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProfileApiWithMetadataCompiledCompany`
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `PeopleDataApi.CreatePersonLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PeopleDataApi.CreatePersonLookupRequest` (13):

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
| `ProfileApiWithMetadataCompiledCompany` | `profileApiWithMetadataCompiledCompanySchema` | `src/models/profile-api-with-metadata-compiled-company.ts` |

### createPersonSearch

- **Signature**: `createPersonSearch(request?: PeopleDataApi.CreatePersonSearchRequest, options?: RequestOptions): ApiPromise<ProfileSearchResultSerializerBase[], PeopleDataApi.CreatePersonSearchError>`
- **Wire**: `POST /person/search`
- **Auth**: `rocketReachApiKey`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProfileSearchResultSerializerBase[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `PeopleDataApi.CreatePersonSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PeopleDataApi.CreatePersonSearchRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `start` | `form` | — | `number` | no | `1` |
| `pageSize` | `form` | `page_size` | `number` | no | `10` |
| `query` | `form` | — | `PersonQuery1` | no | — |
| `orderBy` | `form` | `order_by` | `OrderByEnum` | no | `OrderByEnum.Relevance` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PersonQuery1` | `personQuery1Schema` | `src/models/person-query1.ts` |
| `OrderByEnum` | `orderByEnumSchema` | `src/models/order-by-enum.ts` |
| `ProfileSearchResultSerializerBase` | `profileSearchResultSerializerBaseSchema` | `src/models/profile-search-result-serializer-base.ts` |

### createUniversalPersonBulkLookup

- **Signature**: `createUniversalPersonBulkLookup(request?: PeopleDataApi.CreateUniversalPersonBulkLookupRequest, options?: RequestOptions): ApiPromise<undefined, PeopleDataApi.CreateUniversalPersonBulkLookupError>`
- **Wire**: `POST /universal/person/bulk_lookup`
- **Auth**: `rocketReachApiKey`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `PeopleDataApi.CreateUniversalPersonBulkLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PeopleDataApi.CreateUniversalPersonBulkLookupRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `queries` | `form` | — | `UniversalCreditPersonLookupInput[]` | no | — |
| `profileList` | `form` | `profile_list` | `string` | no | `"API Bulk Lookup"` |
| `webhookId` | `form` | `webhook_id` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UniversalCreditPersonLookupInput` | `universalCreditPersonLookupInputSchema` | `src/models/universal-credit-person-lookup-input.ts` |

### createUniversalPersonLookup

- **Signature**: `createUniversalPersonLookup(request?: PeopleDataApi.CreateUniversalPersonLookupRequest, options?: RequestOptions): ApiPromise<UniversalCreditPersonLookupOutputWithMetadata, PeopleDataApi.CreateUniversalPersonLookupError>`
- **Wire**: `GET /universal/person/lookup`
- **Auth**: `rocketReachApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UniversalCreditPersonLookupOutputWithMetadata`
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `PeopleDataApi.CreateUniversalPersonLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PeopleDataApi.CreateUniversalPersonLookupRequest` (17):

| Field | Channel | Wire | Type | Req | Default | Style |
| --- | --- | --- | --- | --- | --- | --- |
| `currentEmployer` | `query` | `current_employer` | `string` | no | — | — |
| `email` | `query` | — | `string` | no | — | — |
| `id` | `query` | — | `number` | no | — | — |
| `linkedinExtUrl` | `query` | `linkedin_ext_url` | `string` | no | — | — |
| `linkedinUrl` | `query` | `linkedin_url` | `string` | no | — | — |
| `metadata` | `query` | — | `Record<string, unknown>` | no | — | `spread` |
| `name` | `query` | — | `string` | no | — | — |
| `npiNumber` | `query` | `npi_number` | `number` | no | — | — |
| `phone` | `query` | — | `string` | no | — | — |
| `returnCachedEmails` | `query` | `return_cached_emails` | `boolean` | no | `true` | — |
| `revealDetailedPersonEnrichment` | `query` | `reveal_detailed_person_enrichment` | `boolean` | no | `false` | — |
| `revealHealthcareEnrichment` | `query` | `reveal_healthcare_enrichment` | `boolean` | no | `false` | — |
| `revealPersonalEmail` | `query` | `reveal_personal_email` | `boolean` | no | `false` | — |
| `revealPhone` | `query` | `reveal_phone` | `boolean` | no | `false` | — |
| `revealProfessionalEmail` | `query` | `reveal_professional_email` | `boolean` | no | `false` | — |
| `title` | `query` | — | `string` | no | — | — |
| `webhookId` | `query` | `webhook_id` | `number` | no | — | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UniversalCreditPersonLookupOutputWithMetadata` | `universalCreditPersonLookupOutputWithMetadataSchema` | `src/models/universal-credit-person-lookup-output-with-metadata.ts` |

### createUniversalPersonSearch

- **Signature**: `createUniversalPersonSearch(request?: PeopleDataApi.CreateUniversalPersonSearchRequest, options?: RequestOptions): ApiPromise<UniversalCreditPersonSearchOutput[], PeopleDataApi.CreateUniversalPersonSearchError>`
- **Wire**: `POST /universal/person/search`
- **Auth**: `rocketReachApiKey`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UniversalCreditPersonSearchOutput[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `RocketReachError` with `kind: "api"`, an instance of `PeopleDataApi.CreateUniversalPersonSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PeopleDataApi.CreateUniversalPersonSearchRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `start` | `form` | — | `number` | no | `1` |
| `pageSize` | `form` | `page_size` | `number` | no | `100` |
| `query` | `form` | — | `PersonQuery` | no | — |
| `orderBy` | `form` | `order_by` | `OrderByEnum` | no | `OrderByEnum.Relevance` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PersonQuery` | `personQuerySchema` | `src/models/person-query.ts` |
| `OrderByEnum` | `orderByEnumSchema` | `src/models/order-by-enum.ts` |
| `UniversalCreditPersonSearchOutput` | `universalCreditPersonSearchOutputSchema` | `src/models/universal-credit-person-search-output.ts` |

