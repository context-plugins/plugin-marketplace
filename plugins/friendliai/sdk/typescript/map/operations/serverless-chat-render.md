<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServerlessChatRender — operations

Accessor: `client.serverlessChatRender` · Source: `src/resources/serverless-chat-render.ts` · 1 operation · Request and error types: namespace `ServerlessChatRender`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### serverlessChatRender

- **Signature**: `serverlessChatRender(request: ServerlessChatRender.ServerlessChatRenderRequest, options?: RequestOptions): ApiPromise<ServerlessChatRenderSuccess, ServerlessChatRender.ServerlessChatRenderError>`
- **Wire**: `POST /serverless/v1/chat/render`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServerlessChatRenderSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ServerlessChatRender.ServerlessChatRenderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerlessChatRender.ServerlessChatRenderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `ServerlessChatRenderBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ServerlessChatRenderBody` | `serverlessChatRenderBodySchema` | `src/models/serverless-chat-render-body.ts` |
| `ServerlessChatRenderSuccess` | `serverlessChatRenderSuccessSchema` | `src/models/serverless-chat-render-success.ts` |

