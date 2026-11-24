<!-- Generated file — do not edit; regenerated with the SDK. -->

# Registers — operations

Accessor: `client.registers` · Source: `compabase/apis/registers.py` · 22 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.registers.get_ceidg_nip_by_nip_nfz_queues

- **Route**: `GET /ceidg/nip/{nip}/nfz-queues`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_ceidg_nip_by_nip_nfz_queues(nip: str, *, service: str | None = None, town: str | None = None, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `nip`
- **Params**: `nip` — path · `service` — query · `town` — query · `limit` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCeidgNipByNipNfzQueuesErrorBody]`
- **Error**: `GetCeidgNipByNipNfzQueuesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCeidgNipByNipNfzQueuesErrorBody` | `compabase/errors/get_ceidg_nip_by_nip_nfz_queues_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_ceidg_nip_by_nip_procurement_counterparties

- **Route**: `GET /ceidg/nip/{nip}/procurement-counterparties`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_ceidg_nip_by_nip_procurement_counterparties(nip: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `nip`
- **Params**: `nip` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCeidgNipByNipProcurementCounterpartiesErrorBody]`
- **Error**: `GetCeidgNipByNipProcurementCounterpartiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCeidgNipByNipProcurementCounterpartiesErrorBody` | `compabase/errors/get_ceidg_nip_by_nip_procurement_counterparties_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_ceidg_nip_by_nip_website_facts

- **Route**: `GET /ceidg/nip/{nip}/website-facts`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_ceidg_nip_by_nip_website_facts(nip: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `nip`
- **Params**: `nip` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCeidgNipByNipWebsiteFactsErrorBody]`
- **Error**: `GetCeidgNipByNipWebsiteFactsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCeidgNipByNipWebsiteFactsErrorBody` | `compabase/errors/get_ceidg_nip_by_nip_website_facts_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_beneficiaries

- **Route**: `GET /companies/krs/{krs}/beneficiaries`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_beneficiaries(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsBeneficiariesResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsBeneficiariesResponse, GetCompaniesKrsByKrsBeneficiariesErrorBody]`
- **Error**: `GetCompaniesKrsByKrsBeneficiariesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsBeneficiariesResponse` | `compabase/models/companies_krs_beneficiaries_response.py` |
| `GetCompaniesKrsByKrsBeneficiariesErrorBody` | `compabase/errors/get_companies_krs_by_krs_beneficiaries_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_court_gazette

- **Route**: `GET /companies/krs/{krs}/court-gazette`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_court_gazette(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsCourtGazetteResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsCourtGazetteResponse, GetCompaniesKrsByKrsCourtGazetteErrorBody]`
- **Error**: `GetCompaniesKrsByKrsCourtGazetteErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsCourtGazetteResponse` | `compabase/models/companies_krs_court_gazette_response.py` |
| `GetCompaniesKrsByKrsCourtGazetteErrorBody` | `compabase/errors/get_companies_krs_by_krs_court_gazette_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_energy_licenses

- **Route**: `GET /companies/krs/{krs}/energy-licenses`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_energy_licenses(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsEnergyLicensesResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsEnergyLicensesResponse, GetCompaniesKrsByKrsEnergyLicensesErrorBody]`
- **Error**: `GetCompaniesKrsByKrsEnergyLicensesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsEnergyLicensesResponse` | `compabase/models/companies_krs_energy_licenses_response.py` |
| `GetCompaniesKrsByKrsEnergyLicensesErrorBody` | `compabase/errors/get_companies_krs_by_krs_energy_licenses_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_eu_funds

- **Route**: `GET /companies/krs/{krs}/eu-funds`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_eu_funds(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsEuFundsResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsEuFundsResponse, GetCompaniesKrsByKrsEuFundsErrorBody]`
- **Error**: `GetCompaniesKrsByKrsEuFundsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsEuFundsResponse` | `compabase/models/companies_krs_eu_funds_response.py` |
| `GetCompaniesKrsByKrsEuFundsErrorBody` | `compabase/errors/get_companies_krs_by_krs_eu_funds_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_eu_grants

- **Route**: `GET /companies/krs/{krs}/eu-grants`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_eu_grants(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsEuGrantsResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsEuGrantsResponse, GetCompaniesKrsByKrsEuGrantsErrorBody]`
- **Error**: `GetCompaniesKrsByKrsEuGrantsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsEuGrantsResponse` | `compabase/models/companies_krs_eu_grants_response.py` |
| `GetCompaniesKrsByKrsEuGrantsErrorBody` | `compabase/errors/get_companies_krs_by_krs_eu_grants_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_filing_timeliness

- **Route**: `GET /companies/krs/{krs}/filing-timeliness`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_filing_timeliness(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsFilingTimelinessResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsFilingTimelinessResponse, GetCompaniesKrsByKrsFilingTimelinessErrorBody]`
- **Error**: `GetCompaniesKrsByKrsFilingTimelinessErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsFilingTimelinessResponse` | `compabase/models/companies_krs_filing_timeliness_response.py` |
| `GetCompaniesKrsByKrsFilingTimelinessErrorBody` | `compabase/errors/get_companies_krs_by_krs_filing_timeliness_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_financial_licenses

- **Route**: `GET /companies/krs/{krs}/financial-licenses`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_financial_licenses(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsFinancialLicensesResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsFinancialLicensesResponse, GetCompaniesKrsByKrsFinancialLicensesErrorBody]`
- **Error**: `GetCompaniesKrsByKrsFinancialLicensesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsFinancialLicensesResponse` | `compabase/models/companies_krs_financial_licenses_response.py` |
| `GetCompaniesKrsByKrsFinancialLicensesErrorBody` | `compabase/errors/get_companies_krs_by_krs_financial_licenses_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_gpw

