<!-- Generated file — do not edit; regenerated with the SDK. -->

# VoiceGroups — operations

Accessor: `client.voiceGroups` · Source: `src/resources/voice-groups.ts` · 6 operations · Request and error types: namespace `VoiceGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### voiceGroupsCreate

- **Signature**: `voiceGroupsCreate(request: VoiceGroups.VoiceGroupsCreateRequest, options?: RequestOptions): ApiPromise<VoiceGroupResponse, VoiceGroups.VoiceGroupsCreateError>`
- **Wire**: `POST /api/v1/voice_groups/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VoiceGroupResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `VoiceGroups.VoiceGroupsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceGroups.VoiceGroupsCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `VoiceGroupCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoiceGroupCreateRequest` | `voiceGroupCreateRequestSchema` | `src/models/voice-group-create-request.ts` |
| `VoiceGroupResponse` | `voiceGroupResponseSchema` | `src/models/voice-group-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### voiceGroupsCreateVoiceSample

- **Signature**: `voiceGroupsCreateVoiceSample(request: VoiceGroups.VoiceGroupsCreateVoiceSampleRequest, options?: RequestOptions): ApiPromise<BinaryContent, VoiceGroups.VoiceGroupsCreateVoiceSampleError>`
- **Wire**: `POST /api/v1/voice_groups/voices/sample`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `VoiceGroups.VoiceGroupsCreateVoiceSampleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceGroups.VoiceGroupsCreateVoiceSampleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `VoiceSampleCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoiceSampleCreateRequest` | `voiceSampleCreateRequestSchema` | `src/models/voice-sample-create-request.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### voiceGroupsDelete

- **Signature**: `voiceGroupsDelete(request: VoiceGroups.VoiceGroupsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, VoiceGroups.VoiceGroupsDeleteError>`
- **Wire**: `DELETE /api/v1/voice_groups/{voice_group_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `VoiceGroups.VoiceGroupsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceGroups.VoiceGroupsDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `voiceGroupId` | `path` | `voice_group_id` | `number` | yes |
| `reason` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### voiceGroupsGetById

- **Signature**: `voiceGroupsGetById(request: VoiceGroups.VoiceGroupsGetByIdRequest, options?: RequestOptions): ApiPromise<VoiceGroupResponse, VoiceGroups.VoiceGroupsGetByIdError>`
- **Wire**: `GET /api/v1/voice_groups/{voice_group_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VoiceGroupResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `VoiceGroups.VoiceGroupsGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceGroups.VoiceGroupsGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `voiceGroupId` | `path` | `voice_group_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoiceGroupResponse` | `voiceGroupResponseSchema` | `src/models/voice-group-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### voiceGroupsList

- **Signature**: `voiceGroupsList(request: VoiceGroups.VoiceGroupsListRequest, options?: RequestOptions): ApiPromise<ListResponseVoiceGroupResponse, VoiceGroups.VoiceGroupsListError>`
- **Wire**: `GET /api/v1/voice_groups/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseVoiceGroupResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `VoiceGroups.VoiceGroupsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceGroups.VoiceGroupsListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `VoiceGroupProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy315` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields27` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `VoiceGroupProperties` | `voiceGroupPropertiesSchema` | `src/models/voice-group-properties.ts` |
| `OrderBy315` | `orderBy315Schema` | `src/models/unions/order-by315.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields27` | `fields27Schema` | `src/models/unions/fields27.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseVoiceGroupResponse` | `listResponseVoiceGroupResponseSchema` | `src/models/list-response-voice-group-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### voiceGroupsUpdate

- **Signature**: `voiceGroupsUpdate(request: VoiceGroups.VoiceGroupsUpdateRequest, options?: RequestOptions): ApiPromise<VoiceGroupResponse, VoiceGroups.VoiceGroupsUpdateError>`
- **Wire**: `PUT /api/v1/voice_groups/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VoiceGroupResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `VoiceGroups.VoiceGroupsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceGroups.VoiceGroupsUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `VoiceGroupUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoiceGroupUpdateRequest` | `voiceGroupUpdateRequestSchema` | `src/models/voice-group-update-request.ts` |
| `VoiceGroupResponse` | `voiceGroupResponseSchema` | `src/models/voice-group-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

