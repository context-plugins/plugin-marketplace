<!-- Generated file — do not edit; regenerated with the SDK. -->

# History — operations

Accessor: `client.history` · Source: `src/resources/history.ts` · 1 operation · Request and error types: namespace `History`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### historyV1HistoryGet

- **Signature**: `historyV1HistoryGet(request?: History.HistoryV1HistoryGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, History.HistoryV1HistoryGetError>`
- **Wire**: `GET /v1/history`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `History.HistoryV1HistoryGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `History.HistoryV1HistoryGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `tool` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

