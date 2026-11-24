<!-- Generated file — do not edit; regenerated with the SDK. -->

# IpReputation — operations

Accessor: `client.ipReputation` · Source: `src/resources/ip-reputation.ts` · 2 operations · Request and error types: namespace `IpReputation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkIpReputation

- **Signature**: `bulkIpReputation(request: IpReputation.BulkIpReputationRequest, options?: RequestOptions): ApiPromise<IpReputationResponse[], IpReputation.BulkIpReputationError>`
- **Wire**: `POST /v1.0/security`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IpReputationResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `IpReputation.BulkIpReputationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IpReputation.BulkIpReputationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V10SecurityRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V10SecurityRequest` | `v10SecurityRequestSchema` | `src/models/v10-security-request.ts` |
| `IpReputationResponse` | `ipReputationResponseSchema` | `src/models/ip-reputation-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### ipReputation

- **Signature**: `ipReputation(request: IpReputation.IpReputationRequest, options?: RequestOptions): ApiPromise<IpReputationResponse, IpReputation.IpReputationError>`
- **Wire**: `GET /v1.0/security`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IpReputationResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `IpReputation.IpReputationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IpReputation.IpReputationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IpReputationResponse` | `ipReputationResponseSchema` | `src/models/ip-reputation-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

