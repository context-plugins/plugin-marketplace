<!-- Generated file — do not edit; regenerated with the SDK. -->

# DomainReputation — operations

Accessor: `client.DomainReputation` · Source: `src/WhoisFreaks/Api/DomainReputation.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DomainReputationInvoke

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DomainReputationInvoke(DomainReputationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainName`
- **Query params (wire ← C#)**: `domainName` ← `DomainName`, `format` ← `Format`
- **Returns**: `DomainReputationResponse`
- **Error**: `ApiException<DomainReputationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DomainReputationRequest` | `src/WhoisFreaks/Requests/DomainReputation/DomainReputationRequest.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `DomainReputationResponse` | `src/WhoisFreaks/Models/DomainReputationResponse.cs` |
| `DomainReputationError` | `src/WhoisFreaks/Errors/DomainReputationError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

