<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `src/resources/tags.ts` · 6 operations · Request and error types: namespace `Tags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-lex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listTagsForResource

- **Server**: `defaultAmazonLexModelBuildingV2TagsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTagsForResource(request: Tags.ListTagsForResourceRequestParams, options?: RequestOptions): ApiPromise<ListTagsForResourceResponse, Tags.ListTagsForResourceError>`
- **Wire**: `GET /tags/{resourceARN}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTagsForResourceResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Tags.ListTagsForResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.ListTagsForResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resourceArn` | `path` | `resourceARN` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTagsForResourceResponse` | `listTagsForResourceResponseSchema` | `src/models/list-tags-for-resource-response.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listTagsForResource1

- **Server**: `defaultAmazonLexModelBuildingV2TagsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTagsForResource1(request: Tags.ListTagsForResource1Request, options?: RequestOptions): ApiPromise<ModelsLexListTagsForResourceResponse, Tags.ListTagsForResource1Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /tags/{resourceArn}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ModelsLexListTagsForResourceResponse`
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Tags.ListTagsForResource1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.ListTagsForResource1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceArn` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexListTagsForResourceResponse` | `modelsLexListTagsForResourceResponseSchema` | `src/models/models-lex-list-tags-for-resource-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### tagResource

- **Server**: `defaultAmazonLexModelBuildingV2TagsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `tagResource(request: Tags.TagResourceRequestParams, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tags.TagResourceError>`
- **Wire**: `POST /tags/{resourceARN}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Tags.TagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.TagResourceRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resourceArn` | `path` | `resourceARN` | `string` | yes |
| `body` | `body` | — | `TagResourceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagResourceRequest` | `tagResourceRequestSchema` | `src/models/tag-resource-request.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### tagResource1

- **Server**: `defaultAmazonLexModelBuildingV2TagsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `tagResource1(request: Tags.TagResource1Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tags.TagResource1Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /tags/{resourceArn}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Tags.TagResource1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.TagResource1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceArn` | `path` | `string` | yes |
| `body` | `body` | `ModelsLexTagResourceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexTagResourceRequest` | `modelsLexTagResourceRequestSchema` | `src/models/models-lex-tag-resource-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

### untagResource

- **Server**: `defaultAmazonLexModelBuildingV2TagsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `untagResource(request: Tags.UntagResourceRequestParams, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tags.UntagResourceError>`
- **Wire**: `DELETE /tags/{resourceARN}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Tags.UntagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.UntagResourceRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resourceArn` | `path` | `resourceARN` | `string` | yes |
| `body` | `body` | — | `UntagResourceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UntagResourceRequest` | `untagResourceRequestSchema` | `src/models/untag-resource-request.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### untagResource1

- **Server**: `defaultAmazonLexModelBuildingV2TagsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `untagResource1(request: Tags.UntagResource1Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tags.UntagResource1Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /tags/{resourceArn}`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonLexError` with `kind: "api"`, an instance of `Tags.UntagResource1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"notFoundException"` [404] `NotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tags.UntagResource1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceArn` | `path` | `string` | yes |
| `body` | `body` | `ModelsLexUntagResourceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelsLexUntagResourceRequest` | `modelsLexUntagResourceRequestSchema` | `src/models/models-lex-untag-resource-request.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |

