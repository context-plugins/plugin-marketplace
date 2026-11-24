<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dns — operations

Accessor: `client.Dns` · Source: `src/WhoisFreaks/Api/Dns.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DnsBulk

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DnsBulk(DnsBulkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `type` ← `Type`, `format` ← `Format`
- **Returns**: `BulkDnsResponse`
- **Error**: `ApiException<DnsBulkError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DnsBulkRequest` | `src/WhoisFreaks/Requests/Dns/DnsBulkRequest.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `V20DnsBulkLiveRequest` | `src/WhoisFreaks/Models/V20DnsBulkLiveRequest.cs` |
| `BulkDnsResponse` | `src/WhoisFreaks/Models/BulkDnsResponse.cs` |
| `DnsBulkError` | `src/WhoisFreaks/Errors/DnsBulkError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DnsHistorical

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DnsHistorical(DnsHistoricalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainName`
- **Query params (wire ← C#)**: `domainName` ← `DomainName`, `type` ← `Type`, `page` ← `Page`, `format` ← `Format`
- **Returns**: `HistoricalDnsResponse`
- **Error**: `ApiException<DnsHistoricalError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DnsHistoricalRequest` | `src/WhoisFreaks/Requests/Dns/DnsHistoricalRequest.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `HistoricalDnsResponse` | `src/WhoisFreaks/Models/HistoricalDnsResponse.cs` |
| `DnsHistoricalError` | `src/WhoisFreaks/Errors/DnsHistoricalError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DnsLive

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DnsLive(DnsLiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `type` ← `Type`, `domainName` ← `DomainName`, `ipAddress` ← `IpAddress`, `format` ← `Format`
- **Returns**: `DnsResponse`
- **Error**: `ApiException<DnsLiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DnsLiveRequest` | `src/WhoisFreaks/Requests/Dns/DnsLiveRequest.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `DnsResponse` | `src/WhoisFreaks/Models/DnsResponse.cs` |
| `DnsLiveError` | `src/WhoisFreaks/Errors/DnsLiveError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DnsReverse

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DnsReverse(DnsReverseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Value`, `Type`
- **Query params (wire ← C#)**: `value` ← `Value`, `type` ← `Type`, `exact` ← `Exact`, `page` ← `Page`, `format` ← `Format`
- **Returns**: `ReverseDnsResponse`
- **Error**: `ApiException<DnsReverseError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DnsReverseRequest` | `src/WhoisFreaks/Requests/Dns/DnsReverseRequest.cs` |
| `TypeEnum` | `src/WhoisFreaks/Models/Enums/TypeEnum.cs` |
| `Format` | `src/WhoisFreaks/Models/Enums/Format.cs` |
| `ReverseDnsResponse` | `src/WhoisFreaks/Models/ReverseDnsResponse.cs` |
| `DnsReverseError` | `src/WhoisFreaks/Errors/DnsReverseError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

