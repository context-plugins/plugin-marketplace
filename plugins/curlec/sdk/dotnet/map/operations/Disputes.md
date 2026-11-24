<!-- Generated file — do not edit; regenerated with the SDK. -->

# Disputes — operations

Accessor: `client.Disputes` · Source: `src/Curlec/Api/Disputes.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AcceptDispute

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `AcceptDispute(AcceptDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Dispute`
- **Error**: `ApiException<AcceptDisputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AcceptDisputeRequest` | `src/Curlec/Requests/Disputes/AcceptDisputeRequest.cs` |
| `Dispute` | `src/Curlec/Models/Dispute.cs` |
| `AcceptDisputeError` | `src/Curlec/Errors/AcceptDisputeError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ContestDispute

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ContestDispute(ContestDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Dispute`
- **Error**: `ApiException<ContestDisputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContestDisputeRequest` | `src/Curlec/Requests/Disputes/ContestDisputeRequest.cs` |
| `DisputesContestRequest` | `src/Curlec/Models/DisputesContestRequest.cs` |
| `Dispute` | `src/Curlec/Models/Dispute.cs` |
| `ContestDisputeError` | `src/Curlec/Errors/ContestDisputeError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchAllDisputes

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchAllDisputes(FetchAllDisputesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `count` ← `Count`, `skip` ← `Skip`, `expand[]` ← `Expand`
- **Returns**: `DisputesResponse`
- **Error**: `ApiException<FetchAllDisputesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchAllDisputesRequest` | `src/Curlec/Requests/Disputes/FetchAllDisputesRequest.cs` |
| `Expand` | `src/Curlec/Models/Enums/Expand.cs` |
| `DisputesResponse` | `src/Curlec/Models/DisputesResponse.cs` |
| `FetchAllDisputesError` | `src/Curlec/Errors/FetchAllDisputesError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchDispute

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchDispute(FetchDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Dispute`
- **Error**: `ApiException<FetchDisputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchDisputeRequest` | `src/Curlec/Requests/Disputes/FetchDisputeRequest.cs` |
| `Dispute` | `src/Curlec/Models/Dispute.cs` |
| `FetchDisputeError` | `src/Curlec/Errors/FetchDisputeError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

