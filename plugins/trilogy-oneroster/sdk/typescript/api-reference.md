# Reference

> Source: [OneRosterApiClient](src/client.ts)

## AcademicSessionsManagement

> Source: [AcademicSessionsManagement](src/resources/academic-sessions-management.ts)

<details>
<summary><code>deleteAcademicSession(request: AcademicSessionsManagement.DeleteAcademicSessionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AcademicSessionsManagement.DeleteAcademicSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Academic Session on the service provider. This operation changes the status of the Academic Session to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.academicSessionsManagement.deleteAcademicSession({ sourcedId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type AcademicSessionsManagement.DeleteAcademicSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.academicSessionsManagement.deleteAcademicSession({
  sourcedId: "some example string",
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the academic session to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.academicSessionsManagement.deleteAcademicSession(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AcademicSessionsManagement.DeleteAcademicSessionError](src/resources/academic-sessions-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.academicSessionsManagement.deleteAcademicSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AcademicSessionsManagement.DeleteAcademicSessionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAcademicSession(request: AcademicSessionsManagement.GetAcademicSessionRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2AcademicSessionsResponse2, AcademicSessionsManagement.GetAcademicSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Academic Session on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Academic session not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.academicSessionsManagement.getAcademicSession({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2AcademicSessionsResponse2
} catch (err) {
  // TODO: Handle 'err' of type AcademicSessionsManagement.GetAcademicSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.academicSessionsManagement.getAcademicSession({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2AcademicSessionsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the academic session |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.academicSessionsManagement.getAcademicSession(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2AcademicSessionsResponse2](src/models/ims-oneroster-rostering-v1-p2-academic-sessions-response2.ts)</code>
- **OnError**: throws <code>[AcademicSessionsManagement.GetAcademicSessionError](src/resources/academic-sessions-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.academicSessionsManagement.getAcademicSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2AcademicSessionsResponse2, AcademicSessionsManagement.GetAcademicSessionError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2AcademicSessionsResponse2](src/models/ims-oneroster-rostering-v1-p2-academic-sessions-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllAcademicSessions(request: AcademicSessionsManagement.GetAllAcademicSessionsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2AcademicSessionsResponse, AcademicSessionsManagement.GetAllAcademicSessionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Academic Sessions on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.academicSessionsManagement.getAllAcademicSessions({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2AcademicSessionsResponse
} catch (err) {
  // TODO: Handle 'err' of type AcademicSessionsManagement.GetAllAcademicSessionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.academicSessionsManagement.getAllAcademicSessions({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2AcademicSessionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.academicSessionsManagement.getAllAcademicSessions(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2AcademicSessionsResponse](src/models/ims-oneroster-rostering-v1-p2-academic-sessions-response.ts)</code>
- **OnError**: throws <code>[AcademicSessionsManagement.GetAllAcademicSessionsError](src/resources/academic-sessions-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.academicSessionsManagement.getAllAcademicSessions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2AcademicSessionsResponse, AcademicSessionsManagement.GetAllAcademicSessionsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2AcademicSessionsResponse](src/models/ims-oneroster-rostering-v1-p2-academic-sessions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postAcademicSession(request: AcademicSessionsManagement.PostAcademicSessionRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2AcademicSessionsResponse1, AcademicSessionsManagement.PostAcademicSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new academic session. The responding system must return the set of sourcedIds that have been allocated to the newly created academicSession record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.academicSessionsManagement.postAcademicSession();
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2AcademicSessionsResponse1
} catch (err) {
  // TODO: Handle 'err' of type AcademicSessionsManagement.PostAcademicSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.academicSessionsManagement.postAcademicSession().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2AcademicSessionsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2AcademicSessionsRequest](src/models/ims-oneroster-rostering-v1-p2-academic-sessions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.academicSessionsManagement.postAcademicSession(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2AcademicSessionsResponse1](src/models/ims-oneroster-rostering-v1-p2-academic-sessions-response1.ts)</code>
- **OnError**: throws <code>[AcademicSessionsManagement.PostAcademicSessionError](src/resources/academic-sessions-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.academicSessionsManagement.postAcademicSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2AcademicSessionsResponse1, AcademicSessionsManagement.PostAcademicSessionError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2AcademicSessionsResponse1](src/models/ims-oneroster-rostering-v1-p2-academic-sessions-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putAcademicSession(request: AcademicSessionsManagement.PutAcademicSessionRequest, options?: RequestOptions): ApiPromise&lt;AcademicSession, AcademicSessionsManagement.PutAcademicSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Academic Session. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.academicSessionsManagement.putAcademicSession({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type AcademicSession
} catch (err) {
  // TODO: Handle 'err' of type AcademicSessionsManagement.PutAcademicSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.academicSessionsManagement.putAcademicSession({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AcademicSession
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the academic session to update |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2AcademicSessionsRequest](src/models/ims-oneroster-rostering-v1-p2-academic-sessions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.academicSessionsManagement.putAcademicSession(request)`

- **OnSuccess**: <code>[AcademicSession](src/models/academic-session.ts)</code>
- **OnError**: throws <code>[AcademicSessionsManagement.PutAcademicSessionError](src/resources/academic-sessions-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.academicSessionsManagement.putAcademicSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AcademicSession, AcademicSessionsManagement.PutAcademicSessionError&gt;</code>, with `result.value` of type <code>[AcademicSession](src/models/academic-session.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AssessmentLineItemsManagement

> Source: [AssessmentLineItemsManagement](src/resources/assessment-line-items-management.ts)

<details>
<summary><code>createAssessmentLineItem(request: AssessmentLineItemsManagement.CreateAssessmentLineItemRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2AssessmentLineItemsResponse1, AssessmentLineItemsManagement.CreateAssessmentLineItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create an Assessment Line Item. The responding system must return the set of sourcedIds that have been allocated to the newly created assessmentLineItem record. A 'title' MUST be provided when creating an assessmentLineItem.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assessmentLineItemsManagement.createAssessmentLineItem({
    body: { assessmentLineItem: { status: Status.Active, title: "some example string" } },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse1
} catch (err) {
  // TODO: Handle 'err' of type AssessmentLineItemsManagement.CreateAssessmentLineItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assessmentLineItemsManagement.createAssessmentLineItem({
  body: { assessmentLineItem: { status: Status.Active, title: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2AssessmentLineItemsRequest](src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assessmentLineItemsManagement.createAssessmentLineItem(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2AssessmentLineItemsResponse1](src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response1.ts)</code>
- **OnError**: throws <code>[AssessmentLineItemsManagement.CreateAssessmentLineItemError](src/resources/assessment-line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assessmentLineItemsManagement.createAssessmentLineItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2AssessmentLineItemsResponse1, AssessmentLineItemsManagement.CreateAssessmentLineItemError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2AssessmentLineItemsResponse1](src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAssessmentLineItem(request: AssessmentLineItemsManagement.DeleteAssessmentLineItemRequest, options?: RequestOptions): ApiPromise&lt;undefined, AssessmentLineItemsManagement.DeleteAssessmentLineItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Assessment Line Item on the service provider. This operation changes the status of the Assessment Line Item to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.assessmentLineItemsManagement.deleteAssessmentLineItem({ sourcedId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type AssessmentLineItemsManagement.DeleteAssessmentLineItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assessmentLineItemsManagement.deleteAssessmentLineItem({
  sourcedId: "some example string",
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the assessment line item to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assessmentLineItemsManagement.deleteAssessmentLineItem(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AssessmentLineItemsManagement.DeleteAssessmentLineItemError](src/resources/assessment-line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assessmentLineItemsManagement.deleteAssessmentLineItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AssessmentLineItemsManagement.DeleteAssessmentLineItemError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllAssessmentLineItems(request: AssessmentLineItemsManagement.GetAllAssessmentLineItemsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2AssessmentLineItemsResponse, AssessmentLineItemsManagement.GetAllAssessmentLineItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all of the Assessment Line Items on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assessmentLineItemsManagement.getAllAssessmentLineItems({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssessmentLineItemsManagement.GetAllAssessmentLineItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assessmentLineItemsManagement.getAllAssessmentLineItems({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assessmentLineItemsManagement.getAllAssessmentLineItems(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2AssessmentLineItemsResponse](src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response.ts)</code>
- **OnError**: throws <code>[AssessmentLineItemsManagement.GetAllAssessmentLineItemsError](src/resources/assessment-line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assessmentLineItemsManagement.getAllAssessmentLineItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2AssessmentLineItemsResponse, AssessmentLineItemsManagement.GetAllAssessmentLineItemsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2AssessmentLineItemsResponse](src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAssessmentLineItem(request: AssessmentLineItemsManagement.GetAssessmentLineItemRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2, AssessmentLineItemsManagement.GetAssessmentLineItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Assessment Line Item on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Assessment line item not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assessmentLineItemsManagement.getAssessmentLineItem({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2
} catch (err) {
  // TODO: Handle 'err' of type AssessmentLineItemsManagement.GetAssessmentLineItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assessmentLineItemsManagement.getAssessmentLineItem({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the assessment line item |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assessmentLineItemsManagement.getAssessmentLineItem(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2](src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response2.ts)</code>
- **OnError**: throws <code>[AssessmentLineItemsManagement.GetAssessmentLineItemError](src/resources/assessment-line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assessmentLineItemsManagement.getAssessmentLineItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2, AssessmentLineItemsManagement.GetAssessmentLineItemError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2](src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAssessmentLineItem(request: AssessmentLineItemsManagement.UpdateAssessmentLineItemRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2, AssessmentLineItemsManagement.UpdateAssessmentLineItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Assessment Line Item. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assessmentLineItemsManagement.updateAssessmentLineItem({
    sourcedId: "some example string",
    body: { assessmentLineItem: { status: Status.Active, title: "some example string" } },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2
} catch (err) {
  // TODO: Handle 'err' of type AssessmentLineItemsManagement.UpdateAssessmentLineItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assessmentLineItemsManagement.updateAssessmentLineItem({
  sourcedId: "some example string",
  body: { assessmentLineItem: { status: Status.Active, title: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the assessment line item to update |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2AssessmentLineItemsRequest](src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assessmentLineItemsManagement.updateAssessmentLineItem(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2](src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response2.ts)</code>
- **OnError**: throws <code>[AssessmentLineItemsManagement.UpdateAssessmentLineItemError](src/resources/assessment-line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assessmentLineItemsManagement.updateAssessmentLineItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2, AssessmentLineItemsManagement.UpdateAssessmentLineItemError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2](src/models/ims-oneroster-gradebook-v1-p2-assessment-line-items-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AssessmentResultsManagement

> Source: [AssessmentResultsManagement](src/resources/assessment-results-management.ts)

<details>
<summary><code>createAssessmentResult(request: AssessmentResultsManagement.CreateAssessmentResultRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2AssessmentResultsResponse1, AssessmentResultsManagement.CreateAssessmentResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create an Assessment Result. The responding system must return the set of sourcedIds that have been allocated to the newly created assessmentResult record. An Assessment Line Item sourcedId and Student sourcedId MUST be provided when creating an assessmentResult.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assessmentResultsManagement.createAssessmentResult({
    body: {
      assessmentResult: {
        status: Status.Active,
        assessmentLineItem: { sourcedId: "some example string" },
        student: { sourcedId: "some example string" },
        scoreDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        scoreStatus: ScoreStatus.Exempt,
      },
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2AssessmentResultsResponse1
} catch (err) {
  // TODO: Handle 'err' of type AssessmentResultsManagement.CreateAssessmentResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assessmentResultsManagement.createAssessmentResult({
  body: {
    assessmentResult: {
      status: Status.Active,
      assessmentLineItem: { sourcedId: "some example string" },
      student: { sourcedId: "some example string" },
      scoreDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      scoreStatus: ScoreStatus.Exempt,
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2AssessmentResultsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2AssessmentResultsRequest](src/models/ims-oneroster-gradebook-v1-p2-assessment-results-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assessmentResultsManagement.createAssessmentResult(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2AssessmentResultsResponse1](src/models/ims-oneroster-gradebook-v1-p2-assessment-results-response1.ts)</code>
- **OnError**: throws <code>[AssessmentResultsManagement.CreateAssessmentResultError](src/resources/assessment-results-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assessmentResultsManagement.createAssessmentResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2AssessmentResultsResponse1, AssessmentResultsManagement.CreateAssessmentResultError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2AssessmentResultsResponse1](src/models/ims-oneroster-gradebook-v1-p2-assessment-results-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAssessmentResult(request: AssessmentResultsManagement.DeleteAssessmentResultRequest, options?: RequestOptions): ApiPromise&lt;undefined, AssessmentResultsManagement.DeleteAssessmentResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Assessment Result on the service provider. This operation changes the status of the Assessment Result to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.assessmentResultsManagement.deleteAssessmentResult({ sourcedId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type AssessmentResultsManagement.DeleteAssessmentResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assessmentResultsManagement.deleteAssessmentResult({
  sourcedId: "some example string",
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the assessment result to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assessmentResultsManagement.deleteAssessmentResult(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AssessmentResultsManagement.DeleteAssessmentResultError](src/resources/assessment-results-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assessmentResultsManagement.deleteAssessmentResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AssessmentResultsManagement.DeleteAssessmentResultError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllAssessmentResults(request: AssessmentResultsManagement.GetAllAssessmentResultsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2AssessmentResultsResponse, AssessmentResultsManagement.GetAllAssessmentResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all of the Assessment Results on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assessmentResultsManagement.getAllAssessmentResults({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2AssessmentResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssessmentResultsManagement.GetAllAssessmentResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assessmentResultsManagement.getAllAssessmentResults({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2AssessmentResultsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assessmentResultsManagement.getAllAssessmentResults(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2AssessmentResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-assessment-results-response.ts)</code>
- **OnError**: throws <code>[AssessmentResultsManagement.GetAllAssessmentResultsError](src/resources/assessment-results-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assessmentResultsManagement.getAllAssessmentResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2AssessmentResultsResponse, AssessmentResultsManagement.GetAllAssessmentResultsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2AssessmentResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-assessment-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAssessmentResult(request: AssessmentResultsManagement.GetAssessmentResultRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2AssessmentResultsResponse2, AssessmentResultsManagement.GetAssessmentResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Assessment Result on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Assessment result not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assessmentResultsManagement.getAssessmentResult({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2AssessmentResultsResponse2
} catch (err) {
  // TODO: Handle 'err' of type AssessmentResultsManagement.GetAssessmentResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assessmentResultsManagement.getAssessmentResult({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2AssessmentResultsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the assessment result |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assessmentResultsManagement.getAssessmentResult(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2AssessmentResultsResponse2](src/models/ims-oneroster-gradebook-v1-p2-assessment-results-response2.ts)</code>
- **OnError**: throws <code>[AssessmentResultsManagement.GetAssessmentResultError](src/resources/assessment-results-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assessmentResultsManagement.getAssessmentResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2AssessmentResultsResponse2, AssessmentResultsManagement.GetAssessmentResultError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2AssessmentResultsResponse2](src/models/ims-oneroster-gradebook-v1-p2-assessment-results-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAssessmentResult(request: AssessmentResultsManagement.UpdateAssessmentResultRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2AssessmentResultsResponse2, AssessmentResultsManagement.UpdateAssessmentResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Assessment Result. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assessmentResultsManagement.updateAssessmentResult({
    sourcedId: "some example string",
    body: {
      assessmentResult: {
        status: Status.Active,
        assessmentLineItem: { sourcedId: "some example string" },
        student: { sourcedId: "some example string" },
        scoreDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        scoreStatus: ScoreStatus.Exempt,
      },
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2AssessmentResultsResponse2
} catch (err) {
  // TODO: Handle 'err' of type AssessmentResultsManagement.UpdateAssessmentResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assessmentResultsManagement.updateAssessmentResult({
  sourcedId: "some example string",
  body: {
    assessmentResult: {
      status: Status.Active,
      assessmentLineItem: { sourcedId: "some example string" },
      student: { sourcedId: "some example string" },
      scoreDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      scoreStatus: ScoreStatus.Exempt,
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2AssessmentResultsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the assessment result to update |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2AssessmentResultsRequest](src/models/ims-oneroster-gradebook-v1-p2-assessment-results-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assessmentResultsManagement.updateAssessmentResult(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2AssessmentResultsResponse2](src/models/ims-oneroster-gradebook-v1-p2-assessment-results-response2.ts)</code>
- **OnError**: throws <code>[AssessmentResultsManagement.UpdateAssessmentResultError](src/resources/assessment-results-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assessmentResultsManagement.updateAssessmentResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2AssessmentResultsResponse2, AssessmentResultsManagement.UpdateAssessmentResultError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2AssessmentResultsResponse2](src/models/ims-oneroster-gradebook-v1-p2-assessment-results-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CategoriesManagement

> Source: [CategoriesManagement](src/resources/categories-management.ts)

<details>
<summary><code>createCategory(request: CategoriesManagement.CreateCategoryRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2CategoriesResponse1, CategoriesManagement.CreateCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new Category. The responding system must return the set of sourcedIds that have been allocated to the newly created category record. A 'title' MUST be provided when creating a category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesManagement.createCategory({
    body: { category: { status: Status.Active, title: "some example string" } },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2CategoriesResponse1
} catch (err) {
  // TODO: Handle 'err' of type CategoriesManagement.CreateCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categoriesManagement.createCategory({
  body: { category: { status: Status.Active, title: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2CategoriesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2CategoriesRequest](src/models/ims-oneroster-gradebook-v1-p2-categories-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categoriesManagement.createCategory(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2CategoriesResponse1](src/models/ims-oneroster-gradebook-v1-p2-categories-response1.ts)</code>
- **OnError**: throws <code>[CategoriesManagement.CreateCategoryError](src/resources/categories-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categoriesManagement.createCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2CategoriesResponse1, CategoriesManagement.CreateCategoryError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2CategoriesResponse1](src/models/ims-oneroster-gradebook-v1-p2-categories-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCategory(request: CategoriesManagement.DeleteCategoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, CategoriesManagement.DeleteCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Category on the service provider. This operation changes the status of the Category to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.categoriesManagement.deleteCategory({ sourcedId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type CategoriesManagement.DeleteCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categoriesManagement.deleteCategory({
  sourcedId: "some example string",
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the category to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categoriesManagement.deleteCategory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CategoriesManagement.DeleteCategoryError](src/resources/categories-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categoriesManagement.deleteCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CategoriesManagement.DeleteCategoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllCategories(request: CategoriesManagement.GetAllCategoriesRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2CategoriesResponse, CategoriesManagement.GetAllCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all of the Line Item Categories on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesManagement.getAllCategories({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2CategoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type CategoriesManagement.GetAllCategoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categoriesManagement.getAllCategories({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2CategoriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categoriesManagement.getAllCategories(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2CategoriesResponse](src/models/ims-oneroster-gradebook-v1-p2-categories-response.ts)</code>
- **OnError**: throws <code>[CategoriesManagement.GetAllCategoriesError](src/resources/categories-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categoriesManagement.getAllCategories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2CategoriesResponse, CategoriesManagement.GetAllCategoriesError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2CategoriesResponse](src/models/ims-oneroster-gradebook-v1-p2-categories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategory(request: CategoriesManagement.GetCategoryRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2CategoriesResponse2, CategoriesManagement.GetCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific category on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Category not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesManagement.getCategory({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2CategoriesResponse2
} catch (err) {
  // TODO: Handle 'err' of type CategoriesManagement.GetCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categoriesManagement.getCategory({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2CategoriesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the category |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categoriesManagement.getCategory(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2CategoriesResponse2](src/models/ims-oneroster-gradebook-v1-p2-categories-response2.ts)</code>
- **OnError**: throws <code>[CategoriesManagement.GetCategoryError](src/resources/categories-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categoriesManagement.getCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2CategoriesResponse2, CategoriesManagement.GetCategoryError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2CategoriesResponse2](src/models/ims-oneroster-gradebook-v1-p2-categories-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCategory(request: CategoriesManagement.UpdateCategoryRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2CategoriesResponse2, CategoriesManagement.UpdateCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Category. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesManagement.updateCategory({
    sourcedId: "some example string",
    body: { category: { status: Status.Active, title: "some example string" } },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2CategoriesResponse2
} catch (err) {
  // TODO: Handle 'err' of type CategoriesManagement.UpdateCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categoriesManagement.updateCategory({
  sourcedId: "some example string",
  body: { category: { status: Status.Active, title: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2CategoriesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the category to update |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2CategoriesRequest](src/models/ims-oneroster-gradebook-v1-p2-categories-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categoriesManagement.updateCategory(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2CategoriesResponse2](src/models/ims-oneroster-gradebook-v1-p2-categories-response2.ts)</code>
- **OnError**: throws <code>[CategoriesManagement.UpdateCategoryError](src/resources/categories-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categoriesManagement.updateCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2CategoriesResponse2, CategoriesManagement.UpdateCategoryError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2CategoriesResponse2](src/models/ims-oneroster-gradebook-v1-p2-categories-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ClassesManagement

> Source: [ClassesManagement](src/resources/classes-management.ts)

<details>
<summary><code>addStudentToClass(request: ClassesManagement.AddStudentToClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2ClassesStudentsResponse1, ClassesManagement.AddStudentToClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrolls a student in a specific Class. The responding system must return the set of sourcedIds that have been allocated to the newly created enrollment record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.addStudentToClass({
    classSourcedId: "some example string",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2ClassesStudentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.AddStudentToClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.addStudentToClass({
  classSourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2ClassesStudentsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | Class sourcedId |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2ClassesStudentsRequest](src/models/ims-oneroster-rostering-v1-p2-classes-students-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.addStudentToClass(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2ClassesStudentsResponse1](src/models/ims-oneroster-rostering-v1-p2-classes-students-response1.ts)</code>
- **OnError**: throws <code>[ClassesManagement.AddStudentToClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.addStudentToClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2ClassesStudentsResponse1, ClassesManagement.AddStudentToClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2ClassesStudentsResponse1](src/models/ims-oneroster-rostering-v1-p2-classes-students-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addTeacherToClass(request: ClassesManagement.AddTeacherToClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2ClassesTeachersResponse1, ClassesManagement.AddTeacherToClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrolls a teacher to a specific Class. The responding system must return the set of sourcedIds that have been allocated to the newly created enrollment record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.addTeacherToClass({
    classSourcedId: "some example string",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2ClassesTeachersResponse1
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.AddTeacherToClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.addTeacherToClass({
  classSourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2ClassesTeachersResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | Class sourcedId |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2ClassesTeachersRequest](src/models/ims-oneroster-rostering-v1-p2-classes-teachers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.addTeacherToClass(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2ClassesTeachersResponse1](src/models/ims-oneroster-rostering-v1-p2-classes-teachers-response1.ts)</code>
- **OnError**: throws <code>[ClassesManagement.AddTeacherToClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.addTeacherToClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2ClassesTeachersResponse1, ClassesManagement.AddTeacherToClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2ClassesTeachersResponse1](src/models/ims-oneroster-rostering-v1-p2-classes-teachers-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createClass(request: ClassesManagement.CreateClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2ClassesResponse1, ClassesManagement.CreateClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new Class. The responding system must return the set of sourcedIds that have been allocated to the newly created class record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.createClass();
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2ClassesResponse1
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.CreateClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.createClass().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2ClassesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2ClassesRequest](src/models/ims-oneroster-rostering-v1-p2-classes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.createClass(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2ClassesResponse1](src/models/ims-oneroster-rostering-v1-p2-classes-response1.ts)</code>
- **OnError**: throws <code>[ClassesManagement.CreateClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.createClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2ClassesResponse1, ClassesManagement.CreateClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2ClassesResponse1](src/models/ims-oneroster-rostering-v1-p2-classes-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteClass(request: ClassesManagement.DeleteClassRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ClassesManagement.DeleteClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Class on the service provider. This operation changes the status of the Class to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.deleteClass({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.DeleteClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.deleteClass({ sourcedId: "some example string" }).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | Class sourcedId |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.deleteClass(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ClassesManagement.DeleteClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.deleteClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ClassesManagement.DeleteClassError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllClasses(request: ClassesManagement.GetAllClassesRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2ClassesResponse, ClassesManagement.GetAllClassesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Classes on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getAllClasses({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2ClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetAllClassesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getAllClasses({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2ClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getAllClasses(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2ClassesResponse](src/models/ims-oneroster-rostering-v1-p2-classes-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetAllClassesError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getAllClasses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2ClassesResponse, ClassesManagement.GetAllClassesError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2ClassesResponse](src/models/ims-oneroster-rostering-v1-p2-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategoriesForClass(request: ClassesManagement.GetCategoriesForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ClassesCategoriesResponse, ClassesManagement.GetCategoriesForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of categories on the service provider for a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getCategoriesForClass({
    sourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ClassesCategoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetCategoriesForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getCategoriesForClass({
  sourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ClassesCategoriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the class |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getCategoriesForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ClassesCategoriesResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-categories-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetCategoriesForClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getCategoriesForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ClassesCategoriesResponse, ClassesManagement.GetCategoriesForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ClassesCategoriesResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-categories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClass(request: ClassesManagement.GetClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2ClassesResponse2, ClassesManagement.GetClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Class on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getClass({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2ClassesResponse2
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getClass({ sourcedId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2ClassesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | Class sourcedId |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getClass(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2ClassesResponse2](src/models/ims-oneroster-rostering-v1-p2-classes-response2.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2ClassesResponse2, ClassesManagement.GetClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2ClassesResponse2](src/models/ims-oneroster-rostering-v1-p2-classes-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassesForSchool(request: ClassesManagement.GetClassesForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsClassesResponse, ClassesManagement.GetClassesForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Classes for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getClassesForSchool({
    schoolSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetClassesForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getClassesForSchool({
  schoolSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getClassesForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsClassesResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetClassesForSchoolError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getClassesForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsClassesResponse, ClassesManagement.GetClassesForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsClassesResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassesForStudent(request: ClassesManagement.GetClassesForStudentRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2StudentsClassesResponse, ClassesManagement.GetClassesForStudentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the set of Classes related to a specific Student. If the specified student cannot be identified within the service provider, the api will return a 404 error code and message 'Student not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getClassesForStudent({
    studentSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2StudentsClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetClassesForStudentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getClassesForStudent({
  studentSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2StudentsClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>studentSourcedId</code> | <code>string</code> | The sourcedId of the student |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getClassesForStudent(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2StudentsClassesResponse](src/models/ims-oneroster-rostering-v1-p2-students-classes-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetClassesForStudentError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getClassesForStudent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2StudentsClassesResponse, ClassesManagement.GetClassesForStudentError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2StudentsClassesResponse](src/models/ims-oneroster-rostering-v1-p2-students-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassesForTeacher(request: ClassesManagement.GetClassesForTeacherRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2TeachersClassesResponse, ClassesManagement.GetClassesForTeacherError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the set of Classes a Teacher is enrolled in. If the specified teacher cannot be identified within the service provider, the api will return a 404 error code and message 'Teacher not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getClassesForTeacher({
    teacherSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2TeachersClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetClassesForTeacherError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getClassesForTeacher({
  teacherSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2TeachersClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teacherSourcedId</code> | <code>string</code> | The sourcedId of the teacher |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getClassesForTeacher(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2TeachersClassesResponse](src/models/ims-oneroster-rostering-v1-p2-teachers-classes-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetClassesForTeacherError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getClassesForTeacher(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2TeachersClassesResponse, ClassesManagement.GetClassesForTeacherError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2TeachersClassesResponse](src/models/ims-oneroster-rostering-v1-p2-teachers-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassesForTerm(request: ClassesManagement.GetClassesForTermRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2TermsClassesResponse, ClassesManagement.GetClassesForTermError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the set of Classes related to a specific Term. If the specified term cannot be identified within the service provider, the api will return a 404 error code and message 'Term not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getClassesForTerm({
    termSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2TermsClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetClassesForTermError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getClassesForTerm({
  termSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2TermsClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>termSourcedId</code> | <code>string</code> | The sourcedId of the term |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getClassesForTerm(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2TermsClassesResponse](src/models/ims-oneroster-rostering-v1-p2-terms-classes-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetClassesForTermError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getClassesForTerm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2TermsClassesResponse, ClassesManagement.GetClassesForTermError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2TermsClassesResponse](src/models/ims-oneroster-rostering-v1-p2-terms-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassesForUser(request: ClassesManagement.GetClassesForUserRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2UsersClassesResponse, ClassesManagement.GetClassesForUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the set of Classes a User is enrolled in.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getClassesForUser({
    userSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2UsersClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetClassesForUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getClassesForUser({
  userSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2UsersClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userSourcedId</code> | <code>string</code> | The sourcedId of the user |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getClassesForUser(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2UsersClassesResponse](src/models/ims-oneroster-rostering-v1-p2-users-classes-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetClassesForUserError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getClassesForUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2UsersClassesResponse, ClassesManagement.GetClassesForUserError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2UsersClassesResponse](src/models/ims-oneroster-rostering-v1-p2-users-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLineItemsForClass(request: ClassesManagement.GetLineItemsForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ClassesLineItemsResponse1, ClassesManagement.GetLineItemsForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of lineItems on the service provider for a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getLineItemsForClass({
    sourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ClassesLineItemsResponse1
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetLineItemsForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getLineItemsForClass({
  sourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ClassesLineItemsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the class |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getLineItemsForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ClassesLineItemsResponse1](src/models/ims-oneroster-gradebook-v1-p2-classes-line-items-response1.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetLineItemsForClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getLineItemsForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ClassesLineItemsResponse1, ClassesManagement.GetLineItemsForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ClassesLineItemsResponse1](src/models/ims-oneroster-gradebook-v1-p2-classes-line-items-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResultsForClass(request: ClassesManagement.GetResultsForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ClassesResultsResponse, ClassesManagement.GetResultsForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of results on the service provider for a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getResultsForClass({
    sourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ClassesResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetResultsForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getResultsForClass({
  sourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ClassesResultsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the class |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getResultsForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ClassesResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-results-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetResultsForClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getResultsForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ClassesResultsResponse, ClassesManagement.GetResultsForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ClassesResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResultsForLineItemForClass(request: ClassesManagement.GetResultsForLineItemForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse, ClassesManagement.GetResultsForLineItemForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of results on the service provider for a specific lineItem and for a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class or line item not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getResultsForLineItemForClass({
    classSourcedId: "some example string",
    lineItemSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetResultsForLineItemForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getResultsForLineItemForClass({
  classSourcedId: "some example string",
  lineItemSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | The sourcedId of the class |
| <code>lineItemSourcedId</code> | <code>string</code> | The sourcedId of the line item |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getResultsForLineItemForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-line-items-results-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetResultsForLineItemForClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getResultsForLineItemForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse, ClassesManagement.GetResultsForLineItemForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-line-items-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResultsForStudentForClass(request: ClassesManagement.GetResultsForStudentForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ClassesStudentsResultsResponse, ClassesManagement.GetResultsForStudentForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of results on the service provider for a specific student and for a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class or student not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getResultsForStudentForClass({
    classSourcedId: "some example string",
    studentSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ClassesStudentsResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetResultsForStudentForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getResultsForStudentForClass({
  classSourcedId: "some example string",
  studentSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ClassesStudentsResultsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | The sourcedId of the class |
| <code>studentSourcedId</code> | <code>string</code> | The sourcedId of the student |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getResultsForStudentForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ClassesStudentsResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-students-results-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetResultsForStudentForClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getResultsForStudentForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ClassesStudentsResultsResponse, ClassesManagement.GetResultsForStudentForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ClassesStudentsResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-students-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScoreScalesForClass(request: ClassesManagement.GetScoreScalesForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ClassesScoreScalesResponse, ClassesManagement.GetScoreScalesForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of scoreScales on the service provider for a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getScoreScalesForClass({
    sourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ClassesScoreScalesResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetScoreScalesForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getScoreScalesForClass({
  sourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ClassesScoreScalesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the class |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getScoreScalesForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ClassesScoreScalesResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-score-scales-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetScoreScalesForClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getScoreScalesForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ClassesScoreScalesResponse, ClassesManagement.GetScoreScalesForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ClassesScoreScalesResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-score-scales-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStudentsForClass(request: ClassesManagement.GetStudentsForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2ClassesStudentsResponse, ClassesManagement.GetStudentsForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all students enrolled in a specific Class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getStudentsForClass({
    classSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2ClassesStudentsResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetStudentsForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getStudentsForClass({
  classSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2ClassesStudentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | Class sourcedId |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getStudentsForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2ClassesStudentsResponse](src/models/ims-oneroster-rostering-v1-p2-classes-students-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetStudentsForClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getStudentsForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2ClassesStudentsResponse, ClassesManagement.GetStudentsForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2ClassesStudentsResponse](src/models/ims-oneroster-rostering-v1-p2-classes-students-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeachersForClass(request: ClassesManagement.GetTeachersForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2ClassesTeachersResponse, ClassesManagement.GetTeachersForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all teachers assigned to a specific Class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.getTeachersForClass({
    classSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2ClassesTeachersResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.GetTeachersForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.getTeachersForClass({
  classSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2ClassesTeachersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | Class sourcedId |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.getTeachersForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2ClassesTeachersResponse](src/models/ims-oneroster-rostering-v1-p2-classes-teachers-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.GetTeachersForClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.getTeachersForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2ClassesTeachersResponse, ClassesManagement.GetTeachersForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2ClassesTeachersResponse](src/models/ims-oneroster-rostering-v1-p2-classes-teachers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postLineItemsForClass(request: ClassesManagement.PostLineItemsForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ClassesLineItemsResponse, ClassesManagement.PostLineItemsForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a set of lineItems for a specific class. The responding system must return the set of sourcedIds that have been allocated to the newly created lineItem records. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.postLineItemsForClass({
    classSourcedId: "some example string",
    body: {
      lineItem: {
        title: "some example string",
        assignDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        dueDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        class: { sourcedId: "some example string" },
        school: { sourcedId: "some example string" },
        category: { sourcedId: "some example string" },
      },
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ClassesLineItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.PostLineItemsForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.postLineItemsForClass({
  classSourcedId: "some example string",
  body: {
    lineItem: {
      title: "some example string",
      assignDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      dueDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      class: { sourcedId: "some example string" },
      school: { sourcedId: "some example string" },
      category: { sourcedId: "some example string" },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ClassesLineItemsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | The sourcedId of the class |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2ClassesLineItemsRequest](src/models/ims-oneroster-gradebook-v1-p2-classes-line-items-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.postLineItemsForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ClassesLineItemsResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-line-items-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.PostLineItemsForClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.postLineItemsForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ClassesLineItemsResponse, ClassesManagement.PostLineItemsForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ClassesLineItemsResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-line-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postResultsForAcademicSessionForClass(request: ClassesManagement.PostResultsForAcademicSessionForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponse, ClassesManagement.PostResultsForAcademicSessionForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a set of results for a specific academic session and specific class. The responding system must return the set of sourcedIds that have been allocated to the newly created result records. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class or academic session not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.postResultsForAcademicSessionForClass({
    classSourcedId: "some example string",
    academicSessionSourcedId: "some example string",
    body: {
      results: [
        {
          status: Status.Active,
          lineItem: { sourcedId: "some example string" },
          student: { sourcedId: "some example string" },
          scoreStatus: ScoreStatus.Exempt,
          scoreDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        },
      ],
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.PostResultsForAcademicSessionForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.postResultsForAcademicSessionForClass({
  classSourcedId: "some example string",
  academicSessionSourcedId: "some example string",
  body: {
    results: [
      {
        status: Status.Active,
        lineItem: { sourcedId: "some example string" },
        student: { sourcedId: "some example string" },
        scoreStatus: ScoreStatus.Exempt,
        scoreDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | The sourcedId of the class |
| <code>academicSessionSourcedId</code> | <code>string</code> | The sourcedId of the academic session |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequest](src/models/ims-oneroster-gradebook-v1-p2-classes-academic-sessions-results-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.postResultsForAcademicSessionForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-academic-sessions-results-response.ts)</code>
- **OnError**: throws <code>[ClassesManagement.PostResultsForAcademicSessionForClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.postResultsForAcademicSessionForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponse, ClassesManagement.PostResultsForAcademicSessionForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-classes-academic-sessions-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateClass(request: ClassesManagement.UpdateClassRequest, options?: RequestOptions): ApiPromise&lt;Class, ClassesManagement.UpdateClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Class. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classesManagement.updateClass({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type Class
} catch (err) {
  // TODO: Handle 'err' of type ClassesManagement.UpdateClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classesManagement.updateClass({ sourcedId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Class
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | Class sourcedId |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2ClassesRequest1](src/models/ims-oneroster-rostering-v1-p2-classes-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classesManagement.updateClass(request)`

- **OnSuccess**: <code>[Class](src/models/class.ts)</code>
- **OnError**: throws <code>[ClassesManagement.UpdateClassError](src/resources/classes-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classesManagement.updateClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Class, ClassesManagement.UpdateClassError&gt;</code>, with `result.value` of type <code>[Class](src/models/class.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TeachersManagement

> Source: [TeachersManagement](src/resources/teachers-management.ts)

<details>
<summary><code>addTeacherToClass(request: TeachersManagement.AddTeacherToClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2ClassesTeachersResponse1, TeachersManagement.AddTeacherToClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrolls a teacher to a specific Class. The responding system must return the set of sourcedIds that have been allocated to the newly created enrollment record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teachersManagement.addTeacherToClass({
    classSourcedId: "some example string",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2ClassesTeachersResponse1
} catch (err) {
  // TODO: Handle 'err' of type TeachersManagement.AddTeacherToClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teachersManagement.addTeacherToClass({
  classSourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2ClassesTeachersResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | Class sourcedId |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2ClassesTeachersRequest](src/models/ims-oneroster-rostering-v1-p2-classes-teachers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teachersManagement.addTeacherToClass(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2ClassesTeachersResponse1](src/models/ims-oneroster-rostering-v1-p2-classes-teachers-response1.ts)</code>
- **OnError**: throws <code>[TeachersManagement.AddTeacherToClassError](src/resources/teachers-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teachersManagement.addTeacherToClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2ClassesTeachersResponse1, TeachersManagement.AddTeacherToClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2ClassesTeachersResponse1](src/models/ims-oneroster-rostering-v1-p2-classes-teachers-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllTeachers(request: TeachersManagement.GetAllTeachersRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2TeachersResponse, TeachersManagement.GetAllTeachersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Teachers on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teachersManagement.getAllTeachers({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2TeachersResponse
} catch (err) {
  // TODO: Handle 'err' of type TeachersManagement.GetAllTeachersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teachersManagement.getAllTeachers({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2TeachersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teachersManagement.getAllTeachers(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2TeachersResponse](src/models/ims-oneroster-rostering-v1-p2-teachers-response.ts)</code>
- **OnError**: throws <code>[TeachersManagement.GetAllTeachersError](src/resources/teachers-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teachersManagement.getAllTeachers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2TeachersResponse, TeachersManagement.GetAllTeachersError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2TeachersResponse](src/models/ims-oneroster-rostering-v1-p2-teachers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassesForTeacher(request: TeachersManagement.GetClassesForTeacherRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2TeachersClassesResponse, TeachersManagement.GetClassesForTeacherError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the set of Classes a Teacher is enrolled in. If the specified teacher cannot be identified within the service provider, the api will return a 404 error code and message 'Teacher not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teachersManagement.getClassesForTeacher({
    teacherSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2TeachersClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type TeachersManagement.GetClassesForTeacherError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teachersManagement.getClassesForTeacher({
  teacherSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2TeachersClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teacherSourcedId</code> | <code>string</code> | The sourcedId of the teacher |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teachersManagement.getClassesForTeacher(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2TeachersClassesResponse](src/models/ims-oneroster-rostering-v1-p2-teachers-classes-response.ts)</code>
- **OnError**: throws <code>[TeachersManagement.GetClassesForTeacherError](src/resources/teachers-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teachersManagement.getClassesForTeacher(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2TeachersClassesResponse, TeachersManagement.GetClassesForTeacherError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2TeachersClassesResponse](src/models/ims-oneroster-rostering-v1-p2-teachers-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeacher(request: TeachersManagement.GetTeacherRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2TeachersResponse1, TeachersManagement.GetTeacherError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get a specific Teacher on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Teacher not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teachersManagement.getTeacher({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2TeachersResponse1
} catch (err) {
  // TODO: Handle 'err' of type TeachersManagement.GetTeacherError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teachersManagement.getTeacher({ sourcedId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2TeachersResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the teacher |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teachersManagement.getTeacher(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2TeachersResponse1](src/models/ims-oneroster-rostering-v1-p2-teachers-response1.ts)</code>
- **OnError**: throws <code>[TeachersManagement.GetTeacherError](src/resources/teachers-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teachersManagement.getTeacher(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2TeachersResponse1, TeachersManagement.GetTeacherError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2TeachersResponse1](src/models/ims-oneroster-rostering-v1-p2-teachers-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeachersForClass(request: TeachersManagement.GetTeachersForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2ClassesTeachersResponse, TeachersManagement.GetTeachersForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all teachers assigned to a specific Class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teachersManagement.getTeachersForClass({
    classSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2ClassesTeachersResponse
} catch (err) {
  // TODO: Handle 'err' of type TeachersManagement.GetTeachersForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teachersManagement.getTeachersForClass({
  classSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2ClassesTeachersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | Class sourcedId |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teachersManagement.getTeachersForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2ClassesTeachersResponse](src/models/ims-oneroster-rostering-v1-p2-classes-teachers-response.ts)</code>
- **OnError**: throws <code>[TeachersManagement.GetTeachersForClassError](src/resources/teachers-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teachersManagement.getTeachersForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2ClassesTeachersResponse, TeachersManagement.GetTeachersForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2ClassesTeachersResponse](src/models/ims-oneroster-rostering-v1-p2-classes-teachers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeachersForClassInSchool(request: TeachersManagement.GetTeachersForClassInSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse, TeachersManagement.GetTeachersForClassInSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Teachers for a Class in a School on the service provider. If the specified school and/or class cannot be identified within the service provider, the api will return a 404 error code and message 'School or class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teachersManagement.getTeachersForClassInSchool({
    schoolSourcedId: "some example string",
    classSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse
} catch (err) {
  // TODO: Handle 'err' of type TeachersManagement.GetTeachersForClassInSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teachersManagement.getTeachersForClassInSchool({
  schoolSourcedId: "some example string",
  classSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>classSourcedId</code> | <code>string</code> | Class sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teachersManagement.getTeachersForClassInSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-teachers-response.ts)</code>
- **OnError**: throws <code>[TeachersManagement.GetTeachersForClassInSchoolError](src/resources/teachers-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teachersManagement.getTeachersForClassInSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse, TeachersManagement.GetTeachersForClassInSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-teachers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeachersForSchool(request: TeachersManagement.GetTeachersForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsTeachersResponse, TeachersManagement.GetTeachersForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Teachers for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teachersManagement.getTeachersForSchool({
    schoolSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsTeachersResponse
} catch (err) {
  // TODO: Handle 'err' of type TeachersManagement.GetTeachersForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teachersManagement.getTeachersForSchool({
  schoolSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsTeachersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teachersManagement.getTeachersForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsTeachersResponse](src/models/ims-oneroster-rostering-v1-p2-schools-teachers-response.ts)</code>
- **OnError**: throws <code>[TeachersManagement.GetTeachersForSchoolError](src/resources/teachers-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teachersManagement.getTeachersForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsTeachersResponse, TeachersManagement.GetTeachersForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsTeachersResponse](src/models/ims-oneroster-rostering-v1-p2-schools-teachers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StudentsManagement

> Source: [StudentsManagement](src/resources/students-management.ts)

<details>
<summary><code>addStudentToClass(request: StudentsManagement.AddStudentToClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2ClassesStudentsResponse1, StudentsManagement.AddStudentToClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrolls a student in a specific Class. The responding system must return the set of sourcedIds that have been allocated to the newly created enrollment record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.studentsManagement.addStudentToClass({
    classSourcedId: "some example string",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2ClassesStudentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type StudentsManagement.AddStudentToClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.studentsManagement.addStudentToClass({
  classSourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2ClassesStudentsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | Class sourcedId |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2ClassesStudentsRequest](src/models/ims-oneroster-rostering-v1-p2-classes-students-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.studentsManagement.addStudentToClass(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2ClassesStudentsResponse1](src/models/ims-oneroster-rostering-v1-p2-classes-students-response1.ts)</code>
- **OnError**: throws <code>[StudentsManagement.AddStudentToClassError](src/resources/students-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.studentsManagement.addStudentToClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2ClassesStudentsResponse1, StudentsManagement.AddStudentToClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2ClassesStudentsResponse1](src/models/ims-oneroster-rostering-v1-p2-classes-students-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllStudents(request: StudentsManagement.GetAllStudentsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2StudentsResponse, StudentsManagement.GetAllStudentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Students on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.studentsManagement.getAllStudents({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2StudentsResponse
} catch (err) {
  // TODO: Handle 'err' of type StudentsManagement.GetAllStudentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.studentsManagement.getAllStudents({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2StudentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.studentsManagement.getAllStudents(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2StudentsResponse](src/models/ims-oneroster-rostering-v1-p2-students-response.ts)</code>
- **OnError**: throws <code>[StudentsManagement.GetAllStudentsError](src/resources/students-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.studentsManagement.getAllStudents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2StudentsResponse, StudentsManagement.GetAllStudentsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2StudentsResponse](src/models/ims-oneroster-rostering-v1-p2-students-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassesForStudent(request: StudentsManagement.GetClassesForStudentRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2StudentsClassesResponse, StudentsManagement.GetClassesForStudentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the set of Classes related to a specific Student. If the specified student cannot be identified within the service provider, the api will return a 404 error code and message 'Student not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.studentsManagement.getClassesForStudent({
    studentSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2StudentsClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type StudentsManagement.GetClassesForStudentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.studentsManagement.getClassesForStudent({
  studentSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2StudentsClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>studentSourcedId</code> | <code>string</code> | The sourcedId of the student |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.studentsManagement.getClassesForStudent(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2StudentsClassesResponse](src/models/ims-oneroster-rostering-v1-p2-students-classes-response.ts)</code>
- **OnError**: throws <code>[StudentsManagement.GetClassesForStudentError](src/resources/students-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.studentsManagement.getClassesForStudent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2StudentsClassesResponse, StudentsManagement.GetClassesForStudentError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2StudentsClassesResponse](src/models/ims-oneroster-rostering-v1-p2-students-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStudent(request: StudentsManagement.GetStudentRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2StudentsResponse1, StudentsManagement.GetStudentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get a specific Student on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Student not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.studentsManagement.getStudent({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2StudentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type StudentsManagement.GetStudentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.studentsManagement.getStudent({ sourcedId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2StudentsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the student |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.studentsManagement.getStudent(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2StudentsResponse1](src/models/ims-oneroster-rostering-v1-p2-students-response1.ts)</code>
- **OnError**: throws <code>[StudentsManagement.GetStudentError](src/resources/students-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.studentsManagement.getStudent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2StudentsResponse1, StudentsManagement.GetStudentError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2StudentsResponse1](src/models/ims-oneroster-rostering-v1-p2-students-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStudentsForClass(request: StudentsManagement.GetStudentsForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2ClassesStudentsResponse, StudentsManagement.GetStudentsForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all students enrolled in a specific Class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.studentsManagement.getStudentsForClass({
    classSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2ClassesStudentsResponse
} catch (err) {
  // TODO: Handle 'err' of type StudentsManagement.GetStudentsForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.studentsManagement.getStudentsForClass({
  classSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2ClassesStudentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | Class sourcedId |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.studentsManagement.getStudentsForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2ClassesStudentsResponse](src/models/ims-oneroster-rostering-v1-p2-classes-students-response.ts)</code>
- **OnError**: throws <code>[StudentsManagement.GetStudentsForClassError](src/resources/students-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.studentsManagement.getStudentsForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2ClassesStudentsResponse, StudentsManagement.GetStudentsForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2ClassesStudentsResponse](src/models/ims-oneroster-rostering-v1-p2-classes-students-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStudentsForClassInSchool(request: StudentsManagement.GetStudentsForClassInSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse, StudentsManagement.GetStudentsForClassInSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Students for a Class in a School on the service provider. If the specified school and/or class cannot be identified within the service provider, the api will return a 404 error code and message 'School or class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.studentsManagement.getStudentsForClassInSchool({
    schoolSourcedId: "some example string",
    classSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse
} catch (err) {
  // TODO: Handle 'err' of type StudentsManagement.GetStudentsForClassInSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.studentsManagement.getStudentsForClassInSchool({
  schoolSourcedId: "some example string",
  classSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>classSourcedId</code> | <code>string</code> | Class sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.studentsManagement.getStudentsForClassInSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-students-response.ts)</code>
- **OnError**: throws <code>[StudentsManagement.GetStudentsForClassInSchoolError](src/resources/students-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.studentsManagement.getStudentsForClassInSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse, StudentsManagement.GetStudentsForClassInSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-students-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStudentsForSchool(request: StudentsManagement.GetStudentsForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsStudentsResponse, StudentsManagement.GetStudentsForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Students for a School on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.studentsManagement.getStudentsForSchool({
    schoolSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsStudentsResponse
} catch (err) {
  // TODO: Handle 'err' of type StudentsManagement.GetStudentsForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.studentsManagement.getStudentsForSchool({
  schoolSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsStudentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.studentsManagement.getStudentsForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsStudentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-students-response.ts)</code>
- **OnError**: throws <code>[StudentsManagement.GetStudentsForSchoolError](src/resources/students-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.studentsManagement.getStudentsForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsStudentsResponse, StudentsManagement.GetStudentsForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsStudentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-students-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CoursesManagement

> Source: [CoursesManagement](src/resources/courses-management.ts)

<details>
<summary><code>createComponentResource(request: CoursesManagement.CreateComponentResourceRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse, CoursesManagement.CreateComponentResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new Component Resource. The responding system must return the set of sourcedIds that have been allocated to the newly created componentResource record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.createComponentResource();
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.CreateComponentResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.createComponentResource().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesRequest](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.createComponentResource(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response.ts)</code>
- **OnError**: throws <code>[CoursesManagement.CreateComponentResourceError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.createComponentResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse, CoursesManagement.CreateComponentResourceError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCourse(request: CoursesManagement.CreateCourseRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesResponse1, CoursesManagement.CreateCourseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new Course. The responding system must return the set of sourcedIds that have been allocated to the newly created course record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.createCourse();
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesResponse1
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.CreateCourseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.createCourse().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2CoursesRequest](src/models/ims-oneroster-rostering-v1-p2-courses-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.createCourse(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesResponse1](src/models/ims-oneroster-rostering-v1-p2-courses-response1.ts)</code>
- **OnError**: throws <code>[CoursesManagement.CreateCourseError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.createCourse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesResponse1, CoursesManagement.CreateCourseError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesResponse1](src/models/ims-oneroster-rostering-v1-p2-courses-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCourseComponent(request: CoursesManagement.CreateCourseComponentRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesComponentsResponse, CoursesManagement.CreateCourseComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used when creating a new course component or module

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.createCourseComponent();
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesComponentsResponse
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.CreateCourseComponentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.createCourseComponent().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesComponentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2CoursesComponentsRequest](src/models/ims-oneroster-rostering-v1-p2-courses-components-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.createCourseComponent(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesComponentsResponse](src/models/ims-oneroster-rostering-v1-p2-courses-components-response.ts)</code>
- **OnError**: throws <code>[CoursesManagement.CreateCourseComponentError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.createCourseComponent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesComponentsResponse, CoursesManagement.CreateCourseComponentError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesComponentsResponse](src/models/ims-oneroster-rostering-v1-p2-courses-components-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteComponentResource(request: CoursesManagement.DeleteComponentResourceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CoursesManagement.DeleteComponentResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Component Resource on the service provider. The operation changes the status of the Component Resource to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.deleteComponentResource({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.DeleteComponentResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.deleteComponentResource({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the component resource to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.deleteComponentResource(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CoursesManagement.DeleteComponentResourceError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.deleteComponentResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CoursesManagement.DeleteComponentResourceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCourse(request: CoursesManagement.DeleteCourseRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CoursesManagement.DeleteCourseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Course on the service provider. The operation changes the status of the Course to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.deleteCourse({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.DeleteCourseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.deleteCourse({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the course to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.deleteCourse(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CoursesManagement.DeleteCourseError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.deleteCourse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CoursesManagement.DeleteCourseError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCourseComponent(request: CoursesManagement.DeleteCourseComponentRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CoursesManagement.DeleteCourseComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Course Component on the service provider. The operation changes the status of the Course Component to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.deleteCourseComponent({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.DeleteCourseComponentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.deleteCourseComponent({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the course component to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.deleteCourseComponent(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CoursesManagement.DeleteCourseComponentError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.deleteCourseComponent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CoursesManagement.DeleteCourseComponentError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllComponentResources(request: CoursesManagement.GetAllComponentResourcesRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1, CoursesManagement.GetAllComponentResourcesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Component Resources on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.getAllComponentResources({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.GetAllComponentResourcesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.getAllComponentResources({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.getAllComponentResources(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response1.ts)</code>
- **OnError**: throws <code>[CoursesManagement.GetAllComponentResourcesError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.getAllComponentResources(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1, CoursesManagement.GetAllComponentResourcesError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllCourseComponents(request: CoursesManagement.GetAllCourseComponentsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesComponentsResponse1, CoursesManagement.GetAllCourseComponentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Course Components on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.getAllCourseComponents({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesComponentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.GetAllCourseComponentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.getAllCourseComponents({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesComponentsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.getAllCourseComponents(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesComponentsResponse1](src/models/ims-oneroster-rostering-v1-p2-courses-components-response1.ts)</code>
- **OnError**: throws <code>[CoursesManagement.GetAllCourseComponentsError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.getAllCourseComponents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesComponentsResponse1, CoursesManagement.GetAllCourseComponentsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesComponentsResponse1](src/models/ims-oneroster-rostering-v1-p2-courses-components-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllCourses(request: CoursesManagement.GetAllCoursesRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesResponse, CoursesManagement.GetAllCoursesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Courses on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.getAllCourses({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesResponse
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.GetAllCoursesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.getAllCourses({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.getAllCourses(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesResponse](src/models/ims-oneroster-rostering-v1-p2-courses-response.ts)</code>
- **OnError**: throws <code>[CoursesManagement.GetAllCoursesError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.getAllCourses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesResponse, CoursesManagement.GetAllCoursesError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesResponse](src/models/ims-oneroster-rostering-v1-p2-courses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassesForCourse(request: CoursesManagement.GetClassesForCourseRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesClassesResponse, CoursesManagement.GetClassesForCourseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Classes associated with a specific Course. If the corresponding record cannot be located, the api will return a 404 error code and message 'Course not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.getClassesForCourse({
    courseSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.GetClassesForCourseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.getClassesForCourse({
  courseSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>courseSourcedId</code> | <code>string</code> | The sourcedId of the course |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.getClassesForCourse(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesClassesResponse](src/models/ims-oneroster-rostering-v1-p2-courses-classes-response.ts)</code>
- **OnError**: throws <code>[CoursesManagement.GetClassesForCourseError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.getClassesForCourse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesClassesResponse, CoursesManagement.GetClassesForCourseError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesClassesResponse](src/models/ims-oneroster-rostering-v1-p2-courses-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getComponentResource(request: CoursesManagement.GetComponentResourceRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2, CoursesManagement.GetComponentResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Component Resource on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Component Resource not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.getComponentResource({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.GetComponentResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.getComponentResource({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the component resource |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.getComponentResource(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response2.ts)</code>
- **OnError**: throws <code>[CoursesManagement.GetComponentResourceError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.getComponentResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2, CoursesManagement.GetComponentResourceError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCourse(request: CoursesManagement.GetCourseRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesResponse2, CoursesManagement.GetCourseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Course on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Course not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.getCourse({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesResponse2
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.GetCourseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.getCourse({ sourcedId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the course |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.getCourse(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesResponse2](src/models/ims-oneroster-rostering-v1-p2-courses-response2.ts)</code>
- **OnError**: throws <code>[CoursesManagement.GetCourseError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.getCourse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesResponse2, CoursesManagement.GetCourseError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesResponse2](src/models/ims-oneroster-rostering-v1-p2-courses-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCourseComponent(request: CoursesManagement.GetCourseComponentRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesComponentsResponse2, CoursesManagement.GetCourseComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Course Component on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Course Component not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.getCourseComponent({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesComponentsResponse2
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.GetCourseComponentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.getCourseComponent({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesComponentsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the course component |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.getCourseComponent(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesComponentsResponse2](src/models/ims-oneroster-rostering-v1-p2-courses-components-response2.ts)</code>
- **OnError**: throws <code>[CoursesManagement.GetCourseComponentError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.getCourseComponent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesComponentsResponse2, CoursesManagement.GetCourseComponentError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesComponentsResponse2](src/models/ims-oneroster-rostering-v1-p2-courses-components-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCoursesForSchool(request: CoursesManagement.GetCoursesForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsCoursesResponse, CoursesManagement.GetCoursesForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Courses for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.getCoursesForSchool({
    schoolSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsCoursesResponse
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.GetCoursesForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.getCoursesForSchool({
  schoolSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsCoursesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.getCoursesForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsCoursesResponse](src/models/ims-oneroster-rostering-v1-p2-schools-courses-response.ts)</code>
- **OnError**: throws <code>[CoursesManagement.GetCoursesForSchoolError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.getCoursesForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsCoursesResponse, CoursesManagement.GetCoursesForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsCoursesResponse](src/models/ims-oneroster-rostering-v1-p2-schools-courses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putComponentResource(request: CoursesManagement.PutComponentResourceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CoursesManagement.PutComponentResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Component Resource. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.putComponentResource({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.PutComponentResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.putComponentResource({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the component resource to update |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesRequest](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.putComponentResource(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CoursesManagement.PutComponentResourceError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.putComponentResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CoursesManagement.PutComponentResourceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putCourse(request: CoursesManagement.PutCourseRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CoursesManagement.PutCourseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Course. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.putCourse({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.PutCourseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.putCourse({ sourcedId: "some example string" }).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the course to update |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2CoursesRequest](src/models/ims-oneroster-rostering-v1-p2-courses-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.putCourse(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CoursesManagement.PutCourseError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.putCourse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CoursesManagement.PutCourseError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putCourseComponent(request: CoursesManagement.PutCourseComponentRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CoursesManagement.PutCourseComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Course Component. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coursesManagement.putCourseComponent({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CoursesManagement.PutCourseComponentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coursesManagement.putCourseComponent({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the course component to update |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2CoursesComponentsRequest](src/models/ims-oneroster-rostering-v1-p2-courses-components-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coursesManagement.putCourseComponent(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CoursesManagement.PutCourseComponentError](src/resources/courses-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.coursesManagement.putCourseComponent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CoursesManagement.PutCourseComponentError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CourseComponentResourcesManagement

> Source: [CourseComponentResourcesManagement](src/resources/course-component-resources-management.ts)

<details>
<summary><code>createComponentResource(request: CourseComponentResourcesManagement.CreateComponentResourceRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse, CourseComponentResourcesManagement.CreateComponentResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new Component Resource. The responding system must return the set of sourcedIds that have been allocated to the newly created componentResource record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.courseComponentResourcesManagement.createComponentResource();
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse
} catch (err) {
  // TODO: Handle 'err' of type CourseComponentResourcesManagement.CreateComponentResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.courseComponentResourcesManagement.createComponentResource().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesRequest](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.courseComponentResourcesManagement.createComponentResource(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response.ts)</code>
- **OnError**: throws <code>[CourseComponentResourcesManagement.CreateComponentResourceError](src/resources/course-component-resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.courseComponentResourcesManagement.createComponentResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse, CourseComponentResourcesManagement.CreateComponentResourceError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteComponentResource(request: CourseComponentResourcesManagement.DeleteComponentResourceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CourseComponentResourcesManagement.DeleteComponentResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Component Resource on the service provider. The operation changes the status of the Component Resource to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.courseComponentResourcesManagement.deleteComponentResource({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CourseComponentResourcesManagement.DeleteComponentResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.courseComponentResourcesManagement.deleteComponentResource({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the component resource to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.courseComponentResourcesManagement.deleteComponentResource(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CourseComponentResourcesManagement.DeleteComponentResourceError](src/resources/course-component-resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.courseComponentResourcesManagement.deleteComponentResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CourseComponentResourcesManagement.DeleteComponentResourceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllComponentResources(request: CourseComponentResourcesManagement.GetAllComponentResourcesRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1, CourseComponentResourcesManagement.GetAllComponentResourcesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Component Resources on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.courseComponentResourcesManagement.getAllComponentResources({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1
} catch (err) {
  // TODO: Handle 'err' of type CourseComponentResourcesManagement.GetAllComponentResourcesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.courseComponentResourcesManagement.getAllComponentResources({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.courseComponentResourcesManagement.getAllComponentResources(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response1.ts)</code>
- **OnError**: throws <code>[CourseComponentResourcesManagement.GetAllComponentResourcesError](src/resources/course-component-resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.courseComponentResourcesManagement.getAllComponentResources(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1, CourseComponentResourcesManagement.GetAllComponentResourcesError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getComponentResource(request: CourseComponentResourcesManagement.GetComponentResourceRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2, CourseComponentResourcesManagement.GetComponentResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Component Resource on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Component Resource not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.courseComponentResourcesManagement.getComponentResource({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2
} catch (err) {
  // TODO: Handle 'err' of type CourseComponentResourcesManagement.GetComponentResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.courseComponentResourcesManagement.getComponentResource({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the component resource |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.courseComponentResourcesManagement.getComponentResource(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response2.ts)</code>
- **OnError**: throws <code>[CourseComponentResourcesManagement.GetComponentResourceError](src/resources/course-component-resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.courseComponentResourcesManagement.getComponentResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2, CourseComponentResourcesManagement.GetComponentResourceError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putComponentResource(request: CourseComponentResourcesManagement.PutComponentResourceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CourseComponentResourcesManagement.PutComponentResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Component Resource. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.courseComponentResourcesManagement.putComponentResource({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CourseComponentResourcesManagement.PutComponentResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.courseComponentResourcesManagement.putComponentResource({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the component resource to update |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2CoursesComponentResourcesRequest](src/models/ims-oneroster-rostering-v1-p2-courses-component-resources-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.courseComponentResourcesManagement.putComponentResource(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CourseComponentResourcesManagement.PutComponentResourceError](src/resources/course-component-resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.courseComponentResourcesManagement.putComponentResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CourseComponentResourcesManagement.PutComponentResourceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CourseComponentsManagement

> Source: [CourseComponentsManagement](src/resources/course-components-management.ts)

<details>
<summary><code>createCourseComponent(request: CourseComponentsManagement.CreateCourseComponentRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesComponentsResponse, CourseComponentsManagement.CreateCourseComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used when creating a new course component or module

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.courseComponentsManagement.createCourseComponent();
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesComponentsResponse
} catch (err) {
  // TODO: Handle 'err' of type CourseComponentsManagement.CreateCourseComponentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.courseComponentsManagement.createCourseComponent().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesComponentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2CoursesComponentsRequest](src/models/ims-oneroster-rostering-v1-p2-courses-components-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.courseComponentsManagement.createCourseComponent(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesComponentsResponse](src/models/ims-oneroster-rostering-v1-p2-courses-components-response.ts)</code>
- **OnError**: throws <code>[CourseComponentsManagement.CreateCourseComponentError](src/resources/course-components-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.courseComponentsManagement.createCourseComponent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesComponentsResponse, CourseComponentsManagement.CreateCourseComponentError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesComponentsResponse](src/models/ims-oneroster-rostering-v1-p2-courses-components-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCourseComponent(request: CourseComponentsManagement.DeleteCourseComponentRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CourseComponentsManagement.DeleteCourseComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Course Component on the service provider. The operation changes the status of the Course Component to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.courseComponentsManagement.deleteCourseComponent({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CourseComponentsManagement.DeleteCourseComponentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.courseComponentsManagement.deleteCourseComponent({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the course component to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.courseComponentsManagement.deleteCourseComponent(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CourseComponentsManagement.DeleteCourseComponentError](src/resources/course-components-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.courseComponentsManagement.deleteCourseComponent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CourseComponentsManagement.DeleteCourseComponentError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllCourseComponents(request: CourseComponentsManagement.GetAllCourseComponentsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesComponentsResponse1, CourseComponentsManagement.GetAllCourseComponentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Course Components on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.courseComponentsManagement.getAllCourseComponents({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesComponentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type CourseComponentsManagement.GetAllCourseComponentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.courseComponentsManagement.getAllCourseComponents({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesComponentsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.courseComponentsManagement.getAllCourseComponents(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesComponentsResponse1](src/models/ims-oneroster-rostering-v1-p2-courses-components-response1.ts)</code>
- **OnError**: throws <code>[CourseComponentsManagement.GetAllCourseComponentsError](src/resources/course-components-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.courseComponentsManagement.getAllCourseComponents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesComponentsResponse1, CourseComponentsManagement.GetAllCourseComponentsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesComponentsResponse1](src/models/ims-oneroster-rostering-v1-p2-courses-components-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCourseComponent(request: CourseComponentsManagement.GetCourseComponentRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2CoursesComponentsResponse2, CourseComponentsManagement.GetCourseComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Course Component on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Course Component not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.courseComponentsManagement.getCourseComponent({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2CoursesComponentsResponse2
} catch (err) {
  // TODO: Handle 'err' of type CourseComponentsManagement.GetCourseComponentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.courseComponentsManagement.getCourseComponent({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2CoursesComponentsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the course component |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.courseComponentsManagement.getCourseComponent(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2CoursesComponentsResponse2](src/models/ims-oneroster-rostering-v1-p2-courses-components-response2.ts)</code>
- **OnError**: throws <code>[CourseComponentsManagement.GetCourseComponentError](src/resources/course-components-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.courseComponentsManagement.getCourseComponent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2CoursesComponentsResponse2, CourseComponentsManagement.GetCourseComponentError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2CoursesComponentsResponse2](src/models/ims-oneroster-rostering-v1-p2-courses-components-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putCourseComponent(request: CourseComponentsManagement.PutCourseComponentRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CourseComponentsManagement.PutCourseComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Course Component. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.courseComponentsManagement.putCourseComponent({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CourseComponentsManagement.PutCourseComponentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.courseComponentsManagement.putCourseComponent({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the course component to update |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2CoursesComponentsRequest](src/models/ims-oneroster-rostering-v1-p2-courses-components-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.courseComponentsManagement.putCourseComponent(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CourseComponentsManagement.PutCourseComponentError](src/resources/course-components-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.courseComponentsManagement.putCourseComponent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CourseComponentsManagement.PutCourseComponentError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DemographicsManagement

> Source: [DemographicsManagement](src/resources/demographics-management.ts)

<details>
<summary><code>deleteDemographics(request: DemographicsManagement.DeleteDemographicsRequest, options?: RequestOptions): ApiPromise&lt;undefined, DemographicsManagement.DeleteDemographicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Demographic record on the service provider. The operation changes the status of the Demographic record to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.demographicsManagement.deleteDemographics({ sourcedId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type DemographicsManagement.DeleteDemographicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.demographicsManagement.deleteDemographics({
  sourcedId: "some example string",
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
| <code>sourcedId</code> | <code>string</code> | The unique identifier for the Demographic record to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.demographicsManagement.deleteDemographics(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DemographicsManagement.DeleteDemographicsError](src/resources/demographics-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.demographicsManagement.deleteDemographics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DemographicsManagement.DeleteDemographicsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllDemographics(request: DemographicsManagement.GetAllDemographicsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2DemographicsResponse, DemographicsManagement.GetAllDemographicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Demographic records on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.demographicsManagement.getAllDemographics({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2DemographicsResponse
} catch (err) {
  // TODO: Handle 'err' of type DemographicsManagement.GetAllDemographicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.demographicsManagement.getAllDemographics({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2DemographicsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.demographicsManagement.getAllDemographics(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2DemographicsResponse](src/models/ims-oneroster-rostering-v1-p2-demographics-response.ts)</code>
- **OnError**: throws <code>[DemographicsManagement.GetAllDemographicsError](src/resources/demographics-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.demographicsManagement.getAllDemographics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2DemographicsResponse, DemographicsManagement.GetAllDemographicsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2DemographicsResponse](src/models/ims-oneroster-rostering-v1-p2-demographics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDemographics(request: DemographicsManagement.GetDemographicsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2DemographicsResponse2, DemographicsManagement.GetDemographicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Demographic record on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Demographics record not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.demographicsManagement.getDemographics({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2DemographicsResponse2
} catch (err) {
  // TODO: Handle 'err' of type DemographicsManagement.GetDemographicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.demographicsManagement.getDemographics({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2DemographicsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The unique identifier for the demographics record |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.demographicsManagement.getDemographics(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2DemographicsResponse2](src/models/ims-oneroster-rostering-v1-p2-demographics-response2.ts)</code>
- **OnError**: throws <code>[DemographicsManagement.GetDemographicsError](src/resources/demographics-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.demographicsManagement.getDemographics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2DemographicsResponse2, DemographicsManagement.GetDemographicsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2DemographicsResponse2](src/models/ims-oneroster-rostering-v1-p2-demographics-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDemographics(request: DemographicsManagement.PostDemographicsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2DemographicsResponse1, DemographicsManagement.PostDemographicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new Demographic record. The responding system must return the set of sourcedIds that have been allocated to the newly created demographic record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.demographicsManagement.postDemographics();
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2DemographicsResponse1
} catch (err) {
  // TODO: Handle 'err' of type DemographicsManagement.PostDemographicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.demographicsManagement.postDemographics().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2DemographicsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2DemographicsRequest](src/models/ims-oneroster-rostering-v1-p2-demographics-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.demographicsManagement.postDemographics(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2DemographicsResponse1](src/models/ims-oneroster-rostering-v1-p2-demographics-response1.ts)</code>
- **OnError**: throws <code>[DemographicsManagement.PostDemographicsError](src/resources/demographics-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.demographicsManagement.postDemographics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2DemographicsResponse1, DemographicsManagement.PostDemographicsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2DemographicsResponse1](src/models/ims-oneroster-rostering-v1-p2-demographics-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putDemographics(request: DemographicsManagement.PutDemographicsRequest, options?: RequestOptions): ApiPromise&lt;Demographics, DemographicsManagement.PutDemographicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Demographic record. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.demographicsManagement.putDemographics({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type Demographics
} catch (err) {
  // TODO: Handle 'err' of type DemographicsManagement.PutDemographicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.demographicsManagement.putDemographics({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Demographics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The unique identifier for the demographics record to update |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2DemographicsRequest](src/models/ims-oneroster-rostering-v1-p2-demographics-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.demographicsManagement.putDemographics(request)`

- **OnSuccess**: <code>[Demographics](src/models/demographics.ts)</code>
- **OnError**: throws <code>[DemographicsManagement.PutDemographicsError](src/resources/demographics-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.demographicsManagement.putDemographics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Demographics, DemographicsManagement.PutDemographicsError&gt;</code>, with `result.value` of type <code>[Demographics](src/models/demographics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EnrollmentsManagement

> Source: [EnrollmentsManagement](src/resources/enrollments-management.ts)

<details>
<summary><code>createEnrollment(request: EnrollmentsManagement.CreateEnrollmentRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2EnrollmentsResponse1, EnrollmentsManagement.CreateEnrollmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new Enrollment. The responding system must return the set of sourcedIds that have been allocated to the newly created enrollment record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrollmentsManagement.createEnrollment();
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2EnrollmentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type EnrollmentsManagement.CreateEnrollmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrollmentsManagement.createEnrollment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2EnrollmentsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2EnrollmentsRequest](src/models/ims-oneroster-rostering-v1-p2-enrollments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrollmentsManagement.createEnrollment(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2EnrollmentsResponse1](src/models/ims-oneroster-rostering-v1-p2-enrollments-response1.ts)</code>
- **OnError**: throws <code>[EnrollmentsManagement.CreateEnrollmentError](src/resources/enrollments-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrollmentsManagement.createEnrollment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2EnrollmentsResponse1, EnrollmentsManagement.CreateEnrollmentError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2EnrollmentsResponse1](src/models/ims-oneroster-rostering-v1-p2-enrollments-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEnrollment(request: EnrollmentsManagement.DeleteEnrollmentRequest, options?: RequestOptions): ApiPromise&lt;undefined, EnrollmentsManagement.DeleteEnrollmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Enrollment on the service provider. The operation changes the status of the Enrollment to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.enrollmentsManagement.deleteEnrollment({ sourcedId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type EnrollmentsManagement.DeleteEnrollmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrollmentsManagement.deleteEnrollment({
  sourcedId: "some example string",
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
| <code>sourcedId</code> | <code>string</code> | The unique identifier for the enrollment to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrollmentsManagement.deleteEnrollment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[EnrollmentsManagement.DeleteEnrollmentError](src/resources/enrollments-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrollmentsManagement.deleteEnrollment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, EnrollmentsManagement.DeleteEnrollmentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllEnrollments(request: EnrollmentsManagement.GetAllEnrollmentsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2EnrollmentsResponse, EnrollmentsManagement.GetAllEnrollmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Enrollments on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrollmentsManagement.getAllEnrollments({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2EnrollmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type EnrollmentsManagement.GetAllEnrollmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrollmentsManagement.getAllEnrollments({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2EnrollmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrollmentsManagement.getAllEnrollments(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2EnrollmentsResponse](src/models/ims-oneroster-rostering-v1-p2-enrollments-response.ts)</code>
- **OnError**: throws <code>[EnrollmentsManagement.GetAllEnrollmentsError](src/resources/enrollments-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrollmentsManagement.getAllEnrollments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2EnrollmentsResponse, EnrollmentsManagement.GetAllEnrollmentsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2EnrollmentsResponse](src/models/ims-oneroster-rostering-v1-p2-enrollments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEnrollment(request: EnrollmentsManagement.GetEnrollmentRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2EnrollmentsResponse2, EnrollmentsManagement.GetEnrollmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Enrollment on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Enrollment not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrollmentsManagement.getEnrollment({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2EnrollmentsResponse2
} catch (err) {
  // TODO: Handle 'err' of type EnrollmentsManagement.GetEnrollmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrollmentsManagement.getEnrollment({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2EnrollmentsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The unique identifier for the enrollment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrollmentsManagement.getEnrollment(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2EnrollmentsResponse2](src/models/ims-oneroster-rostering-v1-p2-enrollments-response2.ts)</code>
- **OnError**: throws <code>[EnrollmentsManagement.GetEnrollmentError](src/resources/enrollments-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrollmentsManagement.getEnrollment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2EnrollmentsResponse2, EnrollmentsManagement.GetEnrollmentError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2EnrollmentsResponse2](src/models/ims-oneroster-rostering-v1-p2-enrollments-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEnrollmentsForClassInSchool(request: EnrollmentsManagement.GetEnrollmentsForClassInSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse, EnrollmentsManagement.GetEnrollmentsForClassInSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Enrollments for a Class in a School on the service provider. If the specified school and/or class cannot be identified within the service provider, the api will return a 404 error code and message 'School or class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrollmentsManagement.getEnrollmentsForClassInSchool({
    schoolSourcedId: "some example string",
    classSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type EnrollmentsManagement.GetEnrollmentsForClassInSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrollmentsManagement.getEnrollmentsForClassInSchool({
  schoolSourcedId: "some example string",
  classSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>classSourcedId</code> | <code>string</code> | Class sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrollmentsManagement.getEnrollmentsForClassInSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-enrollments-response.ts)</code>
- **OnError**: throws <code>[EnrollmentsManagement.GetEnrollmentsForClassInSchoolError](src/resources/enrollments-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrollmentsManagement.getEnrollmentsForClassInSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse, EnrollmentsManagement.GetEnrollmentsForClassInSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-enrollments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEnrollmentsForSchool(request: EnrollmentsManagement.GetEnrollmentsForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse, EnrollmentsManagement.GetEnrollmentsForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Enrollments for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrollmentsManagement.getEnrollmentsForSchool({
    schoolSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type EnrollmentsManagement.GetEnrollmentsForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrollmentsManagement.getEnrollmentsForSchool({
  schoolSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrollmentsManagement.getEnrollmentsForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-enrollments-response.ts)</code>
- **OnError**: throws <code>[EnrollmentsManagement.GetEnrollmentsForSchoolError](src/resources/enrollments-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrollmentsManagement.getEnrollmentsForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse, EnrollmentsManagement.GetEnrollmentsForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-enrollments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEnrollment(request: EnrollmentsManagement.UpdateEnrollmentRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, EnrollmentsManagement.UpdateEnrollmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Enrollment. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrollmentsManagement.updateEnrollment({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type EnrollmentsManagement.UpdateEnrollmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrollmentsManagement.updateEnrollment({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The unique identifier for the enrollment to update |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2EnrollmentsRequest1](src/models/ims-oneroster-rostering-v1-p2-enrollments-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrollmentsManagement.updateEnrollment(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[EnrollmentsManagement.UpdateEnrollmentError](src/resources/enrollments-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrollmentsManagement.updateEnrollment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, EnrollmentsManagement.UpdateEnrollmentError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GradingPeriodsManagement

> Source: [GradingPeriodsManagement](src/resources/grading-periods-management.ts)

<details>
<summary><code>createGradingPeriod(request: GradingPeriodsManagement.CreateGradingPeriodRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2GradingPeriodsResponse1, GradingPeriodsManagement.CreateGradingPeriodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new Grading Period. The responding system must return the set of sourcedIds that have been allocated to the newly created gradingPeriod record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gradingPeriodsManagement.createGradingPeriod();
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2GradingPeriodsResponse1
} catch (err) {
  // TODO: Handle 'err' of type GradingPeriodsManagement.CreateGradingPeriodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gradingPeriodsManagement.createGradingPeriod().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2GradingPeriodsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2GradingPeriodsRequest](src/models/ims-oneroster-rostering-v1-p2-grading-periods-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gradingPeriodsManagement.createGradingPeriod(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2GradingPeriodsResponse1](src/models/ims-oneroster-rostering-v1-p2-grading-periods-response1.ts)</code>
- **OnError**: throws <code>[GradingPeriodsManagement.CreateGradingPeriodError](src/resources/grading-periods-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gradingPeriodsManagement.createGradingPeriod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2GradingPeriodsResponse1, GradingPeriodsManagement.CreateGradingPeriodError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2GradingPeriodsResponse1](src/models/ims-oneroster-rostering-v1-p2-grading-periods-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createGradingPeriodForTerm(request: GradingPeriodsManagement.CreateGradingPeriodForTermRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1, GradingPeriodsManagement.CreateGradingPeriodForTermError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new Grading Period for a Term. A Grading Period is a type of Academic Session. The responding system must return the set of sourcedIds that have been allocated to the newly created academicSession record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gradingPeriodsManagement.createGradingPeriodForTerm({
    termSourcedId: "some example string",
    body: {
      academicSession: {
        sourcedId: "some example string",
        status: Status.Active,
        title: "some example string",
        startDate: "some example string",
        endDate: "some example string",
        schoolYear: "some example string",
        org: { sourcedId: "some example string" },
        tenantId: "some example string",
        clientAppId: "some example string",
      },
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1
} catch (err) {
  // TODO: Handle 'err' of type GradingPeriodsManagement.CreateGradingPeriodForTermError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gradingPeriodsManagement.createGradingPeriodForTerm({
  termSourcedId: "some example string",
  body: {
    academicSession: {
      sourcedId: "some example string",
      status: Status.Active,
      title: "some example string",
      startDate: "some example string",
      endDate: "some example string",
      schoolYear: "some example string",
      org: { sourcedId: "some example string" },
      tenantId: "some example string",
      clientAppId: "some example string",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>termSourcedId</code> | <code>string</code> | The sourcedId of the term |
| <code>body</code> | <code>[ImsOnerosterRosteringV1P2TermsGradingPeriodsRequest](src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gradingPeriodsManagement.createGradingPeriodForTerm(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1](src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response1.ts)</code>
- **OnError**: throws <code>[GradingPeriodsManagement.CreateGradingPeriodForTermError](src/resources/grading-periods-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gradingPeriodsManagement.createGradingPeriodForTerm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1, GradingPeriodsManagement.CreateGradingPeriodForTermError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1](src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGradingPeriod(request: GradingPeriodsManagement.DeleteGradingPeriodRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GradingPeriodsManagement.DeleteGradingPeriodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Grading Period on the service provider. The operation changes the status of the Grading Period to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gradingPeriodsManagement.deleteGradingPeriod({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GradingPeriodsManagement.DeleteGradingPeriodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gradingPeriodsManagement.deleteGradingPeriod({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the grading period to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gradingPeriodsManagement.deleteGradingPeriod(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GradingPeriodsManagement.DeleteGradingPeriodError](src/resources/grading-periods-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gradingPeriodsManagement.deleteGradingPeriod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GradingPeriodsManagement.DeleteGradingPeriodError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllGradingPeriods(request: GradingPeriodsManagement.GetAllGradingPeriodsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2GradingPeriodsResponse, GradingPeriodsManagement.GetAllGradingPeriodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Grading Periods on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gradingPeriodsManagement.getAllGradingPeriods({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2GradingPeriodsResponse
} catch (err) {
  // TODO: Handle 'err' of type GradingPeriodsManagement.GetAllGradingPeriodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gradingPeriodsManagement.getAllGradingPeriods({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2GradingPeriodsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gradingPeriodsManagement.getAllGradingPeriods(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2GradingPeriodsResponse](src/models/ims-oneroster-rostering-v1-p2-grading-periods-response.ts)</code>
- **OnError**: throws <code>[GradingPeriodsManagement.GetAllGradingPeriodsError](src/resources/grading-periods-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gradingPeriodsManagement.getAllGradingPeriods(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2GradingPeriodsResponse, GradingPeriodsManagement.GetAllGradingPeriodsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2GradingPeriodsResponse](src/models/ims-oneroster-rostering-v1-p2-grading-periods-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGradingPeriod(request: GradingPeriodsManagement.GetGradingPeriodRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2GradingPeriodsResponse2, GradingPeriodsManagement.GetGradingPeriodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Grading Period on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Grading period not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gradingPeriodsManagement.getGradingPeriod({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2GradingPeriodsResponse2
} catch (err) {
  // TODO: Handle 'err' of type GradingPeriodsManagement.GetGradingPeriodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gradingPeriodsManagement.getGradingPeriod({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2GradingPeriodsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the grading period to retrieve |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gradingPeriodsManagement.getGradingPeriod(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2GradingPeriodsResponse2](src/models/ims-oneroster-rostering-v1-p2-grading-periods-response2.ts)</code>
- **OnError**: throws <code>[GradingPeriodsManagement.GetGradingPeriodError](src/resources/grading-periods-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gradingPeriodsManagement.getGradingPeriod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2GradingPeriodsResponse2, GradingPeriodsManagement.GetGradingPeriodError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2GradingPeriodsResponse2](src/models/ims-oneroster-rostering-v1-p2-grading-periods-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGradingPeriodsForTerm(request: GradingPeriodsManagement.GetGradingPeriodsForTermRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse, GradingPeriodsManagement.GetGradingPeriodsForTermError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the set of Grading Periods related to a specific Term. If the specified Term cannot be identified within the service provider, the api will return a 404 error code and message 'Term not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gradingPeriodsManagement.getGradingPeriodsForTerm({
    termSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse
} catch (err) {
  // TODO: Handle 'err' of type GradingPeriodsManagement.GetGradingPeriodsForTermError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gradingPeriodsManagement.getGradingPeriodsForTerm({
  termSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>termSourcedId</code> | <code>string</code> | The sourcedId of the term |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gradingPeriodsManagement.getGradingPeriodsForTerm(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse](src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response.ts)</code>
- **OnError**: throws <code>[GradingPeriodsManagement.GetGradingPeriodsForTermError](src/resources/grading-periods-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gradingPeriodsManagement.getGradingPeriodsForTerm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse, GradingPeriodsManagement.GetGradingPeriodsForTermError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse](src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGradingPeriod(request: GradingPeriodsManagement.UpdateGradingPeriodRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GradingPeriodsManagement.UpdateGradingPeriodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Grading Period. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gradingPeriodsManagement.updateGradingPeriod({
    sourcedId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GradingPeriodsManagement.UpdateGradingPeriodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gradingPeriodsManagement.updateGradingPeriod({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the grading period to update |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2GradingPeriodsRequest](src/models/ims-oneroster-rostering-v1-p2-grading-periods-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.gradingPeriodsManagement.updateGradingPeriod(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GradingPeriodsManagement.UpdateGradingPeriodError](src/resources/grading-periods-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gradingPeriodsManagement.updateGradingPeriod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GradingPeriodsManagement.UpdateGradingPeriodError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LineItemsManagement

> Source: [LineItemsManagement](src/resources/line-items-management.ts)

<details>
<summary><code>createLineItem(request: LineItemsManagement.CreateLineItemRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2LineItemsResponse1, LineItemsManagement.CreateLineItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new Line Item. The responding system must return the set of sourcedIds that have been allocated to the newly created Line Item records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lineItemsManagement.createLineItem({
    body: {
      lineItem: {
        title: "some example string",
        assignDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        dueDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        class: { sourcedId: "some example string" },
        school: { sourcedId: "some example string" },
        category: { sourcedId: "some example string" },
      },
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2LineItemsResponse1
} catch (err) {
  // TODO: Handle 'err' of type LineItemsManagement.CreateLineItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lineItemsManagement.createLineItem({
  body: {
    lineItem: {
      title: "some example string",
      assignDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      dueDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      class: { sourcedId: "some example string" },
      school: { sourcedId: "some example string" },
      category: { sourcedId: "some example string" },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2LineItemsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2LineItemsRequest](src/models/ims-oneroster-gradebook-v1-p2-line-items-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lineItemsManagement.createLineItem(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2LineItemsResponse1](src/models/ims-oneroster-gradebook-v1-p2-line-items-response1.ts)</code>
- **OnError**: throws <code>[LineItemsManagement.CreateLineItemError](src/resources/line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lineItemsManagement.createLineItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2LineItemsResponse1, LineItemsManagement.CreateLineItemError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2LineItemsResponse1](src/models/ims-oneroster-gradebook-v1-p2-line-items-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLineItemsForSchool(request: LineItemsManagement.CreateLineItemsForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1, LineItemsManagement.CreateLineItemsForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a set of lineItems for a specific school. The responding system must return the set of sourcedIds that have been allocated to the newly created lineItem records. If the corresponding record cannot be located, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lineItemsManagement.createLineItemsForSchool({
    sourcedId: "some example string",
    body: {
      lineItems: [
        {
          title: "some example string",
          assignDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
          dueDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
          class: { sourcedId: "some example string" },
          school: { sourcedId: "some example string" },
          category: { sourcedId: "some example string" },
        },
      ],
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1
} catch (err) {
  // TODO: Handle 'err' of type LineItemsManagement.CreateLineItemsForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lineItemsManagement.createLineItemsForSchool({
  sourcedId: "some example string",
  body: {
    lineItems: [
      {
        title: "some example string",
        assignDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        dueDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        class: { sourcedId: "some example string" },
        school: { sourcedId: "some example string" },
        category: { sourcedId: "some example string" },
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the school |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2SchoolsLineItemsRequest](src/models/ims-oneroster-gradebook-v1-p2-schools-line-items-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lineItemsManagement.createLineItemsForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1](src/models/ims-oneroster-gradebook-v1-p2-schools-line-items-response1.ts)</code>
- **OnError**: throws <code>[LineItemsManagement.CreateLineItemsForSchoolError](src/resources/line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lineItemsManagement.createLineItemsForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1, LineItemsManagement.CreateLineItemsForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1](src/models/ims-oneroster-gradebook-v1-p2-schools-line-items-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createResultForLineItem(request: LineItemsManagement.CreateResultForLineItemRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2LineItemsResultsResponse, LineItemsManagement.CreateResultForLineItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new result for a specific Line Item. The responding system must return the set of sourcedIds that have been allocated to the newly created result records. If the corresponding record cannot be located, the api will return a 404 error code and message 'Line item not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lineItemsManagement.createResultForLineItem({
    sourcedId: "some example string",
    body: {
      results: [
        {
          status: Status.Active,
          lineItem: { sourcedId: "some example string" },
          student: { sourcedId: "some example string" },
          scoreStatus: ScoreStatus.Exempt,
          scoreDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        },
      ],
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2LineItemsResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type LineItemsManagement.CreateResultForLineItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lineItemsManagement.createResultForLineItem({
  sourcedId: "some example string",
  body: {
    results: [
      {
        status: Status.Active,
        lineItem: { sourcedId: "some example string" },
        student: { sourcedId: "some example string" },
        scoreStatus: ScoreStatus.Exempt,
        scoreDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2LineItemsResultsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the line item |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2LineItemsResultsRequest](src/models/ims-oneroster-gradebook-v1-p2-line-items-results-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lineItemsManagement.createResultForLineItem(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2LineItemsResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-line-items-results-response.ts)</code>
- **OnError**: throws <code>[LineItemsManagement.CreateResultForLineItemError](src/resources/line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lineItemsManagement.createResultForLineItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2LineItemsResultsResponse, LineItemsManagement.CreateResultForLineItemError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2LineItemsResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-line-items-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLineItem(request: LineItemsManagement.DeleteLineItemRequest, options?: RequestOptions): ApiPromise&lt;undefined, LineItemsManagement.DeleteLineItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Line Item on the service provider. This operation changes the status of the LineItem to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.lineItemsManagement.deleteLineItem({ sourcedId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type LineItemsManagement.DeleteLineItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lineItemsManagement.deleteLineItem({
  sourcedId: "some example string",
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the line item to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lineItemsManagement.deleteLineItem(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LineItemsManagement.DeleteLineItemError](src/resources/line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lineItemsManagement.deleteLineItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LineItemsManagement.DeleteLineItemError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllLineItems(request: LineItemsManagement.GetAllLineItemsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2LineItemsResponse, LineItemsManagement.GetAllLineItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all of the Line Items on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lineItemsManagement.getAllLineItems({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2LineItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type LineItemsManagement.GetAllLineItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lineItemsManagement.getAllLineItems({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2LineItemsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lineItemsManagement.getAllLineItems(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2LineItemsResponse](src/models/ims-oneroster-gradebook-v1-p2-line-items-response.ts)</code>
- **OnError**: throws <code>[LineItemsManagement.GetAllLineItemsError](src/resources/line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lineItemsManagement.getAllLineItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2LineItemsResponse, LineItemsManagement.GetAllLineItemsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2LineItemsResponse](src/models/ims-oneroster-gradebook-v1-p2-line-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLineItem(request: LineItemsManagement.GetLineItemRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2LineItemsResponse2, LineItemsManagement.GetLineItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Line Item on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Line item not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lineItemsManagement.getLineItem({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2LineItemsResponse2
} catch (err) {
  // TODO: Handle 'err' of type LineItemsManagement.GetLineItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lineItemsManagement.getLineItem({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2LineItemsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the line item |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lineItemsManagement.getLineItem(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2LineItemsResponse2](src/models/ims-oneroster-gradebook-v1-p2-line-items-response2.ts)</code>
- **OnError**: throws <code>[LineItemsManagement.GetLineItemError](src/resources/line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lineItemsManagement.getLineItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2LineItemsResponse2, LineItemsManagement.GetLineItemError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2LineItemsResponse2](src/models/ims-oneroster-gradebook-v1-p2-line-items-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLineItemsForSchool(request: LineItemsManagement.GetLineItemsForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2SchoolsLineItemsResponse, LineItemsManagement.GetLineItemsForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of lineItems on the service provider for a specific school. If the corresponding record cannot be located, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lineItemsManagement.getLineItemsForSchool({
    sourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type LineItemsManagement.GetLineItemsForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lineItemsManagement.getLineItemsForSchool({
  sourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the school |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lineItemsManagement.getLineItemsForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2SchoolsLineItemsResponse](src/models/ims-oneroster-gradebook-v1-p2-schools-line-items-response.ts)</code>
- **OnError**: throws <code>[LineItemsManagement.GetLineItemsForSchoolError](src/resources/line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lineItemsManagement.getLineItemsForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2SchoolsLineItemsResponse, LineItemsManagement.GetLineItemsForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2SchoolsLineItemsResponse](src/models/ims-oneroster-gradebook-v1-p2-schools-line-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLineItem(request: LineItemsManagement.UpdateLineItemRequest, options?: RequestOptions): ApiPromise&lt;undefined, LineItemsManagement.UpdateLineItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Line Item. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.lineItemsManagement.updateLineItem({
    sourcedId: "some example string",
    body: {
      lineItem: {
        title: "some example string",
        assignDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        dueDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        class: { sourcedId: "some example string" },
        school: { sourcedId: "some example string" },
        category: { sourcedId: "some example string" },
      },
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type LineItemsManagement.UpdateLineItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lineItemsManagement.updateLineItem({
  sourcedId: "some example string",
  body: {
    lineItem: {
      title: "some example string",
      assignDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      dueDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      class: { sourcedId: "some example string" },
      school: { sourcedId: "some example string" },
      category: { sourcedId: "some example string" },
    },
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the line item to update |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2LineItemsRequest](src/models/ims-oneroster-gradebook-v1-p2-line-items-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lineItemsManagement.updateLineItem(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LineItemsManagement.UpdateLineItemError](src/resources/line-items-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lineItemsManagement.updateLineItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LineItemsManagement.UpdateLineItemError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationsManagement

> Source: [OrganizationsManagement](src/resources/organizations-management.ts)

<details>
<summary><code>createOrg(request: OrganizationsManagement.CreateOrgRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2OrgsResponse1, OrganizationsManagement.CreateOrgError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new Organization. The responding system must return the set of sourcedIds that have been allocated to the newly created org record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationsManagement.createOrg();
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2OrgsResponse1
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsManagement.CreateOrgError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsManagement.createOrg().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2OrgsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2OrgsRequest](src/models/ims-oneroster-rostering-v1-p2-orgs-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsManagement.createOrg(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2OrgsResponse1](src/models/ims-oneroster-rostering-v1-p2-orgs-response1.ts)</code>
- **OnError**: throws <code>[OrganizationsManagement.CreateOrgError](src/resources/organizations-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsManagement.createOrg(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2OrgsResponse1, OrganizationsManagement.CreateOrgError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2OrgsResponse1](src/models/ims-oneroster-rostering-v1-p2-orgs-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteOrg(request: OrganizationsManagement.DeleteOrgRequest, options?: RequestOptions): ApiPromise&lt;undefined, OrganizationsManagement.DeleteOrgError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Organization on the service provider. The operation changes the status of the Organization to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.organizationsManagement.deleteOrg({ sourcedId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsManagement.DeleteOrgError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsManagement.deleteOrg({
  sourcedId: "some example string",
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the organization to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsManagement.deleteOrg(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[OrganizationsManagement.DeleteOrgError](src/resources/organizations-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsManagement.deleteOrg(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, OrganizationsManagement.DeleteOrgError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllOrgs(request: OrganizationsManagement.GetAllOrgsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2OrgsResponse, OrganizationsManagement.GetAllOrgsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Organizations on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationsManagement.getAllOrgs({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2OrgsResponse
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsManagement.GetAllOrgsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsManagement.getAllOrgs({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2OrgsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsManagement.getAllOrgs(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2OrgsResponse](src/models/ims-oneroster-rostering-v1-p2-orgs-response.ts)</code>
- **OnError**: throws <code>[OrganizationsManagement.GetAllOrgsError](src/resources/organizations-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsManagement.getAllOrgs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2OrgsResponse, OrganizationsManagement.GetAllOrgsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2OrgsResponse](src/models/ims-oneroster-rostering-v1-p2-orgs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrg(request: OrganizationsManagement.GetOrgRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2OrgsResponse2, OrganizationsManagement.GetOrgError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific Organization on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Organization not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationsManagement.getOrg({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2OrgsResponse2
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsManagement.GetOrgError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsManagement.getOrg({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2OrgsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the organization to retrieve |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsManagement.getOrg(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2OrgsResponse2](src/models/ims-oneroster-rostering-v1-p2-orgs-response2.ts)</code>
- **OnError**: throws <code>[OrganizationsManagement.GetOrgError](src/resources/organizations-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsManagement.getOrg(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2OrgsResponse2, OrganizationsManagement.GetOrgError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2OrgsResponse2](src/models/ims-oneroster-rostering-v1-p2-orgs-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOrg(request: OrganizationsManagement.UpdateOrgRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, OrganizationsManagement.UpdateOrgError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing Organization. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationsManagement.updateOrg({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsManagement.UpdateOrgError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsManagement.updateOrg({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the organization to update |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2OrgsRequest](src/models/ims-oneroster-rostering-v1-p2-orgs-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsManagement.updateOrg(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[OrganizationsManagement.UpdateOrgError](src/resources/organizations-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsManagement.updateOrg(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, OrganizationsManagement.UpdateOrgError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ResourcesManagement

> Source: [ResourcesManagement](src/resources/resources-management.ts)

<details>
<summary><code>createResource(request: ResourcesManagement.CreateResourceRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterResourcesV1P2ResourcesResponse1, ResourcesManagement.CreateResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new resource. The responding system must return the set of sourcedIds that have been allocated to the newly created resource record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resourcesManagement.createResource({
    body: { resource: { title: "some example string", vendorResourceId: "some example string" } },
  });
  // TODO: Handle 'response' of type ImsOnerosterResourcesV1P2ResourcesResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResourcesManagement.CreateResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourcesManagement.createResource({
  body: { resource: { title: "some example string", vendorResourceId: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterResourcesV1P2ResourcesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ImsOnerosterResourcesV1P2ResourcesRequest](src/models/ims-oneroster-resources-v1-p2-resources-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourcesManagement.createResource(request)`

- **OnSuccess**: <code>[ImsOnerosterResourcesV1P2ResourcesResponse1](src/models/ims-oneroster-resources-v1-p2-resources-response1.ts)</code>
- **OnError**: throws <code>[ResourcesManagement.CreateResourceError](src/resources/resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourcesManagement.createResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterResourcesV1P2ResourcesResponse1, ResourcesManagement.CreateResourceError&gt;</code>, with `result.value` of type <code>[ImsOnerosterResourcesV1P2ResourcesResponse1](src/models/ims-oneroster-resources-v1-p2-resources-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteResource(request: ResourcesManagement.DeleteResourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResourcesManagement.DeleteResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific resource. This operation changes the status of the resource to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.resourcesManagement.deleteResource({ sourcedId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ResourcesManagement.DeleteResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourcesManagement.deleteResource({
  sourcedId: "some example string",
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the resource to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourcesManagement.deleteResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ResourcesManagement.DeleteResourceError](src/resources/resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourcesManagement.deleteResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ResourcesManagement.DeleteResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exportResourceToCommonCartridge(request: ResourcesManagement.ExportResourceToCommonCartridgeRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResourcesManagement.ExportResourceToCommonCartridgeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Export a resource to Common Cartridge (.imscc) format for import into LMS systems.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.resourcesManagement.exportResourceToCommonCartridge({ sourceId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ResourcesManagement.ExportResourceToCommonCartridgeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourcesManagement.exportResourceToCommonCartridge({
  sourceId: "some example string",
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
| <code>sourceId</code> | <code>string</code> | The sourcedId of the resource to export |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourcesManagement.exportResourceToCommonCartridge(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ResourcesManagement.ExportResourceToCommonCartridgeError](src/resources/resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourcesManagement.exportResourceToCommonCartridge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ResourcesManagement.ExportResourceToCommonCartridgeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllResources(request: ResourcesManagement.GetAllResourcesRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterResourcesV1P2ResourcesResponse, ResourcesManagement.GetAllResourcesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get a collection of resources that exist on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resourcesManagement.getAllResources({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterResourcesV1P2ResourcesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResourcesManagement.GetAllResourcesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourcesManagement.getAllResources({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterResourcesV1P2ResourcesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourcesManagement.getAllResources(request)`

- **OnSuccess**: <code>[ImsOnerosterResourcesV1P2ResourcesResponse](src/models/ims-oneroster-resources-v1-p2-resources-response.ts)</code>
- **OnError**: throws <code>[ResourcesManagement.GetAllResourcesError](src/resources/resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourcesManagement.getAllResources(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterResourcesV1P2ResourcesResponse, ResourcesManagement.GetAllResourcesError&gt;</code>, with `result.value` of type <code>[ImsOnerosterResourcesV1P2ResourcesResponse](src/models/ims-oneroster-resources-v1-p2-resources-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResource(request: ResourcesManagement.GetResourceRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterResourcesV1P2ResourcesResponse2, ResourcesManagement.GetResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get a specific resource by sourcedId. If the corresponding record cannot be located, the api will return a 404 error code and message 'Resource not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resourcesManagement.getResource({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterResourcesV1P2ResourcesResponse2
} catch (err) {
  // TODO: Handle 'err' of type ResourcesManagement.GetResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourcesManagement.getResource({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterResourcesV1P2ResourcesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the resource |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourcesManagement.getResource(request)`

- **OnSuccess**: <code>[ImsOnerosterResourcesV1P2ResourcesResponse2](src/models/ims-oneroster-resources-v1-p2-resources-response2.ts)</code>
- **OnError**: throws <code>[ResourcesManagement.GetResourceError](src/resources/resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourcesManagement.getResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterResourcesV1P2ResourcesResponse2, ResourcesManagement.GetResourceError&gt;</code>, with `result.value` of type <code>[ImsOnerosterResourcesV1P2ResourcesResponse2](src/models/ims-oneroster-resources-v1-p2-resources-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResourcesForClass(request: ResourcesManagement.GetResourcesForClassRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterResourcesV1P2ResourcesClassesResourcesResponse, ResourcesManagement.GetResourcesForClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the collection of resources available to a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resourcesManagement.getResourcesForClass({
    classSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterResourcesV1P2ResourcesClassesResourcesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResourcesManagement.GetResourcesForClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourcesManagement.getResourcesForClass({
  classSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterResourcesV1P2ResourcesClassesResourcesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>classSourcedId</code> | <code>string</code> | The sourcedId of the class |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourcesManagement.getResourcesForClass(request)`

- **OnSuccess**: <code>[ImsOnerosterResourcesV1P2ResourcesClassesResourcesResponse](src/models/ims-oneroster-resources-v1-p2-resources-classes-resources-response.ts)</code>
- **OnError**: throws <code>[ResourcesManagement.GetResourcesForClassError](src/resources/resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourcesManagement.getResourcesForClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterResourcesV1P2ResourcesClassesResourcesResponse, ResourcesManagement.GetResourcesForClassError&gt;</code>, with `result.value` of type <code>[ImsOnerosterResourcesV1P2ResourcesClassesResourcesResponse](src/models/ims-oneroster-resources-v1-p2-resources-classes-resources-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResourcesForCourse(request: ResourcesManagement.GetResourcesForCourseRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterResourcesV1P2ResourcesCoursesResourcesResponse, ResourcesManagement.GetResourcesForCourseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the collection of resources assigned to a specific course. If the corresponding record cannot be located, the api will return a 404 error code and message 'Course not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resourcesManagement.getResourcesForCourse({
    courseSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterResourcesV1P2ResourcesCoursesResourcesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResourcesManagement.GetResourcesForCourseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourcesManagement.getResourcesForCourse({
  courseSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterResourcesV1P2ResourcesCoursesResourcesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>courseSourcedId</code> | <code>string</code> | The sourcedId of the course |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourcesManagement.getResourcesForCourse(request)`

- **OnSuccess**: <code>[ImsOnerosterResourcesV1P2ResourcesCoursesResourcesResponse](src/models/ims-oneroster-resources-v1-p2-resources-courses-resources-response.ts)</code>
- **OnError**: throws <code>[ResourcesManagement.GetResourcesForCourseError](src/resources/resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourcesManagement.getResourcesForCourse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterResourcesV1P2ResourcesCoursesResourcesResponse, ResourcesManagement.GetResourcesForCourseError&gt;</code>, with `result.value` of type <code>[ImsOnerosterResourcesV1P2ResourcesCoursesResourcesResponse](src/models/ims-oneroster-resources-v1-p2-resources-courses-resources-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResourcesForUser(request: ResourcesManagement.GetResourcesForUserRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterResourcesV1P2ResourcesUsersResourcesResponse, ResourcesManagement.GetResourcesForUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the collection of resources available to a specific user. If the corresponding record cannot be located, the api will return a 404 error code and message 'User not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resourcesManagement.getResourcesForUser({
    userSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterResourcesV1P2ResourcesUsersResourcesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResourcesManagement.GetResourcesForUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourcesManagement.getResourcesForUser({
  userSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterResourcesV1P2ResourcesUsersResourcesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userSourcedId</code> | <code>string</code> | The sourcedId of the user |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourcesManagement.getResourcesForUser(request)`

- **OnSuccess**: <code>[ImsOnerosterResourcesV1P2ResourcesUsersResourcesResponse](src/models/ims-oneroster-resources-v1-p2-resources-users-resources-response.ts)</code>
- **OnError**: throws <code>[ResourcesManagement.GetResourcesForUserError](src/resources/resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourcesManagement.getResourcesForUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterResourcesV1P2ResourcesUsersResourcesResponse, ResourcesManagement.GetResourcesForUserError&gt;</code>, with `result.value` of type <code>[ImsOnerosterResourcesV1P2ResourcesUsersResourcesResponse](src/models/ims-oneroster-resources-v1-p2-resources-users-resources-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateResource(request: ResourcesManagement.UpdateResourceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ResourcesManagement.UpdateResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing resource. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resourcesManagement.updateResource({
    sourcedId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ResourcesManagement.UpdateResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourcesManagement.updateResource({
  sourcedId: "some example string",
  body: {},
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the resource to update |
| <code>body</code> | <code>[ImsOnerosterResourcesV1P2ResourcesRequest1](src/models/ims-oneroster-resources-v1-p2-resources-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourcesManagement.updateResource(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ResourcesManagement.UpdateResourceError](src/resources/resources-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourcesManagement.updateResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ResourcesManagement.UpdateResourceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ResultsManagement

> Source: [ResultsManagement](src/resources/results-management.ts)

<details>
<summary><code>createResult(request: ResultsManagement.CreateResultRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ResultsResponse1, ResultsManagement.CreateResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new result. The request body must include a `result` object with the following required fields: `lineItem` (with sourcedId), `student` (with sourcedId), `scoreStatus`, and `scoreDate`. The responding system must return the set of sourcedIds that have been allocated to the newly created result records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resultsManagement.createResult({
    body: {
      result: {
        status: Status.Active,
        lineItem: { sourcedId: "some example string" },
        student: { sourcedId: "some example string" },
        scoreStatus: ScoreStatus.Exempt,
        scoreDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      },
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ResultsResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResultsManagement.CreateResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resultsManagement.createResult({
  body: {
    result: {
      status: Status.Active,
      lineItem: { sourcedId: "some example string" },
      student: { sourcedId: "some example string" },
      scoreStatus: ScoreStatus.Exempt,
      scoreDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ResultsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2ResultsRequest](src/models/ims-oneroster-gradebook-v1-p2-results-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resultsManagement.createResult(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ResultsResponse1](src/models/ims-oneroster-gradebook-v1-p2-results-response1.ts)</code>
- **OnError**: throws <code>[ResultsManagement.CreateResultError](src/resources/results-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resultsManagement.createResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ResultsResponse1, ResultsManagement.CreateResultError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ResultsResponse1](src/models/ims-oneroster-gradebook-v1-p2-results-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteResult(request: ResultsManagement.DeleteResultRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResultsManagement.DeleteResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific Result on the service provider. This operation changes the status of the Result to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.resultsManagement.deleteResult({ sourcedId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ResultsManagement.DeleteResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resultsManagement.deleteResult({
  sourcedId: "some example string",
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the result to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resultsManagement.deleteResult(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ResultsManagement.DeleteResultError](src/resources/results-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resultsManagement.deleteResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ResultsManagement.DeleteResultError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllResults(request: ResultsManagement.GetAllResultsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ResultsResponse, ResultsManagement.GetAllResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all of the results on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resultsManagement.getAllResults({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResultsManagement.GetAllResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resultsManagement.getAllResults({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ResultsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resultsManagement.getAllResults(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-results-response.ts)</code>
- **OnError**: throws <code>[ResultsManagement.GetAllResultsError](src/resources/results-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resultsManagement.getAllResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ResultsResponse, ResultsManagement.GetAllResultsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ResultsResponse](src/models/ims-oneroster-gradebook-v1-p2-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResult(request: ResultsManagement.GetResultRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ResultsResponse2, ResultsManagement.GetResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific result on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Result not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resultsManagement.getResult({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ResultsResponse2
} catch (err) {
  // TODO: Handle 'err' of type ResultsManagement.GetResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resultsManagement.getResult({ sourcedId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ResultsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the result |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resultsManagement.getResult(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ResultsResponse2](src/models/ims-oneroster-gradebook-v1-p2-results-response2.ts)</code>
- **OnError**: throws <code>[ResultsManagement.GetResultError](src/resources/results-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resultsManagement.getResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ResultsResponse2, ResultsManagement.GetResultError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ResultsResponse2](src/models/ims-oneroster-gradebook-v1-p2-results-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateResult(request: ResultsManagement.UpdateResultRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ResultsResponse2, ResultsManagement.UpdateResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing result. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resultsManagement.updateResult({
    sourcedId: "some example string",
    body: {
      result: {
        status: Status.Active,
        lineItem: { sourcedId: "some example string" },
        student: { sourcedId: "some example string" },
        scoreStatus: ScoreStatus.Exempt,
        scoreDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      },
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ResultsResponse2
} catch (err) {
  // TODO: Handle 'err' of type ResultsManagement.UpdateResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resultsManagement.updateResult({
  sourcedId: "some example string",
  body: {
    result: {
      status: Status.Active,
      lineItem: { sourcedId: "some example string" },
      student: { sourcedId: "some example string" },
      scoreStatus: ScoreStatus.Exempt,
      scoreDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ResultsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the result to update |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2ResultsRequest](src/models/ims-oneroster-gradebook-v1-p2-results-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resultsManagement.updateResult(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ResultsResponse2](src/models/ims-oneroster-gradebook-v1-p2-results-response2.ts)</code>
- **OnError**: throws <code>[ResultsManagement.UpdateResultError](src/resources/results-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resultsManagement.updateResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ResultsResponse2, ResultsManagement.UpdateResultError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ResultsResponse2](src/models/ims-oneroster-gradebook-v1-p2-results-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SchoolsManagement

> Source: [SchoolsManagement](src/resources/schools-management.ts)

<details>
<summary><code>createLineItemsForSchool(request: SchoolsManagement.CreateLineItemsForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1, SchoolsManagement.CreateLineItemsForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a set of lineItems for a specific school. The responding system must return the set of sourcedIds that have been allocated to the newly created lineItem records. If the corresponding record cannot be located, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.createLineItemsForSchool({
    sourcedId: "some example string",
    body: {
      lineItems: [
        {
          title: "some example string",
          assignDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
          dueDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
          class: { sourcedId: "some example string" },
          school: { sourcedId: "some example string" },
          category: { sourcedId: "some example string" },
        },
      ],
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.CreateLineItemsForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.createLineItemsForSchool({
  sourcedId: "some example string",
  body: {
    lineItems: [
      {
        title: "some example string",
        assignDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        dueDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        class: { sourcedId: "some example string" },
        school: { sourcedId: "some example string" },
        category: { sourcedId: "some example string" },
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the school |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2SchoolsLineItemsRequest](src/models/ims-oneroster-gradebook-v1-p2-schools-line-items-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.createLineItemsForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1](src/models/ims-oneroster-gradebook-v1-p2-schools-line-items-response1.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.CreateLineItemsForSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.createLineItemsForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1, SchoolsManagement.CreateLineItemsForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2SchoolsLineItemsResponse1](src/models/ims-oneroster-gradebook-v1-p2-schools-line-items-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSchool(request: SchoolsManagement.CreateSchoolRequest, options?: RequestOptions): ApiPromise&lt;Org, SchoolsManagement.CreateSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new School. The responding system must return the set of sourcedIds that have been allocated to the newly created school record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.createSchool();
  // TODO: Handle 'response' of type Org
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.CreateSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.createSchool().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Org
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2SchoolsRequest](src/models/ims-oneroster-rostering-v1-p2-schools-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.createSchool(request)`

- **OnSuccess**: <code>[Org](src/models/org.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.CreateSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.createSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Org, SchoolsManagement.CreateSchoolError&gt;</code>, with `result.value` of type <code>[Org](src/models/org.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSchool(request: SchoolsManagement.DeleteSchoolRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, SchoolsManagement.DeleteSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific School on the service provider. The operation changes the status of the School to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.deleteSchool({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.DeleteSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.deleteSchool({
  sourcedId: "some example string",
}).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | School sourced ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.deleteSchool(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[SchoolsManagement.DeleteSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.deleteSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, SchoolsManagement.DeleteSchoolError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllSchools(request: SchoolsManagement.GetAllSchoolsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsResponse, SchoolsManagement.GetAllSchoolsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Schools on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getAllSchools({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsResponse
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetAllSchoolsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getAllSchools({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getAllSchools(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-response.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetAllSchoolsError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getAllSchools(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsResponse, SchoolsManagement.GetAllSchoolsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassesForSchool(request: SchoolsManagement.GetClassesForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsClassesResponse, SchoolsManagement.GetClassesForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Classes for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getClassesForSchool({
    schoolSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetClassesForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getClassesForSchool({
  schoolSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getClassesForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsClassesResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-response.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetClassesForSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getClassesForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsClassesResponse, SchoolsManagement.GetClassesForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsClassesResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCoursesForSchool(request: SchoolsManagement.GetCoursesForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsCoursesResponse, SchoolsManagement.GetCoursesForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Courses for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getCoursesForSchool({
    schoolSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsCoursesResponse
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetCoursesForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getCoursesForSchool({
  schoolSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsCoursesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getCoursesForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsCoursesResponse](src/models/ims-oneroster-rostering-v1-p2-schools-courses-response.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetCoursesForSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getCoursesForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsCoursesResponse, SchoolsManagement.GetCoursesForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsCoursesResponse](src/models/ims-oneroster-rostering-v1-p2-schools-courses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEnrollmentsForClassInSchool(request: SchoolsManagement.GetEnrollmentsForClassInSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse, SchoolsManagement.GetEnrollmentsForClassInSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Enrollments for a Class in a School on the service provider. If the specified school and/or class cannot be identified within the service provider, the api will return a 404 error code and message 'School or class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getEnrollmentsForClassInSchool({
    schoolSourcedId: "some example string",
    classSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetEnrollmentsForClassInSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getEnrollmentsForClassInSchool({
  schoolSourcedId: "some example string",
  classSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>classSourcedId</code> | <code>string</code> | Class sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getEnrollmentsForClassInSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-enrollments-response.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetEnrollmentsForClassInSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getEnrollmentsForClassInSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse, SchoolsManagement.GetEnrollmentsForClassInSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsClassesEnrollmentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-enrollments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEnrollmentsForSchool(request: SchoolsManagement.GetEnrollmentsForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse, SchoolsManagement.GetEnrollmentsForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Enrollments for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getEnrollmentsForSchool({
    schoolSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetEnrollmentsForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getEnrollmentsForSchool({
  schoolSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getEnrollmentsForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-enrollments-response.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetEnrollmentsForSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getEnrollmentsForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse, SchoolsManagement.GetEnrollmentsForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsEnrollmentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-enrollments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLineItemsForSchool(request: SchoolsManagement.GetLineItemsForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2SchoolsLineItemsResponse, SchoolsManagement.GetLineItemsForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of lineItems on the service provider for a specific school. If the corresponding record cannot be located, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getLineItemsForSchool({
    sourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetLineItemsForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getLineItemsForSchool({
  sourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the school |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getLineItemsForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2SchoolsLineItemsResponse](src/models/ims-oneroster-gradebook-v1-p2-schools-line-items-response.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetLineItemsForSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getLineItemsForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2SchoolsLineItemsResponse, SchoolsManagement.GetLineItemsForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2SchoolsLineItemsResponse](src/models/ims-oneroster-gradebook-v1-p2-schools-line-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSchool(request: SchoolsManagement.GetSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsResponse1, SchoolsManagement.GetSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific School on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getSchool({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsResponse1
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getSchool({ sourcedId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | School sourced ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsResponse1](src/models/ims-oneroster-rostering-v1-p2-schools-response1.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsResponse1, SchoolsManagement.GetSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsResponse1](src/models/ims-oneroster-rostering-v1-p2-schools-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScoreScalesForSchool(request: SchoolsManagement.GetScoreScalesForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse, SchoolsManagement.GetScoreScalesForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of scoreScales on the service provider for a specific school. If the corresponding record cannot be located, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getScoreScalesForSchool({
    sourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetScoreScalesForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getScoreScalesForSchool({
  sourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the school |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getScoreScalesForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse](src/models/ims-oneroster-gradebook-v1-p2-schools-score-scales-response.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetScoreScalesForSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getScoreScalesForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse, SchoolsManagement.GetScoreScalesForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse](src/models/ims-oneroster-gradebook-v1-p2-schools-score-scales-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStudentsForClassInSchool(request: SchoolsManagement.GetStudentsForClassInSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse, SchoolsManagement.GetStudentsForClassInSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Students for a Class in a School on the service provider. If the specified school and/or class cannot be identified within the service provider, the api will return a 404 error code and message 'School or class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getStudentsForClassInSchool({
    schoolSourcedId: "some example string",
    classSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetStudentsForClassInSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getStudentsForClassInSchool({
  schoolSourcedId: "some example string",
  classSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>classSourcedId</code> | <code>string</code> | Class sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getStudentsForClassInSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-students-response.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetStudentsForClassInSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getStudentsForClassInSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse, SchoolsManagement.GetStudentsForClassInSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsClassesStudentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-students-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStudentsForSchool(request: SchoolsManagement.GetStudentsForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsStudentsResponse, SchoolsManagement.GetStudentsForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Students for a School on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getStudentsForSchool({
    schoolSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsStudentsResponse
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetStudentsForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getStudentsForSchool({
  schoolSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsStudentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getStudentsForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsStudentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-students-response.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetStudentsForSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getStudentsForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsStudentsResponse, SchoolsManagement.GetStudentsForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsStudentsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-students-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeachersForClassInSchool(request: SchoolsManagement.GetTeachersForClassInSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse, SchoolsManagement.GetTeachersForClassInSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Teachers for a Class in a School on the service provider. If the specified school and/or class cannot be identified within the service provider, the api will return a 404 error code and message 'School or class not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getTeachersForClassInSchool({
    schoolSourcedId: "some example string",
    classSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetTeachersForClassInSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getTeachersForClassInSchool({
  schoolSourcedId: "some example string",
  classSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>classSourcedId</code> | <code>string</code> | Class sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getTeachersForClassInSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-teachers-response.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetTeachersForClassInSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getTeachersForClassInSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse, SchoolsManagement.GetTeachersForClassInSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse](src/models/ims-oneroster-rostering-v1-p2-schools-classes-teachers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeachersForSchool(request: SchoolsManagement.GetTeachersForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsTeachersResponse, SchoolsManagement.GetTeachersForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Teachers for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getTeachersForSchool({
    schoolSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsTeachersResponse
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetTeachersForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getTeachersForSchool({
  schoolSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsTeachersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getTeachersForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsTeachersResponse](src/models/ims-oneroster-rostering-v1-p2-schools-teachers-response.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetTeachersForSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getTeachersForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsTeachersResponse, SchoolsManagement.GetTeachersForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsTeachersResponse](src/models/ims-oneroster-rostering-v1-p2-schools-teachers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTermsForSchool(request: SchoolsManagement.GetTermsForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsTermsResponse, SchoolsManagement.GetTermsForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Terms for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.getTermsForSchool({
    schoolSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsTermsResponse
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.GetTermsForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.getTermsForSchool({
  schoolSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsTermsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.getTermsForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsTermsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-terms-response.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.GetTermsForSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.getTermsForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsTermsResponse, SchoolsManagement.GetTermsForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsTermsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-terms-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSchool(request: SchoolsManagement.UpdateSchoolRequest, options?: RequestOptions): ApiPromise&lt;Org, SchoolsManagement.UpdateSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing School. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schoolsManagement.updateSchool({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type Org
} catch (err) {
  // TODO: Handle 'err' of type SchoolsManagement.UpdateSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schoolsManagement.updateSchool({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Org
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | School sourced ID |
| <code>body?</code> | <code>[ImsOnerosterRosteringV1P2SchoolsRequest](src/models/ims-oneroster-rostering-v1-p2-schools-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schoolsManagement.updateSchool(request)`

- **OnSuccess**: <code>[Org](src/models/org.ts)</code>
- **OnError**: throws <code>[SchoolsManagement.UpdateSchoolError](src/resources/schools-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schoolsManagement.updateSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Org, SchoolsManagement.UpdateSchoolError&gt;</code>, with `result.value` of type <code>[Org](src/models/org.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ScoreScalesManagement

> Source: [ScoreScalesManagement](src/resources/score-scales-management.ts)

<details>
<summary><code>createScoreScale(request: ScoreScalesManagement.CreateScoreScaleRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ScoreScalesResponse1, ScoreScalesManagement.CreateScoreScaleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new scoreScale. The responding system must return the set of sourcedIds that have been allocated to the newly created scoreScale records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scoreScalesManagement.createScoreScale({
    body: {
      scoreScale: {
        status: Status.Active,
        title: "some example string",
        type: "some example string",
        class: { sourcedId: "some example string" },
        scoreScaleValue: [{ itemValueLhs: "some example string", itemValueRhs: "some example string" }],
      },
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ScoreScalesResponse1
} catch (err) {
  // TODO: Handle 'err' of type ScoreScalesManagement.CreateScoreScaleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scoreScalesManagement.createScoreScale({
  body: {
    scoreScale: {
      status: Status.Active,
      title: "some example string",
      type: "some example string",
      class: { sourcedId: "some example string" },
      scoreScaleValue: [{ itemValueLhs: "some example string", itemValueRhs: "some example string" }],
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ScoreScalesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2ScoreScalesRequest](src/models/ims-oneroster-gradebook-v1-p2-score-scales-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scoreScalesManagement.createScoreScale(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ScoreScalesResponse1](src/models/ims-oneroster-gradebook-v1-p2-score-scales-response1.ts)</code>
- **OnError**: throws <code>[ScoreScalesManagement.CreateScoreScaleError](src/resources/score-scales-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scoreScalesManagement.createScoreScale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ScoreScalesResponse1, ScoreScalesManagement.CreateScoreScaleError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ScoreScalesResponse1](src/models/ims-oneroster-gradebook-v1-p2-score-scales-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteScoreScale(request: ScoreScalesManagement.DeleteScoreScaleRequest, options?: RequestOptions): ApiPromise&lt;undefined, ScoreScalesManagement.DeleteScoreScaleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific ScoreScale on the service provider. This operation changes the status of the ScoreScale to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scoreScalesManagement.deleteScoreScale({ sourcedId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ScoreScalesManagement.DeleteScoreScaleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scoreScalesManagement.deleteScoreScale({
  sourcedId: "some example string",
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the score scale to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scoreScalesManagement.deleteScoreScale(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ScoreScalesManagement.DeleteScoreScaleError](src/resources/score-scales-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scoreScalesManagement.deleteScoreScale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ScoreScalesManagement.DeleteScoreScaleError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllScoreScales(request: ScoreScalesManagement.GetAllScoreScalesRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ScoreScalesResponse, ScoreScalesManagement.GetAllScoreScalesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all of the ScoreScales on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scoreScalesManagement.getAllScoreScales({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ScoreScalesResponse
} catch (err) {
  // TODO: Handle 'err' of type ScoreScalesManagement.GetAllScoreScalesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scoreScalesManagement.getAllScoreScales({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ScoreScalesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scoreScalesManagement.getAllScoreScales(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ScoreScalesResponse](src/models/ims-oneroster-gradebook-v1-p2-score-scales-response.ts)</code>
- **OnError**: throws <code>[ScoreScalesManagement.GetAllScoreScalesError](src/resources/score-scales-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scoreScalesManagement.getAllScoreScales(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ScoreScalesResponse, ScoreScalesManagement.GetAllScoreScalesError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ScoreScalesResponse](src/models/ims-oneroster-gradebook-v1-p2-score-scales-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScoreScale(request: ScoreScalesManagement.GetScoreScaleRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ScoreScalesResponse2, ScoreScalesManagement.GetScoreScaleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific scoreScale on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scoreScalesManagement.getScoreScale({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ScoreScalesResponse2
} catch (err) {
  // TODO: Handle 'err' of type ScoreScalesManagement.GetScoreScaleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scoreScalesManagement.getScoreScale({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ScoreScalesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the score scale |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scoreScalesManagement.getScoreScale(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ScoreScalesResponse2](src/models/ims-oneroster-gradebook-v1-p2-score-scales-response2.ts)</code>
- **OnError**: throws <code>[ScoreScalesManagement.GetScoreScaleError](src/resources/score-scales-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scoreScalesManagement.getScoreScale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ScoreScalesResponse2, ScoreScalesManagement.GetScoreScaleError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ScoreScalesResponse2](src/models/ims-oneroster-gradebook-v1-p2-score-scales-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScoreScalesForSchool(request: ScoreScalesManagement.GetScoreScalesForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse, ScoreScalesManagement.GetScoreScalesForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the set of scoreScales on the service provider for a specific school. If the corresponding record cannot be located, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scoreScalesManagement.getScoreScalesForSchool({
    sourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse
} catch (err) {
  // TODO: Handle 'err' of type ScoreScalesManagement.GetScoreScalesForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scoreScalesManagement.getScoreScalesForSchool({
  sourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the school |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scoreScalesManagement.getScoreScalesForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse](src/models/ims-oneroster-gradebook-v1-p2-schools-score-scales-response.ts)</code>
- **OnError**: throws <code>[ScoreScalesManagement.GetScoreScalesForSchoolError](src/resources/score-scales-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scoreScalesManagement.getScoreScalesForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse, ScoreScalesManagement.GetScoreScalesForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse](src/models/ims-oneroster-gradebook-v1-p2-schools-score-scales-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateScoreScale(request: ScoreScalesManagement.UpdateScoreScaleRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterGradebookV1P2ScoreScalesResponse2, ScoreScalesManagement.UpdateScoreScaleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing scoreScale. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scoreScalesManagement.updateScoreScale({
    sourcedId: "some example string",
    body: {
      scoreScale: {
        status: Status.Active,
        title: "some example string",
        type: "some example string",
        class: { sourcedId: "some example string" },
        scoreScaleValue: [{ itemValueLhs: "some example string", itemValueRhs: "some example string" }],
      },
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterGradebookV1P2ScoreScalesResponse2
} catch (err) {
  // TODO: Handle 'err' of type ScoreScalesManagement.UpdateScoreScaleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scoreScalesManagement.updateScoreScale({
  sourcedId: "some example string",
  body: {
    scoreScale: {
      status: Status.Active,
      title: "some example string",
      type: "some example string",
      class: { sourcedId: "some example string" },
      scoreScaleValue: [{ itemValueLhs: "some example string", itemValueRhs: "some example string" }],
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterGradebookV1P2ScoreScalesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the score scale to update |
| <code>body</code> | <code>[ImsOnerosterGradebookV1P2ScoreScalesRequest](src/models/ims-oneroster-gradebook-v1-p2-score-scales-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scoreScalesManagement.updateScoreScale(request)`

- **OnSuccess**: <code>[ImsOnerosterGradebookV1P2ScoreScalesResponse2](src/models/ims-oneroster-gradebook-v1-p2-score-scales-response2.ts)</code>
- **OnError**: throws <code>[ScoreScalesManagement.UpdateScoreScaleError](src/resources/score-scales-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scoreScalesManagement.updateScoreScale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterGradebookV1P2ScoreScalesResponse2, ScoreScalesManagement.UpdateScoreScaleError&gt;</code>, with `result.value` of type <code>[ImsOnerosterGradebookV1P2ScoreScalesResponse2](src/models/ims-oneroster-gradebook-v1-p2-score-scales-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TermsManagement

> Source: [TermsManagement](src/resources/terms-management.ts)

<details>
<summary><code>createGradingPeriodForTerm(request: TermsManagement.CreateGradingPeriodForTermRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1, TermsManagement.CreateGradingPeriodForTermError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new Grading Period for a Term. A Grading Period is a type of Academic Session. The responding system must return the set of sourcedIds that have been allocated to the newly created academicSession record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.termsManagement.createGradingPeriodForTerm({
    termSourcedId: "some example string",
    body: {
      academicSession: {
        sourcedId: "some example string",
        status: Status.Active,
        title: "some example string",
        startDate: "some example string",
        endDate: "some example string",
        schoolYear: "some example string",
        org: { sourcedId: "some example string" },
        tenantId: "some example string",
        clientAppId: "some example string",
      },
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1
} catch (err) {
  // TODO: Handle 'err' of type TermsManagement.CreateGradingPeriodForTermError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.termsManagement.createGradingPeriodForTerm({
  termSourcedId: "some example string",
  body: {
    academicSession: {
      sourcedId: "some example string",
      status: Status.Active,
      title: "some example string",
      startDate: "some example string",
      endDate: "some example string",
      schoolYear: "some example string",
      org: { sourcedId: "some example string" },
      tenantId: "some example string",
      clientAppId: "some example string",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>termSourcedId</code> | <code>string</code> | The sourcedId of the term |
| <code>body</code> | <code>[ImsOnerosterRosteringV1P2TermsGradingPeriodsRequest](src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.termsManagement.createGradingPeriodForTerm(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1](src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response1.ts)</code>
- **OnError**: throws <code>[TermsManagement.CreateGradingPeriodForTermError](src/resources/terms-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.termsManagement.createGradingPeriodForTerm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1, TermsManagement.CreateGradingPeriodForTermError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1](src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllTerms(request: TermsManagement.GetAllTermsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2TermsResponse, TermsManagement.GetAllTermsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Terms on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.termsManagement.getAllTerms({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2TermsResponse
} catch (err) {
  // TODO: Handle 'err' of type TermsManagement.GetAllTermsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.termsManagement.getAllTerms({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2TermsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.termsManagement.getAllTerms(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2TermsResponse](src/models/ims-oneroster-rostering-v1-p2-terms-response.ts)</code>
- **OnError**: throws <code>[TermsManagement.GetAllTermsError](src/resources/terms-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.termsManagement.getAllTerms(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2TermsResponse, TermsManagement.GetAllTermsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2TermsResponse](src/models/ims-oneroster-rostering-v1-p2-terms-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassesForTerm(request: TermsManagement.GetClassesForTermRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2TermsClassesResponse, TermsManagement.GetClassesForTermError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the set of Classes related to a specific Term. If the specified term cannot be identified within the service provider, the api will return a 404 error code and message 'Term not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.termsManagement.getClassesForTerm({
    termSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2TermsClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type TermsManagement.GetClassesForTermError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.termsManagement.getClassesForTerm({
  termSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2TermsClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>termSourcedId</code> | <code>string</code> | The sourcedId of the term |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.termsManagement.getClassesForTerm(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2TermsClassesResponse](src/models/ims-oneroster-rostering-v1-p2-terms-classes-response.ts)</code>
- **OnError**: throws <code>[TermsManagement.GetClassesForTermError](src/resources/terms-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.termsManagement.getClassesForTerm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2TermsClassesResponse, TermsManagement.GetClassesForTermError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2TermsClassesResponse](src/models/ims-oneroster-rostering-v1-p2-terms-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGradingPeriodsForTerm(request: TermsManagement.GetGradingPeriodsForTermRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse, TermsManagement.GetGradingPeriodsForTermError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the set of Grading Periods related to a specific Term. If the specified Term cannot be identified within the service provider, the api will return a 404 error code and message 'Term not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.termsManagement.getGradingPeriodsForTerm({
    termSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse
} catch (err) {
  // TODO: Handle 'err' of type TermsManagement.GetGradingPeriodsForTermError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.termsManagement.getGradingPeriodsForTerm({
  termSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>termSourcedId</code> | <code>string</code> | The sourcedId of the term |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.termsManagement.getGradingPeriodsForTerm(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse](src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response.ts)</code>
- **OnError**: throws <code>[TermsManagement.GetGradingPeriodsForTermError](src/resources/terms-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.termsManagement.getGradingPeriodsForTerm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse, TermsManagement.GetGradingPeriodsForTermError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse](src/models/ims-oneroster-rostering-v1-p2-terms-grading-periods-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTerm(request: TermsManagement.GetTermRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2TermsResponse1, TermsManagement.GetTermError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get a specific Term on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.termsManagement.getTerm({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2TermsResponse1
} catch (err) {
  // TODO: Handle 'err' of type TermsManagement.GetTermError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.termsManagement.getTerm({ sourcedId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2TermsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the term |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.termsManagement.getTerm(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2TermsResponse1](src/models/ims-oneroster-rostering-v1-p2-terms-response1.ts)</code>
- **OnError**: throws <code>[TermsManagement.GetTermError](src/resources/terms-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.termsManagement.getTerm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2TermsResponse1, TermsManagement.GetTermError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2TermsResponse1](src/models/ims-oneroster-rostering-v1-p2-terms-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTermsForSchool(request: TermsManagement.GetTermsForSchoolRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2SchoolsTermsResponse, TermsManagement.GetTermsForSchoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Terms for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.termsManagement.getTermsForSchool({
    schoolSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2SchoolsTermsResponse
} catch (err) {
  // TODO: Handle 'err' of type TermsManagement.GetTermsForSchoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.termsManagement.getTermsForSchool({
  schoolSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2SchoolsTermsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schoolSourcedId</code> | <code>string</code> | School sourced ID |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.termsManagement.getTermsForSchool(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2SchoolsTermsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-terms-response.ts)</code>
- **OnError**: throws <code>[TermsManagement.GetTermsForSchoolError](src/resources/terms-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.termsManagement.getTermsForSchool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2SchoolsTermsResponse, TermsManagement.GetTermsForSchoolError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2SchoolsTermsResponse](src/models/ims-oneroster-rostering-v1-p2-schools-terms-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UsersManagement

> Source: [UsersManagement](src/resources/users-management.ts)

<details>
<summary><code>createUser(request: UsersManagement.CreateUserRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2UsersResponse1, UsersManagement.CreateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To create a new User on the service provider. The responding system must return the set of sourcedIds that have been allocated to the newly created user record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersManagement.createUser({
    body: {
      user: {
        enabledUser: true,
        givenName: "some example string",
        familyName: "some example string",
        roles: [{ roleType: RoleType.Primary, role: Role9.Administrator, org: {} }],
      },
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2UsersResponse1
} catch (err) {
  // TODO: Handle 'err' of type UsersManagement.CreateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usersManagement.createUser({
  body: {
    user: {
      enabledUser: true,
      givenName: "some example string",
      familyName: "some example string",
      roles: [{ roleType: RoleType.Primary, role: Role9.Administrator, org: {} }],
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2UsersResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ImsOnerosterRosteringV1P2UsersRequest](src/models/ims-oneroster-rostering-v1-p2-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usersManagement.createUser(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2UsersResponse1](src/models/ims-oneroster-rostering-v1-p2-users-response1.ts)</code>
- **OnError**: throws <code>[UsersManagement.CreateUserError](src/resources/users-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usersManagement.createUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2UsersResponse1, UsersManagement.CreateUserError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2UsersResponse1](src/models/ims-oneroster-rostering-v1-p2-users-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUser(request: UsersManagement.DeleteUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, UsersManagement.DeleteUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a soft delete on a specific User on the service provider. This operation changes the status of the User to 'tobedeleted'.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.usersManagement.deleteUser({ sourcedId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type UsersManagement.DeleteUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usersManagement.deleteUser({ sourcedId: "some example string" }).asApiResult();
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
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the user to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usersManagement.deleteUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UsersManagement.DeleteUserError](src/resources/users-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usersManagement.deleteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UsersManagement.DeleteUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllUsers(request: UsersManagement.GetAllUsersRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2UsersResponse, UsersManagement.GetAllUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all Users on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersManagement.getAllUsers({
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2UsersResponse
} catch (err) {
  // TODO: Handle 'err' of type UsersManagement.GetAllUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usersManagement.getAllUsers({
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2UsersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usersManagement.getAllUsers(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2UsersResponse](src/models/ims-oneroster-rostering-v1-p2-users-response.ts)</code>
- **OnError**: throws <code>[UsersManagement.GetAllUsersError](src/resources/users-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usersManagement.getAllUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2UsersResponse, UsersManagement.GetAllUsersError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2UsersResponse](src/models/ims-oneroster-rostering-v1-p2-users-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassesForUser(request: UsersManagement.GetClassesForUserRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2UsersClassesResponse, UsersManagement.GetClassesForUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get the set of Classes a User is enrolled in.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersManagement.getClassesForUser({
    userSourcedId: "some example string",
    fields: "sourcedId,name",
    limit: 100,
    offset: 0,
    filter: "status='active'",
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2UsersClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type UsersManagement.GetClassesForUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usersManagement.getClassesForUser({
  userSourcedId: "some example string",
  fields: "sourcedId,name",
  limit: 100,
  offset: 0,
  filter: "status='active'",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2UsersClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userSourcedId</code> | <code>string</code> | The sourcedId of the user |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return in the paginated response<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | The number of items to skip in the paginated response<br>**Default**: 0 |
| <code>sort?</code> | <code>string</code> | The field to sort the response by |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | The order to sort the response by |
| <code>filter?</code> | <code>string</code> | The filter to apply to the response |
| <code>search?</code> | <code>string</code> | The search query to apply to the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usersManagement.getClassesForUser(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2UsersClassesResponse](src/models/ims-oneroster-rostering-v1-p2-users-classes-response.ts)</code>
- **OnError**: throws <code>[UsersManagement.GetClassesForUserError](src/resources/users-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usersManagement.getClassesForUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2UsersClassesResponse, UsersManagement.GetClassesForUserError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2UsersClassesResponse](src/models/ims-oneroster-rostering-v1-p2-users-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUser(request: UsersManagement.GetUserRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2UsersResponse1, UsersManagement.GetUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get a specific User on the service provider.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersManagement.getUser({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2UsersResponse1
} catch (err) {
  // TODO: Handle 'err' of type UsersManagement.GetUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usersManagement.getUser({ sourcedId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2UsersResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the user |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usersManagement.getUser(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2UsersResponse1](src/models/ims-oneroster-rostering-v1-p2-users-response1.ts)</code>
- **OnError**: throws <code>[UsersManagement.GetUserError](src/resources/users-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usersManagement.getUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2UsersResponse1, UsersManagement.GetUserError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2UsersResponse1](src/models/ims-oneroster-rostering-v1-p2-users-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserWithDemographics(request: UsersManagement.GetUserWithDemographicsRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2UsersDemographicsResponse, UsersManagement.GetUserWithDemographicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get a specific User with demographics on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'User not found.'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersManagement.getUserWithDemographics({ sourcedId: "some example string" });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2UsersDemographicsResponse
} catch (err) {
  // TODO: Handle 'err' of type UsersManagement.GetUserWithDemographicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usersManagement.getUserWithDemographics({
  sourcedId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2UsersDemographicsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the user |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usersManagement.getUserWithDemographics(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2UsersDemographicsResponse](src/models/ims-oneroster-rostering-v1-p2-users-demographics-response.ts)</code>
- **OnError**: throws <code>[UsersManagement.GetUserWithDemographicsError](src/resources/users-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usersManagement.getUserWithDemographics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2UsersDemographicsResponse, UsersManagement.GetUserWithDemographicsError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2UsersDemographicsResponse](src/models/ims-oneroster-rostering-v1-p2-users-demographics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUser(request: UsersManagement.UpdateUserRequest, options?: RequestOptions): ApiPromise&lt;ImsOnerosterRosteringV1P2UsersResponse1, UsersManagement.UpdateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To update an existing User on the service provider. The sourcedId for the record to be updated is supplied by the requesting system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersManagement.updateUser({
    sourcedId: "some example string",
    body: {
      user: {
        enabledUser: true,
        givenName: "some example string",
        familyName: "some example string",
        roles: [{ roleType: RoleType.Primary, role: Role9.Administrator, org: {} }],
      },
    },
  });
  // TODO: Handle 'response' of type ImsOnerosterRosteringV1P2UsersResponse1
} catch (err) {
  // TODO: Handle 'err' of type UsersManagement.UpdateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usersManagement.updateUser({
  sourcedId: "some example string",
  body: {
    user: {
      enabledUser: true,
      givenName: "some example string",
      familyName: "some example string",
      roles: [{ roleType: RoleType.Primary, role: Role9.Administrator, org: {} }],
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImsOnerosterRosteringV1P2UsersResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sourcedId</code> | <code>string</code> | The sourcedId of the user to update |
| <code>body</code> | <code>[ImsOnerosterRosteringV1P2UsersRequest](src/models/ims-oneroster-rostering-v1-p2-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usersManagement.updateUser(request)`

- **OnSuccess**: <code>[ImsOnerosterRosteringV1P2UsersResponse1](src/models/ims-oneroster-rostering-v1-p2-users-response1.ts)</code>
- **OnError**: throws <code>[UsersManagement.UpdateUserError](src/resources/users-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usersManagement.updateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImsOnerosterRosteringV1P2UsersResponse1, UsersManagement.UpdateUserError&gt;</code>, with `result.value` of type <code>[ImsOnerosterRosteringV1P2UsersResponse1](src/models/ims-oneroster-rostering-v1-p2-users-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OneRosterApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

