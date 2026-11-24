<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `shortcut/apis/documents.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.documents.create_doc

- **Route**: `POST /api/v3/documents`
- **Auth**: `api_token`
- **Signature**: `def create_doc(body: CreateDoc | CreateDocDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DocSlim`
- **Returns (raw)**: `ApiResult[DocSlim, CreateDocErrorBody]`
- **Error**: `CreateDocErrorBody` — **Case A (typed)**
- **Error arms**: `DisabledFeatureError` [403] · `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateDoc` | `shortcut/models/create_doc.py` |
| `CreateDocDict` | `shortcut/models/create_doc.py` |
| `DocSlim` | `shortcut/models/doc_slim.py` |
| `CreateDocErrorBody` | `shortcut/errors/create_doc_error.py` |
| `DisabledFeatureError` | `shortcut/models/disabled_feature_error.py` |

### client.documents.delete_doc

- **Route**: `DELETE /api/v3/documents/{doc-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_doc(doc_public_id: UUID, body: GetDoc | GetDocDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `doc_public_id`, `body`
- **Params**: `doc_public_id` — path `doc-public-id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDocErrorBody]`
- **Error**: `DeleteDocErrorBody` — **Case A (typed)**
- **Error arms**: `DisabledFeatureError` [403] · `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `GetDoc` | `shortcut/models/get_doc.py` |
| `GetDocDict` | `shortcut/models/get_doc.py` |
| `DeleteDocErrorBody` | `shortcut/errors/delete_doc_error.py` |
| `DisabledFeatureError` | `shortcut/models/disabled_feature_error.py` |

### client.documents.get_doc

- **Route**: `GET /api/v3/documents/{doc-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_doc(doc_public_id: UUID, *, content_format: ContentFormat3OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `doc_public_id`
- **Params**: `doc_public_id` — path `doc-public-id` · `content_format` — query
- **Returns (parsed)**: `Doc`
- **Returns (raw)**: `ApiResult[Doc, GetDocErrorBody]`
- **Error**: `GetDocErrorBody` — **Case A (typed)**
- **Error arms**: `DisabledFeatureError` [403] · `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `ContentFormat3OrStr` | `shortcut/models/enums/content_format3.py` |
| `Doc` | `shortcut/models/doc.py` |
| `GetDocErrorBody` | `shortcut/errors/get_doc_error.py` |
| `DisabledFeatureError` | `shortcut/models/disabled_feature_error.py` |

### client.documents.link_document_to_epic

- **Route**: `PUT /api/v3/documents/{doc-public-id}/epics/{epic-public-id}`
- **Auth**: `api_token`
- **Signature**: `def link_document_to_epic(doc_public_id: UUID, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `doc_public_id`, `epic_public_id`
- **Params**: `doc_public_id` — path `doc-public-id` · `epic_public_id` — path `epic-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, LinkDocumentToEpicErrorBody]`
- **Error**: `LinkDocumentToEpicErrorBody` — **Case A (typed)**
- **Error arms**: `DisabledFeatureError` [403] · `UnprocessableError` [422] · `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `LinkDocumentToEpicErrorBody` | `shortcut/errors/link_document_to_epic_error.py` |
| `DisabledFeatureError` | `shortcut/models/disabled_feature_error.py` |
| `UnprocessableError` | `shortcut/models/unprocessable_error.py` |

### client.documents.list_docs

- **Route**: `GET /api/v3/documents`
- **Auth**: `api_token`
- **Signature**: `def list_docs(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[DocSlim]`
- **Returns (raw)**: `ApiResult[list[DocSlim], ListDocsErrorBody]`
- **Error**: `ListDocsErrorBody` — **Case A (typed)**
- **Error arms**: `DisabledFeatureError` [403] · `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DocSlim` | `shortcut/models/doc_slim.py` |
| `ListDocsErrorBody` | `shortcut/errors/list_docs_error.py` |
| `DisabledFeatureError` | `shortcut/models/disabled_feature_error.py` |

### client.documents.list_document_epics

- **Route**: `GET /api/v3/documents/{doc-public-id}/epics`
- **Auth**: `api_token`
- **Signature**: `def list_document_epics(doc_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `doc_public_id`
- **Params**: `doc_public_id` — path `doc-public-id`
- **Returns (parsed)**: `list[EpicSlim]`
- **Returns (raw)**: `ApiResult[list[EpicSlim], ListDocumentEpicsErrorBody]`
- **Error**: `ListDocumentEpicsErrorBody` — **Case A (typed)**
- **Error arms**: `DisabledFeatureError` [403] · `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `EpicSlim` | `shortcut/models/epic_slim.py` |
| `ListDocumentEpicsErrorBody` | `shortcut/errors/list_document_epics_error.py` |
| `DisabledFeatureError` | `shortcut/models/disabled_feature_error.py` |

### client.documents.unlink_document_from_epic

- **Route**: `DELETE /api/v3/documents/{doc-public-id}/epics/{epic-public-id}`
- **Auth**: `api_token`
- **Signature**: `def unlink_document_from_epic(doc_public_id: UUID, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `doc_public_id`, `epic_public_id`
- **Params**: `doc_public_id` — path `doc-public-id` · `epic_public_id` — path `epic-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UnlinkDocumentFromEpicErrorBody]`
- **Error**: `UnlinkDocumentFromEpicErrorBody` — **Case A (typed)**
- **Error arms**: `DisabledFeatureError` [403] · `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UnlinkDocumentFromEpicErrorBody` | `shortcut/errors/unlink_document_from_epic_error.py` |
| `DisabledFeatureError` | `shortcut/models/disabled_feature_error.py` |

### client.documents.update_doc

- **Route**: `PUT /api/v3/documents/{doc-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_doc(doc_public_id: UUID, body: UpdateDoc | UpdateDocDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `doc_public_id`, `body`
- **Params**: `doc_public_id` — path `doc-public-id` · `body` — JSON body
- **Returns (parsed)**: `Doc`
- **Returns (raw)**: `ApiResult[Doc, UpdateDocErrorBody]`
- **Error**: `UpdateDocErrorBody` — **Case A (typed)**
- **Error arms**: `DisabledFeatureError` [403] · `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateDoc` | `shortcut/models/update_doc.py` |
| `UpdateDocDict` | `shortcut/models/update_doc.py` |
| `Doc` | `shortcut/models/doc.py` |
| `UpdateDocErrorBody` | `shortcut/errors/update_doc_error.py` |
| `DisabledFeatureError` | `shortcut/models/disabled_feature_error.py` |

