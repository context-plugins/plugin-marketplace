<!-- Generated file — do not edit; regenerated with the SDK. -->

# DedicatedChatRender — operations

Accessor: `client.dedicatedChatRender` · Source: `src/resources/dedicated-chat-render.ts` · 1 operation · Request and error types: namespace `DedicatedChatRender`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dedicatedChatRender

- **Signature**: `dedicatedChatRender(request: DedicatedChatRender.DedicatedChatRenderRequest, options?: RequestOptions): ApiPromise<DedicatedChatRenderSuccess, DedicatedChatRender.DedicatedChatRenderError>`
- **Wire**: `POST /dedicated/v1/chat/render`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedChatRenderSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedChatRender.DedicatedChatRenderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedChatRender.DedicatedChatRenderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedChatRenderBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedChatRenderBody` | `dedicatedChatRenderBodySchema` | `src/models/dedicated-chat-render-body.ts` |
| `DedicatedChatRenderSuccess` | `dedicatedChatRenderSuccessSchema` | `src/models/dedicated-chat-render-success.ts` |

