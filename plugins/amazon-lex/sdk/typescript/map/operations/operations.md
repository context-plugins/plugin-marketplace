<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `src/resources/operations.ts` · 6 operations · Request and error types: namespace `Operations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteSlotTypeVersion

- **Server**: `defaultAmazonLexModelBuildingV2OperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSlotTypeVersion(request: Operations.DeleteSlotTypeVersionRequestParams, options?: RequestOptions): ApiPromise<string, Operations.DeleteSlotTypeVersionError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /slottypes/{name}/version/{version}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Operations.DeleteSlotTypeVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DeleteSlotTypeVersionRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |
| `version` | `path` | `string` | yes |
| `body` | `body` | `DeleteSlotTypeVersionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteSlotTypeVersionRequest` | `deleteSlotTypeVersionRequestSchema` | `src/models/delete-slot-type-version-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getIntents

- **Server**: `defaultAmazonLexModelBuildingV2OperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getIntents(options?: RequestOptions): ApiPromise<GetIntentsResponse, Operations.GetIntentsError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /intents`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetIntentsResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Operations.GetIntentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetIntentsResponse` | `getIntentsResponseSchema` | `src/models/get-intents-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getSlotTypes

- **Server**: `defaultAmazonLexModelBuildingV2OperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSlotTypes(options?: RequestOptions): ApiPromise<GetSlotTypesResponse, Operations.GetSlotTypesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /slottypes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetSlotTypesResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Operations.GetSlotTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetSlotTypesResponse` | `getSlotTypesResponseSchema` | `src/models/get-slot-types-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### getUtterancesView

- **Server**: `defaultAmazonLexModelBuildingV2OperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getUtterancesView(request: Operations.GetUtterancesViewRequestParams, options?: RequestOptions): ApiPromise<GetUtterancesViewResponse, Operations.GetUtterancesViewError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /bots/{botName}/utterances?view=aggregation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetUtterancesViewResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Operations.GetUtterancesViewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.GetUtterancesViewRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetUtterancesViewResponse` | `getUtterancesViewResponseSchema` | `src/models/get-utterances-view-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |

### postContent

- **Server**: `defaultAmazonLexModelBuildingV2OperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postContent(request: Operations.PostContentRequestParams, options?: RequestOptions): ApiPromise<PostContentResponse, Operations.PostContentError>`
- **Wire**: `POST /bot/{botName}/alias/{botAlias}/user/{userId}/content`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PostContentResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Operations.PostContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"runtimeLexBadGatewayException"` [502] `RuntimeLexBadGatewayException` · `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"runtimeLexDependencyFailedException"` [424] `RuntimeLexDependencyFailedException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"loopDetectedException"` [508] `LoopDetectedException` · `"notAcceptableException"` [406] `NotAcceptableException` · `"notFoundException"` [404] `NotFoundException` · `"requestTimeoutException"` [408] `RequestTimeoutException` · `"unsupportedMediaTypeException"` [415] `UnsupportedMediaTypeException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.PostContentRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `botAlias` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `PostContentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostContentRequest` | `postContentRequestSchema` | `src/models/post-content-request.ts` |
| `PostContentResponse` | `postContentResponseSchema` | `src/models/post-content-response.ts` |
| `RuntimeLexBadGatewayException` | `runtimeLexBadGatewayExceptionSchema` | `src/models/runtime-lex-bad-gateway-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `RuntimeLexDependencyFailedException` | `runtimeLexDependencyFailedExceptionSchema` | `src/models/runtime-lex-dependency-failed-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `LoopDetectedException` | `loopDetectedExceptionSchema` | `src/models/loop-detected-exception.ts` |
| `NotAcceptableException` | `notAcceptableExceptionSchema` | `src/models/not-acceptable-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `RequestTimeoutException` | `requestTimeoutExceptionSchema` | `src/models/request-timeout-exception.ts` |
| `UnsupportedMediaTypeException` | `unsupportedMediaTypeExceptionSchema` | `src/models/unsupported-media-type-exception.ts` |

### postText

- **Server**: `defaultAmazonLexModelBuildingV2OperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postText(request: Operations.PostTextRequestParams, options?: RequestOptions): ApiPromise<PostTextResponse, Operations.PostTextError>`
- **Wire**: `POST /bot/{botName}/alias/{botAlias}/user/{userId}/text`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PostTextResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Operations.PostTextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"runtimeLexBadGatewayException"` [502] `RuntimeLexBadGatewayException` · `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"runtimeLexDependencyFailedException"` [424] `RuntimeLexDependencyFailedException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"loopDetectedException"` [508] `LoopDetectedException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.PostTextRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `botName` | `path` | `string` | yes |
| `botAlias` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `PostTextRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostTextRequest` | `postTextRequestSchema` | `src/models/post-text-request.ts` |
| `PostTextResponse` | `postTextResponseSchema` | `src/models/post-text-response.ts` |
| `RuntimeLexBadGatewayException` | `runtimeLexBadGatewayExceptionSchema` | `src/models/runtime-lex-bad-gateway-exception.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `RuntimeLexDependencyFailedException` | `runtimeLexDependencyFailedExceptionSchema` | `src/models/runtime-lex-dependency-failed-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `LoopDetectedException` | `loopDetectedExceptionSchema` | `src/models/loop-detected-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

