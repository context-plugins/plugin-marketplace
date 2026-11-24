<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `stoplight/client.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.get_versions_version_id_export_format

- **Route**: `GET /versions/{versionId}/export/{format}`
- **Signature**: `def get_versions_version_id_export_format(*, version_id: str = "", format_: FormatOrStr = Format.OAS_JSON, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `version_id` — path `versionId` · `format_` — path `format`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetVersionsVersionIdExportFormatErrorBody]`
- **Error**: `GetVersionsVersionIdExportFormatErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `stoplight/models/enums/format.py` |
| `GetVersionsVersionIdExportFormatErrorBody` | `stoplight/errors/get_versions_version_id_export_format_error.py` |

### client.post_versions_publish_anon

- **Route**: `POST /versions/publish/anon`
- **Signature**: `def post_versions_publish_anon(*, body: VersionsPublishAnonRequest | VersionsPublishAnonRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `VersionsPublishAnonResponse`
- **Returns (raw)**: `ApiResult[VersionsPublishAnonResponse, PostVersionsPublishAnonErrorBody]`
- **Error**: `PostVersionsPublishAnonErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400, 401, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VersionsPublishAnonRequest` | `stoplight/models/versions_publish_anon_request.py` |
| `VersionsPublishAnonRequestDict` | `stoplight/models/versions_publish_anon_request.py` |
| `VersionsPublishAnonResponse` | `stoplight/models/versions_publish_anon_response.py` |
| `PostVersionsPublishAnonErrorBody` | `stoplight/errors/post_versions_publish_anon_error.py` |

### client.post_versions_version_id_publish

- **Route**: `POST /versions/{versionId}/publish`
- **Auth**: `authorization`
- **Signature**: `def post_versions_version_id_publish(version_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `version_id`
- **Params**: `version_id` — path `versionId`
- **Returns (parsed)**: `VersionsPublishResponse`
- **Returns (raw)**: `ApiResult[VersionsPublishResponse, PostVersionsVersionIdPublishErrorBody]`
- **Error**: `PostVersionsVersionIdPublishErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VersionsPublishResponse` | `stoplight/models/versions_publish_response.py` |
| `PostVersionsVersionIdPublishErrorBody` | `stoplight/errors/post_versions_version_id_publish_error.py` |

### client.put_versions_version_id_import

- **Route**: `PUT /versions/{versionId}/import`
- **Auth**: `authorization`
- **Signature**: `def put_versions_version_id_import(version_id: str, *, body: VersionsImportRequest | VersionsImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `version_id`
- **Params**: `version_id` — path `versionId` · `body` — JSON body
- **Returns (parsed)**: `VersionsImportResponse`
- **Returns (raw)**: `ApiResult[VersionsImportResponse, PutVersionsVersionIdImportErrorBody]`
- **Error**: `PutVersionsVersionIdImportErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VersionsImportRequest` | `stoplight/models/versions_import_request.py` |
| `VersionsImportRequestDict` | `stoplight/models/versions_import_request.py` |
| `VersionsImportResponse` | `stoplight/models/versions_import_response.py` |
| `PutVersionsVersionIdImportErrorBody` | `stoplight/errors/put_versions_version_id_import_error.py` |

### client.put_versions_version_id_unpublish

- **Route**: `PUT /versions/{versionId}/unpublish`
- **Auth**: `authorization`
- **Signature**: `def put_versions_version_id_unpublish(version_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `version_id`
- **Params**: `version_id` — path `versionId`
- **Returns (parsed)**: `VersionsUnpublishResponse`
- **Returns (raw)**: `ApiResult[VersionsUnpublishResponse, PutVersionsVersionIdUnpublishErrorBody]`
- **Error**: `PutVersionsVersionIdUnpublishErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VersionsUnpublishResponse` | `stoplight/models/versions_unpublish_response.py` |
| `PutVersionsVersionIdUnpublishErrorBody` | `stoplight/errors/put_versions_version_id_unpublish_error.py` |

