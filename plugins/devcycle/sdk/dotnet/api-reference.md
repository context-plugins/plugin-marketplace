# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [DevCycleClient](src/DevCycle/DevCycleClient.cs)

## Audiences

> Source: [Audiences](src/DevCycle/Api/Audiences.cs)

<details>
<summary><code>Task&lt;Audience&gt; AudiencesControllerCreate(AudiencesControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Audience

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Audiences.AudiencesControllerCreate(new AudiencesControllerCreateRequest
    {
        Project = "some example string",
        Body = new CreateAudienceDto
        {
            Filters = new AudienceOperator { Filters = [new AllFilter()], Operator = Operator.And },
        },
    });
    // TODO: Handle 'response' of type Audience
}
catch (ApiException<AudiencesControllerCreateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AudiencesControllerCreateRequest](src/DevCycle/Requests/Audiences/AudiencesControllerCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Audience](src/DevCycle/Models/Audience.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[AudiencesControllerCreateError](src/DevCycle/Errors/AudiencesControllerCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Audience&gt;&gt; AudiencesControllerFindAll(AudiencesControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Audiences.AudiencesControllerFindAll(new AudiencesControllerFindAllRequest
    {
        Project = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<Audience>
}
catch (ApiException<AudiencesControllerFindAllError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AudiencesControllerFindAllRequest](src/DevCycle/Requests/Audiences/AudiencesControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Audience](src/DevCycle/Models/Audience.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[AudiencesControllerFindAllError](src/DevCycle/Errors/AudiencesControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Audience&gt; AudiencesControllerFindOne(AudiencesControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an Audience by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Audiences.AudiencesControllerFindOne(new AudiencesControllerFindOneRequest
    {
        Key = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type Audience
}
catch (ApiException<AudiencesControllerFindOneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AudiencesControllerFindOneRequest](src/DevCycle/Requests/Audiences/AudiencesControllerFindOneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Audience](src/DevCycle/Models/Audience.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[AudiencesControllerFindOneError](src/DevCycle/Errors/AudiencesControllerFindOneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AudienceUsage&gt; AudiencesControllerFindUsages(AudiencesControllerFindUsagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the direct usages of an Audiences Usage by Features OR other Audiences by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Audiences.AudiencesControllerFindUsages(new AudiencesControllerFindUsagesRequest
    {
        Key = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type AudienceUsage
}
catch (ApiException<AudiencesControllerFindUsagesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AudiencesControllerFindUsagesRequest](src/DevCycle/Requests/Audiences/AudiencesControllerFindUsagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AudienceUsage](src/DevCycle/Models/AudienceUsage.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[AudiencesControllerFindUsagesError](src/DevCycle/Errors/AudiencesControllerFindUsagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AudiencesControllerRemove(AudiencesControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Audience by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Audiences.AudiencesControllerRemove(new AudiencesControllerRemoveRequest
    {
        Key = "some example string",
        Project = "some example string",
    });
}
catch (ApiException<AudiencesControllerRemoveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AudiencesControllerRemoveRequest](src/DevCycle/Requests/Audiences/AudiencesControllerRemoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[AudiencesControllerRemoveError](src/DevCycle/Errors/AudiencesControllerRemoveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Audience&gt; AudiencesControllerUpdate(AudiencesControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Audience by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Audiences.AudiencesControllerUpdate(new AudiencesControllerUpdateRequest
    {
        Key = "some example string",
        Project = "some example string",
        Body = new UpdateAudienceDto(),
    });
    // TODO: Handle 'response' of type Audience
}
catch (ApiException<AudiencesControllerUpdateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AudiencesControllerUpdateRequest](src/DevCycle/Requests/Audiences/AudiencesControllerUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Audience](src/DevCycle/Models/Audience.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[AudiencesControllerUpdateError](src/DevCycle/Errors/AudiencesControllerUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLog

> Source: [AuditLog](src/DevCycle/Api/AuditLog.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;AuditLogEntity&gt;&gt; AuditLogControllerFindAll(AuditLogControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuditLog.AuditLogControllerFindAll(new AuditLogControllerFindAllRequest
    {
        Feature = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<AuditLogEntity>
}
catch (ApiException<AuditLogControllerFindAllError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AuditLogControllerFindAllRequest](src/DevCycle/Requests/AuditLog/AuditLogControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[AuditLogEntity](src/DevCycle/Models/AuditLogEntity.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[AuditLogControllerFindAllError](src/DevCycle/Errors/AuditLogControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BucketingApi

> Source: [BucketingApi](src/DevCycle/Api/BucketingApi.cs)

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, Feature&gt;&gt; GetFeatures(GetFeaturesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BucketingApi.GetFeatures(new GetFeaturesRequest
    {
        Body = new UserData { UserId = "user_123456", Email = "user@example.com", Name = "John Doe", Country = "US" },
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, Feature>
}
catch (ApiException<GetFeaturesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFeaturesRequest](src/DevCycle/Requests/BucketingApi/GetFeaturesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, [Feature](src/DevCycle/Models/Feature.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[GetFeaturesError](src/DevCycle/Errors/GetFeaturesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Variable&gt; GetVariableByKey(GetVariableByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BucketingApi.GetVariableByKey(new GetVariableByKeyRequest
    {
        Key = "my-variable-key",
        Body = new UserData { UserId = "user_123456", Email = "user@example.com", Name = "John Doe", Country = "US" },
    });
    // TODO: Handle 'response' of type Variable
}
catch (ApiException<GetVariableByKeyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVariableByKeyRequest](src/DevCycle/Requests/BucketingApi/GetVariableByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Variable](src/DevCycle/Models/Variable.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[GetVariableByKeyError](src/DevCycle/Errors/GetVariableByKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, Variable&gt;&gt; GetVariables(GetVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BucketingApi.GetVariables(new GetVariablesRequest
    {
        Body = new UserData { UserId = "user_123456", Email = "user@example.com", Name = "John Doe", Country = "US" },
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, Variable>
}
catch (ApiException<GetVariablesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVariablesRequest](src/DevCycle/Requests/BucketingApi/GetVariablesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, [Variable](src/DevCycle/Models/Variable.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[GetVariablesError](src/DevCycle/Errors/GetVariablesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TrackResponse&gt; PostEvents(PostEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BucketingApi.PostEvents(new PostEventsRequest
    {
        Body = new UserDataAndEventsBody
        {
            Events = [
                new Event { Type = "purchase", Value = 99.99d },
                new Event { Type = "feature_click", Target = "new-dashboard-button" },
            ],
            User = new UserData { UserId = "user_123456", Email = "user@example.com" },
        },
    });
    // TODO: Handle 'response' of type V1TrackResponse
}
catch (ApiException<PostEventsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostEventsRequest](src/DevCycle/Requests/BucketingApi/PostEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TrackResponse](src/DevCycle/Models/V1TrackResponse.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[PostEventsError](src/DevCycle/Errors/PostEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomProperties

> Source: [CustomProperties](src/DevCycle/Api/CustomProperties.cs)

<details>
<summary><code>Task&lt;CustomProperty&gt; CustomPropertiesControllerCreate(CustomPropertiesControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Custom Property

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomProperties.CustomPropertiesControllerCreate(
        new CustomPropertiesControllerCreateRequest
        {
            Project = "some example string",
            Body = new CreateCustomPropertyDto
            {
                Name = "some example string",
                Key = "some example string",
                Type = TypeDevCycleManagementCustomPropertiesApi.String,
                PropertyKey = "some example string",
            },
        });
    // TODO: Handle 'response' of type CustomProperty
}
catch (ApiException<CustomPropertiesControllerCreateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CustomPropertiesControllerCreateRequest](src/DevCycle/Requests/CustomProperties/CustomPropertiesControllerCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomProperty](src/DevCycle/Models/CustomProperty.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[CustomPropertiesControllerCreateError](src/DevCycle/Errors/CustomPropertiesControllerCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CustomProperty&gt;&gt; CustomPropertiesControllerFindAll(CustomPropertiesControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomProperties.CustomPropertiesControllerFindAll(
        new CustomPropertiesControllerFindAllRequest { Project = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<CustomProperty>
}
catch (ApiException<CustomPropertiesControllerFindAllError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CustomPropertiesControllerFindAllRequest](src/DevCycle/Requests/CustomProperties/CustomPropertiesControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CustomProperty](src/DevCycle/Models/CustomProperty.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[CustomPropertiesControllerFindAllError](src/DevCycle/Errors/CustomPropertiesControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomProperty&gt; CustomPropertiesControllerFindOne(CustomPropertiesControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Custom Property by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomProperties.CustomPropertiesControllerFindOne(
        new CustomPropertiesControllerFindOneRequest { Key = "some example string", Project = "some example string" });
    // TODO: Handle 'response' of type CustomProperty
}
catch (ApiException<CustomPropertiesControllerFindOneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CustomPropertiesControllerFindOneRequest](src/DevCycle/Requests/CustomProperties/CustomPropertiesControllerFindOneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomProperty](src/DevCycle/Models/CustomProperty.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[CustomPropertiesControllerFindOneError](src/DevCycle/Errors/CustomPropertiesControllerFindOneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CustomPropertiesControllerRemove(CustomPropertiesControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Custom Property by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomProperties.CustomPropertiesControllerRemove(new CustomPropertiesControllerRemoveRequest
    {
        Key = "some example string",
        Project = "some example string",
    });
}
catch (ApiException<CustomPropertiesControllerRemoveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CustomPropertiesControllerRemoveRequest](src/DevCycle/Requests/CustomProperties/CustomPropertiesControllerRemoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[CustomPropertiesControllerRemoveError](src/DevCycle/Errors/CustomPropertiesControllerRemoveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomProperty&gt; CustomPropertiesControllerUpdate(CustomPropertiesControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Custom Property by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomProperties.CustomPropertiesControllerUpdate(
        new CustomPropertiesControllerUpdateRequest
        {
            Key = "some example string",
            Project = "some example string",
            Body = new UpdateCustomPropertyDto(),
        });
    // TODO: Handle 'response' of type CustomProperty
}
catch (ApiException<CustomPropertiesControllerUpdateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CustomPropertiesControllerUpdateRequest](src/DevCycle/Requests/CustomProperties/CustomPropertiesControllerUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomProperty](src/DevCycle/Models/CustomProperty.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[CustomPropertiesControllerUpdateError](src/DevCycle/Errors/CustomPropertiesControllerUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EdgeDb

> Source: [EdgeDb](src/DevCycle/Api/EdgeDb.cs)

<details>
<summary><code>Task&lt;EdgeDbApiResponse&gt; PatchV1EdgedbByUserId(PatchV1EdgedbByUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EdgeDb.PatchV1EdgedbByUserId(new PatchV1EdgedbByUserIdRequest
    {
        UserId = "some example string",
        Body = new UserDataEdgeDb { UserId = "some example string" },
    });
    // TODO: Handle 'response' of type EdgeDbApiResponse
}
catch (ApiException<PatchV1EdgedbByUserIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PatchV1EdgedbByUserIdRequest](src/DevCycle/Requests/EdgeDb/PatchV1EdgedbByUserIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EdgeDbApiResponse](src/DevCycle/Models/EdgeDbApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[PatchV1EdgedbByUserIdError](src/DevCycle/Errors/PatchV1EdgedbByUserIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](src/DevCycle/Api/Environments.cs)

<details>
<summary><code>Task&lt;EnvironmentModel&gt; EnvironmentsControllerCreate(EnvironmentsControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new environment for a project. The environment key must be unique within the project. Multiple environments can share a type.
Creating an environment will auto-generate a set of SDK Keys for the various types of SDKs.
When permissions are enabled for the organization, the token must have Publisher permissions for the environment to be created.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.EnvironmentsControllerCreate(new EnvironmentsControllerCreateRequest
    {
        Project = "some example string",
        Body = new CreateEnvironmentDto
        {
            Name = "some example string",
            Key = "some example string",
            Type = TypeDevCycleManagementEnvironmentsApi.Development,
        },
    });
    // TODO: Handle 'response' of type EnvironmentModel
}
catch (ApiException<EnvironmentsControllerCreateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnvironmentsControllerCreateRequest](src/DevCycle/Requests/Environments/EnvironmentsControllerCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentModel](src/DevCycle/Models/EnvironmentModel.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[EnvironmentsControllerCreateError](src/DevCycle/Errors/EnvironmentsControllerCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;EnvironmentModel&gt;&gt; EnvironmentsControllerFindAll(EnvironmentsControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all environments for a project. If a token does not have permission to view protected environments the environments will be filtered to only show non-protected environments SDK Keys for security.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.EnvironmentsControllerFindAll(new EnvironmentsControllerFindAllRequest
    {
        Project = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<EnvironmentModel>
}
catch (ApiException<EnvironmentsControllerFindAllError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnvironmentsControllerFindAllRequest](src/DevCycle/Requests/Environments/EnvironmentsControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[EnvironmentModel](src/DevCycle/Models/EnvironmentModel.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[EnvironmentsControllerFindAllError](src/DevCycle/Errors/EnvironmentsControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentModel&gt; EnvironmentsControllerFindOne(EnvironmentsControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the environment; if the token does not have permission to view protected environments, the environment will be filtered to only show non-protected SDK Keys for security.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.EnvironmentsControllerFindOne(new EnvironmentsControllerFindOneRequest
    {
        Key = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type EnvironmentModel
}
catch (ApiException<EnvironmentsControllerFindOneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnvironmentsControllerFindOneRequest](src/DevCycle/Requests/Environments/EnvironmentsControllerFindOneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentModel](src/DevCycle/Models/EnvironmentModel.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[EnvironmentsControllerFindOneError](src/DevCycle/Errors/EnvironmentsControllerFindOneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task EnvironmentsControllerRemove(EnvironmentsControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Environment by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Environments.EnvironmentsControllerRemove(new EnvironmentsControllerRemoveRequest
    {
        Key = "some example string",
        Project = "some example string",
    });
}
catch (ApiException<EnvironmentsControllerRemoveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnvironmentsControllerRemoveRequest](src/DevCycle/Requests/Environments/EnvironmentsControllerRemoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[EnvironmentsControllerRemoveError](src/DevCycle/Errors/EnvironmentsControllerRemoveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentModel&gt; EnvironmentsControllerUpdate(EnvironmentsControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an environment by ID or key. The environment key (if edited) must be unique within the project. If permissions are enabled, changing a protected environment type requires Publisher permissions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.EnvironmentsControllerUpdate(new EnvironmentsControllerUpdateRequest
    {
        Key = "some example string",
        Project = "some example string",
        Body = new UpdateEnvironmentDto(),
    });
    // TODO: Handle 'response' of type EnvironmentModel
}
catch (ApiException<EnvironmentsControllerUpdateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnvironmentsControllerUpdateRequest](src/DevCycle/Requests/Environments/EnvironmentsControllerUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentModel](src/DevCycle/Models/EnvironmentModel.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[EnvironmentsControllerUpdateError](src/DevCycle/Errors/EnvironmentsControllerUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentModel&gt; SdkKeysControllerGenerate(SdkKeysControllerGenerateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate new SDK keys for an environment, for any or all of the SDK types. This is the expected and recommended way to rotate SDK keys. Adding a new SDK key will not invalidate existing SDK keys.
Generating new keys is restricted for protected environments to those with Publisher permissions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.SdkKeysControllerGenerate(new SdkKeysControllerGenerateRequest
    {
        Environment = "some example string",
        Project = "some example string",
        Body = new GenerateSdkTokensDto(),
    });
    // TODO: Handle 'response' of type EnvironmentModel
}
catch (ApiException<SdkKeysControllerGenerateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SdkKeysControllerGenerateRequest](src/DevCycle/Requests/Environments/SdkKeysControllerGenerateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentModel](src/DevCycle/Models/EnvironmentModel.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[SdkKeysControllerGenerateError](src/DevCycle/Errors/SdkKeysControllerGenerateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SdkKeysControllerInvalidate(SdkKeysControllerInvalidateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This will invalidate all configs associated with a given key. This is an instantaneous change and all SDKs using this key will stop working immediately. This is the expected and recommended way to rotate SDK keys.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Environments.SdkKeysControllerInvalidate(new SdkKeysControllerInvalidateRequest
    {
        Key = "some example string",
        Environment = "some example string",
        Project = "some example string",
    });
}
catch (ApiException<SdkKeysControllerInvalidateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SdkKeysControllerInvalidateRequest](src/DevCycle/Requests/Environments/SdkKeysControllerInvalidateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[SdkKeysControllerInvalidateError](src/DevCycle/Errors/SdkKeysControllerInvalidateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FeatureChangeRequests

> Source: [FeatureChangeRequests](src/DevCycle/Api/FeatureChangeRequests.cs)

<details>
<summary><code>Task FeatureChangeRequestsControllerApplyFeatureChangeRequest(FeatureChangeRequestsControllerApplyFeatureChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature Change Request by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequest(
        new FeatureChangeRequestsControllerApplyFeatureChangeRequest
        {
            Id = "some example string",
            Feature = "some example string",
            Project = "some example string",
            Body = new ApplyFeatureChangeRequestDto { Description = "some example string" },
        });
}
catch (ApiException<FeatureChangeRequestsControllerApplyFeatureChangeRequestError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeatureChangeRequestsControllerApplyFeatureChangeRequest](src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerApplyFeatureChangeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeatureChangeRequestsControllerApplyFeatureChangeRequestError](src/DevCycle/Errors/FeatureChangeRequestsControllerApplyFeatureChangeRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task FeatureChangeRequestsControllerCancelFeatureChangeRequest(FeatureChangeRequestsControllerCancelFeatureChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a Feature Change Request by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequest(
        new FeatureChangeRequestsControllerCancelFeatureChangeRequest
        {
            Id = "some example string",
            Feature = "some example string",
            Project = "some example string",
        });
}
catch (ApiException<FeatureChangeRequestsControllerCancelFeatureChangeRequestError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeatureChangeRequestsControllerCancelFeatureChangeRequest](src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerCancelFeatureChangeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeatureChangeRequestsControllerCancelFeatureChangeRequestError](src/DevCycle/Errors/FeatureChangeRequestsControllerCancelFeatureChangeRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureChangeRequest&gt; FeatureChangeRequestsControllerCreateChangeRequest(FeatureChangeRequestsControllerCreateChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Feature Change Request

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequest(
        new FeatureChangeRequestsControllerCreateChangeRequest
        {
            Feature = "some example string",
            Project = "some example string",
            Body = new CreateFeatureChangeRequestDto { Path = "some example string", Body = body },
        });
    // TODO: Handle 'response' of type FeatureChangeRequest
}
catch (ApiException<FeatureChangeRequestsControllerCreateChangeRequestError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeatureChangeRequestsControllerCreateChangeRequest](src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerCreateChangeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureChangeRequest](src/DevCycle/Models/FeatureChangeRequest.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeatureChangeRequestsControllerCreateChangeRequestError](src/DevCycle/Errors/FeatureChangeRequestsControllerCreateChangeRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureChangeRequest&gt; FeatureChangeRequestsControllerGetFeatureChangeRequest(FeatureChangeRequestsControllerGetFeatureChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Feature Change Request by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequest(
        new FeatureChangeRequestsControllerGetFeatureChangeRequest
        {
            Id = "some example string",
            Feature = "some example string",
            Project = "some example string",
        });
    // TODO: Handle 'response' of type FeatureChangeRequest
}
catch (ApiException<FeatureChangeRequestsControllerGetFeatureChangeRequestError> ex)
{
    if (ex.Error.TryGetNotFoundErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type NotFoundErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeatureChangeRequestsControllerGetFeatureChangeRequest](src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerGetFeatureChangeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureChangeRequest](src/DevCycle/Models/FeatureChangeRequest.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeatureChangeRequestsControllerGetFeatureChangeRequestError](src/DevCycle/Errors/FeatureChangeRequestsControllerGetFeatureChangeRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureChangeRequest&gt; FeatureChangeRequestsControllerGetLatestFeatureChangeRequest(FeatureChangeRequestsControllerGetLatestFeatureChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the latest Feature Change Request for a Feature that is NOT in the 'draft' state

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequest(
        new FeatureChangeRequestsControllerGetLatestFeatureChangeRequest
        {
            Feature = "some example string",
            Project = "some example string",
        });
    // TODO: Handle 'response' of type FeatureChangeRequest
}
catch (ApiException<FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError> ex)
{
    if (ex.Error.TryGetNotFoundErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type NotFoundErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeatureChangeRequestsControllerGetLatestFeatureChangeRequest](src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerGetLatestFeatureChangeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureChangeRequest](src/DevCycle/Models/FeatureChangeRequest.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError](src/DevCycle/Errors/FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;FeatureChangeRequest&gt;&gt; FeatureChangeRequestsControllerGetPendingFeatureChangeRequests(FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all pending Feature Change Requests for a Feature

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequests(
        new FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest
        {
            Feature = "some example string",
            Project = "some example string",
        });
    // TODO: Handle 'response' of type IReadOnlyList<FeatureChangeRequest>
}
catch (ApiException<FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError> ex)
{
    if (ex.Error.TryGetNotFoundErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type NotFoundErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest](src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[FeatureChangeRequest](src/DevCycle/Models/FeatureChangeRequest.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError](src/DevCycle/Errors/FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task FeatureChangeRequestsControllerReviewFeatureChangeRequest(FeatureChangeRequestsControllerReviewFeatureChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature Change Request by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequest(
        new FeatureChangeRequestsControllerReviewFeatureChangeRequest
        {
            Id = "some example string",
            Feature = "some example string",
            Project = "some example string",
            Body = new ReviewFeatureChangeRequestDto { Action = ActionEnum.Approved, Comment = "some example string" },
        });
}
catch (ApiException<FeatureChangeRequestsControllerReviewFeatureChangeRequestError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeatureChangeRequestsControllerReviewFeatureChangeRequest](src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerReviewFeatureChangeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeatureChangeRequestsControllerReviewFeatureChangeRequestError](src/DevCycle/Errors/FeatureChangeRequestsControllerReviewFeatureChangeRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureChangeRequest&gt; FeatureChangeRequestsControllerSubmitChangeRequestForReview(FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a Feature Change Request for Review

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReview(
        new FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest
        {
            Id = "some example string",
            Feature = "some example string",
            Project = "some example string",
            Body = new SubmitFeatureChangeRequestDto
            {
                Description = "some example string",
                Reviewers = ["some example string"],
            },
        });
    // TODO: Handle 'response' of type FeatureChangeRequest
}
catch (ApiException<FeatureChangeRequestsControllerSubmitChangeRequestForReviewError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest](src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureChangeRequest](src/DevCycle/Models/FeatureChangeRequest.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeatureChangeRequestsControllerSubmitChangeRequestForReviewError](src/DevCycle/Errors/FeatureChangeRequestsControllerSubmitChangeRequestForReviewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FeatureConfigurations

> Source: [FeatureConfigurations](src/DevCycle/Api/FeatureConfigurations.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;FeatureConfig&gt;&gt; FeatureConfigsControllerFindAll(FeatureConfigsControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Feature configurations for all environments or by environment key or ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeatureConfigurations.FeatureConfigsControllerFindAll(
        new FeatureConfigsControllerFindAllRequest
        {
            Feature = "some example string",
            Project = "some example string",
        });
    // TODO: Handle 'response' of type IReadOnlyList<FeatureConfig>
}
catch (ApiException<FeatureConfigsControllerFindAllError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeatureConfigsControllerFindAllRequest](src/DevCycle/Requests/FeatureConfigurations/FeatureConfigsControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[FeatureConfig](src/DevCycle/Models/FeatureConfig.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeatureConfigsControllerFindAllError](src/DevCycle/Errors/FeatureConfigsControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureConfig&gt; FeatureConfigsControllerUpdate(FeatureConfigsControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature configuration by environment key or ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeatureConfigurations.FeatureConfigsControllerUpdate(
        new FeatureConfigsControllerUpdateRequest
        {
            Feature = "some example string",
            Project = "some example string",
            Environment = "some example string",
            Body = new UpdateFeatureConfigDto(),
        });
    // TODO: Handle 'response' of type FeatureConfig
}
catch (ApiException<FeatureConfigsControllerUpdateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeatureConfigsControllerUpdateRequest](src/DevCycle/Requests/FeatureConfigurations/FeatureConfigsControllerUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureConfig](src/DevCycle/Models/FeatureConfig.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeatureConfigsControllerUpdateError](src/DevCycle/Errors/FeatureConfigsControllerUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FeatureOptIn

> Source: [FeatureOptIn](src/DevCycle/Api/FeatureOptIn.cs)

<details>
<summary><code>Task&lt;OptInConfigResponse&gt; GetV1OptInConfig(GetV1OptInConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a project config to display features available for Opt-in

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeatureOptIn.GetV1OptInConfig(new GetV1OptInConfigRequest
    {
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type OptInConfigResponse
}
catch (ApiException<GetV1OptInConfigError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetV1OptInConfigRequest](src/DevCycle/Requests/FeatureOptIn/GetV1OptInConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OptInConfigResponse](src/DevCycle/Models/OptInConfigResponse.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[GetV1OptInConfigError](src/DevCycle/Errors/GetV1OptInConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1OptInsResponse&gt; PutV1OptInsByUserId(PutV1OptInsByUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeatureOptIn.PutV1OptInsByUserId(new PutV1OptInsByUserIdRequest
    {
        UserId = "some example string",
        Body = new Dictionary<string, bool>
        {
            ["614ef6aa473928459060721a"] = true,
            ["614ef6aa473928459060721b"] = false,
        },
    });
    // TODO: Handle 'response' of type V1OptInsResponse
}
catch (ApiException<PutV1OptInsByUserIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutV1OptInsByUserIdRequest](src/DevCycle/Requests/FeatureOptIn/PutV1OptInsByUserIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1OptInsResponse](src/DevCycle/Models/V1OptInsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[PutV1OptInsByUserIdError](src/DevCycle/Errors/PutV1OptInsByUserIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FeaturesV2

> Source: [FeaturesV2](src/DevCycle/Api/FeaturesV2.cs)

<details>
<summary><code>Task&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api&gt; FeaturesControllerCreate(FeaturesControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Feature

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeaturesV2.FeaturesControllerCreate(new FeaturesControllerCreateRequest
    {
        Project = "some example string",
        Body = new CreateFeatureDto
        {
            Key = "some example string",
            Name = "some example string",
            Configurations = new Dictionary<string, UpdateFeatureConfigDto> { ["key"] = new UpdateFeatureConfigDto() },
        },
    });
    // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
}
catch (ApiException<FeaturesControllerCreateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerCreateRequest](src/DevCycle/Requests/FeaturesV2/FeaturesControllerCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerCreateError](src/DevCycle/Errors/FeaturesControllerCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api&gt;&gt; FeaturesControllerFindAll(FeaturesControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeaturesV2.FeaturesControllerFindAll(new FeaturesControllerFindAllRequest
    {
        Project = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<FeatureDevCycleManagementDeprecatedFeaturesV1Api>
}
catch (ApiException<FeaturesControllerFindAllError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerFindAllRequest](src/DevCycle/Requests/FeaturesV2/FeaturesControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerFindAllError](src/DevCycle/Errors/FeaturesControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api&gt; FeaturesControllerFindOne(FeaturesControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Feature by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeaturesV2.FeaturesControllerFindOne(new FeaturesControllerFindOneRequest
    {
        Feature = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
}
catch (ApiException<FeaturesControllerFindOneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerFindOneRequest](src/DevCycle/Requests/FeaturesV2/FeaturesControllerFindOneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerFindOneError](src/DevCycle/Errors/FeaturesControllerFindOneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StaticConfiguration&gt; FeaturesControllerFindStaticConfiguration(FeaturesControllerFindStaticConfigurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a completed Feature's static configuration

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeaturesV2.FeaturesControllerFindStaticConfiguration(
        new FeaturesControllerFindStaticConfigurationRequest
        {
            Feature = "some example string",
            Project = "some example string",
        });
    // TODO: Handle 'response' of type StaticConfiguration
}
catch (ApiException<FeaturesControllerFindStaticConfigurationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerFindStaticConfigurationRequest](src/DevCycle/Requests/FeaturesV2/FeaturesControllerFindStaticConfigurationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StaticConfiguration](src/DevCycle/Models/StaticConfiguration.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerFindStaticConfigurationError](src/DevCycle/Errors/FeaturesControllerFindStaticConfigurationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureStalenessEntity&gt; FeaturesControllerGetStaleness(FeaturesControllerGetStalenessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeaturesV2.FeaturesControllerGetStaleness(new FeaturesControllerGetStalenessRequest
    {
        Feature = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type FeatureStalenessEntity
}
catch (ApiException<FeaturesControllerGetStalenessError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerGetStalenessRequest](src/DevCycle/Requests/FeaturesV2/FeaturesControllerGetStalenessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureStalenessEntity](src/DevCycle/Models/FeatureStalenessEntity.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerGetStalenessError](src/DevCycle/Errors/FeaturesControllerGetStalenessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api&gt; FeaturesControllerUpdate(FeaturesControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeaturesV2.FeaturesControllerUpdate(new FeaturesControllerUpdateRequest
    {
        Feature = "some example string",
        Project = "some example string",
        Body = new UpdateFeatureDto(),
    });
    // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
}
catch (ApiException<FeaturesControllerUpdateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerUpdateRequest](src/DevCycle/Requests/FeaturesV2/FeaturesControllerUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerUpdateError](src/DevCycle/Errors/FeaturesControllerUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureStalenessEntity&gt; FeaturesControllerUpdateStaleness(FeaturesControllerUpdateStalenessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeaturesV2.FeaturesControllerUpdateStaleness(
        new FeaturesControllerUpdateStalenessRequest
        {
            Feature = "some example string",
            Project = "some example string",
            Body = new UpdateStalenessDto(),
        });
    // TODO: Handle 'response' of type FeatureStalenessEntity
}
catch (ApiException<FeaturesControllerUpdateStalenessError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerUpdateStalenessRequest](src/DevCycle/Requests/FeaturesV2/FeaturesControllerUpdateStalenessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureStalenessEntity](src/DevCycle/Models/FeatureStalenessEntity.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerUpdateStalenessError](src/DevCycle/Errors/FeaturesControllerUpdateStalenessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StaticConfiguration&gt; FeaturesControllerUpdateStaticConfiguration(FeaturesControllerUpdateStaticConfigurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a completed Feature's static configuration

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeaturesV2.FeaturesControllerUpdateStaticConfiguration(
        new FeaturesControllerUpdateStaticConfigurationRequest
        {
            Feature = "some example string",
            Project = "some example string",
            Body = new UpdateStaticConfigurationDto(),
        });
    // TODO: Handle 'response' of type StaticConfiguration
}
catch (ApiException<FeaturesControllerUpdateStaticConfigurationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerUpdateStaticConfigurationRequest](src/DevCycle/Requests/FeaturesV2/FeaturesControllerUpdateStaticConfigurationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StaticConfiguration](src/DevCycle/Models/StaticConfiguration.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerUpdateStaticConfigurationError](src/DevCycle/Errors/FeaturesControllerUpdateStaticConfigurationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api&gt; FeaturesControllerUpdateStatus(FeaturesControllerUpdateStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeaturesV2.FeaturesControllerUpdateStatus(new FeaturesControllerUpdateStatusRequest
    {
        Feature = "some example string",
        Project = "some example string",
        Body = new UpdateFeatureStatusDto(),
    });
    // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
}
catch (ApiException<FeaturesControllerUpdateStatusError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerUpdateStatusRequest](src/DevCycle/Requests/FeaturesV2/FeaturesControllerUpdateStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerUpdateStatusError](src/DevCycle/Errors/FeaturesControllerUpdateStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureSummary&gt; FeaturesControllerUpdateSummary(FeaturesControllerUpdateSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeaturesV2.FeaturesControllerUpdateSummary(new FeaturesControllerUpdateSummaryRequest
    {
        Feature = "some example string",
        Project = "some example string",
        Body = new UpdateFeatureSummaryDto(),
    });
    // TODO: Handle 'response' of type FeatureSummary
}
catch (ApiException<FeaturesControllerUpdateSummaryError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerUpdateSummaryRequest](src/DevCycle/Requests/FeaturesV2/FeaturesControllerUpdateSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureSummary](src/DevCycle/Models/FeatureSummary.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerUpdateSummaryError](src/DevCycle/Errors/FeaturesControllerUpdateSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IntegrationsDynatrace

> Source: [IntegrationsDynatrace](src/DevCycle/Api/IntegrationsDynatrace.cs)

<details>
<summary><code>Task DynatraceIntegrationControllerCreateIntegration(DynatraceIntegrationControllerCreateIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegration(
        new DynatraceIntegrationControllerCreateIntegrationRequest
        {
            Body = new CreateDynatraceIntegrationDto
            {
                DynatraceEnvironmentId = "some example string",
                AccessToken = "some example string",
                EnvironmentUrl = "some example string",
            },
        });
}
catch (ApiException<DynatraceIntegrationControllerCreateIntegrationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DynatraceIntegrationControllerCreateIntegrationRequest](src/DevCycle/Requests/IntegrationsDynatrace/DynatraceIntegrationControllerCreateIntegrationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[DynatraceIntegrationControllerCreateIntegrationError](src/DevCycle/Errors/DynatraceIntegrationControllerCreateIntegrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DynatraceIntegrationControllerDeleteEnvironment(DynatraceIntegrationControllerDeleteEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironment(
        new DynatraceIntegrationControllerDeleteEnvironmentRequest { DynatraceEnvironmentId = "some example string" });
}
catch (ApiException<DynatraceIntegrationControllerDeleteEnvironmentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DynatraceIntegrationControllerDeleteEnvironmentRequest](src/DevCycle/Requests/IntegrationsDynatrace/DynatraceIntegrationControllerDeleteEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[DynatraceIntegrationControllerDeleteEnvironmentError](src/DevCycle/Errors/DynatraceIntegrationControllerDeleteEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DynatraceIntegration&gt; DynatraceIntegrationControllerGetIntegrations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IntegrationsDynatrace.DynatraceIntegrationControllerGetIntegrations();
    // TODO: Handle 'response' of type DynatraceIntegration
}
catch (ApiException<DynatraceIntegrationControllerGetIntegrationsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DynatraceIntegration](src/DevCycle/Models/DynatraceIntegration.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[DynatraceIntegrationControllerGetIntegrationsError](src/DevCycle/Errors/DynatraceIntegrationControllerGetIntegrationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IntegrationsJira

> Source: [IntegrationsJira](src/DevCycle/Api/IntegrationsJira.cs)

<details>
<summary><code>Task JiraIntegrationControllerRemove(JiraIntegrationControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED - Not recommended to be used. Use /integrations/jira/organization/:token or /integrations/jira/project/:token instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IntegrationsJira.JiraIntegrationControllerRemove(new JiraIntegrationControllerRemoveRequest
    {
        Token = "some example string",
    });
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JiraIntegrationControllerRemoveRequest](src/DevCycle/Requests/IntegrationsJira/JiraIntegrationControllerRemoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[RawError](src/DevCycle/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task JiraIntegrationControllerRemoveOrganizationConnection(JiraIntegrationControllerRemoveOrganizationConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the Jira integration configuration for an organization. This will remove the integration for an organization wide connection, but not project connections.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnection(
        new JiraIntegrationControllerRemoveOrganizationConnectionRequest { Token = "some example string" });
}
catch (ApiException<JiraIntegrationControllerRemoveOrganizationConnectionError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JiraIntegrationControllerRemoveOrganizationConnectionRequest](src/DevCycle/Requests/IntegrationsJira/JiraIntegrationControllerRemoveOrganizationConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[JiraIntegrationControllerRemoveOrganizationConnectionError](src/DevCycle/Errors/JiraIntegrationControllerRemoveOrganizationConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task JiraIntegrationControllerRemoveProjectConnection(JiraIntegrationControllerRemoveProjectConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a specific project

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IntegrationsJira.JiraIntegrationControllerRemoveProjectConnection(
        new JiraIntegrationControllerRemoveProjectConnectionRequest { Token = "some example string" });
}
catch (ApiException<JiraIntegrationControllerRemoveProjectConnectionError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JiraIntegrationControllerRemoveProjectConnectionRequest](src/DevCycle/Requests/IntegrationsJira/JiraIntegrationControllerRemoveProjectConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[JiraIntegrationControllerRemoveProjectConnectionError](src/DevCycle/Errors/JiraIntegrationControllerRemoveProjectConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MetricAssociations

> Source: [MetricAssociations](src/DevCycle/Api/MetricAssociations.cs)

<details>
<summary><code>Task&lt;MetricAssociation&gt; MetricAssociationsControllerCreate(MetricAssociationsControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetricAssociations.MetricAssociationsControllerCreate(
        new MetricAssociationsControllerCreateRequest
        {
            Project = "some example string",
            Body = new CreateMetricAssociationDto { Metric = "some example string", Feature = "some example string" },
        });
    // TODO: Handle 'response' of type MetricAssociation
}
catch (ApiException<MetricAssociationsControllerCreateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MetricAssociationsControllerCreateRequest](src/DevCycle/Requests/MetricAssociations/MetricAssociationsControllerCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetricAssociation](src/DevCycle/Models/MetricAssociation.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[MetricAssociationsControllerCreateError](src/DevCycle/Errors/MetricAssociationsControllerCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;MetricAssociation&gt;&gt; MetricAssociationsControllerFindAll(MetricAssociationsControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetricAssociations.MetricAssociationsControllerFindAll(
        new MetricAssociationsControllerFindAllRequest { Project = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<MetricAssociation>
}
catch (ApiException<MetricAssociationsControllerFindAllError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MetricAssociationsControllerFindAllRequest](src/DevCycle/Requests/MetricAssociations/MetricAssociationsControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[MetricAssociation](src/DevCycle/Models/MetricAssociation.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[MetricAssociationsControllerFindAllError](src/DevCycle/Errors/MetricAssociationsControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task MetricAssociationsControllerRemove(MetricAssociationsControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MetricAssociations.MetricAssociationsControllerRemove(new MetricAssociationsControllerRemoveRequest
    {
        Project = "some example string",
        Metric = "some example string",
        Feature = "some example string",
    });
}
catch (ApiException<MetricAssociationsControllerRemoveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MetricAssociationsControllerRemoveRequest](src/DevCycle/Requests/MetricAssociations/MetricAssociationsControllerRemoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[MetricAssociationsControllerRemoveError](src/DevCycle/Errors/MetricAssociationsControllerRemoveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Metrics

> Source: [Metrics](src/DevCycle/Api/Metrics.cs)

<details>
<summary><code>Task&lt;MetricDevCycleManagementMetricsApi&gt; MetricsControllerCreate(MetricsControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Metric

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Metrics.MetricsControllerCreate(new MetricsControllerCreateRequest
    {
        Project = "some example string",
        Body = new CreateMetricDto
        {
            Name = "some example string",
            Key = "some example string",
            Event = "some example string",
            Dimension = Dimension.CountPerUniqueUser,
            Optimize = Optimize.Increase,
        },
    });
    // TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi
}
catch (ApiException<MetricsControllerCreateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MetricsControllerCreateRequest](src/DevCycle/Requests/Metrics/MetricsControllerCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetricDevCycleManagementMetricsApi](src/DevCycle/Models/MetricDevCycleManagementMetricsApi.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[MetricsControllerCreateError](src/DevCycle/Errors/MetricsControllerCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MetricResult&gt; MetricsControllerFetchResults(MetricsControllerFetchResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Metrics.MetricsControllerFetchResults(new MetricsControllerFetchResultsRequest
    {
        Key = "some example string",
        Project = "some example string",
        Feature = "some example string",
        StartDate = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
        EndDate = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
    });
    // TODO: Handle 'response' of type MetricResult
}
catch (ApiException<MetricsControllerFetchResultsError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MetricsControllerFetchResultsRequest](src/DevCycle/Requests/Metrics/MetricsControllerFetchResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetricResult](src/DevCycle/Models/MetricResult.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[MetricsControllerFetchResultsError](src/DevCycle/Errors/MetricsControllerFetchResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;MetricDevCycleManagementMetricsApi&gt;&gt; MetricsControllerFindAll(MetricsControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Metrics.MetricsControllerFindAll(new MetricsControllerFindAllRequest
    {
        Project = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<MetricDevCycleManagementMetricsApi>
}
catch (ApiException<MetricsControllerFindAllError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MetricsControllerFindAllRequest](src/DevCycle/Requests/Metrics/MetricsControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[MetricDevCycleManagementMetricsApi](src/DevCycle/Models/MetricDevCycleManagementMetricsApi.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[MetricsControllerFindAllError](src/DevCycle/Errors/MetricsControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MetricDevCycleManagementMetricsApi&gt; MetricsControllerFindOne(MetricsControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Metrics.MetricsControllerFindOne(new MetricsControllerFindOneRequest
    {
        Key = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi
}
catch (ApiException<MetricsControllerFindOneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MetricsControllerFindOneRequest](src/DevCycle/Requests/Metrics/MetricsControllerFindOneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetricDevCycleManagementMetricsApi](src/DevCycle/Models/MetricDevCycleManagementMetricsApi.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[MetricsControllerFindOneError](src/DevCycle/Errors/MetricsControllerFindOneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task MetricsControllerRemove(MetricsControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Metrics.MetricsControllerRemove(new MetricsControllerRemoveRequest
    {
        Key = "some example string",
        Project = "some example string",
    });
}
catch (ApiException<MetricsControllerRemoveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MetricsControllerRemoveRequest](src/DevCycle/Requests/Metrics/MetricsControllerRemoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[MetricsControllerRemoveError](src/DevCycle/Errors/MetricsControllerRemoveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MetricDevCycleManagementMetricsApi&gt; MetricsControllerUpdate(MetricsControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Metrics.MetricsControllerUpdate(new MetricsControllerUpdateRequest
    {
        Key = "some example string",
        Project = "some example string",
        Body = new UpdateMetricDto(),
    });
    // TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi
}
catch (ApiException<MetricsControllerUpdateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MetricsControllerUpdateRequest](src/DevCycle/Requests/Metrics/MetricsControllerUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetricDevCycleManagementMetricsApi](src/DevCycle/Models/MetricDevCycleManagementMetricsApi.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[MetricsControllerUpdateError](src/DevCycle/Errors/MetricsControllerUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MetricResult&gt; TestMetricResultsControllerFetch(TestMetricResultsControllerFetchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch metric results with the given parameters

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Metrics.TestMetricResultsControllerFetch(new TestMetricResultsControllerFetchRequest
    {
        Project = "some example string",
        Feature = "some example string",
        Control = "some example string",
        Optimize = Optimize3.Increase,
        Event = "some example string",
        Dimension = Dimension3.CountPerUniqueUser,
        StartDate = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
        EndDate = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
    });
    // TODO: Handle 'response' of type MetricResult
}
catch (ApiException<TestMetricResultsControllerFetchError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TestMetricResultsControllerFetchRequest](src/DevCycle/Requests/Metrics/TestMetricResultsControllerFetchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetricResult](src/DevCycle/Models/MetricResult.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[TestMetricResultsControllerFetchError](src/DevCycle/Errors/TestMetricResultsControllerFetchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OpenFeatureRemoteEvaluationApiOfrep

> Source: [OpenFeatureRemoteEvaluationApiOfrep](src/DevCycle/Api/OpenFeatureRemoteEvaluationApiOfrep.cs)

<details>
<summary><code>Task&lt;OfrepBulkEvaluationSuccess&gt; PostOfrepV1EvaluateFlags(PostOfrepV1EvaluateFlagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return all flag values for a user context.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlags(
        new PostOfrepV1EvaluateFlagsRequest());
    // TODO: Handle 'response' of type OfrepBulkEvaluationSuccess
}
catch (ApiException<PostOfrepV1EvaluateFlagsError> ex)
{
    if (ex.Error.TryGetOfrepBulkEvaluationFailure(out var error))
    {
        // TODO: Handle 'error' of type OfrepBulkEvaluationFailure
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostOfrepV1EvaluateFlagsRequest](src/DevCycle/Requests/OpenFeatureRemoteEvaluationApiOfrep/PostOfrepV1EvaluateFlagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OfrepBulkEvaluationSuccess](src/DevCycle/Models/OfrepBulkEvaluationSuccess.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[PostOfrepV1EvaluateFlagsError](src/DevCycle/Errors/PostOfrepV1EvaluateFlagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OfrepEvaluationSuccess&gt; PostOfrepV1EvaluateFlagsByKey(PostOfrepV1EvaluateFlagsByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a single flag for a user context

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKey(
        new PostOfrepV1EvaluateFlagsByKeyRequest { Key = "some example string" });
    // TODO: Handle 'response' of type OfrepEvaluationSuccess
}
catch (ApiException<PostOfrepV1EvaluateFlagsByKeyError> ex)
{
    if (ex.Error.TryGetOfrepEvaluationFailure(out var error))
    {
        // TODO: Handle 'error' of type OfrepEvaluationFailure
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostOfrepV1EvaluateFlagsByKeyRequest](src/DevCycle/Requests/OpenFeatureRemoteEvaluationApiOfrep/PostOfrepV1EvaluateFlagsByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OfrepEvaluationSuccess](src/DevCycle/Models/OfrepEvaluationSuccess.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[PostOfrepV1EvaluateFlagsByKeyError](src/DevCycle/Errors/PostOfrepV1EvaluateFlagsByKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Overrides

> Source: [Overrides](src/DevCycle/Api/Overrides.cs)

<details>
<summary><code>Task OverridesControllerDeleteOverridesForFeature(OverridesControllerDeleteOverridesForFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Overrides.OverridesControllerDeleteOverridesForFeature(
        new OverridesControllerDeleteOverridesForFeatureRequest
        {
            Feature = "some example string",
            Project = "some example string",
            Environment = "some example string",
        });
}
catch (ApiException<OverridesControllerDeleteOverridesForFeatureError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[OverridesControllerDeleteOverridesForFeatureRequest](src/DevCycle/Requests/Overrides/OverridesControllerDeleteOverridesForFeatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[OverridesControllerDeleteOverridesForFeatureError](src/DevCycle/Errors/OverridesControllerDeleteOverridesForFeatureError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task OverridesControllerDeleteOverridesForProject(OverridesControllerDeleteOverridesForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Overrides.OverridesControllerDeleteOverridesForProject(
        new OverridesControllerDeleteOverridesForProjectRequest { Project = "some example string" });
}
catch (ApiException<OverridesControllerDeleteOverridesForProjectError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[OverridesControllerDeleteOverridesForProjectRequest](src/DevCycle/Requests/Overrides/OverridesControllerDeleteOverridesForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[OverridesControllerDeleteOverridesForProjectError](src/DevCycle/Errors/OverridesControllerDeleteOverridesForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OverrideResponse&gt; OverridesControllerFindOne(OverridesControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Overrides.OverridesControllerFindOne(new OverridesControllerFindOneRequest
    {
        Feature = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type OverrideResponse
}
catch (ApiException<OverridesControllerFindOneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[OverridesControllerFindOneRequest](src/DevCycle/Requests/Overrides/OverridesControllerFindOneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OverrideResponse](src/DevCycle/Models/OverrideResponse.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[OverridesControllerFindOneError](src/DevCycle/Errors/OverridesControllerFindOneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureOverrides&gt; OverridesControllerFindOverridesForFeature(OverridesControllerFindOverridesForFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Overrides.OverridesControllerFindOverridesForFeature(
        new OverridesControllerFindOverridesForFeatureRequest
        {
            Feature = "some example string",
            Project = "some example string",
        });
    // TODO: Handle 'response' of type FeatureOverrides
}
catch (ApiException<OverridesControllerFindOverridesForFeatureError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[OverridesControllerFindOverridesForFeatureRequest](src/DevCycle/Requests/Overrides/OverridesControllerFindOverridesForFeatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureOverrides](src/DevCycle/Models/FeatureOverrides.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[OverridesControllerFindOverridesForFeatureError](src/DevCycle/Errors/OverridesControllerFindOverridesForFeatureError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;UserOverride&gt;&gt; OverridesControllerFindOverridesForProject(OverridesControllerFindOverridesForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Overrides.OverridesControllerFindOverridesForProject(
        new OverridesControllerFindOverridesForProjectRequest { Project = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<UserOverride>
}
catch (ApiException<OverridesControllerFindOverridesForProjectError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[OverridesControllerFindOverridesForProjectRequest](src/DevCycle/Requests/Overrides/OverridesControllerFindOverridesForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[UserOverride](src/DevCycle/Models/UserOverride.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[OverridesControllerFindOverridesForProjectError](src/DevCycle/Errors/OverridesControllerFindOverridesForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Override&gt; OverridesControllerUpdateFeatureOverride(OverridesControllerUpdateFeatureOverrideRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Overrides.OverridesControllerUpdateFeatureOverride(
        new OverridesControllerUpdateFeatureOverrideRequest
        {
            Feature = "some example string",
            Project = "some example string",
            Body = new UpdateOverrideDto { Environment = "some example string", Variation = "some example string" },
        });
    // TODO: Handle 'response' of type Override
}
catch (ApiException<OverridesControllerUpdateFeatureOverrideError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[OverridesControllerUpdateFeatureOverrideRequest](src/DevCycle/Requests/Overrides/OverridesControllerUpdateFeatureOverrideRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Override](src/DevCycle/Models/Override.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[OverridesControllerUpdateFeatureOverrideError](src/DevCycle/Errors/OverridesControllerUpdateFeatureOverrideError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectChangeRequests

> Source: [ProjectChangeRequests](src/DevCycle/Api/ProjectChangeRequests.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;FeatureChangeRequestSummary&gt;&gt; ProjectChangeRequestsControllerGetFeatureChangeRequests(ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequests(
        new ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest { Project = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<FeatureChangeRequestSummary>
}
catch (ApiException<ProjectChangeRequestsControllerGetFeatureChangeRequestsError> ex)
{
    if (ex.Error.TryGetNotFoundErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type NotFoundErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest](src/DevCycle/Requests/ProjectChangeRequests/ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[FeatureChangeRequestSummary](src/DevCycle/Models/FeatureChangeRequestSummary.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[ProjectChangeRequestsControllerGetFeatureChangeRequestsError](src/DevCycle/Errors/ProjectChangeRequestsControllerGetFeatureChangeRequestsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/DevCycle/Api/Projects.cs)

<details>
<summary><code>Task&lt;Project&gt; ProjectsControllerCreate(ProjectsControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new project within the authed organization.
The project key must be unique within the organization.
If this is called in an Organization that has permissions controlled via an external IdP (https://docs.devcycle.com/platform/security-and-guardrails/permissions#full-role-based-access-control-project-level-roles--enterprise-only) - then no users will have permission to access this project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ProjectsControllerCreate(new ProjectsControllerCreateRequest
    {
        Body = new CreateProjectDto { Name = "some example string", Key = "some example string" },
    });
    // TODO: Handle 'response' of type Project
}
catch (ApiException<ProjectsControllerCreateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProjectsControllerCreateRequest](src/DevCycle/Requests/Projects/ProjectsControllerCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/DevCycle/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[ProjectsControllerCreateError](src/DevCycle/Errors/ProjectsControllerCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Project&gt;&gt; ProjectsControllerFindAll(ProjectsControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all projects that the current API Token has permission to view.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ProjectsControllerFindAll(new ProjectsControllerFindAllRequest());
    // TODO: Handle 'response' of type IReadOnlyList<Project>
}
catch (ApiException<ProjectsControllerFindAllError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProjectsControllerFindAllRequest](src/DevCycle/Requests/Projects/ProjectsControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Project](src/DevCycle/Models/Project.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[ProjectsControllerFindAllError](src/DevCycle/Errors/ProjectsControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project&gt; ProjectsControllerFindOne(ProjectsControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Project by ID or key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ProjectsControllerFindOne(new ProjectsControllerFindOneRequest
    {
        Key = "some example string",
    });
    // TODO: Handle 'response' of type Project
}
catch (ApiException<ProjectsControllerFindOneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProjectsControllerFindOneRequest](src/DevCycle/Requests/Projects/ProjectsControllerFindOneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/DevCycle/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[ProjectsControllerFindOneError](src/DevCycle/Errors/ProjectsControllerFindOneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;FeatureStalenessEntity&gt;&gt; ProjectsControllerGetStaleness(ProjectsControllerGetStalenessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ProjectsControllerGetStaleness(new ProjectsControllerGetStalenessRequest
    {
        Key = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<FeatureStalenessEntity>
}
catch (ApiException<ProjectsControllerGetStalenessError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProjectsControllerGetStalenessRequest](src/DevCycle/Requests/Projects/ProjectsControllerGetStalenessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[FeatureStalenessEntity](src/DevCycle/Models/FeatureStalenessEntity.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[ProjectsControllerGetStalenessError](src/DevCycle/Errors/ProjectsControllerGetStalenessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ProjectsControllerRemove(ProjectsControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Project by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Projects.ProjectsControllerRemove(new ProjectsControllerRemoveRequest { Key = "some example string" });
}
catch (ApiException<ProjectsControllerRemoveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProjectsControllerRemoveRequest](src/DevCycle/Requests/Projects/ProjectsControllerRemoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[ProjectsControllerRemoveError](src/DevCycle/Errors/ProjectsControllerRemoveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project&gt; ProjectsControllerUpdate(ProjectsControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Project by ID or key. Certain facets of the project settings require additional permissions to update.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ProjectsControllerUpdate(new ProjectsControllerUpdateRequest
    {
        Key = "some example string",
        Body = new UpdateProjectDto(),
    });
    // TODO: Handle 'response' of type Project
}
catch (ApiException<ProjectsControllerUpdateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProjectsControllerUpdateRequest](src/DevCycle/Requests/Projects/ProjectsControllerUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/DevCycle/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[ProjectsControllerUpdateError](src/DevCycle/Errors/ProjectsControllerUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project&gt; ProjectsControllerUpdateProtectedSettings(ProjectsControllerUpdateProtectedSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the Protect Settings for a Project by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ProjectsControllerUpdateProtectedSettings(
        new ProjectsControllerUpdateProtectedSettingsRequest
        {
            Key = "some example string",
            Body = new UpdateProtectedProjectSettingsDto
            {
                Settings = new ProtectedProjectSettingsDto
                {
                    FeatureApprovalWorkflow = new FeatureApprovalWorkflowDto
                    {
                        Enabled = true,
                        AllowPublisherBypass = true,
                        DefaultReviewers = ["some example string"],
                    },
                    Staleness = new StalenessSettingsDto
                    {
                        Enabled = true,
                        Released = new ReleasedStalenessDto { Enabled = enabled },
                        UnmodifiedLong = new UnmodifiedLongStalenessDto { Enabled = enabled },
                        UnmodifiedShort = new UnmodifiedShortStalenessDto { Enabled = enabled },
                        Unused = new UnusedStalenessDto { Enabled = enabled },
                        Email = new EmailSettingsDto { Enabled = enabled, Users = users, Frequency = frequency },
                    },
                },
            },
        });
    // TODO: Handle 'response' of type Project
}
catch (ApiException<ProjectsControllerUpdateProtectedSettingsError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProjectsControllerUpdateProtectedSettingsRequest](src/DevCycle/Requests/Projects/ProjectsControllerUpdateProtectedSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/DevCycle/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[ProjectsControllerUpdateProtectedSettingsError](src/DevCycle/Errors/ProjectsControllerUpdateProtectedSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project&gt; ProjectsControllerUpdateSettings(ProjectsControllerUpdateSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a subset of settings for a Project that only requires publisher permissions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ProjectsControllerUpdateSettings(new ProjectsControllerUpdateSettingsRequest
    {
        Key = "some example string",
        Body = new UpdateProjectSettingsDto
        {
            Settings = new ProjectSettings
            {
                EdgeDb = new EdgeDbSettings { Enabled = true },
                OptIn = new OptInSettings
                {
                    Enabled = true,
                    Title = "some example string",
                    Description = "some example string",
                    ImageUrl = "some example string",
                    Colors = new ColorSettings { Primary = primary, Secondary = secondary },
                    PoweredByAlignment = poweredByAlignment,
                },
                SdkTypeVisibility = new SdkTypeVisibilitySettings { EnabledInFeatureSettings = true },
                LifeCycle = new LifeCycleSettings { DisableCodeRefChecks = true },
                Obfuscation = new ObfuscationSettings { Enabled = true, Required = true },
                FeatureApprovalWorkflow = new FeatureApprovalWorkflowSettings
                {
                    Enabled = true,
                    AllowPublisherBypass = true,
                    DefaultReviewers = ["some example string"],
                },
                DisablePassthroughRollouts = true,
                Staleness = new StalenessSettings
                {
                    Enabled = true,
                    Released = new ReleasedStalenessSettings { Enabled = enabled },
                    UnmodifiedLong = new UnmodifiedLongStalenessSettings { Enabled = enabled },
                    UnmodifiedShort = new UnmodifiedShortStalenessSettings { Enabled = enabled },
                    Unused = new UnusedStalenessSettings { Enabled = enabled },
                    Email = new StalenessEmailSettings
                    {
                        Enabled = enabled,
                        Frequency = frequency,
                        Users = users,
                        LastNotification = lastNotification,
                    },
                },
                Dynatrace = new DynatraceProjectSettings { Enabled = true, EnvironmentMap = environmentMap },
            },
        },
    });
    // TODO: Handle 'response' of type Project
}
catch (ApiException<ProjectsControllerUpdateSettingsError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProjectsControllerUpdateSettingsRequest](src/DevCycle/Requests/Projects/ProjectsControllerUpdateSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/DevCycle/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[ProjectsControllerUpdateSettingsError](src/DevCycle/Errors/ProjectsControllerUpdateSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Results

> Source: [Results](src/DevCycle/Api/Results.cs)

<details>
<summary><code>Task&lt;ResultProjectEvaluationsByHourDto&gt; ResultsControllerGetEvaluationsPerHourByProject(ResultsControllerGetEvaluationsPerHourByProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch unique user variable evaluations per hour for a project

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Results.ResultsControllerGetEvaluationsPerHourByProject(
        new ResultsControllerGetEvaluationsPerHourByProjectRequest { Project = "some example string" });
    // TODO: Handle 'response' of type ResultProjectEvaluationsByHourDto
}
catch (ApiException<ResultsControllerGetEvaluationsPerHourByProjectError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResultsControllerGetEvaluationsPerHourByProjectRequest](src/DevCycle/Requests/Results/ResultsControllerGetEvaluationsPerHourByProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResultProjectEvaluationsByHourDto](src/DevCycle/Models/ResultProjectEvaluationsByHourDto.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[ResultsControllerGetEvaluationsPerHourByProjectError](src/DevCycle/Errors/ResultsControllerGetEvaluationsPerHourByProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResultEvaluationsByHourDto&gt; ResultsControllerGetTotalEvaluationsPerHourByFeature(ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch total variable evaluations per hour for a feature

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Results.ResultsControllerGetTotalEvaluationsPerHourByFeature(
        new ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest
        {
            Feature = "some example string",
            Project = "some example string",
        });
    // TODO: Handle 'response' of type ResultEvaluationsByHourDto
}
catch (ApiException<ResultsControllerGetTotalEvaluationsPerHourByFeatureError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest](src/DevCycle/Requests/Results/ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResultEvaluationsByHourDto](src/DevCycle/Models/ResultEvaluationsByHourDto.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[ResultsControllerGetTotalEvaluationsPerHourByFeatureError](src/DevCycle/Errors/ResultsControllerGetTotalEvaluationsPerHourByFeatureError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResultProjectEvaluationsByHourDto&gt; ResultsControllerGetTotalEvaluationsPerHourByProject(ResultsControllerGetTotalEvaluationsPerHourByProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch total variable evaluations per hour for a project

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Results.ResultsControllerGetTotalEvaluationsPerHourByProject(
        new ResultsControllerGetTotalEvaluationsPerHourByProjectRequest { Project = "some example string" });
    // TODO: Handle 'response' of type ResultProjectEvaluationsByHourDto
}
catch (ApiException<ResultsControllerGetTotalEvaluationsPerHourByProjectError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResultsControllerGetTotalEvaluationsPerHourByProjectRequest](src/DevCycle/Requests/Results/ResultsControllerGetTotalEvaluationsPerHourByProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResultProjectEvaluationsByHourDto](src/DevCycle/Models/ResultProjectEvaluationsByHourDto.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[ResultsControllerGetTotalEvaluationsPerHourByProjectError](src/DevCycle/Errors/ResultsControllerGetTotalEvaluationsPerHourByProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UserProfiles

> Source: [UserProfiles](src/DevCycle/Api/UserProfiles.cs)

<details>
<summary><code>Task&lt;ProjectUserProfile&gt; UserProfilesControllerCreateOrUpdate(UserProfilesControllerCreateOrUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or Update a User Profile for Overrides

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UserProfiles.UserProfilesControllerCreateOrUpdate(
        new UserProfilesControllerCreateOrUpdateRequest
        {
            Project = "some example string",
            Body = new UpdateUserProfileDto(),
        });
    // TODO: Handle 'response' of type ProjectUserProfile
}
catch (ApiException<UserProfilesControllerCreateOrUpdateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UserProfilesControllerCreateOrUpdateRequest](src/DevCycle/Requests/UserProfiles/UserProfilesControllerCreateOrUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectUserProfile](src/DevCycle/Models/ProjectUserProfile.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[UserProfilesControllerCreateOrUpdateError](src/DevCycle/Errors/UserProfilesControllerCreateOrUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectUserProfile&gt; UserProfilesControllerFindAll(UserProfilesControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get User Profile for the authenticated User in the specified Project

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UserProfiles.UserProfilesControllerFindAll(new UserProfilesControllerFindAllRequest
    {
        Project = "some example string",
    });
    // TODO: Handle 'response' of type ProjectUserProfile
}
catch (ApiException<UserProfilesControllerFindAllError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UserProfilesControllerFindAllRequest](src/DevCycle/Requests/UserProfiles/UserProfilesControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectUserProfile](src/DevCycle/Models/ProjectUserProfile.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[UserProfilesControllerFindAllError](src/DevCycle/Errors/UserProfilesControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VariablesApi

> Source: [VariablesApi](src/DevCycle/Api/VariablesApi.cs)

<details>
<summary><code>Task&lt;VariableDevCycleManagementVariablesApi&gt; VariablesControllerCreate(VariablesControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VariablesApi.VariablesControllerCreate(new VariablesControllerCreateRequest
    {
        Project = "some example string",
        Body = new CreateVariableDtoDevCycleManagementVariablesApi
        {
            Key = "some example string",
            Type = TypeDevCycleManagementVariablesApi.String,
        },
    });
    // TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
}
catch (ApiException<VariablesControllerCreateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VariablesControllerCreateRequest](src/DevCycle/Requests/VariablesApi/VariablesControllerCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](src/DevCycle/Models/VariableDevCycleManagementVariablesApi.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[VariablesControllerCreateError](src/DevCycle/Errors/VariablesControllerCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;VariableDevCycleManagementVariablesApi&gt;&gt; VariablesControllerFindAll(VariablesControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VariablesApi.VariablesControllerFindAll(new VariablesControllerFindAllRequest
    {
        Project = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<VariableDevCycleManagementVariablesApi>
}
catch (ApiException<VariablesControllerFindAllError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VariablesControllerFindAllRequest](src/DevCycle/Requests/VariablesApi/VariablesControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[VariableDevCycleManagementVariablesApi](src/DevCycle/Models/VariableDevCycleManagementVariablesApi.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[VariablesControllerFindAllError](src/DevCycle/Errors/VariablesControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VariableDevCycleManagementVariablesApi&gt; VariablesControllerFindOne(VariablesControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VariablesApi.VariablesControllerFindOne(new VariablesControllerFindOneRequest
    {
        Key = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
}
catch (ApiException<VariablesControllerFindOneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VariablesControllerFindOneRequest](src/DevCycle/Requests/VariablesApi/VariablesControllerFindOneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](src/DevCycle/Models/VariableDevCycleManagementVariablesApi.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[VariablesControllerFindOneError](src/DevCycle/Errors/VariablesControllerFindOneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task VariablesControllerRemove(VariablesControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.VariablesApi.VariablesControllerRemove(new VariablesControllerRemoveRequest
    {
        Key = "some example string",
        Project = "some example string",
    });
}
catch (ApiException<VariablesControllerRemoveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VariablesControllerRemoveRequest](src/DevCycle/Requests/VariablesApi/VariablesControllerRemoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[VariablesControllerRemoveError](src/DevCycle/Errors/VariablesControllerRemoveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VariableDevCycleManagementVariablesApi&gt; VariablesControllerUpdate(VariablesControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VariablesApi.VariablesControllerUpdate(new VariablesControllerUpdateRequest
    {
        Key = "some example string",
        Project = "some example string",
        Body = new UpdateVariableDto(),
    });
    // TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
}
catch (ApiException<VariablesControllerUpdateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VariablesControllerUpdateRequest](src/DevCycle/Requests/VariablesApi/VariablesControllerUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](src/DevCycle/Models/VariableDevCycleManagementVariablesApi.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[VariablesControllerUpdateError](src/DevCycle/Errors/VariablesControllerUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VariableDevCycleManagementVariablesApi&gt; VariablesControllerUpdateStatus(VariablesControllerUpdateStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VariablesApi.VariablesControllerUpdateStatus(new VariablesControllerUpdateStatusRequest
    {
        Key = "some example string",
        Project = "some example string",
        Body = new UpdateVariableStatusDto { Status = Status1DevCycleManagementVariablesApi.Active },
    });
    // TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
}
catch (ApiException<VariablesControllerUpdateStatusError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VariablesControllerUpdateStatusRequest](src/DevCycle/Requests/VariablesApi/VariablesControllerUpdateStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](src/DevCycle/Models/VariableDevCycleManagementVariablesApi.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[VariablesControllerUpdateStatusError](src/DevCycle/Errors/VariablesControllerUpdateStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Variations

> Source: [Variations](src/DevCycle/Api/Variations.cs)

<details>
<summary><code>Task&lt;FeatureDevCycleManagementMetricAssociationsApi&gt; VariationsControllerCreate(VariationsControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new variation within a Feature

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Variations.VariationsControllerCreate(new VariationsControllerCreateRequest
    {
        Project = "some example string",
        Feature = "some example string",
        Body = new FeatureVariationDto { Key = "some example string", Name = "some example string" },
    });
    // TODO: Handle 'response' of type FeatureDevCycleManagementMetricAssociationsApi
}
catch (ApiException<VariationsControllerCreateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VariationsControllerCreateRequest](src/DevCycle/Requests/Variations/VariationsControllerCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureDevCycleManagementMetricAssociationsApi](src/DevCycle/Models/FeatureDevCycleManagementMetricAssociationsApi.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[VariationsControllerCreateError](src/DevCycle/Errors/VariationsControllerCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Variation&gt;&gt; VariationsControllerFindAll(VariationsControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of variations for a feature

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Variations.VariationsControllerFindAll(new VariationsControllerFindAllRequest
    {
        Feature = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<Variation>
}
catch (ApiException<VariationsControllerFindAllError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VariationsControllerFindAllRequest](src/DevCycle/Requests/Variations/VariationsControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Variation](src/DevCycle/Models/Variation.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[VariationsControllerFindAllError](src/DevCycle/Errors/VariationsControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Variation&gt; VariationsControllerFindOne(VariationsControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a variation by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Variations.VariationsControllerFindOne(new VariationsControllerFindOneRequest
    {
        Key = "some example string",
        Feature = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type Variation
}
catch (ApiException<VariationsControllerFindOneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VariationsControllerFindOneRequest](src/DevCycle/Requests/Variations/VariationsControllerFindOneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Variation](src/DevCycle/Models/Variation.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[VariationsControllerFindOneError](src/DevCycle/Errors/VariationsControllerFindOneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureDevCycleManagementMetricAssociationsApi&gt; VariationsControllerUpdate(VariationsControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a variation by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Variations.VariationsControllerUpdate(new VariationsControllerUpdateRequest
    {
        Key = "some example string",
        Feature = "some example string",
        Project = "some example string",
        Body = new UpdateFeatureVariationDto(),
    });
    // TODO: Handle 'response' of type FeatureDevCycleManagementMetricAssociationsApi
}
catch (ApiException<VariationsControllerUpdateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VariationsControllerUpdateRequest](src/DevCycle/Requests/Variations/VariationsControllerUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureDevCycleManagementMetricAssociationsApi](src/DevCycle/Models/FeatureDevCycleManagementMetricAssociationsApi.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[VariationsControllerUpdateError](src/DevCycle/Errors/VariationsControllerUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/DevCycle/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;Webhook&gt; WebhooksControllerCreate(WebhooksControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Webhook

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.WebhooksControllerCreate(new WebhooksControllerCreateRequest
    {
        Project = "some example string",
        Body = new CreateWebhookDto
        {
            Name = "some example string",
            Events = ["some example string"],
            Url = "some example string",
        },
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<WebhooksControllerCreateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebhooksControllerCreateRequest](src/DevCycle/Requests/WebhooksApi/WebhooksControllerCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/DevCycle/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[WebhooksControllerCreateError](src/DevCycle/Errors/WebhooksControllerCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Webhook&gt;&gt; WebhooksControllerFindAll(WebhooksControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.WebhooksControllerFindAll(new WebhooksControllerFindAllRequest
    {
        Project = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<Webhook>
}
catch (ApiException<WebhooksControllerFindAllError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebhooksControllerFindAllRequest](src/DevCycle/Requests/WebhooksApi/WebhooksControllerFindAllRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Webhook](src/DevCycle/Models/Webhook.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[WebhooksControllerFindAllError](src/DevCycle/Errors/WebhooksControllerFindAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Webhook&gt; WebhooksControllerFindOne(WebhooksControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a webhook by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.WebhooksControllerFindOne(new WebhooksControllerFindOneRequest
    {
        Id = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<WebhooksControllerFindOneError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebhooksControllerFindOneRequest](src/DevCycle/Requests/WebhooksApi/WebhooksControllerFindOneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/DevCycle/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[WebhooksControllerFindOneError](src/DevCycle/Errors/WebhooksControllerFindOneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Webhook&gt; WebhooksControllerRemove(WebhooksControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.WebhooksControllerRemove(new WebhooksControllerRemoveRequest
    {
        Id = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<WebhooksControllerRemoveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebhooksControllerRemoveRequest](src/DevCycle/Requests/WebhooksApi/WebhooksControllerRemoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/DevCycle/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[WebhooksControllerRemoveError](src/DevCycle/Errors/WebhooksControllerRemoveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Webhook&gt; WebhooksControllerUpdate(WebhooksControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Webhook

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.WebhooksControllerUpdate(new WebhooksControllerUpdateRequest
    {
        Id = "some example string",
        Project = "some example string",
        Body = new UpdateWebhookDto { Feature = "some example string", Environments = ["some example string"] },
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<WebhooksControllerUpdateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebhooksControllerUpdateRequest](src/DevCycle/Requests/WebhooksApi/WebhooksControllerUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/DevCycle/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[WebhooksControllerUpdateError](src/DevCycle/Errors/WebhooksControllerUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BetaSemanticPatch

> Source: [BetaSemanticPatch](src/DevCycle/Api/BetaSemanticPatch.cs)

<details>
<summary><code>Task SemanticPatchControllerSemanticUpdate(SemanticPatchControllerSemanticUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Semantic Patch Update an Audience by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.BetaSemanticPatch.SemanticPatchControllerSemanticUpdate(
        new SemanticPatchControllerSemanticUpdateRequest
        {
            Key = "some example string",
            Project = "some example string",
            Body = new AudiencePatchDto
            {
                Instructions = [
                    new AudiencePatchInstructionsDto
                    {
                        Op = Op.AddFilterValues,
                        Action = new AudiencePatchAction { Values = values, FilterIndex = "some example string" },
                    },
                ],
            },
        });
}
catch (ApiException<SemanticPatchControllerSemanticUpdateError> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SemanticPatchControllerSemanticUpdateRequest](src/DevCycle/Requests/BetaSemanticPatch/SemanticPatchControllerSemanticUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[SemanticPatchControllerSemanticUpdateError](src/DevCycle/Errors/SemanticPatchControllerSemanticUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeprecatedFeaturesV1

> Source: [DeprecatedFeaturesV1](src/DevCycle/Api/DeprecatedFeaturesV1.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api&gt;&gt; FeaturesControllerCreateMultipleV1(FeaturesControllerCreateMultipleV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple new Features

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1(
        new FeaturesControllerCreateMultipleV1Request
        {
            Project = "some example string",
            Body = ["some example string"],
        });
    // TODO: Handle 'response' of type IReadOnlyList<FeatureDevCycleManagementDeprecatedFeaturesV1Api>
}
catch (ApiException<FeaturesControllerCreateMultipleV1Error> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerCreateMultipleV1Request](src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerCreateMultipleV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerCreateMultipleV1Error](src/DevCycle/Errors/FeaturesControllerCreateMultipleV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api&gt; FeaturesControllerCreateV1(FeaturesControllerCreateV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Feature

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DeprecatedFeaturesV1.FeaturesControllerCreateV1(new FeaturesControllerCreateV1Request
    {
        Project = "some example string",
        Body = new CreateFeatureDto
        {
            Key = "some example string",
            Name = "some example string",
            Configurations = new Dictionary<string, UpdateFeatureConfigDto> { ["key"] = new UpdateFeatureConfigDto() },
        },
    });
    // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
}
catch (ApiException<FeaturesControllerCreateV1Error> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerCreateV1Request](src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerCreateV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerCreateV1Error](src/DevCycle/Errors/FeaturesControllerCreateV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;JiraIssueLink&gt;&gt; FeaturesControllerFindAllLinkedIssuesV1(FeaturesControllerFindAllLinkedIssuesV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1(
        new FeaturesControllerFindAllLinkedIssuesV1Request
        {
            Feature = "some example string",
            Project = "some example string",
        });
    // TODO: Handle 'response' of type IReadOnlyList<JiraIssueLink>
}
catch (ApiException<FeaturesControllerFindAllLinkedIssuesV1Error> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerFindAllLinkedIssuesV1Request](src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerFindAllLinkedIssuesV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[JiraIssueLink](src/DevCycle/Models/JiraIssueLink.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerFindAllLinkedIssuesV1Error](src/DevCycle/Errors/FeaturesControllerFindAllLinkedIssuesV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api&gt;&gt; FeaturesControllerFindAllV1(FeaturesControllerFindAllV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DeprecatedFeaturesV1.FeaturesControllerFindAllV1(new FeaturesControllerFindAllV1Request
    {
        Project = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<FeatureDevCycleManagementDeprecatedFeaturesV1Api>
}
catch (ApiException<FeaturesControllerFindAllV1Error> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerFindAllV1Request](src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerFindAllV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerFindAllV1Error](src/DevCycle/Errors/FeaturesControllerFindAllV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api&gt; FeaturesControllerFindOneV1(FeaturesControllerFindOneV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Feature by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DeprecatedFeaturesV1.FeaturesControllerFindOneV1(new FeaturesControllerFindOneV1Request
    {
        Feature = "some example string",
        Key = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
}
catch (ApiException<FeaturesControllerFindOneV1Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerFindOneV1Request](src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerFindOneV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerFindOneV1Error](src/DevCycle/Errors/FeaturesControllerFindOneV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StaticConfiguration&gt; FeaturesControllerFindStaticConfigurationV1(FeaturesControllerFindStaticConfigurationV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a completed Feature's static configuration

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1(
        new FeaturesControllerFindStaticConfigurationV1Request
        {
            Feature = "some example string",
            Key = "some example string",
            Project = "some example string",
        });
    // TODO: Handle 'response' of type StaticConfiguration
}
catch (ApiException<FeaturesControllerFindStaticConfigurationV1Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerFindStaticConfigurationV1Request](src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerFindStaticConfigurationV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StaticConfiguration](src/DevCycle/Models/StaticConfiguration.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerFindStaticConfigurationV1Error](src/DevCycle/Errors/FeaturesControllerFindStaticConfigurationV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JiraIssueLink&gt; FeaturesControllerLinkIssueV1(FeaturesControllerLinkIssueV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1(
        new FeaturesControllerLinkIssueV1Request
        {
            Feature = "some example string",
            Project = "some example string",
            Body = new LinkJiraIssueDto { IssueId = "some example string" },
        });
    // TODO: Handle 'response' of type JiraIssueLink
}
catch (ApiException<FeaturesControllerLinkIssueV1Error> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerLinkIssueV1Request](src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerLinkIssueV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JiraIssueLink](src/DevCycle/Models/JiraIssueLink.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerLinkIssueV1Error](src/DevCycle/Errors/FeaturesControllerLinkIssueV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task FeaturesControllerRemoveLinkedIssueV1(FeaturesControllerRemoveLinkedIssueV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1(
        new FeaturesControllerRemoveLinkedIssueV1Request
        {
            Feature = "some example string",
            IssueId = "some example string",
            Key = "some example string",
            Project = "some example string",
        });
}
catch (ApiException<FeaturesControllerRemoveLinkedIssueV1Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerRemoveLinkedIssueV1Request](src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerRemoveLinkedIssueV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerRemoveLinkedIssueV1Error](src/DevCycle/Errors/FeaturesControllerRemoveLinkedIssueV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task FeaturesControllerRemoveV1(FeaturesControllerRemoveV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Feature by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.DeprecatedFeaturesV1.FeaturesControllerRemoveV1(new FeaturesControllerRemoveV1Request
    {
        Feature = "some example string",
        Key = "some example string",
        Project = "some example string",
    });
}
catch (ApiException<FeaturesControllerRemoveV1Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerRemoveV1Request](src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerRemoveV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerRemoveV1Error](src/DevCycle/Errors/FeaturesControllerRemoveV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StaticConfiguration&gt; FeaturesControllerUpdateStaticConfigurationV1(FeaturesControllerUpdateStaticConfigurationV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a completed Feature's static configuration

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1(
        new FeaturesControllerUpdateStaticConfigurationV1Request
        {
            Feature = "some example string",
            Key = "some example string",
            Project = "some example string",
            Body = new UpdateStaticConfigurationDto(),
        });
    // TODO: Handle 'response' of type StaticConfiguration
}
catch (ApiException<FeaturesControllerUpdateStaticConfigurationV1Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerUpdateStaticConfigurationV1Request](src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerUpdateStaticConfigurationV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StaticConfiguration](src/DevCycle/Models/StaticConfiguration.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerUpdateStaticConfigurationV1Error](src/DevCycle/Errors/FeaturesControllerUpdateStaticConfigurationV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api&gt; FeaturesControllerUpdateStatusV1(FeaturesControllerUpdateStatusV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature's status by key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1(
        new FeaturesControllerUpdateStatusV1Request
        {
            Feature = "some example string",
            Key = "some example string",
            Project = "some example string",
            Body = new UpdateFeatureStatusDto(),
        });
    // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
}
catch (ApiException<FeaturesControllerUpdateStatusV1Error> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerUpdateStatusV1Request](src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerUpdateStatusV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerUpdateStatusV1Error](src/DevCycle/Errors/FeaturesControllerUpdateStatusV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api&gt; FeaturesControllerUpdateV1(FeaturesControllerUpdateV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature by ID or key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DeprecatedFeaturesV1.FeaturesControllerUpdateV1(new FeaturesControllerUpdateV1Request
    {
        Feature = "some example string",
        Project = "some example string",
        Body = new UpdateFeatureDto(),
    });
    // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
}
catch (ApiException<FeaturesControllerUpdateV1Error> ex)
{
    if (ex.Error.TryGetBadRequestErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeaturesControllerUpdateV1Request](src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerUpdateV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs)</code>

**OnError**: <code>[ApiException](src/DevCycle/Core/Exceptions/ApiException.cs)&lt;[FeaturesControllerUpdateV1Error](src/DevCycle/Errors/FeaturesControllerUpdateV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

