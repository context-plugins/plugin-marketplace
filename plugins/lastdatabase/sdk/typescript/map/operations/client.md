<!-- Generated file — do not edit; regenerated with the SDK. -->

# LastDatabaseClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 1 operation · Request and error types: namespace `LastDatabaseClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `LastDatabaseClient.SearchLeadsRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `last-database`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchLeads

- **Signature**: `searchLeads(request?: LastDatabaseClient.SearchLeadsRequest, options?: RequestOptions): ApiPromise<LeadSearchResponse, LastDatabaseClient.SearchLeadsError>`
- **Wire**: `GET /api/leads/search`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LeadSearchResponse`
- **Error**: `LastDatabaseError` with `kind: "api"`, an instance of `LastDatabaseClient.SearchLeadsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LastDatabaseClient.SearchLeadsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `type` | `query` | `Type` | no | `Type.Email` |
| `country` | `query` | `string` | no | — |
| `city` | `query` | `string` | no | — |
| `industry` | `query` | `string` | no | — |
| `keyword` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `25` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type` | `typeSchema` | `src/models/type.ts` |
| `LeadSearchResponse` | `leadSearchResponseSchema` | `src/models/lead-search-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

