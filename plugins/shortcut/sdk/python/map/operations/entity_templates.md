<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntityTemplates — operations

Accessor: `client.entity_templates` · Source: `shortcut/apis/entity_templates.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.entity_templates.create_entity_template

- **Route**: `POST /api/v3/entity-templates`
- **Auth**: `api_token`
- **Signature**: `def create_entity_template(body: CreateEntityTemplate | CreateEntityTemplateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EntityTemplate`
- **Returns (raw)**: `ApiResult[EntityTemplate, CreateEntityTemplateErrorBody]`
- **Error**: `CreateEntityTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateEntityTemplate` | `shortcut/models/create_entity_template.py` |
| `CreateEntityTemplateDict` | `shortcut/models/create_entity_template.py` |
| `EntityTemplate` | `shortcut/models/entity_template.py` |
| `CreateEntityTemplateErrorBody` | `shortcut/errors/create_entity_template_error.py` |

### client.entity_templates.delete_entity_template

- **Route**: `DELETE /api/v3/entity-templates/{entity-template-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_entity_template(entity_template_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `entity_template_public_id`
- **Params**: `entity_template_public_id` — path `entity-template-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteEntityTemplateErrorBody]`
- **Error**: `DeleteEntityTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteEntityTemplateErrorBody` | `shortcut/errors/delete_entity_template_error.py` |

### client.entity_templates.disable_story_templates

- **Route**: `PUT /api/v3/entity-templates/disable`
- **Auth**: `api_token`
- **Signature**: `def disable_story_templates(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DisableStoryTemplatesErrorBody]`
- **Error**: `DisableStoryTemplatesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DisableStoryTemplatesErrorBody` | `shortcut/errors/disable_story_templates_error.py` |

### client.entity_templates.enable_story_templates

- **Route**: `PUT /api/v3/entity-templates/enable`
- **Auth**: `api_token`
- **Signature**: `def enable_story_templates(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, EnableStoryTemplatesErrorBody]`
- **Error**: `EnableStoryTemplatesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `EnableStoryTemplatesErrorBody` | `shortcut/errors/enable_story_templates_error.py` |

### client.entity_templates.get_entity_template

- **Route**: `GET /api/v3/entity-templates/{entity-template-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_entity_template(entity_template_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `entity_template_public_id`
- **Params**: `entity_template_public_id` — path `entity-template-public-id`
- **Returns (parsed)**: `EntityTemplate`
- **Returns (raw)**: `ApiResult[EntityTemplate, GetEntityTemplateErrorBody]`
- **Error**: `GetEntityTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `EntityTemplate` | `shortcut/models/entity_template.py` |
| `GetEntityTemplateErrorBody` | `shortcut/errors/get_entity_template_error.py` |

### client.entity_templates.list_entity_templates

- **Route**: `GET /api/v3/entity-templates`
- **Auth**: `api_token`
- **Signature**: `def list_entity_templates(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[EntityTemplate]`
- **Returns (raw)**: `ApiResult[list[EntityTemplate], ListEntityTemplatesErrorBody]`
- **Error**: `ListEntityTemplatesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `EntityTemplate` | `shortcut/models/entity_template.py` |
| `ListEntityTemplatesErrorBody` | `shortcut/errors/list_entity_templates_error.py` |

### client.entity_templates.update_entity_template

- **Route**: `PUT /api/v3/entity-templates/{entity-template-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_entity_template(entity_template_public_id: UUID, body: UpdateEntityTemplate | UpdateEntityTemplateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `entity_template_public_id`, `body`
- **Params**: `entity_template_public_id` — path `entity-template-public-id` · `body` — JSON body
- **Returns (parsed)**: `EntityTemplate`
- **Returns (raw)**: `ApiResult[EntityTemplate, UpdateEntityTemplateErrorBody]`
- **Error**: `UpdateEntityTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateEntityTemplate` | `shortcut/models/update_entity_template.py` |
| `UpdateEntityTemplateDict` | `shortcut/models/update_entity_template.py` |
| `EntityTemplate` | `shortcut/models/entity_template.py` |
| `UpdateEntityTemplateErrorBody` | `shortcut/errors/update_entity_template_error.py` |

