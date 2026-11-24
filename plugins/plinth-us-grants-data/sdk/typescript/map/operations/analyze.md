<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analyze — operations

Accessor: `client.analyze` · Source: `src/resources/analyze.ts` · 1 operation · Request and error types: namespace `Analyze`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `plinth-us-grants-data`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### askQuestion

- **Signature**: `askQuestion(options?: RequestOptions): ApiPromise<Record<string, unknown>, Analyze.AskQuestionError>`
- **Wire**: `POST /api/analyze`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Analyze.AskQuestionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

