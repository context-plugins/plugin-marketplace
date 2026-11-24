<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClixClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 11 operations · Request and error types: namespace `ClixClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `ClixClient.ClixExternalServiceCreateEventsRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `clix`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### clixExternalServiceCreateEvents

- **Signature**: `clixExternalServiceCreateEvents(request: ClixClient.ClixExternalServiceCreateEventsRequest, options?: RequestOptions): ApiPromise<V1CreateEventsResponse, ApiError>`
- **Wire**: `POST /api/v1/events`
- **Auth**: all of `projectIdAuth`, `apiKeyAuth` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1CreateEventsResponse`
- **Error**: `ClixError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ClixClient.ClixExternalServiceCreateEventsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1CreateEventsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CreateEventsRequest` | `v1CreateEventsRequestSchema` | `src/models/v1-create-events-request.ts` |
| `V1CreateEventsResponse` | `v1CreateEventsResponseSchema` | `src/models/v1-create-events-response.ts` |

### clixExternalServiceCreateOrUpdateDevices

- **Signature**: `clixExternalServiceCreateOrUpdateDevices(request: ClixClient.ClixExternalServiceCreateOrUpdateDevicesRequest, options?: RequestOptions): ApiPromise<V1CreateOrUpdateDevicesResponse, ApiError>`
- **Wire**: `POST /api/v1/devices`
- **Auth**: all of `projectIdAuth`, `apiKeyAuth` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1CreateOrUpdateDevicesResponse`
- **Error**: `ClixError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ClixClient.ClixExternalServiceCreateOrUpdateDevicesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1CreateOrUpdateDevicesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CreateOrUpdateDevicesRequest` | `v1CreateOrUpdateDevicesRequestSchema` | `src/models/v1-create-or-update-devices-request.ts` |
| `V1CreateOrUpdateDevicesResponse` | `v1CreateOrUpdateDevicesResponseSchema` | `src/models/v1-create-or-update-devices-response.ts` |

### clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId

- **Signature**: `clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId(request: ClixClient.ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest, options?: RequestOptions): ApiPromise<V1CreateOrUpdateUsersPropertiesByDeviceIdResponse, ApiError>`
- **Wire**: `POST /api/v1/devices/{deviceId}/user/properties`
- **Auth**: all of `projectIdAuth`, `apiKeyAuth` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1CreateOrUpdateUsersPropertiesByDeviceIdResponse`
- **Error**: `ClixError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ClixClient.ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `deviceId` | `path` | `string` | yes |
| `body` | `body` | `ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody` | `clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodySchema` | `src/models/clix-external-service-create-or-update-users-properties-by-device-id-body.ts` |
| `V1CreateOrUpdateUsersPropertiesByDeviceIdResponse` | `v1CreateOrUpdateUsersPropertiesByDeviceIdResponseSchema` | `src/models/v1-create-or-update-users-properties-by-device-id-response.ts` |

### clixExternalServiceCreateUser

