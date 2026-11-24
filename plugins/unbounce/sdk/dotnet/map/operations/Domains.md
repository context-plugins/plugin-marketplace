<!-- Generated file — do not edit; regenerated with the SDK. -->

# Domains — operations

Accessor: `client.Domains` · Source: `src/Unbounce/Api/Domains.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetDomain

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `GetDomain(GetDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainId`
- **Returns**: `Domain`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetDomainRequest` | `src/Unbounce/Requests/Domains/GetDomainRequest.cs` |
| `Domain` | `src/Unbounce/Models/Domain.cs` |

### ListDomainsForSubAccount

- **Auth**: `options.ApiKeyAuth` OR `options.Oauth2`
- **Signature**: `ListDomainsForSubAccount(ListDomainsForSubAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubAccountId`
- **Returns**: `SubAccountsDomainsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListDomainsForSubAccountRequest` | `src/Unbounce/Requests/Domains/ListDomainsForSubAccountRequest.cs` |
| `SubAccountsDomainsResponse` | `src/Unbounce/Models/SubAccountsDomainsResponse.cs` |

