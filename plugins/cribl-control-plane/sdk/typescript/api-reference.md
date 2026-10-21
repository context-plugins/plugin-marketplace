# Reference

> Source: [CriblApiReferenceClient](src/client.ts)

## AuthApi

> Source: [AuthApi](src/resources/auth-api.ts)

<details>
<summary><code>createAuthLogin(request: AuthApi.CreateAuthLoginRequest, options?: RequestOptions): ApiPromise&lt;AuthTokenModel, AuthApi.CreateAuthLoginError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is unavailable on Cribl.Cloud. Instead, follow the instructions at https://docs.cribl.io/stream/api-tutorials/#criblcloud to get an Auth token for Cribl.Cloud.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authApi.createAuthLogin({
    body: { password: "yourPassword", username: "yourUsername" },
  });
  // TODO: Handle 'response' of type AuthTokenModel
} catch (err) {
  // TODO: Handle 'err' of type AuthApi.CreateAuthLoginError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authApi.createAuthLogin({
  body: { password: "yourPassword", username: "yourUsername" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthTokenModel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LoginInfo](src/models/login-info.ts)</code> | LoginInfo object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authApi.createAuthLogin(request)`

- **OnSuccess**: <code>[AuthTokenModel](src/models/auth-token-model.ts)</code>
- **OnError**: throws <code>[AuthApi.CreateAuthLoginError](src/resources/auth-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authApi.createAuthLogin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthTokenModel, AuthApi.CreateAuthLoginError&gt;</code>, with `result.value` of type <code>[AuthTokenModel](src/models/auth-token-model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CollectorsApi

> Source: [CollectorsApi](src/resources/collectors-api.ts)

<details>
<summary><code>createSavedJob(request: CollectorsApi.CreateSavedJobRequest, options?: RequestOptions): ApiPromise&lt;CountedSavedJobResponse, CollectorsApi.CreateSavedJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Collector.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collectorsApi.createSavedJob({
    body: {
      id: "s3-collector",
      type: JobType.Collection,
      schedule: {
        enabled: true,
        cronSchedule: "0 */6 * * *",
        run: {
          logLevel: LogLevel18.Info,
          mode: "run",
          timeRangeType: "relative",
          earliest: -300,
          expression: "true",
        },
      },
      collector: {
        type: "s3",
        conf: {
          bucket: "'my-data-bucket'",
          region: "us-east-1",
          partitioningScheme: PartitioningScheme1.Ddss,
          awsAuthenticationMethod: AuthenticationMethod.Auto,
        },
      },
    },
  });
  // TODO: Handle 'response' of type CountedSavedJobResponse
} catch (err) {
  // TODO: Handle 'err' of type CollectorsApi.CreateSavedJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collectorsApi.createSavedJob({
  body: {
    id: "s3-collector",
    type: JobType.Collection,
    schedule: {
      enabled: true,
      cronSchedule: "0 */6 * * *",
      run: {
        logLevel: LogLevel18.Info,
        mode: "run",
        timeRangeType: "relative",
        earliest: -300,
        expression: "true",
      },
    },
    collector: {
      type: "s3",
      conf: {
        bucket: "'my-data-bucket'",
        region: "us-east-1",
        partitioningScheme: PartitioningScheme1.Ddss,
        awsAuthenticationMethod: AuthenticationMethod.Auto,
      },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedSavedJobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SavedJob](src/models/unions/saved-job.ts)</code> | SavedJob object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collectorsApi.createSavedJob(request)`

- **OnSuccess**: <code>[CountedSavedJobResponse](src/models/counted-saved-job-response.ts)</code>
- **OnError**: throws <code>[CollectorsApi.CreateSavedJobError](src/resources/collectors-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collectorsApi.createSavedJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedSavedJobResponse, CollectorsApi.CreateSavedJobError&gt;</code>, with `result.value` of type <code>[CountedSavedJobResponse](src/models/counted-saved-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSavedJobById(request: CollectorsApi.DeleteSavedJobByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedSavedJobResponse, CollectorsApi.DeleteSavedJobByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the specified Collector.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collectorsApi.deleteSavedJobById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedSavedJobResponse
} catch (err) {
  // TODO: Handle 'err' of type CollectorsApi.DeleteSavedJobByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collectorsApi.deleteSavedJobById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedSavedJobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Collector to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collectorsApi.deleteSavedJobById(request)`

- **OnSuccess**: <code>[CountedSavedJobResponse](src/models/counted-saved-job-response.ts)</code>
- **OnError**: throws <code>[CollectorsApi.DeleteSavedJobByIdError](src/resources/collectors-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collectorsApi.deleteSavedJobById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedSavedJobResponse, CollectorsApi.DeleteSavedJobByIdError&gt;</code>, with `result.value` of type <code>[CountedSavedJobResponse](src/models/counted-saved-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSavedJob(request: CollectorsApi.GetSavedJobRequest, options?: RequestOptions): ApiPromise&lt;PaginatedSavedJobResponse, CollectorsApi.GetSavedJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Collectors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collectorsApi.getSavedJob();
  // TODO: Handle 'response' of type PaginatedSavedJobResponse
} catch (err) {
  // TODO: Handle 'err' of type CollectorsApi.GetSavedJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collectorsApi.getSavedJob().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedSavedJobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>collectorType?</code> | <code>[CollectorType](src/models/collector-type.ts)</code> | Filter by collector type. |
| <code>offset?</code> | <code>number</code> | Pagination offset |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collectorsApi.getSavedJob(request)`

- **OnSuccess**: <code>[PaginatedSavedJobResponse](src/models/paginated-saved-job-response.ts)</code>
- **OnError**: throws <code>[CollectorsApi.GetSavedJobError](src/resources/collectors-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collectorsApi.getSavedJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedSavedJobResponse, CollectorsApi.GetSavedJobError&gt;</code>, with `result.value` of type <code>[PaginatedSavedJobResponse](src/models/paginated-saved-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSavedJobById(request: CollectorsApi.GetSavedJobByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedSavedJobResponse, CollectorsApi.GetSavedJobByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Collector.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collectorsApi.getSavedJobById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedSavedJobResponse
} catch (err) {
  // TODO: Handle 'err' of type CollectorsApi.GetSavedJobByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collectorsApi.getSavedJobById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedSavedJobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Collector to get. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collectorsApi.getSavedJobById(request)`

- **OnSuccess**: <code>[CountedSavedJobResponse](src/models/counted-saved-job-response.ts)</code>
- **OnError**: throws <code>[CollectorsApi.GetSavedJobByIdError](src/resources/collectors-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collectorsApi.getSavedJobById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedSavedJobResponse, CollectorsApi.GetSavedJobByIdError&gt;</code>, with `result.value` of type <code>[CountedSavedJobResponse](src/models/counted-saved-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSavedJobById(request: CollectorsApi.UpdateSavedJobByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedSavedJobResponse, CollectorsApi.UpdateSavedJobByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Collector.<br/><br/>Provide a complete representation of the Collector that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Collector.<br/><br/>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Collector might not function as expected.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collectorsApi.updateSavedJobById({
    id: "some example string",
    body: {
      id: "s3-collector",
      type: JobType.Collection,
      schedule: {
        enabled: true,
        cronSchedule: "0 */6 * * *",
        run: {
          logLevel: LogLevel18.Info,
          mode: "run",
          timeRangeType: "relative",
          earliest: -300,
          expression: "true",
        },
      },
      collector: {
        type: "s3",
        conf: {
          bucket: "'my-data-bucket'",
          region: "us-east-1",
          partitioningScheme: PartitioningScheme1.Ddss,
          awsAuthenticationMethod: AuthenticationMethod.Auto,
        },
      },
    },
  });
  // TODO: Handle 'response' of type CountedSavedJobResponse
} catch (err) {
  // TODO: Handle 'err' of type CollectorsApi.UpdateSavedJobByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collectorsApi.updateSavedJobById({
  id: "some example string",
  body: {
    id: "s3-collector",
    type: JobType.Collection,
    schedule: {
      enabled: true,
      cronSchedule: "0 */6 * * *",
      run: {
        logLevel: LogLevel18.Info,
        mode: "run",
        timeRangeType: "relative",
        earliest: -300,
        expression: "true",
      },
    },
    collector: {
      type: "s3",
      conf: {
        bucket: "'my-data-bucket'",
        region: "us-east-1",
        partitioningScheme: PartitioningScheme1.Ddss,
        awsAuthenticationMethod: AuthenticationMethod.Auto,
      },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedSavedJobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Collector to update. |
| <code>body</code> | <code>[SavedJob](src/models/unions/saved-job.ts)</code> | SavedJob object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collectorsApi.updateSavedJobById(request)`

- **OnSuccess**: <code>[CountedSavedJobResponse](src/models/counted-saved-job-response.ts)</code>
- **OnError**: throws <code>[CollectorsApi.UpdateSavedJobByIdError](src/resources/collectors-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collectorsApi.updateSavedJobById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedSavedJobResponse, CollectorsApi.UpdateSavedJobByIdError&gt;</code>, with `result.value` of type <code>[CountedSavedJobResponse](src/models/counted-saved-job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatabaseConnections

> Source: [DatabaseConnections](src/resources/database-connections.ts)

<details>
<summary><code>createDatabaseConnectionConfig(request: DatabaseConnections.CreateDatabaseConnectionConfigRequest, options?: RequestOptions): ApiPromise&lt;DatabaseConnectionResponseEnvelope, DatabaseConnections.CreateDatabaseConnectionConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Database Connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databaseConnections.createDatabaseConnectionConfig({
    body: {
      authType: DatabaseConnectionAuthType1.ConnectionString,
      connectionString: "mysql://yourUsername:yourPassword@mysql.example.com:3306/production?ssl=true",
      connectionTimeout: 10000,
      databaseType: DatabaseConnectionType1.Mysql,
      description: "Production MySQL database for customer data",
      id: "mysql-prod-db",
      tags: "production,mysql,customer-data",
    },
  });
  // TODO: Handle 'response' of type DatabaseConnectionResponseEnvelope
} catch (err) {
  // TODO: Handle 'err' of type DatabaseConnections.CreateDatabaseConnectionConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databaseConnections.createDatabaseConnectionConfig({
  body: {
    authType: DatabaseConnectionAuthType1.ConnectionString,
    connectionString: "mysql://yourUsername:yourPassword@mysql.example.com:3306/production?ssl=true",
    connectionTimeout: 10000,
    databaseType: DatabaseConnectionType1.Mysql,
    description: "Production MySQL database for customer data",
    id: "mysql-prod-db",
    tags: "production,mysql,customer-data",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatabaseConnectionResponseEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DatabaseConnectionConfig](src/models/database-connection-config.ts)</code> | DatabaseConnectionConfig object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databaseConnections.createDatabaseConnectionConfig(request)`

- **OnSuccess**: <code>[DatabaseConnectionResponseEnvelope](src/models/database-connection-response-envelope.ts)</code>
- **OnError**: throws <code>[DatabaseConnections.CreateDatabaseConnectionConfigError](src/resources/database-connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databaseConnections.createDatabaseConnectionConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatabaseConnectionResponseEnvelope, DatabaseConnections.CreateDatabaseConnectionConfigError&gt;</code>, with `result.value` of type <code>[DatabaseConnectionResponseEnvelope](src/models/database-connection-response-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDatabaseConnectionConfigById(request: DatabaseConnections.DeleteDatabaseConnectionConfigByIdRequest, options?: RequestOptions): ApiPromise&lt;DatabaseConnectionResponseEnvelope, DatabaseConnections.DeleteDatabaseConnectionConfigByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the specified Database Connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databaseConnections.deleteDatabaseConnectionConfigById({
    id: "some example string",
  });
  // TODO: Handle 'response' of type DatabaseConnectionResponseEnvelope
} catch (err) {
  // TODO: Handle 'err' of type DatabaseConnections.DeleteDatabaseConnectionConfigByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databaseConnections.deleteDatabaseConnectionConfigById({
  id: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatabaseConnectionResponseEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Database Connection to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databaseConnections.deleteDatabaseConnectionConfigById(request)`

- **OnSuccess**: <code>[DatabaseConnectionResponseEnvelope](src/models/database-connection-response-envelope.ts)</code>
- **OnError**: throws <code>[DatabaseConnections.DeleteDatabaseConnectionConfigByIdError](src/resources/database-connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databaseConnections.deleteDatabaseConnectionConfigById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatabaseConnectionResponseEnvelope, DatabaseConnections.DeleteDatabaseConnectionConfigByIdError&gt;</code>, with `result.value` of type <code>[DatabaseConnectionResponseEnvelope](src/models/database-connection-response-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDatabaseConnectionConfig(request: DatabaseConnections.GetDatabaseConnectionConfigRequest, options?: RequestOptions): ApiPromise&lt;DatabaseConnectionResponseEnvelope, DatabaseConnections.GetDatabaseConnectionConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Database Connections.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databaseConnections.getDatabaseConnectionConfig();
  // TODO: Handle 'response' of type DatabaseConnectionResponseEnvelope
} catch (err) {
  // TODO: Handle 'err' of type DatabaseConnections.GetDatabaseConnectionConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databaseConnections.getDatabaseConnectionConfig().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatabaseConnectionResponseEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>databaseType?</code> | <code>[DatabaseConnectionType](src/models/database-connection-type.ts)</code> | Filter results by database engine type. Use this parameter to return only Database Connections for the specified engine. |
| <code>limit?</code> | <code>number</code> | Maximum number of Database Connections to return in the response for this request. Use with <code>offset</code> to paginate the response into manageable batches. |
| <code>offset?</code> | <code>number</code> | Starting point from which to retrieve results for this request. Use with <code>limit</code> to paginate the response into manageable batches. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databaseConnections.getDatabaseConnectionConfig(request)`

- **OnSuccess**: <code>[DatabaseConnectionResponseEnvelope](src/models/database-connection-response-envelope.ts)</code>
- **OnError**: throws <code>[DatabaseConnections.GetDatabaseConnectionConfigError](src/resources/database-connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databaseConnections.getDatabaseConnectionConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatabaseConnectionResponseEnvelope, DatabaseConnections.GetDatabaseConnectionConfigError&gt;</code>, with `result.value` of type <code>[DatabaseConnectionResponseEnvelope](src/models/database-connection-response-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDatabaseConnectionConfigById(request: DatabaseConnections.GetDatabaseConnectionConfigByIdRequest, options?: RequestOptions): ApiPromise&lt;DatabaseConnectionResponseEnvelope, DatabaseConnections.GetDatabaseConnectionConfigByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Database Connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databaseConnections.getDatabaseConnectionConfigById({
    id: "some example string",
  });
  // TODO: Handle 'response' of type DatabaseConnectionResponseEnvelope
} catch (err) {
  // TODO: Handle 'err' of type DatabaseConnections.GetDatabaseConnectionConfigByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databaseConnections.getDatabaseConnectionConfigById({
  id: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatabaseConnectionResponseEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Database Connection to get. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databaseConnections.getDatabaseConnectionConfigById(request)`

- **OnSuccess**: <code>[DatabaseConnectionResponseEnvelope](src/models/database-connection-response-envelope.ts)</code>
- **OnError**: throws <code>[DatabaseConnections.GetDatabaseConnectionConfigByIdError](src/resources/database-connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databaseConnections.getDatabaseConnectionConfigById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatabaseConnectionResponseEnvelope, DatabaseConnections.GetDatabaseConnectionConfigByIdError&gt;</code>, with `result.value` of type <code>[DatabaseConnectionResponseEnvelope](src/models/database-connection-response-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDatabaseConnectionConfigById(request: DatabaseConnections.UpdateDatabaseConnectionConfigByIdRequest, options?: RequestOptions): ApiPromise&lt;DatabaseConnectionResponseEnvelope, DatabaseConnections.UpdateDatabaseConnectionConfigByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Database Connection.<br/><br/>Provide a complete representation of the Database Connection that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Database Connection.<br/><br/>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Database Connection might not function as expected.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.databaseConnections.updateDatabaseConnectionConfigById({
    id: "some example string",
    body: {
      authType: DatabaseConnectionAuthType1.ConnectionString,
      connectionString: "mysql://yourUsername:yourPassword@mysql.example.com:3306/production?ssl=true",
      connectionTimeout: 10000,
      databaseType: DatabaseConnectionType1.Mysql,
      description: "Production MySQL database for customer data",
      id: "mysql-prod-db",
      tags: "production,mysql,customer-data",
    },
  });
  // TODO: Handle 'response' of type DatabaseConnectionResponseEnvelope
} catch (err) {
  // TODO: Handle 'err' of type DatabaseConnections.UpdateDatabaseConnectionConfigByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.databaseConnections.updateDatabaseConnectionConfigById({
  id: "some example string",
  body: {
    authType: DatabaseConnectionAuthType1.ConnectionString,
    connectionString: "mysql://yourUsername:yourPassword@mysql.example.com:3306/production?ssl=true",
    connectionTimeout: 10000,
    databaseType: DatabaseConnectionType1.Mysql,
    description: "Production MySQL database for customer data",
    id: "mysql-prod-db",
    tags: "production,mysql,customer-data",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DatabaseConnectionResponseEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Database Connection to update. |
| <code>body</code> | <code>[DatabaseConnectionConfig](src/models/database-connection-config.ts)</code> | DatabaseConnectionConfig object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.databaseConnections.updateDatabaseConnectionConfigById(request)`

- **OnSuccess**: <code>[DatabaseConnectionResponseEnvelope](src/models/database-connection-response-envelope.ts)</code>
- **OnError**: throws <code>[DatabaseConnections.UpdateDatabaseConnectionConfigByIdError](src/resources/database-connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.databaseConnections.updateDatabaseConnectionConfigById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DatabaseConnectionResponseEnvelope, DatabaseConnections.UpdateDatabaseConnectionConfigByIdError&gt;</code>, with `result.value` of type <code>[DatabaseConnectionResponseEnvelope](src/models/database-connection-response-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Destinations

> Source: [Destinations](src/resources/destinations.ts)

<details>
<summary><code>createOutput(request: Destinations.CreateOutputRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputResponse, Destinations.CreateOutputError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Destination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.createOutput({
    body: { id: "tcpjson-output", type: "tcpjson", host: "localhost", port: 10090 },
  });
  // TODO: Handle 'response' of type CountedOutputResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.CreateOutputError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.createOutput({
  body: { id: "tcpjson-output", type: "tcpjson", host: "localhost", port: 10090 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | Output object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.createOutput(request)`

- **OnSuccess**: <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: throws <code>[Destinations.CreateOutputError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.createOutput(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputResponse, Destinations.CreateOutputError&gt;</code>, with `result.value` of type <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOutputSystemByPack(request: Destinations.CreateOutputSystemByPackRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputResponse, Destinations.CreateOutputSystemByPackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Destination within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.createOutputSystemByPack({
    pack: "some example string",
    body: { id: "tcpjson-output", type: "tcpjson", host: "localhost", port: 10090 },
  });
  // TODO: Handle 'response' of type CountedOutputResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.CreateOutputSystemByPackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.createOutputSystemByPack({
  pack: "some example string",
  body: { id: "tcpjson-output", type: "tcpjson", host: "localhost", port: 10090 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | Output object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.createOutputSystemByPack(request)`

- **OnSuccess**: <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: throws <code>[Destinations.CreateOutputSystemByPackError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.createOutputSystemByPack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputResponse, Destinations.CreateOutputSystemByPackError&gt;</code>, with `result.value` of type <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOutputSystemTestByPackAndId(request: Destinations.CreateOutputSystemTestByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputTestResponse, Destinations.CreateOutputSystemTestByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send sample event data to the specified Destination to validate the configuration or test connectivity within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.createOutputSystemTestByPackAndId({
    id: "some example string",
    pack: "some example string",
    body: { events: [{}] },
  });
  // TODO: Handle 'response' of type CountedOutputTestResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.CreateOutputSystemTestByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.createOutputSystemTestByPackAndId({
  id: "some example string",
  pack: "some example string",
  body: { events: [{}] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputTestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to send sample event data to. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>body</code> | <code>[OutputTestRequest](src/models/output-test-request.ts)</code> | OutputTestRequest object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.createOutputSystemTestByPackAndId(request)`

- **OnSuccess**: <code>[CountedOutputTestResponse](src/models/counted-output-test-response.ts)</code>
- **OnError**: throws <code>[Destinations.CreateOutputSystemTestByPackAndIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.createOutputSystemTestByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputTestResponse, Destinations.CreateOutputSystemTestByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedOutputTestResponse](src/models/counted-output-test-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOutputTestById(request: Destinations.CreateOutputTestByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputTestResponse, Destinations.CreateOutputTestByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send sample event data to the specified Destination to validate the configuration or test connectivity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.createOutputTestById({
    id: "some example string",
    body: { events: [{}] },
  });
  // TODO: Handle 'response' of type CountedOutputTestResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.CreateOutputTestByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.createOutputTestById({
  id: "some example string",
  body: { events: [{}] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputTestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to send sample event data to. |
| <code>body</code> | <code>[OutputTestRequest](src/models/output-test-request.ts)</code> | OutputTestRequest object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.createOutputTestById(request)`

- **OnSuccess**: <code>[CountedOutputTestResponse](src/models/counted-output-test-response.ts)</code>
- **OnError**: throws <code>[Destinations.CreateOutputTestByIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.createOutputTestById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputTestResponse, Destinations.CreateOutputTestByIdError&gt;</code>, with `result.value` of type <code>[CountedOutputTestResponse](src/models/counted-output-test-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteOutputById(request: Destinations.DeleteOutputByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputResponse, Destinations.DeleteOutputByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the specified Destination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.deleteOutputById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedOutputResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.DeleteOutputByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.deleteOutputById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.deleteOutputById(request)`

- **OnSuccess**: <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: throws <code>[Destinations.DeleteOutputByIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.deleteOutputById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputResponse, Destinations.DeleteOutputByIdError&gt;</code>, with `result.value` of type <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteOutputPqById(request: Destinations.DeleteOutputPqByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedString, Destinations.DeleteOutputPqByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clear the persistent queue (PQ) for the specified Destination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.deleteOutputPqById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedString
} catch (err) {
  // TODO: Handle 'err' of type Destinations.DeleteOutputPqByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.deleteOutputPqById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedString
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to clear the PQ for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.deleteOutputPqById(request)`

- **OnSuccess**: <code>[CountedString](src/models/counted-string.ts)</code>
- **OnError**: throws <code>[Destinations.DeleteOutputPqByIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.deleteOutputPqById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedString, Destinations.DeleteOutputPqByIdError&gt;</code>, with `result.value` of type <code>[CountedString](src/models/counted-string.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteOutputSystemByPackAndId(request: Destinations.DeleteOutputSystemByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputResponse, Destinations.DeleteOutputSystemByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the specified Destination within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.deleteOutputSystemByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedOutputResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.DeleteOutputSystemByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.deleteOutputSystemByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to delete. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.deleteOutputSystemByPackAndId(request)`

- **OnSuccess**: <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: throws <code>[Destinations.DeleteOutputSystemByPackAndIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.deleteOutputSystemByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputResponse, Destinations.DeleteOutputSystemByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteOutputSystemPqByPackAndId(request: Destinations.DeleteOutputSystemPqByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedString, Destinations.DeleteOutputSystemPqByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clear the persistent queue (PQ) for the specified Destination within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.deleteOutputSystemPqByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedString
} catch (err) {
  // TODO: Handle 'err' of type Destinations.DeleteOutputSystemPqByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.deleteOutputSystemPqByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedString
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to clear the PQ for. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.deleteOutputSystemPqByPackAndId(request)`

- **OnSuccess**: <code>[CountedString](src/models/counted-string.ts)</code>
- **OnError**: throws <code>[Destinations.DeleteOutputSystemPqByPackAndIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.deleteOutputSystemPqByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedString, Destinations.DeleteOutputSystemPqByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedString](src/models/counted-string.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOutput(request: Destinations.GetOutputRequest, options?: RequestOptions): ApiPromise&lt;PaginatedOutputResponse, Destinations.GetOutputError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Destinations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getOutput();
  // TODO: Handle 'response' of type PaginatedOutputResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetOutputError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getOutput().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedOutputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type?</code> | <code>[DestinationType](src/models/destination-type.ts)</code> | Type of Destination to include in the results. Each request can include only one <code>type</code> parameter; multiple parameters per request are not supported. |
| <code>offset?</code> | <code>number</code> | Pagination offset |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getOutput(request)`

- **OnSuccess**: <code>[PaginatedOutputResponse](src/models/paginated-output-response.ts)</code>
- **OnError**: throws <code>[Destinations.GetOutputError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getOutput(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedOutputResponse, Destinations.GetOutputError&gt;</code>, with `result.value` of type <code>[PaginatedOutputResponse](src/models/paginated-output-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOutputById(request: Destinations.GetOutputByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputResponse, Destinations.GetOutputByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Destination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getOutputById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedOutputResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetOutputByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getOutputById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to get. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getOutputById(request)`

- **OnSuccess**: <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: throws <code>[Destinations.GetOutputByIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getOutputById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputResponse, Destinations.GetOutputByIdError&gt;</code>, with `result.value` of type <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOutputPqById(request: Destinations.GetOutputPqByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedJobInfo, Destinations.GetOutputPqByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about the latest job to clear the persistent queue (PQ) for the specified Destination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getOutputPqById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedJobInfo
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetOutputPqByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getOutputPqById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedJobInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to get PQ job information for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getOutputPqById(request)`

- **OnSuccess**: <code>[CountedJobInfo](src/models/counted-job-info.ts)</code>
- **OnError**: throws <code>[Destinations.GetOutputPqByIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getOutputPqById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedJobInfo, Destinations.GetOutputPqByIdError&gt;</code>, with `result.value` of type <code>[CountedJobInfo](src/models/counted-job-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOutputSamplesById(request: Destinations.GetOutputSamplesByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputSamplesResponse, Destinations.GetOutputSamplesByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get sample event data for the specified Destination to validate the configuration or test connectivity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getOutputSamplesById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedOutputSamplesResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetOutputSamplesByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getOutputSamplesById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputSamplesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to get sample event data for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getOutputSamplesById(request)`

- **OnSuccess**: <code>[CountedOutputSamplesResponse](src/models/counted-output-samples-response.ts)</code>
- **OnError**: throws <code>[Destinations.GetOutputSamplesByIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getOutputSamplesById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputSamplesResponse, Destinations.GetOutputSamplesByIdError&gt;</code>, with `result.value` of type <code>[CountedOutputSamplesResponse](src/models/counted-output-samples-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOutputStatus(request: Destinations.GetOutputStatusRequest, options?: RequestOptions): ApiPromise&lt;PaginatedOutputStatus, Destinations.GetOutputStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List status information and optional metrics for all configured Destinations in the Worker Group or Edge Fleet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getOutputStatus();
  // TODO: Handle 'response' of type PaginatedOutputStatus
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetOutputStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getOutputStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedOutputStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>metrics?</code> | <code>boolean</code> | Set to <code>true</code> to include metrics for each Destination. Otherwise, <code>false</code> (default). |
| <code>type?</code> | <code>boolean</code> | Set to <code>true</code> to prefix the Destination <code>id</code> with the Destination type. Otherwise, <code>false</code> (default). |
| <code>offset?</code> | <code>number</code> | Starting point from which to retrieve results for this request. Use with <code>limit</code> to paginate the response into manageable batches. |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return in the response for this request. Use with <code>offset</code> to paginate the response into manageable batches. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getOutputStatus(request)`

- **OnSuccess**: <code>[PaginatedOutputStatus](src/models/paginated-output-status.ts)</code>
- **OnError**: throws <code>[Destinations.GetOutputStatusError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getOutputStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedOutputStatus, Destinations.GetOutputStatusError&gt;</code>, with `result.value` of type <code>[PaginatedOutputStatus](src/models/paginated-output-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOutputStatusById(request: Destinations.GetOutputStatusByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputStatus, Destinations.GetOutputStatusByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status and optional metrics for the specified Destination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getOutputStatusById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedOutputStatus
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetOutputStatusByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getOutputStatusById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to get the status for. |
| <code>metrics?</code> | <code>boolean</code> | Set to <code>true</code> to include metrics for each Destination. Otherwise, <code>false</code> (default). |
| <code>type?</code> | <code>boolean</code> | Set to <code>true</code> to prefix the Destination <code>id</code> with the Destination type. Otherwise, <code>false</code> (default). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getOutputStatusById(request)`

- **OnSuccess**: <code>[CountedOutputStatus](src/models/counted-output-status.ts)</code>
- **OnError**: throws <code>[Destinations.GetOutputStatusByIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getOutputStatusById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputStatus, Destinations.GetOutputStatusByIdError&gt;</code>, with `result.value` of type <code>[CountedOutputStatus](src/models/counted-output-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOutputStatusSystemOutputsByPack(request: Destinations.GetOutputStatusSystemOutputsByPackRequest, options?: RequestOptions): ApiPromise&lt;PaginatedOutputStatus, Destinations.GetOutputStatusSystemOutputsByPackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List status information and optional metrics for all configured Destinations in the Worker Group or Edge Fleet within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getOutputStatusSystemOutputsByPack({
    pack: "some example string",
  });
  // TODO: Handle 'response' of type PaginatedOutputStatus
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetOutputStatusSystemOutputsByPackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getOutputStatusSystemOutputsByPack({
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedOutputStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>metrics?</code> | <code>boolean</code> | Set to <code>true</code> to include metrics for each Destination. Otherwise, <code>false</code> (default). |
| <code>type?</code> | <code>boolean</code> | Set to <code>true</code> to prefix the Destination <code>id</code> with the Destination type. Otherwise, <code>false</code> (default). |
| <code>offset?</code> | <code>number</code> | Starting point from which to retrieve results for this request. Use with <code>limit</code> to paginate the response into manageable batches. |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return in the response for this request. Use with <code>offset</code> to paginate the response into manageable batches. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getOutputStatusSystemOutputsByPack(request)`

- **OnSuccess**: <code>[PaginatedOutputStatus](src/models/paginated-output-status.ts)</code>
- **OnError**: throws <code>[Destinations.GetOutputStatusSystemOutputsByPackError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getOutputStatusSystemOutputsByPack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedOutputStatus, Destinations.GetOutputStatusSystemOutputsByPackError&gt;</code>, with `result.value` of type <code>[PaginatedOutputStatus](src/models/paginated-output-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOutputStatusSystemOutputsByPackAndId(request: Destinations.GetOutputStatusSystemOutputsByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputStatus, Destinations.GetOutputStatusSystemOutputsByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status and optional metrics for the specified Destination within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getOutputStatusSystemOutputsByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedOutputStatus
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetOutputStatusSystemOutputsByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getOutputStatusSystemOutputsByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to get the status for. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>metrics?</code> | <code>boolean</code> | Set to <code>true</code> to include metrics for each Destination. Otherwise, <code>false</code> (default). |
| <code>type?</code> | <code>boolean</code> | Set to <code>true</code> to prefix the Destination <code>id</code> with the Destination type. Otherwise, <code>false</code> (default). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getOutputStatusSystemOutputsByPackAndId(request)`

- **OnSuccess**: <code>[CountedOutputStatus](src/models/counted-output-status.ts)</code>
- **OnError**: throws <code>[Destinations.GetOutputStatusSystemOutputsByPackAndIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getOutputStatusSystemOutputsByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputStatus, Destinations.GetOutputStatusSystemOutputsByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedOutputStatus](src/models/counted-output-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOutputSystemByPack(request: Destinations.GetOutputSystemByPackRequest, options?: RequestOptions): ApiPromise&lt;PaginatedOutputResponse, Destinations.GetOutputSystemByPackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Destinations within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getOutputSystemByPack({ pack: "some example string" });
  // TODO: Handle 'response' of type PaginatedOutputResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetOutputSystemByPackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getOutputSystemByPack({ pack: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedOutputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>type?</code> | <code>[DestinationType](src/models/destination-type.ts)</code> | Type of Destination to include in the results. Each request can include only one <code>type</code> parameter; multiple parameters per request are not supported. |
| <code>offset?</code> | <code>number</code> | Pagination offset |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getOutputSystemByPack(request)`

- **OnSuccess**: <code>[PaginatedOutputResponse](src/models/paginated-output-response.ts)</code>
- **OnError**: throws <code>[Destinations.GetOutputSystemByPackError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getOutputSystemByPack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedOutputResponse, Destinations.GetOutputSystemByPackError&gt;</code>, with `result.value` of type <code>[PaginatedOutputResponse](src/models/paginated-output-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOutputSystemByPackAndId(request: Destinations.GetOutputSystemByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputResponse, Destinations.GetOutputSystemByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Destination within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getOutputSystemByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedOutputResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetOutputSystemByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getOutputSystemByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to get. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getOutputSystemByPackAndId(request)`

- **OnSuccess**: <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: throws <code>[Destinations.GetOutputSystemByPackAndIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getOutputSystemByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputResponse, Destinations.GetOutputSystemByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOutputSystemPqByPackAndId(request: Destinations.GetOutputSystemPqByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedJobInfo, Destinations.GetOutputSystemPqByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about the latest job to clear the persistent queue (PQ) for the specified Destination within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getOutputSystemPqByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedJobInfo
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetOutputSystemPqByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getOutputSystemPqByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedJobInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to get PQ job information for. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getOutputSystemPqByPackAndId(request)`

- **OnSuccess**: <code>[CountedJobInfo](src/models/counted-job-info.ts)</code>
- **OnError**: throws <code>[Destinations.GetOutputSystemPqByPackAndIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getOutputSystemPqByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedJobInfo, Destinations.GetOutputSystemPqByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedJobInfo](src/models/counted-job-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOutputSystemSamplesByPackAndId(request: Destinations.GetOutputSystemSamplesByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputSamplesResponse, Destinations.GetOutputSystemSamplesByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get sample event data for the specified Destination to validate the configuration or test connectivity within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.getOutputSystemSamplesByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedOutputSamplesResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.GetOutputSystemSamplesByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.getOutputSystemSamplesByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputSamplesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to get sample event data for. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.getOutputSystemSamplesByPackAndId(request)`

- **OnSuccess**: <code>[CountedOutputSamplesResponse](src/models/counted-output-samples-response.ts)</code>
- **OnError**: throws <code>[Destinations.GetOutputSystemSamplesByPackAndIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.getOutputSystemSamplesByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputSamplesResponse, Destinations.GetOutputSystemSamplesByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedOutputSamplesResponse](src/models/counted-output-samples-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOutputById(request: Destinations.UpdateOutputByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputResponse, Destinations.UpdateOutputByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Destination.<br/><br/>Provide a complete representation of the Destination that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Destination.<br/><br/>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Destination might not function as expected.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.updateOutputById({
    id: "some example string",
    body: { id: "default-output", type: "default", defaultId: "my-default-output" },
  });
  // TODO: Handle 'response' of type CountedOutputResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.UpdateOutputByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.updateOutputById({
  id: "some example string",
  body: { id: "default-output", type: "default", defaultId: "my-default-output" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to update. |
| <code>body</code> | <code>[Output](src/models/unions/output.ts)</code> | Output object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.updateOutputById(request)`

- **OnSuccess**: <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: throws <code>[Destinations.UpdateOutputByIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.updateOutputById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputResponse, Destinations.UpdateOutputByIdError&gt;</code>, with `result.value` of type <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOutputSystemByPackAndId(request: Destinations.UpdateOutputSystemByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedOutputResponse, Destinations.UpdateOutputSystemByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Destination.<br/><br/>Provide a complete representation of the Destination that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Destination.<br/><br/>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Destination might not function as expected within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.destinations.updateOutputSystemByPackAndId({
    id: "some example string",
    pack: "some example string",
    body: { id: "default-output", type: "default", defaultId: "my-default-output" },
  });
  // TODO: Handle 'response' of type CountedOutputResponse
} catch (err) {
  // TODO: Handle 'err' of type Destinations.UpdateOutputSystemByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.destinations.updateOutputSystemByPackAndId({
  id: "some example string",
  pack: "some example string",
  body: { id: "default-output", type: "default", defaultId: "my-default-output" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedOutputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Destination to update. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>body</code> | <code>[Output](src/models/unions/output.ts)</code> | Output object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.destinations.updateOutputSystemByPackAndId(request)`

- **OnSuccess**: <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: throws <code>[Destinations.UpdateOutputSystemByPackAndIdError](src/resources/destinations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.destinations.updateOutputSystemByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedOutputResponse, Destinations.UpdateOutputSystemByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedOutputResponse](src/models/counted-output-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Distributed

> Source: [Distributed](src/resources/distributed.ts)

<details>
<summary><code>getProductsSummaryByProduct(request: Distributed.GetProductsSummaryByProductRequest, options?: RequestOptions): ApiPromise&lt;PaginatedDistributedSummary, Distributed.GetProductsSummaryByProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a summary of the deployment for the specified Cribl product (Stream or Edge).<br/><br/>The summary includes a count of Worker Groups or Edge Fleets and resources such as Pipelines, Routes, Sources, and Destinations. For Distributed deployments, the summary also includes a count and statistics for Worker or Edge Nodes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.distributed.getProductsSummaryByProduct({ product: ProductsBase.Stream });
  // TODO: Handle 'response' of type PaginatedDistributedSummary
} catch (err) {
  // TODO: Handle 'err' of type Distributed.GetProductsSummaryByProductError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.distributed.getProductsSummaryByProduct({
  product: ProductsBase.Stream,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedDistributedSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsBase](src/models/products-base.ts)</code> | Name of the Cribl product to get the summary for. |
| <code>offset?</code> | <code>number</code> | Pagination offset |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.distributed.getProductsSummaryByProduct(request)`

- **OnSuccess**: <code>[PaginatedDistributedSummary](src/models/paginated-distributed-summary.ts)</code>
- **OnError**: throws <code>[Distributed.GetProductsSummaryByProductError](src/resources/distributed.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.distributed.getProductsSummaryByProduct(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedDistributedSummary, Distributed.GetProductsSummaryByProductError&gt;</code>, with `result.value` of type <code>[PaginatedDistributedSummary](src/models/paginated-distributed-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Functions

> Source: [Functions](src/resources/functions.ts)

<details>
<summary><code>getFunctions(request: Functions.GetFunctionsRequest, options?: RequestOptions): ApiPromise&lt;PaginatedFunctionResponse, Functions.GetFunctionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Functions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.functions.getFunctions();
  // TODO: Handle 'response' of type PaginatedFunctionResponse
} catch (err) {
  // TODO: Handle 'err' of type Functions.GetFunctionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.functions.getFunctions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedFunctionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>showHidden?</code> | <code>boolean</code> | If <code>true</code>, include hidden Functions in the response. Otherwise, hidden Functions are excluded. |
| <code>offset?</code> | <code>number</code> | Pagination offset |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.functions.getFunctions(request)`

- **OnSuccess**: <code>[PaginatedFunctionResponse](src/models/paginated-function-response.ts)</code>
- **OnError**: throws <code>[Functions.GetFunctionsError](src/resources/functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.functions.getFunctions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedFunctionResponse, Functions.GetFunctionsError&gt;</code>, with `result.value` of type <code>[PaginatedFunctionResponse](src/models/paginated-function-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFunctionsById(request: Functions.GetFunctionsByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedFunctionResponse, Functions.GetFunctionsByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Function.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.functions.getFunctionsById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedFunctionResponse
} catch (err) {
  // TODO: Handle 'err' of type Functions.GetFunctionsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.functions.getFunctionsById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedFunctionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Function to get. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.functions.getFunctionsById(request)`

- **OnSuccess**: <code>[CountedFunctionResponse](src/models/counted-function-response.ts)</code>
- **OnError**: throws <code>[Functions.GetFunctionsByIdError](src/resources/functions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.functions.getFunctionsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedFunctionResponse, Functions.GetFunctionsByIdError&gt;</code>, with `result.value` of type <code>[CountedFunctionResponse](src/models/counted-function-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GroupsApi

> Source: [GroupsApi](src/resources/groups-api.ts)

<details>
<summary><code>createProductsGroupsByProduct(request: GroupsApi.CreateProductsGroupsByProductRequest, options?: RequestOptions): ApiPromise&lt;CountedConfigGroup, GroupsApi.CreateProductsGroupsByProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Worker Group, Outpost Group, or Edge Fleet for the specified Cribl product.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.createProductsGroupsByProduct({
    product: ProductsCore.Stream,
    body: {
      cloud: { provider: CloudProvider1.Aws, region: "us-west-2" },
      estimatedIngestRate: EstimatedIngestRateOptionsConfigGroup._2048,
      id: "goatCloudIanWg",
      name: "goatcloudianwg",
      onPrem: false,
      provisioned: true,
      type: TypeOptionsConfigGroup.Stream,
      workerRemoteAccess: true,
    },
  });
  // TODO: Handle 'response' of type CountedConfigGroup
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.CreateProductsGroupsByProductError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.createProductsGroupsByProduct({
  product: ProductsCore.Stream,
  body: {
    cloud: { provider: CloudProvider1.Aws, region: "us-west-2" },
    estimatedIngestRate: EstimatedIngestRateOptionsConfigGroup._2048,
    id: "goatCloudIanWg",
    name: "goatcloudianwg",
    onPrem: false,
    provisioned: true,
    type: TypeOptionsConfigGroup.Stream,
    workerRemoteAccess: true,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedConfigGroup
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product to add the Worker Group, Outpost Group, or Edge Fleet to. |
| <code>body</code> | <code>[GroupCreateRequest](src/models/group-create-request.ts)</code> | GroupCreateRequest object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.createProductsGroupsByProduct(request)`

- **OnSuccess**: <code>[CountedConfigGroup](src/models/counted-config-group.ts)</code>
- **OnError**: throws <code>[GroupsApi.CreateProductsGroupsByProductError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.createProductsGroupsByProduct(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedConfigGroup, GroupsApi.CreateProductsGroupsByProductError&gt;</code>, with `result.value` of type <code>[CountedConfigGroup](src/models/counted-config-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProductsGroupsByProductAndId(request: GroupsApi.DeleteProductsGroupsByProductAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedConfigGroup, GroupsApi.DeleteProductsGroupsByProductAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the specified Worker Group, Outpost Group, or Edge Fleet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.deleteProductsGroupsByProductAndId({
    product: ProductsCore.Stream,
    id: "some example string",
  });
  // TODO: Handle 'response' of type CountedConfigGroup
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.DeleteProductsGroupsByProductAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.deleteProductsGroupsByProductAndId({
  product: ProductsCore.Stream,
  id: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedConfigGroup
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product that contains the Worker Group, Outpost Group, or Edge Fleet. |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.deleteProductsGroupsByProductAndId(request)`

- **OnSuccess**: <code>[CountedConfigGroup](src/models/counted-config-group.ts)</code>
- **OnError**: throws <code>[GroupsApi.DeleteProductsGroupsByProductAndIdError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.deleteProductsGroupsByProductAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedConfigGroup, GroupsApi.DeleteProductsGroupsByProductAndIdError&gt;</code>, with `result.value` of type <code>[CountedConfigGroup](src/models/counted-config-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProductsGroupsAclByProductAndId(request: GroupsApi.GetProductsGroupsAclByProductAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedUserAccessControlList, GroupsApi.GetProductsGroupsAclByProductAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the user access control list (ACL) for the specified Worker Group, Outpost Group, or Edge Fleet.<br/><br/>This endpoint lists users with explicit access assignments on the Group or Fleet. The response does not include access granted through Team membership or inherited based on a user's Permissions and Roles at the Organization/Global, Workspace, or product level.<br/><br/>To list the Team ACL for a product and Group or Fleet, use <code>GET /products/{product}/groups/{id}/acl/teams</code>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getProductsGroupsAclByProductAndId({
    product: ProductsCore.Stream,
    id: "some example string",
  });
  // TODO: Handle 'response' of type CountedUserAccessControlList
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetProductsGroupsAclByProductAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.getProductsGroupsAclByProductAndId({
  product: ProductsCore.Stream,
  id: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedUserAccessControlList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product that contains the Worker Group, Outpost Group, or Edge Fleet. |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to get the ACL for. |
| <code>type?</code> | <code>[RbacResource](src/models/rbac-resource.ts)</code> | Filter for limiting the response to ACL entries for the specified RBAC resource type. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getProductsGroupsAclByProductAndId(request)`

- **OnSuccess**: <code>[CountedUserAccessControlList](src/models/counted-user-access-control-list.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetProductsGroupsAclByProductAndIdError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getProductsGroupsAclByProductAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedUserAccessControlList, GroupsApi.GetProductsGroupsAclByProductAndIdError&gt;</code>, with `result.value` of type <code>[CountedUserAccessControlList](src/models/counted-user-access-control-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProductsGroupsByProduct(request: GroupsApi.GetProductsGroupsByProductRequest, options?: RequestOptions): ApiPromise&lt;PaginatedConfigGroup, GroupsApi.GetProductsGroupsByProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Worker Groups, Outpost Groups, or Edge Fleets for the specified Cribl product.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getProductsGroupsByProduct({ product: ProductsCore.Stream });
  // TODO: Handle 'response' of type PaginatedConfigGroup
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetProductsGroupsByProductError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.getProductsGroupsByProduct({
  product: ProductsCore.Stream,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedConfigGroup
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product to get the Worker Groups, Outpost Groups, or Edge Fleets for. |
| <code>fields?</code> | <code>string</code> | Comma-separated list of additional properties to include in the response. Available values are <code>git.commit</code>, <code>git.localChanges</code>, and <code>git.log</code>. |
| <code>limit?</code> | <code>number</code> | Maximum number of Worker Groups, Outpost Groups, or Edge Fleets to return in the response for this request. Use with <code>offset</code> to paginate the response into manageable batches. |
| <code>offset?</code> | <code>number</code> | Starting point from which to retrieve results for this request. Use with <code>limit</code> to paginate the response into manageable batches. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getProductsGroupsByProduct(request)`

- **OnSuccess**: <code>[PaginatedConfigGroup](src/models/paginated-config-group.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetProductsGroupsByProductError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getProductsGroupsByProduct(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedConfigGroup, GroupsApi.GetProductsGroupsByProductError&gt;</code>, with `result.value` of type <code>[PaginatedConfigGroup](src/models/paginated-config-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProductsGroupsByProductAndId(request: GroupsApi.GetProductsGroupsByProductAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedConfigGroup, GroupsApi.GetProductsGroupsByProductAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Worker Group, Outpost Group, or Edge Fleet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getProductsGroupsByProductAndId({
    product: ProductsCore.Stream,
    id: "some example string",
  });
  // TODO: Handle 'response' of type CountedConfigGroup
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetProductsGroupsByProductAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.getProductsGroupsByProductAndId({
  product: ProductsCore.Stream,
  id: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedConfigGroup
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product to get the Worker Groups, Outpost Groups, or Edge Fleets for. |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to get. |
| <code>fields?</code> | <code>string</code> | Comma-separated list of additional properties to include in the response. Available values are <code>git.commit</code>, <code>git.localChanges</code>, and <code>git.log</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getProductsGroupsByProductAndId(request)`

- **OnSuccess**: <code>[CountedConfigGroup](src/models/counted-config-group.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetProductsGroupsByProductAndIdError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getProductsGroupsByProductAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedConfigGroup, GroupsApi.GetProductsGroupsByProductAndIdError&gt;</code>, with `result.value` of type <code>[CountedConfigGroup](src/models/counted-config-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProductsGroupsConfigVersionByProductAndId(request: GroupsApi.GetProductsGroupsConfigVersionByProductAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedString, GroupsApi.GetProductsGroupsConfigVersionByProductAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the configuration version for the specified Worker Group, Outpost Group, or Edge Fleet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getProductsGroupsConfigVersionByProductAndId({
    product: ProductsCore.Stream,
    id: "some example string",
  });
  // TODO: Handle 'response' of type CountedString
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetProductsGroupsConfigVersionByProductAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.getProductsGroupsConfigVersionByProductAndId({
  product: ProductsCore.Stream,
  id: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedString
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product to get the Worker Groups, Outpost Groups, or Edge Fleets for. |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to get the configuration version for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getProductsGroupsConfigVersionByProductAndId(request)`

- **OnSuccess**: <code>[CountedString](src/models/counted-string.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetProductsGroupsConfigVersionByProductAndIdError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getProductsGroupsConfigVersionByProductAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedString, GroupsApi.GetProductsGroupsConfigVersionByProductAndIdError&gt;</code>, with `result.value` of type <code>[CountedString](src/models/counted-string.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProductsGroupsByProductAndId(request: GroupsApi.UpdateProductsGroupsByProductAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedConfigGroup, GroupsApi.UpdateProductsGroupsByProductAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Worker Group, Outpost Group, or Edge Fleet.<br/><br/>Provide a complete representation of the Group or Fleet that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Group or Fleet.<br/><br/>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Group or Fleet might not function as expected.<br/><br/>**Warning**: Do not change the values for the following parameters in the body of PATCH requests. The request body must include the values as they appear in the <code>GET /products/{product}/groups/{id}</code> response.<br/> - <code>configVersion</code><br/> - <code>deployingWorkerCount</code><br/> - <code>incompatibleWorkerCount</code><br/> - <code>workerCount</code><br/> - <code>lookupDeployments</code>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.updateProductsGroupsByProductAndId({
    product: ProductsCore.Stream,
    id: "some example string",
    body: {
      cloud: { provider: CloudProvider1.Aws, region: "us-west-2" },
      configVersion: "abc1234",
      deployingWorkerCount: 0,
      description:
        "Scaled Worker Group with estimated ingest rate of 4096 (48 MB/s, 21 Worker Processes) for increased capacity",
      estimatedIngestRate: EstimatedIngestRateOptionsConfigGroup._4096,
      id: "goatCloudIanWg",
      incompatibleWorkerCount: 0,
      lookupDeployments: [],
      name: "goatcloudianwg",
      onPrem: false,
      provisioned: true,
      type: TypeOptionsConfigGroup.Stream,
      workerCount: 3,
      workerRemoteAccess: true,
    },
  });
  // TODO: Handle 'response' of type CountedConfigGroup
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.UpdateProductsGroupsByProductAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.updateProductsGroupsByProductAndId({
  product: ProductsCore.Stream,
  id: "some example string",
  body: {
    cloud: { provider: CloudProvider1.Aws, region: "us-west-2" },
    configVersion: "abc1234",
    deployingWorkerCount: 0,
    description:
      "Scaled Worker Group with estimated ingest rate of 4096 (48 MB/s, 21 Worker Processes) for increased capacity",
    estimatedIngestRate: EstimatedIngestRateOptionsConfigGroup._4096,
    id: "goatCloudIanWg",
    incompatibleWorkerCount: 0,
    lookupDeployments: [],
    name: "goatcloudianwg",
    onPrem: false,
    provisioned: true,
    type: TypeOptionsConfigGroup.Stream,
    workerCount: 3,
    workerRemoteAccess: true,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedConfigGroup
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product that contains the Worker Group, Outpost Group, or Edge Fleet. |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to update. |
| <code>body</code> | <code>[ConfigGroup](src/models/config-group.ts)</code> | ConfigGroup object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.updateProductsGroupsByProductAndId(request)`

- **OnSuccess**: <code>[CountedConfigGroup](src/models/counted-config-group.ts)</code>
- **OnError**: throws <code>[GroupsApi.UpdateProductsGroupsByProductAndIdError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.updateProductsGroupsByProductAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedConfigGroup, GroupsApi.UpdateProductsGroupsByProductAndIdError&gt;</code>, with `result.value` of type <code>[CountedConfigGroup](src/models/counted-config-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProductsGroupsDeployByProductAndId(request: GroupsApi.UpdateProductsGroupsDeployByProductAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedConfigGroup, GroupsApi.UpdateProductsGroupsDeployByProductAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deploy commits to the specified Worker Group, Outpost Group, or Edge Fleet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.updateProductsGroupsDeployByProductAndId({
    product: ProductsCore.Stream,
    id: "some example string",
    body: {
      lookups: [{ context: "cribl", lookups: [{ file: "customers.csv", version: "lookup123" }] }],
      version: "abc1234",
    },
  });
  // TODO: Handle 'response' of type CountedConfigGroup
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.UpdateProductsGroupsDeployByProductAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.updateProductsGroupsDeployByProductAndId({
  product: ProductsCore.Stream,
  id: "some example string",
  body: {
    lookups: [{ context: "cribl", lookups: [{ file: "customers.csv", version: "lookup123" }] }],
    version: "abc1234",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedConfigGroup
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product that contains the Worker Group, Outpost Group, or Edge Fleet. |
| <code>id</code> | <code>string</code> | The <code>id</code> of the target Worker Group, Outpost Group, or Edge Fleet for commit deployment. |
| <code>body</code> | <code>[DeployRequest](src/models/deploy-request.ts)</code> | DeployRequest object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.updateProductsGroupsDeployByProductAndId(request)`

- **OnSuccess**: <code>[CountedConfigGroup](src/models/counted-config-group.ts)</code>
- **OnError**: throws <code>[GroupsApi.UpdateProductsGroupsDeployByProductAndIdError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.updateProductsGroupsDeployByProductAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedConfigGroup, GroupsApi.UpdateProductsGroupsDeployByProductAndIdError&gt;</code>, with `result.value` of type <code>[CountedConfigGroup](src/models/counted-config-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## HealthApi

> Source: [HealthApi](src/resources/health-api.ts)

<details>
<summary><code>getHealth(options?: RequestOptions): ApiPromise&lt;HealthServerStatus, HealthApi.GetHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current health status of the server (Leader or Worker Node). In Distributed deployments, requests routed to a Worker or Edge node using the [host context](https://docs.cribl.io/cribl-as-code/api#base-url-group-fleet-host) require a Bearer token for [authentication](https://docs.cribl.io/cribl-as-code/api-auth/).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.healthApi.getHealth();
  // TODO: Handle 'response' of type HealthServerStatus
} catch (err) {
  // TODO: Handle 'err' of type HealthApi.GetHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.healthApi.getHealth().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HealthServerStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.healthApi.getHealth()`

- **OnSuccess**: <code>[HealthServerStatus](src/models/health-server-status.ts)</code>
- **OnError**: throws <code>[HealthApi.GetHealthError](src/resources/health-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.healthApi.getHealth().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HealthServerStatus, HealthApi.GetHealthError&gt;</code>, with `result.value` of type <code>[HealthServerStatus](src/models/health-server-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Lake

> Source: [Lake](src/resources/lake.ts)

<details>
<summary><code>createCriblLakeDatasetByLakeId(request: Lake.CreateCriblLakeDatasetByLakeIdRequest, options?: RequestOptions): ApiPromise&lt;CountedCriblLakeDataset, Lake.CreateCriblLakeDatasetByLakeIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates one or more Lake Datasets in the specified Lake in a single transaction (Cribl.Cloud only). Send a single Lake Dataset object to create just one, or an array to bulk-create multiple. When an array is sent, the response is <code>{ items, errors }</code> — <code>items</code> contains the successfully created Lake Datasets, and <code>errors</code> contains an entry (<code>{ id, reason }</code>) for each Lake Dataset that failed validation, so a per-item failure does not fail the rest of the batch.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lake.createCriblLakeDatasetByLakeId({
    lakeId: "some example string",
    body: {
      acceleratedFields: ["host", "status"],
      description: "Web server access logs",
      format: FormatOptionsCriblLakeDataset.Json,
      id: "web_access_logs",
      retentionPeriodInDays: 90,
      storageLocationId: "my-storage-location",
    },
  });
  // TODO: Handle 'response' of type CountedCriblLakeDataset
} catch (err) {
  // TODO: Handle 'err' of type Lake.CreateCriblLakeDatasetByLakeIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lake.createCriblLakeDatasetByLakeId({
  lakeId: "some example string",
  body: {
    acceleratedFields: ["host", "status"],
    description: "Web server access logs",
    format: FormatOptionsCriblLakeDataset.Json,
    id: "web_access_logs",
    retentionPeriodInDays: 90,
    storageLocationId: "my-storage-location",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedCriblLakeDataset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lakeId</code> | <code>string</code> | The <code>id</code> of the Lake to create the Lake Datasets in. |
| <code>body</code> | <code>[CriblLakeDataset](src/models/cribl-lake-dataset.ts)</code> | CriblLakeDataset object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lake.createCriblLakeDatasetByLakeId(request)`

- **OnSuccess**: <code>[CountedCriblLakeDataset](src/models/counted-cribl-lake-dataset.ts)</code>
- **OnError**: throws <code>[Lake.CreateCriblLakeDatasetByLakeIdError](src/resources/lake.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lake.createCriblLakeDatasetByLakeId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedCriblLakeDataset, Lake.CreateCriblLakeDatasetByLakeIdError&gt;</code>, with `result.value` of type <code>[CountedCriblLakeDataset](src/models/counted-cribl-lake-dataset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCriblLakeDatasetByLakeIdAndId(request: Lake.DeleteCriblLakeDatasetByLakeIdAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedCriblLakeDataset, Lake.DeleteCriblLakeDatasetByLakeIdAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the specified Lake Dataset in the specified Lake (Cribl.Cloud only).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lake.deleteCriblLakeDatasetByLakeIdAndId({
    lakeId: "some example string",
    id: "some example string",
  });
  // TODO: Handle 'response' of type CountedCriblLakeDataset
} catch (err) {
  // TODO: Handle 'err' of type Lake.DeleteCriblLakeDatasetByLakeIdAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lake.deleteCriblLakeDatasetByLakeIdAndId({
  lakeId: "some example string",
  id: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedCriblLakeDataset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lakeId</code> | <code>string</code> | The <code>id</code> of the Lake that contains the Lake Dataset to delete. |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Lake Dataset to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lake.deleteCriblLakeDatasetByLakeIdAndId(request)`

- **OnSuccess**: <code>[CountedCriblLakeDataset](src/models/counted-cribl-lake-dataset.ts)</code>
- **OnError**: throws <code>[Lake.DeleteCriblLakeDatasetByLakeIdAndIdError](src/resources/lake.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lake.deleteCriblLakeDatasetByLakeIdAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedCriblLakeDataset, Lake.DeleteCriblLakeDatasetByLakeIdAndIdError&gt;</code>, with `result.value` of type <code>[CountedCriblLakeDataset](src/models/counted-cribl-lake-dataset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCriblLakeDatasetByLakeId(request: Lake.GetCriblLakeDatasetByLakeIdRequest, options?: RequestOptions): ApiPromise&lt;PaginatedCriblLakeDataset, Lake.GetCriblLakeDatasetByLakeIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Lake Datasets in the specified Lake (Cribl.Cloud only).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lake.getCriblLakeDatasetByLakeId({ lakeId: "some example string" });
  // TODO: Handle 'response' of type PaginatedCriblLakeDataset
} catch (err) {
  // TODO: Handle 'err' of type Lake.GetCriblLakeDatasetByLakeIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lake.getCriblLakeDatasetByLakeId({ lakeId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedCriblLakeDataset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lakeId</code> | <code>string</code> | The <code>id</code> of the Lake that contains the Lake Datasets to list. |
| <code>storageLocationId?</code> | <code>string</code> | Filter datasets by storage location ID. Use <code>default</code> for default storage location. |
| <code>format?</code> | <code>[DatasetFormatFilter](src/models/dataset-format-filter.ts)</code> | Filter datasets by format. Set to <code>ddss</code> to return only DDSS datasets. |
| <code>excludeDdss?</code> | <code>boolean</code> | Exclude DDSS format datasets from the response. |
| <code>excludeNetskope?</code> | <code>boolean</code> | Exclude Netskope format datasets from the response. |
| <code>excludeDeleted?</code> | <code>boolean</code> | Exclude deleted datasets from the response. |
| <code>excludeInternal?</code> | <code>boolean</code> | Exclude internal datasets (those with IDs starting with <code>cribl_</code>) from the response. |
| <code>excludeByos?</code> | <code>boolean</code> | Exclude BYOS (Bring Your Own Storage) datasets from the response. |
| <code>includeMetrics?</code> | <code>boolean</code> | Set to <code>true</code> to include storage metrics for each Lake Dataset. Otherwise, <code>false</code> (default). Requires a Cribl Lake metrics license. |
| <code>offset?</code> | <code>number</code> | Starting point for catalog-backed pagination. Requires <code>limit</code>. |
| <code>limit?</code> | <code>number</code> | Page size for catalog-backed pagination. Requires <code>offset</code>. |
| <code>orderBy?</code> | <code>string</code> | Catalog sort field when paginating: <code>name</code>, <code>createdAt</code>, <code>updatedAt</code>, <code>providerPath</code>, <code>type</code>, or <code>retentionPeriodInDays</code>. Defaults to <code>name</code>. |
| <code>orderDir?</code> | <code>string</code> | Sort direction when paginating: <code>asc</code> or <code>desc</code>. Defaults to <code>asc</code>. |
| <code>name?</code> | <code>string</code> | Exact dataset name match (catalog path, with pagination). |
| <code>nameContains?</code> | <code>string</code> | Case-insensitive substring match on dataset name (catalog path, with pagination). |
| <code>providerPathContains?</code> | <code>string</code> | Case-insensitive substring match on provider path (catalog path, with pagination). |
| <code>descriptionContains?</code> | <code>string</code> | Case-insensitive substring match on description (catalog path, with pagination). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lake.getCriblLakeDatasetByLakeId(request)`

- **OnSuccess**: <code>[PaginatedCriblLakeDataset](src/models/paginated-cribl-lake-dataset.ts)</code>
- **OnError**: throws <code>[Lake.GetCriblLakeDatasetByLakeIdError](src/resources/lake.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lake.getCriblLakeDatasetByLakeId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedCriblLakeDataset, Lake.GetCriblLakeDatasetByLakeIdError&gt;</code>, with `result.value` of type <code>[PaginatedCriblLakeDataset](src/models/paginated-cribl-lake-dataset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCriblLakeDatasetByLakeIdAndId(request: Lake.GetCriblLakeDatasetByLakeIdAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedCriblLakeDataset, Lake.GetCriblLakeDatasetByLakeIdAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Lake Dataset in the specified Lake (Cribl.Cloud only).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lake.getCriblLakeDatasetByLakeIdAndId({
    lakeId: "some example string",
    id: "some example string",
  });
  // TODO: Handle 'response' of type CountedCriblLakeDataset
} catch (err) {
  // TODO: Handle 'err' of type Lake.GetCriblLakeDatasetByLakeIdAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lake.getCriblLakeDatasetByLakeIdAndId({
  lakeId: "some example string",
  id: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedCriblLakeDataset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lakeId</code> | <code>string</code> | The <code>id</code> of the Lake that contains the Lake Dataset to get. |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Lake Dataset to get. |
| <code>includeMetrics?</code> | <code>boolean</code> | Set to <code>true</code> to include storage metrics for each Lake Dataset. Otherwise, <code>false</code> (default). Requires a Cribl Lake metrics license. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lake.getCriblLakeDatasetByLakeIdAndId(request)`

- **OnSuccess**: <code>[CountedCriblLakeDataset](src/models/counted-cribl-lake-dataset.ts)</code>
- **OnError**: throws <code>[Lake.GetCriblLakeDatasetByLakeIdAndIdError](src/resources/lake.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lake.getCriblLakeDatasetByLakeIdAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedCriblLakeDataset, Lake.GetCriblLakeDatasetByLakeIdAndIdError&gt;</code>, with `result.value` of type <code>[CountedCriblLakeDataset](src/models/counted-cribl-lake-dataset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCriblLakeDatasetByLakeIdAndId(request: Lake.UpdateCriblLakeDatasetByLakeIdAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedCriblLakeDataset, Lake.UpdateCriblLakeDatasetByLakeIdAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Lake Dataset in the specified Lake (Cribl.Cloud only).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lake.updateCriblLakeDatasetByLakeIdAndId({
    lakeId: "some example string",
    id: "some example string",
    body: { retentionPeriodInDays: 180 },
  });
  // TODO: Handle 'response' of type CountedCriblLakeDataset
} catch (err) {
  // TODO: Handle 'err' of type Lake.UpdateCriblLakeDatasetByLakeIdAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lake.updateCriblLakeDatasetByLakeIdAndId({
  lakeId: "some example string",
  id: "some example string",
  body: { retentionPeriodInDays: 180 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedCriblLakeDataset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lakeId</code> | <code>string</code> | The <code>id</code> of the Lake that contains the Lake Dataset to update. |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Lake Dataset to update. |
| <code>body</code> | <code>[CriblLakeDatasetUpdate](src/models/cribl-lake-dataset-update.ts)</code> | CriblLakeDatasetUpdate object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lake.updateCriblLakeDatasetByLakeIdAndId(request)`

- **OnSuccess**: <code>[CountedCriblLakeDataset](src/models/counted-cribl-lake-dataset.ts)</code>
- **OnError**: throws <code>[Lake.UpdateCriblLakeDatasetByLakeIdAndIdError](src/resources/lake.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lake.updateCriblLakeDatasetByLakeIdAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedCriblLakeDataset, Lake.UpdateCriblLakeDatasetByLakeIdAndIdError&gt;</code>, with `result.value` of type <code>[CountedCriblLakeDataset](src/models/counted-cribl-lake-dataset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Packs

> Source: [Packs](src/resources/packs.ts)

<details>
<summary><code>createPacks(request: Packs.CreatePacksRequest, options?: RequestOptions): ApiPromise&lt;CountedPackInstallInfo, Packs.CreatePacksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Install a Pack.<br/><br/>To install an uploaded Pack, provide the <code>source</code> value from the <code>PUT /packs</code> response as the <code>source</code> parameter in the request body.<br/><br/>To install a Pack by importing from a URL, provide the direct URL location of the <code>.crbl</code> file for the Pack as the <code>source</code> parameter in the request body.<br/><br/>To install a Pack by importing from a Git repository, provide <code>git+&lt;repo-url&gt;</code> as the <code>source</code> parameter in the request body.<br/><br/>If you do not include the <code>source</code> parameter in the request body, an empty Pack is created.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.packs.createPacks({
    body: {
      source: "https://packs.cribl.io/dl/cribl-duo-rest-io/latest/cribl-duo-rest-io-latest.crbl",
      allowCustomFunctions: true,
      force: true,
    },
  });
  // TODO: Handle 'response' of type CountedPackInstallInfo
} catch (err) {
  // TODO: Handle 'err' of type Packs.CreatePacksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.packs.createPacks({
  body: {
    source: "https://packs.cribl.io/dl/cribl-duo-rest-io/latest/cribl-duo-rest-io-latest.crbl",
    allowCustomFunctions: true,
    force: true,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedPackInstallInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PackRequestBody2](src/models/unions/pack-request-body2.ts)</code> | packRequestBody object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.packs.createPacks(request)`

- **OnSuccess**: <code>[CountedPackInstallInfo](src/models/counted-pack-install-info.ts)</code>
- **OnError**: throws <code>[Packs.CreatePacksError](src/resources/packs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.packs.createPacks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedPackInstallInfo, Packs.CreatePacksError&gt;</code>, with `result.value` of type <code>[CountedPackInstallInfo](src/models/counted-pack-install-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePacksById(request: Packs.DeletePacksByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedPackUninstallInfo, Packs.DeletePacksByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uninstall the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.packs.deletePacksById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedPackUninstallInfo
} catch (err) {
  // TODO: Handle 'err' of type Packs.DeletePacksByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.packs.deletePacksById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedPackUninstallInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Pack to uninstall. Use the <code>id</code> field from the list response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.packs.deletePacksById(request)`

- **OnSuccess**: <code>[CountedPackUninstallInfo](src/models/counted-pack-uninstall-info.ts)</code>
- **OnError**: throws <code>[Packs.DeletePacksByIdError](src/resources/packs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.packs.deletePacksById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedPackUninstallInfo, Packs.DeletePacksByIdError&gt;</code>, with `result.value` of type <code>[CountedPackUninstallInfo](src/models/counted-pack-uninstall-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPacks(request: Packs.GetPacksRequest, options?: RequestOptions): ApiPromise&lt;PaginatedPackInfo, Packs.GetPacksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Packs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.packs.getPacks();
  // TODO: Handle 'response' of type PaginatedPackInfo
} catch (err) {
  // TODO: Handle 'err' of type Packs.GetPacksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.packs.getPacks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedPackInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>with?</code> | <code>string</code> | Comma-separated list of additional properties to include in the response. When set, the response includes a count of each specified property in each Pack. Supported values: <code>inputs</code>, <code>outputs</code>, <code>collectors</code>. |
| <code>offset?</code> | <code>number</code> | Pagination offset |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.packs.getPacks(request)`

- **OnSuccess**: <code>[PaginatedPackInfo](src/models/paginated-pack-info.ts)</code>
- **OnError**: throws <code>[Packs.GetPacksError](src/resources/packs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.packs.getPacks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedPackInfo, Packs.GetPacksError&gt;</code>, with `result.value` of type <code>[PaginatedPackInfo](src/models/paginated-pack-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPacksById(request: Packs.GetPacksByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedPackInfo, Packs.GetPacksByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.packs.getPacksById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedPackInfo
} catch (err) {
  // TODO: Handle 'err' of type Packs.GetPacksByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.packs.getPacksById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedPackInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Pack to get. Use the <code>id</code> field from the list response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.packs.getPacksById(request)`

- **OnSuccess**: <code>[CountedPackInfo](src/models/counted-pack-info.ts)</code>
- **OnError**: throws <code>[Packs.GetPacksByIdError](src/resources/packs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.packs.getPacksById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedPackInfo, Packs.GetPacksByIdError&gt;</code>, with `result.value` of type <code>[CountedPackInfo](src/models/counted-pack-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePacks(request: Packs.UpdatePacksRequest, options?: RequestOptions): ApiPromise&lt;UploadPackResponse, Packs.UpdatePacksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a Pack file. Returns the <code>source</code> ID needed to install the Pack with <code>POST /packs</code>, which you must call separately.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.packs.updatePacks({
    filename: "some example string",
    body: new Uint8Array(),
  });
  // TODO: Handle 'response' of type UploadPackResponse
} catch (err) {
  // TODO: Handle 'err' of type Packs.UpdatePacksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.packs.updatePacks({
  filename: "some example string",
  body: new Uint8Array(),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadPackResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filename</code> | <code>string</code> | Filename of the Pack file to upload. |
| <code>body</code> | <code>FileInput</code> | Binary contents of the <code>.crbl</code> Pack file to stage for installation |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.packs.updatePacks(request)`

- **OnSuccess**: <code>[UploadPackResponse](src/models/upload-pack-response.ts)</code>
- **OnError**: throws <code>[Packs.UpdatePacksError](src/resources/packs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.packs.updatePacks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadPackResponse, Packs.UpdatePacksError&gt;</code>, with `result.value` of type <code>[UploadPackResponse](src/models/upload-pack-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePacksById(request: Packs.UpdatePacksByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedPackInfo, Packs.UpdatePacksByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upgrade the specified Pack.<br/><br/>If the Pack includes any user-modified versions of default Cribl Knowledge resources such as lookups, copy the modified files locally for safekeeping before upgrading the Pack. Copy the modified files back to the upgraded Pack after you install it with <code>POST /packs</code> to overwrite the default versions in the Pack.<br/><br/>After you upgrade the Pack, update any Routes, Pipelines, Sources, and Destinations that use the previous Pack version so that they reference the upgraded Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.packs.updatePacksById({
    id: "some example string",
    body: {
      source:
        "https://github.com/criblpacks/cribl-palo-alto-networks/releases/download/1.1.4/cribl-palo-alto-networks-a3e5a19d-1.1.4.crbl",
    },
  });
  // TODO: Handle 'response' of type CountedPackInfo
} catch (err) {
  // TODO: Handle 'err' of type Packs.UpdatePacksByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.packs.updatePacksById({
  id: "some example string",
  body: {
    source:
      "https://github.com/criblpacks/cribl-palo-alto-networks/releases/download/1.1.4/cribl-palo-alto-networks-a3e5a19d-1.1.4.crbl",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedPackInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Pack to upgrade. Use the <code>id</code> field from the list response. |
| <code>body</code> | <code>[PackUpgradeRequest](src/models/pack-upgrade-request.ts)</code> | PackUpgradeRequest object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.packs.updatePacksById(request)`

- **OnSuccess**: <code>[CountedPackInfo](src/models/counted-pack-info.ts)</code>
- **OnError**: throws <code>[Packs.UpdatePacksByIdError](src/resources/packs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.packs.updatePacksById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedPackInfo, Packs.UpdatePacksByIdError&gt;</code>, with `result.value` of type <code>[CountedPackInfo](src/models/counted-pack-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Pipelines

> Source: [Pipelines](src/resources/pipelines.ts)

<details>
<summary><code>createPipelines(request: Pipelines.CreatePipelinesRequest, options?: RequestOptions): ApiPromise&lt;CountedPipeline, Pipelines.CreatePipelinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Pipeline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelines.createPipelines({
    body: {
      id: "empty-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "",
        streamtags: [],
        functions: [],
        groups: {},
      },
    },
  });
  // TODO: Handle 'response' of type CountedPipeline
} catch (err) {
  // TODO: Handle 'err' of type Pipelines.CreatePipelinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelines.createPipelines({
  body: {
    id: "empty-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "",
      streamtags: [],
      functions: [],
      groups: {},
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedPipeline
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Pipeline](src/models/pipeline.ts)</code> | Pipeline object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelines.createPipelines(request)`

- **OnSuccess**: <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: throws <code>[Pipelines.CreatePipelinesError](src/resources/pipelines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelines.createPipelines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedPipeline, Pipelines.CreatePipelinesError&gt;</code>, with `result.value` of type <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPipelinesByPack(request: Pipelines.CreatePipelinesByPackRequest, options?: RequestOptions): ApiPromise&lt;CountedPipeline, Pipelines.CreatePipelinesByPackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Pipeline within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelines.createPipelinesByPack({
    pack: "some example string",
    body: {
      id: "empty-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "",
        streamtags: [],
        functions: [],
        groups: {},
      },
    },
  });
  // TODO: Handle 'response' of type CountedPipeline
} catch (err) {
  // TODO: Handle 'err' of type Pipelines.CreatePipelinesByPackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelines.createPipelinesByPack({
  pack: "some example string",
  body: {
    id: "empty-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "",
      streamtags: [],
      functions: [],
      groups: {},
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedPipeline
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>body</code> | <code>[Pipeline](src/models/pipeline.ts)</code> | Pipeline object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelines.createPipelinesByPack(request)`

- **OnSuccess**: <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: throws <code>[Pipelines.CreatePipelinesByPackError](src/resources/pipelines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelines.createPipelinesByPack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedPipeline, Pipelines.CreatePipelinesByPackError&gt;</code>, with `result.value` of type <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePipelinesById(request: Pipelines.DeletePipelinesByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedPipeline, Pipelines.DeletePipelinesByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the specified Pipeline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelines.deletePipelinesById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedPipeline
} catch (err) {
  // TODO: Handle 'err' of type Pipelines.DeletePipelinesByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelines.deletePipelinesById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedPipeline
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Pipeline to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelines.deletePipelinesById(request)`

- **OnSuccess**: <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: throws <code>[Pipelines.DeletePipelinesByIdError](src/resources/pipelines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelines.deletePipelinesById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedPipeline, Pipelines.DeletePipelinesByIdError&gt;</code>, with `result.value` of type <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePipelinesByPackAndId(request: Pipelines.DeletePipelinesByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedPipeline, Pipelines.DeletePipelinesByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the specified Pipeline within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelines.deletePipelinesByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedPipeline
} catch (err) {
  // TODO: Handle 'err' of type Pipelines.DeletePipelinesByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelines.deletePipelinesByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedPipeline
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Pipeline to delete. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelines.deletePipelinesByPackAndId(request)`

- **OnSuccess**: <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: throws <code>[Pipelines.DeletePipelinesByPackAndIdError](src/resources/pipelines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelines.deletePipelinesByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedPipeline, Pipelines.DeletePipelinesByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPipelines(request: Pipelines.GetPipelinesRequest, options?: RequestOptions): ApiPromise&lt;PaginatedPipeline, Pipelines.GetPipelinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Pipelines.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelines.getPipelines();
  // TODO: Handle 'response' of type PaginatedPipeline
} catch (err) {
  // TODO: Handle 'err' of type Pipelines.GetPipelinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelines.getPipelines().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedPipeline
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>offset?</code> | <code>number</code> | Starting point from which to retrieve results for this request. Use with <code>limit</code> to paginate the response into manageable batches. |
| <code>limit?</code> | <code>number</code> | Maximum number of Pipelines to return in the response for this request. Use with <code>offset</code> to paginate the response into manageable batches. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelines.getPipelines(request)`

- **OnSuccess**: <code>[PaginatedPipeline](src/models/paginated-pipeline.ts)</code>
- **OnError**: throws <code>[Pipelines.GetPipelinesError](src/resources/pipelines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelines.getPipelines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedPipeline, Pipelines.GetPipelinesError&gt;</code>, with `result.value` of type <code>[PaginatedPipeline](src/models/paginated-pipeline.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPipelinesById(request: Pipelines.GetPipelinesByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedPipeline, Pipelines.GetPipelinesByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Pipeline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelines.getPipelinesById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedPipeline
} catch (err) {
  // TODO: Handle 'err' of type Pipelines.GetPipelinesByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelines.getPipelinesById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedPipeline
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Pipeline to get. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelines.getPipelinesById(request)`

- **OnSuccess**: <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: throws <code>[Pipelines.GetPipelinesByIdError](src/resources/pipelines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelines.getPipelinesById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedPipeline, Pipelines.GetPipelinesByIdError&gt;</code>, with `result.value` of type <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPipelinesByPack(request: Pipelines.GetPipelinesByPackRequest, options?: RequestOptions): ApiPromise&lt;PaginatedPipeline, Pipelines.GetPipelinesByPackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Pipelines within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelines.getPipelinesByPack({ pack: "some example string" });
  // TODO: Handle 'response' of type PaginatedPipeline
} catch (err) {
  // TODO: Handle 'err' of type Pipelines.GetPipelinesByPackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelines.getPipelinesByPack({ pack: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedPipeline
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>offset?</code> | <code>number</code> | Starting point from which to retrieve results for this request. Use with <code>limit</code> to paginate the response into manageable batches. |
| <code>limit?</code> | <code>number</code> | Maximum number of Pipelines to return in the response for this request. Use with <code>offset</code> to paginate the response into manageable batches. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelines.getPipelinesByPack(request)`

- **OnSuccess**: <code>[PaginatedPipeline](src/models/paginated-pipeline.ts)</code>
- **OnError**: throws <code>[Pipelines.GetPipelinesByPackError](src/resources/pipelines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelines.getPipelinesByPack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedPipeline, Pipelines.GetPipelinesByPackError&gt;</code>, with `result.value` of type <code>[PaginatedPipeline](src/models/paginated-pipeline.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPipelinesByPackAndId(request: Pipelines.GetPipelinesByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedPipeline, Pipelines.GetPipelinesByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Pipeline within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelines.getPipelinesByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedPipeline
} catch (err) {
  // TODO: Handle 'err' of type Pipelines.GetPipelinesByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelines.getPipelinesByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedPipeline
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Pipeline to get. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelines.getPipelinesByPackAndId(request)`

- **OnSuccess**: <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: throws <code>[Pipelines.GetPipelinesByPackAndIdError](src/resources/pipelines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelines.getPipelinesByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedPipeline, Pipelines.GetPipelinesByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePipelinesById(request: Pipelines.UpdatePipelinesByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedPipeline, Pipelines.UpdatePipelinesByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Pipeline.<br/><br/>Provide a complete representation of the Pipeline that you want to update in the request body.<br/><br/>This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Pipeline.<br/><br/>Confirm that the configuration in your request body is correct before sending the request.<br/><br/>If the configuration is incorrect, the updated Pipeline might not function as expected.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelines.updatePipelinesById({
    id: "some example string",
    body: {
      id: "empty-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "",
        streamtags: [],
        functions: [],
        groups: {},
      },
    },
  });
  // TODO: Handle 'response' of type CountedPipeline
} catch (err) {
  // TODO: Handle 'err' of type Pipelines.UpdatePipelinesByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelines.updatePipelinesById({
  id: "some example string",
  body: {
    id: "empty-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "",
      streamtags: [],
      functions: [],
      groups: {},
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedPipeline
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Pipeline to update. |
| <code>body</code> | <code>[Pipeline](src/models/pipeline.ts)</code> | Pipeline object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelines.updatePipelinesById(request)`

- **OnSuccess**: <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: throws <code>[Pipelines.UpdatePipelinesByIdError](src/resources/pipelines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelines.updatePipelinesById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedPipeline, Pipelines.UpdatePipelinesByIdError&gt;</code>, with `result.value` of type <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePipelinesByPackAndId(request: Pipelines.UpdatePipelinesByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedPipeline, Pipelines.UpdatePipelinesByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Pipeline within the specified Pack.<br/><br/>Provide a complete representation of the Pipeline that you want to update in the request body.<br/><br/>This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Pipeline.<br/><br/>Confirm that the configuration in your request body is correct before sending the request.<br/><br/>If the configuration is incorrect, the updated Pipeline might not function as expected.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipelines.updatePipelinesByPackAndId({
    id: "some example string",
    pack: "some example string",
    body: {
      id: "empty-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "",
        streamtags: [],
        functions: [],
        groups: {},
      },
    },
  });
  // TODO: Handle 'response' of type CountedPipeline
} catch (err) {
  // TODO: Handle 'err' of type Pipelines.UpdatePipelinesByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipelines.updatePipelinesByPackAndId({
  id: "some example string",
  pack: "some example string",
  body: {
    id: "empty-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "",
      streamtags: [],
      functions: [],
      groups: {},
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedPipeline
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Pipeline to update. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>body</code> | <code>[Pipeline](src/models/pipeline.ts)</code> | Pipeline object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipelines.updatePipelinesByPackAndId(request)`

- **OnSuccess**: <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: throws <code>[Pipelines.UpdatePipelinesByPackAndIdError](src/resources/pipelines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipelines.updatePipelinesByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedPipeline, Pipelines.UpdatePipelinesByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedPipeline](src/models/counted-pipeline.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Preview

> Source: [Preview](src/resources/preview.ts)

<details>
<summary><code>createSystemCapture(request: Preview.CreateSystemCaptureRequest, options?: RequestOptions): ApiPromise&lt;undefined, Preview.CreateSystemCaptureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiate a live data capture from Cribl Workers. Returns a stream of captured events in NDJSON format that match the parameters specified in the request body.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.preview.createSystemCapture({
    body: { duration: 5, filter: 'sourcetype==="pan:traffic"', level: CaptureLevel1._0, maxEvents: 100 },
  });
} catch (err) {
  // TODO: Handle 'err' of type Preview.CreateSystemCaptureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.preview.createSystemCapture({
  body: { duration: 5, filter: 'sourcetype==="pan:traffic"', level: CaptureLevel1._0, maxEvents: 100 },
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
| <code>body</code> | <code>[CaptureParamsReq](src/models/capture-params-req.ts)</code> | CaptureParamsReq object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.preview.createSystemCapture(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Preview.CreateSystemCaptureError](src/resources/preview.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.preview.createSystemCapture(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Preview.CreateSystemCaptureError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RoutesApi

> Source: [RoutesApi](src/resources/routes-api.ts)

<details>
<summary><code>createRoutesAppendById(request: RoutesApi.CreateRoutesAppendByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedRoutes, RoutesApi.CreateRoutesAppendByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a Route to the end of the specified Routing table.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.routesApi.createRoutesAppendById({
    id: "some example string",
    body: [
      {
        description: "Route new logs to main pipeline",
        filter: 'source == "new.log"',
        name: "new-route",
        pipeline: "main",
        final: true,
        id: "route-new",
      },
    ],
  });
  // TODO: Handle 'response' of type CountedRoutes
} catch (err) {
  // TODO: Handle 'err' of type RoutesApi.CreateRoutesAppendByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.routesApi.createRoutesAppendById({
  id: "some example string",
  body: [
    {
      description: "Route new logs to main pipeline",
      filter: 'source == "new.log"',
      name: "new-route",
      pipeline: "main",
      final: true,
      id: "route-new",
    },
  ],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedRoutes
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Routing table to add the Route to. The supported value is <code>default</code>. |
| <code>body</code> | <code>[RouteConfInput](src/models/route-conf-input.ts)[]</code> | RouteDefinitions object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.routesApi.createRoutesAppendById(request)`

- **OnSuccess**: <code>[CountedRoutes](src/models/counted-routes.ts)</code>
- **OnError**: throws <code>[RoutesApi.CreateRoutesAppendByIdError](src/resources/routes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.routesApi.createRoutesAppendById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedRoutes, RoutesApi.CreateRoutesAppendByIdError&gt;</code>, with `result.value` of type <code>[CountedRoutes](src/models/counted-routes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createRoutesAppendByPackAndId(request: RoutesApi.CreateRoutesAppendByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedRoutes, RoutesApi.CreateRoutesAppendByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a Route to the end of the specified Routing table within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.routesApi.createRoutesAppendByPackAndId({
    id: "some example string",
    pack: "some example string",
    body: [
      {
        description: "Route new logs to main pipeline",
        filter: 'source == "new.log"',
        name: "new-route",
        pipeline: "main",
        final: true,
        id: "route-new",
      },
    ],
  });
  // TODO: Handle 'response' of type CountedRoutes
} catch (err) {
  // TODO: Handle 'err' of type RoutesApi.CreateRoutesAppendByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.routesApi.createRoutesAppendByPackAndId({
  id: "some example string",
  pack: "some example string",
  body: [
    {
      description: "Route new logs to main pipeline",
      filter: 'source == "new.log"',
      name: "new-route",
      pipeline: "main",
      final: true,
      id: "route-new",
    },
  ],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedRoutes
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Routing table to add the Route to. The supported value is <code>default</code>. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>body</code> | <code>[RouteConfInput](src/models/route-conf-input.ts)[]</code> | RouteDefinitions object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.routesApi.createRoutesAppendByPackAndId(request)`

- **OnSuccess**: <code>[CountedRoutes](src/models/counted-routes.ts)</code>
- **OnError**: throws <code>[RoutesApi.CreateRoutesAppendByPackAndIdError](src/resources/routes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.routesApi.createRoutesAppendByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedRoutes, RoutesApi.CreateRoutesAppendByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedRoutes](src/models/counted-routes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRoutes(request: RoutesApi.GetRoutesRequest, options?: RequestOptions): ApiPromise&lt;PaginatedRoutes, RoutesApi.GetRoutesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Routes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.routesApi.getRoutes();
  // TODO: Handle 'response' of type PaginatedRoutes
} catch (err) {
  // TODO: Handle 'err' of type RoutesApi.GetRoutesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.routesApi.getRoutes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedRoutes
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>offset?</code> | <code>number</code> | Pagination offset |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.routesApi.getRoutes(request)`

- **OnSuccess**: <code>[PaginatedRoutes](src/models/paginated-routes.ts)</code>
- **OnError**: throws <code>[RoutesApi.GetRoutesError](src/resources/routes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.routesApi.getRoutes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedRoutes, RoutesApi.GetRoutesError&gt;</code>, with `result.value` of type <code>[PaginatedRoutes](src/models/paginated-routes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRoutesById(request: RoutesApi.GetRoutesByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedRoutes, RoutesApi.GetRoutesByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Routing table.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.routesApi.getRoutesById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedRoutes
} catch (err) {
  // TODO: Handle 'err' of type RoutesApi.GetRoutesByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.routesApi.getRoutesById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedRoutes
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Routing table to get. The supported value is <code>default</code>. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.routesApi.getRoutesById(request)`

- **OnSuccess**: <code>[CountedRoutes](src/models/counted-routes.ts)</code>
- **OnError**: throws <code>[RoutesApi.GetRoutesByIdError](src/resources/routes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.routesApi.getRoutesById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedRoutes, RoutesApi.GetRoutesByIdError&gt;</code>, with `result.value` of type <code>[CountedRoutes](src/models/counted-routes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRoutesByPack(request: RoutesApi.GetRoutesByPackRequest, options?: RequestOptions): ApiPromise&lt;PaginatedRoutes, RoutesApi.GetRoutesByPackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Routes within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.routesApi.getRoutesByPack({ pack: "some example string" });
  // TODO: Handle 'response' of type PaginatedRoutes
} catch (err) {
  // TODO: Handle 'err' of type RoutesApi.GetRoutesByPackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.routesApi.getRoutesByPack({ pack: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedRoutes
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>offset?</code> | <code>number</code> | Pagination offset |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.routesApi.getRoutesByPack(request)`

- **OnSuccess**: <code>[PaginatedRoutes](src/models/paginated-routes.ts)</code>
- **OnError**: throws <code>[RoutesApi.GetRoutesByPackError](src/resources/routes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.routesApi.getRoutesByPack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedRoutes, RoutesApi.GetRoutesByPackError&gt;</code>, with `result.value` of type <code>[PaginatedRoutes](src/models/paginated-routes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRoutesByPackAndId(request: RoutesApi.GetRoutesByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedRoutes, RoutesApi.GetRoutesByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Routing table within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.routesApi.getRoutesByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedRoutes
} catch (err) {
  // TODO: Handle 'err' of type RoutesApi.GetRoutesByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.routesApi.getRoutesByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedRoutes
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Routing table to get. The supported value is <code>default</code>. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.routesApi.getRoutesByPackAndId(request)`

- **OnSuccess**: <code>[CountedRoutes](src/models/counted-routes.ts)</code>
- **OnError**: throws <code>[RoutesApi.GetRoutesByPackAndIdError](src/resources/routes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.routesApi.getRoutesByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedRoutes, RoutesApi.GetRoutesByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedRoutes](src/models/counted-routes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateRoutesById(request: RoutesApi.UpdateRoutesByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedRoutes, RoutesApi.UpdateRoutesByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Routing table.<br/><br/>Provide a complete representation of the Routing table that you want to update in the request body.<br/><br/>This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Routing table.<br/><br/>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Routing table might not function as expected.<br/><br/>Cribl also removes any omitted Routes when updating the Routing table.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.routesApi.updateRoutesById({
    id: "some example string",
    body: {
      id: "default",
      routes: [
        {
          description: "Route access logs to main Pipeline",
          filter: 'source == "access.log"',
          name: "my-route",
          pipeline: "main",
          final: true,
          id: "default",
        },
      ],
    },
  });
  // TODO: Handle 'response' of type CountedRoutes
} catch (err) {
  // TODO: Handle 'err' of type RoutesApi.UpdateRoutesByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.routesApi.updateRoutesById({
  id: "some example string",
  body: {
    id: "default",
    routes: [
      {
        description: "Route access logs to main Pipeline",
        filter: 'source == "access.log"',
        name: "my-route",
        pipeline: "main",
        final: true,
        id: "default",
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedRoutes
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Routing table to update. The supported value is <code>default</code>. |
| <code>body</code> | <code>[RoutesInput](src/models/routes-input.ts)</code> | RoutesInput object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.routesApi.updateRoutesById(request)`

- **OnSuccess**: <code>[CountedRoutes](src/models/counted-routes.ts)</code>
- **OnError**: throws <code>[RoutesApi.UpdateRoutesByIdError](src/resources/routes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.routesApi.updateRoutesById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedRoutes, RoutesApi.UpdateRoutesByIdError&gt;</code>, with `result.value` of type <code>[CountedRoutes](src/models/counted-routes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateRoutesByPackAndId(request: RoutesApi.UpdateRoutesByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedRoutes, RoutesApi.UpdateRoutesByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Routing table within the specified Pack.<br/><br/>Provide a complete representation of the Routing table that you want to update in the request body.<br/><br/>This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Routing table.<br/><br/>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Routing table might not function as expected.<br/><br/>Cribl also removes any omitted Routes when updating the Routing table.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.routesApi.updateRoutesByPackAndId({
    id: "some example string",
    pack: "some example string",
    body: {
      id: "default",
      routes: [
        {
          description: "Route access logs to main Pipeline",
          filter: 'source == "access.log"',
          name: "my-route",
          pipeline: "main",
          final: true,
          id: "default",
        },
      ],
    },
  });
  // TODO: Handle 'response' of type CountedRoutes
} catch (err) {
  // TODO: Handle 'err' of type RoutesApi.UpdateRoutesByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.routesApi.updateRoutesByPackAndId({
  id: "some example string",
  pack: "some example string",
  body: {
    id: "default",
    routes: [
      {
        description: "Route access logs to main Pipeline",
        filter: 'source == "access.log"',
        name: "my-route",
        pipeline: "main",
        final: true,
        id: "default",
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedRoutes
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Routing table to update. The supported value is <code>default</code>. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>body</code> | <code>[RoutesInput](src/models/routes-input.ts)</code> | RoutesInput object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.routesApi.updateRoutesByPackAndId(request)`

- **OnSuccess**: <code>[CountedRoutes](src/models/counted-routes.ts)</code>
- **OnError**: throws <code>[RoutesApi.UpdateRoutesByPackAndIdError](src/resources/routes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.routesApi.updateRoutesByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedRoutes, RoutesApi.UpdateRoutesByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedRoutes](src/models/counted-routes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sources

> Source: [Sources](src/resources/sources.ts)

<details>
<summary><code>createInput(request: Sources.CreateInputRequest, options?: RequestOptions): ApiPromise&lt;CountedInputResponse, Sources.CreateInputError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Source. The system-managed provenance field (JSON <code>criblSourceProvenance</code>) must be omitted from the request body.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.createInput({
    body: {
      id: "akamai-hec-source",
      type: "akamai_hec",
      host: "0.0.0.0",
      port: 8088,
      hecAPI: "/services/collector",
      sendToRoutes: true,
      pqEnabled: false,
    },
  });
  // TODO: Handle 'response' of type CountedInputResponse
} catch (err) {
  // TODO: Handle 'err' of type Sources.CreateInputError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.createInput({
  body: {
    id: "akamai-hec-source",
    type: "akamai_hec",
    host: "0.0.0.0",
    port: 8088,
    hecAPI: "/services/collector",
    sendToRoutes: true,
    pqEnabled: false,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | Input object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.createInput(request)`

- **OnSuccess**: <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: throws <code>[Sources.CreateInputError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.createInput(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputResponse, Sources.CreateInputError&gt;</code>, with `result.value` of type <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createInputHecTokenById(request: Sources.CreateInputHecTokenByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedInputSplunkHec, Sources.CreateInputHecTokenByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an HEC token and optional metadata to the specified Splunk HEC Source.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.createInputHecTokenById({
    id: "some example string",
    body: { enabled: true, metadata: [{ name: "fieldX", value: "valueX" }], token: "12345678901" },
  });
  // TODO: Handle 'response' of type CountedInputSplunkHec
} catch (err) {
  // TODO: Handle 'err' of type Sources.CreateInputHecTokenByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.createInputHecTokenById({
  id: "some example string",
  body: { enabled: true, metadata: [{ name: "fieldX", value: "valueX" }], token: "12345678901" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputSplunkHec
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Splunk HEC Source. |
| <code>body</code> | <code>[AddHecTokenRequest](src/models/add-hec-token-request.ts)</code> | AddHecTokenRequest object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.createInputHecTokenById(request)`

- **OnSuccess**: <code>[CountedInputSplunkHec](src/models/counted-input-splunk-hec.ts)</code>
- **OnError**: throws <code>[Sources.CreateInputHecTokenByIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.createInputHecTokenById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputSplunkHec, Sources.CreateInputHecTokenByIdError&gt;</code>, with `result.value` of type <code>[CountedInputSplunkHec](src/models/counted-input-splunk-hec.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createInputSystemByPack(request: Sources.CreateInputSystemByPackRequest, options?: RequestOptions): ApiPromise&lt;CountedInputResponse, Sources.CreateInputSystemByPackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Source. The system-managed provenance field (JSON <code>criblSourceProvenance</code>) must be omitted from the request body within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.createInputSystemByPack({
    pack: "some example string",
    body: {
      id: "akamai-hec-source",
      type: "akamai_hec",
      host: "0.0.0.0",
      port: 8088,
      hecAPI: "/services/collector",
      sendToRoutes: true,
      pqEnabled: false,
    },
  });
  // TODO: Handle 'response' of type CountedInputResponse
} catch (err) {
  // TODO: Handle 'err' of type Sources.CreateInputSystemByPackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.createInputSystemByPack({
  pack: "some example string",
  body: {
    id: "akamai-hec-source",
    type: "akamai_hec",
    host: "0.0.0.0",
    port: 8088,
    hecAPI: "/services/collector",
    sendToRoutes: true,
    pqEnabled: false,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | Input object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.createInputSystemByPack(request)`

- **OnSuccess**: <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: throws <code>[Sources.CreateInputSystemByPackError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.createInputSystemByPack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputResponse, Sources.CreateInputSystemByPackError&gt;</code>, with `result.value` of type <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createInputSystemHecTokenByPackAndId(request: Sources.CreateInputSystemHecTokenByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedInputSplunkHec, Sources.CreateInputSystemHecTokenByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an HEC token and optional metadata to the specified Splunk HEC Source within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.createInputSystemHecTokenByPackAndId({
    id: "some example string",
    pack: "some example string",
    body: { enabled: true, metadata: [{ name: "fieldX", value: "valueX" }], token: "12345678901" },
  });
  // TODO: Handle 'response' of type CountedInputSplunkHec
} catch (err) {
  // TODO: Handle 'err' of type Sources.CreateInputSystemHecTokenByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.createInputSystemHecTokenByPackAndId({
  id: "some example string",
  pack: "some example string",
  body: { enabled: true, metadata: [{ name: "fieldX", value: "valueX" }], token: "12345678901" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputSplunkHec
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Splunk HEC Source. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>body</code> | <code>[AddHecTokenRequest](src/models/add-hec-token-request.ts)</code> | AddHecTokenRequest object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.createInputSystemHecTokenByPackAndId(request)`

- **OnSuccess**: <code>[CountedInputSplunkHec](src/models/counted-input-splunk-hec.ts)</code>
- **OnError**: throws <code>[Sources.CreateInputSystemHecTokenByPackAndIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.createInputSystemHecTokenByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputSplunkHec, Sources.CreateInputSystemHecTokenByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedInputSplunkHec](src/models/counted-input-splunk-hec.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInputById(request: Sources.DeleteInputByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedInputResponse, Sources.DeleteInputByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the specified Source.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.deleteInputById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedInputResponse
} catch (err) {
  // TODO: Handle 'err' of type Sources.DeleteInputByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.deleteInputById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Source to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.deleteInputById(request)`

- **OnSuccess**: <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: throws <code>[Sources.DeleteInputByIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.deleteInputById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputResponse, Sources.DeleteInputByIdError&gt;</code>, with `result.value` of type <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInputPqById(request: Sources.DeleteInputPqByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedString, Sources.DeleteInputPqByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clear the persistent queue (PQ) for the specified Source.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.deleteInputPqById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedString
} catch (err) {
  // TODO: Handle 'err' of type Sources.DeleteInputPqByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.deleteInputPqById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedString
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Source to clear the PQ for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.deleteInputPqById(request)`

- **OnSuccess**: <code>[CountedString](src/models/counted-string.ts)</code>
- **OnError**: throws <code>[Sources.DeleteInputPqByIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.deleteInputPqById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedString, Sources.DeleteInputPqByIdError&gt;</code>, with `result.value` of type <code>[CountedString](src/models/counted-string.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInputSystemByPackAndId(request: Sources.DeleteInputSystemByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedInputResponse, Sources.DeleteInputSystemByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the specified Source within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.deleteInputSystemByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedInputResponse
} catch (err) {
  // TODO: Handle 'err' of type Sources.DeleteInputSystemByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.deleteInputSystemByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Source to delete. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.deleteInputSystemByPackAndId(request)`

- **OnSuccess**: <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: throws <code>[Sources.DeleteInputSystemByPackAndIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.deleteInputSystemByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputResponse, Sources.DeleteInputSystemByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInputSystemPqByPackAndId(request: Sources.DeleteInputSystemPqByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedString, Sources.DeleteInputSystemPqByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clear the persistent queue (PQ) for the specified Source within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.deleteInputSystemPqByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedString
} catch (err) {
  // TODO: Handle 'err' of type Sources.DeleteInputSystemPqByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.deleteInputSystemPqByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedString
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Source to clear the PQ for. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.deleteInputSystemPqByPackAndId(request)`

- **OnSuccess**: <code>[CountedString](src/models/counted-string.ts)</code>
- **OnError**: throws <code>[Sources.DeleteInputSystemPqByPackAndIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.deleteInputSystemPqByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedString, Sources.DeleteInputSystemPqByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedString](src/models/counted-string.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInput(request: Sources.GetInputRequest, options?: RequestOptions): ApiPromise&lt;PaginatedInputResponse, Sources.GetInputError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Sources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.getInput();
  // TODO: Handle 'response' of type PaginatedInputResponse
} catch (err) {
  // TODO: Handle 'err' of type Sources.GetInputError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.getInput().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedInputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type?</code> | <code>string[]</code> | Type of Source to include in the results. Each request can include only one <code>type</code> parameter; multiple parameters per request are not supported. |
| <code>offset?</code> | <code>number</code> | Pagination offset |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.getInput(request)`

- **OnSuccess**: <code>[PaginatedInputResponse](src/models/paginated-input-response.ts)</code>
- **OnError**: throws <code>[Sources.GetInputError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.getInput(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedInputResponse, Sources.GetInputError&gt;</code>, with `result.value` of type <code>[PaginatedInputResponse](src/models/paginated-input-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInputById(request: Sources.GetInputByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedInputResponse, Sources.GetInputByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Source.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.getInputById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedInputResponse
} catch (err) {
  // TODO: Handle 'err' of type Sources.GetInputByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.getInputById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Source to get. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.getInputById(request)`

- **OnSuccess**: <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: throws <code>[Sources.GetInputByIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.getInputById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputResponse, Sources.GetInputByIdError&gt;</code>, with `result.value` of type <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInputPqById(request: Sources.GetInputPqByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedJobInfo, Sources.GetInputPqByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about the latest job to clear the persistent queue (PQ) for the specified Source.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.getInputPqById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedJobInfo
} catch (err) {
  // TODO: Handle 'err' of type Sources.GetInputPqByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.getInputPqById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedJobInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Source to get PQ job information for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.getInputPqById(request)`

- **OnSuccess**: <code>[CountedJobInfo](src/models/counted-job-info.ts)</code>
- **OnError**: throws <code>[Sources.GetInputPqByIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.getInputPqById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedJobInfo, Sources.GetInputPqByIdError&gt;</code>, with `result.value` of type <code>[CountedJobInfo](src/models/counted-job-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInputStatus(request: Sources.GetInputStatusRequest, options?: RequestOptions): ApiPromise&lt;PaginatedInputStatus, Sources.GetInputStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List status information and optional metrics for all configured Sources in the Worker Group or Edge Fleet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.getInputStatus();
  // TODO: Handle 'response' of type PaginatedInputStatus
} catch (err) {
  // TODO: Handle 'err' of type Sources.GetInputStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.getInputStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedInputStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>metrics?</code> | <code>boolean</code> | Set to <code>true</code> to include metrics for each Source. Otherwise, <code>false</code> (default). |
| <code>type?</code> | <code>boolean</code> | Set to <code>true</code> to prefix the Source <code>id</code> with the Source type. Otherwise, <code>false</code> (default). |
| <code>offset?</code> | <code>number</code> | Starting point from which to retrieve results for this request. Use with <code>limit</code> to paginate the response into manageable batches. |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return in the response for this request. Use with <code>offset</code> to paginate the response into manageable batches. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.getInputStatus(request)`

- **OnSuccess**: <code>[PaginatedInputStatus](src/models/paginated-input-status.ts)</code>
- **OnError**: throws <code>[Sources.GetInputStatusError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.getInputStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedInputStatus, Sources.GetInputStatusError&gt;</code>, with `result.value` of type <code>[PaginatedInputStatus](src/models/paginated-input-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInputStatusById(request: Sources.GetInputStatusByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedInputStatus, Sources.GetInputStatusByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status and optional metrics for the specified Source.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.getInputStatusById({ id: "some example string" });
  // TODO: Handle 'response' of type CountedInputStatus
} catch (err) {
  // TODO: Handle 'err' of type Sources.GetInputStatusByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.getInputStatusById({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Source to get the status for. |
| <code>metrics?</code> | <code>boolean</code> | Set to <code>true</code> to include metrics for each Source. Otherwise, <code>false</code> (default). |
| <code>type?</code> | <code>boolean</code> | Set to <code>true</code> to prefix the Source <code>id</code> with the Source type. Otherwise, <code>false</code> (default). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.getInputStatusById(request)`

- **OnSuccess**: <code>[CountedInputStatus](src/models/counted-input-status.ts)</code>
- **OnError**: throws <code>[Sources.GetInputStatusByIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.getInputStatusById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputStatus, Sources.GetInputStatusByIdError&gt;</code>, with `result.value` of type <code>[CountedInputStatus](src/models/counted-input-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInputStatusSystemInputsByPack(request: Sources.GetInputStatusSystemInputsByPackRequest, options?: RequestOptions): ApiPromise&lt;PaginatedInputStatus, Sources.GetInputStatusSystemInputsByPackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List status information and optional metrics for all configured Sources in the Worker Group or Edge Fleet within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.getInputStatusSystemInputsByPack({ pack: "some example string" });
  // TODO: Handle 'response' of type PaginatedInputStatus
} catch (err) {
  // TODO: Handle 'err' of type Sources.GetInputStatusSystemInputsByPackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.getInputStatusSystemInputsByPack({
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedInputStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>metrics?</code> | <code>boolean</code> | Set to <code>true</code> to include metrics for each Source. Otherwise, <code>false</code> (default). |
| <code>type?</code> | <code>boolean</code> | Set to <code>true</code> to prefix the Source <code>id</code> with the Source type. Otherwise, <code>false</code> (default). |
| <code>offset?</code> | <code>number</code> | Starting point from which to retrieve results for this request. Use with <code>limit</code> to paginate the response into manageable batches. |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return in the response for this request. Use with <code>offset</code> to paginate the response into manageable batches. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.getInputStatusSystemInputsByPack(request)`

- **OnSuccess**: <code>[PaginatedInputStatus](src/models/paginated-input-status.ts)</code>
- **OnError**: throws <code>[Sources.GetInputStatusSystemInputsByPackError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.getInputStatusSystemInputsByPack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedInputStatus, Sources.GetInputStatusSystemInputsByPackError&gt;</code>, with `result.value` of type <code>[PaginatedInputStatus](src/models/paginated-input-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInputStatusSystemInputsByPackAndId(request: Sources.GetInputStatusSystemInputsByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedInputStatus, Sources.GetInputStatusSystemInputsByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status and optional metrics for the specified Source within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.getInputStatusSystemInputsByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedInputStatus
} catch (err) {
  // TODO: Handle 'err' of type Sources.GetInputStatusSystemInputsByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.getInputStatusSystemInputsByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Source to get the status for. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>metrics?</code> | <code>boolean</code> | Set to <code>true</code> to include metrics for each Source. Otherwise, <code>false</code> (default). |
| <code>type?</code> | <code>boolean</code> | Set to <code>true</code> to prefix the Source <code>id</code> with the Source type. Otherwise, <code>false</code> (default). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.getInputStatusSystemInputsByPackAndId(request)`

- **OnSuccess**: <code>[CountedInputStatus](src/models/counted-input-status.ts)</code>
- **OnError**: throws <code>[Sources.GetInputStatusSystemInputsByPackAndIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.getInputStatusSystemInputsByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputStatus, Sources.GetInputStatusSystemInputsByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedInputStatus](src/models/counted-input-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInputSystemByPack(request: Sources.GetInputSystemByPackRequest, options?: RequestOptions): ApiPromise&lt;PaginatedInputResponse, Sources.GetInputSystemByPackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Sources within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.getInputSystemByPack({ pack: "some example string" });
  // TODO: Handle 'response' of type PaginatedInputResponse
} catch (err) {
  // TODO: Handle 'err' of type Sources.GetInputSystemByPackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.getInputSystemByPack({ pack: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedInputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>type?</code> | <code>string[]</code> | Type of Source to include in the results. Each request can include only one <code>type</code> parameter; multiple parameters per request are not supported. |
| <code>offset?</code> | <code>number</code> | Pagination offset |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.getInputSystemByPack(request)`

- **OnSuccess**: <code>[PaginatedInputResponse](src/models/paginated-input-response.ts)</code>
- **OnError**: throws <code>[Sources.GetInputSystemByPackError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.getInputSystemByPack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedInputResponse, Sources.GetInputSystemByPackError&gt;</code>, with `result.value` of type <code>[PaginatedInputResponse](src/models/paginated-input-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInputSystemByPackAndId(request: Sources.GetInputSystemByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedInputResponse, Sources.GetInputSystemByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the specified Source within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.getInputSystemByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedInputResponse
} catch (err) {
  // TODO: Handle 'err' of type Sources.GetInputSystemByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.getInputSystemByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Source to get. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.getInputSystemByPackAndId(request)`

- **OnSuccess**: <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: throws <code>[Sources.GetInputSystemByPackAndIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.getInputSystemByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputResponse, Sources.GetInputSystemByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInputSystemPqByPackAndId(request: Sources.GetInputSystemPqByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedJobInfo, Sources.GetInputSystemPqByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about the latest job to clear the persistent queue (PQ) for the specified Source within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.getInputSystemPqByPackAndId({
    id: "some example string",
    pack: "some example string",
  });
  // TODO: Handle 'response' of type CountedJobInfo
} catch (err) {
  // TODO: Handle 'err' of type Sources.GetInputSystemPqByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.getInputSystemPqByPackAndId({
  id: "some example string",
  pack: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedJobInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Source to get PQ job information for. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.getInputSystemPqByPackAndId(request)`

- **OnSuccess**: <code>[CountedJobInfo](src/models/counted-job-info.ts)</code>
- **OnError**: throws <code>[Sources.GetInputSystemPqByPackAndIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.getInputSystemPqByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedJobInfo, Sources.GetInputSystemPqByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedJobInfo](src/models/counted-job-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInputById(request: Sources.UpdateInputByIdRequest, options?: RequestOptions): ApiPromise&lt;CountedInputResponse, Sources.UpdateInputByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Source.<br/><br/>Provide a complete representation of the Source that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Source.<br/><br/>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Source might not function as expected.<br/><br/>Cribl preserves <code>criblSourceProvenance</code> when you omit it from the request body, and you cannot overwrite it through this endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.updateInputById({
    id: "some example string",
    body: {
      id: "akamai-hec-source",
      type: "akamai_hec",
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 8088,
      hecApi: "/services/collector",
    },
  });
  // TODO: Handle 'response' of type CountedInputResponse
} catch (err) {
  // TODO: Handle 'err' of type Sources.UpdateInputByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.updateInputById({
  id: "some example string",
  body: {
    id: "akamai-hec-source",
    type: "akamai_hec",
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 8088,
    hecApi: "/services/collector",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Source to update. |
| <code>body</code> | <code>[Input](src/models/unions/input.ts)</code> | Input object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.updateInputById(request)`

- **OnSuccess**: <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: throws <code>[Sources.UpdateInputByIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.updateInputById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputResponse, Sources.UpdateInputByIdError&gt;</code>, with `result.value` of type <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInputHecTokenByIdAndToken(request: Sources.UpdateInputHecTokenByIdAndTokenRequest, options?: RequestOptions): ApiPromise&lt;CountedInputSplunkHec, Sources.UpdateInputHecTokenByIdAndTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the metadata for the specified HEC token for the specified Splunk HEC Source.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.updateInputHecTokenByIdAndToken({
    id: "some example string",
    token: "some example string",
    body: { enabled: true, metadata: [{ name: "fieldX", value: "valueX" }] },
  });
  // TODO: Handle 'response' of type CountedInputSplunkHec
} catch (err) {
  // TODO: Handle 'err' of type Sources.UpdateInputHecTokenByIdAndTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.updateInputHecTokenByIdAndToken({
  id: "some example string",
  token: "some example string",
  body: { enabled: true, metadata: [{ name: "fieldX", value: "valueX" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputSplunkHec
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Splunk HEC Source. |
| <code>token</code> | <code>string</code> | The HEC token value whose metadata you want to update. Must match an existing token on the Source. |
| <code>body</code> | <code>[UpdateHecTokenRequest](src/models/update-hec-token-request.ts)</code> | UpdateHecTokenRequest object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.updateInputHecTokenByIdAndToken(request)`

- **OnSuccess**: <code>[CountedInputSplunkHec](src/models/counted-input-splunk-hec.ts)</code>
- **OnError**: throws <code>[Sources.UpdateInputHecTokenByIdAndTokenError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.updateInputHecTokenByIdAndToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputSplunkHec, Sources.UpdateInputHecTokenByIdAndTokenError&gt;</code>, with `result.value` of type <code>[CountedInputSplunkHec](src/models/counted-input-splunk-hec.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInputSystemByPackAndId(request: Sources.UpdateInputSystemByPackAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedInputResponse, Sources.UpdateInputSystemByPackAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Source.<br/><br/>Provide a complete representation of the Source that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Source.<br/><br/>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Source might not function as expected.<br/><br/>Cribl preserves <code>criblSourceProvenance</code> when you omit it from the request body, and you cannot overwrite it through this endpoint within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.updateInputSystemByPackAndId({
    id: "some example string",
    pack: "some example string",
    body: {
      id: "akamai-hec-source",
      type: "akamai_hec",
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 8088,
      hecApi: "/services/collector",
    },
  });
  // TODO: Handle 'response' of type CountedInputResponse
} catch (err) {
  // TODO: Handle 'err' of type Sources.UpdateInputSystemByPackAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.updateInputSystemByPackAndId({
  id: "some example string",
  pack: "some example string",
  body: {
    id: "akamai-hec-source",
    type: "akamai_hec",
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 8088,
    hecApi: "/services/collector",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Source to update. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>body</code> | <code>[Input](src/models/unions/input.ts)</code> | Input object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.updateInputSystemByPackAndId(request)`

- **OnSuccess**: <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: throws <code>[Sources.UpdateInputSystemByPackAndIdError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.updateInputSystemByPackAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputResponse, Sources.UpdateInputSystemByPackAndIdError&gt;</code>, with `result.value` of type <code>[CountedInputResponse](src/models/counted-input-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInputSystemHecTokenByPackAndIdAndToken(request: Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenRequest, options?: RequestOptions): ApiPromise&lt;CountedInputSplunkHec, Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the metadata for the specified HEC token for the specified Splunk HEC Source within the specified Pack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.updateInputSystemHecTokenByPackAndIdAndToken({
    id: "some example string",
    token: "some example string",
    pack: "some example string",
    body: { enabled: true, metadata: [{ name: "fieldX", value: "valueX" }] },
  });
  // TODO: Handle 'response' of type CountedInputSplunkHec
} catch (err) {
  // TODO: Handle 'err' of type Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.updateInputSystemHecTokenByPackAndIdAndToken({
  id: "some example string",
  token: "some example string",
  pack: "some example string",
  body: { enabled: true, metadata: [{ name: "fieldX", value: "valueX" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedInputSplunkHec
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Splunk HEC Source. |
| <code>token</code> | <code>string</code> | The HEC token value whose metadata you want to update. Must match an existing token on the Source. |
| <code>pack</code> | <code>string</code> | The <code>id</code> of the Pack. |
| <code>body</code> | <code>[UpdateHecTokenRequest](src/models/update-hec-token-request.ts)</code> | UpdateHecTokenRequest object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.updateInputSystemHecTokenByPackAndIdAndToken(request)`

- **OnSuccess**: <code>[CountedInputSplunkHec](src/models/counted-input-splunk-hec.ts)</code>
- **OnError**: throws <code>[Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.updateInputSystemHecTokenByPackAndIdAndToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedInputSplunkHec, Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenError&gt;</code>, with `result.value` of type <code>[CountedInputSplunkHec](src/models/counted-input-splunk-hec.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SystemApi

> Source: [SystemApi](src/resources/system-api.ts)

<details>
<summary><code>createSystemSettingsRestart(options?: RequestOptions): ApiPromise&lt;CountedSystemRestartResponse, SystemApi.CreateSystemSettingsRestartError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restart the Cribl server.<br/><br/>This operation requires <code>system.restart</code> to be set to <code>api</code> in <code>cribl.yml</code>. If this setting is not configured, the request returns a <code>403</code> error.<br/><br/>Restarting the server causes a brief period of downtime while the process stops and restarts. All in-flight events are drained before the process exits. Use <code>POST /system/settings/reload</code> to apply configuration changes without a full restart.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.systemApi.createSystemSettingsRestart();
  // TODO: Handle 'response' of type CountedSystemRestartResponse
} catch (err) {
  // TODO: Handle 'err' of type SystemApi.CreateSystemSettingsRestartError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.systemApi.createSystemSettingsRestart().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedSystemRestartResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.systemApi.createSystemSettingsRestart()`

- **OnSuccess**: <code>[CountedSystemRestartResponse](src/models/counted-system-restart-response.ts)</code>
- **OnError**: throws <code>[SystemApi.CreateSystemSettingsRestartError](src/resources/system-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.systemApi.createSystemSettingsRestart().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedSystemRestartResponse, SystemApi.CreateSystemSettingsRestartError&gt;</code>, with `result.value` of type <code>[CountedSystemRestartResponse](src/models/counted-system-restart-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSystemSettingsConf(options?: RequestOptions): ApiPromise&lt;CountedSystemSettingsConf, SystemApi.GetSystemSettingsConfError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current Cribl system settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.systemApi.getSystemSettingsConf();
  // TODO: Handle 'response' of type CountedSystemSettingsConf
} catch (err) {
  // TODO: Handle 'err' of type SystemApi.GetSystemSettingsConfError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.systemApi.getSystemSettingsConf().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedSystemSettingsConf
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.systemApi.getSystemSettingsConf()`

- **OnSuccess**: <code>[CountedSystemSettingsConf](src/models/counted-system-settings-conf.ts)</code>
- **OnError**: throws <code>[SystemApi.GetSystemSettingsConfError](src/resources/system-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.systemApi.getSystemSettingsConf().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedSystemSettingsConf, SystemApi.GetSystemSettingsConfError&gt;</code>, with `result.value` of type <code>[CountedSystemSettingsConf](src/models/counted-system-settings-conf.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSystemSettingsConf(request: SystemApi.UpdateSystemSettingsConfRequest, options?: RequestOptions): ApiPromise&lt;CountedSystemSettingsConfResponse, SystemApi.UpdateSystemSettingsConfError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the specified Cribl system settings.<br/><br/>Provide only the top-level sections (<code>api</code>, <code>workers</code>, <code>tls</code>, <code>proxy</code>, etc.) you want to change. Omitted sections stay unchanged. Each provided section fully replaces the existing one — send the complete section object, not only the changed fields.<br/><br/><code>api.loginRateLimit</code> and <code>api.ssoRateLimit</code> are deprecated. A new value is still applied, but it is stored as <code>rateLimits</code> in the API limits configuration. Use <code>PATCH /system/api-limits</code> instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.systemApi.updateSystemSettingsConf({
    body: {
      api: {
        disabled: false,
        host: "0.0.0.0",
        port: 9000,
        ssl: {
          certPath: "/opt/cribl/local/cribl/auth/myApiCert.crt",
          certificateName: "myApiCert",
          disabled: false,
          passphrase: "",
          privKeyPath: "/opt/cribl/local/cribl/auth/myApiCert.key",
        },
      },
      backups: { backupPersistence: "24h", backupsDirectory: "$CRIBL_STATE_DIR/backups" },
      pii: { enablePiiDetection: false },
      proxy: { useEnvVars: false },
      rollback: { rollbackEnabled: true },
      shutdown: { drainTimeout: 10000 },
      sni: { disableSniRouting: false },
      system: { intercom: true, upgrade: UpgradeOptionsSystemSettingsConfSystem.Api },
      tls: {
        defaultCipherList: "DEFAULT",
        defaultEcdhCurve: "auto",
        maxVersion: "TLSv1.3",
        minVersion: "TLSv1.2",
        rejectUnauthorized: true,
      },
      upgradeGroupSettings: { isRolling: true, quantity: 100, retryCount: 5, retryDelay: 1000 },
      upgradeSettings: {},
      workers: { count: 0, memory: 0, minimum: 1 },
    },
  });
  // TODO: Handle 'response' of type CountedSystemSettingsConfResponse
} catch (err) {
  // TODO: Handle 'err' of type SystemApi.UpdateSystemSettingsConfError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.systemApi.updateSystemSettingsConf({
  body: {
    api: {
      disabled: false,
      host: "0.0.0.0",
      port: 9000,
      ssl: {
        certPath: "/opt/cribl/local/cribl/auth/myApiCert.crt",
        certificateName: "myApiCert",
        disabled: false,
        passphrase: "",
        privKeyPath: "/opt/cribl/local/cribl/auth/myApiCert.key",
      },
    },
    backups: { backupPersistence: "24h", backupsDirectory: "$CRIBL_STATE_DIR/backups" },
    pii: { enablePiiDetection: false },
    proxy: { useEnvVars: false },
    rollback: { rollbackEnabled: true },
    shutdown: { drainTimeout: 10000 },
    sni: { disableSniRouting: false },
    system: { intercom: true, upgrade: UpgradeOptionsSystemSettingsConfSystem.Api },
    tls: {
      defaultCipherList: "DEFAULT",
      defaultEcdhCurve: "auto",
      maxVersion: "TLSv1.3",
      minVersion: "TLSv1.2",
      rejectUnauthorized: true,
    },
    upgradeGroupSettings: { isRolling: true, quantity: 100, retryCount: 5, retryDelay: 1000 },
    upgradeSettings: {},
    workers: { count: 0, memory: 0, minimum: 1 },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedSystemSettingsConfResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SystemSettingsConfUpdate](src/models/system-settings-conf-update.ts)</code> | SystemSettingsConfUpdate object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.systemApi.updateSystemSettingsConf(request)`

- **OnSuccess**: <code>[CountedSystemSettingsConfResponse](src/models/counted-system-settings-conf-response.ts)</code>
- **OnError**: throws <code>[SystemApi.UpdateSystemSettingsConfError](src/resources/system-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.systemApi.updateSystemSettingsConf(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedSystemSettingsConfResponse, SystemApi.UpdateSystemSettingsConfError&gt;</code>, with `result.value` of type <code>[CountedSystemSettingsConfResponse](src/models/counted-system-settings-conf-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Teams

> Source: [Teams](src/resources/teams.ts)

<details>
<summary><code>getProductsGroupsAclTeamsByProductAndId(request: Teams.GetProductsGroupsAclTeamsByProductAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedTeamAccessControlList, Teams.GetProductsGroupsAclTeamsByProductAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the Team access control list (ACL) for the specified Worker Group, Outpost Group, or Edge Fleet.<br/><br/>This endpoint lists Teams with explicit access assignments on the Group or Fleet. The response does not include access granted to individual Team Members through direct user assignments or inherited based on Team Permissions and Roles at the Organization/Global, Workspace, or product level.<br/><br/>To list the user ACL for a Group or Fleet, use <code>GET /products/{product}/groups/{id}/acl</code>.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teams.getProductsGroupsAclTeamsByProductAndId({
    product: ProductsCore.Stream,
    id: "some example string",
  });
  // TODO: Handle 'response' of type CountedTeamAccessControlList
} catch (err) {
  // TODO: Handle 'err' of type Teams.GetProductsGroupsAclTeamsByProductAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teams.getProductsGroupsAclTeamsByProductAndId({
  product: ProductsCore.Stream,
  id: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedTeamAccessControlList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product that contains the Worker Group, Outpost Group, or Edge Fleet. |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to get the Team ACL for. |
| <code>type?</code> | <code>[RbacResource](src/models/rbac-resource.ts)</code> | Filter for limiting the response to ACL entries for the specified RBAC resource type. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teams.getProductsGroupsAclTeamsByProductAndId(request)`

- **OnSuccess**: <code>[CountedTeamAccessControlList](src/models/counted-team-access-control-list.ts)</code>
- **OnError**: throws <code>[Teams.GetProductsGroupsAclTeamsByProductAndIdError](src/resources/teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teams.getProductsGroupsAclTeamsByProductAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedTeamAccessControlList, Teams.GetProductsGroupsAclTeamsByProductAndIdError&gt;</code>, with `result.value` of type <code>[CountedTeamAccessControlList](src/models/counted-team-access-control-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Versioning

> Source: [Versioning](src/resources/versioning.ts)

<details>
<summary><code>createVersionCommit(request: Versioning.CreateVersionCommitRequest, options?: RequestOptions): ApiPromise&lt;CountedGitCommitSummary, Versioning.CreateVersionCommitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new commit for pending changes to the Cribl configuration. Any merge conflicts indicated in the response must be resolved using Git.<br/><br/>To commit only a subset of configuration changes, specify the files to include in the commit in the <code>files</code> array.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.createVersionCommit({
    body: { message: "Updated pipeline configuration for syslog parsing" },
  });
  // TODO: Handle 'response' of type CountedGitCommitSummary
} catch (err) {
  // TODO: Handle 'err' of type Versioning.CreateVersionCommitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.createVersionCommit({
  body: { message: "Updated pipeline configuration for syslog parsing" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedGitCommitSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GitCommitBody](src/models/git-commit-body.ts)</code> | GitCommitBody object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.createVersionCommit(request)`

- **OnSuccess**: <code>[CountedGitCommitSummary](src/models/counted-git-commit-summary.ts)</code>
- **OnError**: throws <code>[Versioning.CreateVersionCommitError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.createVersionCommit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedGitCommitSummary, Versioning.CreateVersionCommitError&gt;</code>, with `result.value` of type <code>[CountedGitCommitSummary](src/models/counted-git-commit-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVersionPush(options?: RequestOptions): ApiPromise&lt;CountedString, Versioning.CreateVersionPushError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Push all local commits from the local repository to the remote repository.<br/><br/>Requires at least one local commit that has not been pushed. Returns an error if the remote repository cannot be reached or the push is rejected.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.createVersionPush();
  // TODO: Handle 'response' of type CountedString
} catch (err) {
  // TODO: Handle 'err' of type Versioning.CreateVersionPushError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.createVersionPush().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedString
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.createVersionPush()`

- **OnSuccess**: <code>[CountedString](src/models/counted-string.ts)</code>
- **OnError**: throws <code>[Versioning.CreateVersionPushError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.createVersionPush().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedString, Versioning.CreateVersionPushError&gt;</code>, with `result.value` of type <code>[CountedString](src/models/counted-string.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVersionRevert(request: Versioning.CreateVersionRevertRequest, options?: RequestOptions): ApiPromise&lt;CountedGitRevertResult, Versioning.CreateVersionRevertError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revert a commit in the local repository by creating a new commit that undoes the changes introduced by the specified commit.<br/><br/>Use the <code>force</code> field to proceed even when the working directory is not clean.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.createVersionRevert({ body: { commit: "a1b2c3d4e5f6" } });
  // TODO: Handle 'response' of type CountedGitRevertResult
} catch (err) {
  // TODO: Handle 'err' of type Versioning.CreateVersionRevertError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.createVersionRevert({
  body: { commit: "a1b2c3d4e5f6" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedGitRevertResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GitRevertParams](src/models/git-revert-params.ts)</code> | GitRevertParams object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.createVersionRevert(request)`

- **OnSuccess**: <code>[CountedGitRevertResult](src/models/counted-git-revert-result.ts)</code>
- **OnError**: throws <code>[Versioning.CreateVersionRevertError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.createVersionRevert(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedGitRevertResult, Versioning.CreateVersionRevertError&gt;</code>, with `result.value` of type <code>[CountedGitRevertResult](src/models/counted-git-revert-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVersionUndo(options?: RequestOptions): ApiPromise&lt;CountedBoolean, Versioning.CreateVersionUndoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Discard all uncommitted (staged) configuration changes, resetting the working directory to the last committed state. Use only if you are certain that you do not need to preserve your local changes.<br/><br/>When applied globally (no group), triggers a Cribl restart to reload the reverted configuration. Returns <code>false</code> if the working directory is already clean.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.createVersionUndo();
  // TODO: Handle 'response' of type CountedBoolean
} catch (err) {
  // TODO: Handle 'err' of type Versioning.CreateVersionUndoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.createVersionUndo().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedBoolean
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.createVersionUndo()`

- **OnSuccess**: <code>[CountedBoolean](src/models/counted-boolean.ts)</code>
- **OnError**: throws <code>[Versioning.CreateVersionUndoError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.createVersionUndo().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedBoolean, Versioning.CreateVersionUndoError&gt;</code>, with `result.value` of type <code>[CountedBoolean](src/models/counted-boolean.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVersion(request: Versioning.GetVersionRequest, options?: RequestOptions): ApiPromise&lt;PaginatedGitLogResult, Versioning.GetVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the commit history.<br/><br/>Analogous to <code>git log</code> for the Cribl configuration, allowing you to audit and review changes over time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.getVersion();
  // TODO: Handle 'response' of type PaginatedGitLogResult
} catch (err) {
  // TODO: Handle 'err' of type Versioning.GetVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.getVersion().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedGitLogResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count?</code> | <code>number</code> | Maximum number of commits to read from the commit history. When provided, <code>offset</code> and <code>limit</code> are applied to that read set. |
| <code>offset?</code> | <code>number</code> | Pagination offset |
| <code>limit?</code> | <code>number</code> | Maximum number of items to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.getVersion(request)`

- **OnSuccess**: <code>[PaginatedGitLogResult](src/models/paginated-git-log-result.ts)</code>
- **OnError**: throws <code>[Versioning.GetVersionError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.getVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedGitLogResult, Versioning.GetVersionError&gt;</code>, with `result.value` of type <code>[PaginatedGitLogResult](src/models/paginated-git-log-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVersionBranch(options?: RequestOptions): ApiPromise&lt;CountedBranchInfo, Versioning.GetVersionBranchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all branches in the Git repository used for Cribl configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.getVersionBranch();
  // TODO: Handle 'response' of type CountedBranchInfo
} catch (err) {
  // TODO: Handle 'err' of type Versioning.GetVersionBranchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.getVersionBranch().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedBranchInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.getVersionBranch()`

- **OnSuccess**: <code>[CountedBranchInfo](src/models/counted-branch-info.ts)</code>
- **OnError**: throws <code>[Versioning.GetVersionBranchError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.getVersionBranch().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedBranchInfo, Versioning.GetVersionBranchError&gt;</code>, with `result.value` of type <code>[CountedBranchInfo](src/models/counted-branch-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVersionCount(request: Versioning.GetVersionCountRequest, options?: RequestOptions): ApiPromise&lt;CountedGitCountResult, Versioning.GetVersionCountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a count of the files that changed since a commit. Default is the latest commit (HEAD).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.getVersionCount();
  // TODO: Handle 'response' of type CountedGitCountResult
} catch (err) {
  // TODO: Handle 'err' of type Versioning.GetVersionCountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.getVersionCount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedGitCountResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit?</code> | <code>string</code> | The Git commit hash to use as the starting point for the count. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.getVersionCount(request)`

- **OnSuccess**: <code>[CountedGitCountResult](src/models/counted-git-count-result.ts)</code>
- **OnError**: throws <code>[Versioning.GetVersionCountError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.getVersionCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedGitCountResult, Versioning.GetVersionCountError&gt;</code>, with `result.value` of type <code>[CountedGitCountResult](src/models/counted-git-count-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVersionCurrentBranch(options?: RequestOptions): ApiPromise&lt;CurrentBranchResult, Versioning.GetVersionCurrentBranchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the name of the Git branch that the Cribl configuration is checked out to. Useful for verifying the active configuration branch.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.getVersionCurrentBranch();
  // TODO: Handle 'response' of type CurrentBranchResult
} catch (err) {
  // TODO: Handle 'err' of type Versioning.GetVersionCurrentBranchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.getVersionCurrentBranch().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CurrentBranchResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.getVersionCurrentBranch()`

- **OnSuccess**: <code>[CurrentBranchResult](src/models/current-branch-result.ts)</code>
- **OnError**: throws <code>[Versioning.GetVersionCurrentBranchError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.getVersionCurrentBranch().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CurrentBranchResult, Versioning.GetVersionCurrentBranchError&gt;</code>, with `result.value` of type <code>[CurrentBranchResult](src/models/current-branch-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVersionDiff(request: Versioning.GetVersionDiffRequest, options?: RequestOptions): ApiPromise&lt;CountedGitDiffResult, Versioning.GetVersionDiffError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the diff for a commit. Default is the latest commit (HEAD).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.getVersionDiff();
  // TODO: Handle 'response' of type CountedGitDiffResult
} catch (err) {
  // TODO: Handle 'err' of type Versioning.GetVersionDiffError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.getVersionDiff().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedGitDiffResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit?</code> | <code>string</code> | The Git commit hash to get the diff for. |
| <code>filename?</code> | <code>string</code> | The relative path of the file to get the diff for. |
| <code>diffLineLimit?</code> | <code>number</code> | Number of lines of the diff to return. Default is 1000. Set to <code>0</code> to return the full diff, regardless of the number of lines. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.getVersionDiff(request)`

- **OnSuccess**: <code>[CountedGitDiffResult](src/models/counted-git-diff-result.ts)</code>
- **OnError**: throws <code>[Versioning.GetVersionDiffError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.getVersionDiff(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedGitDiffResult, Versioning.GetVersionDiffError&gt;</code>, with `result.value` of type <code>[CountedGitDiffResult](src/models/counted-git-diff-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVersionFiles(request: Versioning.GetVersionFilesRequest, options?: RequestOptions): ApiPromise&lt;CountedGitFilesResponse, Versioning.GetVersionFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the names and statuses of files that changed since a commit. Default is the latest commit (HEAD).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.getVersionFiles();
  // TODO: Handle 'response' of type CountedGitFilesResponse
} catch (err) {
  // TODO: Handle 'err' of type Versioning.GetVersionFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.getVersionFiles().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedGitFilesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit?</code> | <code>string</code> | The Git commit hash to use as the starting point for the request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.getVersionFiles(request)`

- **OnSuccess**: <code>[CountedGitFilesResponse](src/models/counted-git-files-response.ts)</code>
- **OnError**: throws <code>[Versioning.GetVersionFilesError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.getVersionFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedGitFilesResponse, Versioning.GetVersionFilesError&gt;</code>, with `result.value` of type <code>[CountedGitFilesResponse](src/models/counted-git-files-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVersionInfo(options?: RequestOptions): ApiPromise&lt;CountedGitInfo, Versioning.GetVersionInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the configuration and versioning status for the Git integration for the Cribl configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.getVersionInfo();
  // TODO: Handle 'response' of type CountedGitInfo
} catch (err) {
  // TODO: Handle 'err' of type Versioning.GetVersionInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.getVersionInfo().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedGitInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.getVersionInfo()`

- **OnSuccess**: <code>[CountedGitInfo](src/models/counted-git-info.ts)</code>
- **OnError**: throws <code>[Versioning.GetVersionInfoError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.getVersionInfo().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedGitInfo, Versioning.GetVersionInfoError&gt;</code>, with `result.value` of type <code>[CountedGitInfo](src/models/counted-git-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVersionShow(request: Versioning.GetVersionShowRequest, options?: RequestOptions): ApiPromise&lt;CountedGitShowResult, Versioning.GetVersionShowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the diff and log message for a commit. Default is the latest commit (HEAD).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.getVersionShow();
  // TODO: Handle 'response' of type CountedGitShowResult
} catch (err) {
  // TODO: Handle 'err' of type Versioning.GetVersionShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.getVersionShow().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedGitShowResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit?</code> | <code>string</code> | The Git commit hash to retrieve the diff and log message for. |
| <code>filename?</code> | <code>string</code> | The relative path of the file to get the diff and log message for. |
| <code>diffLineLimit?</code> | <code>number</code> | Number of lines of the diff to return. Default is 1000. Set to <code>0</code> to return the full diff, regardless of the number of lines. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.getVersionShow(request)`

- **OnSuccess**: <code>[CountedGitShowResult](src/models/counted-git-show-result.ts)</code>
- **OnError**: throws <code>[Versioning.GetVersionShowError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.getVersionShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedGitShowResult, Versioning.GetVersionShowError&gt;</code>, with `result.value` of type <code>[CountedGitShowResult](src/models/counted-git-show-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVersionStatus(options?: RequestOptions): ApiPromise&lt;CountedGitStatusResult, Versioning.GetVersionStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of the current working tree of the Git repository used for Cribl configuration. The response includes details about modified, staged, untracked, and conflicted files, as well as branch and remote tracking information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.versioning.getVersionStatus();
  // TODO: Handle 'response' of type CountedGitStatusResult
} catch (err) {
  // TODO: Handle 'err' of type Versioning.GetVersionStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.versioning.getVersionStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedGitStatusResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.versioning.getVersionStatus()`

- **OnSuccess**: <code>[CountedGitStatusResult](src/models/counted-git-status-result.ts)</code>
- **OnError**: throws <code>[Versioning.GetVersionStatusError](src/resources/versioning.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.versioning.getVersionStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedGitStatusResult, Versioning.GetVersionStatusError&gt;</code>, with `result.value` of type <code>[CountedGitStatusResult](src/models/counted-git-status-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WorkersApi

> Source: [WorkersApi](src/resources/workers-api.ts)

<details>
<summary><code>getProductsSummaryWorkersByProduct(request: WorkersApi.GetProductsSummaryWorkersByProductRequest, options?: RequestOptions): ApiPromise&lt;CountedNumber, WorkersApi.GetProductsSummaryWorkersByProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a count of all Worker, Edge, or Outpost Nodes for the specified Cribl product.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workersApi.getProductsSummaryWorkersByProduct({
    product: ProductsCore.Stream,
    filterExp: 'group=="default"',
  });
  // TODO: Handle 'response' of type CountedNumber
} catch (err) {
  // TODO: Handle 'err' of type WorkersApi.GetProductsSummaryWorkersByProductError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workersApi.getProductsSummaryWorkersByProduct({
  product: ProductsCore.Stream,
  filterExp: 'group=="default"',
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedNumber
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product to get the count of Worker, Edge, or Outpost Nodes for. |
| <code>filterExp?</code> | <code>string</code> | Filter expression to evaluate against Nodes for inclusion in the response (for example, <code>status=='healthy'</code>). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workersApi.getProductsSummaryWorkersByProduct(request)`

- **OnSuccess**: <code>[CountedNumber](src/models/counted-number.ts)</code>
- **OnError**: throws <code>[WorkersApi.GetProductsSummaryWorkersByProductError](src/resources/workers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workersApi.getProductsSummaryWorkersByProduct(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedNumber, WorkersApi.GetProductsSummaryWorkersByProductError&gt;</code>, with `result.value` of type <code>[CountedNumber](src/models/counted-number.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProductsWorkersByProduct(request: WorkersApi.GetProductsWorkersByProductRequest, options?: RequestOptions): ApiPromise&lt;PaginatedMasterWorkerEntry, WorkersApi.GetProductsWorkersByProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get detailed metadata for Worker, Edge, or Outpost Nodes for the specified Cribl product.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workersApi.getProductsWorkersByProduct({
    product: ProductsCore.Stream,
    filterExp: 'group=="default"',
    filter: "%7B%22field%22%3A%22group%22%2C%22op%22%3A%22is%22%2C%22value%22%3A%22default%22%7D",
  });
  // TODO: Handle 'response' of type PaginatedMasterWorkerEntry
} catch (err) {
  // TODO: Handle 'err' of type WorkersApi.GetProductsWorkersByProductError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workersApi.getProductsWorkersByProduct({
  product: ProductsCore.Stream,
  filterExp: 'group=="default"',
  filter: "%7B%22field%22%3A%22group%22%2C%22op%22%3A%22is%22%2C%22value%22%3A%22default%22%7D",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaginatedMasterWorkerEntry
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product to get Worker, Edge, or Outpost Nodes for. |
| <code>filterExp?</code> | <code>string</code> | Filter expression to evaluate against Nodes for inclusion in the response (for example, <code>status=='healthy'</code>). |
| <code>sortExp?</code> | <code>string</code> | Sorting expression to evaluate against Nodes to specify the sort order for the response. |
| <code>filter?</code> | <code>string</code> | JSON-stringified filter object to evaluate against Nodes for inclusion in the response (for example, <code>{"field":"status","op":"eq","value":"healthy"}</code>). |
| <code>sort?</code> | <code>string</code> | JSON-stringified sorting object to evaluate against Nodes to specify the sort order for the response. |
| <code>limit?</code> | <code>number</code> | Maximum number of Nodes to return in the response for this request. Use with <code>offset</code> to paginate the response into manageable batches. |
| <code>offset?</code> | <code>number</code> | Starting point from which to retrieve results for this request. Use with <code>limit</code> to paginate the response into manageable batches. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workersApi.getProductsWorkersByProduct(request)`

- **OnSuccess**: <code>[PaginatedMasterWorkerEntry](src/models/paginated-master-worker-entry.ts)</code>
- **OnError**: throws <code>[WorkersApi.GetProductsWorkersByProductError](src/resources/workers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workersApi.getProductsWorkersByProduct(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaginatedMasterWorkerEntry, WorkersApi.GetProductsWorkersByProductError&gt;</code>, with `result.value` of type <code>[PaginatedMasterWorkerEntry](src/models/paginated-master-worker-entry.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProductsWorkersByProductAndId(request: WorkersApi.GetProductsWorkersByProductAndIdRequest, options?: RequestOptions): ApiPromise&lt;CountedMasterWorkerEntry, WorkersApi.GetProductsWorkersByProductAndIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get detailed metadata for the specified Worker, Edge, or Outpost Node for the specified Cribl product.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workersApi.getProductsWorkersByProductAndId({
    product: ProductsCore.Stream,
    id: "some example string",
  });
  // TODO: Handle 'response' of type CountedMasterWorkerEntry
} catch (err) {
  // TODO: Handle 'err' of type WorkersApi.GetProductsWorkersByProductAndIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workersApi.getProductsWorkersByProductAndId({
  product: ProductsCore.Stream,
  id: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedMasterWorkerEntry
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product that contains the Node. |
| <code>id</code> | <code>string</code> | The <code>id</code> of the Node to get the metadata for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workersApi.getProductsWorkersByProductAndId(request)`

- **OnSuccess**: <code>[CountedMasterWorkerEntry](src/models/counted-master-worker-entry.ts)</code>
- **OnError**: throws <code>[WorkersApi.GetProductsWorkersByProductAndIdError](src/resources/workers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workersApi.getProductsWorkersByProductAndId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedMasterWorkerEntry, WorkersApi.GetProductsWorkersByProductAndIdError&gt;</code>, with `result.value` of type <code>[CountedMasterWorkerEntry](src/models/counted-master-worker-entry.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProductsWorkersRestartByProduct(request: WorkersApi.UpdateProductsWorkersRestartByProductRequest, options?: RequestOptions): ApiPromise&lt;CountedRestartResponse, WorkersApi.UpdateProductsWorkersRestartByProductError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restart all Worker, Edge, or Outpost Nodes for the specified Cribl product.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workersApi.updateProductsWorkersRestartByProduct({
    product: ProductsCore.Stream,
    body: {
      guids: [
        "guid-12345678-abcd-1234-abcd-123456789abc",
        "guid-87654321-dcba-4321-dcba-cba987654321",
        "guid-11111111-2222-3333-4444-555555555555",
      ],
    },
  });
  // TODO: Handle 'response' of type CountedRestartResponse
} catch (err) {
  // TODO: Handle 'err' of type WorkersApi.UpdateProductsWorkersRestartByProductError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workersApi.updateProductsWorkersRestartByProduct({
  product: ProductsCore.Stream,
  body: {
    guids: [
      "guid-12345678-abcd-1234-abcd-123456789abc",
      "guid-87654321-dcba-4321-dcba-cba987654321",
      "guid-11111111-2222-3333-4444-555555555555",
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountedRestartResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>product</code> | <code>[ProductsCore](src/models/products-core.ts)</code> | Name of the Cribl product whose Worker, Edge, or Outpost Nodes you want to restart. |
| <code>body</code> | <code>[RestartRequest](src/models/restart-request.ts)</code> | RestartRequest object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workersApi.updateProductsWorkersRestartByProduct(request)`

- **OnSuccess**: <code>[CountedRestartResponse](src/models/counted-restart-response.ts)</code>
- **OnError**: throws <code>[WorkersApi.UpdateProductsWorkersRestartByProductError](src/resources/workers-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workersApi.updateProductsWorkersRestartByProduct(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountedRestartResponse, WorkersApi.UpdateProductsWorkersRestartByProductError&gt;</code>, with `result.value` of type <code>[CountedRestartResponse](src/models/counted-restart-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CriblApiReferenceError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