- **Route**: `GET /companies/krs/{krs}/gpw`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_gpw(krs: str, *, include: str | None = None, series_limit: int | None = 250, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path · `include` — query · `series_limit` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsGpwErrorBody]`
- **Error**: `GetCompaniesKrsByKrsGpwErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsGpwErrorBody` | `compabase/errors/get_companies_krs_by_krs_gpw_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_insolvency

- **Route**: `GET /companies/krs/{krs}/insolvency`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_insolvency(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsInsolvencyResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsInsolvencyResponse, GetCompaniesKrsByKrsInsolvencyErrorBody]`
- **Error**: `GetCompaniesKrsByKrsInsolvencyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsInsolvencyResponse` | `compabase/models/companies_krs_insolvency_response.py` |
| `GetCompaniesKrsByKrsInsolvencyErrorBody` | `compabase/errors/get_companies_krs_by_krs_insolvency_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_nfz_contracts

- **Route**: `GET /companies/krs/{krs}/nfz-contracts`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_nfz_contracts(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsNfzContractsErrorBody]`
- **Error**: `GetCompaniesKrsByKrsNfzContractsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsNfzContractsErrorBody` | `compabase/errors/get_companies_krs_by_krs_nfz_contracts_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_nfz_queues

- **Route**: `GET /companies/krs/{krs}/nfz-queues`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_nfz_queues(krs: str, *, service: str | None = None, town: str | None = None, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path · `service` — query · `town` — query · `limit` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsNfzQueuesErrorBody]`
- **Error**: `GetCompaniesKrsByKrsNfzQueuesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsNfzQueuesErrorBody` | `compabase/errors/get_companies_krs_by_krs_nfz_queues_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_procurement_counterparties

- **Route**: `GET /companies/krs/{krs}/procurement-counterparties`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_procurement_counterparties(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsProcurementCounterpartiesResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsProcurementCounterpartiesResponse, GetCompaniesKrsByKrsProcurementCounterpartiesErrorBody]`
- **Error**: `GetCompaniesKrsByKrsProcurementCounterpartiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsProcurementCounterpartiesResponse` | `compabase/models/companies_krs_procurement_counterparties_response.py` |
| `GetCompaniesKrsByKrsProcurementCounterpartiesErrorBody` | `compabase/errors/get_companies_krs_by_krs_procurement_counterparties_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_public_aid

- **Route**: `GET /companies/krs/{krs}/public-aid`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_public_aid(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsPublicAidResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsPublicAidResponse, GetCompaniesKrsByKrsPublicAidErrorBody]`
- **Error**: `GetCompaniesKrsByKrsPublicAidErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsPublicAidResponse` | `compabase/models/companies_krs_public_aid_response.py` |
| `GetCompaniesKrsByKrsPublicAidErrorBody` | `compabase/errors/get_companies_krs_by_krs_public_aid_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_real_estate

- **Route**: `GET /companies/krs/{krs}/real-estate`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_real_estate(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsRealEstateResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsRealEstateResponse, GetCompaniesKrsByKrsRealEstateErrorBody]`
- **Error**: `GetCompaniesKrsByKrsRealEstateErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsRealEstateResponse` | `compabase/models/companies_krs_real_estate_response.py` |
| `GetCompaniesKrsByKrsRealEstateErrorBody` | `compabase/errors/get_companies_krs_by_krs_real_estate_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_sanctions

- **Route**: `GET /companies/krs/{krs}/sanctions`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_sanctions(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsSanctionsResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsSanctionsResponse, GetCompaniesKrsByKrsSanctionsErrorBody]`
- **Error**: `GetCompaniesKrsByKrsSanctionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsSanctionsResponse` | `compabase/models/companies_krs_sanctions_response.py` |
| `GetCompaniesKrsByKrsSanctionsErrorBody` | `compabase/errors/get_companies_krs_by_krs_sanctions_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_secured_liabilities

- **Route**: `GET /companies/krs/{krs}/secured-liabilities`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_secured_liabilities(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsSecuredLiabilitiesResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsSecuredLiabilitiesResponse, GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody]`
- **Error**: `GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsSecuredLiabilitiesResponse` | `compabase/models/companies_krs_secured_liabilities_response.py` |
| `GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody` | `compabase/errors/get_companies_krs_by_krs_secured_liabilities_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_tenders

- **Route**: `GET /companies/krs/{krs}/tenders`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_tenders(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsTendersResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsTendersResponse, GetCompaniesKrsByKrsTendersErrorBody]`
- **Error**: `GetCompaniesKrsByKrsTendersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsTendersResponse` | `compabase/models/companies_krs_tenders_response.py` |
| `GetCompaniesKrsByKrsTendersErrorBody` | `compabase/errors/get_companies_krs_by_krs_tenders_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_waste_registry

- **Route**: `GET /companies/krs/{krs}/waste-registry`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_waste_registry(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `CompaniesKrsWasteRegistryResponse`
- **Returns (raw)**: `ApiResult[CompaniesKrsWasteRegistryResponse, GetCompaniesKrsByKrsWasteRegistryErrorBody]`
- **Error**: `GetCompaniesKrsByKrsWasteRegistryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesKrsWasteRegistryResponse` | `compabase/models/companies_krs_waste_registry_response.py` |
| `GetCompaniesKrsByKrsWasteRegistryErrorBody` | `compabase/errors/get_companies_krs_by_krs_waste_registry_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.registers.get_companies_krs_by_krs_website_facts

- **Route**: `GET /companies/krs/{krs}/website-facts`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_website_facts(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsWebsiteFactsErrorBody]`
- **Error**: `GetCompaniesKrsByKrsWebsiteFactsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsWebsiteFactsErrorBody` | `compabase/errors/get_companies_krs_by_krs_website_facts_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

