<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pages — operations

Accessor: `client.Pages` · Source: `src/Unbounce/Api/Pages.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPage

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `GetPage(GetPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`
- **Returns**: `Page`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPageRequest` | `src/Unbounce/Requests/Pages/GetPageRequest.cs` |
| `Page` | `src/Unbounce/Models/Page.cs` |

### ListAccountPages

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `ListAccountPages(ListAccountPagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountId`
- **Returns**: `PageCollection`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListAccountPagesRequest` | `src/Unbounce/Requests/Pages/ListAccountPagesRequest.cs` |
| `PageCollection` | `src/Unbounce/Models/PageCollection.cs` |

### ListFormFields

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `ListFormFields(ListFormFieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`
- **Returns**: `PagesFormFieldsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListFormFieldsRequest` | `src/Unbounce/Requests/Pages/ListFormFieldsRequest.cs` |
| `PagesFormFieldsResponse` | `src/Unbounce/Models/PagesFormFieldsResponse.cs` |

### ListPages

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `ListPages(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PageCollection`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PageCollection` | `src/Unbounce/Models/PageCollection.cs` |

### ListPagesForDomain

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `ListPagesForDomain(ListPagesForDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainId`
- **Returns**: `PageCollection`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPagesForDomainRequest` | `src/Unbounce/Requests/Pages/ListPagesForDomainRequest.cs` |
| `PageCollection` | `src/Unbounce/Models/PageCollection.cs` |

### ListSubAccountPages

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `ListSubAccountPages(ListSubAccountPagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubAccountId`
- **Returns**: `PageCollection`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSubAccountPagesRequest` | `src/Unbounce/Requests/Pages/ListSubAccountPagesRequest.cs` |
| `PageCollection` | `src/Unbounce/Models/PageCollection.cs` |

