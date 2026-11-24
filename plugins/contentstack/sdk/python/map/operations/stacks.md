<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stacks — operations

Accessor: `client.stacks` · Source: `contentstack/apis/stacks.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.stacks.create_stack

- **Route**: `POST /stacks`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def create_stack(organization_uid: str, body: CreateStackRequest | CreateStackRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `body`
- **Params**: `organization_uid` — header · `body` — JSON body
- **Returns (parsed)**: `Stack`
- **Returns (raw)**: `ApiResult[Stack, CreateStackErrorBody]`
- **Error**: `CreateStackErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateStackRequest` | `contentstack/models/create_stack_request.py` |
| `CreateStackRequestDict` | `contentstack/models/create_stack_request.py` |
| `Stack` | `contentstack/models/stack.py` |
| `CreateStackErrorBody` | `contentstack/errors/create_stack_error.py` |
| `Error2` | `contentstack/models/error2.py` |

### client.stacks.delete_stack

- **Route**: `DELETE /stacks/{api_key}`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def delete_stack(api_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_key`
- **Params**: `api_key` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteStackErrorBody]`
- **Error**: `DeleteStackErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteStackErrorBody` | `contentstack/errors/delete_stack_error.py` |
| `Error2` | `contentstack/models/error2.py` |

### client.stacks.get_all_stacks

- **Route**: `GET /stacks`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def get_all_stacks(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `StackList`
- **Returns (raw)**: `ApiResult[StackList, GetAllStacksErrorBody]`
- **Error**: `GetAllStacksErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StackList` | `contentstack/models/stack_list.py` |
| `GetAllStacksErrorBody` | `contentstack/errors/get_all_stacks_error.py` |
| `Error2` | `contentstack/models/error2.py` |

### client.stacks.get_stack

- **Route**: `GET /stacks/{api_key}`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def get_stack(api_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_key`
- **Params**: `api_key` — path
- **Returns (parsed)**: `Stack`
- **Returns (raw)**: `ApiResult[Stack, GetStackErrorBody]`
- **Error**: `GetStackErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Stack` | `contentstack/models/stack.py` |
| `GetStackErrorBody` | `contentstack/errors/get_stack_error.py` |
| `Error2` | `contentstack/models/error2.py` |

### client.stacks.update_stack

- **Route**: `PUT /stacks/{api_key}`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def update_stack(api_key: str, body: UpdateStackRequest | UpdateStackRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_key`, `body`
- **Params**: `api_key` — path · `body` — JSON body
- **Returns (parsed)**: `Stack`
- **Returns (raw)**: `ApiResult[Stack, UpdateStackErrorBody]`
- **Error**: `UpdateStackErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateStackRequest` | `contentstack/models/update_stack_request.py` |
| `UpdateStackRequestDict` | `contentstack/models/update_stack_request.py` |
| `Stack` | `contentstack/models/stack.py` |
| `UpdateStackErrorBody` | `contentstack/errors/update_stack_error.py` |
| `Error2` | `contentstack/models/error2.py` |

