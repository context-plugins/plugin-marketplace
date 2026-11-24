<!-- Generated file — do not edit; regenerated with the SDK. -->

# DomainReputation — operations

Accessor: `client.domainReputation` · Source: `src/resources/domain-reputation.ts` · 1 operation · Request and error types: namespace `DomainReputation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### domainReputation

- **Signature**: `domainReputation(request: DomainReputation.DomainReputationRequest, options?: RequestOptions): ApiPromise<DomainReputationResponse, DomainReputation.DomainReputationError>`
- **Wire**: `GET /v1/domain/security`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DomainReputationResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DomainReputation.DomainReputationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainReputation.DomainReputationRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `domainName` | `query` | `string` | yes | — |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DomainReputationResponse` | `domainReputationResponseSchema` | `src/models/domain-reputation-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

