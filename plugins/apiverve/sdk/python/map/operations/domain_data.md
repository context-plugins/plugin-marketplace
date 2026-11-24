<!-- Generated file — do not edit; regenerated with the SDK. -->

# DomainData — operations

Accessor: `client.domain_data` · Source: `api_verve/apis/domain_data.py` · 18 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.domain_data.bimivalidator

- **Route**: `GET /v1/bimivalidator`
- **Auth**: `api_key`
- **Signature**: `def bimivalidator(domain: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query
- **Returns (parsed)**: `V1BimivalidatorResponse`
- **Returns (raw)**: `ApiResult[V1BimivalidatorResponse, BimivalidatorErrorBody]`
- **Error**: `BimivalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BimivalidatorResponse` | `api_verve/models/v1_bimivalidator_response.py` |
| `BimivalidatorErrorBody` | `api_verve/errors/bimivalidator_error.py` |

### client.domain_data.dkimvalidator

- **Route**: `GET /v1/dkimvalidator`
- **Auth**: `api_key`
- **Signature**: `def dkimvalidator(domain: str, *, selector: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query · `selector` — query
- **Returns (parsed)**: `V1DkimvalidatorResponse`
- **Returns (raw)**: `ApiResult[V1DkimvalidatorResponse, DkimvalidatorErrorBody]`
- **Error**: `DkimvalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DkimvalidatorResponse` | `api_verve/models/v1_dkimvalidator_response.py` |
| `DkimvalidatorErrorBody` | `api_verve/errors/dkimvalidator_error.py` |

### client.domain_data.dmarcvalidator

- **Route**: `GET /v1/dmarcvalidator`
- **Auth**: `api_key`
- **Signature**: `def dmarcvalidator(domain: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query
- **Returns (parsed)**: `V1DmarcvalidatorResponse`
- **Returns (raw)**: `ApiResult[V1DmarcvalidatorResponse, DmarcvalidatorErrorBody]`
- **Error**: `DmarcvalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DmarcvalidatorResponse` | `api_verve/models/v1_dmarcvalidator_response.py` |
| `DmarcvalidatorErrorBody` | `api_verve/errors/dmarcvalidator_error.py` |

### client.domain_data.dnslookup

- **Route**: `GET /v1/dnslookup`
- **Auth**: `api_key`
- **Signature**: `def dnslookup(domain: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query
- **Returns (parsed)**: `V1DnslookupResponse`
- **Returns (raw)**: `ApiResult[V1DnslookupResponse, DnslookupErrorBody]`
- **Error**: `DnslookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DnslookupResponse` | `api_verve/models/v1_dnslookup_response.py` |
| `DnslookupErrorBody` | `api_verve/errors/dnslookup_error.py` |

### client.domain_data.dnspropagation

- **Route**: `GET /v1/dnspropagation`
- **Auth**: `api_key`
- **Signature**: `def dnspropagation(domain: str, *, type_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query · `type_` — query `type`
- **Returns (parsed)**: `V1DnspropagationResponse`
- **Returns (raw)**: `ApiResult[V1DnspropagationResponse, DnspropagationErrorBody]`
- **Error**: `DnspropagationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DnspropagationResponse` | `api_verve/models/v1_dnspropagation_response.py` |
| `DnspropagationErrorBody` | `api_verve/errors/dnspropagation_error.py` |

### client.domain_data.dnsseccheck

- **Route**: `GET /v1/dnsseccheck`
- **Auth**: `api_key`
- **Signature**: `def dnsseccheck(domain: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query
- **Returns (parsed)**: `V1DnsseccheckResponse`
- **Returns (raw)**: `ApiResult[V1DnsseccheckResponse, DnsseccheckErrorBody]`
- **Error**: `DnsseccheckErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DnsseccheckResponse` | `api_verve/models/v1_dnsseccheck_response.py` |
| `DnsseccheckErrorBody` | `api_verve/errors/dnsseccheck_error.py` |

### client.domain_data.domainavailability

- **Route**: `GET /v1/domainavailability`
- **Auth**: `api_key`
- **Signature**: `def domainavailability(domain: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query
- **Returns (parsed)**: `V1DomainavailabilityResponse`
- **Returns (raw)**: `ApiResult[V1DomainavailabilityResponse, DomainavailabilityErrorBody]`
- **Error**: `DomainavailabilityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DomainavailabilityResponse` | `api_verve/models/v1_domainavailability_response.py` |
| `DomainavailabilityErrorBody` | `api_verve/errors/domainavailability_error.py` |

### client.domain_data.domainexpiration

- **Route**: `GET /v1/domainexpiration`
- **Auth**: `api_key`
- **Signature**: `def domainexpiration(domain: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query
- **Returns (parsed)**: `V1DomainexpirationResponse`
- **Returns (raw)**: `ApiResult[V1DomainexpirationResponse, DomainexpirationErrorBody]`
- **Error**: `DomainexpirationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DomainexpirationResponse` | `api_verve/models/v1_domainexpiration_response.py` |
| `DomainexpirationErrorBody` | `api_verve/errors/domainexpiration_error.py` |

### client.domain_data.fullyqualifieddomain

- **Route**: `GET /v1/fullyqualifieddomain`
- **Auth**: `api_key`
- **Signature**: `def fullyqualifieddomain(ip: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ip`
- **Params**: `ip` — query
- **Returns (parsed)**: `V1FullyqualifieddomainResponse`
- **Returns (raw)**: `ApiResult[V1FullyqualifieddomainResponse, FullyqualifieddomainErrorBody]`
- **Error**: `FullyqualifieddomainErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1FullyqualifieddomainResponse` | `api_verve/models/v1_fullyqualifieddomain_response.py` |
| `FullyqualifieddomainErrorBody` | `api_verve/errors/fullyqualifieddomain_error.py` |

### client.domain_data.mxlookup

- **Route**: `GET /v1/mxlookup`
- **Auth**: `api_key`
- **Signature**: `def mxlookup(domain: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query
- **Returns (parsed)**: `V1MxlookupResponse`
- **Returns (raw)**: `ApiResult[V1MxlookupResponse, MxlookupErrorBody]`
- **Error**: `MxlookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MxlookupResponse` | `api_verve/models/v1_mxlookup_response.py` |
| `MxlookupErrorBody` | `api_verve/errors/mxlookup_error.py` |

### client.domain_data.reversednslookup

- **Route**: `GET /v1/reversednslookup`
- **Auth**: `api_key`
- **Signature**: `def reversednslookup(ip: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ip`
- **Params**: `ip` — query
- **Returns (parsed)**: `V1ReversednslookupResponse`
- **Returns (raw)**: `ApiResult[V1ReversednslookupResponse, ReversednslookupErrorBody]`
- **Error**: `ReversednslookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ReversednslookupResponse` | `api_verve/models/v1_reversednslookup_response.py` |
| `ReversednslookupErrorBody` | `api_verve/errors/reversednslookup_error.py` |

### client.domain_data.spfvalidator

- **Route**: `GET /v1/spfvalidator`
- **Auth**: `api_key`
- **Signature**: `def spfvalidator(domain: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query
- **Returns (parsed)**: `V1SpfvalidatorResponse`
- **Returns (raw)**: `ApiResult[V1SpfvalidatorResponse, SpfvalidatorErrorBody]`
- **Error**: `SpfvalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SpfvalidatorResponse` | `api_verve/models/v1_spfvalidator_response.py` |
| `SpfvalidatorErrorBody` | `api_verve/errors/spfvalidator_error.py` |

### client.domain_data.sslchecker

- **Route**: `GET /v1/sslchecker`
- **Auth**: `api_key`
- **Signature**: `def sslchecker(domain: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query
- **Returns (parsed)**: `V1SslcheckerResponse`
- **Returns (raw)**: `ApiResult[V1SslcheckerResponse, SslcheckerErrorBody]`
- **Error**: `SslcheckerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SslcheckerResponse` | `api_verve/models/v1_sslchecker_response.py` |
| `SslcheckerErrorBody` | `api_verve/errors/sslchecker_error.py` |

### client.domain_data.subdomainfinder

- **Route**: `GET /v1/subdomainfinder`
- **Auth**: `api_key`
- **Signature**: `def subdomainfinder(domain: str, *, limit: int | None = None, deep_scan: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query · `limit` — query · `deep_scan` — query `deepScan`
- **Returns (parsed)**: `V1SubdomainfinderResponse`
- **Returns (raw)**: `ApiResult[V1SubdomainfinderResponse, SubdomainfinderErrorBody]`
- **Error**: `SubdomainfinderErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SubdomainfinderResponse` | `api_verve/models/v1_subdomainfinder_response.py` |
| `SubdomainfinderErrorBody` | `api_verve/errors/subdomainfinder_error.py` |

### client.domain_data.urllookup

- **Route**: `POST /v1/urllookup`
- **Auth**: `api_key`
- **Signature**: `def urllookup(body: V1UrllookupRequest | V1UrllookupRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1UrllookupResponse`
- **Returns (raw)**: `ApiResult[V1UrllookupResponse, UrllookupErrorBody]`
- **Error**: `UrllookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UrllookupRequest` | `api_verve/models/v1_urllookup_request.py` |
| `V1UrllookupRequestDict` | `api_verve/models/v1_urllookup_request.py` |
| `V1UrllookupResponse` | `api_verve/models/v1_urllookup_response.py` |
| `UrllookupErrorBody` | `api_verve/errors/urllookup_error.py` |

### client.domain_data.urltitle

- **Route**: `POST /v1/urltitle`
- **Auth**: `api_key`
- **Signature**: `def urltitle(body: V1UrltitleRequest | V1UrltitleRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1UrltitleResponse`
- **Returns (raw)**: `ApiResult[V1UrltitleResponse, UrltitleErrorBody]`
- **Error**: `UrltitleErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UrltitleRequest` | `api_verve/models/v1_urltitle_request.py` |
| `V1UrltitleRequestDict` | `api_verve/models/v1_urltitle_request.py` |
| `V1UrltitleResponse` | `api_verve/models/v1_urltitle_response.py` |
| `UrltitleErrorBody` | `api_verve/errors/urltitle_error.py` |

### client.domain_data.urlunshortener

- **Route**: `POST /v1/urlunshortener`
- **Auth**: `api_key`
- **Signature**: `def urlunshortener(body: V1UrlunshortenerRequest | V1UrlunshortenerRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1UrlunshortenerResponse`
- **Returns (raw)**: `ApiResult[V1UrlunshortenerResponse, UrlunshortenerErrorBody]`
- **Error**: `UrlunshortenerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UrlunshortenerRequest` | `api_verve/models/v1_urlunshortener_request.py` |
| `V1UrlunshortenerRequestDict` | `api_verve/models/v1_urlunshortener_request.py` |
| `V1UrlunshortenerResponse` | `api_verve/models/v1_urlunshortener_response.py` |
| `UrlunshortenerErrorBody` | `api_verve/errors/urlunshortener_error.py` |

### client.domain_data.whoislookup

- **Route**: `GET /v1/whoislookup`
- **Auth**: `api_key`
- **Signature**: `def whoislookup(domain: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query
- **Returns (parsed)**: `V1WhoislookupResponse`
- **Returns (raw)**: `ApiResult[V1WhoislookupResponse, WhoislookupErrorBody]`
- **Error**: `WhoislookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WhoislookupResponse` | `api_verve/models/v1_whoislookup_response.py` |
| `WhoislookupErrorBody` | `api_verve/errors/whoislookup_error.py` |

