# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AirtableClient](src/Airtable/AirtableClient.cs)

## Bases

> Source: [Bases](src/Airtable/Api/Bases.cs)

<details>
<summary><code>Task&lt;BaseSchema&gt; CreateBase(CreateBaseOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new base in the specified workspace. The request must include the workspace ID, base name, and at least one table definition with fields. Returns the newly created base with its schema.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bases.CreateBase(new CreateBaseOperationRequest
    {
        Body = new CreateBaseRequest
        {
            Name = "some example string",
            WorkspaceId = "some example string",
            Tables = [
                new Table
                {
                    Name = "some example string",
                    Fields = [new CreateFieldRequest { Name = "some example string", Type = "some example string" }],
                },
            ],
        },
    });
    // TODO: Handle 'response' of type BaseSchema
}
catch (ApiException<CreateBaseError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBaseOperationRequest](src/Airtable/Requests/Bases/CreateBaseOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BaseSchema](src/Airtable/Models/BaseSchema.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[CreateBaseError](src/Airtable/Errors/CreateBaseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MetaBasesTablesResponse&gt; GetBaseSchema(GetBaseSchemaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the schema of the specified base, including all tables, their fields (with type and configuration), and views. This endpoint provides a complete structural overview of the base.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bases.GetBaseSchema(new GetBaseSchemaRequest { BaseId = "some example string" });
    // TODO: Handle 'response' of type MetaBasesTablesResponse
}
catch (ApiException<GetBaseSchemaError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBaseSchemaRequest](src/Airtable/Requests/Bases/GetBaseSchemaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetaBasesTablesResponse](src/Airtable/Models/MetaBasesTablesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[GetBaseSchemaError](src/Airtable/Errors/GetBaseSchemaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BaseList&gt; ListBases(ListBasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of all bases that the authenticated user has access to. Each base includes its ID, name, and permission level. Use the offset parameter from the response to paginate through all available bases.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bases.ListBases(new ListBasesRequest());
    // TODO: Handle 'response' of type BaseList
}
catch (ApiException<ListBasesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBasesRequest](src/Airtable/Requests/Bases/ListBasesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BaseList](src/Airtable/Models/BaseList.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[ListBasesError](src/Airtable/Errors/ListBasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MetaWhoamiResponse&gt; Whoami(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the ID and scopes of the currently authenticated user or service account. Useful for verifying authentication and checking available permissions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bases.Whoami();
    // TODO: Handle 'response' of type MetaWhoamiResponse
}
catch (ApiException<WhoamiError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetaWhoamiResponse](src/Airtable/Models/MetaWhoamiResponse.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[WhoamiError](src/Airtable/Errors/WhoamiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Comments

> Source: [Comments](src/Airtable/Api/Comments.cs)

<details>
<summary><code>Task&lt;Comment&gt; CreateComment(CreateCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new comment on the specified record. Comments can include user mentions using the @[usrXXXXXXXX] syntax. Requires OAuth authentication with the comment:write scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Comments.CreateComment(new CreateCommentRequest
    {
        BaseId = "some example string",
        TableIdOrName = "some example string",
        RecordId = "some example string",
        Body = new RecordIdCommentsRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type Comment
}
catch (ApiException<CreateCommentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCommentRequest](src/Airtable/Requests/Comments/CreateCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Comment](src/Airtable/Models/Comment.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[CreateCommentError](src/Airtable/Errors/CreateCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecordIdCommentsCommentIdResponse&gt; DeleteComment(DeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a comment from a record. Only the author of the comment can delete it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Comments.DeleteComment(new DeleteCommentRequest
    {
        BaseId = "some example string",
        TableIdOrName = "some example string",
        RecordId = "some example string",
        CommentId = "some example string",
    });
    // TODO: Handle 'response' of type RecordIdCommentsCommentIdResponse
}
catch (ApiException<DeleteCommentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCommentRequest](src/Airtable/Requests/Comments/DeleteCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordIdCommentsCommentIdResponse](src/Airtable/Models/RecordIdCommentsCommentIdResponse.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[DeleteCommentError](src/Airtable/Errors/DeleteCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CommentList&gt; ListComments(ListCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of comments on the specified record. Comments are returned in reverse chronological order.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Comments.ListComments(new ListCommentsRequest
    {
        BaseId = "some example string",
        TableIdOrName = "some example string",
        RecordId = "some example string",
    });
    // TODO: Handle 'response' of type CommentList
}
catch (ApiException<ListCommentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCommentsRequest](src/Airtable/Requests/Comments/ListCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentList](src/Airtable/Models/CommentList.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[ListCommentsError](src/Airtable/Errors/ListCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Comment&gt; UpdateComment(UpdateCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the text of an existing comment on a record. Only the author of the comment can update it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Comments.UpdateComment(new UpdateCommentRequest
    {
        BaseId = "some example string",
        TableIdOrName = "some example string",
        RecordId = "some example string",
        CommentId = "some example string",
        Body = new RecordIdCommentsCommentIdRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type Comment
}
catch (ApiException<UpdateCommentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCommentRequest](src/Airtable/Requests/Comments/UpdateCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Comment](src/Airtable/Models/Comment.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[UpdateCommentError](src/Airtable/Errors/UpdateCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Fields

> Source: [Fields](src/Airtable/Api/Fields.cs)

<details>
<summary><code>Task&lt;FieldSchema&gt; CreateField(CreateFieldOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new field in the specified table. The field must include a name and type. Some field types (like singleSelect, multipleSelects) accept additional options for configuration. Note that formula and some computed field types cannot be created via the API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Fields.CreateField(new CreateFieldOperationRequest
    {
        BaseId = "some example string",
        TableId = "some example string",
        Body = new CreateFieldRequest { Name = "some example string", Type = "some example string" },
    });
    // TODO: Handle 'response' of type FieldSchema
}
catch (ApiException<CreateFieldError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateFieldOperationRequest](src/Airtable/Requests/Fields/CreateFieldOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FieldSchema](src/Airtable/Models/FieldSchema.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[CreateFieldError](src/Airtable/Errors/CreateFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FieldSchema&gt; UpdateField(UpdateFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name, description, or configuration options of an existing field. Only the provided properties will be modified. Not all field properties can be updated after creation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Fields.UpdateField(new UpdateFieldRequest
    {
        BaseId = "some example string",
        TableId = "some example string",
        FieldId = "some example string",
        Body = new MetaBasesTablesFieldsFieldIdRequest(),
    });
    // TODO: Handle 'response' of type FieldSchema
}
catch (ApiException<UpdateFieldError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateFieldRequest](src/Airtable/Requests/Fields/UpdateFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FieldSchema](src/Airtable/Models/FieldSchema.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[UpdateFieldError](src/Airtable/Errors/UpdateFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](src/Airtable/Api/Groups.cs)

<details>
<summary><code>Task&lt;ScimGroup&gt; CreateScimGroup(CreateScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new SCIM group in the enterprise account. Groups can contain user members and are used for access management.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Groups.CreateScimGroup(new CreateScimGroupRequest
    {
        Body = new ScimGroupCreateRequest { Schemas = ["some example string"], DisplayName = "some example string" },
    });
    // TODO: Handle 'response' of type ScimGroup
}
catch (ApiException<CreateScimGroupError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateScimGroupRequest](src/Airtable/Requests/Groups/CreateScimGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimGroup](src/Airtable/Models/ScimGroup.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[CreateScimGroupError](src/Airtable/Errors/CreateScimGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteScimGroup(DeleteScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a SCIM group from the enterprise account. Members are not deleted but are removed from the group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Groups.DeleteScimGroup(new DeleteScimGroupRequest { GroupId = "some example string" });
}
catch (ApiException<DeleteScimGroupError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteScimGroupRequest](src/Airtable/Requests/Groups/DeleteScimGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[DeleteScimGroupError](src/Airtable/Errors/DeleteScimGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimGroup&gt; GetScimGroup(GetScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single SCIM group resource by its unique identifier, including its member list.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Groups.GetScimGroup(new GetScimGroupRequest { GroupId = "some example string" });
    // TODO: Handle 'response' of type ScimGroup
}
catch (ApiException<GetScimGroupError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetScimGroupRequest](src/Airtable/Requests/Groups/GetScimGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimGroup](src/Airtable/Models/ScimGroup.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[GetScimGroupError](src/Airtable/Errors/GetScimGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimGroupListResponse&gt; ListScimGroups(ListScimGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of SCIM group resources. Supports filtering by group display name and pagination using startIndex and count.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Groups.ListScimGroups(new ListScimGroupsRequest());
    // TODO: Handle 'response' of type ScimGroupListResponse
}
catch (ApiException<ListScimGroupsError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListScimGroupsRequest](src/Airtable/Requests/Groups/ListScimGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimGroupListResponse](src/Airtable/Models/ScimGroupListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[ListScimGroupsError](src/Airtable/Errors/ListScimGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimGroup&gt; ReplaceScimGroup(ReplaceScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces a SCIM group resource entirely with the provided data. The complete member list must be included in the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Groups.ReplaceScimGroup(new ReplaceScimGroupRequest
    {
        GroupId = "some example string",
        Body = new ScimGroupCreateRequest { Schemas = ["some example string"], DisplayName = "some example string" },
    });
    // TODO: Handle 'response' of type ScimGroup
}
catch (ApiException<ReplaceScimGroupError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplaceScimGroupRequest](src/Airtable/Requests/Groups/ReplaceScimGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimGroup](src/Airtable/Models/ScimGroup.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[ReplaceScimGroupError](src/Airtable/Errors/ReplaceScimGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimGroup&gt; UpdateScimGroup(UpdateScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a SCIM group resource using SCIM PATCH operations. Commonly used to add or remove members from the group without replacing the entire resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Groups.UpdateScimGroup(new UpdateScimGroupRequest
    {
        GroupId = "some example string",
        Body = new ScimPatchRequest { Schemas = ["some example string"], Operations = [new Operation { Op = Op.Add }] },
    });
    // TODO: Handle 'response' of type ScimGroup
}
catch (ApiException<UpdateScimGroupError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateScimGroupRequest](src/Airtable/Requests/Groups/UpdateScimGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimGroup](src/Airtable/Models/ScimGroup.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[UpdateScimGroupError](src/Airtable/Errors/UpdateScimGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Records

> Source: [Records](src/Airtable/Api/Records.cs)

<details>
<summary><code>Task&lt;ResponseModel&gt; CreateRecords(CreateRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates up to 10 records in the specified table. Each record must include a fields object mapping field names (or IDs) to values. If typecast is enabled, the API will attempt to convert string values to the appropriate cell value.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Records.CreateRecords(new CreateRecordsRequest
    {
        BaseId = "some example string",
        TableIdOrName = "some example string",
        Body = new RequestModel { Records = [new Record1 { Fields = fields }] },
    });
    // TODO: Handle 'response' of type ResponseModel
}
catch (ApiException<CreateRecordsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateRecordsRequest](src/Airtable/Requests/Records/CreateRecordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResponseModel](src/Airtable/Models/ResponseModel.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[CreateRecordsError](src/Airtable/Errors/CreateRecordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecordDeleted&gt; DeleteRecord(DeleteRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single record from the specified table. The record is permanently removed and cannot be recovered through the API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Records.DeleteRecord(new DeleteRecordRequest
    {
        BaseId = "some example string",
        TableIdOrName = "some example string",
        RecordId = "some example string",
    });
    // TODO: Handle 'response' of type RecordDeleted
}
catch (ApiException<DeleteRecordError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteRecordRequest](src/Airtable/Requests/Records/DeleteRecordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordDeleted](src/Airtable/Models/RecordDeleted.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[DeleteRecordError](src/Airtable/Errors/DeleteRecordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Record&gt; GetRecord(GetRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single record by its ID from the specified table. Returns the record's fields, creation time, and ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Records.GetRecord(new GetRecordRequest
    {
        BaseId = "some example string",
        TableIdOrName = "some example string",
        RecordId = "some example string",
    });
    // TODO: Handle 'response' of type Record
}
catch (ApiException<GetRecordError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRecordRequest](src/Airtable/Requests/Records/GetRecordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Record](src/Airtable/Models/Record.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[GetRecordError](src/Airtable/Errors/GetRecordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecordList&gt; ListRecords(ListRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of records in the specified table. Records can be filtered using an Airtable formula, sorted by specific fields, and limited to specific fields. The maximum page size is 100 records. Use the offset parameter from the response to fetch the next page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Records.ListRecords(new ListRecordsRequest
    {
        BaseId = "some example string",
        TableIdOrName = "some example string",
    });
    // TODO: Handle 'response' of type RecordList
}
catch (ApiException<ListRecordsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListRecordsRequest](src/Airtable/Requests/Records/ListRecordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordList](src/Airtable/Models/RecordList.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[ListRecordsError](src/Airtable/Errors/ListRecordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Record&gt; ReplaceRecord(ReplaceRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces all fields of an existing record. Fields that are not included in the request body will be cleared. This is a destructive update that overwrites the entire record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Records.ReplaceRecord(new ReplaceRecordRequest
    {
        BaseId = "some example string",
        TableIdOrName = "some example string",
        RecordId = "some example string",
        Body = new RecordIdRequest1 { Fields = fields },
    });
    // TODO: Handle 'response' of type Record
}
catch (ApiException<ReplaceRecordError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplaceRecordRequest](src/Airtable/Requests/Records/ReplaceRecordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Record](src/Airtable/Models/Record.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[ReplaceRecordError](src/Airtable/Errors/ReplaceRecordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Record&gt; UpdateRecord(UpdateRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates specific fields of an existing record. Only the fields included in the request body will be updated; all other fields will remain unchanged. Up to 10 records can be updated in a single request when using the batch endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Records.UpdateRecord(new UpdateRecordRequest
    {
        BaseId = "some example string",
        TableIdOrName = "some example string",
        RecordId = "some example string",
        Body = new RecordIdRequest { Fields = fields },
    });
    // TODO: Handle 'response' of type Record
}
catch (ApiException<UpdateRecordError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateRecordRequest](src/Airtable/Requests/Records/UpdateRecordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Record](src/Airtable/Models/Record.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[UpdateRecordError](src/Airtable/Errors/UpdateRecordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tables

> Source: [Tables](src/Airtable/Api/Tables.cs)

<details>
<summary><code>Task&lt;TableSchema&gt; CreateTable(CreateTableOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new table within the specified base. The table must include a name and at least one field definition. Optionally include a description for the table.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tables.CreateTable(new CreateTableOperationRequest
    {
        BaseId = "some example string",
        Body = new CreateTableRequest
        {
            Name = "some example string",
            Fields = [new CreateFieldRequest { Name = "some example string", Type = "some example string" }],
        },
    });
    // TODO: Handle 'response' of type TableSchema
}
catch (ApiException<CreateTableError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTableOperationRequest](src/Airtable/Requests/Tables/CreateTableOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableSchema](src/Airtable/Models/TableSchema.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[CreateTableError](src/Airtable/Errors/CreateTableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TableSchema&gt; UpdateTable(UpdateTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name and/or description of an existing table. Only the provided fields will be modified.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tables.UpdateTable(new UpdateTableRequest
    {
        BaseId = "some example string",
        TableId = "some example string",
        Body = new MetaBasesTablesRequest(),
    });
    // TODO: Handle 'response' of type TableSchema
}
catch (ApiException<UpdateTableError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateTableRequest](src/Airtable/Requests/Tables/UpdateTableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableSchema](src/Airtable/Models/TableSchema.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[UpdateTableError](src/Airtable/Errors/UpdateTableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/Airtable/Api/Users.cs)

<details>
<summary><code>Task&lt;ScimUser&gt; CreateScimUser(CreateScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a new user in Airtable through the SCIM protocol. The user will be added to the enterprise account. SSO must be configured as Airtable does not allow setting passwords through SCIM.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.CreateScimUser(new CreateScimUserRequest
    {
        Body = new ScimUserCreateRequest { Schemas = ["some example string"], UserName = "some example string" },
    });
    // TODO: Handle 'response' of type ScimUser
}
catch (ApiException<CreateScimUserError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateScimUserRequest](src/Airtable/Requests/Users/CreateScimUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimUser](src/Airtable/Models/ScimUser.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[CreateScimUserError](src/Airtable/Errors/CreateScimUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteScimUser(DeleteScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a SCIM user resource from the enterprise account. The user will lose access to all Airtable resources associated with the enterprise.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Users.DeleteScimUser(new DeleteScimUserRequest { UserId = "some example string" });
}
catch (ApiException<DeleteScimUserError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteScimUserRequest](src/Airtable/Requests/Users/DeleteScimUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[DeleteScimUserError](src/Airtable/Errors/DeleteScimUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimUser&gt; GetScimUser(GetScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single SCIM user resource by its unique identifier. Returns the complete user profile including name, email, and active status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetScimUser(new GetScimUserRequest { UserId = "some example string" });
    // TODO: Handle 'response' of type ScimUser
}
catch (ApiException<GetScimUserError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetScimUserRequest](src/Airtable/Requests/Users/GetScimUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimUser](src/Airtable/Models/ScimUser.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[GetScimUserError](src/Airtable/Errors/GetScimUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimUserListResponse&gt; ListScimUsers(ListScimUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of SCIM user resources. Supports filtering by user attributes and pagination using startIndex and count parameters per the SCIM 2.0 specification.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.ListScimUsers(new ListScimUsersRequest());
    // TODO: Handle 'response' of type ScimUserListResponse
}
catch (ApiException<ListScimUsersError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListScimUsersRequest](src/Airtable/Requests/Users/ListScimUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimUserListResponse](src/Airtable/Models/ScimUserListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[ListScimUsersError](src/Airtable/Errors/ListScimUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimUser&gt; ReplaceScimUser(ReplaceScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces a SCIM user resource entirely. All attributes are overwritten with the values in the request body. This is a full replacement, not a partial update.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.ReplaceScimUser(new ReplaceScimUserRequest
    {
        UserId = "some example string",
        Body = new ScimUserCreateRequest { Schemas = ["some example string"], UserName = "some example string" },
    });
    // TODO: Handle 'response' of type ScimUser
}
catch (ApiException<ReplaceScimUserError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplaceScimUserRequest](src/Airtable/Requests/Users/ReplaceScimUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimUser](src/Airtable/Models/ScimUser.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[ReplaceScimUserError](src/Airtable/Errors/ReplaceScimUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimUser&gt; UpdateScimUser(UpdateScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a SCIM user resource using SCIM PATCH operations. Supports add, replace, and remove operations on user attributes. Commonly used to activate or deactivate users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.UpdateScimUser(new UpdateScimUserRequest
    {
        UserId = "some example string",
        Body = new ScimPatchRequest { Schemas = ["some example string"], Operations = [new Operation { Op = Op.Add }] },
    });
    // TODO: Handle 'response' of type ScimUser
}
catch (ApiException<UpdateScimUserError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateScimUserRequest](src/Airtable/Requests/Users/UpdateScimUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimUser](src/Airtable/Models/ScimUser.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[UpdateScimUserError](src/Airtable/Errors/UpdateScimUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Airtable/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;WebhookCreateResponse&gt; CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook subscription for the specified base. Webhooks expire after 7 days and must be refreshed. The response includes a MAC secret used to verify webhook notification payloads. Requires OAuth authentication with the webhook:manage scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.CreateWebhook(new CreateWebhookRequest
    {
        BaseId = "some example string",
        Body = new WebhookCreateRequest { NotificationUrl = "https://example.com" },
    });
    // TODO: Handle 'response' of type WebhookCreateResponse
}
catch (ApiException<CreateWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateWebhookRequest](src/Airtable/Requests/WebhooksApi/CreateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookCreateResponse](src/Airtable/Models/WebhookCreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[CreateWebhookError](src/Airtable/Errors/CreateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an existing webhook subscription. The webhook will no longer send notifications after deletion.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.DeleteWebhook(new DeleteWebhookRequest
    {
        BaseId = "some example string",
        WebhookId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteWebhookRequest](src/Airtable/Requests/WebhooksApi/DeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[DeleteWebhookError](src/Airtable/Errors/DeleteWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookPayloadList&gt; ListWebhookPayloads(ListWebhookPayloadsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of payloads that have been generated for the specified webhook. Payloads are returned in chronological order and can be paginated using a cursor.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListWebhookPayloads(new ListWebhookPayloadsRequest
    {
        BaseId = "some example string",
        WebhookId = "some example string",
    });
    // TODO: Handle 'response' of type WebhookPayloadList
}
catch (ApiException<ListWebhookPayloadsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListWebhookPayloadsRequest](src/Airtable/Requests/WebhooksApi/ListWebhookPayloadsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookPayloadList](src/Airtable/Models/WebhookPayloadList.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[ListWebhookPayloadsError](src/Airtable/Errors/ListWebhookPayloadsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BasesWebhooksResponse&gt; ListWebhooks(ListWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all webhooks registered for the specified base. Includes webhook configuration, status, and expiration information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListWebhooks(new ListWebhooksRequest { BaseId = "some example string" });
    // TODO: Handle 'response' of type BasesWebhooksResponse
}
catch (ApiException<ListWebhooksError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListWebhooksRequest](src/Airtable/Requests/WebhooksApi/ListWebhooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BasesWebhooksResponse](src/Airtable/Models/BasesWebhooksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[ListWebhooksError](src/Airtable/Errors/ListWebhooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BasesWebhooksRefreshResponse&gt; RefreshWebhook(RefreshWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extends the expiration time of an existing webhook. Webhooks expire after 7 days of inactivity and must be periodically refreshed to remain active.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.RefreshWebhook(new RefreshWebhookRequest
    {
        BaseId = "some example string",
        WebhookId = "some example string",
    });
    // TODO: Handle 'response' of type BasesWebhooksRefreshResponse
}
catch (ApiException<RefreshWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RefreshWebhookRequest](src/Airtable/Requests/WebhooksApi/RefreshWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BasesWebhooksRefreshResponse](src/Airtable/Models/BasesWebhooksRefreshResponse.cs)</code>

**OnError**: <code>[ApiException](src/Airtable/Core/Exceptions/ApiException.cs)&lt;[RefreshWebhookError](src/Airtable/Errors/RefreshWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

