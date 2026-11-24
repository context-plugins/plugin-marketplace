<!-- Generated file — do not edit; regenerated with the SDK. -->

# DomainData — operations

Accessor: `client.domainData` · Source: `src/resources/domain-data.ts` · 18 operations · Request and error types: namespace `DomainData`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bimivalidator

- **Signature**: `bimivalidator(request: DomainData.BimivalidatorRequest, options?: RequestOptions): ApiPromise<V1BimivalidatorResponse, DomainData.BimivalidatorError>`
- **Wire**: `GET /v1/bimivalidator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BimivalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.BimivalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.BimivalidatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BimivalidatorResponse` | `v1BimivalidatorResponseSchema` | `src/models/v1-bimivalidator-response.ts` |

### dkimvalidator

- **Signature**: `dkimvalidator(request: DomainData.DkimvalidatorRequest, options?: RequestOptions): ApiPromise<V1DkimvalidatorResponse, DomainData.DkimvalidatorError>`
- **Wire**: `GET /v1/dkimvalidator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DkimvalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.DkimvalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.DkimvalidatorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |
| `selector` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DkimvalidatorResponse` | `v1DkimvalidatorResponseSchema` | `src/models/v1-dkimvalidator-response.ts` |

### dmarcvalidator

- **Signature**: `dmarcvalidator(request: DomainData.DmarcvalidatorRequest, options?: RequestOptions): ApiPromise<V1DmarcvalidatorResponse, DomainData.DmarcvalidatorError>`
- **Wire**: `GET /v1/dmarcvalidator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DmarcvalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.DmarcvalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.DmarcvalidatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DmarcvalidatorResponse` | `v1DmarcvalidatorResponseSchema` | `src/models/v1-dmarcvalidator-response.ts` |

### dnslookup

- **Signature**: `dnslookup(request: DomainData.DnslookupRequest, options?: RequestOptions): ApiPromise<V1DnslookupResponse, DomainData.DnslookupError>`
- **Wire**: `GET /v1/dnslookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DnslookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.DnslookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.DnslookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DnslookupResponse` | `v1DnslookupResponseSchema` | `src/models/v1-dnslookup-response.ts` |

### dnspropagation

- **Signature**: `dnspropagation(request: DomainData.DnspropagationRequest, options?: RequestOptions): ApiPromise<V1DnspropagationResponse, DomainData.DnspropagationError>`
- **Wire**: `GET /v1/dnspropagation`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DnspropagationResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.DnspropagationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.DnspropagationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |
| `type` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DnspropagationResponse` | `v1DnspropagationResponseSchema` | `src/models/v1-dnspropagation-response.ts` |

### dnsseccheck

- **Signature**: `dnsseccheck(request: DomainData.DnsseccheckRequest, options?: RequestOptions): ApiPromise<V1DnsseccheckResponse, DomainData.DnsseccheckError>`
- **Wire**: `GET /v1/dnsseccheck`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DnsseccheckResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.DnsseccheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.DnsseccheckRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DnsseccheckResponse` | `v1DnsseccheckResponseSchema` | `src/models/v1-dnsseccheck-response.ts` |

### domainavailability

- **Signature**: `domainavailability(request: DomainData.DomainavailabilityRequest, options?: RequestOptions): ApiPromise<V1DomainavailabilityResponse, DomainData.DomainavailabilityError>`
- **Wire**: `GET /v1/domainavailability`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DomainavailabilityResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.DomainavailabilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.DomainavailabilityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DomainavailabilityResponse` | `v1DomainavailabilityResponseSchema` | `src/models/v1-domainavailability-response.ts` |

### domainexpiration

- **Signature**: `domainexpiration(request: DomainData.DomainexpirationRequest, options?: RequestOptions): ApiPromise<V1DomainexpirationResponse, DomainData.DomainexpirationError>`
- **Wire**: `GET /v1/domainexpiration`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DomainexpirationResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.DomainexpirationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.DomainexpirationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DomainexpirationResponse` | `v1DomainexpirationResponseSchema` | `src/models/v1-domainexpiration-response.ts` |

### fullyqualifieddomain

