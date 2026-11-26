<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screenshot — operations

Accessor: `client.screenshot` · Source: `src/resources/screenshot.ts` · 1 operation · Request and error types: namespace `Screenshot`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `search1-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### screenshot

- **Signature**: `screenshot(request: Screenshot.ScreenshotRequestParams, options?: RequestOptions): ApiPromise<BinaryContent, Screenshot.ScreenshotError>`
- **Wire**: `POST /screenshot`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `Search1ApiError` with `kind: "api"`, an instance of `Screenshot.ScreenshotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [402] `ApiErrorModel` · `"apiErrorModel4"` [403] `ApiErrorModel` · `"apiErrorModel5"` [422] `ApiErrorModel` · `"apiErrorModel6"` [429] `ApiErrorModel` · `"apiErrorModel7"` [500] `ApiErrorModel` · `"apiErrorModel8"` [502] `ApiErrorModel` · `"apiErrorModel9"` [503] `ApiErrorModel` · `"apiErrorModel10"` [504] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Screenshot.ScreenshotRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ScreenshotRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScreenshotRequest` | `screenshotRequestSchema` | `src/models/screenshot-request.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

