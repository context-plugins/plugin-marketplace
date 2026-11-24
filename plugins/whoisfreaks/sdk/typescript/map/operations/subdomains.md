<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subdomains — operations

Accessor: `client.subdomains` · Source: `src/resources/subdomains.ts` · 1 operation · Request and error types: namespace `Subdomains`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### subdomains

- **Signature**: `subdomains(request: Subdomains.SubdomainsRequest, options?: RequestOptions): ApiPromise<SubdomainsResponse, Subdomains.SubdomainsError>`
- **Wire**: `GET /v1.0/subdomains`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubdomainsResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Subdomains.SubdomainsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subdomains.SubdomainsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `domain` | `query` | `string` | yes | — |
| `after` | `query` | `string` (date) | no | — |
| `before` | `query` | `string` (date) | no | — |
| `status` | `query` | `Status` | no | — |
| `page` | `query` | `number` | no | `1` |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `SubdomainsResponse` | `subdomainsResponseSchema` | `src/models/subdomains-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

