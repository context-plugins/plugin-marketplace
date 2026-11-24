<!-- Generated file — do not edit; regenerated with the SDK. -->

# Registers — operations

Accessor: `client.Registers` · Source: `src/Compabase/Api/Registers.cs` · 22 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCeidgNipByNipNfzQueues

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCeidgNipByNipNfzQueues(GetCeidgNipByNipNfzQueuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Nip`
- **Query params (wire ← C#)**: `service` ← `Service`, `town` ← `Town`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<GetCeidgNipByNipNfzQueuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCeidgNipByNipNfzQueuesRequest` | `src/Compabase/Requests/Registers/GetCeidgNipByNipNfzQueuesRequest.cs` |
| `GetCeidgNipByNipNfzQueuesError` | `src/Compabase/Errors/GetCeidgNipByNipNfzQueuesError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCeidgNipByNipProcurementCounterparties

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCeidgNipByNipProcurementCounterparties(GetCeidgNipByNipProcurementCounterpartiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Nip`
- **Returns**: `object`
- **Error**: `ApiException<GetCeidgNipByNipProcurementCounterpartiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCeidgNipByNipProcurementCounterpartiesRequest` | `src/Compabase/Requests/Registers/GetCeidgNipByNipProcurementCounterpartiesRequest.cs` |
| `GetCeidgNipByNipProcurementCounterpartiesError` | `src/Compabase/Errors/GetCeidgNipByNipProcurementCounterpartiesError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCeidgNipByNipWebsiteFacts

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCeidgNipByNipWebsiteFacts(GetCeidgNipByNipWebsiteFactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Nip`
- **Returns**: `object`
- **Error**: `ApiException<GetCeidgNipByNipWebsiteFactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCeidgNipByNipWebsiteFactsRequest` | `src/Compabase/Requests/Registers/GetCeidgNipByNipWebsiteFactsRequest.cs` |
| `GetCeidgNipByNipWebsiteFactsError` | `src/Compabase/Errors/GetCeidgNipByNipWebsiteFactsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsBeneficiaries

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsBeneficiaries(GetCompaniesKrsByKrsBeneficiariesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsBeneficiariesResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsBeneficiariesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsBeneficiariesRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsBeneficiariesRequest.cs` |
| `CompaniesKrsBeneficiariesResponse` | `src/Compabase/Models/CompaniesKrsBeneficiariesResponse.cs` |
| `GetCompaniesKrsByKrsBeneficiariesError` | `src/Compabase/Errors/GetCompaniesKrsByKrsBeneficiariesError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsCourtGazette

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsCourtGazette(GetCompaniesKrsByKrsCourtGazetteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsCourtGazetteResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsCourtGazetteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsCourtGazetteRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsCourtGazetteRequest.cs` |
| `CompaniesKrsCourtGazetteResponse` | `src/Compabase/Models/CompaniesKrsCourtGazetteResponse.cs` |
| `GetCompaniesKrsByKrsCourtGazetteError` | `src/Compabase/Errors/GetCompaniesKrsByKrsCourtGazetteError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsEnergyLicenses

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsEnergyLicenses(GetCompaniesKrsByKrsEnergyLicensesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsEnergyLicensesResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsEnergyLicensesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsEnergyLicensesRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsEnergyLicensesRequest.cs` |
| `CompaniesKrsEnergyLicensesResponse` | `src/Compabase/Models/CompaniesKrsEnergyLicensesResponse.cs` |
| `GetCompaniesKrsByKrsEnergyLicensesError` | `src/Compabase/Errors/GetCompaniesKrsByKrsEnergyLicensesError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsEuFunds

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsEuFunds(GetCompaniesKrsByKrsEuFundsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsEuFundsResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsEuFundsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsEuFundsRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsEuFundsRequest.cs` |
| `CompaniesKrsEuFundsResponse` | `src/Compabase/Models/CompaniesKrsEuFundsResponse.cs` |
| `GetCompaniesKrsByKrsEuFundsError` | `src/Compabase/Errors/GetCompaniesKrsByKrsEuFundsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsEuGrants

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsEuGrants(GetCompaniesKrsByKrsEuGrantsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsEuGrantsResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsEuGrantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsEuGrantsRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsEuGrantsRequest.cs` |
| `CompaniesKrsEuGrantsResponse` | `src/Compabase/Models/CompaniesKrsEuGrantsResponse.cs` |
| `GetCompaniesKrsByKrsEuGrantsError` | `src/Compabase/Errors/GetCompaniesKrsByKrsEuGrantsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsFilingTimeliness

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsFilingTimeliness(GetCompaniesKrsByKrsFilingTimelinessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsFilingTimelinessResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsFilingTimelinessError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsFilingTimelinessRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsFilingTimelinessRequest.cs` |
| `CompaniesKrsFilingTimelinessResponse` | `src/Compabase/Models/CompaniesKrsFilingTimelinessResponse.cs` |
| `GetCompaniesKrsByKrsFilingTimelinessError` | `src/Compabase/Errors/GetCompaniesKrsByKrsFilingTimelinessError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsFinancialLicenses

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsFinancialLicenses(GetCompaniesKrsByKrsFinancialLicensesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsFinancialLicensesResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsFinancialLicensesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsFinancialLicensesRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsFinancialLicensesRequest.cs` |
| `CompaniesKrsFinancialLicensesResponse` | `src/Compabase/Models/CompaniesKrsFinancialLicensesResponse.cs` |
| `GetCompaniesKrsByKrsFinancialLicensesError` | `src/Compabase/Errors/GetCompaniesKrsByKrsFinancialLicensesError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsGpw

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsGpw(GetCompaniesKrsByKrsGpwRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Query params (wire ← C#)**: `include` ← `Include`, `series_limit` ← `SeriesLimit`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsGpwError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsGpwRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsGpwRequest.cs` |
| `GetCompaniesKrsByKrsGpwError` | `src/Compabase/Errors/GetCompaniesKrsByKrsGpwError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsInsolvency

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsInsolvency(GetCompaniesKrsByKrsInsolvencyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsInsolvencyResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsInsolvencyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsInsolvencyRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsInsolvencyRequest.cs` |
| `CompaniesKrsInsolvencyResponse` | `src/Compabase/Models/CompaniesKrsInsolvencyResponse.cs` |
| `GetCompaniesKrsByKrsInsolvencyError` | `src/Compabase/Errors/GetCompaniesKrsByKrsInsolvencyError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsNfzContracts

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsNfzContracts(GetCompaniesKrsByKrsNfzContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsNfzContractsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsNfzContractsRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsNfzContractsRequest.cs` |
| `GetCompaniesKrsByKrsNfzContractsError` | `src/Compabase/Errors/GetCompaniesKrsByKrsNfzContractsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsNfzQueues

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsNfzQueues(GetCompaniesKrsByKrsNfzQueuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Query params (wire ← C#)**: `service` ← `Service`, `town` ← `Town`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsNfzQueuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsNfzQueuesRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsNfzQueuesRequest.cs` |
| `GetCompaniesKrsByKrsNfzQueuesError` | `src/Compabase/Errors/GetCompaniesKrsByKrsNfzQueuesError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsProcurementCounterparties

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsProcurementCounterparties(GetCompaniesKrsByKrsProcurementCounterpartiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsProcurementCounterpartiesResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsProcurementCounterpartiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsProcurementCounterpartiesRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsProcurementCounterpartiesRequest.cs` |
| `CompaniesKrsProcurementCounterpartiesResponse` | `src/Compabase/Models/CompaniesKrsProcurementCounterpartiesResponse.cs` |
| `GetCompaniesKrsByKrsProcurementCounterpartiesError` | `src/Compabase/Errors/GetCompaniesKrsByKrsProcurementCounterpartiesError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsPublicAid

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsPublicAid(GetCompaniesKrsByKrsPublicAidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsPublicAidResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsPublicAidError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsPublicAidRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsPublicAidRequest.cs` |
| `CompaniesKrsPublicAidResponse` | `src/Compabase/Models/CompaniesKrsPublicAidResponse.cs` |
| `GetCompaniesKrsByKrsPublicAidError` | `src/Compabase/Errors/GetCompaniesKrsByKrsPublicAidError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsRealEstate

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsRealEstate(GetCompaniesKrsByKrsRealEstateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsRealEstateResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsRealEstateError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsRealEstateRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsRealEstateRequest.cs` |
| `CompaniesKrsRealEstateResponse` | `src/Compabase/Models/CompaniesKrsRealEstateResponse.cs` |
| `GetCompaniesKrsByKrsRealEstateError` | `src/Compabase/Errors/GetCompaniesKrsByKrsRealEstateError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsSanctions

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsSanctions(GetCompaniesKrsByKrsSanctionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsSanctionsResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsSanctionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsSanctionsRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsSanctionsRequest.cs` |
| `CompaniesKrsSanctionsResponse` | `src/Compabase/Models/CompaniesKrsSanctionsResponse.cs` |
| `GetCompaniesKrsByKrsSanctionsError` | `src/Compabase/Errors/GetCompaniesKrsByKrsSanctionsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsSecuredLiabilities

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsSecuredLiabilities(GetCompaniesKrsByKrsSecuredLiabilitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsSecuredLiabilitiesResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsSecuredLiabilitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsSecuredLiabilitiesRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsSecuredLiabilitiesRequest.cs` |
| `CompaniesKrsSecuredLiabilitiesResponse` | `src/Compabase/Models/CompaniesKrsSecuredLiabilitiesResponse.cs` |
| `GetCompaniesKrsByKrsSecuredLiabilitiesError` | `src/Compabase/Errors/GetCompaniesKrsByKrsSecuredLiabilitiesError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsTenders

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsTenders(GetCompaniesKrsByKrsTendersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsTendersResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsTendersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsTendersRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsTendersRequest.cs` |
| `CompaniesKrsTendersResponse` | `src/Compabase/Models/CompaniesKrsTendersResponse.cs` |
| `GetCompaniesKrsByKrsTendersError` | `src/Compabase/Errors/GetCompaniesKrsByKrsTendersError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsWasteRegistry

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsWasteRegistry(GetCompaniesKrsByKrsWasteRegistryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `CompaniesKrsWasteRegistryResponse`
- **Error**: `ApiException<GetCompaniesKrsByKrsWasteRegistryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsWasteRegistryRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsWasteRegistryRequest.cs` |
| `CompaniesKrsWasteRegistryResponse` | `src/Compabase/Models/CompaniesKrsWasteRegistryResponse.cs` |
| `GetCompaniesKrsByKrsWasteRegistryError` | `src/Compabase/Errors/GetCompaniesKrsByKrsWasteRegistryError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsWebsiteFacts

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsWebsiteFacts(GetCompaniesKrsByKrsWebsiteFactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsWebsiteFactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsWebsiteFactsRequest` | `src/Compabase/Requests/Registers/GetCompaniesKrsByKrsWebsiteFactsRequest.cs` |
| `GetCompaniesKrsByKrsWebsiteFactsError` | `src/Compabase/Errors/GetCompaniesKrsByKrsWebsiteFactsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

