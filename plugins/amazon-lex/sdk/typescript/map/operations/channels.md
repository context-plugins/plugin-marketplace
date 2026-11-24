<!-- Generated file — do not edit; regenerated with the SDK. -->

# Channels — operations

Accessor: `client.channels` · Source: `src/resources/channels.ts` · 3 operations · Request and error types: namespace `Channels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBotChannelAssociation

- **Signature**: `deleteBotChannelAssociation(request: Channels.DeleteBotChannelAssociationRequestParams, options?: RequestOptions): ApiPromise<string, Channels.DeleteBotChannelAssociationError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /bots/{botName}/aliases/{botAlias}/channels/{name}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Channels.DeleteBotChannelAssociationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channels.DeleteBotChannelAssociationRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `botAlias` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |
| `body` | `body` | `DeleteBotChannelAssociationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBotChannelAssociationRequest` | `deleteBotChannelAssociationRequestSchema` | `src/models/delete-bot-channel-association-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getBotChannelAssociation

- **Signature**: `getBotChannelAssociation(request: Channels.GetBotChannelAssociationRequestParams, options?: RequestOptions): ApiPromise<GetBotChannelAssociationResponse, Channels.GetBotChannelAssociationError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /bots/{botName}/aliases/{botAlias}/channels/{name}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBotChannelAssociationResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Channels.GetBotChannelAssociationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channels.GetBotChannelAssociationRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `botAlias` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBotChannelAssociationResponse` | `getBotChannelAssociationResponseSchema` | `src/models/get-bot-channel-association-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getBotChannelAssociations

- **Signature**: `getBotChannelAssociations(request: Channels.GetBotChannelAssociationsRequestParams, options?: RequestOptions): ApiPromise<GetBotChannelAssociationsResponse, Channels.GetBotChannelAssociationsError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /bots/{botName}/aliases/{botAlias}/channels`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBotChannelAssociationsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Channels.GetBotChannelAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channels.GetBotChannelAssociationsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `botAlias` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBotChannelAssociationsResponse` | `getBotChannelAssociationsResponseSchema` | `src/models/get-bot-channel-associations-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |

