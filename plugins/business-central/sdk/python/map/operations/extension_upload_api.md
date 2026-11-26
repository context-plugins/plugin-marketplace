<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExtensionUploadApi — operations

Accessor: `client.extension_upload_api` · Source: `dynamics_365_business_central/apis/extension_upload_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.extension_upload_api.create_extension_upload

- **Route**: `POST /companies({company_id})/extensionUpload`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def create_extension_upload(company_id: UUID, body: ExtensionUploadCreate | ExtensionUploadCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `body`
- **Params**: `company_id` — path · `body` — JSON body
- **Returns (parsed)**: `ExtensionUpload`
- **Returns (raw)**: `ApiResult[ExtensionUpload, CreateExtensionUploadErrorBody]`
- **Error**: `CreateExtensionUploadErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExtensionUploadCreate` | `dynamics_365_business_central/models/extension_upload_create.py` |
| `ExtensionUploadCreateDict` | `dynamics_365_business_central/models/extension_upload_create.py` |
| `ExtensionUpload` | `dynamics_365_business_central/models/extension_upload.py` |
| `CreateExtensionUploadErrorBody` | `dynamics_365_business_central/errors/create_extension_upload_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.extension_upload_api.install_uploaded_extension

- **Route**: `POST /companies({company_id})/extensionUpload({extensionUpload_id})/Microsoft.NAV.upload`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def install_uploaded_extension(company_id: UUID, extension_upload_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `extension_upload_id`
- **Params**: `company_id` — path · `extension_upload_id` — path `extensionUpload_id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, InstallUploadedExtensionErrorBody]`
- **Error**: `InstallUploadedExtensionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InstallUploadedExtensionErrorBody` | `dynamics_365_business_central/errors/install_uploaded_extension_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.extension_upload_api.upload_extension_file

- **Route**: `PATCH /companies({company_id})/extensionUpload({extensionUpload_id})/extensionContent`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def upload_extension_file(company_id: UUID, extension_upload_id: UUID, if_match: str, body: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `extension_upload_id`, `if_match`, `body`
- **Params**: `company_id` — path · `extension_upload_id` — path `extensionUpload_id` · `if_match` — header `If-Match` · `body` — binary body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UploadExtensionFileErrorBody]`
- **Error**: `UploadExtensionFileErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UploadExtensionFileErrorBody` | `dynamics_365_business_central/errors/upload_extension_file_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

