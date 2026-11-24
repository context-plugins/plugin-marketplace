<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ssl — operations

Accessor: `client.ssl` · Source: `src/resources/ssl.ts` · 1 operation · Request and error types: namespace `Ssl`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### sslLookup

- **Signature**: `sslLookup(request: Ssl.SslLookupRequest, options?: RequestOptions): ApiPromise<SslResponse, Ssl.SslLookupError>`
- **Wire**: `GET /v1.0/ssl/live`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SslResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Ssl.SslLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ssl.SslLookupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `domainName` | `query` | `string` | yes | — |
| `chain` | `query` | `boolean` | no | `false` |
| `sslRaw` | `query` | `boolean` | no | `false` |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `SslResponse` | `sslResponseSchema` | `src/models/ssl-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

