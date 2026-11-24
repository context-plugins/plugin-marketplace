<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.workspaces` · Source: `beehiiv/apis/workspaces.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.workspaces.identify2

- **Route**: `GET /workspaces/identify`
- **Server**: `default`
- **Signature**: `def identify2(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `WorkspaceIdentifyResponse`
- **Returns (raw)**: `ApiResult[WorkspaceIdentifyResponse, Identify2ErrorBody]`
- **Error**: `Identify2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspaceIdentifyResponse` | `beehiiv/models/workspace_identify_response.py` |
| `Identify2ErrorBody` | `beehiiv/errors/identify2_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.workspaces.permissions

- **Route**: `GET /workspaces/permissions`
- **Server**: `default`
- **Signature**: `def permissions(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `WorkspacePermissionsResponse`
- **Returns (raw)**: `ApiResult[WorkspacePermissionsResponse, PermissionsErrorBody]`
- **Error**: `PermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspacePermissionsResponse` | `beehiiv/models/workspace_permissions_response.py` |
| `PermissionsErrorBody` | `beehiiv/errors/permissions_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.workspaces.publications_by_subscription_email

- **Route**: `GET /workspaces/publications/by_subscription_email/{email}`
- **Server**: `default`
- **Signature**: `def publications_by_subscription_email(email: str, authorization: str, *, expand: list[PublicationsBySubscriptionEmailRequestExpandItemOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `email`, `authorization`
- **Params**: `email` — path · `expand` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `list[PublicationsBySubscriptionEmailResponseItem]`
- **Returns (raw)**: `ApiResult[list[PublicationsBySubscriptionEmailResponseItem], PublicationsBySubscriptionEmailErrorBody]`
- **Error**: `PublicationsBySubscriptionEmailErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsBySubscriptionEmailRequestExpandItemOrStr` | `beehiiv/models/enums/publications_by_subscription_email_request_expand_item.py` |
| `PublicationsBySubscriptionEmailResponseItem` | `beehiiv/models/publications_by_subscription_email_response_item.py` |
| `PublicationsBySubscriptionEmailErrorBody` | `beehiiv/errors/publications_by_subscription_email_error.py` |
| `Error` | `beehiiv/models/error.py` |

