<!-- Generated file — do not edit; regenerated with the SDK. -->

# Knowledge — operations

Accessor: `client.knowledge` · Source: `deliverd/apis/knowledge.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.knowledge.get_api_v1_knowledge

- **Route**: `GET /api/v1/knowledge`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_knowledge(*, q: str | None = None, kind: KindDeliverdDevKnowledgeApiOrStr | None = None, status: StatusDeliverdDevKnowledgeApiOrStr | None = None, workspace_id: UUID | None = None, flow_id: UUID | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `kind` — query · `status` — query · `workspace_id` — query `workspaceId` · `flow_id` — query `flowId` · `limit` — query
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `KindDeliverdDevKnowledgeApiOrStr` | `deliverd/models/enums/kind_deliverd_dev_knowledge_api.py` |
| `StatusDeliverdDevKnowledgeApiOrStr` | `deliverd/models/enums/status_deliverd_dev_knowledge_api.py` |

### client.knowledge.get_api_v1_knowledge_agents_md

- **Route**: `GET /api/v1/knowledge/agents-md`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_knowledge_agents_md(*, workspace_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `workspace_id` — query `workspaceId`
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, RawError]`
- **Error**: `RawError` — **Case B**

### client.knowledge.get_api_v1_knowledge_by_id

- **Route**: `GET /api/v1/knowledge/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_knowledge_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], GetApiV1KnowledgeByIdErrorBody]`
- **Error**: `GetApiV1KnowledgeByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `GetApiV1KnowledgeByIdErrorBody` | `deliverd/errors/get_api_v1_knowledge_by_id_error.py` |

### client.knowledge.get_api_v1_knowledge_export

- **Route**: `GET /api/v1/knowledge/export`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_knowledge_export(*, format_: FormatDeliverdDevKnowledgeApiOrStr | None = None, status: StatusDeliverdDevKnowledgeApiOrStr | None = None, workspace_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `format_` — query `format` · `status` — query · `workspace_id` — query `workspaceId`
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `FormatDeliverdDevKnowledgeApiOrStr` | `deliverd/models/enums/format_deliverd_dev_knowledge_api.py` |
| `StatusDeliverdDevKnowledgeApiOrStr` | `deliverd/models/enums/status_deliverd_dev_knowledge_api.py` |

### client.knowledge.patch_api_v1_knowledge_by_id

- **Route**: `PATCH /api/v1/knowledge/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def patch_api_v1_knowledge_by_id(id_: UUID, *, body: ApiV1KnowledgeRequest1 | ApiV1KnowledgeRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PatchApiV1KnowledgeByIdErrorBody]`
- **Error**: `PatchApiV1KnowledgeByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1KnowledgeRequest1` | `deliverd/models/api_v1_knowledge_request1.py` |
| `ApiV1KnowledgeRequest1Dict` | `deliverd/models/api_v1_knowledge_request1.py` |
| `PatchApiV1KnowledgeByIdErrorBody` | `deliverd/errors/patch_api_v1_knowledge_by_id_error.py` |

### client.knowledge.post_api_v1_knowledge

- **Route**: `POST /api/v1/knowledge`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_knowledge(*, body: ApiV1KnowledgeRequest | ApiV1KnowledgeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1KnowledgeErrorBody]`
- **Error**: `PostApiV1KnowledgeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1KnowledgeRequest` | `deliverd/models/api_v1_knowledge_request.py` |
| `ApiV1KnowledgeRequestDict` | `deliverd/models/api_v1_knowledge_request.py` |
| `PostApiV1KnowledgeErrorBody` | `deliverd/errors/post_api_v1_knowledge_error.py` |

### client.knowledge.post_api_v1_knowledge_import

- **Route**: `POST /api/v1/knowledge/import`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_knowledge_import(*, body: ApiV1KnowledgeImportRequest | ApiV1KnowledgeImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1KnowledgeImportErrorBody]`
- **Error**: `PostApiV1KnowledgeImportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1KnowledgeImportRequest` | `deliverd/models/api_v1_knowledge_import_request.py` |
| `ApiV1KnowledgeImportRequestDict` | `deliverd/models/api_v1_knowledge_import_request.py` |
| `PostApiV1KnowledgeImportErrorBody` | `deliverd/errors/post_api_v1_knowledge_import_error.py` |

