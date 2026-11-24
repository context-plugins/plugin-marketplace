<!-- Generated file — do not edit; regenerated with the SDK. -->

# DomainAvailability — operations

Accessor: `client.DomainAvailability` · Source: `src/WhoisFreaks/Api/DomainAvailability.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkDomainAvailabilityV2

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `BulkDomainAvailabilityV2(BulkDomainAvailabilityV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `domain` ← `Domain`, `format` ← `Format`
- **Returns**: `BulkDomainAvailabilityResponse`
- **Error**: `ApiException<BulkDomainAvailabilityV2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkDomainAvailabilityV2Request` | `src/WhoisFreaks/Requests/DomainAvailability/BulkDomainAvailabilityV2Request.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `BulkDomainAvailabilityRequest` | `src/WhoisFreaks/Models/BulkDomainAvailabilityRequest.cs` |
| `BulkDomainAvailabilityResponse` | `src/WhoisFreaks/Models/BulkDomainAvailabilityResponse.cs` |
| `BulkDomainAvailabilityV2Error` | `src/WhoisFreaks/Errors/BulkDomainAvailabilityV2Error.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DomainAvailabilityV2

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DomainAvailabilityV2(DomainAvailabilityV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`, `sug` ← `Sug`, `count` ← `Count`, `format` ← `Format`
- **Returns**: `DomainAvailabilityResponse`
- **Error**: `ApiException<DomainAvailabilityV2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DomainAvailabilityV2Request` | `src/WhoisFreaks/Requests/DomainAvailability/DomainAvailabilityV2Request.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `DomainAvailabilityResponse` | `src/WhoisFreaks/Models/DomainAvailabilityResponse.cs` |
| `DomainAvailabilityV2Error` | `src/WhoisFreaks/Errors/DomainAvailabilityV2Error.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

