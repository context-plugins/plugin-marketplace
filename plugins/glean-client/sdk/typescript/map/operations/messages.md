<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.messages` · Source: `src/resources/messages.ts` · 1 operation · Request and error types: namespace `Messages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### messages

- **Signature**: `messages(request: Messages.MessagesRequestParams, options?: RequestOptions): ApiPromise<MessagesResponse, Messages.MessagesError>`
- **Wire**: `POST /rest/api/v1/messages`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessagesResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Messages.MessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.MessagesRequestParams` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `MessagesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagesRequest` | `messagesRequestSchema` | `src/models/messages-request.ts` |
| `MessagesResponse` | `messagesResponseSchema` | `src/models/messages-response.ts` |

