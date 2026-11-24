<!-- Generated file — do not edit; regenerated with the SDK. -->

# GrantsApi — operations

Accessor: `client.grantsApi` · Source: `src/resources/grants-api.ts` · 8 operations · Request and error types: namespace `GrantsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `plinth-us-grants-data`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1GrantsFunders

- **Signature**: `getApiV1GrantsFunders(request?: GrantsApi.GetApiV1GrantsFundersRequest, options?: RequestOptions): ApiPromise<FundersResponse, GrantsApi.GetApiV1GrantsFundersError>`
- **Wire**: `GET /api/v1/grants/funders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FundersResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `GrantsApi.GetApiV1GrantsFundersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.GetApiV1GrantsFundersRequest` (33):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `funderId` | `query` | `funder_id` | `FunderId` | no |
| `recipId` | `query` | `recip_id` | `RecipId` | no |
| `idType` | `query` | `id_type` | `IdType1` | no |
| `year` | `query` | — | `YearPlinthUsDataGrantsApi` | no |
| `minYear` | `query` | `min_year` | `MinYear` | no |
| `maxYear` | `query` | `max_year` | `MaxYear` | no |
| `subject` | `query` | — | `Subject` | no |
| `location` | `query` | — | `Location1` | no |
| `geoIdType` | `query` | `geo_id_type` | `GeoIdType1` | no |
| `locationType` | `query` | `location_type` | `LocationType1` | no |
| `country` | `query` | — | `CountryVariantQgdleu` | no |
| `query` | `query` | — | `Query` | no |
| `support` | `query` | — | `Support` | no |
| `funderType` | `query` | `funder_type` | `FunderType1` | no |
| `exclude` | `query` | — | `Exclude` | no |
| `excludeDaf` | `query` | `exclude_daf` | `ExcludeDaf` | no |
| `minAmt` | `query` | `min_amt` | `MinAmt` | no |
| `maxAmt` | `query` | `max_amt` | `MaxAmt` | no |
| `minMatchProb` | `query` | `min_match_prob` | `MinMatchProb` | no |
| `einSource` | `query` | `ein_source` | `EinSource1` | no |
| `jurisdiction` | `query` | — | `Jurisdiction` | no |
| `strict` | `query` | — | `Strict` | no |
| `format` | `query` | — | `Format1` | no |
| `population` | `query` | — | `Population` | no |
| `transaction` | `query` | — | `Transaction` | no |
| `includeGov` | `query` | `include_gov` | `IncludeGov` | no |
| `lastUpdated` | `query` | `last_updated` | `LastUpdated` | no |
| `profileLevels` | `query` | `profile_levels` | `ProfileLevels` | no |
| `page` | `query` | — | `Page` | no |
| `limit` | `query` | — | `Limit` | no |
| `sortBy` | `query` | `sort_by` | `SortBy` | no |
| `sortOrder` | `query` | `sort_order` | `SortOrder11` | no |
| `example` | `query` | — | `Example1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FunderId` | `funderIdSchema` | `src/models/unions/funder-id.ts` |
| `RecipId` | `recipIdSchema` | `src/models/unions/recip-id.ts` |
| `IdType1` | `idType1Schema` | `src/models/unions/id-type1.ts` |
| `YearPlinthUsDataGrantsApi` | `yearPlinthUsDataGrantsApiSchema` | `src/models/unions/year-plinth-us-data-grants-api.ts` |
| `MinYear` | `minYearSchema` | `src/models/unions/min-year.ts` |
| `MaxYear` | `maxYearSchema` | `src/models/unions/max-year.ts` |
| `Subject` | `subjectSchema` | `src/models/unions/subject.ts` |
| `Location1` | `location1Schema` | `src/models/unions/location1.ts` |
| `GeoIdType1` | `geoIdType1Schema` | `src/models/unions/geo-id-type1.ts` |
| `LocationType1` | `locationType1Schema` | `src/models/unions/location-type1.ts` |
| `CountryVariantQgdleu` | `countryVariantQgdleuSchema` | `src/models/unions/country-variant-qgdleu.ts` |
| `Query` | `querySchema` | `src/models/unions/query.ts` |
| `Support` | `supportSchema` | `src/models/unions/support.ts` |
| `FunderType1` | `funderType1Schema` | `src/models/unions/funder-type1.ts` |
| `Exclude` | `excludeSchema` | `src/models/unions/exclude.ts` |
| `ExcludeDaf` | `excludeDafSchema` | `src/models/unions/exclude-daf.ts` |
| `MinAmt` | `minAmtSchema` | `src/models/unions/min-amt.ts` |
| `MaxAmt` | `maxAmtSchema` | `src/models/unions/max-amt.ts` |
| `MinMatchProb` | `minMatchProbSchema` | `src/models/unions/min-match-prob.ts` |
| `EinSource1` | `einSource1Schema` | `src/models/unions/ein-source1.ts` |
| `Jurisdiction` | `jurisdictionSchema` | `src/models/unions/jurisdiction.ts` |
| `Strict` | `strictSchema` | `src/models/unions/strict.ts` |
| `Format1` | `format1Schema` | `src/models/unions/format1.ts` |
| `Population` | `populationSchema` | `src/models/unions/population.ts` |
| `Transaction` | `transactionSchema` | `src/models/unions/transaction.ts` |
| `IncludeGov` | `includeGovSchema` | `src/models/unions/include-gov.ts` |
| `LastUpdated` | `lastUpdatedSchema` | `src/models/unions/last-updated.ts` |
| `ProfileLevels` | `profileLevelsSchema` | `src/models/unions/profile-levels.ts` |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `Limit` | `limitSchema` | `src/models/unions/limit.ts` |
| `SortBy` | `sortBySchema` | `src/models/unions/sort-by.ts` |
| `SortOrder11` | `sortOrder11Schema` | `src/models/unions/sort-order11.ts` |
| `Example1` | `example1Schema` | `src/models/example1.ts` |
| `FundersResponse` | `fundersResponseSchema` | `src/models/funders-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getApiV1GrantsRecipients

- **Signature**: `getApiV1GrantsRecipients(request?: GrantsApi.GetApiV1GrantsRecipientsRequest, options?: RequestOptions): ApiPromise<RecipientsResponse, GrantsApi.GetApiV1GrantsRecipientsError>`
- **Wire**: `GET /api/v1/grants/recipients`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecipientsResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `GrantsApi.GetApiV1GrantsRecipientsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.GetApiV1GrantsRecipientsRequest` (33):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `funderId` | `query` | `funder_id` | `FunderId` | no |
| `recipId` | `query` | `recip_id` | `RecipId` | no |
| `idType` | `query` | `id_type` | `IdType1` | no |
| `year` | `query` | — | `YearPlinthUsDataGrantsApi` | no |
| `minYear` | `query` | `min_year` | `MinYear` | no |
| `maxYear` | `query` | `max_year` | `MaxYear` | no |
| `subject` | `query` | — | `Subject` | no |
| `location` | `query` | — | `Location1` | no |
| `geoIdType` | `query` | `geo_id_type` | `GeoIdType1` | no |
| `locationType` | `query` | `location_type` | `LocationType1` | no |
| `country` | `query` | — | `CountryVariantQgdleu` | no |
| `query` | `query` | — | `Query` | no |
| `support` | `query` | — | `Support` | no |
| `funderType` | `query` | `funder_type` | `FunderType1` | no |
| `exclude` | `query` | — | `Exclude` | no |
| `excludeDaf` | `query` | `exclude_daf` | `ExcludeDaf` | no |
| `minAmt` | `query` | `min_amt` | `MinAmt` | no |
| `maxAmt` | `query` | `max_amt` | `MaxAmt` | no |
| `minMatchProb` | `query` | `min_match_prob` | `MinMatchProb` | no |
| `einSource` | `query` | `ein_source` | `EinSource1` | no |
| `jurisdiction` | `query` | — | `Jurisdiction` | no |
| `strict` | `query` | — | `Strict` | no |
| `format` | `query` | — | `Format1` | no |
| `population` | `query` | — | `Population` | no |
| `transaction` | `query` | — | `Transaction` | no |
| `includeGov` | `query` | `include_gov` | `IncludeGov` | no |
| `lastUpdated` | `query` | `last_updated` | `LastUpdated` | no |
| `profileLevels` | `query` | `profile_levels` | `ProfileLevels` | no |
| `page` | `query` | — | `Page` | no |
| `limit` | `query` | — | `Limit` | no |
| `sortBy` | `query` | `sort_by` | `SortBy` | no |
| `sortOrder` | `query` | `sort_order` | `SortOrder11` | no |
| `example` | `query` | — | `Example1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FunderId` | `funderIdSchema` | `src/models/unions/funder-id.ts` |
| `RecipId` | `recipIdSchema` | `src/models/unions/recip-id.ts` |
| `IdType1` | `idType1Schema` | `src/models/unions/id-type1.ts` |
| `YearPlinthUsDataGrantsApi` | `yearPlinthUsDataGrantsApiSchema` | `src/models/unions/year-plinth-us-data-grants-api.ts` |
| `MinYear` | `minYearSchema` | `src/models/unions/min-year.ts` |
| `MaxYear` | `maxYearSchema` | `src/models/unions/max-year.ts` |
| `Subject` | `subjectSchema` | `src/models/unions/subject.ts` |
| `Location1` | `location1Schema` | `src/models/unions/location1.ts` |
| `GeoIdType1` | `geoIdType1Schema` | `src/models/unions/geo-id-type1.ts` |
| `LocationType1` | `locationType1Schema` | `src/models/unions/location-type1.ts` |
| `CountryVariantQgdleu` | `countryVariantQgdleuSchema` | `src/models/unions/country-variant-qgdleu.ts` |
| `Query` | `querySchema` | `src/models/unions/query.ts` |
| `Support` | `supportSchema` | `src/models/unions/support.ts` |
| `FunderType1` | `funderType1Schema` | `src/models/unions/funder-type1.ts` |
| `Exclude` | `excludeSchema` | `src/models/unions/exclude.ts` |
| `ExcludeDaf` | `excludeDafSchema` | `src/models/unions/exclude-daf.ts` |
| `MinAmt` | `minAmtSchema` | `src/models/unions/min-amt.ts` |
| `MaxAmt` | `maxAmtSchema` | `src/models/unions/max-amt.ts` |
| `MinMatchProb` | `minMatchProbSchema` | `src/models/unions/min-match-prob.ts` |
| `EinSource1` | `einSource1Schema` | `src/models/unions/ein-source1.ts` |
| `Jurisdiction` | `jurisdictionSchema` | `src/models/unions/jurisdiction.ts` |
| `Strict` | `strictSchema` | `src/models/unions/strict.ts` |
| `Format1` | `format1Schema` | `src/models/unions/format1.ts` |
| `Population` | `populationSchema` | `src/models/unions/population.ts` |
| `Transaction` | `transactionSchema` | `src/models/unions/transaction.ts` |
| `IncludeGov` | `includeGovSchema` | `src/models/unions/include-gov.ts` |
| `LastUpdated` | `lastUpdatedSchema` | `src/models/unions/last-updated.ts` |
| `ProfileLevels` | `profileLevelsSchema` | `src/models/unions/profile-levels.ts` |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `Limit` | `limitSchema` | `src/models/unions/limit.ts` |
| `SortBy` | `sortBySchema` | `src/models/unions/sort-by.ts` |
| `SortOrder11` | `sortOrder11Schema` | `src/models/unions/sort-order11.ts` |
| `Example1` | `example1Schema` | `src/models/example1.ts` |
| `RecipientsResponse` | `recipientsResponseSchema` | `src/models/recipients-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getApiV1GrantsSummary

