<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChannelsTwilioNumbers — operations

Accessor: `client.channelsTwilioNumbers` · Source: `src/resources/channels-twilio-numbers.ts` · 4 operations · Request and error types: namespace `ChannelsTwilioNumbers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### channelsTwilioNumbersA2PComplianceCheck

- **Signature**: `channelsTwilioNumbersA2PComplianceCheck(request: ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckRequest, options?: RequestOptions): ApiPromise<A2PMessagingPathCheckResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckError>`
- **Wire**: `POST /api/v1/channels/twilio/{channel_id}/numbers/verify-a2p-compliance`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `A2PMessagingPathCheckResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `body` | `body` | — | `A2PMessagingPathCheckRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `A2PMessagingPathCheckRequest` | `a2PMessagingPathCheckRequestSchema` | `src/models/a2-pmessaging-path-check-request.ts` |
| `A2PMessagingPathCheckResponse` | `a2PMessagingPathCheckResponseSchema` | `src/models/a2-pmessaging-path-check-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### channelsTwilioNumbersAdd

- **Signature**: `channelsTwilioNumbersAdd(request: ChannelsTwilioNumbers.ChannelsTwilioNumbersAddRequest, options?: RequestOptions): ApiPromise<TwilioNumberAddResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersAddError>`
- **Wire**: `POST /api/v1/channels/twilio/{channel_id}/numbers`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TwilioNumberAddResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTwilioNumbers.ChannelsTwilioNumbersAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTwilioNumbers.ChannelsTwilioNumbersAddRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `body` | `body` | — | `TwilioNumberAddRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TwilioNumberAddRequest` | `twilioNumberAddRequestSchema` | `src/models/twilio-number-add-request.ts` |
| `TwilioNumberAddResponse` | `twilioNumberAddResponseSchema` | `src/models/twilio-number-add-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### channelsTwilioNumbersList

- **Signature**: `channelsTwilioNumbersList(request: ChannelsTwilioNumbers.ChannelsTwilioNumbersListRequest, options?: RequestOptions): ApiPromise<TwilioListNumbersResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersListError>`
- **Wire**: `GET /api/v1/channels/twilio/{channel_id}/numbers`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TwilioListNumbersResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTwilioNumbers.ChannelsTwilioNumbersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTwilioNumbers.ChannelsTwilioNumbersListRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TwilioListNumbersResponse` | `twilioListNumbersResponseSchema` | `src/models/twilio-list-numbers-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### channelsTwilioNumbersUpdate

- **Signature**: `channelsTwilioNumbersUpdate(request: ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateRequest, options?: RequestOptions): ApiPromise<TwilioNumberUpdateResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateError>`
- **Wire**: `PUT /api/v1/channels/twilio/{channel_id}/numbers`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TwilioNumberUpdateResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `number` | yes |
| `body` | `body` | — | `TwilioNumberUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TwilioNumberUpdateRequest` | `twilioNumberUpdateRequestSchema` | `src/models/twilio-number-update-request.ts` |
| `TwilioNumberUpdateResponse` | `twilioNumberUpdateResponseSchema` | `src/models/twilio-number-update-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

