<!-- Generated file — do not edit; regenerated with the SDK. -->

# Channels — operations

Accessor: `client.channels` · Source: `src/resources/channels.ts` · 3 operations · Request and error types: namespace `Channels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-dev-ops-guru`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addNotificationChannel

- **Signature**: `addNotificationChannel(request?: Channels.AddNotificationChannelRequest, options?: RequestOptions): ApiPromise<AddNotificationChannelResponse, Channels.AddNotificationChannelError>`
- **Wire**: `PUT /channels`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AddNotificationChannelResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Channels.AddNotificationChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"serviceQuotaExceededException"` [402] `ServiceQuotaExceededException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channels.AddNotificationChannelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ChannelsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsRequest` | `channelsRequestSchema` | `src/models/channels-request.ts` |
| `AddNotificationChannelResponse` | `addNotificationChannelResponseSchema` | `src/models/add-notification-channel-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ServiceQuotaExceededException` | `serviceQuotaExceededExceptionSchema` | `src/models/service-quota-exceeded-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### listNotificationChannels

- **Signature**: `listNotificationChannels(request?: Channels.ListNotificationChannelsRequest, options?: RequestOptions): ApiPromise<ListNotificationChannelsResponse, Channels.ListNotificationChannelsError>`
- **Wire**: `POST /channels`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListNotificationChannelsResponse`
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Channels.ListNotificationChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"internalServerException"` [500] `InternalServerException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channels.ListNotificationChannelsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ChannelsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelsRequest1` | `channelsRequest1Schema` | `src/models/channels-request1.ts` |
| `ListNotificationChannelsResponse` | `listNotificationChannelsResponseSchema` | `src/models/list-notification-channels-response.ts` |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

### removeNotificationChannel

- **Signature**: `removeNotificationChannel(request: Channels.RemoveNotificationChannelRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Channels.RemoveNotificationChannelError>`
- **Wire**: `DELETE /channels/{Id}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AmazonDevOpsGuruError` with `kind: "api"`, an instance of `Channels.RemoveNotificationChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessDeniedException"` [403] `AccessDeniedException` · `"conflictException"` [409] `ConflictException` · `"internalServerException"` [500] `InternalServerException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"throttlingException"` [429] `ThrottlingException` · `"validationException"` [400] `ValidationException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Channels.RemoveNotificationChannelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | `Id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessDeniedException` | `accessDeniedExceptionSchema` | `src/models/access-denied-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalServerException` | `internalServerExceptionSchema` | `src/models/internal-server-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |
| `ThrottlingException` | `throttlingExceptionSchema` | `src/models/throttling-exception.ts` |
| `ValidationException` | `validationExceptionSchema` | `src/models/validation-exception.ts` |

