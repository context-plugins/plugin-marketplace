<!-- Generated file — do not edit; regenerated with the SDK. -->

# BetaSemanticPatch — operations

Accessor: `client.beta_semantic_patch` · Source: `dev_cycle/apis/beta_semantic_patch.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.beta_semantic_patch.semantic_patch_controller_semantic_update

- **Route**: `PATCH /v1/semantic/projects/{project}/audiences/{key}`
- **Server**: `default`
- **Signature**: `def semantic_patch_controller_semantic_update(key: str, project: str, body: AudiencePatchDto | AudiencePatchDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`, `body`
- **Params**: `key` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SemanticPatchControllerSemanticUpdateErrorBody]`
- **Error**: `SemanticPatchControllerSemanticUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `AudiencePatchDto` | `dev_cycle/models/audience_patch_dto.py` |
| `AudiencePatchDtoDict` | `dev_cycle/models/audience_patch_dto.py` |
| `SemanticPatchControllerSemanticUpdateErrorBody` | `dev_cycle/errors/semantic_patch_controller_semantic_update_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |

