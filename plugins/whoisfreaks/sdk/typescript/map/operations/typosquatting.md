<!-- Generated file — do not edit; regenerated with the SDK. -->

# Typosquatting — operations

Accessor: `client.typosquatting` · Source: `src/resources/typosquatting.ts` · 1 operation · Request and error types: namespace `Typosquatting`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### typosquatting

- **Signature**: `typosquatting(request?: Typosquatting.TyposquattingRequest, options?: RequestOptions): ApiPromise<TyposquattingResponse, Typosquatting.TyposquattingError>`
- **Wire**: `GET /v3.0/domain/typos`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TyposquattingResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Typosquatting.TyposquattingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Typosquatting.TyposquattingRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `keyword` | `query` | `string` | no |
| `pattern` | `query` | `string` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TyposquattingResponse` | `typosquattingResponseSchema` | `src/models/typosquatting-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

