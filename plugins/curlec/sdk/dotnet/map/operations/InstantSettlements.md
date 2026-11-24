<!-- Generated file — do not edit; regenerated with the SDK. -->

# InstantSettlements — operations

Accessor: `client.InstantSettlements` · Source: `src/Curlec/Api/InstantSettlements.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateInstantSettlement

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateInstantSettlement(CreateInstantSettlementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `InstantSettlement`
- **Error**: `ApiException<CreateInstantSettlementError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateInstantSettlementRequest` | `src/Curlec/Requests/InstantSettlements/CreateInstantSettlementRequest.cs` |
| `SettlementsOndemandRequest` | `src/Curlec/Models/SettlementsOndemandRequest.cs` |
| `InstantSettlement` | `src/Curlec/Models/InstantSettlement.cs` |
| `CreateInstantSettlementError` | `src/Curlec/Errors/CreateInstantSettlementError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchAllInstantSettlements

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchAllInstantSettlements(FetchAllInstantSettlementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`, `expand[]` ← `Expand`
- **Returns**: `SettlementsOndemandResponse`
- **Error**: `ApiException<FetchAllInstantSettlementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchAllInstantSettlementsRequest` | `src/Curlec/Requests/InstantSettlements/FetchAllInstantSettlementsRequest.cs` |
| `ExpandRazorpayInstantSettlementsApi` | `src/Curlec/Models/Enums/ExpandRazorpayInstantSettlementsApi.cs` |
| `SettlementsOndemandResponse` | `src/Curlec/Models/SettlementsOndemandResponse.cs` |
| `FetchAllInstantSettlementsError` | `src/Curlec/Errors/FetchAllInstantSettlementsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchInstantSettlement

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchInstantSettlement(FetchInstantSettlementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`
- **Returns**: `InstantSettlement`
- **Error**: `ApiException<FetchInstantSettlementError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchInstantSettlementRequest` | `src/Curlec/Requests/InstantSettlements/FetchInstantSettlementRequest.cs` |
| `ExpandRazorpayInstantSettlementsApi` | `src/Curlec/Models/Enums/ExpandRazorpayInstantSettlementsApi.cs` |
| `InstantSettlement` | `src/Curlec/Models/InstantSettlement.cs` |
| `FetchInstantSettlementError` | `src/Curlec/Errors/FetchInstantSettlementError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

