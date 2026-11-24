<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.messages` · Source: `src/resources/messages.ts` · 1 operation · Request and error types: namespace `Messages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `boomi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### publishMessages

- **Server**: `defaultBoomiEventStreamsRestMessagesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `publishMessages(request: Messages.PublishMessagesRequest, options?: RequestOptions): ApiPromise<PublishResponse, Messages.PublishMessagesError>`
- **Wire**: `POST /`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublishResponse`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Messages.PublishMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseBoomiEventStreamsRestMessagesApi"` [400] `ErrorResponseBoomiEventStreamsRestMessagesApi` · `"errorResponseBoomiEventStreamsRestMessagesApi2"` [401] `ErrorResponseBoomiEventStreamsRestMessagesApi` · `"error413"` [413] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.PublishMessagesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Request` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Request` | `requestSchema` | `src/models/unions/request.ts` |
| `PublishResponse` | `publishResponseSchema` | `src/models/publish-response.ts` |
| `ErrorResponseBoomiEventStreamsRestMessagesApi` | `errorResponseBoomiEventStreamsRestMessagesApiSchema` | `src/models/error-response-boomi-event-streams-rest-messages-api.ts` |

