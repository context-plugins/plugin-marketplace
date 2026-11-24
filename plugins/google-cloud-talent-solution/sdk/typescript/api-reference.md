# Reference

> Source: [GoogleCloudTalentSolutionClient](src/client.ts)

<details>
<summary><code>jobsProjectsOperationsGet(request: GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsOperationsGet({
    projectsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsOperationsGet({ projectsId: "some example string", operationsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsOperationsGet(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsOperationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsClientEventsCreate(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateRequest, options?: RequestOptions): ApiPromise&lt;ClientEvent, GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in self service tools. Learn more about self service tools.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsClientEventsCreate({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ClientEvent
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsClientEventsCreate({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientEvent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[ClientEvent](src/models/client-event.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsClientEventsCreate(request)`

- **OnSuccess**: <code>[ClientEvent](src/models/client-event.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsClientEventsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientEvent, GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateError&gt;</code>, with `result.value` of type <code>[ClientEvent](src/models/client-event.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsCompaniesCreate(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateRequest, options?: RequestOptions): ApiPromise&lt;Company, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new company entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsCompaniesCreate({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Company
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsCompaniesCreate({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Company
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[Company](src/models/company.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsCompaniesCreate(request)`

- **OnSuccess**: <code>[Company](src/models/company.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsCompaniesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Company, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateError&gt;</code>, with `result.value` of type <code>[Company](src/models/company.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsCompaniesDelete(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes specified company. Prerequisite: The company has no jobs associated with it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsCompaniesDelete({
    projectsId: "some example string",
    tenantsId: "some example string",
    companiesId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsCompaniesDelete({
    projectsId: "some example string",
    tenantsId: "some example string",
    companiesId: "some example string",
  })
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>companiesId</code> | <code>string</code> | Resource name segment (companiesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsCompaniesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsCompaniesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsCompaniesGet(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetRequest, options?: RequestOptions): ApiPromise&lt;Company, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsCompaniesGet({
    projectsId: "some example string",
    tenantsId: "some example string",
    companiesId: "some example string",
  });
  // TODO: Handle 'response' of type Company
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsCompaniesGet({
    projectsId: "some example string",
    tenantsId: "some example string",
    companiesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Company
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>companiesId</code> | <code>string</code> | Resource name segment (companiesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsCompaniesGet(request)`

- **OnSuccess**: <code>[Company](src/models/company.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsCompaniesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Company, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetError&gt;</code>, with `result.value` of type <code>[Company](src/models/company.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsCompaniesList(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListRequest, options?: RequestOptions): ApiPromise&lt;ListCompaniesResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all companies associated with the project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsCompaniesList({
    projectsId: "some example string",
    tenantsId: "some example string",
  });
  // TODO: Handle 'response' of type ListCompaniesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsCompaniesList({ projectsId: "some example string", tenantsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCompaniesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>pageSize?</code> | <code>number</code> | The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive number is provided. |
| <code>pageToken?</code> | <code>string</code> | The starting indicator from which to return results. |
| <code>requireOpenJobs?</code> | <code>boolean</code> | Set to true if the companies requested must have open jobs. Defaults to false. If true, at most page_size of companies are fetched, among which only those with open jobs are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsCompaniesList(request)`

- **OnSuccess**: <code>[ListCompaniesResponse](src/models/list-companies-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsCompaniesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCompaniesResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListError&gt;</code>, with `result.value` of type <code>[ListCompaniesResponse](src/models/list-companies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsCompaniesPatch(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchRequest, options?: RequestOptions): ApiPromise&lt;Company, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsCompaniesPatch({
    projectsId: "some example string",
    tenantsId: "some example string",
    companiesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Company
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsCompaniesPatch({
    projectsId: "some example string",
    tenantsId: "some example string",
    companiesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Company
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>companiesId</code> | <code>string</code> | Resource name segment (companiesId). |
| <code>updateMask?</code> | <code>string</code> | Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in company are updated. Otherwise all the fields are updated. A field mask to specify the company fields to be updated. Only top level fields of Company are supported. |
| <code>body</code> | <code>[Company](src/models/company.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsCompaniesPatch(request)`

- **OnSuccess**: <code>[Company](src/models/company.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsCompaniesPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Company, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchError&gt;</code>, with `result.value` of type <code>[Company](src/models/company.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsCompleteQuery(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryRequest, options?: RequestOptions): ApiPromise&lt;CompleteQueryResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsCompleteQuery({
    projectsId: "some example string",
    tenantsId: "some example string",
  });
  // TODO: Handle 'response' of type CompleteQueryResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsCompleteQuery({ projectsId: "some example string", tenantsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompleteQueryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>company?</code> | <code>string</code> | If provided, restricts completion to specified company. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example, "projects/foo/tenants/bar/companies/baz". |
| <code>languageCodes?</code> | <code>string[]</code> | The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of allowed characters is 255. |
| <code>pageSize?</code> | <code>number</code> | Required. Completion result count. The maximum allowed page size is 10. |
| <code>query?</code> | <code>string</code> | Required. The query used to generate suggestions. The maximum number of allowed characters is 255. |
| <code>scope?</code> | <code>[Scope](src/models/scope.ts)</code> | The scope of the completion. The defaults is CompletionScope.PUBLIC. |
| <code>type?</code> | <code>[Type4](src/models/type4.ts)</code> | The completion topic. The default is CompletionType.COMBINED. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsCompleteQuery(request)`

- **OnSuccess**: <code>[CompleteQueryResponse](src/models/complete-query-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsCompleteQuery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompleteQueryResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryError&gt;</code>, with `result.value` of type <code>[CompleteQueryResponse](src/models/complete-query-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsCreate(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateRequest, options?: RequestOptions): ApiPromise&lt;Tenant, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new tenant entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsCreate({ projectsId: "some example string", body: {} });
  // TODO: Handle 'response' of type Tenant
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsCreate({ projectsId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Tenant
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>body</code> | <code>[Tenant](src/models/tenant.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsCreate(request)`

- **OnSuccess**: <code>[Tenant](src/models/tenant.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Tenant, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateError&gt;</code>, with `result.value` of type <code>[Tenant](src/models/tenant.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsDelete(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes specified tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsDelete({
    projectsId: "some example string",
    tenantsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsDelete({ projectsId: "some example string", tenantsId: "some example string" })
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsGet(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetRequest, options?: RequestOptions): ApiPromise&lt;Tenant, GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves specified tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsGet({
    projectsId: "some example string",
    tenantsId: "some example string",
  });
  // TODO: Handle 'response' of type Tenant
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsGet({ projectsId: "some example string", tenantsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Tenant
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsGet(request)`

- **OnSuccess**: <code>[Tenant](src/models/tenant.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Tenant, GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetError&gt;</code>, with `result.value` of type <code>[Tenant](src/models/tenant.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsJobsBatchCreate(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Begins executing a batch create jobs operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsJobsBatchCreate({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsJobsBatchCreate({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[BatchCreateJobsRequest](src/models/batch-create-jobs-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsJobsBatchCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsJobsBatchCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsJobsBatchDelete(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Begins executing a batch delete jobs operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsJobsBatchDelete({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsJobsBatchDelete({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[BatchDeleteJobsRequest](src/models/batch-delete-jobs-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsJobsBatchDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsJobsBatchDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsJobsBatchUpdate(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Begins executing a batch update jobs operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsJobsBatchUpdate({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsJobsBatchUpdate({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[BatchUpdateJobsRequest](src/models/batch-update-jobs-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsJobsBatchUpdate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsJobsBatchUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsJobsCreate(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateRequest, options?: RequestOptions): ApiPromise&lt;Job, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsJobsCreate({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Job
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsJobsCreate({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Job
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[Job](src/models/job.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsJobsCreate(request)`

- **OnSuccess**: <code>[Job](src/models/job.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsJobsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Job, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateError&gt;</code>, with `result.value` of type <code>[Job](src/models/job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsJobsDelete(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsJobsDelete({
    projectsId: "some example string",
    tenantsId: "some example string",
    jobsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsJobsDelete({
    projectsId: "some example string",
    tenantsId: "some example string",
    jobsId: "some example string",
  })
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
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>jobsId</code> | <code>string</code> | Resource name segment (jobsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsJobsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsJobsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsJobsGet(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetRequest, options?: RequestOptions): ApiPromise&lt;Job, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsJobsGet({
    projectsId: "some example string",
    tenantsId: "some example string",
    jobsId: "some example string",
  });
  // TODO: Handle 'response' of type Job
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsJobsGet({
    projectsId: "some example string",
    tenantsId: "some example string",
    jobsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Job
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>jobsId</code> | <code>string</code> | Resource name segment (jobsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsJobsGet(request)`

- **OnSuccess**: <code>[Job](src/models/job.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsJobsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Job, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetError&gt;</code>, with `result.value` of type <code>[Job](src/models/job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsJobsList(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListRequest, options?: RequestOptions): ApiPromise&lt;ListJobsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists jobs by filter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsJobsList({
    projectsId: "some example string",
    tenantsId: "some example string",
  });
  // TODO: Handle 'response' of type ListJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsJobsList({ projectsId: "some example string", tenantsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListJobsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>filter?</code> | <code>string</code> | Required. The filter string specifies the jobs to be enumerated. Supported operator: =, AND The fields eligible for filtering are: * `companyName` * `requisitionId` * `status` Available values: OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified. At least one of `companyName` and `requisitionId` must present or an INVALID_ARGUMENT error is thrown. Sample Query: * companyName = "projects/foo/tenants/bar/companies/baz" * companyName = "projects/foo/tenants/bar/companies/baz" AND requisitionId = "req-1" * companyName = "projects/foo/tenants/bar/companies/baz" AND status = "EXPIRED" * requisitionId = "req-1" * requisitionId = "req-1" AND status = "EXPIRED" |
| <code>jobView?</code> | <code>[JobView1](src/models/job-view1.ts)</code> | The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_FULL if no value is specified. |
| <code>pageSize?</code> | <code>number</code> | The maximum number of jobs to be returned per page of results. If job_view is set to JobView.JOB_VIEW_ID_ONLY, the maximum allowed page size is 1000. Otherwise, the maximum allowed page size is 100. Default is 100 if empty or a number < 1 is specified. |
| <code>pageToken?</code> | <code>string</code> | The starting point of a query result. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsJobsList(request)`

- **OnSuccess**: <code>[ListJobsResponse](src/models/list-jobs-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsJobsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListJobsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListError&gt;</code>, with `result.value` of type <code>[ListJobsResponse](src/models/list-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsJobsPatch(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchRequest, options?: RequestOptions): ApiPromise&lt;Job, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsJobsPatch({
    projectsId: "some example string",
    tenantsId: "some example string",
    jobsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Job
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsJobsPatch({
    projectsId: "some example string",
    tenantsId: "some example string",
    jobsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Job
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>jobsId</code> | <code>string</code> | Resource name segment (jobsId). |
| <code>updateMask?</code> | <code>string</code> | Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported. |
| <code>body</code> | <code>[Job](src/models/job.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsJobsPatch(request)`

- **OnSuccess**: <code>[Job](src/models/job.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsJobsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Job, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchError&gt;</code>, with `result.value` of type <code>[Job](src/models/job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsJobsSearch(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchRequest, options?: RequestOptions): ApiPromise&lt;SearchJobsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsJobsSearch({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type SearchJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsJobsSearch({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchJobsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[SearchJobsRequest](src/models/search-jobs-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsJobsSearch(request)`

- **OnSuccess**: <code>[SearchJobsResponse](src/models/search-jobs-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsJobsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchJobsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchError&gt;</code>, with `result.value` of type <code>[SearchJobsResponse](src/models/search-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsJobsSearchForAlert(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertRequest, options?: RequestOptions): ApiPromise&lt;SearchJobsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsJobsSearchForAlert({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type SearchJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsJobsSearchForAlert({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchJobsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[SearchJobsRequest](src/models/search-jobs-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsJobsSearchForAlert(request)`

- **OnSuccess**: <code>[SearchJobsResponse](src/models/search-jobs-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsJobsSearchForAlert(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchJobsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertError&gt;</code>, with `result.value` of type <code>[SearchJobsResponse](src/models/search-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsList(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsListRequest, options?: RequestOptions): ApiPromise&lt;ListTenantsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all tenants associated with the project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsList({ projectsId: "some example string" });
  // TODO: Handle 'response' of type ListTenantsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobsProjectsTenantsList({ projectsId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTenantsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>pageSize?</code> | <code>number</code> | The maximum number of tenants to be returned, at most 100. Default is 100 if a non-positive number is provided. |
| <code>pageToken?</code> | <code>string</code> | The starting indicator from which to return results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsList(request)`

- **OnSuccess**: <code>[ListTenantsResponse](src/models/list-tenants-response.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTenantsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsListError&gt;</code>, with `result.value` of type <code>[ListTenantsResponse](src/models/list-tenants-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsProjectsTenantsPatch(request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchRequest, options?: RequestOptions): ApiPromise&lt;Tenant, GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates specified tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobsProjectsTenantsPatch({
    projectsId: "some example string",
    tenantsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Tenant
} catch (err) {
  // TODO: Handle 'err' of type GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .jobsProjectsTenantsPatch({ projectsId: "some example string", tenantsId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Tenant
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>tenantsId</code> | <code>string</code> | Resource name segment (tenantsId). |
| <code>updateMask?</code> | <code>string</code> | Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in tenant are updated. Otherwise all the fields are updated. A field mask to specify the tenant fields to be updated. Only top level fields of Tenant are supported. |
| <code>body</code> | <code>[Tenant](src/models/tenant.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobsProjectsTenantsPatch(request)`

- **OnSuccess**: <code>[Tenant](src/models/tenant.ts)</code>
- **OnError**: throws <code>[GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobsProjectsTenantsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Tenant, GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchError&gt;</code>, with `result.value` of type <code>[Tenant](src/models/tenant.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudTalentSolutionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

