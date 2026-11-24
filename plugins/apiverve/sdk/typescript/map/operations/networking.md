<!-- Generated file — do not edit; regenerated with the SDK. -->

# Networking — operations

Accessor: `client.networking` · Source: `src/resources/networking.ts` · 14 operations · Request and error types: namespace `Networking`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bluetoothlookup

- **Signature**: `bluetoothlookup(request: Networking.BluetoothlookupRequest, options?: RequestOptions): ApiPromise<V1BluetoothlookupResponse, Networking.BluetoothlookupError>`
- **Wire**: `GET /v1/bluetoothlookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BluetoothlookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.BluetoothlookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.BluetoothlookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyid` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BluetoothlookupResponse` | `v1BluetoothlookupResponseSchema` | `src/models/v1-bluetoothlookup-response.ts` |

### botdetector

- **Signature**: `botdetector(request: Networking.BotdetectorRequest, options?: RequestOptions): ApiPromise<V1BotdetectorResponse, Networking.BotdetectorError>`
- **Wire**: `GET /v1/botdetector`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BotdetectorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.BotdetectorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.BotdetectorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ua` | `query` | `string` | yes |
| `ip` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BotdetectorResponse` | `v1BotdetectorResponseSchema` | `src/models/v1-botdetector-response.ts` |

### contentfilter

- **Signature**: `contentfilter(request: Networking.ContentfilterRequest, options?: RequestOptions): ApiPromise<V1ContentfilterResponse, Networking.ContentfilterError>`
- **Wire**: `POST /v1/contentfilter`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ContentfilterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.ContentfilterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.ContentfilterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ContentfilterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ContentfilterRequest` | `v1ContentfilterRequestSchema` | `src/models/v1-contentfilter-request.ts` |
| `V1ContentfilterResponse` | `v1ContentfilterResponseSchema` | `src/models/v1-contentfilter-response.ts` |

### ipblacklistlookup

- **Signature**: `ipblacklistlookup(request: Networking.IpblacklistlookupRequest, options?: RequestOptions): ApiPromise<V1IpblacklistlookupResponse, Networking.IpblacklistlookupError>`
- **Wire**: `GET /v1/ipblacklistlookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1IpblacklistlookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.IpblacklistlookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.IpblacklistlookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1IpblacklistlookupResponse` | `v1IpblacklistlookupResponseSchema` | `src/models/v1-ipblacklistlookup-response.ts` |

### iplookup

- **Signature**: `iplookup(request: Networking.IplookupRequest, options?: RequestOptions): ApiPromise<V1IplookupResponse, Networking.IplookupError>`
- **Wire**: `GET /v1/iplookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1IplookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.IplookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.IplookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1IplookupResponse` | `v1IplookupResponseSchema` | `src/models/v1-iplookup-response.ts` |

### macaddresslookup

- **Signature**: `macaddresslookup(request: Networking.MacaddresslookupRequest, options?: RequestOptions): ApiPromise<V1MacaddresslookupResponse, Networking.MacaddresslookupError>`
- **Wire**: `GET /v1/macaddresslookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MacaddresslookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.MacaddresslookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.MacaddresslookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `mac` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MacaddresslookupResponse` | `v1MacaddresslookupResponseSchema` | `src/models/v1-macaddresslookup-response.ts` |

### nameservers

- **Signature**: `nameservers(request: Networking.NameserversRequest, options?: RequestOptions): ApiPromise<V1NameserversResponse, Networking.NameserversError>`
- **Wire**: `GET /v1/nameservers`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1NameserversResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.NameserversError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.NameserversRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1NameserversResponse` | `v1NameserversResponseSchema` | `src/models/v1-nameservers-response.ts` |

### phishingcheck

- **Signature**: `phishingcheck(request: Networking.PhishingcheckRequest, options?: RequestOptions): ApiPromise<V1PhishingcheckResponse, Networking.PhishingcheckError>`
- **Wire**: `POST /v1/phishingcheck`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1PhishingcheckResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.PhishingcheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.PhishingcheckRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1PhishingcheckRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PhishingcheckRequest` | `v1PhishingcheckRequestSchema` | `src/models/v1-phishingcheck-request.ts` |
| `V1PhishingcheckResponse` | `v1PhishingcheckResponseSchema` | `src/models/v1-phishingcheck-response.ts` |

### pinger

- **Signature**: `pinger(request: Networking.PingerRequest, options?: RequestOptions): ApiPromise<V1PingerResponse, Networking.PingerError>`
- **Wire**: `POST /v1/pinger`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1PingerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.PingerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.PingerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1PingerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PingerRequest` | `v1PingerRequestSchema` | `src/models/v1-pinger-request.ts` |
| `V1PingerResponse` | `v1PingerResponseSchema` | `src/models/v1-pinger-response.ts` |

### tldlookup

- **Signature**: `tldlookup(request: Networking.TldlookupRequest, options?: RequestOptions): ApiPromise<V1TldlookupResponse, Networking.TldlookupError>`
- **Wire**: `GET /v1/tldlookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TldlookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.TldlookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.TldlookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tld` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TldlookupResponse` | `v1TldlookupResponseSchema` | `src/models/v1-tldlookup-response.ts` |

### tlscheck

- **Signature**: `tlscheck(request: Networking.TlscheckRequest, options?: RequestOptions): ApiPromise<V1TlscheckResponse, Networking.TlscheckError>`
- **Wire**: `GET /v1/tlscheck`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TlscheckResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.TlscheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.TlscheckRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |
| `port` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TlscheckResponse` | `v1TlscheckResponseSchema` | `src/models/v1-tlscheck-response.ts` |

### tordetect

- **Signature**: `tordetect(request: Networking.TordetectRequest, options?: RequestOptions): ApiPromise<V1TordetectResponse, Networking.TordetectError>`
- **Wire**: `GET /v1/tordetect`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TordetectResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.TordetectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.TordetectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TordetectResponse` | `v1TordetectResponseSchema` | `src/models/v1-tordetect-response.ts` |

### usbvendorlookup

- **Signature**: `usbvendorlookup(request: Networking.UsbvendorlookupRequest, options?: RequestOptions): ApiPromise<V1UsbvendorlookupResponse, Networking.UsbvendorlookupError>`
- **Wire**: `GET /v1/usbvendorlookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UsbvendorlookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.UsbvendorlookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.UsbvendorlookupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorid` | `query` | `string` | yes |
| `productid` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UsbvendorlookupResponse` | `v1UsbvendorlookupResponseSchema` | `src/models/v1-usbvendorlookup-response.ts` |

### vpndetector

- **Signature**: `vpndetector(request: Networking.VpndetectorRequest, options?: RequestOptions): ApiPromise<V1VpndetectorResponse, Networking.VpndetectorError>`
- **Wire**: `GET /v1/vpndetector`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1VpndetectorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Networking.VpndetectorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Networking.VpndetectorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1VpndetectorResponse` | `v1VpndetectorResponseSchema` | `src/models/v1-vpndetector-response.ts` |