- **Signature**: `fullyqualifieddomain(request: DomainData.FullyqualifieddomainRequest, options?: RequestOptions): ApiPromise<V1FullyqualifieddomainResponse, DomainData.FullyqualifieddomainError>`
- **Wire**: `GET /v1/fullyqualifieddomain`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1FullyqualifieddomainResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.FullyqualifieddomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.FullyqualifieddomainRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1FullyqualifieddomainResponse` | `v1FullyqualifieddomainResponseSchema` | `src/models/v1-fullyqualifieddomain-response.ts` |

### mxlookup

- **Signature**: `mxlookup(request: DomainData.MxlookupRequest, options?: RequestOptions): ApiPromise<V1MxlookupResponse, DomainData.MxlookupError>`
- **Wire**: `GET /v1/mxlookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MxlookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.MxlookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.MxlookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MxlookupResponse` | `v1MxlookupResponseSchema` | `src/models/v1-mxlookup-response.ts` |

### reversednslookup

- **Signature**: `reversednslookup(request: DomainData.ReversednslookupRequest, options?: RequestOptions): ApiPromise<V1ReversednslookupResponse, DomainData.ReversednslookupError>`
- **Wire**: `GET /v1/reversednslookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ReversednslookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.ReversednslookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.ReversednslookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ReversednslookupResponse` | `v1ReversednslookupResponseSchema` | `src/models/v1-reversednslookup-response.ts` |

### spfvalidator

- **Signature**: `spfvalidator(request: DomainData.SpfvalidatorRequest, options?: RequestOptions): ApiPromise<V1SpfvalidatorResponse, DomainData.SpfvalidatorError>`
- **Wire**: `GET /v1/spfvalidator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SpfvalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.SpfvalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.SpfvalidatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SpfvalidatorResponse` | `v1SpfvalidatorResponseSchema` | `src/models/v1-spfvalidator-response.ts` |

### sslchecker

- **Signature**: `sslchecker(request: DomainData.SslcheckerRequest, options?: RequestOptions): ApiPromise<V1SslcheckerResponse, DomainData.SslcheckerError>`
- **Wire**: `GET /v1/sslchecker`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SslcheckerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.SslcheckerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.SslcheckerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SslcheckerResponse` | `v1SslcheckerResponseSchema` | `src/models/v1-sslchecker-response.ts` |

### subdomainfinder

- **Signature**: `subdomainfinder(request: DomainData.SubdomainfinderRequest, options?: RequestOptions): ApiPromise<V1SubdomainfinderResponse, DomainData.SubdomainfinderError>`
- **Wire**: `GET /v1/subdomainfinder`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SubdomainfinderResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.SubdomainfinderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.SubdomainfinderRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |
| `limit` | `query` | `number` | no |
| `deepScan` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SubdomainfinderResponse` | `v1SubdomainfinderResponseSchema` | `src/models/v1-subdomainfinder-response.ts` |

### urllookup

- **Signature**: `urllookup(request: DomainData.UrllookupRequest, options?: RequestOptions): ApiPromise<V1UrllookupResponse, DomainData.UrllookupError>`
- **Wire**: `POST /v1/urllookup`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1UrllookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.UrllookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.UrllookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1UrllookupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UrllookupRequest` | `v1UrllookupRequestSchema` | `src/models/v1-urllookup-request.ts` |
| `V1UrllookupResponse` | `v1UrllookupResponseSchema` | `src/models/v1-urllookup-response.ts` |

### urltitle

- **Signature**: `urltitle(request: DomainData.UrltitleRequest, options?: RequestOptions): ApiPromise<V1UrltitleResponse, DomainData.UrltitleError>`
- **Wire**: `POST /v1/urltitle`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1UrltitleResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.UrltitleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.UrltitleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1UrltitleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UrltitleRequest` | `v1UrltitleRequestSchema` | `src/models/v1-urltitle-request.ts` |
| `V1UrltitleResponse` | `v1UrltitleResponseSchema` | `src/models/v1-urltitle-response.ts` |

### urlunshortener

- **Signature**: `urlunshortener(request: DomainData.UrlunshortenerRequest, options?: RequestOptions): ApiPromise<V1UrlunshortenerResponse, DomainData.UrlunshortenerError>`
- **Wire**: `POST /v1/urlunshortener`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1UrlunshortenerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.UrlunshortenerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.UrlunshortenerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1UrlunshortenerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UrlunshortenerRequest` | `v1UrlunshortenerRequestSchema` | `src/models/v1-urlunshortener-request.ts` |
| `V1UrlunshortenerResponse` | `v1UrlunshortenerResponseSchema` | `src/models/v1-urlunshortener-response.ts` |

### whoislookup

- **Signature**: `whoislookup(request: DomainData.WhoislookupRequest, options?: RequestOptions): ApiPromise<V1WhoislookupResponse, DomainData.WhoislookupError>`
- **Wire**: `GET /v1/whoislookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WhoislookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DomainData.WhoislookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainData.WhoislookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WhoislookupResponse` | `v1WhoislookupResponseSchema` | `src/models/v1-whoislookup-response.ts` |