- **Signature**: `getApiV1GrantsSummary(request?: GrantsApi.GetApiV1GrantsSummaryRequest, options?: RequestOptions): ApiPromise<SummaryResponse, GrantsApi.GetApiV1GrantsSummaryError>`
- **Wire**: `GET /api/v1/grants/summary`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SummaryResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `GrantsApi.GetApiV1GrantsSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.GetApiV1GrantsSummaryRequest` (29):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `funderId` | `query` | `funder_id` | `FunderId` | no |
| `recipId` | `query` | `recip_id` | `RecipId` | no |
| `idType` | `query` | `id_type` | `IdType1` | no |
| `year` | `query` | — | `YearPlinthUsDataGrantsApi` | no |
| `minYear` | `query` | `min_year` | `MinYear` | no |
| `maxYear` | `query` | `max_year` | `MaxYear` | no |
| `subject` | `query` | — | `Subject` | no |
| `location` | `query` | — | `Location1` | no |
| `geoIdType` | `query` | `geo_id_type` | `GeoIdType1` | no |
| `locationType` | `query` | `location_type` | `LocationType1` | no |
| `country` | `query` | — | `CountryVariantQgdleu` | no |
| `query` | `query` | — | `Query` | no |
| `support` | `query` | — | `Support` | no |
| `funderType` | `query` | `funder_type` | `FunderType1` | no |
| `exclude` | `query` | — | `Exclude` | no |
| `excludeDaf` | `query` | `exclude_daf` | `ExcludeDaf` | no |
| `minAmt` | `query` | `min_amt` | `MinAmt` | no |
| `maxAmt` | `query` | `max_amt` | `MaxAmt` | no |
| `minMatchProb` | `query` | `min_match_prob` | `MinMatchProb` | no |
| `einSource` | `query` | `ein_source` | `EinSource1` | no |
| `jurisdiction` | `query` | — | `Jurisdiction` | no |
| `strict` | `query` | — | `Strict` | no |
| `format` | `query` | — | `Format1` | no |
| `population` | `query` | — | `Population` | no |
| `transaction` | `query` | — | `Transaction` | no |
| `includeGov` | `query` | `include_gov` | `IncludeGov` | no |
| `lastUpdated` | `query` | `last_updated` | `LastUpdated` | no |
| `profileLevels` | `query` | `profile_levels` | `ProfileLevels` | no |
| `example` | `query` | — | `Example3` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FunderId` | `funderIdSchema` | `src/models/unions/funder-id.ts` |
| `RecipId` | `recipIdSchema` | `src/models/unions/recip-id.ts` |
| `IdType1` | `idType1Schema` | `src/models/unions/id-type1.ts` |
| `YearPlinthUsDataGrantsApi` | `yearPlinthUsDataGrantsApiSchema` | `src/models/unions/year-plinth-us-data-grants-api.ts` |
| `MinYear` | `minYearSchema` | `src/models/unions/min-year.ts` |
| `MaxYear` | `maxYearSchema` | `src/models/unions/max-year.ts` |
| `Subject` | `subjectSchema` | `src/models/unions/subject.ts` |
| `Location1` | `location1Schema` | `src/models/unions/location1.ts` |
| `GeoIdType1` | `geoIdType1Schema` | `src/models/unions/geo-id-type1.ts` |
| `LocationType1` | `locationType1Schema` | `src/models/unions/location-type1.ts` |
| `CountryVariantQgdleu` | `countryVariantQgdleuSchema` | `src/models/unions/country-variant-qgdleu.ts` |
| `Query` | `querySchema` | `src/models/unions/query.ts` |
| `Support` | `supportSchema` | `src/models/unions/support.ts` |
| `FunderType1` | `funderType1Schema` | `src/models/unions/funder-type1.ts` |
| `Exclude` | `excludeSchema` | `src/models/unions/exclude.ts` |
| `ExcludeDaf` | `excludeDafSchema` | `src/models/unions/exclude-daf.ts` |
| `MinAmt` | `minAmtSchema` | `src/models/unions/min-amt.ts` |
| `MaxAmt` | `maxAmtSchema` | `src/models/unions/max-amt.ts` |
| `MinMatchProb` | `minMatchProbSchema` | `src/models/unions/min-match-prob.ts` |
| `EinSource1` | `einSource1Schema` | `src/models/unions/ein-source1.ts` |
| `Jurisdiction` | `jurisdictionSchema` | `src/models/unions/jurisdiction.ts` |
| `Strict` | `strictSchema` | `src/models/unions/strict.ts` |
| `Format1` | `format1Schema` | `src/models/unions/format1.ts` |
| `Population` | `populationSchema` | `src/models/unions/population.ts` |
| `Transaction` | `transactionSchema` | `src/models/unions/transaction.ts` |
| `IncludeGov` | `includeGovSchema` | `src/models/unions/include-gov.ts` |
| `LastUpdated` | `lastUpdatedSchema` | `src/models/unions/last-updated.ts` |
| `ProfileLevels` | `profileLevelsSchema` | `src/models/unions/profile-levels.ts` |
| `Example3` | `example3Schema` | `src/models/example3.ts` |
| `SummaryResponse` | `summaryResponseSchema` | `src/models/summary-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getApiV1GrantsTransactions

