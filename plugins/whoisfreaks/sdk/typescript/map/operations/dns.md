<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dns — operations

Accessor: `client.dns` · Source: `src/resources/dns.ts` · 4 operations · Request and error types: namespace `Dns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dnsBulk

- **Signature**: `dnsBulk(request: Dns.DnsBulkRequest, options?: RequestOptions): ApiPromise<BulkDnsResponse, Dns.DnsBulkError>`
- **Wire**: `POST /v2.0/dns/bulk/live`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkDnsResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Dns.DnsBulkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dns.DnsBulkRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `type` | `query` | `string` | no | `"all"` |
| `format` | `query` | `Format` | no | `Format.Json` |
| `body` | `body` | `V20DnsBulkLiveRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `V20DnsBulkLiveRequest` | `v20DnsBulkLiveRequestSchema` | `src/models/v20-dns-bulk-live-request.ts` |
| `BulkDnsResponse` | `bulkDnsResponseSchema` | `src/models/bulk-dns-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dnsHistorical

- **Signature**: `dnsHistorical(request: Dns.DnsHistoricalRequest, options?: RequestOptions): ApiPromise<HistoricalDnsResponse, Dns.DnsHistoricalError>`
- **Wire**: `GET /v2.0/dns/historical`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HistoricalDnsResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Dns.DnsHistoricalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dns.DnsHistoricalRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `domainName` | `query` | `string` | yes | — |
| `type` | `query` | `string` | no | `"all"` |
| `page` | `query` | `number` | no | `1` |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `HistoricalDnsResponse` | `historicalDnsResponseSchema` | `src/models/historical-dns-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dnsLive

- **Signature**: `dnsLive(request?: Dns.DnsLiveRequest, options?: RequestOptions): ApiPromise<DnsResponse, Dns.DnsLiveError>`
- **Wire**: `GET /v2.0/dns/live`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DnsResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Dns.DnsLiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dns.DnsLiveRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `type` | `query` | `string` | no | `"all"` |
| `domainName` | `query` | `string` | no | — |
| `ipAddress` | `query` | `string` | no | — |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DnsResponse` | `dnsResponseSchema` | `src/models/dns-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### dnsReverse

- **Signature**: `dnsReverse(request: Dns.DnsReverseRequest, options?: RequestOptions): ApiPromise<ReverseDnsResponse, Dns.DnsReverseError>`
- **Wire**: `GET /v2.1/dns/reverse`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReverseDnsResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Dns.DnsReverseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dns.DnsReverseRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `value` | `query` | `string` | yes | — |
| `type` | `query` | `Type` | yes | — |
| `exact` | `query` | `boolean` | no | `true` |
| `page` | `query` | `number` | no | `1` |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type` | `typeSchema` | `src/models/type.ts` |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ReverseDnsResponse` | `reverseDnsResponseSchema` | `src/models/reverse-dns-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

