<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiReference — operations

Accessor: `client.api_reference` · Source: `archbee/apis/api_reference.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.api_reference.info_open_api_document

- **Route**: `GET /info-api-reference`
- **Auth**: `bearer_auth`
- **Signature**: `def info_open_api_document(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `InfoApiReferenceResponse`
- **Returns (raw)**: `ApiResult[InfoApiReferenceResponse, InfoOpenApiDocumentErrorBody]`
- **Error**: `InfoOpenApiDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `InfoApiReference400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InfoApiReferenceResponse` | `archbee/models/info_api_reference_response.py` |
| `InfoOpenApiDocumentErrorBody` | `archbee/errors/info_open_api_document_error.py` |
| `InfoApiReference400Error1` | `archbee/models/info_api_reference400_error1.py` |

### client.api_reference.sync_open_api_document

- **Route**: `POST /sync-api-reference`
- **Auth**: `bearer_auth`
- **Signature**: `def sync_open_api_document(file: FileInput, *, doc_tree_id: str | None = "21-character__string0", type_: TypeOrStr | None = Type.OPENAPI, open_api_try_it: OpenApiTryItOrStr | None = None, open_api_use_own_backend: OpenApiUseOwnBackendOrStr | None = None, show_download_open_api_file: ShowDownloadOpenApiFileOrStr | None = None, should_create_schema_category: ShouldCreateSchemaCategoryOrStr | None = None, should_create_intro: ShouldCreateIntroOrStr | None = None, open_api_language_examples: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`
- **Params**: `file` — multipart file · `doc_tree_id` — multipart field `docTreeId` · `type_` — multipart field `type` · `open_api_try_it` — multipart field `openApiTryIt` · `open_api_use_own_backend` — multipart field `openApiUseOwnBackend` · `show_download_open_api_file` — multipart field `showDownloadOpenApiFile` · `should_create_schema_category` — multipart field `shouldCreateSchemaCategory` · `should_create_intro` — multipart field `shouldCreateIntro` · `open_api_language_examples` — multipart field `openApiLanguageExamples`
- **Returns (parsed)**: `SyncApiReferenceResponse`
- **Returns (raw)**: `ApiResult[SyncApiReferenceResponse, SyncOpenApiDocumentErrorBody]`
- **Error**: `SyncOpenApiDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `SyncApiReference400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeOrStr` | `archbee/models/enums/type.py` |
| `OpenApiTryItOrStr` | `archbee/models/enums/open_api_try_it.py` |
| `OpenApiUseOwnBackendOrStr` | `archbee/models/enums/open_api_use_own_backend.py` |
| `ShowDownloadOpenApiFileOrStr` | `archbee/models/enums/show_download_open_api_file.py` |
| `ShouldCreateSchemaCategoryOrStr` | `archbee/models/enums/should_create_schema_category.py` |
| `ShouldCreateIntroOrStr` | `archbee/models/enums/should_create_intro.py` |
| `SyncApiReferenceResponse` | `archbee/models/sync_api_reference_response.py` |
| `SyncOpenApiDocumentErrorBody` | `archbee/errors/sync_open_api_document_error.py` |
| `SyncApiReference400Error1` | `archbee/models/sync_api_reference400_error1.py` |

