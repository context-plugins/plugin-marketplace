<!-- Generated file — do not edit; regenerated with the SDK. -->

# SocialAccountApi — operations

Accessor: `client.SocialAccountApi` · Source: `src/BundleSocial/Api/SocialAccountApi.cs` · 13 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SocialAccountConnect

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountConnect(SocialAccountConnectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1SocialAccountConnectResponse`
- **Error**: `ApiException<SocialAccountConnectError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountConnect400Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect400Error1? value)` [400] · `TryGetApiV1SocialAccountConnect401Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect401Error1? value)` [401] · `TryGetApiV1SocialAccountConnect403Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect403Error1? value)` [403] · `TryGetApiV1SocialAccountConnect404Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect404Error1? value)` [404] · `TryGetApiV1SocialAccountConnect429Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect429Error1? value)` [429] · `TryGetApiV1SocialAccountConnect500Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect500Error1? value)` [500] · `TryGetApiV1SocialAccountConnect502Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect502Error1? value)` [502] · `TryGetApiV1SocialAccountConnect503Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect503Error1? value)` [503] · `TryGetApiV1SocialAccountConnect504Error1([NotNullWhen(true)] out ApiV1SocialAccountConnect504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountConnectRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountConnectRequest.cs` |
| `ApiV1SocialAccountConnectRequest` | `src/BundleSocial/Models/ApiV1SocialAccountConnectRequest.cs` |
| `ApiV1SocialAccountConnectResponse` | `src/BundleSocial/Models/ApiV1SocialAccountConnectResponse.cs` |
| `SocialAccountConnectError` | `src/BundleSocial/Errors/SocialAccountConnectError.cs` |
| `ApiV1SocialAccountConnect400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnect400Error1.cs` |
| `ApiV1SocialAccountConnect401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnect401Error1.cs` |
| `ApiV1SocialAccountConnect403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnect403Error1.cs` |
| `ApiV1SocialAccountConnect404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnect404Error1.cs` |
| `ApiV1SocialAccountConnect429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnect429Error1.cs` |
| `ApiV1SocialAccountConnect500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnect500Error1.cs` |
| `ApiV1SocialAccountConnect502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnect502Error1.cs` |
| `ApiV1SocialAccountConnect503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnect503Error1.cs` |
| `ApiV1SocialAccountConnect504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnect504Error1.cs` |

### SocialAccountConnectionCheck

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountConnectionCheck(SocialAccountConnectionCheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1SocialAccountConnectionCheckResponse`
- **Error**: `ApiException<SocialAccountConnectionCheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountConnectionCheck400Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck400Error1? value)` [400] · `TryGetApiV1SocialAccountConnectionCheck401Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck401Error1? value)` [401] · `TryGetApiV1SocialAccountConnectionCheck403Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck403Error1? value)` [403] · `TryGetApiV1SocialAccountConnectionCheck404Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck404Error1? value)` [404] · `TryGetApiV1SocialAccountConnectionCheck429Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck429Error1? value)` [429] · `TryGetApiV1SocialAccountConnectionCheck500Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck500Error1? value)` [500] · `TryGetApiV1SocialAccountConnectionCheck502Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck502Error1? value)` [502] · `TryGetApiV1SocialAccountConnectionCheck503Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck503Error1? value)` [503] · `TryGetApiV1SocialAccountConnectionCheck504Error1([NotNullWhen(true)] out ApiV1SocialAccountConnectionCheck504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountConnectionCheckRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountConnectionCheckRequest.cs` |
| `ApiV1SocialAccountConnectionCheckRequest` | `src/BundleSocial/Models/ApiV1SocialAccountConnectionCheckRequest.cs` |
| `ApiV1SocialAccountConnectionCheckResponse` | `src/BundleSocial/Models/ApiV1SocialAccountConnectionCheckResponse.cs` |
| `SocialAccountConnectionCheckError` | `src/BundleSocial/Errors/SocialAccountConnectionCheckError.cs` |
| `ApiV1SocialAccountConnectionCheck400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnectionCheck400Error1.cs` |
| `ApiV1SocialAccountConnectionCheck401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnectionCheck401Error1.cs` |
| `ApiV1SocialAccountConnectionCheck403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnectionCheck403Error1.cs` |
| `ApiV1SocialAccountConnectionCheck404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnectionCheck404Error1.cs` |
| `ApiV1SocialAccountConnectionCheck429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnectionCheck429Error1.cs` |
| `ApiV1SocialAccountConnectionCheck500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnectionCheck500Error1.cs` |
| `ApiV1SocialAccountConnectionCheck502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnectionCheck502Error1.cs` |
| `ApiV1SocialAccountConnectionCheck503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnectionCheck503Error1.cs` |
| `ApiV1SocialAccountConnectionCheck504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountConnectionCheck504Error1.cs` |

### SocialAccountCopy

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountCopy(SocialAccountCopyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<ApiV1SocialAccountCopyResponse>`
- **Error**: `ApiException<SocialAccountCopyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountCopy400Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy400Error1? value)` [400] · `TryGetApiV1SocialAccountCopy401Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy401Error1? value)` [401] · `TryGetApiV1SocialAccountCopy403Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy403Error1? value)` [403] · `TryGetApiV1SocialAccountCopy404Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy404Error1? value)` [404] · `TryGetApiV1SocialAccountCopy429Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy429Error1? value)` [429] · `TryGetApiV1SocialAccountCopy500Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy500Error1? value)` [500] · `TryGetApiV1SocialAccountCopy502Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy502Error1? value)` [502] · `TryGetApiV1SocialAccountCopy503Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy503Error1? value)` [503] · `TryGetApiV1SocialAccountCopy504Error1([NotNullWhen(true)] out ApiV1SocialAccountCopy504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountCopyRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountCopyRequest.cs` |
| `ApiV1SocialAccountCopyRequest` | `src/BundleSocial/Models/ApiV1SocialAccountCopyRequest.cs` |
| `ApiV1SocialAccountCopyResponse` | `src/BundleSocial/Models/ApiV1SocialAccountCopyResponse.cs` |
| `SocialAccountCopyError` | `src/BundleSocial/Errors/SocialAccountCopyError.cs` |
| `ApiV1SocialAccountCopy400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCopy400Error1.cs` |
| `ApiV1SocialAccountCopy401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCopy401Error1.cs` |
| `ApiV1SocialAccountCopy403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCopy403Error1.cs` |
| `ApiV1SocialAccountCopy404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCopy404Error1.cs` |
| `ApiV1SocialAccountCopy429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCopy429Error1.cs` |
| `ApiV1SocialAccountCopy500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCopy500Error1.cs` |
| `ApiV1SocialAccountCopy502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCopy502Error1.cs` |
| `ApiV1SocialAccountCopy503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCopy503Error1.cs` |
| `ApiV1SocialAccountCopy504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCopy504Error1.cs` |

### SocialAccountCreatePortalLink

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountCreatePortalLink(SocialAccountCreatePortalLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1SocialAccountCreatePortalLinkResponse`
- **Error**: `ApiException<SocialAccountCreatePortalLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountCreatePortalLink400Error1([NotNullWhen(true)] out ApiV1SocialAccountCreatePortalLink400Error1? value)` [400] · `TryGetApiV1SocialAccountCreatePortalLink401Error1([NotNullWhen(true)] out ApiV1SocialAccountCreatePortalLink401Error1? value)` [401] · `TryGetApiV1SocialAccountCreatePortalLink403Error1([NotNullWhen(true)] out ApiV1SocialAccountCreatePortalLink403Error1? value)` [403] · `TryGetApiV1SocialAccountCreatePortalLink404Error1([NotNullWhen(true)] out ApiV1SocialAccountCreatePortalLink404Error1? value)` [404] · `TryGetApiV1SocialAccountCreatePortalLink429Error1([NotNullWhen(true)] out ApiV1SocialAccountCreatePortalLink429Error1? value)` [429] · `TryGetApiV1SocialAccountCreatePortalLink500Error1([NotNullWhen(true)] out ApiV1SocialAccountCreatePortalLink500Error1? value)` [500] · `TryGetApiV1SocialAccountCreatePortalLink502Error1([NotNullWhen(true)] out ApiV1SocialAccountCreatePortalLink502Error1? value)` [502] · `TryGetApiV1SocialAccountCreatePortalLink503Error1([NotNullWhen(true)] out ApiV1SocialAccountCreatePortalLink503Error1? value)` [503] · `TryGetApiV1SocialAccountCreatePortalLink504Error1([NotNullWhen(true)] out ApiV1SocialAccountCreatePortalLink504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountCreatePortalLinkRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountCreatePortalLinkRequest.cs` |
| `ApiV1SocialAccountCreatePortalLinkRequest` | `src/BundleSocial/Models/ApiV1SocialAccountCreatePortalLinkRequest.cs` |
| `ApiV1SocialAccountCreatePortalLinkResponse` | `src/BundleSocial/Models/ApiV1SocialAccountCreatePortalLinkResponse.cs` |
| `SocialAccountCreatePortalLinkError` | `src/BundleSocial/Errors/SocialAccountCreatePortalLinkError.cs` |
| `ApiV1SocialAccountCreatePortalLink400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCreatePortalLink400Error1.cs` |
| `ApiV1SocialAccountCreatePortalLink401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCreatePortalLink401Error1.cs` |
| `ApiV1SocialAccountCreatePortalLink403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCreatePortalLink403Error1.cs` |
| `ApiV1SocialAccountCreatePortalLink404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCreatePortalLink404Error1.cs` |
| `ApiV1SocialAccountCreatePortalLink429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCreatePortalLink429Error1.cs` |
| `ApiV1SocialAccountCreatePortalLink500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCreatePortalLink500Error1.cs` |
| `ApiV1SocialAccountCreatePortalLink502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCreatePortalLink502Error1.cs` |
| `ApiV1SocialAccountCreatePortalLink503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCreatePortalLink503Error1.cs` |
| `ApiV1SocialAccountCreatePortalLink504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountCreatePortalLink504Error1.cs` |

### SocialAccountDisableMessaging

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountDisableMessaging(SocialAccountDisableMessagingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1SocialAccountMessagingDisableResponse`
- **Error**: `ApiException<SocialAccountDisableMessagingError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountMessagingDisable400Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable400Error1? value)` [400] · `TryGetApiV1SocialAccountMessagingDisable401Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable401Error1? value)` [401] · `TryGetApiV1SocialAccountMessagingDisable403Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable403Error1? value)` [403] · `TryGetApiV1SocialAccountMessagingDisable404Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable404Error1? value)` [404] · `TryGetApiV1SocialAccountMessagingDisable429Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable429Error1? value)` [429] · `TryGetApiV1SocialAccountMessagingDisable500Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable500Error1? value)` [500] · `TryGetApiV1SocialAccountMessagingDisable502Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable502Error1? value)` [502] · `TryGetApiV1SocialAccountMessagingDisable503Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable503Error1? value)` [503] · `TryGetApiV1SocialAccountMessagingDisable504Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingDisable504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountDisableMessagingRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountDisableMessagingRequest.cs` |
| `ApiV1SocialAccountMessagingDisableRequest` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingDisableRequest.cs` |
| `ApiV1SocialAccountMessagingDisableResponse` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingDisableResponse.cs` |
| `SocialAccountDisableMessagingError` | `src/BundleSocial/Errors/SocialAccountDisableMessagingError.cs` |
| `ApiV1SocialAccountMessagingDisable400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingDisable400Error1.cs` |
| `ApiV1SocialAccountMessagingDisable401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingDisable401Error1.cs` |
| `ApiV1SocialAccountMessagingDisable403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingDisable403Error1.cs` |
| `ApiV1SocialAccountMessagingDisable404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingDisable404Error1.cs` |
| `ApiV1SocialAccountMessagingDisable429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingDisable429Error1.cs` |
| `ApiV1SocialAccountMessagingDisable500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingDisable500Error1.cs` |
| `ApiV1SocialAccountMessagingDisable502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingDisable502Error1.cs` |
| `ApiV1SocialAccountMessagingDisable503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingDisable503Error1.cs` |
| `ApiV1SocialAccountMessagingDisable504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingDisable504Error1.cs` |

### SocialAccountDisconnect

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountDisconnect(SocialAccountDisconnectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1SocialAccountDisconnectResponse`
- **Error**: `ApiException<SocialAccountDisconnectError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountDisconnect400Error1([NotNullWhen(true)] out ApiV1SocialAccountDisconnect400Error1? value)` [400] · `TryGetApiV1SocialAccountDisconnect401Error1([NotNullWhen(true)] out ApiV1SocialAccountDisconnect401Error1? value)` [401] · `TryGetApiV1SocialAccountDisconnect403Error1([NotNullWhen(true)] out ApiV1SocialAccountDisconnect403Error1? value)` [403] · `TryGetApiV1SocialAccountDisconnect404Error1([NotNullWhen(true)] out ApiV1SocialAccountDisconnect404Error1? value)` [404] · `TryGetApiV1SocialAccountDisconnect429Error1([NotNullWhen(true)] out ApiV1SocialAccountDisconnect429Error1? value)` [429] · `TryGetApiV1SocialAccountDisconnect500Error1([NotNullWhen(true)] out ApiV1SocialAccountDisconnect500Error1? value)` [500] · `TryGetApiV1SocialAccountDisconnect502Error1([NotNullWhen(true)] out ApiV1SocialAccountDisconnect502Error1? value)` [502] · `TryGetApiV1SocialAccountDisconnect503Error1([NotNullWhen(true)] out ApiV1SocialAccountDisconnect503Error1? value)` [503] · `TryGetApiV1SocialAccountDisconnect504Error1([NotNullWhen(true)] out ApiV1SocialAccountDisconnect504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountDisconnectRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountDisconnectRequest.cs` |
| `ApiV1SocialAccountDisconnectRequest` | `src/BundleSocial/Models/ApiV1SocialAccountDisconnectRequest.cs` |
| `ApiV1SocialAccountDisconnectResponse` | `src/BundleSocial/Models/ApiV1SocialAccountDisconnectResponse.cs` |
| `SocialAccountDisconnectError` | `src/BundleSocial/Errors/SocialAccountDisconnectError.cs` |
| `ApiV1SocialAccountDisconnect400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountDisconnect400Error1.cs` |
| `ApiV1SocialAccountDisconnect401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountDisconnect401Error1.cs` |
| `ApiV1SocialAccountDisconnect403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountDisconnect403Error1.cs` |
| `ApiV1SocialAccountDisconnect404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountDisconnect404Error1.cs` |
| `ApiV1SocialAccountDisconnect429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountDisconnect429Error1.cs` |
| `ApiV1SocialAccountDisconnect500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountDisconnect500Error1.cs` |
| `ApiV1SocialAccountDisconnect502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountDisconnect502Error1.cs` |
| `ApiV1SocialAccountDisconnect503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountDisconnect503Error1.cs` |
| `ApiV1SocialAccountDisconnect504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountDisconnect504Error1.cs` |

