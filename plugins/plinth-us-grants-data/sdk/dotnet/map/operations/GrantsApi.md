<!-- Generated file — do not edit; regenerated with the SDK. -->

# GrantsApi — operations

Accessor: `client.GrantsApi` · Source: `src/PlinthUsGrantsData/Api/GrantsApi.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1GrantsFunders

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetApiV1GrantsFunders(GetApiV1GrantsFundersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `funder_id` ← `FunderId`, `recip_id` ← `RecipId`, `id_type` ← `IdType`, `year` ← `Year`, `min_year` ← `MinYear`, `max_year` ← `MaxYear`, `subject` ← `Subject`, `location` ← `Location`, `geo_id_type` ← `GeoIdType`, `location_type` ← `LocationType`, `country` ← `Country`, `query` ← `Query`, `support` ← `Support`, `funder_type` ← `FunderType`, `exclude` ← `Exclude`, `exclude_daf` ← `ExcludeDaf`, `min_amt` ← `MinAmt`, `max_amt` ← `MaxAmt`, `min_match_prob` ← `MinMatchProb`, `ein_source` ← `EinSource`, `jurisdiction` ← `Jurisdiction`, `strict` ← `Strict`, `format` ← `Format`, `population` ← `Population`, `transaction` ← `Transaction`, `include_gov` ← `IncludeGov`, `last_updated` ← `LastUpdated`, `profile_levels` ← `ProfileLevels`, `page` ← `Page`, `limit` ← `Limit`, `sort_by` ← `SortBy`, `sort_order` ← `SortOrder`, `example` ← `Example`
- **Returns**: `FundersResponse`
- **Error**: `ApiException<GetApiV1GrantsFundersError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1GrantsFundersRequest` | `src/PlinthUsGrantsData/Requests/GrantsApi/GetApiV1GrantsFundersRequest.cs` |
| `FunderId` | `src/PlinthUsGrantsData/Models/AnyOf/FunderId.cs` |
| `RecipId` | `src/PlinthUsGrantsData/Models/AnyOf/RecipId.cs` |
| `IdType1` | `src/PlinthUsGrantsData/Models/AnyOf/IdType1.cs` |
| `YearPlinthUsDataGrantsApi` | `src/PlinthUsGrantsData/Models/AnyOf/YearPlinthUsDataGrantsApi.cs` |
| `MinYear` | `src/PlinthUsGrantsData/Models/AnyOf/MinYear.cs` |
| `MaxYear` | `src/PlinthUsGrantsData/Models/AnyOf/MaxYear.cs` |
| `Subject` | `src/PlinthUsGrantsData/Models/AnyOf/Subject.cs` |
| `Location1` | `src/PlinthUsGrantsData/Models/AnyOf/Location1.cs` |
| `GeoIdType1` | `src/PlinthUsGrantsData/Models/AnyOf/GeoIdType1.cs` |
| `LocationType1` | `src/PlinthUsGrantsData/Models/AnyOf/LocationType1.cs` |
| `CountryVariantQgdleu` | `src/PlinthUsGrantsData/Models/AnyOf/CountryVariantQgdleu.cs` |
| `Query` | `src/PlinthUsGrantsData/Models/AnyOf/Query.cs` |
| `Support` | `src/PlinthUsGrantsData/Models/AnyOf/Support.cs` |
| `FunderType1` | `src/PlinthUsGrantsData/Models/AnyOf/FunderType1.cs` |
| `Exclude` | `src/PlinthUsGrantsData/Models/AnyOf/Exclude.cs` |
| `ExcludeDaf` | `src/PlinthUsGrantsData/Models/AnyOf/ExcludeDaf.cs` |
| `MinAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MinAmt.cs` |
| `MaxAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MaxAmt.cs` |
| `MinMatchProb` | `src/PlinthUsGrantsData/Models/AnyOf/MinMatchProb.cs` |
| `EinSource1` | `src/PlinthUsGrantsData/Models/AnyOf/EinSource1.cs` |
| `Jurisdiction` | `src/PlinthUsGrantsData/Models/AnyOf/Jurisdiction.cs` |
| `Strict` | `src/PlinthUsGrantsData/Models/AnyOf/Strict.cs` |
| `Format1` | `src/PlinthUsGrantsData/Models/AnyOf/Format1.cs` |
| `Population` | `src/PlinthUsGrantsData/Models/AnyOf/Population.cs` |
| `Transaction` | `src/PlinthUsGrantsData/Models/AnyOf/Transaction.cs` |
| `IncludeGov` | `src/PlinthUsGrantsData/Models/AnyOf/IncludeGov.cs` |
| `LastUpdated` | `src/PlinthUsGrantsData/Models/AnyOf/LastUpdated.cs` |
| `ProfileLevels` | `src/PlinthUsGrantsData/Models/AnyOf/ProfileLevels.cs` |
| `Page` | `src/PlinthUsGrantsData/Models/AnyOf/Page.cs` |
| `Limit` | `src/PlinthUsGrantsData/Models/AnyOf/Limit.cs` |
| `SortBy` | `src/PlinthUsGrantsData/Models/AnyOf/SortBy.cs` |
| `SortOrder11` | `src/PlinthUsGrantsData/Models/AnyOf/SortOrder11.cs` |
| `Example1` | `src/PlinthUsGrantsData/Models/Enums/Example1.cs` |
| `FundersResponse` | `src/PlinthUsGrantsData/Models/FundersResponse.cs` |
| `GetApiV1GrantsFundersError` | `src/PlinthUsGrantsData/Errors/GetApiV1GrantsFundersError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetApiV1GrantsRecipients

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetApiV1GrantsRecipients(GetApiV1GrantsRecipientsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `funder_id` ← `FunderId`, `recip_id` ← `RecipId`, `id_type` ← `IdType`, `year` ← `Year`, `min_year` ← `MinYear`, `max_year` ← `MaxYear`, `subject` ← `Subject`, `location` ← `Location`, `geo_id_type` ← `GeoIdType`, `location_type` ← `LocationType`, `country` ← `Country`, `query` ← `Query`, `support` ← `Support`, `funder_type` ← `FunderType`, `exclude` ← `Exclude`, `exclude_daf` ← `ExcludeDaf`, `min_amt` ← `MinAmt`, `max_amt` ← `MaxAmt`, `min_match_prob` ← `MinMatchProb`, `ein_source` ← `EinSource`, `jurisdiction` ← `Jurisdiction`, `strict` ← `Strict`, `format` ← `Format`, `population` ← `Population`, `transaction` ← `Transaction`, `include_gov` ← `IncludeGov`, `last_updated` ← `LastUpdated`, `profile_levels` ← `ProfileLevels`, `page` ← `Page`, `limit` ← `Limit`, `sort_by` ← `SortBy`, `sort_order` ← `SortOrder`, `example` ← `Example`
- **Returns**: `RecipientsResponse`
- **Error**: `ApiException<GetApiV1GrantsRecipientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1GrantsRecipientsRequest` | `src/PlinthUsGrantsData/Requests/GrantsApi/GetApiV1GrantsRecipientsRequest.cs` |
| `FunderId` | `src/PlinthUsGrantsData/Models/AnyOf/FunderId.cs` |
| `RecipId` | `src/PlinthUsGrantsData/Models/AnyOf/RecipId.cs` |
| `IdType1` | `src/PlinthUsGrantsData/Models/AnyOf/IdType1.cs` |
| `YearPlinthUsDataGrantsApi` | `src/PlinthUsGrantsData/Models/AnyOf/YearPlinthUsDataGrantsApi.cs` |
| `MinYear` | `src/PlinthUsGrantsData/Models/AnyOf/MinYear.cs` |
| `MaxYear` | `src/PlinthUsGrantsData/Models/AnyOf/MaxYear.cs` |
| `Subject` | `src/PlinthUsGrantsData/Models/AnyOf/Subject.cs` |
| `Location1` | `src/PlinthUsGrantsData/Models/AnyOf/Location1.cs` |
| `GeoIdType1` | `src/PlinthUsGrantsData/Models/AnyOf/GeoIdType1.cs` |
| `LocationType1` | `src/PlinthUsGrantsData/Models/AnyOf/LocationType1.cs` |
| `CountryVariantQgdleu` | `src/PlinthUsGrantsData/Models/AnyOf/CountryVariantQgdleu.cs` |
| `Query` | `src/PlinthUsGrantsData/Models/AnyOf/Query.cs` |
| `Support` | `src/PlinthUsGrantsData/Models/AnyOf/Support.cs` |
| `FunderType1` | `src/PlinthUsGrantsData/Models/AnyOf/FunderType1.cs` |
| `Exclude` | `src/PlinthUsGrantsData/Models/AnyOf/Exclude.cs` |
| `ExcludeDaf` | `src/PlinthUsGrantsData/Models/AnyOf/ExcludeDaf.cs` |
| `MinAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MinAmt.cs` |
| `MaxAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MaxAmt.cs` |
| `MinMatchProb` | `src/PlinthUsGrantsData/Models/AnyOf/MinMatchProb.cs` |
| `EinSource1` | `src/PlinthUsGrantsData/Models/AnyOf/EinSource1.cs` |
| `Jurisdiction` | `src/PlinthUsGrantsData/Models/AnyOf/Jurisdiction.cs` |
| `Strict` | `src/PlinthUsGrantsData/Models/AnyOf/Strict.cs` |
| `Format1` | `src/PlinthUsGrantsData/Models/AnyOf/Format1.cs` |
| `Population` | `src/PlinthUsGrantsData/Models/AnyOf/Population.cs` |
| `Transaction` | `src/PlinthUsGrantsData/Models/AnyOf/Transaction.cs` |
| `IncludeGov` | `src/PlinthUsGrantsData/Models/AnyOf/IncludeGov.cs` |
| `LastUpdated` | `src/PlinthUsGrantsData/Models/AnyOf/LastUpdated.cs` |
| `ProfileLevels` | `src/PlinthUsGrantsData/Models/AnyOf/ProfileLevels.cs` |
| `Page` | `src/PlinthUsGrantsData/Models/AnyOf/Page.cs` |
| `Limit` | `src/PlinthUsGrantsData/Models/AnyOf/Limit.cs` |
| `SortBy` | `src/PlinthUsGrantsData/Models/AnyOf/SortBy.cs` |
| `SortOrder11` | `src/PlinthUsGrantsData/Models/AnyOf/SortOrder11.cs` |
| `Example1` | `src/PlinthUsGrantsData/Models/Enums/Example1.cs` |
| `RecipientsResponse` | `src/PlinthUsGrantsData/Models/RecipientsResponse.cs` |
| `GetApiV1GrantsRecipientsError` | `src/PlinthUsGrantsData/Errors/GetApiV1GrantsRecipientsError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetApiV1GrantsSummary

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetApiV1GrantsSummary(GetApiV1GrantsSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `funder_id` ← `FunderId`, `recip_id` ← `RecipId`, `id_type` ← `IdType`, `year` ← `Year`, `min_year` ← `MinYear`, `max_year` ← `MaxYear`, `subject` ← `Subject`, `location` ← `Location`, `geo_id_type` ← `GeoIdType`, `location_type` ← `LocationType`, `country` ← `Country`, `query` ← `Query`, `support` ← `Support`, `funder_type` ← `FunderType`, `exclude` ← `Exclude`, `exclude_daf` ← `ExcludeDaf`, `min_amt` ← `MinAmt`, `max_amt` ← `MaxAmt`, `min_match_prob` ← `MinMatchProb`, `ein_source` ← `EinSource`, `jurisdiction` ← `Jurisdiction`, `strict` ← `Strict`, `format` ← `Format`, `population` ← `Population`, `transaction` ← `Transaction`, `include_gov` ← `IncludeGov`, `last_updated` ← `LastUpdated`, `profile_levels` ← `ProfileLevels`, `example` ← `Example`
- **Returns**: `SummaryResponse`
- **Error**: `ApiException<GetApiV1GrantsSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1GrantsSummaryRequest` | `src/PlinthUsGrantsData/Requests/GrantsApi/GetApiV1GrantsSummaryRequest.cs` |
| `FunderId` | `src/PlinthUsGrantsData/Models/AnyOf/FunderId.cs` |
| `RecipId` | `src/PlinthUsGrantsData/Models/AnyOf/RecipId.cs` |
| `IdType1` | `src/PlinthUsGrantsData/Models/AnyOf/IdType1.cs` |
| `YearPlinthUsDataGrantsApi` | `src/PlinthUsGrantsData/Models/AnyOf/YearPlinthUsDataGrantsApi.cs` |
| `MinYear` | `src/PlinthUsGrantsData/Models/AnyOf/MinYear.cs` |
| `MaxYear` | `src/PlinthUsGrantsData/Models/AnyOf/MaxYear.cs` |
| `Subject` | `src/PlinthUsGrantsData/Models/AnyOf/Subject.cs` |
| `Location1` | `src/PlinthUsGrantsData/Models/AnyOf/Location1.cs` |
| `GeoIdType1` | `src/PlinthUsGrantsData/Models/AnyOf/GeoIdType1.cs` |
| `LocationType1` | `src/PlinthUsGrantsData/Models/AnyOf/LocationType1.cs` |
| `CountryVariantQgdleu` | `src/PlinthUsGrantsData/Models/AnyOf/CountryVariantQgdleu.cs` |
| `Query` | `src/PlinthUsGrantsData/Models/AnyOf/Query.cs` |
| `Support` | `src/PlinthUsGrantsData/Models/AnyOf/Support.cs` |
| `FunderType1` | `src/PlinthUsGrantsData/Models/AnyOf/FunderType1.cs` |
| `Exclude` | `src/PlinthUsGrantsData/Models/AnyOf/Exclude.cs` |
| `ExcludeDaf` | `src/PlinthUsGrantsData/Models/AnyOf/ExcludeDaf.cs` |
| `MinAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MinAmt.cs` |
| `MaxAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MaxAmt.cs` |
| `MinMatchProb` | `src/PlinthUsGrantsData/Models/AnyOf/MinMatchProb.cs` |
| `EinSource1` | `src/PlinthUsGrantsData/Models/AnyOf/EinSource1.cs` |
| `Jurisdiction` | `src/PlinthUsGrantsData/Models/AnyOf/Jurisdiction.cs` |
| `Strict` | `src/PlinthUsGrantsData/Models/AnyOf/Strict.cs` |
| `Format1` | `src/PlinthUsGrantsData/Models/AnyOf/Format1.cs` |
| `Population` | `src/PlinthUsGrantsData/Models/AnyOf/Population.cs` |
| `Transaction` | `src/PlinthUsGrantsData/Models/AnyOf/Transaction.cs` |
| `IncludeGov` | `src/PlinthUsGrantsData/Models/AnyOf/IncludeGov.cs` |
| `LastUpdated` | `src/PlinthUsGrantsData/Models/AnyOf/LastUpdated.cs` |
| `ProfileLevels` | `src/PlinthUsGrantsData/Models/AnyOf/ProfileLevels.cs` |
| `Example3` | `src/PlinthUsGrantsData/Models/Enums/Example3.cs` |
| `SummaryResponse` | `src/PlinthUsGrantsData/Models/SummaryResponse.cs` |
| `GetApiV1GrantsSummaryError` | `src/PlinthUsGrantsData/Errors/GetApiV1GrantsSummaryError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetApiV1GrantsTransactions

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetApiV1GrantsTransactions(GetApiV1GrantsTransactionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `funder_id` ← `FunderId`, `recip_id` ← `RecipId`, `id_type` ← `IdType`, `year` ← `Year`, `min_year` ← `MinYear`, `max_year` ← `MaxYear`, `subject` ← `Subject`, `location` ← `Location`, `geo_id_type` ← `GeoIdType`, `location_type` ← `LocationType`, `country` ← `Country`, `query` ← `Query`, `support` ← `Support`, `funder_type` ← `FunderType`, `exclude` ← `Exclude`, `exclude_daf` ← `ExcludeDaf`, `min_amt` ← `MinAmt`, `max_amt` ← `MaxAmt`, `min_match_prob` ← `MinMatchProb`, `ein_source` ← `EinSource`, `jurisdiction` ← `Jurisdiction`, `strict` ← `Strict`, `format` ← `Format`, `population` ← `Population`, `transaction` ← `Transaction`, `include_gov` ← `IncludeGov`, `last_updated` ← `LastUpdated`, `profile_levels` ← `ProfileLevels`, `page` ← `Page`, `limit` ← `Limit`, `sort_by` ← `SortBy`, `sort_order` ← `SortOrder`, `example` ← `Example`
- **Returns**: `TransactionsResponse`
- **Error**: `ApiException<GetApiV1GrantsTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1GrantsTransactionsRequest` | `src/PlinthUsGrantsData/Requests/GrantsApi/GetApiV1GrantsTransactionsRequest.cs` |
| `FunderId` | `src/PlinthUsGrantsData/Models/AnyOf/FunderId.cs` |
| `RecipId` | `src/PlinthUsGrantsData/Models/AnyOf/RecipId.cs` |
| `IdType1` | `src/PlinthUsGrantsData/Models/AnyOf/IdType1.cs` |
| `YearPlinthUsDataGrantsApi` | `src/PlinthUsGrantsData/Models/AnyOf/YearPlinthUsDataGrantsApi.cs` |
| `MinYear` | `src/PlinthUsGrantsData/Models/AnyOf/MinYear.cs` |
| `MaxYear` | `src/PlinthUsGrantsData/Models/AnyOf/MaxYear.cs` |
| `Subject` | `src/PlinthUsGrantsData/Models/AnyOf/Subject.cs` |
| `Location1` | `src/PlinthUsGrantsData/Models/AnyOf/Location1.cs` |
| `GeoIdType1` | `src/PlinthUsGrantsData/Models/AnyOf/GeoIdType1.cs` |
| `LocationType1` | `src/PlinthUsGrantsData/Models/AnyOf/LocationType1.cs` |
| `CountryVariantQgdleu` | `src/PlinthUsGrantsData/Models/AnyOf/CountryVariantQgdleu.cs` |
| `Query` | `src/PlinthUsGrantsData/Models/AnyOf/Query.cs` |
| `Support` | `src/PlinthUsGrantsData/Models/AnyOf/Support.cs` |
| `FunderType1` | `src/PlinthUsGrantsData/Models/AnyOf/FunderType1.cs` |
| `Exclude` | `src/PlinthUsGrantsData/Models/AnyOf/Exclude.cs` |
| `ExcludeDaf` | `src/PlinthUsGrantsData/Models/AnyOf/ExcludeDaf.cs` |
| `MinAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MinAmt.cs` |
| `MaxAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MaxAmt.cs` |
| `MinMatchProb` | `src/PlinthUsGrantsData/Models/AnyOf/MinMatchProb.cs` |
| `EinSource1` | `src/PlinthUsGrantsData/Models/AnyOf/EinSource1.cs` |
| `Jurisdiction` | `src/PlinthUsGrantsData/Models/AnyOf/Jurisdiction.cs` |
| `Strict` | `src/PlinthUsGrantsData/Models/AnyOf/Strict.cs` |
| `Format1` | `src/PlinthUsGrantsData/Models/AnyOf/Format1.cs` |
| `Population` | `src/PlinthUsGrantsData/Models/AnyOf/Population.cs` |
| `Transaction` | `src/PlinthUsGrantsData/Models/AnyOf/Transaction.cs` |
| `IncludeGov` | `src/PlinthUsGrantsData/Models/AnyOf/IncludeGov.cs` |
| `LastUpdated` | `src/PlinthUsGrantsData/Models/AnyOf/LastUpdated.cs` |
| `ProfileLevels` | `src/PlinthUsGrantsData/Models/AnyOf/ProfileLevels.cs` |
| `Page` | `src/PlinthUsGrantsData/Models/AnyOf/Page.cs` |
| `Limit` | `src/PlinthUsGrantsData/Models/AnyOf/Limit.cs` |
| `SortBy` | `src/PlinthUsGrantsData/Models/AnyOf/SortBy.cs` |
| `SortOrder11` | `src/PlinthUsGrantsData/Models/AnyOf/SortOrder11.cs` |
| `Example` | `src/PlinthUsGrantsData/Models/Enums/Example.cs` |
| `TransactionsResponse` | `src/PlinthUsGrantsData/Models/TransactionsResponse.cs` |
| `GetApiV1GrantsTransactionsError` | `src/PlinthUsGrantsData/Errors/GetApiV1GrantsTransactionsError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetGrantsSummary

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetGrantsSummary(GetGrantsSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `funder_id` ← `FunderId`, `recip_id` ← `RecipId`, `year` ← `Year`, `subject` ← `Subject`, `location` ← `Location`, `min_amt` ← `MinAmt`, `max_amt` ← `MaxAmt`
- **Returns**: `object`
- **Error**: `ApiException<GetGrantsSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGrantsSummaryRequest` | `src/PlinthUsGrantsData/Requests/GrantsApi/GetGrantsSummaryRequest.cs` |
| `FunderId` | `src/PlinthUsGrantsData/Models/AnyOf/FunderId.cs` |
| `RecipId` | `src/PlinthUsGrantsData/Models/AnyOf/RecipId.cs` |
| `YearPlinthUsDataGrantsApi` | `src/PlinthUsGrantsData/Models/AnyOf/YearPlinthUsDataGrantsApi.cs` |
| `Subject` | `src/PlinthUsGrantsData/Models/AnyOf/Subject.cs` |
| `Location1` | `src/PlinthUsGrantsData/Models/AnyOf/Location1.cs` |
| `MinAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MinAmt.cs` |
| `MaxAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MaxAmt.cs` |
| `GetGrantsSummaryError` | `src/PlinthUsGrantsData/Errors/GetGrantsSummaryError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### ListFunders

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListFunders(ListFundersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `funder_id` ← `FunderId`, `recip_id` ← `RecipId`, `year` ← `Year`, `subject` ← `Subject`, `location` ← `Location`, `min_amt` ← `MinAmt`, `max_amt` ← `MaxAmt`, `page` ← `Page`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<ListFundersError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFundersRequest` | `src/PlinthUsGrantsData/Requests/GrantsApi/ListFundersRequest.cs` |
| `FunderId` | `src/PlinthUsGrantsData/Models/AnyOf/FunderId.cs` |
| `RecipId` | `src/PlinthUsGrantsData/Models/AnyOf/RecipId.cs` |
| `YearPlinthUsDataGrantsApi` | `src/PlinthUsGrantsData/Models/AnyOf/YearPlinthUsDataGrantsApi.cs` |
| `Subject` | `src/PlinthUsGrantsData/Models/AnyOf/Subject.cs` |
| `Location1` | `src/PlinthUsGrantsData/Models/AnyOf/Location1.cs` |
| `MinAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MinAmt.cs` |
| `MaxAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MaxAmt.cs` |
| `Page` | `src/PlinthUsGrantsData/Models/AnyOf/Page.cs` |
| `Limit` | `src/PlinthUsGrantsData/Models/AnyOf/Limit.cs` |
| `ListFundersError` | `src/PlinthUsGrantsData/Errors/ListFundersError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### ListGrants

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListGrants(ListGrantsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `funder_id` ← `FunderId`, `recip_id` ← `RecipId`, `year` ← `Year`, `subject` ← `Subject`, `location` ← `Location`, `min_amt` ← `MinAmt`, `max_amt` ← `MaxAmt`, `page` ← `Page`, `limit` ← `Limit`, `sort_by` ← `SortBy`, `sort_order` ← `SortOrder`
- **Returns**: `object`
- **Error**: `ApiException<ListGrantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGrantsRequest` | `src/PlinthUsGrantsData/Requests/GrantsApi/ListGrantsRequest.cs` |
| `FunderId` | `src/PlinthUsGrantsData/Models/AnyOf/FunderId.cs` |
| `RecipId` | `src/PlinthUsGrantsData/Models/AnyOf/RecipId.cs` |
| `YearPlinthUsDataGrantsApi` | `src/PlinthUsGrantsData/Models/AnyOf/YearPlinthUsDataGrantsApi.cs` |
| `Subject` | `src/PlinthUsGrantsData/Models/AnyOf/Subject.cs` |
| `Location1` | `src/PlinthUsGrantsData/Models/AnyOf/Location1.cs` |
| `MinAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MinAmt.cs` |
| `MaxAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MaxAmt.cs` |
| `Page` | `src/PlinthUsGrantsData/Models/AnyOf/Page.cs` |
| `Limit` | `src/PlinthUsGrantsData/Models/AnyOf/Limit.cs` |
| `SortBy` | `src/PlinthUsGrantsData/Models/AnyOf/SortBy.cs` |
| `SortOrder1` | `src/PlinthUsGrantsData/Models/AnyOf/SortOrder1.cs` |
| `ListGrantsError` | `src/PlinthUsGrantsData/Errors/ListGrantsError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### ListRecipients

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListRecipients(ListRecipientsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `funder_id` ← `FunderId`, `recip_id` ← `RecipId`, `year` ← `Year`, `subject` ← `Subject`, `location` ← `Location`, `min_amt` ← `MinAmt`, `max_amt` ← `MaxAmt`, `page` ← `Page`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<ListRecipientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRecipientsRequest` | `src/PlinthUsGrantsData/Requests/GrantsApi/ListRecipientsRequest.cs` |
| `FunderId` | `src/PlinthUsGrantsData/Models/AnyOf/FunderId.cs` |
| `RecipId` | `src/PlinthUsGrantsData/Models/AnyOf/RecipId.cs` |
| `YearPlinthUsDataGrantsApi` | `src/PlinthUsGrantsData/Models/AnyOf/YearPlinthUsDataGrantsApi.cs` |
| `Subject` | `src/PlinthUsGrantsData/Models/AnyOf/Subject.cs` |
| `Location1` | `src/PlinthUsGrantsData/Models/AnyOf/Location1.cs` |
| `MinAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MinAmt.cs` |
| `MaxAmt` | `src/PlinthUsGrantsData/Models/AnyOf/MaxAmt.cs` |
| `Page` | `src/PlinthUsGrantsData/Models/AnyOf/Page.cs` |
| `Limit` | `src/PlinthUsGrantsData/Models/AnyOf/Limit.cs` |
| `ListRecipientsError` | `src/PlinthUsGrantsData/Errors/ListRecipientsError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

