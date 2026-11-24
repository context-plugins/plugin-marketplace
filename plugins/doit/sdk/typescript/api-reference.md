# Reference

> Source: [DoiTClient](src/client.ts)

## AccountTeam

> Source: [AccountTeam](src/resources/account-team.ts)

<details>
<summary><code>listAccountTeam(options?: RequestOptions): ApiPromise&lt;CustomersV1AccountTeamResponse, AccountTeam.ListAccountTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all DoiT account managers assigned to your organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountTeam.listAccountTeam();
  // TODO: Handle 'response' of type CustomersV1AccountTeamResponse
} catch (err) {
  // TODO: Handle 'err' of type AccountTeam.ListAccountTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountTeam.listAccountTeam().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomersV1AccountTeamResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountTeam.listAccountTeam()`

- **OnSuccess**: <code>[CustomersV1AccountTeamResponse](src/models/customers-v1-account-team-response.ts)</code>
- **OnError**: throws <code>[AccountTeam.ListAccountTeamError](src/resources/account-team.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountTeam.listAccountTeam().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomersV1AccountTeamResponse, AccountTeam.ListAccountTeamError&gt;</code>, with `result.value` of type <code>[CustomersV1AccountTeamResponse](src/models/customers-v1-account-team-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Alerts

> Source: [Alerts](src/resources/alerts.ts)

<details>
<summary><code>createAlert(request: Alerts.CreateAlertRequest, options?: RequestOptions): ApiPromise&lt;Alert, Alerts.CreateAlertError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new alert.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.alerts.createAlert({
    body: {
      name: "Monthly spend",
      config: {
        metric: { type: "basic", value: "cost" },
        currency: Currency.Usd,
        timeInterval: TimeInterval.Month,
        condition: Condition.Value,
        operator: MetricFilterText.Gt,
        value: 1000,
      },
      recipients: ["finops@example.com"],
    },
  });
  // TODO: Handle 'response' of type Alert
} catch (err) {
  // TODO: Handle 'err' of type Alerts.CreateAlertError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.alerts
  .createAlert({
    body: {
      name: "Monthly spend",
      config: {
        metric: { type: "basic", value: "cost" },
        currency: Currency.Usd,
        timeInterval: TimeInterval.Month,
        condition: Condition.Value,
        operator: MetricFilterText.Gt,
        value: 1000,
      },
      recipients: ["finops@example.com"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Alert
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
| <code>body</code> | <code>[AlertRequest](src/models/alert-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.alerts.createAlert(request)`

- **OnSuccess**: <code>[Alert](src/models/alert.ts)</code>
- **OnError**: throws <code>[Alerts.CreateAlertError](src/resources/alerts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.alerts.createAlert(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Alert, Alerts.CreateAlertError&gt;</code>, with `result.value` of type <code>[Alert](src/models/alert.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAlert(request: Alerts.DeleteAlertRequest, options?: RequestOptions): ApiPromise&lt;undefined, Alerts.DeleteAlertError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the alert specified by the Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.alerts.deleteAlert({ id: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Alerts.DeleteAlertError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.alerts.deleteAlert({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>id</code> | <code>string</code> | Alert ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.alerts.deleteAlert(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Alerts.DeleteAlertError](src/resources/alerts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.alerts.deleteAlert(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Alerts.DeleteAlertError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAlert(request: Alerts.GetAlertRequest, options?: RequestOptions): ApiPromise&lt;Alert, Alerts.GetAlertError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an alert by the specified Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.alerts.getAlert({ id: "some example string" });
  // TODO: Handle 'response' of type Alert
} catch (err) {
  // TODO: Handle 'err' of type Alerts.GetAlertError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.alerts.getAlert({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Alert
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
| <code>id</code> | <code>string</code> | Alert ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.alerts.getAlert(request)`

- **OnSuccess**: <code>[Alert](src/models/alert.ts)</code>
- **OnError**: throws <code>[Alerts.GetAlertError](src/resources/alerts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.alerts.getAlert(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Alert, Alerts.GetAlertError&gt;</code>, with `result.value` of type <code>[Alert](src/models/alert.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAlertSlackChannels(request?: Alerts.ListAlertSlackChannelsRequest, options?: RequestOptions): ApiPromise&lt;AlertSlackChannelList, Alerts.ListAlertSlackChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Slack destinations eligible for Alert notifications for the authenticated customer and caller. Returns canonical identifiers for recipientsSlackChannels and integration status. User credentials include visible private channels; service accounts return public/shared channels only. Results are sorted by stable destination identity. Keep nameContains unchanged when following pageToken.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.alerts.listAlertSlackChannels();
  // TODO: Handle 'response' of type AlertSlackChannelList
} catch (err) {
  // TODO: Handle 'err' of type Alerts.ListAlertSlackChannelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.alerts.listAlertSlackChannels().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AlertSlackChannelList
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
| <code>nameContains?</code> | <code>string</code> | - |
| <code>maxResults?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.alerts.listAlertSlackChannels(request)`

- **OnSuccess**: <code>[AlertSlackChannelList](src/models/alert-slack-channel-list.ts)</code>
- **OnError**: throws <code>[Alerts.ListAlertSlackChannelsError](src/resources/alerts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.alerts.listAlertSlackChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AlertSlackChannelList, Alerts.ListAlertSlackChannelsError&gt;</code>, with `result.value` of type <code>[AlertSlackChannelList](src/models/alert-slack-channel-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAlerts(request?: Alerts.ListAlertsRequest, options?: RequestOptions): ApiPromise&lt;ExternalAlertList, Alerts.ListAlertsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of alerts that your account has access to.
Alerts are listed in reverse chronological order by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.alerts.listAlerts({ filter: "name:test", nameContains: "monthly spend" });
  // TODO: Handle 'response' of type ExternalAlertList
} catch (err) {
  // TODO: Handle 'err' of type Alerts.ListAlertsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.alerts
  .listAlerts({ filter: "name:test", nameContains: "monthly spend" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExternalAlertList
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
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | A field by which the results will be sorted. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest). |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>filter?</code> | <code>string</code> | An expression for filtering the results. The syntax is `key:[<value>]`. Multiple filters can be connected using a pipe \|. See [Filters](https://developer.doit.com/docs/filters).<br>Available filter keys: **owner**, **name** |
| <code>nameContains?</code> | <code>string</code> | Case-insensitive substring match against the resource name. Combined with the "filter" parameter using AND semantics. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.alerts.listAlerts(request)`

- **OnSuccess**: <code>[ExternalAlertList](src/models/external-alert-list.ts)</code>
- **OnError**: throws <code>[Alerts.ListAlertsError](src/resources/alerts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.alerts.listAlerts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExternalAlertList, Alerts.ListAlertsError&gt;</code>, with `result.value` of type <code>[ExternalAlertList](src/models/external-alert-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAlert(request: Alerts.UpdateAlertRequest, options?: RequestOptions): ApiPromise&lt;Alert, Alerts.UpdateAlertError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the alert specified by the Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.alerts.updateAlert({
    id: "some example string",
    body: {
      recipientsSlackChannels: [{ id: "C0123456789", workspace: "acme" }],
      recipients: ["finops@example.com"],
    },
  });
  // TODO: Handle 'response' of type Alert
} catch (err) {
  // TODO: Handle 'err' of type Alerts.UpdateAlertError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.alerts
  .updateAlert({
    id: "some example string",
    body: {
      recipientsSlackChannels: [{ id: "C0123456789", workspace: "acme" }],
      recipients: ["finops@example.com"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Alert
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
| <code>id</code> | <code>string</code> | Alert ID |
| <code>body</code> | <code>[AlertUpdateRequest](src/models/alert-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.alerts.updateAlert(request)`

- **OnSuccess**: <code>[Alert](src/models/alert.ts)</code>
- **OnError**: throws <code>[Alerts.UpdateAlertError](src/resources/alerts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.alerts.updateAlert(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Alert, Alerts.UpdateAlertError&gt;</code>, with `result.value` of type <code>[Alert](src/models/alert.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Allocations

> Source: [Allocations](src/resources/allocations.ts)

<details>
<summary><code>createAllocation(request?: Allocations.CreateAllocationRequestParams, options?: RequestOptions): ApiPromise&lt;Allocation, Allocations.CreateAllocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new allocation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.allocations.createAllocation();
  // TODO: Handle 'response' of type Allocation
} catch (err) {
  // TODO: Handle 'err' of type Allocations.CreateAllocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.allocations.createAllocation().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Allocation
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
| <code>body?</code> | <code>[CreateAllocationRequest](src/models/create-allocation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.allocations.createAllocation(request)`

- **OnSuccess**: <code>[Allocation](src/models/allocation.ts)</code>
- **OnError**: throws <code>[Allocations.CreateAllocationError](src/resources/allocations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.allocations.createAllocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Allocation, Allocations.CreateAllocationError&gt;</code>, with `result.value` of type <code>[Allocation](src/models/allocation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAllocation(request: Allocations.DeleteAllocationRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Allocations.DeleteAllocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the allocation specified by the Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.allocations.deleteAllocation({ id: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Allocations.DeleteAllocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.allocations.deleteAllocation({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | Allocation ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.allocations.deleteAllocation(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Allocations.DeleteAllocationError](src/resources/allocations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.allocations.deleteAllocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Allocations.DeleteAllocationError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllocation(request: Allocations.GetAllocationRequest, options?: RequestOptions): ApiPromise&lt;Allocation, Allocations.GetAllocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an allocation by the specified Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.allocations.getAllocation({ id: "some example string" });
  // TODO: Handle 'response' of type Allocation
} catch (err) {
  // TODO: Handle 'err' of type Allocations.GetAllocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.allocations.getAllocation({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Allocation
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
| <code>id</code> | <code>string</code> | Allocation ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.allocations.getAllocation(request)`

- **OnSuccess**: <code>[Allocation](src/models/allocation.ts)</code>
- **OnError**: throws <code>[Allocations.GetAllocationError](src/resources/allocations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.allocations.getAllocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Allocation, Allocations.GetAllocationError&gt;</code>, with `result.value` of type <code>[Allocation](src/models/allocation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllocations(request?: Allocations.ListAllocationsRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsV1AllocationsResponse, Allocations.ListAllocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of allocations that your account has access to.
Allocations are listed in reverse chronological order by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.allocations.listAllocations({
    filter: "type:custom",
    nameContains: "monthly spend",
  });
  // TODO: Handle 'response' of type AnalyticsV1AllocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Allocations.ListAllocationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.allocations
  .listAllocations({ filter: "type:custom", nameContains: "monthly spend" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsV1AllocationsResponse
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
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>filter?</code> | <code>string</code> | An expression for filtering the results.<br>Valid fields: **type**, **owner**, **name**, **folderId**. |
| <code>nameContains?</code> | <code>string</code> | Case-insensitive substring match against the resource name. Combined with the "filter" parameter using AND semantics. |
| <code>sortBy?</code> | <code>[SortByDoiTAllocationsApi](src/models/sort-by-doi-tallocations-api.ts)</code> | A field by which the results will be sorted. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.allocations.listAllocations(request)`

- **OnSuccess**: <code>[AnalyticsV1AllocationsResponse](src/models/analytics-v1-allocations-response.ts)</code>
- **OnError**: throws <code>[Allocations.ListAllocationsError](src/resources/allocations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.allocations.listAllocations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsV1AllocationsResponse, Allocations.ListAllocationsError&gt;</code>, with `result.value` of type <code>[AnalyticsV1AllocationsResponse](src/models/analytics-v1-allocations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAllocation(request: Allocations.UpdateAllocationRequestParams, options?: RequestOptions): ApiPromise&lt;Allocation, Allocations.UpdateAllocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the allocation specified by the Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.allocations.updateAllocation({ id: "some example string" });
  // TODO: Handle 'response' of type Allocation
} catch (err) {
  // TODO: Handle 'err' of type Allocations.UpdateAllocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.allocations.updateAllocation({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Allocation
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
| <code>id</code> | <code>string</code> | Allocation ID |
| <code>body?</code> | <code>[UpdateAllocationRequest](src/models/update-allocation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.allocations.updateAllocation(request)`

- **OnSuccess**: <code>[Allocation](src/models/allocation.ts)</code>
- **OnError**: throws <code>[Allocations.UpdateAllocationError](src/resources/allocations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.allocations.updateAllocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Allocation, Allocations.UpdateAllocationError&gt;</code>, with `result.value` of type <code>[Allocation](src/models/allocation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Annotations

> Source: [Annotations](src/resources/annotations.ts)

<details>
<summary><code>createAnnotation(request: Annotations.CreateAnnotationRequestParams, options?: RequestOptions): ApiPromise&lt;AnnotationListItem, Annotations.CreateAnnotationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new annotation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.annotations.createAnnotation({
    body: { content: "some example string", timestamp: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)) },
  });
  // TODO: Handle 'response' of type AnnotationListItem
} catch (err) {
  // TODO: Handle 'err' of type Annotations.CreateAnnotationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.annotations
  .createAnnotation({
    body: { content: "some example string", timestamp: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)) },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnnotationListItem
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
| <code>body</code> | <code>[CreateAnnotationRequest](src/models/create-annotation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.annotations.createAnnotation(request)`

- **OnSuccess**: <code>[AnnotationListItem](src/models/annotation-list-item.ts)</code>
- **OnError**: throws <code>[Annotations.CreateAnnotationError](src/resources/annotations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.annotations.createAnnotation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnnotationListItem, Annotations.CreateAnnotationError&gt;</code>, with `result.value` of type <code>[AnnotationListItem](src/models/annotation-list-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAnnotation(request: Annotations.DeleteAnnotationRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Annotations.DeleteAnnotationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the annotation specified by the Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.annotations.deleteAnnotation({ id: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Annotations.DeleteAnnotationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.annotations.deleteAnnotation({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | Annotation ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.annotations.deleteAnnotation(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Annotations.DeleteAnnotationError](src/resources/annotations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.annotations.deleteAnnotation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Annotations.DeleteAnnotationError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnnotation(request: Annotations.GetAnnotationRequest, options?: RequestOptions): ApiPromise&lt;AnnotationListItem, Annotations.GetAnnotationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an annotation by the specified Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.annotations.getAnnotation({ id: "some example string" });
  // TODO: Handle 'response' of type AnnotationListItem
} catch (err) {
  // TODO: Handle 'err' of type Annotations.GetAnnotationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.annotations.getAnnotation({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnnotationListItem
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
| <code>id</code> | <code>string</code> | Annotation ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.annotations.getAnnotation(request)`

- **OnSuccess**: <code>[AnnotationListItem](src/models/annotation-list-item.ts)</code>
- **OnError**: throws <code>[Annotations.GetAnnotationError](src/resources/annotations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.annotations.getAnnotation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnnotationListItem, Annotations.GetAnnotationError&gt;</code>, with `result.value` of type <code>[AnnotationListItem](src/models/annotation-list-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAnnotations(request?: Annotations.ListAnnotationsRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsV1AnnotationsResponse, Annotations.ListAnnotationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of annotations that your account has access to.
Annotations are listed in reverse chronological order by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.annotations.listAnnotations({ filter: "content:budget" });
  // TODO: Handle 'response' of type AnalyticsV1AnnotationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Annotations.ListAnnotationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.annotations.listAnnotations({ filter: "content:budget" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsV1AnnotationsResponse
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
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>filter?</code> | <code>string</code> | An expression for filtering the results.<br>Valid fields: **content**, **timestamp**, **labels**. |
| <code>sortBy?</code> | <code>[SortByDoiTAnnotationsApi](src/models/sort-by-doi-tannotations-api.ts)</code> | A field by which the results will be sorted. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.annotations.listAnnotations(request)`

- **OnSuccess**: <code>[AnalyticsV1AnnotationsResponse](src/models/analytics-v1-annotations-response.ts)</code>
- **OnError**: throws <code>[Annotations.ListAnnotationsError](src/resources/annotations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.annotations.listAnnotations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsV1AnnotationsResponse, Annotations.ListAnnotationsError&gt;</code>, with `result.value` of type <code>[AnalyticsV1AnnotationsResponse](src/models/analytics-v1-annotations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAnnotation(request: Annotations.UpdateAnnotationRequestParams, options?: RequestOptions): ApiPromise&lt;AnnotationListItem, Annotations.UpdateAnnotationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the annotation specified by the Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.annotations.updateAnnotation({
    id: "some example string",
    body: { content: "Updated annotation content" },
  });
  // TODO: Handle 'response' of type AnnotationListItem
} catch (err) {
  // TODO: Handle 'err' of type Annotations.UpdateAnnotationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.annotations
  .updateAnnotation({ id: "some example string", body: { content: "Updated annotation content" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnnotationListItem
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
| <code>id</code> | <code>string</code> | Annotation ID |
| <code>body?</code> | <code>[UpdateAnnotationRequest](src/models/update-annotation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.annotations.updateAnnotation(request)`

- **OnSuccess**: <code>[AnnotationListItem](src/models/annotation-list-item.ts)</code>
- **OnError**: throws <code>[Annotations.UpdateAnnotationError](src/resources/annotations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.annotations.updateAnnotation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnnotationListItem, Annotations.UpdateAnnotationError&gt;</code>, with `result.value` of type <code>[AnnotationListItem](src/models/annotation-list-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Anomalies

> Source: [Anomalies](src/resources/anomalies.ts)

<details>
<summary><code>getAnomaly(request: Anomalies.GetAnomalyRequest, options?: RequestOptions): ApiPromise&lt;AnomaliesV1Response, Anomalies.GetAnomalyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified anomaly.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalies.getAnomaly({ id: "some example string" });
  // TODO: Handle 'response' of type AnomaliesV1Response
} catch (err) {
  // TODO: Handle 'err' of type Anomalies.GetAnomalyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalies.getAnomaly({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnomaliesV1Response
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
| <code>id</code> | <code>string</code> | A unique identifier of the anomaly. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.anomalies.getAnomaly(request)`

- **OnSuccess**: <code>[AnomaliesV1Response](src/models/anomalies-v1-response.ts)</code>
- **OnError**: throws <code>[Anomalies.GetAnomalyError](src/resources/anomalies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalies.getAnomaly(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnomaliesV1Response, Anomalies.GetAnomalyError&gt;</code>, with `result.value` of type <code>[AnomaliesV1Response](src/models/anomalies-v1-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnomalyExplanation(request: Anomalies.GetAnomalyExplanationRequest, options?: RequestOptions): ApiPromise&lt;AnomaliesV1ExplanationResponse, Anomalies.GetAnomalyExplanationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a likely-cause explanation for the specified anomaly, alongside the deterministic facts and evidence references it was generated from. The explanation itself is AI-generated; it is always returned separately from the deterministic `facts`, and is marked as such in the `explanation` object. Generation is ephemeral: no conversation is persisted on your behalf.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalies.getAnomalyExplanation({ id: "some example string" });
  // TODO: Handle 'response' of type AnomaliesV1ExplanationResponse
} catch (err) {
  // TODO: Handle 'err' of type Anomalies.GetAnomalyExplanationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalies.getAnomalyExplanation({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnomaliesV1ExplanationResponse
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
| <code>id</code> | <code>string</code> | A unique identifier of the anomaly. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.anomalies.getAnomalyExplanation(request)`

- **OnSuccess**: <code>[AnomaliesV1ExplanationResponse](src/models/anomalies-v1-explanation-response.ts)</code>
- **OnError**: throws <code>[Anomalies.GetAnomalyExplanationError](src/resources/anomalies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalies.getAnomalyExplanation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnomaliesV1ExplanationResponse, Anomalies.GetAnomalyExplanationError&gt;</code>, with `result.value` of type <code>[AnomaliesV1ExplanationResponse](src/models/anomalies-v1-explanation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAnomalies(request?: Anomalies.ListAnomaliesRequest, options?: RequestOptions): ApiPromise&lt;AnomaliesResponse, Anomalies.ListAnomaliesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of detected anomalies.
Anomalies can be sorted by `startTime`, `severityLevel`, or `costOfAnomaly` using `sortBy` and `sortOrder`. By default they are sorted by `startTime` in descending order (most recent first).
The sort order is total and reproducible: ties on the selected field are broken by `startTime` descending and then by anomaly `id` ascending, so the same result set always paginates in the same order.
The `notifications` array is always present on each anomaly item; it is empty unless `includeNotifications=true` is supplied.
**Pagination stability**: `sortBy`, `sortOrder`, `filter`, `minCreationTime`, and `maxCreationTime` must be held constant across a pagination sequence. A `pageToken` presented with any of them changed is rejected with `400`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalies.listAnomalies({ filter: "severityLevel:critical" });
  // TODO: Handle 'response' of type AnomaliesResponse
} catch (err) {
  // TODO: Handle 'err' of type Anomalies.ListAnomaliesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalies.listAnomalies({ filter: "severityLevel:critical" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnomaliesResponse
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
| <code>minCreationTime?</code> | <code>number</code> | Inclusive lower bound on the anomaly's usage start time, in milliseconds since the POSIX epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document was created. |
| <code>maxCreationTime?</code> | <code>number</code> | Inclusive upper bound on the anomaly's usage start time, in milliseconds since the POSIX epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document was created. |
| <code>filter?</code> | <code>string</code> | An expression for filtering the results. The syntax is `key:value`. Multiple criteria can be combined using a pipe \|. See [Filters](https://developer.doit.com/docs/filters).<br>Available filter keys: **serviceName**, **billingAccount**, **platform**, **severityLevel**. `severityLevel` values must be lowercase: `information`, `warning`, `critical`. An unrecognised key, or a segment that is not `key:value`, is rejected with `400` rather than ignored. |
| <code>sortBy?</code> | <code>[SortByDoiTAnomaliesApi](src/models/sort-by-doi-tanomalies-api.ts)</code> | A field by which the results will be sorted. Defaults to `startTime`.<br>**Default**: "startTime" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest). |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. If omitted, all anomalies matching the filters and time window are returned in a single page. |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>includeNotifications?</code> | <code>boolean</code> | Include anomaly notifications from the subcollection. Defaults to false.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.anomalies.listAnomalies(request)`

- **OnSuccess**: <code>[AnomaliesResponse](src/models/anomalies-response.ts)</code>
- **OnError**: throws <code>[Anomalies.ListAnomaliesError](src/resources/anomalies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalies.listAnomalies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnomaliesResponse, Anomalies.ListAnomaliesError&gt;</code>, with `result.value` of type <code>[AnomaliesResponse](src/models/anomalies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchAnomaly(request: Anomalies.PatchAnomalyRequest, options?: RequestOptions): ApiPromise&lt;undefined, Anomalies.PatchAnomalyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the review status of the anomaly identified by `{id}`, the same identifier `getAnomaly` accepts. Mirrors the review workflow available in the console: set `reviewStatus`, and when resolving, qualify it with `resolution` and optionally a `resolutionNote` (feedback reason and comment). The change is recorded in the anomaly's review history exactly like a console update, and the actor is derived from the API credentials - never from the request body.

Validation: `reviewStatus` is one of `NEEDS_REVIEW`, `UNDER_REVIEW`, `RESOLVED`; `resolution` (`ANOMALY_CONFIRMED` or `NOT_ANOMALY`) is required when `reviewStatus` is `RESOLVED` and forbidden otherwise; `resolutionNote.reason` must belong to the given `resolution` - `SECURITY_BREACH`, `MISCONFIGURATION`, `UNINTENTIONAL_PROVISIONING`, `EXPECTED_COST_SPIKE` or `ANOMALOUS_OTHER` for `ANOMALY_CONFIRMED`, and `FAULTY_ANOMALY_DETECTION_MODEL`, `INCORRECT_DATA`, `LOW_IMPACT` or `NON_ANOMALOUS_OTHER` for `NOT_ANOMALY`. Requires the `AnomaliesManager` permission and DoiT API access (`platform:externalApi`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.anomalies.patchAnomaly({ id: "some example string", body: { customerFeedback: {} } });
} catch (err) {
  // TODO: Handle 'err' of type Anomalies.PatchAnomalyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalies
  .patchAnomaly({ id: "some example string", body: { customerFeedback: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>id</code> | <code>string</code> | A unique identifier of the anomaly. |
| <code>body</code> | <code>[AnomalyStatusUpdate](src/models/anomaly-status-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.anomalies.patchAnomaly(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Anomalies.PatchAnomalyError](src/resources/anomalies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalies.patchAnomaly(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Anomalies.PatchAnomalyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Assets

> Source: [Assets](src/resources/assets.ts)

<details>
<summary><code>createAsset(request?: Assets.CreateAssetRequest, options?: RequestOptions): ApiPromise&lt;AssetResponse, Assets.CreateAssetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new asset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.createAsset();
  // TODO: Handle 'response' of type AssetResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.CreateAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.createAsset().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetResponse
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
| <code>type?</code> | <code>string</code> | Asset type. For example, amazon-web-services<br>**Default**: "amazon-web-services" |
| <code>mode?</code> | <code>string</code> | Asset mode.<br>**Default**: "New" |
| <code>accountName?</code> | <code>string</code> | The desired name of the account.<br>**Default**: "Account name" |
| <code>rootEmail?</code> | <code>string</code> | The root account email. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.createAsset(request)`

- **OnSuccess**: <code>[AssetResponse](src/models/asset-response.ts)</code>
- **OnError**: throws <code>[Assets.CreateAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.createAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetResponse, Assets.CreateAssetError&gt;</code>, with `result.value` of type <code>[AssetResponse](src/models/asset-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAsset(request: Assets.GetAssetRequest, options?: RequestOptions): ApiPromise&lt;AssetItemDetailed, Assets.GetAssetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full details of an asset specified by the asset id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.getAsset({ id: "some example string" });
  // TODO: Handle 'response' of type AssetItemDetailed
} catch (err) {
  // TODO: Handle 'err' of type Assets.GetAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.getAsset({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetItemDetailed
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
| <code>id</code> | <code>string</code> | The unique id of an asset. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.getAsset(request)`

- **OnSuccess**: <code>[AssetItemDetailed](src/models/asset-item-detailed.ts)</code>
- **OnError**: throws <code>[Assets.GetAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.getAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetItemDetailed, Assets.GetAssetError&gt;</code>, with `result.value` of type <code>[AssetItemDetailed](src/models/asset-item-detailed.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>idOfAsset(request: Assets.IdOfAssetRequest, options?: RequestOptions): ApiPromise&lt;BillingV1AssetsResponse1, Assets.IdOfAssetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing asset, such as G Suite/Workspace or Office 365 subscription, to add or remove licenses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.idOfAsset({ id: "some example string" });
  // TODO: Handle 'response' of type BillingV1AssetsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Assets.IdOfAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.idOfAsset({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillingV1AssetsResponse1
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
| <code>id</code> | <code>string</code> | The unique id of an asset. |
| <code>body?</code> | <code>[BillingV1AssetsRequest](src/models/billing-v1-assets-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.idOfAsset(request)`

- **OnSuccess**: <code>[BillingV1AssetsResponse1](src/models/billing-v1-assets-response1.ts)</code>
- **OnError**: throws <code>[Assets.IdOfAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.idOfAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillingV1AssetsResponse1, Assets.IdOfAssetError&gt;</code>, with `result.value` of type <code>[BillingV1AssetsResponse1](src/models/billing-v1-assets-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>idOfAssets(request?: Assets.IdOfAssetsRequest, options?: RequestOptions): ApiPromise&lt;BillingV1AssetsResponse, Assets.IdOfAssetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all available customer assets, such as Google Cloud billing accounts, G Suite/Workspace subscriptions, etc.
Assets are returned in reverse chronological order by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.idOfAssets();
  // TODO: Handle 'response' of type BillingV1AssetsResponse
} catch (err) {
  // TODO: Handle 'err' of type Assets.IdOfAssetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.idOfAssets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillingV1AssetsResponse
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
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>filter?</code> | <code>string</code> | An expression for filtering the results of the request. The syntax<br>is `key:[<value>]`. e.g: "type:g-suite". Multiple filters can be<br>connected using a pipe \|. Note that using different keys in the same<br>filter results in “AND,” while using the same key multiple times in<br>the same filter results in “OR”. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.idOfAssets(request)`

- **OnSuccess**: <code>[BillingV1AssetsResponse](src/models/billing-v1-assets-response.ts)</code>
- **OnError**: throws <code>[Assets.IdOfAssetsError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.idOfAssets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillingV1AssetsResponse, Assets.IdOfAssetsError&gt;</code>, with `result.value` of type <code>[BillingV1AssetsResponse](src/models/billing-v1-assets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Auth

> Source: [Auth](src/resources/auth.ts)

<details>
<summary><code>validate(options?: RequestOptions): ApiPromise&lt;ValidateResponse, Auth.ValidateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the domain, email, and effective permissions of the current API user. Callable by any authenticated token, regardless of its own permissions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auth2.validate();
  // TODO: Handle 'response' of type ValidateResponse
} catch (err) {
  // TODO: Handle 'err' of type Auth.ValidateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auth2.validate().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ValidateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auth2.validate()`

- **OnSuccess**: <code>[ValidateResponse](src/models/validate-response.ts)</code>
- **OnError**: throws <code>[Auth.ValidateError](src/resources/auth.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.auth2.validate().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ValidateResponse, Auth.ValidateError&gt;</code>, with `result.value` of type <code>[ValidateResponse](src/models/validate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Ava

> Source: [Ava](src/resources/ava.ts)

<details>
<summary><code>askAvaStreaming(request: Ava.AskAvaStreamingRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;string&gt;, Ava.AskAvaStreamingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a question to Ava and receive a streaming response via Server-Sent Events (SSE).
The response streams back events containing the answer text, conversation ID, and message metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.ava.askAvaStreaming({ body: { question: "some example string" } });
  for await (const event of stream) {
    // TODO: Handle 'event' of type string, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Ava.AskAvaStreamingError, discriminated with 'err.payload.kind'
  // The loop's failures are DoiTError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ava.askAvaStreaming({ body: { question: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<string>
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
| <code>body</code> | <code>[AvaAskRequest](src/models/ava-ask-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ava.askAvaStreaming(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;string&gt;</code>
- **OnError**: throws <code>[Ava.AskAvaStreamingError](src/resources/ava.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ava.askAvaStreaming(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;string&gt;, Ava.AskAvaStreamingError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;string&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>askAvaSync(request: Ava.AskAvaSyncRequest, options?: RequestOptions): ApiPromise&lt;AvaAskSyncResponse, Ava.AskAvaSyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a question to Ava and receive a synchronous response.
Set `ephemeral` to `true` to skip conversation persistence (recommended for programmatic consumers).
When `ephemeral` is `false` (default), the response includes a `conversationId` that can be used with the delete endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ava.askAvaSync({ body: { question: "some example string" } });
  // TODO: Handle 'response' of type AvaAskSyncResponse
} catch (err) {
  // TODO: Handle 'err' of type Ava.AskAvaSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ava.askAvaSync({ body: { question: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AvaAskSyncResponse
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
| <code>body</code> | <code>[AvaAskSyncRequest](src/models/ava-ask-sync-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ava.askAvaSync(request)`

- **OnSuccess**: <code>[AvaAskSyncResponse](src/models/ava-ask-sync-response.ts)</code>
- **OnError**: throws <code>[Ava.AskAvaSyncError](src/resources/ava.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ava.askAvaSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AvaAskSyncResponse, Ava.AskAvaSyncError&gt;</code>, with `result.value` of type <code>[AvaAskSyncResponse](src/models/ava-ask-sync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>avaFeedback(request: Ava.AvaFeedbackRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Ava.AvaFeedbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit feedback on an Ava answer to help improve response quality.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.ava.avaFeedback({
    body: {
      conversationId: "some example string",
      answerId: "some example string",
      feedback: { positive: true },
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type Ava.AvaFeedbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ava
  .avaFeedback({
    body: {
      conversationId: "some example string",
      answerId: "some example string",
      feedback: { positive: true },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body</code> | <code>[AvaFeedbackRequest](src/models/ava-feedback-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ava.avaFeedback(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Ava.AvaFeedbackError](src/resources/ava.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ava.avaFeedback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Ava.AvaFeedbackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAvaConversation(request: Ava.DeleteAvaConversationRequest, options?: RequestOptions): ApiPromise&lt;undefined, Ava.DeleteAvaConversationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Ava conversation by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.ava.deleteAvaConversation({ conversationId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Ava.DeleteAvaConversationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ava
  .deleteAvaConversation({ conversationId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>conversationId</code> | <code>string</code> | The ID of the conversation to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ava.deleteAvaConversation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Ava.DeleteAvaConversationError](src/resources/ava.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ava.deleteAvaConversation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Ava.DeleteAvaConversationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BillingExplainerApi

> Source: [BillingExplainerApi](src/resources/billing-explainer-api.ts)

<details>
<summary><code>getBillingExplainerPerPayer(request: BillingExplainerApi.GetBillingExplainerPerPayerRequest, options?: RequestOptions): ApiPromise&lt;BillingExplainerCustomer, BillingExplainerApi.GetBillingExplainerPerPayerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the invoiced cost changes for each payer in the authenticated tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingExplainerApi.getBillingExplainerPerPayer({
    invoiceMonth: "2026-06",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type BillingExplainerCustomer
} catch (err) {
  // TODO: Handle 'err' of type BillingExplainerApi.GetBillingExplainerPerPayerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingExplainerApi
  .getBillingExplainerPerPayer({ invoiceMonth: "2026-06", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillingExplainerCustomer
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
| <code>invoiceMonth</code> | <code>string</code> | Invoice month in `YYYY-MM` format. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingExplainerApi.getBillingExplainerPerPayer(request)`

- **OnSuccess**: <code>[BillingExplainerCustomer](src/models/billing-explainer-customer.ts)</code>
- **OnError**: throws <code>[BillingExplainerApi.GetBillingExplainerPerPayerError](src/resources/billing-explainer-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingExplainerApi.getBillingExplainerPerPayer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillingExplainerCustomer, BillingExplainerApi.GetBillingExplainerPerPayerError&gt;</code>, with `result.value` of type <code>[BillingExplainerCustomer](src/models/billing-explainer-customer.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEntityInvoiceExplainer(request: BillingExplainerApi.GetEntityInvoiceExplainerRequest, options?: RequestOptions): ApiPromise&lt;EntityInvoiceExplainer, BillingExplainerApi.GetEntityInvoiceExplainerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns invoiced cost changes for an invoice owned by the specified billing profile in the authenticated tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingExplainerApi.getEntityInvoiceExplainer({
    billingProfileId: "CUST-12345",
    invoiceNumber: "IN244004936",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type EntityInvoiceExplainer
} catch (err) {
  // TODO: Handle 'err' of type BillingExplainerApi.GetEntityInvoiceExplainerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingExplainerApi
  .getEntityInvoiceExplainer({
    billingProfileId: "CUST-12345",
    invoiceNumber: "IN244004936",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityInvoiceExplainer
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
| <code>billingProfileId</code> | <code>string</code> | Billing profile identifier shown on the invoice. |
| <code>invoiceNumber</code> | <code>string</code> | Customer-facing invoice number. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingExplainerApi.getEntityInvoiceExplainer(request)`

- **OnSuccess**: <code>[EntityInvoiceExplainer](src/models/entity-invoice-explainer.ts)</code>
- **OnError**: throws <code>[BillingExplainerApi.GetEntityInvoiceExplainerError](src/resources/billing-explainer-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingExplainerApi.getEntityInvoiceExplainer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityInvoiceExplainer, BillingExplainerApi.GetEntityInvoiceExplainerError&gt;</code>, with `result.value` of type <code>[EntityInvoiceExplainer](src/models/entity-invoice-explainer.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BillingTransfer

> Source: [BillingTransfer](src/resources/billing-transfer.ts)

<details>
<summary><code>createBillingTransferEndCustomerMappings(request: BillingTransfer.CreateBillingTransferEndCustomerMappingsRequest, options?: RequestOptions): ApiPromise&lt;EndCustomerMappingBatchResult, BillingTransfer.CreateBillingTransferEndCustomerMappingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Maps end-customer AWS accounts under a reseller's PMA to their DoiT tenant, as part of AWS
billing transfer onboarding. Reseller-only; distributors are explicitly denied (`403`).

Unlike `POST /billingtransfer/v1/resellerhandshakes`, this endpoint has no
`Idempotency-Key` requirement and no `dryRun` support.

This path is a deliberate exception to the de-hyphenation convention used by the sibling
`resellerhandshakes` and `programmanagementaccounts` paths — it stays hyphenated to match
the existing Go route and its console-facing equivalent.

Each item in the batch is processed independently; per-item outcomes are returned in
`results[]` with HTTP `200`. Malformed items are rejected up front and reported in
`invalidItems` without processing any of the batch.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingTransfer.createBillingTransferEndCustomerMappings({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: {
      dpmaId: "some example string",
      resellerPmaAccountId: "some example string",
      items: [{ ecAccountId: "some example string", ecCustomerId: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type EndCustomerMappingBatchResult
} catch (err) {
  // TODO: Handle 'err' of type BillingTransfer.CreateBillingTransferEndCustomerMappingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingTransfer
  .createBillingTransferEndCustomerMappings({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: {
      dpmaId: "some example string",
      resellerPmaAccountId: "some example string",
      items: [{ ecAccountId: "some example string", ecCustomerId: "some example string" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EndCustomerMappingBatchResult
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
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |
| <code>body</code> | <code>[EndCustomerMappingBatchCreate](src/models/end-customer-mapping-batch-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingTransfer.createBillingTransferEndCustomerMappings(request)`

- **OnSuccess**: <code>[EndCustomerMappingBatchResult](src/models/end-customer-mapping-batch-result.ts)</code>
- **OnError**: throws <code>[BillingTransfer.CreateBillingTransferEndCustomerMappingsError](src/resources/billing-transfer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingTransfer.createBillingTransferEndCustomerMappings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EndCustomerMappingBatchResult, BillingTransfer.CreateBillingTransferEndCustomerMappingsError&gt;</code>, with `result.value` of type <code>[EndCustomerMappingBatchResult](src/models/end-customer-mapping-batch-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBillingTransferResellerHandshakes(request: BillingTransfer.CreateBillingTransferResellerHandshakesRequest, options?: RequestOptions): ApiPromise&lt;ResellerHandshakeBatchResult, BillingTransfer.CreateBillingTransferResellerHandshakesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Maps reseller to distributor; also sends the handshake if required, as part of AWS
billing transfer onboarding. Distributor-only; callers without the ChannelOps distributor
tier entitlement receive `403`.

Each item in the batch is processed independently; per-item outcomes are returned in
`results[]` with HTTP `200` even when some items fail. Malformed items (missing fields,
duplicate `resellerPmaAccountId` within the batch) are rejected up front with `422` and
reported in `invalidItems`, and none of the batch is processed in that case.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingTransfer.createBillingTransferResellerHandshakes({
    idempotencyKey: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: {
      dpmaId: "some example string",
      items: [{ resellerCustomerId: "some example string", resellerPmaAccountId: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type ResellerHandshakeBatchResult
} catch (err) {
  // TODO: Handle 'err' of type BillingTransfer.CreateBillingTransferResellerHandshakesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingTransfer
  .createBillingTransferResellerHandshakes({
    idempotencyKey: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: {
      dpmaId: "some example string",
      items: [{ resellerCustomerId: "some example string", resellerPmaAccountId: "some example string" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResellerHandshakeBatchResult
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
| <code>dryRun?</code> | <code>boolean</code> | If `true`, validates the batch and simulates the outcome without issuing any AWS<br>Organizations handshakes. The response shape is identical to a real execution.<br>**Default**: false |
| <code>idempotencyKey</code> | <code>string</code> | Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).<br>Re-submitting the same key with the same request returns the cached response without<br>re-executing side effects. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |
| <code>body</code> | <code>[ResellerHandshakeBatchCreate](src/models/reseller-handshake-batch-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingTransfer.createBillingTransferResellerHandshakes(request)`

- **OnSuccess**: <code>[ResellerHandshakeBatchResult](src/models/reseller-handshake-batch-result.ts)</code>
- **OnError**: throws <code>[BillingTransfer.CreateBillingTransferResellerHandshakesError](src/resources/billing-transfer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingTransfer.createBillingTransferResellerHandshakes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResellerHandshakeBatchResult, BillingTransfer.CreateBillingTransferResellerHandshakesError&gt;</code>, with `result.value` of type <code>[ResellerHandshakeBatchResult](src/models/reseller-handshake-batch-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBillingTransferProgramManagementAccountsStatus(request?: BillingTransfer.GetBillingTransferProgramManagementAccountsStatusRequest, options?: RequestOptions): ApiPromise&lt;ProgramManagementAccountsStatusResponse, BillingTransfer.GetBillingTransferProgramManagementAccountsStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lightweight polling surface for the onboarding wizard: returns each of the caller's PMAs
with only its IAM status/diff and timestamps — no tenant fan-out, no handshake
aggregation, no pagination. Distributor-only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingTransfer.getBillingTransferProgramManagementAccountsStatus({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type ProgramManagementAccountsStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type BillingTransfer.GetBillingTransferProgramManagementAccountsStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingTransfer
  .getBillingTransferProgramManagementAccountsStatus({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProgramManagementAccountsStatusResponse
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
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingTransfer.getBillingTransferProgramManagementAccountsStatus(request)`

- **OnSuccess**: <code>[ProgramManagementAccountsStatusResponse](src/models/program-management-accounts-status-response.ts)</code>
- **OnError**: throws <code>[BillingTransfer.GetBillingTransferProgramManagementAccountsStatusError](src/resources/billing-transfer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingTransfer.getBillingTransferProgramManagementAccountsStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProgramManagementAccountsStatusResponse, BillingTransfer.GetBillingTransferProgramManagementAccountsStatusError&gt;</code>, with `result.value` of type <code>[ProgramManagementAccountsStatusResponse](src/models/program-management-accounts-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBillingTransferEndCustomers(request: BillingTransfer.ListBillingTransferEndCustomersRequest, options?: RequestOptions): ApiPromise&lt;ListEndCustomersResponse, BillingTransfer.ListBillingTransferEndCustomersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the end-customer AWS account mappings under a reseller's program management
account, identified by `dpmaId` and `resellerPmaAccountId`. Callable by the reseller who
owns the PMA or the distributor who owns the DPMA.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingTransfer.listBillingTransferEndCustomers({
    dpmaId: "some example string",
    resellerPmaAccountId: "123456789012",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type ListEndCustomersResponse
} catch (err) {
  // TODO: Handle 'err' of type BillingTransfer.ListBillingTransferEndCustomersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingTransfer
  .listBillingTransferEndCustomers({
    dpmaId: "some example string",
    resellerPmaAccountId: "123456789012",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListEndCustomersResponse
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
| <code>dpmaId</code> | <code>string</code> | DPMA ID that owns the reseller PMA referenced by `resellerPmaAccountId`. |
| <code>resellerPmaAccountId</code> | <code>string</code> | 12-digit AWS account ID of the reseller's program management account. |
| <code>includeRevoked?</code> | <code>boolean</code> | If `true`, includes end-customer mappings that have been revoked. Defaults to `false` (revoked mappings are excluded).<br>**Default**: false |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingTransfer.listBillingTransferEndCustomers(request)`

- **OnSuccess**: <code>[ListEndCustomersResponse](src/models/list-end-customers-response.ts)</code>
- **OnError**: throws <code>[BillingTransfer.ListBillingTransferEndCustomersError](src/resources/billing-transfer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingTransfer.listBillingTransferEndCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListEndCustomersResponse, BillingTransfer.ListBillingTransferEndCustomersError&gt;</code>, with `result.value` of type <code>[ListEndCustomersResponse](src/models/list-end-customers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBillingTransferEndCustomersByReseller(request: BillingTransfer.ListBillingTransferEndCustomersByResellerRequest, options?: RequestOptions): ApiPromise&lt;ListEndCustomersResponse, BillingTransfer.ListBillingTransferEndCustomersByResellerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Same result as `GET /billingtransfer/v1/end-customers`, identified by
`resellerPmaAccountId` alone (no `dpmaId` needed). Callable by the reseller who owns the
PMA or the distributor who owns its DPMA.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingTransfer.listBillingTransferEndCustomersByReseller({
    resellerPmaAccountId: "123456789012",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type ListEndCustomersResponse
} catch (err) {
  // TODO: Handle 'err' of type BillingTransfer.ListBillingTransferEndCustomersByResellerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingTransfer
  .listBillingTransferEndCustomersByReseller({
    resellerPmaAccountId: "123456789012",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListEndCustomersResponse
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
| <code>resellerPmaAccountId</code> | <code>string</code> | 12-digit AWS account ID of the reseller's program management account. |
| <code>includeRevoked?</code> | <code>boolean</code> | If `true`, includes end-customer mappings that have been revoked. Defaults to `false` (revoked mappings are excluded).<br>**Default**: false |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingTransfer.listBillingTransferEndCustomersByReseller(request)`

- **OnSuccess**: <code>[ListEndCustomersResponse](src/models/list-end-customers-response.ts)</code>
- **OnError**: throws <code>[BillingTransfer.ListBillingTransferEndCustomersByResellerError](src/resources/billing-transfer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingTransfer.listBillingTransferEndCustomersByReseller(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListEndCustomersResponse, BillingTransfer.ListBillingTransferEndCustomersByResellerError&gt;</code>, with `result.value` of type <code>[ListEndCustomersResponse](src/models/list-end-customers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBillingTransferProgramManagementAccounts(request?: BillingTransfer.ListBillingTransferProgramManagementAccountsRequest, options?: RequestOptions): ApiPromise&lt;ProgramManagementAccountList, BillingTransfer.ListBillingTransferProgramManagementAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the caller's program management accounts (PMAs) and the reseller tenants mapped to
each one, including AWS Organizations handshake status per account. Distributor-only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingTransfer.listBillingTransferProgramManagementAccounts({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type ProgramManagementAccountList
} catch (err) {
  // TODO: Handle 'err' of type BillingTransfer.ListBillingTransferProgramManagementAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingTransfer
  .listBillingTransferProgramManagementAccounts({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProgramManagementAccountList
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
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingTransfer.listBillingTransferProgramManagementAccounts(request)`

- **OnSuccess**: <code>[ProgramManagementAccountList](src/models/program-management-account-list.ts)</code>
- **OnError**: throws <code>[BillingTransfer.ListBillingTransferProgramManagementAccountsError](src/resources/billing-transfer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingTransfer.listBillingTransferProgramManagementAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProgramManagementAccountList, BillingTransfer.ListBillingTransferProgramManagementAccountsError&gt;</code>, with `result.value` of type <code>[ProgramManagementAccountList](src/models/program-management-account-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBillingTransferResellerAccounts(request?: BillingTransfer.ListBillingTransferResellerAccountsRequest, options?: RequestOptions): ApiPromise&lt;ListResellerAccountsResponse, BillingTransfer.ListBillingTransferResellerAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists every reseller program management account (RPMA) node belonging to the calling
reseller, with handshake state and status but without end-customer tenants — the
reseller-tier analog of `GET /billingtransfer/v1/programmanagementaccounts`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingTransfer.listBillingTransferResellerAccounts({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type ListResellerAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type BillingTransfer.ListBillingTransferResellerAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingTransfer
  .listBillingTransferResellerAccounts({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResellerAccountsResponse
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
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingTransfer.listBillingTransferResellerAccounts(request)`

- **OnSuccess**: <code>[ListResellerAccountsResponse](src/models/list-reseller-accounts-response.ts)</code>
- **OnError**: throws <code>[BillingTransfer.ListBillingTransferResellerAccountsError](src/resources/billing-transfer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingTransfer.listBillingTransferResellerAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResellerAccountsResponse, BillingTransfer.ListBillingTransferResellerAccountsError&gt;</code>, with `result.value` of type <code>[ListResellerAccountsResponse](src/models/list-reseller-accounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBillingTransferResellerAccountsWithTenants(request?: BillingTransfer.ListBillingTransferResellerAccountsWithTenantsRequest, options?: RequestOptions): ApiPromise&lt;ListResellerAccountsWithTenantsResponse, BillingTransfer.ListBillingTransferResellerAccountsWithTenantsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists every reseller PMA node belonging to the calling reseller, each with the
end-customer tenants connected under it — the reseller-tier analog of
`GET /billingtransfer/v1/programmanagementaccounts`. `region`, `iamStatus` and
`lastRefreshTime` are inherited from the parent DPMA root; the reseller node itself
carries no IAM/region metadata of its own.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billingTransfer.listBillingTransferResellerAccountsWithTenants({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type ListResellerAccountsWithTenantsResponse
} catch (err) {
  // TODO: Handle 'err' of type BillingTransfer.ListBillingTransferResellerAccountsWithTenantsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billingTransfer
  .listBillingTransferResellerAccountsWithTenants({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResellerAccountsWithTenantsResponse
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
| <code>includeRevoked?</code> | <code>boolean</code> | If `true`, includes end-customer mappings that have been revoked. Defaults to `false` (revoked mappings are excluded).<br>**Default**: false |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.billingTransfer.listBillingTransferResellerAccountsWithTenants(request)`

- **OnSuccess**: <code>[ListResellerAccountsWithTenantsResponse](src/models/list-reseller-accounts-with-tenants-response.ts)</code>
- **OnError**: throws <code>[BillingTransfer.ListBillingTransferResellerAccountsWithTenantsError](src/resources/billing-transfer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billingTransfer.listBillingTransferResellerAccountsWithTenants(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResellerAccountsWithTenantsResponse, BillingTransfer.ListBillingTransferResellerAccountsWithTenantsError&gt;</code>, with `result.value` of type <code>[ListResellerAccountsWithTenantsResponse](src/models/list-reseller-accounts-with-tenants-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BudgetSuggestions

> Source: [BudgetSuggestions](src/resources/budget-suggestions.ts)

<details>
<summary><code>acceptBudgetSuggestion(request: BudgetSuggestions.AcceptBudgetSuggestionRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsV1BudgetSuggestionsActionsAcceptResponse, BudgetSuggestions.AcceptBudgetSuggestionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks the suggestion as accepted and links it to an existing budget. Create the budget first via
`POST /analytics/v1/budgets`, then pass its `id` as `budgetId`. The budget must belong to your account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgetSuggestions.acceptBudgetSuggestion({
    id: "some example string",
    body: { budgetId: "some example string" },
  });
  // TODO: Handle 'response' of type AnalyticsV1BudgetSuggestionsActionsAcceptResponse
} catch (err) {
  // TODO: Handle 'err' of type BudgetSuggestions.AcceptBudgetSuggestionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgetSuggestions
  .acceptBudgetSuggestion({ id: "some example string", body: { budgetId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsV1BudgetSuggestionsActionsAcceptResponse
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
| <code>id</code> | <code>string</code> | Budget suggestion ID. |
| <code>body</code> | <code>[BudgetSuggestionAcceptRequest](src/models/budget-suggestion-accept-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgetSuggestions.acceptBudgetSuggestion(request)`

- **OnSuccess**: <code>[AnalyticsV1BudgetSuggestionsActionsAcceptResponse](src/models/analytics-v1-budget-suggestions-actions-accept-response.ts)</code>
- **OnError**: throws <code>[BudgetSuggestions.AcceptBudgetSuggestionError](src/resources/budget-suggestions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgetSuggestions.acceptBudgetSuggestion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsV1BudgetSuggestionsActionsAcceptResponse, BudgetSuggestions.AcceptBudgetSuggestionError&gt;</code>, with `result.value` of type <code>[AnalyticsV1BudgetSuggestionsActionsAcceptResponse](src/models/analytics-v1-budget-suggestions-actions-accept-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dismissBudgetSuggestion(request: BudgetSuggestions.DismissBudgetSuggestionRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsV1BudgetSuggestionsActionsDismissResponse, BudgetSuggestions.DismissBudgetSuggestionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks the suggestion as dismissed so it no longer appears in the pending list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgetSuggestions.dismissBudgetSuggestion({ id: "some example string" });
  // TODO: Handle 'response' of type AnalyticsV1BudgetSuggestionsActionsDismissResponse
} catch (err) {
  // TODO: Handle 'err' of type BudgetSuggestions.DismissBudgetSuggestionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgetSuggestions
  .dismissBudgetSuggestion({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsV1BudgetSuggestionsActionsDismissResponse
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
| <code>id</code> | <code>string</code> | Budget suggestion ID. |
| <code>body?</code> | <code>[BudgetSuggestionDismissRequest](src/models/budget-suggestion-dismiss-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgetSuggestions.dismissBudgetSuggestion(request)`

- **OnSuccess**: <code>[AnalyticsV1BudgetSuggestionsActionsDismissResponse](src/models/analytics-v1-budget-suggestions-actions-dismiss-response.ts)</code>
- **OnError**: throws <code>[BudgetSuggestions.DismissBudgetSuggestionError](src/resources/budget-suggestions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgetSuggestions.dismissBudgetSuggestion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsV1BudgetSuggestionsActionsDismissResponse, BudgetSuggestions.DismissBudgetSuggestionError&gt;</code>, with `result.value` of type <code>[AnalyticsV1BudgetSuggestionsActionsDismissResponse](src/models/analytics-v1-budget-suggestions-actions-dismiss-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBudgetSuggestions(options?: RequestOptions): ApiPromise&lt;AnalyticsV1BudgetSuggestionsResponse, BudgetSuggestions.ListBudgetSuggestionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the pending AI-generated budget suggestions for your account. The set is small (a handful
of pending suggestions) and is returned in full. Each suggestion can be accepted (after you create a
matching budget via `POST /analytics/v1/budgets`) or dismissed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgetSuggestions.listBudgetSuggestions();
  // TODO: Handle 'response' of type AnalyticsV1BudgetSuggestionsResponse
} catch (err) {
  // TODO: Handle 'err' of type BudgetSuggestions.ListBudgetSuggestionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgetSuggestions.listBudgetSuggestions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsV1BudgetSuggestionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgetSuggestions.listBudgetSuggestions()`

- **OnSuccess**: <code>[AnalyticsV1BudgetSuggestionsResponse](src/models/analytics-v1-budget-suggestions-response.ts)</code>
- **OnError**: throws <code>[BudgetSuggestions.ListBudgetSuggestionsError](src/resources/budget-suggestions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgetSuggestions.listBudgetSuggestions().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsV1BudgetSuggestionsResponse, BudgetSuggestions.ListBudgetSuggestionsError&gt;</code>, with `result.value` of type <code>[AnalyticsV1BudgetSuggestionsResponse](src/models/analytics-v1-budget-suggestions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Budgets

> Source: [Budgets](src/resources/budgets.ts)

<details>
<summary><code>createBudget(request?: Budgets.CreateBudgetRequest, options?: RequestOptions): ApiPromise&lt;BudgetApi, Budgets.CreateBudgetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new budget

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.createBudget({
    body: {
      amount: 100,
      collaborators: [{ email: "placeholder@example.com", role: Role.Owner }],
      currency: Currency.Usd,
      name: "monthly-cloud-budget",
      scopes: [
        { id: "cloud_provider", type: DimensionsTypes.Fixed, values: ["amazon-web-services"], mode: Mode.Is },
      ],
      startPeriod: 1704067200000,
      timeInterval: "month",
      type: "recurring",
      usePrevSpend: false,
    },
  });
  // TODO: Handle 'response' of type BudgetApi
} catch (err) {
  // TODO: Handle 'err' of type Budgets.CreateBudgetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets
  .createBudget({
    body: {
      amount: 100,
      collaborators: [{ email: "placeholder@example.com", role: Role.Owner }],
      currency: Currency.Usd,
      name: "monthly-cloud-budget",
      scopes: [
        { id: "cloud_provider", type: DimensionsTypes.Fixed, values: ["amazon-web-services"], mode: Mode.Is },
      ],
      startPeriod: 1704067200000,
      timeInterval: "month",
      type: "recurring",
      usePrevSpend: false,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BudgetApi
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
| <code>body?</code> | <code>[BudgetCreateUpdateRequest](src/models/budget-create-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.createBudget(request)`

- **OnSuccess**: <code>[BudgetApi](src/models/budget-api.ts)</code>
- **OnError**: throws <code>[Budgets.CreateBudgetError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.createBudget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BudgetApi, Budgets.CreateBudgetError&gt;</code>, with `result.value` of type <code>[BudgetApi](src/models/budget-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBudget(request: Budgets.DeleteBudgetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Budgets.DeleteBudgetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified budget.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.deleteBudget({ id: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Budgets.DeleteBudgetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets.deleteBudget({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | Budget ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.deleteBudget(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Budgets.DeleteBudgetError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.deleteBudget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Budgets.DeleteBudgetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBudget(request: Budgets.GetBudgetRequest, options?: RequestOptions): ApiPromise&lt;BudgetApi, Budgets.GetBudgetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current utilization and configuration of the specified budget.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.getBudget({ id: "some example string" });
  // TODO: Handle 'response' of type BudgetApi
} catch (err) {
  // TODO: Handle 'err' of type Budgets.GetBudgetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets.getBudget({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BudgetApi
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
| <code>id</code> | <code>string</code> | Budget ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.getBudget(request)`

- **OnSuccess**: <code>[BudgetApi](src/models/budget-api.ts)</code>
- **OnError**: throws <code>[Budgets.GetBudgetError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.getBudget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BudgetApi, Budgets.GetBudgetError&gt;</code>, with `result.value` of type <code>[BudgetApi](src/models/budget-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBudgets(request?: Budgets.ListBudgetsRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsV1BudgetsResponse, Budgets.ListBudgetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of budgets that your account has access to. Budgets are listed in reverse chronological order by default.
Each budget includes a server-computed `riskStatus` (`atRisk`, `onTrack`, or `unknown`), and the response includes a `riskAggregations` summary of risk counts across the full filtered result set (all pages, not just the current page).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.listBudgets({
    filter: "riskStatus:atRisk",
    nameContains: "monthly spend",
  });
  // TODO: Handle 'response' of type AnalyticsV1BudgetsResponse
} catch (err) {
  // TODO: Handle 'err' of type Budgets.ListBudgetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets
  .listBudgets({ filter: "riskStatus:atRisk", nameContains: "monthly spend" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsV1BudgetsResponse
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
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>filter?</code> | <code>string</code> | An expression for filtering the results of the request. The syntax is "key:[<value>]".<br>Available keys: owner, budgetName, lastModified in ms (>lasModified), riskStatus (one of "atRisk", "onTrack", "unknown"). Multiple filters can be connected using a pipe \|. Note that using different keys in the same filter results in "AND," while using the same key multiple times in the same filter results in "OR" (except riskStatus, where only the first occurrence is honored).<br>A budget is "atRisk" when it has already exceeded its configured amount, or its forecast projects it will exceed the configured amount before the current period ends. Budgets with no forecast data yet, a fixed budget whose period has already expired, or that are invalid/draft are classified "unknown". Filtering to riskStatus:atRisk sorts results by earliest projected breach date (day granularity) ascending instead of the default order; budgets that tie on breach day, including every already-breached budget, resolve to a fixed, repeatable order across requests rather than an arbitrary one.<br>Because riskStatus is computed from live, periodically-refreshed budget data, paginated results filtered by riskStatus may shift between page requests if budget data refreshes mid-pagination. |
| <code>nameContains?</code> | <code>string</code> | Case-insensitive substring match against the resource name. Combined with the "filter" parameter using AND semantics. |
| <code>minCreationTime?</code> | <code>string</code> | Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only reports created after or at this timestamp are returned. |
| <code>maxCreationTime?</code> | <code>string</code> | Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only reports created before or at this timestamp are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.listBudgets(request)`

- **OnSuccess**: <code>[AnalyticsV1BudgetsResponse](src/models/analytics-v1-budgets-response.ts)</code>
- **OnError**: throws <code>[Budgets.ListBudgetsError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.listBudgets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsV1BudgetsResponse, Budgets.ListBudgetsError&gt;</code>, with `result.value` of type <code>[AnalyticsV1BudgetsResponse](src/models/analytics-v1-budgets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBudget(request: Budgets.UpdateBudgetRequest, options?: RequestOptions): ApiPromise&lt;BudgetApi, Budgets.UpdateBudgetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified budget.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.budgets.updateBudget({ id: "some example string" });
  // TODO: Handle 'response' of type BudgetApi
} catch (err) {
  // TODO: Handle 'err' of type Budgets.UpdateBudgetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.budgets.updateBudget({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BudgetApi
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[BudgetCreateUpdateRequest](src/models/budget-create-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.budgets.updateBudget(request)`

- **OnSuccess**: <code>[BudgetApi](src/models/budget-api.ts)</code>
- **OnError**: throws <code>[Budgets.UpdateBudgetError](src/resources/budgets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.budgets.updateBudget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BudgetApi, Budgets.UpdateBudgetError&gt;</code>, with `result.value` of type <code>[BudgetApi](src/models/budget-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CloudConnect

> Source: [CloudConnect](src/resources/cloud-connect.ts)

<details>
<summary><code>createAccountRole(request: CloudConnect.CreateAccountRoleRequest, options?: RequestOptions): ApiPromise&lt;AwsAccountResponse, CloudConnect.CreateAccountRoleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a CloudConnect document for an AWS account.
Unlike the CloudFormation variant, this endpoint does not update Firestore channel documents
or require a CloudFormation stack ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnect.createAccountRole({
    body: {
      accountId: "some example string",
      roleArn: "some example string",
      enabledFeatures: ["some example string"],
    },
  });
  // TODO: Handle 'response' of type AwsAccountResponse
} catch (err) {
  // TODO: Handle 'err' of type CloudConnect.CreateAccountRoleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnect
  .createAccountRole({
    body: {
      accountId: "some example string",
      roleArn: "some example string",
      enabledFeatures: ["some example string"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AwsAccountResponse
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
| <code>body</code> | <code>[CoreV1CloudconnectAwsAccountsRequest](src/models/core-v1-cloudconnect-aws-accounts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudConnect.createAccountRole(request)`

- **OnSuccess**: <code>[AwsAccountResponse](src/models/aws-account-response.ts)</code>
- **OnError**: throws <code>[CloudConnect.CreateAccountRoleError](src/resources/cloud-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudConnect.createAccountRole(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AwsAccountResponse, CloudConnect.CreateAccountRoleError&gt;</code>, with `result.value` of type <code>[AwsAccountResponse](src/models/aws-account-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAccountRole(request: CloudConnect.DeleteAccountRoleRequest, options?: RequestOptions): ApiPromise&lt;undefined, CloudConnect.DeleteAccountRoleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a CloudConnect document for an AWS account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.cloudConnect.deleteAccountRole({ accountId: "123456789012" });
} catch (err) {
  // TODO: Handle 'err' of type CloudConnect.DeleteAccountRoleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnect.deleteAccountRole({ accountId: "123456789012" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>accountId</code> | <code>string</code> | The AWS account ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudConnect.deleteAccountRole(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CloudConnect.DeleteAccountRoleError](src/resources/cloud-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudConnect.deleteAccountRole(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CloudConnect.DeleteAccountRoleError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAwsAccount(request: CloudConnect.GetAwsAccountRequest, options?: RequestOptions): ApiPromise&lt;AwsAccountResponse, CloudConnect.GetAwsAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current state of an AWS account including role, supported features, and optional S3 bucket configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnect.getAwsAccount({ accountId: "123456789012" });
  // TODO: Handle 'response' of type AwsAccountResponse
} catch (err) {
  // TODO: Handle 'err' of type CloudConnect.GetAwsAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnect.getAwsAccount({ accountId: "123456789012" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AwsAccountResponse
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
| <code>accountId</code> | <code>string</code> | The AWS account ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudConnect.getAwsAccount(request)`

- **OnSuccess**: <code>[AwsAccountResponse](src/models/aws-account-response.ts)</code>
- **OnError**: throws <code>[CloudConnect.GetAwsAccountError](src/resources/cloud-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudConnect.getAwsAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AwsAccountResponse, CloudConnect.GetAwsAccountError&gt;</code>, with `result.value` of type <code>[AwsAccountResponse](src/models/aws-account-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCloudConnectSupportedFeatures(request: CloudConnect.GetCloudConnectSupportedFeaturesRequest, options?: RequestOptions): ApiPromise&lt;SupportedFeaturesResponse, CloudConnect.GetCloudConnectSupportedFeaturesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of supported features and their permission status for a cloud account connected via CloudConnect.
The account must belong to the authenticated customer. Supports AWS and Azure accounts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnect.getCloudConnectSupportedFeatures({
    accountId: "some example string",
  });
  // TODO: Handle 'response' of type SupportedFeaturesResponse
} catch (err) {
  // TODO: Handle 'err' of type CloudConnect.GetCloudConnectSupportedFeaturesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnect
  .getCloudConnectSupportedFeatures({ accountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SupportedFeaturesResponse
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
| <code>accountId</code> | <code>string</code> | The cloud provider account ID (AWS account ID or Azure tenant ID). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudConnect.getCloudConnectSupportedFeatures(request)`

- **OnSuccess**: <code>[SupportedFeaturesResponse](src/models/supported-features-response.ts)</code>
- **OnError**: throws <code>[CloudConnect.GetCloudConnectSupportedFeaturesError](src/resources/cloud-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudConnect.getCloudConnectSupportedFeatures(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SupportedFeaturesResponse, CloudConnect.GetCloudConnectSupportedFeaturesError&gt;</code>, with `result.value` of type <code>[SupportedFeaturesResponse](src/models/supported-features-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAwsFeature(request: CloudConnect.UpdateAwsFeatureRequest, options?: RequestOptions): ApiPromise&lt;AwsAccountResponse, CloudConnect.UpdateAwsFeatureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an AWS feature for an existing CloudConnect account.
Unlike the CloudFormation variant, this endpoint does not update Firestore channel documents,
require a CloudFormation stack ID, or handle StackSet member role ARNs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnect.updateAwsFeature({
    accountId: "123456789012",
    body: { enabledFeatures: ["some example string"] },
  });
  // TODO: Handle 'response' of type AwsAccountResponse
} catch (err) {
  // TODO: Handle 'err' of type CloudConnect.UpdateAwsFeatureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnect
  .updateAwsFeature({ accountId: "123456789012", body: { enabledFeatures: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AwsAccountResponse
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
| <code>accountId</code> | <code>string</code> | The AWS account ID. |
| <code>body</code> | <code>[CoreV1CloudconnectAwsAccountsRequest1](src/models/core-v1-cloudconnect-aws-accounts-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudConnect.updateAwsFeature(request)`

- **OnSuccess**: <code>[AwsAccountResponse](src/models/aws-account-response.ts)</code>
- **OnError**: throws <code>[CloudConnect.UpdateAwsFeatureError](src/resources/cloud-connect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudConnect.updateAwsFeature(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AwsAccountResponse, CloudConnect.UpdateAwsFeatureError&gt;</code>, with `result.value` of type <code>[AwsAccountResponse](src/models/aws-account-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CloudDiagrams

> Source: [CloudDiagrams](src/resources/cloud-diagrams.ts)

<details>
<summary><code>exportCloudDiagramJson(request: CloudDiagrams.ExportCloudDiagramJsonRequest, options?: RequestOptions): ApiPromise&lt;CloudDiagramExportJsonResponse, CloudDiagrams.ExportCloudDiagramJsonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports the full content of a diagram layer as a structured JSON document,
including all components and export metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudDiagrams.exportCloudDiagramJson({ id: "some example string" });
  // TODO: Handle 'response' of type CloudDiagramExportJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type CloudDiagrams.ExportCloudDiagramJsonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudDiagrams.exportCloudDiagramJson({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudDiagramExportJsonResponse
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
| <code>id</code> | <code>string</code> | Layer ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudDiagrams.exportCloudDiagramJson(request)`

- **OnSuccess**: <code>[CloudDiagramExportJsonResponse](src/models/cloud-diagram-export-json-response.ts)</code>
- **OnError**: throws <code>[CloudDiagrams.ExportCloudDiagramJsonError](src/resources/cloud-diagrams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudDiagrams.exportCloudDiagramJson(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudDiagramExportJsonResponse, CloudDiagrams.ExportCloudDiagramJsonError&gt;</code>, with `result.value` of type <code>[CloudDiagramExportJsonResponse](src/models/cloud-diagram-export-json-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findCloudDiagrams(request: CloudDiagrams.FindCloudDiagramsRequestParams, options?: RequestOptions): ApiPromise&lt;FindCloudDiagramsResponse[], CloudDiagrams.FindCloudDiagramsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns diagram URLs matching the provided resource IDs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudDiagrams.findCloudDiagrams({
    body: { resources: ["some example string"] },
  });
  // TODO: Handle 'response' of type FindCloudDiagramsResponse[]
} catch (err) {
  // TODO: Handle 'err' of type CloudDiagrams.FindCloudDiagramsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudDiagrams
  .findCloudDiagrams({ body: { resources: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FindCloudDiagramsResponse[]
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
| <code>body</code> | <code>[FindCloudDiagramsRequest](src/models/find-cloud-diagrams-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudDiagrams.findCloudDiagrams(request)`

- **OnSuccess**: <code>[FindCloudDiagramsResponse](src/models/find-cloud-diagrams-response.ts)[]</code>
- **OnError**: throws <code>[CloudDiagrams.FindCloudDiagramsError](src/resources/cloud-diagrams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudDiagrams.findCloudDiagrams(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FindCloudDiagramsResponse[], CloudDiagrams.FindCloudDiagramsError&gt;</code>, with `result.value` of type <code>[FindCloudDiagramsResponse](src/models/find-cloud-diagrams-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCloudDiagramComponents(request?: CloudDiagrams.GetCloudDiagramComponentsRequest, options?: RequestOptions): ApiPromise&lt;CloudDiagramsGetResponse, CloudDiagrams.GetCloudDiagramComponentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns diagram and layer data. When the request body is empty, returns all diagrams
the caller has access to. When the body is populated, returns full diagram data including
layer components projected to key display and cloud fields.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudDiagrams.getCloudDiagramComponents();
  // TODO: Handle 'response' of type CloudDiagramsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type CloudDiagrams.GetCloudDiagramComponentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudDiagrams.getCloudDiagramComponents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudDiagramsGetResponse
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
| <code>components?</code> | <code>boolean</code> | Include components in the layer response. |
| <code>external?</code> | <code>boolean</code> | Include external (cross-diagram) components. |
| <code>element?</code> | <code>boolean</code> | Include elements. |
| <code>link?</code> | <code>boolean</code> | Include links. |
| <code>group?</code> | <code>boolean</code> | Include groups. |
| <code>note?</code> | <code>boolean</code> | Include notes. |
| <code>combiner?</code> | <code>boolean</code> | Include combiners. |
| <code>type?</code> | <code>[Type10](src/models/type10.ts)[]</code> | Filter diagrams by type. |
| <code>nodeType?</code> | <code>[NodeType1](src/models/node-type1.ts)</code> | Filter components by node type. |
| <code>alarmsCount?</code> | <code>boolean</code> | Include alarm counts (default true). |
| <code>issuesCount?</code> | <code>boolean</code> | Include issue counts. |
| <code>skipEmpty?</code> | <code>boolean</code> | Omit diagrams that have no components. |
| <code>excludeDefaultVpc?</code> | <code>boolean</code> | Exclude the default VPC group (default true). |
| <code>excludeEmptySubnets?</code> | <code>boolean</code> | Exclude empty subnet groups (default true). |
| <code>body?</code> | <code>[CloudDiagramsGetRequest](src/models/cloud-diagrams-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudDiagrams.getCloudDiagramComponents(request)`

- **OnSuccess**: <code>[CloudDiagramsGetResponse](src/models/cloud-diagrams-get-response.ts)</code>
- **OnError**: throws <code>[CloudDiagrams.GetCloudDiagramComponentsError](src/resources/cloud-diagrams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudDiagrams.getCloudDiagramComponents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudDiagramsGetResponse, CloudDiagrams.GetCloudDiagramComponentsError&gt;</code>, with `result.value` of type <code>[CloudDiagramsGetResponse](src/models/cloud-diagrams-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCloudDiagramCostSnapshot(request: CloudDiagrams.GetCloudDiagramCostSnapshotRequest, options?: RequestOptions): ApiPromise&lt;CloudDiagramCostSnapshot, CloudDiagrams.GetCloudDiagramCostSnapshotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a bounded cost snapshot for the specified diagram layer over a date window.
The response composes the diagram's total spend, period-over-period change, top
resources by cost (capped at 5), top services by cost (capped at 5), and a trend
series (most recent 12 buckets at the requested interval).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudDiagrams.getCloudDiagramCostSnapshot({
    id: "some example string",
    startDate: "2024-01-15",
    endDate: "2024-01-15",
  });
  // TODO: Handle 'response' of type CloudDiagramCostSnapshot
} catch (err) {
  // TODO: Handle 'err' of type CloudDiagrams.GetCloudDiagramCostSnapshotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudDiagrams
  .getCloudDiagramCostSnapshot({ id: "some example string", startDate: "2024-01-15", endDate: "2024-01-15" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudDiagramCostSnapshot
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
| <code>id</code> | <code>string</code> | Layer ID. |
| <code>startDate</code> | <code>string</code> (date) | Inclusive start of the cost window (ISO date, e.g. `2026-04-01`). |
| <code>endDate</code> | <code>string</code> (date) | Inclusive end of the cost window (ISO date, e.g. `2026-04-28`). |
| <code>interval?</code> | <code>[Interval1](src/models/interval1.ts)</code> | Bucket interval for the trend series. Defaults to `day` when omitted. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudDiagrams.getCloudDiagramCostSnapshot(request)`

- **OnSuccess**: <code>[CloudDiagramCostSnapshot](src/models/cloud-diagram-cost-snapshot.ts)</code>
- **OnError**: throws <code>[CloudDiagrams.GetCloudDiagramCostSnapshotError](src/resources/cloud-diagrams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudDiagrams.getCloudDiagramCostSnapshot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudDiagramCostSnapshot, CloudDiagrams.GetCloudDiagramCostSnapshotError&gt;</code>, with `result.value` of type <code>[CloudDiagramCostSnapshot](src/models/cloud-diagram-cost-snapshot.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCloudDiagramLayerSnapshot(request: CloudDiagrams.GetCloudDiagramLayerSnapshotRequest, options?: RequestOptions): ApiPromise&lt;CloudDiagramLayerSnapshot, CloudDiagrams.GetCloudDiagramLayerSnapshotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single snapshot of the specified diagram layer identified by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudDiagrams.getCloudDiagramLayerSnapshot({
    id: "some example string",
    snapshotId: "some example string",
  });
  // TODO: Handle 'response' of type CloudDiagramLayerSnapshot
} catch (err) {
  // TODO: Handle 'err' of type CloudDiagrams.GetCloudDiagramLayerSnapshotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudDiagrams
  .getCloudDiagramLayerSnapshot({ id: "some example string", snapshotId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudDiagramLayerSnapshot
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
| <code>id</code> | <code>string</code> | Layer ID. |
| <code>snapshotId</code> | <code>string</code> | Snapshot ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudDiagrams.getCloudDiagramLayerSnapshot(request)`

- **OnSuccess**: <code>[CloudDiagramLayerSnapshot](src/models/cloud-diagram-layer-snapshot.ts)</code>
- **OnError**: throws <code>[CloudDiagrams.GetCloudDiagramLayerSnapshotError](src/resources/cloud-diagrams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudDiagrams.getCloudDiagramLayerSnapshot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudDiagramLayerSnapshot, CloudDiagrams.GetCloudDiagramLayerSnapshotError&gt;</code>, with `result.value` of type <code>[CloudDiagramLayerSnapshot](src/models/cloud-diagram-layer-snapshot.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCloudDiagramResourceRelationships(request: CloudDiagrams.GetCloudDiagramResourceRelationshipsRequest, options?: RequestOptions): ApiPromise&lt;DiagramRelationshipsResponse, CloudDiagrams.GetCloudDiagramResourceRelationshipsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Walks the diagram graph from the anchor resource and returns related resources.
Edge traversal walks the diagram's link set (same-scheme guard, BFS, cycle-safe);
group traversal walks the group membership set. The result list is capped at 200
relations; `truncated` is `true` when the cap is hit. Read-only: does not mutate
diagram state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudDiagrams.getCloudDiagramResourceRelationships({
    id: "some example string",
    rid: "some example string",
  });
  // TODO: Handle 'response' of type DiagramRelationshipsResponse
} catch (err) {
  // TODO: Handle 'err' of type CloudDiagrams.GetCloudDiagramResourceRelationshipsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudDiagrams
  .getCloudDiagramResourceRelationships({ id: "some example string", rid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiagramRelationshipsResponse
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
| <code>id</code> | <code>string</code> | Diagram (layer) ID. |
| <code>rid</code> | <code>string</code> | Anchor resource ID — must exist as a node, element, or group on the diagram. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | Edge direction relative to the anchor. `both` returns upstream and downstream neighbours. Defaults to `both`.<br>**Default**: "both" |
| <code>depth?</code> | <code>[Depth](src/models/depth.ts)</code> | `direct` returns one-hop neighbours; `transitive` runs a cycle-safe BFS to the<br>connected component (still capped at 200 relations). Defaults to `direct`.<br>**Default**: "direct" |
| <code>kind?</code> | <code>[Kind](src/models/kind.ts)</code> | `edges` walks the link graph; `group_members` walks group membership (children<br>and parent groups); `both` merges the two and dedupes by id, preserving the<br>smallest observed hop count. Defaults to `edges`.<br>**Default**: "edges" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudDiagrams.getCloudDiagramResourceRelationships(request)`

- **OnSuccess**: <code>[DiagramRelationshipsResponse](src/models/diagram-relationships-response.ts)</code>
- **OnError**: throws <code>[CloudDiagrams.GetCloudDiagramResourceRelationshipsError](src/resources/cloud-diagrams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudDiagrams.getCloudDiagramResourceRelationships(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiagramRelationshipsResponse, CloudDiagrams.GetCloudDiagramResourceRelationshipsError&gt;</code>, with `result.value` of type <code>[DiagramRelationshipsResponse](src/models/diagram-relationships-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCloudDiagramsStats(request: CloudDiagrams.GetCloudDiagramsStatsRequest, options?: RequestOptions): ApiPromise&lt;CloudDiagramStats[], CloudDiagrams.GetCloudDiagramsStatsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all diagrams with activity stats for the given time period.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudDiagrams.getCloudDiagramsStats({
    start: new Date(Date.UTC(2026, 3, 1, 0, 0, 0)),
    end: new Date(Date.UTC(2026, 3, 28, 0, 0, 0)),
  });
  // TODO: Handle 'response' of type CloudDiagramStats[]
} catch (err) {
  // TODO: Handle 'err' of type CloudDiagrams.GetCloudDiagramsStatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudDiagrams
  .getCloudDiagramsStats({
    start: new Date(Date.UTC(2026, 3, 1, 0, 0, 0)),
    end: new Date(Date.UTC(2026, 3, 28, 0, 0, 0)),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudDiagramStats[]
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
| <code>start</code> | <code>Date</code> (date-time) | Start of the period. |
| <code>end</code> | <code>Date</code> (date-time) | End of the period. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudDiagrams.getCloudDiagramsStats(request)`

- **OnSuccess**: <code>[CloudDiagramStats](src/models/cloud-diagram-stats.ts)[]</code>
- **OnError**: throws <code>[CloudDiagrams.GetCloudDiagramsStatsError](src/resources/cloud-diagrams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudDiagrams.getCloudDiagramsStats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudDiagramStats[], CloudDiagrams.GetCloudDiagramsStatsError&gt;</code>, with `result.value` of type <code>[CloudDiagramStats](src/models/cloud-diagram-stats.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStatussheetComponents(request: CloudDiagrams.GetStatussheetComponentsRequest, options?: RequestOptions): ApiPromise&lt;CloudDiagramStatussheetComponents, CloudDiagrams.GetStatussheetComponentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified components of a diagram layer. Provide at least one component
type with one or more IDs in the request body (for example, `node` or `element`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudDiagrams.getStatussheetComponents({
    id: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type CloudDiagramStatussheetComponents
} catch (err) {
  // TODO: Handle 'err' of type CloudDiagrams.GetStatussheetComponentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudDiagrams
  .getStatussheetComponents({ id: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudDiagramStatussheetComponents
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
| <code>id</code> | <code>string</code> | Layer ID. |
| <code>p?</code> | <code>string</code> | Space-separated projection fields for component documents. |
| <code>body</code> | <code>[CloudDiagramStatussheetGetRequest](src/models/cloud-diagram-statussheet-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudDiagrams.getStatussheetComponents(request)`

- **OnSuccess**: <code>[CloudDiagramStatussheetComponents](src/models/cloud-diagram-statussheet-components.ts)</code>
- **OnError**: throws <code>[CloudDiagrams.GetStatussheetComponentsError](src/resources/cloud-diagrams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudDiagrams.getStatussheetComponents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudDiagramStatussheetComponents, CloudDiagrams.GetStatussheetComponentsError&gt;</code>, with `result.value` of type <code>[CloudDiagramStatussheetComponents](src/models/cloud-diagram-statussheet-components.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCloudDiagramActivityGroups(request: CloudDiagrams.ListCloudDiagramActivityGroupsRequest, options?: RequestOptions): ApiPromise&lt;CloudDiagramSnapshotActivityGroup[], CloudDiagrams.ListCloudDiagramActivityGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns snapshot activity groups for the specified diagram layer,
ordered by timestamp descending. Each group contains a snapshot reference
and the individual activity records that belong to it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudDiagrams.listCloudDiagramActivityGroups({ ssId: "some example string" });
  // TODO: Handle 'response' of type CloudDiagramSnapshotActivityGroup[]
} catch (err) {
  // TODO: Handle 'err' of type CloudDiagrams.ListCloudDiagramActivityGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudDiagrams
  .listCloudDiagramActivityGroups({ ssId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudDiagramSnapshotActivityGroup[]
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
| <code>ssId</code> | <code>string</code> | Layer ID. |
| <code>limit?</code> | <code>number</code> | Maximum number of groups to return (default 10). |
| <code>offset?</code> | <code>number</code> | Number of groups to skip (default 0). |
| <code>tags?</code> | <code>string[]</code> | Filter by tags. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudDiagrams.listCloudDiagramActivityGroups(request)`

- **OnSuccess**: <code>[CloudDiagramSnapshotActivityGroup](src/models/cloud-diagram-snapshot-activity-group.ts)[]</code>
- **OnError**: throws <code>[CloudDiagrams.ListCloudDiagramActivityGroupsError](src/resources/cloud-diagrams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudDiagrams.listCloudDiagramActivityGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudDiagramSnapshotActivityGroup[], CloudDiagrams.ListCloudDiagramActivityGroupsError&gt;</code>, with `result.value` of type <code>[CloudDiagramSnapshotActivityGroup](src/models/cloud-diagram-snapshot-activity-group.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCloudDiagramLayerSnapshots(request: CloudDiagrams.ListCloudDiagramLayerSnapshotsRequest, options?: RequestOptions): ApiPromise&lt;CloudDiagramLayerSnapshot[], CloudDiagrams.ListCloudDiagramLayerSnapshotsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of saved snapshots for the specified diagram layer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudDiagrams.listCloudDiagramLayerSnapshots({ id: "some example string" });
  // TODO: Handle 'response' of type CloudDiagramLayerSnapshot[]
} catch (err) {
  // TODO: Handle 'err' of type CloudDiagrams.ListCloudDiagramLayerSnapshotsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudDiagrams
  .listCloudDiagramLayerSnapshots({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudDiagramLayerSnapshot[]
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
| <code>id</code> | <code>string</code> | Layer ID. |
| <code>offset?</code> | <code>number</code> | Number of snapshots to skip (default 0). |
| <code>limit?</code> | <code>number</code> | Maximum number of snapshots to return (default 10). |
| <code>sort?</code> | <code>string</code> | Sort expression (e.g. "-createdAt" for descending). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudDiagrams.listCloudDiagramLayerSnapshots(request)`

- **OnSuccess**: <code>[CloudDiagramLayerSnapshot](src/models/cloud-diagram-layer-snapshot.ts)[]</code>
- **OnError**: throws <code>[CloudDiagrams.ListCloudDiagramLayerSnapshotsError](src/resources/cloud-diagrams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudDiagrams.listCloudDiagramLayerSnapshots(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudDiagramLayerSnapshot[], CloudDiagrams.ListCloudDiagramLayerSnapshotsError&gt;</code>, with `result.value` of type <code>[CloudDiagramLayerSnapshot](src/models/cloud-diagram-layer-snapshot.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCloudDiagramNodeActivities(request: CloudDiagrams.ListCloudDiagramNodeActivitiesRequest, options?: RequestOptions): ApiPromise&lt;CloudDiagramNodeActivity[], CloudDiagrams.ListCloudDiagramNodeActivitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns individual activity records for the specified component node, ordered by timestamp descending.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudDiagrams.listCloudDiagramNodeActivities({
    ssId: "some example string",
    nodeId: "some example string",
  });
  // TODO: Handle 'response' of type CloudDiagramNodeActivity[]
} catch (err) {
  // TODO: Handle 'err' of type CloudDiagrams.ListCloudDiagramNodeActivitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudDiagrams
  .listCloudDiagramNodeActivities({ ssId: "some example string", nodeId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudDiagramNodeActivity[]
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
| <code>ssId</code> | <code>string</code> | Layer ID. |
| <code>nodeId</code> | <code>string</code> | Node component ID. |
| <code>limit?</code> | <code>number</code> | Maximum number of records to return (default 50). |
| <code>offset?</code> | <code>number</code> | Number of records to skip (default 0). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudDiagrams.listCloudDiagramNodeActivities(request)`

- **OnSuccess**: <code>[CloudDiagramNodeActivity](src/models/cloud-diagram-node-activity.ts)[]</code>
- **OnError**: throws <code>[CloudDiagrams.ListCloudDiagramNodeActivitiesError](src/resources/cloud-diagrams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudDiagrams.listCloudDiagramNodeActivities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudDiagramNodeActivity[], CloudDiagrams.ListCloudDiagramNodeActivitiesError&gt;</code>, with `result.value` of type <code>[CloudDiagramNodeActivity](src/models/cloud-diagram-node-activity.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCloudDiagrams(request: CloudDiagrams.SearchCloudDiagramsRequest, options?: RequestOptions): ApiPromise&lt;CloudDiagramsSearchResponse, CloudDiagrams.SearchCloudDiagramsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Full-text search across diagram layers, components by name, and components
by property values. Returns three result categories: diagram (matching layers), component
(matching components by name), and prop (matching components by property values).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudDiagrams.searchCloudDiagrams({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type CloudDiagramsSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type CloudDiagrams.SearchCloudDiagramsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudDiagrams
  .searchCloudDiagrams({ body: { query: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudDiagramsSearchResponse
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
| <code>body</code> | <code>[CloudDiagramsSearchRequest](src/models/cloud-diagrams-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudDiagrams.searchCloudDiagrams(request)`

- **OnSuccess**: <code>[CloudDiagramsSearchResponse](src/models/cloud-diagrams-search-response.ts)</code>
- **OnError**: throws <code>[CloudDiagrams.SearchCloudDiagramsError](src/resources/cloud-diagrams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudDiagrams.searchCloudDiagrams(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudDiagramsSearchResponse, CloudDiagrams.SearchCloudDiagramsError&gt;</code>, with `result.value` of type <code>[CloudDiagramsSearchResponse](src/models/cloud-diagrams-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CloudIncidents

> Source: [CloudIncidents](src/resources/cloud-incidents.ts)

<details>
<summary><code>getKnownIssue(request: CloudIncidents.GetKnownIssueRequest, options?: RequestOptions): ApiPromise&lt;CoreV1CloudincidentsResponse1, CloudIncidents.GetKnownIssueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified cloud incident.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudIncidents.getKnownIssue({ id: "some example string" });
  // TODO: Handle 'response' of type CoreV1CloudincidentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type CloudIncidents.GetKnownIssueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudIncidents.getKnownIssue({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoreV1CloudincidentsResponse1
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
| <code>id</code> | <code>string</code> | The unique id of a cloud incident. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudIncidents.getKnownIssue(request)`

- **OnSuccess**: <code>[CoreV1CloudincidentsResponse1](src/models/core-v1-cloudincidents-response1.ts)</code>
- **OnError**: throws <code>[CloudIncidents.GetKnownIssueError](src/resources/cloud-incidents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudIncidents.getKnownIssue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoreV1CloudincidentsResponse1, CloudIncidents.GetKnownIssueError&gt;</code>, with `result.value` of type <code>[CoreV1CloudincidentsResponse1](src/models/core-v1-cloudincidents-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listKnownIssues(request?: CloudIncidents.ListKnownIssuesRequest, options?: RequestOptions): ApiPromise&lt;CoreV1CloudincidentsResponse, CloudIncidents.ListKnownIssuesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the active and historical cloud incidents for Google Cloud and Amazon Web Services.
Incidents are returned in reverse chronological order by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudIncidents.listKnownIssues();
  // TODO: Handle 'response' of type CoreV1CloudincidentsResponse
} catch (err) {
  // TODO: Handle 'err' of type CloudIncidents.ListKnownIssuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudIncidents.listKnownIssues().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CoreV1CloudincidentsResponse
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
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>filter?</code> | <code>string</code> | An expression for filtering the results. The syntax is `key:[<value>]`. Multiple filters can be connected using a pipe \|. See [Filters](https://developer.doit.com/docs/filters). |
| <code>minCreationTime?</code> | <code>string</code> | Min value for the cloud incident creation time, in milliseconds since the POSIX epoch. If set, only cloud incidents created after or at this timestamp are returned. |
| <code>maxCreationTime?</code> | <code>string</code> | Max value for the cloud incident creation time, in milliseconds since the POSIX epoch. If set, only cloud incidents created before or at this<br>timestamp are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudIncidents.listKnownIssues(request)`

- **OnSuccess**: <code>[CoreV1CloudincidentsResponse](src/models/core-v1-cloudincidents-response.ts)</code>
- **OnError**: throws <code>[CloudIncidents.ListKnownIssuesError](src/resources/cloud-incidents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudIncidents.listKnownIssues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CoreV1CloudincidentsResponse, CloudIncidents.ListKnownIssuesError&gt;</code>, with `result.value` of type <code>[CoreV1CloudincidentsResponse](src/models/core-v1-cloudincidents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CloudFlowApi

> Source: [CloudFlowApi](src/resources/cloud-flow-api.ts)

<details>
<summary><code>buildCloudFlow(request: CloudFlowApi.BuildCloudFlowRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;string&gt;, CloudFlowApi.BuildCloudFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new CloudFlow and generates its nodes and connections based on the provided natural language intent. The operation streams incremental build events, including the ID of the newly created flow, as they are produced.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.cloudFlowApi.buildCloudFlow({ body: { question: "some example string" } });
  for await (const event of stream) {
    // TODO: Handle 'event' of type string, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.BuildCloudFlowError, discriminated with 'err.payload.kind'
  // The loop's failures are DoiTError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi
  .buildCloudFlow({ body: { question: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<string>
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
| <code>body</code> | <code>[CloudFlowBuildRequest](src/models/cloud-flow-build-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.buildCloudFlow(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;string&gt;</code>
- **OnError**: throws <code>[CloudFlowApi.BuildCloudFlowError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.buildCloudFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;string&gt;, CloudFlowApi.BuildCloudFlowError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;string&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exportCloudflowFlow(request: CloudFlowApi.ExportCloudflowFlowRequest, options?: RequestOptions): ApiPromise&lt;CloudflowFlowBundle, CloudFlowApi.ExportCloudflowFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Serializes the flow — plus every flow it references through subflow nodes — into a
tenant-neutral, credential-free JSON bundle that can be imported into any tenant with
the import operation. Tenant-scoped references (connections, Datastore tables, global
variables) are declared as named requirements and rebound at import time; policy and
Slack-channel references cannot travel and are recorded as unsupported references.
The bundle never contains credentials, tenant identifiers, schedules, or execution state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudFlowApi.exportCloudflowFlow({ flowId: "some example string" });
  // TODO: Handle 'response' of type CloudflowFlowBundle
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.ExportCloudflowFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi.exportCloudflowFlow({ flowId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowFlowBundle
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
| <code>flowId</code> | <code>string</code> | The ID of the flow to export. |
| <code>includeVariableValues?</code> | <code>boolean</code> | When `false`, local and global variable values are stripped from the bundle; names,<br>types, and required-ness always travel. Connection-typed variable values are<br>references, not values, and always travel as requirement tokens.<br>**Default**: true |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.exportCloudflowFlow(request)`

- **OnSuccess**: <code>[CloudflowFlowBundle](src/models/cloudflow-flow-bundle.ts)</code>
- **OnError**: throws <code>[CloudFlowApi.ExportCloudflowFlowError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.exportCloudflowFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowFlowBundle, CloudFlowApi.ExportCloudflowFlowError&gt;</code>, with `result.value` of type <code>[CloudflowFlowBundle](src/models/cloudflow-flow-bundle.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCloudflowFlowRun(request: CloudFlowApi.GetCloudflowFlowRunRequest, options?: RequestOptions): ApiPromise&lt;CloudflowRun, CloudFlowApi.GetCloudflowFlowRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a run's status and, for each node, the JSON it consumed and produced. This is how
you find out *why* a run failed, or that it "succeeded" while producing the wrong data.

**`input` is null for most node types, and that is not an error.** Only action nodes — the
AWS, GCP, Azure, Oracle, DoiT and admin operations — record their inputs. Transform, code,
branch, switch, datastore, subflow and trigger nodes record none, so their `input` is
always null. `output` is recorded by every node that finishes, so read a transform's
behaviour from its `output`.

Payloads appear as soon as a node reports a terminal status, so a poll loop can read
results while later nodes are still running.

Any value the node's schema marks sensitive is replaced with a redaction marker;
credentials and connection configuration never appear.

Each `input` and `output` is capped at 64KB. When a payload exceeds that, whole entries
are dropped from the end, `truncated` is true, and `totalBytes` reports the untruncated
size — nothing is silently cut, and what you receive is always valid JSON.

Runs belonging to another tenant, or to a different flow, return `404`. Nodes inside a
fan-out currently report only the last path to finish.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudFlowApi.getCloudflowFlowRun({
    flowId: "some example string",
    runId: "some example string",
  });
  // TODO: Handle 'response' of type CloudflowRun
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.GetCloudflowFlowRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi
  .getCloudflowFlowRun({ flowId: "some example string", runId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowRun
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
| <code>flowId</code> | <code>string</code> | The ID of the flow the run belongs to. |
| <code>runId</code> | <code>string</code> | The run identifier, as returned when the run was started. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.getCloudflowFlowRun(request)`

- **OnSuccess**: <code>[CloudflowRun](src/models/cloudflow-run.ts)</code>
- **OnError**: throws <code>[CloudFlowApi.GetCloudflowFlowRunError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.getCloudflowFlowRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowRun, CloudFlowApi.GetCloudflowFlowRunError&gt;</code>, with `result.value` of type <code>[CloudflowRun](src/models/cloudflow-run.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCloudflowTemplate(request: CloudFlowApi.GetCloudflowTemplateRequest, options?: RequestOptions): ApiPromise&lt;CloudflowTemplate, CloudFlowApi.GetCloudflowTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single CloudFlow template by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudFlowApi.getCloudflowTemplate({ templateId: "some example string" });
  // TODO: Handle 'response' of type CloudflowTemplate
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.GetCloudflowTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi
  .getCloudflowTemplate({ templateId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowTemplate
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
| <code>templateId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.getCloudflowTemplate(request)`

- **OnSuccess**: <code>[CloudflowTemplate](src/models/cloudflow-template.ts)</code>
- **OnError**: throws <code>[CloudFlowApi.GetCloudflowTemplateError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.getCloudflowTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowTemplate, CloudFlowApi.GetCloudflowTemplateError&gt;</code>, with `result.value` of type <code>[CloudflowTemplate](src/models/cloudflow-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importCloudflowFlow(request: CloudFlowApi.ImportCloudflowFlowRequest, options?: RequestOptions): ApiPromise&lt;CloudflowImportPlan, CloudFlowApi.ImportCloudflowFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates every flow of a previously exported bundle in the authenticated tenant.
Imports are create-only: each call creates new draft flows with new IDs — nothing is
published and no schedule is activated until the target tenant publishes.

Requirements declared by the bundle are resolved through `bindings` (requirement key →
target-tenant resource ID). Unbound connections and Datastore tables leave the
referencing nodes flagged incomplete; unbound global variables are auto-created. Pass
`options.createMissingTables: true` to create missing Datastore tables from the schemas
embedded in the bundle (structure only, never row data).

**Dry-run**: pass `?dryRun=true` to validate without writing. The response is an import
plan: per-requirement resolutions with candidate bindings in the target tenant, the
flows that would be created, and every validation issue at once.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudFlowApi.importCloudflowFlow({
    idempotencyKey: "some example string",
    body: {
      bundle: {
        rootFlow: "some example string",
        flows: [
          {
            key: "some example string",
            name: "some example string",
            firstNode: "some example string",
            nodes: [{}],
          },
        ],
      },
    },
  });
  // TODO: Handle 'response' of type CloudflowImportPlan
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.ImportCloudflowFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi
  .importCloudflowFlow({
    idempotencyKey: "some example string",
    body: {
      bundle: {
        rootFlow: "some example string",
        flows: [
          {
            key: "some example string",
            name: "some example string",
            firstNode: "some example string",
            nodes: [{}],
          },
        ],
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowImportPlan
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
| <code>dryRun?</code> | <code>boolean</code> | If `true`, validates the bundle and resolves its requirements against the tenant<br>without committing changes, returning the import plan.<br>**Default**: false |
| <code>idempotencyKey</code> | <code>string</code> | Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).<br>Re-submitting the same key with the same request returns the cached response without<br>re-executing side effects. The server retains the key for at least 24 hours. |
| <code>body</code> | <code>[CloudflowImportFlowsRequest](src/models/cloudflow-import-flows-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.importCloudflowFlow(request)`

- **OnSuccess**: <code>[CloudflowImportPlan](src/models/cloudflow-import-plan.ts)</code>
- **OnError**: throws <code>[CloudFlowApi.ImportCloudflowFlowError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.importCloudflowFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowImportPlan, CloudFlowApi.ImportCloudflowFlowError&gt;</code>, with `result.value` of type <code>[CloudflowImportPlan](src/models/cloudflow-import-plan.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCloudflowFlowRuns(request: CloudFlowApi.ListCloudflowFlowRunsRequest, options?: RequestOptions): ApiPromise&lt;CloudflowRunList, CloudFlowApi.ListCloudflowFlowRunsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a flow's runs, newest first. Use `mode` to separate test runs from production
ones — test runs are included by default.

Per-node detail is not included here; fetch a single run to read what each node consumed
and produced.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudFlowApi.listCloudflowFlowRuns({ flowId: "some example string" });
  // TODO: Handle 'response' of type CloudflowRunList
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.ListCloudflowFlowRunsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi
  .listCloudflowFlowRuns({ flowId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowRunList
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
| <code>flowId</code> | <code>string</code> | The ID of the flow whose runs to list. |
| <code>maxResults?</code> | <code>number</code> | Maximum runs to return.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Continuation token from a previous response. |
| <code>mode?</code> | <code>[ModeDoiTCloudFlowApi](src/models/mode-doi-tcloud-flow-api.ts)</code> | Restrict the listing to one kind of run. Omit for both. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.listCloudflowFlowRuns(request)`

- **OnSuccess**: <code>[CloudflowRunList](src/models/cloudflow-run-list.ts)</code>
- **OnError**: throws <code>[CloudFlowApi.ListCloudflowFlowRunsError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.listCloudflowFlowRuns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowRunList, CloudFlowApi.ListCloudflowFlowRunsError&gt;</code>, with `result.value` of type <code>[CloudflowRunList](src/models/cloudflow-run-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCloudflowTemplates(request?: CloudFlowApi.ListCloudflowTemplatesRequest, options?: RequestOptions): ApiPromise&lt;CloudflowTemplateListResponse, CloudFlowApi.ListCloudflowTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the catalogue of available CloudFlow templates (blueprints). Templates are
read-only. To create a flow from a template, use `POST /flows` with a `templateId`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudFlowApi.listCloudflowTemplates();
  // TODO: Handle 'response' of type CloudflowTemplateListResponse
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.ListCloudflowTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi.listCloudflowTemplates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowTemplateListResponse
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
| <code>maxResults?</code> | <code>number</code> | Maximum number of templates to return (1–500). Defaults to 50.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Opaque cursor for the next page, taken from `pageToken` in the previous response. Omit to start from the beginning. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.listCloudflowTemplates(request)`

- **OnSuccess**: <code>[CloudflowTemplateListResponse](src/models/cloudflow-template-list-response.ts)</code>
- **OnError**: throws <code>[CloudFlowApi.ListCloudflowTemplatesError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.listCloudflowTemplates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowTemplateListResponse, CloudFlowApi.ListCloudflowTemplatesError&gt;</code>, with `result.value` of type <code>[CloudflowTemplateListResponse](src/models/cloudflow-template-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCloudflows(request?: CloudFlowApi.ListCloudflowsRequest, options?: RequestOptions): ApiPromise&lt;CloudflowListResponse, CloudFlowApi.ListCloudflowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a cursor-paginated list of CloudFlows.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudFlowApi.listCloudflows();
  // TODO: Handle 'response' of type CloudflowListResponse
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.ListCloudflowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi.listCloudflows().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowListResponse
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
| <code>maxResults?</code> | <code>number</code> | Maximum number of flows to return (1–500). Defaults to 50.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Opaque cursor for the next page, taken from `pageToken` in the previous response. Omit to start from the beginning. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.listCloudflows(request)`

- **OnSuccess**: <code>[CloudflowListResponse](src/models/cloudflow-list-response.ts)</code>
- **OnError**: throws <code>[CloudFlowApi.ListCloudflowsError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.listCloudflows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowListResponse, CloudFlowApi.ListCloudflowsError&gt;</code>, with `result.value` of type <code>[CloudflowListResponse](src/models/cloudflow-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refineCloudFlow(request: CloudFlowApi.RefineCloudFlowRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;string&gt;, CloudFlowApi.RefineCloudFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refines the specified CloudFlow by generating and updating nodes and connections based on the provided natural language intent. The operation streams incremental build events as they are produced.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.cloudFlowApi.refineCloudFlow({
    flowId: "some example string",
    body: { question: "some example string" },
  });
  for await (const event of stream) {
    // TODO: Handle 'event' of type string, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.RefineCloudFlowError, discriminated with 'err.payload.kind'
  // The loop's failures are DoiTError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi
  .refineCloudFlow({ flowId: "some example string", body: { question: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventStream<string>
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
| <code>flowId</code> | <code>string</code> | - |
| <code>body</code> | <code>[CloudFlowRefineRequest](src/models/cloud-flow-refine-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.refineCloudFlow(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;string&gt;</code>
- **OnError**: throws <code>[CloudFlowApi.RefineCloudFlowError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.refineCloudFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;string&gt;, CloudFlowApi.RefineCloudFlowError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;string&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopCloudflowFlow(request: CloudFlowApi.StopCloudflowFlowRequest, options?: RequestOptions): ApiPromise&lt;CloudflowRunSummary, CloudFlowApi.StopCloudflowFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops the run currently in progress for the given flow. The run is identified from the
flow alone — no run ID is needed, since a flow can only have one run active at a time.

No `Idempotency-Key` is required. This is a state transition, not a resource creation.

Returns `409` when the flow has no run in progress, which includes a run that reached a
terminal state between this request and the stop attempt.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudFlowApi.stopCloudflowFlow({ flowId: "some example string" });
  // TODO: Handle 'response' of type CloudflowRunSummary
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.StopCloudflowFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi.stopCloudflowFlow({ flowId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowRunSummary
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
| <code>flowId</code> | <code>string</code> | The ID of the flow whose in-progress run should be stopped. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.stopCloudflowFlow(request)`

- **OnSuccess**: <code>[CloudflowRunSummary](src/models/cloudflow-run-summary.ts)</code>
- **OnError**: throws <code>[CloudFlowApi.StopCloudflowFlowError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.stopCloudflowFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowRunSummary, CloudFlowApi.StopCloudflowFlowError&gt;</code>, with `result.value` of type <code>[CloudflowRunSummary](src/models/cloudflow-run-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testRunCloudflowFlow(request: CloudFlowApi.TestRunCloudflowFlowRequest, options?: RequestOptions): ApiPromise&lt;CloudflowRunSummary, CloudFlowApi.TestRunCloudflowFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs a flow once as a test, and **accepts an unpublished (draft) flow** — unlike
`actions/trigger`, which requires the flow to be published. Use this to verify a newly
authored or edited flow before publishing it.

Execution is identical to a production run: the same graph, the same bound connections,
the same credentials, and the same approval behaviour. An approval-gated node still parks
the run and its side effect still waits for a real approval — there is no request that
skips one.

The run is recorded as a test, so it does not appear in run history, does not count
towards dashboard statistics, does not become a dashboard widget's data source, and does
not consume a scheduled-run budget. It does hold the flow's concurrency lock, so a `409`
is returned while the flow is already running.

The flow's first node must be a webhook, scheduled, or manual trigger.

Before dispatching, the flow is validated with the same checks publish applies — a draft
has never been through them. A flow that fails returns `422` listing every offending node
at once, so all of them can be fixed in one pass.

Poll the `Location` URL to follow the run and read what each node produced.

Pass `?dryRun=true` to validate the flow without starting a run.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudFlowApi.testRunCloudflowFlow({
    flowId: "some example string",
    idempotencyKey: "some example string",
  });
  // TODO: Handle 'response' of type CloudflowRunSummary
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.TestRunCloudflowFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi
  .testRunCloudflowFlow({ flowId: "some example string", idempotencyKey: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowRunSummary
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
| <code>flowId</code> | <code>string</code> | The ID of the flow to test-run. |
| <code>dryRun?</code> | <code>boolean</code> | Validate the flow and return the outcome without starting a run. |
| <code>idempotencyKey</code> | <code>string</code> | Unique key so a retried request cannot start a second run. |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.testRunCloudflowFlow(request)`

- **OnSuccess**: <code>[CloudflowRunSummary](src/models/cloudflow-run-summary.ts)</code>
- **OnError**: throws <code>[CloudFlowApi.TestRunCloudflowFlowError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.testRunCloudflowFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowRunSummary, CloudFlowApi.TestRunCloudflowFlowError&gt;</code>, with `result.value` of type <code>[CloudflowRunSummary](src/models/cloudflow-run-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerCloudflowFlow(request: CloudFlowApi.TriggerCloudflowFlowRequest, options?: RequestOptions): ApiPromise&lt;CloudflowRunSummary, CloudFlowApi.TriggerCloudflowFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a run of a **published** flow whose first node is a webhook, scheduled, or manual
trigger. A draft flow is rejected with `422` — use `actions/test-run` to run one.

No `Idempotency-Key` is required. This is a state transition, not a resource creation.

The response is a snapshot taken at dispatch, so `status` is always `pending` and the
timing fields are not yet populated. Read the run back through
`GET /cloudflow/v1/flows/{flowId}/runs/{runId}` to follow its progress.

A flow holds a concurrency lock while it runs, so triggering one that is already running
returns `409` with the active run embedded in the problem body — no second lookup needed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudFlowApi.triggerCloudflowFlow({ flowId: "some example string" });
  // TODO: Handle 'response' of type CloudflowRunSummary
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.TriggerCloudflowFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi
  .triggerCloudflowFlow({ flowId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowRunSummary
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
| <code>flowId</code> | <code>string</code> | The ID of the flow to trigger. |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.triggerCloudflowFlow(request)`

- **OnSuccess**: <code>[CloudflowRunSummary](src/models/cloudflow-run-summary.ts)</code>
- **OnError**: throws <code>[CloudFlowApi.TriggerCloudflowFlowError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.triggerCloudflowFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowRunSummary, CloudFlowApi.TriggerCloudflowFlowError&gt;</code>, with `result.value` of type <code>[CloudflowRunSummary](src/models/cloudflow-run-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerCloudflowWebhook(request: CloudFlowApi.TriggerCloudflowWebhookRequest, options?: RequestOptions): ApiPromise&lt;CloudflowV1TriggerResponse, CloudFlowApi.TriggerCloudflowWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers execution of a published CloudFlow whose first node is a webhook trigger.
The request body must be valid JSON and is passed to the flow as webhook payload data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudFlowApi.triggerCloudflowWebhook({
    flowId: "some example string",
    body: { key: "value" },
  });
  // TODO: Handle 'response' of type CloudflowV1TriggerResponse
} catch (err) {
  // TODO: Handle 'err' of type CloudFlowApi.TriggerCloudflowWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudFlowApi
  .triggerCloudflowWebhook({ flowId: "some example string", body: { key: "value" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowV1TriggerResponse
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
| <code>flowId</code> | <code>string</code> | The unique ID of the published CloudFlow to trigger. |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cloudFlowApi.triggerCloudflowWebhook(request)`

- **OnSuccess**: <code>[CloudflowV1TriggerResponse](src/models/cloudflow-v1-trigger-response.ts)</code>
- **OnError**: throws <code>[CloudFlowApi.TriggerCloudflowWebhookError](src/resources/cloud-flow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cloudFlowApi.triggerCloudflowWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowV1TriggerResponse, CloudFlowApi.TriggerCloudflowWebhookError&gt;</code>, with `result.value` of type <code>[CloudflowV1TriggerResponse](src/models/cloudflow-v1-trigger-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CommitmentManager

> Source: [CommitmentManager](src/resources/commitment-manager.ts)

<details>
<summary><code>getCommitment(request: CommitmentManager.GetCommitmentRequest, options?: RequestOptions): ApiPromise&lt;CommitmentExternal, CommitmentManager.GetCommitmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a commitment by the specified Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commitmentManager.getCommitment({ id: "some example string" });
  // TODO: Handle 'response' of type CommitmentExternal
} catch (err) {
  // TODO: Handle 'err' of type CommitmentManager.GetCommitmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commitmentManager.getCommitment({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommitmentExternal
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
| <code>id</code> | <code>string</code> | Commitment ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commitmentManager.getCommitment(request)`

- **OnSuccess**: <code>[CommitmentExternal](src/models/commitment-external.ts)</code>
- **OnError**: throws <code>[CommitmentManager.GetCommitmentError](src/resources/commitment-manager.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commitmentManager.getCommitment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommitmentExternal, CommitmentManager.GetCommitmentError&gt;</code>, with `result.value` of type <code>[CommitmentExternal](src/models/commitment-external.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCommitments(request?: CommitmentManager.ListCommitmentsRequest, options?: RequestOptions): ApiPromise&lt;CommitmentExternalList, CommitmentManager.ListCommitmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of commitments for the customer.
Commitments are listed in reverse chronological order by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commitmentManager.listCommitments({ filter: "provider:google-cloud" });
  // TODO: Handle 'response' of type CommitmentExternalList
} catch (err) {
  // TODO: Handle 'err' of type CommitmentManager.ListCommitmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commitmentManager
  .listCommitments({ filter: "provider:google-cloud" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommitmentExternalList
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
| <code>sortBy?</code> | <code>[SortByDoiTCommitmentManagerApi](src/models/sort-by-doi-tcommitment-manager-api.ts)</code> | A field by which the results will be sorted. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest). |
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>filter?</code> | <code>string</code> | An expression for filtering the results. The syntax is `key:[<value>]`. Multiple filters can be connected using a pipe \|. See [Filters](https://developer.doit.com/docs/filters).<br>Available filter keys: **name**, **provider** |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commitmentManager.listCommitments(request)`

- **OnSuccess**: <code>[CommitmentExternalList](src/models/commitment-external-list.ts)</code>
- **OnError**: throws <code>[CommitmentManager.ListCommitmentsError](src/resources/commitment-manager.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commitmentManager.listCommitments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommitmentExternalList, CommitmentManager.ListCommitmentsError&gt;</code>, with `result.value` of type <code>[CommitmentExternalList](src/models/commitment-external-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ComposerInsightsBeta

> Source: [ComposerInsightsBeta](src/resources/composer-insights-beta.ts)

<details>
<summary><code>listComposerRecipeResults(request: ComposerInsightsBeta.ListComposerRecipeResultsRequest, options?: RequestOptions): ApiPromise&lt;ComposerRecipeResultList, ComposerInsightsBeta.ListComposerRecipeResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the results of one Composer recipe: one finding per affected resource, with the resource's account, region, tags and cost metrics. An unknown recipe, one your customer isn't entitled to, and a dismissed recipe all return `200` with an empty `items` list and `rowCount: 0`.

By default (`last_scan_only:true`) only results reported by the most recent scan of each recently scanned account are returned. A resolved result keeps the ID of the last scan that reported it, so resolved results rarely appear by default; add `last_scan_only:false` to include them and results from earlier scans. `rowCount` can therefore be lower than the recipe's `totalResultsCount`. Results are sorted by `detection_time`, descending, by default. Ties break by `id`.

`filter` is one string of `key:value` clauses: `,` separates alternative values for one key (OR) and `|` separates keys (AND), for example `region:us-east-1,us-west-2|status:active`. Because `,` and `|` are separators, a value itself can't contain them. Supported keys:
- `account_id`: one or more cloud account IDs, matched exactly.
- `region`: one or more cloud regions, matched exactly.
- `issued_resource_name`: one or more names of the affected resource, matched exactly.
- `related_resource_name`: one or more names of related resources (for example an attached IAM policy), each matched as a substring anywhere in the result's related-resource details.
- `status`: exactly one of `active` (not resolved and not snoozed), `snoozed`, `resolved` or `all`. Omitting it is the same as `all`. Combine `resolved` with `last_scan_only:false`; with the default it usually returns nothing.
- `last_scan_only`: exactly one of `true` or `false`. Defaults to `true`, which returns only results reported by each recently scanned account's most recent scan, and so rarely includes resolved results. `false` returns results from every scan and account, including resolved ones.
- `allocation`: up to 10 distinct allocation IDs from `GET /analytics/v1/allocations`. Returns only results on resources in any of those allocations. An allocation you can't view returns `404`; if access can't be checked, the request returns `503` rather than unfiltered data.

Requests are always served for the customer your API token belongs to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.composerInsightsBeta.listComposerRecipeResults({
    recipeId: 42,
    maxResults: 50,
    filter: "status:active|region:us-east-1,us-west-2",
  });
  // TODO: Handle 'response' of type ComposerRecipeResultList
} catch (err) {
  // TODO: Handle 'err' of type ComposerInsightsBeta.ListComposerRecipeResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.composerInsightsBeta
  .listComposerRecipeResults({
    recipeId: 42,
    maxResults: 50,
    filter: "status:active|region:us-east-1,us-west-2",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ComposerRecipeResultList
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
| <code>recipeId</code> | <code>number</code> | ID of the Composer recipe whose results to list. Get recipe IDs from `GET /insights/v2/recipes`. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside that range returns `400 validation_failed`.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Continuation token from the `pageToken` of the previous response. Omit it on the first request; a response without `pageToken` is the last page.<br><br>The token records the position, the sort and the `allocation` filter IDs. Changing `sortBy`, `sortOrder` or the allocation IDs while paginating returns `400 pagination_token_invalid`. Keep the other `filter` keys and `maxResults` unchanged while paginating. Tokens expire 5 minutes after they are issued; an expired token returns `400 pagination_token_expired`. In both cases, restart from the first page. |
| <code>sortBy?</code> | <code>[SortBy1](src/models/sort-by1.ts)</code> | Field to sort results by. Defaults to `detection_time`. Ties break by `id` (ascending), whatever the `sortOrder`.<br>**Default**: "detection_time" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sort direction for `sortBy`. Defaults to `desc`.<br>**Default**: "desc" |
| <code>filter?</code> | <code>string</code> | Restricts the results returned. One string of `key:value` clauses: `,` separates alternative values for one key (OR) and `\|` separates keys (AND). For example, `region:us-east-1,us-west-2\|status:active` returns active results in either region. Because `,` and `\|` are separators, a value itself can't contain them. Matching is exact unless a key says otherwise. Omit `filter` to list the recipe's results from the most recent scan of each recently scanned account, in every status.<br><br>Keys:<br>- `account_id`: one or more cloud account IDs, matched exactly.<br>- `region`: one or more cloud regions, matched exactly.<br>- `issued_resource_name`: one or more names of the affected resource, matched exactly.<br>- `related_resource_name`: one or more names of resources related to the result (for example, an attached IAM policy). Each value is matched as a substring anywhere in the result's related-resource details, not only against names.<br>- `status`: exactly one of `active` (not resolved and not snoozed), `snoozed`, `resolved` or `all`. Omitting it is the same as `all`. Combine `resolved` with `last_scan_only:false`; with the default it usually returns nothing.<br>- `last_scan_only`: exactly one of `true` or `false`. Defaults to `true`, which returns only results reported by each recently scanned account's most recent scan. A resolved result keeps the ID of the last scan that reported it, so resolved results rarely appear by default. `false` returns results from every scan and account, including resolved ones.<br>- `allocation`: up to 10 distinct allocation IDs (duplicates are ignored); get allocation IDs from `GET /analytics/v1/allocations`. Matches results on resources in any of those allocations, as resolved by Cloud Analytics; `rowCount` then counts only those results. You must be able to view every listed allocation. Service-account API keys can use public allocations only. If allocation access can't be checked, the request returns `503` with `Retry-After` and never falls back to unfiltered data.<br><br>Errors:<br>- An unknown key returns `400 filter_key_not_supported` when it's the only problem, otherwise `400 validation_failed`.<br>- A `status` outside the allowed list, a non-boolean `last_scan_only`, more than one `status` or `last_scan_only` value, more than 10 distinct allocation IDs, an invalid allocation ID (blank, longer than 256 characters, or containing `/`, whitespace or control characters), a malformed expression or an unsupported operator returns `400 validation_failed`.<br>- An allocation that doesn't exist or that you can't view returns `404 composer-api.allocation_not_found`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.composerInsightsBeta.listComposerRecipeResults(request)`

- **OnSuccess**: <code>[ComposerRecipeResultList](src/models/composer-recipe-result-list.ts)</code>
- **OnError**: throws <code>[ComposerInsightsBeta.ListComposerRecipeResultsError](src/resources/composer-insights-beta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.composerInsightsBeta.listComposerRecipeResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ComposerRecipeResultList, ComposerInsightsBeta.ListComposerRecipeResultsError&gt;</code>, with `result.value` of type <code>[ComposerRecipeResultList](src/models/composer-recipe-result-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listComposerRecipes(request?: ComposerInsightsBeta.ListComposerRecipesRequest, options?: RequestOptions): ApiPromise&lt;ComposerRecipeList, ComposerInsightsBeta.ListComposerRecipesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Composer recipes that have results in your recently scanned cloud accounts, with counts of those results by status and their estimated savings. Recipes with no such results are not listed. Dismissed recipes are listed with `status: dismissed` and every count set to 0.

Recipes are sorted by `severity`, descending, by default. Ties break by title (case-insensitive), then by `id`.

`filter` is one string of `key:value` clauses: `,` separates alternative values for one key (OR) and `|` separates keys (AND), for example `severity:critical,high|provider:aws,gcp`. Because `,` and `|` are separators, a value itself can't contain them. Supported keys:
- `provider`: one or more of `aws`, `azure`, `azure_ad`, `gcp`, `general`, `google_cloud_source`, `google_workspace`, `k8s`, `oci`, `vmware`.
- `severity`: one or more of `critical`, `high`, `medium`, `low`.
- `pillar`: one or more of `cost`, `operations`, `performance`, `security`, `compliance`. `compliance` matches recipes tagged with at least one compliance standard.
- `has_active_results`: exactly one of `true` or `false`.
- `allocation`: up to 10 distinct allocation IDs from `GET /analytics/v1/allocations`. Lists only recipes with results on resources in any of those allocations; counts, savings and `rowCount` then cover only those resources. An allocation you can't view returns `404`; if access can't be checked, the request returns `503` rather than unfiltered data.

Requests are always served for the customer your API token belongs to. To list the results of one recipe, use its `id` with `GET /insights/v2/recipes/{recipeId}/results`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.composerInsightsBeta.listComposerRecipes({
    maxResults: 50,
    filter: "severity:critical,high|provider:aws,gcp",
  });
  // TODO: Handle 'response' of type ComposerRecipeList
} catch (err) {
  // TODO: Handle 'err' of type ComposerInsightsBeta.ListComposerRecipesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.composerInsightsBeta
  .listComposerRecipes({ maxResults: 50, filter: "severity:critical,high|provider:aws,gcp" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ComposerRecipeList
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
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside that range returns `400 validation_failed`.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Continuation token from the `pageToken` of the previous response. Omit it on the first request; a response without `pageToken` is the last page.<br><br>The token records the position, the sort and the `allocation` filter IDs. Changing `sortBy`, `sortOrder` or the allocation IDs while paginating returns `400 pagination_token_invalid`. Keep the other `filter` keys and `maxResults` unchanged while paginating. Tokens expire 5 minutes after they are issued; an expired token returns `400 pagination_token_expired`. In both cases, restart from the first page. |
| <code>sortBy?</code> | <code>[SortByDoiTComposerInsightsBetaApi](src/models/sort-by-doi-tcomposer-insights-beta-api.ts)</code> | Field to sort recipes by. Defaults to `severity`. Ties break by title (case-insensitive, ascending), then by `id` (ascending), whatever the `sortOrder`.<br>**Default**: "severity" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sort direction for `sortBy`. Defaults to `desc`.<br>**Default**: "desc" |
| <code>filter?</code> | <code>string</code> | Restricts the recipes returned. One string of `key:value` clauses: `,` separates alternative values for one key (OR) and `\|` separates keys (AND). For example, `severity:critical,high\|provider:aws,gcp` returns recipes whose severity is critical or high and whose provider is Amazon Web Services or Google Cloud Platform. Because `,` and `\|` are separators, a value itself can't contain them. Only equality matching is supported. Omit `filter` to list every recipe that has results in your recently scanned accounts, including dismissed recipes.<br><br>Keys:<br>- `provider`: one or more of `aws`, `azure`, `azure_ad`, `gcp`, `general`, `google_cloud_source`, `google_workspace`, `k8s`, `oci`, `vmware`.<br>- `severity`: one or more of `critical`, `high`, `medium`, `low`.<br>- `pillar`: one or more of `cost`, `operations`, `performance`, `security`, `compliance`. Matches recipes tagged with that pillar; `compliance` matches recipes tagged with at least one compliance standard (such as SOC2 or HIPAA).<br>- `has_active_results`: exactly one of `true` or `false`.<br>- `allocation`: up to 10 distinct allocation IDs (duplicates are ignored); get allocation IDs from `GET /analytics/v1/allocations`. Matches recipes with results on resources in any of those allocations, as resolved by Cloud Analytics; counts, savings and `rowCount` then cover only those resources. You must be able to view every listed allocation. Service-account API keys can use public allocations only. If allocation access can't be checked, the request returns `503` with `Retry-After` and never falls back to unfiltered data.<br><br>Errors:<br>- An unknown key returns `400 filter_key_not_supported` when it's the only problem, otherwise `400 validation_failed`.<br>- A value outside the allowed list, a non-boolean `has_active_results`, more than one `has_active_results` value, more than 10 distinct allocation IDs, an invalid allocation ID (blank, longer than 256 characters, or containing `/`, whitespace or control characters), a malformed expression or an unsupported operator returns `400 validation_failed`.<br>- An allocation that doesn't exist or that you can't view returns `404 composer-api.allocation_not_found`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.composerInsightsBeta.listComposerRecipes(request)`

- **OnSuccess**: <code>[ComposerRecipeList](src/models/composer-recipe-list.ts)</code>
- **OnError**: throws <code>[ComposerInsightsBeta.ListComposerRecipesError](src/resources/composer-insights-beta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.composerInsightsBeta.listComposerRecipes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ComposerRecipeList, ComposerInsightsBeta.ListComposerRecipesError&gt;</code>, with `result.value` of type <code>[ComposerRecipeList](src/models/composer-recipe-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Connections

> Source: [Connections](src/resources/connections.ts)

<details>
<summary><code>createCloudflowConnection(request: Connections.CreateCloudflowConnectionRequest, options?: RequestOptions): ApiPromise&lt;CloudflowConnection, Connections.CreateCloudflowConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new cloud provider connection. Exactly one of `gcpConfig` or `awsConfig` must be supplied.
Returns `400 invalid_connection_config` when both or neither are present.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connections.createCloudflowConnection({
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type CloudflowConnection
} catch (err) {
  // TODO: Handle 'err' of type Connections.CreateCloudflowConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections
  .createCloudflowConnection({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowConnection
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
| <code>body</code> | <code>[CloudflowV1ConnectionsRequest](src/models/cloudflow-v1-connections-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.createCloudflowConnection(request)`

- **OnSuccess**: <code>[CloudflowConnection](src/models/cloudflow-connection.ts)</code>
- **OnError**: throws <code>[Connections.CreateCloudflowConnectionError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.createCloudflowConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowConnection, Connections.CreateCloudflowConnectionError&gt;</code>, with `result.value` of type <code>[CloudflowConnection](src/models/cloudflow-connection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCloudflowConnection(request: Connections.DeleteCloudflowConnectionRequest, options?: RequestOptions): ApiPromise&lt;undefined, Connections.DeleteCloudflowConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a connection. Returns 409 if the connection is referenced by one or more flows.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.connections.deleteCloudflowConnection({ connectionId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Connections.DeleteCloudflowConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections
  .deleteCloudflowConnection({ connectionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>connectionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.deleteCloudflowConnection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Connections.DeleteCloudflowConnectionError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.deleteCloudflowConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Connections.DeleteCloudflowConnectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCloudflowConnection(request: Connections.GetCloudflowConnectionRequest, options?: RequestOptions): ApiPromise&lt;CloudflowConnection, Connections.GetCloudflowConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single connection by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connections.getCloudflowConnection({ connectionId: "some example string" });
  // TODO: Handle 'response' of type CloudflowConnection
} catch (err) {
  // TODO: Handle 'err' of type Connections.GetCloudflowConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections
  .getCloudflowConnection({ connectionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowConnection
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
| <code>connectionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.getCloudflowConnection(request)`

- **OnSuccess**: <code>[CloudflowConnection](src/models/cloudflow-connection.ts)</code>
- **OnError**: throws <code>[Connections.GetCloudflowConnectionError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.getCloudflowConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowConnection, Connections.GetCloudflowConnectionError&gt;</code>, with `result.value` of type <code>[CloudflowConnection](src/models/cloudflow-connection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCloudflowConnections(request?: Connections.ListCloudflowConnectionsRequest, options?: RequestOptions): ApiPromise&lt;CloudflowConnectionListResponse, Connections.ListCloudflowConnectionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a cursor-paginated list of cloud provider connections for the authenticated tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connections.listCloudflowConnections();
  // TODO: Handle 'response' of type CloudflowConnectionListResponse
} catch (err) {
  // TODO: Handle 'err' of type Connections.ListCloudflowConnectionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections.listCloudflowConnections().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowConnectionListResponse
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
| <code>maxResults?</code> | <code>number</code> | Maximum number of connections to return (1–100). Defaults to 50.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Pagination cursor returned by a previous call. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.listCloudflowConnections(request)`

- **OnSuccess**: <code>[CloudflowConnectionListResponse](src/models/cloudflow-connection-list-response.ts)</code>
- **OnError**: throws <code>[Connections.ListCloudflowConnectionsError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.listCloudflowConnections(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowConnectionListResponse, Connections.ListCloudflowConnectionsError&gt;</code>, with `result.value` of type <code>[CloudflowConnectionListResponse](src/models/cloudflow-connection-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCloudflowConnection(request: Connections.UpdateCloudflowConnectionRequest, options?: RequestOptions): ApiPromise&lt;CloudflowConnection, Connections.UpdateCloudflowConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a connection. All fields are optional.
At most one of `gcpConfig` or `awsConfig` may be set per request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connections.updateCloudflowConnection({
    connectionId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type CloudflowConnection
} catch (err) {
  // TODO: Handle 'err' of type Connections.UpdateCloudflowConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections
  .updateCloudflowConnection({ connectionId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowConnection
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
| <code>connectionId</code> | <code>string</code> | - |
| <code>body</code> | <code>[CloudflowV1ConnectionsRequest1](src/models/cloudflow-v1-connections-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.updateCloudflowConnection(request)`

- **OnSuccess**: <code>[CloudflowConnection](src/models/cloudflow-connection.ts)</code>
- **OnError**: throws <code>[Connections.UpdateCloudflowConnectionError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.updateCloudflowConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowConnection, Connections.UpdateCloudflowConnectionError&gt;</code>, with `result.value` of type <code>[CloudflowConnection](src/models/cloudflow-connection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContractTemplates

> Source: [ContractTemplates](src/resources/contract-templates.ts)

<details>
<summary><code>archiveContractTemplate(request: ContractTemplates.ArchiveContractTemplateRequest, options?: RequestOptions): ApiPromise&lt;ContractTemplateResponse, ContractTemplates.ArchiveContractTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-deletes (archives) a contract template owned by the authenticated tenant (from the bearer token). Instantiated contracts are unaffected. Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contractTemplates.archiveContractTemplate({
    templateId: "some example string",
  });
  // TODO: Handle 'response' of type ContractTemplateResponse
} catch (err) {
  // TODO: Handle 'err' of type ContractTemplates.ArchiveContractTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contractTemplates
  .archiveContractTemplate({ templateId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContractTemplateResponse
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
| <code>templateId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contractTemplates.archiveContractTemplate(request)`

- **OnSuccess**: <code>[ContractTemplateResponse](src/models/contract-template-response.ts)</code>
- **OnError**: throws <code>[ContractTemplates.ArchiveContractTemplateError](src/resources/contract-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contractTemplates.archiveContractTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContractTemplateResponse, ContractTemplates.ArchiveContractTemplateError&gt;</code>, with `result.value` of type <code>[ContractTemplateResponse](src/models/contract-template-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assignContractTemplate(request: ContractTemplates.AssignContractTemplateRequest, options?: RequestOptions): ApiPromise&lt;AssignContractTemplateResponse, ContractTemplates.AssignContractTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies a contract template owned by the authenticated tenant (from the bearer token) to child customers, creating a draft contract for each. Drafts have no billing effect until each one is completed and activated. The template must not be archived, and the current date must fall within its eligibility window. Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contractTemplates.assignContractTemplate({
    templateId: "some example string",
    body: { customerIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type AssignContractTemplateResponse
} catch (err) {
  // TODO: Handle 'err' of type ContractTemplates.AssignContractTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contractTemplates
  .assignContractTemplate({
    templateId: "some example string",
    body: { customerIds: ["some example string"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssignContractTemplateResponse
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
| <code>templateId</code> | <code>string</code> | Identifier of the contract template to apply. |
| <code>body</code> | <code>[AssignContractTemplateInput](src/models/assign-contract-template-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contractTemplates.assignContractTemplate(request)`

- **OnSuccess**: <code>[AssignContractTemplateResponse](src/models/assign-contract-template-response.ts)</code>
- **OnError**: throws <code>[ContractTemplates.AssignContractTemplateError](src/resources/contract-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contractTemplates.assignContractTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssignContractTemplateResponse, ContractTemplates.AssignContractTemplateError&gt;</code>, with `result.value` of type <code>[AssignContractTemplateResponse](src/models/assign-contract-template-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createContractTemplate(request: ContractTemplates.CreateContractTemplateRequest, options?: RequestOptions): ApiPromise&lt;ContractTemplateResponse, ContractTemplates.CreateContractTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a contract template for the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contractTemplates.createContractTemplate({
    body: {
      name: "some example string",
      platform: "some example string",
      eligibleFrom: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    },
  });
  // TODO: Handle 'response' of type ContractTemplateResponse
} catch (err) {
  // TODO: Handle 'err' of type ContractTemplates.CreateContractTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contractTemplates
  .createContractTemplate({
    body: {
      name: "some example string",
      platform: "some example string",
      eligibleFrom: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContractTemplateResponse
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
| <code>body</code> | <code>[ContractTemplateInput](src/models/contract-template-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contractTemplates.createContractTemplate(request)`

- **OnSuccess**: <code>[ContractTemplateResponse](src/models/contract-template-response.ts)</code>
- **OnError**: throws <code>[ContractTemplates.CreateContractTemplateError](src/resources/contract-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contractTemplates.createContractTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContractTemplateResponse, ContractTemplates.CreateContractTemplateError&gt;</code>, with `result.value` of type <code>[ContractTemplateResponse](src/models/contract-template-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContractTemplate(request: ContractTemplates.GetContractTemplateRequest, options?: RequestOptions): ApiPromise&lt;ContractTemplateResponse, ContractTemplates.GetContractTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single contract template owned by the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contractTemplates.getContractTemplate({ templateId: "some example string" });
  // TODO: Handle 'response' of type ContractTemplateResponse
} catch (err) {
  // TODO: Handle 'err' of type ContractTemplates.GetContractTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contractTemplates
  .getContractTemplate({ templateId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContractTemplateResponse
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
| <code>templateId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contractTemplates.getContractTemplate(request)`

- **OnSuccess**: <code>[ContractTemplateResponse](src/models/contract-template-response.ts)</code>
- **OnError**: throws <code>[ContractTemplates.GetContractTemplateError](src/resources/contract-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contractTemplates.getContractTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContractTemplateResponse, ContractTemplates.GetContractTemplateError&gt;</code>, with `result.value` of type <code>[ContractTemplateResponse](src/models/contract-template-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listContractTemplates(options?: RequestOptions): ApiPromise&lt;ContractTemplateResponse[], ContractTemplates.ListContractTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists contract templates owned by the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contractTemplates.listContractTemplates();
  // TODO: Handle 'response' of type ContractTemplateResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ContractTemplates.ListContractTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contractTemplates.listContractTemplates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContractTemplateResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contractTemplates.listContractTemplates()`

- **OnSuccess**: <code>[ContractTemplateResponse](src/models/contract-template-response.ts)[]</code>
- **OnError**: throws <code>[ContractTemplates.ListContractTemplatesError](src/resources/contract-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contractTemplates.listContractTemplates().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContractTemplateResponse[], ContractTemplates.ListContractTemplatesError&gt;</code>, with `result.value` of type <code>[ContractTemplateResponse](src/models/contract-template-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateContractTemplate(request: ContractTemplates.UpdateContractTemplateRequest, options?: RequestOptions): ApiPromise&lt;ContractTemplateResponse, ContractTemplates.UpdateContractTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a contract template owned by the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contractTemplates.updateContractTemplate({
    templateId: "some example string",
    body: {
      name: "some example string",
      platform: "some example string",
      eligibleFrom: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    },
  });
  // TODO: Handle 'response' of type ContractTemplateResponse
} catch (err) {
  // TODO: Handle 'err' of type ContractTemplates.UpdateContractTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contractTemplates
  .updateContractTemplate({
    templateId: "some example string",
    body: {
      name: "some example string",
      platform: "some example string",
      eligibleFrom: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContractTemplateResponse
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
| <code>templateId</code> | <code>string</code> | - |
| <code>body</code> | <code>[ContractTemplateInput](src/models/contract-template-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contractTemplates.updateContractTemplate(request)`

- **OnSuccess**: <code>[ContractTemplateResponse](src/models/contract-template-response.ts)</code>
- **OnError**: throws <code>[ContractTemplates.UpdateContractTemplateError](src/resources/contract-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contractTemplates.updateContractTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContractTemplateResponse, ContractTemplates.UpdateContractTemplateError&gt;</code>, with `result.value` of type <code>[ContractTemplateResponse](src/models/contract-template-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Contracts

> Source: [Contracts](src/resources/contracts.ts)

<details>
<summary><code>activateContract(request: Contracts.ActivateContractRequest, options?: RequestOptions): ApiPromise&lt;ContractLifecycleResponse, Contracts.ActivateContractError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transitions a draft contract to active or scheduled (when the start date is in the future). Produces the same system state as activating via the Console.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.activateContract({
    customerId: "some example string",
    contractId: "some example string",
  });
  // TODO: Handle 'response' of type ContractLifecycleResponse
} catch (err) {
  // TODO: Handle 'err' of type Contracts.ActivateContractError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts
  .activateContract({ customerId: "some example string", contractId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContractLifecycleResponse
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
| <code>customerId</code> | <code>string</code> | - |
| <code>contractId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.activateContract(request)`

- **OnSuccess**: <code>[ContractLifecycleResponse](src/models/contract-lifecycle-response.ts)</code>
- **OnError**: throws <code>[Contracts.ActivateContractError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.activateContract(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContractLifecycleResponse, Contracts.ActivateContractError&gt;</code>, with `result.value` of type <code>[ContractLifecycleResponse](src/models/contract-lifecycle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelContract(request: Contracts.CancelContractRequest, options?: RequestOptions): ApiPromise&lt;ContractLifecycleResponse, Contracts.CancelContractError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels (deactivates) a contract. Active contracts cannot be deleted; cancel is the terminal operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.cancelContract({
    customerId: "some example string",
    contractId: "some example string",
  });
  // TODO: Handle 'response' of type ContractLifecycleResponse
} catch (err) {
  // TODO: Handle 'err' of type Contracts.CancelContractError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts
  .cancelContract({ customerId: "some example string", contractId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContractLifecycleResponse
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
| <code>customerId</code> | <code>string</code> | - |
| <code>contractId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CustomersContractsCancelRequest](src/models/customers-contracts-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.cancelContract(request)`

- **OnSuccess**: <code>[ContractLifecycleResponse](src/models/contract-lifecycle-response.ts)</code>
- **OnError**: throws <code>[Contracts.CancelContractError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.cancelContract(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContractLifecycleResponse, Contracts.CancelContractError&gt;</code>, with `result.value` of type <code>[ContractLifecycleResponse](src/models/contract-lifecycle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createContract(request: Contracts.CreateContractRequest, options?: RequestOptions): ApiPromise&lt;CreateContractResponse, Contracts.CreateContractError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a draft contract for the specified customer. Requires the caller to be the direct parent (T1 for a T2-level contract, T2 for a T3-level contract). Write access requires a role without contractsReadOnly; user API tokens must include the matching permission in their scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.createContract({
    customerId: "some example string",
    body: {
      name: "some example string",
      startDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      renewalPolicy: RenewalPolicy1.Auto,
    },
  });
  // TODO: Handle 'response' of type CreateContractResponse
} catch (err) {
  // TODO: Handle 'err' of type Contracts.CreateContractError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts
  .createContract({
    customerId: "some example string",
    body: {
      name: "some example string",
      startDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      renewalPolicy: RenewalPolicy1.Auto,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateContractResponse
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
| <code>customerId</code> | <code>string</code> | The customer (tenant) the contract is created for. |
| <code>body</code> | <code>[MtsContractCreateInput](src/models/mts-contract-create-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.createContract(request)`

- **OnSuccess**: <code>[CreateContractResponse](src/models/create-contract-response.ts)</code>
- **OnError**: throws <code>[Contracts.CreateContractError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.createContract(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateContractResponse, Contracts.CreateContractError&gt;</code>, with `result.value` of type <code>[CreateContractResponse](src/models/create-contract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContract(request: Contracts.GetContractRequest, options?: RequestOptions): ApiPromise&lt;MtsContractDetailResponse, Contracts.GetContractError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified contract.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.getContract({
    customerId: "some example string",
    contractId: "some example string",
  });
  // TODO: Handle 'response' of type MtsContractDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type Contracts.GetContractError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts
  .getContract({ customerId: "some example string", contractId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MtsContractDetailResponse
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
| <code>customerId</code> | <code>string</code> | - |
| <code>contractId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.getContract(request)`

- **OnSuccess**: <code>[MtsContractDetailResponse](src/models/mts-contract-detail-response.ts)</code>
- **OnError**: throws <code>[Contracts.GetContractError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.getContract(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MtsContractDetailResponse, Contracts.GetContractError&gt;</code>, with `result.value` of type <code>[MtsContractDetailResponse](src/models/mts-contract-detail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listContracts(request: Contracts.ListContractsRequest, options?: RequestOptions): ApiPromise&lt;MtsContractResponse[], Contracts.ListContractsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the contracts held by the specified customer. Callable by a T1/T2 PartnerOps principal for its own tenant or any descendant tenant. Read access requires contractsReadOnly, contractsViewer, or a write-capable role (without contractsReadOnly). User API tokens must include the matching permission in their scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.listContracts({ customerId: "some example string" });
  // TODO: Handle 'response' of type MtsContractResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Contracts.ListContractsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts.listContracts({ customerId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MtsContractResponse[]
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
| <code>customerId</code> | <code>string</code> | The customer (tenant) whose contracts are requested. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.listContracts(request)`

- **OnSuccess**: <code>[MtsContractResponse](src/models/mts-contract-response.ts)[]</code>
- **OnError**: throws <code>[Contracts.ListContractsError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.listContracts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MtsContractResponse[], Contracts.ListContractsError&gt;</code>, with `result.value` of type <code>[MtsContractResponse](src/models/mts-contract-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateContract(request: Contracts.UpdateContractRequest, options?: RequestOptions): ApiPromise&lt;CreateContractResponse, Contracts.UpdateContractError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of the contract. The contract type is immutable and cannot be changed by an update.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contracts.updateContract({
    customerId: "some example string",
    contractId: "some example string",
    body: {
      name: "some example string",
      startDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      renewalPolicy: RenewalPolicy1.Auto,
    },
  });
  // TODO: Handle 'response' of type CreateContractResponse
} catch (err) {
  // TODO: Handle 'err' of type Contracts.UpdateContractError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contracts
  .updateContract({
    customerId: "some example string",
    contractId: "some example string",
    body: {
      name: "some example string",
      startDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      renewalPolicy: RenewalPolicy1.Auto,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateContractResponse
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
| <code>customerId</code> | <code>string</code> | - |
| <code>contractId</code> | <code>string</code> | - |
| <code>body</code> | <code>[MtsContractInput](src/models/mts-contract-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contracts.updateContract(request)`

- **OnSuccess**: <code>[CreateContractResponse](src/models/create-contract-response.ts)</code>
- **OnError**: throws <code>[Contracts.UpdateContractError](src/resources/contracts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contracts.updateContract(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateContractResponse, Contracts.UpdateContractError&gt;</code>, with `result.value` of type <code>[CreateContractResponse](src/models/create-contract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerGroups

> Source: [CustomerGroups](src/resources/customer-groups.ts)

<details>
<summary><code>assignCustomerGroupUser(request: CustomerGroups.AssignCustomerGroupUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomerGroups.AssignCustomerGroupUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns a user to a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customerGroups.assignCustomerGroupUser({
    customerGroupId: "some example string",
    userId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.AssignCustomerGroupUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .assignCustomerGroupUser({
    customerGroupId: "some example string",
    userId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>customerGroupId</code> | <code>string</code> | Stable service-generated customer-group ID. |
| <code>userId</code> | <code>string</code> | User ID to assign to or unassign from the customer group. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.assignCustomerGroupUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomerGroups.AssignCustomerGroupUserError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.assignCustomerGroupUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomerGroups.AssignCustomerGroupUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assignCustomerGroupUserGroup(request: CustomerGroups.AssignCustomerGroupUserGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomerGroups.AssignCustomerGroupUserGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns a user group owned by the authenticated tenant to a customer group owned by that tenant. Membership changes in the user group apply without reassigning it. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customerGroups.assignCustomerGroupUserGroup({
    customerGroupId: "some example string",
    userGroupId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.AssignCustomerGroupUserGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .assignCustomerGroupUserGroup({
    customerGroupId: "some example string",
    userGroupId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>customerGroupId</code> | <code>string</code> | Stable service-generated customer-group ID. |
| <code>userGroupId</code> | <code>string</code> | Stable ID of a user group owned by the authenticated tenant. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.assignCustomerGroupUserGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomerGroups.AssignCustomerGroupUserGroupError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.assignCustomerGroupUserGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomerGroups.AssignCustomerGroupUserGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomerGroup(request: CustomerGroups.CreateCustomerGroupRequestParams, options?: RequestOptions): ApiPromise&lt;CustomerGroup, CustomerGroups.CreateCustomerGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.createCustomerGroup({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: { name: "some example string", memberCustomerIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type CustomerGroup
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.CreateCustomerGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .createCustomerGroup({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: { name: "some example string", memberCustomerIds: ["some example string"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerGroup
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
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |
| <code>body</code> | <code>[CreateCustomerGroupRequest](src/models/create-customer-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.createCustomerGroup(request)`

- **OnSuccess**: <code>[CustomerGroup](src/models/customer-group.ts)</code>
- **OnError**: throws <code>[CustomerGroups.CreateCustomerGroupError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.createCustomerGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerGroup, CustomerGroups.CreateCustomerGroupError&gt;</code>, with `result.value` of type <code>[CustomerGroup](src/models/customer-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomerGroup(request: CustomerGroups.DeleteCustomerGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomerGroups.DeleteCustomerGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a customer group owned by the authenticated tenant. Groups with assigned users or user groups cannot be deleted. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customerGroups.deleteCustomerGroup({
    customerGroupId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.DeleteCustomerGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .deleteCustomerGroup({ customerGroupId: "some example string", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>customerGroupId</code> | <code>string</code> | Stable service-generated customer-group ID. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.deleteCustomerGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomerGroups.DeleteCustomerGroupError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.deleteCustomerGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomerGroups.DeleteCustomerGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomerGroup(request: CustomerGroups.GetCustomerGroupRequest, options?: RequestOptions): ApiPromise&lt;CustomerGroup, CustomerGroups.GetCustomerGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.getCustomerGroup({
    customerGroupId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type CustomerGroup
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.GetCustomerGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .getCustomerGroup({ customerGroupId: "some example string", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerGroup
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
| <code>customerGroupId</code> | <code>string</code> | Stable service-generated customer-group ID. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.getCustomerGroup(request)`

- **OnSuccess**: <code>[CustomerGroup](src/models/customer-group.ts)</code>
- **OnError**: throws <code>[CustomerGroups.GetCustomerGroupError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.getCustomerGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerGroup, CustomerGroups.GetCustomerGroupError&gt;</code>, with `result.value` of type <code>[CustomerGroup](src/models/customer-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerGroupUserGroups(request: CustomerGroups.ListCustomerGroupUserGroupsRequest, options?: RequestOptions): ApiPromise&lt;CustomerGroupUserGroupsResponse, CustomerGroups.ListCustomerGroupUserGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the user groups assigned to a customer group owned by the authenticated tenant, sorted by user-group ID. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.listCustomerGroupUserGroups({
    customerGroupId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type CustomerGroupUserGroupsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.ListCustomerGroupUserGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .listCustomerGroupUserGroups({ customerGroupId: "some example string", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerGroupUserGroupsResponse
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
| <code>customerGroupId</code> | <code>string</code> | Stable service-generated customer-group ID. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.listCustomerGroupUserGroups(request)`

- **OnSuccess**: <code>[CustomerGroupUserGroupsResponse](src/models/customer-group-user-groups-response.ts)</code>
- **OnError**: throws <code>[CustomerGroups.ListCustomerGroupUserGroupsError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.listCustomerGroupUserGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerGroupUserGroupsResponse, CustomerGroups.ListCustomerGroupUserGroupsError&gt;</code>, with `result.value` of type <code>[CustomerGroupUserGroupsResponse](src/models/customer-group-user-groups-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerGroupUsers(request: CustomerGroups.ListCustomerGroupUsersRequest, options?: RequestOptions): ApiPromise&lt;CustomerGroupUsersResponse, CustomerGroups.ListCustomerGroupUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the users assigned to a customer group owned by the authenticated tenant, sorted by user ID. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.listCustomerGroupUsers({
    customerGroupId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type CustomerGroupUsersResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.ListCustomerGroupUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .listCustomerGroupUsers({ customerGroupId: "some example string", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerGroupUsersResponse
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
| <code>customerGroupId</code> | <code>string</code> | Stable service-generated customer-group ID. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.listCustomerGroupUsers(request)`

- **OnSuccess**: <code>[CustomerGroupUsersResponse](src/models/customer-group-users-response.ts)</code>
- **OnError**: throws <code>[CustomerGroups.ListCustomerGroupUsersError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.listCustomerGroupUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerGroupUsersResponse, CustomerGroups.ListCustomerGroupUsersError&gt;</code>, with `result.value` of type <code>[CustomerGroupUsersResponse](src/models/customer-group-users-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerGroups(request?: CustomerGroups.ListCustomerGroupsRequest, options?: RequestOptions): ApiPromise&lt;CustomerGroupsResponse, CustomerGroups.ListCustomerGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the ready customer groups owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.listCustomerGroups({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" });
  // TODO: Handle 'response' of type CustomerGroupsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.ListCustomerGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .listCustomerGroups({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerGroupsResponse
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
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.listCustomerGroups(request)`

- **OnSuccess**: <code>[CustomerGroupsResponse](src/models/customer-groups-response.ts)</code>
- **OnError**: throws <code>[CustomerGroups.ListCustomerGroupsError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.listCustomerGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerGroupsResponse, CustomerGroups.ListCustomerGroupsError&gt;</code>, with `result.value` of type <code>[CustomerGroupsResponse](src/models/customer-groups-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unassignCustomerGroupUser(request: CustomerGroups.UnassignCustomerGroupUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomerGroups.UnassignCustomerGroupUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unassigns a user from a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customerGroups.unassignCustomerGroupUser({
    customerGroupId: "some example string",
    userId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.UnassignCustomerGroupUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .unassignCustomerGroupUser({
    customerGroupId: "some example string",
    userId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>customerGroupId</code> | <code>string</code> | Stable service-generated customer-group ID. |
| <code>userId</code> | <code>string</code> | User ID to assign to or unassign from the customer group. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.unassignCustomerGroupUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomerGroups.UnassignCustomerGroupUserError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.unassignCustomerGroupUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomerGroups.UnassignCustomerGroupUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unassignCustomerGroupUserGroup(request: CustomerGroups.UnassignCustomerGroupUserGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomerGroups.UnassignCustomerGroupUserGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unassigns a user group from a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customerGroups.unassignCustomerGroupUserGroup({
    customerGroupId: "some example string",
    userGroupId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.UnassignCustomerGroupUserGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .unassignCustomerGroupUserGroup({
    customerGroupId: "some example string",
    userGroupId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>customerGroupId</code> | <code>string</code> | Stable service-generated customer-group ID. |
| <code>userGroupId</code> | <code>string</code> | Stable ID of a user group owned by the authenticated tenant. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.unassignCustomerGroupUserGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomerGroups.UnassignCustomerGroupUserGroupError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.unassignCustomerGroupUserGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomerGroups.UnassignCustomerGroupUserGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomerGroup(request: CustomerGroups.UpdateCustomerGroupRequestParams, options?: RequestOptions): ApiPromise&lt;CustomerGroup, CustomerGroups.UpdateCustomerGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name, customer membership, or both for a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.updateCustomerGroup({
    customerGroupId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: {},
  });
  // TODO: Handle 'response' of type CustomerGroup
} catch (err) {
  // TODO: Handle 'err' of type CustomerGroups.UpdateCustomerGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups
  .updateCustomerGroup({
    customerGroupId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomerGroup
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
| <code>customerGroupId</code> | <code>string</code> | Stable service-generated customer-group ID. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |
| <code>body</code> | <code>[UpdateCustomerGroupRequest](src/models/update-customer-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.updateCustomerGroup(request)`

- **OnSuccess**: <code>[CustomerGroup](src/models/customer-group.ts)</code>
- **OnError**: throws <code>[CustomerGroups.UpdateCustomerGroupError](src/resources/customer-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerGroups.updateCustomerGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomerGroup, CustomerGroups.UpdateCustomerGroupError&gt;</code>, with `result.value` of type <code>[CustomerGroup](src/models/customer-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/resources/customers.ts)

<details>
<summary><code>getCustomer(request: Customers.GetCustomerRequest, options?: RequestOptions): ApiPromise&lt;Customer, Customers.GetCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the customer, including its general settings and contact info, scoped to `{customerId}`. `{customerId}` must match the customer resolved from the bearer token; a token scoped to a different customer gets `403`, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires the `Settings` permission and DoiT API access (`platform:externalApi`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getCustomer({ customerId: "some example string" });
  // TODO: Handle 'response' of type Customer
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.getCustomer({ customerId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer
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
| <code>customerId</code> | <code>string</code> | Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets `403`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getCustomer(request)`

- **OnSuccess**: <code>[Customer](src/models/customer.ts)</code>
- **OnError**: throws <code>[Customers.GetCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer, Customers.GetCustomerError&gt;</code>, with `result.value` of type <code>[Customer](src/models/customer.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomer(request: Customers.UpdateCustomerRequest, options?: RequestOptions): ApiPromise&lt;undefined, Customers.UpdateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates the general settings and contact info of the customer identified by `{customerId}`. `{customerId}` must match the customer resolved from the bearer token; a token scoped to a different customer gets `403`, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires the `Settings` permission and DoiT API access (`platform:externalApi`); updating `allowedInviteDomains` additionally requires the `UsersManager` permission.

The request body must use `application/merge-patch+json` (RFC 7396): an omitted field leaves the current value unchanged, and an explicit `null` also leaves it unchanged, except for `urlSlug`, where an explicit empty string removes the customer's active URL slug rather than leaving it unchanged.

Fields are nested exactly as `getCustomer` returns them - `currency` and `allowedInviteDomains` under `settings`, `emails` under `contact` - so every value is read and written at the same path. `settings.currency` accepts only the codes listed in the schema and cannot be cleared; `allowedInviteDomains` and `contact.emails` are cleared with an empty array.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customers.updateCustomer({ customerId: "some example string", body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Customers.UpdateCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .updateCustomer({ customerId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>customerId</code> | <code>string</code> | Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets `403`. |
| <code>body</code> | <code>[CustomerUpdate](src/models/customer-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.updateCustomer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Customers.UpdateCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.updateCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Customers.UpdateCustomerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataHub

> Source: [DataHub](src/resources/data-hub.ts)

<details>
<summary><code>createDatahubDataset(request: DataHub.CreateDatahubDatasetRequest, options?: RequestOptions): ApiPromise&lt;DatahubV1DatasetsResponse1, DataHub.CreateDatahubDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new DataHub dataset. A dataset is a logical grouping of events that share the same provider name. Creating a dataset allows you to define metadata such as name and description before ingesting events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataHub.createDatahubDataset({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type DatahubV1DatasetsResponse1
} catch (err) {
  // TODO: Handle 'err' of type DataHub.CreateDatahubDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataHub
  .createDatahubDataset({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatahubV1DatasetsResponse1
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
| <code>body</code> | <code>[DatahubV1DatasetsRequest](src/models/datahub-v1-datasets-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataHub.createDatahubDataset(request)`

- **OnSuccess**: <code>[DatahubV1DatasetsResponse1](src/models/datahub-v1-datasets-response1.ts)</code>
- **OnError**: throws <code>[DataHub.CreateDatahubDatasetError](src/resources/data-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataHub.createDatahubDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatahubV1DatasetsResponse1, DataHub.CreateDatahubDatasetError&gt;</code>, with `result.value` of type <code>[DatahubV1DatasetsResponse1](src/models/datahub-v1-datasets-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datahubEvents(request: DataHub.DatahubEventsRequest, options?: RequestOptions): ApiPromise&lt;DatahubV1EventsResponse, DataHub.DatahubEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a batch of events to DataHub.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataHub.datahubEvents({ body: {} });
  // TODO: Handle 'response' of type DatahubV1EventsResponse
} catch (err) {
  // TODO: Handle 'err' of type DataHub.DatahubEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataHub.datahubEvents({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatahubV1EventsResponse
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
| <code>body</code> | <code>[DatahubV1EventsRequest](src/models/datahub-v1-events-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataHub.datahubEvents(request)`

- **OnSuccess**: <code>[DatahubV1EventsResponse](src/models/datahub-v1-events-response.ts)</code>
- **OnError**: throws <code>[DataHub.DatahubEventsError](src/resources/data-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataHub.datahubEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatahubV1EventsResponse, DataHub.DatahubEventsError&gt;</code>, with `result.value` of type <code>[DatahubV1EventsResponse](src/models/datahub-v1-events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datahubEventsCsvFile(request?: DataHub.DatahubEventsCsvFileRequest, options?: RequestOptions): ApiPromise&lt;DatahubV1CsvUploadResponse, DataHub.DatahubEventsCsvFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a batch of events to DataHub using a CSV file, either uncompressed or compressed in ZIP or GZ format. It may take up to 15 minutes for the data to become available in the DoiT console.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataHub.datahubEventsCsvFile({
    provider: "Datadog",
    schemaTemplate: "anthropic-spend-report@1",
    periodStart: "2026-09-10",
    periodEnd: "2026-09-10",
  });
  // TODO: Handle 'response' of type DatahubV1CsvUploadResponse
} catch (err) {
  // TODO: Handle 'err' of type DataHub.DatahubEventsCsvFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataHub
  .datahubEventsCsvFile({
    provider: "Datadog",
    schemaTemplate: "anthropic-spend-report@1",
    periodStart: "2026-09-10",
    periodEnd: "2026-09-10",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatahubV1CsvUploadResponse
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
| <code>provider?</code> | <code>string</code> | The identifier of the data provider. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore (_), space, dash (-). |
| <code>file?</code> | <code>FileInput</code> | The CSV file to upload, either uncompressed or compressed in ZIP or GZ format. The maximum file size is 30 MB. |
| <code>schemaTemplate?</code> | <code>string</code> | Versioned schema template of the file. Defaults to the dataset's template (`default@1` for datasets created without one). Provider-native templates such as `anthropic-spend-report@1` and `codex-usage-report@1` validate the vendor's own columns and normalize them into DataHub events. Must match the template stored on the dataset. |
| <code>periodStart?</code> | <code>string</code> (date) | Inclusive first day of the report period (YYYY-MM-DD). Required for template uploads whose filename does not carry the period; when both are present they must agree. |
| <code>periodEnd?</code> | <code>string</code> (date) | Inclusive last day of the report period (YYYY-MM-DD). Events are booked on this day. |
| <code>replace?</code> | <code>boolean</code> | Template uploads only. When `true`, active batches whose report period overlaps this upload are soft-deleted before the new file is ingested, and their ids are returned in `replacedBatches`. Refused with `409` when an overlapping batch extends outside the requested period (so a one-day replacement can never remove a wider upload) or was ingested less than 90 minutes ago (`Retry-After` header set). Without `replace`, any overlap is rejected with `409`.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataHub.datahubEventsCsvFile(request)`

- **OnSuccess**: <code>[DatahubV1CsvUploadResponse](src/models/datahub-v1-csv-upload-response.ts)</code>
- **OnError**: throws <code>[DataHub.DatahubEventsCsvFileError](src/resources/data-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataHub.datahubEventsCsvFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatahubV1CsvUploadResponse, DataHub.DatahubEventsCsvFileError&gt;</code>, with `result.value` of type <code>[DatahubV1CsvUploadResponse](src/models/datahub-v1-csv-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datahubImportProviderRecords(request: DataHub.DatahubImportProviderRecordsRequest, options?: RequestOptions): ApiPromise&lt;DatahubV1ImportResponse, DataHub.DatahubImportProviderRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends provider-native records as JSON instead of a CSV file. The records use the same columns as the template's CSV (currently `anthropic-spend-report@1` only) and are validated, normalized and booked on `periodEnd` exactly like a CSV upload. It may take up to 15 minutes for the data to become available in the DoiT console.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataHub.datahubImportProviderRecords({
    body: {
      provider: "some example string",
      schemaTemplate: "some example string",
      periodStart: "2024-01-15",
      periodEnd: "2024-01-15",
      records: [{}],
    },
  });
  // TODO: Handle 'response' of type DatahubV1ImportResponse
} catch (err) {
  // TODO: Handle 'err' of type DataHub.DatahubImportProviderRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataHub
  .datahubImportProviderRecords({
    body: {
      provider: "some example string",
      schemaTemplate: "some example string",
      periodStart: "2024-01-15",
      periodEnd: "2024-01-15",
      records: [{}],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatahubV1ImportResponse
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
| <code>body</code> | <code>[DatahubV1ImportRequest](src/models/datahub-v1-import-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataHub.datahubImportProviderRecords(request)`

- **OnSuccess**: <code>[DatahubV1ImportResponse](src/models/datahub-v1-import-response.ts)</code>
- **OnError**: throws <code>[DataHub.DatahubImportProviderRecordsError](src/resources/data-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataHub.datahubImportProviderRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatahubV1ImportResponse, DataHub.DatahubImportProviderRecordsError&gt;</code>, with `result.value` of type <code>[DatahubV1ImportResponse](src/models/datahub-v1-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDatahubDataset(request: DataHub.DeleteDatahubDatasetRequest, options?: RequestOptions): ApiPromise&lt;DatahubV1DatasetsResponse2, DataHub.DeleteDatahubDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific DataHub dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataHub.deleteDatahubDataset({ name: "My Custom Dataset" });
  // TODO: Handle 'response' of type DatahubV1DatasetsResponse2
} catch (err) {
  // TODO: Handle 'err' of type DataHub.DeleteDatahubDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataHub.deleteDatahubDataset({ name: "My Custom Dataset" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatahubV1DatasetsResponse2
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
| <code>name</code> | <code>string</code> | The name of the dataset to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataHub.deleteDatahubDataset(request)`

- **OnSuccess**: <code>[DatahubV1DatasetsResponse2](src/models/datahub-v1-datasets-response2.ts)</code>
- **OnError**: throws <code>[DataHub.DeleteDatahubDatasetError](src/resources/data-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataHub.deleteDatahubDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatahubV1DatasetsResponse2, DataHub.DeleteDatahubDatasetError&gt;</code>, with `result.value` of type <code>[DatahubV1DatasetsResponse2](src/models/datahub-v1-datasets-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDatahubDatasets(request: DataHub.DeleteDatahubDatasetsRequest, options?: RequestOptions): ApiPromise&lt;DatahubV1DatasetsResponse2, DataHub.DeleteDatahubDatasetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes one or more DataHub datasets and all their associated data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataHub.deleteDatahubDatasets({
    body: { datasets: ["some example string"] },
  });
  // TODO: Handle 'response' of type DatahubV1DatasetsResponse2
} catch (err) {
  // TODO: Handle 'err' of type DataHub.DeleteDatahubDatasetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataHub
  .deleteDatahubDatasets({ body: { datasets: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatahubV1DatasetsResponse2
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
| <code>body</code> | <code>[DatahubV1DatasetsRequest1](src/models/datahub-v1-datasets-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataHub.deleteDatahubDatasets(request)`

- **OnSuccess**: <code>[DatahubV1DatasetsResponse2](src/models/datahub-v1-datasets-response2.ts)</code>
- **OnError**: throws <code>[DataHub.DeleteDatahubDatasetsError](src/resources/data-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataHub.deleteDatahubDatasets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatahubV1DatasetsResponse2, DataHub.DeleteDatahubDatasetsError&gt;</code>, with `result.value` of type <code>[DatahubV1DatasetsResponse2](src/models/datahub-v1-datasets-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDatahubEventsByFilter(request: DataHub.DeleteDatahubEventsByFilterRequest, options?: RequestOptions): ApiPromise&lt;DatahubV1EventsDeleteResponse, DataHub.DeleteDatahubEventsByFilterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes specific events using filters. Note that the two filters, `eventIds` and `time ranges`, are mutually exclusive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataHub.deleteDatahubEventsByFilter({
    body: { dataset: "some example string" },
  });
  // TODO: Handle 'response' of type DatahubV1EventsDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type DataHub.DeleteDatahubEventsByFilterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataHub
  .deleteDatahubEventsByFilter({ body: { dataset: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatahubV1EventsDeleteResponse
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
| <code>body</code> | <code>[DatahubV1EventsDeleteRequest](src/models/datahub-v1-events-delete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataHub.deleteDatahubEventsByFilter(request)`

- **OnSuccess**: <code>[DatahubV1EventsDeleteResponse](src/models/datahub-v1-events-delete-response.ts)</code>
- **OnError**: throws <code>[DataHub.DeleteDatahubEventsByFilterError](src/resources/data-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataHub.deleteDatahubEventsByFilter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatahubV1EventsDeleteResponse, DataHub.DeleteDatahubEventsByFilterError&gt;</code>, with `result.value` of type <code>[DatahubV1EventsDeleteResponse](src/models/datahub-v1-events-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exportDatahubDatasetRecords(request: DataHub.ExportDatahubDatasetRecordsRequest, options?: RequestOptions): ApiPromise&lt;Uint8Array, DataHub.ExportDatahubDatasetRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one page of the live records of a DataHub dataset, as CSV (default) or as newline-delimited JSON in the same shape as the `/datahub/v1/events` payload.

A time window is required: `startTime` is inclusive, `endTime` is exclusive, and the window must not exceed 366 days. Rows are ordered by their event time and event id, and pages never overlap: read the `X-Next-Page-Token` response header and pass it back as `pageToken` until the header is absent. `X-Row-Count` carries the number of rows in the page. Only live rows are returned; rows deleted through the console or the delete endpoints are excluded.

Every row starts with five provenance columns (`event_id`, `batch`, `source`, `export_time`, `updated_by`) followed by the dataset's business columns in the CSV ingest vocabulary (`usage_date`, `fixed.`, `label.`, `project_label.`, `system_label.`, `metric.`). The business columns are computed from the rows of each page, so consecutive pages can have different label and metric columns; union the headers when concatenating pages. Datasets created with the FOCUS schema template use the FOCUS column names instead and can only be exported as CSV.

To re-import an export into another dataset, drop the `batch`, `source`, `export_time` and `updated_by` columns, and either drop `event_id` or rename it to `id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataHub.exportDatahubDatasetRecords({
    name: "My Custom Dataset",
    startTime: new Date(Date.UTC(2026, 0, 1, 0, 0, 0)),
    endTime: new Date(Date.UTC(2026, 1, 1, 0, 0, 0)),
  });
  // TODO: Handle 'response' of type Uint8Array
} catch (err) {
  // TODO: Handle 'err' of type DataHub.ExportDatahubDatasetRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataHub
  .exportDatahubDatasetRecords({
    name: "My Custom Dataset",
    startTime: new Date(Date.UTC(2026, 0, 1, 0, 0, 0)),
    endTime: new Date(Date.UTC(2026, 1, 1, 0, 0, 0)),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Uint8Array
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
| <code>name</code> | <code>string</code> | The name of the dataset to export. |
| <code>startTime</code> | <code>Date</code> (date-time) | Inclusive lower bound on the event time, RFC3339. |
| <code>endTime</code> | <code>Date</code> (date-time) | Exclusive upper bound on the event time, RFC3339. At most 366 days after the start time. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | Output format.<br>**Default**: "csv" |
| <code>maxResults?</code> | <code>number</code> | Maximum number of rows in the page.<br>**Default**: 10000 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataHub.exportDatahubDatasetRecords(request)`

- **OnSuccess**: <code>Uint8Array</code>
- **OnError**: throws <code>[DataHub.ExportDatahubDatasetRecordsError](src/resources/data-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataHub.exportDatahubDatasetRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Uint8Array, DataHub.ExportDatahubDatasetRecordsError&gt;</code>, with `result.value` of type <code>Uint8Array</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDatahubDataset(request: DataHub.GetDatahubDatasetRequest, options?: RequestOptions): ApiPromise&lt;DatahubV1DatasetsResponse4, DataHub.GetDatahubDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific DataHub dataset by name.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataHub.getDatahubDataset({ name: "My Custom Dataset" });
  // TODO: Handle 'response' of type DatahubV1DatasetsResponse4
} catch (err) {
  // TODO: Handle 'err' of type DataHub.GetDatahubDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataHub.getDatahubDataset({ name: "My Custom Dataset" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatahubV1DatasetsResponse4
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
| <code>name</code> | <code>string</code> | The name of the dataset to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataHub.getDatahubDataset(request)`

- **OnSuccess**: <code>[DatahubV1DatasetsResponse4](src/models/datahub-v1-datasets-response4.ts)</code>
- **OnError**: throws <code>[DataHub.GetDatahubDatasetError](src/resources/data-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataHub.getDatahubDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatahubV1DatasetsResponse4, DataHub.GetDatahubDatasetError&gt;</code>, with `result.value` of type <code>[DatahubV1DatasetsResponse4](src/models/datahub-v1-datasets-response4.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDatahubDatasets(options?: RequestOptions): ApiPromise&lt;DatahubV1DatasetsResponse, DataHub.ListDatahubDatasetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all DataHub datasets for the customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataHub.listDatahubDatasets();
  // TODO: Handle 'response' of type DatahubV1DatasetsResponse
} catch (err) {
  // TODO: Handle 'err' of type DataHub.ListDatahubDatasetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataHub.listDatahubDatasets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatahubV1DatasetsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataHub.listDatahubDatasets()`

- **OnSuccess**: <code>[DatahubV1DatasetsResponse](src/models/datahub-v1-datasets-response.ts)</code>
- **OnError**: throws <code>[DataHub.ListDatahubDatasetsError](src/resources/data-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataHub.listDatahubDatasets().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatahubV1DatasetsResponse, DataHub.ListDatahubDatasetsError&gt;</code>, with `result.value` of type <code>[DatahubV1DatasetsResponse](src/models/datahub-v1-datasets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDatahubDataset(request: DataHub.UpdateDatahubDatasetRequest, options?: RequestOptions): ApiPromise&lt;DatahubV1DatasetsResponse1, DataHub.UpdateDatahubDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing DataHub dataset's metadata. The `description`, `displayName` and `logoName` fields can be updated.
Only the fields present in the request body are changed; an omitted field keeps its stored value, and an empty string clears it.
The dataset `name` is immutable and serves as the resource identifier and the ingest `provider` value. To change how a dataset is displayed in the console and in report results, set `displayName`; saved reports, budgets, alerts and filters keep working because they reference `name`.
If `name` is included in the request body, it must match the dataset name in the URL path. A mismatched name will be rejected with a 400 error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataHub.updateDatahubDataset({ name: "My Custom Dataset", body: {} });
  // TODO: Handle 'response' of type DatahubV1DatasetsResponse1
} catch (err) {
  // TODO: Handle 'err' of type DataHub.UpdateDatahubDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataHub
  .updateDatahubDataset({ name: "My Custom Dataset", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatahubV1DatasetsResponse1
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
| <code>name</code> | <code>string</code> | The name of the dataset to update (immutable, used for identification only). |
| <code>body</code> | <code>[DatahubV1DatasetsRequest2](src/models/datahub-v1-datasets-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataHub.updateDatahubDataset(request)`

- **OnSuccess**: <code>[DatahubV1DatasetsResponse1](src/models/datahub-v1-datasets-response1.ts)</code>
- **OnError**: throws <code>[DataHub.UpdateDatahubDatasetError](src/resources/data-hub.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataHub.updateDatahubDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatahubV1DatasetsResponse1, DataHub.UpdateDatahubDatasetError&gt;</code>, with `result.value` of type <code>[DatahubV1DatasetsResponse1](src/models/datahub-v1-datasets-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Dimensions

> Source: [Dimensions](src/resources/dimensions.ts)

<details>
<summary><code>getDimensions(request: Dimensions.GetDimensionsRequest, options?: RequestOptions): ApiPromise&lt;DimensionsExternalApiGetResponse, Dimensions.GetDimensionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a dimension by type and key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dimensions.getDimensions({
    type: DimensionsTypes.Fixed,
    id: "service_description",
  });
  // TODO: Handle 'response' of type DimensionsExternalApiGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Dimensions.GetDimensionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dimensions
  .getDimensions({ type: DimensionsTypes.Fixed, id: "service_description" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DimensionsExternalApiGetResponse
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
| <code>type</code> | <code>[DimensionsTypes](src/models/dimensions-types.ts)</code> | Dimension type |
| <code>id</code> | <code>string</code> | Dimension id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dimensions.getDimensions(request)`

- **OnSuccess**: <code>[DimensionsExternalApiGetResponse](src/models/dimensions-external-api-get-response.ts)</code>
- **OnError**: throws <code>[Dimensions.GetDimensionsError](src/resources/dimensions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dimensions.getDimensions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DimensionsExternalApiGetResponse, Dimensions.GetDimensionsError&gt;</code>, with `result.value` of type <code>[DimensionsExternalApiGetResponse](src/models/dimensions-external-api-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDimensions(request?: Dimensions.ListDimensionsRequest, options?: RequestOptions): ApiPromise&lt;DimensionsExternalApiListResponse, Dimensions.ListDimensionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the dimensions that your account has access to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dimensions.listDimensions();
  // TODO: Handle 'response' of type DimensionsExternalApiListResponse
} catch (err) {
  // TODO: Handle 'err' of type Dimensions.ListDimensionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dimensions.listDimensions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DimensionsExternalApiListResponse
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
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>filter?</code> | <code>string</code> | An expression for filtering the results.<br>The fields eligible for filtering are: type, label, key. |
| <code>sortBy?</code> | <code>[SortByDoiTDimensionsApi](src/models/sort-by-doi-tdimensions-api.ts)</code> | A field by which the results will be sorted. `key` is an alias for the dimension `id`. Defaults to `id` in descending order.<br>**Default**: "id" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dimensions.listDimensions(request)`

- **OnSuccess**: <code>[DimensionsExternalApiListResponse](src/models/dimensions-external-api-list-response.ts)</code>
- **OnError**: throws <code>[Dimensions.ListDimensionsError](src/resources/dimensions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dimensions.listDimensions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DimensionsExternalApiListResponse, Dimensions.ListDimensionsError&gt;</code>, with `result.value` of type <code>[DimensionsExternalApiListResponse](src/models/dimensions-external-api-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Folders

> Source: [Folders](src/resources/folders.ts)

<details>
<summary><code>createFolder(request: Folders.CreateFolderRequestParams, options?: RequestOptions): ApiPromise&lt;Folder, Folders.CreateFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Cloud Analytics folder.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.createFolder({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Folder
} catch (err) {
  // TODO: Handle 'err' of type Folders.CreateFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.createFolder({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Folder
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
| <code>body</code> | <code>[CreateFolderRequest](src/models/create-folder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.createFolder(request)`

- **OnSuccess**: <code>[Folder](src/models/folder.ts)</code>
- **OnError**: throws <code>[Folders.CreateFolderError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.createFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Folder, Folders.CreateFolderError&gt;</code>, with `result.value` of type <code>[Folder](src/models/folder.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteFolder(request: Folders.DeleteFolderRequest, options?: RequestOptions): ApiPromise&lt;undefined, Folders.DeleteFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified folder. All nested folders will be deleted. Any reports or allocations contained in the folder are moved to the root.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.folders.deleteFolder({ id: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Folders.DeleteFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.deleteFolder({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>id</code> | <code>string</code> | Folder ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.deleteFolder(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Folders.DeleteFolderError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.deleteFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Folders.DeleteFolderError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFolder(request: Folders.GetFolderRequest, options?: RequestOptions): ApiPromise&lt;Folder, Folders.GetFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified Cloud Analytics folder.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.getFolder({ id: "some example string" });
  // TODO: Handle 'response' of type Folder
} catch (err) {
  // TODO: Handle 'err' of type Folders.GetFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.getFolder({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Folder
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
| <code>id</code> | <code>string</code> | Folder ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.getFolder(request)`

- **OnSuccess**: <code>[Folder](src/models/folder.ts)</code>
- **OnError**: throws <code>[Folders.GetFolderError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.getFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Folder, Folders.GetFolderError&gt;</code>, with `result.value` of type <code>[Folder](src/models/folder.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFolders(request?: Folders.ListFoldersRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsV1FoldersResponse, Folders.ListFoldersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Cloud Analytics folders the current customer has access to.
Folders are returned in id-ascending order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.listFolders();
  // TODO: Handle 'response' of type AnalyticsV1FoldersResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.ListFoldersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.listFolders().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsV1FoldersResponse
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
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.listFolders(request)`

- **OnSuccess**: <code>[AnalyticsV1FoldersResponse](src/models/analytics-v1-folders-response.ts)</code>
- **OnError**: throws <code>[Folders.ListFoldersError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.listFolders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsV1FoldersResponse, Folders.ListFoldersError&gt;</code>, with `result.value` of type <code>[AnalyticsV1FoldersResponse](src/models/analytics-v1-folders-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFolder(request: Folders.UpdateFolderRequestParams, options?: RequestOptions): ApiPromise&lt;Folder, Folders.UpdateFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified folder. All fields are optional.
To reparent the folder, set `parentFolderId` to the target folder ID
(use "root" for the top level). If a sibling at the target has the same
name, the folder is auto-renamed.
To move reports or allocations into or out of a folder, update the item's
`folderId` field via the report or allocation PATCH endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.updateFolder({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type Folder
} catch (err) {
  // TODO: Handle 'err' of type Folders.UpdateFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.updateFolder({ id: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Folder
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
| <code>id</code> | <code>string</code> | Folder ID. |
| <code>body</code> | <code>[UpdateFolderRequest](src/models/update-folder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.updateFolder(request)`

- **OnSuccess**: <code>[Folder](src/models/folder.ts)</code>
- **OnError**: throws <code>[Folders.UpdateFolderError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.updateFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Folder, Folders.UpdateFolderError&gt;</code>, with `result.value` of type <code>[Folder](src/models/folder.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GeographicAccess

> Source: [GeographicAccess](src/resources/geographic-access.ts)

<details>
<summary><code>createGeographicAccessCustomRegion(request: GeographicAccess.CreateGeographicAccessCustomRegionRequestParams, options?: RequestOptions): ApiPromise&lt;GeographicAccessCustomRegion, GeographicAccess.CreateGeographicAccessCustomRegionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom region owned by the authenticated tenant. The tenant must be a customer-hierarchy root. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geographicAccess.createGeographicAccessCustomRegion({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: { name: "some example string", countryCodes: ["some example string"] },
  });
  // TODO: Handle 'response' of type GeographicAccessCustomRegion
} catch (err) {
  // TODO: Handle 'err' of type GeographicAccess.CreateGeographicAccessCustomRegionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geographicAccess
  .createGeographicAccessCustomRegion({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: { name: "some example string", countryCodes: ["some example string"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeographicAccessCustomRegion
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
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |
| <code>body</code> | <code>[CreateGeographicAccessCustomRegionRequest](src/models/create-geographic-access-custom-region-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geographicAccess.createGeographicAccessCustomRegion(request)`

- **OnSuccess**: <code>[GeographicAccessCustomRegion](src/models/geographic-access-custom-region.ts)</code>
- **OnError**: throws <code>[GeographicAccess.CreateGeographicAccessCustomRegionError](src/resources/geographic-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geographicAccess.createGeographicAccessCustomRegion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeographicAccessCustomRegion, GeographicAccess.CreateGeographicAccessCustomRegionError&gt;</code>, with `result.value` of type <code>[GeographicAccessCustomRegion](src/models/geographic-access-custom-region.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomerGeographicAccessScope(request: GeographicAccess.DeleteCustomerGeographicAccessScopeRequest, options?: RequestOptions): ApiPromise&lt;undefined, GeographicAccess.DeleteCustomerGeographicAccessScopeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clears the geographic scope for a target customer, leaving it unassigned. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating the request is idempotent. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.geographicAccess.deleteCustomerGeographicAccessScope({
    targetCustomerId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
} catch (err) {
  // TODO: Handle 'err' of type GeographicAccess.DeleteCustomerGeographicAccessScopeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geographicAccess
  .deleteCustomerGeographicAccessScope({
    targetCustomerId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>targetCustomerId</code> | <code>string</code> | Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geographicAccess.deleteCustomerGeographicAccessScope(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[GeographicAccess.DeleteCustomerGeographicAccessScopeError](src/resources/geographic-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geographicAccess.deleteCustomerGeographicAccessScope(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, GeographicAccess.DeleteCustomerGeographicAccessScopeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGeographicAccessCustomRegion(request: GeographicAccess.DeleteGeographicAccessCustomRegionRequest, options?: RequestOptions): ApiPromise&lt;undefined, GeographicAccess.DeleteGeographicAccessCustomRegionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom region owned by the authenticated tenant. Assigned regions cannot be deleted. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.geographicAccess.deleteGeographicAccessCustomRegion({
    customRegionId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
} catch (err) {
  // TODO: Handle 'err' of type GeographicAccess.DeleteGeographicAccessCustomRegionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geographicAccess
  .deleteGeographicAccessCustomRegion({
    customRegionId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>customRegionId</code> | <code>string</code> | Stable service-generated custom-region ID. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geographicAccess.deleteGeographicAccessCustomRegion(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[GeographicAccess.DeleteGeographicAccessCustomRegionError](src/resources/geographic-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geographicAccess.deleteGeographicAccessCustomRegion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, GeographicAccess.DeleteGeographicAccessCustomRegionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUserGeographicAccessScope(request: GeographicAccess.DeleteUserGeographicAccessScopeRequest, options?: RequestOptions): ApiPromise&lt;undefined, GeographicAccess.DeleteUserGeographicAccessScopeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clears the geographic scope assigned to a user who belongs to the target customer, leaving it unassigned. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating the request is idempotent. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.geographicAccess.deleteUserGeographicAccessScope({
    targetCustomerId: "some example string",
    userId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
} catch (err) {
  // TODO: Handle 'err' of type GeographicAccess.DeleteUserGeographicAccessScopeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geographicAccess
  .deleteUserGeographicAccessScope({
    targetCustomerId: "some example string",
    userId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>targetCustomerId</code> | <code>string</code> | Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed. |
| <code>userId</code> | <code>string</code> | Unique user ID returned by GET /iam/v1/users that belongs to the target customer. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geographicAccess.deleteUserGeographicAccessScope(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[GeographicAccess.DeleteUserGeographicAccessScopeError](src/resources/geographic-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geographicAccess.deleteUserGeographicAccessScope(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, GeographicAccess.DeleteUserGeographicAccessScopeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomerGeographicAccessScope(request: GeographicAccess.GetCustomerGeographicAccessScopeRequest, options?: RequestOptions): ApiPromise&lt;GeographicAccessScope, GeographicAccess.GetCustomerGeographicAccessScopeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the geographic scope for a target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Targets outside that hierarchy are returned as not found. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geographicAccess.getCustomerGeographicAccessScope({
    targetCustomerId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type GeographicAccessScope
} catch (err) {
  // TODO: Handle 'err' of type GeographicAccess.GetCustomerGeographicAccessScopeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geographicAccess
  .getCustomerGeographicAccessScope({
    targetCustomerId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeographicAccessScope
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
| <code>targetCustomerId</code> | <code>string</code> | Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geographicAccess.getCustomerGeographicAccessScope(request)`

- **OnSuccess**: <code>[GeographicAccessScope](src/models/unions/geographic-access-scope.ts)</code>
- **OnError**: throws <code>[GeographicAccess.GetCustomerGeographicAccessScopeError](src/resources/geographic-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geographicAccess.getCustomerGeographicAccessScope(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeographicAccessScope, GeographicAccess.GetCustomerGeographicAccessScopeError&gt;</code>, with `result.value` of type <code>[GeographicAccessScope](src/models/unions/geographic-access-scope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGeographicAccessCustomRegion(request: GeographicAccess.GetGeographicAccessCustomRegionRequest, options?: RequestOptions): ApiPromise&lt;GeographicAccessCustomRegion, GeographicAccess.GetGeographicAccessCustomRegionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a custom region owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geographicAccess.getGeographicAccessCustomRegion({
    customRegionId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type GeographicAccessCustomRegion
} catch (err) {
  // TODO: Handle 'err' of type GeographicAccess.GetGeographicAccessCustomRegionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geographicAccess
  .getGeographicAccessCustomRegion({
    customRegionId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeographicAccessCustomRegion
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
| <code>customRegionId</code> | <code>string</code> | Stable service-generated custom-region ID. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geographicAccess.getGeographicAccessCustomRegion(request)`

- **OnSuccess**: <code>[GeographicAccessCustomRegion](src/models/geographic-access-custom-region.ts)</code>
- **OnError**: throws <code>[GeographicAccess.GetGeographicAccessCustomRegionError](src/resources/geographic-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geographicAccess.getGeographicAccessCustomRegion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeographicAccessCustomRegion, GeographicAccess.GetGeographicAccessCustomRegionError&gt;</code>, with `result.value` of type <code>[GeographicAccessCustomRegion](src/models/geographic-access-custom-region.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserGeographicAccessScope(request: GeographicAccess.GetUserGeographicAccessScopeRequest, options?: RequestOptions): ApiPromise&lt;GeographicAccessScope, GeographicAccess.GetUserGeographicAccessScopeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the geographic scope assigned to a user who belongs to the target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Targets outside that hierarchy are returned as not found. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geographicAccess.getUserGeographicAccessScope({
    targetCustomerId: "some example string",
    userId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type GeographicAccessScope
} catch (err) {
  // TODO: Handle 'err' of type GeographicAccess.GetUserGeographicAccessScopeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geographicAccess
  .getUserGeographicAccessScope({
    targetCustomerId: "some example string",
    userId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeographicAccessScope
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
| <code>targetCustomerId</code> | <code>string</code> | Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed. |
| <code>userId</code> | <code>string</code> | Unique user ID returned by GET /iam/v1/users that belongs to the target customer. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geographicAccess.getUserGeographicAccessScope(request)`

- **OnSuccess**: <code>[GeographicAccessScope](src/models/unions/geographic-access-scope.ts)</code>
- **OnError**: throws <code>[GeographicAccess.GetUserGeographicAccessScopeError](src/resources/geographic-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geographicAccess.getUserGeographicAccessScope(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeographicAccessScope, GeographicAccess.GetUserGeographicAccessScopeError&gt;</code>, with `result.value` of type <code>[GeographicAccessScope](src/models/unions/geographic-access-scope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGeographicAccessCountries(request?: GeographicAccess.ListGeographicAccessCountriesRequest, options?: RequestOptions): ApiPromise&lt;GeographicAccessCountriesResponse, GeographicAccess.ListGeographicAccessCountriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the canonical ISO 3166-1 alpha-2 country catalogue used by geographic access policies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geographicAccess.listGeographicAccessCountries({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type GeographicAccessCountriesResponse
} catch (err) {
  // TODO: Handle 'err' of type GeographicAccess.ListGeographicAccessCountriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geographicAccess
  .listGeographicAccessCountries({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeographicAccessCountriesResponse
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
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geographicAccess.listGeographicAccessCountries(request)`

- **OnSuccess**: <code>[GeographicAccessCountriesResponse](src/models/geographic-access-countries-response.ts)</code>
- **OnError**: throws <code>[GeographicAccess.ListGeographicAccessCountriesError](src/resources/geographic-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geographicAccess.listGeographicAccessCountries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeographicAccessCountriesResponse, GeographicAccess.ListGeographicAccessCountriesError&gt;</code>, with `result.value` of type <code>[GeographicAccessCountriesResponse](src/models/geographic-access-countries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGeographicAccessCustomRegions(request?: GeographicAccess.ListGeographicAccessCustomRegionsRequest, options?: RequestOptions): ApiPromise&lt;GeographicAccessCustomRegionsResponse, GeographicAccess.ListGeographicAccessCustomRegionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the ready custom regions owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geographicAccess.listGeographicAccessCustomRegions({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type GeographicAccessCustomRegionsResponse
} catch (err) {
  // TODO: Handle 'err' of type GeographicAccess.ListGeographicAccessCustomRegionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geographicAccess
  .listGeographicAccessCustomRegions({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeographicAccessCustomRegionsResponse
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
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geographicAccess.listGeographicAccessCustomRegions(request)`

- **OnSuccess**: <code>[GeographicAccessCustomRegionsResponse](src/models/geographic-access-custom-regions-response.ts)</code>
- **OnError**: throws <code>[GeographicAccess.ListGeographicAccessCustomRegionsError](src/resources/geographic-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geographicAccess.listGeographicAccessCustomRegions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeographicAccessCustomRegionsResponse, GeographicAccess.ListGeographicAccessCustomRegionsError&gt;</code>, with `result.value` of type <code>[GeographicAccessCustomRegionsResponse](src/models/geographic-access-custom-regions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomerGeographicAccessScope(request: GeographicAccess.UpdateCustomerGeographicAccessScopeRequest, options?: RequestOptions): ApiPromise&lt;GeographicAccessScope, GeographicAccess.UpdateCustomerGeographicAccessScopeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Atomically replaces the geographic scope for a target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating an identical request is idempotent. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geographicAccess.updateCustomerGeographicAccessScope({
    targetCustomerId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: { countryCode: "DE" },
  });
  // TODO: Handle 'response' of type GeographicAccessScope
} catch (err) {
  // TODO: Handle 'err' of type GeographicAccess.UpdateCustomerGeographicAccessScopeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geographicAccess
  .updateCustomerGeographicAccessScope({
    targetCustomerId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: { countryCode: "DE" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeographicAccessScope
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
| <code>targetCustomerId</code> | <code>string</code> | Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |
| <code>body</code> | <code>[UpdateGeographicAccessScopeRequest](src/models/unions/update-geographic-access-scope-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geographicAccess.updateCustomerGeographicAccessScope(request)`

- **OnSuccess**: <code>[GeographicAccessScope](src/models/unions/geographic-access-scope.ts)</code>
- **OnError**: throws <code>[GeographicAccess.UpdateCustomerGeographicAccessScopeError](src/resources/geographic-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geographicAccess.updateCustomerGeographicAccessScope(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeographicAccessScope, GeographicAccess.UpdateCustomerGeographicAccessScopeError&gt;</code>, with `result.value` of type <code>[GeographicAccessScope](src/models/unions/geographic-access-scope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGeographicAccessCustomRegion(request: GeographicAccess.UpdateGeographicAccessCustomRegionRequestParams, options?: RequestOptions): ApiPromise&lt;GeographicAccessCustomRegion, GeographicAccess.UpdateGeographicAccessCustomRegionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name, country membership, or both for a custom region owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geographicAccess.updateGeographicAccessCustomRegion({
    customRegionId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: {},
  });
  // TODO: Handle 'response' of type GeographicAccessCustomRegion
} catch (err) {
  // TODO: Handle 'err' of type GeographicAccess.UpdateGeographicAccessCustomRegionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geographicAccess
  .updateGeographicAccessCustomRegion({
    customRegionId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeographicAccessCustomRegion
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
| <code>customRegionId</code> | <code>string</code> | Stable service-generated custom-region ID. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |
| <code>body</code> | <code>[UpdateGeographicAccessCustomRegionRequest](src/models/update-geographic-access-custom-region-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geographicAccess.updateGeographicAccessCustomRegion(request)`

- **OnSuccess**: <code>[GeographicAccessCustomRegion](src/models/geographic-access-custom-region.ts)</code>
- **OnError**: throws <code>[GeographicAccess.UpdateGeographicAccessCustomRegionError](src/resources/geographic-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geographicAccess.updateGeographicAccessCustomRegion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeographicAccessCustomRegion, GeographicAccess.UpdateGeographicAccessCustomRegionError&gt;</code>, with `result.value` of type <code>[GeographicAccessCustomRegion](src/models/geographic-access-custom-region.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUserGeographicAccessScope(request: GeographicAccess.UpdateUserGeographicAccessScopeRequest, options?: RequestOptions): ApiPromise&lt;GeographicAccessScope, GeographicAccess.UpdateUserGeographicAccessScopeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Atomically replaces the geographic scope assigned to a user who belongs to the target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating an identical request is idempotent. Requires the UsersManager permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geographicAccess.updateUserGeographicAccessScope({
    targetCustomerId: "some example string",
    userId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: { countryCode: "DE" },
  });
  // TODO: Handle 'response' of type GeographicAccessScope
} catch (err) {
  // TODO: Handle 'err' of type GeographicAccess.UpdateUserGeographicAccessScopeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geographicAccess
  .updateUserGeographicAccessScope({
    targetCustomerId: "some example string",
    userId: "some example string",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
    body: { countryCode: "DE" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeographicAccessScope
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
| <code>targetCustomerId</code> | <code>string</code> | Customer ID within the authenticated tenant's hierarchy whose geographic scope is managed. |
| <code>userId</code> | <code>string</code> | Unique user ID returned by GET /iam/v1/users that belongs to the target customer. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |
| <code>body</code> | <code>[UpdateGeographicAccessScopeRequest](src/models/unions/update-geographic-access-scope-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geographicAccess.updateUserGeographicAccessScope(request)`

- **OnSuccess**: <code>[GeographicAccessScope](src/models/unions/geographic-access-scope.ts)</code>
- **OnError**: throws <code>[GeographicAccess.UpdateUserGeographicAccessScopeError](src/resources/geographic-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geographicAccess.updateUserGeographicAccessScope(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeographicAccessScope, GeographicAccess.UpdateUserGeographicAccessScopeError&gt;</code>, with `result.value` of type <code>[GeographicAccessScope](src/models/unions/geographic-access-scope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/resources/insights.ts)

<details>
<summary><code>deleteInsightResult(request: Insights.DeleteInsightResultRequest, options?: RequestOptions): ApiPromise&lt;undefined, Insights.DeleteInsightResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a single insight and all its associated resource results.
Only insights created via the public API can be deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.insights.deleteInsightResult({
    sourceId: SourceId.PublicApi,
    insightKey: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Insights.DeleteInsightResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .deleteInsightResult({ sourceId: SourceId.PublicApi, insightKey: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>sourceId</code> | <code>[SourceId](src/models/source-id.ts)</code> | Only insights created via the public API can be managed. Currently only "public-api" is supported. |
| <code>insightKey</code> | <code>string</code> | The unique key identifying the insight to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.deleteInsightResult(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Insights.DeleteInsightResultError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.deleteInsightResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Insights.DeleteInsightResultError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInsightResults(request: Insights.DeleteInsightResultsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Insights.DeleteInsightResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all insights matching the specified key from the batch source.
This removes the insight and all its associated resource results.
For single-insight deletion, use `DELETE /source/{sourceID}/insight/{insightKey}` instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.insights.deleteInsightResults({ insightKey: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Insights.DeleteInsightResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .deleteInsightResults({ insightKey: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>insightKey</code> | <code>string</code> | The unique key identifying the insight to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.deleteInsightResults(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Insights.DeleteInsightResultsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.deleteInsightResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Insights.DeleteInsightResultsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInsightResourceResults(request: Insights.GetInsightResourceResultsRequest, options?: RequestOptions): ApiPromise&lt;ResourceResultsResponse, Insights.GetInsightResourceResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of individual resource-level results for a specific insight.
Each resource result represents a single cloud resource (e.g. an EC2 instance, a GCS bucket)
affected by the insight, along with its risk scores or potential savings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getInsightResourceResults({
    sourceId: "some example string",
    insightKey: "some example string",
  });
  // TODO: Handle 'response' of type ResourceResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetInsightResourceResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getInsightResourceResults({ sourceId: "some example string", insightKey: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceResultsResponse
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
| <code>sourceId</code> | <code>string</code> | The identifier of the source that generated the insight. |
| <code>insightKey</code> | <code>string</code> | The unique key identifying the insight. |
| <code>pageToken?</code> | <code>string</code> | Token from a previous response to fetch the next page. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results per page (default 1000, max 5000).<br>**Default**: 1000 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getInsightResourceResults(request)`

- **OnSuccess**: <code>[ResourceResultsResponse](src/models/resource-results-response.ts)</code>
- **OnError**: throws <code>[Insights.GetInsightResourceResultsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getInsightResourceResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceResultsResponse, Insights.GetInsightResourceResultsError&gt;</code>, with `result.value` of type <code>[ResourceResultsResponse](src/models/resource-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInsightResult(request: Insights.GetInsightResultRequest, options?: RequestOptions): ApiPromise&lt;InsightResponse, Insights.GetInsightResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the metadata and aggregate summary for a single insight identified by source and key.
Does not include individual resource-level results — use the resource-results endpoint for those.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getInsightResult({
    sourceId: "some example string",
    insightKey: "some example string",
  });
  // TODO: Handle 'response' of type InsightResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetInsightResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getInsightResult({ sourceId: "some example string", insightKey: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightResponse
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
| <code>sourceId</code> | <code>string</code> | The identifier of the source that generated the insight. |
| <code>insightKey</code> | <code>string</code> | The unique key identifying the insight. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getInsightResult(request)`

- **OnSuccess**: <code>[InsightResponse](src/models/insight-response.ts)</code>
- **OnError**: throws <code>[Insights.GetInsightResultError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getInsightResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightResponse, Insights.GetInsightResultError&gt;</code>, with `result.value` of type <code>[InsightResponse](src/models/insight-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInsightResults(request?: Insights.GetInsightResultsRequest, options?: RequestOptions): ApiPromise&lt;ResultsBody, Insights.GetInsightResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of insights with their aggregate summaries (savings, risk counts).
Use query parameters to filter by status, category, provider, or priority.
Does not include individual resource-level results — use the resource-results endpoint for those.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getInsightResults({ cloudProvider: "aws" });
  // TODO: Handle 'response' of type ResultsBody
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetInsightResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights.getInsightResults({ cloudProvider: "aws" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResultsBody
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
| <code>searchTerm?</code> | <code>string</code> | Free-text search term to filter insights by title or description. |
| <code>displayStatus?</code> | <code>[DisplayStatus1](src/models/display-status1.ts)[]</code> | Filter by one or more display statuses. |
| <code>category?</code> | <code>[Category1](src/models/category1.ts)</code> | Filter by insight category. |
| <code>cloudProvider?</code> | <code>string</code> | Filter by cloud provider (e.g. "aws", "gcp", "azure"). |
| <code>source?</code> | <code>string[]</code> | the source that generated insights |
| <code>priority?</code> | <code>[Priority1](src/models/priority1.ts)[]</code> | Filter by one or more priority levels. |
| <code>tag?</code> | <code>string[]</code> | Filter by one or more tags (e.g. security certification labels like "ISO"). |
| <code>easyWin?</code> | <code>boolean</code> | When true, return only insights flagged as easy wins. |
| <code>cloudFlows?</code> | <code>boolean</code> | When true, return only insights that have associated CloudFlow automations. |
| <code>pageToken?</code> | <code>string</code> | Token from a previous response to fetch the next page. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results per page (default 50, max 500).<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getInsightResults(request)`

- **OnSuccess**: <code>[ResultsBody](src/models/results-body.ts)</code>
- **OnError**: throws <code>[Insights.GetInsightResultsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getInsightResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResultsBody, Insights.GetInsightResultsError&gt;</code>, with `result.value` of type <code>[ResultsBody](src/models/results-body.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postInsightResourceResults(request: Insights.PostInsightResourceResultsRequest, options?: RequestOptions): ApiPromise&lt;ResourceResultsResponse, Insights.PostInsightResourceResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces all resource results for the specified insight. Any existing unresolved resource results not present in the new set will be removed. The response includes server-computed fields (severity, resolved, enhancement) for each resource result. To delete all resource results, send an empty array.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.postInsightResourceResults({
    sourceId: SourceId.PublicApi,
    insightKey: "some example string",
    body: {
      resourceResults: [
        {
          resourceId: "some example string",
          cloudProvider: "some example string",
          account: "some example string",
          resultType: ResultType.SecurityRisk,
        },
      ],
    },
  });
  // TODO: Handle 'response' of type ResourceResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.PostInsightResourceResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .postInsightResourceResults({
    sourceId: SourceId.PublicApi,
    insightKey: "some example string",
    body: {
      resourceResults: [
        {
          resourceId: "some example string",
          cloudProvider: "some example string",
          account: "some example string",
          resultType: ResultType.SecurityRisk,
        },
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceResultsResponse
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
| <code>sourceId</code> | <code>[SourceId](src/models/source-id.ts)</code> | Only insights created via the public API can be managed. Currently only "public-api" is supported. |
| <code>insightKey</code> | <code>string</code> | The unique key identifying the insight. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results per page in the response (default 1000, max 5000).<br>**Default**: 1000 |
| <code>body</code> | <code>[CreateResourceResultsBody](src/models/create-resource-results-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.postInsightResourceResults(request)`

- **OnSuccess**: <code>[ResourceResultsResponse](src/models/resource-results-response.ts)</code>
- **OnError**: throws <code>[Insights.PostInsightResourceResultsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.postInsightResourceResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceResultsResponse, Insights.PostInsightResourceResultsError&gt;</code>, with `result.value` of type <code>[ResourceResultsResponse](src/models/resource-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postInsightResult(request: Insights.PostInsightResultRequest, options?: RequestOptions): ApiPromise&lt;InsightResponse, Insights.PostInsightResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a single insight for the given source and key.
If an insight with the same key already exists for the source, it will be updated.
Resource results are managed separately via the resource-results endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.postInsightResult({
    sourceId: SourceId.PublicApi,
    insightKey: "some example string",
    body: {
      key: "some example string",
      title: "some example string",
      shortDescription: "some example string",
      cloudProvider: "some example string",
      categories: [CreateCategory.FinOps],
    },
  });
  // TODO: Handle 'response' of type InsightResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.PostInsightResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .postInsightResult({
    sourceId: SourceId.PublicApi,
    insightKey: "some example string",
    body: {
      key: "some example string",
      title: "some example string",
      shortDescription: "some example string",
      cloudProvider: "some example string",
      categories: [CreateCategory.FinOps],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightResponse
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
| <code>sourceId</code> | <code>[SourceId](src/models/source-id.ts)</code> | Only insights created via the public API can be managed. Currently only "public-api" is supported. |
| <code>insightKey</code> | <code>string</code> | The unique key identifying the insight. |
| <code>body</code> | <code>[InsightMetadataRequest](src/models/insight-metadata-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.postInsightResult(request)`

- **OnSuccess**: <code>[InsightResponse](src/models/insight-response.ts)</code>
- **OnError**: throws <code>[Insights.PostInsightResultError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.postInsightResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightResponse, Insights.PostInsightResultError&gt;</code>, with `result.value` of type <code>[InsightResponse](src/models/insight-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postInsightResults(request?: Insights.PostInsightResultsRequest, options?: RequestOptions): ApiPromise&lt;ResultsError[], Insights.PostInsightResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates multiple insights in a single batch request.
Each insight in the batch includes its metadata and resource results inline.
For granular control over insight metadata and resource results independently,
use the single-insight and resource-results endpoints instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.postInsightResults();
  // TODO: Handle 'response' of type ResultsError[]
} catch (err) {
  // TODO: Handle 'err' of type Insights.PostInsightResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights.postInsightResults().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResultsError[]
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
| <code>body?</code> | <code>[CreateResultsBody](src/models/create-results-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.postInsightResults(request)`

- **OnSuccess**: <code>[ResultsError](src/models/results-error.ts)[]</code>
- **OnError**: throws <code>[Insights.PostInsightResultsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.postInsightResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResultsError[], Insights.PostInsightResultsError&gt;</code>, with `result.value` of type <code>[ResultsError](src/models/results-error.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInsightStatus(request: Insights.UpdateInsightStatusRequest, options?: RequestOptions): ApiPromise&lt;undefined, Insights.UpdateInsightStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the display status (e.g. actionable, acknowledged, dismissed) of a single insight.
Only insights created via the public API can have their status changed.
Deprecated: use the status field on the create/update insight endpoint instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.insights.updateInsightStatus({
    sourceId: SourceId.PublicApi,
    insightKey: "some example string",
    body: { status: DisplayStatus.Actionable },
  });
} catch (err) {
  // TODO: Handle 'err' of type Insights.UpdateInsightStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .updateInsightStatus({
    sourceId: SourceId.PublicApi,
    insightKey: "some example string",
    body: { status: DisplayStatus.Actionable },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>sourceId</code> | <code>[SourceId](src/models/source-id.ts)</code> | Only insights created via the public API can be managed. Currently only "public-api" is supported. |
| <code>insightKey</code> | <code>string</code> | The unique key identifying the insight to update. |
| <code>body</code> | <code>[UpdateStatusRequest](src/models/update-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.updateInsightStatus(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Insights.UpdateInsightStatusError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.updateInsightStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Insights.UpdateInsightStatusError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](src/resources/invoices.ts)

<details>
<summary><code>getInvoice(request: Invoices.GetInvoiceRequest, options?: RequestOptions): ApiPromise&lt;BillingV1InvoicesResponse1, Invoices.GetInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full details of an invoice specified by the invoice number.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.getInvoice({ id: "some example string" });
  // TODO: Handle 'response' of type BillingV1InvoicesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Invoices.GetInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.getInvoice({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillingV1InvoicesResponse1
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
| <code>id</code> | <code>string</code> | Invoice number. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.getInvoice(request)`

- **OnSuccess**: <code>[BillingV1InvoicesResponse1](src/models/billing-v1-invoices-response1.ts)</code>
- **OnError**: throws <code>[Invoices.GetInvoiceError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.getInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillingV1InvoicesResponse1, Invoices.GetInvoiceError&gt;</code>, with `result.value` of type <code>[BillingV1InvoicesResponse1](src/models/billing-v1-invoices-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInvoices(request?: Invoices.ListInvoicesRequest, options?: RequestOptions): ApiPromise&lt;BillingV1InvoicesResponse, Invoices.ListInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the current and historical invoices for your organization.
Invoices are returned in reverse chronological order by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.listInvoices();
  // TODO: Handle 'response' of type BillingV1InvoicesResponse
} catch (err) {
  // TODO: Handle 'err' of type Invoices.ListInvoicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.listInvoices().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BillingV1InvoicesResponse
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
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>filter?</code> | <code>string</code> | - |
| <code>minCreationTime?</code> | <code>number</code> | Min value for the invoice creation time, in milliseconds since the POSIX epoch. If set, only invoices created after or at this timestamp are returned. |
| <code>maxCreationTime?</code> | <code>number</code> | Max value for the invoice creation time, in milliseconds since the POSIX epoch. If set, only invoices created before or at this timestamp are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.listInvoices(request)`

- **OnSuccess**: <code>[BillingV1InvoicesResponse](src/models/billing-v1-invoices-response.ts)</code>
- **OnError**: throws <code>[Invoices.ListInvoicesError](src/resources/invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.invoices.listInvoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BillingV1InvoicesResponse, Invoices.ListInvoicesError&gt;</code>, with `result.value` of type <code>[BillingV1InvoicesResponse](src/models/billing-v1-invoices-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Labels

> Source: [Labels](src/resources/labels.ts)

<details>
<summary><code>assignObjectsToLabel(request: Labels.AssignObjectsToLabelRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Labels.AssignObjectsToLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns or un-assigns objects to the label specified by the ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labels.assignObjectsToLabel({ id: "some example string", body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Labels.AssignObjectsToLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels
  .assignObjectsToLabel({ id: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>id</code> | <code>string</code> | Label ID |
| <code>body</code> | <code>[AssignObjectsToLabelRequest](src/models/assign-objects-to-label-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.assignObjectsToLabel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Labels.AssignObjectsToLabelError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.assignObjectsToLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Labels.AssignObjectsToLabelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLabel(request: Labels.CreateLabelRequestParams, options?: RequestOptions): ApiPromise&lt;LabelListItem, Labels.CreateLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new label.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.createLabel({
    body: { name: "some example string", color: Color.Blue },
  });
  // TODO: Handle 'response' of type LabelListItem
} catch (err) {
  // TODO: Handle 'err' of type Labels.CreateLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels
  .createLabel({ body: { name: "some example string", color: Color.Blue } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LabelListItem
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
| <code>body</code> | <code>[CreateLabelRequest](src/models/create-label-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.createLabel(request)`

- **OnSuccess**: <code>[LabelListItem](src/models/label-list-item.ts)</code>
- **OnError**: throws <code>[Labels.CreateLabelError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.createLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LabelListItem, Labels.CreateLabelError&gt;</code>, with `result.value` of type <code>[LabelListItem](src/models/label-list-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLabel(request: Labels.DeleteLabelRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Labels.DeleteLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the label specified by the Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.deleteLabel({ id: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Labels.DeleteLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.deleteLabel({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | Label ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.deleteLabel(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Labels.DeleteLabelError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.deleteLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Labels.DeleteLabelError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLabel(request: Labels.GetLabelRequest, options?: RequestOptions): ApiPromise&lt;LabelListItem, Labels.GetLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a label by the specified Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.getLabel({ id: "some example string" });
  // TODO: Handle 'response' of type LabelListItem
} catch (err) {
  // TODO: Handle 'err' of type Labels.GetLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.getLabel({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LabelListItem
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
| <code>id</code> | <code>string</code> | Label ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.getLabel(request)`

- **OnSuccess**: <code>[LabelListItem](src/models/label-list-item.ts)</code>
- **OnError**: throws <code>[Labels.GetLabelError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.getLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LabelListItem, Labels.GetLabelError&gt;</code>, with `result.value` of type <code>[LabelListItem](src/models/label-list-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLabelAssignments(request: Labels.GetLabelAssignmentsRequest, options?: RequestOptions): ApiPromise&lt;LabelAssignmentsResponse, Labels.GetLabelAssignmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of objects currently assigned to the label specified by the ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.getLabelAssignments({ id: "some example string" });
  // TODO: Handle 'response' of type LabelAssignmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Labels.GetLabelAssignmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.getLabelAssignments({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LabelAssignmentsResponse
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
| <code>id</code> | <code>string</code> | Label ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.getLabelAssignments(request)`

- **OnSuccess**: <code>[LabelAssignmentsResponse](src/models/label-assignments-response.ts)</code>
- **OnError**: throws <code>[Labels.GetLabelAssignmentsError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.getLabelAssignments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LabelAssignmentsResponse, Labels.GetLabelAssignmentsError&gt;</code>, with `result.value` of type <code>[LabelAssignmentsResponse](src/models/label-assignments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLabels(request?: Labels.ListLabelsRequest, options?: RequestOptions): ApiPromise&lt;LabelList, Labels.ListLabelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of labels that your account has access to.
Labels are listed in reverse chronological order by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.listLabels({ filter: "name:budget", nameContains: "monthly spend" });
  // TODO: Handle 'response' of type LabelList
} catch (err) {
  // TODO: Handle 'err' of type Labels.ListLabelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels
  .listLabels({ filter: "name:budget", nameContains: "monthly spend" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LabelList
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
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>filter?</code> | <code>string</code> | An expression for filtering the results.<br>Valid fields: **name**, **type**. |
| <code>nameContains?</code> | <code>string</code> | Case-insensitive substring match against the resource name. Combined with the "filter" parameter using AND semantics. |
| <code>sortBy?</code> | <code>[SortByDoiTLabelsApi](src/models/sort-by-doi-tlabels-api.ts)</code> | A field by which the results will be sorted. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.listLabels(request)`

- **OnSuccess**: <code>[LabelList](src/models/label-list.ts)</code>
- **OnError**: throws <code>[Labels.ListLabelsError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.listLabels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LabelList, Labels.ListLabelsError&gt;</code>, with `result.value` of type <code>[LabelList](src/models/label-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLabel(request: Labels.UpdateLabelRequestParams, options?: RequestOptions): ApiPromise&lt;LabelListItem, Labels.UpdateLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the label specified by the Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.updateLabel({ id: "some example string" });
  // TODO: Handle 'response' of type LabelListItem
} catch (err) {
  // TODO: Handle 'err' of type Labels.UpdateLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.updateLabel({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LabelListItem
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
| <code>id</code> | <code>string</code> | Label ID |
| <code>body?</code> | <code>[UpdateLabelRequest](src/models/update-label-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.updateLabel(request)`

- **OnSuccess**: <code>[LabelListItem](src/models/label-list-item.ts)</code>
- **OnError**: throws <code>[Labels.UpdateLabelError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.updateLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LabelListItem, Labels.UpdateLabelError&gt;</code>, with `result.value` of type <code>[LabelListItem](src/models/label-list-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/resources/organizations.ts)

<details>
<summary><code>listOrganizations(options?: RequestOptions): ApiPromise&lt;IamV1OrganizationsResponse, Organizations.ListOrganizationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of organizations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.listOrganizations();
  // TODO: Handle 'response' of type IamV1OrganizationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Organizations.ListOrganizationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.listOrganizations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IamV1OrganizationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.listOrganizations()`

- **OnSuccess**: <code>[IamV1OrganizationsResponse](src/models/iam-v1-organizations-response.ts)</code>
- **OnError**: throws <code>[Organizations.ListOrganizationsError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.listOrganizations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IamV1OrganizationsResponse, Organizations.ListOrganizationsError&gt;</code>, with `result.value` of type <code>[IamV1OrganizationsResponse](src/models/iam-v1-organizations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PerfectScaleForCommitmentsAws

> Source: [PerfectScaleForCommitmentsAws](src/resources/perfect-scale-for-commitments-aws.ts)

<details>
<summary><code>getAwsMemberAccount(request: PerfectScaleForCommitmentsAws.GetAwsMemberAccountRequest, options?: RequestOptions): ApiPromise&lt;AwsMemberAccountDetail, PerfectScaleForCommitmentsAws.GetAwsMemberAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single member AWS account with the same list-item fields as List member accounts, plus the Overview time series. Use this when you need a single members Console Overview in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind Cost Summary and Commitment Coverage charts) without fetching every member account.

Fields that drive the Overview tab in the DoiT console:
- `stats30d`: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
- `monthlyStats`: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost Summary chart, and month-over-month card trends).
- `dailyCoverage`: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
- `savingsTotals`: year-to-date and lifetime realized savings per SP type (shown under the Savings card). Lifetime is bounded by the parent organization's PerfectScale for Commitments onboarding start.
- `monthlyPotentialSavings`: estimated monthly additional savings per SP type from the latest purchase projection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsAws.getAwsMemberAccount({
    managementAccountId: "123456789012",
    memberAccountId: "987654321098",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type AwsMemberAccountDetail
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsAws.GetAwsMemberAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsAws
  .getAwsMemberAccount({
    managementAccountId: "123456789012",
    memberAccountId: "987654321098",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AwsMemberAccountDetail
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
| <code>managementAccountId</code> | <code>string</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>memberAccountId</code> | <code>string</code> | AWS member account ID (12-digit AWS account number). |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsAws.getAwsMemberAccount(request)`

- **OnSuccess**: <code>[AwsMemberAccountDetail](src/models/aws-member-account-detail.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsAws.GetAwsMemberAccountError](src/resources/perfect-scale-for-commitments-aws.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsAws.getAwsMemberAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AwsMemberAccountDetail, PerfectScaleForCommitmentsAws.GetAwsMemberAccountError&gt;</code>, with `result.value` of type <code>[AwsMemberAccountDetail](src/models/aws-member-account-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAwsOrganization(request: PerfectScaleForCommitmentsAws.GetAwsOrganizationRequest, options?: RequestOptions): ApiPromise&lt;AwsOrganizationDetail, PerfectScaleForCommitmentsAws.GetAwsOrganizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single AWS organization with the same list-item fields as List AWS Organizations, plus the Overview time series. Use this when you need a single organization's Console Overview in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind Cost Summary and Commitment Coverage charts) without fetching every organization.

Fields that drive the Overview tab in the DoiT console:
- `stats30d`: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
- `monthlyStats`: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost Summary chart, and month-over-month card trends).
- `dailyCoverage`: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
- `savingsTotals`: year-to-date and lifetime realized savings per SP type (shown under the Savings card). Lifetime is bounded by PerfectScale for Commitments onboarding start.
- `monthlyPotentialSavings`: estimated monthly additional savings per SP type from the latest purchase projection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsAws.getAwsOrganization({
    managementAccountId: "123456789012",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type AwsOrganizationDetail
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsAws.GetAwsOrganizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsAws
  .getAwsOrganization({ managementAccountId: "123456789012", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AwsOrganizationDetail
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
| <code>managementAccountId</code> | <code>string</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsAws.getAwsOrganization(request)`

- **OnSuccess**: <code>[AwsOrganizationDetail](src/models/aws-organization-detail.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsAws.GetAwsOrganizationError](src/resources/perfect-scale-for-commitments-aws.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsAws.getAwsOrganization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AwsOrganizationDetail, PerfectScaleForCommitmentsAws.GetAwsOrganizationError&gt;</code>, with `result.value` of type <code>[AwsOrganizationDetail](src/models/aws-organization-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAwsRecommendation(request: PerfectScaleForCommitmentsAws.GetAwsRecommendationRequest, options?: RequestOptions): ApiPromise&lt;AwsRecommendationWithEligibleSpend, PerfectScaleForCommitmentsAws.GetAwsRecommendationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the recommendation for one commitment type (`serviceId`) on the AWS organization, including analysis metrics and time-bucketed eligible spend. Use `granularity` to choose the eligible-spend bucket size (defaults to `day`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsAws.getAwsRecommendation({
    managementAccountId: "123456789012",
    serviceId: ServiceId.Compute,
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type AwsRecommendationWithEligibleSpend
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsAws.GetAwsRecommendationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsAws
  .getAwsRecommendation({
    managementAccountId: "123456789012",
    serviceId: ServiceId.Compute,
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AwsRecommendationWithEligibleSpend
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
| <code>managementAccountId</code> | <code>string</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>serviceId</code> | <code>[ServiceId](src/models/service-id.ts)</code> | Commitment type whose recommendation to retrieve. Must be an onboarded commitment type for the AWS organization (`compute` or `database`). |
| <code>granularity?</code> | <code>[Granularity](src/models/granularity.ts)</code> | Time bucket size for eligible-spend data points on the recommendation response. If omitted, defaults to `day`. Coarser buckets return min/max/median usage; `hour` returns per-hour totals.<br>**Default**: "day" |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsAws.getAwsRecommendation(request)`

- **OnSuccess**: <code>[AwsRecommendationWithEligibleSpend](src/models/aws-recommendation-with-eligible-spend.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsAws.GetAwsRecommendationError](src/resources/perfect-scale-for-commitments-aws.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsAws.getAwsRecommendation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AwsRecommendationWithEligibleSpend, PerfectScaleForCommitmentsAws.GetAwsRecommendationError&gt;</code>, with `result.value` of type <code>[AwsRecommendationWithEligibleSpend](src/models/aws-recommendation-with-eligible-spend.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAwsMemberAccounts(request: PerfectScaleForCommitmentsAws.ListAwsMemberAccountsRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse, PerfectScaleForCommitmentsAws.ListAwsMemberAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all member AWS accounts under the specified AWS organization that have active or historical commitment coverage. Includes 30-day statistics and estimated monthly potential savings (`monthlyPotentialSavings`) per Savings Plan (SP) type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsAws.listAwsMemberAccounts({
    managementAccountId: "123456789012",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsAws.ListAwsMemberAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsAws
  .listAwsMemberAccounts({ managementAccountId: "123456789012", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse
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
| <code>managementAccountId</code> | <code>string</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>pageToken?</code> | <code>string</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: 50 |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsAws.listAwsMemberAccounts(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse](src/models/ps4-commitments-v1-aws-organizations-member-accounts-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsAws.ListAwsMemberAccountsError](src/resources/perfect-scale-for-commitments-aws.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsAws.listAwsMemberAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse, PerfectScaleForCommitmentsAws.ListAwsMemberAccountsError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse](src/models/ps4-commitments-v1-aws-organizations-member-accounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAwsOrganizations(request?: PerfectScaleForCommitmentsAws.ListAwsOrganizationsRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1AwsOrganizationsResponse, PerfectScaleForCommitmentsAws.ListAwsOrganizationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all AWS organizations (accounts) accessible to the authenticated tenant. Use as the entry point to discover AWS organization account IDs, and organization-level onboarding status of the available commitment types and savings metrics.

Each item includes metadata, trailing 30-day aggregate statistics, precomputed YTD/lifetime savings totals per Savings Plan (SP) type, and estimated monthly potential savings (`monthlyPotentialSavings`) per SP type from the latest projection. Sum across items for customer-level totals.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsAws.listAwsOrganizations({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsAws.ListAwsOrganizationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsAws
  .listAwsOrganizations({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1AwsOrganizationsResponse
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
| <code>pageToken?</code> | <code>string</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: 50 |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsAws.listAwsOrganizations(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsResponse](src/models/ps4-commitments-v1-aws-organizations-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsAws.ListAwsOrganizationsError](src/resources/perfect-scale-for-commitments-aws.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsAws.listAwsOrganizations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1AwsOrganizationsResponse, PerfectScaleForCommitmentsAws.ListAwsOrganizationsError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1AwsOrganizationsResponse](src/models/ps4-commitments-v1-aws-organizations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAwsOrganizationsSettings(request?: PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1AwsSettingsResponse, PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one item per onboarded AWS organization. Each item includes that AWS organization's commitments purchasing account (`purchaseAccountId`) and commitment settings for each commitment type activated on that AWS organization (`compute`, `database`).

Commitment settings cover recommendation and automation preferences (policy, term, payment option, automation mode, commitment limits, and related fields). They are stored independently for each AWS organization and commitment type. Each item includes that organization's `purchaseAccountId` and activated commitment types.

In the DoiT Console, commitment settings are edited on an account's Settings tab and apply only to that AWS organization and commitment type; the purchasing account is set per AWS organization on Accounts Settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsAws.listAwsOrganizationsSettings({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1AwsSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsAws
  .listAwsOrganizationsSettings({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1AwsSettingsResponse
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
| <code>pageToken?</code> | <code>string</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: 50 |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsAws.listAwsOrganizationsSettings(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1AwsSettingsResponse](src/models/ps4-commitments-v1-aws-settings-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsError](src/resources/perfect-scale-for-commitments-aws.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsAws.listAwsOrganizationsSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1AwsSettingsResponse, PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1AwsSettingsResponse](src/models/ps4-commitments-v1-aws-settings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAwsPlannedPurchases(request: PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse, PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns planned purchases (laddering projections) for the AWS organization. One item per commitment type that has a projection available (typically `compute` and/or `database`; up to four commitment types as PerfectScale for Commitments expands).

With no filters, returns all available planned-purchase items for the AWS organization in stable commitment-type order (`compute`, then `database`, then any future commitment types in enum order). When a filtered commitment type has no planned purchases, the response is an empty `items` array (not `404`). Partial items return only the fields available at response time.

`404` is returned only when the AWS organization does not exist or the caller cannot access it. An AWS organization that is not onboarded for PerfectScale for Commitments still returns `200` with an empty `items` array when no planned purchases exist — use `GET /ps4commitments/v1/aws/organizations` (or get-by-id) for `onboardingStatus`.

**Pagination**: results are returned in stable commitment-type order (`compute`, then `database`, then any future commitment types in enum order). Use `maxResults` to limit page size (default 50, max 500). When more items remain, the response includes a non-null `pageToken`; pass it unchanged on the next request with the same query parameters (`service`, `maxResults`). `rowCount` is the number of items in this page. An invalid `pageToken` returns `400` with code `pagination_token_invalid`; an expired token returns `400` with code `pagination_token_expired`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsAws.listAwsPlannedPurchases({
    managementAccountId: "123456789012",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsAws
  .listAwsPlannedPurchases({ managementAccountId: "123456789012", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse
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
| <code>managementAccountId</code> | <code>string</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>service?</code> | <code>[Service2](src/models/service2.ts)</code> | Filter planned purchases by PerfectScale for Commitments commitment type. Omit to return all commitment types that have planned purchases for the AWS organization. |
| <code>pageToken?</code> | <code>string</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: 50 |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsAws.listAwsPlannedPurchases(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse](src/models/ps4-commitments-v1-aws-organizations-planned-purchases-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesError](src/resources/perfect-scale-for-commitments-aws.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsAws.listAwsPlannedPurchases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse, PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse](src/models/ps4-commitments-v1-aws-organizations-planned-purchases-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAwsRecommendations(request: PerfectScaleForCommitmentsAws.ListAwsRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;AwsRecommendations, PerfectScaleForCommitmentsAws.ListAwsRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns commitment purchase recommendations for the AWS organization, keyed by commitment type (`compute`, `database`). A commitment type is present only when it is onboarded and a recommendation is available.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsAws.listAwsRecommendations({
    managementAccountId: "123456789012",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type AwsRecommendations
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsAws.ListAwsRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsAws
  .listAwsRecommendations({ managementAccountId: "123456789012", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AwsRecommendations
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
| <code>managementAccountId</code> | <code>string</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsAws.listAwsRecommendations(request)`

- **OnSuccess**: <code>[AwsRecommendations](src/models/aws-recommendations.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsAws.ListAwsRecommendationsError](src/resources/perfect-scale-for-commitments-aws.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsAws.listAwsRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AwsRecommendations, PerfectScaleForCommitmentsAws.ListAwsRecommendationsError&gt;</code>, with `result.value` of type <code>[AwsRecommendations](src/models/aws-recommendations.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAwsReservedInstances(request: PerfectScaleForCommitmentsAws.ListAwsReservedInstancesRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse, PerfectScaleForCommitmentsAws.ListAwsReservedInstancesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Reserved Instances (RIs) for the specified AWS organization. Optionally filter by state, instance type, instance family, region, and offering class. Omit filters to return all RIs for the AWS organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsAws.listAwsReservedInstances({
    managementAccountId: "123456789012",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsAws.ListAwsReservedInstancesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsAws
  .listAwsReservedInstances({ managementAccountId: "123456789012", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse
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
| <code>managementAccountId</code> | <code>string</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>status?</code> | <code>[Status3](src/models/status3.ts)</code> | Filter by Reserved Instance lifecycle state. Omit to include all states. |
| <code>instanceType?</code> | <code>string</code> | Filter by exact EC2 instance type (for example, `m5.large`). Case-sensitive. Must match the `instanceType` value on the RI exactly. |
| <code>instanceFamily?</code> | <code>string</code> | Filter by EC2 instance family, the leading segment of `instanceType` before the dot (for example, `m5` matches `m5.large` and `m5.xlarge`). Case-sensitive. |
| <code>region?</code> | <code>string</code> | Filter by AWS region (for example, `us-east-1`). Case-sensitive. Must match the region stored on the RI. |
| <code>offeringClass?</code> | <code>[OfferingClass1](src/models/offering-class1.ts)</code> | Filter by RI offering class. Omit to include both standard and convertible. |
| <code>pageToken?</code> | <code>string</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: 50 |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsAws.listAwsReservedInstances(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse](src/models/ps4-commitments-v1-aws-organizations-reserved-instances-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsAws.ListAwsReservedInstancesError](src/resources/perfect-scale-for-commitments-aws.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsAws.listAwsReservedInstances(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse, PerfectScaleForCommitmentsAws.ListAwsReservedInstancesError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse](src/models/ps4-commitments-v1-aws-organizations-reserved-instances-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAwsSavingsPlans(request: PerfectScaleForCommitmentsAws.ListAwsSavingsPlansRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse, PerfectScaleForCommitmentsAws.ListAwsSavingsPlansError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Savings Plans for the specified AWS organization. Optionally filter by plan type (`type`) and state (`status`). Omit both filters to return all plans for the AWS organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsAws.listAwsSavingsPlans({
    managementAccountId: "123456789012",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsAws.ListAwsSavingsPlansError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsAws
  .listAwsSavingsPlans({ managementAccountId: "123456789012", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse
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
| <code>managementAccountId</code> | <code>string</code> | 12-digit AWS management (payer) account ID (the account that owns the AWS Organization) that scopes the request. |
| <code>type?</code> | <code>[TypeDoiTPerfectScaleForCommitmentsAwsApi](src/models/type-doi-tperfect-scale-for-commitments-aws-api.ts)</code> | Filter by Savings Plan type. Omit to include all types. |
| <code>status?</code> | <code>[Status2](src/models/status2.ts)</code> | Filter by Savings Plan lifecycle state. Omit to include all states. |
| <code>pageToken?</code> | <code>string</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: 50 |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsAws.listAwsSavingsPlans(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse](src/models/ps4-commitments-v1-aws-organizations-savings-plans-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsAws.ListAwsSavingsPlansError](src/resources/perfect-scale-for-commitments-aws.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsAws.listAwsSavingsPlans(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse, PerfectScaleForCommitmentsAws.ListAwsSavingsPlansError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse](src/models/ps4-commitments-v1-aws-organizations-savings-plans-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PerfectScaleForCommitmentsGcp

> Source: [PerfectScaleForCommitmentsGcp](src/resources/perfect-scale-for-commitments-gcp.ts)

<details>
<summary><code>getGcpBillingAccount(request: PerfectScaleForCommitmentsGcp.GetGcpBillingAccountRequest, options?: RequestOptions): ApiPromise&lt;GcpBillingAccountDetail, PerfectScaleForCommitmentsGcp.GetGcpBillingAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single GCP Billing Account with the same list-item fields as List GCP Billing Accounts, plus the Overview time series. Use this when you need a single billing account's Console Overview in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, CUD export health, and the data behind Cost Summary and CUD Coverage charts) without fetching every billing account.

Fields that drive the Overview tab in the DoiT console — each is an array with one entry per product line (`service` of `compute` or `cloud_sql`):
- `stats30d`: last 30 days ESR and realized savings per product line (ESR and Savings cards).
- `monthlyStats`: last 6 calendar months of ESR, on-demand cost, and cost with savings per product line (Cost Summary chart, and month-over-month card trends).
- `dailyCoverage`: last 30 days of CUD coverage breakdown per product line (CUD Coverage chart).
- `savingsTotals`: year-to-date and lifetime realized savings per product line (shown under the Savings card). Lifetime is bounded by PerfectScale for Commitments onboarding start.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsGcp.getGcpBillingAccount({
    billingAccountId: "01D4A2-4E3F1B-9C72A0",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type GcpBillingAccountDetail
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsGcp.GetGcpBillingAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsGcp
  .getGcpBillingAccount({ billingAccountId: "01D4A2-4E3F1B-9C72A0", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GcpBillingAccountDetail
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
| <code>billingAccountId</code> | <code>string</code> | GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that scopes the request. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsGcp.getGcpBillingAccount(request)`

- **OnSuccess**: <code>[GcpBillingAccountDetail](src/models/gcp-billing-account-detail.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsGcp.GetGcpBillingAccountError](src/resources/perfect-scale-for-commitments-gcp.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsGcp.getGcpBillingAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GcpBillingAccountDetail, PerfectScaleForCommitmentsGcp.GetGcpBillingAccountError&gt;</code>, with `result.value` of type <code>[GcpBillingAccountDetail](src/models/gcp-billing-account-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGcpRecommendation(request: PerfectScaleForCommitmentsGcp.GetGcpRecommendationRequest, options?: RequestOptions): ApiPromise&lt;GcpRecommendationWithEligibleSpend, PerfectScaleForCommitmentsGcp.GetGcpRecommendationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the recommendation for one product line (`gcp_service`) and region scope on the GCP
billing account, including analysis metrics and time-bucketed eligible spend. Use
`granularity` to choose the eligible-spend bucket size (defaults to `day`).

**`region`**: optional for `compute`, defaulting to `global` (its only scope). Required
for `cloud_sql` — omitting it returns `400` with code `validation_failed`, as does a
malformed region or one incompatible with `gcp_service` (`cloud_sql` never uses `global`).
A well-formed region the billing account has never had eligible spend in returns `404`
with code `not_found` — the scope does not exist, same as an unknown billing account.
When the scope exists but no stored recommendation matches, the response is `200` with
`recommendation` omitted and `estimatedEquivalentRecommendedCommitment` of `0`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsGcp.getGcpRecommendation({
    billingAccountId: "01D4A2-4E3F1B-9C72A0",
    gcpService: GcpService.Compute,
    region: "us_east1",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type GcpRecommendationWithEligibleSpend
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsGcp.GetGcpRecommendationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsGcp
  .getGcpRecommendation({
    billingAccountId: "01D4A2-4E3F1B-9C72A0",
    gcpService: GcpService.Compute,
    region: "us_east1",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GcpRecommendationWithEligibleSpend
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
| <code>billingAccountId</code> | <code>string</code> | GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that scopes the request. |
| <code>gcpService</code> | <code>[GcpService](src/models/gcp-service.ts)</code> | PS4C product line to fetch the recommendation for. Matching is case-insensitive; the value is lowercased before validation. |
| <code>region?</code> | <code>string</code> | Filter by region scope, in `lower_snake_case` wire form (for example `us_east1`), or the<br>literal `global`. Requires `gcp_service`; a request with `region` but no `gcp_service`<br>returns `400` with code `gcp_service_required`. When both are omitted, all available<br>regions for all available product lines are returned.<br><br>The value is format-validated, not checked against a closed region list: `compute` accepts<br>only `global`, `cloud_sql` accepts only concrete regions (never `global`), and a value that<br>is malformed or incompatible with `gcp_service` returns `400` with code `validation_failed`.<br>A well-formed, service-compatible region with no data returns `200` with an empty result.<br>Matching is case-insensitive; the value is lowercased before validation. |
| <code>granularity?</code> | <code>[Granularity](src/models/granularity.ts)</code> | Time bucket size for eligible-spend data points on the recommendation response. If omitted, defaults to `day`. Coarser buckets return min/max/median usage; `hour` returns per-hour totals.<br>**Default**: "day" |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsGcp.getGcpRecommendation(request)`

- **OnSuccess**: <code>[GcpRecommendationWithEligibleSpend](src/models/gcp-recommendation-with-eligible-spend.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsGcp.GetGcpRecommendationError](src/resources/perfect-scale-for-commitments-gcp.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsGcp.getGcpRecommendation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GcpRecommendationWithEligibleSpend, PerfectScaleForCommitmentsGcp.GetGcpRecommendationError&gt;</code>, with `result.value` of type <code>[GcpRecommendationWithEligibleSpend](src/models/gcp-recommendation-with-eligible-spend.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGcpBillingAccounts(request?: PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1GcpBillingAccountsResponse, PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all GCP Billing Accounts accessible to the authenticated tenant. Use as the entry point to discover GCP billing account IDs, and billing-account-level onboarding status of the available product lines and savings metrics.

Each item includes metadata, CUD export health, trailing 30-day aggregate statistics, and precomputed YTD/lifetime savings totals per product line. Sum across items for customer-level totals.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsGcp.listGcpBillingAccounts({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsGcp
  .listGcpBillingAccounts({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1GcpBillingAccountsResponse
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
| <code>pageToken?</code> | <code>string</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: 50 |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsGcp.listGcpBillingAccounts(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsResponse](src/models/ps4-commitments-v1-gcp-billing-accounts-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsError](src/resources/perfect-scale-for-commitments-gcp.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsGcp.listGcpBillingAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1GcpBillingAccountsResponse, PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1GcpBillingAccountsResponse](src/models/ps4-commitments-v1-gcp-billing-accounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGcpBillingAccountsSettings(request?: PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1GcpSettingsResponse, PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one item per onboarded GCP Billing Account. Each item includes that billing
account's recommendation and automation engine settings for each product line activated
on it, per region scope: one `global` entry for `compute`, and one entry per known region
for `cloud_sql`.

Cloud SQL regions come from the billing account's persisted settings: a region is added
when eligible spend is first seen there and is never removed, so its settings entry
remains listed even if spend later drops to zero. Items are sorted by
`billingAccountId`; within an item, `services` lists `compute` before `cloud_sql`, with
`cloud_sql` regions sorted alphabetically.

Settings are stored independently on each billing account. Existing customer-level
settings are copied lazily when an account is first read or initialized; if no valid
legacy value exists, the complete backend defaults are materialized once on the account.
Only product lines that are activated/onboarded for a given billing account are returned.

In the DoiT Console, these settings are edited on an account's Settings tab.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsGcp.listGcpBillingAccountsSettings({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1GcpSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsGcp
  .listGcpBillingAccountsSettings({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1GcpSettingsResponse
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
| <code>pageToken?</code> | <code>string</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: 50 |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsGcp.listGcpBillingAccountsSettings(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1GcpSettingsResponse](src/models/ps4-commitments-v1-gcp-settings-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsError](src/resources/perfect-scale-for-commitments-gcp.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsGcp.listGcpBillingAccountsSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1GcpSettingsResponse, PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1GcpSettingsResponse](src/models/ps4-commitments-v1-gcp-settings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGcpPlannedPurchases(request: PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse, PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the laddering projections for the billing account, grouped by PS4C product line
(`service`) and region. Each service group lists one entry per available
`gcp-purchases-projection` document for that scope (`compute` scopes are `global`;
`cloud_sql` scopes are per-region).

With no filters, returns all existing projection documents in stable order: service groups
ordered `compute` first, then `cloud_sql`; within each group, regions sorted with `global`
first, then remaining regions alphabetically. Services with no projection documents are omitted
(not returned as empty groups). When a filter matches no documents, the response is an
empty `items` array (not `404`). Partial projection documents return only the fields
available in storage.

**`gcp_service` and `region` filters**: omit both to return all available services and
their regions; supply `gcp_service` alone to return all regions for that service; supply
both to return a single service/region scope. `region` requires `gcp_service` — a request
with `region` but no `gcp_service` returns `400` with code `gcp_service_required`. Invalid
`gcp_service` or `region` values return `400` with code `validation_failed`.

`404` is returned only when the billing account does not exist or the caller cannot access
it. A billing account that is not onboarded for PS4C still returns `200` with an empty
`items` array when no projection documents exist — use
`GET /ps4commitments/v1/gcp/billing-accounts` (or get-by-id) for onboarding status.

**Pagination**: results are paginated by **service group** (a whole group is never split
across pages). Groups keep the stable service order above. Use `maxResults` to limit
page size (default 50, max 500). When more groups remain, the response includes a
non-null `pageToken`; pass it unchanged on the next request with the same query parameters
(`gcp_service`, `region`, `maxResults`). `rowCount` is the number of service groups in
this page. An invalid `pageToken` returns `400` with code `pagination_token_invalid`; an
expired token returns `400` with code `pagination_token_expired`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsGcp.listGcpPlannedPurchases({
    billingAccountId: "01D4A2-4E3F1B-9C72A0",
    region: "us_east1",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsGcp
  .listGcpPlannedPurchases({
    billingAccountId: "01D4A2-4E3F1B-9C72A0",
    region: "us_east1",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse
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
| <code>billingAccountId</code> | <code>string</code> | GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that scopes the request. |
| <code>gcpService?</code> | <code>[GcpService](src/models/gcp-service.ts)</code> | Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines. Matching is case-insensitive; the value is lowercased before validation. |
| <code>region?</code> | <code>string</code> | Filter by region scope, in `lower_snake_case` wire form (for example `us_east1`), or the<br>literal `global`. Requires `gcp_service`; a request with `region` but no `gcp_service`<br>returns `400` with code `gcp_service_required`. When both are omitted, all available<br>regions for all available product lines are returned.<br><br>The value is format-validated, not checked against a closed region list: `compute` accepts<br>only `global`, `cloud_sql` accepts only concrete regions (never `global`), and a value that<br>is malformed or incompatible with `gcp_service` returns `400` with code `validation_failed`.<br>A well-formed, service-compatible region with no data returns `200` with an empty result.<br>Matching is case-insensitive; the value is lowercased before validation. |
| <code>pageToken?</code> | <code>string</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: 50 |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsGcp.listGcpPlannedPurchases(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse](src/models/ps4-commitments-v1-gcp-billing-accounts-planned-purchases-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesError](src/resources/perfect-scale-for-commitments-gcp.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsGcp.listGcpPlannedPurchases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse, PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse](src/models/ps4-commitments-v1-gcp-billing-accounts-planned-purchases-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGcpRecommendations(request: PerfectScaleForCommitmentsGcp.ListGcpRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse, PerfectScaleForCommitmentsGcp.ListGcpRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns commitment purchase recommendations for the billing account, filtered to the
term preferred in each product line's settings (`preferredCommitmentPeriod`).

**`gcp_service` and `region` filters**: omit both to return recommendations for all
product lines (`compute`, `cloud_sql`) across all their regions. Supply `gcp_service`
alone to return all regions for that service; supply both to return a single
service/region scope. `region` requires `gcp_service` — a request with `region` but no
`gcp_service` returns `400` with code `gcp_service_required`. A `region` that is malformed
or incompatible with `gcp_service` (`compute` is `global`-only, `cloud_sql` is
regional-only) returns `400` with code `validation_failed`; a well-formed, compatible
region with no data returns `200` with an empty `items` array.

`404` is returned only when the billing account does not exist or the caller cannot access
it. A billing account with no matching recommendation documents returns `200` with an empty
`items` array.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsGcp.listGcpRecommendations({
    billingAccountId: "01D4A2-4E3F1B-9C72A0",
    region: "us_east1",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsGcp.ListGcpRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsGcp
  .listGcpRecommendations({
    billingAccountId: "01D4A2-4E3F1B-9C72A0",
    region: "us_east1",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse
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
| <code>billingAccountId</code> | <code>string</code> | GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that scopes the request. |
| <code>gcpService?</code> | <code>[GcpService](src/models/gcp-service.ts)</code> | Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines. Matching is case-insensitive; the value is lowercased before validation. |
| <code>region?</code> | <code>string</code> | Filter by region scope, in `lower_snake_case` wire form (for example `us_east1`), or the<br>literal `global`. Requires `gcp_service`; a request with `region` but no `gcp_service`<br>returns `400` with code `gcp_service_required`. When both are omitted, all available<br>regions for all available product lines are returned.<br><br>The value is format-validated, not checked against a closed region list: `compute` accepts<br>only `global`, `cloud_sql` accepts only concrete regions (never `global`), and a value that<br>is malformed or incompatible with `gcp_service` returns `400` with code `validation_failed`.<br>A well-formed, service-compatible region with no data returns `200` with an empty result.<br>Matching is case-insensitive; the value is lowercased before validation. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsGcp.listGcpRecommendations(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse](src/models/ps4-commitments-v1-gcp-billing-accounts-recommendations-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsGcp.ListGcpRecommendationsError](src/resources/perfect-scale-for-commitments-gcp.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsGcp.listGcpRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse, PerfectScaleForCommitmentsGcp.ListGcpRecommendationsError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse](src/models/ps4-commitments-v1-gcp-billing-accounts-recommendations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGcpResourceCuds(request: PerfectScaleForCommitmentsGcp.ListGcpResourceCudsRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse, PerfectScaleForCommitmentsGcp.ListGcpResourceCudsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of resource-based (vCPU / memory) CUDs for the billing account. Optionally filter by CUD state (`status`). Omit to return CUDs in all states.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsGcp.listGcpResourceCuds({
    billingAccountId: "01D4A2-4E3F1B-9C72A0",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsGcp.ListGcpResourceCudsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsGcp
  .listGcpResourceCuds({ billingAccountId: "01D4A2-4E3F1B-9C72A0", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse
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
| <code>billingAccountId</code> | <code>string</code> | GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that scopes the request. |
| <code>status?</code> | <code>[Status2DoiTPerfectScaleForCommitmentsGcpApi](src/models/status2-doi-tperfect-scale-for-commitments-gcp-api.ts)</code> | Filter by CUD state. Omit to include all states. |
| <code>pageToken?</code> | <code>string</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: 50 |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsGcp.listGcpResourceCuds(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse](src/models/ps4-commitments-v1-gcp-billing-accounts-resource-based-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsGcp.ListGcpResourceCudsError](src/resources/perfect-scale-for-commitments-gcp.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsGcp.listGcpResourceCuds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse, PerfectScaleForCommitmentsGcp.ListGcpResourceCudsError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse](src/models/ps4-commitments-v1-gcp-billing-accounts-resource-based-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGcpSpendCuds(request: PerfectScaleForCommitmentsGcp.ListGcpSpendCudsRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse, PerfectScaleForCommitmentsGcp.ListGcpSpendCudsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of spend-based CUDs for the billing account. Optionally filter by
CUD state (`status`); omit to return CUDs in all states.

**`gcp_service` and `region` filters**: `gcp_service` narrows results to one product
line's coverage sub-type (`compute` or `cloud_sql`); `region` additionally narrows to one
region scope and requires `gcp_service` — a request with `region` but no `gcp_service`
returns `400` with code `gcp_service_required`. A `region` that is malformed or
incompatible with `gcp_service` (`compute` is `global`-only, `cloud_sql` is regional-only)
returns `400` with code `validation_failed`; a well-formed, compatible region with no
matching CUDs returns `200` with an empty `items` array. Note the `region` query parameter
uses the `lower_snake_case` wire form (`us_central1`), while each item's `region` field
echoes the raw provider value (`us-central1`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsGcp.listGcpSpendCuds({
    billingAccountId: "01D4A2-4E3F1B-9C72A0",
    region: "us_east1",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsGcp.ListGcpSpendCudsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsGcp
  .listGcpSpendCuds({
    billingAccountId: "01D4A2-4E3F1B-9C72A0",
    region: "us_east1",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse
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
| <code>billingAccountId</code> | <code>string</code> | GCP Billing Account ID (format `XXXXXX-XXXXXX-XXXXXX`; the account that owns the CUDs) that scopes the request. |
| <code>status?</code> | <code>[Status2DoiTPerfectScaleForCommitmentsGcpApi](src/models/status2-doi-tperfect-scale-for-commitments-gcp-api.ts)</code> | Filter by CUD state. Omit to include all states. |
| <code>gcpService?</code> | <code>[GcpService](src/models/gcp-service.ts)</code> | Filter by PerfectScale for Commitments GCP product line. Omit to return all product lines. Matching is case-insensitive; the value is lowercased before validation. |
| <code>region?</code> | <code>string</code> | Filter by region scope, in `lower_snake_case` wire form (for example `us_east1`), or the<br>literal `global`. Requires `gcp_service`; a request with `region` but no `gcp_service`<br>returns `400` with code `gcp_service_required`. When both are omitted, all available<br>regions for all available product lines are returned.<br><br>The value is format-validated, not checked against a closed region list: `compute` accepts<br>only `global`, `cloud_sql` accepts only concrete regions (never `global`), and a value that<br>is malformed or incompatible with `gcp_service` returns `400` with code `validation_failed`.<br>A well-formed, service-compatible region with no data returns `200` with an empty result.<br>Matching is case-insensitive; the value is lowercased before validation. |
| <code>pageToken?</code> | <code>string</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: 50 |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsGcp.listGcpSpendCuds(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse](src/models/ps4-commitments-v1-gcp-billing-accounts-spend-based-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsGcp.ListGcpSpendCudsError](src/resources/perfect-scale-for-commitments-gcp.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsGcp.listGcpSpendCuds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse, PerfectScaleForCommitmentsGcp.ListGcpSpendCudsError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse](src/models/ps4-commitments-v1-gcp-billing-accounts-spend-based-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PerfectScaleForCommitmentsGeneral

> Source: [PerfectScaleForCommitmentsGeneral](src/resources/perfect-scale-for-commitments-general.ts)

<details>
<summary><code>getCommitmentPolicy(request: PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyRequest, options?: RequestOptions): ApiPromise&lt;CommitmentPolicyDetail, PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one commitment policy by id, with its creation and last-update times and the list of
account × product-line scopes it is explicitly assigned to across AWS and GCP.

`assignments` lists explicit assignments only. An account whose settings have not yet been
materialized falls back to `balanced` implicitly and does not appear here, even though the
settings endpoints report it as `balanced`. On AWS the assignment is currently recorded per
tenant and applied to every onboarded organization, so each organization appears once per
product line. The list is not paginated.

Resolving assignments reads every onboarded account on both clouds. If either cloud cannot be
queried the request fails rather than returning a partial list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsGeneral.getCommitmentPolicy({
    policyId: "balanced",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type CommitmentPolicyDetail
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsGeneral
  .getCommitmentPolicy({ policyId: "balanced", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommitmentPolicyDetail
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
| <code>policyId</code> | <code>string</code> | Commitment policy id. Built-in policies use `conservative`, `balanced` or `max_savings`; custom policies have an opaque id returned by the list endpoint. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsGeneral.getCommitmentPolicy(request)`

- **OnSuccess**: <code>[CommitmentPolicyDetail](src/models/commitment-policy-detail.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyError](src/resources/perfect-scale-for-commitments-general.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsGeneral.getCommitmentPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommitmentPolicyDetail, PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyError&gt;</code>, with `result.value` of type <code>[CommitmentPolicyDetail](src/models/commitment-policy-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCommitmentPolicies(request?: PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesRequest, options?: RequestOptions): ApiPromise&lt;Ps4CommitmentsV1GeneralPoliciesResponse, PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every commitment policy available to the tenant: the three built-in policies
(`conservative`, `balanced`, `max_savings`) followed by the tenant's own custom policies.

Commitment policies are cloud-agnostic. A single catalog is shared by AWS and GCP, and the
same policy may be assigned to AWS and GCP product lines alike.

Built-in policies are listed first, ordered from least to most aggressive target coverage;
custom policies follow in creation order. Percentage parameters are expressed as `1`–`100`, as
entered in the DoiT Console. This differs from the coverage and utilization fields on
recommendations and inventory, which are fractions from 0 to 1.

This endpoint is read-only. Custom policies are created, edited and deleted in the DoiT
Console on the Commitment Policies page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.perfectScaleForCommitmentsGeneral.listCommitmentPolicies({
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Ps4CommitmentsV1GeneralPoliciesResponse
} catch (err) {
  // TODO: Handle 'err' of type PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.perfectScaleForCommitmentsGeneral
  .listCommitmentPolicies({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ps4CommitmentsV1GeneralPoliciesResponse
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
| <code>pageToken?</code> | <code>string</code> | Opaque cursor token returned by a previous list response. Omit to start from the beginning; an empty or absent token in a response means there are no more results. Do not parse it. A structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired cursor returns `400` with code `pagination_token_expired` — restart pagination from the beginning. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.<br>**Default**: 50 |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.perfectScaleForCommitmentsGeneral.listCommitmentPolicies(request)`

- **OnSuccess**: <code>[Ps4CommitmentsV1GeneralPoliciesResponse](src/models/ps4-commitments-v1-general-policies-response.ts)</code>
- **OnError**: throws <code>[PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesError](src/resources/perfect-scale-for-commitments-general.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.perfectScaleForCommitmentsGeneral.listCommitmentPolicies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ps4CommitmentsV1GeneralPoliciesResponse, PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesError&gt;</code>, with `result.value` of type <code>[Ps4CommitmentsV1GeneralPoliciesResponse](src/models/ps4-commitments-v1-general-policies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Platforms

> Source: [Platforms](src/resources/platforms.ts)

<details>
<summary><code>listPlatforms(options?: RequestOptions): ApiPromise&lt;SupportV1MetadataPlatformsResponse, Platforms.ListPlatformsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the available platforms.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.platforms.listPlatforms();
  // TODO: Handle 'response' of type SupportV1MetadataPlatformsResponse
} catch (err) {
  // TODO: Handle 'err' of type Platforms.ListPlatformsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.platforms.listPlatforms().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SupportV1MetadataPlatformsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.platforms.listPlatforms()`

- **OnSuccess**: <code>[SupportV1MetadataPlatformsResponse](src/models/support-v1-metadata-platforms-response.ts)</code>
- **OnError**: throws <code>[Platforms.ListPlatformsError](src/resources/platforms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.platforms.listPlatforms().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SupportV1MetadataPlatformsResponse, Platforms.ListPlatformsError&gt;</code>, with `result.value` of type <code>[SupportV1MetadataPlatformsResponse](src/models/support-v1-metadata-platforms-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](src/resources/products.ts)

<details>
<summary><code>listProducts(request?: Products.ListProductsRequest, options?: RequestOptions): ApiPromise&lt;SupportV1MetadataProductsResponse, Products.ListProductsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the available products of specific platforms.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.listProducts();
  // TODO: Handle 'response' of type SupportV1MetadataProductsResponse
} catch (err) {
  // TODO: Handle 'err' of type Products.ListProductsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.products.listProducts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SupportV1MetadataProductsResponse
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
| <code>platform?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.listProducts(request)`

- **OnSuccess**: <code>[SupportV1MetadataProductsResponse](src/models/support-v1-metadata-products-response.ts)</code>
- **OnError**: throws <code>[Products.ListProductsError](src/resources/products.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.products.listProducts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SupportV1MetadataProductsResponse, Products.ListProductsError&gt;</code>, with `result.value` of type <code>[SupportV1MetadataProductsResponse](src/models/support-v1-metadata-products-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/resources/reports.ts)

<details>
<summary><code>asyncRunInline(request: Reports.AsyncRunInlineRequest, options?: RequestOptions): ApiPromise&lt;AsyncOperationResponse, Reports.AsyncRunInlineError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits an async report execution job using an inline configuration. Returns 202 immediately with a Location header pointing to the operation status endpoint. Requires the Idempotency-Key header to ensure at-most-once submission. Duplicate requests with the same config for the same customer return the existing in-flight operation. Use ?dryRun=true to validate the config without creating an operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.asyncRunInline({
    idempotencyKey: "some example string",
    body: {
      config: {
        metrics: [{ type: Type2DoiTReportsApi.Basic, value: "cost" }],
        timeInterval: TimeIntervalDoiTReportsApi.Month,
        timeRange: { amount: 1, mode: Mode2.Last, unit: Unit.Month },
      },
    },
  });
  // TODO: Handle 'response' of type AsyncOperationResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.AsyncRunInlineError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .asyncRunInline({
    idempotencyKey: "some example string",
    body: {
      config: {
        metrics: [{ type: Type2DoiTReportsApi.Basic, value: "cost" }],
        timeInterval: TimeIntervalDoiTReportsApi.Month,
        timeRange: { amount: 1, mode: Mode2.Last, unit: Unit.Month },
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsyncOperationResponse
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
| <code>dryRun?</code> | <code>boolean</code> | If true, validates the request and returns 200 without creating an operation or submitting a job. The response body will have status "dry_run" and no operationId. |
| <code>idempotencyKey</code> | <code>string</code> | Unique key for this submission. Required on every request. Deduplication is based on config content, not this key. |
| <code>body?</code> | <code>[AnalyticsV1ReportsActionsRunRequest](src/models/analytics-v1-reports-actions-run-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.asyncRunInline(request)`

- **OnSuccess**: <code>[AsyncOperationResponse](src/models/async-operation-response.ts)</code>
- **OnError**: throws <code>[Reports.AsyncRunInlineError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.asyncRunInline(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsyncOperationResponse, Reports.AsyncRunInlineError&gt;</code>, with `result.value` of type <code>[AsyncOperationResponse](src/models/async-operation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>asyncRunReportById(request: Reports.AsyncRunReportByIdRequest, options?: RequestOptions): ApiPromise&lt;AsyncOperationResponse, Reports.AsyncRunReportByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits an async execution job for a saved report identified by ID. Returns 202 immediately with a Location header pointing to the operation status endpoint. Requires the Idempotency-Key header. Use ?dryRun=true to validate without creating an operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.asyncRunReportById({
    id: "some example string",
    timeRange: "P7D",
    startDate: "2025-01-01",
    endDate: "2025-01-31",
    idempotencyKey: "some example string",
  });
  // TODO: Handle 'response' of type AsyncOperationResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.AsyncRunReportByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .asyncRunReportById({
    id: "some example string",
    timeRange: "P7D",
    startDate: "2025-01-01",
    endDate: "2025-01-31",
    idempotencyKey: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsyncOperationResponse
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
| <code>id</code> | <code>string</code> | The saved report ID. |
| <code>dryRun?</code> | <code>boolean</code> | If true, validates the request and returns 200 without creating an operation or submitting a job. |
| <code>timeRange?</code> | <code>string</code> | An optional parameter to override the report time settings. Value should be represented in the format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date and time elements that follow the [n]. Cannot be combined with startDate/endDate. |
| <code>startDate?</code> | <code>string</code> (date) | An optional parameter to override the report time settings. Must be provided together with endDate. Format: yyyy-mm-dd |
| <code>endDate?</code> | <code>string</code> (date) | An optional parameter to override the report time settings. Must be provided together with startDate. Format: yyyy-mm-dd |
| <code>idempotencyKey</code> | <code>string</code> | Unique key for this submission. Required on every request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.asyncRunReportById(request)`

- **OnSuccess**: <code>[AsyncOperationResponse](src/models/async-operation-response.ts)</code>
- **OnError**: throws <code>[Reports.AsyncRunReportByIdError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.asyncRunReportById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsyncOperationResponse, Reports.AsyncRunReportByIdError&gt;</code>, with `result.value` of type <code>[AsyncOperationResponse](src/models/async-operation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelAsyncOperation(request: Reports.CancelAsyncOperationRequest, options?: RequestOptions): ApiPromise&lt;AsyncOperationResponse, Reports.CancelAsyncOperationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a pending or running async report operation. Already-terminal operations (succeeded, failed, canceled) are returned as-is without any state change (idempotent). Returns 404 if the operationId does not exist or belongs to a different tenant. Use ?dryRun=true to validate the request without modifying any state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.cancelAsyncOperation({
    operationId: "some example string",
    idempotencyKey: "some example string",
  });
  // TODO: Handle 'response' of type AsyncOperationResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.CancelAsyncOperationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .cancelAsyncOperation({ operationId: "some example string", idempotencyKey: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsyncOperationResponse
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
| <code>operationId</code> | <code>string</code> | The unique ID of the async operation to cancel. |
| <code>dryRun?</code> | <code>boolean</code> | If true, validates the request and returns 200 without modifying any state. The response body will have status "dry_run" and the X-Dry-Run response header will be set to "true". |
| <code>idempotencyKey</code> | <code>string</code> | Unique key for this submission. Required on every request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.cancelAsyncOperation(request)`

- **OnSuccess**: <code>[AsyncOperationResponse](src/models/async-operation-response.ts)</code>
- **OnError**: throws <code>[Reports.CancelAsyncOperationError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.cancelAsyncOperation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsyncOperationResponse, Reports.CancelAsyncOperationError&gt;</code>, with `result.value` of type <code>[AsyncOperationResponse](src/models/async-operation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createReport(request?: Reports.CreateReportRequest, options?: RequestOptions): ApiPromise&lt;ExternalReport, Reports.CreateReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.createReport({
    body: {
      name: "monthly-cost-by-service",
      description: "Monthly cost grouped by service",
      config: {
        metrics: [{ type: Type2DoiTReportsApi.Basic, value: "cost" }],
        aggregation: Aggregation.Total,
        timeInterval: TimeIntervalDoiTReportsApi.Day,
        dimensions: [{ id: "service_description", type: DimensionsTypes.Fixed }],
        timeRange: { amount: 7, includeCurrent: false, mode: Mode2.Last, unit: Unit.Day },
        includeSubtotals: false,
        displayValues: DisplayValues.ActualsOnly,
        sortGroups: SortGroups.Asc,
        sortDimensions: SortDimensions.Desc,
      },
    },
  });
  // TODO: Handle 'response' of type ExternalReport
} catch (err) {
  // TODO: Handle 'err' of type Reports.CreateReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .createReport({
    body: {
      name: "monthly-cost-by-service",
      description: "Monthly cost grouped by service",
      config: {
        metrics: [{ type: Type2DoiTReportsApi.Basic, value: "cost" }],
        aggregation: Aggregation.Total,
        timeInterval: TimeIntervalDoiTReportsApi.Day,
        dimensions: [{ id: "service_description", type: DimensionsTypes.Fixed }],
        timeRange: { amount: 7, includeCurrent: false, mode: Mode2.Last, unit: Unit.Day },
        includeSubtotals: false,
        displayValues: DisplayValues.ActualsOnly,
        sortGroups: SortGroups.Asc,
        sortDimensions: SortDimensions.Desc,
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExternalReport
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
| <code>body?</code> | <code>[AnalyticsV1ReportsRequest](src/models/analytics-v1-reports-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.createReport(request)`

- **OnSuccess**: <code>[ExternalReport](src/models/external-report.ts)</code>
- **OnError**: throws <code>[Reports.CreateReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.createReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExternalReport, Reports.CreateReportError&gt;</code>, with `result.value` of type <code>[ExternalReport](src/models/external-report.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteReport(request: Reports.DeleteReportRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Reports.DeleteReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified Cloud Analytics report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.deleteReport({ id: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Reports.DeleteReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.deleteReport({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | Report ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.deleteReport(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Reports.DeleteReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.deleteReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Reports.DeleteReportError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAsyncOperation(request: Reports.GetAsyncOperationRequest, options?: RequestOptions): ApiPromise&lt;AsyncOperationPollResponse, Reports.GetAsyncOperationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current status of an async report operation. Non-terminal operations (pending, running) include a Retry-After header suggesting when to poll again. This endpoint does not return result data — once status is "succeeded", fetch the result from the operation's results endpoint. When status is "failed", the error field contains an RFC 9457-shaped error. Returns 404 if the operationId does not exist, belongs to a different tenant, or has expired.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getAsyncOperation({ operationId: "some example string" });
  // TODO: Handle 'response' of type AsyncOperationPollResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetAsyncOperationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.getAsyncOperation({ operationId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsyncOperationPollResponse
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
| <code>operationId</code> | <code>string</code> | The unique ID of the async operation to poll. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getAsyncOperation(request)`

- **OnSuccess**: <code>[AsyncOperationPollResponse](src/models/async-operation-poll-response.ts)</code>
- **OnError**: throws <code>[Reports.GetAsyncOperationError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getAsyncOperation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsyncOperationPollResponse, Reports.GetAsyncOperationError&gt;</code>, with `result.value` of type <code>[AsyncOperationPollResponse](src/models/async-operation-poll-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAsyncOperationResults(request: Reports.GetAsyncOperationResultsRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsV1ReportsOperationsResultsResponse, Reports.GetAsyncOperationResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the result of a succeeded async report operation, including report metadata (id, reportName, owner, type, createTime, updateTime, urlUI) when the operation was started against a saved report — the same shape as the sync GetReportResponse, instead of requiring a second call to GET /analytics/v1/reports/{id}/config for it. Returns 404 if the operationId does not exist, has expired, or belongs to a different tenant. Returns 425 Too Early if the operation has not yet reached a terminal state — poll the operation status endpoint, which returns its own Retry-After guidance, until it succeeds. Returns 422 if the operation terminated as failed or canceled. The poll status endpoint response does not include result data inline — this is the only endpoint that returns it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getAsyncOperationResults({
    operationId: "some example string",
    fileOutput: FileOutput.Pdf,
  });
  // TODO: Handle 'response' of type AnalyticsV1ReportsOperationsResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetAsyncOperationResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .getAsyncOperationResults({ operationId: "some example string", fileOutput: FileOutput.Pdf })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsV1ReportsOperationsResultsResponse
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
| <code>operationId</code> | <code>string</code> | The unique ID of the async operation. |
| <code>fileOutput?</code> | <code>[FileOutput](src/models/file-output.ts)</code> | Additionally render the operation's result as a file and return a signed URL to it in `fileOutput`. The file is generated from the result the operation already produced, not by re-running the query, and is stored beside that result for the operation's lifetime, so a repeat request for the same operation and format returns a fresh signed URL to the same file rather than rendering it again. Omit the parameter and the response is unchanged. Returns 422 when the operation predates file output support and has no stored render input; a transient rendering failure instead returns 200 with `result` and no `fileOutput`, so retry the request for the file. `pdf` is the chart and data table as a document, `png` the chart image, and `csv` every row of the result as raw data, one line per row with the report's dimensions and metrics, never truncated. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getAsyncOperationResults(request)`

- **OnSuccess**: <code>[AnalyticsV1ReportsOperationsResultsResponse](src/models/analytics-v1-reports-operations-results-response.ts)</code>
- **OnError**: throws <code>[Reports.GetAsyncOperationResultsError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getAsyncOperationResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsV1ReportsOperationsResultsResponse, Reports.GetAsyncOperationResultsError&gt;</code>, with `result.value` of type <code>[AnalyticsV1ReportsOperationsResultsResponse](src/models/analytics-v1-reports-operations-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReport(request: Reports.GetReportRequest, options?: RequestOptions): ApiPromise&lt;GetReportResponse, Reports.GetReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the results of the specified report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getReport({
    id: "some example string",
    timeRange: "P7D",
    startDate: "2025-01-01",
    endDate: "2025-01-31",
  });
  // TODO: Handle 'response' of type GetReportResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .getReport({ id: "some example string", timeRange: "P7D", startDate: "2025-01-01", endDate: "2025-01-31" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetReportResponse
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
| <code>id</code> | <code>string</code> | Report ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). |
| <code>timeRange?</code> | <code>string</code> | An optional parameter to override the report time settings. Value should be represented in the format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date and time elements that follow the [n]. |
| <code>startDate?</code> | <code>string</code> (date) | An optional parameter to override the report time settings. Must be provided together with endDate. Format: yyyy-mm-dd |
| <code>endDate?</code> | <code>string</code> (date) | An optional parameter to override the report time settings. Must be provided together with startDate. Format: yyyy-mm-dd |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getReport(request)`

- **OnSuccess**: <code>[GetReportResponse](src/models/get-report-response.ts)</code>
- **OnError**: throws <code>[Reports.GetReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetReportResponse, Reports.GetReportError&gt;</code>, with `result.value` of type <code>[GetReportResponse](src/models/get-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReportConfig(request: Reports.GetReportConfigRequest, options?: RequestOptions): ApiPromise&lt;ExternalReport, Reports.GetReportConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the configuration of the specified Cloud Analytics report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getReportConfig({ id: "some example string" });
  // TODO: Handle 'response' of type ExternalReport
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetReportConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.getReportConfig({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExternalReport
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
| <code>id</code> | <code>string</code> | Report ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getReportConfig(request)`

- **OnSuccess**: <code>[ExternalReport](src/models/external-report.ts)</code>
- **OnError**: throws <code>[Reports.GetReportConfigError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getReportConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExternalReport, Reports.GetReportConfigError&gt;</code>, with `result.value` of type <code>[ExternalReport](src/models/external-report.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReports(request?: Reports.ListReportsRequest, options?: RequestOptions): ApiPromise&lt;ReportList, Reports.ListReportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Cloud Analytics reports that your account has access to.
Reports are returned in reverse chronological order by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.listReports({
    filter: "reportName:This Month vs. Last",
    nameContains: "monthly spend",
  });
  // TODO: Handle 'response' of type ReportList
} catch (err) {
  // TODO: Handle 'err' of type Reports.ListReportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .listReports({ filter: "reportName:This Month vs. Last", nameContains: "monthly spend" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportList
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
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>filter?</code> | <code>string</code> | An expression for filtering the results.<br>The syntax is `key:[<value>]`. Multiple filters can be connected using a pipe \|. See [Filters](https://developer.doit.com/docs/filters).<br>Possible filter keys: **reportName**, **owner**, **type**, **updateTime**, **folderId** |
| <code>nameContains?</code> | <code>string</code> | Case-insensitive substring match against the resource name. Combined with the "filter" parameter using AND semantics. |
| <code>minCreationTime?</code> | <code>string</code> | Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only reports created after or at this timestamp are returned. |
| <code>maxCreationTime?</code> | <code>string</code> | Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only reports created before or at this timestamp are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.listReports(request)`

- **OnSuccess**: <code>[ReportList](src/models/report-list.ts)</code>
- **OnError**: throws <code>[Reports.ListReportsError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.listReports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportList, Reports.ListReportsError&gt;</code>, with `result.value` of type <code>[ReportList](src/models/report-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>query(request?: Reports.QueryRequest, options?: RequestOptions): ApiPromise&lt;RunReportResult, Reports.QueryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs a report query with the specified configuration without persisting it.
Fields that are not populated will use their default values if needed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.query({
    body: {
      config: {
        metrics: [{ type: Type2DoiTReportsApi.Basic, value: "cost" }],
        timeInterval: TimeIntervalDoiTReportsApi.Day,
        timeRange: { amount: 30, includeCurrent: false, mode: Mode2.Last, unit: Unit.Day },
        group: [{ id: "service_description", type: DimensionsTypes.Fixed }],
        dataSource: DataSourceDoiTReportsApi.Billing,
      },
    },
  });
  // TODO: Handle 'response' of type RunReportResult
} catch (err) {
  // TODO: Handle 'err' of type Reports.QueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .query({
    body: {
      config: {
        metrics: [{ type: Type2DoiTReportsApi.Basic, value: "cost" }],
        timeInterval: TimeIntervalDoiTReportsApi.Day,
        timeRange: { amount: 30, includeCurrent: false, mode: Mode2.Last, unit: Unit.Day },
        group: [{ id: "service_description", type: DimensionsTypes.Fixed }],
        dataSource: DataSourceDoiTReportsApi.Billing,
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunReportResult
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
| <code>body?</code> | <code>[AnalyticsV1ReportsQueryRequest](src/models/analytics-v1-reports-query-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.query(request)`

- **OnSuccess**: <code>[RunReportResult](src/models/run-report-result.ts)</code>
- **OnError**: throws <code>[Reports.QueryError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.query(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunReportResult, Reports.QueryError&gt;</code>, with `result.value` of type <code>[RunReportResult](src/models/run-report-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateReport(request: Reports.UpdateReportRequest, options?: RequestOptions): ApiPromise&lt;ExternalReport, Reports.UpdateReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a report with the specified configuration.

Only specified fields will be updated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.updateReport({ id: "some example string" });
  // TODO: Handle 'response' of type ExternalReport
} catch (err) {
  // TODO: Handle 'err' of type Reports.UpdateReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.updateReport({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExternalReport
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
| <code>id</code> | <code>string</code> | Report ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). |
| <code>body?</code> | <code>[ExternalUpdateReport](src/models/external-update-report.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.updateReport(request)`

- **OnSuccess**: <code>[ExternalReport](src/models/external-report.ts)</code>
- **OnError**: throws <code>[Reports.UpdateReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.updateReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExternalReport, Reports.UpdateReportError&gt;</code>, with `result.value` of type <code>[ExternalReport](src/models/external-report.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Roles

> Source: [Roles](src/resources/roles.ts)

<details>
<summary><code>createRole(request: Roles.CreateRoleRequestParams, options?: RequestOptions): ApiPromise&lt;RoleDoiTRolesApi, Roles.CreateRoleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom role in the authenticated customer with the given permission IDs. Permission IDs are the `permissions` values returned by `GET /iam/v1/roles`. A service account of a parent tenant can create the role in a descendant tenant by setting `X-Tenant-Id` to that tenant's customer ID. Requires the `Idempotency-Key` header so a retried request does not create a second role.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.createRole({
    idempotencyKey: "some example string",
    body: {
      name: "FinOps Analyst",
      description: "Read-only access to cost reports and budgets",
      permissions: ["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
    },
  });
  // TODO: Handle 'response' of type RoleDoiTRolesApi
} catch (err) {
  // TODO: Handle 'err' of type Roles.CreateRoleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles
  .createRole({
    idempotencyKey: "some example string",
    body: {
      name: "FinOps Analyst",
      description: "Read-only access to cost reports and budgets",
      permissions: ["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RoleDoiTRolesApi
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
| <code>idempotencyKey</code> | <code>string</code> | Caller-chosen key (1-255 characters) that makes retries safe; the same key with the same body returns the original response. |
| <code>body</code> | <code>[CreateRoleRequest](src/models/create-role-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.createRole(request)`

- **OnSuccess**: <code>[RoleDoiTRolesApi](src/models/role-doi-troles-api.ts)</code>
- **OnError**: throws <code>[Roles.CreateRoleError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.createRole(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RoleDoiTRolesApi, Roles.CreateRoleError&gt;</code>, with `result.value` of type <code>[RoleDoiTRolesApi](src/models/role-doi-troles-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteRole(request: Roles.DeleteRoleRequest, options?: RequestOptions): ApiPromise&lt;undefined, Roles.DeleteRoleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom role. Preset roles cannot be deleted, and a role still assigned to users or groups must be unassigned first. A service account of a parent tenant can delete a descendant tenant's role by setting `X-Tenant-Id` to that tenant's customer ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.roles.deleteRole({ id: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Roles.DeleteRoleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles.deleteRole({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>id</code> | <code>string</code> | The unique ID of the role to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.deleteRole(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Roles.DeleteRoleError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.deleteRole(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Roles.DeleteRoleError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRole(request: Roles.GetRoleRequest, options?: RequestOptions): ApiPromise&lt;RoleDoiTRolesApi, Roles.GetRoleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single role by ID. Preset roles are visible to every customer; a custom role is returned only to the customer that owns it. A service account of a parent tenant can read a descendant tenant's role by setting `X-Tenant-Id` to that tenant's customer ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.getRole({ id: "some example string" });
  // TODO: Handle 'response' of type RoleDoiTRolesApi
} catch (err) {
  // TODO: Handle 'err' of type Roles.GetRoleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles.getRole({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RoleDoiTRolesApi
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
| <code>id</code> | <code>string</code> | The unique ID of the role. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.getRole(request)`

- **OnSuccess**: <code>[RoleDoiTRolesApi](src/models/role-doi-troles-api.ts)</code>
- **OnError**: throws <code>[Roles.GetRoleError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.getRole(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RoleDoiTRolesApi, Roles.GetRoleError&gt;</code>, with `result.value` of type <code>[RoleDoiTRolesApi](src/models/role-doi-troles-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRoles(options?: RequestOptions): ApiPromise&lt;IamV1RolesResponse, Roles.ListRolesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of roles.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.listRoles();
  // TODO: Handle 'response' of type IamV1RolesResponse
} catch (err) {
  // TODO: Handle 'err' of type Roles.ListRolesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles.listRoles().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IamV1RolesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.listRoles()`

- **OnSuccess**: <code>[IamV1RolesResponse](src/models/iam-v1-roles-response.ts)</code>
- **OnError**: throws <code>[Roles.ListRolesError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.listRoles().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IamV1RolesResponse, Roles.ListRolesError&gt;</code>, with `result.value` of type <code>[IamV1RolesResponse](src/models/iam-v1-roles-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateRole(request: Roles.UpdateRoleRequestParams, options?: RequestOptions): ApiPromise&lt;RoleDoiTRolesApi, Roles.UpdateRoleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the `name`, `description` and/or `permissions` of a custom role. Only the fields present in the body change; `permissions` replaces the full list when present. Preset roles cannot be modified. A service account of a parent tenant can update a descendant tenant's role by setting `X-Tenant-Id` to that tenant's customer ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.updateRole({
    id: "some example string",
    body: {
      name: "FinOps Analyst",
      description: "Read-only access to cost reports and budgets",
      permissions: ["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
    },
  });
  // TODO: Handle 'response' of type RoleDoiTRolesApi
} catch (err) {
  // TODO: Handle 'err' of type Roles.UpdateRoleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles
  .updateRole({
    id: "some example string",
    body: {
      name: "FinOps Analyst",
      description: "Read-only access to cost reports and budgets",
      permissions: ["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RoleDoiTRolesApi
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
| <code>id</code> | <code>string</code> | The unique ID of the role to update. |
| <code>body</code> | <code>[UpdateRoleRequest](src/models/update-role-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.updateRole(request)`

- **OnSuccess**: <code>[RoleDoiTRolesApi](src/models/role-doi-troles-api.ts)</code>
- **OnError**: throws <code>[Roles.UpdateRoleError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.updateRole(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RoleDoiTRolesApi, Roles.UpdateRoleError&gt;</code>, with `result.value` of type <code>[RoleDoiTRolesApi](src/models/role-doi-troles-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceAccounts

> Source: [ServiceAccounts](src/resources/service-accounts.ts)

<details>
<summary><code>createServiceAccount(request: ServiceAccounts.CreateServiceAccountRequestParams, options?: RequestOptions): ApiPromise&lt;ServiceAccount, ServiceAccounts.CreateServiceAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a service account owned by the authenticated customer. It cannot authenticate anything until it has an API token; mint one with the `api-tokens` sub-resource. Returns `409` when another service account of the customer already uses `name`. With `dryRun=true` the request goes through the same checks as a real create (name bounds and uniqueness, permission names, caller scope) and returns the same errors without creating anything. When the caller authenticates with a service account token, `createdBy`, `createdByEmail` and `createdByUserId` are `null`. Requires the `serviceAccountCreator` permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.createServiceAccount({
    idempotencyKey: "some example string",
    body: {
      name: "terraform-ci",
      description: "Manages DoiT resources from CI",
      permissions: ["cloudAnalyticsReadOnly", "budgetsManager"],
    },
  });
  // TODO: Handle 'response' of type ServiceAccount
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.CreateServiceAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts
  .createServiceAccount({
    idempotencyKey: "some example string",
    body: {
      name: "terraform-ci",
      description: "Manages DoiT resources from CI",
      permissions: ["cloudAnalyticsReadOnly", "budgetsManager"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccount
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
| <code>dryRun?</code> | <code>boolean</code> | If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.<br>**Default**: false |
| <code>idempotencyKey</code> | <code>string</code> | Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours. |
| <code>body</code> | <code>[CreateServiceAccountRequest](src/models/create-service-account-request.ts)</code> | The service account to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.createServiceAccount(request)`

- **OnSuccess**: <code>[ServiceAccount](src/models/service-account.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.CreateServiceAccountError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.createServiceAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccount, ServiceAccounts.CreateServiceAccountError&gt;</code>, with `result.value` of type <code>[ServiceAccount](src/models/service-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createServiceAccountToken(request: ServiceAccounts.CreateServiceAccountTokenRequestParams, options?: RequestOptions): ApiPromise&lt;CreateServiceAccountTokenResponse, ServiceAccounts.CreateServiceAccountTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mints an API token for the service account and returns its `accessToken` once. The token
inherits the service account's permissions as they stand at creation; there is no per-token
scoping. Returns `409` when the service account already has a token of the same name, and
`422` at the cap of 10 tokens.

`dryRun=true` checks the name bounds only, then returns a preview without creating anything.
It does **not** verify that the service account exists, that the name is unused, or that the
account is under the token cap, so a dry run can succeed where the real create then returns
`404`, `409` or `422`. Requires the `serviceAccountCreator` permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.createServiceAccountToken({
    serviceAccountId: "some example string",
    idempotencyKey: "some example string",
    body: { name: "ci-pipeline-prod", expiresTime: new Date(Date.UTC(2027, 8, 1, 8, 0, 0)) },
  });
  // TODO: Handle 'response' of type CreateServiceAccountTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.CreateServiceAccountTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts
  .createServiceAccountToken({
    serviceAccountId: "some example string",
    idempotencyKey: "some example string",
    body: { name: "ci-pipeline-prod", expiresTime: new Date(Date.UTC(2027, 8, 1, 8, 0, 0)) },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateServiceAccountTokenResponse
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
| <code>serviceAccountId</code> | <code>string</code> | ID of the service account that owns the token, as returned in the id field by the service account list and create operations. |
| <code>dryRun?</code> | <code>boolean</code> | If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.<br>**Default**: false |
| <code>idempotencyKey</code> | <code>string</code> | Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours. |
| <code>body</code> | <code>[CreateServiceAccountTokenRequest](src/models/create-service-account-token-request.ts)</code> | The API token to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.createServiceAccountToken(request)`

- **OnSuccess**: <code>[CreateServiceAccountTokenResponse](src/models/create-service-account-token-response.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.CreateServiceAccountTokenError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.createServiceAccountToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateServiceAccountTokenResponse, ServiceAccounts.CreateServiceAccountTokenError&gt;</code>, with `result.value` of type <code>[CreateServiceAccountTokenResponse](src/models/create-service-account-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteServiceAccount(request: ServiceAccounts.DeleteServiceAccountRequest, options?: RequestOptions): ApiPromise&lt;undefined, ServiceAccounts.DeleteServiceAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a service account and all of its API tokens, which stop authenticating immediately. Deleting an ID that no longer exists returns `404`. Requires the `serviceAccountManager` permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.serviceAccounts.deleteServiceAccount({
    id: "some example string",
    ifMatch: "some example string",
    idempotencyKey: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.DeleteServiceAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts
  .deleteServiceAccount({
    id: "some example string",
    ifMatch: "some example string",
    idempotencyKey: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>id</code> | <code>string</code> | Service account ID, as returned in the id field by the list and create operations. |
| <code>dryRun?</code> | <code>boolean</code> | If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.<br>**Default**: false |
| <code>ifMatch</code> | <code>string</code> | The ETag of the current version, from a get, create or update response. A stale value returns 412; re-read the resource and retry with the new ETag. |
| <code>idempotencyKey</code> | <code>string</code> | Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.deleteServiceAccount(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ServiceAccounts.DeleteServiceAccountError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.deleteServiceAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ServiceAccounts.DeleteServiceAccountError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteServiceAccountToken(request: ServiceAccounts.DeleteServiceAccountTokenRequest, options?: RequestOptions): ApiPromise&lt;undefined, ServiceAccounts.DeleteServiceAccountTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an API token, which stops authenticating immediately. This cannot be undone. Deleting an ID that no longer exists returns `404`. Requires the `serviceAccountManager` permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.serviceAccounts.deleteServiceAccountToken({
    serviceAccountId: "some example string",
    id: "some example string",
    idempotencyKey: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.DeleteServiceAccountTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts
  .deleteServiceAccountToken({
    serviceAccountId: "some example string",
    id: "some example string",
    idempotencyKey: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>serviceAccountId</code> | <code>string</code> | ID of the service account that owns the token, as returned in the id field by the service account list and create operations. |
| <code>id</code> | <code>string</code> | API token ID, as returned in the id field by the token list and create operations. |
| <code>dryRun?</code> | <code>boolean</code> | If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.<br>**Default**: false |
| <code>idempotencyKey</code> | <code>string</code> | Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.deleteServiceAccountToken(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ServiceAccounts.DeleteServiceAccountTokenError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.deleteServiceAccountToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ServiceAccounts.DeleteServiceAccountTokenError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getServiceAccount(request: ServiceAccounts.GetServiceAccountRequest, options?: RequestOptions): ApiPromise&lt;ServiceAccount, ServiceAccounts.GetServiceAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a service account owned by the authenticated customer; an ID that belongs to another customer returns `404`. The `ETag` response header carries the value to send in `If-Match` on update and delete. Requires the `serviceAccountViewer` permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.getServiceAccount({ id: "some example string" });
  // TODO: Handle 'response' of type ServiceAccount
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.GetServiceAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts.getServiceAccount({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccount
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
| <code>id</code> | <code>string</code> | Service account ID, as returned in the id field by the list and create operations. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.getServiceAccount(request)`

- **OnSuccess**: <code>[ServiceAccount](src/models/service-account.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.GetServiceAccountError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.getServiceAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccount, ServiceAccounts.GetServiceAccountError&gt;</code>, with `result.value` of type <code>[ServiceAccount](src/models/service-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getServiceAccountToken(request: ServiceAccounts.GetServiceAccountTokenRequest, options?: RequestOptions): ApiPromise&lt;ServiceAccountToken, ServiceAccounts.GetServiceAccountTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one API token of the service account; an ID that belongs to another customer returns `404`. `accessToken` is not included — it is shown only once, by the create operation. Requires the `serviceAccountViewer` permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.getServiceAccountToken({
    serviceAccountId: "some example string",
    id: "some example string",
  });
  // TODO: Handle 'response' of type ServiceAccountToken
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.GetServiceAccountTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts
  .getServiceAccountToken({ serviceAccountId: "some example string", id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccountToken
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
| <code>serviceAccountId</code> | <code>string</code> | ID of the service account that owns the token, as returned in the id field by the service account list and create operations. |
| <code>id</code> | <code>string</code> | API token ID, as returned in the id field by the token list and create operations. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.getServiceAccountToken(request)`

- **OnSuccess**: <code>[ServiceAccountToken](src/models/service-account-token.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.GetServiceAccountTokenError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.getServiceAccountToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccountToken, ServiceAccounts.GetServiceAccountTokenError&gt;</code>, with `result.value` of type <code>[ServiceAccountToken](src/models/service-account-token.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listServiceAccountTokens(request: ServiceAccounts.ListServiceAccountTokensRequest, options?: RequestOptions): ApiPromise&lt;ServiceAccountTokensResponse, ServiceAccounts.ListServiceAccountTokensError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the service account's non-deleted API tokens in a single unpaginated `items` array, at most 10. Secret material is never returned here — `accessToken` is shown only once, by the create operation. Requires the `serviceAccountViewer` permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.listServiceAccountTokens({
    serviceAccountId: "some example string",
  });
  // TODO: Handle 'response' of type ServiceAccountTokensResponse
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.ListServiceAccountTokensError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts
  .listServiceAccountTokens({ serviceAccountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccountTokensResponse
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
| <code>serviceAccountId</code> | <code>string</code> | ID of the service account that owns the token, as returned in the id field by the service account list and create operations. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.listServiceAccountTokens(request)`

- **OnSuccess**: <code>[ServiceAccountTokensResponse](src/models/service-account-tokens-response.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.ListServiceAccountTokensError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.listServiceAccountTokens(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccountTokensResponse, ServiceAccounts.ListServiceAccountTokensError&gt;</code>, with `result.value` of type <code>[ServiceAccountTokensResponse](src/models/service-account-tokens-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listServiceAccounts(options?: RequestOptions): ApiPromise&lt;ServiceAccountsResponse, ServiceAccounts.ListServiceAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every service account owned by the authenticated customer in a single unpaginated `items` array, in no guaranteed order. Requires the `serviceAccountViewer` permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.listServiceAccounts();
  // TODO: Handle 'response' of type ServiceAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.ListServiceAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts.listServiceAccounts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccountsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.listServiceAccounts()`

- **OnSuccess**: <code>[ServiceAccountsResponse](src/models/service-accounts-response.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.ListServiceAccountsError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.listServiceAccounts().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccountsResponse, ServiceAccounts.ListServiceAccountsError&gt;</code>, with `result.value` of type <code>[ServiceAccountsResponse](src/models/service-accounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateServiceAccount(request: ServiceAccounts.UpdateServiceAccountRequestParams, options?: RequestOptions): ApiPromise&lt;ServiceAccount, ServiceAccounts.UpdateServiceAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a service account with an `application/merge-patch+json` body (RFC 7396). Omitted or `null` fields stay unchanged; an explicit empty string clears `description`. `permissions` replaces the whole list, and `[]` removes every permission. With `dryRun=true` the request goes through the same checks as a real update (`If-Match`, name bounds and uniqueness, permission names, caller scope) and returns the service account as it would look after the patch, without changing anything. Requires the `serviceAccountManager` permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.updateServiceAccount({
    id: "some example string",
    ifMatch: "some example string",
    idempotencyKey: "some example string",
    body: { permissions: ["cloudAnalyticsReadOnly"] },
  });
  // TODO: Handle 'response' of type ServiceAccount
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.UpdateServiceAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts
  .updateServiceAccount({
    id: "some example string",
    ifMatch: "some example string",
    idempotencyKey: "some example string",
    body: { permissions: ["cloudAnalyticsReadOnly"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccount
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
| <code>id</code> | <code>string</code> | Service account ID, as returned in the id field by the list and create operations. |
| <code>dryRun?</code> | <code>boolean</code> | If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.<br>**Default**: false |
| <code>ifMatch</code> | <code>string</code> | The ETag of the current version, from a get, create or update response. A stale value returns 412; re-read the resource and retry with the new ETag. |
| <code>idempotencyKey</code> | <code>string</code> | Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours. |
| <code>body</code> | <code>[UpdateServiceAccountRequest](src/models/update-service-account-request.ts)</code> | The fields to change. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.updateServiceAccount(request)`

- **OnSuccess**: <code>[ServiceAccount](src/models/service-account.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.UpdateServiceAccountError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.updateServiceAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccount, ServiceAccounts.UpdateServiceAccountError&gt;</code>, with `result.value` of type <code>[ServiceAccount](src/models/service-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateServiceAccountToken(request: ServiceAccounts.UpdateServiceAccountTokenRequestParams, options?: RequestOptions): ApiPromise&lt;ServiceAccountToken, ServiceAccounts.UpdateServiceAccountTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Moves the token between `active` and `disabled` by setting `state`. Disabling takes effect
immediately: the token stops authenticating until it is re-enabled. Setting the state a
token already has succeeds and changes nothing.

The two directions are not symmetric. Disabling a token whose expiry has passed succeeds,
but re-enabling an expired token returns `422` — expiry is final, and a new token has to be
created instead. `deleted` and `expired` are not accepted values: a token is deleted through
the delete operation, and expires on its own.

With `dryRun=true` nothing is written and the response body is the token as it would look
after the change, so a `422` here means a real request would also be refused. Requires the
`serviceAccountManager` permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceAccounts.updateServiceAccountToken({
    serviceAccountId: "some example string",
    id: "some example string",
    idempotencyKey: "some example string",
    body: { state: State1DoiTServiceAccountsApi.Disabled },
  });
  // TODO: Handle 'response' of type ServiceAccountToken
} catch (err) {
  // TODO: Handle 'err' of type ServiceAccounts.UpdateServiceAccountTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceAccounts
  .updateServiceAccountToken({
    serviceAccountId: "some example string",
    id: "some example string",
    idempotencyKey: "some example string",
    body: { state: State1DoiTServiceAccountsApi.Disabled },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceAccountToken
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
| <code>serviceAccountId</code> | <code>string</code> | ID of the service account that owns the token, as returned in the id field by the service account list and create operations. |
| <code>id</code> | <code>string</code> | API token ID, as returned in the id field by the token list and create operations. |
| <code>dryRun?</code> | <code>boolean</code> | If true, validates the request and returns the would-be result without applying it. The response then carries the X-Dry-Run header.<br>**Default**: false |
| <code>idempotencyKey</code> | <code>string</code> | Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request returns the stored response instead of repeating the operation; the key is kept for 24 hours. |
| <code>body</code> | <code>[UpdateServiceAccountTokenRequest](src/models/update-service-account-token-request.ts)</code> | The state to move the token to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceAccounts.updateServiceAccountToken(request)`

- **OnSuccess**: <code>[ServiceAccountToken](src/models/service-account-token.ts)</code>
- **OnError**: throws <code>[ServiceAccounts.UpdateServiceAccountTokenError](src/resources/service-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceAccounts.updateServiceAccountToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceAccountToken, ServiceAccounts.UpdateServiceAccountTokenError&gt;</code>, with `result.value` of type <code>[ServiceAccountToken](src/models/service-account-token.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceQuotas

> Source: [ServiceQuotas](src/resources/service-quotas.ts)

<details>
<summary><code>listServiceQuotas(request?: ServiceQuotas.ListServiceQuotasRequest, options?: RequestOptions): ApiPromise&lt;ServiceQuotaList, ServiceQuotas.ListServiceQuotasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest service quota usage snapshots collected by DoiT for the authenticated customer.
Results include only quotas retained by DoiT's monitoring collectors and are not a complete or live inventory from the cloud providers.
Results are sorted by utilization percentage in descending order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceQuotas.listServiceQuotas();
  // TODO: Handle 'response' of type ServiceQuotaList
} catch (err) {
  // TODO: Handle 'err' of type ServiceQuotas.ListServiceQuotasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceQuotas.listServiceQuotas().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceQuotaList
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
| <code>cloudProvider?</code> | <code>[CloudProvider1](src/models/cloud-provider1.ts)</code> | Filter results to a cloud provider. Omit to return all supported providers. |
| <code>minUtilizationPercent?</code> | <code>number</code> | Return quotas whose utilization percentage is greater than or equal to this value. |
| <code>maxResults?</code> | <code>number</code> | Maximum number of results to return in one page.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceQuotas.listServiceQuotas(request)`

- **OnSuccess**: <code>[ServiceQuotaList](src/models/service-quota-list.ts)</code>
- **OnError**: throws <code>[ServiceQuotas.ListServiceQuotasError](src/resources/service-quotas.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceQuotas.listServiceQuotas(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceQuotaList, ServiceQuotas.ListServiceQuotasError&gt;</code>, with `result.value` of type <code>[ServiceQuotaList](src/models/service-quota-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Settings

> Source: [Settings](src/resources/settings.ts)

<details>
<summary><code>createCustomTheme(request: Settings.CreateCustomThemeRequestParams, options?: RequestOptions): ApiPromise&lt;CustomTheme, Settings.CreateCustomThemeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom color theme. Requires Cloud Analytics Admin permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settings.createCustomTheme({
    body: {
      name: "some example string",
      primaryColor: "some example string",
      colors: { light: ["some example string"], dark: ["some example string"] },
    },
  });
  // TODO: Handle 'response' of type CustomTheme
} catch (err) {
  // TODO: Handle 'err' of type Settings.CreateCustomThemeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settings
  .createCustomTheme({
    body: {
      name: "some example string",
      primaryColor: "some example string",
      colors: { light: ["some example string"], dark: ["some example string"] },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomTheme
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
| <code>body</code> | <code>[CreateCustomThemeRequest](src/models/create-custom-theme-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settings.createCustomTheme(request)`

- **OnSuccess**: <code>[CustomTheme](src/models/custom-theme.ts)</code>
- **OnError**: throws <code>[Settings.CreateCustomThemeError](src/resources/settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settings.createCustomTheme(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomTheme, Settings.CreateCustomThemeError&gt;</code>, with `result.value` of type <code>[CustomTheme](src/models/custom-theme.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomTheme(request: Settings.DeleteCustomThemeRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Settings.DeleteCustomThemeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settings.deleteCustomTheme({ id: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Settings.DeleteCustomThemeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settings.deleteCustomTheme({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | Custom theme ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settings.deleteCustomTheme(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Settings.DeleteCustomThemeError](src/resources/settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settings.deleteCustomTheme(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Settings.DeleteCustomThemeError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getActiveTheme(options?: RequestOptions): ApiPromise&lt;ActiveTheme, Settings.GetActiveThemeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the theme currently active for the authenticated user.
`themeId` is the reserved sentinel `"default"` when no custom or
preset theme is selected and the user is on the built-in default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settings.getActiveTheme();
  // TODO: Handle 'response' of type ActiveTheme
} catch (err) {
  // TODO: Handle 'err' of type Settings.GetActiveThemeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settings.getActiveTheme().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActiveTheme
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settings.getActiveTheme()`

- **OnSuccess**: <code>[ActiveTheme](src/models/active-theme.ts)</code>
- **OnError**: throws <code>[Settings.GetActiveThemeError](src/resources/settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settings.getActiveTheme().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActiveTheme, Settings.GetActiveThemeError&gt;</code>, with `result.value` of type <code>[ActiveTheme](src/models/active-theme.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomTheme(request: Settings.GetCustomThemeRequest, options?: RequestOptions): ApiPromise&lt;CustomTheme, Settings.GetCustomThemeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a custom theme by the specified Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settings.getCustomTheme({ id: "some example string" });
  // TODO: Handle 'response' of type CustomTheme
} catch (err) {
  // TODO: Handle 'err' of type Settings.GetCustomThemeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settings.getCustomTheme({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomTheme
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
| <code>id</code> | <code>string</code> | Custom theme ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settings.getCustomTheme(request)`

- **OnSuccess**: <code>[CustomTheme](src/models/custom-theme.ts)</code>
- **OnError**: throws <code>[Settings.GetCustomThemeError](src/resources/settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settings.getCustomTheme(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomTheme, Settings.GetCustomThemeError&gt;</code>, with `result.value` of type <code>[CustomTheme](src/models/custom-theme.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomThemes(options?: RequestOptions): ApiPromise&lt;AnalyticsV1SettingsThemesResponse, Settings.ListCustomThemesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of custom color themes defined for your account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settings.listCustomThemes();
  // TODO: Handle 'response' of type AnalyticsV1SettingsThemesResponse
} catch (err) {
  // TODO: Handle 'err' of type Settings.ListCustomThemesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settings.listCustomThemes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsV1SettingsThemesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settings.listCustomThemes()`

- **OnSuccess**: <code>[AnalyticsV1SettingsThemesResponse](src/models/analytics-v1-settings-themes-response.ts)</code>
- **OnError**: throws <code>[Settings.ListCustomThemesError](src/resources/settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settings.listCustomThemes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsV1SettingsThemesResponse, Settings.ListCustomThemesError&gt;</code>, with `result.value` of type <code>[AnalyticsV1SettingsThemesResponse](src/models/analytics-v1-settings-themes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setActiveTheme(request: Settings.SetActiveThemeRequestParams, options?: RequestOptions): ApiPromise&lt;ActiveTheme, Settings.SetActiveThemeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the theme active for the authenticated user. Send the reserved
sentinel `themeId: "default"` to clear the active theme and fall back
to the built-in default. Returns the updated active theme.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settings.setActiveTheme({ body: { themeId: "some example string" } });
  // TODO: Handle 'response' of type ActiveTheme
} catch (err) {
  // TODO: Handle 'err' of type Settings.SetActiveThemeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settings
  .setActiveTheme({ body: { themeId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActiveTheme
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
| <code>body</code> | <code>[SetActiveThemeRequest](src/models/set-active-theme-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settings.setActiveTheme(request)`

- **OnSuccess**: <code>[ActiveTheme](src/models/active-theme.ts)</code>
- **OnError**: throws <code>[Settings.SetActiveThemeError](src/resources/settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settings.setActiveTheme(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActiveTheme, Settings.SetActiveThemeError&gt;</code>, with `result.value` of type <code>[ActiveTheme](src/models/active-theme.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomTheme(request: Settings.UpdateCustomThemeRequestParams, options?: RequestOptions): ApiPromise&lt;CustomTheme, Settings.UpdateCustomThemeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settings.updateCustomTheme({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type CustomTheme
} catch (err) {
  // TODO: Handle 'err' of type Settings.UpdateCustomThemeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settings.updateCustomTheme({ id: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomTheme
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
| <code>id</code> | <code>string</code> | Custom theme ID |
| <code>body</code> | <code>[UpdateCustomThemeRequest](src/models/update-custom-theme-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settings.updateCustomTheme(request)`

- **OnSuccess**: <code>[CustomTheme](src/models/custom-theme.ts)</code>
- **OnError**: throws <code>[Settings.UpdateCustomThemeError](src/resources/settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settings.updateCustomTheme(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomTheme, Settings.UpdateCustomThemeError&gt;</code>, with `result.value` of type <code>[CustomTheme](src/models/custom-theme.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SharedPayers

> Source: [SharedPayers](src/resources/shared-payers.ts)

<details>
<summary><code>listSharedPayerAccountMappings(request: SharedPayers.ListSharedPayerAccountMappingsRequest, options?: RequestOptions): ApiPromise&lt;SharedPayerAccountMappingList, SharedPayers.ListSharedPayerAccountMappingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the AWS accounts under the reseller's linked shared payers, together with the end customer each is currently mapped to. `{customerId}` (the reseller itself) means the account has not yet been reassigned to an end customer. Each payer's own management account is included alongside its member accounts. Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User API tokens must include the permission in their scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sharedPayers.listSharedPayerAccountMappings({
    customerId: "some example string",
  });
  // TODO: Handle 'response' of type SharedPayerAccountMappingList
} catch (err) {
  // TODO: Handle 'err' of type SharedPayers.ListSharedPayerAccountMappingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sharedPayers
  .listSharedPayerAccountMappings({ customerId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SharedPayerAccountMappingList
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
| <code>customerId</code> | <code>string</code> | Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets `403`. |
| <code>managementAccount?</code> | <code>string</code> | Restricts the results to accounts under this AWS management (payer) account ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sharedPayers.listSharedPayerAccountMappings(request)`

- **OnSuccess**: <code>[SharedPayerAccountMappingList](src/models/shared-payer-account-mapping-list.ts)</code>
- **OnError**: throws <code>[SharedPayers.ListSharedPayerAccountMappingsError](src/resources/shared-payers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sharedPayers.listSharedPayerAccountMappings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SharedPayerAccountMappingList, SharedPayers.ListSharedPayerAccountMappingsError&gt;</code>, with `result.value` of type <code>[SharedPayerAccountMappingList](src/models/shared-payer-account-mapping-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSharedPayerManagementAccounts(request: SharedPayers.ListSharedPayerManagementAccountsRequest, options?: RequestOptions): ApiPromise&lt;SharedPayerManagementAccountList, SharedPayers.ListSharedPayerManagementAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the reseller's linked shared-payer management (payer) accounts that have completed onboarding, for use in an account picker. Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User API tokens must include the permission in their scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sharedPayers.listSharedPayerManagementAccounts({
    customerId: "some example string",
  });
  // TODO: Handle 'response' of type SharedPayerManagementAccountList
} catch (err) {
  // TODO: Handle 'err' of type SharedPayers.ListSharedPayerManagementAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sharedPayers
  .listSharedPayerManagementAccounts({ customerId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SharedPayerManagementAccountList
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
| <code>customerId</code> | <code>string</code> | Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets `403`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sharedPayers.listSharedPayerManagementAccounts(request)`

- **OnSuccess**: <code>[SharedPayerManagementAccountList](src/models/shared-payer-management-account-list.ts)</code>
- **OnError**: throws <code>[SharedPayers.ListSharedPayerManagementAccountsError](src/resources/shared-payers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sharedPayers.listSharedPayerManagementAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SharedPayerManagementAccountList, SharedPayers.ListSharedPayerManagementAccountsError&gt;</code>, with `result.value` of type <code>[SharedPayerManagementAccountList](src/models/shared-payer-management-account-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSharedPayers(request: SharedPayers.ListSharedPayersRequest, options?: RequestOptions): ApiPromise&lt;SharedPayerList, SharedPayers.ListSharedPayersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists every shared payer linked to the reseller, including ones still mid-onboarding, with per-payer counts of linked and mapped accounts. Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User API tokens must include the permission in their scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sharedPayers.listSharedPayers({ customerId: "some example string" });
  // TODO: Handle 'response' of type SharedPayerList
} catch (err) {
  // TODO: Handle 'err' of type SharedPayers.ListSharedPayersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sharedPayers
  .listSharedPayers({ customerId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SharedPayerList
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
| <code>customerId</code> | <code>string</code> | Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets `403`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sharedPayers.listSharedPayers(request)`

- **OnSuccess**: <code>[SharedPayerList](src/models/shared-payer-list.ts)</code>
- **OnError**: throws <code>[SharedPayers.ListSharedPayersError](src/resources/shared-payers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sharedPayers.listSharedPayers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SharedPayerList, SharedPayers.ListSharedPayersError&gt;</code>, with `result.value` of type <code>[SharedPayerList](src/models/shared-payer-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reassignSharedPayerAccount(request: SharedPayers.ReassignSharedPayerAccountRequest, options?: RequestOptions): ApiPromise&lt;SharedPayerAccountReassignResult, SharedPayers.ReassignSharedPayerAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reassigns one AWS account under a linked shared payer - a member account or the payer's own management account - to the reseller itself or to a T3 end customer within its hierarchy. Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User API tokens must include the permission in their scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sharedPayers.reassignSharedPayerAccount({
    customerId: "some example string",
    assetId: "some example string",
    body: { customerId: "some example string" },
  });
  // TODO: Handle 'response' of type SharedPayerAccountReassignResult
} catch (err) {
  // TODO: Handle 'err' of type SharedPayers.ReassignSharedPayerAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sharedPayers
  .reassignSharedPayerAccount({
    customerId: "some example string",
    assetId: "some example string",
    body: { customerId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SharedPayerAccountReassignResult
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
| <code>customerId</code> | <code>string</code> | Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets `403`. |
| <code>assetId</code> | <code>string</code> | Asset ID of the AWS account to reassign, as returned by `listSharedPayerAccountMappings`. |
| <code>body</code> | <code>[SharedPayerAccountReassignRequest](src/models/shared-payer-account-reassign-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sharedPayers.reassignSharedPayerAccount(request)`

- **OnSuccess**: <code>[SharedPayerAccountReassignResult](src/models/shared-payer-account-reassign-result.ts)</code>
- **OnError**: throws <code>[SharedPayers.ReassignSharedPayerAccountError](src/resources/shared-payers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sharedPayers.reassignSharedPayerAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SharedPayerAccountReassignResult, SharedPayers.ReassignSharedPayerAccountError&gt;</code>, with `result.value` of type <code>[SharedPayerAccountReassignResult](src/models/shared-payer-account-reassign-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sharing

> Source: [Sharing](src/resources/sharing.ts)

<details>
<summary><code>getResourcePermission(request: Sharing.GetResourcePermissionRequest, options?: RequestOptions): ApiPromise&lt;ResourcePermissionsResponse, Sharing.GetResourcePermissionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the permissions associated with the specified Cloud Analytics resource.
Supports Allocations, Alerts, Budgets, and Reports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sharing.getResourcePermission({
    resourceType: ResourceType.Alerts,
    resourceId: "some example string",
  });
  // TODO: Handle 'response' of type ResourcePermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Sharing.GetResourcePermissionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sharing
  .getResourcePermission({ resourceType: ResourceType.Alerts, resourceId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourcePermissionsResponse
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
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | Resource type. |
| <code>resourceId</code> | <code>string</code> | Resource ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sharing.getResourcePermission(request)`

- **OnSuccess**: <code>[ResourcePermissionsResponse](src/models/resource-permissions-response.ts)</code>
- **OnError**: throws <code>[Sharing.GetResourcePermissionError](src/resources/sharing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sharing.getResourcePermission(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourcePermissionsResponse, Sharing.GetResourcePermissionError&gt;</code>, with `result.value` of type <code>[ResourcePermissionsResponse](src/models/resource-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateResourcePermission(request: Sharing.UpdateResourcePermissionRequest, options?: RequestOptions): ApiPromise&lt;ResourcePermissionsResponse, Sharing.UpdateResourcePermissionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the permissions associated with the specified Cloud Analytics resource.
Supports Allocations, Alerts, Budgets, and Reports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sharing.updateResourcePermission({
    resourceType: ResourceType.Alerts,
    resourceId: "some example string",
  });
  // TODO: Handle 'response' of type ResourcePermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Sharing.UpdateResourcePermissionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sharing
  .updateResourcePermission({ resourceType: ResourceType.Alerts, resourceId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourcePermissionsResponse
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
| <code>resourceType</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | Resource type. |
| <code>resourceId</code> | <code>string</code> | Resource ID. See [Resource IDs](https://developer.doit.com/docs/resource-ids). |
| <code>body?</code> | <code>[SharingV1Request](src/models/sharing-v1-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sharing.updateResourcePermission(request)`

- **OnSuccess**: <code>[ResourcePermissionsResponse](src/models/resource-permissions-response.ts)</code>
- **OnError**: throws <code>[Sharing.UpdateResourcePermissionError](src/resources/sharing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sharing.updateResourcePermission(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourcePermissionsResponse, Sharing.UpdateResourcePermissionError&gt;</code>, with `result.value` of type <code>[ResourcePermissionsResponse](src/models/resource-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Signup

> Source: [Signup](src/resources/signup.ts)

<details>
<summary><code>createSignupRequest(request: Signup.CreateSignupRequestRequest, options?: RequestOptions): ApiPromise&lt;SignupRequest, Signup.CreateSignupRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a Cloud Intelligence trial signup for the organization owning the email domain. Idempotent per Idempotency-Key: a retried create returns the same request. Nothing is provisioned until the admin verifies the request. Human channels (console, web) additionally require a Cloudflare Turnstile token and an accepted Terms of Service version; the emailed 6-digit verification code is then the consent act. Agents should present consentUrl to the organization's admin and poll getSignupRequest.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signup.createSignupRequest({
    idempotencyKey: "some example string",
    body: { email: "user@example.com", companyName: "some example string" },
  });
  // TODO: Handle 'response' of type SignupRequest
} catch (err) {
  // TODO: Handle 'err' of type Signup.CreateSignupRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signup
  .createSignupRequest({
    idempotencyKey: "some example string",
    body: { email: "user@example.com", companyName: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignupRequest
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
| <code>idempotencyKey</code> | <code>string</code> | Caller-chosen key (1-256 characters) that makes retries safe; the same key returns the same request. |
| <code>body</code> | <code>[SignupRequestCreate](src/models/signup-request-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signup.createSignupRequest(request)`

- **OnSuccess**: <code>[SignupRequest](src/models/signup-request.ts)</code>
- **OnError**: throws <code>[Signup.CreateSignupRequestError](src/resources/signup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signup.createSignupRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignupRequest, Signup.CreateSignupRequestError&gt;</code>, with `result.value` of type <code>[SignupRequest](src/models/signup-request.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSignupSession(request: Signup.CreateSignupSessionRequest, options?: RequestOptions): ApiPromise&lt;SignupSession, Signup.CreateSignupSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges the one-time activationToken returned by verifySignupRequest for a Firebase custom token once the request is completed, so the browser that entered the code lands in the new tenant without a second email. The token is bound to the request, single-use and valid for 10 minutes. Sign in with signInWithCustomToken against tenantId, then open consoleUrl.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signup.createSignupSession({
    signupRequestId: "some example string",
    body: { activationToken: "some example string" },
  });
  // TODO: Handle 'response' of type SignupSession
} catch (err) {
  // TODO: Handle 'err' of type Signup.CreateSignupSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signup
  .createSignupSession({
    signupRequestId: "some example string",
    body: { activationToken: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignupSession
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
| <code>signupRequestId</code> | <code>string</code> | Public signup request id (sr_ prefix). |
| <code>body</code> | <code>[SignupSessionRequest](src/models/signup-session-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signup.createSignupSession(request)`

- **OnSuccess**: <code>[SignupSession](src/models/signup-session.ts)</code>
- **OnError**: throws <code>[Signup.CreateSignupSessionError](src/resources/signup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signup.createSignupSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignupSession, Signup.CreateSignupSessionError&gt;</code>, with `result.value` of type <code>[SignupSession](src/models/signup-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSignupRequest(request: Signup.GetSignupRequestRequest, options?: RequestOptions): ApiPromise&lt;SignupRequest, Signup.GetSignupRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current state of a signup request. Poll at the returned pollAfterSeconds cadence; once status is completed the response carries customerId, consoleUrl and signInUrl. The response never includes the requester's email or the verification code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signup.getSignupRequest({ signupRequestId: "some example string" });
  // TODO: Handle 'response' of type SignupRequest
} catch (err) {
  // TODO: Handle 'err' of type Signup.GetSignupRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signup.getSignupRequest({ signupRequestId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignupRequest
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
| <code>signupRequestId</code> | <code>string</code> | Public signup request id (sr_ prefix). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signup.getSignupRequest(request)`

- **OnSuccess**: <code>[SignupRequest](src/models/signup-request.ts)</code>
- **OnError**: throws <code>[Signup.GetSignupRequestError](src/resources/signup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signup.getSignupRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignupRequest, Signup.GetSignupRequestError&gt;</code>, with `result.value` of type <code>[SignupRequest](src/models/signup-request.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resendSignupVerification(request: Signup.ResendSignupVerificationRequest, options?: RequestOptions): ApiPromise&lt;SignupRequest, Signup.ResendSignupVerificationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Emails a fresh 6-digit code to the requester. At most three codes per request, at least 60 seconds apart.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signup.resendSignupVerification({ signupRequestId: "some example string" });
  // TODO: Handle 'response' of type SignupRequest
} catch (err) {
  // TODO: Handle 'err' of type Signup.ResendSignupVerificationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signup
  .resendSignupVerification({ signupRequestId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignupRequest
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
| <code>signupRequestId</code> | <code>string</code> | Public signup request id (sr_ prefix). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signup.resendSignupVerification(request)`

- **OnSuccess**: <code>[SignupRequest](src/models/signup-request.ts)</code>
- **OnError**: throws <code>[Signup.ResendSignupVerificationError](src/resources/signup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signup.resendSignupVerification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignupRequest, Signup.ResendSignupVerificationError&gt;</code>, with `result.value` of type <code>[SignupRequest](src/models/signup-request.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifySignupRequest(request: Signup.VerifySignupRequestRequest, options?: RequestOptions): ApiPromise&lt;SignupRequest, Signup.VerifySignupRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirms ownership of the admin email by entering the 6-digit code that was emailed when the request was created (or resent). Success records consent and starts provisioning; the request moves to consented and then completed. Five wrong codes lock the current code; request a new one with resendSignupVerification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signup.verifySignupRequest({
    signupRequestId: "some example string",
    body: { code: "some example string" },
  });
  // TODO: Handle 'response' of type SignupRequest
} catch (err) {
  // TODO: Handle 'err' of type Signup.VerifySignupRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signup
  .verifySignupRequest({ signupRequestId: "some example string", body: { code: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignupRequest
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
| <code>signupRequestId</code> | <code>string</code> | Public signup request id (sr_ prefix). |
| <code>body</code> | <code>[SignupVerificationCode](src/models/signup-verification-code.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signup.verifySignupRequest(request)`

- **OnSuccess**: <code>[SignupRequest](src/models/signup-request.ts)</code>
- **OnError**: throws <code>[Signup.VerifySignupRequestError](src/resources/signup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signup.verifySignupRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignupRequest, Signup.VerifySignupRequestError&gt;</code>, with `result.value` of type <code>[SignupRequest](src/models/signup-request.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SupportRequests

> Source: [SupportRequests](src/resources/support-requests.ts)

<details>
<summary><code>addTicketTags(request: SupportRequests.AddTicketTagsRequest, options?: RequestOptions): ApiPromise&lt;TagsResponse, SupportRequests.AddTicketTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more tags to an existing support request. The operation is
surgical — only the tags listed in the request are added; existing tags
on the ticket are preserved. Re-adding a tag that is already present is
a successful no-op.

All submitted tags are normalized (trim + lowercase) before storage. For
customers, the system additionally applies a `customer_tag/` namespace
prefix to prevent collisions with internal DoiT process tags. The
response echoes the actual stored strings so callers can verify the
transform.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supportRequests.addTicketTags({
    ticketId: 1,
    body: { tags: ["some example string"] },
  });
  // TODO: Handle 'response' of type TagsResponse
} catch (err) {
  // TODO: Handle 'err' of type SupportRequests.AddTicketTagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supportRequests
  .addTicketTags({ ticketId: 1, body: { tags: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsResponse
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
| <code>ticketId</code> | <code>number</code> | The unique identifier of the support request. |
| <code>body</code> | <code>[TagsRequest](src/models/tags-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supportRequests.addTicketTags(request)`

- **OnSuccess**: <code>[TagsResponse](src/models/tags-response.ts)</code>
- **OnError**: throws <code>[SupportRequests.AddTicketTagsError](src/resources/support-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supportRequests.addTicketTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsResponse, SupportRequests.AddTicketTagsError&gt;</code>, with `result.value` of type <code>[TagsResponse](src/models/tags-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTicket(request: SupportRequests.CreateTicketRequest, options?: RequestOptions): ApiPromise&lt;TicketResponseExtApi, SupportRequests.CreateTicketError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new support request

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supportRequests.createTicket({
    body: {
      ticket: {
        body: "some example string",
        platform: PlatformDoiTSupportRequestsApi.Doit,
        product: "some example string",
        severity: SeverityDoiTSupportRequestsApi.Low,
        subject: "some example string",
      },
    },
  });
  // TODO: Handle 'response' of type TicketResponseExtApi
} catch (err) {
  // TODO: Handle 'err' of type SupportRequests.CreateTicketError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supportRequests
  .createTicket({
    body: {
      ticket: {
        body: "some example string",
        platform: PlatformDoiTSupportRequestsApi.Doit,
        product: "some example string",
        severity: SeverityDoiTSupportRequestsApi.Low,
        subject: "some example string",
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TicketResponseExtApi
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
| <code>body</code> | <code>[TicketCreateFormExtApi](src/models/ticket-create-form-ext-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supportRequests.createTicket(request)`

- **OnSuccess**: <code>[TicketResponseExtApi](src/models/ticket-response-ext-api.ts)</code>
- **OnError**: throws <code>[SupportRequests.CreateTicketError](src/resources/support-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supportRequests.createTicket(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TicketResponseExtApi, SupportRequests.CreateTicketError&gt;</code>, with `result.value` of type <code>[TicketResponseExtApi](src/models/ticket-response-ext-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTicketComment(request: SupportRequests.CreateTicketCommentRequest, options?: RequestOptions): ApiPromise&lt;CommentExtApi, SupportRequests.CreateTicketCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a comment to an existing support request. For customers and
service-account callers, comments are always public, even when
`private` is `true`. Callers authenticated with DoiT employee privileges
can create private internal notes by setting `private` to `true`.
The response always includes `public`, reflecting the effective
visibility after these rules are applied, not merely the requested
privacy. Existing authentication and ticket authorization are unchanged.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supportRequests.createTicketComment({
    ticketId: 1,
    body: { body: "some example string" },
  });
  // TODO: Handle 'response' of type CommentExtApi
} catch (err) {
  // TODO: Handle 'err' of type SupportRequests.CreateTicketCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supportRequests
  .createTicketComment({ ticketId: 1, body: { body: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommentExtApi
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
| <code>ticketId</code> | <code>number</code> | The unique identifier of the support request. |
| <code>body</code> | <code>[CreateCommentRequest](src/models/create-comment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supportRequests.createTicketComment(request)`

- **OnSuccess**: <code>[CommentExtApi](src/models/comment-ext-api.ts)</code>
- **OnError**: throws <code>[SupportRequests.CreateTicketCommentError](src/resources/support-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supportRequests.createTicketComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommentExtApi, SupportRequests.CreateTicketCommentError&gt;</code>, with `result.value` of type <code>[CommentExtApi](src/models/comment-ext-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTicket(request: SupportRequests.GetTicketRequest, options?: RequestOptions): ApiPromise&lt;TicketDetailExtApi, SupportRequests.GetTicketError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a single support request by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supportRequests.getTicket({ ticketId: 1 });
  // TODO: Handle 'response' of type TicketDetailExtApi
} catch (err) {
  // TODO: Handle 'err' of type SupportRequests.GetTicketError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supportRequests.getTicket({ ticketId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TicketDetailExtApi
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
| <code>ticketId</code> | <code>number</code> | The unique identifier of the support request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supportRequests.getTicket(request)`

- **OnSuccess**: <code>[TicketDetailExtApi](src/models/ticket-detail-ext-api.ts)</code>
- **OnError**: throws <code>[SupportRequests.GetTicketError](src/resources/support-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supportRequests.getTicket(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TicketDetailExtApi, SupportRequests.GetTicketError&gt;</code>, with `result.value` of type <code>[TicketDetailExtApi](src/models/ticket-detail-ext-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTicketComments(request: SupportRequests.ListTicketCommentsRequest, options?: RequestOptions): ApiPromise&lt;CommentsResponseExtApi, SupportRequests.ListTicketCommentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all permitted comments on a support request. Customers and
service-account callers receive only public comments; private comment
bodies and attachments are excluded. Callers authenticated with DoiT
employee privileges receive both public and private comments, subject
to existing ticket authorization. Each comment includes `public`,
sourced from Zendesk: `true` means public and `false` means private
(internal). Missing visibility in legacy responses or snapshots means
unknown, not private. All comments are returned in a single response
(no pagination).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supportRequests.listTicketComments({ ticketId: 1 });
  // TODO: Handle 'response' of type CommentsResponseExtApi
} catch (err) {
  // TODO: Handle 'err' of type SupportRequests.ListTicketCommentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supportRequests.listTicketComments({ ticketId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommentsResponseExtApi
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
| <code>ticketId</code> | <code>number</code> | The unique identifier of the support request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supportRequests.listTicketComments(request)`

- **OnSuccess**: <code>[CommentsResponseExtApi](src/models/comments-response-ext-api.ts)</code>
- **OnError**: throws <code>[SupportRequests.ListTicketCommentsError](src/resources/support-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supportRequests.listTicketComments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommentsResponseExtApi, SupportRequests.ListTicketCommentsError&gt;</code>, with `result.value` of type <code>[CommentsResponseExtApi](src/models/comments-response-ext-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTicketTags(request: SupportRequests.ListTicketTagsRequest, options?: RequestOptions): ApiPromise&lt;TagsGetResponse, SupportRequests.ListTicketTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the tags currently set on a support request.

DoiT employee (doer) callers receive the full tag set verbatim,
including internal namespaces (e.g. `tier/*`, `synapse_*`). Customer
callers receive only tags under the `customer_tag/` namespace, with
that prefix stripped (e.g. a tag added as `billing` reads back as
`billing`). Always present; empty array when the caller has no visible
tags.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supportRequests.listTicketTags({ ticketId: 1 });
  // TODO: Handle 'response' of type TagsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type SupportRequests.ListTicketTagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supportRequests.listTicketTags({ ticketId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsGetResponse
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
| <code>ticketId</code> | <code>number</code> | The unique identifier of the support request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supportRequests.listTicketTags(request)`

- **OnSuccess**: <code>[TagsGetResponse](src/models/tags-get-response.ts)</code>
- **OnError**: throws <code>[SupportRequests.ListTicketTagsError](src/resources/support-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supportRequests.listTicketTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsGetResponse, SupportRequests.ListTicketTagsError&gt;</code>, with `result.value` of type <code>[TagsGetResponse](src/models/tags-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTickets(request?: SupportRequests.ListTicketsRequest, options?: RequestOptions): ApiPromise&lt;TicketsList, SupportRequests.ListTicketsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all historical requests that your account has access to.
Tickets are returned in reverse chronological order by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supportRequests.listTickets();
  // TODO: Handle 'response' of type TicketsList
} catch (err) {
  // TODO: Handle 'err' of type SupportRequests.ListTicketsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supportRequests.listTickets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TicketsList
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
| <code>maxResults?</code> | <code>number</code> | The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.<br>**Default**: 100 |
| <code>pageToken?</code> | <code>string</code> | Page token, returned by a previous call, to request the next page of results |
| <code>filter?</code> | <code>string</code> | An expression for filtering the results of the request. The syntax is `key:[<value>]`. e.g: "severity:normal". Multiple filters can be<br>connected using a pipe \|. Note that using different keys in the same<br>filter results in “AND,” while using the same key multiple times in<br>the same filter results in “OR”. |
| <code>minCreationTime?</code> | <code>string</code> | Min value for tickets creation time, in milliseconds since the POSIX epoch. If set, only tickets created after or at this timestamp are returned. |
| <code>maxCreationTime?</code> | <code>string</code> | Max value for tickets creation time, in milliseconds since the POSIX epoch. If set, only tickets created before or at this timestamp are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supportRequests.listTickets(request)`

- **OnSuccess**: <code>[TicketsList](src/models/tickets-list.ts)</code>
- **OnError**: throws <code>[SupportRequests.ListTicketsError](src/resources/support-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supportRequests.listTickets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TicketsList, SupportRequests.ListTicketsError&gt;</code>, with `result.value` of type <code>[TicketsList](src/models/tickets-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTicketTags(request: SupportRequests.RemoveTicketTagsRequest, options?: RequestOptions): ApiPromise&lt;TagsResponse, SupportRequests.RemoveTicketTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes one or more tags from an existing support request. The operation
is surgical — only the tags listed in the request are removed; tags not
listed are preserved. Removing a tag that is not present is a successful
no-op.

For customers, the system applies the same `customer_tag/` namespace
mapping as on add, so a customer who added `my_tag` (stored as
`customer_tag/my_tag`) can remove it by sending `my_tag`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supportRequests.removeTicketTags({
    ticketId: 1,
    body: { tags: ["some example string"] },
  });
  // TODO: Handle 'response' of type TagsResponse
} catch (err) {
  // TODO: Handle 'err' of type SupportRequests.RemoveTicketTagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supportRequests
  .removeTicketTags({ ticketId: 1, body: { tags: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsResponse
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
| <code>ticketId</code> | <code>number</code> | The unique identifier of the support request. |
| <code>body</code> | <code>[TagsRequest](src/models/tags-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supportRequests.removeTicketTags(request)`

- **OnSuccess**: <code>[TagsResponse](src/models/tags-response.ts)</code>
- **OnError**: throws <code>[SupportRequests.RemoveTicketTagsError](src/resources/support-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supportRequests.removeTicketTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsResponse, SupportRequests.RemoveTicketTagsError&gt;</code>, with `result.value` of type <code>[TagsResponse](src/models/tags-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTicket(request: SupportRequests.UpdateTicketRequest, options?: RequestOptions): ApiPromise&lt;SupportV1TicketsResponse, SupportRequests.UpdateTicketError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a support request. Supports setting the request
`status` and/or `assignee`. DoiT employees may set any of `open`,
`pending`, `hold`, or `solved` and may set the `assignee`; customers may
set only `solved` (parity with the console "mark as resolved" action)
and may not set an assignee. `closed` is not settable via the API
(Zendesk auto-closes from `solved`). The `assignee` is a DoiT-employee
email, resolved server-side to a Zendesk agent; an email that does not
resolve to an active agent returns `400`. At least one mutable field
must be present. The response echoes the fields that were applied.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supportRequests.updateTicket({ ticketId: 1, body: {} });
  // TODO: Handle 'response' of type SupportV1TicketsResponse
} catch (err) {
  // TODO: Handle 'err' of type SupportRequests.UpdateTicketError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supportRequests.updateTicket({ ticketId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SupportV1TicketsResponse
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
| <code>ticketId</code> | <code>number</code> | The unique identifier of the support request. |
| <code>body</code> | <code>[SupportV1TicketsRequest](src/models/support-v1-tickets-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supportRequests.updateTicket(request)`

- **OnSuccess**: <code>[SupportV1TicketsResponse](src/models/support-v1-tickets-response.ts)</code>
- **OnError**: throws <code>[SupportRequests.UpdateTicketError](src/resources/support-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supportRequests.updateTicket(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SupportV1TicketsResponse, SupportRequests.UpdateTicketError&gt;</code>, with `result.value` of type <code>[SupportV1TicketsResponse](src/models/support-v1-tickets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](src/resources/templates.ts)

<details>
<summary><code>getCloudflowTemplate2(request: Templates.GetCloudflowTemplate2Request, options?: RequestOptions): ApiPromise&lt;CloudflowTemplate, Templates.GetCloudflowTemplate2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single CloudFlow template by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.getCloudflowTemplate2({ templateId: "some example string" });
  // TODO: Handle 'response' of type CloudflowTemplate
} catch (err) {
  // TODO: Handle 'err' of type Templates.GetCloudflowTemplate2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates
  .getCloudflowTemplate2({ templateId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowTemplate
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
| <code>templateId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.getCloudflowTemplate2(request)`

- **OnSuccess**: <code>[CloudflowTemplate](src/models/cloudflow-template.ts)</code>
- **OnError**: throws <code>[Templates.GetCloudflowTemplate2Error](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.getCloudflowTemplate2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowTemplate, Templates.GetCloudflowTemplate2Error&gt;</code>, with `result.value` of type <code>[CloudflowTemplate](src/models/cloudflow-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCloudflowTemplates2(request?: Templates.ListCloudflowTemplates2Request, options?: RequestOptions): ApiPromise&lt;CloudflowTemplateListResponse, Templates.ListCloudflowTemplates2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the catalogue of available CloudFlow templates (blueprints). Templates are
read-only. To create a flow from a template, use `POST /flows` with a `templateId`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.templates.listCloudflowTemplates2();
  // TODO: Handle 'response' of type CloudflowTemplateListResponse
} catch (err) {
  // TODO: Handle 'err' of type Templates.ListCloudflowTemplates2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.templates.listCloudflowTemplates2().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloudflowTemplateListResponse
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
| <code>maxResults?</code> | <code>number</code> | Maximum number of templates to return (1–500). Defaults to 50.<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | Opaque cursor for the next page, taken from `pageToken` in the previous response. Omit to start from the beginning. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.templates.listCloudflowTemplates2(request)`

- **OnSuccess**: <code>[CloudflowTemplateListResponse](src/models/cloudflow-template-list-response.ts)</code>
- **OnError**: throws <code>[Templates.ListCloudflowTemplates2Error](src/resources/templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.templates.listCloudflowTemplates2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloudflowTemplateListResponse, Templates.ListCloudflowTemplates2Error&gt;</code>, with `result.value` of type <code>[CloudflowTemplateListResponse](src/models/cloudflow-template-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>cancelInvite(request: Users.CancelInviteRequest, options?: RequestOptions): ApiPromise&lt;CancelInviteResponse, Users.CancelInviteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks the invite as `Cancelled` and invalidates the invite token so any outstanding email
links stop working. The invite document is retained (soft cancel) — the user row remains
visible in `GET /iam/v1/users` with `inviteStatus: Cancelled`. Use `DELETE /iam/v1/users/{id}`
to fully remove the record.

Returns `404` if no invite exists for the given ID, and `409` if the invite is already cancelled.

Requires `usersManager` permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.cancelInvite({
    id: "some example string",
    idempotencyKey: "some example string",
  });
  // TODO: Handle 'response' of type CancelInviteResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.CancelInviteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .cancelInvite({ id: "some example string", idempotencyKey: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInviteResponse
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
| <code>id</code> | <code>string</code> | The unique ID of the invited user. |
| <code>dryRun?</code> | <code>boolean</code> | If `true`, validates and simulates the operation without committing changes.<br>The response shape is identical to a real execution.<br>**Default**: false |
| <code>idempotencyKey</code> | <code>string</code> | Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).<br>Re-submitting the same key with the same request returns the cached response without<br>re-executing side effects. The server retains the key for at least 24 hours. |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.cancelInvite(request)`

- **OnSuccess**: <code>[CancelInviteResponse](src/models/cancel-invite-response.ts)</code>
- **OnError**: throws <code>[Users.CancelInviteError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.cancelInvite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInviteResponse, Users.CancelInviteError&gt;</code>, with `result.value` of type <code>[CancelInviteResponse](src/models/cancel-invite-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUser(request: Users.DeleteUserRequest, options?: RequestOptions): ApiPromise&lt;DeleteUserResponse, Users.DeleteUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.deleteUser({ id: "some example string" });
  // TODO: Handle 'response' of type DeleteUserResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.DeleteUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.deleteUser({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteUserResponse
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
| <code>id</code> | <code>string</code> | The unique ID of the user to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.deleteUser(request)`

- **OnSuccess**: <code>[DeleteUserResponse](src/models/delete-user-response.ts)</code>
- **OnError**: throws <code>[Users.DeleteUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.deleteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteUserResponse, Users.DeleteUserError&gt;</code>, with `result.value` of type <code>[DeleteUserResponse](src/models/delete-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inviteUser(request: Users.InviteUserRequestParams, options?: RequestOptions): ApiPromise&lt;InviteResponse, Users.InviteUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invites a new user to the organization with specified role and organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.inviteUser({ body: { email: "user@example.com" } });
  // TODO: Handle 'response' of type InviteResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.InviteUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.inviteUser({ body: { email: "user@example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InviteResponse
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
| <code>body</code> | <code>[InviteUserRequest](src/models/invite-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.inviteUser(request)`

- **OnSuccess**: <code>[InviteResponse](src/models/invite-response.ts)</code>
- **OnError**: throws <code>[Users.InviteUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.inviteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InviteResponse, Users.InviteUserError&gt;</code>, with `result.value` of type <code>[InviteResponse](src/models/invite-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUsers(request?: Users.ListUsersRequest, options?: RequestOptions): ApiPromise&lt;ListUsersResponseBody, Users.ListUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of users in the organization, including both active users and invited users.
When the `email` query parameter is provided, returns only the user matching that email address.
If no user is found for the given email, an empty list is returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.listUsers();
  // TODO: Handle 'response' of type ListUsersResponseBody
} catch (err) {
  // TODO: Handle 'err' of type Users.ListUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.listUsers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListUsersResponseBody
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
| <code>email?</code> | <code>string</code> | Filter by exact email address. When provided, returns at most one user matching this email. The email is matched case-insensitively. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.listUsers(request)`

- **OnSuccess**: <code>[ListUsersResponseBody](src/models/list-users-response-body.ts)</code>
- **OnError**: throws <code>[Users.ListUsersError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.listUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListUsersResponseBody, Users.ListUsersError&gt;</code>, with `result.value` of type <code>[ListUsersResponseBody](src/models/list-users-response-body.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resendInvite(request: Users.ResendInviteRequest, options?: RequestOptions): ApiPromise&lt;ResendInviteResponse, Users.ResendInviteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets the invite expiry to 48 hours from now, invalidates the previous invite token (so
old email links stop working), and triggers a fresh invitation email. Works on invites in
any state including `Cancelled` — resending a cancelled invite reactivates it to `Pending`.

Returns `404` if no invite exists for the given ID (never created, or already accepted and removed).

Requires `usersManager` permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.resendInvite({
    id: "some example string",
    idempotencyKey: "some example string",
  });
  // TODO: Handle 'response' of type ResendInviteResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.ResendInviteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .resendInvite({ id: "some example string", idempotencyKey: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResendInviteResponse
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
| <code>id</code> | <code>string</code> | The unique ID of the invited user. |
| <code>dryRun?</code> | <code>boolean</code> | If `true`, validates and simulates the operation without committing changes.<br>The response shape is identical to a real execution.<br>**Default**: false |
| <code>idempotencyKey</code> | <code>string</code> | Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).<br>Re-submitting the same key with the same request returns the cached response without<br>re-executing side effects. The server retains the key for at least 24 hours. |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.resendInvite(request)`

- **OnSuccess**: <code>[ResendInviteResponse](src/models/resend-invite-response.ts)</code>
- **OnError**: throws <code>[Users.ResendInviteError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.resendInvite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResendInviteResponse, Users.ResendInviteError&gt;</code>, with `result.value` of type <code>[ResendInviteResponse](src/models/resend-invite-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUser(request: Users.UpdateUserRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateUserResponse, Users.UpdateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates user information, including name, job function, phone, language, and role.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.updateUser({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type UpdateUserResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.UpdateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.updateUser({ id: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateUserResponse
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
| <code>id</code> | <code>string</code> | The unique ID of the user to update. |
| <code>body</code> | <code>[UpdateUserRequest](src/models/update-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.updateUser(request)`

- **OnSuccess**: <code>[UpdateUserResponse](src/models/update-user-response.ts)</code>
- **OnError**: throws <code>[Users.UpdateUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.updateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateUserResponse, Users.UpdateUserError&gt;</code>, with `result.value` of type <code>[UpdateUserResponse](src/models/update-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WidgetsBeta

> Source: [WidgetsBeta](src/resources/widgets-beta.ts)

<details>
<summary><code>getWidget(request: WidgetsBeta.GetWidgetRequest, options?: RequestOptions): ApiPromise&lt;Widget, WidgetsBeta.GetWidgetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest precomputed cached result for one widget. This read does not refresh or
recompute the widget synchronously.

Use either the customer-specific `id` returned by the list-widgets operation or one of these
stable aliases:

- `current-month-cloud-spend` — total cloud spend accumulated during the current calendar month.
- `current-month-cloud-forecast` — forecast of total cloud spend for the current calendar month.

The two concrete alias requests are:

- `GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-spend`
- `GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-forecast`

Authenticate with `Authorization: Bearer `. Omit `X-Tenant-Id` when the credential
resolves to one customer. When the credential can act on multiple customers, send
`X-Tenant-Id: ` to select the customer. A `403` response means the caller or
selected customer is not authorized or entitled to use this API.

The result's `period.endTime` is exclusive. Monetary `amount` values are decimal strings and
`currency` values are ISO 4217 currency codes. `monthToMonthGrowthPercentage` and
`monthToMonthGrowthAmount` are both `null` when no comparable prior-period value exists.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.widgetsBeta.getWidget({
    widgetId: "current-month-cloud-spend",
    xTenantId: "Kp2mN8qL4vR0sT1wX3yZ",
  });
  // TODO: Handle 'response' of type Widget
} catch (err) {
  // TODO: Handle 'err' of type WidgetsBeta.GetWidgetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.widgetsBeta
  .getWidget({ widgetId: "current-month-cloud-spend", xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Widget
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
| <code>widgetId</code> | <code>string</code> | Stable widget alias or customer-specific widget ID returned by listWidgets. Use<br>current-month-cloud-spend for current-month accumulated spend or<br>current-month-cloud-forecast for the current-month forecast. |
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.widgetsBeta.getWidget(request)`

- **OnSuccess**: <code>[Widget](src/models/widget.ts)</code>
- **OnError**: throws <code>[WidgetsBeta.GetWidgetError](src/resources/widgets-beta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.widgetsBeta.getWidget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Widget, WidgetsBeta.GetWidgetError&gt;</code>, with `result.value` of type <code>[Widget](src/models/widget.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWidgets(request?: WidgetsBeta.ListWidgetsRequest, options?: RequestOptions): ApiPromise&lt;WidgetList, WidgetsBeta.ListWidgetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete catalogue of preset widgets supported by the Analytics Widgets API.
Each entry contains a customer-specific `id` and a stable customer-facing `alias`; either
value can be passed to the get-widget operation. An `id` can vary by customer or service
tier, while an `alias` remains stable.

Authenticate with `Authorization: Bearer `. Omit `X-Tenant-Id` when the credential
resolves to one customer. When the credential can act on multiple customers, send
`X-Tenant-Id: ` to select the customer. A `403` response means the caller or
selected customer is not authorized or entitled to use this API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.widgetsBeta.listWidgets({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" });
  // TODO: Handle 'response' of type WidgetList
} catch (err) {
  // TODO: Handle 'err' of type WidgetsBeta.ListWidgetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.widgetsBeta.listWidgets({ xTenantId: "Kp2mN8qL4vR0sT1wX3yZ" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WidgetList
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
| <code>xTenantId?</code> | <code>string</code> | Customer (tenant) ID for the request. This is separate from authentication: you still pass your personal or service account API token in the `Authorization` header (`Bearer <token>`). See [Get Started](https://developer.doit.com/docs/start).<br><br>**When to omit (most callers):** If your personal or service account token belongs to a single customer, omit this header. The API resolves that customer from the token.<br><br>**When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to the customer ID you want to act on. A service account can select an active direct or nested descendant of its home customer; the endpoint's normal permissions, entitlements, and resource-ownership checks still apply. A service-account target outside that customer subtree returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query parameter, which only applies to legacy API keys and is ignored by personal and service account tokens. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.widgetsBeta.listWidgets(request)`

- **OnSuccess**: <code>[WidgetList](src/models/widget-list.ts)</code>
- **OnError**: throws <code>[WidgetsBeta.ListWidgetsError](src/resources/widgets-beta.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.widgetsBeta.listWidgets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WidgetList, WidgetsBeta.ListWidgetsError&gt;</code>, with `result.value` of type <code>[WidgetList](src/models/widget-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DoiTError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

