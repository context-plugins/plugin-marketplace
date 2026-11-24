# Reference

> Source: [AwsCodeBuildClient](src/client.ts)

## AwsCodebuildApi

> Source: [AwsCodebuildApi](src/resources/aws-codebuild-api.ts)

<details>
<summary><code>startSandbox(request: AwsCodebuildApi.StartSandboxRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildApi.StartSandboxError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a sandbox.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildApi.startSandbox({ xAmzTarget: XAmzTarget.CodeBuild20161006StartSandbox });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildApi.StartSandboxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildApi
  .startSandbox({ xAmzTarget: XAmzTarget.CodeBuild20161006StartSandbox })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget](src/models/xamz-target.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildApi.startSandbox(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildApi.StartSandboxError](src/resources/aws-codebuild-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildApi.startSandbox(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildApi.StartSandboxError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startSandboxConnection(request: AwsCodebuildApi.StartSandboxConnectionRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildApi.StartSandboxConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a sandbox connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildApi.startSandboxConnection({
    xAmzTarget: XAmzTarget2.CodeBuild20161006StartSandboxConnection,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildApi.StartSandboxConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildApi
  .startSandboxConnection({ xAmzTarget: XAmzTarget2.CodeBuild20161006StartSandboxConnection })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2](src/models/xamz-target2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildApi.startSandboxConnection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildApi.StartSandboxConnectionError](src/resources/aws-codebuild-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildApi.startSandboxConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildApi.StartSandboxConnectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopSandbox(request: AwsCodebuildApi.StopSandboxRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildApi.StopSandboxError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a sandbox.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildApi.stopSandbox({ xAmzTarget: XAmzTarget1.CodeBuild20161006StopSandbox });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildApi.StopSandboxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildApi
  .stopSandbox({ xAmzTarget: XAmzTarget1.CodeBuild20161006StopSandbox })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1](src/models/xamz-target1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildApi.stopSandbox(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildApi.StopSandboxError](src/resources/aws-codebuild-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildApi.stopSandbox(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildApi.StopSandboxError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Deletereport

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Deletereport](src/resources/aws-codebuild-xamz-target-codebuild20161006-deletereport.ts)

<details>
<summary><code>deleteReport(request: AwsCodebuildXAmzTargetCodebuild20161006Deletereport.DeleteReportRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006Deletereport.DeleteReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild20161006Deletereport.deleteReport({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi.CodeBuild20161006DeleteReport,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild20161006Deletereport.DeleteReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild20161006Deletereport
  .deleteReport({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi.CodeBuild20161006DeleteReport,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi](src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-deletereport-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild20161006Deletereport.deleteReport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild20161006Deletereport.DeleteReportError](src/resources/aws-codebuild-xamz-target-codebuild20161006-deletereport.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild20161006Deletereport.deleteReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006Deletereport.DeleteReportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Listbuilds

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Listbuilds](src/resources/aws-codebuild-xamz-target-codebuild20161006-listbuilds.ts)

<details>
<summary><code>listBuilds(request: AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build IDs, with each build ID representing a single build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild20161006Listbuilds.listBuilds({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi.CodeBuild20161006ListBuilds,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild20161006Listbuilds
  .listBuilds({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi.CodeBuild20161006ListBuilds,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi](src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-listbuilds-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild20161006Listbuilds.listBuilds(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsError](src/resources/aws-codebuild-xamz-target-codebuild20161006-listbuilds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild20161006Listbuilds.listBuilds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Listprojects

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Listprojects](src/resources/aws-codebuild-xamz-target-codebuild20161006-listprojects.ts)

<details>
<summary><code>listProjects(request: AwsCodebuildXAmzTargetCodebuild20161006Listprojects.ListProjectsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006Listprojects.ListProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build project names, with each build project name representing a single build project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild20161006Listprojects.listProjects({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi.CodeBuild20161006ListProjects,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild20161006Listprojects.ListProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild20161006Listprojects
  .listProjects({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi.CodeBuild20161006ListProjects,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi](src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-listprojects-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild20161006Listprojects.listProjects(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild20161006Listprojects.ListProjectsError](src/resources/aws-codebuild-xamz-target-codebuild20161006-listprojects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild20161006Listprojects.listProjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006Listprojects.ListProjectsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Listreports

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Listreports](src/resources/aws-codebuild-xamz-target-codebuild20161006-listreports.ts)

<details>
<summary><code>listReports(request: AwsCodebuildXAmzTargetCodebuild20161006Listreports.ListReportsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006Listreports.ListReportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of ARNs for the reports in the current Amazon Web Services account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild20161006Listreports.listReports({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi.CodeBuild20161006ListReports,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild20161006Listreports.ListReportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild20161006Listreports
  .listReports({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi.CodeBuild20161006ListReports,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi](src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-listreports-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild20161006Listreports.listReports(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild20161006Listreports.ListReportsError](src/resources/aws-codebuild-xamz-target-codebuild20161006-listreports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild20161006Listreports.listReports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006Listreports.ListReportsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Retrybuild

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Retrybuild](src/resources/aws-codebuild-xamz-target-codebuild20161006-retrybuild.ts)

<details>
<summary><code>retryBuild(request: AwsCodebuildXAmzTargetCodebuild20161006Retrybuild.RetryBuildRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006Retrybuild.RetryBuildError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restarts a build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild20161006Retrybuild.retryBuild({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi.CodeBuild20161006RetryBuild,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild20161006Retrybuild.RetryBuildError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild20161006Retrybuild
  .retryBuild({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi.CodeBuild20161006RetryBuild,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi](src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-retrybuild-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild20161006Retrybuild.retryBuild(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild20161006Retrybuild.RetryBuildError](src/resources/aws-codebuild-xamz-target-codebuild20161006-retrybuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild20161006Retrybuild.retryBuild(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006Retrybuild.RetryBuildError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Startbuild

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Startbuild](src/resources/aws-codebuild-xamz-target-codebuild20161006-startbuild.ts)

<details>
<summary><code>startBuild(request: AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts running a build with the settings defined in the project. These setting include: how to run a build, where to get the source code, which build environment to use, which build commands to run, and where to store the build output. You can also start a build run by overriding some of the build settings in the project. The overrides only apply for that specific start build request. The settings in the project are unaltered.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild20161006Startbuild.startBuild({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi.CodeBuild20161006StartBuild,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild20161006Startbuild
  .startBuild({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi.CodeBuild20161006StartBuild,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi](src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-startbuild-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild20161006Startbuild.startBuild(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildError](src/resources/aws-codebuild-xamz-target-codebuild20161006-startbuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild20161006Startbuild.startBuild(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi

> Source: [AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi](src/resources/aws-codebuild-xamz-target-codebuild20161006-stopbuild-api.ts)

<details>
<summary><code>stopBuild(request: AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi.StopBuildRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi.StopBuildError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attempts to stop running a build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild20161006StopbuildApi.stopBuild({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi.CodeBuild20161006StopBuild,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi.StopBuildError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild20161006StopbuildApi
  .stopBuild({
    xAmzTarget:
      XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi.CodeBuild20161006StopBuild,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi](src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-stopbuild-api-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild20161006StopbuildApi.stopBuild(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi.StopBuildError](src/resources/aws-codebuild-xamz-target-codebuild20161006-stopbuild-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild20161006StopbuildApi.stopBuild(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi.StopBuildError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild

> Source: [AwsCodebuildXAmzTargetCodebuild](src/resources/aws-codebuild-xamz-target-codebuild.ts)

<details>
<summary><code>batchDeleteBuilds(request: AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes one or more builds.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.batchDeleteBuilds({
    xAmzTarget: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006BatchDeleteBuilds,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .batchDeleteBuilds({
    xAmzTarget: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006BatchDeleteBuilds,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi](src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.batchDeleteBuilds(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.batchDeleteBuilds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchGetBuildBatches(request: AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about one or more batch builds.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.batchGetBuildBatches({
    xAmzTarget: XAmzTarget3.CodeBuild20161006BatchGetBuildBatches,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .batchGetBuildBatches({ xAmzTarget: XAmzTarget3.CodeBuild20161006BatchGetBuildBatches })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3](src/models/xamz-target3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.batchGetBuildBatches(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.batchGetBuildBatches(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchGetBuilds(request: AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more builds.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.batchGetBuilds({
    xAmzTarget: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006BatchGetBuilds,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .batchGetBuilds({
    xAmzTarget: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006BatchGetBuilds,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi](src/models/xamz-target1-aws-code-build-aws-codebuild-xamz-target-codebuild-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.batchGetBuilds(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.batchGetBuilds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchGetProjects(request: AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more build projects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.batchGetProjects({
    xAmzTarget: XAmzTarget6.CodeBuild20161006BatchGetProjects,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .batchGetProjects({ xAmzTarget: XAmzTarget6.CodeBuild20161006BatchGetProjects })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget6](src/models/xamz-target6.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.batchGetProjects(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.batchGetProjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchGetReportGroups(request: AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of report groups.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.batchGetReportGroups({
    xAmzTarget: XAmzTarget10.CodeBuild20161006BatchGetReportGroups,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .batchGetReportGroups({ xAmzTarget: XAmzTarget10.CodeBuild20161006BatchGetReportGroups })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget10](src/models/xamz-target10.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.batchGetReportGroups(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.batchGetReportGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchGetReports(request: AwsCodebuildXAmzTargetCodebuild.BatchGetReportsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetReportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of reports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.batchGetReports({
    xAmzTarget: XAmzTarget15.CodeBuild20161006BatchGetReports,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.BatchGetReportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .batchGetReports({ xAmzTarget: XAmzTarget15.CodeBuild20161006BatchGetReports })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget15](src/models/xamz-target15.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.batchGetReports(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.BatchGetReportsError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.batchGetReports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetReportsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProject(request: AwsCodebuildXAmzTargetCodebuild.CreateProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.CreateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a build project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.createProject({
    xAmzTarget: XAmzTarget7.CodeBuild20161006CreateProject,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.CreateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .createProject({ xAmzTarget: XAmzTarget7.CodeBuild20161006CreateProject })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget7](src/models/xamz-target7.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.createProject(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.CreateProjectError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.createProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.CreateProjectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createReportGroup(request: AwsCodebuildXAmzTargetCodebuild.CreateReportGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.CreateReportGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a report group. A report group contains a collection of reports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.createReportGroup({
    xAmzTarget: XAmzTarget11.CodeBuild20161006CreateReportGroup,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.CreateReportGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .createReportGroup({ xAmzTarget: XAmzTarget11.CodeBuild20161006CreateReportGroup })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget11](src/models/xamz-target11.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.createReportGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.CreateReportGroupError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.createReportGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.CreateReportGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createWebhook(request: AwsCodebuildXAmzTargetCodebuild.CreateWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.CreateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository. If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in Change a Build Project's Settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.createWebhook({
    xAmzTarget: XAmzTarget17.CodeBuild20161006CreateWebhook,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.CreateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .createWebhook({ xAmzTarget: XAmzTarget17.CodeBuild20161006CreateWebhook })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget17](src/models/xamz-target17.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.createWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.CreateWebhookError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.createWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.CreateWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBuildBatch(request: AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a batch build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.deleteBuildBatch({
    xAmzTarget: XAmzTarget20.CodeBuild20161006DeleteBuildBatch,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .deleteBuildBatch({ xAmzTarget: XAmzTarget20.CodeBuild20161006DeleteBuildBatch })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget20](src/models/xamz-target20.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.deleteBuildBatch(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.deleteBuildBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProject(request: AwsCodebuildXAmzTargetCodebuild.DeleteProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DeleteProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a build project. When you delete a project, its builds are not deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.deleteProject({
    xAmzTarget: XAmzTarget8.CodeBuild20161006DeleteProject,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.DeleteProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .deleteProject({ xAmzTarget: XAmzTarget8.CodeBuild20161006DeleteProject })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget8](src/models/xamz-target8.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.deleteProject(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.DeleteProjectError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.deleteProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DeleteProjectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteReportGroup(request: AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a report group. Before you delete a report group, you must delete its reports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.deleteReportGroup({
    xAmzTarget: XAmzTarget12.CodeBuild20161006DeleteReportGroup,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .deleteReportGroup({ xAmzTarget: XAmzTarget12.CodeBuild20161006DeleteReportGroup })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget12](src/models/xamz-target12.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.deleteReportGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.deleteReportGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteResourcePolicy(request: AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a resource policy that is identified by its resource ARN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.deleteResourcePolicy({
    xAmzTarget: XAmzTarget23.CodeBuild20161006DeleteResourcePolicy,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .deleteResourcePolicy({ xAmzTarget: XAmzTarget23.CodeBuild20161006DeleteResourcePolicy })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget23](src/models/xamz-target23.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.deleteResourcePolicy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.deleteResourcePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSourceCredentials(request: AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.deleteSourceCredentials({
    xAmzTarget: XAmzTarget26.CodeBuild20161006DeleteSourceCredentials,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .deleteSourceCredentials({ xAmzTarget: XAmzTarget26.CodeBuild20161006DeleteSourceCredentials })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget26](src/models/xamz-target26.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.deleteSourceCredentials(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.deleteSourceCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: AwsCodebuildXAmzTargetCodebuild.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.deleteWebhook({
    xAmzTarget: XAmzTarget18.CodeBuild20161006DeleteWebhook,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .deleteWebhook({ xAmzTarget: XAmzTarget18.CodeBuild20161006DeleteWebhook })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget18](src/models/xamz-target18.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.deleteWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.DeleteWebhookError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DeleteWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeCodeCoverages(request: AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves one or more code coverage reports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.describeCodeCoverages({
    xAmzTarget: XAmzTarget29.CodeBuild20161006DescribeCodeCoverages,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .describeCodeCoverages({ xAmzTarget: XAmzTarget29.CodeBuild20161006DescribeCodeCoverages })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget29](src/models/xamz-target29.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.describeCodeCoverages(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.describeCodeCoverages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeTestCases(request: AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of details about test cases for a report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.describeTestCases({
    xAmzTarget: XAmzTarget30.CodeBuild20161006DescribeTestCases,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .describeTestCases({ xAmzTarget: XAmzTarget30.CodeBuild20161006DescribeTestCases })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget30](src/models/xamz-target30.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.describeTestCases(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.describeTestCases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReportGroupTrend(request: AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyzes and accumulates test report values for the specified test reports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.getReportGroupTrend({
    xAmzTarget: XAmzTarget31.CodeBuild20161006GetReportGroupTrend,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .getReportGroupTrend({ xAmzTarget: XAmzTarget31.CodeBuild20161006GetReportGroupTrend })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget31](src/models/xamz-target31.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.getReportGroupTrend(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.getReportGroupTrend(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getResourcePolicy(request: AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a resource policy that is identified by its resource ARN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.getResourcePolicy({
    xAmzTarget: XAmzTarget24.CodeBuild20161006GetResourcePolicy,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .getResourcePolicy({ xAmzTarget: XAmzTarget24.CodeBuild20161006GetResourcePolicy })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget24](src/models/xamz-target24.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.getResourcePolicy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.getResourcePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importSourceCredentials(request: AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.importSourceCredentials({
    xAmzTarget: XAmzTarget27.CodeBuild20161006ImportSourceCredentials,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .importSourceCredentials({ xAmzTarget: XAmzTarget27.CodeBuild20161006ImportSourceCredentials })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget27](src/models/xamz-target27.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.importSourceCredentials(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.importSourceCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>invalidateProjectCache(request: AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets the cache for a project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.invalidateProjectCache({
    xAmzTarget: XAmzTarget32.CodeBuild20161006InvalidateProjectCache,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .invalidateProjectCache({ xAmzTarget: XAmzTarget32.CodeBuild20161006InvalidateProjectCache })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget32](src/models/xamz-target32.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.invalidateProjectCache(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.invalidateProjectCache(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuildBatches(request: AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the identifiers of your build batches in the current region.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.listBuildBatches({
    xAmzTarget: XAmzTarget4.CodeBuild20161006ListBuildBatches,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .listBuildBatches({ xAmzTarget: XAmzTarget4.CodeBuild20161006ListBuildBatches })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4](src/models/xamz-target4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.listBuildBatches(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.listBuildBatches(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuildBatchesForProject(request: AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the identifiers of the build batches for a specific project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.listBuildBatchesForProject({
    xAmzTarget: XAmzTarget5.CodeBuild20161006ListBuildBatchesForProject,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .listBuildBatchesForProject({ xAmzTarget: XAmzTarget5.CodeBuild20161006ListBuildBatchesForProject })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget5](src/models/xamz-target5.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.listBuildBatchesForProject(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.listBuildBatchesForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuildsForProject(request: AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.listBuildsForProject({
    xAmzTarget:
      XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006ListBuildsForProject,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .listBuildsForProject({
    xAmzTarget:
      XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006ListBuildsForProject,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi](src/models/xamz-target2-aws-code-build-aws-codebuild-xamz-target-codebuild-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.listBuildsForProject(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.listBuildsForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCuratedEnvironmentImages(request: AwsCodebuildXAmzTargetCodebuild.ListCuratedEnvironmentImagesRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about Docker images that are managed by CodeBuild.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.listCuratedEnvironmentImages({
    xAmzTarget: XAmzTarget34.CodeBuild20161006ListCuratedEnvironmentImages,
  });
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
const result = await client.awsCodebuildXAmzTargetCodebuild
  .listCuratedEnvironmentImages({ xAmzTarget: XAmzTarget34.CodeBuild20161006ListCuratedEnvironmentImages })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>xAmzTarget</code> | <code>[XAmzTarget34](src/models/xamz-target34.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.listCuratedEnvironmentImages(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.listCuratedEnvironmentImages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReportGroups(request: AwsCodebuildXAmzTargetCodebuild.ListReportGroupsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListReportGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list ARNs for the report groups in the current Amazon Web Services account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.listReportGroups({
    xAmzTarget: XAmzTarget13.CodeBuild20161006ListReportGroups,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.ListReportGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .listReportGroups({ xAmzTarget: XAmzTarget13.CodeBuild20161006ListReportGroups })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget13](src/models/xamz-target13.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.listReportGroups(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.ListReportGroupsError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.listReportGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListReportGroupsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReportsForReportGroup(request: AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of ARNs for the reports that belong to a ReportGroup.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.listReportsForReportGroup({
    xAmzTarget: XAmzTarget16.CodeBuild20161006ListReportsForReportGroup,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .listReportsForReportGroup({ xAmzTarget: XAmzTarget16.CodeBuild20161006ListReportsForReportGroup })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget16](src/models/xamz-target16.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.listReportsForReportGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.listReportsForReportGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSharedProjects(request: AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of projects that are shared with other Amazon Web Services accounts or users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.listSharedProjects({
    xAmzTarget: XAmzTarget35.CodeBuild20161006ListSharedProjects,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .listSharedProjects({ xAmzTarget: XAmzTarget35.CodeBuild20161006ListSharedProjects })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget35](src/models/xamz-target35.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.listSharedProjects(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.listSharedProjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSharedReportGroups(request: AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of report groups that are shared with other Amazon Web Services accounts or users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.listSharedReportGroups({
    xAmzTarget: XAmzTarget36.CodeBuild20161006ListSharedReportGroups,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .listSharedReportGroups({ xAmzTarget: XAmzTarget36.CodeBuild20161006ListSharedReportGroups })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget36](src/models/xamz-target36.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.listSharedReportGroups(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.listSharedReportGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSourceCredentials(request: AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of SourceCredentialsInfo objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.listSourceCredentials({
    xAmzTarget: XAmzTarget28.CodeBuild20161006ListSourceCredentials,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .listSourceCredentials({ xAmzTarget: XAmzTarget28.CodeBuild20161006ListSourceCredentials })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget28](src/models/xamz-target28.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.listSourceCredentials(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.listSourceCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putResourcePolicy(request: AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stores a resource policy for the ARN of a Project or ReportGroup object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.putResourcePolicy({
    xAmzTarget: XAmzTarget25.CodeBuild20161006PutResourcePolicy,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .putResourcePolicy({ xAmzTarget: XAmzTarget25.CodeBuild20161006PutResourcePolicy })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget25](src/models/xamz-target25.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.putResourcePolicy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.putResourcePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retryBuildBatch(request: AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restarts a failed batch build. Only batch builds that have failed can be retried.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.retryBuildBatch({
    xAmzTarget: XAmzTarget33.CodeBuild20161006RetryBuildBatch,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .retryBuildBatch({ xAmzTarget: XAmzTarget33.CodeBuild20161006RetryBuildBatch })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget33](src/models/xamz-target33.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.retryBuildBatch(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.retryBuildBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startBuildBatch(request: AwsCodebuildXAmzTargetCodebuild.StartBuildBatchRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.StartBuildBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a batch build for a project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.startBuildBatch({
    xAmzTarget: XAmzTarget21.CodeBuild20161006StartBuildBatch,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.StartBuildBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .startBuildBatch({ xAmzTarget: XAmzTarget21.CodeBuild20161006StartBuildBatch })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget21](src/models/xamz-target21.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.startBuildBatch(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.StartBuildBatchError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.startBuildBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.StartBuildBatchError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopBuildBatch(request: AwsCodebuildXAmzTargetCodebuild.StopBuildBatchRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.StopBuildBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a running batch build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.stopBuildBatch({
    xAmzTarget: XAmzTarget22.CodeBuild20161006StopBuildBatch,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.StopBuildBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .stopBuildBatch({ xAmzTarget: XAmzTarget22.CodeBuild20161006StopBuildBatch })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget22](src/models/xamz-target22.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.stopBuildBatch(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.StopBuildBatchError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.stopBuildBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.StopBuildBatchError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProject(request: AwsCodebuildXAmzTargetCodebuild.UpdateProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.UpdateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the settings of a build project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.updateProject({
    xAmzTarget: XAmzTarget9.CodeBuild20161006UpdateProject,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.UpdateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .updateProject({ xAmzTarget: XAmzTarget9.CodeBuild20161006UpdateProject })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget9](src/models/xamz-target9.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.updateProject(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.UpdateProjectError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.updateProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.UpdateProjectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProjectVisibility(request: AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see Public build projects in the CodeBuild User Guide. The following should be kept in mind when making your projects public: All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public. All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are: Do not store sensitive values in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values. Follow Best practices for using webhooks in the CodeBuild User Guide to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible. A malicious user can use public builds to distribute malicious artifacts. We recommend that yo

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.updateProjectVisibility({
    xAmzTarget: XAmzTarget37.CodeBuild20161006UpdateProjectVisibility,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .updateProjectVisibility({ xAmzTarget: XAmzTarget37.CodeBuild20161006UpdateProjectVisibility })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget37](src/models/xamz-target37.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.updateProjectVisibility(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.updateProjectVisibility(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateReportGroup(request: AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a report group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.updateReportGroup({
    xAmzTarget: XAmzTarget14.CodeBuild20161006UpdateReportGroup,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .updateReportGroup({ xAmzTarget: XAmzTarget14.CodeBuild20161006UpdateReportGroup })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget14](src/models/xamz-target14.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.updateReportGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.updateReportGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhook(request: AwsCodebuildXAmzTargetCodebuild.UpdateWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsCodebuildXAmzTargetCodebuild.UpdateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the webhook associated with an CodeBuild build project. If you use Bitbucket for your repository, rotateSecret is ignored.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsCodebuildXAmzTargetCodebuild.updateWebhook({
    xAmzTarget: XAmzTarget19.CodeBuild20161006UpdateWebhook,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsCodebuildXAmzTargetCodebuild.UpdateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsCodebuildXAmzTargetCodebuild
  .updateWebhook({ xAmzTarget: XAmzTarget19.CodeBuild20161006UpdateWebhook })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget19](src/models/xamz-target19.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsCodebuildXAmzTargetCodebuild.updateWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsCodebuildXAmzTargetCodebuild.UpdateWebhookError](src/resources/aws-codebuild-xamz-target-codebuild.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsCodebuildXAmzTargetCodebuild.updateWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsCodebuildXAmzTargetCodebuild.UpdateWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Builds

> Source: [Builds](src/resources/builds.ts)

<details>
<summary><code>batchDeleteBuilds2(request: Builds.BatchDeleteBuilds2Request, options?: RequestOptions): ApiPromise&lt;undefined, Builds.BatchDeleteBuilds2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes one or more builds.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.builds.batchDeleteBuilds2({
    xAmzTarget: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006BatchDeleteBuilds,
  });
} catch (err) {
  // TODO: Handle 'err' of type Builds.BatchDeleteBuilds2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .batchDeleteBuilds2({
    xAmzTarget: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006BatchDeleteBuilds,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi](src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.batchDeleteBuilds2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Builds.BatchDeleteBuilds2Error](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.batchDeleteBuilds2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Builds.BatchDeleteBuilds2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchGetBuilds2(request: Builds.BatchGetBuilds2Request, options?: RequestOptions): ApiPromise&lt;undefined, Builds.BatchGetBuilds2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more builds.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.builds.batchGetBuilds2({
    xAmzTarget: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006BatchGetBuilds,
  });
} catch (err) {
  // TODO: Handle 'err' of type Builds.BatchGetBuilds2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .batchGetBuilds2({
    xAmzTarget: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006BatchGetBuilds,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi](src/models/xamz-target1-aws-code-build-aws-codebuild-xamz-target-codebuild-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.batchGetBuilds2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Builds.BatchGetBuilds2Error](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.batchGetBuilds2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Builds.BatchGetBuilds2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuilds2(request: Builds.ListBuilds2Request, options?: RequestOptions): ApiPromise&lt;undefined, Builds.ListBuilds2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build IDs, with each build ID representing a single build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.builds.listBuilds2({
    xAmzTarget: XAmzTarget2AwsCodeBuildBuildsApi.CodeBuild20161006ListBuilds,
  });
} catch (err) {
  // TODO: Handle 'err' of type Builds.ListBuilds2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .listBuilds2({ xAmzTarget: XAmzTarget2AwsCodeBuildBuildsApi.CodeBuild20161006ListBuilds })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsCodeBuildBuildsApi](src/models/xamz-target2-aws-code-build-builds-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.listBuilds2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Builds.ListBuilds2Error](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.listBuilds2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Builds.ListBuilds2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBuildsForProject2(request: Builds.ListBuildsForProject2Request, options?: RequestOptions): ApiPromise&lt;undefined, Builds.ListBuildsForProject2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.builds.listBuildsForProject2({
    xAmzTarget: XAmzTarget3AwsCodeBuildBuildsApi.CodeBuild20161006ListBuildsForProject,
  });
} catch (err) {
  // TODO: Handle 'err' of type Builds.ListBuildsForProject2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .listBuildsForProject2({
    xAmzTarget: XAmzTarget3AwsCodeBuildBuildsApi.CodeBuild20161006ListBuildsForProject,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsCodeBuildBuildsApi](src/models/xamz-target3-aws-code-build-builds-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.listBuildsForProject2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Builds.ListBuildsForProject2Error](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.listBuildsForProject2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Builds.ListBuildsForProject2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startBuild2(request: Builds.StartBuild2Request, options?: RequestOptions): ApiPromise&lt;undefined, Builds.StartBuild2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts running a build with the settings defined in the project. These setting include: how to run a build, where to get the source code, which build environment to use, which build commands to run, and where to store the build output. You can also start a build run by overriding some of the build settings in the project. The overrides only apply for that specific start build request. The settings in the project are unaltered.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.builds.startBuild2({
    xAmzTarget: XAmzTarget4AwsCodeBuildBuildsApi.CodeBuild20161006StartBuild,
  });
} catch (err) {
  // TODO: Handle 'err' of type Builds.StartBuild2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .startBuild2({ xAmzTarget: XAmzTarget4AwsCodeBuildBuildsApi.CodeBuild20161006StartBuild })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsCodeBuildBuildsApi](src/models/xamz-target4-aws-code-build-builds-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.startBuild2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Builds.StartBuild2Error](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.startBuild2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Builds.StartBuild2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopBuild2(request: Builds.StopBuild2Request, options?: RequestOptions): ApiPromise&lt;undefined, Builds.StopBuild2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attempts to stop running a build.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.builds.stopBuild2({ xAmzTarget: XAmzTarget5AwsCodeBuildBuildsApi.CodeBuild20161006StopBuild });
} catch (err) {
  // TODO: Handle 'err' of type Builds.StopBuild2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.builds
  .stopBuild2({ xAmzTarget: XAmzTarget5AwsCodeBuildBuildsApi.CodeBuild20161006StopBuild })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget5AwsCodeBuildBuildsApi](src/models/xamz-target5-aws-code-build-builds-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.builds.stopBuild2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Builds.StopBuild2Error](src/resources/builds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.builds.stopBuild2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Builds.StopBuild2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CommandExecutionApi

> Source: [CommandExecutionApi](src/resources/command-execution-api.ts)

<details>
<summary><code>batchGetCommandExecutions(request: CommandExecutionApi.BatchGetCommandExecutionsRequest, options?: RequestOptions): ApiPromise&lt;undefined, CommandExecutionApi.BatchGetCommandExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about the command executions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.commandExecutionApi.batchGetCommandExecutions({
    xAmzTarget: XAmzTargetAwsCodeBuildCommandExecutionApi.CodeBuild20161006BatchGetCommandExecutions,
  });
} catch (err) {
  // TODO: Handle 'err' of type CommandExecutionApi.BatchGetCommandExecutionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commandExecutionApi
  .batchGetCommandExecutions({
    xAmzTarget: XAmzTargetAwsCodeBuildCommandExecutionApi.CodeBuild20161006BatchGetCommandExecutions,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildCommandExecutionApi](src/models/xamz-target-aws-code-build-command-execution-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commandExecutionApi.batchGetCommandExecutions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CommandExecutionApi.BatchGetCommandExecutionsError](src/resources/command-execution-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commandExecutionApi.batchGetCommandExecutions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CommandExecutionApi.BatchGetCommandExecutionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCommandExecutionsForSandbox(request: CommandExecutionApi.ListCommandExecutionsForSandboxRequest, options?: RequestOptions): ApiPromise&lt;undefined, CommandExecutionApi.ListCommandExecutionsForSandboxError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of command executions for a sandbox.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.commandExecutionApi.listCommandExecutionsForSandbox({
    xAmzTarget: XAmzTarget1AwsCodeBuildCommandExecutionApi.CodeBuild20161006ListCommandExecutionsForSandbox,
  });
} catch (err) {
  // TODO: Handle 'err' of type CommandExecutionApi.ListCommandExecutionsForSandboxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commandExecutionApi
  .listCommandExecutionsForSandbox({
    xAmzTarget: XAmzTarget1AwsCodeBuildCommandExecutionApi.CodeBuild20161006ListCommandExecutionsForSandbox,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsCodeBuildCommandExecutionApi](src/models/xamz-target1-aws-code-build-command-execution-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commandExecutionApi.listCommandExecutionsForSandbox(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CommandExecutionApi.ListCommandExecutionsForSandboxError](src/resources/command-execution-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commandExecutionApi.listCommandExecutionsForSandbox(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CommandExecutionApi.ListCommandExecutionsForSandboxError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startCommandExecution(request: CommandExecutionApi.StartCommandExecutionRequest, options?: RequestOptions): ApiPromise&lt;undefined, CommandExecutionApi.StartCommandExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a command execution.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.commandExecutionApi.startCommandExecution({
    xAmzTarget: XAmzTarget2AwsCodeBuildCommandExecutionApi.CodeBuild20161006StartCommandExecution,
  });
} catch (err) {
  // TODO: Handle 'err' of type CommandExecutionApi.StartCommandExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commandExecutionApi
  .startCommandExecution({
    xAmzTarget: XAmzTarget2AwsCodeBuildCommandExecutionApi.CodeBuild20161006StartCommandExecution,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsCodeBuildCommandExecutionApi](src/models/xamz-target2-aws-code-build-command-execution-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commandExecutionApi.startCommandExecution(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CommandExecutionApi.StartCommandExecutionError](src/resources/command-execution-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commandExecutionApi.startCommandExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CommandExecutionApi.StartCommandExecutionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FleetApi

> Source: [FleetApi](src/resources/fleet-api.ts)

<details>
<summary><code>batchGetFleets(request: FleetApi.BatchGetFleetsRequest, options?: RequestOptions): ApiPromise&lt;undefined, FleetApi.BatchGetFleetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more compute fleets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fleetApi.batchGetFleets({
    xAmzTarget: XAmzTargetAwsCodeBuildFleetApi.CodeBuild20161006BatchGetFleets,
  });
} catch (err) {
  // TODO: Handle 'err' of type FleetApi.BatchGetFleetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fleetApi
  .batchGetFleets({ xAmzTarget: XAmzTargetAwsCodeBuildFleetApi.CodeBuild20161006BatchGetFleets })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildFleetApi](src/models/xamz-target-aws-code-build-fleet-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fleetApi.batchGetFleets(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FleetApi.BatchGetFleetsError](src/resources/fleet-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fleetApi.batchGetFleets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FleetApi.BatchGetFleetsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createFleet(request: FleetApi.CreateFleetRequest, options?: RequestOptions): ApiPromise&lt;undefined, FleetApi.CreateFleetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a compute fleet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fleetApi.createFleet({
    xAmzTarget: XAmzTarget1AwsCodeBuildFleetApi.CodeBuild20161006CreateFleet,
  });
} catch (err) {
  // TODO: Handle 'err' of type FleetApi.CreateFleetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fleetApi
  .createFleet({ xAmzTarget: XAmzTarget1AwsCodeBuildFleetApi.CodeBuild20161006CreateFleet })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsCodeBuildFleetApi](src/models/xamz-target1-aws-code-build-fleet-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fleetApi.createFleet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FleetApi.CreateFleetError](src/resources/fleet-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fleetApi.createFleet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FleetApi.CreateFleetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteFleet(request: FleetApi.DeleteFleetRequest, options?: RequestOptions): ApiPromise&lt;undefined, FleetApi.DeleteFleetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a compute fleet. When you delete a compute fleet, its builds are not deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fleetApi.deleteFleet({
    xAmzTarget: XAmzTarget2AwsCodeBuildFleetApi.CodeBuild20161006DeleteFleet,
  });
} catch (err) {
  // TODO: Handle 'err' of type FleetApi.DeleteFleetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fleetApi
  .deleteFleet({ xAmzTarget: XAmzTarget2AwsCodeBuildFleetApi.CodeBuild20161006DeleteFleet })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsCodeBuildFleetApi](src/models/xamz-target2-aws-code-build-fleet-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fleetApi.deleteFleet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FleetApi.DeleteFleetError](src/resources/fleet-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fleetApi.deleteFleet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FleetApi.DeleteFleetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFleets(request: FleetApi.ListFleetsRequest, options?: RequestOptions): ApiPromise&lt;undefined, FleetApi.ListFleetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of compute fleet names with each compute fleet name representing a single compute fleet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fleetApi.listFleets({
    xAmzTarget: XAmzTarget3AwsCodeBuildFleetApi.CodeBuild20161006ListFleets,
  });
} catch (err) {
  // TODO: Handle 'err' of type FleetApi.ListFleetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fleetApi
  .listFleets({ xAmzTarget: XAmzTarget3AwsCodeBuildFleetApi.CodeBuild20161006ListFleets })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsCodeBuildFleetApi](src/models/xamz-target3-aws-code-build-fleet-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fleetApi.listFleets(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FleetApi.ListFleetsError](src/resources/fleet-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fleetApi.listFleets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FleetApi.ListFleetsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFleet(request: FleetApi.UpdateFleetRequest, options?: RequestOptions): ApiPromise&lt;undefined, FleetApi.UpdateFleetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a compute fleet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fleetApi.updateFleet({
    xAmzTarget: XAmzTarget4AwsCodeBuildFleetApi.CodeBuild20161006UpdateFleet,
  });
} catch (err) {
  // TODO: Handle 'err' of type FleetApi.UpdateFleetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fleetApi
  .updateFleet({ xAmzTarget: XAmzTarget4AwsCodeBuildFleetApi.CodeBuild20161006UpdateFleet })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsCodeBuildFleetApi](src/models/xamz-target4-aws-code-build-fleet-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fleetApi.updateFleet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FleetApi.UpdateFleetError](src/resources/fleet-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fleetApi.updateFleet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FleetApi.UpdateFleetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/resources/projects.ts)

<details>
<summary><code>batchGetProjects2(request: Projects.BatchGetProjects2Request, options?: RequestOptions): ApiPromise&lt;undefined, Projects.BatchGetProjects2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more build projects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projects.batchGetProjects2({
    xAmzTarget: XAmzTargetAwsCodeBuildProjectsApi.CodeBuild20161006BatchGetProjects,
  });
} catch (err) {
  // TODO: Handle 'err' of type Projects.BatchGetProjects2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .batchGetProjects2({ xAmzTarget: XAmzTargetAwsCodeBuildProjectsApi.CodeBuild20161006BatchGetProjects })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildProjectsApi](src/models/xamz-target-aws-code-build-projects-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.batchGetProjects2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Projects.BatchGetProjects2Error](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.batchGetProjects2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Projects.BatchGetProjects2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProject2(request: Projects.CreateProject2Request, options?: RequestOptions): ApiPromise&lt;undefined, Projects.CreateProject2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a build project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projects.createProject2({
    xAmzTarget: XAmzTarget1AwsCodeBuildProjectsApi.CodeBuild20161006CreateProject,
  });
} catch (err) {
  // TODO: Handle 'err' of type Projects.CreateProject2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .createProject2({ xAmzTarget: XAmzTarget1AwsCodeBuildProjectsApi.CodeBuild20161006CreateProject })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsCodeBuildProjectsApi](src/models/xamz-target1-aws-code-build-projects-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.createProject2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Projects.CreateProject2Error](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.createProject2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Projects.CreateProject2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProject2(request: Projects.DeleteProject2Request, options?: RequestOptions): ApiPromise&lt;undefined, Projects.DeleteProject2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a build project. When you delete a project, its builds are not deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projects.deleteProject2({
    xAmzTarget: XAmzTarget2AwsCodeBuildProjectsApi.CodeBuild20161006DeleteProject,
  });
} catch (err) {
  // TODO: Handle 'err' of type Projects.DeleteProject2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .deleteProject2({ xAmzTarget: XAmzTarget2AwsCodeBuildProjectsApi.CodeBuild20161006DeleteProject })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsCodeBuildProjectsApi](src/models/xamz-target2-aws-code-build-projects-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.deleteProject2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Projects.DeleteProject2Error](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.deleteProject2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Projects.DeleteProject2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProjects2(request: Projects.ListProjects2Request, options?: RequestOptions): ApiPromise&lt;undefined, Projects.ListProjects2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build project names, with each build project name representing a single build project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projects.listProjects2({
    xAmzTarget: XAmzTarget3AwsCodeBuildProjectsApi.CodeBuild20161006ListProjects,
  });
} catch (err) {
  // TODO: Handle 'err' of type Projects.ListProjects2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .listProjects2({ xAmzTarget: XAmzTarget3AwsCodeBuildProjectsApi.CodeBuild20161006ListProjects })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsCodeBuildProjectsApi](src/models/xamz-target3-aws-code-build-projects-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.listProjects2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Projects.ListProjects2Error](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.listProjects2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Projects.ListProjects2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProject2(request: Projects.UpdateProject2Request, options?: RequestOptions): ApiPromise&lt;undefined, Projects.UpdateProject2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the settings of a build project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projects.updateProject2({
    xAmzTarget: XAmzTarget4AwsCodeBuildProjectsApi.CodeBuild20161006UpdateProject,
  });
} catch (err) {
  // TODO: Handle 'err' of type Projects.UpdateProject2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .updateProject2({ xAmzTarget: XAmzTarget4AwsCodeBuildProjectsApi.CodeBuild20161006UpdateProject })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsCodeBuildProjectsApi](src/models/xamz-target4-aws-code-build-projects-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.updateProject2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Projects.UpdateProject2Error](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.updateProject2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Projects.UpdateProject2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sandboxe

> Source: [Sandboxe](src/resources/sandboxe.ts)

<details>
<summary><code>batchGetSandboxes(request: Sandboxe.BatchGetSandboxesRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sandboxe.BatchGetSandboxesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about the sandbox status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sandboxe.batchGetSandboxes({
    xAmzTarget: XAmzTargetAwsCodeBuildSandboxeApi.CodeBuild20161006BatchGetSandboxes,
  });
} catch (err) {
  // TODO: Handle 'err' of type Sandboxe.BatchGetSandboxesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxe
  .batchGetSandboxes({ xAmzTarget: XAmzTargetAwsCodeBuildSandboxeApi.CodeBuild20161006BatchGetSandboxes })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsCodeBuildSandboxeApi](src/models/xamz-target-aws-code-build-sandboxe-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxe.batchGetSandboxes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sandboxe.BatchGetSandboxesError](src/resources/sandboxe.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxe.batchGetSandboxes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sandboxe.BatchGetSandboxesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSandboxes(request: Sandboxe.ListSandboxesRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sandboxe.ListSandboxesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of sandboxes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sandboxe.listSandboxes({
    xAmzTarget: XAmzTarget1AwsCodeBuildSandboxeApi.CodeBuild20161006ListSandboxes,
  });
} catch (err) {
  // TODO: Handle 'err' of type Sandboxe.ListSandboxesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxe
  .listSandboxes({ xAmzTarget: XAmzTarget1AwsCodeBuildSandboxeApi.CodeBuild20161006ListSandboxes })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsCodeBuildSandboxeApi](src/models/xamz-target1-aws-code-build-sandboxe-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxe.listSandboxes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sandboxe.ListSandboxesError](src/resources/sandboxe.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxe.listSandboxes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sandboxe.ListSandboxesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSandboxesForProject(request: Sandboxe.ListSandboxesForProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sandboxe.ListSandboxesForProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of sandboxes for a given project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sandboxe.listSandboxesForProject({
    xAmzTarget: XAmzTarget2AwsCodeBuildSandboxeApi.CodeBuild20161006ListSandboxesForProject,
  });
} catch (err) {
  // TODO: Handle 'err' of type Sandboxe.ListSandboxesForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxe
  .listSandboxesForProject({
    xAmzTarget: XAmzTarget2AwsCodeBuildSandboxeApi.CodeBuild20161006ListSandboxesForProject,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsCodeBuildSandboxeApi](src/models/xamz-target2-aws-code-build-sandboxe-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxe.listSandboxesForProject(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sandboxe.ListSandboxesForProjectError](src/resources/sandboxe.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxe.listSandboxesForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sandboxe.ListSandboxesForProjectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsCodeBuildError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

