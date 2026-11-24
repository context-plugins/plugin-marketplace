# Reference

> Source: [CircleCiClient](src/client.ts)

## ArtifactApi

> Source: [ArtifactApi](src/resources/artifact-api.ts)

<details>
<summary><code>listBuildArtifacts(request: ArtifactApi.ListBuildArtifactsRequest, options?: RequestOptions): ApiPromise&lt;Artifact[], ArtifactApi.ListBuildArtifactsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of artifacts produced by the specified build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.artifactApi.listBuildArtifacts({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    buildNum: 1,
  });
  // TODO: Handle 'response' of type Artifact[]
} catch (err) {
  // TODO: Handle 'err' of type ArtifactApi.ListBuildArtifactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.artifactApi
  .listBuildArtifacts({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    buildNum: 1,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Artifact[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>buildNum</code> | <code>number</code> | The build number |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.artifactApi.listBuildArtifacts(request)`

- **OnSuccess**: <code>[Artifact](src/models/artifact.ts)[]</code>
- **OnError**: throws <code>[ArtifactApi.ListBuildArtifactsError](src/resources/artifact-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.artifactApi.listBuildArtifacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Artifact[], ArtifactApi.ListBuildArtifactsError&gt;</code>, with `result.value` of type <code>[Artifact](src/models/artifact.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLatestArtifacts(request: ArtifactApi.ListLatestArtifactsRequest, options?: RequestOptions): ApiPromise&lt;Artifact[], ArtifactApi.ListLatestArtifactsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns artifacts from the latest build of the project, optionally filtered by branch.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.artifactApi.listLatestArtifacts({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type Artifact[]
} catch (err) {
  // TODO: Handle 'err' of type ArtifactApi.ListLatestArtifactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.artifactApi
  .listLatestArtifacts({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Artifact[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>branch?</code> | <code>string</code> | Filter artifacts by branch name |
| <code>filter?</code> | <code>[Filter](src/models/filter.ts)</code> | Filter artifacts by status |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.artifactApi.listLatestArtifacts(request)`

- **OnSuccess**: <code>[Artifact](src/models/artifact.ts)[]</code>
- **OnError**: throws <code>[ArtifactApi.ListLatestArtifactsError](src/resources/artifact-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.artifactApi.listLatestArtifacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Artifact[], ArtifactApi.ListLatestArtifactsError&gt;</code>, with `result.value` of type <code>[Artifact](src/models/artifact.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BuildApi

> Source: [BuildApi](src/resources/build-api.ts)

<details>
<summary><code>cancelBuild(request: BuildApi.CancelBuildRequest, options?: RequestOptions): ApiPromise&lt;BuildSummary, BuildApi.CancelBuildError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a running build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buildApi.cancelBuild({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    buildNum: 1,
  });
  // TODO: Handle 'response' of type BuildSummary
} catch (err) {
  // TODO: Handle 'err' of type BuildApi.CancelBuildError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buildApi
  .cancelBuild({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    buildNum: 1,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>buildNum</code> | <code>number</code> | The build number |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buildApi.cancelBuild(request)`

- **OnSuccess**: <code>[BuildSummary](src/models/build-summary.ts)</code>
- **OnError**: throws <code>[BuildApi.CancelBuildError](src/resources/build-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buildApi.cancelBuild(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildSummary, BuildApi.CancelBuildError&gt;</code>, with `result.value` of type <code>[BuildSummary](src/models/build-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBuild(request: BuildApi.GetBuildRequest, options?: RequestOptions): ApiPromise&lt;BuildDetail, BuildApi.GetBuildError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about a specific build, including its status, steps, and timing information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buildApi.getBuild({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    buildNum: 1,
  });
  // TODO: Handle 'response' of type BuildDetail
} catch (err) {
  // TODO: Handle 'err' of type BuildApi.GetBuildError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buildApi
  .getBuild({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    buildNum: 1,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildDetail
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>buildNum</code> | <code>number</code> | The build number |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buildApi.getBuild(request)`

- **OnSuccess**: <code>[BuildDetail](src/models/build-detail.ts)</code>
- **OnError**: throws <code>[BuildApi.GetBuildError](src/resources/build-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buildApi.getBuild(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildDetail, BuildApi.GetBuildError&gt;</code>, with `result.value` of type <code>[BuildDetail](src/models/build-detail.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProjectBuilds(request: BuildApi.ListProjectBuildsRequest, options?: RequestOptions): ApiPromise&lt;Build[], BuildApi.ListProjectBuildsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the most recent builds for the specified project, with optional filtering by branch.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buildApi.listProjectBuilds({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type Build[]
} catch (err) {
  // TODO: Handle 'err' of type BuildApi.ListProjectBuildsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buildApi
  .listProjectBuilds({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Build[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>filter?</code> | <code>[FilterCircleCiRestApiV1BuildApi](src/models/filter-circle-ci-rest-api-v1-build-api.ts)</code> | Filter builds by status |
| <code>limit?</code> | <code>number</code> | Number of builds to return (max 100)<br>**Default**: 30 |
| <code>offset?</code> | <code>number</code> | Offset for pagination |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buildApi.listProjectBuilds(request)`

- **OnSuccess**: <code>[Build](src/models/build.ts)[]</code>
- **OnError**: throws <code>[BuildApi.ListProjectBuildsError](src/resources/build-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buildApi.listProjectBuilds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Build[], BuildApi.ListProjectBuildsError&gt;</code>, with `result.value` of type <code>[Build](src/models/build.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRecentBuilds(request?: BuildApi.ListRecentBuildsRequest, options?: RequestOptions): ApiPromise&lt;Build[], BuildApi.ListRecentBuildsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the most recent builds across all followed projects for the authenticated user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buildApi.listRecentBuilds();
  // TODO: Handle 'response' of type Build[]
} catch (err) {
  // TODO: Handle 'err' of type BuildApi.ListRecentBuildsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buildApi.listRecentBuilds().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Build[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | Number of builds to return (max 100)<br>**Default**: 30 |
| <code>offset?</code> | <code>number</code> | Offset for pagination |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buildApi.listRecentBuilds(request)`

- **OnSuccess**: <code>[Build](src/models/build.ts)[]</code>
- **OnError**: throws <code>[BuildApi.ListRecentBuildsError](src/resources/build-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buildApi.listRecentBuilds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Build[], BuildApi.ListRecentBuildsError&gt;</code>, with `result.value` of type <code>[Build](src/models/build.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retryBuild(request: BuildApi.RetryBuildRequest, options?: RequestOptions): ApiPromise&lt;BuildSummary, BuildApi.RetryBuildError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retries a build using the same configuration and revision as the original build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buildApi.retryBuild({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    buildNum: 1,
  });
  // TODO: Handle 'response' of type BuildSummary
} catch (err) {
  // TODO: Handle 'err' of type BuildApi.RetryBuildError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buildApi
  .retryBuild({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    buildNum: 1,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>buildNum</code> | <code>number</code> | The build number |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buildApi.retryBuild(request)`

- **OnSuccess**: <code>[BuildSummary](src/models/build-summary.ts)</code>
- **OnError**: throws <code>[BuildApi.RetryBuildError](src/resources/build-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buildApi.retryBuild(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildSummary, BuildApi.RetryBuildError&gt;</code>, with `result.value` of type <code>[BuildSummary](src/models/build-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerBranchBuild(request: BuildApi.TriggerBranchBuildRequest, options?: RequestOptions): ApiPromise&lt;BuildSummary, BuildApi.TriggerBranchBuildError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a new build on the specified branch of the project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buildApi.triggerBranchBuild({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    branch: "some example string",
  });
  // TODO: Handle 'response' of type BuildSummary
} catch (err) {
  // TODO: Handle 'err' of type BuildApi.TriggerBranchBuildError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buildApi
  .triggerBranchBuild({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    branch: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>branch</code> | <code>string</code> | The branch to build |
| <code>body?</code> | <code>[ProjectProjectTreeBranchRequest](src/models/project-project-tree-branch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buildApi.triggerBranchBuild(request)`

- **OnSuccess**: <code>[BuildSummary](src/models/build-summary.ts)</code>
- **OnError**: throws <code>[BuildApi.TriggerBranchBuildError](src/resources/build-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buildApi.triggerBranchBuild(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildSummary, BuildApi.TriggerBranchBuildError&gt;</code>, with `result.value` of type <code>[BuildSummary](src/models/build-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerBuild(request: BuildApi.TriggerBuildRequest, options?: RequestOptions): ApiPromise&lt;BuildSummary, BuildApi.TriggerBuildError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a new build for the specified project. Optionally specify a branch, revision, or build parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buildApi.triggerBuild({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type BuildSummary
} catch (err) {
  // TODO: Handle 'err' of type BuildApi.TriggerBuildError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buildApi
  .triggerBuild({ vcsType: VcsType.Github, username: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BuildSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>body?</code> | <code>[ProjectProjectRequest](src/models/project-project-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buildApi.triggerBuild(request)`

- **OnSuccess**: <code>[BuildSummary](src/models/build-summary.ts)</code>
- **OnError**: throws <code>[BuildApi.TriggerBuildError](src/resources/build-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buildApi.triggerBuild(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BuildSummary, BuildApi.TriggerBuildError&gt;</code>, with `result.value` of type <code>[BuildSummary](src/models/build-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContextApi

> Source: [ContextApi](src/resources/context-api.ts)

<details>
<summary><code>addOrUpdateContextEnvironmentVariable(request: ContextApi.AddOrUpdateContextEnvironmentVariableRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentVariable, ContextApi.AddOrUpdateContextEnvironmentVariableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new environment variable or updates an existing one within the specified context.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contextApi.addOrUpdateContextEnvironmentVariable({
    contextId: "00000000-0000-0000-0000-000000000000",
    envVarName: "some example string",
    body: { value: "some example string" },
  });
  // TODO: Handle 'response' of type EnvironmentVariable
} catch (err) {
  // TODO: Handle 'err' of type ContextApi.AddOrUpdateContextEnvironmentVariableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contextApi
  .addOrUpdateContextEnvironmentVariable({
    contextId: "00000000-0000-0000-0000-000000000000",
    envVarName: "some example string",
    body: { value: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentVariable
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contextId</code> | <code>string</code> | The unique identifier of the context |
| <code>envVarName</code> | <code>string</code> | The name of the environment variable |
| <code>body</code> | <code>[ContextEnvironmentVariableRequest](src/models/context-environment-variable-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contextApi.addOrUpdateContextEnvironmentVariable(request)`

- **OnSuccess**: <code>[EnvironmentVariable](src/models/environment-variable.ts)</code>
- **OnError**: throws <code>[ContextApi.AddOrUpdateContextEnvironmentVariableError](src/resources/context-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contextApi.addOrUpdateContextEnvironmentVariable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentVariable, ContextApi.AddOrUpdateContextEnvironmentVariableError&gt;</code>, with `result.value` of type <code>[EnvironmentVariable](src/models/environment-variable.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createContext(request: ContextApi.CreateContextRequestParams, options?: RequestOptions): ApiPromise&lt;Context, ContextApi.CreateContextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new context for sharing environment variables across projects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contextApi.createContext({
    body: {
      name: "some example string",
      owner: { id: "00000000-0000-0000-0000-000000000000", type: Type.Account },
    },
  });
  // TODO: Handle 'response' of type Context
} catch (err) {
  // TODO: Handle 'err' of type ContextApi.CreateContextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contextApi
  .createContext({
    body: {
      name: "some example string",
      owner: { id: "00000000-0000-0000-0000-000000000000", type: Type.Account },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Context
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateContextRequest](src/models/create-context-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contextApi.createContext(request)`

- **OnSuccess**: <code>[Context](src/models/context.ts)</code>
- **OnError**: throws <code>[ContextApi.CreateContextError](src/resources/context-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contextApi.createContext(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Context, ContextApi.CreateContextError&gt;</code>, with `result.value` of type <code>[Context](src/models/context.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteContext(request: ContextApi.DeleteContextRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, ContextApi.DeleteContextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a context and all of its associated environment variables.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contextApi.deleteContext({
    contextId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type ContextApi.DeleteContextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contextApi
  .deleteContext({ contextId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contextId</code> | <code>string</code> | The unique identifier of the context |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contextApi.deleteContext(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[ContextApi.DeleteContextError](src/resources/context-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contextApi.deleteContext(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, ContextApi.DeleteContextError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteContextEnvironmentVariable(request: ContextApi.DeleteContextEnvironmentVariableRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, ContextApi.DeleteContextEnvironmentVariableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an environment variable from the specified context.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contextApi.deleteContextEnvironmentVariable({
    contextId: "00000000-0000-0000-0000-000000000000",
    envVarName: "some example string",
  });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type ContextApi.DeleteContextEnvironmentVariableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contextApi
  .deleteContextEnvironmentVariable({
    contextId: "00000000-0000-0000-0000-000000000000",
    envVarName: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contextId</code> | <code>string</code> | The unique identifier of the context |
| <code>envVarName</code> | <code>string</code> | The name of the environment variable |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contextApi.deleteContextEnvironmentVariable(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[ContextApi.DeleteContextEnvironmentVariableError](src/resources/context-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contextApi.deleteContextEnvironmentVariable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, ContextApi.DeleteContextEnvironmentVariableError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContext(request: ContextApi.GetContextRequest, options?: RequestOptions): ApiPromise&lt;Context, ContextApi.GetContextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific context by its unique identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contextApi.getContext({ contextId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type Context
} catch (err) {
  // TODO: Handle 'err' of type ContextApi.GetContextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contextApi
  .getContext({ contextId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Context
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contextId</code> | <code>string</code> | The unique identifier of the context |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contextApi.getContext(request)`

- **OnSuccess**: <code>[Context](src/models/context.ts)</code>
- **OnError**: throws <code>[ContextApi.GetContextError](src/resources/context-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contextApi.getContext(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Context, ContextApi.GetContextError&gt;</code>, with `result.value` of type <code>[Context](src/models/context.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listContextEnvironmentVariables(request: ContextApi.ListContextEnvironmentVariablesRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentVariableList, ContextApi.ListContextEnvironmentVariablesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of environment variables associated with a specific context.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contextApi.listContextEnvironmentVariables({
    contextId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type EnvironmentVariableList
} catch (err) {
  // TODO: Handle 'err' of type ContextApi.ListContextEnvironmentVariablesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contextApi
  .listContextEnvironmentVariables({ contextId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentVariableList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contextId</code> | <code>string</code> | The unique identifier of the context |
| <code>pageToken?</code> | <code>string</code> | Token for retrieving the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contextApi.listContextEnvironmentVariables(request)`

- **OnSuccess**: <code>[EnvironmentVariableList](src/models/environment-variable-list.ts)</code>
- **OnError**: throws <code>[ContextApi.ListContextEnvironmentVariablesError](src/resources/context-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contextApi.listContextEnvironmentVariables(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentVariableList, ContextApi.ListContextEnvironmentVariablesError&gt;</code>, with `result.value` of type <code>[EnvironmentVariableList](src/models/environment-variable-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listContexts(request?: ContextApi.ListContextsRequest, options?: RequestOptions): ApiPromise&lt;ContextList, ContextApi.ListContextsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of contexts for a given owner, which can be an organization or account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contextApi.listContexts();
  // TODO: Handle 'response' of type ContextList
} catch (err) {
  // TODO: Handle 'err' of type ContextApi.ListContextsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contextApi.listContexts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContextList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ownerId?</code> | <code>string</code> | The unique identifier of the owner |
| <code>ownerSlug?</code> | <code>string</code> | The slug for the owner |
| <code>ownerType?</code> | <code>[OwnerType](src/models/owner-type.ts)</code> | The type of the owner |
| <code>pageToken?</code> | <code>string</code> | Token for retrieving the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contextApi.listContexts(request)`

- **OnSuccess**: <code>[ContextList](src/models/context-list.ts)</code>
- **OnError**: throws <code>[ContextApi.ListContextsError](src/resources/context-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contextApi.listContexts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContextList, ContextApi.ListContextsError&gt;</code>, with `result.value` of type <code>[ContextList](src/models/context-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/resources/insights.ts)

<details>
<summary><code>getProjectWorkflowMetrics(request: Insights.GetProjectWorkflowMetricsRequest, options?: RequestOptions): ApiPromise&lt;InsightsWorkflowMetrics, Insights.GetProjectWorkflowMetricsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns summary metrics for the workflows of a given project, including success rates, duration metrics, and throughput.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getProjectWorkflowMetrics({ projectSlug: "some example string" });
  // TODO: Handle 'response' of type InsightsWorkflowMetrics
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetProjectWorkflowMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getProjectWorkflowMetrics({ projectSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightsWorkflowMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>branch?</code> | <code>string</code> | Filter by branch name |
| <code>reportingWindow?</code> | <code>[ReportingWindow](src/models/reporting-window.ts)</code> | The time window for metrics |
| <code>pageToken?</code> | <code>string</code> | Token for retrieving the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getProjectWorkflowMetrics(request)`

- **OnSuccess**: <code>[InsightsWorkflowMetrics](src/models/insights-workflow-metrics.ts)</code>
- **OnError**: throws <code>[Insights.GetProjectWorkflowMetricsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getProjectWorkflowMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightsWorkflowMetrics, Insights.GetProjectWorkflowMetricsError&gt;</code>, with `result.value` of type <code>[InsightsWorkflowMetrics](src/models/insights-workflow-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkflowJobMetrics(request: Insights.GetWorkflowJobMetricsRequest, options?: RequestOptions): ApiPromise&lt;InsightsJobMetrics, Insights.GetWorkflowJobMetricsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns summary metrics for the jobs within a named workflow, including success rates and duration metrics.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getWorkflowJobMetrics({
    projectSlug: "some example string",
    workflowName: "some example string",
  });
  // TODO: Handle 'response' of type InsightsJobMetrics
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetWorkflowJobMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getWorkflowJobMetrics({ projectSlug: "some example string", workflowName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightsJobMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>workflowName</code> | <code>string</code> | The name of the workflow |
| <code>branch?</code> | <code>string</code> | Filter by branch name |
| <code>reportingWindow?</code> | <code>[ReportingWindow](src/models/reporting-window.ts)</code> | The time window for metrics |
| <code>pageToken?</code> | <code>string</code> | Token for retrieving the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getWorkflowJobMetrics(request)`

- **OnSuccess**: <code>[InsightsJobMetrics](src/models/insights-job-metrics.ts)</code>
- **OnError**: throws <code>[Insights.GetWorkflowJobMetricsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getWorkflowJobMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightsJobMetrics, Insights.GetWorkflowJobMetricsError&gt;</code>, with `result.value` of type <code>[InsightsJobMetrics](src/models/insights-job-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkflowRuns(request: Insights.GetWorkflowRunsRequest, options?: RequestOptions): ApiPromise&lt;InsightsWorkflowRuns, Insights.GetWorkflowRunsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns recent runs of a named workflow, containing status, duration, and credits consumed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getWorkflowRuns({
    projectSlug: "some example string",
    workflowName: "some example string",
  });
  // TODO: Handle 'response' of type InsightsWorkflowRuns
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetWorkflowRunsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getWorkflowRuns({ projectSlug: "some example string", workflowName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightsWorkflowRuns
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>workflowName</code> | <code>string</code> | The name of the workflow |
| <code>branch?</code> | <code>string</code> | Filter by branch name |
| <code>pageToken?</code> | <code>string</code> | Token for retrieving the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getWorkflowRuns(request)`

- **OnSuccess**: <code>[InsightsWorkflowRuns](src/models/insights-workflow-runs.ts)</code>
- **OnError**: throws <code>[Insights.GetWorkflowRunsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getWorkflowRuns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightsWorkflowRuns, Insights.GetWorkflowRunsError&gt;</code>, with `result.value` of type <code>[InsightsWorkflowRuns](src/models/insights-workflow-runs.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkflowTestMetrics(request: Insights.GetWorkflowTestMetricsRequest, options?: RequestOptions): ApiPromise&lt;InsightsTestMetrics, Insights.GetWorkflowTestMetricsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns test metrics for a named workflow, including most frequently failing tests and slowest tests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getWorkflowTestMetrics({
    projectSlug: "some example string",
    workflowName: "some example string",
  });
  // TODO: Handle 'response' of type InsightsTestMetrics
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetWorkflowTestMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getWorkflowTestMetrics({ projectSlug: "some example string", workflowName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightsTestMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>workflowName</code> | <code>string</code> | The name of the workflow |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getWorkflowTestMetrics(request)`

- **OnSuccess**: <code>[InsightsTestMetrics](src/models/insights-test-metrics.ts)</code>
- **OnError**: throws <code>[Insights.GetWorkflowTestMetricsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getWorkflowTestMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightsTestMetrics, Insights.GetWorkflowTestMetricsError&gt;</code>, with `result.value` of type <code>[InsightsTestMetrics](src/models/insights-test-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## JobApi

> Source: [JobApi](src/resources/job-api.ts)

<details>
<summary><code>cancelJob(request: JobApi.CancelJobRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, JobApi.CancelJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a running job by its job number.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobApi.cancelJob({ projectSlug: "some example string", jobNumber: 1 });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type JobApi.CancelJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobApi
  .cancelJob({ projectSlug: "some example string", jobNumber: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>jobNumber</code> | <code>number</code> | The number of the job |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobApi.cancelJob(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[JobApi.CancelJobError](src/resources/job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobApi.cancelJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, JobApi.CancelJobError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getJob(request: JobApi.GetJobRequest, options?: RequestOptions): ApiPromise&lt;Job, JobApi.GetJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about a specific job, including its status, duration, and executor configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobApi.getJob({ projectSlug: "some example string", jobNumber: 1 });
  // TODO: Handle 'response' of type Job
} catch (err) {
  // TODO: Handle 'err' of type JobApi.GetJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobApi.getJob({ projectSlug: "some example string", jobNumber: 1 }).asApiResult();
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
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>jobNumber</code> | <code>number</code> | The number of the job |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobApi.getJob(request)`

- **OnSuccess**: <code>[Job](src/models/job.ts)</code>
- **OnError**: throws <code>[JobApi.GetJobError](src/resources/job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobApi.getJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Job, JobApi.GetJobError&gt;</code>, with `result.value` of type <code>[Job](src/models/job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listJobArtifacts(request: JobApi.ListJobArtifactsRequest, options?: RequestOptions): ApiPromise&lt;ArtifactList, JobApi.ListJobArtifactsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of artifacts produced by a given job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobApi.listJobArtifacts({ projectSlug: "some example string", jobNumber: 1 });
  // TODO: Handle 'response' of type ArtifactList
} catch (err) {
  // TODO: Handle 'err' of type JobApi.ListJobArtifactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobApi
  .listJobArtifacts({ projectSlug: "some example string", jobNumber: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ArtifactList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>jobNumber</code> | <code>number</code> | The number of the job |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobApi.listJobArtifacts(request)`

- **OnSuccess**: <code>[ArtifactList](src/models/artifact-list.ts)</code>
- **OnError**: throws <code>[JobApi.ListJobArtifactsError](src/resources/job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobApi.listJobArtifacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ArtifactList, JobApi.ListJobArtifactsError&gt;</code>, with `result.value` of type <code>[ArtifactList](src/models/artifact-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listJobTests(request: JobApi.ListJobTestsRequest, options?: RequestOptions): ApiPromise&lt;TestList, JobApi.ListJobTestsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns test metadata for a given job, collected from JUnit XML or similar test result files.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobApi.listJobTests({ projectSlug: "some example string", jobNumber: 1 });
  // TODO: Handle 'response' of type TestList
} catch (err) {
  // TODO: Handle 'err' of type JobApi.ListJobTestsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobApi
  .listJobTests({ projectSlug: "some example string", jobNumber: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>jobNumber</code> | <code>number</code> | The number of the job |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobApi.listJobTests(request)`

- **OnSuccess**: <code>[TestList](src/models/test-list.ts)</code>
- **OnError**: throws <code>[JobApi.ListJobTestsError](src/resources/job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobApi.listJobTests(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestList, JobApi.ListJobTestsError&gt;</code>, with `result.value` of type <code>[TestList](src/models/test-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PipelineApi

> Source: [PipelineApi](src/resources/pipeline-api.ts)

<details>
<summary><code>continuePipeline(request: PipelineApi.ContinuePipelineRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, PipelineApi.ContinuePipelineError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Continues a pipeline from a setup workflow by providing configuration and pipeline parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelineApi.continuePipeline({
    body: { continuationKey: "some example string", configuration: "some example string" },
  });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type PipelineApi.ContinuePipelineError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelineApi
  .continuePipeline({
    body: { continuationKey: "some example string", configuration: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PipelineContinueRequest](src/models/pipeline-continue-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelineApi.continuePipeline(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[PipelineApi.ContinuePipelineError](src/resources/pipeline-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelineApi.continuePipeline(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, PipelineApi.ContinuePipelineError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPipeline(request: PipelineApi.GetPipelineRequest, options?: RequestOptions): ApiPromise&lt;PipelineCircleCiRestApiV2PipelineApi, PipelineApi.GetPipelineError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a pipeline by its unique identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelineApi.getPipeline({
    pipelineId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type PipelineCircleCiRestApiV2PipelineApi
} catch (err) {
  // TODO: Handle 'err' of type PipelineApi.GetPipelineError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelineApi
  .getPipeline({ pipelineId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PipelineCircleCiRestApiV2PipelineApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pipelineId</code> | <code>string</code> | The unique identifier of the pipeline |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelineApi.getPipeline(request)`

- **OnSuccess**: <code>[PipelineCircleCiRestApiV2PipelineApi](src/models/pipeline-circle-ci-rest-api-v2-pipeline-api.ts)</code>
- **OnError**: throws <code>[PipelineApi.GetPipelineError](src/resources/pipeline-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelineApi.getPipeline(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PipelineCircleCiRestApiV2PipelineApi, PipelineApi.GetPipelineError&gt;</code>, with `result.value` of type <code>[PipelineCircleCiRestApiV2PipelineApi](src/models/pipeline-circle-ci-rest-api-v2-pipeline-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPipelineConfig(request: PipelineApi.GetPipelineConfigRequest, options?: RequestOptions): ApiPromise&lt;PipelineConfig, PipelineApi.GetPipelineConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the configuration source for a given pipeline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelineApi.getPipelineConfig({
    pipelineId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type PipelineConfig
} catch (err) {
  // TODO: Handle 'err' of type PipelineApi.GetPipelineConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelineApi
  .getPipelineConfig({ pipelineId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PipelineConfig
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pipelineId</code> | <code>string</code> | The unique identifier of the pipeline |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelineApi.getPipelineConfig(request)`

- **OnSuccess**: <code>[PipelineConfig](src/models/pipeline-config.ts)</code>
- **OnError**: throws <code>[PipelineApi.GetPipelineConfigError](src/resources/pipeline-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelineApi.getPipelineConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PipelineConfig, PipelineApi.GetPipelineConfigError&gt;</code>, with `result.value` of type <code>[PipelineConfig](src/models/pipeline-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMyProjectPipelines(request: PipelineApi.ListMyProjectPipelinesRequest, options?: RequestOptions): ApiPromise&lt;PipelineList, PipelineApi.ListMyProjectPipelinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of pipelines for a project filtered to those triggered by the current user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelineApi.listMyProjectPipelines({ projectSlug: "some example string" });
  // TODO: Handle 'response' of type PipelineList
} catch (err) {
  // TODO: Handle 'err' of type PipelineApi.ListMyProjectPipelinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelineApi
  .listMyProjectPipelines({ projectSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PipelineList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>pageToken?</code> | <code>string</code> | Token for retrieving the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelineApi.listMyProjectPipelines(request)`

- **OnSuccess**: <code>[PipelineList](src/models/pipeline-list.ts)</code>
- **OnError**: throws <code>[PipelineApi.ListMyProjectPipelinesError](src/resources/pipeline-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelineApi.listMyProjectPipelines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PipelineList, PipelineApi.ListMyProjectPipelinesError&gt;</code>, with `result.value` of type <code>[PipelineList](src/models/pipeline-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPipelineWorkflows(request: PipelineApi.ListPipelineWorkflowsRequest, options?: RequestOptions): ApiPromise&lt;WorkflowList, PipelineApi.ListPipelineWorkflowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of workflows associated with a given pipeline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelineApi.listPipelineWorkflows({
    pipelineId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type WorkflowList
} catch (err) {
  // TODO: Handle 'err' of type PipelineApi.ListPipelineWorkflowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelineApi
  .listPipelineWorkflows({ pipelineId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkflowList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pipelineId</code> | <code>string</code> | The unique identifier of the pipeline |
| <code>pageToken?</code> | <code>string</code> | Token for retrieving the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelineApi.listPipelineWorkflows(request)`

- **OnSuccess**: <code>[WorkflowList](src/models/workflow-list.ts)</code>
- **OnError**: throws <code>[PipelineApi.ListPipelineWorkflowsError](src/resources/pipeline-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelineApi.listPipelineWorkflows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkflowList, PipelineApi.ListPipelineWorkflowsError&gt;</code>, with `result.value` of type <code>[WorkflowList](src/models/workflow-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPipelines(request?: PipelineApi.ListPipelinesRequest, options?: RequestOptions): ApiPromise&lt;PipelineList, PipelineApi.ListPipelinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all pipelines for the most recently built projects you follow in the organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelineApi.listPipelines();
  // TODO: Handle 'response' of type PipelineList
} catch (err) {
  // TODO: Handle 'err' of type PipelineApi.ListPipelinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelineApi.listPipelines().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PipelineList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orgSlug?</code> | <code>string</code> | Organization slug in the form vcs-slug/org-name |
| <code>mine?</code> | <code>boolean</code> | Filter to only pipelines triggered by the current user |
| <code>pageToken?</code> | <code>string</code> | Token for retrieving the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelineApi.listPipelines(request)`

- **OnSuccess**: <code>[PipelineList](src/models/pipeline-list.ts)</code>
- **OnError**: throws <code>[PipelineApi.ListPipelinesError](src/resources/pipeline-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelineApi.listPipelines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PipelineList, PipelineApi.ListPipelinesError&gt;</code>, with `result.value` of type <code>[PipelineList](src/models/pipeline-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProjectPipelines(request: PipelineApi.ListProjectPipelinesRequest, options?: RequestOptions): ApiPromise&lt;PipelineList, PipelineApi.ListProjectPipelinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of pipelines for a given project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelineApi.listProjectPipelines({ projectSlug: "some example string" });
  // TODO: Handle 'response' of type PipelineList
} catch (err) {
  // TODO: Handle 'err' of type PipelineApi.ListProjectPipelinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelineApi
  .listProjectPipelines({ projectSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PipelineList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>branch?</code> | <code>string</code> | Filter pipelines by branch name |
| <code>pageToken?</code> | <code>string</code> | Token for retrieving the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelineApi.listProjectPipelines(request)`

- **OnSuccess**: <code>[PipelineList](src/models/pipeline-list.ts)</code>
- **OnError**: throws <code>[PipelineApi.ListProjectPipelinesError](src/resources/pipeline-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelineApi.listProjectPipelines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PipelineList, PipelineApi.ListProjectPipelinesError&gt;</code>, with `result.value` of type <code>[PipelineList](src/models/pipeline-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>triggerPipeline(request: PipelineApi.TriggerPipelineRequestParams, options?: RequestOptions): ApiPromise&lt;PipelineCreation, PipelineApi.TriggerPipelineError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a new pipeline on the specified project. Optionally specify a branch, tag, or revision to build. Pipeline parameters can also be provided.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelineApi.triggerPipeline({ projectSlug: "some example string" });
  // TODO: Handle 'response' of type PipelineCreation
} catch (err) {
  // TODO: Handle 'err' of type PipelineApi.TriggerPipelineError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelineApi.triggerPipeline({ projectSlug: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PipelineCreation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>body?</code> | <code>[TriggerPipelineRequest](src/models/trigger-pipeline-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelineApi.triggerPipeline(request)`

- **OnSuccess**: <code>[PipelineCreation](src/models/pipeline-creation.ts)</code>
- **OnError**: throws <code>[PipelineApi.TriggerPipelineError](src/resources/pipeline-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelineApi.triggerPipeline(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PipelineCreation, PipelineApi.TriggerPipelineError&gt;</code>, with `result.value` of type <code>[PipelineCreation](src/models/pipeline-creation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectApi

> Source: [ProjectApi](src/resources/project-api.ts)

<details>
<summary><code>createCheckoutKey(request: ProjectApi.CreateCheckoutKeyRequest, options?: RequestOptions): ApiPromise&lt;CheckoutKey, ProjectApi.CreateCheckoutKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new checkout key for the specified project. Only deploy keys and user keys are supported.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectApi.createCheckoutKey({
    projectSlug: "some example string",
    body: { type: Type1.DeployKey },
  });
  // TODO: Handle 'response' of type CheckoutKey
} catch (err) {
  // TODO: Handle 'err' of type ProjectApi.CreateCheckoutKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectApi
  .createCheckoutKey({ projectSlug: "some example string", body: { type: Type1.DeployKey } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutKey
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>body</code> | <code>[ProjectCheckoutKeyRequest](src/models/project-checkout-key-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectApi.createCheckoutKey(request)`

- **OnSuccess**: <code>[CheckoutKey](src/models/checkout-key.ts)</code>
- **OnError**: throws <code>[ProjectApi.CreateCheckoutKeyError](src/resources/project-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectApi.createCheckoutKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutKey, ProjectApi.CreateCheckoutKeyError&gt;</code>, with `result.value` of type <code>[CheckoutKey](src/models/checkout-key.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProjectEnvironmentVariable(request: ProjectApi.CreateProjectEnvironmentVariableRequest, options?: RequestOptions): ApiPromise&lt;ProjectEnvVar, ProjectApi.CreateProjectEnvironmentVariableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new environment variable for the specified project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectApi.createProjectEnvironmentVariable({
    projectSlug: "some example string",
    body: { name: "some example string", value: "some example string" },
  });
  // TODO: Handle 'response' of type ProjectEnvVar
} catch (err) {
  // TODO: Handle 'err' of type ProjectApi.CreateProjectEnvironmentVariableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectApi
  .createProjectEnvironmentVariable({
    projectSlug: "some example string",
    body: { name: "some example string", value: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectEnvVar
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>body</code> | <code>[ProjectEnvvarRequest](src/models/project-envvar-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectApi.createProjectEnvironmentVariable(request)`

- **OnSuccess**: <code>[ProjectEnvVar](src/models/project-env-var.ts)</code>
- **OnError**: throws <code>[ProjectApi.CreateProjectEnvironmentVariableError](src/resources/project-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectApi.createProjectEnvironmentVariable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectEnvVar, ProjectApi.CreateProjectEnvironmentVariableError&gt;</code>, with `result.value` of type <code>[ProjectEnvVar](src/models/project-env-var.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCheckoutKey(request: ProjectApi.DeleteCheckoutKeyRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, ProjectApi.DeleteCheckoutKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a checkout key by its fingerprint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectApi.deleteCheckoutKey({
    projectSlug: "some example string",
    fingerprint: "some example string",
  });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectApi.DeleteCheckoutKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectApi
  .deleteCheckoutKey({ projectSlug: "some example string", fingerprint: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>fingerprint</code> | <code>string</code> | The fingerprint of the checkout key |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectApi.deleteCheckoutKey(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[ProjectApi.DeleteCheckoutKeyError](src/resources/project-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectApi.deleteCheckoutKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, ProjectApi.DeleteCheckoutKeyError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProjectEnvironmentVariable(request: ProjectApi.DeleteProjectEnvironmentVariableRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, ProjectApi.DeleteProjectEnvironmentVariableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an environment variable from the specified project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectApi.deleteProjectEnvironmentVariable({
    projectSlug: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectApi.DeleteProjectEnvironmentVariableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectApi
  .deleteProjectEnvironmentVariable({ projectSlug: "some example string", name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>name</code> | <code>string</code> | The name of the environment variable |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectApi.deleteProjectEnvironmentVariable(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[ProjectApi.DeleteProjectEnvironmentVariableError](src/resources/project-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectApi.deleteProjectEnvironmentVariable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, ProjectApi.DeleteProjectEnvironmentVariableError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followProject(request: ProjectApi.FollowProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectProjectFollowResponse, ProjectApi.FollowProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Follows a project, adding it to the authenticated user's list of followed projects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectApi.followProject({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type ProjectProjectFollowResponse
} catch (err) {
  // TODO: Handle 'err' of type ProjectApi.FollowProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectApi
  .followProject({ vcsType: VcsType.Github, username: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectProjectFollowResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectApi.followProject(request)`

- **OnSuccess**: <code>[ProjectProjectFollowResponse](src/models/project-project-follow-response.ts)</code>
- **OnError**: throws <code>[ProjectApi.FollowProjectError](src/resources/project-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectApi.followProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectProjectFollowResponse, ProjectApi.FollowProjectError&gt;</code>, with `result.value` of type <code>[ProjectProjectFollowResponse](src/models/project-project-follow-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCheckoutKey(request: ProjectApi.GetCheckoutKeyRequest, options?: RequestOptions): ApiPromise&lt;CheckoutKey, ProjectApi.GetCheckoutKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a checkout key by its fingerprint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectApi.getCheckoutKey({
    projectSlug: "some example string",
    fingerprint: "some example string",
  });
  // TODO: Handle 'response' of type CheckoutKey
} catch (err) {
  // TODO: Handle 'err' of type ProjectApi.GetCheckoutKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectApi
  .getCheckoutKey({ projectSlug: "some example string", fingerprint: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutKey
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>fingerprint</code> | <code>string</code> | The fingerprint of the checkout key |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectApi.getCheckoutKey(request)`

- **OnSuccess**: <code>[CheckoutKey](src/models/checkout-key.ts)</code>
- **OnError**: throws <code>[ProjectApi.GetCheckoutKeyError](src/resources/project-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectApi.getCheckoutKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutKey, ProjectApi.GetCheckoutKeyError&gt;</code>, with `result.value` of type <code>[CheckoutKey](src/models/checkout-key.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProject(request: ProjectApi.GetProjectRequest, options?: RequestOptions): ApiPromise&lt;Project2, ProjectApi.GetProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a project by its slug, which is a triplet of the VCS type, organization name, and repository name.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectApi.getProject({ projectSlug: "some example string" });
  // TODO: Handle 'response' of type Project2
} catch (err) {
  // TODO: Handle 'err' of type ProjectApi.GetProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectApi.getProject({ projectSlug: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectApi.getProject(request)`

- **OnSuccess**: <code>[Project2](src/models/project2.ts)</code>
- **OnError**: throws <code>[ProjectApi.GetProjectError](src/resources/project-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectApi.getProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project2, ProjectApi.GetProjectError&gt;</code>, with `result.value` of type <code>[Project2](src/models/project2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectEnvironmentVariable(request: ProjectApi.GetProjectEnvironmentVariableRequest, options?: RequestOptions): ApiPromise&lt;ProjectEnvVar, ProjectApi.GetProjectEnvironmentVariableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a masked environment variable by name for the specified project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectApi.getProjectEnvironmentVariable({
    projectSlug: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type ProjectEnvVar
} catch (err) {
  // TODO: Handle 'err' of type ProjectApi.GetProjectEnvironmentVariableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectApi
  .getProjectEnvironmentVariable({ projectSlug: "some example string", name: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectEnvVar
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>name</code> | <code>string</code> | The name of the environment variable |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectApi.getProjectEnvironmentVariable(request)`

- **OnSuccess**: <code>[ProjectEnvVar](src/models/project-env-var.ts)</code>
- **OnError**: throws <code>[ProjectApi.GetProjectEnvironmentVariableError](src/resources/project-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectApi.getProjectEnvironmentVariable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectEnvVar, ProjectApi.GetProjectEnvironmentVariableError&gt;</code>, with `result.value` of type <code>[ProjectEnvVar](src/models/project-env-var.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCheckoutKeys(request: ProjectApi.ListCheckoutKeysRequest, options?: RequestOptions): ApiPromise&lt;CheckoutKeyList, ProjectApi.ListCheckoutKeysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of checkout keys for a given project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectApi.listCheckoutKeys({ projectSlug: "some example string" });
  // TODO: Handle 'response' of type CheckoutKeyList
} catch (err) {
  // TODO: Handle 'err' of type ProjectApi.ListCheckoutKeysError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectApi.listCheckoutKeys({ projectSlug: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutKeyList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectApi.listCheckoutKeys(request)`

- **OnSuccess**: <code>[CheckoutKeyList](src/models/checkout-key-list.ts)</code>
- **OnError**: throws <code>[ProjectApi.ListCheckoutKeysError](src/resources/project-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectApi.listCheckoutKeys(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutKeyList, ProjectApi.ListCheckoutKeysError&gt;</code>, with `result.value` of type <code>[CheckoutKeyList](src/models/checkout-key-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProjectEnvironmentVariables(request: ProjectApi.ListProjectEnvironmentVariablesRequest, options?: RequestOptions): ApiPromise&lt;ProjectEnvVarList, ProjectApi.ListProjectEnvironmentVariablesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of masked environment variables for a given project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectApi.listProjectEnvironmentVariables({
    projectSlug: "some example string",
  });
  // TODO: Handle 'response' of type ProjectEnvVarList
} catch (err) {
  // TODO: Handle 'err' of type ProjectApi.ListProjectEnvironmentVariablesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectApi
  .listProjectEnvironmentVariables({ projectSlug: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectEnvVarList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectApi.listProjectEnvironmentVariables(request)`

- **OnSuccess**: <code>[ProjectEnvVarList](src/models/project-env-var-list.ts)</code>
- **OnError**: throws <code>[ProjectApi.ListProjectEnvironmentVariablesError](src/resources/project-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectApi.listProjectEnvironmentVariables(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectEnvVarList, ProjectApi.ListProjectEnvironmentVariablesError&gt;</code>, with `result.value` of type <code>[ProjectEnvVarList](src/models/project-env-var-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProjects(options?: RequestOptions): ApiPromise&lt;ProjectCircleciProjectApi[], ProjectApi.ListProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all projects the authenticated user follows, including recent build summaries for each project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectApi.listProjects();
  // TODO: Handle 'response' of type ProjectCircleciProjectApi[]
} catch (err) {
  // TODO: Handle 'err' of type ProjectApi.ListProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectApi.listProjects().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectCircleciProjectApi[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectApi.listProjects()`

- **OnSuccess**: <code>[ProjectCircleciProjectApi](src/models/project-circleci-project-api.ts)[]</code>
- **OnError**: throws <code>[ProjectApi.ListProjectsError](src/resources/project-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectApi.listProjects().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectCircleciProjectApi[], ProjectApi.ListProjectsError&gt;</code>, with `result.value` of type <code>[ProjectCircleciProjectApi](src/models/project-circleci-project-api.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ResourceClassApi

> Source: [ResourceClassApi](src/resources/resource-class-api.ts)

<details>
<summary><code>createResourceClass(request: ResourceClassApi.CreateResourceClassRequest, options?: RequestOptions): ApiPromise&lt;ResourceClassCreation, ResourceClassApi.CreateResourceClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new resource class for the specified namespace. Returns a resource class token that is only displayed once and cannot be retrieved again. This token is used by runner agents to authenticate.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resourceClassApi.createResourceClass({
    body: { resourceClass: "some example string", description: "some example string" },
  });
  // TODO: Handle 'response' of type ResourceClassCreation
} catch (err) {
  // TODO: Handle 'err' of type ResourceClassApi.CreateResourceClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourceClassApi
  .createResourceClass({ body: { resourceClass: "some example string", description: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceClassCreation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RunnerResourceClassRequest](src/models/runner-resource-class-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourceClassApi.createResourceClass(request)`

- **OnSuccess**: <code>[ResourceClassCreation](src/models/resource-class-creation.ts)</code>
- **OnError**: throws <code>[ResourceClassApi.CreateResourceClassError](src/resources/resource-class-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourceClassApi.createResourceClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceClassCreation, ResourceClassApi.CreateResourceClassError&gt;</code>, with `result.value` of type <code>[ResourceClassCreation](src/models/resource-class-creation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteResourceClass(request: ResourceClassApi.DeleteResourceClassRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResourceClassApi.DeleteResourceClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a resource class. This will prevent any runners using this resource class from picking up new tasks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.resourceClassApi.deleteResourceClass({ resourceClass: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ResourceClassApi.DeleteResourceClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourceClassApi
  .deleteResourceClass({ resourceClass: "some example string" })
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
| <code>resourceClass</code> | <code>string</code> | The resource class in namespace/name format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourceClassApi.deleteResourceClass(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ResourceClassApi.DeleteResourceClassError](src/resources/resource-class-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourceClassApi.deleteResourceClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ResourceClassApi.DeleteResourceClassError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResourceClass(request: ResourceClassApi.GetResourceClassRequest, options?: RequestOptions): ApiPromise&lt;ResourceClass, ResourceClassApi.GetResourceClassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about a specific resource class.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resourceClassApi.getResourceClass({ resourceClass: "some example string" });
  // TODO: Handle 'response' of type ResourceClass
} catch (err) {
  // TODO: Handle 'err' of type ResourceClassApi.GetResourceClassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourceClassApi
  .getResourceClass({ resourceClass: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceClass
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceClass</code> | <code>string</code> | The resource class in namespace/name format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourceClassApi.getResourceClass(request)`

- **OnSuccess**: <code>[ResourceClass](src/models/resource-class.ts)</code>
- **OnError**: throws <code>[ResourceClassApi.GetResourceClassError](src/resources/resource-class-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourceClassApi.getResourceClass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceClass, ResourceClassApi.GetResourceClassError&gt;</code>, with `result.value` of type <code>[ResourceClass](src/models/resource-class.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResourceClasses(request: ResourceClassApi.ListResourceClassesRequest, options?: RequestOptions): ApiPromise&lt;RunnerResourceClassResponse, ResourceClassApi.ListResourceClassesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of runner resource classes for the specified namespace. Resource classes define the compute resources available for self-hosted runner jobs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resourceClassApi.listResourceClasses({ namespace: "some example string" });
  // TODO: Handle 'response' of type RunnerResourceClassResponse
} catch (err) {
  // TODO: Handle 'err' of type ResourceClassApi.ListResourceClassesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourceClassApi
  .listResourceClasses({ namespace: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunnerResourceClassResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>namespace</code> | <code>string</code> | The namespace to list resource classes for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourceClassApi.listResourceClasses(request)`

- **OnSuccess**: <code>[RunnerResourceClassResponse](src/models/runner-resource-class-response.ts)</code>
- **OnError**: throws <code>[ResourceClassApi.ListResourceClassesError](src/resources/resource-class-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourceClassApi.listResourceClasses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunnerResourceClassResponse, ResourceClassApi.ListResourceClassesError&gt;</code>, with `result.value` of type <code>[RunnerResourceClassResponse](src/models/runner-resource-class-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RunnerTask

> Source: [RunnerTask](src/resources/runner-task.ts)

<details>
<summary><code>getRunningTaskCount(request: RunnerTask.GetRunningTaskCountRequest, options?: RequestOptions): ApiPromise&lt;RunnerTasksRunningResponse, RunnerTask.GetRunningTaskCountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of running tasks for a given resource class. This endpoint is scoped to a single resource class, so it must be called per resource class to get totals across all classes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runnerTask.getRunningTaskCount({ resourceClass: "some example string" });
  // TODO: Handle 'response' of type RunnerTasksRunningResponse
} catch (err) {
  // TODO: Handle 'err' of type RunnerTask.GetRunningTaskCountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runnerTask
  .getRunningTaskCount({ resourceClass: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunnerTasksRunningResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceClass</code> | <code>string</code> | The resource class to query running tasks for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runnerTask.getRunningTaskCount(request)`

- **OnSuccess**: <code>[RunnerTasksRunningResponse](src/models/runner-tasks-running-response.ts)</code>
- **OnError**: throws <code>[RunnerTask.GetRunningTaskCountError](src/resources/runner-task.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runnerTask.getRunningTaskCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunnerTasksRunningResponse, RunnerTask.GetRunningTaskCountError&gt;</code>, with `result.value` of type <code>[RunnerTasksRunningResponse](src/models/runner-tasks-running-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUnclaimedTaskCount(request: RunnerTask.GetUnclaimedTaskCountRequest, options?: RequestOptions): ApiPromise&lt;RunnerTasksResponse, RunnerTask.GetUnclaimedTaskCountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of unclaimed tasks for a given resource class. This endpoint is scoped to a single resource class, so it must be called per resource class to get totals across all classes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runnerTask.getUnclaimedTaskCount({ resourceClass: "some example string" });
  // TODO: Handle 'response' of type RunnerTasksResponse
} catch (err) {
  // TODO: Handle 'err' of type RunnerTask.GetUnclaimedTaskCountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runnerTask
  .getUnclaimedTaskCount({ resourceClass: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunnerTasksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceClass</code> | <code>string</code> | The resource class to query unclaimed tasks for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runnerTask.getUnclaimedTaskCount(request)`

- **OnSuccess**: <code>[RunnerTasksResponse](src/models/runner-tasks-response.ts)</code>
- **OnError**: throws <code>[RunnerTask.GetUnclaimedTaskCountError](src/resources/runner-task.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runnerTask.getUnclaimedTaskCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunnerTasksResponse, RunnerTask.GetUnclaimedTaskCountError&gt;</code>, with `result.value` of type <code>[RunnerTasksResponse](src/models/runner-tasks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ScheduleApi

> Source: [ScheduleApi](src/resources/schedule-api.ts)

<details>
<summary><code>createSchedule(request: ScheduleApi.CreateScheduleRequestParams, options?: RequestOptions): ApiPromise&lt;Schedule, ScheduleApi.CreateScheduleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a scheduled pipeline trigger for the specified project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scheduleApi.createSchedule({
    projectSlug: "some example string",
    body: {
      name: "some example string",
      timetable: { perHour: 1, hoursOfDay: [1], daysOfWeek: [DaysOfWeek.Mon] },
      attributionActor: AttributionActor.Current,
      parameters: {},
    },
  });
  // TODO: Handle 'response' of type Schedule
} catch (err) {
  // TODO: Handle 'err' of type ScheduleApi.CreateScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scheduleApi
  .createSchedule({
    projectSlug: "some example string",
    body: {
      name: "some example string",
      timetable: { perHour: 1, hoursOfDay: [1], daysOfWeek: [DaysOfWeek.Mon] },
      attributionActor: AttributionActor.Current,
      parameters: {},
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Schedule
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>body</code> | <code>[CreateScheduleRequest](src/models/create-schedule-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scheduleApi.createSchedule(request)`

- **OnSuccess**: <code>[Schedule](src/models/schedule.ts)</code>
- **OnError**: throws <code>[ScheduleApi.CreateScheduleError](src/resources/schedule-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scheduleApi.createSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Schedule, ScheduleApi.CreateScheduleError&gt;</code>, with `result.value` of type <code>[Schedule](src/models/schedule.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSchedule(request: ScheduleApi.DeleteScheduleRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, ScheduleApi.DeleteScheduleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a schedule by its unique identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scheduleApi.deleteSchedule({
    scheduleId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type ScheduleApi.DeleteScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scheduleApi
  .deleteSchedule({ scheduleId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scheduleId</code> | <code>string</code> | The unique identifier of the schedule |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scheduleApi.deleteSchedule(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[ScheduleApi.DeleteScheduleError](src/resources/schedule-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scheduleApi.deleteSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, ScheduleApi.DeleteScheduleError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSchedule(request: ScheduleApi.GetScheduleRequest, options?: RequestOptions): ApiPromise&lt;Schedule, ScheduleApi.GetScheduleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a schedule by its unique identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scheduleApi.getSchedule({
    scheduleId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Schedule
} catch (err) {
  // TODO: Handle 'err' of type ScheduleApi.GetScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scheduleApi
  .getSchedule({ scheduleId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Schedule
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scheduleId</code> | <code>string</code> | The unique identifier of the schedule |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scheduleApi.getSchedule(request)`

- **OnSuccess**: <code>[Schedule](src/models/schedule.ts)</code>
- **OnError**: throws <code>[ScheduleApi.GetScheduleError](src/resources/schedule-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scheduleApi.getSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Schedule, ScheduleApi.GetScheduleError&gt;</code>, with `result.value` of type <code>[Schedule](src/models/schedule.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSchedules(request: ScheduleApi.ListSchedulesRequest, options?: RequestOptions): ApiPromise&lt;ScheduleList, ScheduleApi.ListSchedulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of scheduled pipeline triggers for a given project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scheduleApi.listSchedules({ projectSlug: "some example string" });
  // TODO: Handle 'response' of type ScheduleList
} catch (err) {
  // TODO: Handle 'err' of type ScheduleApi.ListSchedulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scheduleApi.listSchedules({ projectSlug: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScheduleList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectSlug</code> | <code>string</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>pageToken?</code> | <code>string</code> | Token for retrieving the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scheduleApi.listSchedules(request)`

- **OnSuccess**: <code>[ScheduleList](src/models/schedule-list.ts)</code>
- **OnError**: throws <code>[ScheduleApi.ListSchedulesError](src/resources/schedule-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scheduleApi.listSchedules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScheduleList, ScheduleApi.ListSchedulesError&gt;</code>, with `result.value` of type <code>[ScheduleList](src/models/schedule-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSchedule(request: ScheduleApi.UpdateScheduleRequestParams, options?: RequestOptions): ApiPromise&lt;Schedule, ScheduleApi.UpdateScheduleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing schedule with the provided parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scheduleApi.updateSchedule({
    scheduleId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type Schedule
} catch (err) {
  // TODO: Handle 'err' of type ScheduleApi.UpdateScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scheduleApi
  .updateSchedule({ scheduleId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Schedule
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scheduleId</code> | <code>string</code> | The unique identifier of the schedule |
| <code>body</code> | <code>[UpdateScheduleRequest](src/models/update-schedule-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scheduleApi.updateSchedule(request)`

- **OnSuccess**: <code>[Schedule](src/models/schedule.ts)</code>
- **OnError**: throws <code>[ScheduleApi.UpdateScheduleError](src/resources/schedule-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scheduleApi.updateSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Schedule, ScheduleApi.UpdateScheduleError&gt;</code>, with `result.value` of type <code>[Schedule](src/models/schedule.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SshKey

> Source: [SshKey](src/resources/ssh-key.ts)

<details>
<summary><code>addSshKey(request: SshKey.AddSshKeyRequest, options?: RequestOptions): ApiPromise&lt;undefined, SshKey.AddSshKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an SSH key to the specified project for use in builds.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sshKey.addSshKey({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    body: { hostname: "some example string", privateKey: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type SshKey.AddSshKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sshKey
  .addSshKey({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    body: { hostname: "some example string", privateKey: "some example string" },
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
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>body</code> | <code>[ProjectProjectSshKeyRequest](src/models/project-project-ssh-key-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sshKey.addSshKey(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SshKey.AddSshKeyError](src/resources/ssh-key.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sshKey.addSshKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SshKey.AddSshKeyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCheckoutKey2(request: SshKey.CreateCheckoutKey2Request, options?: RequestOptions): ApiPromise&lt;CheckoutKeyCircleCiRestApiV1SshKeyApi, SshKey.CreateCheckoutKey2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new checkout key for the specified project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sshKey.createCheckoutKey2({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    body: { type: Type1CircleCiRestApiV1SshKeyApi.DeployKey },
  });
  // TODO: Handle 'response' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
} catch (err) {
  // TODO: Handle 'err' of type SshKey.CreateCheckoutKey2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sshKey
  .createCheckoutKey2({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    body: { type: Type1CircleCiRestApiV1SshKeyApi.DeployKey },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>body</code> | <code>[ProjectProjectCheckoutKeyRequest](src/models/project-project-checkout-key-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sshKey.createCheckoutKey2(request)`

- **OnSuccess**: <code>[CheckoutKeyCircleCiRestApiV1SshKeyApi](src/models/checkout-key-circle-ci-rest-api-v1-ssh-key-api.ts)</code>
- **OnError**: throws <code>[SshKey.CreateCheckoutKey2Error](src/resources/ssh-key.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sshKey.createCheckoutKey2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutKeyCircleCiRestApiV1SshKeyApi, SshKey.CreateCheckoutKey2Error&gt;</code>, with `result.value` of type <code>[CheckoutKeyCircleCiRestApiV1SshKeyApi](src/models/checkout-key-circle-ci-rest-api-v1-ssh-key-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCheckoutKey2(request: SshKey.DeleteCheckoutKey2Request, options?: RequestOptions): ApiPromise&lt;ProjectProjectCheckoutKeyFingerprintResponse, SshKey.DeleteCheckoutKey2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a checkout key by its fingerprint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sshKey.deleteCheckoutKey2({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    fingerprint: "some example string",
  });
  // TODO: Handle 'response' of type ProjectProjectCheckoutKeyFingerprintResponse
} catch (err) {
  // TODO: Handle 'err' of type SshKey.DeleteCheckoutKey2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sshKey
  .deleteCheckoutKey2({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    fingerprint: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectProjectCheckoutKeyFingerprintResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>fingerprint</code> | <code>string</code> | The fingerprint of the checkout key |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sshKey.deleteCheckoutKey2(request)`

- **OnSuccess**: <code>[ProjectProjectCheckoutKeyFingerprintResponse](src/models/project-project-checkout-key-fingerprint-response.ts)</code>
- **OnError**: throws <code>[SshKey.DeleteCheckoutKey2Error](src/resources/ssh-key.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sshKey.deleteCheckoutKey2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectProjectCheckoutKeyFingerprintResponse, SshKey.DeleteCheckoutKey2Error&gt;</code>, with `result.value` of type <code>[ProjectProjectCheckoutKeyFingerprintResponse](src/models/project-project-checkout-key-fingerprint-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCheckoutKey2(request: SshKey.GetCheckoutKey2Request, options?: RequestOptions): ApiPromise&lt;CheckoutKeyCircleCiRestApiV1SshKeyApi, SshKey.GetCheckoutKey2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a checkout key by its fingerprint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sshKey.getCheckoutKey2({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    fingerprint: "some example string",
  });
  // TODO: Handle 'response' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
} catch (err) {
  // TODO: Handle 'err' of type SshKey.GetCheckoutKey2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sshKey
  .getCheckoutKey2({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    fingerprint: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>fingerprint</code> | <code>string</code> | The fingerprint of the checkout key |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sshKey.getCheckoutKey2(request)`

- **OnSuccess**: <code>[CheckoutKeyCircleCiRestApiV1SshKeyApi](src/models/checkout-key-circle-ci-rest-api-v1-ssh-key-api.ts)</code>
- **OnError**: throws <code>[SshKey.GetCheckoutKey2Error](src/resources/ssh-key.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sshKey.getCheckoutKey2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutKeyCircleCiRestApiV1SshKeyApi, SshKey.GetCheckoutKey2Error&gt;</code>, with `result.value` of type <code>[CheckoutKeyCircleCiRestApiV1SshKeyApi](src/models/checkout-key-circle-ci-rest-api-v1-ssh-key-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCheckoutKeys2(request: SshKey.ListCheckoutKeys2Request, options?: RequestOptions): ApiPromise&lt;CheckoutKeyCircleCiRestApiV1SshKeyApi[], SshKey.ListCheckoutKeys2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of checkout keys for the specified project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sshKey.listCheckoutKeys2({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type CheckoutKeyCircleCiRestApiV1SshKeyApi[]
} catch (err) {
  // TODO: Handle 'err' of type SshKey.ListCheckoutKeys2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sshKey
  .listCheckoutKeys2({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckoutKeyCircleCiRestApiV1SshKeyApi[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sshKey.listCheckoutKeys2(request)`

- **OnSuccess**: <code>[CheckoutKeyCircleCiRestApiV1SshKeyApi](src/models/checkout-key-circle-ci-rest-api-v1-ssh-key-api.ts)[]</code>
- **OnError**: throws <code>[SshKey.ListCheckoutKeys2Error](src/resources/ssh-key.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sshKey.listCheckoutKeys2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckoutKeyCircleCiRestApiV1SshKeyApi[], SshKey.ListCheckoutKeys2Error&gt;</code>, with `result.value` of type <code>[CheckoutKeyCircleCiRestApiV1SshKeyApi](src/models/checkout-key-circle-ci-rest-api-v1-ssh-key-api.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TestMetadataApi

> Source: [TestMetadataApi](src/resources/test-metadata-api.ts)

<details>
<summary><code>listBuildTests(request: TestMetadataApi.ListBuildTestsRequest, options?: RequestOptions): ApiPromise&lt;ProjectProjectBuildNumTestsResponse, TestMetadataApi.ListBuildTestsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns test metadata collected from the specified build, sourced from JUnit XML or similar test result files.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testMetadataApi.listBuildTests({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    buildNum: 1,
  });
  // TODO: Handle 'response' of type ProjectProjectBuildNumTestsResponse
} catch (err) {
  // TODO: Handle 'err' of type TestMetadataApi.ListBuildTestsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testMetadataApi
  .listBuildTests({
    vcsType: VcsType.Github,
    username: "some example string",
    project: "some example string",
    buildNum: 1,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectProjectBuildNumTestsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcsType</code> | <code>[VcsType](src/models/vcs-type.ts)</code> | The version control system type |
| <code>username</code> | <code>string</code> | The organization or user name |
| <code>project</code> | <code>string</code> | The repository name |
| <code>buildNum</code> | <code>number</code> | The build number |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testMetadataApi.listBuildTests(request)`

- **OnSuccess**: <code>[ProjectProjectBuildNumTestsResponse](src/models/project-project-build-num-tests-response.ts)</code>
- **OnError**: throws <code>[TestMetadataApi.ListBuildTestsError](src/resources/test-metadata-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testMetadataApi.listBuildTests(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectProjectBuildNumTestsResponse, TestMetadataApi.ListBuildTestsError&gt;</code>, with `result.value` of type <code>[ProjectProjectBuildNumTestsResponse](src/models/project-project-build-num-tests-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UserApi

> Source: [UserApi](src/resources/user-api.ts)

<details>
<summary><code>getCollaborations(options?: RequestOptions): ApiPromise&lt;Collaboration[], UserApi.GetCollaborationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of organizations and accounts the current user collaborates with.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userApi.getCollaborations();
  // TODO: Handle 'response' of type Collaboration[]
} catch (err) {
  // TODO: Handle 'err' of type UserApi.GetCollaborationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userApi.getCollaborations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Collaboration[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userApi.getCollaborations()`

- **OnSuccess**: <code>[Collaboration](src/models/collaboration.ts)[]</code>
- **OnError**: throws <code>[UserApi.GetCollaborationsError](src/resources/user-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userApi.getCollaborations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Collaboration[], UserApi.GetCollaborationsError&gt;</code>, with `result.value` of type <code>[Collaboration](src/models/collaboration.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCurrentUser(options?: RequestOptions): ApiPromise&lt;User, UserApi.GetCurrentUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the currently authenticated user, including name, login, and avatar URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userApi.getCurrentUser();
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type UserApi.GetCurrentUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userApi.getCurrentUser().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type User
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userApi.getCurrentUser()`

- **OnSuccess**: <code>[User](src/models/user.ts)</code>
- **OnError**: throws <code>[UserApi.GetCurrentUserError](src/resources/user-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userApi.getCurrentUser().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User, UserApi.GetCurrentUserError&gt;</code>, with `result.value` of type <code>[User](src/models/user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhook

> Source: [Webhook](src/resources/webhook.ts)

<details>
<summary><code>createWebhook(request: Webhook.CreateWebhookRequestParams, options?: RequestOptions): ApiPromise&lt;WebhookInfo, Webhook.CreateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new outbound webhook for the specified scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhook.createWebhook({
    body: {
      name: "some example string",
      url: "https://example.com",
      events: [Event.WorkflowCompleted],
      scope: { id: "00000000-0000-0000-0000-000000000000" },
      signingSecret: "some example string",
    },
  });
  // TODO: Handle 'response' of type WebhookInfo
} catch (err) {
  // TODO: Handle 'err' of type Webhook.CreateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhook
  .createWebhook({
    body: {
      name: "some example string",
      url: "https://example.com",
      events: [Event.WorkflowCompleted],
      scope: { id: "00000000-0000-0000-0000-000000000000" },
      signingSecret: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateWebhookRequest](src/models/create-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhook.createWebhook(request)`

- **OnSuccess**: <code>[WebhookInfo](src/models/webhook-info.ts)</code>
- **OnError**: throws <code>[Webhook.CreateWebhookError](src/resources/webhook.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhook.createWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookInfo, Webhook.CreateWebhookError&gt;</code>, with `result.value` of type <code>[WebhookInfo](src/models/webhook-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: Webhook.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, Webhook.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a webhook by its unique identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhook.deleteWebhook({ webhookId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhook.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhook
  .deleteWebhook({ webhookId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | The unique identifier of the webhook |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhook.deleteWebhook(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[Webhook.DeleteWebhookError](src/resources/webhook.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhook.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, Webhook.DeleteWebhookError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhook(request: Webhook.GetWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookInfo, Webhook.GetWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a webhook by its unique identifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhook.getWebhook({ webhookId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type WebhookInfo
} catch (err) {
  // TODO: Handle 'err' of type Webhook.GetWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhook
  .getWebhook({ webhookId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | The unique identifier of the webhook |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhook.getWebhook(request)`

- **OnSuccess**: <code>[WebhookInfo](src/models/webhook-info.ts)</code>
- **OnError**: throws <code>[Webhook.GetWebhookError](src/resources/webhook.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhook.getWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookInfo, Webhook.GetWebhookError&gt;</code>, with `result.value` of type <code>[WebhookInfo](src/models/webhook-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhooks(request: Webhook.ListWebhooksRequest, options?: RequestOptions): ApiPromise&lt;WebhookList, Webhook.ListWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of outbound webhooks for the specified scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhook.listWebhooks({
    scopeId: "00000000-0000-0000-0000-000000000000",
    scopeType: ScopeType.Project,
  });
  // TODO: Handle 'response' of type WebhookList
} catch (err) {
  // TODO: Handle 'err' of type Webhook.ListWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhook
  .listWebhooks({ scopeId: "00000000-0000-0000-0000-000000000000", scopeType: ScopeType.Project })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scopeId</code> | <code>string</code> | The ID of the scope (project ID) |
| <code>scopeType</code> | <code>[ScopeType](src/models/scope-type.ts)</code> | The type of scope |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhook.listWebhooks(request)`

- **OnSuccess**: <code>[WebhookList](src/models/webhook-list.ts)</code>
- **OnError**: throws <code>[Webhook.ListWebhooksError](src/resources/webhook.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhook.listWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookList, Webhook.ListWebhooksError&gt;</code>, with `result.value` of type <code>[WebhookList](src/models/webhook-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhook(request: Webhook.UpdateWebhookRequestParams, options?: RequestOptions): ApiPromise&lt;WebhookInfo, Webhook.UpdateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing webhook with the provided parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhook.updateWebhook({
    webhookId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type WebhookInfo
} catch (err) {
  // TODO: Handle 'err' of type Webhook.UpdateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhook
  .updateWebhook({ webhookId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | The unique identifier of the webhook |
| <code>body</code> | <code>[UpdateWebhookRequest](src/models/update-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhook.updateWebhook(request)`

- **OnSuccess**: <code>[WebhookInfo](src/models/webhook-info.ts)</code>
- **OnError**: throws <code>[Webhook.UpdateWebhookError](src/resources/webhook.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhook.updateWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookInfo, Webhook.UpdateWebhookError&gt;</code>, with `result.value` of type <code>[WebhookInfo](src/models/webhook-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WorkflowApi

> Source: [WorkflowApi](src/resources/workflow-api.ts)

<details>
<summary><code>approveWorkflowJob(request: WorkflowApi.ApproveWorkflowJobRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, WorkflowApi.ApproveWorkflowJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approves a pending approval job in a workflow, allowing the workflow to continue execution.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflowApi.approveWorkflowJob({
    id: "00000000-0000-0000-0000-000000000000",
    approvalRequestId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type WorkflowApi.ApproveWorkflowJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workflowApi
  .approveWorkflowJob({
    id: "00000000-0000-0000-0000-000000000000",
    approvalRequestId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the workflow |
| <code>approvalRequestId</code> | <code>string</code> | The ID of the approval request to approve |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workflowApi.approveWorkflowJob(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[WorkflowApi.ApproveWorkflowJobError](src/resources/workflow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workflowApi.approveWorkflowJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, WorkflowApi.ApproveWorkflowJobError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelWorkflow(request: WorkflowApi.CancelWorkflowRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, WorkflowApi.CancelWorkflowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a running workflow and all of its running jobs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflowApi.cancelWorkflow({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type WorkflowApi.CancelWorkflowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workflowApi
  .cancelWorkflow({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the workflow |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workflowApi.cancelWorkflow(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[WorkflowApi.CancelWorkflowError](src/resources/workflow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workflowApi.cancelWorkflow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, WorkflowApi.CancelWorkflowError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkflow(request: WorkflowApi.GetWorkflowRequest, options?: RequestOptions): ApiPromise&lt;Workflow, WorkflowApi.GetWorkflowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a workflow by its unique identifier, including its status, pipeline ID, and timing information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflowApi.getWorkflow({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type Workflow
} catch (err) {
  // TODO: Handle 'err' of type WorkflowApi.GetWorkflowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workflowApi
  .getWorkflow({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Workflow
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the workflow |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workflowApi.getWorkflow(request)`

- **OnSuccess**: <code>[Workflow](src/models/workflow.ts)</code>
- **OnError**: throws <code>[WorkflowApi.GetWorkflowError](src/resources/workflow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workflowApi.getWorkflow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Workflow, WorkflowApi.GetWorkflowError&gt;</code>, with `result.value` of type <code>[Workflow](src/models/workflow.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWorkflowJobs(request: WorkflowApi.ListWorkflowJobsRequest, options?: RequestOptions): ApiPromise&lt;WorkflowJobList, WorkflowApi.ListWorkflowJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of jobs associated with a given workflow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflowApi.listWorkflowJobs({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type WorkflowJobList
} catch (err) {
  // TODO: Handle 'err' of type WorkflowApi.ListWorkflowJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workflowApi
  .listWorkflowJobs({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkflowJobList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the workflow |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workflowApi.listWorkflowJobs(request)`

- **OnSuccess**: <code>[WorkflowJobList](src/models/workflow-job-list.ts)</code>
- **OnError**: throws <code>[WorkflowApi.ListWorkflowJobsError](src/resources/workflow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workflowApi.listWorkflowJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkflowJobList, WorkflowApi.ListWorkflowJobsError&gt;</code>, with `result.value` of type <code>[WorkflowJobList](src/models/workflow-job-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rerunWorkflow(request: WorkflowApi.RerunWorkflowRequest, options?: RequestOptions): ApiPromise&lt;RerunWorkflowResponse, WorkflowApi.RerunWorkflowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reruns a workflow. Optionally, specific jobs can be selected for rerun, and SSH access can be enabled for debugging.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflowApi.rerunWorkflow({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type RerunWorkflowResponse
} catch (err) {
  // TODO: Handle 'err' of type WorkflowApi.RerunWorkflowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workflowApi
  .rerunWorkflow({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RerunWorkflowResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier of the workflow |
| <code>body?</code> | <code>[WorkflowRerunRequest](src/models/workflow-rerun-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workflowApi.rerunWorkflow(request)`

- **OnSuccess**: <code>[RerunWorkflowResponse](src/models/rerun-workflow-response.ts)</code>
- **OnError**: throws <code>[WorkflowApi.RerunWorkflowError](src/resources/workflow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workflowApi.rerunWorkflow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RerunWorkflowResponse, WorkflowApi.RerunWorkflowError&gt;</code>, with `result.value` of type <code>[RerunWorkflowResponse](src/models/rerun-workflow-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RunnerApi

> Source: [RunnerApi](src/resources/runner-api.ts)

<details>
<summary><code>listRunners(request?: RunnerApi.ListRunnersRequest, options?: RequestOptions): ApiPromise&lt;RunnerResponse, RunnerApi.ListRunnersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of self-hosted runners filtered by namespace or resource class. At least one filter parameter must be provided to return results. Returns details including hostname, name, connection timestamps, version, and resource class.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.runnerApi.listRunners();
  // TODO: Handle 'response' of type RunnerResponse
} catch (err) {
  // TODO: Handle 'err' of type RunnerApi.ListRunnersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.runnerApi.listRunners().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunnerResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>namespace?</code> | <code>string</code> | The namespace to filter runners by. Cannot be used together with resource-class. |
| <code>resourceClass?</code> | <code>string</code> | The resource class to filter runners by. Cannot be used together with namespace. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.runnerApi.listRunners(request)`

- **OnSuccess**: <code>[RunnerResponse](src/models/runner-response.ts)</code>
- **OnError**: throws <code>[RunnerApi.ListRunnersError](src/resources/runner-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.runnerApi.listRunners(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunnerResponse, RunnerApi.ListRunnersError&gt;</code>, with `result.value` of type <code>[RunnerResponse](src/models/runner-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CircleCiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

