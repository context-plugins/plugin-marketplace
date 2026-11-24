<!-- Generated file — do not edit; regenerated with the SDK. -->

# SipAccounts — operations

Accessor: `client.SipAccounts` · Source: `src/DidLogic/Api/SipAccounts.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SipaccountsAllowedIpsCreate

- **Auth**: `options.BearerAuth`
- **Signature**: `SipaccountsAllowedIpsCreate(SipaccountsAllowedIpsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SipaccountId`, `Body`
- **Returns**: `ApiV1SipaccountsAllowedIpsResponse1`
- **Error**: `ApiException<SipaccountsAllowedIpsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SipaccountsAllowedIps403Error1([NotNullWhen(true)] out ApiV1SipaccountsAllowedIps403Error1? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SipaccountsAllowedIpsCreateRequest` | `src/DidLogic/Requests/SipAccounts/SipaccountsAllowedIpsCreateRequest.cs` |
| `ApiV1SipaccountsAllowedIpsRequest` | `src/DidLogic/Models/ApiV1SipaccountsAllowedIpsRequest.cs` |
| `ApiV1SipaccountsAllowedIpsResponse1` | `src/DidLogic/Models/ApiV1SipaccountsAllowedIpsResponse1.cs` |
| `SipaccountsAllowedIpsCreateError` | `src/DidLogic/Errors/SipaccountsAllowedIpsCreateError.cs` |
| `ApiV1SipaccountsAllowedIps403Error1` | `src/DidLogic/Models/ApiV1SipaccountsAllowedIps403Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### SipaccountsAllowedIpsDestroy

- **Auth**: `options.BearerAuth`
- **Signature**: `SipaccountsAllowedIpsDestroy(SipaccountsAllowedIpsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SipaccountId`, `Ip`
- **Query params (wire ← C#)**: `ip` ← `Ip`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SipaccountsAllowedIpsDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SipaccountsAllowedIps403Error1([NotNullWhen(true)] out ApiV1SipaccountsAllowedIps403Error1? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SipaccountsAllowedIpsDestroyRequest` | `src/DidLogic/Requests/SipAccounts/SipaccountsAllowedIpsDestroyRequest.cs` |
| `SipaccountsAllowedIpsDestroyError` | `src/DidLogic/Errors/SipaccountsAllowedIpsDestroyError.cs` |
| `ApiV1SipaccountsAllowedIps403Error1` | `src/DidLogic/Models/ApiV1SipaccountsAllowedIps403Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### SipaccountsAllowedIpsIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `SipaccountsAllowedIpsIndex(SipaccountsAllowedIpsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SipaccountId`
- **Returns**: `ApiV1SipaccountsAllowedIpsResponse`
- **Error**: `ApiException<SipaccountsAllowedIpsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SipaccountsAllowedIps403Error1([NotNullWhen(true)] out ApiV1SipaccountsAllowedIps403Error1? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SipaccountsAllowedIpsIndexRequest` | `src/DidLogic/Requests/SipAccounts/SipaccountsAllowedIpsIndexRequest.cs` |
| `ApiV1SipaccountsAllowedIpsResponse` | `src/DidLogic/Models/ApiV1SipaccountsAllowedIpsResponse.cs` |
| `SipaccountsAllowedIpsIndexError` | `src/DidLogic/Errors/SipaccountsAllowedIpsIndexError.cs` |
| `ApiV1SipaccountsAllowedIps403Error1` | `src/DidLogic/Models/ApiV1SipaccountsAllowedIps403Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### SipaccountsCreate

- **Auth**: `options.BearerAuth`
- **Signature**: `SipaccountsCreate(SipaccountsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1SipaccountsResponse2`
- **Error**: `ApiException<SipaccountsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SipaccountsResponse11([NotNullWhen(true)] out ApiV1SipaccountsResponse11? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SipaccountsCreateRequest` | `src/DidLogic/Requests/SipAccounts/SipaccountsCreateRequest.cs` |
| `ApiV1SipaccountsRequest` | `src/DidLogic/Models/ApiV1SipaccountsRequest.cs` |
| `ApiV1SipaccountsResponse2` | `src/DidLogic/Models/ApiV1SipaccountsResponse2.cs` |
| `SipaccountsCreateError` | `src/DidLogic/Errors/SipaccountsCreateError.cs` |
| `ApiV1SipaccountsResponse11` | `src/DidLogic/Models/AnyOf/ApiV1SipaccountsResponse11.cs` |

### SipaccountsDestroy

- **Auth**: `options.BearerAuth`
- **Signature**: `SipaccountsDestroy(SipaccountsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SipaccountsDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Sipaccounts403Error1([NotNullWhen(true)] out ApiV1Sipaccounts403Error1? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SipaccountsDestroyRequest` | `src/DidLogic/Requests/SipAccounts/SipaccountsDestroyRequest.cs` |
| `SipaccountsDestroyError` | `src/DidLogic/Errors/SipaccountsDestroyError.cs` |
| `ApiV1Sipaccounts403Error1` | `src/DidLogic/Models/ApiV1Sipaccounts403Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### SipaccountsIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `SipaccountsIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1SipaccountsResponse`
- **Error**: `ApiException<SipaccountsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1SipaccountsResponse11([NotNullWhen(true)] out ApiV1SipaccountsResponse11? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1SipaccountsResponse` | `src/DidLogic/Models/ApiV1SipaccountsResponse.cs` |
| `SipaccountsIndexError` | `src/DidLogic/Errors/SipaccountsIndexError.cs` |
| `ApiV1SipaccountsResponse11` | `src/DidLogic/Models/AnyOf/ApiV1SipaccountsResponse11.cs` |

### SipaccountsShow

- **Auth**: `options.BearerAuth`
- **Signature**: `SipaccountsShow(SipaccountsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1SipaccountsResponse4`
- **Error**: `ApiException<SipaccountsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Sipaccounts403Error1([NotNullWhen(true)] out ApiV1Sipaccounts403Error1? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SipaccountsShowRequest` | `src/DidLogic/Requests/SipAccounts/SipaccountsShowRequest.cs` |
| `ApiV1SipaccountsResponse4` | `src/DidLogic/Models/ApiV1SipaccountsResponse4.cs` |
| `SipaccountsShowError` | `src/DidLogic/Errors/SipaccountsShowError.cs` |
| `ApiV1Sipaccounts403Error1` | `src/DidLogic/Models/ApiV1Sipaccounts403Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

### SipaccountsUpdate

- **Auth**: `options.BearerAuth`
- **Signature**: `SipaccountsUpdate(SipaccountsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV1SipaccountsResponse5`
- **Error**: `ApiException<SipaccountsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Sipaccounts403Error1([NotNullWhen(true)] out ApiV1Sipaccounts403Error1? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SipaccountsUpdateRequest` | `src/DidLogic/Requests/SipAccounts/SipaccountsUpdateRequest.cs` |
| `ApiV1SipaccountsRequest1` | `src/DidLogic/Models/ApiV1SipaccountsRequest1.cs` |
| `ApiV1SipaccountsResponse5` | `src/DidLogic/Models/ApiV1SipaccountsResponse5.cs` |
| `SipaccountsUpdateError` | `src/DidLogic/Errors/SipaccountsUpdateError.cs` |
| `ApiV1Sipaccounts403Error1` | `src/DidLogic/Models/ApiV1Sipaccounts403Error1.cs` |
| `Error` | `src/DidLogic/Models/Error.cs` |

