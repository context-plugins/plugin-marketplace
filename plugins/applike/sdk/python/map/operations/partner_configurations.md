<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerConfigurations — operations

Accessor: `client.partner_configurations` · Source: `applike/apis/partner_configurations.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.partner_configurations.post_management_v1_partner_configuration_by_feature

- **Route**: `POST /management/v1/partner-configuration/{feature}`
- **Auth**: `api_key_auth`
- **Server**: `default_management_app_partner_connection_api`
- **Signature**: `def post_management_v1_partner_configuration_by_feature(feature: str, *, body: ListPartnerConfigurationFeaturesRequest | ListPartnerConfigurationFeaturesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`
- **Params**: `feature` — path · `body` — JSON body
- **Returns (parsed)**: `ListPartnerConfigurationFeaturesResponse`
- **Returns (raw)**: `ApiResult[ListPartnerConfigurationFeaturesResponse, PostManagementV1PartnerConfigurationByFeatureErrorBody]`
- **Error**: `PostManagementV1PartnerConfigurationByFeatureErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `ListPartnerConfigurationFeaturesRequest` | `applike/models/list_partner_configuration_features_request.py` |
| `ListPartnerConfigurationFeaturesRequestDict` | `applike/models/list_partner_configuration_features_request.py` |
| `ListPartnerConfigurationFeaturesResponse` | `applike/models/list_partner_configuration_features_response.py` |
| `PostManagementV1PartnerConfigurationByFeatureErrorBody` | `applike/errors/post_management_v1_partner_configuration_by_feature_error.py` |
| `ErrorResponse` | `applike/models/error_response.py` |

### client.partner_configurations.post_management_v1_partner_configurations

- **Route**: `POST /management/v1/partner-configurations`
- **Auth**: `api_key_auth`
- **Server**: `default_management_app_partner_connection_api`
- **Signature**: `def post_management_v1_partner_configurations(*, body: ListPartnerConfigurationsRequest | ListPartnerConfigurationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListPartnerConfigurationsResponse`
- **Returns (raw)**: `ApiResult[ListPartnerConfigurationsResponse, PostManagementV1PartnerConfigurationsErrorBody]`
- **Error**: `PostManagementV1PartnerConfigurationsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `ListPartnerConfigurationsRequest` | `applike/models/list_partner_configurations_request.py` |
| `ListPartnerConfigurationsRequestDict` | `applike/models/list_partner_configurations_request.py` |
| `ListPartnerConfigurationsResponse` | `applike/models/list_partner_configurations_response.py` |
| `PostManagementV1PartnerConfigurationsErrorBody` | `applike/errors/post_management_v1_partner_configurations_error.py` |
| `ErrorResponse` | `applike/models/error_response.py` |

### client.partner_configurations.put_management_v1_partner_configuration_by_feature

- **Route**: `PUT /management/v1/partner-configuration/{feature}`
- **Auth**: `api_key_auth`
- **Server**: `default_management_app_partner_connection_api`
- **Signature**: `def put_management_v1_partner_configuration_by_feature(feature: str, *, body: UpsertPartnerConfigurationFeaturesRequest | UpsertPartnerConfigurationFeaturesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`
- **Params**: `feature` — path · `body` — JSON body
- **Returns (parsed)**: `list[PartnerConfigurationFeatureOutput]`
- **Returns (raw)**: `ApiResult[list[PartnerConfigurationFeatureOutput], PutManagementV1PartnerConfigurationByFeatureErrorBody]`
- **Error**: `PutManagementV1PartnerConfigurationByFeatureErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `UpsertPartnerConfigurationFeaturesRequest` | `applike/models/upsert_partner_configuration_features_request.py` |
| `UpsertPartnerConfigurationFeaturesRequestDict` | `applike/models/upsert_partner_configuration_features_request.py` |
| `PartnerConfigurationFeatureOutput` | `applike/models/partner_configuration_feature_output.py` |
| `PutManagementV1PartnerConfigurationByFeatureErrorBody` | `applike/errors/put_management_v1_partner_configuration_by_feature_error.py` |
| `ErrorResponse` | `applike/models/error_response.py` |

