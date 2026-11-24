<!-- Generated file — do not edit; regenerated with the SDK. -->

# Whois — operations

Accessor: `client.Whois` · Source: `src/WhoisFreaks/Api/Whois.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkWhois

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `BulkWhois(BulkWhoisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `BulkWhoisResponse`
- **Error**: `ApiException<BulkWhoisError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkWhoisRequest` | `src/WhoisFreaks/Requests/Whois/BulkWhoisRequest.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `V20BulkwhoisLiveRequest` | `src/WhoisFreaks/Models/V20BulkwhoisLiveRequest.cs` |
| `BulkWhoisResponse` | `src/WhoisFreaks/Models/BulkWhoisResponse.cs` |
| `BulkWhoisError` | `src/WhoisFreaks/Errors/BulkWhoisError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### WhoisHistory

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `WhoisHistory(WhoisHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainName`
- **Query params (wire ← C#)**: `domainName` ← `DomainName`, `page` ← `Page`, `format` ← `Format`
- **Returns**: `WhoisHistoricalResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `WhoisHistoryRequest` | `src/WhoisFreaks/Requests/Whois/WhoisHistoryRequest.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `WhoisHistoricalResponse` | `src/WhoisFreaks/Models/WhoisHistoricalResponse.cs` |

### WhoisLive

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `WhoisLive(WhoisLiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainName`
- **Query params (wire ← C#)**: `domainName` ← `DomainName`, `format` ← `Format`
- **Returns**: `WhoisResponse`
- **Error**: `ApiException<WhoisLiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WhoisLiveRequest` | `src/WhoisFreaks/Requests/Whois/WhoisLiveRequest.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `WhoisResponse` | `src/WhoisFreaks/Models/WhoisResponse.cs` |
| `WhoisLiveError` | `src/WhoisFreaks/Errors/WhoisLiveError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### WhoisReverse

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `WhoisReverse(WhoisReverseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Keyword`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `page` ← `Page`, `format` ← `Format`
- **Returns**: `ReverseWhoisResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `WhoisReverseRequest` | `src/WhoisFreaks/Requests/Whois/WhoisReverseRequest.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `ReverseWhoisResponse` | `src/WhoisFreaks/Models/ReverseWhoisResponse.cs` |