- **Signature**: `getApiV1GrantsTransactions(request?: GrantsApi.GetApiV1GrantsTransactionsRequest, options?: RequestOptions): ApiPromise<TransactionsResponse, GrantsApi.GetApiV1GrantsTransactionsError>`
- **Wire**: `GET /api/v1/grants/transactions`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionsResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `GrantsApi.GetApiV1GrantsTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.GetApiV1GrantsTransactionsRequest` (33):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `funderId` | `query` | `funder_id` | `FunderId` | no |
| `recipId` | `query` | `recip_id` | `RecipId` | no |
| `idType` | `query` | `id_type` | `IdType1` | no |
| `year` | `query` | — | `YearPlinthUsDataGrantsApi` | no |
| `minYear` | `query` | `min_year` | `MinYear` | no |
| `maxYear` | `query` | `max_year` | `MaxYear` | no |
| `subject` | `query` | — | `Subject` | no |
| `location` | `query` | — | `Location1` | no |
| `geoIdType` | `query` | `geo_id_type` | `GeoIdType1` | no |
| `locationType` | `query` | `location_type` | `LocationType1` | no |
| `country` | `query` | — | `CountryVariantQgdleu` | no |
| `query` | `query` | — | `Query` | no |
| `support` | `query` | — | `Support` | no |
| `funderType` | `query` | `funder_type` | `FunderType1` | no |
| `exclude` | `query` | — | `Exclude` | no |
| `excludeDaf` | `query` | `exclude_daf` | `ExcludeDaf` | no |
| `minAmt` | `query` | `min_amt` | `MinAmt` | no |
| `maxAmt` | `query` | `max_amt` | `MaxAmt` | no |
| `minMatchProb` | `query` | `min_match_prob` | `MinMatchProb` | no |
| `einSource` | `query` | `ein_source` | `EinSource1` | no |
| `jurisdiction` | `query` | — | `Jurisdiction` | no |
| `strict` | `query` | — | `Strict` | no |
| `format` | `query` | — | `Format1` | no |
| `population` | `query` | — | `Population` | no |
| `transaction` | `query` | — | `Transaction` | no |
| `includeGov` | `query` | `include_gov` | `IncludeGov` | no |
| `lastUpdated` | `query` | `last_updated` | `LastUpdated` | no |
| `profileLevels` | `query` | `profile_levels` | `ProfileLevels` | no |
| `page` | `query` | — | `Page` | no |
| `limit` | `query` | — | `Limit` | no |
| `sortBy` | `query` | `sort_by` | `SortBy` | no |
| `sortOrder` | `query` | `sort_order` | `SortOrder11` | no |
| `example` | `query` | — | `Example` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FunderId` | `funderIdSchema` | `src/models/unions/funder-id.ts` |
| `RecipId` | `recipIdSchema` | `src/models/unions/recip-id.ts` |
| `IdType1` | `idType1Schema` | `src/models/unions/id-type1.ts` |
| `YearPlinthUsDataGrantsApi` | `yearPlinthUsDataGrantsApiSchema` | `src/models/unions/year-plinth-us-data-grants-api.ts` |
| `MinYear` | `minYearSchema` | `src/models/unions/min-year.ts` |
| `MaxYear` | `maxYearSchema` | `src/models/unions/max-year.ts` |
| `Subject` | `subjectSchema` | `src/models/unions/subject.ts` |
| `Location1` | `location1Schema` | `src/models/unions/location1.ts` |
| `GeoIdType1` | `geoIdType1Schema` | `src/models/unions/geo-id-type1.ts` |
| `LocationType1` | `locationType1Schema` | `src/models/unions/location-type1.ts` |
| `CountryVariantQgdleu` | `countryVariantQgdleuSchema` | `src/models/unions/country-variant-qgdleu.ts` |
| `Query` | `querySchema` | `src/models/unions/query.ts` |
| `Support` | `supportSchema` | `src/models/unions/support.ts` |
| `FunderType1` | `funderType1Schema` | `src/models/unions/funder-type1.ts` |
| `Exclude` | `excludeSchema` | `src/models/unions/exclude.ts` |
| `ExcludeDaf` | `excludeDafSchema` | `src/models/unions/exclude-daf.ts` |
| `MinAmt` | `minAmtSchema` | `src/models/unions/min-amt.ts` |
| `MaxAmt` | `maxAmtSchema` | `src/models/unions/max-amt.ts` |
| `MinMatchProb` | `minMatchProbSchema` | `src/models/unions/min-match-prob.ts` |
| `EinSource1` | `einSource1Schema` | `src/models/unions/ein-source1.ts` |
| `Jurisdiction` | `jurisdictionSchema` | `src/models/unions/jurisdiction.ts` |
| `Strict` | `strictSchema` | `src/models/unions/strict.ts` |
| `Format1` | `format1Schema` | `src/models/unions/format1.ts` |
| `Population` | `populationSchema` | `src/models/unions/population.ts` |
| `Transaction` | `transactionSchema` | `src/models/unions/transaction.ts` |
| `IncludeGov` | `includeGovSchema` | `src/models/unions/include-gov.ts` |
| `LastUpdated` | `lastUpdatedSchema` | `src/models/unions/last-updated.ts` |
| `ProfileLevels` | `profileLevelsSchema` | `src/models/unions/profile-levels.ts` |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `Limit` | `limitSchema` | `src/models/unions/limit.ts` |
| `SortBy` | `sortBySchema` | `src/models/unions/sort-by.ts` |
| `SortOrder11` | `sortOrder11Schema` | `src/models/unions/sort-order11.ts` |
| `Example` | `exampleSchema` | `src/models/example.ts` |
| `TransactionsResponse` | `transactionsResponseSchema` | `src/models/transactions-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getGrantsSummary