- **Signature**: `clixExternalServiceCreateUser(request: ClixClient.ClixExternalServiceCreateUserRequest, options?: RequestOptions): ApiPromise<V1CreateUserResponse, ClixClient.ClixExternalServiceCreateUserError>`
- **Wire**: `POST /api/v1/users`
- **Auth**: all of `projectIdAuth`, `apiKeyAuth` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1CreateUserResponse`
- **Error**: `ClixError` with `kind: "api"`, an instance of `ClixClient.ClixExternalServiceCreateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClixClient.ClixExternalServiceCreateUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1CreateUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CreateUserRequest` | `v1CreateUserRequestSchema` | `src/models/v1-create-user-request.ts` |
| `V1CreateUserResponse` | `v1CreateUserResponseSchema` | `src/models/v1-create-user-response.ts` |

### clixExternalServiceDeleteUser

- **Signature**: `clixExternalServiceDeleteUser(request: ClixClient.ClixExternalServiceDeleteUserRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ClixClient.ClixExternalServiceDeleteUserError>`
- **Wire**: `DELETE /api/v1/users/{project_user_id}`
- **Auth**: all of `projectIdAuth`, `apiKeyAuth` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ClixError` with `kind: "api"`, an instance of `ClixClient.ClixExternalServiceDeleteUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClixClient.ClixExternalServiceDeleteUserRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUserId` | `path` | `project_user_id` | `string` | yes |

### clixExternalServiceHealthCheck

- **Signature**: `clixExternalServiceHealthCheck(options?: RequestOptions): ApiPromise<Clixexternalv1HealthCheckResponse, ApiError>`
- **Wire**: `GET /api/v1/health`
- **Auth**: all of `projectIdAuth`, `apiKeyAuth` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Clixexternalv1HealthCheckResponse`
- **Error**: `ClixError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Clixexternalv1HealthCheckResponse` | `clixexternalv1HealthCheckResponseSchema` | `src/models/clixexternalv1-health-check-response.ts` |

### clixExternalServiceSendPushNotifications

- **Signature**: `clixExternalServiceSendPushNotifications(request: ClixClient.ClixExternalServiceSendPushNotificationsRequest, options?: RequestOptions): ApiPromise<V1SendPushNotificationsResponse, ClixClient.ClixExternalServiceSendPushNotificationsError>`
- **Wire**: `POST /api/v1/messages:send`
- **Auth**: all of `projectIdAuth`, `apiKeyAuth` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SendPushNotificationsResponse`
- **Error**: `ClixError` with `kind: "api"`, an instance of `ClixClient.ClixExternalServiceSendPushNotificationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClixClient.ClixExternalServiceSendPushNotificationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1SendPushNotificationsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SendPushNotificationsRequest` | `v1SendPushNotificationsRequestSchema` | `src/models/v1-send-push-notifications-request.ts` |
| `V1SendPushNotificationsResponse` | `v1SendPushNotificationsResponseSchema` | `src/models/v1-send-push-notifications-response.ts` |

### clixExternalServiceSetProjectUserIdForDevice

- **Signature**: `clixExternalServiceSetProjectUserIdForDevice(request: ClixClient.ClixExternalServiceSetProjectUserIdForDeviceRequest, options?: RequestOptions): ApiPromise<V1SetProjectUserIdForDeviceResponse, ApiError>`
- **Wire**: `POST /api/v1/devices/{deviceId}/user/project-user-id`
- **Auth**: all of `projectIdAuth`, `apiKeyAuth` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SetProjectUserIdForDeviceResponse`
- **Error**: `ClixError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ClixClient.ClixExternalServiceSetProjectUserIdForDeviceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `deviceId` | `path` | `string` | yes |
| `body` | `body` | `ClixExternalServiceSetProjectUserIdForDeviceBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClixExternalServiceSetProjectUserIdForDeviceBody` | `clixExternalServiceSetProjectUserIdForDeviceBodySchema` | `src/models/clix-external-service-set-project-user-id-for-device-body.ts` |
| `V1SetProjectUserIdForDeviceResponse` | `v1SetProjectUserIdForDeviceResponseSchema` | `src/models/v1-set-project-user-id-for-device-response.ts` |

### clixExternalServiceStartLiveActivities

- **Signature**: `clixExternalServiceStartLiveActivities(request: ClixClient.ClixExternalServiceStartLiveActivitiesRequest, options?: RequestOptions): ApiPromise<V1StartLiveActivitiesResponse, ClixClient.ClixExternalServiceStartLiveActivitiesError>`
- **Wire**: `POST /api/v1/live-activities:start`
- **Auth**: all of `projectIdAuth`, `apiKeyAuth` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1StartLiveActivitiesResponse`
- **Error**: `ClixError` with `kind: "api"`, an instance of `ClixClient.ClixExternalServiceStartLiveActivitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClixClient.ClixExternalServiceStartLiveActivitiesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1StartLiveActivitiesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1StartLiveActivitiesRequest` | `v1StartLiveActivitiesRequestSchema` | `src/models/v1-start-live-activities-request.ts` |
| `V1StartLiveActivitiesResponse` | `v1StartLiveActivitiesResponseSchema` | `src/models/v1-start-live-activities-response.ts` |

### clixExternalServiceTriggerCampaign

- **Signature**: `clixExternalServiceTriggerCampaign(request: ClixClient.ClixExternalServiceTriggerCampaignRequest, options?: RequestOptions): ApiPromise<V1TriggerCampaignResponse, ClixClient.ClixExternalServiceTriggerCampaignError>`
- **Wire**: `POST /api/v1/campaigns/{campaign_id}:trigger`
- **Auth**: all of `projectIdAuth`, `apiKeyAuth` — both are sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1TriggerCampaignResponse`
- **Error**: `ClixError` with `kind: "api"`, an instance of `ClixClient.ClixExternalServiceTriggerCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClixClient.ClixExternalServiceTriggerCampaignRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | `campaign_id` | `string` | yes |
| `body` | `body` | — | `V1TriggerCampaignRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TriggerCampaignRequest` | `v1TriggerCampaignRequestSchema` | `src/models/v1-trigger-campaign-request.ts` |
| `V1TriggerCampaignResponse` | `v1TriggerCampaignResponseSchema` | `src/models/v1-trigger-campaign-response.ts` |

### clixExternalServiceUpdateUser

- **Signature**: `clixExternalServiceUpdateUser(request: ClixClient.ClixExternalServiceUpdateUserRequest, options?: RequestOptions): ApiPromise<V1UpdateUserResponse, ClixClient.ClixExternalServiceUpdateUserError>`
- **Wire**: `PATCH /api/v1/users/{project_user_id}`
- **Auth**: all of `projectIdAuth`, `apiKeyAuth` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1UpdateUserResponse`
- **Error**: `ClixError` with `kind: "api"`, an instance of `ClixClient.ClixExternalServiceUpdateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `string` · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClixClient.ClixExternalServiceUpdateUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUserId` | `path` | `project_user_id` | `string` | yes |
| `body` | `body` | — | `V1UpdateUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UpdateUserRequest` | `v1UpdateUserRequestSchema` | `src/models/v1-update-user-request.ts` |
| `V1UpdateUserResponse` | `v1UpdateUserResponseSchema` | `src/models/v1-update-user-response.ts` |

