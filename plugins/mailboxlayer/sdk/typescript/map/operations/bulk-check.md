<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkCheck — operations

Accessor: `client.bulkCheck` · Source: `src/resources/bulk-check.ts` · 1 operation · Request and error types: namespace `BulkCheck`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mailboxlayer`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkCheckEmails

- **Signature**: `bulkCheckEmails(request: BulkCheck.BulkCheckEmailsRequest, options?: RequestOptions): ApiPromise<BulkCheckResponse, BulkCheck.BulkCheckEmailsError>`
- **Wire**: `GET /bulk_check`
- **Auth**: `accessKeyQuery`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BulkCheckResponse`
- **Error**: `MailboxlayerError` with `kind: "api"`, an instance of `BulkCheck.BulkCheckEmailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"requestValidationError"` [422] `RequestValidationError` · `"apiErrorModel4"` [429] `ApiErrorModel` · `"apiErrorModel5"` [500] `ApiErrorModel` · `"apiErrorModel6"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkCheck.BulkCheckEmailsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accessKey` | `query` | `access_key` | `string` | yes |
| `emails` | `query` | — | `string` | yes |
| `smtp` | `query` | — | `Smtp` | no |
| `catchAll` | `query` | `catch_all` | `CatchAll` | no |
| `format` | `query` | — | `Format` | no |
| `callback` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Smtp` | `smtpSchema` | `src/models/smtp.ts` |
| `CatchAll` | `catchAllSchema` | `src/models/catch-all.ts` |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BulkCheckResponse` | `bulkCheckResponseSchema` | `src/models/unions/bulk-check-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `RequestValidationError` | `requestValidationErrorSchema` | `src/models/request-validation-error.ts` |

