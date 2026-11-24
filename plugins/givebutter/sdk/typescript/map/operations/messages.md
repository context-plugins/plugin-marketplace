<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.messages` · Source: `src/resources/messages.ts` · 2 operations · Request and error types: namespace `Messages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### messagesIndex

- **Signature**: `messagesIndex(options?: RequestOptions): ApiPromise<V1MessagesResponse, ApiError>`
- **Wire**: `GET /v1/messages`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MessagesResponse`
- **Error**: `GivebutterError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MessagesResponse` | `v1MessagesResponseSchema` | `src/models/v1-messages-response.ts` |

### messagesShow

- **Signature**: `messagesShow(request: Messages.MessagesShowRequest, options?: RequestOptions): ApiPromise<MessageResource, Messages.MessagesShowError>`
- **Wire**: `GET /v1/messages/{message}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessageResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Messages.MessagesShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.MessagesShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `message` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResource` | `messageResourceSchema` | `src/models/message-resource.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

