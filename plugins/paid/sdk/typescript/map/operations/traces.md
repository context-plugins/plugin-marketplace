<!-- Generated file — do not edit; regenerated with the SDK. -->

# Traces — operations

Accessor: `client.traces` · Source: `src/resources/traces.ts` · 1 operation · Request and error types: namespace `Traces`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTraces

- **Signature**: `getTraces(request: Traces.GetTracesRequest, options?: RequestOptions): ApiPromise<TracesResponse, Traces.GetTracesError>`
- **Wire**: `GET /traces`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TracesResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Traces.GetTracesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.GetTracesRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `100` |
| `offset` | `query` | — | `number` | no | `0` |
| `startTime` | `query` | — | `Date` (date-time) | no | — |
| `endTime` | `query` | — | `Date` (date-time) | no | — |
| `externalCustomerId` | `query` | — | `string` | no | — |
| `externalProductId` | `query` | — | `string` | no | — |
| `externalAgentId` | `query` | — | `string` | no | — |
| `metadata` | `query` | — | `string` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TracesResponse` | `tracesResponseSchema` | `src/models/traces-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

