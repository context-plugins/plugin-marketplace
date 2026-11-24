<!-- Generated file — do not edit; regenerated with the SDK. -->

# Properties — operations

Accessor: `client.Properties` · Source: `src/Bitbucket/Api/Properties.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteCommitHostedPropertyValue

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteCommitHostedPropertyValue(DeleteCommitHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `AppKey`, `PropertyName`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteCommitHostedPropertyValueRequest` | `src/Bitbucket/Requests/Properties/DeleteCommitHostedPropertyValueRequest.cs` |

### DeletePullRequestHostedPropertyValue

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeletePullRequestHostedPropertyValue(DeletePullRequestHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `PullrequestId`, `AppKey`, `PropertyName`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeletePullRequestHostedPropertyValueRequest` | `src/Bitbucket/Requests/Properties/DeletePullRequestHostedPropertyValueRequest.cs` |

### DeleteRepositoryHostedPropertyValue

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoryHostedPropertyValue(DeleteRepositoryHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `AppKey`, `PropertyName`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteRepositoryHostedPropertyValueRequest` | `src/Bitbucket/Requests/Properties/DeleteRepositoryHostedPropertyValueRequest.cs` |

### DeleteUserHostedPropertyValue

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteUserHostedPropertyValue(DeleteUserHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`, `AppKey`, `PropertyName`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteUserHostedPropertyValueRequest` | `src/Bitbucket/Requests/Properties/DeleteUserHostedPropertyValueRequest.cs` |

### GetCommitHostedPropertyValue

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetCommitHostedPropertyValue(GetCommitHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `AppKey`, `PropertyName`
- **Returns**: `ApplicationProperty`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetCommitHostedPropertyValueRequest` | `src/Bitbucket/Requests/Properties/GetCommitHostedPropertyValueRequest.cs` |
| `ApplicationProperty` | `src/Bitbucket/Models/ApplicationProperty.cs` |

### GetPullRequestHostedPropertyValue

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPullRequestHostedPropertyValue(GetPullRequestHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `PullrequestId`, `AppKey`, `PropertyName`
- **Returns**: `ApplicationProperty`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPullRequestHostedPropertyValueRequest` | `src/Bitbucket/Requests/Properties/GetPullRequestHostedPropertyValueRequest.cs` |
| `ApplicationProperty` | `src/Bitbucket/Models/ApplicationProperty.cs` |

### GetRepositoryHostedPropertyValue

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryHostedPropertyValue(GetRepositoryHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `AppKey`, `PropertyName`
- **Returns**: `ApplicationProperty`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoryHostedPropertyValueRequest` | `src/Bitbucket/Requests/Properties/GetRepositoryHostedPropertyValueRequest.cs` |
| `ApplicationProperty` | `src/Bitbucket/Models/ApplicationProperty.cs` |

### RetrieveUserHostedPropertyValue

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `RetrieveUserHostedPropertyValue(RetrieveUserHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`, `AppKey`, `PropertyName`
- **Returns**: `ApplicationProperty`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RetrieveUserHostedPropertyValueRequest` | `src/Bitbucket/Requests/Properties/RetrieveUserHostedPropertyValueRequest.cs` |
| `ApplicationProperty` | `src/Bitbucket/Models/ApplicationProperty.cs` |

### UpdateCommitHostedPropertyValue

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateCommitHostedPropertyValue(UpdateCommitHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `AppKey`, `PropertyName`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateCommitHostedPropertyValueRequest` | `src/Bitbucket/Requests/Properties/UpdateCommitHostedPropertyValueRequest.cs` |
| `ApplicationProperty` | `src/Bitbucket/Models/ApplicationProperty.cs` |

### UpdatePullRequestHostedPropertyValue

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdatePullRequestHostedPropertyValue(UpdatePullRequestHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `PullrequestId`, `AppKey`, `PropertyName`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdatePullRequestHostedPropertyValueRequest` | `src/Bitbucket/Requests/Properties/UpdatePullRequestHostedPropertyValueRequest.cs` |
| `ApplicationProperty` | `src/Bitbucket/Models/ApplicationProperty.cs` |

### UpdateRepositoryHostedPropertyValue

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateRepositoryHostedPropertyValue(UpdateRepositoryHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `AppKey`, `PropertyName`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateRepositoryHostedPropertyValueRequest` | `src/Bitbucket/Requests/Properties/UpdateRepositoryHostedPropertyValueRequest.cs` |
| `ApplicationProperty` | `src/Bitbucket/Models/ApplicationProperty.cs` |

### UpdateUserHostedPropertyValue

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateUserHostedPropertyValue(UpdateUserHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`, `AppKey`, `PropertyName`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateUserHostedPropertyValueRequest` | `src/Bitbucket/Requests/Properties/UpdateUserHostedPropertyValueRequest.cs` |
| `ApplicationProperty` | `src/Bitbucket/Models/ApplicationProperty.cs` |

