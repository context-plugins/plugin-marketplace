<!-- Generated file — do not edit; regenerated with the SDK. -->

# AsnWhois — operations

Accessor: `client.asnWhois` · Source: `src/resources/asn-whois.ts` · 1 operation · Request and error types: namespace `AsnWhois`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### asnWhois

- **Signature**: `asnWhois(request: AsnWhois.AsnWhoisRequest, options?: RequestOptions): ApiPromise<AsnWhoisResponse, AsnWhois.AsnWhoisError>`
- **Wire**: `GET /v2.0/asn-whois`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AsnWhoisResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `AsnWhois.AsnWhoisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AsnWhois.AsnWhoisRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `asn` | `query` | `string` | yes | — |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `AsnWhoisResponse` | `asnWhoisResponseSchema` | `src/models/asn-whois-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

