# Reference

> Source: [GleanClientApiClient](src/client.ts)

## ActivityApi

> Source: [ActivityApi](src/resources/activity-api.ts)

<details>
<summary><code>activity(request: ActivityApi.ActivityRequest, options?: RequestOptions): ApiPromise&lt;undefined, ActivityApi.ActivityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report user activity that occurs on indexed documents such as viewing or editing. This signal improves search quality.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.activityApi.activity({
    body: {
      events: [
        {
          action: Action.View,
          timestamp: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
          url: "some example string",
        },
      ],
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type ActivityApi.ActivityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.activityApi.activity({
  body: {
    events: [
      {
        action: Action.View,
        timestamp: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        url: "some example string",
      },
    ],
  },
}).asApiResult();
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
| <code>body</code> | <code>[Activity](src/models/activity.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.activityApi.activity(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ActivityApi.ActivityError](src/resources/activity-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.activityApi.activity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ActivityApi.ActivityError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>feedback(request: ActivityApi.FeedbackRequest, options?: RequestOptions): ApiPromise&lt;undefined, ActivityApi.FeedbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report events that happen to results within a Glean client UI, such as search result views and clicks.  This signal improves search quality.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.activityApi.feedback();
} catch (err) {
  // TODO: Handle 'err' of type ActivityApi.FeedbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.activityApi.feedback().asApiResult();
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
| <code>feedback?</code> | <code>string</code> | A URL encoded versions of Feedback. This is useful for requests. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body?</code> | <code>[Feedback](src/models/feedback.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.activityApi.feedback(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ActivityApi.FeedbackError](src/resources/activity-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.activityApi.feedback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ActivityApi.FeedbackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Announcements

> Source: [Announcements](src/resources/announcements.ts)

<details>
<summary><code>createannouncement(request: Announcements.CreateannouncementRequest, options?: RequestOptions): ApiPromise&lt;Announcement, Announcements.CreateannouncementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a textual announcement visible to some set of users based on department and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.announcements.createannouncement({
    body: {
      startTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      endTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      title: "some example string",
    },
  });
  // TODO: Handle 'response' of type Announcement
} catch (err) {
  // TODO: Handle 'err' of type Announcements.CreateannouncementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.announcements.createannouncement({
  body: {
    startTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    endTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    title: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Announcement
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[CreateAnnouncementRequest](src/models/create-announcement-request.ts)</code> | Announcement content |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.announcements.createannouncement(request)`

- **OnSuccess**: <code>[Announcement](src/models/announcement.ts)</code>
- **OnError**: throws <code>[Announcements.CreateannouncementError](src/resources/announcements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.announcements.createannouncement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Announcement, Announcements.CreateannouncementError&gt;</code>, with `result.value` of type <code>[Announcement](src/models/announcement.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteannouncement(request: Announcements.DeleteannouncementRequest, options?: RequestOptions): ApiPromise&lt;undefined, Announcements.DeleteannouncementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing user-generated announcement.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.announcements.deleteannouncement({ body: { id: 1 } });
} catch (err) {
  // TODO: Handle 'err' of type Announcements.DeleteannouncementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.announcements.deleteannouncement({ body: { id: 1 } }).asApiResult();
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[DeleteAnnouncementRequest](src/models/delete-announcement-request.ts)</code> | Delete announcement request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.announcements.deleteannouncement(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Announcements.DeleteannouncementError](src/resources/announcements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.announcements.deleteannouncement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Announcements.DeleteannouncementError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateannouncement(request: Announcements.UpdateannouncementRequest, options?: RequestOptions): ApiPromise&lt;Announcement, Announcements.UpdateannouncementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a textual announcement visible to some set of users based on department and location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.announcements.updateannouncement({
    body: {
      startTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      endTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      title: "some example string",
      id: 1,
    },
  });
  // TODO: Handle 'response' of type Announcement
} catch (err) {
  // TODO: Handle 'err' of type Announcements.UpdateannouncementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.announcements.updateannouncement({
  body: {
    startTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    endTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    title: "some example string",
    id: 1,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Announcement
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[UpdateAnnouncementRequest](src/models/update-announcement-request.ts)</code> | Announcement content. Id need to be specified for the announcement. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.announcements.updateannouncement(request)`

- **OnSuccess**: <code>[Announcement](src/models/announcement.ts)</code>
- **OnError**: throws <code>[Announcements.UpdateannouncementError](src/resources/announcements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.announcements.updateannouncement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Announcement, Announcements.UpdateannouncementError&gt;</code>, with `result.value` of type <code>[Announcement](src/models/announcement.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Answers

> Source: [Answers](src/resources/answers.ts)

<details>
<summary><code>createanswer(request: Answers.CreateanswerRequest, options?: RequestOptions): ApiPromise&lt;Answer, Answers.CreateanswerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a user-generated Answer that contains a question and answer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.answers.createanswer({ body: { data: {} } });
  // TODO: Handle 'response' of type Answer
} catch (err) {
  // TODO: Handle 'err' of type Answers.CreateanswerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.answers.createanswer({ body: { data: {} } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Answer
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[CreateAnswerRequest](src/models/create-answer-request.ts)</code> | CreateAnswer request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.answers.createanswer(request)`

- **OnSuccess**: <code>[Answer](src/models/answer.ts)</code>
- **OnError**: throws <code>[Answers.CreateanswerError](src/resources/answers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.answers.createanswer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Answer, Answers.CreateanswerError&gt;</code>, with `result.value` of type <code>[Answer](src/models/answer.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteanswer(request: Answers.DeleteanswerRequest, options?: RequestOptions): ApiPromise&lt;undefined, Answers.DeleteanswerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing user-generated Answer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.answers.deleteanswer({ body: { id: 1 } });
} catch (err) {
  // TODO: Handle 'err' of type Answers.DeleteanswerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.answers.deleteanswer({ body: { id: 1 } }).asApiResult();
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[DeleteAnswerRequest](src/models/delete-answer-request.ts)</code> | DeleteAnswer request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.answers.deleteanswer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Answers.DeleteanswerError](src/resources/answers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.answers.deleteanswer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Answers.DeleteanswerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editanswer(request: Answers.EditanswerRequest, options?: RequestOptions): ApiPromise&lt;Answer, Answers.EditanswerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing user-generated Answer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.answers.editanswer({ body: { id: 1 } });
  // TODO: Handle 'response' of type Answer
} catch (err) {
  // TODO: Handle 'err' of type Answers.EditanswerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.answers.editanswer({ body: { id: 1 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Answer
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[EditAnswerRequest](src/models/edit-answer-request.ts)</code> | EditAnswer request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.answers.editanswer(request)`

- **OnSuccess**: <code>[Answer](src/models/answer.ts)</code>
- **OnError**: throws <code>[Answers.EditanswerError](src/resources/answers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.answers.editanswer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Answer, Answers.EditanswerError&gt;</code>, with `result.value` of type <code>[Answer](src/models/answer.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getanswer(request: Answers.GetanswerRequest, options?: RequestOptions): ApiPromise&lt;GetAnswerResponse, Answers.GetanswerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read the details of a particular Answer given its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.answers.getanswer({ body: {} });
  // TODO: Handle 'response' of type GetAnswerResponse
} catch (err) {
  // TODO: Handle 'err' of type Answers.GetanswerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.answers.getanswer({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetAnswerResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[GetAnswerRequest](src/models/get-answer-request.ts)</code> | GetAnswer request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.answers.getanswer(request)`

- **OnSuccess**: <code>[GetAnswerResponse](src/models/get-answer-response.ts)</code>
- **OnError**: throws <code>[Answers.GetanswerError](src/resources/answers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.answers.getanswer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetAnswerResponse, Answers.GetanswerError&gt;</code>, with `result.value` of type <code>[GetAnswerResponse](src/models/get-answer-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listanswers(request: Answers.ListanswersRequest, options?: RequestOptions): ApiPromise&lt;ListAnswersResponse, Answers.ListanswersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Answers created by the current user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.answers.listanswers({ body: {} });
  // TODO: Handle 'response' of type ListAnswersResponse
} catch (err) {
  // TODO: Handle 'err' of type Answers.ListanswersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.answers.listanswers({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAnswersResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[ListAnswersRequest](src/models/list-answers-request.ts)</code> | ListAnswers request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.answers.listanswers(request)`

- **OnSuccess**: <code>[ListAnswersResponse](src/models/list-answers-response.ts)</code>
- **OnError**: throws <code>[Answers.ListanswersError](src/resources/answers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.answers.listanswers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAnswersResponse, Answers.ListanswersError&gt;</code>, with `result.value` of type <code>[ListAnswersResponse](src/models/list-answers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Authentication

> Source: [Authentication](src/resources/authentication.ts)

<details>
<summary><code>checkdatasourceauth(request: Authentication.CheckdatasourceauthRequest, options?: RequestOptions): ApiPromise&lt;CheckDatasourceAuthResponse, Authentication.CheckdatasourceauthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all datasource instances that require per-user OAuth authorization
for the authenticated user, along with a transient auth token that can be
appended to auth URLs to complete OAuth flows.

Clients construct the full OAuth URL by combining the backend base URL,
the `authUrlRelativePath` from each instance, and the transient auth token:
`<backend>/<authUrlRelativePath>?transient_auth_token=<token>`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authentication.checkdatasourceauth();
  // TODO: Handle 'response' of type CheckDatasourceAuthResponse
} catch (err) {
  // TODO: Handle 'err' of type Authentication.CheckdatasourceauthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authentication.checkdatasourceauth().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckDatasourceAuthResponse
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
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.checkdatasourceauth(request)`

- **OnSuccess**: <code>[CheckDatasourceAuthResponse](src/models/check-datasource-auth-response.ts)</code>
- **OnError**: throws <code>[Authentication.CheckdatasourceauthError](src/resources/authentication.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authentication.checkdatasourceauth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckDatasourceAuthResponse, Authentication.CheckdatasourceauthError&gt;</code>, with `result.value` of type <code>[CheckDatasourceAuthResponse](src/models/check-datasource-auth-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createauthtoken(request: Authentication.CreateauthtokenRequest, options?: RequestOptions): ApiPromise&lt;CreateAuthTokenResponse, Authentication.CreateauthtokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an authentication token for the authenticated user. These are
specifically intended to be used with the [Web SDK](https://developers.glean.com/web).

Note: The tokens generated from this endpoint are **not** valid tokens
for use with the Client API (e.g. `/rest/api/v1/*`).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authentication.createauthtoken();
  // TODO: Handle 'response' of type CreateAuthTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Authentication.CreateauthtokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authentication.createauthtoken().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateAuthTokenResponse
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
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.createauthtoken(request)`

- **OnSuccess**: <code>[CreateAuthTokenResponse](src/models/create-auth-token-response.ts)</code>
- **OnError**: throws <code>[Authentication.CreateauthtokenError](src/resources/authentication.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authentication.createauthtoken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateAuthTokenResponse, Authentication.CreateauthtokenError&gt;</code>, with `result.value` of type <code>[CreateAuthTokenResponse](src/models/create-auth-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ChatApi

> Source: [ChatApi](src/resources/chat-api.ts)

<details>
<summary><code>chat(request: ChatApi.ChatRequestParams, options?: RequestOptions): ApiPromise&lt;ChatResponse, ChatApi.ChatError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Have a conversation with Glean AI.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chatApi.chat({
    body: {
      messages: [
        {
          author: Author.User,
          fragments: [{ text: "What are the company holidays this year?" }],
          messageType: MessageType.Content,
        },
      ],
    },
  });
  // TODO: Handle 'response' of type ChatResponse
} catch (err) {
  // TODO: Handle 'err' of type ChatApi.ChatError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chatApi.chat({
  body: {
    messages: [
      {
        author: Author.User,
        fragments: [{ text: "What are the company holidays this year?" }],
        messageType: MessageType.Content,
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[ChatRequest](src/models/chat-request.ts)</code> | Includes chat history for Glean AI to respond to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chatApi.chat(request)`

- **OnSuccess**: <code>[ChatResponse](src/models/chat-response.ts)</code>
- **OnError**: throws <code>[ChatApi.ChatError](src/resources/chat-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chatApi.chat(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatResponse, ChatApi.ChatError&gt;</code>, with `result.value` of type <code>[ChatResponse](src/models/chat-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteallchats(request: ChatApi.DeleteallchatsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChatApi.DeleteallchatsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all saved Chats a user has had and all their contained conversational content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.chatApi.deleteallchats();
} catch (err) {
  // TODO: Handle 'err' of type ChatApi.DeleteallchatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chatApi.deleteallchats().asApiResult();
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chatApi.deleteallchats(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ChatApi.DeleteallchatsError](src/resources/chat-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chatApi.deleteallchats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ChatApi.DeleteallchatsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletechatfiles(request: ChatApi.DeletechatfilesRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChatApi.DeletechatfilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete files uploaded by a user for Chat.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.chatApi.deletechatfiles({ body: { fileIds: ["some example string"] } });
} catch (err) {
  // TODO: Handle 'err' of type ChatApi.DeletechatfilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chatApi.deletechatfiles({
  body: { fileIds: ["some example string"] },
}).asApiResult();
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[DeleteChatFilesRequest](src/models/delete-chat-files-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chatApi.deletechatfiles(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ChatApi.DeletechatfilesError](src/resources/chat-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chatApi.deletechatfiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ChatApi.DeletechatfilesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletechats(request: ChatApi.DeletechatsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ChatApi.DeletechatsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes saved Chats and all their contained conversational content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.chatApi.deletechats({ body: { ids: ["some example string"] } });
} catch (err) {
  // TODO: Handle 'err' of type ChatApi.DeletechatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chatApi.deletechats({ body: { ids: ["some example string"] } }).asApiResult();
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[DeleteChatsRequest](src/models/delete-chats-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chatApi.deletechats(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ChatApi.DeletechatsError](src/resources/chat-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chatApi.deletechats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ChatApi.DeletechatsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChatFile(request: ChatApi.GetChatFileRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, ChatApi.GetChatFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the raw content of a file generated or uploaded during a chat session (for example, an image produced by the assistant). Returns the file bytes with a Content-Type header matching the file's MIME type.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chatApi.getChatFile({ fileId: "some example string" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ChatApi.GetChatFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chatApi.getChatFile({ fileId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>fileId</code> | <code>string</code> | Identifier of the chat file to download. |
| <code>preview?</code> | <code>boolean</code> | When true and the file is a PDF, the response is served inline (Content-Disposition: inline) instead of as an attachment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chatApi.getChatFile(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ChatApi.GetChatFileError](src/resources/chat-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chatApi.getChatFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ChatApi.GetChatFileError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getchat(request: ChatApi.GetchatRequest, options?: RequestOptions): ApiPromise&lt;GetChatResponse, ChatApi.GetchatError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the chat history between Glean Assistant and the user for a given Chat.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chatApi.getchat({ body: { id: "some example string" } });
  // TODO: Handle 'response' of type GetChatResponse
} catch (err) {
  // TODO: Handle 'err' of type ChatApi.GetchatError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chatApi.getchat({ body: { id: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetChatResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[GetChatRequest](src/models/get-chat-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chatApi.getchat(request)`

- **OnSuccess**: <code>[GetChatResponse](src/models/get-chat-response.ts)</code>
- **OnError**: throws <code>[ChatApi.GetchatError](src/resources/chat-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chatApi.getchat(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetChatResponse, ChatApi.GetchatError&gt;</code>, with `result.value` of type <code>[GetChatResponse](src/models/get-chat-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getchatapplication(request: ChatApi.GetchatapplicationRequest, options?: RequestOptions): ApiPromise&lt;GetChatApplicationResponse, ChatApi.GetchatapplicationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the Chat application details for the specified application ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chatApi.getchatapplication({ body: { id: "some example string" } });
  // TODO: Handle 'response' of type GetChatApplicationResponse
} catch (err) {
  // TODO: Handle 'err' of type ChatApi.GetchatapplicationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chatApi.getchatapplication({ body: { id: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetChatApplicationResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[GetChatApplicationRequest](src/models/get-chat-application-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chatApi.getchatapplication(request)`

- **OnSuccess**: <code>[GetChatApplicationResponse](src/models/get-chat-application-response.ts)</code>
- **OnError**: throws <code>[ChatApi.GetchatapplicationError](src/resources/chat-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chatApi.getchatapplication(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetChatApplicationResponse, ChatApi.GetchatapplicationError&gt;</code>, with `result.value` of type <code>[GetChatApplicationResponse](src/models/get-chat-application-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getchatfiles(request: ChatApi.GetchatfilesRequest, options?: RequestOptions): ApiPromise&lt;GetChatFilesResponse, ChatApi.GetchatfilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get files uploaded by a user for Chat.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chatApi.getchatfiles({ body: { fileIds: ["some example string"] } });
  // TODO: Handle 'response' of type GetChatFilesResponse
} catch (err) {
  // TODO: Handle 'err' of type ChatApi.GetchatfilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chatApi.getchatfiles({
  body: { fileIds: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetChatFilesResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[GetChatFilesRequest](src/models/get-chat-files-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chatApi.getchatfiles(request)`

- **OnSuccess**: <code>[GetChatFilesResponse](src/models/get-chat-files-response.ts)</code>
- **OnError**: throws <code>[ChatApi.GetchatfilesError](src/resources/chat-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chatApi.getchatfiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetChatFilesResponse, ChatApi.GetchatfilesError&gt;</code>, with `result.value` of type <code>[GetChatFilesResponse](src/models/get-chat-files-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listchats(request: ChatApi.ListchatsRequest, options?: RequestOptions): ApiPromise&lt;ListChatsResponse, ChatApi.ListchatsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all the saved Chats between Glean Assistant and the user. The returned Chats contain only metadata and no conversational content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chatApi.listchats();
  // TODO: Handle 'response' of type ListChatsResponse
} catch (err) {
  // TODO: Handle 'err' of type ChatApi.ListchatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chatApi.listchats().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListChatsResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chatApi.listchats(request)`

- **OnSuccess**: <code>[ListChatsResponse](src/models/list-chats-response.ts)</code>
- **OnError**: throws <code>[ChatApi.ListchatsError](src/resources/chat-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chatApi.listchats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListChatsResponse, ChatApi.ListchatsError&gt;</code>, with `result.value` of type <code>[ListChatsResponse](src/models/list-chats-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadchatfiles(request: ChatApi.UploadchatfilesRequest, options?: RequestOptions): ApiPromise&lt;UploadChatFilesResponse, ChatApi.UploadchatfilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload files for Chat.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chatApi.uploadchatfiles({ files: new Uint8Array() });
  // TODO: Handle 'response' of type UploadChatFilesResponse
} catch (err) {
  // TODO: Handle 'err' of type ChatApi.UploadchatfilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chatApi.uploadchatfiles({ files: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadChatFilesResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>files</code> | <code>FileInput</code> | Raw file to be uploaded for chat in binary format. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chatApi.uploadchatfiles(request)`

- **OnSuccess**: <code>[UploadChatFilesResponse](src/models/upload-chat-files-response.ts)</code>
- **OnError**: throws <code>[ChatApi.UploadchatfilesError](src/resources/chat-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chatApi.uploadchatfiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadChatFilesResponse, ChatApi.UploadchatfilesError&gt;</code>, with `result.value` of type <code>[UploadChatFilesResponse](src/models/upload-chat-files-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Agents

> Source: [Agents](src/resources/agents.ts)

<details>
<summary><code>createAgent(request: Agents.CreateAgentRequest, options?: RequestOptions): ApiPromise&lt;WorkflowResult, Agents.CreateAgentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an agent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.createAgent({ body: {} });
  // TODO: Handle 'response' of type WorkflowResult
} catch (err) {
  // TODO: Handle 'err' of type Agents.CreateAgentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.createAgent({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkflowResult
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[CreateWorkflowRequest](src/models/create-workflow-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.createAgent(request)`

- **OnSuccess**: <code>[WorkflowResult](src/models/workflow-result.ts)</code>
- **OnError**: throws <code>[Agents.CreateAgentError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.createAgent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkflowResult, Agents.CreateAgentError&gt;</code>, with `result.value` of type <code>[WorkflowResult](src/models/workflow-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createAndStreamRun(request: Agents.CreateAndStreamRunRequest, options?: RequestOptions): ApiPromise&lt;EventStream&lt;string&gt;, Agents.CreateAndStreamRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Executes an [agent](https://developers.glean.com/agents/agents-api) run and returns the result as a stream of server-sent events (SSE). **Note**: If the agent uses an input form trigger, all form fields (including optional fields) must be included in the `input` object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const stream = await client.agents.createAndStreamRun({ body: { agentId: "some example string" } });
  for await (const event of stream) {
    // TODO: Handle 'event' of type string, one event's decoded data
  }
} catch (err) {
  // TODO: Handle 'err' of type Agents.CreateAndStreamRunError, discriminated with 'err.payload.kind'
  // The loop's failures are GleanClientApiError leaves too: DecodeError, ConnectionError or TimeoutError
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.createAndStreamRun({
  body: { agentId: "some example string" },
}).asApiResult();
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
| <code>body</code> | <code>[AgentRunCreate](src/models/agent-run-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.createAndStreamRun(request)`

- **OnSuccess**: <code>[EventStream](src/core/event-stream.ts)&lt;string&gt;</code>
- **OnError**: throws <code>[Agents.CreateAndStreamRunError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.createAndStreamRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventStream&lt;string&gt;, Agents.CreateAndStreamRunError&gt;</code>, with `result.value` of type <code>[EventStream](src/core/event-stream.ts)&lt;string&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure, before the stream is returned and while it is read — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createAndWaitRun(request: Agents.CreateAndWaitRunRequest, options?: RequestOptions): ApiPromise&lt;AgentRunWaitResponse, Agents.CreateAndWaitRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Executes an [agent](https://developers.glean.com/agents/agents-api) run and returns the final response. **Note**: If the agent uses an input form trigger, all form fields (including optional fields) must be included in the `input` object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.createAndWaitRun({ body: { agentId: "some example string" } });
  // TODO: Handle 'response' of type AgentRunWaitResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.CreateAndWaitRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.createAndWaitRun({
  body: { agentId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentRunWaitResponse
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
| <code>body</code> | <code>[AgentRunCreate](src/models/agent-run-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.createAndWaitRun(request)`

- **OnSuccess**: <code>[AgentRunWaitResponse](src/models/agent-run-wait-response.ts)</code>
- **OnError**: throws <code>[Agents.CreateAndWaitRunError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.createAndWaitRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentRunWaitResponse, Agents.CreateAndWaitRunError&gt;</code>, with `result.value` of type <code>[AgentRunWaitResponse](src/models/agent-run-wait-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editAgent(request: Agents.EditAgentRequest, options?: RequestOptions): ApiPromise&lt;undefined, Agents.EditAgentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a draft or publishes an [agent](https://developers.glean.com/agents/agents-api). Use `isDraft=true` to save a draft, or `isDraft=false` (or omit) to publish immediately. Only draft and publish modes are supported.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.agents.editAgent({ agentId: "some example string", body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Agents.EditAgentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.editAgent({ agentId: "some example string", body: {} }).asApiResult();
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
| <code>agentId</code> | <code>string</code> | The ID of the agent. |
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[EditWorkflowRequest](src/models/edit-workflow-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.editAgent(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Agents.EditAgentError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.editAgent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Agents.EditAgentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAgent(request: Agents.GetAgentRequest, options?: RequestOptions): ApiPromise&lt;Agent, Agents.GetAgentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details of an [agent](https://developers.glean.com/agents/agents-api) created in the Agent Builder.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.getAgent({ agentId: "some example string" });
  // TODO: Handle 'response' of type Agent
} catch (err) {
  // TODO: Handle 'err' of type Agents.GetAgentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.getAgent({ agentId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Agent
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
| <code>agentId</code> | <code>string</code> | The ID of the agent. |
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.getAgent(request)`

- **OnSuccess**: <code>[Agent](src/models/agent.ts)</code>
- **OnError**: throws <code>[Agents.GetAgentError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.getAgent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Agent, Agents.GetAgentError&gt;</code>, with `result.value` of type <code>[Agent](src/models/agent.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAgentSchemas(request: Agents.GetAgentSchemasRequest, options?: RequestOptions): ApiPromise&lt;AgentSchemas, Agents.GetAgentSchemasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return [agent](https://developers.glean.com/agents/agents-api)'s input and output schemas. You can use these schemas to detect changes to an agent's input or output structure.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.getAgentSchemas({ agentId: "some example string" });
  // TODO: Handle 'response' of type AgentSchemas
} catch (err) {
  // TODO: Handle 'err' of type Agents.GetAgentSchemasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.getAgentSchemas({ agentId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentSchemas
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
| <code>agentId</code> | <code>string</code> | The ID of the agent. |
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.getAgentSchemas(request)`

- **OnSuccess**: <code>[AgentSchemas](src/models/agent-schemas.ts)</code>
- **OnError**: throws <code>[Agents.GetAgentSchemasError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.getAgentSchemas(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentSchemas, Agents.GetAgentSchemasError&gt;</code>, with `result.value` of type <code>[AgentSchemas](src/models/agent-schemas.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importAgent(request: Agents.ImportAgentRequestParams, options?: RequestOptions): ApiPromise&lt;ImportAgentResponse, Agents.ImportAgentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports an [agent](https://developers.glean.com/agents/agents-api) from its on-disk folder representation (spec.yaml, instructions.md, skills/, subagents/) packaged as a zip, and creates or updates the agent. Inverse of the export flow: the folder-to-schema conversion runs server-side. The bundle must contain only regular files; symlinks are resolved by the caller at packaging time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.importAgent({
    agentId: "some example string",
    bundle: new Uint8Array(),
  });
  // TODO: Handle 'response' of type ImportAgentResponse
} catch (err) {
  // TODO: Handle 'err' of type Agents.ImportAgentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.importAgent({
  agentId: "some example string",
  bundle: new Uint8Array(),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImportAgentResponse
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
| <code>agentId</code> | <code>string</code> | The ID of the agent to create or update. |
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>timezoneOffset?</code> | <code>number</code> | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>bundle</code> | <code>FileInput</code> | Zip of the agent folder (spec.yaml, instructions.md, skills/, subagents/) with symlinks dereferenced. |
| <code>gitCommitSha?</code> | <code>string</code> | Optional Git commit SHA to associate with this import. |
| <code>gitAuthorId?</code> | <code>string</code> | Optional VCS commit author ID to associate with this import. |
| <code>commitMessage?</code> | <code>string</code> | Optional commit message for the imported version. |
| <code>syncMode?</code> | <code>[ImportAgentSyncMode](src/models/import-agent-sync-mode.ts)</code> | Whether the imported version is staged (saved without updating the live version) or published directly to the live version. |
| <code>versionSource?</code> | <code>[VersionSource](src/models/version-source.ts)</code> | Provenance recorded on the staged commit or published version this import produces. Doesn't change the agent's management mode (workflowSource). GIT: synced from a Git repository. USER: uploaded by a user. Defaults to USER when omitted. Ignored for transient imports.<br>**Default**: "USER" |
| <code>publishedBaselineHash?</code> | <code>string</code> | Optional baseline hash of the currently published agent definition. When publish hash validation is enabled, an import updating an existing agent with syncMode PUBLISHED is rejected with HTTP 409 if the current published definition hash is nonempty and does not match this baseline. Leading and trailing whitespace is trimmed; omitted or blank values skip validation. Ignored for STAGED imports, new agents, and transient previews. |
| <code>isDraft?</code> | <code>boolean</code> | Deprecated. Draft mutation semantics are not supported for transient previews. Use transient and parentWorkflowId instead. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.importAgent(request)`

- **OnSuccess**: <code>[ImportAgentResponse](src/models/import-agent-response.ts)</code>
- **OnError**: throws <code>[Agents.ImportAgentError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.importAgent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImportAgentResponse, Agents.ImportAgentError&gt;</code>, with `result.value` of type <code>[ImportAgentResponse](src/models/import-agent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchAgents(request: Agents.SearchAgentsRequestParams, options?: RequestOptions): ApiPromise&lt;ResponseSearchAgents, Agents.SearchAgentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for [agents](https://developers.glean.com/agents/agents-api) by agent name.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.agents.searchAgents({ body: {} });
  // TODO: Handle 'response' of type ResponseSearchAgents
} catch (err) {
  // TODO: Handle 'err' of type Agents.SearchAgentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.agents.searchAgents({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResponseSearchAgents
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
| <code>body</code> | <code>[SearchAgentsRequest](src/models/search-agents-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.agents.searchAgents(request)`

- **OnSuccess**: <code>[ResponseSearchAgents](src/models/response-search-agents.ts)</code>
- **OnError**: throws <code>[Agents.SearchAgentsError](src/resources/agents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.agents.searchAgents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResponseSearchAgents, Agents.SearchAgentsError&gt;</code>, with `result.value` of type <code>[ResponseSearchAgents](src/models/response-search-agents.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Collections

> Source: [Collections](src/resources/collections.ts)

<details>
<summary><code>addcollectionitems(request: Collections.AddcollectionitemsRequest, options?: RequestOptions): ApiPromise&lt;AddCollectionItemsResponse, Collections.AddcollectionitemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add items to a Collection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collections.addcollectionitems({ body: { collectionId: 1.5 } });
  // TODO: Handle 'response' of type AddCollectionItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type Collections.AddcollectionitemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collections.addcollectionitems({ body: { collectionId: 1.5 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AddCollectionItemsResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[AddCollectionItemsRequest](src/models/add-collection-items-request.ts)</code> | Data describing the add operation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collections.addcollectionitems(request)`

- **OnSuccess**: <code>[AddCollectionItemsResponse](src/models/add-collection-items-response.ts)</code>
- **OnError**: throws <code>[Collections.AddcollectionitemsError](src/resources/collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collections.addcollectionitems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AddCollectionItemsResponse, Collections.AddcollectionitemsError&gt;</code>, with `result.value` of type <code>[AddCollectionItemsResponse](src/models/add-collection-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createcollection(request: Collections.CreatecollectionRequest, options?: RequestOptions): ApiPromise&lt;CreateCollectionResponse2, Collections.CreatecollectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a publicly visible (empty) Collection of documents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collections.createcollection({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type CreateCollectionResponse2
} catch (err) {
  // TODO: Handle 'err' of type Collections.CreatecollectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collections.createcollection({
  body: { name: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateCollectionResponse2
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[CreateCollectionRequest](src/models/create-collection-request.ts)</code> | Collection content plus any additional metadata for the request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collections.createcollection(request)`

- **OnSuccess**: <code>[CreateCollectionResponse2](src/models/unions/create-collection-response2.ts)</code>
- **OnError**: throws <code>[Collections.CreatecollectionError](src/resources/collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collections.createcollection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateCollectionResponse2, Collections.CreatecollectionError&gt;</code>, with `result.value` of type <code>[CreateCollectionResponse2](src/models/unions/create-collection-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletecollection(request: Collections.DeletecollectionRequest, options?: RequestOptions): ApiPromise&lt;undefined, Collections.DeletecollectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Collection given the Collection's ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.collections.deletecollection({ body: { ids: [1] } });
} catch (err) {
  // TODO: Handle 'err' of type Collections.DeletecollectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collections.deletecollection({ body: { ids: [1] } }).asApiResult();
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[DeleteCollectionRequest](src/models/delete-collection-request.ts)</code> | DeleteCollection request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collections.deletecollection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Collections.DeletecollectionError](src/resources/collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collections.deletecollection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Collections.DeletecollectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletecollectionitem(request: Collections.DeletecollectionitemRequest, options?: RequestOptions): ApiPromise&lt;DeleteCollectionItemResponse, Collections.DeletecollectionitemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single item from a Collection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collections.deletecollectionitem({
    body: { collectionId: 1.5, itemId: "some example string" },
  });
  // TODO: Handle 'response' of type DeleteCollectionItemResponse
} catch (err) {
  // TODO: Handle 'err' of type Collections.DeletecollectionitemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collections.deletecollectionitem({
  body: { collectionId: 1.5, itemId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteCollectionItemResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[DeleteCollectionItemRequest](src/models/delete-collection-item-request.ts)</code> | Data describing the delete operation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collections.deletecollectionitem(request)`

- **OnSuccess**: <code>[DeleteCollectionItemResponse](src/models/delete-collection-item-response.ts)</code>
- **OnError**: throws <code>[Collections.DeletecollectionitemError](src/resources/collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collections.deletecollectionitem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteCollectionItemResponse, Collections.DeletecollectionitemError&gt;</code>, with `result.value` of type <code>[DeleteCollectionItemResponse](src/models/delete-collection-item-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editcollection(request: Collections.EditcollectionRequest, options?: RequestOptions): ApiPromise&lt;EditCollectionResponse, Collections.EditcollectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the properties of an existing Collection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collections.editcollection({ body: { name: "some example string", id: 1 } });
  // TODO: Handle 'response' of type EditCollectionResponse
} catch (err) {
  // TODO: Handle 'err' of type Collections.EditcollectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collections.editcollection({
  body: { name: "some example string", id: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EditCollectionResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[EditCollectionRequest](src/models/edit-collection-request.ts)</code> | Collection content plus any additional metadata for the request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collections.editcollection(request)`

- **OnSuccess**: <code>[EditCollectionResponse](src/models/edit-collection-response.ts)</code>
- **OnError**: throws <code>[Collections.EditcollectionError](src/resources/collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collections.editcollection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EditCollectionResponse, Collections.EditcollectionError&gt;</code>, with `result.value` of type <code>[EditCollectionResponse](src/models/edit-collection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editcollectionitem(request: Collections.EditcollectionitemRequest, options?: RequestOptions): ApiPromise&lt;EditCollectionItemResponse, Collections.EditcollectionitemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the URL, Glean Document ID, description of an item within a Collection given its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collections.editcollectionitem({
    body: { collectionId: 1, itemId: "some example string" },
  });
  // TODO: Handle 'response' of type EditCollectionItemResponse
} catch (err) {
  // TODO: Handle 'err' of type Collections.EditcollectionitemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collections.editcollectionitem({
  body: { collectionId: 1, itemId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EditCollectionItemResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[EditCollectionItemRequest](src/models/edit-collection-item-request.ts)</code> | Edit Collection Items request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collections.editcollectionitem(request)`

- **OnSuccess**: <code>[EditCollectionItemResponse](src/models/edit-collection-item-response.ts)</code>
- **OnError**: throws <code>[Collections.EditcollectionitemError](src/resources/collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collections.editcollectionitem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EditCollectionItemResponse, Collections.EditcollectionitemError&gt;</code>, with `result.value` of type <code>[EditCollectionItemResponse](src/models/edit-collection-item-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getcollection(request: Collections.GetcollectionRequest, options?: RequestOptions): ApiPromise&lt;GetCollectionResponse, Collections.GetcollectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read the details of a Collection given its ID. Does not fetch items in this Collection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collections.getcollection({ body: { id: 1 } });
  // TODO: Handle 'response' of type GetCollectionResponse
} catch (err) {
  // TODO: Handle 'err' of type Collections.GetcollectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collections.getcollection({ body: { id: 1 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetCollectionResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[GetCollectionRequest](src/models/get-collection-request.ts)</code> | GetCollection request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collections.getcollection(request)`

- **OnSuccess**: <code>[GetCollectionResponse](src/models/get-collection-response.ts)</code>
- **OnError**: throws <code>[Collections.GetcollectionError](src/resources/collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collections.getcollection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetCollectionResponse, Collections.GetcollectionError&gt;</code>, with `result.value` of type <code>[GetCollectionResponse](src/models/get-collection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listcollections(request: Collections.ListcollectionsRequest, options?: RequestOptions): ApiPromise&lt;ListCollectionsResponse, Collections.ListcollectionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all existing Collections.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collections.listcollections({ body: {} });
  // TODO: Handle 'response' of type ListCollectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Collections.ListcollectionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collections.listcollections({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCollectionsResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[ListCollectionsRequest](src/models/list-collections-request.ts)</code> | ListCollections request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collections.listcollections(request)`

- **OnSuccess**: <code>[ListCollectionsResponse](src/models/list-collections-response.ts)</code>
- **OnError**: throws <code>[Collections.ListcollectionsError](src/resources/collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collections.listcollections(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCollectionsResponse, Collections.ListcollectionsError&gt;</code>, with `result.value` of type <code>[ListCollectionsResponse](src/models/list-collections-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/resources/documents.ts)

<details>
<summary><code>getdocpermissions(request: Documents.GetdocpermissionsRequest, options?: RequestOptions): ApiPromise&lt;GetDocPermissionsResponse, Documents.GetdocpermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read the emails of all users who have access to the given document.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.getdocpermissions({ body: {} });
  // TODO: Handle 'response' of type GetDocPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Documents.GetdocpermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents.getdocpermissions({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDocPermissionsResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[GetDocPermissionsRequest](src/models/get-doc-permissions-request.ts)</code> | Document permissions request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.getdocpermissions(request)`

- **OnSuccess**: <code>[GetDocPermissionsResponse](src/models/get-doc-permissions-response.ts)</code>
- **OnError**: throws <code>[Documents.GetdocpermissionsError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.getdocpermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDocPermissionsResponse, Documents.GetdocpermissionsError&gt;</code>, with `result.value` of type <code>[GetDocPermissionsResponse](src/models/get-doc-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getdocuments(request: Documents.GetdocumentsRequest, options?: RequestOptions): ApiPromise&lt;GetDocumentsResponse, Documents.GetdocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read the documents including metadata (does not include enhanced metadata via `/documentmetadata`) for the given list of Glean Document IDs or URLs specified in the request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.getdocuments();
  // TODO: Handle 'response' of type GetDocumentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Documents.GetdocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents.getdocuments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDocumentsResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body?</code> | <code>[GetDocumentsRequest](src/models/get-documents-request.ts)</code> | Information about documents requested. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.getdocuments(request)`

- **OnSuccess**: <code>[GetDocumentsResponse](src/models/get-documents-response.ts)</code>
- **OnError**: throws <code>[Documents.GetdocumentsError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.getdocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDocumentsResponse, Documents.GetdocumentsError&gt;</code>, with `result.value` of type <code>[GetDocumentsResponse](src/models/get-documents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getdocumentsbyfacets(request: Documents.GetdocumentsbyfacetsRequest, options?: RequestOptions): ApiPromise&lt;GetDocumentsByFacetsResponse, Documents.GetdocumentsbyfacetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read the documents including metadata (does not include enhanced metadata via `/documentmetadata`) macthing the given facet conditions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.getdocumentsbyfacets();
  // TODO: Handle 'response' of type GetDocumentsByFacetsResponse
} catch (err) {
  // TODO: Handle 'err' of type Documents.GetdocumentsbyfacetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents.getdocumentsbyfacets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDocumentsByFacetsResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body?</code> | <code>[GetDocumentsByFacetsRequest](src/models/get-documents-by-facets-request.ts)</code> | Information about facet conditions for documents to be retrieved. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.getdocumentsbyfacets(request)`

- **OnSuccess**: <code>[GetDocumentsByFacetsResponse](src/models/get-documents-by-facets-response.ts)</code>
- **OnError**: throws <code>[Documents.GetdocumentsbyfacetsError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.getdocumentsbyfacets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDocumentsByFacetsResponse, Documents.GetdocumentsbyfacetsError&gt;</code>, with `result.value` of type <code>[GetDocumentsByFacetsResponse](src/models/get-documents-by-facets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/resources/insights.ts)

<details>
<summary><code>insights(request: Insights.InsightsRequestParams, options?: RequestOptions): ApiPromise&lt;InsightsResponse, Insights.InsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the aggregate usage insights data displayed in the Insights Dashboards.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.insights({ body: {} });
  // TODO: Handle 'response' of type InsightsResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.InsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights.insights({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightsResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[InsightsRequest](src/models/insights-request.ts)</code> | Includes request parameters for insights requests. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.insights(request)`

- **OnSuccess**: <code>[InsightsResponse](src/models/insights-response.ts)</code>
- **OnError**: throws <code>[Insights.InsightsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.insights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightsResponse, Insights.InsightsError&gt;</code>, with `result.value` of type <code>[InsightsResponse](src/models/insights-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Messages

> Source: [Messages](src/resources/messages.ts)

<details>
<summary><code>messages(request: Messages.MessagesRequestParams, options?: RequestOptions): ApiPromise&lt;MessagesResponse, Messages.MessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves list of messages from messaging/chat datasources (e.g. Slack, Teams).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messages.messages({
    body: { idType: IdType.ChannelName, id: "some example string", datasource: Datasource.Slack },
  });
  // TODO: Handle 'response' of type MessagesResponse
} catch (err) {
  // TODO: Handle 'err' of type Messages.MessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages.messages({
  body: { idType: IdType.ChannelName, id: "some example string", datasource: Datasource.Slack },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessagesResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[MessagesRequest](src/models/messages-request.ts)</code> | Includes request params such as the id for channel/message and direction. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.messages(request)`

- **OnSuccess**: <code>[MessagesResponse](src/models/messages-response.ts)</code>
- **OnError**: throws <code>[Messages.MessagesError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.messages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessagesResponse, Messages.MessagesError&gt;</code>, with `result.value` of type <code>[MessagesResponse](src/models/messages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Pins

> Source: [Pins](src/resources/pins.ts)

<details>
<summary><code>editpin(request: Pins.EditpinRequest, options?: RequestOptions): ApiPromise&lt;PinDocument, Pins.EditpinError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing user-generated pin.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pins.editpin({ body: {} });
  // TODO: Handle 'response' of type PinDocument
} catch (err) {
  // TODO: Handle 'err' of type Pins.EditpinError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pins.editpin({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PinDocument
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[EditPinRequest](src/models/edit-pin-request.ts)</code> | Edit pins request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pins.editpin(request)`

- **OnSuccess**: <code>[PinDocument](src/models/pin-document.ts)</code>
- **OnError**: throws <code>[Pins.EditpinError](src/resources/pins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pins.editpin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PinDocument, Pins.EditpinError&gt;</code>, with `result.value` of type <code>[PinDocument](src/models/pin-document.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getpin(request: Pins.GetpinRequest, options?: RequestOptions): ApiPromise&lt;GetPinResponse, Pins.GetpinError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read pin details given its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pins.getpin({ body: {} });
  // TODO: Handle 'response' of type GetPinResponse
} catch (err) {
  // TODO: Handle 'err' of type Pins.GetpinError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pins.getpin({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetPinResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[GetPinRequest](src/models/get-pin-request.ts)</code> | Get pin request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pins.getpin(request)`

- **OnSuccess**: <code>[GetPinResponse](src/models/get-pin-response.ts)</code>
- **OnError**: throws <code>[Pins.GetpinError](src/resources/pins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pins.getpin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetPinResponse, Pins.GetpinError&gt;</code>, with `result.value` of type <code>[GetPinResponse](src/models/get-pin-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listpins(request: Pins.ListpinsRequest, options?: RequestOptions): ApiPromise&lt;ListPinsResponse, Pins.ListpinsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all pins.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pins.listpins({ body: {} });
  // TODO: Handle 'response' of type ListPinsResponse
} catch (err) {
  // TODO: Handle 'err' of type Pins.ListpinsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pins.listpins({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPinsResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | List pins request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pins.listpins(request)`

- **OnSuccess**: <code>[ListPinsResponse](src/models/list-pins-response.ts)</code>
- **OnError**: throws <code>[Pins.ListpinsError](src/resources/pins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pins.listpins(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPinsResponse, Pins.ListpinsError&gt;</code>, with `result.value` of type <code>[ListPinsResponse](src/models/list-pins-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pin(request: Pins.PinRequestParams, options?: RequestOptions): ApiPromise&lt;PinDocument, Pins.PinError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pin a document as a result for a given search query.Pin results that are known to be a good match.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pins.pin({ body: {} });
  // TODO: Handle 'response' of type PinDocument
} catch (err) {
  // TODO: Handle 'err' of type Pins.PinError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pins.pin({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PinDocument
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[PinRequest](src/models/pin-request.ts)</code> | Details about the document and query for the pin. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pins.pin(request)`

- **OnSuccess**: <code>[PinDocument](src/models/pin-document.ts)</code>
- **OnError**: throws <code>[Pins.PinError](src/resources/pins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pins.pin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PinDocument, Pins.PinError&gt;</code>, with `result.value` of type <code>[PinDocument](src/models/pin-document.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unpin(request: Pins.UnpinRequest, options?: RequestOptions): ApiPromise&lt;undefined, Pins.UnpinError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unpin a previously pinned result.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.pins.unpin({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Pins.UnpinError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pins.unpin({ body: {} }).asApiResult();
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[Unpin](src/models/unpin.ts)</code> | Details about the pin being unpinned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pins.unpin(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Pins.UnpinError](src/resources/pins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pins.unpin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Pins.UnpinError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>adminsearch(request: Search.AdminsearchRequest, options?: RequestOptions): ApiPromise&lt;SearchResponse, Search.AdminsearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves results for search query without respect for permissions. This is available only to privileged users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.adminsearch({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type SearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.AdminsearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.adminsearch({ body: { query: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[SearchRequest](src/models/search-request.ts)</code> | Admin search request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.adminsearch(request)`

- **OnSuccess**: <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: throws <code>[Search.AdminsearchError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.adminsearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResponse, Search.AdminsearchError&gt;</code>, with `result.value` of type <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>autocomplete(request: Search.AutocompleteRequestParams, options?: RequestOptions): ApiPromise&lt;AutocompleteResponse, Search.AutocompleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve query suggestions, operators and documents for the given partially typed query.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.autocomplete({ body: {} });
  // TODO: Handle 'response' of type AutocompleteResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.AutocompleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.autocomplete({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutocompleteResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[AutocompleteRequest](src/models/autocomplete-request.ts)</code> | Autocomplete request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.autocomplete(request)`

- **OnSuccess**: <code>[AutocompleteResponse](src/models/autocomplete-response.ts)</code>
- **OnError**: throws <code>[Search.AutocompleteError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.autocomplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutocompleteResponse, Search.AutocompleteError&gt;</code>, with `result.value` of type <code>[AutocompleteResponse](src/models/autocomplete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>feed(request: Search.FeedRequestParams, options?: RequestOptions): ApiPromise&lt;FeedResponse, Search.FeedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The personalized feed/home includes different types of contents including suggestions, recents, calendar events and many more.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.feed({ body: {} });
  // TODO: Handle 'response' of type FeedResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.FeedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.feed({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[FeedRequest](src/models/feed-request.ts)</code> | Includes request params, client data and more for making user's feed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.feed(request)`

- **OnSuccess**: <code>[FeedResponse](src/models/feed-response.ts)</code>
- **OnError**: throws <code>[Search.FeedError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.feed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedResponse, Search.FeedError&gt;</code>, with `result.value` of type <code>[FeedResponse](src/models/feed-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recommendations(request: Search.RecommendationsRequestParams, options?: RequestOptions): ApiPromise&lt;ResultsResponse, Search.RecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve recommended documents for the given URL or Glean Document ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.recommendations({ body: {} });
  // TODO: Handle 'response' of type ResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.RecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.recommendations({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResultsResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[RecommendationsRequest](src/models/recommendations-request.ts)</code> | Recommendations request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.recommendations(request)`

- **OnSuccess**: <code>[ResultsResponse](src/models/results-response.ts)</code>
- **OnError**: throws <code>[Search.RecommendationsError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.recommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResultsResponse, Search.RecommendationsError&gt;</code>, with `result.value` of type <code>[ResultsResponse](src/models/results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>search(request: Search.SearchRequestParams, options?: RequestOptions): ApiPromise&lt;SearchResponse, Search.SearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve results from the index for the given query and filters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.search({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type SearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.search({ body: { query: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[SearchRequest](src/models/search-request.ts)</code> | Search request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.search(request)`

- **OnSuccess**: <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: throws <code>[Search.SearchError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.search(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResponse, Search.SearchError&gt;</code>, with `result.value` of type <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Entities

> Source: [Entities](src/resources/entities.ts)

<details>
<summary><code>getPersonPhoto(request: Entities.GetPersonPhotoRequest, options?: RequestOptions): ApiPromise&lt;undefined, Entities.GetPersonPhotoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the profile photo bytes for a person whose photo is stored in Glean (crawled from an identity source or user-uploaded via admin console). Photos hosted externally (e.g. Slack CDN) are not served by this endpoint; callers should follow the photoUrl from /people or /listentities directly. Responses include a Cache-Control header (max-age=3600) to reduce redundant fetches.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.entities.getPersonPhoto({ personId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Entities.GetPersonPhotoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entities.getPersonPhoto({ personId: "some example string" }).asApiResult();
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
| <code>personId</code> | <code>string</code> | The obfuscated ID of the person whose photo to retrieve. |
| <code>ds?</code> | <code>string</code> | Optional datasource override for crawled photos (e.g. AZURE, GDRIVE, OKTA). When omitted, the datasource is derived from the person's stored photo URL or the deployment's primary person datasource. |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entities.getPersonPhoto(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Entities.GetPersonPhotoError](src/resources/entities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entities.getPersonPhoto(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Entities.GetPersonPhotoError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listentities(request: Entities.ListentitiesRequest, options?: RequestOptions): ApiPromise&lt;ListEntitiesResponse, Entities.ListentitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List some set of details for all entities that fit the given criteria and return in the requested order. Does not support negation in filters, assumes relation type EQUALS. There is a limit of 10000 entities that can be retrieved via this endpoint, except when using FULL_DIRECTORY request type for people entities.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entities.listentities({ body: {} });
  // TODO: Handle 'response' of type ListEntitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type Entities.ListentitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entities.listentities({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListEntitiesResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[ListEntitiesRequest](src/models/list-entities-request.ts)</code> | List people request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entities.listentities(request)`

- **OnSuccess**: <code>[ListEntitiesResponse](src/models/list-entities-response.ts)</code>
- **OnError**: throws <code>[Entities.ListentitiesError](src/resources/entities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entities.listentities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListEntitiesResponse, Entities.ListentitiesError&gt;</code>, with `result.value` of type <code>[ListEntitiesResponse](src/models/list-entities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>people(request: Entities.PeopleRequestParams, options?: RequestOptions): ApiPromise&lt;PeopleResponse, Entities.PeopleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read people details for the given IDs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entities.people({ body: {} });
  // TODO: Handle 'response' of type PeopleResponse
} catch (err) {
  // TODO: Handle 'err' of type Entities.PeopleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entities.people({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PeopleResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[PeopleRequest](src/models/people-request.ts)</code> | People request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entities.people(request)`

- **OnSuccess**: <code>[PeopleResponse](src/models/people-response.ts)</code>
- **OnError**: throws <code>[Entities.PeopleError](src/resources/entities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entities.people(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PeopleResponse, Entities.PeopleError&gt;</code>, with `result.value` of type <code>[PeopleResponse](src/models/people-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Shortcuts

> Source: [Shortcuts](src/resources/shortcuts.ts)

<details>
<summary><code>createshortcut(request: Shortcuts.CreateshortcutRequest, options?: RequestOptions): ApiPromise&lt;CreateShortcutResponse, Shortcuts.CreateshortcutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a user-generated shortcut that contains an alias and destination URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shortcuts.createshortcut({ body: { data: {} } });
  // TODO: Handle 'response' of type CreateShortcutResponse
} catch (err) {
  // TODO: Handle 'err' of type Shortcuts.CreateshortcutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shortcuts.createshortcut({ body: { data: {} } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateShortcutResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[CreateShortcutRequest](src/models/create-shortcut-request.ts)</code> | CreateShortcut request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shortcuts.createshortcut(request)`

- **OnSuccess**: <code>[CreateShortcutResponse](src/models/create-shortcut-response.ts)</code>
- **OnError**: throws <code>[Shortcuts.CreateshortcutError](src/resources/shortcuts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shortcuts.createshortcut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateShortcutResponse, Shortcuts.CreateshortcutError&gt;</code>, with `result.value` of type <code>[CreateShortcutResponse](src/models/create-shortcut-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteshortcut(request: Shortcuts.DeleteshortcutRequest, options?: RequestOptions): ApiPromise&lt;undefined, Shortcuts.DeleteshortcutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing user-generated shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.shortcuts.deleteshortcut({ body: { id: 1 } });
} catch (err) {
  // TODO: Handle 'err' of type Shortcuts.DeleteshortcutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shortcuts.deleteshortcut({ body: { id: 1 } }).asApiResult();
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[DeleteShortcutRequest](src/models/delete-shortcut-request.ts)</code> | DeleteShortcut request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shortcuts.deleteshortcut(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Shortcuts.DeleteshortcutError](src/resources/shortcuts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shortcuts.deleteshortcut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Shortcuts.DeleteshortcutError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getshortcut(request: Shortcuts.GetshortcutRequest, options?: RequestOptions): ApiPromise&lt;GetShortcutResponse, Shortcuts.GetshortcutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read a particular shortcut's details given its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shortcuts.getshortcut({ body: {} });
  // TODO: Handle 'response' of type GetShortcutResponse
} catch (err) {
  // TODO: Handle 'err' of type Shortcuts.GetshortcutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shortcuts.getshortcut({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetShortcutResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[GetShortcutRequest1](src/models/unions/get-shortcut-request1.ts)</code> | GetShortcut request |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shortcuts.getshortcut(request)`

- **OnSuccess**: <code>[GetShortcutResponse](src/models/get-shortcut-response.ts)</code>
- **OnError**: throws <code>[Shortcuts.GetshortcutError](src/resources/shortcuts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shortcuts.getshortcut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetShortcutResponse, Shortcuts.GetshortcutError&gt;</code>, with `result.value` of type <code>[GetShortcutResponse](src/models/get-shortcut-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listshortcuts(request: Shortcuts.ListshortcutsRequest, options?: RequestOptions): ApiPromise&lt;ListShortcutsPaginatedResponse, Shortcuts.ListshortcutsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List shortcuts editable/owned by the currently authenticated user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shortcuts.listshortcuts({ body: { pageSize: 1 } });
  // TODO: Handle 'response' of type ListShortcutsPaginatedResponse
} catch (err) {
  // TODO: Handle 'err' of type Shortcuts.ListshortcutsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shortcuts.listshortcuts({ body: { pageSize: 1 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListShortcutsPaginatedResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[ListShortcutsPaginatedRequest](src/models/list-shortcuts-paginated-request.ts)</code> | Filters, sorters, paging params required for pagination |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shortcuts.listshortcuts(request)`

- **OnSuccess**: <code>[ListShortcutsPaginatedResponse](src/models/list-shortcuts-paginated-response.ts)</code>
- **OnError**: throws <code>[Shortcuts.ListshortcutsError](src/resources/shortcuts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shortcuts.listshortcuts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListShortcutsPaginatedResponse, Shortcuts.ListshortcutsError&gt;</code>, with `result.value` of type <code>[ListShortcutsPaginatedResponse](src/models/list-shortcuts-paginated-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateshortcut(request: Shortcuts.UpdateshortcutRequest, options?: RequestOptions): ApiPromise&lt;UpdateShortcutResponse, Shortcuts.UpdateshortcutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the shortcut with the given ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shortcuts.updateshortcut({ body: { id: 1 } });
  // TODO: Handle 'response' of type UpdateShortcutResponse
} catch (err) {
  // TODO: Handle 'err' of type Shortcuts.UpdateshortcutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shortcuts.updateshortcut({ body: { id: 1 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateShortcutResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[UpdateShortcutRequest](src/models/update-shortcut-request.ts)</code> | Shortcut content. Id need to be specified for the shortcut. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shortcuts.updateshortcut(request)`

- **OnSuccess**: <code>[UpdateShortcutResponse](src/models/update-shortcut-response.ts)</code>
- **OnError**: throws <code>[Shortcuts.UpdateshortcutError](src/resources/shortcuts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shortcuts.updateshortcut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateShortcutResponse, Shortcuts.UpdateshortcutError&gt;</code>, with `result.value` of type <code>[UpdateShortcutResponse](src/models/update-shortcut-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Summarize

> Source: [Summarize](src/resources/summarize.ts)

<details>
<summary><code>summarize(request: Summarize.SummarizeRequestParams, options?: RequestOptions): ApiPromise&lt;SummarizeResponse, Summarize.SummarizeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an AI summary of the requested documents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.summarize.summarize({
    body: { documentSpecs: [{ url: "some example string" }] },
  });
  // TODO: Handle 'response' of type SummarizeResponse
} catch (err) {
  // TODO: Handle 'err' of type Summarize.SummarizeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.summarize.summarize({
  body: { documentSpecs: [{ url: "some example string" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummarizeResponse
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[SummarizeRequest](src/models/summarize-request.ts)</code> | Includes request params such as the query and specs of the documents to summarize. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.summarize.summarize(request)`

- **OnSuccess**: <code>[SummarizeResponse](src/models/summarize-response.ts)</code>
- **OnError**: throws <code>[Summarize.SummarizeError](src/resources/summarize.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.summarize.summarize(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummarizeResponse, Summarize.SummarizeError&gt;</code>, with `result.value` of type <code>[SummarizeResponse](src/models/summarize-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VerificationApi

> Source: [VerificationApi](src/resources/verification-api.ts)

<details>
<summary><code>addverificationreminder(request: VerificationApi.AddverificationreminderRequest, options?: RequestOptions): ApiPromise&lt;Verification, VerificationApi.AddverificationreminderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a verification reminder for the document. Users can create verification reminders from different product surfaces.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verificationApi.addverificationreminder({
    body: { documentId: "some example string" },
  });
  // TODO: Handle 'response' of type Verification
} catch (err) {
  // TODO: Handle 'err' of type VerificationApi.AddverificationreminderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verificationApi.addverificationreminder({
  body: { documentId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Verification
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[ReminderRequest](src/models/reminder-request.ts)</code> | Details about the reminder. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verificationApi.addverificationreminder(request)`

- **OnSuccess**: <code>[Verification](src/models/verification.ts)</code>
- **OnError**: throws <code>[VerificationApi.AddverificationreminderError](src/resources/verification-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verificationApi.addverificationreminder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Verification, VerificationApi.AddverificationreminderError&gt;</code>, with `result.value` of type <code>[Verification](src/models/verification.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listverifications(request: VerificationApi.ListverificationsRequest, options?: RequestOptions): ApiPromise&lt;VerificationFeed, VerificationApi.ListverificationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the information to be rendered in verification dashboard. Includes information for each document owned by user regarding their verifications.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verificationApi.listverifications();
  // TODO: Handle 'response' of type VerificationFeed
} catch (err) {
  // TODO: Handle 'err' of type VerificationApi.ListverificationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verificationApi.listverifications().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VerificationFeed
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
| <code>count?</code> | <code>number</code> | Maximum number of documents to return |
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verificationApi.listverifications(request)`

- **OnSuccess**: <code>[VerificationFeed](src/models/verification-feed.ts)</code>
- **OnError**: throws <code>[VerificationApi.ListverificationsError](src/resources/verification-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verificationApi.listverifications(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VerificationFeed, VerificationApi.ListverificationsError&gt;</code>, with `result.value` of type <code>[VerificationFeed](src/models/verification-feed.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verify(request: VerificationApi.VerifyRequestParams, options?: RequestOptions): ApiPromise&lt;Verification, VerificationApi.VerifyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verify documents to keep the knowledge up to date within customer corpus.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verificationApi.verify({ body: { documentId: "some example string" } });
  // TODO: Handle 'response' of type Verification
} catch (err) {
  // TODO: Handle 'err' of type VerificationApi.VerifyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verificationApi.verify({
  body: { documentId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Verification
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
| <code>locale?</code> | <code>string</code> | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| <code>xGleanActAs?</code> | <code>string</code> | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| <code>xGleanAuthType?</code> | <code>string</code> | Auth type being used to access the endpoint (should be non-empty only for global tokens). |
| <code>body</code> | <code>[VerifyRequest](src/models/verify-request.ts)</code> | Details about the verification request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verificationApi.verify(request)`

- **OnSuccess**: <code>[Verification](src/models/verification.ts)</code>
- **OnError**: throws <code>[VerificationApi.VerifyError](src/resources/verification-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verificationApi.verify(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Verification, VerificationApi.VerifyError&gt;</code>, with `result.value` of type <code>[Verification](src/models/verification.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tools

> Source: [Tools](src/resources/tools.ts)

<details>
<summary><code>executeTheSpecifiedTool(request: Tools.ExecuteTheSpecifiedToolRequest, options?: RequestOptions): ApiPromise&lt;ToolsCallResponse, Tools.ExecuteTheSpecifiedToolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Execute the specified tool with provided parameters

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tools.executeTheSpecifiedTool({
    body: {
      name: "some example string",
      parameters: { key: { name: "some example string", value: "some example string" } },
    },
  });
  // TODO: Handle 'response' of type ToolsCallResponse
} catch (err) {
  // TODO: Handle 'err' of type Tools.ExecuteTheSpecifiedToolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tools.executeTheSpecifiedTool({
  body: {
    name: "some example string",
    parameters: { key: { name: "some example string", value: "some example string" } },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ToolsCallResponse
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
| <code>body</code> | <code>[ToolsCallRequest](src/models/tools-call-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tools.executeTheSpecifiedTool(request)`

- **OnSuccess**: <code>[ToolsCallResponse](src/models/tools-call-response.ts)</code>
- **OnError**: throws <code>[Tools.ExecuteTheSpecifiedToolError](src/resources/tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tools.executeTheSpecifiedTool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ToolsCallResponse, Tools.ExecuteTheSpecifiedToolError&gt;</code>, with `result.value` of type <code>[ToolsCallResponse](src/models/tools-call-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAvailableTools(request: Tools.ListAvailableToolsRequest, options?: RequestOptions): ApiPromise&lt;ToolsListResponse, Tools.ListAvailableToolsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a filtered set of available tools based on optional tool name parameters. If no filters are provided, all available tools are returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tools.listAvailableTools();
  // TODO: Handle 'response' of type ToolsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Tools.ListAvailableToolsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tools.listAvailableTools().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ToolsListResponse
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
| <code>toolNames?</code> | <code>string[]</code> | Optional array of tool names to filter by |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tools.listAvailableTools(request)`

- **OnSuccess**: <code>[ToolsListResponse](src/models/tools-list-response.ts)</code>
- **OnError**: throws <code>[Tools.ListAvailableToolsError](src/resources/tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tools.listAvailableTools(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ToolsListResponse, Tools.ListAvailableToolsError&gt;</code>, with `result.value` of type <code>[ToolsListResponse](src/models/tools-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authorizeActionPack(request: Tools.AuthorizeActionPackRequestParams, options?: RequestOptions): ApiPromise&lt;AuthorizeActionPackResponse, Tools.AuthorizeActionPackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the third-party OAuth flow for the specified action pack and returns the
redirect URL that the client should navigate the end user to. After the OAuth
callback completes, the user's browser is redirected back to `returnUrl` with a
status query parameter (`?glean_action_auth=success|error&actionPackId=...`).

`returnUrl` must match the tenant's configured return URL allowlist; otherwise the
request is rejected with 400.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tools.authorizeActionPack({
    actionPackId: "some example string",
    body: { returnUrl: "some example string" },
  });
  // TODO: Handle 'response' of type AuthorizeActionPackResponse
} catch (err) {
  // TODO: Handle 'err' of type Tools.AuthorizeActionPackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tools.authorizeActionPack({
  actionPackId: "some example string",
  body: { returnUrl: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthorizeActionPackResponse
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
| <code>actionPackId</code> | <code>string</code> | ID of the action pack to query or authorize. |
| <code>body</code> | <code>[AuthorizeActionPackRequest](src/models/authorize-action-pack-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tools.authorizeActionPack(request)`

- **OnSuccess**: <code>[AuthorizeActionPackResponse](src/models/authorize-action-pack-response.ts)</code>
- **OnError**: throws <code>[Tools.AuthorizeActionPackError](src/resources/tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tools.authorizeActionPack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthorizeActionPackResponse, Tools.AuthorizeActionPackError&gt;</code>, with `result.value` of type <code>[AuthorizeActionPackResponse](src/models/authorize-action-pack-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authorizeToolServer(request: Tools.AuthorizeToolServerRequestParams, options?: RequestOptions): ApiPromise&lt;AuthorizeToolServerResponse, Tools.AuthorizeToolServerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates the third-party OAuth flow for the specified tool server and returns the
authorization URL that the client should navigate the end user to. After the OAuth
callback completes, the user's browser is redirected back to `returnUrl` with query
parameters indicating the result.

`returnUrl` must match the tenant's configured return URL allowlist; otherwise the
request is rejected with 400.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tools.authorizeToolServer({
    serverId: "some example string",
    body: { returnUrl: "some example string" },
  });
  // TODO: Handle 'response' of type AuthorizeToolServerResponse
} catch (err) {
  // TODO: Handle 'err' of type Tools.AuthorizeToolServerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tools.authorizeToolServer({
  serverId: "some example string",
  body: { returnUrl: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthorizeToolServerResponse
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
| <code>serverId</code> | <code>string</code> | Unique identifier of the tool server. |
| <code>body</code> | <code>[AuthorizeToolServerRequest](src/models/authorize-tool-server-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tools.authorizeToolServer(request)`

- **OnSuccess**: <code>[AuthorizeToolServerResponse](src/models/authorize-tool-server-response.ts)</code>
- **OnError**: throws <code>[Tools.AuthorizeToolServerError](src/resources/tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tools.authorizeToolServer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthorizeToolServerResponse, Tools.AuthorizeToolServerError&gt;</code>, with `result.value` of type <code>[AuthorizeToolServerResponse](src/models/authorize-tool-server-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getActionPackAuthStatus(request: Tools.GetActionPackAuthStatusRequest, options?: RequestOptions): ApiPromise&lt;ActionPackAuthStatusResponse, Tools.GetActionPackAuthStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reports whether the calling user is already authenticated against the third-party
tool backing the specified action pack. Intended for headless / server-driven clients
that render an "Authorize" prompt when the user has not yet consented to the tool.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tools.getActionPackAuthStatus({ actionPackId: "some example string" });
  // TODO: Handle 'response' of type ActionPackAuthStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Tools.GetActionPackAuthStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tools.getActionPackAuthStatus({
  actionPackId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActionPackAuthStatusResponse
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
| <code>actionPackId</code> | <code>string</code> | ID of the action pack to query or authorize. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tools.getActionPackAuthStatus(request)`

- **OnSuccess**: <code>[ActionPackAuthStatusResponse](src/models/action-pack-auth-status-response.ts)</code>
- **OnError**: throws <code>[Tools.GetActionPackAuthStatusError](src/resources/tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tools.getActionPackAuthStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActionPackAuthStatusResponse, Tools.GetActionPackAuthStatusError&gt;</code>, with `result.value` of type <code>[ActionPackAuthStatusResponse](src/models/action-pack-auth-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getToolServerAuthStatus(request: Tools.GetToolServerAuthStatusRequest, options?: RequestOptions): ApiPromise&lt;ToolServerAuthStatusResponse, Tools.GetToolServerAuthStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns display information and the calling user's current authentication status
for the specified tool server.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tools.getToolServerAuthStatus({ serverId: "some example string" });
  // TODO: Handle 'response' of type ToolServerAuthStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Tools.GetToolServerAuthStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tools.getToolServerAuthStatus({ serverId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ToolServerAuthStatusResponse
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
| <code>serverId</code> | <code>string</code> | Unique identifier of the tool server. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tools.getToolServerAuthStatus(request)`

- **OnSuccess**: <code>[ToolServerAuthStatusResponse](src/models/tool-server-auth-status-response.ts)</code>
- **OnError**: throws <code>[Tools.GetToolServerAuthStatusError](src/resources/tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tools.getToolServerAuthStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ToolServerAuthStatusResponse, Tools.GetToolServerAuthStatusError&gt;</code>, with `result.value` of type <code>[ToolServerAuthStatusResponse](src/models/tool-server-auth-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getToolServerTools(request: Tools.GetToolServerToolsRequest, options?: RequestOptions): ApiPromise&lt;ToolDefinitionsResponse, Tools.GetToolServerToolsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the name, description and JSON input schema for the named tools on the
specified tool server. Works for Glean's built-in tools, tool packs and MCP
servers.

`toolNames` is required. Names that do not exist on the server are returned in
`notFound` rather than failing the request, so a single bad name does not force
callers into one-at-a-time retries. Matching is case-insensitive and treats `-`
and `_` as equivalent.

Use `serverId=native` for Glean's built-in tools.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tools.getToolServerTools({
    serverId: "some example string",
    toolNames: ["some example string"],
  });
  // TODO: Handle 'response' of type ToolDefinitionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Tools.GetToolServerToolsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tools.getToolServerTools({
  serverId: "some example string",
  toolNames: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ToolDefinitionsResponse
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
| <code>serverId</code> | <code>string</code> | Unique identifier of the tool server. |
| <code>toolNames</code> | <code>string[]</code> | Tool names to look up on this server. Maximum 100. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tools.getToolServerTools(request)`

- **OnSuccess**: <code>[ToolDefinitionsResponse](src/models/tool-definitions-response.ts)</code>
- **OnError**: throws <code>[Tools.GetToolServerToolsError](src/resources/tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tools.getToolServerTools(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ToolDefinitionsResponse, Tools.GetToolServerToolsError&gt;</code>, with `result.value` of type <code>[ToolDefinitionsResponse](src/models/tool-definitions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GleanClientApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

