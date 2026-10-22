<!-- Generated file — do not edit; regenerated with the SDK. -->

# Directory — operations

Accessor: `client.directory` · Source: `src/resources/directory.ts` · 10 operations · Request and error types: namespace `Directory`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### directoryMemberBulkLoad

- **Signature**: `directoryMemberBulkLoad(request: Directory.DirectoryMemberBulkLoadRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Directory.DirectoryMemberBulkLoadError>`
- **Wire**: `PUT /api/v1/directory_members/upload/`
- **Auth**: `apiKeyHeader`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Directory.DirectoryMemberBulkLoadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error412"` [412] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Directory.DirectoryMemberBulkLoadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `file` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### directoryMemberCreate

- **Signature**: `directoryMemberCreate(request: Directory.DirectoryMemberCreateRequest, options?: RequestOptions): ApiPromise<DirectoryMember, Directory.DirectoryMemberCreateError>`
- **Wire**: `POST /api/v1/directory_members/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DirectoryMember`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Directory.DirectoryMemberCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Directory.DirectoryMemberCreateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `responseFormat` | `query` | `response_format` | `DirectoryResponseFormat1` | no |
| `body` | `body` | — | `DirectoryMemberCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DirectoryResponseFormat1` | `directoryResponseFormat1Schema` | `src/models/directory-response-format1.ts` |
| `DirectoryMemberCreate` | `directoryMemberCreateSchema` | `src/models/directory-member-create.ts` |
| `DirectoryMember` | `directoryMemberSchema` | `src/models/directory-member.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### directoryMemberDelete

- **Signature**: `directoryMemberDelete(request: Directory.DirectoryMemberDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Directory.DirectoryMemberDeleteError>`
- **Wire**: `DELETE /api/v1/directory_members/{member_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Directory.DirectoryMemberDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Directory.DirectoryMemberDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `memberId` | `path` | `member_id` | `number` | yes |
| `comment` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### directoryMemberDownload

- **Signature**: `directoryMemberDownload(request: Directory.DirectoryMemberDownloadRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Directory.DirectoryMemberDownloadError>`
- **Wire**: `GET /api/v1/directory_members/download/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Directory.DirectoryMemberDownloadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Directory.DirectoryMemberDownloadRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `responseFormat` | `query` | `response_format` | `DirectoryResponseFormat1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DirectoryResponseFormat1` | `directoryResponseFormat1Schema` | `src/models/directory-response-format1.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### directoryMemberGetById

- **Signature**: `directoryMemberGetById(request: Directory.DirectoryMemberGetByIdRequest, options?: RequestOptions): ApiPromise<DirectoryMember, Directory.DirectoryMemberGetByIdError>`
- **Wire**: `GET /api/v1/directory_members/{member_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DirectoryMember`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Directory.DirectoryMemberGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Directory.DirectoryMemberGetByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `memberId` | `path` | `member_id` | `number` | yes |
| `responseFormat` | `query` | `response_format` | `DirectoryResponseFormat1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DirectoryResponseFormat1` | `directoryResponseFormat1Schema` | `src/models/directory-response-format1.ts` |
| `DirectoryMember` | `directoryMemberSchema` | `src/models/directory-member.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### directoryMemberHistory

- **Signature**: `directoryMemberHistory(request: Directory.DirectoryMemberHistoryRequest, options?: RequestOptions): ApiPromise<ListResponseDirectoryMemberHistoryResponse, Directory.DirectoryMemberHistoryError>`
- **Wire**: `GET /api/v1/directory_members/{member_id}/history`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDirectoryMemberHistoryResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Directory.DirectoryMemberHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Directory.DirectoryMemberHistoryRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `memberId` | `path` | `member_id` | `number` | yes | — |
| `page` | `query` | — | `number` | no | `0` |
| `limit` | `query` | — | `number` | no | `25` |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1Enum` | no | — |
| `responseFormat` | `query` | `response_format` | `DirectoryResponseFormat1` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderByDirection1Enum` | `orderByDirection1EnumSchema` | `src/models/order-by-direction1-enum.ts` |
| `DirectoryResponseFormat1` | `directoryResponseFormat1Schema` | `src/models/directory-response-format1.ts` |
| `ListResponseDirectoryMemberHistoryResponse` | `listResponseDirectoryMemberHistoryResponseSchema` | `src/models/list-response-directory-member-history-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### directoryMemberList

- **Signature**: `directoryMemberList(request: Directory.DirectoryMemberListRequest, options?: RequestOptions): ApiPromise<ListResponseDirectoryMember, Directory.DirectoryMemberListError>`
- **Wire**: `GET /api/v1/directory_members/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDirectoryMember`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Directory.DirectoryMemberListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1DirectoryMembers400Error1"` [400] `ApiV1DirectoryMembers400Error1` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Directory.DirectoryMemberListRequest` (12):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `includeDeleted` | `query` | `include_deleted` | `boolean` | no | `false` |
| `status` | `query` | — | `Status4` | no | — |
| `responseFormat` | `query` | `response_format` | `DirectoryResponseFormat1` | no | — |
| `page` | `query` | — | `Page25` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `DirectoryMemberProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy3111` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection22` | no | — |
| `fields` | `query` | — | `Fields23` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime29` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime29` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status4` | `status4Schema` | `src/models/unions/status4.ts` |
| `DirectoryResponseFormat1` | `directoryResponseFormat1Schema` | `src/models/directory-response-format1.ts` |
| `Page25` | `page25Schema` | `src/models/unions/page25.ts` |
| `DirectoryMemberProperties` | `directoryMemberPropertiesSchema` | `src/models/directory-member-properties.ts` |
| `OrderBy3111` | `orderBy3111Schema` | `src/models/unions/order-by3111.ts` |
| `OrderByDirection22` | `orderByDirection22Schema` | `src/models/unions/order-by-direction22.ts` |
| `Fields23` | `fields23Schema` | `src/models/unions/fields23.ts` |
| `StartDatetime29` | `startDatetime29Schema` | `src/models/unions/start-datetime29.ts` |
| `EndDatetime29` | `endDatetime29Schema` | `src/models/unions/end-datetime29.ts` |
| `ListResponseDirectoryMember` | `listResponseDirectoryMemberSchema` | `src/models/list-response-directory-member.ts` |
| `ApiV1DirectoryMembers400Error1` | `apiV1DirectoryMembers400Error1Schema` | `src/models/api-v1-directory-members400-error1.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### directoryMemberRestore

- **Signature**: `directoryMemberRestore(request: Directory.DirectoryMemberRestoreRequest, options?: RequestOptions): ApiPromise<DirectoryMember, Directory.DirectoryMemberRestoreError>`
- **Wire**: `PUT /api/v1/directory_members/{member_id}/restore`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DirectoryMember`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Directory.DirectoryMemberRestoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Directory.DirectoryMemberRestoreRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `memberId` | `path` | `member_id` | `number` | yes |
| `responseFormat` | `query` | `response_format` | `DirectoryResponseFormat6` | no |
| `body` | `body` | — | `DirectoryMemberRestore` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DirectoryResponseFormat6` | `directoryResponseFormat6Schema` | `src/models/directory-response-format6.ts` |
| `DirectoryMemberRestore` | `directoryMemberRestoreSchema` | `src/models/directory-member-restore.ts` |
| `DirectoryMember` | `directoryMemberSchema` | `src/models/directory-member.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### directoryMemberTestExtension

- **Signature**: `directoryMemberTestExtension(request: Directory.DirectoryMemberTestExtensionRequest, options?: RequestOptions): ApiPromise<DirectoryMemberTestResponse, Directory.DirectoryMemberTestExtensionError>`
- **Wire**: `GET /api/v1/directory_members/{member_id}/test`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DirectoryMemberTestResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Directory.DirectoryMemberTestExtensionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Directory.DirectoryMemberTestExtensionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `memberId` | `path` | `member_id` | `number` | yes |
| `timestamp` | `query` | — | `string` | yes |
| `languageCode` | `query` | `language_code` | `LanguageCode2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LanguageCode2` | `languageCode2Schema` | `src/models/unions/language-code2.ts` |
| `DirectoryMemberTestResponse` | `directoryMemberTestResponseSchema` | `src/models/directory-member-test-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### directoryMemberUpdate

- **Signature**: `directoryMemberUpdate(request: Directory.DirectoryMemberUpdateRequest, options?: RequestOptions): ApiPromise<DirectoryMember, Directory.DirectoryMemberUpdateError>`
- **Wire**: `PUT /api/v1/directory_members/{member_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DirectoryMember`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Directory.DirectoryMemberUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error412"` [412] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Directory.DirectoryMemberUpdateRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `memberId` | `path` | `member_id` | `number` | yes |
| `responseFormat` | `query` | `response_format` | `DirectoryResponseFormat1` | no |
| `body` | `body` | — | `DirectoryMemberUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DirectoryResponseFormat1` | `directoryResponseFormat1Schema` | `src/models/directory-response-format1.ts` |
| `DirectoryMemberUpdate` | `directoryMemberUpdateSchema` | `src/models/directory-member-update.ts` |
| `DirectoryMember` | `directoryMemberSchema` | `src/models/directory-member.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

