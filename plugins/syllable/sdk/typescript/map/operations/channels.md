<!-- Generated file — do not edit; regenerated with the SDK. -->

# Channels — operations

Accessor: `client.channels` · Source: `src/resources/channels.ts` · 3 operations · Request and error types: namespace `Channels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### channelsCreate

- **Signature**: `channelsCreate(request: Channels.ChannelsCreateRequest, options?: RequestOptions): ApiPromise<Channel, Channels.ChannelsCreateError>`
- **Wire**: `POST /api/v1/channels/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Channel`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Channels.ChannelsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channels.ChannelsCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OrganizationChannelCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationChannelCreateRequest` | `organizationChannelCreateRequestSchema` | `src/models/organization-channel-create-request.ts` |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### channelsList

- **Signature**: `channelsList(request: Channels.ChannelsListRequest, options?: RequestOptions): ApiPromise<ListResponseChannel, Channels.ChannelsListError>`
- **Wire**: `GET /api/v1/channels/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseChannel`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Channels.ChannelsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channels.ChannelsListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `ChannelProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy21` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields2` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `ChannelProperties` | `channelPropertiesSchema` | `src/models/channel-properties.ts` |
| `OrderBy21` | `orderBy21Schema` | `src/models/unions/order-by21.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields2` | `fields2Schema` | `src/models/unions/fields2.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseChannel` | `listResponseChannelSchema` | `src/models/list-response-channel.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### channelsUpdate

- **Signature**: `channelsUpdate(request: Channels.ChannelsUpdateRequest, options?: RequestOptions): ApiPromise<Channel, Channels.ChannelsUpdateError>`
- **Wire**: `PUT /api/v1/channels/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Channel`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Channels.ChannelsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channels.ChannelsUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OrganizationChannelUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationChannelUpdateRequest` | `organizationChannelUpdateRequestSchema` | `src/models/organization-channel-update-request.ts` |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

