<!-- Generated file — do not edit; regenerated with the SDK. -->

# GrantsApi — operations

Accessor: `client.grants_api` · Source: `plinth_us_grants_data/apis/grants_api.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.grants_api.get_api_v1_grants_funders

- **Route**: `GET /api/v1/grants/funders`
- **Auth**: `api_key_auth`
- **Signature**: `def get_api_v1_grants_funders(*, funder_id: str | None = None, recip_id: str | None = None, id_type: IdTypeOrStr | None = None, year: str | None = None, min_year: str | None = None, max_year: str | None = None, subject: str | None = None, location: str | None = None, geo_id_type: GeoIdTypeOrStr | None = None, location_type: LocationTypeOrStr | None = None, country: str | None = None, query: str | None = None, support: str | None = None, funder_type: FunderTypeOrStr | None = None, exclude: str | None = None, exclude_daf: str | None = None, min_amt: str | None = None, max_amt: str | None = None, min_match_prob: str | None = None, ein_source: str | None = None, jurisdiction: str | None = None, strict: str | None = None, format_: FormatOrStr | None = None, population: str | None = None, transaction: str | None = None, include_gov: str | None = None, last_updated: str | None = None, profile_levels: str | None = None, page: str | None = None, limit: str | None = None, sort_by: str | None = None, sort_order: SortOrderOrStr | None = None, example: Example1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `funder_id` — query · `recip_id` — query · `id_type` — query · `year` — query · `min_year` — query · `max_year` — query · `subject` — query · `location` — query · `geo_id_type` — query · `location_type` — query · `country` — query · `query` — query · `support` — query · `funder_type` — query · `exclude` — query · `exclude_daf` — query · `min_amt` — query · `max_amt` — query · `min_match_prob` — query · `ein_source` — query · `jurisdiction` — query · `strict` — query · `format_` — query `format` · `population` — query · `transaction` — query · `include_gov` — query · `last_updated` — query · `profile_levels` — query · `page` — query · `limit` — query · `sort_by` — query · `sort_order` — query · `example` — query
- **Returns (parsed)**: `FundersResponse`
- **Returns (raw)**: `ApiResult[FundersResponse, GetApiV1GrantsFundersErrorBody]`
- **Error**: `GetApiV1GrantsFundersErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IdTypeOrStr` | `plinth_us_grants_data/models/enums/id_type.py` |
| `GeoIdTypeOrStr` | `plinth_us_grants_data/models/enums/geo_id_type.py` |
| `LocationTypeOrStr` | `plinth_us_grants_data/models/enums/location_type.py` |
| `FunderTypeOrStr` | `plinth_us_grants_data/models/enums/funder_type.py` |
| `FormatOrStr` | `plinth_us_grants_data/models/enums/format.py` |
| `SortOrderOrStr` | `plinth_us_grants_data/models/enums/sort_order.py` |
| `Example1OrStr` | `plinth_us_grants_data/models/enums/example1.py` |
| `FundersResponse` | `plinth_us_grants_data/models/funders_response.py` |
| `GetApiV1GrantsFundersErrorBody` | `plinth_us_grants_data/errors/get_api_v1_grants_funders_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.grants_api.get_api_v1_grants_recipients

- **Route**: `GET /api/v1/grants/recipients`
- **Auth**: `api_key_auth`
- **Signature**: `def get_api_v1_grants_recipients(*, funder_id: str | None = None, recip_id: str | None = None, id_type: IdTypeOrStr | None = None, year: str | None = None, min_year: str | None = None, max_year: str | None = None, subject: str | None = None, location: str | None = None, geo_id_type: GeoIdTypeOrStr | None = None, location_type: LocationTypeOrStr | None = None, country: str | None = None, query: str | None = None, support: str | None = None, funder_type: FunderTypeOrStr | None = None, exclude: str | None = None, exclude_daf: str | None = None, min_amt: str | None = None, max_amt: str | None = None, min_match_prob: str | None = None, ein_source: str | None = None, jurisdiction: str | None = None, strict: str | None = None, format_: FormatOrStr | None = None, population: str | None = None, transaction: str | None = None, include_gov: str | None = None, last_updated: str | None = None, profile_levels: str | None = None, page: str | None = None, limit: str | None = None, sort_by: str | None = None, sort_order: SortOrderOrStr | None = None, example: Example1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `funder_id` — query · `recip_id` — query · `id_type` — query · `year` — query · `min_year` — query · `max_year` — query · `subject` — query · `location` — query · `geo_id_type` — query · `location_type` — query · `country` — query · `query` — query · `support` — query · `funder_type` — query · `exclude` — query · `exclude_daf` — query · `min_amt` — query · `max_amt` — query · `min_match_prob` — query · `ein_source` — query · `jurisdiction` — query · `strict` — query · `format_` — query `format` · `population` — query · `transaction` — query · `include_gov` — query · `last_updated` — query · `profile_levels` — query · `page` — query · `limit` — query · `sort_by` — query · `sort_order` — query · `example` — query
- **Returns (parsed)**: `RecipientsResponse`
- **Returns (raw)**: `ApiResult[RecipientsResponse, GetApiV1GrantsRecipientsErrorBody]`
- **Error**: `GetApiV1GrantsRecipientsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IdTypeOrStr` | `plinth_us_grants_data/models/enums/id_type.py` |
| `GeoIdTypeOrStr` | `plinth_us_grants_data/models/enums/geo_id_type.py` |
| `LocationTypeOrStr` | `plinth_us_grants_data/models/enums/location_type.py` |
| `FunderTypeOrStr` | `plinth_us_grants_data/models/enums/funder_type.py` |
| `FormatOrStr` | `plinth_us_grants_data/models/enums/format.py` |
| `SortOrderOrStr` | `plinth_us_grants_data/models/enums/sort_order.py` |
| `Example1OrStr` | `plinth_us_grants_data/models/enums/example1.py` |
| `RecipientsResponse` | `plinth_us_grants_data/models/recipients_response.py` |
| `GetApiV1GrantsRecipientsErrorBody` | `plinth_us_grants_data/errors/get_api_v1_grants_recipients_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.grants_api.get_api_v1_grants_summary

- **Route**: `GET /api/v1/grants/summary`
- **Auth**: `api_key_auth`
- **Signature**: `def get_api_v1_grants_summary(*, funder_id: str | None = None, recip_id: str | None = None, id_type: IdTypeOrStr | None = None, year: str | None = None, min_year: str | None = None, max_year: str | None = None, subject: str | None = None, location: str | None = None, geo_id_type: GeoIdTypeOrStr | None = None, location_type: LocationTypeOrStr | None = None, country: str | None = None, query: str | None = None, support: str | None = None, funder_type: FunderTypeOrStr | None = None, exclude: str | None = None, exclude_daf: str | None = None, min_amt: str | None = None, max_amt: str | None = None, min_match_prob: str | None = None, ein_source: str | None = None, jurisdiction: str | None = None, strict: str | None = None, format_: FormatOrStr | None = None, population: str | None = None, transaction: str | None = None, include_gov: str | None = None, last_updated: str | None = None, profile_levels: str | None = None, example: Example3OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `funder_id` — query · `recip_id` — query · `id_type` — query · `year` — query · `min_year` — query · `max_year` — query · `subject` — query · `location` — query · `geo_id_type` — query · `location_type` — query · `country` — query · `query` — query · `support` — query · `funder_type` — query · `exclude` — query · `exclude_daf` — query · `min_amt` — query · `max_amt` — query · `min_match_prob` — query · `ein_source` — query · `jurisdiction` — query · `strict` — query · `format_` — query `format` · `population` — query · `transaction` — query · `include_gov` — query · `last_updated` — query · `profile_levels` — query · `example` — query
- **Returns (parsed)**: `SummaryResponse`
- **Returns (raw)**: `ApiResult[SummaryResponse, GetApiV1GrantsSummaryErrorBody]`
- **Error**: `GetApiV1GrantsSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IdTypeOrStr` | `plinth_us_grants_data/models/enums/id_type.py` |
| `GeoIdTypeOrStr` | `plinth_us_grants_data/models/enums/geo_id_type.py` |
| `LocationTypeOrStr` | `plinth_us_grants_data/models/enums/location_type.py` |
| `FunderTypeOrStr` | `plinth_us_grants_data/models/enums/funder_type.py` |
| `FormatOrStr` | `plinth_us_grants_data/models/enums/format.py` |
| `Example3OrStr` | `plinth_us_grants_data/models/enums/example3.py` |
| `SummaryResponse` | `plinth_us_grants_data/models/summary_response.py` |
| `GetApiV1GrantsSummaryErrorBody` | `plinth_us_grants_data/errors/get_api_v1_grants_summary_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.grants_api.get_api_v1_grants_transactions

- **Route**: `GET /api/v1/grants/transactions`
- **Auth**: `api_key_auth`
- **Signature**: `def get_api_v1_grants_transactions(*, funder_id: str | None = None, recip_id: str | None = None, id_type: IdTypeOrStr | None = None, year: str | None = None, min_year: str | None = None, max_year: str | None = None, subject: str | None = None, location: str | None = None, geo_id_type: GeoIdTypeOrStr | None = None, location_type: LocationTypeOrStr | None = None, country: str | None = None, query: str | None = None, support: str | None = None, funder_type: FunderTypeOrStr | None = None, exclude: str | None = None, exclude_daf: str | None = None, min_amt: str | None = None, max_amt: str | None = None, min_match_prob: str | None = None, ein_source: str | None = None, jurisdiction: str | None = None, strict: str | None = None, format_: FormatOrStr | None = None, population: str | None = None, transaction: str | None = None, include_gov: str | None = None, last_updated: str | None = None, profile_levels: str | None = None, page: str | None = None, limit: str | None = None, sort_by: str | None = None, sort_order: SortOrderOrStr | None = None, example: ExampleOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `funder_id` — query · `recip_id` — query · `id_type` — query · `year` — query · `min_year` — query · `max_year` — query · `subject` — query · `location` — query · `geo_id_type` — query · `location_type` — query · `country` — query · `query` — query · `support` — query · `funder_type` — query · `exclude` — query · `exclude_daf` — query · `min_amt` — query · `max_amt` — query · `min_match_prob` — query · `ein_source` — query · `jurisdiction` — query · `strict` — query · `format_` — query `format` · `population` — query · `transaction` — query · `include_gov` — query · `last_updated` — query · `profile_levels` — query · `page` — query · `limit` — query · `sort_by` — query · `sort_order` — query · `example` — query
- **Returns (parsed)**: `TransactionsResponse`
- **Returns (raw)**: `ApiResult[TransactionsResponse, GetApiV1GrantsTransactionsErrorBody]`
- **Error**: `GetApiV1GrantsTransactionsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IdTypeOrStr` | `plinth_us_grants_data/models/enums/id_type.py` |
| `GeoIdTypeOrStr` | `plinth_us_grants_data/models/enums/geo_id_type.py` |
| `LocationTypeOrStr` | `plinth_us_grants_data/models/enums/location_type.py` |
| `FunderTypeOrStr` | `plinth_us_grants_data/models/enums/funder_type.py` |
| `FormatOrStr` | `plinth_us_grants_data/models/enums/format.py` |
| `SortOrderOrStr` | `plinth_us_grants_data/models/enums/sort_order.py` |
| `ExampleOrStr` | `plinth_us_grants_data/models/enums/example.py` |
| `TransactionsResponse` | `plinth_us_grants_data/models/transactions_response.py` |
| `GetApiV1GrantsTransactionsErrorBody` | `plinth_us_grants_data/errors/get_api_v1_grants_transactions_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.grants_api.get_grants_summary

- **Route**: `GET /api/grants/summary`
- **Auth**: `api_key_auth`
- **Signature**: `def get_grants_summary(*, funder_id: str | None = None, recip_id: str | None = None, year: str | None = None, subject: str | None = None, location: str | None = None, min_amt: str | None = None, max_amt: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `funder_id` — query · `recip_id` — query · `year` — query · `subject` — query · `location` — query · `min_amt` — query · `max_amt` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetGrantsSummaryErrorBody]`
- **Error**: `GetGrantsSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetGrantsSummaryErrorBody` | `plinth_us_grants_data/errors/get_grants_summary_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.grants_api.list_funders

- **Route**: `GET /api/grants/funders`
- **Auth**: `api_key_auth`
- **Signature**: `def list_funders(*, funder_id: str | None = None, recip_id: str | None = None, year: str | None = None, subject: str | None = None, location: str | None = None, min_amt: str | None = None, max_amt: str | None = None, page: str | None = None, limit: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `funder_id` — query · `recip_id` — query · `year` — query · `subject` — query · `location` — query · `min_amt` — query · `max_amt` — query · `page` — query · `limit` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ListFundersErrorBody]`
- **Error**: `ListFundersErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListFundersErrorBody` | `plinth_us_grants_data/errors/list_funders_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.grants_api.list_grants

- **Route**: `GET /api/grants/transactions`
- **Auth**: `api_key_auth`
- **Signature**: `def list_grants(*, funder_id: str | None = None, recip_id: str | None = None, year: str | None = None, subject: str | None = None, location: str | None = None, min_amt: str | None = None, max_amt: str | None = None, page: str | None = None, limit: str | None = None, sort_by: str | None = None, sort_order: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `funder_id` — query · `recip_id` — query · `year` — query · `subject` — query · `location` — query · `min_amt` — query · `max_amt` — query · `page` — query · `limit` — query · `sort_by` — query · `sort_order` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ListGrantsErrorBody]`
- **Error**: `ListGrantsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListGrantsErrorBody` | `plinth_us_grants_data/errors/list_grants_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.grants_api.list_recipients

- **Route**: `GET /api/grants/recipients`
- **Auth**: `api_key_auth`
- **Signature**: `def list_recipients(*, funder_id: str | None = None, recip_id: str | None = None, year: str | None = None, subject: str | None = None, location: str | None = None, min_amt: str | None = None, max_amt: str | None = None, page: str | None = None, limit: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `funder_id` — query · `recip_id` — query · `year` — query · `subject` — query · `location` — query · `min_amt` — query · `max_amt` — query · `page` — query · `limit` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ListRecipientsErrorBody]`
- **Error**: `ListRecipientsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListRecipientsErrorBody` | `plinth_us_grants_data/errors/list_recipients_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

