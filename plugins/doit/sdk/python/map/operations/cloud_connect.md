<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudConnect — operations

Accessor: `client.cloud_connect` · Source: `doi_t/apis/cloud_connect.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.cloud_connect.create_account_role

- **Route**: `POST /core/v1/cloudconnect/aws/accounts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_account_role(body: CoreV1CloudconnectAwsAccountsRequest | CoreV1CloudconnectAwsAccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AwsAccountResponse`
- **Returns (raw)**: `ApiResult[AwsAccountResponse, CreateAccountRoleErrorBody]`
- **Error**: `CreateAccountRoleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CoreV1CloudconnectAwsAccountsRequest` | `doi_t/models/core_v1_cloudconnect_aws_accounts_request.py` |
| `CoreV1CloudconnectAwsAccountsRequestDict` | `doi_t/models/core_v1_cloudconnect_aws_accounts_request.py` |
| `AwsAccountResponse` | `doi_t/models/aws_account_response.py` |
| `CreateAccountRoleErrorBody` | `doi_t/errors/create_account_role_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_connect.delete_account_role

- **Route**: `DELETE /core/v1/cloudconnect/aws/accounts/{accountID}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_account_role(account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path `accountID`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAccountRoleErrorBody]`
- **Error**: `DeleteAccountRoleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAccountRoleErrorBody` | `doi_t/errors/delete_account_role_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_connect.get_aws_account

- **Route**: `GET /core/v1/cloudconnect/aws/accounts/{accountID}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_aws_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path `accountID`
- **Returns (parsed)**: `AwsAccountResponse`
- **Returns (raw)**: `ApiResult[AwsAccountResponse, GetAwsAccountErrorBody]`
- **Error**: `GetAwsAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AwsAccountResponse` | `doi_t/models/aws_account_response.py` |
| `GetAwsAccountErrorBody` | `doi_t/errors/get_aws_account_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_connect.get_cloud_connect_supported_features

- **Route**: `GET /core/v1/cloudconnect/supportedFeatures/{accountID}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_cloud_connect_supported_features(account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path `accountID`
- **Returns (parsed)**: `SupportedFeaturesResponse`
- **Returns (raw)**: `ApiResult[SupportedFeaturesResponse, GetCloudConnectSupportedFeaturesErrorBody]`
- **Error**: `GetCloudConnectSupportedFeaturesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SupportedFeaturesResponse` | `doi_t/models/supported_features_response.py` |
| `GetCloudConnectSupportedFeaturesErrorBody` | `doi_t/errors/get_cloud_connect_supported_features_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_connect.update_aws_feature

- **Route**: `PUT /core/v1/cloudconnect/aws/accounts/{accountID}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_aws_feature(account_id: str, body: CoreV1CloudconnectAwsAccountsRequest1 | CoreV1CloudconnectAwsAccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `body`
- **Params**: `account_id` — path `accountID` · `body` — JSON body
- **Returns (parsed)**: `AwsAccountResponse`
- **Returns (raw)**: `ApiResult[AwsAccountResponse, UpdateAwsFeatureErrorBody]`
- **Error**: `UpdateAwsFeatureErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CoreV1CloudconnectAwsAccountsRequest1` | `doi_t/models/core_v1_cloudconnect_aws_accounts_request1.py` |
| `CoreV1CloudconnectAwsAccountsRequest1Dict` | `doi_t/models/core_v1_cloudconnect_aws_accounts_request1.py` |
| `AwsAccountResponse` | `doi_t/models/aws_account_response.py` |
| `UpdateAwsFeatureErrorBody` | `doi_t/errors/update_aws_feature_error.py` |
| `Error` | `doi_t/models/error.py` |

