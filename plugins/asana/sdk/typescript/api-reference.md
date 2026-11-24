# Reference

> Source: [AsanaClient](src/client.ts)

## Attachments

> Source: [Attachments](src/resources/attachments.ts)

<details>
<summary><code>createAttachmentForObject(request?: Attachments.CreateAttachmentForObjectRequest, options?: RequestOptions): ApiPromise&lt;AttachmentsResponse, Attachments.CreateAttachmentForObjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment.

This method uploads an attachment on an object and returns the compact
record for the created attachment object. This is possible by either:

- Providing the URL of the external resource being attached, or
- Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach
files from third party services such as Dropbox, Box, Vimeo & Google Drive via the API

The 100MB size limit on attachments in Asana is enforced on this endpoint.

This endpoint expects a multipart/form-data encoded request containing the full contents of the file to be uploaded.

Requests made should follow the HTTP/1.1 specification that line
terminators are of the form `CRLF` or `\r\n` outlined
here in order for the server to reliably and properly handle the request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachments.createAttachmentForObject({
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type AttachmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Attachments.CreateAttachmentForObjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachments
  .createAttachmentForObject({ optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttachmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>resourceSubtype?</code> | <code>[ResourceSubtype1](src/models/resource-subtype1.ts)</code> | The type of the attachment. Must be one of the given values. If not specified, a file attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a `parent`, `name`, and `url` must also be provided. |
| <code>file?</code> | <code>FileInput</code> | Required for `asana` attachments. |
| <code>parent?</code> | <code>string</code> | Required identifier of the parent task, project, or project_brief, as a string. |
| <code>url?</code> | <code>string</code> | The URL of the external resource being attached. Required for attachments of type `external`. |
| <code>name?</code> | <code>string</code> | The name of the external resource being attached. Required for attachments of type `external`. |
| <code>connectToApp?</code> | <code>boolean</code> | *Optional*. Only relevant for external attachments with a parent task. A boolean indicating whether the current app should be connected with the attachment for the purposes of showing an app components widget. Requires the app to have been added to a project the parent task is in. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachments.createAttachmentForObject(request)`

- **OnSuccess**: <code>[AttachmentsResponse](src/models/attachments-response.ts)</code>
- **OnError**: throws <code>[Attachments.CreateAttachmentForObjectError](src/resources/attachments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachments.createAttachmentForObject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttachmentsResponse, Attachments.CreateAttachmentForObjectError&gt;</code>, with `result.value` of type <code>[AttachmentsResponse](src/models/attachments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAttachment(request: Attachments.DeleteAttachmentRequest, options?: RequestOptions): ApiPromise&lt;AttachmentsResponse1, Attachments.DeleteAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific, existing attachment.

Returns an empty data record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachments.deleteAttachment({
    attachmentGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type AttachmentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Attachments.DeleteAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachments
  .deleteAttachment({ attachmentGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttachmentsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>attachmentGid</code> | <code>string</code> | Globally unique identifier for the attachment. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachments.deleteAttachment(request)`

- **OnSuccess**: <code>[AttachmentsResponse1](src/models/attachments-response1.ts)</code>
- **OnError**: throws <code>[Attachments.DeleteAttachmentError](src/resources/attachments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachments.deleteAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttachmentsResponse1, Attachments.DeleteAttachmentError&gt;</code>, with `result.value` of type <code>[AttachmentsResponse1](src/models/attachments-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAttachment(request: Attachments.GetAttachmentRequest, options?: RequestOptions): ApiPromise&lt;AttachmentsResponse, Attachments.GetAttachmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the full record for a single attachment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachments.getAttachment({
    attachmentGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type AttachmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Attachments.GetAttachmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachments
  .getAttachment({ attachmentGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttachmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>attachmentGid</code> | <code>string</code> | Globally unique identifier for the attachment. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachments.getAttachment(request)`

- **OnSuccess**: <code>[AttachmentsResponse](src/models/attachments-response.ts)</code>
- **OnError**: throws <code>[Attachments.GetAttachmentError](src/resources/attachments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachments.getAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttachmentsResponse, Attachments.GetAttachmentError&gt;</code>, with `result.value` of type <code>[AttachmentsResponse](src/models/attachments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAttachmentsForObject(request: Attachments.GetAttachmentsForObjectRequest, options?: RequestOptions): ApiPromise&lt;AttachmentsResponse2, Attachments.GetAttachmentsForObjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all attachments on the object.

There are three possible `parent` values for this request: `project`, `project_brief`, and `task`. For a project, an attachment refers to a file uploaded to the "Key resources" section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attachments.getAttachmentsForObject({
    parent: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type AttachmentsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Attachments.GetAttachmentsForObjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attachments
  .getAttachmentsForObject({
    parent: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttachmentsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>parent</code> | <code>string</code> | Globally unique identifier for object to fetch statuses from. Must be a GID for a `project`, `project_brief`, or `task`. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attachments.getAttachmentsForObject(request)`

- **OnSuccess**: <code>[AttachmentsResponse2](src/models/attachments-response2.ts)</code>
- **OnError**: throws <code>[Attachments.GetAttachmentsForObjectError](src/resources/attachments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attachments.getAttachmentsForObject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttachmentsResponse2, Attachments.GetAttachmentsForObjectError&gt;</code>, with `result.value` of type <code>[AttachmentsResponse2](src/models/attachments-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLogApi

> Source: [AuditLogApi](src/resources/audit-log-api.ts)

<details>
<summary><code>getAuditLogEvents(request: AuditLogApi.GetAuditLogEventsRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesAuditLogEventsResponse, AuditLogApi.GetAuditLogEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the audit log events that have been captured in your domain.

This endpoint will return a list of AuditLogEvent objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.

There are a number of query parameters (below) that can be used to filter the set of AuditLogEvent objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.

The list of events will always be paginated. The default limit is 1000 events. The next set of events can be retrieved using the `offset` from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return `null` for the `next_page` field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a `next_page` with an `offset`, subsequent requests can be made with the latest `offset` to poll for new events that match the provided filters.

When no `offset` is provided, the response will begin with the oldest events that match the provided filters. It is important to note that AuditLogEvent objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auditLogApi.getAuditLogEvents({
    workspaceGid: "12345",
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type WorkspacesAuditLogEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type AuditLogApi.GetAuditLogEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auditLogApi
  .getAuditLogEvents({ workspaceGid: "12345", limit: 50, offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesAuditLogEventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>startAt?</code> | <code>Date</code> (date-time) | Filter to events created after this time (inclusive). |
| <code>endAt?</code> | <code>Date</code> (date-time) | Filter to events created before this time (exclusive). |
| <code>eventType?</code> | <code>string</code> | Filter to events of this type.<br>Refer to the [Supported AuditLogEvents](/docs/supported-auditlogevents) for a full list of values. |
| <code>actorType?</code> | <code>[ActorType1](src/models/actor-type1.ts)</code> | Filter to events with an actor of this type.<br>This only needs to be included if querying for actor types without an ID. If `actor_gid` is included, this should be excluded. |
| <code>actorGid?</code> | <code>string</code> | Filter to events triggered by the actor with this ID. |
| <code>resourceGid?</code> | <code>string</code> | Filter to events with this resource ID. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auditLogApi.getAuditLogEvents(request)`

- **OnSuccess**: <code>[WorkspacesAuditLogEventsResponse](src/models/workspaces-audit-log-events-response.ts)</code>
- **OnError**: throws <code>[AuditLogApi.GetAuditLogEventsError](src/resources/audit-log-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.auditLogApi.getAuditLogEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesAuditLogEventsResponse, AuditLogApi.GetAuditLogEventsError&gt;</code>, with `result.value` of type <code>[WorkspacesAuditLogEventsResponse](src/models/workspaces-audit-log-events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BatchApi

> Source: [BatchApi](src/resources/batch-api.ts)

<details>
<summary><code>createBatchRequest(request: BatchApi.CreateBatchRequestRequest, options?: RequestOptions): ApiPromise&lt;BatchResponse1, BatchApi.CreateBatchRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Make multiple requests in parallel to Asana's API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.batchApi.createBatchRequest({
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type BatchResponse1
} catch (err) {
  // TODO: Handle 'err' of type BatchApi.CreateBatchRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.batchApi
  .createBatchRequest({ optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[BatchRequest1](src/models/batch-request1.ts)</code> | The requests to batch together via the Batch API. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.batchApi.createBatchRequest(request)`

- **OnSuccess**: <code>[BatchResponse1](src/models/batch-response1.ts)</code>
- **OnError**: throws <code>[BatchApi.CreateBatchRequestError](src/resources/batch-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.batchApi.createBatchRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchResponse1, BatchApi.CreateBatchRequestError&gt;</code>, with `result.value` of type <code>[BatchResponse1](src/models/batch-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFieldSettings

> Source: [CustomFieldSettings](src/resources/custom-field-settings.ts)

<details>
<summary><code>getCustomFieldSettingsForPortfolio(request: CustomFieldSettings.GetCustomFieldSettingsForPortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosCustomFieldSettingsResponse, CustomFieldSettings.GetCustomFieldSettingsForPortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all of the custom fields settings on a portfolio, in compact form.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFieldSettings.getCustomFieldSettingsForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type PortfoliosCustomFieldSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFieldSettings.GetCustomFieldSettingsForPortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFieldSettings
  .getCustomFieldSettingsForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosCustomFieldSettingsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioGid</code> | <code>string</code> | Globally unique identifier for the portfolio. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFieldSettings.getCustomFieldSettingsForPortfolio(request)`

- **OnSuccess**: <code>[PortfoliosCustomFieldSettingsResponse](src/models/portfolios-custom-field-settings-response.ts)</code>
- **OnError**: throws <code>[CustomFieldSettings.GetCustomFieldSettingsForPortfolioError](src/resources/custom-field-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFieldSettings.getCustomFieldSettingsForPortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosCustomFieldSettingsResponse, CustomFieldSettings.GetCustomFieldSettingsForPortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosCustomFieldSettingsResponse](src/models/portfolios-custom-field-settings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomFieldSettingsForProject(request: CustomFieldSettings.GetCustomFieldSettingsForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsCustomFieldSettingsResponse, CustomFieldSettings.GetCustomFieldSettingsForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, `opt_fields` can be used to include more data than is returned in the compact representation. See the getting started guide on input/output options for more information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFieldSettings.getCustomFieldSettingsForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type ProjectsCustomFieldSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFieldSettings.GetCustomFieldSettingsForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFieldSettings
  .getCustomFieldSettingsForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsCustomFieldSettingsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFieldSettings.getCustomFieldSettingsForProject(request)`

- **OnSuccess**: <code>[ProjectsCustomFieldSettingsResponse](src/models/projects-custom-field-settings-response.ts)</code>
- **OnError**: throws <code>[CustomFieldSettings.GetCustomFieldSettingsForProjectError](src/resources/custom-field-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFieldSettings.getCustomFieldSettingsForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsCustomFieldSettingsResponse, CustomFieldSettings.GetCustomFieldSettingsForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsCustomFieldSettingsResponse](src/models/projects-custom-field-settings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFields

> Source: [CustomFields](src/resources/custom-fields.ts)

<details>
<summary><code>createCustomField(request?: CustomFields.CreateCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomFieldsResponse, CustomFields.CreateCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom field in a workspace. Every custom field is required
to be created in a specific workspace, and this workspace cannot be
changed once set.

A custom field’s name must be unique within a workspace and not conflict
with names of existing task properties such as `Due Date` or `Assignee`.
A custom field’s type must be one of `text`, `enum`, `multi_enum`, `number`,
`date`, or `people`.

Returns the full record of the newly created custom field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.createCustomField({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type CustomFieldsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.CreateCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .createCustomField({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>body?</code> | <code>[CustomFieldsRequest](src/models/custom-fields-request.ts)</code> | The custom field object to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.createCustomField(request)`

- **OnSuccess**: <code>[CustomFieldsResponse](src/models/custom-fields-response.ts)</code>
- **OnError**: throws <code>[CustomFields.CreateCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.createCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldsResponse, CustomFields.CreateCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomFieldsResponse](src/models/custom-fields-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEnumOptionForCustomField(request: CustomFields.CreateEnumOptionForCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomFieldsEnumOptionsResponse, CustomFields.CreateEnumOptionForCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 500 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list.
Locked custom fields can only have enum options added by the user who locked the field.
Returns the full record of the newly created enum option.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.createEnumOptionForCustomField({
    customFieldGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type CustomFieldsEnumOptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.CreateEnumOptionForCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .createEnumOptionForCustomField({
    customFieldGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldsEnumOptionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldGid</code> | <code>string</code> | Globally unique identifier for the custom field. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>body?</code> | <code>[CustomFieldsEnumOptionsRequest](src/models/custom-fields-enum-options-request.ts)</code> | The enum option object to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.createEnumOptionForCustomField(request)`

- **OnSuccess**: <code>[CustomFieldsEnumOptionsResponse](src/models/custom-fields-enum-options-response.ts)</code>
- **OnError**: throws <code>[CustomFields.CreateEnumOptionForCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.createEnumOptionForCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldsEnumOptionsResponse, CustomFields.CreateEnumOptionForCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomFieldsEnumOptionsResponse](src/models/custom-fields-enum-options-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomField(request: CustomFields.DeleteCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomFieldsResponse3, CustomFields.DeleteCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field.
Locked custom fields can only be deleted by the user who locked the field.
Returns an empty data record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.deleteCustomField({
    customFieldGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type CustomFieldsResponse3
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.DeleteCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .deleteCustomField({ customFieldGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldsResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldGid</code> | <code>string</code> | Globally unique identifier for the custom field. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.deleteCustomField(request)`

- **OnSuccess**: <code>[CustomFieldsResponse3](src/models/custom-fields-response3.ts)</code>
- **OnError**: throws <code>[CustomFields.DeleteCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.deleteCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldsResponse3, CustomFields.DeleteCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomFieldsResponse3](src/models/custom-fields-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomField(request: CustomFields.GetCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomFieldsResponse, CustomFields.GetCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the complete definition of a custom field’s metadata.

Since custom fields can be defined for one of a number of types, and
these types have different data and behaviors, there are fields that are
relevant to a particular type. For instance, as noted above, enum_options
is only relevant for the enum type and defines the set of choices that
the enum could represent. The examples below show some of these
type-specific custom field definitions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.getCustomField({
    customFieldGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type CustomFieldsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.GetCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .getCustomField({ customFieldGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldGid</code> | <code>string</code> | Globally unique identifier for the custom field. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.getCustomField(request)`

- **OnSuccess**: <code>[CustomFieldsResponse](src/models/custom-fields-response.ts)</code>
- **OnError**: throws <code>[CustomFields.GetCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.getCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldsResponse, CustomFields.GetCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomFieldsResponse](src/models/custom-fields-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomFieldsForWorkspace(request: CustomFields.GetCustomFieldsForWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesCustomFieldsResponse, CustomFields.GetCustomFieldsForWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the compact representation of all of the custom fields in a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.getCustomFieldsForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type WorkspacesCustomFieldsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.GetCustomFieldsForWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .getCustomFieldsForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesCustomFieldsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.getCustomFieldsForWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesCustomFieldsResponse](src/models/workspaces-custom-fields-response.ts)</code>
- **OnError**: throws <code>[CustomFields.GetCustomFieldsForWorkspaceError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.getCustomFieldsForWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesCustomFieldsResponse, CustomFields.GetCustomFieldsForWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesCustomFieldsResponse](src/models/workspaces-custom-fields-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insertEnumOptionForCustomField(request: CustomFields.InsertEnumOptionForCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomFieldsEnumOptionsInsertResponse, CustomFields.InsertEnumOptionForCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Moves a particular enum option to be either before or after another specified enum option in the custom field.
Locked custom fields can only be reordered by the user who locked the field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.insertEnumOptionForCustomField({
    customFieldGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type CustomFieldsEnumOptionsInsertResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.InsertEnumOptionForCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .insertEnumOptionForCustomField({
    customFieldGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldsEnumOptionsInsertResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldGid</code> | <code>string</code> | Globally unique identifier for the custom field. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body?</code> | <code>[CustomFieldsEnumOptionsInsertRequest](src/models/custom-fields-enum-options-insert-request.ts)</code> | The enum option object to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.insertEnumOptionForCustomField(request)`

- **OnSuccess**: <code>[CustomFieldsEnumOptionsInsertResponse](src/models/custom-fields-enum-options-insert-response.ts)</code>
- **OnError**: throws <code>[CustomFields.InsertEnumOptionForCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.insertEnumOptionForCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldsEnumOptionsInsertResponse, CustomFields.InsertEnumOptionForCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomFieldsEnumOptionsInsertResponse](src/models/custom-fields-enum-options-insert-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomField(request: CustomFields.UpdateCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomFieldsResponse, CustomFields.UpdateCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged
When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field.
A custom field’s `type` cannot be updated.
An enum custom field’s `enum_options` cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update `enum_options`.
Locked custom fields can only be updated by the user who locked the field.
Returns the complete updated custom field record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.updateCustomField({
    customFieldGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type CustomFieldsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.UpdateCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .updateCustomField({ customFieldGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldGid</code> | <code>string</code> | Globally unique identifier for the custom field. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body?</code> | <code>[CustomFieldsRequest](src/models/custom-fields-request.ts)</code> | The custom field object with all updated properties. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.updateCustomField(request)`

- **OnSuccess**: <code>[CustomFieldsResponse](src/models/custom-fields-response.ts)</code>
- **OnError**: throws <code>[CustomFields.UpdateCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.updateCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldsResponse, CustomFields.UpdateCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomFieldsResponse](src/models/custom-fields-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEnumOption(request: CustomFields.UpdateEnumOptionRequest, options?: RequestOptions): ApiPromise&lt;EnumOptionsResponse, CustomFields.UpdateEnumOptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing enum option. Enum custom fields require at least one enabled enum option.
Locked custom fields can only be updated by the user who locked the field.
Returns the full record of the updated enum option.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.updateEnumOption({
    enumOptionGid: "124578",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type EnumOptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.UpdateEnumOptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .updateEnumOption({ enumOptionGid: "124578", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnumOptionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>enumOptionGid</code> | <code>string</code> | Globally unique identifier for the enum option. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body?</code> | <code>[EnumOptionsRequest](src/models/enum-options-request.ts)</code> | The enum option object to update |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.updateEnumOption(request)`

- **OnSuccess**: <code>[EnumOptionsResponse](src/models/enum-options-response.ts)</code>
- **OnError**: throws <code>[CustomFields.UpdateEnumOptionError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.updateEnumOption(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnumOptionsResponse, CustomFields.UpdateEnumOptionError&gt;</code>, with `result.value` of type <code>[EnumOptionsResponse](src/models/enum-options-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>getEvents(request: Events.GetEventsRequest, options?: RequestOptions): ApiPromise&lt;EventsResponse, Events.GetEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for all events that have occurred since the sync
token was created.

A `GET` request to the endpoint `/[path_to_resource]/events` can be made in
lieu of including the resource ID in the data for the request.

Asana limits a single sync token to 100 events. If more than 100 events exist
for a given resource, `has_more: true` will be returned in the response, indicating
that there are more events to pull.

*Note: The resource returned will be the resource that triggered the
event. This may be different from the one that the events were requested
for. For example, a subscription to a project will contain events for
tasks contained within the project.*

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.getEvents({
    resource: "12345",
    sync: "de4774f6915eae04714ca93bb2f5ee81",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type EventsResponse
} catch (err) {
  // TODO: Handle 'err' of type Events.GetEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events
  .getEvents({
    resource: "12345",
    sync: "de4774f6915eae04714ca93bb2f5ee81",
    optPretty: true,
    optFields: ["followers", "assignee"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource</code> | <code>string</code> | A resource ID to subscribe to. The resource can be a task or project. |
| <code>sync?</code> | <code>string</code> | A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated.<br>*Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a `412 Precondition Failed` error, and include a fresh sync token in the response.* |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.getEvents(request)`

- **OnSuccess**: <code>[EventsResponse](src/models/events-response.ts)</code>
- **OnError**: throws <code>[Events.GetEventsError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.getEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsResponse, Events.GetEventsError&gt;</code>, with `result.value` of type <code>[EventsResponse](src/models/events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GoalRelationships

> Source: [GoalRelationships](src/resources/goal-relationships.ts)

<details>
<summary><code>addSupportingRelationship(request: GoalRelationships.AddSupportingRelationshipRequest, options?: RequestOptions): ApiPromise&lt;GoalsAddSupportingRelationshipResponse, GoalRelationships.AddSupportingRelationshipError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a goal relationship by adding a supporting resource to a given goal.

Returns the newly created goal relationship record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goalRelationships.addSupportingRelationship({
    goalGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type GoalsAddSupportingRelationshipResponse
} catch (err) {
  // TODO: Handle 'err' of type GoalRelationships.AddSupportingRelationshipError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goalRelationships
  .addSupportingRelationship({
    goalGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalsAddSupportingRelationshipResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>goalGid</code> | <code>string</code> | Globally unique identifier for the goal. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[GoalsAddSupportingRelationshipRequest](src/models/goals-add-supporting-relationship-request.ts)</code> | The supporting resource to be added to the goal |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goalRelationships.addSupportingRelationship(request)`

- **OnSuccess**: <code>[GoalsAddSupportingRelationshipResponse](src/models/goals-add-supporting-relationship-response.ts)</code>
- **OnError**: throws <code>[GoalRelationships.AddSupportingRelationshipError](src/resources/goal-relationships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goalRelationships.addSupportingRelationship(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalsAddSupportingRelationshipResponse, GoalRelationships.AddSupportingRelationshipError&gt;</code>, with `result.value` of type <code>[GoalsAddSupportingRelationshipResponse](src/models/goals-add-supporting-relationship-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGoalRelationship(request: GoalRelationships.GetGoalRelationshipRequest, options?: RequestOptions): ApiPromise&lt;GoalRelationshipsResponse, GoalRelationships.GetGoalRelationshipError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete updated goal relationship record for a single goal relationship.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goalRelationships.getGoalRelationship({
    goalRelationshipGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type GoalRelationshipsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoalRelationships.GetGoalRelationshipError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goalRelationships
  .getGoalRelationship({
    goalRelationshipGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalRelationshipsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>goalRelationshipGid</code> | <code>string</code> | Globally unique identifier for the goal relationship. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goalRelationships.getGoalRelationship(request)`

- **OnSuccess**: <code>[GoalRelationshipsResponse](src/models/goal-relationships-response.ts)</code>
- **OnError**: throws <code>[GoalRelationships.GetGoalRelationshipError](src/resources/goal-relationships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goalRelationships.getGoalRelationship(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalRelationshipsResponse, GoalRelationships.GetGoalRelationshipError&gt;</code>, with `result.value` of type <code>[GoalRelationshipsResponse](src/models/goal-relationships-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGoalRelationships(request: GoalRelationships.GetGoalRelationshipsRequest, options?: RequestOptions): ApiPromise&lt;GoalRelationshipsResponse2, GoalRelationships.GetGoalRelationshipsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns compact goal relationship records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goalRelationships.getGoalRelationships({
    supportedGoal: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    resourceSubtype: "subgoal",
  });
  // TODO: Handle 'response' of type GoalRelationshipsResponse2
} catch (err) {
  // TODO: Handle 'err' of type GoalRelationships.GetGoalRelationshipsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goalRelationships
  .getGoalRelationships({
    supportedGoal: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    resourceSubtype: "subgoal",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalRelationshipsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>supportedGoal</code> | <code>string</code> | Globally unique identifier for the supported goal in the goal relationship. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>resourceSubtype?</code> | <code>string</code> | If provided, filter to goal relationships with a given resource_subtype. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goalRelationships.getGoalRelationships(request)`

- **OnSuccess**: <code>[GoalRelationshipsResponse2](src/models/goal-relationships-response2.ts)</code>
- **OnError**: throws <code>[GoalRelationships.GetGoalRelationshipsError](src/resources/goal-relationships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goalRelationships.getGoalRelationships(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalRelationshipsResponse2, GoalRelationships.GetGoalRelationshipsError&gt;</code>, with `result.value` of type <code>[GoalRelationshipsResponse2](src/models/goal-relationships-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeSupportingRelationship(request: GoalRelationships.RemoveSupportingRelationshipRequest, options?: RequestOptions): ApiPromise&lt;GoalsRemoveSupportingRelationshipResponse, GoalRelationships.RemoveSupportingRelationshipError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a goal relationship for a given parent goal.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goalRelationships.removeSupportingRelationship({
    goalGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type GoalsRemoveSupportingRelationshipResponse
} catch (err) {
  // TODO: Handle 'err' of type GoalRelationships.RemoveSupportingRelationshipError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goalRelationships
  .removeSupportingRelationship({
    goalGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalsRemoveSupportingRelationshipResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>goalGid</code> | <code>string</code> | Globally unique identifier for the goal. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[GoalsRemoveSupportingRelationshipRequest](src/models/goals-remove-supporting-relationship-request.ts)</code> | The supporting resource to be removed from the goal |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goalRelationships.removeSupportingRelationship(request)`

- **OnSuccess**: <code>[GoalsRemoveSupportingRelationshipResponse](src/models/goals-remove-supporting-relationship-response.ts)</code>
- **OnError**: throws <code>[GoalRelationships.RemoveSupportingRelationshipError](src/resources/goal-relationships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goalRelationships.removeSupportingRelationship(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalsRemoveSupportingRelationshipResponse, GoalRelationships.RemoveSupportingRelationshipError&gt;</code>, with `result.value` of type <code>[GoalsRemoveSupportingRelationshipResponse](src/models/goals-remove-supporting-relationship-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGoalRelationship(request: GoalRelationships.UpdateGoalRelationshipRequest, options?: RequestOptions): ApiPromise&lt;GoalRelationshipsResponse, GoalRelationships.UpdateGoalRelationshipError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An existing goal relationship can be updated by making a PUT request on the URL for
that goal relationship. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated goal relationship record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goalRelationships.updateGoalRelationship({
    goalRelationshipGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type GoalRelationshipsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoalRelationships.UpdateGoalRelationshipError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goalRelationships
  .updateGoalRelationship({
    goalRelationshipGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalRelationshipsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>goalRelationshipGid</code> | <code>string</code> | Globally unique identifier for the goal relationship. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[GoalRelationshipsRequest](src/models/goal-relationships-request.ts)</code> | The updated fields for the goal relationship. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goalRelationships.updateGoalRelationship(request)`

- **OnSuccess**: <code>[GoalRelationshipsResponse](src/models/goal-relationships-response.ts)</code>
- **OnError**: throws <code>[GoalRelationships.UpdateGoalRelationshipError](src/resources/goal-relationships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goalRelationships.updateGoalRelationship(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalRelationshipsResponse, GoalRelationships.UpdateGoalRelationshipError&gt;</code>, with `result.value` of type <code>[GoalRelationshipsResponse](src/models/goal-relationships-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Goals

> Source: [Goals](src/resources/goals.ts)

<details>
<summary><code>addFollowers(request: Goals.AddFollowersRequestParams, options?: RequestOptions): ApiPromise&lt;GoalsAddFollowersResponse, Goals.AddFollowersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds followers to a goal. Returns the goal the followers were added to.
Each goal can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goals.addFollowers({
    goalGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type GoalsAddFollowersResponse
} catch (err) {
  // TODO: Handle 'err' of type Goals.AddFollowersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goals
  .addFollowers({ goalGid: "12345", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalsAddFollowersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>goalGid</code> | <code>string</code> | Globally unique identifier for the goal. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[GoalsAddFollowersRequest](src/models/goals-add-followers-request.ts)</code> | The followers to be added as collaborators |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goals.addFollowers(request)`

- **OnSuccess**: <code>[GoalsAddFollowersResponse](src/models/goals-add-followers-response.ts)</code>
- **OnError**: throws <code>[Goals.AddFollowersError](src/resources/goals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goals.addFollowers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalsAddFollowersResponse, Goals.AddFollowersError&gt;</code>, with `result.value` of type <code>[GoalsAddFollowersResponse](src/models/goals-add-followers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createGoal(request: Goals.CreateGoalRequest, options?: RequestOptions): ApiPromise&lt;GoalsResponse, Goals.CreateGoalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new goal in a workspace or team.

Returns the full record of the newly created goal.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goals.createGoal({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    body: {},
  });
  // TODO: Handle 'response' of type GoalsResponse
} catch (err) {
  // TODO: Handle 'err' of type Goals.CreateGoalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goals
  .createGoal({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>body</code> | <code>[GoalsRequest](src/models/goals-request.ts)</code> | The goal to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goals.createGoal(request)`

- **OnSuccess**: <code>[GoalsResponse](src/models/goals-response.ts)</code>
- **OnError**: throws <code>[Goals.CreateGoalError](src/resources/goals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goals.createGoal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalsResponse, Goals.CreateGoalError&gt;</code>, with `result.value` of type <code>[GoalsResponse](src/models/goals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createGoalMetric(request: Goals.CreateGoalMetricRequest, options?: RequestOptions): ApiPromise&lt;GoalsSetMetricResponse, Goals.CreateGoalMetricError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goals.createGoalMetric({
    goalGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type GoalsSetMetricResponse
} catch (err) {
  // TODO: Handle 'err' of type Goals.CreateGoalMetricError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goals
  .createGoalMetric({ goalGid: "12345", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalsSetMetricResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>goalGid</code> | <code>string</code> | Globally unique identifier for the goal. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[GoalsSetMetricRequest](src/models/goals-set-metric-request.ts)</code> | The goal metric to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goals.createGoalMetric(request)`

- **OnSuccess**: <code>[GoalsSetMetricResponse](src/models/goals-set-metric-response.ts)</code>
- **OnError**: throws <code>[Goals.CreateGoalMetricError](src/resources/goals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goals.createGoalMetric(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalsSetMetricResponse, Goals.CreateGoalMetricError&gt;</code>, with `result.value` of type <code>[GoalsSetMetricResponse](src/models/goals-set-metric-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGoal(request: Goals.DeleteGoalRequest, options?: RequestOptions): ApiPromise&lt;GoalsResponse2, Goals.DeleteGoalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.

Returns an empty data record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goals.deleteGoal({
    goalGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type GoalsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Goals.DeleteGoalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goals
  .deleteGoal({ goalGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>goalGid</code> | <code>string</code> | Globally unique identifier for the goal. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goals.deleteGoal(request)`

- **OnSuccess**: <code>[GoalsResponse2](src/models/goals-response2.ts)</code>
- **OnError**: throws <code>[Goals.DeleteGoalError](src/resources/goals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goals.deleteGoal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalsResponse2, Goals.DeleteGoalError&gt;</code>, with `result.value` of type <code>[GoalsResponse2](src/models/goals-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGoal(request: Goals.GetGoalRequest, options?: RequestOptions): ApiPromise&lt;GoalsResponse, Goals.GetGoalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete goal record for a single goal.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goals.getGoal({
    goalGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type GoalsResponse
} catch (err) {
  // TODO: Handle 'err' of type Goals.GetGoalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goals
  .getGoal({ goalGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>goalGid</code> | <code>string</code> | Globally unique identifier for the goal. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goals.getGoal(request)`

- **OnSuccess**: <code>[GoalsResponse](src/models/goals-response.ts)</code>
- **OnError**: throws <code>[Goals.GetGoalError](src/resources/goals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goals.getGoal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalsResponse, Goals.GetGoalError&gt;</code>, with `result.value` of type <code>[GoalsResponse](src/models/goals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGoals(request?: Goals.GetGoalsRequest, options?: RequestOptions): ApiPromise&lt;GoalsResponse3, Goals.GetGoalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns compact goal records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goals.getGoals({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    portfolio: "159874",
    project: "512241",
    isWorkspaceLevel: false,
    team: "31326",
    workspace: "31326",
    timePeriods: ["221693,506165"],
  });
  // TODO: Handle 'response' of type GoalsResponse3
} catch (err) {
  // TODO: Handle 'err' of type Goals.GetGoalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goals
  .getGoals({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    portfolio: "159874",
    project: "512241",
    isWorkspaceLevel: false,
    team: "31326",
    workspace: "31326",
    timePeriods: ["221693,506165"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalsResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>portfolio?</code> | <code>string</code> | Globally unique identifier for supporting portfolio. |
| <code>project?</code> | <code>string</code> | Globally unique identifier for supporting project. |
| <code>isWorkspaceLevel?</code> | <code>boolean</code> | Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter. |
| <code>team?</code> | <code>string</code> | Globally unique identifier for the team. |
| <code>workspace?</code> | <code>string</code> | Globally unique identifier for the workspace. |
| <code>timePeriods?</code> | <code>string[]</code> | Globally unique identifiers for the time periods. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goals.getGoals(request)`

- **OnSuccess**: <code>[GoalsResponse3](src/models/goals-response3.ts)</code>
- **OnError**: throws <code>[Goals.GetGoalsError](src/resources/goals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goals.getGoals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalsResponse3, Goals.GetGoalsError&gt;</code>, with `result.value` of type <code>[GoalsResponse3](src/models/goals-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getParentGoalsForGoal(request: Goals.GetParentGoalsForGoalRequest, options?: RequestOptions): ApiPromise&lt;GoalsParentGoalsResponse, Goals.GetParentGoalsForGoalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a compact representation of all of the parent goals of a goal.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goals.getParentGoalsForGoal({
    goalGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type GoalsParentGoalsResponse
} catch (err) {
  // TODO: Handle 'err' of type Goals.GetParentGoalsForGoalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goals
  .getParentGoalsForGoal({ goalGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalsParentGoalsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>goalGid</code> | <code>string</code> | Globally unique identifier for the goal. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goals.getParentGoalsForGoal(request)`

- **OnSuccess**: <code>[GoalsParentGoalsResponse](src/models/goals-parent-goals-response.ts)</code>
- **OnError**: throws <code>[Goals.GetParentGoalsForGoalError](src/resources/goals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goals.getParentGoalsForGoal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalsParentGoalsResponse, Goals.GetParentGoalsForGoalError&gt;</code>, with `result.value` of type <code>[GoalsParentGoalsResponse](src/models/goals-parent-goals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeFollowers(request: Goals.RemoveFollowersRequestParams, options?: RequestOptions): ApiPromise&lt;GoalsRemoveFollowersResponse, Goals.RemoveFollowersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes followers from a goal. Returns the goal the followers were removed from.
Each goal can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goals.removeFollowers({
    goalGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type GoalsRemoveFollowersResponse
} catch (err) {
  // TODO: Handle 'err' of type Goals.RemoveFollowersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goals
  .removeFollowers({ goalGid: "12345", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalsRemoveFollowersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>goalGid</code> | <code>string</code> | Globally unique identifier for the goal. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[GoalsRemoveFollowersRequest](src/models/goals-remove-followers-request.ts)</code> | The followers to be removed as collaborators |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goals.removeFollowers(request)`

- **OnSuccess**: <code>[GoalsRemoveFollowersResponse](src/models/goals-remove-followers-response.ts)</code>
- **OnError**: throws <code>[Goals.RemoveFollowersError](src/resources/goals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goals.removeFollowers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalsRemoveFollowersResponse, Goals.RemoveFollowersError&gt;</code>, with `result.value` of type <code>[GoalsRemoveFollowersResponse](src/models/goals-remove-followers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGoal(request: Goals.UpdateGoalRequest, options?: RequestOptions): ApiPromise&lt;GoalsResponse, Goals.UpdateGoalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An existing goal can be updated by making a PUT request on the URL for
that goal. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated goal record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goals.updateGoal({
    goalGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type GoalsResponse
} catch (err) {
  // TODO: Handle 'err' of type Goals.UpdateGoalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goals
  .updateGoal({ goalGid: "12345", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>goalGid</code> | <code>string</code> | Globally unique identifier for the goal. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[GoalsRequest](src/models/goals-request.ts)</code> | The updated fields for the goal. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goals.updateGoal(request)`

- **OnSuccess**: <code>[GoalsResponse](src/models/goals-response.ts)</code>
- **OnError**: throws <code>[Goals.UpdateGoalError](src/resources/goals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goals.updateGoal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalsResponse, Goals.UpdateGoalError&gt;</code>, with `result.value` of type <code>[GoalsResponse](src/models/goals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGoalMetric(request: Goals.UpdateGoalMetricRequest, options?: RequestOptions): ApiPromise&lt;GoalsSetMetricCurrentValueResponse, Goals.UpdateGoalMetricError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a goal's existing metric's `current_number_value` if one exists,
otherwise responds with a 400 status code.

Returns the complete updated goal metric record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goals.updateGoalMetric({
    goalGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type GoalsSetMetricCurrentValueResponse
} catch (err) {
  // TODO: Handle 'err' of type Goals.UpdateGoalMetricError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goals
  .updateGoalMetric({ goalGid: "12345", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GoalsSetMetricCurrentValueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>goalGid</code> | <code>string</code> | Globally unique identifier for the goal. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[GoalsSetMetricCurrentValueRequest](src/models/goals-set-metric-current-value-request.ts)</code> | The updated fields for the goal metric. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goals.updateGoalMetric(request)`

- **OnSuccess**: <code>[GoalsSetMetricCurrentValueResponse](src/models/goals-set-metric-current-value-response.ts)</code>
- **OnError**: throws <code>[Goals.UpdateGoalMetricError](src/resources/goals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goals.updateGoalMetric(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GoalsSetMetricCurrentValueResponse, Goals.UpdateGoalMetricError&gt;</code>, with `result.value` of type <code>[GoalsSetMetricCurrentValueResponse](src/models/goals-set-metric-current-value-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/resources/jobs.ts)

<details>
<summary><code>getJob(request: Jobs.GetJobRequest, options?: RequestOptions): ApiPromise&lt;JobsResponse, Jobs.GetJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for a job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJob({
    jobGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type JobsResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .getJob({ jobGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobGid</code> | <code>string</code> | Globally unique identifier for the job. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJob(request)`

- **OnSuccess**: <code>[JobsResponse](src/models/jobs-response.ts)</code>
- **OnError**: throws <code>[Jobs.GetJobError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobsResponse, Jobs.GetJobError&gt;</code>, with `result.value` of type <code>[JobsResponse](src/models/jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationExports

> Source: [OrganizationExports](src/resources/organization-exports.ts)

<details>
<summary><code>createOrganizationExport(request: OrganizationExports.CreateOrganizationExportRequest, options?: RequestOptions): ApiPromise&lt;OrganizationExportsResponse, OrganizationExports.CreateOrganizationExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationExports.createOrganizationExport({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    body: {},
  });
  // TODO: Handle 'response' of type OrganizationExportsResponse
} catch (err) {
  // TODO: Handle 'err' of type OrganizationExports.CreateOrganizationExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationExports
  .createOrganizationExport({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationExportsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>body</code> | <code>[OrganizationExportsRequest](src/models/organization-exports-request.ts)</code> | The organization to export. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationExports.createOrganizationExport(request)`

- **OnSuccess**: <code>[OrganizationExportsResponse](src/models/organization-exports-response.ts)</code>
- **OnError**: throws <code>[OrganizationExports.CreateOrganizationExportError](src/resources/organization-exports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationExports.createOrganizationExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationExportsResponse, OrganizationExports.CreateOrganizationExportError&gt;</code>, with `result.value` of type <code>[OrganizationExportsResponse](src/models/organization-exports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrganizationExport(request: OrganizationExports.GetOrganizationExportRequest, options?: RequestOptions): ApiPromise&lt;OrganizationExportsResponse, OrganizationExports.GetOrganizationExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details of a previously-requested Organization export.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationExports.getOrganizationExport({
    organizationExportGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type OrganizationExportsResponse
} catch (err) {
  // TODO: Handle 'err' of type OrganizationExports.GetOrganizationExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationExports
  .getOrganizationExport({
    organizationExportGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationExportsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationExportGid</code> | <code>string</code> | Globally unique identifier for the organization export. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationExports.getOrganizationExport(request)`

- **OnSuccess**: <code>[OrganizationExportsResponse](src/models/organization-exports-response.ts)</code>
- **OnError**: throws <code>[OrganizationExports.GetOrganizationExportError](src/resources/organization-exports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationExports.getOrganizationExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationExportsResponse, OrganizationExports.GetOrganizationExportError&gt;</code>, with `result.value` of type <code>[OrganizationExportsResponse](src/models/organization-exports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PortfolioMemberships

> Source: [PortfolioMemberships](src/resources/portfolio-memberships.ts)

<details>
<summary><code>getPortfolioMembership(request: PortfolioMemberships.GetPortfolioMembershipRequest, options?: RequestOptions): ApiPromise&lt;PortfolioMembershipsResponse1, PortfolioMemberships.GetPortfolioMembershipError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete portfolio record for a single portfolio membership.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMemberships.getPortfolioMembership({
    portfolioMembershipGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type PortfolioMembershipsResponse1
} catch (err) {
  // TODO: Handle 'err' of type PortfolioMemberships.GetPortfolioMembershipError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolioMemberships
  .getPortfolioMembership({
    portfolioMembershipGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfolioMembershipsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioMembershipGid</code> | <code>string</code> | - |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolioMemberships.getPortfolioMembership(request)`

- **OnSuccess**: <code>[PortfolioMembershipsResponse1](src/models/portfolio-memberships-response1.ts)</code>
- **OnError**: throws <code>[PortfolioMemberships.GetPortfolioMembershipError](src/resources/portfolio-memberships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolioMemberships.getPortfolioMembership(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfolioMembershipsResponse1, PortfolioMemberships.GetPortfolioMembershipError&gt;</code>, with `result.value` of type <code>[PortfolioMembershipsResponse1](src/models/portfolio-memberships-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolioMemberships(request?: PortfolioMemberships.GetPortfolioMembershipsRequest, options?: RequestOptions): ApiPromise&lt;PortfolioMembershipsResponse, PortfolioMemberships.GetPortfolioMembershipsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMemberships.getPortfolioMemberships({
    portfolio: "12345",
    workspace: "12345",
    user: "me",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type PortfolioMembershipsResponse
} catch (err) {
  // TODO: Handle 'err' of type PortfolioMemberships.GetPortfolioMembershipsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolioMemberships
  .getPortfolioMemberships({
    portfolio: "12345",
    workspace: "12345",
    user: "me",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfolioMembershipsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolio?</code> | <code>string</code> | The portfolio to filter results on. |
| <code>workspace?</code> | <code>string</code> | The workspace to filter results on. |
| <code>user?</code> | <code>string</code> | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolioMemberships.getPortfolioMemberships(request)`

- **OnSuccess**: <code>[PortfolioMembershipsResponse](src/models/portfolio-memberships-response.ts)</code>
- **OnError**: throws <code>[PortfolioMemberships.GetPortfolioMembershipsError](src/resources/portfolio-memberships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolioMemberships.getPortfolioMemberships(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfolioMembershipsResponse, PortfolioMemberships.GetPortfolioMembershipsError&gt;</code>, with `result.value` of type <code>[PortfolioMembershipsResponse](src/models/portfolio-memberships-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolioMembershipsForPortfolio(request: PortfolioMemberships.GetPortfolioMembershipsForPortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosPortfolioMembershipsResponse, PortfolioMemberships.GetPortfolioMembershipsForPortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact portfolio membership records for the portfolio.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolioMemberships.getPortfolioMembershipsForPortfolio({
    portfolioGid: "12345",
    user: "me",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type PortfoliosPortfolioMembershipsResponse
} catch (err) {
  // TODO: Handle 'err' of type PortfolioMemberships.GetPortfolioMembershipsForPortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolioMemberships
  .getPortfolioMembershipsForPortfolio({
    portfolioGid: "12345",
    user: "me",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosPortfolioMembershipsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioGid</code> | <code>string</code> | Globally unique identifier for the portfolio. |
| <code>user?</code> | <code>string</code> | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolioMemberships.getPortfolioMembershipsForPortfolio(request)`

- **OnSuccess**: <code>[PortfoliosPortfolioMembershipsResponse](src/models/portfolios-portfolio-memberships-response.ts)</code>
- **OnError**: throws <code>[PortfolioMemberships.GetPortfolioMembershipsForPortfolioError](src/resources/portfolio-memberships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolioMemberships.getPortfolioMembershipsForPortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosPortfolioMembershipsResponse, PortfolioMemberships.GetPortfolioMembershipsForPortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosPortfolioMembershipsResponse](src/models/portfolios-portfolio-memberships-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Portfolios

> Source: [Portfolios](src/resources/portfolios.ts)

<details>
<summary><code>addCustomFieldSettingForPortfolio(request: Portfolios.AddCustomFieldSettingForPortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosAddCustomFieldSettingResponse, Portfolios.AddCustomFieldSettingForPortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Custom fields are associated with portfolios by way of custom field settings. This method creates a setting for the portfolio.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolios.addCustomFieldSettingForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    body: {},
  });
  // TODO: Handle 'response' of type PortfoliosAddCustomFieldSettingResponse
} catch (err) {
  // TODO: Handle 'err' of type Portfolios.AddCustomFieldSettingForPortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolios
  .addCustomFieldSettingForPortfolio({ portfolioGid: "12345", optPretty: true, body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosAddCustomFieldSettingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioGid</code> | <code>string</code> | Globally unique identifier for the portfolio. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>body</code> | <code>[PortfoliosAddCustomFieldSettingRequest](src/models/portfolios-add-custom-field-setting-request.ts)</code> | Information about the custom field setting. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolios.addCustomFieldSettingForPortfolio(request)`

- **OnSuccess**: <code>[PortfoliosAddCustomFieldSettingResponse](src/models/portfolios-add-custom-field-setting-response.ts)</code>
- **OnError**: throws <code>[Portfolios.AddCustomFieldSettingForPortfolioError](src/resources/portfolios.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolios.addCustomFieldSettingForPortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosAddCustomFieldSettingResponse, Portfolios.AddCustomFieldSettingForPortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosAddCustomFieldSettingResponse](src/models/portfolios-add-custom-field-setting-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addItemForPortfolio(request: Portfolios.AddItemForPortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosAddItemResponse, Portfolios.AddItemForPortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an item to a portfolio.
Returns an empty data block.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolios.addItemForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type PortfoliosAddItemResponse
} catch (err) {
  // TODO: Handle 'err' of type Portfolios.AddItemForPortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolios
  .addItemForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosAddItemResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioGid</code> | <code>string</code> | Globally unique identifier for the portfolio. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[PortfoliosAddItemRequest](src/models/portfolios-add-item-request.ts)</code> | Information about the item being inserted. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolios.addItemForPortfolio(request)`

- **OnSuccess**: <code>[PortfoliosAddItemResponse](src/models/portfolios-add-item-response.ts)</code>
- **OnError**: throws <code>[Portfolios.AddItemForPortfolioError](src/resources/portfolios.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolios.addItemForPortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosAddItemResponse, Portfolios.AddItemForPortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosAddItemResponse](src/models/portfolios-add-item-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addMembersForPortfolio(request: Portfolios.AddMembersForPortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosAddMembersResponse, Portfolios.AddMembersForPortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified list of users as members of the portfolio.
Returns the updated portfolio record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolios.addMembersForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type PortfoliosAddMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type Portfolios.AddMembersForPortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolios
  .addMembersForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosAddMembersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioGid</code> | <code>string</code> | Globally unique identifier for the portfolio. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[PortfoliosAddMembersRequest](src/models/portfolios-add-members-request.ts)</code> | Information about the members being added. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolios.addMembersForPortfolio(request)`

- **OnSuccess**: <code>[PortfoliosAddMembersResponse](src/models/portfolios-add-members-response.ts)</code>
- **OnError**: throws <code>[Portfolios.AddMembersForPortfolioError](src/resources/portfolios.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolios.addMembersForPortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosAddMembersResponse, Portfolios.AddMembersForPortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosAddMembersResponse](src/models/portfolios-add-members-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPortfolio(request: Portfolios.CreatePortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosResponse1, Portfolios.CreatePortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new portfolio in the given workspace with the supplied name.

Note that portfolios created in the Asana UI may have some state
(like the “Priority” custom field) which is automatically added
to the portfolio when it is created. Portfolios created via our
API will *not* be created with the same initial state to allow
integrations to create their own starting state on a portfolio.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolios.createPortfolio({
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type PortfoliosResponse1
} catch (err) {
  // TODO: Handle 'err' of type Portfolios.CreatePortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolios
  .createPortfolio({ optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[PortfoliosRequest](src/models/portfolios-request.ts)</code> | The portfolio to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolios.createPortfolio(request)`

- **OnSuccess**: <code>[PortfoliosResponse1](src/models/portfolios-response1.ts)</code>
- **OnError**: throws <code>[Portfolios.CreatePortfolioError](src/resources/portfolios.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolios.createPortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosResponse1, Portfolios.CreatePortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosResponse1](src/models/portfolios-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePortfolio(request: Portfolios.DeletePortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosResponse4, Portfolios.DeletePortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An existing portfolio can be deleted by making a DELETE request on
the URL for that portfolio.

Returns an empty data record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolios.deletePortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type PortfoliosResponse4
} catch (err) {
  // TODO: Handle 'err' of type Portfolios.DeletePortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolios
  .deletePortfolio({ portfolioGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosResponse4
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioGid</code> | <code>string</code> | Globally unique identifier for the portfolio. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolios.deletePortfolio(request)`

- **OnSuccess**: <code>[PortfoliosResponse4](src/models/portfolios-response4.ts)</code>
- **OnError**: throws <code>[Portfolios.DeletePortfolioError](src/resources/portfolios.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolios.deletePortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosResponse4, Portfolios.DeletePortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosResponse4](src/models/portfolios-response4.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getItemsForPortfolio(request: Portfolios.GetItemsForPortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosItemsResponse, Portfolios.GetItemsForPortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the items in compact form in a portfolio.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolios.getItemsForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type PortfoliosItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type Portfolios.GetItemsForPortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolios
  .getItemsForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosItemsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioGid</code> | <code>string</code> | Globally unique identifier for the portfolio. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolios.getItemsForPortfolio(request)`

- **OnSuccess**: <code>[PortfoliosItemsResponse](src/models/portfolios-items-response.ts)</code>
- **OnError**: throws <code>[Portfolios.GetItemsForPortfolioError](src/resources/portfolios.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolios.getItemsForPortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosItemsResponse, Portfolios.GetItemsForPortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosItemsResponse](src/models/portfolios-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolio(request: Portfolios.GetPortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosResponse1, Portfolios.GetPortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete portfolio record for a single portfolio.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolios.getPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type PortfoliosResponse1
} catch (err) {
  // TODO: Handle 'err' of type Portfolios.GetPortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolios
  .getPortfolio({ portfolioGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioGid</code> | <code>string</code> | Globally unique identifier for the portfolio. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolios.getPortfolio(request)`

- **OnSuccess**: <code>[PortfoliosResponse1](src/models/portfolios-response1.ts)</code>
- **OnError**: throws <code>[Portfolios.GetPortfolioError](src/resources/portfolios.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolios.getPortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosResponse1, Portfolios.GetPortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosResponse1](src/models/portfolios-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPortfolios(request: Portfolios.GetPortfoliosRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosResponse, Portfolios.GetPortfoliosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the portfolios in compact representation that are owned by the current API user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolios.getPortfolios({
    workspace: "1331",
    owner: "14916",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type PortfoliosResponse
} catch (err) {
  // TODO: Handle 'err' of type Portfolios.GetPortfoliosError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolios
  .getPortfolios({
    workspace: "1331",
    owner: "14916",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>string</code> | The workspace or organization to filter portfolios on. |
| <code>owner</code> | <code>string</code> | The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolios.getPortfolios(request)`

- **OnSuccess**: <code>[PortfoliosResponse](src/models/portfolios-response.ts)</code>
- **OnError**: throws <code>[Portfolios.GetPortfoliosError](src/resources/portfolios.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolios.getPortfolios(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosResponse, Portfolios.GetPortfoliosError&gt;</code>, with `result.value` of type <code>[PortfoliosResponse](src/models/portfolios-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeCustomFieldSettingForPortfolio(request: Portfolios.RemoveCustomFieldSettingForPortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosRemoveCustomFieldSettingResponse, Portfolios.RemoveCustomFieldSettingForPortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a custom field setting from a portfolio.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolios.removeCustomFieldSettingForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    body: {},
  });
  // TODO: Handle 'response' of type PortfoliosRemoveCustomFieldSettingResponse
} catch (err) {
  // TODO: Handle 'err' of type Portfolios.RemoveCustomFieldSettingForPortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolios
  .removeCustomFieldSettingForPortfolio({ portfolioGid: "12345", optPretty: true, body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosRemoveCustomFieldSettingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioGid</code> | <code>string</code> | Globally unique identifier for the portfolio. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>body</code> | <code>[PortfoliosRemoveCustomFieldSettingRequest](src/models/portfolios-remove-custom-field-setting-request.ts)</code> | Information about the custom field setting being removed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolios.removeCustomFieldSettingForPortfolio(request)`

- **OnSuccess**: <code>[PortfoliosRemoveCustomFieldSettingResponse](src/models/portfolios-remove-custom-field-setting-response.ts)</code>
- **OnError**: throws <code>[Portfolios.RemoveCustomFieldSettingForPortfolioError](src/resources/portfolios.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolios.removeCustomFieldSettingForPortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosRemoveCustomFieldSettingResponse, Portfolios.RemoveCustomFieldSettingForPortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosRemoveCustomFieldSettingResponse](src/models/portfolios-remove-custom-field-setting-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeItemForPortfolio(request: Portfolios.RemoveItemForPortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosRemoveItemResponse, Portfolios.RemoveItemForPortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an item from a portfolio.
Returns an empty data block.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolios.removeItemForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type PortfoliosRemoveItemResponse
} catch (err) {
  // TODO: Handle 'err' of type Portfolios.RemoveItemForPortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolios
  .removeItemForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosRemoveItemResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioGid</code> | <code>string</code> | Globally unique identifier for the portfolio. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[PortfoliosRemoveItemRequest](src/models/portfolios-remove-item-request.ts)</code> | Information about the item being removed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolios.removeItemForPortfolio(request)`

- **OnSuccess**: <code>[PortfoliosRemoveItemResponse](src/models/portfolios-remove-item-response.ts)</code>
- **OnError**: throws <code>[Portfolios.RemoveItemForPortfolioError](src/resources/portfolios.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolios.removeItemForPortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosRemoveItemResponse, Portfolios.RemoveItemForPortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosRemoveItemResponse](src/models/portfolios-remove-item-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeMembersForPortfolio(request: Portfolios.RemoveMembersForPortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosRemoveMembersResponse, Portfolios.RemoveMembersForPortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified list of users from members of the portfolio.
Returns the updated portfolio record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolios.removeMembersForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type PortfoliosRemoveMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type Portfolios.RemoveMembersForPortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolios
  .removeMembersForPortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosRemoveMembersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioGid</code> | <code>string</code> | Globally unique identifier for the portfolio. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[PortfoliosRemoveMembersRequest](src/models/portfolios-remove-members-request.ts)</code> | Information about the members being removed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolios.removeMembersForPortfolio(request)`

- **OnSuccess**: <code>[PortfoliosRemoveMembersResponse](src/models/portfolios-remove-members-response.ts)</code>
- **OnError**: throws <code>[Portfolios.RemoveMembersForPortfolioError](src/resources/portfolios.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolios.removeMembersForPortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosRemoveMembersResponse, Portfolios.RemoveMembersForPortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosRemoveMembersResponse](src/models/portfolios-remove-members-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePortfolio(request: Portfolios.UpdatePortfolioRequest, options?: RequestOptions): ApiPromise&lt;PortfoliosResponse1, Portfolios.UpdatePortfolioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An existing portfolio can be updated by making a PUT request on the URL for
that portfolio. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated portfolio record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.portfolios.updatePortfolio({
    portfolioGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type PortfoliosResponse1
} catch (err) {
  // TODO: Handle 'err' of type Portfolios.UpdatePortfolioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.portfolios
  .updatePortfolio({ portfolioGid: "12345", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PortfoliosResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>portfolioGid</code> | <code>string</code> | Globally unique identifier for the portfolio. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[PortfoliosRequest](src/models/portfolios-request.ts)</code> | The updated fields for the portfolio. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.portfolios.updatePortfolio(request)`

- **OnSuccess**: <code>[PortfoliosResponse1](src/models/portfolios-response1.ts)</code>
- **OnError**: throws <code>[Portfolios.UpdatePortfolioError](src/resources/portfolios.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.portfolios.updatePortfolio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PortfoliosResponse1, Portfolios.UpdatePortfolioError&gt;</code>, with `result.value` of type <code>[PortfoliosResponse1](src/models/portfolios-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectBriefs

> Source: [ProjectBriefs](src/resources/project-briefs.ts)

<details>
<summary><code>createProjectBrief(request: ProjectBriefs.CreateProjectBriefRequest, options?: RequestOptions): ApiPromise&lt;ProjectsProjectBriefsResponse, ProjectBriefs.CreateProjectBriefError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new project brief.

Returns the full record of the newly created project brief.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectBriefs.createProjectBrief({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsProjectBriefsResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectBriefs.CreateProjectBriefError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectBriefs
  .createProjectBrief({ projectGid: "1331", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsProjectBriefsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[ProjectsProjectBriefsRequest](src/models/projects-project-briefs-request.ts)</code> | The project brief to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectBriefs.createProjectBrief(request)`

- **OnSuccess**: <code>[ProjectsProjectBriefsResponse](src/models/projects-project-briefs-response.ts)</code>
- **OnError**: throws <code>[ProjectBriefs.CreateProjectBriefError](src/resources/project-briefs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectBriefs.createProjectBrief(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsProjectBriefsResponse, ProjectBriefs.CreateProjectBriefError&gt;</code>, with `result.value` of type <code>[ProjectsProjectBriefsResponse](src/models/projects-project-briefs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProjectBrief(request: ProjectBriefs.DeleteProjectBriefRequest, options?: RequestOptions): ApiPromise&lt;ProjectBriefsResponse2, ProjectBriefs.DeleteProjectBriefError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific, existing project brief.

Returns an empty data record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectBriefs.deleteProjectBrief({
    projectBriefGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type ProjectBriefsResponse2
} catch (err) {
  // TODO: Handle 'err' of type ProjectBriefs.DeleteProjectBriefError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectBriefs
  .deleteProjectBrief({ projectBriefGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectBriefsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectBriefGid</code> | <code>string</code> | Globally unique identifier for the project brief. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectBriefs.deleteProjectBrief(request)`

- **OnSuccess**: <code>[ProjectBriefsResponse2](src/models/project-briefs-response2.ts)</code>
- **OnError**: throws <code>[ProjectBriefs.DeleteProjectBriefError](src/resources/project-briefs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectBriefs.deleteProjectBrief(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectBriefsResponse2, ProjectBriefs.DeleteProjectBriefError&gt;</code>, with `result.value` of type <code>[ProjectBriefsResponse2](src/models/project-briefs-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectBrief(request: ProjectBriefs.GetProjectBriefRequest, options?: RequestOptions): ApiPromise&lt;ProjectBriefsResponse, ProjectBriefs.GetProjectBriefError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the full record for a project brief.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectBriefs.getProjectBrief({
    projectBriefGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type ProjectBriefsResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectBriefs.GetProjectBriefError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectBriefs
  .getProjectBrief({ projectBriefGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectBriefsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectBriefGid</code> | <code>string</code> | Globally unique identifier for the project brief. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectBriefs.getProjectBrief(request)`

- **OnSuccess**: <code>[ProjectBriefsResponse](src/models/project-briefs-response.ts)</code>
- **OnError**: throws <code>[ProjectBriefs.GetProjectBriefError](src/resources/project-briefs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectBriefs.getProjectBrief(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectBriefsResponse, ProjectBriefs.GetProjectBriefError&gt;</code>, with `result.value` of type <code>[ProjectBriefsResponse](src/models/project-briefs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProjectBrief(request: ProjectBriefs.UpdateProjectBriefRequest, options?: RequestOptions): ApiPromise&lt;ProjectBriefsResponse, ProjectBriefs.UpdateProjectBriefError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An existing project brief can be updated by making a PUT request on the URL for
that project brief. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated project brief record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectBriefs.updateProjectBrief({
    projectBriefGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type ProjectBriefsResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectBriefs.UpdateProjectBriefError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectBriefs
  .updateProjectBrief({
    projectBriefGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectBriefsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectBriefGid</code> | <code>string</code> | Globally unique identifier for the project brief. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[ProjectBriefsRequest](src/models/project-briefs-request.ts)</code> | The updated fields for the project brief. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectBriefs.updateProjectBrief(request)`

- **OnSuccess**: <code>[ProjectBriefsResponse](src/models/project-briefs-response.ts)</code>
- **OnError**: throws <code>[ProjectBriefs.UpdateProjectBriefError](src/resources/project-briefs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectBriefs.updateProjectBrief(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectBriefsResponse, ProjectBriefs.UpdateProjectBriefError&gt;</code>, with `result.value` of type <code>[ProjectBriefsResponse](src/models/project-briefs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectMemberships

> Source: [ProjectMemberships](src/resources/project-memberships.ts)

<details>
<summary><code>getProjectMembership(request: ProjectMemberships.GetProjectMembershipRequest, options?: RequestOptions): ApiPromise&lt;ProjectMembershipsResponse, ProjectMemberships.GetProjectMembershipError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete project record for a single project membership.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectMemberships.getProjectMembership({
    projectMembershipGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type ProjectMembershipsResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectMemberships.GetProjectMembershipError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectMemberships
  .getProjectMembership({
    projectMembershipGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectMembershipsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectMembershipGid</code> | <code>string</code> | - |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectMemberships.getProjectMembership(request)`

- **OnSuccess**: <code>[ProjectMembershipsResponse](src/models/project-memberships-response.ts)</code>
- **OnError**: throws <code>[ProjectMemberships.GetProjectMembershipError](src/resources/project-memberships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectMemberships.getProjectMembership(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectMembershipsResponse, ProjectMemberships.GetProjectMembershipError&gt;</code>, with `result.value` of type <code>[ProjectMembershipsResponse](src/models/project-memberships-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectMembershipsForProject(request: ProjectMemberships.GetProjectMembershipsForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsProjectMembershipsResponse, ProjectMemberships.GetProjectMembershipsForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project membership records for the project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectMemberships.getProjectMembershipsForProject({
    projectGid: "1331",
    user: "me",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type ProjectsProjectMembershipsResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectMemberships.GetProjectMembershipsForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectMemberships
  .getProjectMembershipsForProject({
    projectGid: "1331",
    user: "me",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsProjectMembershipsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>user?</code> | <code>string</code> | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectMemberships.getProjectMembershipsForProject(request)`

- **OnSuccess**: <code>[ProjectsProjectMembershipsResponse](src/models/projects-project-memberships-response.ts)</code>
- **OnError**: throws <code>[ProjectMemberships.GetProjectMembershipsForProjectError](src/resources/project-memberships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectMemberships.getProjectMembershipsForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsProjectMembershipsResponse, ProjectMemberships.GetProjectMembershipsForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsProjectMembershipsResponse](src/models/projects-project-memberships-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectStatuses

> Source: [ProjectStatuses](src/resources/project-statuses.ts)

<details>
<summary><code>createProjectStatusForProject(request: ProjectStatuses.CreateProjectStatusForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsProjectStatusesResponse1, ProjectStatuses.CreateProjectStatusForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

*Deprecated: new integrations should prefer the `/status_updates` route.*

Creates a new status update on the project.

Returns the full record of the newly created project status update.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectStatuses.createProjectStatusForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsProjectStatusesResponse1
} catch (err) {
  // TODO: Handle 'err' of type ProjectStatuses.CreateProjectStatusForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectStatuses
  .createProjectStatusForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsProjectStatusesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[ProjectsProjectStatusesRequest](src/models/projects-project-statuses-request.ts)</code> | The project status to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectStatuses.createProjectStatusForProject(request)`

- **OnSuccess**: <code>[ProjectsProjectStatusesResponse1](src/models/projects-project-statuses-response1.ts)</code>
- **OnError**: throws <code>[ProjectStatuses.CreateProjectStatusForProjectError](src/resources/project-statuses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectStatuses.createProjectStatusForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsProjectStatusesResponse1, ProjectStatuses.CreateProjectStatusForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsProjectStatusesResponse1](src/models/projects-project-statuses-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProjectStatus(request: ProjectStatuses.DeleteProjectStatusRequest, options?: RequestOptions): ApiPromise&lt;ProjectStatusesResponse1, ProjectStatuses.DeleteProjectStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Deletes a specific, existing project status update.

Returns an empty data record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectStatuses.deleteProjectStatus({
    projectStatusGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type ProjectStatusesResponse1
} catch (err) {
  // TODO: Handle 'err' of type ProjectStatuses.DeleteProjectStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectStatuses
  .deleteProjectStatus({ projectStatusGid: "321654", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectStatusesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectStatusGid</code> | <code>string</code> | The project status update to get. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectStatuses.deleteProjectStatus(request)`

- **OnSuccess**: <code>[ProjectStatusesResponse1](src/models/project-statuses-response1.ts)</code>
- **OnError**: throws <code>[ProjectStatuses.DeleteProjectStatusError](src/resources/project-statuses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectStatuses.deleteProjectStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectStatusesResponse1, ProjectStatuses.DeleteProjectStatusError&gt;</code>, with `result.value` of type <code>[ProjectStatusesResponse1](src/models/project-statuses-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectStatus(request: ProjectStatuses.GetProjectStatusRequest, options?: RequestOptions): ApiPromise&lt;ProjectStatusesResponse, ProjectStatuses.GetProjectStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Returns the complete record for a single status update.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectStatuses.getProjectStatus({
    projectStatusGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type ProjectStatusesResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectStatuses.GetProjectStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectStatuses
  .getProjectStatus({ projectStatusGid: "321654", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectStatusesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectStatusGid</code> | <code>string</code> | The project status update to get. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectStatuses.getProjectStatus(request)`

- **OnSuccess**: <code>[ProjectStatusesResponse](src/models/project-statuses-response.ts)</code>
- **OnError**: throws <code>[ProjectStatuses.GetProjectStatusError](src/resources/project-statuses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectStatuses.getProjectStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectStatusesResponse, ProjectStatuses.GetProjectStatusError&gt;</code>, with `result.value` of type <code>[ProjectStatusesResponse](src/models/project-statuses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectStatusesForProject(request: ProjectStatuses.GetProjectStatusesForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsProjectStatusesResponse, ProjectStatuses.GetProjectStatusesForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

*Deprecated: new integrations should prefer the `/status_updates` route.*

Returns the compact project status update records for all updates on the project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectStatuses.getProjectStatusesForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type ProjectsProjectStatusesResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectStatuses.GetProjectStatusesForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectStatuses
  .getProjectStatusesForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsProjectStatusesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectStatuses.getProjectStatusesForProject(request)`

- **OnSuccess**: <code>[ProjectsProjectStatusesResponse](src/models/projects-project-statuses-response.ts)</code>
- **OnError**: throws <code>[ProjectStatuses.GetProjectStatusesForProjectError](src/resources/project-statuses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectStatuses.getProjectStatusesForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsProjectStatusesResponse, ProjectStatuses.GetProjectStatusesForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsProjectStatusesResponse](src/models/projects-project-statuses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectTemplates

> Source: [ProjectTemplates](src/resources/project-templates.ts)

<details>
<summary><code>getProjectTemplate(request: ProjectTemplates.GetProjectTemplateRequest, options?: RequestOptions): ApiPromise&lt;ProjectTemplatesResponse, ProjectTemplates.GetProjectTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete project template record for a single project template.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectTemplates.getProjectTemplate({
    projectTemplateGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type ProjectTemplatesResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectTemplates.GetProjectTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectTemplates
  .getProjectTemplate({ projectTemplateGid: "1331", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectTemplatesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectTemplateGid</code> | <code>string</code> | Globally unique identifier for the project template. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectTemplates.getProjectTemplate(request)`

- **OnSuccess**: <code>[ProjectTemplatesResponse](src/models/project-templates-response.ts)</code>
- **OnError**: throws <code>[ProjectTemplates.GetProjectTemplateError](src/resources/project-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectTemplates.getProjectTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectTemplatesResponse, ProjectTemplates.GetProjectTemplateError&gt;</code>, with `result.value` of type <code>[ProjectTemplatesResponse](src/models/project-templates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectTemplates(request?: ProjectTemplates.GetProjectTemplatesRequest, options?: RequestOptions): ApiPromise&lt;ProjectTemplatesResponse1, ProjectTemplates.GetProjectTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project template records for all project templates in the given team or workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectTemplates.getProjectTemplates({
    optPretty: true,
    optFields: ["followers", "assignee"],
    workspace: "12345",
    team: "14916",
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type ProjectTemplatesResponse1
} catch (err) {
  // TODO: Handle 'err' of type ProjectTemplates.GetProjectTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectTemplates
  .getProjectTemplates({
    optPretty: true,
    optFields: ["followers", "assignee"],
    workspace: "12345",
    team: "14916",
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectTemplatesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>workspace?</code> | <code>string</code> | The workspace to filter results on. |
| <code>team?</code> | <code>string</code> | The team to filter projects on. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectTemplates.getProjectTemplates(request)`

- **OnSuccess**: <code>[ProjectTemplatesResponse1](src/models/project-templates-response1.ts)</code>
- **OnError**: throws <code>[ProjectTemplates.GetProjectTemplatesError](src/resources/project-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectTemplates.getProjectTemplates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectTemplatesResponse1, ProjectTemplates.GetProjectTemplatesError&gt;</code>, with `result.value` of type <code>[ProjectTemplatesResponse1](src/models/project-templates-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectTemplatesForTeam(request: ProjectTemplates.GetProjectTemplatesForTeamRequest, options?: RequestOptions): ApiPromise&lt;TeamsProjectTemplatesResponse, ProjectTemplates.GetProjectTemplatesForTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project template records for all project templates in the team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectTemplates.getProjectTemplatesForTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TeamsProjectTemplatesResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectTemplates.GetProjectTemplatesForTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectTemplates
  .getProjectTemplatesForTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamsProjectTemplatesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamGid</code> | <code>string</code> | Globally unique identifier for the team. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectTemplates.getProjectTemplatesForTeam(request)`

- **OnSuccess**: <code>[TeamsProjectTemplatesResponse](src/models/teams-project-templates-response.ts)</code>
- **OnError**: throws <code>[ProjectTemplates.GetProjectTemplatesForTeamError](src/resources/project-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectTemplates.getProjectTemplatesForTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamsProjectTemplatesResponse, ProjectTemplates.GetProjectTemplatesForTeamError&gt;</code>, with `result.value` of type <code>[TeamsProjectTemplatesResponse](src/models/teams-project-templates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>instantiateProject(request: ProjectTemplates.InstantiateProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectTemplatesInstantiateProjectResponse, ProjectTemplates.InstantiateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and returns a job that will asynchronously handle the project instantiation.

To form this request, it is recommended to first make a request to get a project template. Then, from the response, copy the `gid` from the object in the `requested_dates` array. This `gid` should be used in `requested_dates` to instantiate a project.

_Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the is_organization parameter._

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectTemplates.instantiateProject({
    projectTemplateGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type ProjectTemplatesInstantiateProjectResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectTemplates.InstantiateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectTemplates
  .instantiateProject({ projectTemplateGid: "1331", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectTemplatesInstantiateProjectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectTemplateGid</code> | <code>string</code> | Globally unique identifier for the project template. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body?</code> | <code>[ProjectTemplatesInstantiateProjectRequest](src/models/project-templates-instantiate-project-request.ts)</code> | Describes the inputs used for instantiating a project, such as the resulting project's name, which team it should be created in, and values for date variables. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectTemplates.instantiateProject(request)`

- **OnSuccess**: <code>[ProjectTemplatesInstantiateProjectResponse](src/models/project-templates-instantiate-project-response.ts)</code>
- **OnError**: throws <code>[ProjectTemplates.InstantiateProjectError](src/resources/project-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectTemplates.instantiateProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectTemplatesInstantiateProjectResponse, ProjectTemplates.InstantiateProjectError&gt;</code>, with `result.value` of type <code>[ProjectTemplatesInstantiateProjectResponse](src/models/project-templates-instantiate-project-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/resources/projects.ts)

<details>
<summary><code>addCustomFieldSettingForProject(request: Projects.AddCustomFieldSettingForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsAddCustomFieldSettingResponse, Projects.AddCustomFieldSettingForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Custom fields are associated with projects by way of custom field settings. This method creates a setting for the project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.addCustomFieldSettingForProject({
    projectGid: "1331",
    optPretty: true,
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsAddCustomFieldSettingResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.AddCustomFieldSettingForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .addCustomFieldSettingForProject({ projectGid: "1331", optPretty: true, body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsAddCustomFieldSettingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>body</code> | <code>[ProjectsAddCustomFieldSettingRequest](src/models/projects-add-custom-field-setting-request.ts)</code> | Information about the custom field setting. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.addCustomFieldSettingForProject(request)`

- **OnSuccess**: <code>[ProjectsAddCustomFieldSettingResponse](src/models/projects-add-custom-field-setting-response.ts)</code>
- **OnError**: throws <code>[Projects.AddCustomFieldSettingForProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.addCustomFieldSettingForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsAddCustomFieldSettingResponse, Projects.AddCustomFieldSettingForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsAddCustomFieldSettingResponse](src/models/projects-add-custom-field-setting-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addFollowersForProject(request: Projects.AddFollowersForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsAddFollowersResponse, Projects.AddFollowersForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation.
Returns the updated project record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.addFollowersForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsAddFollowersResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.AddFollowersForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .addFollowersForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsAddFollowersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[ProjectsAddFollowersRequest](src/models/projects-add-followers-request.ts)</code> | Information about the followers being added. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.addFollowersForProject(request)`

- **OnSuccess**: <code>[ProjectsAddFollowersResponse](src/models/projects-add-followers-response.ts)</code>
- **OnError**: throws <code>[Projects.AddFollowersForProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.addFollowersForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsAddFollowersResponse, Projects.AddFollowersForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsAddFollowersResponse](src/models/projects-add-followers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addMembersForProject(request: Projects.AddMembersForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsAddMembersResponse, Projects.AddMembersForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user's default notification settings (i.e., in the "Notifcations" tab of "My Profile Settings") will override this endpoint's default behavior of setting "Tasks added" notifications to `false`.
Returns the updated project record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.addMembersForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsAddMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.AddMembersForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .addMembersForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsAddMembersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[ProjectsAddMembersRequest](src/models/projects-add-members-request.ts)</code> | Information about the members being added. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.addMembersForProject(request)`

- **OnSuccess**: <code>[ProjectsAddMembersResponse](src/models/projects-add-members-response.ts)</code>
- **OnError**: throws <code>[Projects.AddMembersForProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.addMembersForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsAddMembersResponse, Projects.AddMembersForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsAddMembersResponse](src/models/projects-add-members-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProject(request: Projects.CreateProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsResponse1, Projects.CreateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new project in a workspace or team.

Every project is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the `workspace` parameter regardless of whether or not it is an
organization.

If the workspace for your project is an organization, you must also
supply a `team` to share the project with.

Returns the full record of the newly created project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.createProject({
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Projects.CreateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .createProject({ optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[ProjectsRequest](src/models/projects-request.ts)</code> | The project to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.createProject(request)`

- **OnSuccess**: <code>[ProjectsResponse1](src/models/projects-response1.ts)</code>
- **OnError**: throws <code>[Projects.CreateProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.createProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsResponse1, Projects.CreateProjectError&gt;</code>, with `result.value` of type <code>[ProjectsResponse1](src/models/projects-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProjectForTeam(request: Projects.CreateProjectForTeamRequest, options?: RequestOptions): ApiPromise&lt;TeamsProjectsResponse1, Projects.CreateProjectForTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a project shared with the given team.

Returns the full record of the newly created project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.createProjectForTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TeamsProjectsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Projects.CreateProjectForTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .createProjectForTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamsProjectsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamGid</code> | <code>string</code> | Globally unique identifier for the team. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TeamsProjectsRequest](src/models/teams-projects-request.ts)</code> | The new project to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.createProjectForTeam(request)`

- **OnSuccess**: <code>[TeamsProjectsResponse1](src/models/teams-projects-response1.ts)</code>
- **OnError**: throws <code>[Projects.CreateProjectForTeamError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.createProjectForTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamsProjectsResponse1, Projects.CreateProjectForTeamError&gt;</code>, with `result.value` of type <code>[TeamsProjectsResponse1](src/models/teams-projects-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProjectForWorkspace(request: Projects.CreateProjectForWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesProjectsResponse1, Projects.CreateProjectForWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project records for all projects in the workspace.

If the workspace for your project is an organization, you must also
supply a team to share the project with.

Returns the full record of the newly created project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.createProjectForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type WorkspacesProjectsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Projects.CreateProjectForWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .createProjectForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesProjectsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[WorkspacesProjectsRequest](src/models/workspaces-projects-request.ts)</code> | The new project to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.createProjectForWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesProjectsResponse1](src/models/workspaces-projects-response1.ts)</code>
- **OnError**: throws <code>[Projects.CreateProjectForWorkspaceError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.createProjectForWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesProjectsResponse1, Projects.CreateProjectForWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesProjectsResponse1](src/models/workspaces-projects-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProject(request: Projects.DeleteProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsResponse4, Projects.DeleteProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific, existing project can be deleted by making a DELETE request on
the URL for that project.

Returns an empty data record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.deleteProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type ProjectsResponse4
} catch (err) {
  // TODO: Handle 'err' of type Projects.DeleteProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .deleteProject({ projectGid: "1331", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsResponse4
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.deleteProject(request)`

- **OnSuccess**: <code>[ProjectsResponse4](src/models/projects-response4.ts)</code>
- **OnError**: throws <code>[Projects.DeleteProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.deleteProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsResponse4, Projects.DeleteProjectError&gt;</code>, with `result.value` of type <code>[ProjectsResponse4](src/models/projects-response4.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>duplicateProject(request: Projects.DuplicateProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsDuplicateResponse, Projects.DuplicateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and returns a job that will asynchronously handle the duplication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.duplicateProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type ProjectsDuplicateResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.DuplicateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .duplicateProject({ projectGid: "1331", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsDuplicateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body?</code> | <code>[ProjectsDuplicateRequest](src/models/projects-duplicate-request.ts)</code> | Describes the duplicate's name and the elements that will be duplicated. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.duplicateProject(request)`

- **OnSuccess**: <code>[ProjectsDuplicateResponse](src/models/projects-duplicate-response.ts)</code>
- **OnError**: throws <code>[Projects.DuplicateProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.duplicateProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsDuplicateResponse, Projects.DuplicateProjectError&gt;</code>, with `result.value` of type <code>[ProjectsDuplicateResponse](src/models/projects-duplicate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProject(request: Projects.GetProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsResponse1, Projects.GetProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete project record for a single project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type ProjectsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .getProject({ projectGid: "1331", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProject(request)`

- **OnSuccess**: <code>[ProjectsResponse1](src/models/projects-response1.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsResponse1, Projects.GetProjectError&gt;</code>, with `result.value` of type <code>[ProjectsResponse1](src/models/projects-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjects(request?: Projects.GetProjectsRequest, options?: RequestOptions): ApiPromise&lt;ProjectsResponse, Projects.GetProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.
*Note: This endpoint may timeout for large domains. Try filtering by team!*

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProjects({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    workspace: "1331",
    team: "14916",
    archived: false,
  });
  // TODO: Handle 'response' of type ProjectsResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .getProjects({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    workspace: "1331",
    team: "14916",
    archived: false,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>workspace?</code> | <code>string</code> | The workspace or organization to filter projects on. |
| <code>team?</code> | <code>string</code> | The team to filter projects on. |
| <code>archived?</code> | <code>boolean</code> | Only return projects whose `archived` field takes on the value of this parameter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProjects(request)`

- **OnSuccess**: <code>[ProjectsResponse](src/models/projects-response.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectsError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsResponse, Projects.GetProjectsError&gt;</code>, with `result.value` of type <code>[ProjectsResponse](src/models/projects-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectsForTask(request: Projects.GetProjectsForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksProjectsResponse, Projects.GetProjectsForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a compact representation of all of the projects the task is in.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProjectsForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TasksProjectsResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectsForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .getProjectsForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksProjectsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProjectsForTask(request)`

- **OnSuccess**: <code>[TasksProjectsResponse](src/models/tasks-projects-response.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectsForTaskError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProjectsForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksProjectsResponse, Projects.GetProjectsForTaskError&gt;</code>, with `result.value` of type <code>[TasksProjectsResponse](src/models/tasks-projects-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectsForTeam(request: Projects.GetProjectsForTeamRequest, options?: RequestOptions): ApiPromise&lt;TeamsProjectsResponse, Projects.GetProjectsForTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project records for all projects in the team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProjectsForTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    archived: false,
  });
  // TODO: Handle 'response' of type TeamsProjectsResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectsForTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .getProjectsForTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    archived: false,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamsProjectsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamGid</code> | <code>string</code> | Globally unique identifier for the team. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>archived?</code> | <code>boolean</code> | Only return projects whose `archived` field takes on the value of this parameter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProjectsForTeam(request)`

- **OnSuccess**: <code>[TeamsProjectsResponse](src/models/teams-projects-response.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectsForTeamError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProjectsForTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamsProjectsResponse, Projects.GetProjectsForTeamError&gt;</code>, with `result.value` of type <code>[TeamsProjectsResponse](src/models/teams-projects-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectsForWorkspace(request: Projects.GetProjectsForWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesProjectsResponse, Projects.GetProjectsForWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project records for all projects in the workspace.
*Note: This endpoint may timeout for large domains. Prefer the `/teams/{team_gid}/projects` endpoint.*

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProjectsForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    archived: false,
  });
  // TODO: Handle 'response' of type WorkspacesProjectsResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectsForWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .getProjectsForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    archived: false,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesProjectsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>archived?</code> | <code>boolean</code> | Only return projects whose `archived` field takes on the value of this parameter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProjectsForWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesProjectsResponse](src/models/workspaces-projects-response.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectsForWorkspaceError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProjectsForWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesProjectsResponse, Projects.GetProjectsForWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesProjectsResponse](src/models/workspaces-projects-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTaskCountsForProject(request: Projects.GetTaskCountsForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsTaskCountsResponse, Projects.GetTaskCountsForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an object that holds task count fields. **All fields are excluded by default**. You must opt in using `opt_fields` to get any information from this endpoint.

This endpoint has an additional rate limit and each field counts especially high against our cost limits.

Milestones are just tasks, so they are included in the `num_tasks`, `num_incomplete_tasks`, and `num_completed_tasks` counts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getTaskCountsForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type ProjectsTaskCountsResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetTaskCountsForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .getTaskCountsForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsTaskCountsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getTaskCountsForProject(request)`

- **OnSuccess**: <code>[ProjectsTaskCountsResponse](src/models/projects-task-counts-response.ts)</code>
- **OnError**: throws <code>[Projects.GetTaskCountsForProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getTaskCountsForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsTaskCountsResponse, Projects.GetTaskCountsForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsTaskCountsResponse](src/models/projects-task-counts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>projectSaveAsTemplate(request: Projects.ProjectSaveAsTemplateRequestParams, options?: RequestOptions): ApiPromise&lt;ProjectsSaveAsTemplateResponse, Projects.ProjectSaveAsTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and returns a job that will asynchronously handle the project template creation. Note that
while the resulting project template can be accessed with the API, it won't be visible in the Asana
UI until Project Templates 2.0 is launched in the app. See more in this forum post.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.projectSaveAsTemplate({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsSaveAsTemplateResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.ProjectSaveAsTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .projectSaveAsTemplate({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsSaveAsTemplateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[ProjectsSaveAsTemplateRequest](src/models/projects-save-as-template-request.ts)</code> | Describes the inputs used for creating a project template, such as the resulting project template's name, which team it should be created in. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.projectSaveAsTemplate(request)`

- **OnSuccess**: <code>[ProjectsSaveAsTemplateResponse](src/models/projects-save-as-template-response.ts)</code>
- **OnError**: throws <code>[Projects.ProjectSaveAsTemplateError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.projectSaveAsTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsSaveAsTemplateResponse, Projects.ProjectSaveAsTemplateError&gt;</code>, with `result.value` of type <code>[ProjectsSaveAsTemplateResponse](src/models/projects-save-as-template-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeCustomFieldSettingForProject(request: Projects.RemoveCustomFieldSettingForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsRemoveCustomFieldSettingResponse, Projects.RemoveCustomFieldSettingForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a custom field setting from a project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.removeCustomFieldSettingForProject({
    projectGid: "1331",
    optPretty: true,
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsRemoveCustomFieldSettingResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.RemoveCustomFieldSettingForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .removeCustomFieldSettingForProject({ projectGid: "1331", optPretty: true, body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsRemoveCustomFieldSettingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>body</code> | <code>[ProjectsRemoveCustomFieldSettingRequest](src/models/projects-remove-custom-field-setting-request.ts)</code> | Information about the custom field setting being removed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.removeCustomFieldSettingForProject(request)`

- **OnSuccess**: <code>[ProjectsRemoveCustomFieldSettingResponse](src/models/projects-remove-custom-field-setting-response.ts)</code>
- **OnError**: throws <code>[Projects.RemoveCustomFieldSettingForProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.removeCustomFieldSettingForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsRemoveCustomFieldSettingResponse, Projects.RemoveCustomFieldSettingForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsRemoveCustomFieldSettingResponse](src/models/projects-remove-custom-field-setting-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeFollowersForProject(request: Projects.RemoveFollowersForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsRemoveFollowersResponse, Projects.RemoveFollowersForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified list of users from following the project, this will not affect project membership status.
Returns the updated project record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.removeFollowersForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsRemoveFollowersResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.RemoveFollowersForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .removeFollowersForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsRemoveFollowersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[ProjectsRemoveFollowersRequest](src/models/projects-remove-followers-request.ts)</code> | Information about the followers being removed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.removeFollowersForProject(request)`

- **OnSuccess**: <code>[ProjectsRemoveFollowersResponse](src/models/projects-remove-followers-response.ts)</code>
- **OnError**: throws <code>[Projects.RemoveFollowersForProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.removeFollowersForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsRemoveFollowersResponse, Projects.RemoveFollowersForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsRemoveFollowersResponse](src/models/projects-remove-followers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeMembersForProject(request: Projects.RemoveMembersForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsRemoveMembersResponse, Projects.RemoveMembersForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified list of users from members of the project.
Returns the updated project record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.removeMembersForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsRemoveMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.RemoveMembersForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .removeMembersForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsRemoveMembersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[ProjectsRemoveMembersRequest](src/models/projects-remove-members-request.ts)</code> | Information about the members being removed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.removeMembersForProject(request)`

- **OnSuccess**: <code>[ProjectsRemoveMembersResponse](src/models/projects-remove-members-response.ts)</code>
- **OnError**: throws <code>[Projects.RemoveMembersForProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.removeMembersForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsRemoveMembersResponse, Projects.RemoveMembersForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsRemoveMembersResponse](src/models/projects-remove-members-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProject(request: Projects.UpdateProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsResponse1, Projects.UpdateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific, existing project can be updated by making a PUT request on
the URL for that project. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated project record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.updateProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Projects.UpdateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .updateProject({ projectGid: "1331", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[ProjectsRequest](src/models/projects-request.ts)</code> | The updated fields for the project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.updateProject(request)`

- **OnSuccess**: <code>[ProjectsResponse1](src/models/projects-response1.ts)</code>
- **OnError**: throws <code>[Projects.UpdateProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.updateProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsResponse1, Projects.UpdateProjectError&gt;</code>, with `result.value` of type <code>[ProjectsResponse1](src/models/projects-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Rules

> Source: [Rules](src/resources/rules.ts)

<details>
<summary><code>triggerRule(request: Rules.TriggerRuleRequest, options?: RequestOptions): ApiPromise&lt;RuleTriggersRunResponse, Rules.TriggerRuleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a rule which uses an incoming web request trigger.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.rules.triggerRule({ ruleTriggerGid: "some example string", body: {} });
  // TODO: Handle 'response' of type RuleTriggersRunResponse
} catch (err) {
  // TODO: Handle 'err' of type Rules.TriggerRuleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.rules
  .triggerRule({ ruleTriggerGid: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RuleTriggersRunResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ruleTriggerGid</code> | <code>string</code> | - |
| <code>body</code> | <code>[RuleTriggersRunRequest](src/models/rule-triggers-run-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.rules.triggerRule(request)`

- **OnSuccess**: <code>[RuleTriggersRunResponse](src/models/rule-triggers-run-response.ts)</code>
- **OnError**: throws <code>[Rules.TriggerRuleError](src/resources/rules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.rules.triggerRule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RuleTriggersRunResponse, Rules.TriggerRuleError&gt;</code>, with `result.value` of type <code>[RuleTriggersRunResponse](src/models/rule-triggers-run-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sections

> Source: [Sections](src/resources/sections.ts)

<details>
<summary><code>addTaskForSection(request: Sections.AddTaskForSectionRequest, options?: RequestOptions): ApiPromise&lt;SectionsAddTaskResponse, Sections.AddTaskForSectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a task to a specific, existing section. This will remove the task from other sections of the project.

The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.

This does not work for separators (tasks with the resource_subtype of section).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.addTaskForSection({
    sectionGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type SectionsAddTaskResponse
} catch (err) {
  // TODO: Handle 'err' of type Sections.AddTaskForSectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .addTaskForSection({
    sectionGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SectionsAddTaskResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sectionGid</code> | <code>string</code> | The globally unique identifier for the section. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[SectionsAddTaskRequest](src/models/sections-add-task-request.ts)</code> | The task and optionally the insert location. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.addTaskForSection(request)`

- **OnSuccess**: <code>[SectionsAddTaskResponse](src/models/sections-add-task-response.ts)</code>
- **OnError**: throws <code>[Sections.AddTaskForSectionError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.addTaskForSection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SectionsAddTaskResponse, Sections.AddTaskForSectionError&gt;</code>, with `result.value` of type <code>[SectionsAddTaskResponse](src/models/sections-add-task-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSectionForProject(request: Sections.CreateSectionForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsSectionsResponse1, Sections.CreateSectionForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new section in a project.
Returns the full record of the newly created section.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.createSectionForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsSectionsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Sections.CreateSectionForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .createSectionForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsSectionsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[ProjectsSectionsRequest](src/models/projects-sections-request.ts)</code> | The section to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.createSectionForProject(request)`

- **OnSuccess**: <code>[ProjectsSectionsResponse1](src/models/projects-sections-response1.ts)</code>
- **OnError**: throws <code>[Sections.CreateSectionForProjectError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.createSectionForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsSectionsResponse1, Sections.CreateSectionForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsSectionsResponse1](src/models/projects-sections-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSection(request: Sections.DeleteSectionRequest, options?: RequestOptions): ApiPromise&lt;SectionsResponse2, Sections.DeleteSectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific, existing section can be deleted by making a DELETE request on
the URL for that section.

Note that sections must be empty to be deleted.

The last remaining section cannot be deleted.

Returns an empty data block.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.deleteSection({
    sectionGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type SectionsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Sections.DeleteSectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .deleteSection({ sectionGid: "321654", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SectionsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sectionGid</code> | <code>string</code> | The globally unique identifier for the section. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.deleteSection(request)`

- **OnSuccess**: <code>[SectionsResponse2](src/models/sections-response2.ts)</code>
- **OnError**: throws <code>[Sections.DeleteSectionError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.deleteSection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SectionsResponse2, Sections.DeleteSectionError&gt;</code>, with `result.value` of type <code>[SectionsResponse2](src/models/sections-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSection(request: Sections.GetSectionRequest, options?: RequestOptions): ApiPromise&lt;SectionsResponse, Sections.GetSectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete record for a single section.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.getSection({
    sectionGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type SectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Sections.GetSectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .getSection({ sectionGid: "321654", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SectionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sectionGid</code> | <code>string</code> | The globally unique identifier for the section. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.getSection(request)`

- **OnSuccess**: <code>[SectionsResponse](src/models/sections-response.ts)</code>
- **OnError**: throws <code>[Sections.GetSectionError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.getSection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SectionsResponse, Sections.GetSectionError&gt;</code>, with `result.value` of type <code>[SectionsResponse](src/models/sections-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSectionsForProject(request: Sections.GetSectionsForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsSectionsResponse, Sections.GetSectionsForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all sections in the specified project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.getSectionsForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type ProjectsSectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Sections.GetSectionsForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .getSectionsForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsSectionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.getSectionsForProject(request)`

- **OnSuccess**: <code>[ProjectsSectionsResponse](src/models/projects-sections-response.ts)</code>
- **OnError**: throws <code>[Sections.GetSectionsForProjectError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.getSectionsForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsSectionsResponse, Sections.GetSectionsForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsSectionsResponse](src/models/projects-sections-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insertSectionForProject(request: Sections.InsertSectionForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsSectionsInsertResponse, Sections.InsertSectionForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move sections relative to each other. One of
`before_section` or `after_section` is required.

Sections cannot be moved between projects.

Returns an empty data block.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.insertSectionForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type ProjectsSectionsInsertResponse
} catch (err) {
  // TODO: Handle 'err' of type Sections.InsertSectionForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .insertSectionForProject({
    projectGid: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsSectionsInsertResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[ProjectsSectionsInsertRequest](src/models/projects-sections-insert-request.ts)</code> | The section's move action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.insertSectionForProject(request)`

- **OnSuccess**: <code>[ProjectsSectionsInsertResponse](src/models/projects-sections-insert-response.ts)</code>
- **OnError**: throws <code>[Sections.InsertSectionForProjectError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.insertSectionForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsSectionsInsertResponse, Sections.InsertSectionForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsSectionsInsertResponse](src/models/projects-sections-insert-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSection(request: Sections.UpdateSectionRequest, options?: RequestOptions): ApiPromise&lt;SectionsResponse, Sections.UpdateSectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific, existing section can be updated by making a PUT request on
the URL for that project. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged. (note that
at this time, the only field that can be updated is the `name` field.)

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated section record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sections.updateSection({
    sectionGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type SectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Sections.UpdateSectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sections
  .updateSection({ sectionGid: "321654", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SectionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sectionGid</code> | <code>string</code> | The globally unique identifier for the section. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[SectionsRequest](src/models/sections-request.ts)</code> | The section to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sections.updateSection(request)`

- **OnSuccess**: <code>[SectionsResponse](src/models/sections-response.ts)</code>
- **OnError**: throws <code>[Sections.UpdateSectionError](src/resources/sections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sections.updateSection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SectionsResponse, Sections.UpdateSectionError&gt;</code>, with `result.value` of type <code>[SectionsResponse](src/models/sections-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StatusUpdates

> Source: [StatusUpdates](src/resources/status-updates.ts)

<details>
<summary><code>createStatusForObject(request: StatusUpdates.CreateStatusForObjectRequest, options?: RequestOptions): ApiPromise&lt;StatusUpdatesResponse, StatusUpdates.CreateStatusForObjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new status update on an object.
Returns the full record of the newly created status update.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statusUpdates.createStatusForObject({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    body: {},
  });
  // TODO: Handle 'response' of type StatusUpdatesResponse
} catch (err) {
  // TODO: Handle 'err' of type StatusUpdates.CreateStatusForObjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statusUpdates
  .createStatusForObject({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusUpdatesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>body</code> | <code>[StatusUpdatesRequest](src/models/status-updates-request.ts)</code> | The status update to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statusUpdates.createStatusForObject(request)`

- **OnSuccess**: <code>[StatusUpdatesResponse](src/models/status-updates-response.ts)</code>
- **OnError**: throws <code>[StatusUpdates.CreateStatusForObjectError](src/resources/status-updates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statusUpdates.createStatusForObject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusUpdatesResponse, StatusUpdates.CreateStatusForObjectError&gt;</code>, with `result.value` of type <code>[StatusUpdatesResponse](src/models/status-updates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStatus(request: StatusUpdates.DeleteStatusRequest, options?: RequestOptions): ApiPromise&lt;StatusUpdatesResponse1, StatusUpdates.DeleteStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific, existing status update.

Returns an empty data record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statusUpdates.deleteStatus({
    statusGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type StatusUpdatesResponse1
} catch (err) {
  // TODO: Handle 'err' of type StatusUpdates.DeleteStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statusUpdates
  .deleteStatus({ statusGid: "321654", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusUpdatesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>statusGid</code> | <code>string</code> | The status update to get. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statusUpdates.deleteStatus(request)`

- **OnSuccess**: <code>[StatusUpdatesResponse1](src/models/status-updates-response1.ts)</code>
- **OnError**: throws <code>[StatusUpdates.DeleteStatusError](src/resources/status-updates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statusUpdates.deleteStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusUpdatesResponse1, StatusUpdates.DeleteStatusError&gt;</code>, with `result.value` of type <code>[StatusUpdatesResponse1](src/models/status-updates-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStatus(request: StatusUpdates.GetStatusRequest, options?: RequestOptions): ApiPromise&lt;StatusUpdatesResponse, StatusUpdates.GetStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete record for a single status update.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statusUpdates.getStatus({
    statusGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type StatusUpdatesResponse
} catch (err) {
  // TODO: Handle 'err' of type StatusUpdates.GetStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statusUpdates
  .getStatus({ statusGid: "321654", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusUpdatesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>statusGid</code> | <code>string</code> | The status update to get. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statusUpdates.getStatus(request)`

- **OnSuccess**: <code>[StatusUpdatesResponse](src/models/status-updates-response.ts)</code>
- **OnError**: throws <code>[StatusUpdates.GetStatusError](src/resources/status-updates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statusUpdates.getStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusUpdatesResponse, StatusUpdates.GetStatusError&gt;</code>, with `result.value` of type <code>[StatusUpdatesResponse](src/models/status-updates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStatusesForObject(request: StatusUpdates.GetStatusesForObjectRequest, options?: RequestOptions): ApiPromise&lt;StatusUpdatesResponse2, StatusUpdates.GetStatusesForObjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact status update records for all updates on the object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statusUpdates.getStatusesForObject({
    parent: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    createdSince: new Date(Date.UTC(2012, 1, 22, 2, 6, 58, 158)),
  });
  // TODO: Handle 'response' of type StatusUpdatesResponse2
} catch (err) {
  // TODO: Handle 'err' of type StatusUpdates.GetStatusesForObjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statusUpdates
  .getStatusesForObject({
    parent: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    createdSince: new Date(Date.UTC(2012, 1, 22, 2, 6, 58, 158)),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusUpdatesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>parent</code> | <code>string</code> | Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>createdSince?</code> | <code>Date</code> (date-time) | Only return statuses that have been created since the given time. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statusUpdates.getStatusesForObject(request)`

- **OnSuccess**: <code>[StatusUpdatesResponse2](src/models/status-updates-response2.ts)</code>
- **OnError**: throws <code>[StatusUpdates.GetStatusesForObjectError](src/resources/status-updates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statusUpdates.getStatusesForObject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusUpdatesResponse2, StatusUpdates.GetStatusesForObjectError&gt;</code>, with `result.value` of type <code>[StatusUpdatesResponse2](src/models/status-updates-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Stories

> Source: [Stories](src/resources/stories.ts)

<details>
<summary><code>createStoryForTask(request: Stories.CreateStoryForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksStoriesResponse1, Stories.CreateStoryForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a story to a task. This endpoint currently only allows for comment
stories to be created. The comment will be authored by the currently
authenticated user, and timestamped when the server receives the request.

Returns the full record for the new story added to the task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.createStoryForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksStoriesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Stories.CreateStoryForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .createStoryForTask({ taskGid: "321654", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksStoriesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksStoriesRequest](src/models/tasks-stories-request.ts)</code> | The story to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.createStoryForTask(request)`

- **OnSuccess**: <code>[TasksStoriesResponse1](src/models/tasks-stories-response1.ts)</code>
- **OnError**: throws <code>[Stories.CreateStoryForTaskError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.createStoryForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksStoriesResponse1, Stories.CreateStoryForTaskError&gt;</code>, with `result.value` of type <code>[TasksStoriesResponse1](src/models/tasks-stories-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStory(request: Stories.DeleteStoryRequest, options?: RequestOptions): ApiPromise&lt;StoriesResponse2, Stories.DeleteStoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a story. A user can only delete stories they have created.

Returns an empty data record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.deleteStory({
    storyGid: "35678",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type StoriesResponse2
} catch (err) {
  // TODO: Handle 'err' of type Stories.DeleteStoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .deleteStory({ storyGid: "35678", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoriesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyGid</code> | <code>string</code> | Globally unique identifier for the story. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.deleteStory(request)`

- **OnSuccess**: <code>[StoriesResponse2](src/models/stories-response2.ts)</code>
- **OnError**: throws <code>[Stories.DeleteStoryError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.deleteStory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoriesResponse2, Stories.DeleteStoryError&gt;</code>, with `result.value` of type <code>[StoriesResponse2](src/models/stories-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStoriesForTask(request: Stories.GetStoriesForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksStoriesResponse, Stories.GetStoriesForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all stories on the task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.getStoriesForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TasksStoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type Stories.GetStoriesForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .getStoriesForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksStoriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.getStoriesForTask(request)`

- **OnSuccess**: <code>[TasksStoriesResponse](src/models/tasks-stories-response.ts)</code>
- **OnError**: throws <code>[Stories.GetStoriesForTaskError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.getStoriesForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksStoriesResponse, Stories.GetStoriesForTaskError&gt;</code>, with `result.value` of type <code>[TasksStoriesResponse](src/models/tasks-stories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStory(request: Stories.GetStoryRequest, options?: RequestOptions): ApiPromise&lt;StoriesResponse, Stories.GetStoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for a single story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.getStory({
    storyGid: "35678",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type StoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type Stories.GetStoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .getStory({
    storyGid: "35678",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyGid</code> | <code>string</code> | Globally unique identifier for the story. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.getStory(request)`

- **OnSuccess**: <code>[StoriesResponse](src/models/stories-response.ts)</code>
- **OnError**: throws <code>[Stories.GetStoryError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.getStory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoriesResponse, Stories.GetStoryError&gt;</code>, with `result.value` of type <code>[StoriesResponse](src/models/stories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStory(request: Stories.UpdateStoryRequest, options?: RequestOptions): ApiPromise&lt;StoriesResponse, Stories.UpdateStoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of `text` and `html_text` can be specified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.updateStory({
    storyGid: "35678",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type StoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type Stories.UpdateStoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .updateStory({ storyGid: "35678", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyGid</code> | <code>string</code> | Globally unique identifier for the story. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[StoriesRequest](src/models/stories-request.ts)</code> | The comment story to update. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.updateStory(request)`

- **OnSuccess**: <code>[StoriesResponse](src/models/stories-response.ts)</code>
- **OnError**: throws <code>[Stories.UpdateStoryError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.updateStory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoriesResponse, Stories.UpdateStoryError&gt;</code>, with `result.value` of type <code>[StoriesResponse](src/models/stories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/resources/tags.ts)

<details>
<summary><code>createTag(request: Tags.CreateTagRequest, options?: RequestOptions): ApiPromise&lt;TagsResponse1, Tags.CreateTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new tag in a workspace or organization.

Every tag is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the workspace parameter regardless of whether or not it is an
organization.

Returns the full record of the newly created tag.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.createTag({
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TagsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Tags.CreateTagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .createTag({ optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TagsRequest](src/models/tags-request.ts)</code> | The tag to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.createTag(request)`

- **OnSuccess**: <code>[TagsResponse1](src/models/tags-response1.ts)</code>
- **OnError**: throws <code>[Tags.CreateTagError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.createTag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsResponse1, Tags.CreateTagError&gt;</code>, with `result.value` of type <code>[TagsResponse1](src/models/tags-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTagForWorkspace(request: Tags.CreateTagForWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesTagsResponse1, Tags.CreateTagForWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new tag in a workspace or organization.

Every tag is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the workspace parameter regardless of whether or not it is an
organization.

Returns the full record of the newly created tag.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.createTagForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type WorkspacesTagsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Tags.CreateTagForWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .createTagForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesTagsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[WorkspacesTagsRequest](src/models/workspaces-tags-request.ts)</code> | The tag to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.createTagForWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesTagsResponse1](src/models/workspaces-tags-response1.ts)</code>
- **OnError**: throws <code>[Tags.CreateTagForWorkspaceError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.createTagForWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesTagsResponse1, Tags.CreateTagForWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesTagsResponse1](src/models/workspaces-tags-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTag(request: Tags.DeleteTagRequest, options?: RequestOptions): ApiPromise&lt;TagsResponse4, Tags.DeleteTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific, existing tag can be deleted by making a DELETE request on
the URL for that tag.

Returns an empty data record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.deleteTag({
    tagGid: "11235",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TagsResponse4
} catch (err) {
  // TODO: Handle 'err' of type Tags.DeleteTagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .deleteTag({
    tagGid: "11235",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsResponse4
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tagGid</code> | <code>string</code> | Globally unique identifier for the tag. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.deleteTag(request)`

- **OnSuccess**: <code>[TagsResponse4](src/models/tags-response4.ts)</code>
- **OnError**: throws <code>[Tags.DeleteTagError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.deleteTag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsResponse4, Tags.DeleteTagError&gt;</code>, with `result.value` of type <code>[TagsResponse4](src/models/tags-response4.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTag(request: Tags.GetTagRequest, options?: RequestOptions): ApiPromise&lt;TagsResponse1, Tags.GetTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete tag record for a single tag.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.getTag({
    tagGid: "11235",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TagsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Tags.GetTagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .getTag({
    tagGid: "11235",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tagGid</code> | <code>string</code> | Globally unique identifier for the tag. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.getTag(request)`

- **OnSuccess**: <code>[TagsResponse1](src/models/tags-response1.ts)</code>
- **OnError**: throws <code>[Tags.GetTagError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.getTag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsResponse1, Tags.GetTagError&gt;</code>, with `result.value` of type <code>[TagsResponse1](src/models/tags-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTags(request?: Tags.GetTagsRequest, options?: RequestOptions): ApiPromise&lt;TagsResponse, Tags.GetTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.getTags({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    workspace: "1331",
  });
  // TODO: Handle 'response' of type TagsResponse
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
const result = await client.tags
  .getTags({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    workspace: "1331",
  })
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
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>workspace?</code> | <code>string</code> | The workspace to filter tags on. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.getTags(request)`

- **OnSuccess**: <code>[TagsResponse](src/models/tags-response.ts)</code>
- **OnError**: throws <code>[Tags.GetTagsError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.getTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsResponse, Tags.GetTagsError&gt;</code>, with `result.value` of type <code>[TagsResponse](src/models/tags-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTagsForTask(request: Tags.GetTagsForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksTagsResponse, Tags.GetTagsForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a compact representation of all of the tags the task has.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.getTagsForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TasksTagsResponse
} catch (err) {
  // TODO: Handle 'err' of type Tags.GetTagsForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .getTagsForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksTagsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.getTagsForTask(request)`

- **OnSuccess**: <code>[TasksTagsResponse](src/models/tasks-tags-response.ts)</code>
- **OnError**: throws <code>[Tags.GetTagsForTaskError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.getTagsForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksTagsResponse, Tags.GetTagsForTaskError&gt;</code>, with `result.value` of type <code>[TasksTagsResponse](src/models/tasks-tags-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTagsForWorkspace(request: Tags.GetTagsForWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesTagsResponse, Tags.GetTagsForWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.getTagsForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type WorkspacesTagsResponse
} catch (err) {
  // TODO: Handle 'err' of type Tags.GetTagsForWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .getTagsForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesTagsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.getTagsForWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesTagsResponse](src/models/workspaces-tags-response.ts)</code>
- **OnError**: throws <code>[Tags.GetTagsForWorkspaceError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.getTagsForWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesTagsResponse, Tags.GetTagsForWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesTagsResponse](src/models/workspaces-tags-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTag(request: Tags.UpdateTagRequest, options?: RequestOptions): ApiPromise&lt;TagsResponse1, Tags.UpdateTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the properties of a tag. Only the fields provided in the `data`
block will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the tag.

Returns the complete updated tag record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.updateTag({
    tagGid: "11235",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TagsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Tags.UpdateTagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .updateTag({
    tagGid: "11235",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tagGid</code> | <code>string</code> | Globally unique identifier for the tag. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.updateTag(request)`

- **OnSuccess**: <code>[TagsResponse1](src/models/tags-response1.ts)</code>
- **OnError**: throws <code>[Tags.UpdateTagError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.updateTag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsResponse1, Tags.UpdateTagError&gt;</code>, with `result.value` of type <code>[TagsResponse1](src/models/tags-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/resources/tasks.ts)

<details>
<summary><code>addDependenciesForTask(request: Tasks.AddDependenciesForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksAddDependenciesResponse, Tasks.AddDependenciesForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.addDependenciesForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksAddDependenciesResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.AddDependenciesForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .addDependenciesForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksAddDependenciesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksAddDependenciesRequest](src/models/tasks-add-dependencies-request.ts)</code> | The list of tasks to set as dependencies. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.addDependenciesForTask(request)`

- **OnSuccess**: <code>[TasksAddDependenciesResponse](src/models/tasks-add-dependencies-response.ts)</code>
- **OnError**: throws <code>[Tasks.AddDependenciesForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.addDependenciesForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksAddDependenciesResponse, Tasks.AddDependenciesForTaskError&gt;</code>, with `result.value` of type <code>[TasksAddDependenciesResponse](src/models/tasks-add-dependencies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addDependentsForTask(request: Tasks.AddDependentsForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksAddDependentsResponse, Tasks.AddDependentsForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.addDependentsForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksAddDependentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.AddDependentsForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .addDependentsForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksAddDependentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksAddDependentsRequest](src/models/tasks-add-dependents-request.ts)</code> | The list of tasks to add as dependents. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.addDependentsForTask(request)`

- **OnSuccess**: <code>[TasksAddDependentsResponse](src/models/tasks-add-dependents-response.ts)</code>
- **OnError**: throws <code>[Tasks.AddDependentsForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.addDependentsForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksAddDependentsResponse, Tasks.AddDependentsForTaskError&gt;</code>, with `result.value` of type <code>[TasksAddDependentsResponse](src/models/tasks-add-dependents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addFollowersForTask(request: Tasks.AddFollowersForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksAddFollowersResponse, Tasks.AddFollowersForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds followers to a task. Returns an empty data block.
Each task can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated task record, described above.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.addFollowersForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksAddFollowersResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.AddFollowersForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .addFollowersForTask({ taskGid: "321654", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksAddFollowersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksAddFollowersRequest](src/models/tasks-add-followers-request.ts)</code> | The followers to add to the task. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.addFollowersForTask(request)`

- **OnSuccess**: <code>[TasksAddFollowersResponse](src/models/tasks-add-followers-response.ts)</code>
- **OnError**: throws <code>[Tasks.AddFollowersForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.addFollowersForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksAddFollowersResponse, Tasks.AddFollowersForTaskError&gt;</code>, with `result.value` of type <code>[TasksAddFollowersResponse](src/models/tasks-add-followers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addProjectForTask(request: Tasks.AddProjectForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksAddProjectResponse, Tasks.AddProjectForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the task to the specified project, in the optional location
specified. If no location arguments are given, the task will be added to
the end of the project.

`addProject` can also be used to reorder a task within a project or
section that already contains it.

At most one of `insert_before`, `insert_after`, or `section` should be
specified. Inserting into a section in an non-order-dependent way can be
done by specifying section, otherwise, to insert within a section in a
particular place, specify `insert_before` or `insert_after` and a task
within the section to anchor the position of this task.

Returns an empty data block.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.addProjectForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksAddProjectResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.AddProjectForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .addProjectForTask({ taskGid: "321654", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksAddProjectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksAddProjectRequest](src/models/tasks-add-project-request.ts)</code> | The project to add the task to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.addProjectForTask(request)`

- **OnSuccess**: <code>[TasksAddProjectResponse](src/models/tasks-add-project-response.ts)</code>
- **OnError**: throws <code>[Tasks.AddProjectForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.addProjectForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksAddProjectResponse, Tasks.AddProjectForTaskError&gt;</code>, with `result.value` of type <code>[TasksAddProjectResponse](src/models/tasks-add-project-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addTagForTask(request: Tasks.AddTagForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksAddTagResponse, Tasks.AddTagForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a tag to a task. Returns an empty data block.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.addTagForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksAddTagResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.AddTagForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .addTagForTask({ taskGid: "321654", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksAddTagResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksAddTagRequest](src/models/tasks-add-tag-request.ts)</code> | The tag to add to the task. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.addTagForTask(request)`

- **OnSuccess**: <code>[TasksAddTagResponse](src/models/tasks-add-tag-response.ts)</code>
- **OnError**: throws <code>[Tasks.AddTagForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.addTagForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksAddTagResponse, Tasks.AddTagForTaskError&gt;</code>, with `result.value` of type <code>[TasksAddTagResponse](src/models/tasks-add-tag-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSubtaskForTask(request: Tasks.CreateSubtaskForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksSubtasksResponse1, Tasks.CreateSubtaskForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.createSubtaskForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksSubtasksResponse1
} catch (err) {
  // TODO: Handle 'err' of type Tasks.CreateSubtaskForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .createSubtaskForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksSubtasksResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksSubtasksRequest](src/models/tasks-subtasks-request.ts)</code> | The new subtask to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.createSubtaskForTask(request)`

- **OnSuccess**: <code>[TasksSubtasksResponse1](src/models/tasks-subtasks-response1.ts)</code>
- **OnError**: throws <code>[Tasks.CreateSubtaskForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.createSubtaskForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksSubtasksResponse1, Tasks.CreateSubtaskForTaskError&gt;</code>, with `result.value` of type <code>[TasksSubtasksResponse1](src/models/tasks-subtasks-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTask(request: Tasks.CreateTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksResponse1, Tasks.CreateTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creating a new task is as easy as POSTing to the `/tasks` endpoint with a
data block containing the fields you’d like to set on the task. Any
unspecified fields will take on default values.

Every task is required to be created in a specific workspace, and this
workspace cannot be changed once set. The workspace need not be set
explicitly if you specify `projects` or a `parent` task instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.createTask({
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksResponse1
} catch (err) {
  // TODO: Handle 'err' of type Tasks.CreateTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .createTask({ optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksRequest](src/models/tasks-request.ts)</code> | The task to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.createTask(request)`

- **OnSuccess**: <code>[TasksResponse1](src/models/tasks-response1.ts)</code>
- **OnError**: throws <code>[Tasks.CreateTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.createTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksResponse1, Tasks.CreateTaskError&gt;</code>, with `result.value` of type <code>[TasksResponse1](src/models/tasks-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTask(request: Tasks.DeleteTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksResponse4, Tasks.DeleteTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific, existing task can be deleted by making a DELETE request on
the URL for that task. Deleted tasks go into the “trash” of the user
making the delete request. Tasks can be recovered from the trash within a
period of 30 days; afterward they are completely removed from the system.

Returns an empty data record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.deleteTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type TasksResponse4
} catch (err) {
  // TODO: Handle 'err' of type Tasks.DeleteTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .deleteTask({ taskGid: "321654", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksResponse4
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.deleteTask(request)`

- **OnSuccess**: <code>[TasksResponse4](src/models/tasks-response4.ts)</code>
- **OnError**: throws <code>[Tasks.DeleteTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.deleteTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksResponse4, Tasks.DeleteTaskError&gt;</code>, with `result.value` of type <code>[TasksResponse4](src/models/tasks-response4.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>duplicateTask(request: Tasks.DuplicateTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksDuplicateResponse, Tasks.DuplicateTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and returns a job that will asynchronously handle the duplication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.duplicateTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksDuplicateResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.DuplicateTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .duplicateTask({ taskGid: "321654", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksDuplicateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksDuplicateRequest](src/models/tasks-duplicate-request.ts)</code> | Describes the duplicate's name and the fields that will be duplicated. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.duplicateTask(request)`

- **OnSuccess**: <code>[TasksDuplicateResponse](src/models/tasks-duplicate-response.ts)</code>
- **OnError**: throws <code>[Tasks.DuplicateTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.duplicateTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksDuplicateResponse, Tasks.DuplicateTaskError&gt;</code>, with `result.value` of type <code>[TasksDuplicateResponse](src/models/tasks-duplicate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDependenciesForTask(request: Tasks.GetDependenciesForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksDependenciesResponse, Tasks.GetDependenciesForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact representations of all of the dependencies of a task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getDependenciesForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TasksDependenciesResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetDependenciesForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getDependenciesForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksDependenciesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getDependenciesForTask(request)`

- **OnSuccess**: <code>[TasksDependenciesResponse](src/models/tasks-dependencies-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetDependenciesForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getDependenciesForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksDependenciesResponse, Tasks.GetDependenciesForTaskError&gt;</code>, with `result.value` of type <code>[TasksDependenciesResponse](src/models/tasks-dependencies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDependentsForTask(request: Tasks.GetDependentsForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksDependentsResponse, Tasks.GetDependentsForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact representations of all of the dependents of a task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getDependentsForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TasksDependentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetDependentsForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getDependentsForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksDependentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getDependentsForTask(request)`

- **OnSuccess**: <code>[TasksDependentsResponse](src/models/tasks-dependents-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetDependentsForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getDependentsForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksDependentsResponse, Tasks.GetDependentsForTaskError&gt;</code>, with `result.value` of type <code>[TasksDependentsResponse](src/models/tasks-dependents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSubtasksForTask(request: Tasks.GetSubtasksForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksSubtasksResponse, Tasks.GetSubtasksForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a compact representation of all of the subtasks of a task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getSubtasksForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TasksSubtasksResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetSubtasksForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getSubtasksForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksSubtasksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getSubtasksForTask(request)`

- **OnSuccess**: <code>[TasksSubtasksResponse](src/models/tasks-subtasks-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetSubtasksForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getSubtasksForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksSubtasksResponse, Tasks.GetSubtasksForTaskError&gt;</code>, with `result.value` of type <code>[TasksSubtasksResponse](src/models/tasks-subtasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTask(request: Tasks.GetTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksResponse1, Tasks.GetTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete task record for a single task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type TasksResponse1
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTask({ taskGid: "321654", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTask(request)`

- **OnSuccess**: <code>[TasksResponse1](src/models/tasks-response1.ts)</code>
- **OnError**: throws <code>[Tasks.GetTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksResponse1, Tasks.GetTaskError&gt;</code>, with `result.value` of type <code>[TasksResponse1](src/models/tasks-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasks(request?: Tasks.GetTasksRequest, options?: RequestOptions): ApiPromise&lt;TasksResponse, Tasks.GetTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a `project` or `tag` if you do not specify `assignee` and `workspace`.

For more complex task retrieval, use workspaces/{workspace_gid}/tasks/search.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTasks({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    assignee: "14641",
    project: "321654",
    section: "321654",
    workspace: "321654",
    completedSince: new Date(Date.UTC(2012, 1, 22, 2, 6, 58, 158)),
    modifiedSince: new Date(Date.UTC(2012, 1, 22, 2, 6, 58, 158)),
  });
  // TODO: Handle 'response' of type TasksResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTasks({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    assignee: "14641",
    project: "321654",
    section: "321654",
    workspace: "321654",
    completedSince: new Date(Date.UTC(2012, 1, 22, 2, 6, 58, 158)),
    modifiedSince: new Date(Date.UTC(2012, 1, 22, 2, 6, 58, 158)),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>assignee?</code> | <code>string</code> | The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified.<br>*Note: If you specify `assignee`, you must also specify the `workspace` to filter on.* |
| <code>project?</code> | <code>string</code> | The project to filter tasks on. |
| <code>section?</code> | <code>string</code> | The section to filter tasks on.<br>*Note: Currently, this is only supported in board views.* |
| <code>workspace?</code> | <code>string</code> | The workspace to filter tasks on.<br>*Note: If you specify `workspace`, you must also specify the `assignee` to filter on.* |
| <code>completedSince?</code> | <code>Date</code> (date-time) | Only return tasks that are either incomplete or that have been completed since this time. |
| <code>modifiedSince?</code> | <code>Date</code> (date-time) | Only return tasks that have been modified since the given time.<br><br>*Note: A task is considered “modified” if any of its properties<br>change, or associations between it and other objects are modified<br>(e.g.  a task being added to a project). A task is not considered<br>modified just because another object it is associated with (e.g. a<br>subtask) is modified. Actions that count as modifying the task<br>include assigning, renaming, completing, and adding stories.* |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTasks(request)`

- **OnSuccess**: <code>[TasksResponse](src/models/tasks-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetTasksError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksResponse, Tasks.GetTasksError&gt;</code>, with `result.value` of type <code>[TasksResponse](src/models/tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasksForProject(request: Tasks.GetTasksForProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectsTasksResponse, Tasks.GetTasksForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTasksForProject({
    projectGid: "1331",
    completedSince: "2012-02-22T02:06:58.158Z",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type ProjectsTasksResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTasksForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTasksForProject({
    projectGid: "1331",
    completedSince: "2012-02-22T02:06:58.158Z",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsTasksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectGid</code> | <code>string</code> | Globally unique identifier for the project. |
| <code>completedSince?</code> | <code>string</code> | Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTasksForProject(request)`

- **OnSuccess**: <code>[ProjectsTasksResponse](src/models/projects-tasks-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetTasksForProjectError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTasksForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsTasksResponse, Tasks.GetTasksForProjectError&gt;</code>, with `result.value` of type <code>[ProjectsTasksResponse](src/models/projects-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasksForSection(request: Tasks.GetTasksForSectionRequest, options?: RequestOptions): ApiPromise&lt;SectionsTasksResponse, Tasks.GetTasksForSectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

*Board view only*: Returns the compact section records for all tasks within the given section.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTasksForSection({
    sectionGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type SectionsTasksResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTasksForSectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTasksForSection({
    sectionGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SectionsTasksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sectionGid</code> | <code>string</code> | The globally unique identifier for the section. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTasksForSection(request)`

- **OnSuccess**: <code>[SectionsTasksResponse](src/models/sections-tasks-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetTasksForSectionError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTasksForSection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SectionsTasksResponse, Tasks.GetTasksForSectionError&gt;</code>, with `result.value` of type <code>[SectionsTasksResponse](src/models/sections-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasksForTag(request: Tasks.GetTasksForTagRequest, options?: RequestOptions): ApiPromise&lt;TagsTasksResponse, Tasks.GetTasksForTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTasksForTag({
    tagGid: "11235",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TagsTasksResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTasksForTagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTasksForTag({
    tagGid: "11235",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsTasksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tagGid</code> | <code>string</code> | Globally unique identifier for the tag. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTasksForTag(request)`

- **OnSuccess**: <code>[TagsTasksResponse](src/models/tags-tasks-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetTasksForTagError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTasksForTag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsTasksResponse, Tasks.GetTasksForTagError&gt;</code>, with `result.value` of type <code>[TagsTasksResponse](src/models/tags-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTasksForUserTaskList(request: Tasks.GetTasksForUserTaskListRequest, options?: RequestOptions): ApiPromise&lt;UserTaskListsTasksResponse, Tasks.GetTasksForUserTaskListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact list of tasks in a user’s My Tasks list.
*Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.*
*Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting `completed_since=now` will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getTasksForUserTaskList({
    userTaskListGid: "12345",
    completedSince: "2012-02-22T02:06:58.158Z",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type UserTaskListsTasksResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetTasksForUserTaskListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .getTasksForUserTaskList({
    userTaskListGid: "12345",
    completedSince: "2012-02-22T02:06:58.158Z",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserTaskListsTasksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userTaskListGid</code> | <code>string</code> | Globally unique identifier for the user task list. |
| <code>completedSince?</code> | <code>string</code> | Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getTasksForUserTaskList(request)`

- **OnSuccess**: <code>[UserTaskListsTasksResponse](src/models/user-task-lists-tasks-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetTasksForUserTaskListError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getTasksForUserTaskList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserTaskListsTasksResponse, Tasks.GetTasksForUserTaskListError&gt;</code>, with `result.value` of type <code>[UserTaskListsTasksResponse](src/models/user-task-lists-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeDependenciesForTask(request: Tasks.RemoveDependenciesForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksRemoveDependenciesResponse, Tasks.RemoveDependenciesForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unlinks a set of dependencies from this task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.removeDependenciesForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksRemoveDependenciesResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.RemoveDependenciesForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .removeDependenciesForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksRemoveDependenciesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksRemoveDependenciesRequest](src/models/tasks-remove-dependencies-request.ts)</code> | The list of tasks to unlink as dependencies. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.removeDependenciesForTask(request)`

- **OnSuccess**: <code>[TasksRemoveDependenciesResponse](src/models/tasks-remove-dependencies-response.ts)</code>
- **OnError**: throws <code>[Tasks.RemoveDependenciesForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.removeDependenciesForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksRemoveDependenciesResponse, Tasks.RemoveDependenciesForTaskError&gt;</code>, with `result.value` of type <code>[TasksRemoveDependenciesResponse](src/models/tasks-remove-dependencies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeDependentsForTask(request: Tasks.RemoveDependentsForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksRemoveDependentsResponse, Tasks.RemoveDependentsForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unlinks a set of dependents from this task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.removeDependentsForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksRemoveDependentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.RemoveDependentsForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .removeDependentsForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksRemoveDependentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksRemoveDependentsRequest](src/models/tasks-remove-dependents-request.ts)</code> | The list of tasks to remove as dependents. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.removeDependentsForTask(request)`

- **OnSuccess**: <code>[TasksRemoveDependentsResponse](src/models/tasks-remove-dependents-response.ts)</code>
- **OnError**: throws <code>[Tasks.RemoveDependentsForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.removeDependentsForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksRemoveDependentsResponse, Tasks.RemoveDependentsForTaskError&gt;</code>, with `result.value` of type <code>[TasksRemoveDependentsResponse](src/models/tasks-remove-dependents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeFollowerForTask(request: Tasks.RemoveFollowerForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksRemoveFollowersResponse, Tasks.RemoveFollowerForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.removeFollowerForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksRemoveFollowersResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.RemoveFollowerForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .removeFollowerForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksRemoveFollowersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksRemoveFollowersRequest](src/models/tasks-remove-followers-request.ts)</code> | The followers to remove from the task. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.removeFollowerForTask(request)`

- **OnSuccess**: <code>[TasksRemoveFollowersResponse](src/models/tasks-remove-followers-response.ts)</code>
- **OnError**: throws <code>[Tasks.RemoveFollowerForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.removeFollowerForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksRemoveFollowersResponse, Tasks.RemoveFollowerForTaskError&gt;</code>, with `result.value` of type <code>[TasksRemoveFollowersResponse](src/models/tasks-remove-followers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeProjectForTask(request: Tasks.RemoveProjectForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksRemoveProjectResponse, Tasks.RemoveProjectForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the task from the specified project. The task will still exist in
the system, but it will not be in the project anymore.

Returns an empty data block.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.removeProjectForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksRemoveProjectResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.RemoveProjectForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .removeProjectForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksRemoveProjectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksRemoveProjectRequest](src/models/tasks-remove-project-request.ts)</code> | The project to remove the task from. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.removeProjectForTask(request)`

- **OnSuccess**: <code>[TasksRemoveProjectResponse](src/models/tasks-remove-project-response.ts)</code>
- **OnError**: throws <code>[Tasks.RemoveProjectForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.removeProjectForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksRemoveProjectResponse, Tasks.RemoveProjectForTaskError&gt;</code>, with `result.value` of type <code>[TasksRemoveProjectResponse](src/models/tasks-remove-project-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTagForTask(request: Tasks.RemoveTagForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksRemoveTagResponse, Tasks.RemoveTagForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a tag from a task. Returns an empty data block.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.removeTagForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksRemoveTagResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.RemoveTagForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .removeTagForTask({ taskGid: "321654", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksRemoveTagResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksRemoveTagRequest](src/models/tasks-remove-tag-request.ts)</code> | The tag to remove from the task. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.removeTagForTask(request)`

- **OnSuccess**: <code>[TasksRemoveTagResponse](src/models/tasks-remove-tag-response.ts)</code>
- **OnError**: throws <code>[Tasks.RemoveTagForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.removeTagForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksRemoveTagResponse, Tasks.RemoveTagForTaskError&gt;</code>, with `result.value` of type <code>[TasksRemoveTagResponse](src/models/tasks-remove-tag-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchTasksForWorkspace(request: Tasks.SearchTasksForWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesTasksSearchResponse, Tasks.SearchTasksForWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need.
#### Premium access
Like the Asana web product's advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:

- The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace

Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a `402 Payment Required` error.
#### Pagination
Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional pagination available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the `limit` query parameter.
#### Eventual consistency
Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product.
#### Rate limits
You may receive a `429 Too Many Requests` response if you hit any of our rate limits.
#### Custom field parameters
| Parameter name | Custom field type | Accepted type |
|---|---|---|
| custom_fields.{gid}.is_set | All | Boolean |
| custom_fields.{gid}.value | Text | String |
| custom_fields.{gid}.value | Number | Number |
| custom_fields.{gid}.value | Enum | Enum option ID |
| custom_fields.{gid}.starts_with | Text only | String |
| custom_fields.{gid}.ends_with | Text only | String |
| custom_fields.{gid}.contains | Text only | String |
| custom_fields.{gid}.less_than | Number only | Number |
| custom_fields.{gid}.greater_than | Number only | Number |

For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be `custom_fields.12345.is_set=true`. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: `custom_fields.12345.value=67890`.

**Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field

*Note: If you specify `projects.any` and `sections.any`, you will receive tasks for the project **and** tasks for the section. If you're looking for only tasks in a section, omit the `projects.any` from the request.*

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.searchTasksForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    text: "Bug",
    assigneeAny: "12345,23456,34567",
    assigneeNot: "12345,23456,34567",
    portfoliosAny: "12345,23456,34567",
    projectsAny: "12345,23456,34567",
    projectsNot: "12345,23456,34567",
    projectsAll: "12345,23456,34567",
    sectionsAny: "12345,23456,34567",
    sectionsNot: "12345,23456,34567",
    sectionsAll: "12345,23456,34567",
    tagsAny: "12345,23456,34567",
    tagsNot: "12345,23456,34567",
    tagsAll: "12345,23456,34567",
    teamsAny: "12345,23456,34567",
    followersNot: "12345,23456,34567",
    createdByAny: "12345,23456,34567",
    createdByNot: "12345,23456,34567",
    assignedByAny: "12345,23456,34567",
    assignedByNot: "12345,23456,34567",
    likedByNot: "12345,23456,34567",
    commentedOnByNot: "12345,23456,34567",
    dueOnBefore: "2019-09-15",
    dueOnAfter: "2019-09-15",
    dueOn: "2019-09-15",
    dueAtBefore: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    dueAtAfter: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    startOnBefore: "2019-09-15",
    startOnAfter: "2019-09-15",
    startOn: "2019-09-15",
    createdOnBefore: "2019-09-15",
    createdOnAfter: "2019-09-15",
    createdOn: "2019-09-15",
    createdAtBefore: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    createdAtAfter: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    completedOnBefore: "2019-09-15",
    completedOnAfter: "2019-09-15",
    completedOn: "2019-09-15",
    completedAtBefore: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    completedAtAfter: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    modifiedOnBefore: "2019-09-15",
    modifiedOnAfter: "2019-09-15",
    modifiedOn: "2019-09-15",
    modifiedAtBefore: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    modifiedAtAfter: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    isBlocking: false,
    isBlocked: false,
    hasAttachment: false,
    completed: false,
    isSubtask: false,
    sortBy: SortBy.Likes,
    sortAscending: true,
  });
  // TODO: Handle 'response' of type WorkspacesTasksSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.SearchTasksForWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .searchTasksForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    text: "Bug",
    assigneeAny: "12345,23456,34567",
    assigneeNot: "12345,23456,34567",
    portfoliosAny: "12345,23456,34567",
    projectsAny: "12345,23456,34567",
    projectsNot: "12345,23456,34567",
    projectsAll: "12345,23456,34567",
    sectionsAny: "12345,23456,34567",
    sectionsNot: "12345,23456,34567",
    sectionsAll: "12345,23456,34567",
    tagsAny: "12345,23456,34567",
    tagsNot: "12345,23456,34567",
    tagsAll: "12345,23456,34567",
    teamsAny: "12345,23456,34567",
    followersNot: "12345,23456,34567",
    createdByAny: "12345,23456,34567",
    createdByNot: "12345,23456,34567",
    assignedByAny: "12345,23456,34567",
    assignedByNot: "12345,23456,34567",
    likedByNot: "12345,23456,34567",
    commentedOnByNot: "12345,23456,34567",
    dueOnBefore: "2019-09-15",
    dueOnAfter: "2019-09-15",
    dueOn: "2019-09-15",
    dueAtBefore: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    dueAtAfter: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    startOnBefore: "2019-09-15",
    startOnAfter: "2019-09-15",
    startOn: "2019-09-15",
    createdOnBefore: "2019-09-15",
    createdOnAfter: "2019-09-15",
    createdOn: "2019-09-15",
    createdAtBefore: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    createdAtAfter: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    completedOnBefore: "2019-09-15",
    completedOnAfter: "2019-09-15",
    completedOn: "2019-09-15",
    completedAtBefore: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    completedAtAfter: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    modifiedOnBefore: "2019-09-15",
    modifiedOnAfter: "2019-09-15",
    modifiedOn: "2019-09-15",
    modifiedAtBefore: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    modifiedAtAfter: new Date(Date.UTC(2019, 3, 15, 1, 1, 46, 55)),
    isBlocking: false,
    isBlocked: false,
    hasAttachment: false,
    completed: false,
    isSubtask: false,
    sortBy: SortBy.Likes,
    sortAscending: true,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesTasksSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>text?</code> | <code>string</code> | Performs full-text search on both task name and description |
| <code>resourceSubtype?</code> | <code>[ResourceSubtype2AsanaTasksApi](src/models/resource-subtype2-asana-tasks-api.ts)</code> | Filters results by the task's resource_subtype<br>**Default**: "milestone" |
| <code>assigneeAny?</code> | <code>string</code> | Comma-separated list of user identifiers |
| <code>assigneeNot?</code> | <code>string</code> | Comma-separated list of user identifiers |
| <code>portfoliosAny?</code> | <code>string</code> | Comma-separated list of portfolio IDs |
| <code>projectsAny?</code> | <code>string</code> | Comma-separated list of project IDs |
| <code>projectsNot?</code> | <code>string</code> | Comma-separated list of project IDs |
| <code>projectsAll?</code> | <code>string</code> | Comma-separated list of project IDs |
| <code>sectionsAny?</code> | <code>string</code> | Comma-separated list of section or column IDs |
| <code>sectionsNot?</code> | <code>string</code> | Comma-separated list of section or column IDs |
| <code>sectionsAll?</code> | <code>string</code> | Comma-separated list of section or column IDs |
| <code>tagsAny?</code> | <code>string</code> | Comma-separated list of tag IDs |
| <code>tagsNot?</code> | <code>string</code> | Comma-separated list of tag IDs |
| <code>tagsAll?</code> | <code>string</code> | Comma-separated list of tag IDs |
| <code>teamsAny?</code> | <code>string</code> | Comma-separated list of team IDs |
| <code>followersNot?</code> | <code>string</code> | Comma-separated list of user identifiers |
| <code>createdByAny?</code> | <code>string</code> | Comma-separated list of user identifiers |
| <code>createdByNot?</code> | <code>string</code> | Comma-separated list of user identifiers |
| <code>assignedByAny?</code> | <code>string</code> | Comma-separated list of user identifiers |
| <code>assignedByNot?</code> | <code>string</code> | Comma-separated list of user identifiers |
| <code>likedByNot?</code> | <code>string</code> | Comma-separated list of user identifiers |
| <code>commentedOnByNot?</code> | <code>string</code> | Comma-separated list of user identifiers |
| <code>dueOnBefore?</code> | <code>string</code> (date) | ISO 8601 date string |
| <code>dueOnAfter?</code> | <code>string</code> (date) | ISO 8601 date string |
| <code>dueOn?</code> | <code>string</code> (date) | ISO 8601 date string or `null` |
| <code>dueAtBefore?</code> | <code>Date</code> (date-time) | ISO 8601 datetime string |
| <code>dueAtAfter?</code> | <code>Date</code> (date-time) | ISO 8601 datetime string |
| <code>startOnBefore?</code> | <code>string</code> (date) | ISO 8601 date string |
| <code>startOnAfter?</code> | <code>string</code> (date) | ISO 8601 date string |
| <code>startOn?</code> | <code>string</code> (date) | ISO 8601 date string or `null` |
| <code>createdOnBefore?</code> | <code>string</code> (date) | ISO 8601 date string |
| <code>createdOnAfter?</code> | <code>string</code> (date) | ISO 8601 date string |
| <code>createdOn?</code> | <code>string</code> (date) | ISO 8601 date string or `null` |
| <code>createdAtBefore?</code> | <code>Date</code> (date-time) | ISO 8601 datetime string |
| <code>createdAtAfter?</code> | <code>Date</code> (date-time) | ISO 8601 datetime string |
| <code>completedOnBefore?</code> | <code>string</code> (date) | ISO 8601 date string |
| <code>completedOnAfter?</code> | <code>string</code> (date) | ISO 8601 date string |
| <code>completedOn?</code> | <code>string</code> (date) | ISO 8601 date string or `null` |
| <code>completedAtBefore?</code> | <code>Date</code> (date-time) | ISO 8601 datetime string |
| <code>completedAtAfter?</code> | <code>Date</code> (date-time) | ISO 8601 datetime string |
| <code>modifiedOnBefore?</code> | <code>string</code> (date) | ISO 8601 date string |
| <code>modifiedOnAfter?</code> | <code>string</code> (date) | ISO 8601 date string |
| <code>modifiedOn?</code> | <code>string</code> (date) | ISO 8601 date string or `null` |
| <code>modifiedAtBefore?</code> | <code>Date</code> (date-time) | ISO 8601 datetime string |
| <code>modifiedAtAfter?</code> | <code>Date</code> (date-time) | ISO 8601 datetime string |
| <code>isBlocking?</code> | <code>boolean</code> | Filter to incomplete tasks with dependents |
| <code>isBlocked?</code> | <code>boolean</code> | Filter to tasks with incomplete dependencies |
| <code>hasAttachment?</code> | <code>boolean</code> | Filter to tasks with attachments |
| <code>completed?</code> | <code>boolean</code> | Filter to completed tasks |
| <code>isSubtask?</code> | <code>boolean</code> | Filter to subtasks |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | One of `due_date`, `created_at`, `completed_at`, `likes`, or `modified_at`, defaults to `modified_at`<br>**Default**: "modified_at" |
| <code>sortAscending?</code> | <code>boolean</code> | Default `false`<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.searchTasksForWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesTasksSearchResponse](src/models/workspaces-tasks-search-response.ts)</code>
- **OnError**: throws <code>[Tasks.SearchTasksForWorkspaceError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.searchTasksForWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesTasksSearchResponse, Tasks.SearchTasksForWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesTasksSearchResponse](src/models/workspaces-tasks-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setParentForTask(request: Tasks.SetParentForTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksSetParentResponse, Tasks.SetParentForTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

parent, or no parent task at all. Returns an empty data block. When using `insert_before` and `insert_after`, at most one of those two options can be specified, and they must already be subtasks of the parent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.setParentForTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksSetParentResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.SetParentForTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .setParentForTask({ taskGid: "321654", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksSetParentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksSetParentRequest](src/models/tasks-set-parent-request.ts)</code> | The new parent of the subtask. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.setParentForTask(request)`

- **OnSuccess**: <code>[TasksSetParentResponse](src/models/tasks-set-parent-response.ts)</code>
- **OnError**: throws <code>[Tasks.SetParentForTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.setParentForTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksSetParentResponse, Tasks.SetParentForTaskError&gt;</code>, with `result.value` of type <code>[TasksSetParentResponse](src/models/tasks-set-parent-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTask(request: Tasks.UpdateTaskRequest, options?: RequestOptions): ApiPromise&lt;TasksResponse1, Tasks.UpdateTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific, existing task can be updated by making a PUT request on the
URL for that task. Only the fields provided in the `data` block will be
updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated task record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.updateTask({
    taskGid: "321654",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TasksResponse1
} catch (err) {
  // TODO: Handle 'err' of type Tasks.UpdateTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks
  .updateTask({ taskGid: "321654", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TasksResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskGid</code> | <code>string</code> | The task to operate on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TasksRequest](src/models/tasks-request.ts)</code> | The task to update. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.updateTask(request)`

- **OnSuccess**: <code>[TasksResponse1](src/models/tasks-response1.ts)</code>
- **OnError**: throws <code>[Tasks.UpdateTaskError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.updateTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TasksResponse1, Tasks.UpdateTaskError&gt;</code>, with `result.value` of type <code>[TasksResponse1](src/models/tasks-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TeamMemberships

> Source: [TeamMemberships](src/resources/team-memberships.ts)

<details>
<summary><code>getTeamMembership(request: TeamMemberships.GetTeamMembershipRequest, options?: RequestOptions): ApiPromise&lt;TeamMembershipsResponse, TeamMemberships.GetTeamMembershipError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete team membership record for a single team membership.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamMemberships.getTeamMembership({
    teamMembershipGid: "724362",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type TeamMembershipsResponse
} catch (err) {
  // TODO: Handle 'err' of type TeamMemberships.GetTeamMembershipError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamMemberships
  .getTeamMembership({ teamMembershipGid: "724362", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamMembershipsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamMembershipGid</code> | <code>string</code> | - |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamMemberships.getTeamMembership(request)`

- **OnSuccess**: <code>[TeamMembershipsResponse](src/models/team-memberships-response.ts)</code>
- **OnError**: throws <code>[TeamMemberships.GetTeamMembershipError](src/resources/team-memberships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamMemberships.getTeamMembership(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamMembershipsResponse, TeamMemberships.GetTeamMembershipError&gt;</code>, with `result.value` of type <code>[TeamMembershipsResponse](src/models/team-memberships-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeamMemberships(request?: TeamMemberships.GetTeamMembershipsRequest, options?: RequestOptions): ApiPromise&lt;TeamMembershipsResponse1, TeamMemberships.GetTeamMembershipsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns compact team membership records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamMemberships.getTeamMemberships({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    team: "159874",
    user: "512241",
    workspace: "31326",
  });
  // TODO: Handle 'response' of type TeamMembershipsResponse1
} catch (err) {
  // TODO: Handle 'err' of type TeamMemberships.GetTeamMembershipsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamMemberships
  .getTeamMemberships({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    team: "159874",
    user: "512241",
    workspace: "31326",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamMembershipsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>team?</code> | <code>string</code> | Globally unique identifier for the team. |
| <code>user?</code> | <code>string</code> | A string identifying a user. This can either be the string "me", an email, or the gid of a user. This parameter must be used with the workspace parameter. |
| <code>workspace?</code> | <code>string</code> | Globally unique identifier for the workspace. This parameter must be used with the user parameter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamMemberships.getTeamMemberships(request)`

- **OnSuccess**: <code>[TeamMembershipsResponse1](src/models/team-memberships-response1.ts)</code>
- **OnError**: throws <code>[TeamMemberships.GetTeamMembershipsError](src/resources/team-memberships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamMemberships.getTeamMemberships(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamMembershipsResponse1, TeamMemberships.GetTeamMembershipsError&gt;</code>, with `result.value` of type <code>[TeamMembershipsResponse1](src/models/team-memberships-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeamMembershipsForTeam(request: TeamMemberships.GetTeamMembershipsForTeamRequest, options?: RequestOptions): ApiPromise&lt;TeamsTeamMembershipsResponse, TeamMemberships.GetTeamMembershipsForTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact team memberships for the team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamMemberships.getTeamMembershipsForTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TeamsTeamMembershipsResponse
} catch (err) {
  // TODO: Handle 'err' of type TeamMemberships.GetTeamMembershipsForTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamMemberships
  .getTeamMembershipsForTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamsTeamMembershipsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamGid</code> | <code>string</code> | Globally unique identifier for the team. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamMemberships.getTeamMembershipsForTeam(request)`

- **OnSuccess**: <code>[TeamsTeamMembershipsResponse](src/models/teams-team-memberships-response.ts)</code>
- **OnError**: throws <code>[TeamMemberships.GetTeamMembershipsForTeamError](src/resources/team-memberships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamMemberships.getTeamMembershipsForTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamsTeamMembershipsResponse, TeamMemberships.GetTeamMembershipsForTeamError&gt;</code>, with `result.value` of type <code>[TeamsTeamMembershipsResponse](src/models/teams-team-memberships-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeamMembershipsForUser(request: TeamMemberships.GetTeamMembershipsForUserRequest, options?: RequestOptions): ApiPromise&lt;UsersTeamMembershipsResponse, TeamMemberships.GetTeamMembershipsForUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact team membership records for the user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamMemberships.getTeamMembershipsForUser({
    userGid: "me",
    workspace: "31326",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type UsersTeamMembershipsResponse
} catch (err) {
  // TODO: Handle 'err' of type TeamMemberships.GetTeamMembershipsForUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamMemberships
  .getTeamMembershipsForUser({
    userGid: "me",
    workspace: "31326",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersTeamMembershipsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userGid</code> | <code>string</code> | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| <code>workspace</code> | <code>string</code> | Globally unique identifier for the workspace. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamMemberships.getTeamMembershipsForUser(request)`

- **OnSuccess**: <code>[UsersTeamMembershipsResponse](src/models/users-team-memberships-response.ts)</code>
- **OnError**: throws <code>[TeamMemberships.GetTeamMembershipsForUserError](src/resources/team-memberships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamMemberships.getTeamMembershipsForUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersTeamMembershipsResponse, TeamMemberships.GetTeamMembershipsForUserError&gt;</code>, with `result.value` of type <code>[UsersTeamMembershipsResponse](src/models/users-team-memberships-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Teams

> Source: [Teams](src/resources/teams.ts)

<details>
<summary><code>addUserForTeam(request: Teams.AddUserForTeamRequest, options?: RequestOptions): ApiPromise&lt;TeamsAddUserResponse, Teams.AddUserForTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.

Returns the complete team membership record for the newly added user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.addUserForTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TeamsAddUserResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.AddUserForTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams
  .addUserForTeam({ teamGid: "159874", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamsAddUserResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamGid</code> | <code>string</code> | Globally unique identifier for the team. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TeamsAddUserRequest](src/models/teams-add-user-request.ts)</code> | The user to add to the team. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.addUserForTeam(request)`

- **OnSuccess**: <code>[TeamsAddUserResponse](src/models/teams-add-user-response.ts)</code>
- **OnError**: throws <code>[Teams.AddUserForTeamError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.addUserForTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamsAddUserResponse, Teams.AddUserForTeamError&gt;</code>, with `result.value` of type <code>[TeamsAddUserResponse](src/models/teams-add-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTeam(request: Teams.CreateTeamRequest, options?: RequestOptions): ApiPromise&lt;TeamsResponse, Teams.CreateTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a team within the current workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.createTeam({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    body: {},
  });
  // TODO: Handle 'response' of type TeamsResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.CreateTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams
  .createTeam({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>body</code> | <code>[TeamsRequest](src/models/teams-request.ts)</code> | The team to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.createTeam(request)`

- **OnSuccess**: <code>[TeamsResponse](src/models/teams-response.ts)</code>
- **OnError**: throws <code>[Teams.CreateTeamError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.createTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamsResponse, Teams.CreateTeamError&gt;</code>, with `result.value` of type <code>[TeamsResponse](src/models/teams-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeam(request: Teams.GetTeamRequest, options?: RequestOptions): ApiPromise&lt;TeamsResponse, Teams.GetTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for a single team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.getTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TeamsResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.GetTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams
  .getTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamGid</code> | <code>string</code> | Globally unique identifier for the team. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.getTeam(request)`

- **OnSuccess**: <code>[TeamsResponse](src/models/teams-response.ts)</code>
- **OnError**: throws <code>[Teams.GetTeamError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.getTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamsResponse, Teams.GetTeamError&gt;</code>, with `result.value` of type <code>[TeamsResponse](src/models/teams-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeamsForUser(request: Teams.GetTeamsForUserRequest, options?: RequestOptions): ApiPromise&lt;UsersTeamsResponse, Teams.GetTeamsForUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all teams to which the given user is assigned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.getTeamsForUser({
    userGid: "me",
    organization: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type UsersTeamsResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.GetTeamsForUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams
  .getTeamsForUser({
    userGid: "me",
    organization: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersTeamsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userGid</code> | <code>string</code> | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| <code>organization</code> | <code>string</code> | The workspace or organization to filter teams on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.getTeamsForUser(request)`

- **OnSuccess**: <code>[UsersTeamsResponse](src/models/users-teams-response.ts)</code>
- **OnError**: throws <code>[Teams.GetTeamsForUserError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.getTeamsForUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersTeamsResponse, Teams.GetTeamsForUserError&gt;</code>, with `result.value` of type <code>[UsersTeamsResponse](src/models/users-teams-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeamsForWorkspace(request: Teams.GetTeamsForWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesTeamsResponse, Teams.GetTeamsForWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all teams in the workspace visible to the authorized user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.getTeamsForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type WorkspacesTeamsResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.GetTeamsForWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams
  .getTeamsForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesTeamsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.getTeamsForWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesTeamsResponse](src/models/workspaces-teams-response.ts)</code>
- **OnError**: throws <code>[Teams.GetTeamsForWorkspaceError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.getTeamsForWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesTeamsResponse, Teams.GetTeamsForWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesTeamsResponse](src/models/workspaces-teams-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeUserForTeam(request: Teams.RemoveUserForTeamRequest, options?: RequestOptions): ApiPromise&lt;TeamsRemoveUserResponse, Teams.RemoveUserForTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The user making this call must be a member of the team in order to remove themselves or others.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.removeUserForTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type TeamsRemoveUserResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.RemoveUserForTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams
  .removeUserForTeam({ teamGid: "159874", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamsRemoveUserResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamGid</code> | <code>string</code> | Globally unique identifier for the team. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[TeamsRemoveUserRequest](src/models/teams-remove-user-request.ts)</code> | The user to remove from the team. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.removeUserForTeam(request)`

- **OnSuccess**: <code>[TeamsRemoveUserResponse](src/models/teams-remove-user-response.ts)</code>
- **OnError**: throws <code>[Teams.RemoveUserForTeamError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.removeUserForTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamsRemoveUserResponse, Teams.RemoveUserForTeamError&gt;</code>, with `result.value` of type <code>[TeamsRemoveUserResponse](src/models/teams-remove-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTeam(request: Teams.UpdateTeamRequest, options?: RequestOptions): ApiPromise&lt;TeamsResponse, Teams.UpdateTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a team within the current workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.updateTeam({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    body: {},
  });
  // TODO: Handle 'response' of type TeamsResponse
} catch (err) {
  // TODO: Handle 'err' of type Teams.UpdateTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams
  .updateTeam({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>body</code> | <code>[TeamsRequest](src/models/teams-request.ts)</code> | The team to update. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.updateTeam(request)`

- **OnSuccess**: <code>[TeamsResponse](src/models/teams-response.ts)</code>
- **OnError**: throws <code>[Teams.UpdateTeamError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.updateTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamsResponse, Teams.UpdateTeamError&gt;</code>, with `result.value` of type <code>[TeamsResponse](src/models/teams-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TimePeriods

> Source: [TimePeriods](src/resources/time-periods.ts)

<details>
<summary><code>getTimePeriod(request: TimePeriods.GetTimePeriodRequest, options?: RequestOptions): ApiPromise&lt;TimePeriodsResponse, TimePeriods.GetTimePeriodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for a single time period.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.timePeriods.getTimePeriod({
    timePeriodGid: "917392",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type TimePeriodsResponse
} catch (err) {
  // TODO: Handle 'err' of type TimePeriods.GetTimePeriodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.timePeriods
  .getTimePeriod({ timePeriodGid: "917392", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TimePeriodsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timePeriodGid</code> | <code>string</code> | Globally unique identifier for the time period. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.timePeriods.getTimePeriod(request)`

- **OnSuccess**: <code>[TimePeriodsResponse](src/models/time-periods-response.ts)</code>
- **OnError**: throws <code>[TimePeriods.GetTimePeriodError](src/resources/time-periods.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.timePeriods.getTimePeriod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TimePeriodsResponse, TimePeriods.GetTimePeriodError&gt;</code>, with `result.value` of type <code>[TimePeriodsResponse](src/models/time-periods-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTimePeriods(request: TimePeriods.GetTimePeriodsRequest, options?: RequestOptions): ApiPromise&lt;TimePeriodsResponse1, TimePeriods.GetTimePeriodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns compact time period records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.timePeriods.getTimePeriods({
    workspace: "31326",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    startOn: "2019-09-15",
    endOn: "2019-09-15",
  });
  // TODO: Handle 'response' of type TimePeriodsResponse1
} catch (err) {
  // TODO: Handle 'err' of type TimePeriods.GetTimePeriodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.timePeriods
  .getTimePeriods({
    workspace: "31326",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    startOn: "2019-09-15",
    endOn: "2019-09-15",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TimePeriodsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>string</code> | Globally unique identifier for the workspace. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>startOn?</code> | <code>string</code> (date) | ISO 8601 date string |
| <code>endOn?</code> | <code>string</code> (date) | ISO 8601 date string |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.timePeriods.getTimePeriods(request)`

- **OnSuccess**: <code>[TimePeriodsResponse1](src/models/time-periods-response1.ts)</code>
- **OnError**: throws <code>[TimePeriods.GetTimePeriodsError](src/resources/time-periods.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.timePeriods.getTimePeriods(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TimePeriodsResponse1, TimePeriods.GetTimePeriodsError&gt;</code>, with `result.value` of type <code>[TimePeriodsResponse1](src/models/time-periods-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Typeahead

> Source: [Typeahead](src/resources/typeahead.ts)

<details>
<summary><code>typeaheadForWorkspace(request: Typeahead.TypeaheadForWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesTypeaheadResponse, Typeahead.TypeaheadForWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves objects in the workspace based via an auto-completion/typeahead
search algorithm. This feature is meant to provide results quickly, so do
not rely on this API to provide extremely accurate search results. The
result set is limited to a single page of results with a maximum size, so
you won’t be able to fetch large numbers of results.

The typeahead search API provides search for objects from a single
workspace. This endpoint should be used to query for objects when
creating an auto-completion/typeahead search feature. This API is meant
to provide results quickly and should not be relied upon for accurate or
exhaustive search results. The results sets are limited in size and
cannot be paginated.

Queries return a compact representation of each object which is typically
the gid and name fields. Interested in a specific set of fields or all of
the fields?! Of course you are. Use field selectors to manipulate what
data is included in a response.

Resources with type `user` are returned in order of most contacted to
least contacted. This is determined by task assignments, adding the user
to projects, and adding the user as a follower to tasks, messages,
etc.

Resources with type `project` are returned in order of recency. This is
determined when the user visits the project, is added to the project, and
completes tasks in the project.

Resources with type `task` are returned with priority placed on tasks
the user is following, but no guarantee on the order of those tasks.

Resources with type `project_template` are returned with priority
placed on favorited project templates.

Leaving the `query` string empty or omitted will give you results, still
following the resource ordering above. This could be used to list users or
projects that are relevant for the requesting user's api token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.typeahead.typeaheadForWorkspace({
    workspaceGid: "12345",
    resourceType: ResourceType.CustomField,
    query: "Greg",
    count: 20,
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type WorkspacesTypeaheadResponse
} catch (err) {
  // TODO: Handle 'err' of type Typeahead.TypeaheadForWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.typeahead
  .typeaheadForWorkspace({
    workspaceGid: "12345",
    resourceType: ResourceType.CustomField,
    query: "Greg",
    count: 20,
    optPretty: true,
    optFields: ["followers", "assignee"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesTypeaheadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>resourceType?</code> | <code>[ResourceType](src/models/resource-type.ts)</code> | The type of values the typeahead should return. You can choose from one of the following: `custom_field`, `project`, `project_template`, `portfolio`, `tag`, `task`, and `user`. Note that unlike in the names of endpoints, the types listed here are in singular form (e.g. `task`). Using multiple types is not yet supported.<br>**Default**: "user" |
| <code>type?</code> | <code>[TypeAsanaTypeaheadApi](src/models/type-asana-typeahead-api.ts)</code> | *Deprecated: new integrations should prefer the resource_type field.*<br>**Default**: "user" |
| <code>query?</code> | <code>string</code> | The string that will be used to search for relevant objects. If an empty string is passed in, the API will return results. |
| <code>count?</code> | <code>number</code> | The number of results to return. The default is 20 if this parameter is omitted, with a minimum of 1 and a maximum of 100. If there are fewer results found than requested, all will be returned. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.typeahead.typeaheadForWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesTypeaheadResponse](src/models/workspaces-typeahead-response.ts)</code>
- **OnError**: throws <code>[Typeahead.TypeaheadForWorkspaceError](src/resources/typeahead.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.typeahead.typeaheadForWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesTypeaheadResponse, Typeahead.TypeaheadForWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesTypeaheadResponse](src/models/workspaces-typeahead-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UserTaskLists

> Source: [UserTaskLists](src/resources/user-task-lists.ts)

<details>
<summary><code>getUserTaskList(request: UserTaskLists.GetUserTaskListRequest, options?: RequestOptions): ApiPromise&lt;UserTaskListsResponse, UserTaskLists.GetUserTaskListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for a user task list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userTaskLists.getUserTaskList({
    userTaskListGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type UserTaskListsResponse
} catch (err) {
  // TODO: Handle 'err' of type UserTaskLists.GetUserTaskListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userTaskLists
  .getUserTaskList({ userTaskListGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserTaskListsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userTaskListGid</code> | <code>string</code> | Globally unique identifier for the user task list. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userTaskLists.getUserTaskList(request)`

- **OnSuccess**: <code>[UserTaskListsResponse](src/models/user-task-lists-response.ts)</code>
- **OnError**: throws <code>[UserTaskLists.GetUserTaskListError](src/resources/user-task-lists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userTaskLists.getUserTaskList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserTaskListsResponse, UserTaskLists.GetUserTaskListError&gt;</code>, with `result.value` of type <code>[UserTaskListsResponse](src/models/user-task-lists-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserTaskListForUser(request: UserTaskLists.GetUserTaskListForUserRequest, options?: RequestOptions): ApiPromise&lt;UsersUserTaskListResponse, UserTaskLists.GetUserTaskListForUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for a user's task list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userTaskLists.getUserTaskListForUser({
    userGid: "me",
    workspace: "1234",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type UsersUserTaskListResponse
} catch (err) {
  // TODO: Handle 'err' of type UserTaskLists.GetUserTaskListForUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userTaskLists
  .getUserTaskListForUser({
    userGid: "me",
    workspace: "1234",
    optPretty: true,
    optFields: ["followers", "assignee"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersUserTaskListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userGid</code> | <code>string</code> | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| <code>workspace</code> | <code>string</code> | The workspace in which to get the user task list. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userTaskLists.getUserTaskListForUser(request)`

- **OnSuccess**: <code>[UsersUserTaskListResponse](src/models/users-user-task-list-response.ts)</code>
- **OnError**: throws <code>[UserTaskLists.GetUserTaskListForUserError](src/resources/user-task-lists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userTaskLists.getUserTaskListForUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersUserTaskListResponse, UserTaskLists.GetUserTaskListForUserError&gt;</code>, with `result.value` of type <code>[UsersUserTaskListResponse](src/models/users-user-task-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>getFavoritesForUser(request: Users.GetFavoritesForUserRequest, options?: RequestOptions): ApiPromise&lt;UsersFavoritesResponse, Users.GetFavoritesForUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all of a user's favorites in the given workspace, of the given type.
Results are given in order (The same order as Asana's sidebar).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getFavoritesForUser({
    userGid: "me",
    resourceType: ResourceTypeAsanaUsersApi.Portfolio,
    workspace: "1234",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type UsersFavoritesResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.GetFavoritesForUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .getFavoritesForUser({
    userGid: "me",
    resourceType: ResourceTypeAsanaUsersApi.Portfolio,
    workspace: "1234",
    optPretty: true,
    optFields: ["followers", "assignee"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersFavoritesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userGid</code> | <code>string</code> | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| <code>resourceType?</code> | <code>[ResourceTypeAsanaUsersApi](src/models/resource-type-asana-users-api.ts)</code> | The resource type of favorites to be returned.<br>**Default**: "project" |
| <code>workspace</code> | <code>string</code> | The workspace in which to get favorites. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getFavoritesForUser(request)`

- **OnSuccess**: <code>[UsersFavoritesResponse](src/models/users-favorites-response.ts)</code>
- **OnError**: throws <code>[Users.GetFavoritesForUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getFavoritesForUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersFavoritesResponse, Users.GetFavoritesForUserError&gt;</code>, with `result.value` of type <code>[UsersFavoritesResponse](src/models/users-favorites-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise&lt;UsersResponse1, Users.GetUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full user record for the single user with the provided ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUser({
    userGid: "me",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type UsersResponse1
} catch (err) {
  // TODO: Handle 'err' of type Users.GetUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .getUser({ userGid: "me", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userGid</code> | <code>string</code> | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUser(request)`

- **OnSuccess**: <code>[UsersResponse1](src/models/users-response1.ts)</code>
- **OnError**: throws <code>[Users.GetUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersResponse1, Users.GetUserError&gt;</code>, with `result.value` of type <code>[UsersResponse1](src/models/users-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsers(request?: Users.GetUsersRequest, options?: RequestOptions): ApiPromise&lt;UsersResponse, Users.GetUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter.
Results are sorted by user ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUsers({
    workspace: "1331",
    team: "15627",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type UsersResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.GetUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .getUsers({
    workspace: "1331",
    team: "15627",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace?</code> | <code>string</code> | The workspace or organization ID to filter users on. |
| <code>team?</code> | <code>string</code> | The team ID to filter users on. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUsers(request)`

- **OnSuccess**: <code>[UsersResponse](src/models/users-response.ts)</code>
- **OnError**: throws <code>[Users.GetUsersError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersResponse, Users.GetUsersError&gt;</code>, with `result.value` of type <code>[UsersResponse](src/models/users-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersForTeam(request: Users.GetUsersForTeamRequest, options?: RequestOptions): ApiPromise&lt;TeamsUsersResponse, Users.GetUsersForTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all users that are members of the team.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUsersForTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type TeamsUsersResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.GetUsersForTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .getUsersForTeam({
    teamGid: "159874",
    optPretty: true,
    optFields: ["followers", "assignee"],
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamsUsersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamGid</code> | <code>string</code> | Globally unique identifier for the team. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUsersForTeam(request)`

- **OnSuccess**: <code>[TeamsUsersResponse](src/models/teams-users-response.ts)</code>
- **OnError**: throws <code>[Users.GetUsersForTeamError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getUsersForTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamsUsersResponse, Users.GetUsersForTeamError&gt;</code>, with `result.value` of type <code>[TeamsUsersResponse](src/models/teams-users-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersForWorkspace(request: Users.GetUsersForWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesUsersResponse, Users.GetUsersForWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all users in the specified workspace or organization.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUsersForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type WorkspacesUsersResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.GetUsersForWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .getUsersForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesUsersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUsersForWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesUsersResponse](src/models/workspaces-users-response.ts)</code>
- **OnError**: throws <code>[Users.GetUsersForWorkspaceError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getUsersForWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesUsersResponse, Users.GetUsersForWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesUsersResponse](src/models/workspaces-users-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>createWebhook(request: Webhooks.CreateWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhooksResponse1, Webhooks.CreateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Establishing a webhook is a two-part process. First, a simple HTTP POST
request initiates the creation similar to creating any other resource.

Next, in the middle of this request comes the confirmation handshake.
When a webhook is created, we will send a test POST to the target with an
`X-Hook-Secret` header. The target must respond with a `200 OK` or `204
No Content` and a matching `X-Hook-Secret` header to confirm that this
webhook subscription is indeed expected. We strongly recommend storing
this secret to be used to verify future webhook event signatures.

The POST request to create the webhook will then return with the status
of the request. If you do not acknowledge the webhook’s confirmation
handshake it will fail to setup, and you will receive an error in
response to your attempt to create it. This means you need to be able to
receive and complete the webhook *while* the POST request is in-flight
(in other words, have a server that can handle requests asynchronously).

Invalid hostnames like localhost will recieve a 403 Forbidden status code.

```
# Request
curl -H "Authorization: Bearer " \
-X POST https://app.asana.com/api/1.0/webhooks \
-d "resource=8675309" \
-d "target=https://example.com/receive-webhook/7654"
```

```
# Handshake sent to https://example.com/
POST /receive-webhook/7654
X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
```

```
# Handshake response sent by example.com
HTTP/1.1 200
X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
```

```
# Response
HTTP/1.1 201
{
"data": {
"gid": "43214",
"resource": {
"gid": "8675309",
"name": "Bugs"
},
"target": "https://example.com/receive-webhook/7654",
"active": false,
"last_success_at": null,
"last_failure_at": null,
"last_failure_content": null
}
}
```

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.createWebhook({
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type WebhooksResponse1
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.CreateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .createWebhook({ optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhooksResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[WebhooksRequest](src/models/webhooks-request.ts)</code> | The webhook workspace and target. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.createWebhook(request)`

- **OnSuccess**: <code>[WebhooksResponse1](src/models/webhooks-response1.ts)</code>
- **OnError**: throws <code>[Webhooks.CreateWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.createWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhooksResponse1, Webhooks.CreateWebhookError&gt;</code>, with `result.value` of type <code>[WebhooksResponse1](src/models/webhooks-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhooksResponse4, Webhooks.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.deleteWebhook({
    webhookGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type WebhooksResponse4
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .deleteWebhook({ webhookGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhooksResponse4
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookGid</code> | <code>string</code> | Globally unique identifier for the webhook. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.deleteWebhook(request)`

- **OnSuccess**: <code>[WebhooksResponse4](src/models/webhooks-response4.ts)</code>
- **OnError**: throws <code>[Webhooks.DeleteWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhooksResponse4, Webhooks.DeleteWebhookError&gt;</code>, with `result.value` of type <code>[WebhooksResponse4](src/models/webhooks-response4.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhook(request: Webhooks.GetWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhooksResponse1, Webhooks.GetWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for the given webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getWebhook({
    webhookGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type WebhooksResponse1
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .getWebhook({ webhookGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhooksResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookGid</code> | <code>string</code> | Globally unique identifier for the webhook. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getWebhook(request)`

- **OnSuccess**: <code>[WebhooksResponse1](src/models/webhooks-response1.ts)</code>
- **OnError**: throws <code>[Webhooks.GetWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhooksResponse1, Webhooks.GetWebhookError&gt;</code>, with `result.value` of type <code>[WebhooksResponse1](src/models/webhooks-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhooks(request: Webhooks.GetWebhooksRequest, options?: RequestOptions): ApiPromise&lt;WebhooksResponse, Webhooks.GetWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getWebhooks({
    workspace: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    resource: "51648",
  });
  // TODO: Handle 'response' of type WebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .getWebhooks({
    workspace: "1331",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    resource: "51648",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhooksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>string</code> | The workspace to query for webhooks in. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |
| <code>resource?</code> | <code>string</code> | Only return webhooks for the given resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getWebhooks(request)`

- **OnSuccess**: <code>[WebhooksResponse](src/models/webhooks-response.ts)</code>
- **OnError**: throws <code>[Webhooks.GetWebhooksError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhooksResponse, Webhooks.GetWebhooksError&gt;</code>, with `result.value` of type <code>[WebhooksResponse](src/models/webhooks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhook(request: Webhooks.UpdateWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhooksResponse1, Webhooks.UpdateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous `filters` array will be completely overwritten by the `filters` sent in the PUT request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.updateWebhook({
    webhookGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type WebhooksResponse1
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.UpdateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .updateWebhook({ webhookGid: "12345", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhooksResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookGid</code> | <code>string</code> | Globally unique identifier for the webhook. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[WebhooksRequest1](src/models/webhooks-request1.ts)</code> | The updated filters for the webhook. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.updateWebhook(request)`

- **OnSuccess**: <code>[WebhooksResponse1](src/models/webhooks-response1.ts)</code>
- **OnError**: throws <code>[Webhooks.UpdateWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.updateWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhooksResponse1, Webhooks.UpdateWebhookError&gt;</code>, with `result.value` of type <code>[WebhooksResponse1](src/models/webhooks-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WorkspaceMemberships

> Source: [WorkspaceMemberships](src/resources/workspace-memberships.ts)

<details>
<summary><code>getWorkspaceMembership(request: WorkspaceMemberships.GetWorkspaceMembershipRequest, options?: RequestOptions): ApiPromise&lt;WorkspaceMembershipsResponse, WorkspaceMemberships.GetWorkspaceMembershipError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete workspace record for a single workspace membership.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaceMemberships.getWorkspaceMembership({
    workspaceMembershipGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type WorkspaceMembershipsResponse
} catch (err) {
  // TODO: Handle 'err' of type WorkspaceMemberships.GetWorkspaceMembershipError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaceMemberships
  .getWorkspaceMembership({
    workspaceMembershipGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceMembershipsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceMembershipGid</code> | <code>string</code> | - |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaceMemberships.getWorkspaceMembership(request)`

- **OnSuccess**: <code>[WorkspaceMembershipsResponse](src/models/workspace-memberships-response.ts)</code>
- **OnError**: throws <code>[WorkspaceMemberships.GetWorkspaceMembershipError](src/resources/workspace-memberships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaceMemberships.getWorkspaceMembership(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceMembershipsResponse, WorkspaceMemberships.GetWorkspaceMembershipError&gt;</code>, with `result.value` of type <code>[WorkspaceMembershipsResponse](src/models/workspace-memberships-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkspaceMembershipsForUser(request: WorkspaceMemberships.GetWorkspaceMembershipsForUserRequest, options?: RequestOptions): ApiPromise&lt;UsersWorkspaceMembershipsResponse, WorkspaceMemberships.GetWorkspaceMembershipsForUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact workspace membership records for the user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaceMemberships.getWorkspaceMembershipsForUser({
    userGid: "me",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type UsersWorkspaceMembershipsResponse
} catch (err) {
  // TODO: Handle 'err' of type WorkspaceMemberships.GetWorkspaceMembershipsForUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaceMemberships
  .getWorkspaceMembershipsForUser({
    userGid: "me",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersWorkspaceMembershipsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userGid</code> | <code>string</code> | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaceMemberships.getWorkspaceMembershipsForUser(request)`

- **OnSuccess**: <code>[UsersWorkspaceMembershipsResponse](src/models/users-workspace-memberships-response.ts)</code>
- **OnError**: throws <code>[WorkspaceMemberships.GetWorkspaceMembershipsForUserError](src/resources/workspace-memberships.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaceMemberships.getWorkspaceMembershipsForUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersWorkspaceMembershipsResponse, WorkspaceMemberships.GetWorkspaceMembershipsForUserError&gt;</code>, with `result.value` of type <code>[UsersWorkspaceMembershipsResponse](src/models/users-workspace-memberships-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkspaceMembershipsForWorkspace(request: WorkspaceMemberships.GetWorkspaceMembershipsForWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesWorkspaceMembershipsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact workspace membership records for the workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaceMemberships.getWorkspaceMembershipsForWorkspace({
    workspaceGid: "12345",
    user: "me",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type WorkspacesWorkspaceMembershipsResponse
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
const result = await client.workspaceMemberships
  .getWorkspaceMembershipsForWorkspace({
    workspaceGid: "12345",
    user: "me",
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesWorkspaceMembershipsResponse
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
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>user?</code> | <code>string</code> | A string identifying a user. This can either be the string "me", an email, or the gid of a user. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaceMemberships.getWorkspaceMembershipsForWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesWorkspaceMembershipsResponse](src/models/workspaces-workspace-memberships-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.workspaceMemberships.getWorkspaceMembershipsForWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesWorkspaceMembershipsResponse, ApiError&gt;</code>, with `result.value` of type <code>[WorkspacesWorkspaceMembershipsResponse](src/models/workspaces-workspace-memberships-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/resources/workspaces.ts)

<details>
<summary><code>addUserForWorkspace(request: Workspaces.AddUserForWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesAddUserResponse, Workspaces.AddUserForWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a user to a workspace or organization.
The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.addUserForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type WorkspacesAddUserResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.AddUserForWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .addUserForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesAddUserResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[WorkspacesAddUserRequest](src/models/workspaces-add-user-request.ts)</code> | The user to add to the workspace. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.addUserForWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesAddUserResponse](src/models/workspaces-add-user-response.ts)</code>
- **OnError**: throws <code>[Workspaces.AddUserForWorkspaceError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.addUserForWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesAddUserResponse, Workspaces.AddUserForWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesAddUserResponse](src/models/workspaces-add-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkspace(request: Workspaces.GetWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesResponse1, Workspaces.GetWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full workspace record for a single workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.getWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
  });
  // TODO: Handle 'response' of type WorkspacesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.GetWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .getWorkspace({ workspaceGid: "12345", optPretty: true, optFields: ["followers", "assignee"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.getWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesResponse1](src/models/workspaces-response1.ts)</code>
- **OnError**: throws <code>[Workspaces.GetWorkspaceError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.getWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesResponse1, Workspaces.GetWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesResponse1](src/models/workspaces-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkspaces(request?: Workspaces.GetWorkspacesRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesResponse, Workspaces.GetWorkspacesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all workspaces visible to the authorized user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.getWorkspaces({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  });
  // TODO: Handle 'response' of type WorkspacesResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.GetWorkspacesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .getWorkspaces({
    optPretty: true,
    optFields: ["followers", "assignee"],
    limit: 50,
    offset: "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>limit?</code> | <code>number</code> | Results per page.<br>The number of objects to return per page. The value must be between 1 and 100. |
| <code>offset?</code> | <code>string</code> | Offset token.<br>An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br>'Note: You can only pass in an offset that was returned to you via a previously paginated request.' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.getWorkspaces(request)`

- **OnSuccess**: <code>[WorkspacesResponse](src/models/workspaces-response.ts)</code>
- **OnError**: throws <code>[Workspaces.GetWorkspacesError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.getWorkspaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesResponse, Workspaces.GetWorkspacesError&gt;</code>, with `result.value` of type <code>[WorkspacesResponse](src/models/workspaces-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeUserForWorkspace(request: Workspaces.RemoveUserForWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesRemoveUserResponse, Workspaces.RemoveUserForWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a user from a workspace or organization.
The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address.
Returns an empty data record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.removeUserForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type WorkspacesRemoveUserResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.RemoveUserForWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .removeUserForWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesRemoveUserResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[WorkspacesRemoveUserRequest](src/models/workspaces-remove-user-request.ts)</code> | The user to remove from the workspace. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.removeUserForWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesRemoveUserResponse](src/models/workspaces-remove-user-response.ts)</code>
- **OnError**: throws <code>[Workspaces.RemoveUserForWorkspaceError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.removeUserForWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesRemoveUserResponse, Workspaces.RemoveUserForWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesRemoveUserResponse](src/models/workspaces-remove-user-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWorkspace(request: Workspaces.UpdateWorkspaceRequest, options?: RequestOptions): ApiPromise&lt;WorkspacesResponse1, Workspaces.UpdateWorkspaceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.
Currently the only field that can be modified for a workspace is its name.
Returns the complete, updated workspace record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.updateWorkspace({
    workspaceGid: "12345",
    optPretty: true,
    optFields: ["followers", "assignee"],
    body: {},
  });
  // TODO: Handle 'response' of type WorkspacesResponse1
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.UpdateWorkspaceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .updateWorkspace({ workspaceGid: "12345", optPretty: true, optFields: ["followers", "assignee"], body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspaceGid</code> | <code>string</code> | Globally unique identifier for the workspace or organization. |
| <code>optPretty?</code> | <code>boolean</code> | Provides “pretty” output.<br>Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. |
| <code>optFields?</code> | <code>string[]</code> | Defines fields to return.<br>Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br>The id of included objects will always be returned, regardless of the field options. |
| <code>body</code> | <code>[WorkspacesRequest](src/models/workspaces-request.ts)</code> | The workspace object with all updated properties. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.updateWorkspace(request)`

- **OnSuccess**: <code>[WorkspacesResponse1](src/models/workspaces-response1.ts)</code>
- **OnError**: throws <code>[Workspaces.UpdateWorkspaceError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.updateWorkspace(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacesResponse1, Workspaces.UpdateWorkspaceError&gt;</code>, with `result.value` of type <code>[WorkspacesResponse1](src/models/workspaces-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AsanaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