- **Signature**: `getGrantsSummary(request?: GrantsApi.GetGrantsSummaryRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GrantsApi.GetGrantsSummaryError>`
- **Wire**: `GET /api/grants/summary`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `GrantsApi.GetGrantsSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.GetGrantsSummaryRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `funderId` | `query` | `funder_id` | `FunderId` | no |
| `recipId` | `query` | `recip_id` | `RecipId` | no |
| `year` | `query` | — | `YearPlinthUsDataGrantsApi` | no |
| `subject` | `query` | — | `Subject` | no |
| `location` | `query` | — | `Location1` | no |
| `minAmt` | `query` | `min_amt` | `MinAmt` | no |
| `maxAmt` | `query` | `max_amt` | `MaxAmt` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FunderId` | `funderIdSchema` | `src/models/unions/funder-id.ts` |
| `RecipId` | `recipIdSchema` | `src/models/unions/recip-id.ts` |
| `YearPlinthUsDataGrantsApi` | `yearPlinthUsDataGrantsApiSchema` | `src/models/unions/year-plinth-us-data-grants-api.ts` |
| `Subject` | `subjectSchema` | `src/models/unions/subject.ts` |
| `Location1` | `location1Schema` | `src/models/unions/location1.ts` |
| `MinAmt` | `minAmtSchema` | `src/models/unions/min-amt.ts` |
| `MaxAmt` | `maxAmtSchema` | `src/models/unions/max-amt.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listFunders

- **Signature**: `listFunders(request?: GrantsApi.ListFundersRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GrantsApi.ListFundersError>`
- **Wire**: `GET /api/grants/funders`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `GrantsApi.ListFundersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.ListFundersRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `funderId` | `query` | `funder_id` | `FunderId` | no |
| `recipId` | `query` | `recip_id` | `RecipId` | no |
| `year` | `query` | — | `YearPlinthUsDataGrantsApi` | no |
| `subject` | `query` | — | `Subject` | no |
| `location` | `query` | — | `Location1` | no |
| `minAmt` | `query` | `min_amt` | `MinAmt` | no |
| `maxAmt` | `query` | `max_amt` | `MaxAmt` | no |
| `page` | `query` | — | `Page` | no |
| `limit` | `query` | — | `Limit` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FunderId` | `funderIdSchema` | `src/models/unions/funder-id.ts` |
| `RecipId` | `recipIdSchema` | `src/models/unions/recip-id.ts` |
| `YearPlinthUsDataGrantsApi` | `yearPlinthUsDataGrantsApiSchema` | `src/models/unions/year-plinth-us-data-grants-api.ts` |
| `Subject` | `subjectSchema` | `src/models/unions/subject.ts` |
| `Location1` | `location1Schema` | `src/models/unions/location1.ts` |
| `MinAmt` | `minAmtSchema` | `src/models/unions/min-amt.ts` |
| `MaxAmt` | `maxAmtSchema` | `src/models/unions/max-amt.ts` |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `Limit` | `limitSchema` | `src/models/unions/limit.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listGrants

- **Signature**: `listGrants(request?: GrantsApi.ListGrantsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GrantsApi.ListGrantsError>`
- **Wire**: `GET /api/grants/transactions`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `GrantsApi.ListGrantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.ListGrantsRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `funderId` | `query` | `funder_id` | `FunderId` | no |
| `recipId` | `query` | `recip_id` | `RecipId` | no |
| `year` | `query` | — | `YearPlinthUsDataGrantsApi` | no |
| `subject` | `query` | — | `Subject` | no |
| `location` | `query` | — | `Location1` | no |
| `minAmt` | `query` | `min_amt` | `MinAmt` | no |
| `maxAmt` | `query` | `max_amt` | `MaxAmt` | no |
| `page` | `query` | — | `Page` | no |
| `limit` | `query` | — | `Limit` | no |
| `sortBy` | `query` | `sort_by` | `SortBy` | no |
| `sortOrder` | `query` | `sort_order` | `SortOrder1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FunderId` | `funderIdSchema` | `src/models/unions/funder-id.ts` |
| `RecipId` | `recipIdSchema` | `src/models/unions/recip-id.ts` |
| `YearPlinthUsDataGrantsApi` | `yearPlinthUsDataGrantsApiSchema` | `src/models/unions/year-plinth-us-data-grants-api.ts` |
| `Subject` | `subjectSchema` | `src/models/unions/subject.ts` |
| `Location1` | `location1Schema` | `src/models/unions/location1.ts` |
| `MinAmt` | `minAmtSchema` | `src/models/unions/min-amt.ts` |
| `MaxAmt` | `maxAmtSchema` | `src/models/unions/max-amt.ts` |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `Limit` | `limitSchema` | `src/models/unions/limit.ts` |
| `SortBy` | `sortBySchema` | `src/models/unions/sort-by.ts` |
| `SortOrder1` | `sortOrder1Schema` | `src/models/unions/sort-order1.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listRecipients

- **Signature**: `listRecipients(request?: GrantsApi.ListRecipientsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GrantsApi.ListRecipientsError>`
- **Wire**: `GET /api/grants/recipients`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `GrantsApi.ListRecipientsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.ListRecipientsRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `funderId` | `query` | `funder_id` | `FunderId` | no |
| `recipId` | `query` | `recip_id` | `RecipId` | no |
| `year` | `query` | — | `YearPlinthUsDataGrantsApi` | no |
| `subject` | `query` | — | `Subject` | no |
| `location` | `query` | — | `Location1` | no |
| `minAmt` | `query` | `min_amt` | `MinAmt` | no |
| `maxAmt` | `query` | `max_amt` | `MaxAmt` | no |
| `page` | `query` | — | `Page` | no |
| `limit` | `query` | — | `Limit` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FunderId` | `funderIdSchema` | `src/models/unions/funder-id.ts` |
| `RecipId` | `recipIdSchema` | `src/models/unions/recip-id.ts` |
| `YearPlinthUsDataGrantsApi` | `yearPlinthUsDataGrantsApiSchema` | `src/models/unions/year-plinth-us-data-grants-api.ts` |
| `Subject` | `subjectSchema` | `src/models/unions/subject.ts` |
| `Location1` | `location1Schema` | `src/models/unions/location1.ts` |
| `MinAmt` | `minAmtSchema` | `src/models/unions/min-amt.ts` |
| `MaxAmt` | `maxAmtSchema` | `src/models/unions/max-amt.ts` |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `Limit` | `limitSchema` | `src/models/unions/limit.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

