<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChannelsTwilio — operations

Accessor: `client.channelsTwilio` · Source: `src/resources/channels-twilio.ts` · 3 operations · Request and error types: namespace `ChannelsTwilio`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### channelsTwilioCreate

- **Signature**: `channelsTwilioCreate(request: ChannelsTwilio.ChannelsTwilioCreateRequest, options?: RequestOptions): ApiPromise<Channel, ChannelsTwilio.ChannelsTwilioCreateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/v1/channels/twilio/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Channel`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTwilio.ChannelsTwilioCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTwilio.ChannelsTwilioCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TwilioChannelCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TwilioChannelCreateRequest` | `twilioChannelCreateRequestSchema` | `src/models/twilio-channel-create-request.ts` |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### channelsTwilioGetById

- **Signature**: `channelsTwilioGetById(request: ChannelsTwilio.ChannelsTwilioGetByIdRequest, options?: RequestOptions): ApiPromise<Channel, ChannelsTwilio.ChannelsTwilioGetByIdError>`
- **Wire**: `GET /api/v1/channels/twilio/{channel_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Channel`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTwilio.ChannelsTwilioGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTwilio.ChannelsTwilioGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### channelsTwilioUpdate

- **Signature**: `channelsTwilioUpdate(request: ChannelsTwilio.ChannelsTwilioUpdateRequest, options?: RequestOptions): ApiPromise<Channel, ChannelsTwilio.ChannelsTwilioUpdateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PUT /api/v1/channels/twilio/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Channel`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTwilio.ChannelsTwilioUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTwilio.ChannelsTwilioUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TwilioChannelUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TwilioChannelUpdateRequest` | `twilioChannelUpdateRequestSchema` | `src/models/twilio-channel-update-request.ts` |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

