<!-- Generated file — do not edit; regenerated with the SDK. -->

# Features — operations

Accessor: `client.features` · Source: `dynamics_365_business_central/apis/features.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.features.activate_feature

- **Route**: `POST /companies({company_id})/features({feature_id})/Microsoft.NAV.activate`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def activate_feature(company_id: UUID, feature_id: str, *, body: CompaniesApiFeaturesApiMicrosoftNavActivateRequest | CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `feature_id`
- **Params**: `company_id` — path · `feature_id` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ActivateFeatureErrorBody]`
- **Error**: `ActivateFeatureErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiFeaturesApiMicrosoftNavActivateRequest` | `dynamics_365_business_central/models/companies_api_features_api_microsoft_nav_activate_request.py` |
| `CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict` | `dynamics_365_business_central/models/companies_api_features_api_microsoft_nav_activate_request.py` |
| `ActivateFeatureErrorBody` | `dynamics_365_business_central/errors/activate_feature_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.features.deactivate_feature

- **Route**: `POST /companies({company_id})/features({feature_id})/Microsoft.NAV.deactivate`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def deactivate_feature(company_id: UUID, feature_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `feature_id`
- **Params**: `company_id` — path · `feature_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeactivateFeatureErrorBody]`
- **Error**: `DeactivateFeatureErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeactivateFeatureErrorBody` | `dynamics_365_business_central/errors/deactivate_feature_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.features.list_features

- **Route**: `GET /companies({company_id})/features`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def list_features(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path
- **Returns (parsed)**: `CompaniesApiFeaturesResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiFeaturesResponse, ListFeaturesErrorBody]`
- **Error**: `ListFeaturesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiFeaturesResponse` | `dynamics_365_business_central/models/companies_api_features_response.py` |
| `ListFeaturesErrorBody` | `dynamics_365_business_central/errors/list_features_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

