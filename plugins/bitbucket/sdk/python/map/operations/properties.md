<!-- Generated file — do not edit; regenerated with the SDK. -->

# Properties — operations

Accessor: `client.properties` · Source: `bitbucket/apis/properties.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.properties.delete_commit_hosted_property_value

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_commit_hosted_property_value(workspace: str, repo_slug: str, commit: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `app_key`, `property_name`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `app_key` — path · `property_name` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.properties.delete_pull_request_hosted_property_value

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_pull_request_hosted_property_value(workspace: str, repo_slug: str, pullrequest_id: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `pullrequest_id`, `app_key`, `property_name`
- **Params**: `workspace` — path · `repo_slug` — path · `pullrequest_id` — path · `app_key` — path · `property_name` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.properties.delete_repository_hosted_property_value

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repository_hosted_property_value(workspace: str, repo_slug: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `app_key`, `property_name`
- **Params**: `workspace` — path · `repo_slug` — path · `app_key` — path · `property_name` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.properties.delete_user_hosted_property_value

- **Route**: `DELETE /users/{selected_user}/properties/{app_key}/{property_name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_user_hosted_property_value(selected_user: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`, `app_key`, `property_name`
- **Params**: `selected_user` — path · `app_key` — path · `property_name` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.properties.get_commit_hosted_property_value

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_commit_hosted_property_value(workspace: str, repo_slug: str, commit: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `app_key`, `property_name`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `app_key` — path · `property_name` — path
- **Returns (parsed)**: `ApplicationProperty`
- **Returns (raw)**: `ApiResult[ApplicationProperty, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApplicationProperty` | `bitbucket/models/application_property.py` |

### client.properties.get_pull_request_hosted_property_value

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pull_request_hosted_property_value(workspace: str, repo_slug: str, pullrequest_id: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `pullrequest_id`, `app_key`, `property_name`
- **Params**: `workspace` — path · `repo_slug` — path · `pullrequest_id` — path · `app_key` — path · `property_name` — path
- **Returns (parsed)**: `ApplicationProperty`
- **Returns (raw)**: `ApiResult[ApplicationProperty, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApplicationProperty` | `bitbucket/models/application_property.py` |

### client.properties.get_repository_hosted_property_value

- **Route**: `GET /repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_hosted_property_value(workspace: str, repo_slug: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `app_key`, `property_name`
- **Params**: `workspace` — path · `repo_slug` — path · `app_key` — path · `property_name` — path
- **Returns (parsed)**: `ApplicationProperty`
- **Returns (raw)**: `ApiResult[ApplicationProperty, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApplicationProperty` | `bitbucket/models/application_property.py` |

### client.properties.retrieve_user_hosted_property_value

- **Route**: `GET /users/{selected_user}/properties/{app_key}/{property_name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def retrieve_user_hosted_property_value(selected_user: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`, `app_key`, `property_name`
- **Params**: `selected_user` — path · `app_key` — path · `property_name` — path
- **Returns (parsed)**: `ApplicationProperty`
- **Returns (raw)**: `ApiResult[ApplicationProperty, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApplicationProperty` | `bitbucket/models/application_property.py` |

### client.properties.update_commit_hosted_property_value

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_commit_hosted_property_value(workspace: str, repo_slug: str, commit: str, app_key: str, property_name: str, body: ApplicationProperty | ApplicationPropertyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `app_key`, `property_name`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `app_key` — path · `property_name` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApplicationProperty` | `bitbucket/models/application_property.py` |
| `ApplicationPropertyDict` | `bitbucket/models/application_property.py` |

### client.properties.update_pull_request_hosted_property_value

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_pull_request_hosted_property_value(workspace: str, repo_slug: str, pullrequest_id: str, app_key: str, property_name: str, body: ApplicationProperty | ApplicationPropertyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `pullrequest_id`, `app_key`, `property_name`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `pullrequest_id` — path · `app_key` — path · `property_name` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApplicationProperty` | `bitbucket/models/application_property.py` |
| `ApplicationPropertyDict` | `bitbucket/models/application_property.py` |

### client.properties.update_repository_hosted_property_value

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_repository_hosted_property_value(workspace: str, repo_slug: str, app_key: str, property_name: str, body: ApplicationProperty | ApplicationPropertyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `app_key`, `property_name`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `app_key` — path · `property_name` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApplicationProperty` | `bitbucket/models/application_property.py` |
| `ApplicationPropertyDict` | `bitbucket/models/application_property.py` |

### client.properties.update_user_hosted_property_value

- **Route**: `PUT /users/{selected_user}/properties/{app_key}/{property_name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_user_hosted_property_value(selected_user: str, app_key: str, property_name: str, body: ApplicationProperty | ApplicationPropertyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`, `app_key`, `property_name`, `body`
- **Params**: `selected_user` — path · `app_key` — path · `property_name` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApplicationProperty` | `bitbucket/models/application_property.py` |
| `ApplicationPropertyDict` | `bitbucket/models/application_property.py` |

