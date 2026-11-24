<!-- Generated file — do not edit; regenerated with the SDK. -->

# PageGroups — operations

Accessor: `client.PageGroups` · Source: `src/Unbounce/Api/PageGroups.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListPageGroupsForSubAccount

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `ListPageGroupsForSubAccount(ListPageGroupsForSubAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubAccountId`
- **Returns**: `SubAccountsPageGroupsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPageGroupsForSubAccountRequest` | `src/Unbounce/Requests/PageGroups/ListPageGroupsForSubAccountRequest.cs` |
| `SubAccountsPageGroupsResponse` | `src/Unbounce/Models/SubAccountsPageGroupsResponse.cs` |

### ListPagesForPageGroup

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `ListPagesForPageGroup(ListPagesForPageGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageGroupId`
- **Returns**: `PageCollection`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPagesForPageGroupRequest` | `src/Unbounce/Requests/PageGroups/ListPagesForPageGroupRequest.cs` |
| `PageCollection` | `src/Unbounce/Models/PageCollection.cs` |

