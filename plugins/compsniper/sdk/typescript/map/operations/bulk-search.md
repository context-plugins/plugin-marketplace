<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkSearch — operations

Accessor: `client.bulkSearch` · Source: `src/resources/bulk-search.ts` · 2 operations · Request and error types: namespace `BulkSearch`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### bulkSearch

- **Signature**: `bulkSearch(request: BulkSearch.BulkSearchRequestParams, options?: RequestOptions): ApiPromise<EventStream<string>, BulkSearch.BulkSearchError>`
- **Wire**: `POST /v1/bulk-search`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `EventStream<string>` — `text/event-stream`, resolved at the response headers and read one `string` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` is its plain text, whatever the event is named. The stream ends when the server closes it
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `BulkSearch.BulkSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [409] `ApiErrorModel` · `"apiErrorModel5"` [429] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkSearch.BulkSearchRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `BulkSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `BulkSearchRequest` | `bulkSearchRequestSchema` | `src/models/bulk-search-request.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### downloadBulkSearchCsv

- **Signature**: `downloadBulkSearchCsv(request: BulkSearch.DownloadBulkSearchCsvRequest, options?: RequestOptions): ApiPromise<string, BulkSearch.DownloadBulkSearchCsvError>`
- **Wire**: `GET /v1/bulk-search/{runId}/download.csv`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `BulkSearch.DownloadBulkSearchCsvError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"apiErrorModel4"` [409] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkSearch.DownloadBulkSearchCsvRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `runId` | `path` | `string` | yes |
| `index` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

