<!-- Generated file — do not edit; regenerated with the SDK. -->

# AvailableApplications — operations

Accessor: `client.available_applications` · Source: `dynamics_365_business_central/apis/available_applications.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.available_applications.list_available_countries

- **Route**: `GET /applications/{applicationFamily}/availableCountries`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def list_available_countries(*, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
- **Params**: `application_family` — path `applicationFamily`
- **Returns (parsed)**: `ApplicationsAvailableCountriesResponse`
- **Returns (raw)**: `ApiResult[ApplicationsAvailableCountriesResponse, ListAvailableCountriesErrorBody]`
- **Error**: `ListAvailableCountriesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterAvailable` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationsAvailableCountriesResponse` | `dynamics_365_business_central/models/applications_available_countries_response.py` |
| `ListAvailableCountriesErrorBody` | `dynamics_365_business_central/errors/list_available_countries_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterAvailable` | `dynamics_365_business_central/models/error_response_business_central_administration_center_available.py` |

### client.available_applications.list_available_versions

- **Route**: `GET /applications/{applicationFamily}/availableApplicationVersions`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def list_available_versions(*, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
- **Params**: `application_family` — path `applicationFamily`
- **Returns (parsed)**: `ApplicationsAvailableApplicationVersionsResponse`
- **Returns (raw)**: `ApiResult[ApplicationsAvailableApplicationVersionsResponse, ListAvailableVersionsErrorBody]`
- **Error**: `ListAvailableVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterAvailable` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationsAvailableApplicationVersionsResponse` | `dynamics_365_business_central/models/applications_available_application_versions_response.py` |
| `ListAvailableVersionsErrorBody` | `dynamics_365_business_central/errors/list_available_versions_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterAvailable` | `dynamics_365_business_central/models/error_response_business_central_administration_center_available.py` |

