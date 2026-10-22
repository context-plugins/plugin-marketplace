<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChannelsTargets — operations

Accessor: `client.channelsTargets` · Source: `src/resources/channels-targets.ts` · 6 operations · Request and error types: namespace `ChannelsTargets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### availableTargets

- **Signature**: `availableTargets(request: ChannelsTargets.AvailableTargetsRequest, options?: RequestOptions): ApiPromise<ListResponseAvailableTarget, ChannelsTargets.AvailableTargetsError>`
- **Wire**: `GET /api/v1/channels/available-targets`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseAvailableTarget`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTargets.AvailableTargetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTargets.AvailableTargetsRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `AvailableTargetProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy39` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields21` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `AvailableTargetProperties` | `availableTargetPropertiesSchema` | `src/models/available-target-properties.ts` |
| `OrderBy39` | `orderBy39Schema` | `src/models/unions/order-by39.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields21` | `fields21Schema` | `src/models/unions/fields21.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseAvailableTarget` | `listResponseAvailableTargetSchema` | `src/models/list-response-available-target.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### channelTargetsCreate

- **Signature**: `channelTargetsCreate(request: ChannelsTargets.ChannelTargetsCreateRequest, options?: RequestOptions): ApiPromise<ChannelTargetResponse, ChannelsTargets.ChannelTargetsCreateError>`
- **Wire**: `POST /api/v1/channels/{channel_id}/targets`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChannelTargetResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTargets.ChannelTargetsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTargets.ChannelTargetsCreateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `body` | `body` | — | `ChannelTargetCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelTargetCreateRequest` | `channelTargetCreateRequestSchema` | `src/models/channel-target-create-request.ts` |
| `ChannelTargetResponse` | `channelTargetResponseSchema` | `src/models/channel-target-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### channelTargetsDelete

- **Signature**: `channelTargetsDelete(request: ChannelsTargets.ChannelTargetsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ChannelsTargets.ChannelTargetsDeleteError>`
- **Wire**: `DELETE /api/v1/channels/{channel_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTargets.ChannelTargetsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTargets.ChannelTargetsDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `string` | yes |
| `targetId` | `query` | `target_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### channelTargetsGetById

- **Signature**: `channelTargetsGetById(request: ChannelsTargets.ChannelTargetsGetByIdRequest, options?: RequestOptions): ApiPromise<ChannelTargetResponse, ChannelsTargets.ChannelTargetsGetByIdError>`
- **Wire**: `GET /api/v1/channels/{channel_id}/targets/{target_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChannelTargetResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTargets.ChannelTargetsGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTargets.ChannelTargetsGetByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `targetId` | `path` | `target_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelTargetResponse` | `channelTargetResponseSchema` | `src/models/channel-target-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### channelTargetsList

- **Signature**: `channelTargetsList(request: ChannelsTargets.ChannelTargetsListRequest, options?: RequestOptions): ApiPromise<ListResponseChannelTargetResponse, ChannelsTargets.ChannelTargetsListError>`
- **Wire**: `GET /api/v1/channels/targets`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseChannelTargetResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTargets.ChannelTargetsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTargets.ChannelTargetsListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `ChannelTargetProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy310` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields22` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `ChannelTargetProperties` | `channelTargetPropertiesSchema` | `src/models/channel-target-properties.ts` |
| `OrderBy310` | `orderBy310Schema` | `src/models/unions/order-by310.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields22` | `fields22Schema` | `src/models/unions/fields22.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseChannelTargetResponse` | `listResponseChannelTargetResponseSchema` | `src/models/list-response-channel-target-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### channelTargetsUpdate

- **Signature**: `channelTargetsUpdate(request: ChannelsTargets.ChannelTargetsUpdateRequest, options?: RequestOptions): ApiPromise<ChannelTargetResponse, ChannelsTargets.ChannelTargetsUpdateError>`
- **Wire**: `PUT /api/v1/channels/{channel_id}/targets/{target_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChannelTargetResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTargets.ChannelTargetsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTargets.ChannelTargetsUpdateRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `targetId` | `path` | `target_id` | `number` | yes |
| `body` | `body` | — | `ChannelTargetUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelTargetUpdateRequest` | `channelTargetUpdateRequestSchema` | `src/models/channel-target-update-request.ts` |
| `ChannelTargetResponse` | `channelTargetResponseSchema` | `src/models/channel-target-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

