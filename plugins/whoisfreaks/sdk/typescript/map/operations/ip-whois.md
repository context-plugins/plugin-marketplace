<!-- Generated file — do not edit; regenerated with the SDK. -->

# IpWhois — operations

Accessor: `client.ipWhois` · Source: `src/resources/ip-whois.ts` · 1 operation · Request and error types: namespace `IpWhois`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### ipWhois

- **Signature**: `ipWhois(request: IpWhois.IpWhoisRequest, options?: RequestOptions): ApiPromise<IpWhoisResponse, IpWhois.IpWhoisError>`
- **Wire**: `GET /v1.0/ip-whois`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IpWhoisResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `IpWhois.IpWhoisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IpWhois.IpWhoisRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `ip` | `query` | `string` | yes | — |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `IpWhoisResponse` | `ipWhoisResponseSchema` | `src/models/ip-whois-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

