# Reference

> Source: [ClixClient](src/client.ts)

<details>
<summary><code>clixExternalServiceCreateEvents(request: ClixClient.ClixExternalServiceCreateEventsRequest, options?: RequestOptions): ApiPromise&lt;V1CreateEventsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clixExternalServiceCreateEvents({ body: {} });
  // TODO: Handle 'response' of type V1CreateEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clixExternalServiceCreateEvents({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CreateEventsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1CreateEventsRequest](src/models/v1-create-events-request.ts)</code> | Request body containing the event details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clixExternalServiceCreateEvents(request)`

- **OnSuccess**: <code>[V1CreateEventsResponse](src/models/v1-create-events-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.clixExternalServiceCreateEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CreateEventsResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1CreateEventsResponse](src/models/v1-create-events-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ClixError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clixExternalServiceCreateOrUpdateDevices(request: ClixClient.ClixExternalServiceCreateOrUpdateDevicesRequest, options?: RequestOptions): ApiPromise&lt;V1CreateOrUpdateDevicesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clixExternalServiceCreateOrUpdateDevices({ body: {} });
  // TODO: Handle 'response' of type V1CreateOrUpdateDevicesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clixExternalServiceCreateOrUpdateDevices({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CreateOrUpdateDevicesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1CreateOrUpdateDevicesRequest](src/models/v1-create-or-update-devices-request.ts)</code> | Request body containing device information. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clixExternalServiceCreateOrUpdateDevices(request)`

- **OnSuccess**: <code>[V1CreateOrUpdateDevicesResponse](src/models/v1-create-or-update-devices-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.clixExternalServiceCreateOrUpdateDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CreateOrUpdateDevicesResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1CreateOrUpdateDevicesResponse](src/models/v1-create-or-update-devices-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ClixError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId(request: ClixClient.ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest, options?: RequestOptions): ApiPromise&lt;V1CreateOrUpdateUsersPropertiesByDeviceIdResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId({
    deviceId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type V1CreateOrUpdateUsersPropertiesByDeviceIdResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId({ deviceId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CreateOrUpdateUsersPropertiesByDeviceIdResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody](src/models/clix-external-service-create-or-update-users-properties-by-device-id-body.ts)</code> | Request body containing user properties to create or update. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId(request)`

- **OnSuccess**: <code>[V1CreateOrUpdateUsersPropertiesByDeviceIdResponse](src/models/v1-create-or-update-users-properties-by-device-id-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CreateOrUpdateUsersPropertiesByDeviceIdResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1CreateOrUpdateUsersPropertiesByDeviceIdResponse](src/models/v1-create-or-update-users-properties-by-device-id-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ClixError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clixExternalServiceCreateUser(request: ClixClient.ClixExternalServiceCreateUserRequest, options?: RequestOptions): ApiPromise&lt;V1CreateUserResponse, ClixClient.ClixExternalServiceCreateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new user with the specified project_user_id

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clixExternalServiceCreateUser({
    body: { projectUserId: "some example string" },
  });
  // TODO: Handle 'response' of type V1CreateUserResponse
} catch (err) {
  // TODO: Handle 'err' of type ClixClient.ClixExternalServiceCreateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .clixExternalServiceCreateUser({ body: { projectUserId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CreateUserResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1CreateUserRequest](src/models/v1-create-user-request.ts)</code> | User data to create |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clixExternalServiceCreateUser(request)`

- **OnSuccess**: <code>[V1CreateUserResponse](src/models/v1-create-user-response.ts)</code>
- **OnError**: throws <code>[ClixClient.ClixExternalServiceCreateUserError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clixExternalServiceCreateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CreateUserResponse, ClixClient.ClixExternalServiceCreateUserError&gt;</code>, with `result.value` of type <code>[V1CreateUserResponse](src/models/v1-create-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ClixError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clixExternalServiceDeleteUser(request: ClixClient.ClixExternalServiceDeleteUserRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ClixClient.ClixExternalServiceDeleteUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a user and all associated data

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clixExternalServiceDeleteUser({ projectUserId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ClixClient.ClixExternalServiceDeleteUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .clixExternalServiceDeleteUser({ projectUserId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectUserId</code> | <code>string</code> | The unique identifier of the user to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clixExternalServiceDeleteUser(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ClixClient.ClixExternalServiceDeleteUserError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clixExternalServiceDeleteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ClixClient.ClixExternalServiceDeleteUserError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ClixError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clixExternalServiceHealthCheck(options?: RequestOptions): ApiPromise&lt;Clixexternalv1HealthCheckResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clixExternalServiceHealthCheck();
  // TODO: Handle 'response' of type Clixexternalv1HealthCheckResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clixExternalServiceHealthCheck().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Clixexternalv1HealthCheckResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clixExternalServiceHealthCheck()`

- **OnSuccess**: <code>[Clixexternalv1HealthCheckResponse](src/models/clixexternalv1-health-check-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.clixExternalServiceHealthCheck().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Clixexternalv1HealthCheckResponse, ApiError&gt;</code>, with `result.value` of type <code>[Clixexternalv1HealthCheckResponse](src/models/clixexternalv1-health-check-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ClixError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clixExternalServiceSendPushNotifications(request: ClixClient.ClixExternalServiceSendPushNotificationsRequest, options?: RequestOptions): ApiPromise&lt;V1SendPushNotificationsResponse, ClixClient.ClixExternalServiceSendPushNotificationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint sends push notifications to one or more user devices.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clixExternalServiceSendPushNotifications({ body: {} });
  // TODO: Handle 'response' of type V1SendPushNotificationsResponse
} catch (err) {
  // TODO: Handle 'err' of type ClixClient.ClixExternalServiceSendPushNotificationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clixExternalServiceSendPushNotifications({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SendPushNotificationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SendPushNotificationsRequest](src/models/v1-send-push-notifications-request.ts)</code> | Request body containing the push notifications to send. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clixExternalServiceSendPushNotifications(request)`

- **OnSuccess**: <code>[V1SendPushNotificationsResponse](src/models/v1-send-push-notifications-response.ts)</code>
- **OnError**: throws <code>[ClixClient.ClixExternalServiceSendPushNotificationsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clixExternalServiceSendPushNotifications(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SendPushNotificationsResponse, ClixClient.ClixExternalServiceSendPushNotificationsError&gt;</code>, with `result.value` of type <code>[V1SendPushNotificationsResponse](src/models/v1-send-push-notifications-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ClixError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clixExternalServiceSetProjectUserIdForDevice(request: ClixClient.ClixExternalServiceSetProjectUserIdForDeviceRequest, options?: RequestOptions): ApiPromise&lt;V1SetProjectUserIdForDeviceResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clixExternalServiceSetProjectUserIdForDevice({
    deviceId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type V1SetProjectUserIdForDeviceResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .clixExternalServiceSetProjectUserIdForDevice({ deviceId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SetProjectUserIdForDeviceResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId</code> | <code>string</code> | - |
| <code>body</code> | <code>[ClixExternalServiceSetProjectUserIdForDeviceBody](src/models/clix-external-service-set-project-user-id-for-device-body.ts)</code> | Request body containing the project user ID to set for the device. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clixExternalServiceSetProjectUserIdForDevice(request)`

- **OnSuccess**: <code>[V1SetProjectUserIdForDeviceResponse](src/models/v1-set-project-user-id-for-device-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.clixExternalServiceSetProjectUserIdForDevice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SetProjectUserIdForDeviceResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1SetProjectUserIdForDeviceResponse](src/models/v1-set-project-user-id-for-device-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ClixError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clixExternalServiceStartLiveActivities(request: ClixClient.ClixExternalServiceStartLiveActivitiesRequest, options?: RequestOptions): ApiPromise&lt;V1StartLiveActivitiesResponse, ClixClient.ClixExternalServiceStartLiveActivitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint starts iOS Live Activities on one or more user devices using Push to Start.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clixExternalServiceStartLiveActivities({ body: {} });
  // TODO: Handle 'response' of type V1StartLiveActivitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type ClixClient.ClixExternalServiceStartLiveActivitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clixExternalServiceStartLiveActivities({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1StartLiveActivitiesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1StartLiveActivitiesRequest](src/models/v1-start-live-activities-request.ts)</code> | Request body containing the live activities to start. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clixExternalServiceStartLiveActivities(request)`

- **OnSuccess**: <code>[V1StartLiveActivitiesResponse](src/models/v1-start-live-activities-response.ts)</code>
- **OnError**: throws <code>[ClixClient.ClixExternalServiceStartLiveActivitiesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clixExternalServiceStartLiveActivities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1StartLiveActivitiesResponse, ClixClient.ClixExternalServiceStartLiveActivitiesError&gt;</code>, with `result.value` of type <code>[V1StartLiveActivitiesResponse](src/models/v1-start-live-activities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ClixError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clixExternalServiceTriggerCampaign(request: ClixClient.ClixExternalServiceTriggerCampaignRequest, options?: RequestOptions): ApiPromise&lt;V1TriggerCampaignResponse, ClixClient.ClixExternalServiceTriggerCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers an API-triggered campaign to send messages to a specific audience

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clixExternalServiceTriggerCampaign({ campaignId: "some example string" });
  // TODO: Handle 'response' of type V1TriggerCampaignResponse
} catch (err) {
  // TODO: Handle 'err' of type ClixClient.ClixExternalServiceTriggerCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .clixExternalServiceTriggerCampaign({ campaignId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TriggerCampaignResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaignId</code> | <code>string</code> | The unique identifier of the campaign to trigger |
| <code>body?</code> | <code>[V1TriggerCampaignRequest](src/models/v1-trigger-campaign-request.ts)</code> | Campaign trigger configuration |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clixExternalServiceTriggerCampaign(request)`

- **OnSuccess**: <code>[V1TriggerCampaignResponse](src/models/v1-trigger-campaign-response.ts)</code>
- **OnError**: throws <code>[ClixClient.ClixExternalServiceTriggerCampaignError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clixExternalServiceTriggerCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TriggerCampaignResponse, ClixClient.ClixExternalServiceTriggerCampaignError&gt;</code>, with `result.value` of type <code>[V1TriggerCampaignResponse](src/models/v1-trigger-campaign-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ClixError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clixExternalServiceUpdateUser(request: ClixClient.ClixExternalServiceUpdateUserRequest, options?: RequestOptions): ApiPromise&lt;V1UpdateUserResponse, ClixClient.ClixExternalServiceUpdateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates user properties

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clixExternalServiceUpdateUser({
    projectUserId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type V1UpdateUserResponse
} catch (err) {
  // TODO: Handle 'err' of type ClixClient.ClixExternalServiceUpdateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .clixExternalServiceUpdateUser({ projectUserId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UpdateUserResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectUserId</code> | <code>string</code> | The unique identifier of the user to update |
| <code>body</code> | <code>[V1UpdateUserRequest](src/models/v1-update-user-request.ts)</code> | User data to update |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.clixExternalServiceUpdateUser(request)`

- **OnSuccess**: <code>[V1UpdateUserResponse](src/models/v1-update-user-response.ts)</code>
- **OnError**: throws <code>[ClixClient.ClixExternalServiceUpdateUserError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clixExternalServiceUpdateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UpdateUserResponse, ClixClient.ClixExternalServiceUpdateUserError&gt;</code>, with `result.value` of type <code>[V1UpdateUserResponse](src/models/v1-update-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ClixError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

