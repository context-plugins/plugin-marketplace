<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `contentstack/apis/organizations.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.organizations.get_all_organizations

- **Route**: `GET /organizations`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def get_all_organizations(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `OrganizationList`
- **Returns (raw)**: `ApiResult[OrganizationList, GetAllOrganizationsErrorBody]`
- **Error**: `GetAllOrganizationsErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationList` | `contentstack/models/organization_list.py` |
| `GetAllOrganizationsErrorBody` | `contentstack/errors/get_all_organizations_error.py` |
| `Error2` | `contentstack/models/error2.py` |

### client.organizations.get_organization

- **Route**: `GET /organizations/{organization_uid}`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def get_organization(organization_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`
- **Params**: `organization_uid` — path
- **Returns (parsed)**: `Organization`
- **Returns (raw)**: `ApiResult[Organization, GetOrganizationErrorBody]`
- **Error**: `GetOrganizationErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Organization` | `contentstack/models/organization.py` |
| `GetOrganizationErrorBody` | `contentstack/errors/get_organization_error.py` |
| `Error2` | `contentstack/models/error2.py` |

### client.organizations.get_organization_stacks

- **Route**: `GET /organizations/{organization_uid}/stacks`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def get_organization_stacks(organization_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`
- **Params**: `organization_uid` — path
- **Returns (parsed)**: `StackList`
- **Returns (raw)**: `ApiResult[StackList, GetOrganizationStacksErrorBody]`
- **Error**: `GetOrganizationStacksErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StackList` | `contentstack/models/stack_list.py` |
| `GetOrganizationStacksErrorBody` | `contentstack/errors/get_organization_stacks_error.py` |
| `Error2` | `contentstack/models/error2.py` |