### SocialAccountEnableMessaging

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountEnableMessaging(SocialAccountEnableMessagingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1SocialAccountMessagingEnableResponse`
- **Error**: `ApiException<SocialAccountEnableMessagingError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountMessagingEnable400Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable400Error1? value)` [400] · `TryGetApiV1SocialAccountMessagingEnable401Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable401Error1? value)` [401] · `TryGetApiV1SocialAccountMessagingEnable403Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable403Error1? value)` [403] · `TryGetApiV1SocialAccountMessagingEnable404Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable404Error1? value)` [404] · `TryGetApiV1SocialAccountMessagingEnable429Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable429Error1? value)` [429] · `TryGetApiV1SocialAccountMessagingEnable500Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable500Error1? value)` [500] · `TryGetApiV1SocialAccountMessagingEnable502Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable502Error1? value)` [502] · `TryGetApiV1SocialAccountMessagingEnable503Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable503Error1? value)` [503] · `TryGetApiV1SocialAccountMessagingEnable504Error1([NotNullWhen(true)] out ApiV1SocialAccountMessagingEnable504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountEnableMessagingRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountEnableMessagingRequest.cs` |
| `ApiV1SocialAccountMessagingEnableRequest` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingEnableRequest.cs` |
| `ApiV1SocialAccountMessagingEnableResponse` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingEnableResponse.cs` |
| `SocialAccountEnableMessagingError` | `src/BundleSocial/Errors/SocialAccountEnableMessagingError.cs` |
| `ApiV1SocialAccountMessagingEnable400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingEnable400Error1.cs` |
| `ApiV1SocialAccountMessagingEnable401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingEnable401Error1.cs` |
| `ApiV1SocialAccountMessagingEnable403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingEnable403Error1.cs` |
| `ApiV1SocialAccountMessagingEnable404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingEnable404Error1.cs` |
| `ApiV1SocialAccountMessagingEnable429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingEnable429Error1.cs` |
| `ApiV1SocialAccountMessagingEnable500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingEnable500Error1.cs` |
| `ApiV1SocialAccountMessagingEnable502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingEnable502Error1.cs` |
| `ApiV1SocialAccountMessagingEnable503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingEnable503Error1.cs` |
| `ApiV1SocialAccountMessagingEnable504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountMessagingEnable504Error1.cs` |

### SocialAccountGetAccountsToDelete

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountGetAccountsToDelete(SocialAccountGetAccountsToDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `ApiV1SocialAccountToDeleteResponse`
- **Error**: `ApiException<SocialAccountGetAccountsToDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountToDelete400Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete400Error1? value)` [400] · `TryGetApiV1SocialAccountToDelete401Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete401Error1? value)` [401] · `TryGetApiV1SocialAccountToDelete403Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete403Error1? value)` [403] · `TryGetApiV1SocialAccountToDelete404Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete404Error1? value)` [404] · `TryGetApiV1SocialAccountToDelete429Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete429Error1? value)` [429] · `TryGetApiV1SocialAccountToDelete500Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete500Error1? value)` [500] · `TryGetApiV1SocialAccountToDelete502Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete502Error1? value)` [502] · `TryGetApiV1SocialAccountToDelete503Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete503Error1? value)` [503] · `TryGetApiV1SocialAccountToDelete504Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountGetAccountsToDeleteRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountGetAccountsToDeleteRequest.cs` |
| `ApiV1SocialAccountToDeleteResponse` | `src/BundleSocial/Models/ApiV1SocialAccountToDeleteResponse.cs` |
| `SocialAccountGetAccountsToDeleteError` | `src/BundleSocial/Errors/SocialAccountGetAccountsToDeleteError.cs` |
| `ApiV1SocialAccountToDelete400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountToDelete400Error1.cs` |
| `ApiV1SocialAccountToDelete401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountToDelete401Error1.cs` |
| `ApiV1SocialAccountToDelete403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountToDelete403Error1.cs` |
| `ApiV1SocialAccountToDelete404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountToDelete404Error1.cs` |
| `ApiV1SocialAccountToDelete429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountToDelete429Error1.cs` |
| `ApiV1SocialAccountToDelete500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountToDelete500Error1.cs` |
| `ApiV1SocialAccountToDelete502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountToDelete502Error1.cs` |
| `ApiV1SocialAccountToDelete503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountToDelete503Error1.cs` |
| `ApiV1SocialAccountToDelete504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountToDelete504Error1.cs` |

### SocialAccountGetByType

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountGetByType(SocialAccountGetByTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Type`, `TeamId`
- **Query params (wire ← C#)**: `type` ← `Type`, `teamId` ← `TeamId`
- **Returns**: `ApiV1SocialAccountByTypeResponse`
- **Error**: `ApiException<SocialAccountGetByTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountByType400Error1([NotNullWhen(true)] out ApiV1SocialAccountByType400Error1? value)` [400] · `TryGetApiV1SocialAccountByType401Error1([NotNullWhen(true)] out ApiV1SocialAccountByType401Error1? value)` [401] · `TryGetApiV1SocialAccountByType403Error1([NotNullWhen(true)] out ApiV1SocialAccountByType403Error1? value)` [403] · `TryGetApiV1SocialAccountByType404Error1([NotNullWhen(true)] out ApiV1SocialAccountByType404Error1? value)` [404] · `TryGetApiV1SocialAccountByType429Error1([NotNullWhen(true)] out ApiV1SocialAccountByType429Error1? value)` [429] · `TryGetApiV1SocialAccountByType500Error1([NotNullWhen(true)] out ApiV1SocialAccountByType500Error1? value)` [500] · `TryGetApiV1SocialAccountByType502Error1([NotNullWhen(true)] out ApiV1SocialAccountByType502Error1? value)` [502] · `TryGetApiV1SocialAccountByType503Error1([NotNullWhen(true)] out ApiV1SocialAccountByType503Error1? value)` [503] · `TryGetApiV1SocialAccountByType504Error1([NotNullWhen(true)] out ApiV1SocialAccountByType504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountGetByTypeRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountGetByTypeRequest.cs` |
| `TypeEnum` | `src/BundleSocial/Models/Enums/TypeEnum.cs` |
| `ApiV1SocialAccountByTypeResponse` | `src/BundleSocial/Models/ApiV1SocialAccountByTypeResponse.cs` |
| `SocialAccountGetByTypeError` | `src/BundleSocial/Errors/SocialAccountGetByTypeError.cs` |
| `ApiV1SocialAccountByType400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountByType400Error1.cs` |
| `ApiV1SocialAccountByType401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountByType401Error1.cs` |
| `ApiV1SocialAccountByType403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountByType403Error1.cs` |
| `ApiV1SocialAccountByType404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountByType404Error1.cs` |
| `ApiV1SocialAccountByType429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountByType429Error1.cs` |
| `ApiV1SocialAccountByType500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountByType500Error1.cs` |
| `ApiV1SocialAccountByType502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountByType502Error1.cs` |
| `ApiV1SocialAccountByType503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountByType503Error1.cs` |
| `ApiV1SocialAccountByType504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountByType504Error1.cs` |

### SocialAccountProfileRefresh

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountProfileRefresh(SocialAccountProfileRefreshRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1SocialAccountProfileRefreshResponse`
- **Error**: `ApiException<SocialAccountProfileRefreshError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountProfileRefresh400Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh400Error1? value)` [400] · `TryGetApiV1SocialAccountProfileRefresh401Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh401Error1? value)` [401] · `TryGetApiV1SocialAccountProfileRefresh403Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh403Error1? value)` [403] · `TryGetApiV1SocialAccountProfileRefresh404Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh404Error1? value)` [404] · `TryGetApiV1SocialAccountProfileRefresh429Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh429Error1? value)` [429] · `TryGetApiV1SocialAccountProfileRefresh500Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh500Error1? value)` [500] · `TryGetApiV1SocialAccountProfileRefresh502Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh502Error1? value)` [502] · `TryGetApiV1SocialAccountProfileRefresh503Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh503Error1? value)` [503] · `TryGetApiV1SocialAccountProfileRefresh504Error1([NotNullWhen(true)] out ApiV1SocialAccountProfileRefresh504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountProfileRefreshRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountProfileRefreshRequest.cs` |
| `ApiV1SocialAccountProfileRefreshRequest` | `src/BundleSocial/Models/ApiV1SocialAccountProfileRefreshRequest.cs` |
| `ApiV1SocialAccountProfileRefreshResponse` | `src/BundleSocial/Models/ApiV1SocialAccountProfileRefreshResponse.cs` |
| `SocialAccountProfileRefreshError` | `src/BundleSocial/Errors/SocialAccountProfileRefreshError.cs` |
| `ApiV1SocialAccountProfileRefresh400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountProfileRefresh400Error1.cs` |
| `ApiV1SocialAccountProfileRefresh401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountProfileRefresh401Error1.cs` |
| `ApiV1SocialAccountProfileRefresh403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountProfileRefresh403Error1.cs` |
| `ApiV1SocialAccountProfileRefresh404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountProfileRefresh404Error1.cs` |
| `ApiV1SocialAccountProfileRefresh429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountProfileRefresh429Error1.cs` |
| `ApiV1SocialAccountProfileRefresh500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountProfileRefresh500Error1.cs` |
| `ApiV1SocialAccountProfileRefresh502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountProfileRefresh502Error1.cs` |
| `ApiV1SocialAccountProfileRefresh503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountProfileRefresh503Error1.cs` |
| `ApiV1SocialAccountProfileRefresh504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountProfileRefresh504Error1.cs` |

### SocialAccountRefreshChannels

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountRefreshChannels(SocialAccountRefreshChannelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1SocialAccountRefreshChannelsResponse`
- **Error**: `ApiException<SocialAccountRefreshChannelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountRefreshChannels400Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels400Error1? value)` [400] · `TryGetApiV1SocialAccountRefreshChannels401Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels401Error1? value)` [401] · `TryGetApiV1SocialAccountRefreshChannels403Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels403Error1? value)` [403] · `TryGetApiV1SocialAccountRefreshChannels404Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels404Error1? value)` [404] · `TryGetApiV1SocialAccountRefreshChannels429Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels429Error1? value)` [429] · `TryGetApiV1SocialAccountRefreshChannels500Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels500Error1? value)` [500] · `TryGetApiV1SocialAccountRefreshChannels502Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels502Error1? value)` [502] · `TryGetApiV1SocialAccountRefreshChannels503Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels503Error1? value)` [503] · `TryGetApiV1SocialAccountRefreshChannels504Error1([NotNullWhen(true)] out ApiV1SocialAccountRefreshChannels504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountRefreshChannelsRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountRefreshChannelsRequest.cs` |
| `ApiV1SocialAccountRefreshChannelsRequest` | `src/BundleSocial/Models/ApiV1SocialAccountRefreshChannelsRequest.cs` |
| `ApiV1SocialAccountRefreshChannelsResponse` | `src/BundleSocial/Models/ApiV1SocialAccountRefreshChannelsResponse.cs` |
| `SocialAccountRefreshChannelsError` | `src/BundleSocial/Errors/SocialAccountRefreshChannelsError.cs` |
| `ApiV1SocialAccountRefreshChannels400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountRefreshChannels400Error1.cs` |
| `ApiV1SocialAccountRefreshChannels401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountRefreshChannels401Error1.cs` |
| `ApiV1SocialAccountRefreshChannels403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountRefreshChannels403Error1.cs` |
| `ApiV1SocialAccountRefreshChannels404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountRefreshChannels404Error1.cs` |
| `ApiV1SocialAccountRefreshChannels429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountRefreshChannels429Error1.cs` |
| `ApiV1SocialAccountRefreshChannels500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountRefreshChannels500Error1.cs` |
| `ApiV1SocialAccountRefreshChannels502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountRefreshChannels502Error1.cs` |
| `ApiV1SocialAccountRefreshChannels503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountRefreshChannels503Error1.cs` |
| `ApiV1SocialAccountRefreshChannels504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountRefreshChannels504Error1.cs` |

### SocialAccountSetChannel

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountSetChannel(SocialAccountSetChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1SocialAccountSetChannelResponse`
- **Error**: `ApiException<SocialAccountSetChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountSetChannel400Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel400Error1? value)` [400] · `TryGetApiV1SocialAccountSetChannel401Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel401Error1? value)` [401] · `TryGetApiV1SocialAccountSetChannel403Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel403Error1? value)` [403] · `TryGetApiV1SocialAccountSetChannel404Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel404Error1? value)` [404] · `TryGetApiV1SocialAccountSetChannel429Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel429Error1? value)` [429] · `TryGetApiV1SocialAccountSetChannel500Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel500Error1? value)` [500] · `TryGetApiV1SocialAccountSetChannel502Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel502Error1? value)` [502] · `TryGetApiV1SocialAccountSetChannel503Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel503Error1? value)` [503] · `TryGetApiV1SocialAccountSetChannel504Error1([NotNullWhen(true)] out ApiV1SocialAccountSetChannel504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountSetChannelRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountSetChannelRequest.cs` |
| `ApiV1SocialAccountSetChannelRequest` | `src/BundleSocial/Models/ApiV1SocialAccountSetChannelRequest.cs` |
| `ApiV1SocialAccountSetChannelResponse` | `src/BundleSocial/Models/ApiV1SocialAccountSetChannelResponse.cs` |
| `SocialAccountSetChannelError` | `src/BundleSocial/Errors/SocialAccountSetChannelError.cs` |
| `ApiV1SocialAccountSetChannel400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountSetChannel400Error1.cs` |
| `ApiV1SocialAccountSetChannel401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountSetChannel401Error1.cs` |
| `ApiV1SocialAccountSetChannel403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountSetChannel403Error1.cs` |
| `ApiV1SocialAccountSetChannel404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountSetChannel404Error1.cs` |
| `ApiV1SocialAccountSetChannel429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountSetChannel429Error1.cs` |
| `ApiV1SocialAccountSetChannel500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountSetChannel500Error1.cs` |
| `ApiV1SocialAccountSetChannel502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountSetChannel502Error1.cs` |
| `ApiV1SocialAccountSetChannel503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountSetChannel503Error1.cs` |
| `ApiV1SocialAccountSetChannel504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountSetChannel504Error1.cs` |

### SocialAccountUnsetChannel

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SocialAccountUnsetChannel(SocialAccountUnsetChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1SocialAccountUnsetChannelResponse`
- **Error**: `ApiException<SocialAccountUnsetChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SocialAccountUnsetChannel400Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel400Error1? value)` [400] · `TryGetApiV1SocialAccountUnsetChannel401Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel401Error1? value)` [401] · `TryGetApiV1SocialAccountUnsetChannel403Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel403Error1? value)` [403] · `TryGetApiV1SocialAccountUnsetChannel404Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel404Error1? value)` [404] · `TryGetApiV1SocialAccountUnsetChannel429Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel429Error1? value)` [429] · `TryGetApiV1SocialAccountUnsetChannel500Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel500Error1? value)` [500] · `TryGetApiV1SocialAccountUnsetChannel502Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel502Error1? value)` [502] · `TryGetApiV1SocialAccountUnsetChannel503Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel503Error1? value)` [503] · `TryGetApiV1SocialAccountUnsetChannel504Error1([NotNullWhen(true)] out ApiV1SocialAccountUnsetChannel504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SocialAccountUnsetChannelRequest` | `src/BundleSocial/Requests/SocialAccountApi/SocialAccountUnsetChannelRequest.cs` |
| `ApiV1SocialAccountUnsetChannelRequest` | `src/BundleSocial/Models/ApiV1SocialAccountUnsetChannelRequest.cs` |
| `ApiV1SocialAccountUnsetChannelResponse` | `src/BundleSocial/Models/ApiV1SocialAccountUnsetChannelResponse.cs` |
| `SocialAccountUnsetChannelError` | `src/BundleSocial/Errors/SocialAccountUnsetChannelError.cs` |
| `ApiV1SocialAccountUnsetChannel400Error1` | `src/BundleSocial/Models/ApiV1SocialAccountUnsetChannel400Error1.cs` |
| `ApiV1SocialAccountUnsetChannel401Error1` | `src/BundleSocial/Models/ApiV1SocialAccountUnsetChannel401Error1.cs` |
| `ApiV1SocialAccountUnsetChannel403Error1` | `src/BundleSocial/Models/ApiV1SocialAccountUnsetChannel403Error1.cs` |
| `ApiV1SocialAccountUnsetChannel404Error1` | `src/BundleSocial/Models/ApiV1SocialAccountUnsetChannel404Error1.cs` |
| `ApiV1SocialAccountUnsetChannel429Error1` | `src/BundleSocial/Models/ApiV1SocialAccountUnsetChannel429Error1.cs` |
| `ApiV1SocialAccountUnsetChannel500Error1` | `src/BundleSocial/Models/ApiV1SocialAccountUnsetChannel500Error1.cs` |
| `ApiV1SocialAccountUnsetChannel502Error1` | `src/BundleSocial/Models/ApiV1SocialAccountUnsetChannel502Error1.cs` |
| `ApiV1SocialAccountUnsetChannel503Error1` | `src/BundleSocial/Models/ApiV1SocialAccountUnsetChannel503Error1.cs` |
| `ApiV1SocialAccountUnsetChannel504Error1` | `src/BundleSocial/Models/ApiV1SocialAccountUnsetChannel504Error1.cs` |

