<!-- Generated file — do not edit; regenerated with the SDK. -->

# Emails — operations

Accessor: `client.emails` · Source: `src/resources/emails.ts` · 2 operations · Request and error types: namespace `Emails`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### emailDisableApiV1EmailsDelete

- **Signature**: `emailDisableApiV1EmailsDelete(request: Emails.EmailDisableApiV1EmailsDeleteRequest, options?: RequestOptions): ApiPromise<StatusOkResponse, Emails.EmailDisableApiV1EmailsDeleteError>`
- **Wire**: `DELETE /api/v1/emails`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusOkResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Emails.EmailDisableApiV1EmailsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Emails.EmailDisableApiV1EmailsDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objType` | `query` | `obj_type` | `EmailObjectType` | yes |
| `objId` | `query` | `obj_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EmailObjectType` | `emailObjectTypeSchema` | `src/models/email-object-type.ts` |
| `StatusOkResponse` | `statusOkResponseSchema` | `src/models/status-ok-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### emailGetOrCreateApiV1EmailsPut

- **Signature**: `emailGetOrCreateApiV1EmailsPut(request: Emails.EmailGetOrCreateApiV1EmailsPutRequest, options?: RequestOptions): ApiPromise<EmailResponse, Emails.EmailGetOrCreateApiV1EmailsPutError>`
- **Wire**: `PUT /api/v1/emails`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EmailResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Emails.EmailGetOrCreateApiV1EmailsPutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Emails.EmailGetOrCreateApiV1EmailsPutRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body4` | `body4Schema` | `src/models/body4.ts` |
| `EmailResponse` | `emailResponseSchema` | `src/models/email-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

