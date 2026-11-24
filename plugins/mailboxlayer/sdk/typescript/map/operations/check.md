<!-- Generated file — do not edit; regenerated with the SDK. -->

# Check — operations

Accessor: `client.check` · Source: `src/resources/check.ts` · 1 operation · Request and error types: namespace `Check`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mailboxlayer`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkEmail

- **Signature**: `checkEmail(request: Check.CheckEmailRequest, options?: RequestOptions): ApiPromise<CheckResponse, Check.CheckEmailError>`
- **Wire**: `GET /check`
- **Auth**: `accessKeyQuery`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckResponse`
- **Error**: `MailboxlayerError` with `kind: "api"`, an instance of `Check.CheckEmailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"requestValidationError"` [422] `RequestValidationError` · `"apiErrorModel4"` [429] `ApiErrorModel` · `"apiErrorModel5"` [500] `ApiErrorModel` · `"apiErrorModel6"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Check.CheckEmailRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accessKey` | `query` | `access_key` | `string` | yes |
| `email` | `query` | — | `string` | yes |
| `smtp` | `query` | — | `Smtp` | no |
| `catchAll` | `query` | `catch_all` | `CatchAll` | no |
| `format` | `query` | — | `Format` | no |
| `callback` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Smtp` | `smtpSchema` | `src/models/smtp.ts` |
| `CatchAll` | `catchAllSchema` | `src/models/catch-all.ts` |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `CheckResponse` | `checkResponseSchema` | `src/models/unions/check-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `RequestValidationError` | `requestValidationErrorSchema` | `src/models/request-validation-error.ts` |

