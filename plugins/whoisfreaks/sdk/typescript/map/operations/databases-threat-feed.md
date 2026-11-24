<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesThreatFeed — operations

Accessor: `client.databasesThreatFeed` · Source: `src/resources/databases-threat-feed.ts` · 6 operations · Request types: namespace `DatabasesThreatFeed`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### downloadThreatFeedMalware

- **Signature**: `downloadThreatFeedMalware(request?: DatabasesThreatFeed.DownloadThreatFeedMalwareRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /v3.4/download/threat-feed/malware`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DatabasesThreatFeed.DownloadThreatFeedMalwareRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | no |

### downloadThreatFeedMalwareSample

- **Signature**: `downloadThreatFeedMalwareSample(options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /v3.4/download/threat-feed/malware/sample`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### downloadThreatFeedPhishing

- **Signature**: `downloadThreatFeedPhishing(request?: DatabasesThreatFeed.DownloadThreatFeedPhishingRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /v3.4/download/threat-feed/phishing`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DatabasesThreatFeed.DownloadThreatFeedPhishingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | no |

### downloadThreatFeedPhishingSample

- **Signature**: `downloadThreatFeedPhishingSample(options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /v3.4/download/threat-feed/phishing/sample`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### downloadThreatFeedSpam

- **Signature**: `downloadThreatFeedSpam(request?: DatabasesThreatFeed.DownloadThreatFeedSpamRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /v3.4/download/threat-feed/spam`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DatabasesThreatFeed.DownloadThreatFeedSpamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | no |

### downloadThreatFeedSpamSample

- **Signature**: `downloadThreatFeedSpamSample(options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /v3.4/download/threat-feed/spam/sample`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WhoisFreaksError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

