<!-- Generated file — do not edit; regenerated with the SDK. -->

# PeopleDataApi — operations

Accessor: `client.people_data_api` · Source: `rocket_reach/apis/people_data_api.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.people_data_api.check_person_lookup_status

- **Route**: `GET /person/checkStatus`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def check_person_lookup_status(*, ids: list[int] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `ids` — query
- **Returns (parsed)**: `list[ProfileApiCompiledCompany]`
- **Returns (raw)**: `ApiResult[list[ProfileApiCompiledCompany], CheckPersonLookupStatusErrorBody]`
- **Error**: `CheckPersonLookupStatusErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `ProfileApiCompiledCompany` | `rocket_reach/models/profile_api_compiled_company.py` |
| `CheckPersonLookupStatusErrorBody` | `rocket_reach/errors/check_person_lookup_status_error.py` |

### client.people_data_api.check_universal_person_lookup_status

- **Route**: `GET /universal/person/check_status`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def check_universal_person_lookup_status(*, ids: list[int] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `ids` — query
- **Returns (parsed)**: `list[UniversalCreditPersonLookupOutput]`
- **Returns (raw)**: `ApiResult[list[UniversalCreditPersonLookupOutput], CheckUniversalPersonLookupStatusErrorBody]`
- **Error**: `CheckUniversalPersonLookupStatusErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `UniversalCreditPersonLookupOutput` | `rocket_reach/models/universal_credit_person_lookup_output.py` |
| `CheckUniversalPersonLookupStatusErrorBody` | `rocket_reach/errors/check_universal_person_lookup_status_error.py` |

### client.people_data_api.create_person_and_company_lookup2

- **Route**: `GET /profile-company/lookup`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_person_and_company_lookup2(*, current_employer: str | None = None, email: EmailStr | None = None, id_: int | None = None, linkedin_ext_url: str | None = None, linkedin_url: str | None = None, lookup_type: LookupTypeOrStr | None = None, metadata: dict[str, Any] | None = None, name: str | None = None, npi_number: int | None = None, phone: str | None = None, return_cached_emails: bool | None = True, title: str | None = None, webhook_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `current_employer` — query · `email` — query · `id_` — query `id` · `linkedin_ext_url` — query · `linkedin_url` — query · `lookup_type` — query · `metadata` — query · `name` — query · `npi_number` — query · `phone` — query · `return_cached_emails` — query · `title` — query · `webhook_id` — query
- **Returns (parsed)**: `ProfileApiSerializerWithCompiledCompany`
- **Returns (raw)**: `ApiResult[ProfileApiSerializerWithCompiledCompany, CreatePersonAndCompanyLookup2ErrorBody]`
- **Error**: `CreatePersonAndCompanyLookup2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `LookupTypeOrStr` | `rocket_reach/models/enums/lookup_type.py` |
| `ProfileApiSerializerWithCompiledCompany` | `rocket_reach/models/profile_api_serializer_with_compiled_company.py` |
| `CreatePersonAndCompanyLookup2ErrorBody` | `rocket_reach/errors/create_person_and_company_lookup2_error.py` |

### client.people_data_api.create_person_bulk_lookup

- **Route**: `POST /bulkLookup`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_person_bulk_lookup(*, queries: list[ProfileMatch | ProfileMatchDict] | None = None, profile_list: str | None = "API Bulk Lookup", webhook_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `queries` — form field · `profile_list` — form field · `webhook_id` — form field
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreatePersonBulkLookupErrorBody]`
- **Error**: `CreatePersonBulkLookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `ProfileMatch` | `rocket_reach/models/profile_match.py` |
| `ProfileMatchDict` | `rocket_reach/models/profile_match.py` |
| `CreatePersonBulkLookupErrorBody` | `rocket_reach/errors/create_person_bulk_lookup_error.py` |

### client.people_data_api.create_person_lookup

- **Route**: `GET /person/lookup`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_person_lookup(*, current_employer: str | None = None, email: EmailStr | None = None, id_: int | None = None, linkedin_ext_url: str | None = None, linkedin_url: str | None = None, lookup_type: LookupTypeOrStr | None = None, metadata: dict[str, Any] | None = None, name: str | None = None, npi_number: int | None = None, phone: str | None = None, return_cached_emails: bool | None = True, title: str | None = None, webhook_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `current_employer` — query · `email` — query · `id_` — query `id` · `linkedin_ext_url` — query · `linkedin_url` — query · `lookup_type` — query · `metadata` — query · `name` — query · `npi_number` — query · `phone` — query · `return_cached_emails` — query · `title` — query · `webhook_id` — query
- **Returns (parsed)**: `ProfileApiWithMetadataCompiledCompany`
- **Returns (raw)**: `ApiResult[ProfileApiWithMetadataCompiledCompany, CreatePersonLookupErrorBody]`
- **Error**: `CreatePersonLookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `LookupTypeOrStr` | `rocket_reach/models/enums/lookup_type.py` |
| `ProfileApiWithMetadataCompiledCompany` | `rocket_reach/models/profile_api_with_metadata_compiled_company.py` |
| `CreatePersonLookupErrorBody` | `rocket_reach/errors/create_person_lookup_error.py` |

### client.people_data_api.create_person_search

- **Route**: `POST /person/search`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_person_search(*, start: int | None = 1, page_size: int | None = 10, query: PersonQuery1 | PersonQuery1Dict | None = None, order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `start` — form field · `page_size` — form field · `query` — form field · `order_by` — form field
- **Returns (parsed)**: `list[ProfileSearchResultSerializerBase]`
- **Returns (raw)**: `ApiResult[list[ProfileSearchResultSerializerBase], CreatePersonSearchErrorBody]`
- **Error**: `CreatePersonSearchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `PersonQuery1` | `rocket_reach/models/person_query1.py` |
| `PersonQuery1Dict` | `rocket_reach/models/person_query1.py` |
| `OrderByEnumOrStr` | `rocket_reach/models/enums/order_by_enum.py` |
| `ProfileSearchResultSerializerBase` | `rocket_reach/models/profile_search_result_serializer_base.py` |
| `CreatePersonSearchErrorBody` | `rocket_reach/errors/create_person_search_error.py` |

### client.people_data_api.create_universal_person_bulk_lookup

- **Route**: `POST /universal/person/bulk_lookup`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_universal_person_bulk_lookup(*, queries: list[UniversalCreditPersonLookupInput | UniversalCreditPersonLookupInputDict] | None = None, profile_list: str | None = "API Bulk Lookup", webhook_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `queries` — form field · `profile_list` — form field · `webhook_id` — form field
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateUniversalPersonBulkLookupErrorBody]`
- **Error**: `CreateUniversalPersonBulkLookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `UniversalCreditPersonLookupInput` | `rocket_reach/models/universal_credit_person_lookup_input.py` |
| `UniversalCreditPersonLookupInputDict` | `rocket_reach/models/universal_credit_person_lookup_input.py` |
| `CreateUniversalPersonBulkLookupErrorBody` | `rocket_reach/errors/create_universal_person_bulk_lookup_error.py` |

### client.people_data_api.create_universal_person_lookup

- **Route**: `GET /universal/person/lookup`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_universal_person_lookup(*, current_employer: str | None = None, email: EmailStr | None = None, id_: int | None = None, linkedin_ext_url: str | None = None, linkedin_url: str | None = None, metadata: dict[str, Any] | None = None, name: str | None = None, npi_number: int | None = None, phone: str | None = None, return_cached_emails: bool | None = True, reveal_detailed_person_enrichment: bool | None = False, reveal_healthcare_enrichment: bool | None = False, reveal_personal_email: bool | None = False, reveal_phone: bool | None = False, reveal_professional_email: bool | None = False, title: str | None = None, webhook_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `current_employer` — query · `email` — query · `id_` — query `id` · `linkedin_ext_url` — query · `linkedin_url` — query · `metadata` — query · `name` — query · `npi_number` — query · `phone` — query · `return_cached_emails` — query · `reveal_detailed_person_enrichment` — query · `reveal_healthcare_enrichment` — query · `reveal_personal_email` — query · `reveal_phone` — query · `reveal_professional_email` — query · `title` — query · `webhook_id` — query
- **Returns (parsed)**: `UniversalCreditPersonLookupOutputWithMetadata`
- **Returns (raw)**: `ApiResult[UniversalCreditPersonLookupOutputWithMetadata, CreateUniversalPersonLookupErrorBody]`
- **Error**: `CreateUniversalPersonLookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `UniversalCreditPersonLookupOutputWithMetadata` | `rocket_reach/models/universal_credit_person_lookup_output_with_metadata.py` |
| `CreateUniversalPersonLookupErrorBody` | `rocket_reach/errors/create_universal_person_lookup_error.py` |

### client.people_data_api.create_universal_person_search

- **Route**: `POST /universal/person/search`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_universal_person_search(*, start: int | None = 1, page_size: int | None = 100, query: PersonQuery | PersonQueryDict | None = None, order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `start` — form field · `page_size` — form field · `query` — form field · `order_by` — form field
- **Returns (parsed)**: `list[UniversalCreditPersonSearchOutput]`
- **Returns (raw)**: `ApiResult[list[UniversalCreditPersonSearchOutput], CreateUniversalPersonSearchErrorBody]`
- **Error**: `CreateUniversalPersonSearchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `PersonQuery` | `rocket_reach/models/person_query.py` |
| `PersonQueryDict` | `rocket_reach/models/person_query.py` |
| `OrderByEnumOrStr` | `rocket_reach/models/enums/order_by_enum.py` |
| `UniversalCreditPersonSearchOutput` | `rocket_reach/models/universal_credit_person_search_output.py` |
| `CreateUniversalPersonSearchErrorBody` | `rocket_reach/errors/create_universal_person_search_error.py` |

