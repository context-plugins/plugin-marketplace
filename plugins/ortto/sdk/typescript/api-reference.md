# Reference

> Source: [OrttoClient](src/client.ts)

## Accounts

> Source: [Accounts](src/resources/accounts.ts)

<details>
<summary><code>mergeAccounts(request: Accounts.MergeAccountsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Accounts.MergeAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates accounts (previously called organizations) using the same merge semantics as people.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.accounts.mergeAccounts({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Accounts.MergeAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.mergeAccounts({ body: {} }).asApiResult();
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
| <code>body</code> | <code>[AccountsMergeRequest](src/models/accounts-merge-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.mergeAccounts(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Accounts.MergeAccountsError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.mergeAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Accounts.MergeAccountsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OrttoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Activities

> Source: [Activities](src/resources/activities.ts)

<details>
<summary><code>createActivities(request: Activities.CreateActivitiesRequest, options?: RequestOptions): ApiPromise&lt;undefined, Activities.CreateActivitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends up to 100 custom activity events in a single payload (max 2 MB). Each activity references a custom activity definition and may create or update the associated person via merge_by or person_id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.activities.createActivities({ body: { activities: [{}] } });
} catch (err) {
  // TODO: Handle 'err' of type Activities.CreateActivitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.activities.createActivities({ body: { activities: [{}] } }).asApiResult();
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
| <code>body</code> | <code>[ActivitiesCreateRequest](src/models/activities-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.activities.createActivities(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Activities.CreateActivitiesError](src/resources/activities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.activities.createActivities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Activities.CreateActivitiesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OrttoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](src/resources/campaigns.ts)

<details>
<summary><code>getCampaignCalendar(request: Campaigns.GetCampaignCalendarRequest, options?: RequestOptions): ApiPromise&lt;undefined, Campaigns.GetCampaignCalendarError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.campaigns.getCampaignCalendar({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.GetCampaignCalendarError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns.getCampaignCalendar({ body: {} }).asApiResult();
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
| <code>body</code> | <code>[CampaignCalendarRequest](src/models/campaign-calendar-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.getCampaignCalendar(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Campaigns.GetCampaignCalendarError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.getCampaignCalendar(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Campaigns.GetCampaignCalendarError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OrttoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCampaignReport(request: Campaigns.GetCampaignReportRequest, options?: RequestOptions): ApiPromise&lt;undefined, Campaigns.GetCampaignReportError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.campaigns.getCampaignReport({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.GetCampaignReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns.getCampaignReport({ body: {} }).asApiResult();
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
| <code>body</code> | <code>[CampaignReportsGetRequest](src/models/campaign-reports-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.getCampaignReport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Campaigns.GetCampaignReportError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.getCampaignReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Campaigns.GetCampaignReportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OrttoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## People

> Source: [People](src/resources/people.ts)

<details>
<summary><code>deletePeople(request: People.DeletePeopleRequest, options?: RequestOptions): ApiPromise&lt;undefined, People.DeletePeopleError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.people.deletePeople({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type People.DeletePeopleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.deletePeople({ body: {} }).asApiResult();
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
| <code>body</code> | <code>[PersonDeleteRequest](src/models/person-delete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.deletePeople(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[People.DeletePeopleError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.deletePeople(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, People.DeletePeopleError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OrttoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPeople(request: People.GetPeopleRequest, options?: RequestOptions): ApiPromise&lt;PersonGetResponse, People.GetPeopleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves people matching a filter, with the requested fields, sort order, limit, and offset for pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.people.getPeople({ body: {} });
  // TODO: Handle 'response' of type PersonGetResponse
} catch (err) {
  // TODO: Handle 'err' of type People.GetPeopleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.getPeople({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PersonGetResponse
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
| <code>body</code> | <code>[PersonGetRequest](src/models/person-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.getPeople(request)`

- **OnSuccess**: <code>[PersonGetResponse](src/models/person-get-response.ts)</code>
- **OnError**: throws <code>[People.GetPeopleError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.getPeople(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PersonGetResponse, People.GetPeopleError&gt;</code>, with `result.value` of type <code>[PersonGetResponse](src/models/person-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OrttoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPeopleByIds(request: People.GetPeopleByIdsRequest, options?: RequestOptions): ApiPromise&lt;PersonGetResponse, People.GetPeopleByIdsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.people.getPeopleByIds({ body: {} });
  // TODO: Handle 'response' of type PersonGetResponse
} catch (err) {
  // TODO: Handle 'err' of type People.GetPeopleByIdsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.getPeopleByIds({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PersonGetResponse
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
| <code>body</code> | <code>[PersonGetByIdsRequest](src/models/person-get-by-ids-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.getPeopleByIds(request)`

- **OnSuccess**: <code>[PersonGetResponse](src/models/person-get-response.ts)</code>
- **OnError**: throws <code>[People.GetPeopleByIdsError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.getPeopleByIds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PersonGetResponse, People.GetPeopleByIdsError&gt;</code>, with `result.value` of type <code>[PersonGetResponse](src/models/person-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OrttoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mergePeople(request: People.MergePeopleRequest, options?: RequestOptions): ApiPromise&lt;PersonMergeResponse, People.MergePeopleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates up to 100 people in a single request. Matching of existing records is controlled with merge_by, merge_strategy, and find_strategy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.people.mergePeople({
    body: { people: [{}], mergeBy: ["some example string"] },
  });
  // TODO: Handle 'response' of type PersonMergeResponse
} catch (err) {
  // TODO: Handle 'err' of type People.MergePeopleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people
  .mergePeople({ body: { people: [{}], mergeBy: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PersonMergeResponse
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
| <code>body</code> | <code>[PersonMergeRequest](src/models/person-merge-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.mergePeople(request)`

- **OnSuccess**: <code>[PersonMergeResponse](src/models/person-merge-response.ts)</code>
- **OnError**: throws <code>[People.MergePeopleError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.mergePeople(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PersonMergeResponse, People.MergePeopleError&gt;</code>, with `result.value` of type <code>[PersonMergeResponse](src/models/person-merge-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OrttoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/resources/tags.ts)

<details>
<summary><code>getTags(request?: Tags.GetTagsRequest, options?: RequestOptions): ApiPromise&lt;TagsGetResponse, Tags.GetTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the tags configured on the account. An empty body returns all tags; an optional search term filters the result.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.getTags();
  // TODO: Handle 'response' of type TagsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Tags.GetTagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.getTags().asApiResult();
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
| <code>body?</code> | <code>[TagsGetRequest](src/models/tags-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.getTags(request)`

- **OnSuccess**: <code>[TagsGetResponse](src/models/tags-get-response.ts)</code>
- **OnError**: throws <code>[Tags.GetTagsError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.getTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsGetResponse, Tags.GetTagsError&gt;</code>, with `result.value` of type <code>[TagsGetResponse](src/models/tags-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OrttoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Transactional

> Source: [Transactional](src/resources/transactional.ts)

<details>
<summary><code>sendTransactionalEmail(request: Transactional.SendTransactionalEmailRequest, options?: RequestOptions): ApiPromise&lt;undefined, Transactional.SendTransactionalEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a transactional email. Set non_transactional to true to send as a marketing email. Up to 5 base64-encoded attachments are supported. A successful request returns a 202 Accepted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transactional.sendTransactionalEmail({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Transactional.SendTransactionalEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactional.sendTransactionalEmail({ body: {} }).asApiResult();
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
| <code>body</code> | <code>[TransactionalSendRequest](src/models/transactional-send-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactional.sendTransactionalEmail(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Transactional.SendTransactionalEmailError](src/resources/transactional.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactional.sendTransactionalEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Transactional.SendTransactionalEmailError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OrttoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendTransactionalSms(request: Transactional.SendTransactionalSmsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Transactional.SendTransactionalSmsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transactional.sendTransactionalSms({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Transactional.SendTransactionalSmsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactional.sendTransactionalSms({ body: {} }).asApiResult();
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
| <code>body</code> | <code>[TransactionalSendSmsRequest](src/models/transactional-send-sms-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactional.sendTransactionalSms(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Transactional.SendTransactionalSmsError](src/resources/transactional.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactional.sendTransactionalSms(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Transactional.SendTransactionalSmsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OrttoError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

