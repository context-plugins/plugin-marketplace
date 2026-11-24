<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.items` · Source: `src/resources/items.ts` · 1 operation · Request and error types: namespace `Items`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instacart`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### submitItems

- **Signature**: `submitItems(request: Items.SubmitItemsRequest, options?: RequestOptions): ApiPromise<SubmissionResponse, Items.SubmitItemsError>`
- **Wire**: `POST /v2/data_ingestion/catalog/item/submission`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubmissionResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Items.SubmitItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Items.SubmitItemsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemSubmissionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemSubmissionRequest` | `itemSubmissionRequestSchema` | `src/models/item-submission-request.ts` |
| `SubmissionResponse` | `submissionResponseSchema` | `src/models/submission-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

