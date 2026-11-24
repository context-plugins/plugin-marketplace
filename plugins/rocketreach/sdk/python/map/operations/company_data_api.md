<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompanyDataApi — operations

Accessor: `client.company_data_api` · Source: `rocket_reach/apis/company_data_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.company_data_api.create_company_lookup

- **Route**: `GET /company/lookup/`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_company_lookup(*, domain: str | None = None, id_: int | None = None, linkedin_url: str | None = None, name: str | None = None, ticker: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `domain` — query · `id_` — query `id` · `linkedin_url` — query · `name` — query · `ticker` — query
- **Returns (parsed)**: `CompiledCompanyApiSerializerWithExtendedCompanyAttributes`
- **Returns (raw)**: `ApiResult[CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CreateCompanyLookupErrorBody]`
- **Error**: `CreateCompanyLookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `CompiledCompanyApiSerializerWithExtendedCompanyAttributes` | `rocket_reach/models/compiled_company_api_serializer_with_extended_company_attributes.py` |
| `CreateCompanyLookupErrorBody` | `rocket_reach/errors/create_company_lookup_error.py` |

### client.company_data_api.create_company_search

- **Route**: `POST /searchCompany`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_company_search(*, start: int | None = 1, page_size: int | None = 10, query: CompanyQuery1 | CompanyQuery1Dict | None = None, order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `start` — form field · `page_size` — form field · `query` — form field · `order_by` — form field
- **Returns (parsed)**: `list[CompiledCompanyPublicDetails]`
- **Returns (raw)**: `ApiResult[list[CompiledCompanyPublicDetails], CreateCompanySearchErrorBody]`
- **Error**: `CreateCompanySearchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `CompanyQuery1` | `rocket_reach/models/company_query1.py` |
| `CompanyQuery1Dict` | `rocket_reach/models/company_query1.py` |
| `OrderByEnumOrStr` | `rocket_reach/models/enums/order_by_enum.py` |
| `CompiledCompanyPublicDetails` | `rocket_reach/models/compiled_company_public_details.py` |
| `CreateCompanySearchErrorBody` | `rocket_reach/errors/create_company_search_error.py` |

### client.company_data_api.create_person_and_company_lookup

- **Route**: `GET /profile-company/lookup`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_person_and_company_lookup(*, current_employer: str | None = None, email: EmailStr | None = None, id_: int | None = None, linkedin_ext_url: str | None = None, linkedin_url: str | None = None, lookup_type: LookupTypeOrStr | None = None, metadata: dict[str, Any] | None = None, name: str | None = None, npi_number: int | None = None, phone: str | None = None, return_cached_emails: bool | None = True, title: str | None = None, webhook_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `current_employer` — query · `email` — query · `id_` — query `id` · `linkedin_ext_url` — query · `linkedin_url` — query · `lookup_type` — query · `metadata` — query · `name` — query · `npi_number` — query · `phone` — query · `return_cached_emails` — query · `title` — query · `webhook_id` — query
- **Returns (parsed)**: `ProfileApiSerializerWithCompiledCompany`
- **Returns (raw)**: `ApiResult[ProfileApiSerializerWithCompiledCompany, CreatePersonAndCompanyLookupErrorBody]`
- **Error**: `CreatePersonAndCompanyLookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `LookupTypeOrStr` | `rocket_reach/models/enums/lookup_type.py` |
| `ProfileApiSerializerWithCompiledCompany` | `rocket_reach/models/profile_api_serializer_with_compiled_company.py` |
| `CreatePersonAndCompanyLookupErrorBody` | `rocket_reach/errors/create_person_and_company_lookup_error.py` |

### client.company_data_api.create_universal_company_lookup

- **Route**: `GET /universal/company/lookup`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_universal_company_lookup(*, domain: str | None = None, id_: int | None = None, linkedin_url: str | None = None, name: str | None = None, ticker: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `domain` — query · `id_` — query `id` · `linkedin_url` — query · `name` — query · `ticker` — query
- **Returns (parsed)**: `CompiledCompanyApiSerializerWithExtendedCompanyAttributes`
- **Returns (raw)**: `ApiResult[CompiledCompanyApiSerializerWithExtendedCompanyAttributes, CreateUniversalCompanyLookupErrorBody]`
- **Error**: `CreateUniversalCompanyLookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `CompiledCompanyApiSerializerWithExtendedCompanyAttributes` | `rocket_reach/models/compiled_company_api_serializer_with_extended_company_attributes.py` |
| `CreateUniversalCompanyLookupErrorBody` | `rocket_reach/errors/create_universal_company_lookup_error.py` |

### client.company_data_api.create_universal_company_search

- **Route**: `POST /universal/company/search`
- **Auth**: `rocket_reach_api_key`
- **Signature**: `def create_universal_company_search(*, start: int | None = 1, page_size: int | None = 100, query: CompanyQuery | CompanyQueryDict | None = None, order_by: OrderByEnumOrStr | None = OrderByEnum.RELEVANCE, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `start` — form field · `page_size` — form field · `query` — form field · `order_by` — form field
- **Returns (parsed)**: `list[UniversalCreditCompanySearchOutput]`
- **Returns (raw)**: `ApiResult[list[UniversalCreditCompanySearchOutput], CreateUniversalCompanySearchErrorBody]`
- **Error**: `CreateUniversalCompanySearchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `CompanyQuery` | `rocket_reach/models/company_query.py` |
| `CompanyQueryDict` | `rocket_reach/models/company_query.py` |
| `OrderByEnumOrStr` | `rocket_reach/models/enums/order_by_enum.py` |
| `UniversalCreditCompanySearchOutput` | `rocket_reach/models/universal_credit_company_search_output.py` |
| `CreateUniversalCompanySearchErrorBody` | `rocket_reach/errors/create_universal_company_search_error.py` |

