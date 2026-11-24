<!-- Generated file — do not edit; regenerated with the SDK. -->

# XPayoutLinks — operations

Accessor: `client.XPayoutLinks` · Source: `src/Curlec/Api/XPayoutLinks.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelPayoutLink

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CancelPayoutLink(CancelPayoutLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PayoutLinkId`
- **Returns**: `PayoutLink`
- **Error**: `ApiException<CancelPayoutLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelPayoutLinkRequest` | `src/Curlec/Requests/XPayoutLinks/CancelPayoutLinkRequest.cs` |
| `PayoutLink` | `src/Curlec/Models/PayoutLink.cs` |
| `CancelPayoutLinkError` | `src/Curlec/Errors/CancelPayoutLinkError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CreatePayoutLink

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreatePayoutLink(CreatePayoutLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PayoutLink`
- **Error**: `ApiException<CreatePayoutLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePayoutLinkRequest` | `src/Curlec/Requests/XPayoutLinks/CreatePayoutLinkRequest.cs` |
| `PayoutLinksRequest` | `src/Curlec/Models/PayoutLinksRequest.cs` |
| `PayoutLink` | `src/Curlec/Models/PayoutLink.cs` |
| `CreatePayoutLinkError` | `src/Curlec/Errors/CreatePayoutLinkError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchPayoutLink

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchPayoutLink(FetchPayoutLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PayoutLinkId`
- **Returns**: `PayoutLink`
- **Error**: `ApiException<FetchPayoutLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchPayoutLinkRequest` | `src/Curlec/Requests/XPayoutLinks/FetchPayoutLinkRequest.cs` |
| `PayoutLink` | `src/Curlec/Models/PayoutLink.cs` |
| `FetchPayoutLinkError` | `src/Curlec/Errors/FetchPayoutLinkError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListPayoutLinks

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListPayoutLinks(ListPayoutLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `contact_id` ← `ContactId`, `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `PayoutLinksResponse`
- **Error**: `ApiException<ListPayoutLinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPayoutLinksRequest` | `src/Curlec/Requests/XPayoutLinks/ListPayoutLinksRequest.cs` |
| `PayoutLinksResponse` | `src/Curlec/Models/PayoutLinksResponse.cs` |
| `ListPayoutLinksError` | `src/Curlec/Errors/ListPayoutLinksError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

