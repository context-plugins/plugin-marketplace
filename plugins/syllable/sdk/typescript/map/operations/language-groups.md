<!-- Generated file — do not edit; regenerated with the SDK. -->

# LanguageGroups — operations

Accessor: `client.languageGroups` · Source: `src/resources/language-groups.ts` · 6 operations · Request and error types: namespace `LanguageGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### languageGroupsCreate

- **Signature**: `languageGroupsCreate(request: LanguageGroups.LanguageGroupsCreateRequest, options?: RequestOptions): ApiPromise<LanguageGroupResponse, LanguageGroups.LanguageGroupsCreateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/v1/language_groups/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LanguageGroupResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `LanguageGroups.LanguageGroupsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LanguageGroups.LanguageGroupsCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LanguageGroupCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LanguageGroupCreateRequest` | `languageGroupCreateRequestSchema` | `src/models/language-group-create-request.ts` |
| `LanguageGroupResponse` | `languageGroupResponseSchema` | `src/models/language-group-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### languageGroupsCreateVoiceSample

- **Signature**: `languageGroupsCreateVoiceSample(request: LanguageGroups.LanguageGroupsCreateVoiceSampleRequest, options?: RequestOptions): ApiPromise<BinaryContent, LanguageGroups.LanguageGroupsCreateVoiceSampleError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/v1/language_groups/voices/sample`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `LanguageGroups.LanguageGroupsCreateVoiceSampleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LanguageGroups.LanguageGroupsCreateVoiceSampleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LanguageSampleCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LanguageSampleCreateRequest` | `languageSampleCreateRequestSchema` | `src/models/language-sample-create-request.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### languageGroupsDelete

- **Signature**: `languageGroupsDelete(request: LanguageGroups.LanguageGroupsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, LanguageGroups.LanguageGroupsDeleteError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /api/v1/language_groups/{language_group_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `LanguageGroups.LanguageGroupsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LanguageGroups.LanguageGroupsDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `languageGroupId` | `path` | `language_group_id` | `number` | yes |
| `reason` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### languageGroupsGetById

- **Signature**: `languageGroupsGetById(request: LanguageGroups.LanguageGroupsGetByIdRequest, options?: RequestOptions): ApiPromise<LanguageGroupResponse, LanguageGroups.LanguageGroupsGetByIdError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v1/language_groups/{language_group_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LanguageGroupResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `LanguageGroups.LanguageGroupsGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LanguageGroups.LanguageGroupsGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `languageGroupId` | `path` | `language_group_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LanguageGroupResponse` | `languageGroupResponseSchema` | `src/models/language-group-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### languageGroupsList

- **Signature**: `languageGroupsList(request: LanguageGroups.LanguageGroupsListRequest, options?: RequestOptions): ApiPromise<ListResponseLanguageGroupResponse, LanguageGroups.LanguageGroupsListError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v1/language_groups/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseLanguageGroupResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `LanguageGroups.LanguageGroupsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LanguageGroups.LanguageGroupsListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `LanguageGroupProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy315` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields27` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `LanguageGroupProperties` | `languageGroupPropertiesSchema` | `src/models/language-group-properties.ts` |
| `OrderBy315` | `orderBy315Schema` | `src/models/unions/order-by315.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields27` | `fields27Schema` | `src/models/unions/fields27.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseLanguageGroupResponse` | `listResponseLanguageGroupResponseSchema` | `src/models/list-response-language-group-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### languageGroupsUpdate

- **Signature**: `languageGroupsUpdate(request: LanguageGroups.LanguageGroupsUpdateRequest, options?: RequestOptions): ApiPromise<LanguageGroupResponse, LanguageGroups.LanguageGroupsUpdateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PUT /api/v1/language_groups/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LanguageGroupResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `LanguageGroups.LanguageGroupsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LanguageGroups.LanguageGroupsUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LanguageGroupUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LanguageGroupUpdateRequest` | `languageGroupUpdateRequestSchema` | `src/models/language-group-update-request.ts` |
| `LanguageGroupResponse` | `languageGroupResponseSchema` | `src/models/language-group-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

