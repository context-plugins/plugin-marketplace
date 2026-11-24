<!-- Generated file — do not edit; regenerated with the SDK. -->

# SettlementsApi — operations

Accessor: `client.SettlementsApi` · Source: `src/Curlec/Api/SettlementsApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchAllSettlements

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchAllSettlements(FetchAllSettlementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `SettlementsResponse`
- **Error**: `ApiException<FetchAllSettlementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchAllSettlementsRequest` | `src/Curlec/Requests/SettlementsApi/FetchAllSettlementsRequest.cs` |
| `SettlementsResponse` | `src/Curlec/Models/SettlementsResponse.cs` |
| `FetchAllSettlementsError` | `src/Curlec/Errors/FetchAllSettlementsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchSettlement

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchSettlement(FetchSettlementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Settlement`
- **Error**: `ApiException<FetchSettlementError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchSettlementRequest` | `src/Curlec/Requests/SettlementsApi/FetchSettlementRequest.cs` |
| `Settlement` | `src/Curlec/Models/Settlement.cs` |
| `FetchSettlementError` | `src/Curlec/Errors/FetchSettlementError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchSettlementRecon

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchSettlementRecon(FetchSettlementReconRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Year`, `Month`
- **Query params (wire ← C#)**: `year` ← `Year`, `month` ← `Month`, `day` ← `Day`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `SettlementsReconCombinedResponse`
- **Error**: `ApiException<FetchSettlementReconError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchSettlementReconRequest` | `src/Curlec/Requests/SettlementsApi/FetchSettlementReconRequest.cs` |
| `SettlementsReconCombinedResponse` | `src/Curlec/Models/SettlementsReconCombinedResponse.cs` |
| `FetchSettlementReconError` | `src/Curlec/Errors/FetchSettlementReconError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

