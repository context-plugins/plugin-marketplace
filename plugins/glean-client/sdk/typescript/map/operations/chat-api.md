<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChatApi — operations

Accessor: `client.chatApi` · Source: `src/resources/chat-api.ts` · 10 operations · Request and error types: namespace `ChatApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### chat

- **Signature**: `chat(request: ChatApi.ChatRequestParams, options?: RequestOptions): ApiPromise<ChatResponse, ChatApi.ChatError>`
- **Wire**: `POST /rest/api/v1/chat`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `ChatApi.ChatError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChatApi.ChatRequestParams` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `ChatRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChatRequest` | `chatRequestSchema` | `src/models/chat-request.ts` |
| `ChatResponse` | `chatResponseSchema` | `src/models/chat-response.ts` |

### deleteallchats

- **Signature**: `deleteallchats(request: ChatApi.DeleteallchatsRequest, options?: RequestOptions): ApiPromise<undefined, ChatApi.DeleteallchatsError>`
- **Wire**: `POST /rest/api/v1/deleteallchats`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `ChatApi.DeleteallchatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChatApi.DeleteallchatsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |

### deletechatfiles

- **Signature**: `deletechatfiles(request: ChatApi.DeletechatfilesRequest, options?: RequestOptions): ApiPromise<undefined, ChatApi.DeletechatfilesError>`
- **Wire**: `POST /rest/api/v1/deletechatfiles`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `ChatApi.DeletechatfilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChatApi.DeletechatfilesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `DeleteChatFilesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteChatFilesRequest` | `deleteChatFilesRequestSchema` | `src/models/delete-chat-files-request.ts` |

### deletechats

- **Signature**: `deletechats(request: ChatApi.DeletechatsRequest, options?: RequestOptions): ApiPromise<undefined, ChatApi.DeletechatsError>`
- **Wire**: `POST /rest/api/v1/deletechats`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `ChatApi.DeletechatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChatApi.DeletechatsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `DeleteChatsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteChatsRequest` | `deleteChatsRequestSchema` | `src/models/delete-chats-request.ts` |

### getChatFile

- **Signature**: `getChatFile(request: ChatApi.GetChatFileRequest, options?: RequestOptions): ApiPromise<BinaryContent, ChatApi.GetChatFileError>`
- **Wire**: `GET /rest/api/v1/chat-files/{fileId}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `ChatApi.GetChatFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChatApi.GetChatFileRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `fileId` | `path` | `string` | yes |
| `preview` | `query` | `boolean` | no |

### getchat

- **Signature**: `getchat(request: ChatApi.GetchatRequest, options?: RequestOptions): ApiPromise<GetChatResponse, ChatApi.GetchatError>`
- **Wire**: `POST /rest/api/v1/getchat`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetChatResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `ChatApi.GetchatError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"accessRequestPermissionDeniedResponse"` [403] `AccessRequestPermissionDeniedResponse` · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChatApi.GetchatRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `GetChatRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetChatRequest` | `getChatRequestSchema` | `src/models/get-chat-request.ts` |
| `GetChatResponse` | `getChatResponseSchema` | `src/models/get-chat-response.ts` |
| `AccessRequestPermissionDeniedResponse` | `accessRequestPermissionDeniedResponseSchema` | `src/models/access-request-permission-denied-response.ts` |

### getchatapplication

- **Signature**: `getchatapplication(request: ChatApi.GetchatapplicationRequest, options?: RequestOptions): ApiPromise<GetChatApplicationResponse, ChatApi.GetchatapplicationError>`
- **Wire**: `POST /rest/api/v1/getchatapplication`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetChatApplicationResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `ChatApi.GetchatapplicationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChatApi.GetchatapplicationRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `GetChatApplicationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetChatApplicationRequest` | `getChatApplicationRequestSchema` | `src/models/get-chat-application-request.ts` |
| `GetChatApplicationResponse` | `getChatApplicationResponseSchema` | `src/models/get-chat-application-response.ts` |

### getchatfiles

- **Signature**: `getchatfiles(request: ChatApi.GetchatfilesRequest, options?: RequestOptions): ApiPromise<GetChatFilesResponse, ChatApi.GetchatfilesError>`
- **Wire**: `POST /rest/api/v1/getchatfiles`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetChatFilesResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `ChatApi.GetchatfilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChatApi.GetchatfilesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `GetChatFilesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetChatFilesRequest` | `getChatFilesRequestSchema` | `src/models/get-chat-files-request.ts` |
| `GetChatFilesResponse` | `getChatFilesResponseSchema` | `src/models/get-chat-files-response.ts` |

### listchats

- **Signature**: `listchats(request: ChatApi.ListchatsRequest, options?: RequestOptions): ApiPromise<ListChatsResponse, ChatApi.ListchatsError>`
- **Wire**: `POST /rest/api/v1/listchats`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListChatsResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `ChatApi.ListchatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChatApi.ListchatsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListChatsResponse` | `listChatsResponseSchema` | `src/models/list-chats-response.ts` |

### uploadchatfiles

- **Signature**: `uploadchatfiles(request: ChatApi.UploadchatfilesRequest, options?: RequestOptions): ApiPromise<UploadChatFilesResponse, ChatApi.UploadchatfilesError>`
- **Wire**: `POST /rest/api/v1/uploadchatfiles`
- **Auth**: `apiToken`
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadChatFilesResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `ChatApi.UploadchatfilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChatApi.UploadchatfilesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `timezoneOffset` | `query` | — | `number` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `files` | `form` | — | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadChatFilesResponse` | `uploadChatFilesResponseSchema` | `src/models/upload-chat-files-response.ts` |

