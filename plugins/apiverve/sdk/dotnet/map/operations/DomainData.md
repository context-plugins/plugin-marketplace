<!-- Generated file — do not edit; regenerated with the SDK. -->

# DomainData — operations

Accessor: `client.DomainData` · Source: `src/ApiVerve/Api/DomainData.cs` · 18 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Bimivalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Bimivalidator(BimivalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`
- **Returns**: `V1BimivalidatorResponse`
- **Error**: `ApiException<BimivalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BimivalidatorRequest` | `src/ApiVerve/Requests/DomainData/BimivalidatorRequest.cs` |
| `V1BimivalidatorResponse` | `src/ApiVerve/Models/V1BimivalidatorResponse.cs` |
| `BimivalidatorError` | `src/ApiVerve/Errors/BimivalidatorError.cs` |

### Dkimvalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Dkimvalidator(DkimvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`, `selector` ← `Selector`
- **Returns**: `V1DkimvalidatorResponse`
- **Error**: `ApiException<DkimvalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DkimvalidatorRequest` | `src/ApiVerve/Requests/DomainData/DkimvalidatorRequest.cs` |
| `V1DkimvalidatorResponse` | `src/ApiVerve/Models/V1DkimvalidatorResponse.cs` |
| `DkimvalidatorError` | `src/ApiVerve/Errors/DkimvalidatorError.cs` |

### Dmarcvalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Dmarcvalidator(DmarcvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`
- **Returns**: `V1DmarcvalidatorResponse`
- **Error**: `ApiException<DmarcvalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DmarcvalidatorRequest` | `src/ApiVerve/Requests/DomainData/DmarcvalidatorRequest.cs` |
| `V1DmarcvalidatorResponse` | `src/ApiVerve/Models/V1DmarcvalidatorResponse.cs` |
| `DmarcvalidatorError` | `src/ApiVerve/Errors/DmarcvalidatorError.cs` |

### Dnslookup

- **Auth**: `options.ApiKey`
- **Signature**: `Dnslookup(DnslookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`
- **Returns**: `V1DnslookupResponse`
- **Error**: `ApiException<DnslookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DnslookupRequest` | `src/ApiVerve/Requests/DomainData/DnslookupRequest.cs` |
| `V1DnslookupResponse` | `src/ApiVerve/Models/V1DnslookupResponse.cs` |
| `DnslookupError` | `src/ApiVerve/Errors/DnslookupError.cs` |

### Dnspropagation

- **Auth**: `options.ApiKey`
- **Signature**: `Dnspropagation(DnspropagationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`, `type` ← `Type`
- **Returns**: `V1DnspropagationResponse`
- **Error**: `ApiException<DnspropagationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DnspropagationRequest` | `src/ApiVerve/Requests/DomainData/DnspropagationRequest.cs` |
| `V1DnspropagationResponse` | `src/ApiVerve/Models/V1DnspropagationResponse.cs` |
| `DnspropagationError` | `src/ApiVerve/Errors/DnspropagationError.cs` |

### Dnsseccheck

- **Auth**: `options.ApiKey`
- **Signature**: `Dnsseccheck(DnsseccheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`
- **Returns**: `V1DnsseccheckResponse`
- **Error**: `ApiException<DnsseccheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DnsseccheckRequest` | `src/ApiVerve/Requests/DomainData/DnsseccheckRequest.cs` |
| `V1DnsseccheckResponse` | `src/ApiVerve/Models/V1DnsseccheckResponse.cs` |
| `DnsseccheckError` | `src/ApiVerve/Errors/DnsseccheckError.cs` |

### Domainavailability

- **Auth**: `options.ApiKey`
- **Signature**: `Domainavailability(DomainavailabilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`
- **Returns**: `V1DomainavailabilityResponse`
- **Error**: `ApiException<DomainavailabilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DomainavailabilityRequest` | `src/ApiVerve/Requests/DomainData/DomainavailabilityRequest.cs` |
| `V1DomainavailabilityResponse` | `src/ApiVerve/Models/V1DomainavailabilityResponse.cs` |
| `DomainavailabilityError` | `src/ApiVerve/Errors/DomainavailabilityError.cs` |

### Domainexpiration

- **Auth**: `options.ApiKey`
- **Signature**: `Domainexpiration(DomainexpirationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`
- **Returns**: `V1DomainexpirationResponse`
- **Error**: `ApiException<DomainexpirationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DomainexpirationRequest` | `src/ApiVerve/Requests/DomainData/DomainexpirationRequest.cs` |
| `V1DomainexpirationResponse` | `src/ApiVerve/Models/V1DomainexpirationResponse.cs` |
| `DomainexpirationError` | `src/ApiVerve/Errors/DomainexpirationError.cs` |

### Fullyqualifieddomain

- **Auth**: `options.ApiKey`
- **Signature**: `Fullyqualifieddomain(FullyqualifieddomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ip`
- **Query params (wire ← C#)**: `ip` ← `Ip`
- **Returns**: `V1FullyqualifieddomainResponse`
- **Error**: `ApiException<FullyqualifieddomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FullyqualifieddomainRequest` | `src/ApiVerve/Requests/DomainData/FullyqualifieddomainRequest.cs` |
| `V1FullyqualifieddomainResponse` | `src/ApiVerve/Models/V1FullyqualifieddomainResponse.cs` |
| `FullyqualifieddomainError` | `src/ApiVerve/Errors/FullyqualifieddomainError.cs` |

### Mxlookup

- **Auth**: `options.ApiKey`
- **Signature**: `Mxlookup(MxlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`
- **Returns**: `V1MxlookupResponse`
- **Error**: `ApiException<MxlookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MxlookupRequest` | `src/ApiVerve/Requests/DomainData/MxlookupRequest.cs` |
| `V1MxlookupResponse` | `src/ApiVerve/Models/V1MxlookupResponse.cs` |
| `MxlookupError` | `src/ApiVerve/Errors/MxlookupError.cs` |

### Reversednslookup

- **Auth**: `options.ApiKey`
- **Signature**: `Reversednslookup(ReversednslookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ip`
- **Query params (wire ← C#)**: `ip` ← `Ip`
- **Returns**: `V1ReversednslookupResponse`
- **Error**: `ApiException<ReversednslookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReversednslookupRequest` | `src/ApiVerve/Requests/DomainData/ReversednslookupRequest.cs` |
| `V1ReversednslookupResponse` | `src/ApiVerve/Models/V1ReversednslookupResponse.cs` |
| `ReversednslookupError` | `src/ApiVerve/Errors/ReversednslookupError.cs` |

### Spfvalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Spfvalidator(SpfvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`
- **Returns**: `V1SpfvalidatorResponse`
- **Error**: `ApiException<SpfvalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpfvalidatorRequest` | `src/ApiVerve/Requests/DomainData/SpfvalidatorRequest.cs` |
| `V1SpfvalidatorResponse` | `src/ApiVerve/Models/V1SpfvalidatorResponse.cs` |
| `SpfvalidatorError` | `src/ApiVerve/Errors/SpfvalidatorError.cs` |

### Sslchecker

- **Auth**: `options.ApiKey`
- **Signature**: `Sslchecker(SslcheckerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`
- **Returns**: `V1SslcheckerResponse`
- **Error**: `ApiException<SslcheckerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SslcheckerRequest` | `src/ApiVerve/Requests/DomainData/SslcheckerRequest.cs` |
| `V1SslcheckerResponse` | `src/ApiVerve/Models/V1SslcheckerResponse.cs` |
| `SslcheckerError` | `src/ApiVerve/Errors/SslcheckerError.cs` |

### Subdomainfinder

- **Auth**: `options.ApiKey`
- **Signature**: `Subdomainfinder(SubdomainfinderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`, `limit` ← `Limit`, `deepScan` ← `DeepScan`
- **Returns**: `V1SubdomainfinderResponse`
- **Error**: `ApiException<SubdomainfinderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubdomainfinderRequest` | `src/ApiVerve/Requests/DomainData/SubdomainfinderRequest.cs` |
| `V1SubdomainfinderResponse` | `src/ApiVerve/Models/V1SubdomainfinderResponse.cs` |
| `SubdomainfinderError` | `src/ApiVerve/Errors/SubdomainfinderError.cs` |

### Urllookup

- **Auth**: `options.ApiKey`
- **Signature**: `Urllookup(UrllookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1UrllookupResponse`
- **Error**: `ApiException<UrllookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UrllookupRequest` | `src/ApiVerve/Requests/DomainData/UrllookupRequest.cs` |
| `V1UrllookupRequest` | `src/ApiVerve/Models/V1UrllookupRequest.cs` |
| `V1UrllookupResponse` | `src/ApiVerve/Models/V1UrllookupResponse.cs` |
| `UrllookupError` | `src/ApiVerve/Errors/UrllookupError.cs` |

### Urltitle

- **Auth**: `options.ApiKey`
- **Signature**: `Urltitle(UrltitleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1UrltitleResponse`
- **Error**: `ApiException<UrltitleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UrltitleRequest` | `src/ApiVerve/Requests/DomainData/UrltitleRequest.cs` |
| `V1UrltitleRequest` | `src/ApiVerve/Models/V1UrltitleRequest.cs` |
| `V1UrltitleResponse` | `src/ApiVerve/Models/V1UrltitleResponse.cs` |
| `UrltitleError` | `src/ApiVerve/Errors/UrltitleError.cs` |

### Urlunshortener

- **Auth**: `options.ApiKey`
- **Signature**: `Urlunshortener(UrlunshortenerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1UrlunshortenerResponse`
- **Error**: `ApiException<UrlunshortenerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UrlunshortenerRequest` | `src/ApiVerve/Requests/DomainData/UrlunshortenerRequest.cs` |
| `V1UrlunshortenerRequest` | `src/ApiVerve/Models/V1UrlunshortenerRequest.cs` |
| `V1UrlunshortenerResponse` | `src/ApiVerve/Models/V1UrlunshortenerResponse.cs` |
| `UrlunshortenerError` | `src/ApiVerve/Errors/UrlunshortenerError.cs` |

### Whoislookup

- **Auth**: `options.ApiKey`
- **Signature**: `Whoislookup(WhoislookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Domain`
- **Query params (wire ← C#)**: `domain` ← `Domain`
- **Returns**: `V1WhoislookupResponse`
- **Error**: `ApiException<WhoislookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WhoislookupRequest` | `src/ApiVerve/Requests/DomainData/WhoislookupRequest.cs` |
| `V1WhoislookupResponse` | `src/ApiVerve/Models/V1WhoislookupResponse.cs` |
| `WhoislookupError` | `src/ApiVerve/Errors/WhoislookupError.cs` |

