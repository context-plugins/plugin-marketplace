# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AsanaClient](src/Asana/AsanaClient.cs)

## Attachments

> Source: [Attachments](src/Asana/Api/Attachments.cs)

<details>
<summary><code>Task&lt;AttachmentsResponse&gt; CreateAttachmentForObject(CreateAttachmentForObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Attachments.CreateAttachmentForObject(new CreateAttachmentForObjectRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type AttachmentsResponse
}
catch (ApiException<CreateAttachmentForObjectError> ex)
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

<code>[CreateAttachmentForObjectRequest](src/Asana/Requests/Attachments/CreateAttachmentForObjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachmentsResponse](src/Asana/Models/AttachmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateAttachmentForObjectError](src/Asana/Errors/CreateAttachmentForObjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AttachmentsResponse1&gt; DeleteAttachment(DeleteAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific, existing attachment.

Returns an empty data record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Attachments.DeleteAttachment(new DeleteAttachmentRequest
    {
        AttachmentGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type AttachmentsResponse1
}
catch (ApiException<DeleteAttachmentError> ex)
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

<code>[DeleteAttachmentRequest](src/Asana/Requests/Attachments/DeleteAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachmentsResponse1](src/Asana/Models/AttachmentsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeleteAttachmentError](src/Asana/Errors/DeleteAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AttachmentsResponse&gt; GetAttachment(GetAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the full record for a single attachment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Attachments.GetAttachment(new GetAttachmentRequest
    {
        AttachmentGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type AttachmentsResponse
}
catch (ApiException<GetAttachmentError> ex)
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

<code>[GetAttachmentRequest](src/Asana/Requests/Attachments/GetAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachmentsResponse](src/Asana/Models/AttachmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetAttachmentError](src/Asana/Errors/GetAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AttachmentsResponse2&gt; GetAttachmentsForObject(GetAttachmentsForObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all attachments on the object.

There are three possible `parent` values for this request: `project`, `project_brief`, and `task`. For a project, an attachment refers to a file uploaded to the "Key resources" section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Attachments.GetAttachmentsForObject(new GetAttachmentsForObjectRequest
    {
        Parent = "159874",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type AttachmentsResponse2
}
catch (ApiException<GetAttachmentsForObjectError> ex)
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

<code>[GetAttachmentsForObjectRequest](src/Asana/Requests/Attachments/GetAttachmentsForObjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachmentsResponse2](src/Asana/Models/AttachmentsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetAttachmentsForObjectError](src/Asana/Errors/GetAttachmentsForObjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLogApi

> Source: [AuditLogApi](src/Asana/Api/AuditLogApi.cs)

<details>
<summary><code>Task&lt;WorkspacesAuditLogEventsResponse&gt; GetAuditLogEvents(GetAuditLogEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuditLogApi.GetAuditLogEvents(new GetAuditLogEventsRequest
    {
        WorkspaceGid = "12345",
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type WorkspacesAuditLogEventsResponse
}
catch (ApiException<GetAuditLogEventsError> ex)
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

<code>[GetAuditLogEventsRequest](src/Asana/Requests/AuditLogApi/GetAuditLogEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesAuditLogEventsResponse](src/Asana/Models/WorkspacesAuditLogEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetAuditLogEventsError](src/Asana/Errors/GetAuditLogEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BatchApi

> Source: [BatchApi](src/Asana/Api/BatchApi.cs)

<details>
<summary><code>Task&lt;BatchResponse1&gt; CreateBatchRequest(CreateBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Make multiple requests in parallel to Asana's API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BatchApi.CreateBatchRequest(new CreateBatchRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new BatchRequest1(),
    });
    // TODO: Handle 'response' of type BatchResponse1
}
catch (ApiException<CreateBatchRequestError> ex)
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

<code>[CreateBatchRequest](src/Asana/Requests/BatchApi/CreateBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchResponse1](src/Asana/Models/BatchResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateBatchRequestError](src/Asana/Errors/CreateBatchRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFields

> Source: [CustomFields](src/Asana/Api/CustomFields.cs)

<details>
<summary><code>Task&lt;CustomFieldsResponse&gt; CreateCustomField(CreateCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.CreateCustomField(new CreateCustomFieldRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type CustomFieldsResponse
}
catch (ApiException<CreateCustomFieldError> ex)
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

<code>[CreateCustomFieldRequest](src/Asana/Requests/CustomFields/CreateCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldsResponse](src/Asana/Models/CustomFieldsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateCustomFieldError](src/Asana/Errors/CreateCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldsEnumOptionsResponse&gt; CreateEnumOptionForCustomField(CreateEnumOptionForCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.CreateEnumOptionForCustomField(new CreateEnumOptionForCustomFieldRequest
    {
        CustomFieldGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type CustomFieldsEnumOptionsResponse
}
catch (ApiException<CreateEnumOptionForCustomFieldError> ex)
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

<code>[CreateEnumOptionForCustomFieldRequest](src/Asana/Requests/CustomFields/CreateEnumOptionForCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldsEnumOptionsResponse](src/Asana/Models/CustomFieldsEnumOptionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateEnumOptionForCustomFieldError](src/Asana/Errors/CreateEnumOptionForCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldsResponse3&gt; DeleteCustomField(DeleteCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.DeleteCustomField(new DeleteCustomFieldRequest
    {
        CustomFieldGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type CustomFieldsResponse3
}
catch (ApiException<DeleteCustomFieldError> ex)
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

<code>[DeleteCustomFieldRequest](src/Asana/Requests/CustomFields/DeleteCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldsResponse3](src/Asana/Models/CustomFieldsResponse3.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomFieldError](src/Asana/Errors/DeleteCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldsResponse&gt; GetCustomField(GetCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.GetCustomField(new GetCustomFieldRequest
    {
        CustomFieldGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type CustomFieldsResponse
}
catch (ApiException<GetCustomFieldError> ex)
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

<code>[GetCustomFieldRequest](src/Asana/Requests/CustomFields/GetCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldsResponse](src/Asana/Models/CustomFieldsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetCustomFieldError](src/Asana/Errors/GetCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesCustomFieldsResponse&gt; GetCustomFieldsForWorkspace(GetCustomFieldsForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the compact representation of all of the custom fields in a workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.GetCustomFieldsForWorkspace(new GetCustomFieldsForWorkspaceRequest
    {
        WorkspaceGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type WorkspacesCustomFieldsResponse
}
catch (ApiException<GetCustomFieldsForWorkspaceError> ex)
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

<code>[GetCustomFieldsForWorkspaceRequest](src/Asana/Requests/CustomFields/GetCustomFieldsForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesCustomFieldsResponse](src/Asana/Models/WorkspacesCustomFieldsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetCustomFieldsForWorkspaceError](src/Asana/Errors/GetCustomFieldsForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldsEnumOptionsInsertResponse&gt; InsertEnumOptionForCustomField(InsertEnumOptionForCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Moves a particular enum option to be either before or after another specified enum option in the custom field.
Locked custom fields can only be reordered by the user who locked the field.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.InsertEnumOptionForCustomField(new InsertEnumOptionForCustomFieldRequest
    {
        CustomFieldGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type CustomFieldsEnumOptionsInsertResponse
}
catch (ApiException<InsertEnumOptionForCustomFieldError> ex)
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

<code>[InsertEnumOptionForCustomFieldRequest](src/Asana/Requests/CustomFields/InsertEnumOptionForCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldsEnumOptionsInsertResponse](src/Asana/Models/CustomFieldsEnumOptionsInsertResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[InsertEnumOptionForCustomFieldError](src/Asana/Errors/InsertEnumOptionForCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldsResponse&gt; UpdateCustomField(UpdateCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.UpdateCustomField(new UpdateCustomFieldRequest
    {
        CustomFieldGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type CustomFieldsResponse
}
catch (ApiException<UpdateCustomFieldError> ex)
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

<code>[UpdateCustomFieldRequest](src/Asana/Requests/CustomFields/UpdateCustomFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldsResponse](src/Asana/Models/CustomFieldsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomFieldError](src/Asana/Errors/UpdateCustomFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnumOptionsResponse&gt; UpdateEnumOption(UpdateEnumOptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.UpdateEnumOption(new UpdateEnumOptionRequest
    {
        EnumOptionGid = "124578",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type EnumOptionsResponse
}
catch (ApiException<UpdateEnumOptionError> ex)
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

<code>[UpdateEnumOptionRequest](src/Asana/Requests/CustomFields/UpdateEnumOptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnumOptionsResponse](src/Asana/Models/EnumOptionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateEnumOptionError](src/Asana/Errors/UpdateEnumOptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFieldSettings

> Source: [CustomFieldSettings](src/Asana/Api/CustomFieldSettings.cs)

<details>
<summary><code>Task&lt;PortfoliosCustomFieldSettingsResponse&gt; GetCustomFieldSettingsForPortfolio(GetCustomFieldSettingsForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all of the custom fields settings on a portfolio, in compact form.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFieldSettings.GetCustomFieldSettingsForPortfolio(
        new GetCustomFieldSettingsForPortfolioRequest
        {
            PortfolioGid = "12345",
            OptPretty = true,
            OptFields = ["followers", "assignee"],
            Limit = 50,
            Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        });
    // TODO: Handle 'response' of type PortfoliosCustomFieldSettingsResponse
}
catch (ApiException<GetCustomFieldSettingsForPortfolioError> ex)
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

<code>[GetCustomFieldSettingsForPortfolioRequest](src/Asana/Requests/CustomFieldSettings/GetCustomFieldSettingsForPortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosCustomFieldSettingsResponse](src/Asana/Models/PortfoliosCustomFieldSettingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetCustomFieldSettingsForPortfolioError](src/Asana/Errors/GetCustomFieldSettingsForPortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsCustomFieldSettingsResponse&gt; GetCustomFieldSettingsForProject(GetCustomFieldSettingsForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, `opt_fields` can be used to include more data than is returned in the compact representation. See the getting started guide on input/output options for more information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFieldSettings.GetCustomFieldSettingsForProject(
        new GetCustomFieldSettingsForProjectRequest
        {
            ProjectGid = "1331",
            OptPretty = true,
            OptFields = ["followers", "assignee"],
            Limit = 50,
            Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        });
    // TODO: Handle 'response' of type ProjectsCustomFieldSettingsResponse
}
catch (ApiException<GetCustomFieldSettingsForProjectError> ex)
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

<code>[GetCustomFieldSettingsForProjectRequest](src/Asana/Requests/CustomFieldSettings/GetCustomFieldSettingsForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsCustomFieldSettingsResponse](src/Asana/Models/ProjectsCustomFieldSettingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetCustomFieldSettingsForProjectError](src/Asana/Errors/GetCustomFieldSettingsForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/Asana/Api/Events.cs)

<details>
<summary><code>Task&lt;EventsResponse&gt; GetEvents(GetEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.GetEvents(new GetEventsRequest
    {
        Resource = "12345",
        Sync = "de4774f6915eae04714ca93bb2f5ee81",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type EventsResponse
}
catch (ApiException<GetEventsError> ex)
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

<code>[GetEventsRequest](src/Asana/Requests/Events/GetEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsResponse](src/Asana/Models/EventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetEventsError](src/Asana/Errors/GetEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GoalRelationships

> Source: [GoalRelationships](src/Asana/Api/GoalRelationships.cs)

<details>
<summary><code>Task&lt;GoalsAddSupportingRelationshipResponse&gt; AddSupportingRelationship(AddSupportingRelationshipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a goal relationship by adding a supporting resource to a given goal.

Returns the newly created goal relationship record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GoalRelationships.AddSupportingRelationship(new AddSupportingRelationshipRequest
    {
        GoalGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new GoalsAddSupportingRelationshipRequest(),
    });
    // TODO: Handle 'response' of type GoalsAddSupportingRelationshipResponse
}
catch (ApiException<AddSupportingRelationshipError> ex)
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

<code>[AddSupportingRelationshipRequest](src/Asana/Requests/GoalRelationships/AddSupportingRelationshipRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalsAddSupportingRelationshipResponse](src/Asana/Models/GoalsAddSupportingRelationshipResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddSupportingRelationshipError](src/Asana/Errors/AddSupportingRelationshipError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalRelationshipsResponse&gt; GetGoalRelationship(GetGoalRelationshipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete updated goal relationship record for a single goal relationship.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GoalRelationships.GetGoalRelationship(new GetGoalRelationshipRequest
    {
        GoalRelationshipGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type GoalRelationshipsResponse
}
catch (ApiException<GetGoalRelationshipError> ex)
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

<code>[GetGoalRelationshipRequest](src/Asana/Requests/GoalRelationships/GetGoalRelationshipRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalRelationshipsResponse](src/Asana/Models/GoalRelationshipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetGoalRelationshipError](src/Asana/Errors/GetGoalRelationshipError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalRelationshipsResponse2&gt; GetGoalRelationships(GetGoalRelationshipsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns compact goal relationship records.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GoalRelationships.GetGoalRelationships(new GetGoalRelationshipsRequest
    {
        SupportedGoal = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        ResourceSubtype = "subgoal",
    });
    // TODO: Handle 'response' of type GoalRelationshipsResponse2
}
catch (ApiException<GetGoalRelationshipsError> ex)
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

<code>[GetGoalRelationshipsRequest](src/Asana/Requests/GoalRelationships/GetGoalRelationshipsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalRelationshipsResponse2](src/Asana/Models/GoalRelationshipsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetGoalRelationshipsError](src/Asana/Errors/GetGoalRelationshipsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalsRemoveSupportingRelationshipResponse&gt; RemoveSupportingRelationship(RemoveSupportingRelationshipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a goal relationship for a given parent goal.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GoalRelationships.RemoveSupportingRelationship(new RemoveSupportingRelationshipRequest
    {
        GoalGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new GoalsRemoveSupportingRelationshipRequest(),
    });
    // TODO: Handle 'response' of type GoalsRemoveSupportingRelationshipResponse
}
catch (ApiException<RemoveSupportingRelationshipError> ex)
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

<code>[RemoveSupportingRelationshipRequest](src/Asana/Requests/GoalRelationships/RemoveSupportingRelationshipRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalsRemoveSupportingRelationshipResponse](src/Asana/Models/GoalsRemoveSupportingRelationshipResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveSupportingRelationshipError](src/Asana/Errors/RemoveSupportingRelationshipError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalRelationshipsResponse&gt; UpdateGoalRelationship(UpdateGoalRelationshipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GoalRelationships.UpdateGoalRelationship(new UpdateGoalRelationshipRequest
    {
        GoalRelationshipGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new GoalRelationshipsRequest(),
    });
    // TODO: Handle 'response' of type GoalRelationshipsResponse
}
catch (ApiException<UpdateGoalRelationshipError> ex)
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

<code>[UpdateGoalRelationshipRequest](src/Asana/Requests/GoalRelationships/UpdateGoalRelationshipRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalRelationshipsResponse](src/Asana/Models/GoalRelationshipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateGoalRelationshipError](src/Asana/Errors/UpdateGoalRelationshipError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Goals

> Source: [Goals](src/Asana/Api/Goals.cs)

<details>
<summary><code>Task&lt;GoalsAddFollowersResponse&gt; AddFollowers(AddFollowersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Goals.AddFollowers(new AddFollowersOperationRequest
    {
        GoalGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new GoalsAddFollowersRequest(),
    });
    // TODO: Handle 'response' of type GoalsAddFollowersResponse
}
catch (ApiException<AddFollowersError> ex)
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

<code>[AddFollowersOperationRequest](src/Asana/Requests/Goals/AddFollowersOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalsAddFollowersResponse](src/Asana/Models/GoalsAddFollowersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddFollowersError](src/Asana/Errors/AddFollowersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalsResponse&gt; CreateGoal(CreateGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new goal in a workspace or team.

Returns the full record of the newly created goal.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Goals.CreateGoal(new CreateGoalRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Body = new GoalsRequest(),
    });
    // TODO: Handle 'response' of type GoalsResponse
}
catch (ApiException<CreateGoalError> ex)
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

<code>[CreateGoalRequest](src/Asana/Requests/Goals/CreateGoalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalsResponse](src/Asana/Models/GoalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateGoalError](src/Asana/Errors/CreateGoalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalsSetMetricResponse&gt; CreateGoalMetric(CreateGoalMetricRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Goals.CreateGoalMetric(new CreateGoalMetricRequest
    {
        GoalGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new GoalsSetMetricRequest(),
    });
    // TODO: Handle 'response' of type GoalsSetMetricResponse
}
catch (ApiException<CreateGoalMetricError> ex)
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

<code>[CreateGoalMetricRequest](src/Asana/Requests/Goals/CreateGoalMetricRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalsSetMetricResponse](src/Asana/Models/GoalsSetMetricResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateGoalMetricError](src/Asana/Errors/CreateGoalMetricError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalsResponse2&gt; DeleteGoal(DeleteGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.

Returns an empty data record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Goals.DeleteGoal(new DeleteGoalRequest
    {
        GoalGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type GoalsResponse2
}
catch (ApiException<DeleteGoalError> ex)
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

<code>[DeleteGoalRequest](src/Asana/Requests/Goals/DeleteGoalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalsResponse2](src/Asana/Models/GoalsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeleteGoalError](src/Asana/Errors/DeleteGoalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalsResponse&gt; GetGoal(GetGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete goal record for a single goal.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Goals.GetGoal(new GetGoalRequest
    {
        GoalGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type GoalsResponse
}
catch (ApiException<GetGoalError> ex)
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

<code>[GetGoalRequest](src/Asana/Requests/Goals/GetGoalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalsResponse](src/Asana/Models/GoalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetGoalError](src/Asana/Errors/GetGoalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalsResponse3&gt; GetGoals(GetGoalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns compact goal records.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Goals.GetGoals(new GetGoalsRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Portfolio = "159874",
        Project = "512241",
        IsWorkspaceLevel = false,
        Team = "31326",
        Workspace = "31326",
        TimePeriods = ["221693,506165"],
    });
    // TODO: Handle 'response' of type GoalsResponse3
}
catch (ApiException<GetGoalsError> ex)
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

<code>[GetGoalsRequest](src/Asana/Requests/Goals/GetGoalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalsResponse3](src/Asana/Models/GoalsResponse3.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetGoalsError](src/Asana/Errors/GetGoalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalsParentGoalsResponse&gt; GetParentGoalsForGoal(GetParentGoalsForGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a compact representation of all of the parent goals of a goal.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Goals.GetParentGoalsForGoal(new GetParentGoalsForGoalRequest
    {
        GoalGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type GoalsParentGoalsResponse
}
catch (ApiException<GetParentGoalsForGoalError> ex)
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

<code>[GetParentGoalsForGoalRequest](src/Asana/Requests/Goals/GetParentGoalsForGoalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalsParentGoalsResponse](src/Asana/Models/GoalsParentGoalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetParentGoalsForGoalError](src/Asana/Errors/GetParentGoalsForGoalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalsRemoveFollowersResponse&gt; RemoveFollowers(RemoveFollowersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Goals.RemoveFollowers(new RemoveFollowersOperationRequest
    {
        GoalGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new GoalsRemoveFollowersRequest(),
    });
    // TODO: Handle 'response' of type GoalsRemoveFollowersResponse
}
catch (ApiException<RemoveFollowersError> ex)
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

<code>[RemoveFollowersOperationRequest](src/Asana/Requests/Goals/RemoveFollowersOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalsRemoveFollowersResponse](src/Asana/Models/GoalsRemoveFollowersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveFollowersError](src/Asana/Errors/RemoveFollowersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalsResponse&gt; UpdateGoal(UpdateGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Goals.UpdateGoal(new UpdateGoalRequest
    {
        GoalGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new GoalsRequest(),
    });
    // TODO: Handle 'response' of type GoalsResponse
}
catch (ApiException<UpdateGoalError> ex)
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

<code>[UpdateGoalRequest](src/Asana/Requests/Goals/UpdateGoalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalsResponse](src/Asana/Models/GoalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateGoalError](src/Asana/Errors/UpdateGoalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoalsSetMetricCurrentValueResponse&gt; UpdateGoalMetric(UpdateGoalMetricRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Goals.UpdateGoalMetric(new UpdateGoalMetricRequest
    {
        GoalGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new GoalsSetMetricCurrentValueRequest(),
    });
    // TODO: Handle 'response' of type GoalsSetMetricCurrentValueResponse
}
catch (ApiException<UpdateGoalMetricError> ex)
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

<code>[UpdateGoalMetricRequest](src/Asana/Requests/Goals/UpdateGoalMetricRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoalsSetMetricCurrentValueResponse](src/Asana/Models/GoalsSetMetricCurrentValueResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateGoalMetricError](src/Asana/Errors/UpdateGoalMetricError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/Asana/Api/Jobs.cs)

<details>
<summary><code>Task&lt;JobsResponse&gt; GetJob(GetJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for a job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetJob(new GetJobRequest
    {
        JobGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type JobsResponse
}
catch (ApiException<GetJobError> ex)
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

<code>[GetJobRequest](src/Asana/Requests/Jobs/GetJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobsResponse](src/Asana/Models/JobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetJobError](src/Asana/Errors/GetJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationExports

> Source: [OrganizationExports](src/Asana/Api/OrganizationExports.cs)

<details>
<summary><code>Task&lt;OrganizationExportsResponse&gt; CreateOrganizationExport(CreateOrganizationExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationExports.CreateOrganizationExport(new CreateOrganizationExportRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Body = new OrganizationExportsRequest(),
    });
    // TODO: Handle 'response' of type OrganizationExportsResponse
}
catch (ApiException<CreateOrganizationExportError> ex)
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

<code>[CreateOrganizationExportRequest](src/Asana/Requests/OrganizationExports/CreateOrganizationExportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationExportsResponse](src/Asana/Models/OrganizationExportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateOrganizationExportError](src/Asana/Errors/CreateOrganizationExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationExportsResponse&gt; GetOrganizationExport(GetOrganizationExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details of a previously-requested Organization export.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationExports.GetOrganizationExport(new GetOrganizationExportRequest
    {
        OrganizationExportGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type OrganizationExportsResponse
}
catch (ApiException<GetOrganizationExportError> ex)
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

<code>[GetOrganizationExportRequest](src/Asana/Requests/OrganizationExports/GetOrganizationExportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationExportsResponse](src/Asana/Models/OrganizationExportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetOrganizationExportError](src/Asana/Errors/GetOrganizationExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PortfolioMemberships

> Source: [PortfolioMemberships](src/Asana/Api/PortfolioMemberships.cs)

<details>
<summary><code>Task&lt;PortfolioMembershipsResponse1&gt; GetPortfolioMembership(GetPortfolioMembershipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete portfolio record for a single portfolio membership.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PortfolioMemberships.GetPortfolioMembership(new GetPortfolioMembershipRequest
    {
        PortfolioMembershipGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type PortfolioMembershipsResponse1
}
catch (ApiException<GetPortfolioMembershipError> ex)
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

<code>[GetPortfolioMembershipRequest](src/Asana/Requests/PortfolioMemberships/GetPortfolioMembershipRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfolioMembershipsResponse1](src/Asana/Models/PortfolioMembershipsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetPortfolioMembershipError](src/Asana/Errors/GetPortfolioMembershipError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfolioMembershipsResponse&gt; GetPortfolioMemberships(GetPortfolioMembershipsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PortfolioMemberships.GetPortfolioMemberships(new GetPortfolioMembershipsRequest
    {
        Portfolio = "12345",
        Workspace = "12345",
        User = "me",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type PortfolioMembershipsResponse
}
catch (ApiException<GetPortfolioMembershipsError> ex)
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

<code>[GetPortfolioMembershipsRequest](src/Asana/Requests/PortfolioMemberships/GetPortfolioMembershipsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfolioMembershipsResponse](src/Asana/Models/PortfolioMembershipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetPortfolioMembershipsError](src/Asana/Errors/GetPortfolioMembershipsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfoliosPortfolioMembershipsResponse&gt; GetPortfolioMembershipsForPortfolio(GetPortfolioMembershipsForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact portfolio membership records for the portfolio.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PortfolioMemberships.GetPortfolioMembershipsForPortfolio(
        new GetPortfolioMembershipsForPortfolioRequest
        {
            PortfolioGid = "12345",
            User = "me",
            OptPretty = true,
            OptFields = ["followers", "assignee"],
            Limit = 50,
            Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        });
    // TODO: Handle 'response' of type PortfoliosPortfolioMembershipsResponse
}
catch (ApiException<GetPortfolioMembershipsForPortfolioError> ex)
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

<code>[GetPortfolioMembershipsForPortfolioRequest](src/Asana/Requests/PortfolioMemberships/GetPortfolioMembershipsForPortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosPortfolioMembershipsResponse](src/Asana/Models/PortfoliosPortfolioMembershipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetPortfolioMembershipsForPortfolioError](src/Asana/Errors/GetPortfolioMembershipsForPortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Portfolios

> Source: [Portfolios](src/Asana/Api/Portfolios.cs)

<details>
<summary><code>Task&lt;PortfoliosAddCustomFieldSettingResponse&gt; AddCustomFieldSettingForPortfolio(AddCustomFieldSettingForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Custom fields are associated with portfolios by way of custom field settings. This method creates a setting for the portfolio.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolios.AddCustomFieldSettingForPortfolio(
        new AddCustomFieldSettingForPortfolioRequest
        {
            PortfolioGid = "12345",
            OptPretty = true,
            Body = new PortfoliosAddCustomFieldSettingRequest(),
        });
    // TODO: Handle 'response' of type PortfoliosAddCustomFieldSettingResponse
}
catch (ApiException<AddCustomFieldSettingForPortfolioError> ex)
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

<code>[AddCustomFieldSettingForPortfolioRequest](src/Asana/Requests/Portfolios/AddCustomFieldSettingForPortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosAddCustomFieldSettingResponse](src/Asana/Models/PortfoliosAddCustomFieldSettingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddCustomFieldSettingForPortfolioError](src/Asana/Errors/AddCustomFieldSettingForPortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfoliosAddItemResponse&gt; AddItemForPortfolio(AddItemForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an item to a portfolio.
Returns an empty data block.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolios.AddItemForPortfolio(new AddItemForPortfolioRequest
    {
        PortfolioGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new PortfoliosAddItemRequest(),
    });
    // TODO: Handle 'response' of type PortfoliosAddItemResponse
}
catch (ApiException<AddItemForPortfolioError> ex)
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

<code>[AddItemForPortfolioRequest](src/Asana/Requests/Portfolios/AddItemForPortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosAddItemResponse](src/Asana/Models/PortfoliosAddItemResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddItemForPortfolioError](src/Asana/Errors/AddItemForPortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfoliosAddMembersResponse&gt; AddMembersForPortfolio(AddMembersForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified list of users as members of the portfolio.
Returns the updated portfolio record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolios.AddMembersForPortfolio(new AddMembersForPortfolioRequest
    {
        PortfolioGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new PortfoliosAddMembersRequest(),
    });
    // TODO: Handle 'response' of type PortfoliosAddMembersResponse
}
catch (ApiException<AddMembersForPortfolioError> ex)
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

<code>[AddMembersForPortfolioRequest](src/Asana/Requests/Portfolios/AddMembersForPortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosAddMembersResponse](src/Asana/Models/PortfoliosAddMembersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddMembersForPortfolioError](src/Asana/Errors/AddMembersForPortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfoliosResponse1&gt; CreatePortfolio(CreatePortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolios.CreatePortfolio(new CreatePortfolioRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new PortfoliosRequest(),
    });
    // TODO: Handle 'response' of type PortfoliosResponse1
}
catch (ApiException<CreatePortfolioError> ex)
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

<code>[CreatePortfolioRequest](src/Asana/Requests/Portfolios/CreatePortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosResponse1](src/Asana/Models/PortfoliosResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreatePortfolioError](src/Asana/Errors/CreatePortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfoliosResponse4&gt; DeletePortfolio(DeletePortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolios.DeletePortfolio(new DeletePortfolioRequest
    {
        PortfolioGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type PortfoliosResponse4
}
catch (ApiException<DeletePortfolioError> ex)
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

<code>[DeletePortfolioRequest](src/Asana/Requests/Portfolios/DeletePortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosResponse4](src/Asana/Models/PortfoliosResponse4.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeletePortfolioError](src/Asana/Errors/DeletePortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfoliosItemsResponse&gt; GetItemsForPortfolio(GetItemsForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the items in compact form in a portfolio.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolios.GetItemsForPortfolio(new GetItemsForPortfolioRequest
    {
        PortfolioGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type PortfoliosItemsResponse
}
catch (ApiException<GetItemsForPortfolioError> ex)
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

<code>[GetItemsForPortfolioRequest](src/Asana/Requests/Portfolios/GetItemsForPortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosItemsResponse](src/Asana/Models/PortfoliosItemsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetItemsForPortfolioError](src/Asana/Errors/GetItemsForPortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfoliosResponse1&gt; GetPortfolio(GetPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete portfolio record for a single portfolio.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolios.GetPortfolio(new GetPortfolioRequest
    {
        PortfolioGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type PortfoliosResponse1
}
catch (ApiException<GetPortfolioError> ex)
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

<code>[GetPortfolioRequest](src/Asana/Requests/Portfolios/GetPortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosResponse1](src/Asana/Models/PortfoliosResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetPortfolioError](src/Asana/Errors/GetPortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfoliosResponse&gt; GetPortfolios(GetPortfoliosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the portfolios in compact representation that are owned by the current API user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolios.GetPortfolios(new GetPortfoliosRequest
    {
        Workspace = "1331",
        Owner = "14916",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type PortfoliosResponse
}
catch (ApiException<GetPortfoliosError> ex)
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

<code>[GetPortfoliosRequest](src/Asana/Requests/Portfolios/GetPortfoliosRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosResponse](src/Asana/Models/PortfoliosResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetPortfoliosError](src/Asana/Errors/GetPortfoliosError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfoliosRemoveCustomFieldSettingResponse&gt; RemoveCustomFieldSettingForPortfolio(RemoveCustomFieldSettingForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a custom field setting from a portfolio.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolios.RemoveCustomFieldSettingForPortfolio(
        new RemoveCustomFieldSettingForPortfolioRequest
        {
            PortfolioGid = "12345",
            OptPretty = true,
            Body = new PortfoliosRemoveCustomFieldSettingRequest(),
        });
    // TODO: Handle 'response' of type PortfoliosRemoveCustomFieldSettingResponse
}
catch (ApiException<RemoveCustomFieldSettingForPortfolioError> ex)
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

<code>[RemoveCustomFieldSettingForPortfolioRequest](src/Asana/Requests/Portfolios/RemoveCustomFieldSettingForPortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosRemoveCustomFieldSettingResponse](src/Asana/Models/PortfoliosRemoveCustomFieldSettingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveCustomFieldSettingForPortfolioError](src/Asana/Errors/RemoveCustomFieldSettingForPortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfoliosRemoveItemResponse&gt; RemoveItemForPortfolio(RemoveItemForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an item from a portfolio.
Returns an empty data block.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolios.RemoveItemForPortfolio(new RemoveItemForPortfolioRequest
    {
        PortfolioGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new PortfoliosRemoveItemRequest(),
    });
    // TODO: Handle 'response' of type PortfoliosRemoveItemResponse
}
catch (ApiException<RemoveItemForPortfolioError> ex)
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

<code>[RemoveItemForPortfolioRequest](src/Asana/Requests/Portfolios/RemoveItemForPortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosRemoveItemResponse](src/Asana/Models/PortfoliosRemoveItemResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveItemForPortfolioError](src/Asana/Errors/RemoveItemForPortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfoliosRemoveMembersResponse&gt; RemoveMembersForPortfolio(RemoveMembersForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified list of users from members of the portfolio.
Returns the updated portfolio record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolios.RemoveMembersForPortfolio(new RemoveMembersForPortfolioRequest
    {
        PortfolioGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new PortfoliosRemoveMembersRequest(),
    });
    // TODO: Handle 'response' of type PortfoliosRemoveMembersResponse
}
catch (ApiException<RemoveMembersForPortfolioError> ex)
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

<code>[RemoveMembersForPortfolioRequest](src/Asana/Requests/Portfolios/RemoveMembersForPortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosRemoveMembersResponse](src/Asana/Models/PortfoliosRemoveMembersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveMembersForPortfolioError](src/Asana/Errors/RemoveMembersForPortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PortfoliosResponse1&gt; UpdatePortfolio(UpdatePortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolios.UpdatePortfolio(new UpdatePortfolioRequest
    {
        PortfolioGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new PortfoliosRequest(),
    });
    // TODO: Handle 'response' of type PortfoliosResponse1
}
catch (ApiException<UpdatePortfolioError> ex)
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

<code>[UpdatePortfolioRequest](src/Asana/Requests/Portfolios/UpdatePortfolioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PortfoliosResponse1](src/Asana/Models/PortfoliosResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdatePortfolioError](src/Asana/Errors/UpdatePortfolioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectTemplates

> Source: [ProjectTemplates](src/Asana/Api/ProjectTemplates.cs)

<details>
<summary><code>Task&lt;ProjectTemplatesResponse&gt; GetProjectTemplate(GetProjectTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete project template record for a single project template.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectTemplates.GetProjectTemplate(new GetProjectTemplateRequest
    {
        ProjectTemplateGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type ProjectTemplatesResponse
}
catch (ApiException<GetProjectTemplateError> ex)
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

<code>[GetProjectTemplateRequest](src/Asana/Requests/ProjectTemplates/GetProjectTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectTemplatesResponse](src/Asana/Models/ProjectTemplatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectTemplateError](src/Asana/Errors/GetProjectTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectTemplatesResponse1&gt; GetProjectTemplates(GetProjectTemplatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project template records for all project templates in the given team or workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectTemplates.GetProjectTemplates(new GetProjectTemplatesRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Workspace = "12345",
        Team = "14916",
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type ProjectTemplatesResponse1
}
catch (ApiException<GetProjectTemplatesError> ex)
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

<code>[GetProjectTemplatesRequest](src/Asana/Requests/ProjectTemplates/GetProjectTemplatesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectTemplatesResponse1](src/Asana/Models/ProjectTemplatesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectTemplatesError](src/Asana/Errors/GetProjectTemplatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamsProjectTemplatesResponse&gt; GetProjectTemplatesForTeam(GetProjectTemplatesForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project template records for all project templates in the team.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectTemplates.GetProjectTemplatesForTeam(new GetProjectTemplatesForTeamRequest
    {
        TeamGid = "159874",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TeamsProjectTemplatesResponse
}
catch (ApiException<GetProjectTemplatesForTeamError> ex)
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

<code>[GetProjectTemplatesForTeamRequest](src/Asana/Requests/ProjectTemplates/GetProjectTemplatesForTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamsProjectTemplatesResponse](src/Asana/Models/TeamsProjectTemplatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectTemplatesForTeamError](src/Asana/Errors/GetProjectTemplatesForTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectTemplatesInstantiateProjectResponse&gt; InstantiateProject(InstantiateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectTemplates.InstantiateProject(new InstantiateProjectRequest
    {
        ProjectTemplateGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type ProjectTemplatesInstantiateProjectResponse
}
catch (ApiException<InstantiateProjectError> ex)
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

<code>[InstantiateProjectRequest](src/Asana/Requests/ProjectTemplates/InstantiateProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectTemplatesInstantiateProjectResponse](src/Asana/Models/ProjectTemplatesInstantiateProjectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[InstantiateProjectError](src/Asana/Errors/InstantiateProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectBriefs

> Source: [ProjectBriefs](src/Asana/Api/ProjectBriefs.cs)

<details>
<summary><code>Task&lt;ProjectsProjectBriefsResponse&gt; CreateProjectBrief(CreateProjectBriefRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new project brief.

Returns the full record of the newly created project brief.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectBriefs.CreateProjectBrief(new CreateProjectBriefRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new ProjectsProjectBriefsRequest(),
    });
    // TODO: Handle 'response' of type ProjectsProjectBriefsResponse
}
catch (ApiException<CreateProjectBriefError> ex)
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

<code>[CreateProjectBriefRequest](src/Asana/Requests/ProjectBriefs/CreateProjectBriefRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsProjectBriefsResponse](src/Asana/Models/ProjectsProjectBriefsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateProjectBriefError](src/Asana/Errors/CreateProjectBriefError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectBriefsResponse2&gt; DeleteProjectBrief(DeleteProjectBriefRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific, existing project brief.

Returns an empty data record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectBriefs.DeleteProjectBrief(new DeleteProjectBriefRequest
    {
        ProjectBriefGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type ProjectBriefsResponse2
}
catch (ApiException<DeleteProjectBriefError> ex)
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

<code>[DeleteProjectBriefRequest](src/Asana/Requests/ProjectBriefs/DeleteProjectBriefRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBriefsResponse2](src/Asana/Models/ProjectBriefsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeleteProjectBriefError](src/Asana/Errors/DeleteProjectBriefError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectBriefsResponse&gt; GetProjectBrief(GetProjectBriefRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the full record for a project brief.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectBriefs.GetProjectBrief(new GetProjectBriefRequest
    {
        ProjectBriefGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type ProjectBriefsResponse
}
catch (ApiException<GetProjectBriefError> ex)
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

<code>[GetProjectBriefRequest](src/Asana/Requests/ProjectBriefs/GetProjectBriefRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBriefsResponse](src/Asana/Models/ProjectBriefsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectBriefError](src/Asana/Errors/GetProjectBriefError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectBriefsResponse&gt; UpdateProjectBrief(UpdateProjectBriefRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectBriefs.UpdateProjectBrief(new UpdateProjectBriefRequest
    {
        ProjectBriefGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new ProjectBriefsRequest(),
    });
    // TODO: Handle 'response' of type ProjectBriefsResponse
}
catch (ApiException<UpdateProjectBriefError> ex)
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

<code>[UpdateProjectBriefRequest](src/Asana/Requests/ProjectBriefs/UpdateProjectBriefRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBriefsResponse](src/Asana/Models/ProjectBriefsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateProjectBriefError](src/Asana/Errors/UpdateProjectBriefError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectMemberships

> Source: [ProjectMemberships](src/Asana/Api/ProjectMemberships.cs)

<details>
<summary><code>Task&lt;ProjectMembershipsResponse&gt; GetProjectMembership(GetProjectMembershipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete project record for a single project membership.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectMemberships.GetProjectMembership(new GetProjectMembershipRequest
    {
        ProjectMembershipGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type ProjectMembershipsResponse
}
catch (ApiException<GetProjectMembershipError> ex)
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

<code>[GetProjectMembershipRequest](src/Asana/Requests/ProjectMemberships/GetProjectMembershipRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectMembershipsResponse](src/Asana/Models/ProjectMembershipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectMembershipError](src/Asana/Errors/GetProjectMembershipError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsProjectMembershipsResponse&gt; GetProjectMembershipsForProject(GetProjectMembershipsForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project membership records for the project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectMemberships.GetProjectMembershipsForProject(
        new GetProjectMembershipsForProjectRequest
        {
            ProjectGid = "1331",
            User = "me",
            OptPretty = true,
            OptFields = ["followers", "assignee"],
            Limit = 50,
            Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        });
    // TODO: Handle 'response' of type ProjectsProjectMembershipsResponse
}
catch (ApiException<GetProjectMembershipsForProjectError> ex)
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

<code>[GetProjectMembershipsForProjectRequest](src/Asana/Requests/ProjectMemberships/GetProjectMembershipsForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsProjectMembershipsResponse](src/Asana/Models/ProjectsProjectMembershipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectMembershipsForProjectError](src/Asana/Errors/GetProjectMembershipsForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectStatuses

> Source: [ProjectStatuses](src/Asana/Api/ProjectStatuses.cs)

<details>
<summary><code>Task&lt;ProjectsProjectStatusesResponse1&gt; CreateProjectStatusForProject(CreateProjectStatusForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectStatuses.CreateProjectStatusForProject(new CreateProjectStatusForProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new ProjectsProjectStatusesRequest(),
    });
    // TODO: Handle 'response' of type ProjectsProjectStatusesResponse1
}
catch (ApiException<CreateProjectStatusForProjectError> ex)
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

<code>[CreateProjectStatusForProjectRequest](src/Asana/Requests/ProjectStatuses/CreateProjectStatusForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsProjectStatusesResponse1](src/Asana/Models/ProjectsProjectStatusesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateProjectStatusForProjectError](src/Asana/Errors/CreateProjectStatusForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectStatusesResponse1&gt; DeleteProjectStatus(DeleteProjectStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectStatuses.DeleteProjectStatus(new DeleteProjectStatusRequest
    {
        ProjectStatusGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type ProjectStatusesResponse1
}
catch (ApiException<DeleteProjectStatusError> ex)
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

<code>[DeleteProjectStatusRequest](src/Asana/Requests/ProjectStatuses/DeleteProjectStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectStatusesResponse1](src/Asana/Models/ProjectStatusesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeleteProjectStatusError](src/Asana/Errors/DeleteProjectStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectStatusesResponse&gt; GetProjectStatus(GetProjectStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Returns the complete record for a single status update.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectStatuses.GetProjectStatus(new GetProjectStatusRequest
    {
        ProjectStatusGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type ProjectStatusesResponse
}
catch (ApiException<GetProjectStatusError> ex)
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

<code>[GetProjectStatusRequest](src/Asana/Requests/ProjectStatuses/GetProjectStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectStatusesResponse](src/Asana/Models/ProjectStatusesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectStatusError](src/Asana/Errors/GetProjectStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsProjectStatusesResponse&gt; GetProjectStatusesForProject(GetProjectStatusesForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

*Deprecated: new integrations should prefer the `/status_updates` route.*

Returns the compact project status update records for all updates on the project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectStatuses.GetProjectStatusesForProject(new GetProjectStatusesForProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type ProjectsProjectStatusesResponse
}
catch (ApiException<GetProjectStatusesForProjectError> ex)
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

<code>[GetProjectStatusesForProjectRequest](src/Asana/Requests/ProjectStatuses/GetProjectStatusesForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsProjectStatusesResponse](src/Asana/Models/ProjectsProjectStatusesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectStatusesForProjectError](src/Asana/Errors/GetProjectStatusesForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/Asana/Api/Projects.cs)

<details>
<summary><code>Task&lt;ProjectsAddCustomFieldSettingResponse&gt; AddCustomFieldSettingForProject(AddCustomFieldSettingForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Custom fields are associated with projects by way of custom field settings. This method creates a setting for the project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.AddCustomFieldSettingForProject(new AddCustomFieldSettingForProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        Body = new ProjectsAddCustomFieldSettingRequest(),
    });
    // TODO: Handle 'response' of type ProjectsAddCustomFieldSettingResponse
}
catch (ApiException<AddCustomFieldSettingForProjectError> ex)
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

<code>[AddCustomFieldSettingForProjectRequest](src/Asana/Requests/Projects/AddCustomFieldSettingForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsAddCustomFieldSettingResponse](src/Asana/Models/ProjectsAddCustomFieldSettingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddCustomFieldSettingForProjectError](src/Asana/Errors/AddCustomFieldSettingForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsAddFollowersResponse&gt; AddFollowersForProject(AddFollowersForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation.
Returns the updated project record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.AddFollowersForProject(new AddFollowersForProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new ProjectsAddFollowersRequest(),
    });
    // TODO: Handle 'response' of type ProjectsAddFollowersResponse
}
catch (ApiException<AddFollowersForProjectError> ex)
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

<code>[AddFollowersForProjectRequest](src/Asana/Requests/Projects/AddFollowersForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsAddFollowersResponse](src/Asana/Models/ProjectsAddFollowersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddFollowersForProjectError](src/Asana/Errors/AddFollowersForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsAddMembersResponse&gt; AddMembersForProject(AddMembersForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user's default notification settings (i.e., in the "Notifcations" tab of "My Profile Settings") will override this endpoint's default behavior of setting "Tasks added" notifications to `false`.
Returns the updated project record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.AddMembersForProject(new AddMembersForProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new ProjectsAddMembersRequest(),
    });
    // TODO: Handle 'response' of type ProjectsAddMembersResponse
}
catch (ApiException<AddMembersForProjectError> ex)
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

<code>[AddMembersForProjectRequest](src/Asana/Requests/Projects/AddMembersForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsAddMembersResponse](src/Asana/Models/ProjectsAddMembersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddMembersForProjectError](src/Asana/Errors/AddMembersForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsResponse1&gt; CreateProject(CreateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.CreateProject(new CreateProjectRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new ProjectsRequest(),
    });
    // TODO: Handle 'response' of type ProjectsResponse1
}
catch (ApiException<CreateProjectError> ex)
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

<code>[CreateProjectRequest](src/Asana/Requests/Projects/CreateProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsResponse1](src/Asana/Models/ProjectsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateProjectError](src/Asana/Errors/CreateProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamsProjectsResponse1&gt; CreateProjectForTeam(CreateProjectForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a project shared with the given team.

Returns the full record of the newly created project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.CreateProjectForTeam(new CreateProjectForTeamRequest
    {
        TeamGid = "159874",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TeamsProjectsRequest(),
    });
    // TODO: Handle 'response' of type TeamsProjectsResponse1
}
catch (ApiException<CreateProjectForTeamError> ex)
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

<code>[CreateProjectForTeamRequest](src/Asana/Requests/Projects/CreateProjectForTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamsProjectsResponse1](src/Asana/Models/TeamsProjectsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateProjectForTeamError](src/Asana/Errors/CreateProjectForTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesProjectsResponse1&gt; CreateProjectForWorkspace(CreateProjectForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.CreateProjectForWorkspace(new CreateProjectForWorkspaceRequest
    {
        WorkspaceGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new WorkspacesProjectsRequest(),
    });
    // TODO: Handle 'response' of type WorkspacesProjectsResponse1
}
catch (ApiException<CreateProjectForWorkspaceError> ex)
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

<code>[CreateProjectForWorkspaceRequest](src/Asana/Requests/Projects/CreateProjectForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesProjectsResponse1](src/Asana/Models/WorkspacesProjectsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateProjectForWorkspaceError](src/Asana/Errors/CreateProjectForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsResponse4&gt; DeleteProject(DeleteProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.DeleteProject(new DeleteProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type ProjectsResponse4
}
catch (ApiException<DeleteProjectError> ex)
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

<code>[DeleteProjectRequest](src/Asana/Requests/Projects/DeleteProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsResponse4](src/Asana/Models/ProjectsResponse4.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeleteProjectError](src/Asana/Errors/DeleteProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsDuplicateResponse&gt; DuplicateProject(DuplicateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and returns a job that will asynchronously handle the duplication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.DuplicateProject(new DuplicateProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type ProjectsDuplicateResponse
}
catch (ApiException<DuplicateProjectError> ex)
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

<code>[DuplicateProjectRequest](src/Asana/Requests/Projects/DuplicateProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsDuplicateResponse](src/Asana/Models/ProjectsDuplicateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DuplicateProjectError](src/Asana/Errors/DuplicateProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsResponse1&gt; GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete project record for a single project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetProject(new GetProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type ProjectsResponse1
}
catch (ApiException<GetProjectError> ex)
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

<code>[GetProjectRequest](src/Asana/Requests/Projects/GetProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsResponse1](src/Asana/Models/ProjectsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectError](src/Asana/Errors/GetProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsResponse&gt; GetProjects(GetProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.
*Note: This endpoint may timeout for large domains. Try filtering by team!*

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetProjects(new GetProjectsRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Workspace = "1331",
        Team = "14916",
        Archived = false,
    });
    // TODO: Handle 'response' of type ProjectsResponse
}
catch (ApiException<GetProjectsError> ex)
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

<code>[GetProjectsRequest](src/Asana/Requests/Projects/GetProjectsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsResponse](src/Asana/Models/ProjectsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectsError](src/Asana/Errors/GetProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksProjectsResponse&gt; GetProjectsForTask(GetProjectsForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a compact representation of all of the projects the task is in.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetProjectsForTask(new GetProjectsForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TasksProjectsResponse
}
catch (ApiException<GetProjectsForTaskError> ex)
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

<code>[GetProjectsForTaskRequest](src/Asana/Requests/Projects/GetProjectsForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksProjectsResponse](src/Asana/Models/TasksProjectsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectsForTaskError](src/Asana/Errors/GetProjectsForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamsProjectsResponse&gt; GetProjectsForTeam(GetProjectsForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project records for all projects in the team.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetProjectsForTeam(new GetProjectsForTeamRequest
    {
        TeamGid = "159874",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Archived = false,
    });
    // TODO: Handle 'response' of type TeamsProjectsResponse
}
catch (ApiException<GetProjectsForTeamError> ex)
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

<code>[GetProjectsForTeamRequest](src/Asana/Requests/Projects/GetProjectsForTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamsProjectsResponse](src/Asana/Models/TeamsProjectsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectsForTeamError](src/Asana/Errors/GetProjectsForTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesProjectsResponse&gt; GetProjectsForWorkspace(GetProjectsForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact project records for all projects in the workspace.
*Note: This endpoint may timeout for large domains. Prefer the `/teams/{team_gid}/projects` endpoint.*

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetProjectsForWorkspace(new GetProjectsForWorkspaceRequest
    {
        WorkspaceGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Archived = false,
    });
    // TODO: Handle 'response' of type WorkspacesProjectsResponse
}
catch (ApiException<GetProjectsForWorkspaceError> ex)
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

<code>[GetProjectsForWorkspaceRequest](src/Asana/Requests/Projects/GetProjectsForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesProjectsResponse](src/Asana/Models/WorkspacesProjectsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetProjectsForWorkspaceError](src/Asana/Errors/GetProjectsForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsTaskCountsResponse&gt; GetTaskCountsForProject(GetTaskCountsForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetTaskCountsForProject(new GetTaskCountsForProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type ProjectsTaskCountsResponse
}
catch (ApiException<GetTaskCountsForProjectError> ex)
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

<code>[GetTaskCountsForProjectRequest](src/Asana/Requests/Projects/GetTaskCountsForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsTaskCountsResponse](src/Asana/Models/ProjectsTaskCountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTaskCountsForProjectError](src/Asana/Errors/GetTaskCountsForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsSaveAsTemplateResponse&gt; ProjectSaveAsTemplate(ProjectSaveAsTemplateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ProjectSaveAsTemplate(new ProjectSaveAsTemplateOperationRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new ProjectsSaveAsTemplateRequest(),
    });
    // TODO: Handle 'response' of type ProjectsSaveAsTemplateResponse
}
catch (ApiException<ProjectSaveAsTemplateError> ex)
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

<code>[ProjectSaveAsTemplateOperationRequest](src/Asana/Requests/Projects/ProjectSaveAsTemplateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsSaveAsTemplateResponse](src/Asana/Models/ProjectsSaveAsTemplateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[ProjectSaveAsTemplateError](src/Asana/Errors/ProjectSaveAsTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsRemoveCustomFieldSettingResponse&gt; RemoveCustomFieldSettingForProject(RemoveCustomFieldSettingForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a custom field setting from a project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.RemoveCustomFieldSettingForProject(
        new RemoveCustomFieldSettingForProjectRequest
        {
            ProjectGid = "1331",
            OptPretty = true,
            Body = new ProjectsRemoveCustomFieldSettingRequest(),
        });
    // TODO: Handle 'response' of type ProjectsRemoveCustomFieldSettingResponse
}
catch (ApiException<RemoveCustomFieldSettingForProjectError> ex)
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

<code>[RemoveCustomFieldSettingForProjectRequest](src/Asana/Requests/Projects/RemoveCustomFieldSettingForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsRemoveCustomFieldSettingResponse](src/Asana/Models/ProjectsRemoveCustomFieldSettingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveCustomFieldSettingForProjectError](src/Asana/Errors/RemoveCustomFieldSettingForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsRemoveFollowersResponse&gt; RemoveFollowersForProject(RemoveFollowersForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified list of users from following the project, this will not affect project membership status.
Returns the updated project record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.RemoveFollowersForProject(new RemoveFollowersForProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new ProjectsRemoveFollowersRequest(),
    });
    // TODO: Handle 'response' of type ProjectsRemoveFollowersResponse
}
catch (ApiException<RemoveFollowersForProjectError> ex)
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

<code>[RemoveFollowersForProjectRequest](src/Asana/Requests/Projects/RemoveFollowersForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsRemoveFollowersResponse](src/Asana/Models/ProjectsRemoveFollowersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveFollowersForProjectError](src/Asana/Errors/RemoveFollowersForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsRemoveMembersResponse&gt; RemoveMembersForProject(RemoveMembersForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified list of users from members of the project.
Returns the updated project record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.RemoveMembersForProject(new RemoveMembersForProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new ProjectsRemoveMembersRequest(),
    });
    // TODO: Handle 'response' of type ProjectsRemoveMembersResponse
}
catch (ApiException<RemoveMembersForProjectError> ex)
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

<code>[RemoveMembersForProjectRequest](src/Asana/Requests/Projects/RemoveMembersForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsRemoveMembersResponse](src/Asana/Models/ProjectsRemoveMembersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveMembersForProjectError](src/Asana/Errors/RemoveMembersForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsResponse1&gt; UpdateProject(UpdateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.UpdateProject(new UpdateProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new ProjectsRequest(),
    });
    // TODO: Handle 'response' of type ProjectsResponse1
}
catch (ApiException<UpdateProjectError> ex)
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

<code>[UpdateProjectRequest](src/Asana/Requests/Projects/UpdateProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsResponse1](src/Asana/Models/ProjectsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateProjectError](src/Asana/Errors/UpdateProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Rules

> Source: [Rules](src/Asana/Api/Rules.cs)

<details>
<summary><code>Task&lt;RuleTriggersRunResponse&gt; TriggerRule(TriggerRuleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a rule which uses an incoming web request trigger.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Rules.TriggerRule(new TriggerRuleRequest
    {
        RuleTriggerGid = "some example string",
        Body = new RuleTriggersRunRequest(),
    });
    // TODO: Handle 'response' of type RuleTriggersRunResponse
}
catch (ApiException<TriggerRuleError> ex)
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

<code>[TriggerRuleRequest](src/Asana/Requests/Rules/TriggerRuleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RuleTriggersRunResponse](src/Asana/Models/RuleTriggersRunResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[TriggerRuleError](src/Asana/Errors/TriggerRuleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sections

> Source: [Sections](src/Asana/Api/Sections.cs)

<details>
<summary><code>Task&lt;SectionsAddTaskResponse&gt; AddTaskForSection(AddTaskForSectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sections.AddTaskForSection(new AddTaskForSectionRequest
    {
        SectionGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new SectionsAddTaskRequest(),
    });
    // TODO: Handle 'response' of type SectionsAddTaskResponse
}
catch (ApiException<AddTaskForSectionError> ex)
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

<code>[AddTaskForSectionRequest](src/Asana/Requests/Sections/AddTaskForSectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SectionsAddTaskResponse](src/Asana/Models/SectionsAddTaskResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddTaskForSectionError](src/Asana/Errors/AddTaskForSectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsSectionsResponse1&gt; CreateSectionForProject(CreateSectionForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new section in a project.
Returns the full record of the newly created section.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sections.CreateSectionForProject(new CreateSectionForProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new ProjectsSectionsRequest(),
    });
    // TODO: Handle 'response' of type ProjectsSectionsResponse1
}
catch (ApiException<CreateSectionForProjectError> ex)
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

<code>[CreateSectionForProjectRequest](src/Asana/Requests/Sections/CreateSectionForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsSectionsResponse1](src/Asana/Models/ProjectsSectionsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateSectionForProjectError](src/Asana/Errors/CreateSectionForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SectionsResponse2&gt; DeleteSection(DeleteSectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sections.DeleteSection(new DeleteSectionRequest
    {
        SectionGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type SectionsResponse2
}
catch (ApiException<DeleteSectionError> ex)
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

<code>[DeleteSectionRequest](src/Asana/Requests/Sections/DeleteSectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SectionsResponse2](src/Asana/Models/SectionsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeleteSectionError](src/Asana/Errors/DeleteSectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SectionsResponse&gt; GetSection(GetSectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete record for a single section.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sections.GetSection(new GetSectionRequest
    {
        SectionGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type SectionsResponse
}
catch (ApiException<GetSectionError> ex)
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

<code>[GetSectionRequest](src/Asana/Requests/Sections/GetSectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SectionsResponse](src/Asana/Models/SectionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetSectionError](src/Asana/Errors/GetSectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsSectionsResponse&gt; GetSectionsForProject(GetSectionsForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all sections in the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sections.GetSectionsForProject(new GetSectionsForProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type ProjectsSectionsResponse
}
catch (ApiException<GetSectionsForProjectError> ex)
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

<code>[GetSectionsForProjectRequest](src/Asana/Requests/Sections/GetSectionsForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsSectionsResponse](src/Asana/Models/ProjectsSectionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetSectionsForProjectError](src/Asana/Errors/GetSectionsForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsSectionsInsertResponse&gt; InsertSectionForProject(InsertSectionForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sections.InsertSectionForProject(new InsertSectionForProjectRequest
    {
        ProjectGid = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new ProjectsSectionsInsertRequest(),
    });
    // TODO: Handle 'response' of type ProjectsSectionsInsertResponse
}
catch (ApiException<InsertSectionForProjectError> ex)
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

<code>[InsertSectionForProjectRequest](src/Asana/Requests/Sections/InsertSectionForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsSectionsInsertResponse](src/Asana/Models/ProjectsSectionsInsertResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[InsertSectionForProjectError](src/Asana/Errors/InsertSectionForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SectionsResponse&gt; UpdateSection(UpdateSectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sections.UpdateSection(new UpdateSectionRequest
    {
        SectionGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new SectionsRequest(),
    });
    // TODO: Handle 'response' of type SectionsResponse
}
catch (ApiException<UpdateSectionError> ex)
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

<code>[UpdateSectionRequest](src/Asana/Requests/Sections/UpdateSectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SectionsResponse](src/Asana/Models/SectionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateSectionError](src/Asana/Errors/UpdateSectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## StatusUpdates

> Source: [StatusUpdates](src/Asana/Api/StatusUpdates.cs)

<details>
<summary><code>Task&lt;StatusUpdatesResponse&gt; CreateStatusForObject(CreateStatusForObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new status update on an object.
Returns the full record of the newly created status update.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StatusUpdates.CreateStatusForObject(new CreateStatusForObjectRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Body = new StatusUpdatesRequest(),
    });
    // TODO: Handle 'response' of type StatusUpdatesResponse
}
catch (ApiException<CreateStatusForObjectError> ex)
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

<code>[CreateStatusForObjectRequest](src/Asana/Requests/StatusUpdates/CreateStatusForObjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusUpdatesResponse](src/Asana/Models/StatusUpdatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateStatusForObjectError](src/Asana/Errors/CreateStatusForObjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatusUpdatesResponse1&gt; DeleteStatus(DeleteStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific, existing status update.

Returns an empty data record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StatusUpdates.DeleteStatus(new DeleteStatusRequest
    {
        StatusGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type StatusUpdatesResponse1
}
catch (ApiException<DeleteStatusError> ex)
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

<code>[DeleteStatusRequest](src/Asana/Requests/StatusUpdates/DeleteStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusUpdatesResponse1](src/Asana/Models/StatusUpdatesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeleteStatusError](src/Asana/Errors/DeleteStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatusUpdatesResponse&gt; GetStatus(GetStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete record for a single status update.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StatusUpdates.GetStatus(new GetStatusRequest
    {
        StatusGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type StatusUpdatesResponse
}
catch (ApiException<GetStatusError> ex)
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

<code>[GetStatusRequest](src/Asana/Requests/StatusUpdates/GetStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusUpdatesResponse](src/Asana/Models/StatusUpdatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetStatusError](src/Asana/Errors/GetStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatusUpdatesResponse2&gt; GetStatusesForObject(GetStatusesForObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact status update records for all updates on the object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StatusUpdates.GetStatusesForObject(new GetStatusesForObjectRequest
    {
        Parent = "159874",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        CreatedSince = DateTimeOffset.Parse("2012-02-22T02:06:58.158Z"),
    });
    // TODO: Handle 'response' of type StatusUpdatesResponse2
}
catch (ApiException<GetStatusesForObjectError> ex)
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

<code>[GetStatusesForObjectRequest](src/Asana/Requests/StatusUpdates/GetStatusesForObjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusUpdatesResponse2](src/Asana/Models/StatusUpdatesResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetStatusesForObjectError](src/Asana/Errors/GetStatusesForObjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stories

> Source: [Stories](src/Asana/Api/Stories.cs)

<details>
<summary><code>Task&lt;TasksStoriesResponse1&gt; CreateStoryForTask(CreateStoryForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.CreateStoryForTask(new CreateStoryForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksStoriesRequest(),
    });
    // TODO: Handle 'response' of type TasksStoriesResponse1
}
catch (ApiException<CreateStoryForTaskError> ex)
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

<code>[CreateStoryForTaskRequest](src/Asana/Requests/Stories/CreateStoryForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksStoriesResponse1](src/Asana/Models/TasksStoriesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateStoryForTaskError](src/Asana/Errors/CreateStoryForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoriesResponse2&gt; DeleteStory(DeleteStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a story. A user can only delete stories they have created.

Returns an empty data record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.DeleteStory(new DeleteStoryRequest
    {
        StoryGid = "35678",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type StoriesResponse2
}
catch (ApiException<DeleteStoryError> ex)
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

<code>[DeleteStoryRequest](src/Asana/Requests/Stories/DeleteStoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoriesResponse2](src/Asana/Models/StoriesResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeleteStoryError](src/Asana/Errors/DeleteStoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksStoriesResponse&gt; GetStoriesForTask(GetStoriesForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all stories on the task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.GetStoriesForTask(new GetStoriesForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TasksStoriesResponse
}
catch (ApiException<GetStoriesForTaskError> ex)
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

<code>[GetStoriesForTaskRequest](src/Asana/Requests/Stories/GetStoriesForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksStoriesResponse](src/Asana/Models/TasksStoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetStoriesForTaskError](src/Asana/Errors/GetStoriesForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoriesResponse&gt; GetStory(GetStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for a single story.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.GetStory(new GetStoryRequest
    {
        StoryGid = "35678",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type StoriesResponse
}
catch (ApiException<GetStoryError> ex)
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

<code>[GetStoryRequest](src/Asana/Requests/Stories/GetStoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoriesResponse](src/Asana/Models/StoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetStoryError](src/Asana/Errors/GetStoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoriesResponse&gt; UpdateStory(UpdateStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of `text` and `html_text` can be specified.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stories.UpdateStory(new UpdateStoryRequest
    {
        StoryGid = "35678",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new StoriesRequest(),
    });
    // TODO: Handle 'response' of type StoriesResponse
}
catch (ApiException<UpdateStoryError> ex)
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

<code>[UpdateStoryRequest](src/Asana/Requests/Stories/UpdateStoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoriesResponse](src/Asana/Models/StoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateStoryError](src/Asana/Errors/UpdateStoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/Asana/Api/Tags.cs)

<details>
<summary><code>Task&lt;TagsResponse1&gt; CreateTag(CreateTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.CreateTag(new CreateTagRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TagsRequest(),
    });
    // TODO: Handle 'response' of type TagsResponse1
}
catch (ApiException<CreateTagError> ex)
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

<code>[CreateTagRequest](src/Asana/Requests/Tags/CreateTagRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsResponse1](src/Asana/Models/TagsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateTagError](src/Asana/Errors/CreateTagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesTagsResponse1&gt; CreateTagForWorkspace(CreateTagForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.CreateTagForWorkspace(new CreateTagForWorkspaceRequest
    {
        WorkspaceGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new WorkspacesTagsRequest(),
    });
    // TODO: Handle 'response' of type WorkspacesTagsResponse1
}
catch (ApiException<CreateTagForWorkspaceError> ex)
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

<code>[CreateTagForWorkspaceRequest](src/Asana/Requests/Tags/CreateTagForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesTagsResponse1](src/Asana/Models/WorkspacesTagsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateTagForWorkspaceError](src/Asana/Errors/CreateTagForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TagsResponse4&gt; DeleteTag(DeleteTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.DeleteTag(new DeleteTagRequest
    {
        TagGid = "11235",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TagsResponse4
}
catch (ApiException<DeleteTagError> ex)
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

<code>[DeleteTagRequest](src/Asana/Requests/Tags/DeleteTagRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsResponse4](src/Asana/Models/TagsResponse4.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeleteTagError](src/Asana/Errors/DeleteTagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TagsResponse1&gt; GetTag(GetTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete tag record for a single tag.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.GetTag(new GetTagRequest
    {
        TagGid = "11235",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TagsResponse1
}
catch (ApiException<GetTagError> ex)
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

<code>[GetTagRequest](src/Asana/Requests/Tags/GetTagRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsResponse1](src/Asana/Models/TagsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTagError](src/Asana/Errors/GetTagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TagsResponse&gt; GetTags(GetTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.GetTags(new GetTagsRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Workspace = "1331",
    });
    // TODO: Handle 'response' of type TagsResponse
}
catch (ApiException<GetTagsError> ex)
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

<code>[GetTagsRequest](src/Asana/Requests/Tags/GetTagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsResponse](src/Asana/Models/TagsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTagsError](src/Asana/Errors/GetTagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksTagsResponse&gt; GetTagsForTask(GetTagsForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a compact representation of all of the tags the task has.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.GetTagsForTask(new GetTagsForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TasksTagsResponse
}
catch (ApiException<GetTagsForTaskError> ex)
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

<code>[GetTagsForTaskRequest](src/Asana/Requests/Tags/GetTagsForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksTagsResponse](src/Asana/Models/TasksTagsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTagsForTaskError](src/Asana/Errors/GetTagsForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesTagsResponse&gt; GetTagsForWorkspace(GetTagsForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.GetTagsForWorkspace(new GetTagsForWorkspaceRequest
    {
        WorkspaceGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type WorkspacesTagsResponse
}
catch (ApiException<GetTagsForWorkspaceError> ex)
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

<code>[GetTagsForWorkspaceRequest](src/Asana/Requests/Tags/GetTagsForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesTagsResponse](src/Asana/Models/WorkspacesTagsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTagsForWorkspaceError](src/Asana/Errors/GetTagsForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TagsResponse1&gt; UpdateTag(UpdateTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.UpdateTag(new UpdateTagRequest
    {
        TagGid = "11235",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TagsResponse1
}
catch (ApiException<UpdateTagError> ex)
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

<code>[UpdateTagRequest](src/Asana/Requests/Tags/UpdateTagRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsResponse1](src/Asana/Models/TagsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateTagError](src/Asana/Errors/UpdateTagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/Asana/Api/Tasks.cs)

<details>
<summary><code>Task&lt;TasksAddDependenciesResponse&gt; AddDependenciesForTask(AddDependenciesForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.AddDependenciesForTask(new AddDependenciesForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksAddDependenciesRequest(),
    });
    // TODO: Handle 'response' of type TasksAddDependenciesResponse
}
catch (ApiException<AddDependenciesForTaskError> ex)
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

<code>[AddDependenciesForTaskRequest](src/Asana/Requests/Tasks/AddDependenciesForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksAddDependenciesResponse](src/Asana/Models/TasksAddDependenciesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddDependenciesForTaskError](src/Asana/Errors/AddDependenciesForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksAddDependentsResponse&gt; AddDependentsForTask(AddDependentsForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.AddDependentsForTask(new AddDependentsForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksAddDependentsRequest(),
    });
    // TODO: Handle 'response' of type TasksAddDependentsResponse
}
catch (ApiException<AddDependentsForTaskError> ex)
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

<code>[AddDependentsForTaskRequest](src/Asana/Requests/Tasks/AddDependentsForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksAddDependentsResponse](src/Asana/Models/TasksAddDependentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddDependentsForTaskError](src/Asana/Errors/AddDependentsForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksAddFollowersResponse&gt; AddFollowersForTask(AddFollowersForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.AddFollowersForTask(new AddFollowersForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksAddFollowersRequest(),
    });
    // TODO: Handle 'response' of type TasksAddFollowersResponse
}
catch (ApiException<AddFollowersForTaskError> ex)
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

<code>[AddFollowersForTaskRequest](src/Asana/Requests/Tasks/AddFollowersForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksAddFollowersResponse](src/Asana/Models/TasksAddFollowersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddFollowersForTaskError](src/Asana/Errors/AddFollowersForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksAddProjectResponse&gt; AddProjectForTask(AddProjectForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.AddProjectForTask(new AddProjectForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksAddProjectRequest(),
    });
    // TODO: Handle 'response' of type TasksAddProjectResponse
}
catch (ApiException<AddProjectForTaskError> ex)
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

<code>[AddProjectForTaskRequest](src/Asana/Requests/Tasks/AddProjectForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksAddProjectResponse](src/Asana/Models/TasksAddProjectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddProjectForTaskError](src/Asana/Errors/AddProjectForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksAddTagResponse&gt; AddTagForTask(AddTagForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a tag to a task. Returns an empty data block.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.AddTagForTask(new AddTagForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksAddTagRequest(),
    });
    // TODO: Handle 'response' of type TasksAddTagResponse
}
catch (ApiException<AddTagForTaskError> ex)
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

<code>[AddTagForTaskRequest](src/Asana/Requests/Tasks/AddTagForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksAddTagResponse](src/Asana/Models/TasksAddTagResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddTagForTaskError](src/Asana/Errors/AddTagForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksSubtasksResponse1&gt; CreateSubtaskForTask(CreateSubtaskForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.CreateSubtaskForTask(new CreateSubtaskForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksSubtasksRequest(),
    });
    // TODO: Handle 'response' of type TasksSubtasksResponse1
}
catch (ApiException<CreateSubtaskForTaskError> ex)
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

<code>[CreateSubtaskForTaskRequest](src/Asana/Requests/Tasks/CreateSubtaskForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksSubtasksResponse1](src/Asana/Models/TasksSubtasksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateSubtaskForTaskError](src/Asana/Errors/CreateSubtaskForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksResponse1&gt; CreateTask(CreateTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.CreateTask(new CreateTaskRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksRequest(),
    });
    // TODO: Handle 'response' of type TasksResponse1
}
catch (ApiException<CreateTaskError> ex)
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

<code>[CreateTaskRequest](src/Asana/Requests/Tasks/CreateTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksResponse1](src/Asana/Models/TasksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateTaskError](src/Asana/Errors/CreateTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksResponse4&gt; DeleteTask(DeleteTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.DeleteTask(new DeleteTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type TasksResponse4
}
catch (ApiException<DeleteTaskError> ex)
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

<code>[DeleteTaskRequest](src/Asana/Requests/Tasks/DeleteTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksResponse4](src/Asana/Models/TasksResponse4.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeleteTaskError](src/Asana/Errors/DeleteTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksDuplicateResponse&gt; DuplicateTask(DuplicateTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and returns a job that will asynchronously handle the duplication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.DuplicateTask(new DuplicateTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksDuplicateRequest(),
    });
    // TODO: Handle 'response' of type TasksDuplicateResponse
}
catch (ApiException<DuplicateTaskError> ex)
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

<code>[DuplicateTaskRequest](src/Asana/Requests/Tasks/DuplicateTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksDuplicateResponse](src/Asana/Models/TasksDuplicateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DuplicateTaskError](src/Asana/Errors/DuplicateTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksDependenciesResponse&gt; GetDependenciesForTask(GetDependenciesForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact representations of all of the dependencies of a task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetDependenciesForTask(new GetDependenciesForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TasksDependenciesResponse
}
catch (ApiException<GetDependenciesForTaskError> ex)
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

<code>[GetDependenciesForTaskRequest](src/Asana/Requests/Tasks/GetDependenciesForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksDependenciesResponse](src/Asana/Models/TasksDependenciesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetDependenciesForTaskError](src/Asana/Errors/GetDependenciesForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksDependentsResponse&gt; GetDependentsForTask(GetDependentsForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact representations of all of the dependents of a task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetDependentsForTask(new GetDependentsForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TasksDependentsResponse
}
catch (ApiException<GetDependentsForTaskError> ex)
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

<code>[GetDependentsForTaskRequest](src/Asana/Requests/Tasks/GetDependentsForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksDependentsResponse](src/Asana/Models/TasksDependentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetDependentsForTaskError](src/Asana/Errors/GetDependentsForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksSubtasksResponse&gt; GetSubtasksForTask(GetSubtasksForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a compact representation of all of the subtasks of a task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetSubtasksForTask(new GetSubtasksForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TasksSubtasksResponse
}
catch (ApiException<GetSubtasksForTaskError> ex)
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

<code>[GetSubtasksForTaskRequest](src/Asana/Requests/Tasks/GetSubtasksForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksSubtasksResponse](src/Asana/Models/TasksSubtasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetSubtasksForTaskError](src/Asana/Errors/GetSubtasksForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksResponse1&gt; GetTask(GetTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete task record for a single task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTask(new GetTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type TasksResponse1
}
catch (ApiException<GetTaskError> ex)
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

<code>[GetTaskRequest](src/Asana/Requests/Tasks/GetTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksResponse1](src/Asana/Models/TasksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTaskError](src/Asana/Errors/GetTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksResponse&gt; GetTasks(GetTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a `project` or `tag` if you do not specify `assignee` and `workspace`.

For more complex task retrieval, use workspaces/{workspace_gid}/tasks/search.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTasks(new GetTasksRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Assignee = "14641",
        Project = "321654",
        Section = "321654",
        Workspace = "321654",
        CompletedSince = DateTimeOffset.Parse("2012-02-22T02:06:58.158Z"),
        ModifiedSince = DateTimeOffset.Parse("2012-02-22T02:06:58.158Z"),
    });
    // TODO: Handle 'response' of type TasksResponse
}
catch (ApiException<GetTasksError> ex)
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

<code>[GetTasksRequest](src/Asana/Requests/Tasks/GetTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksResponse](src/Asana/Models/TasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTasksError](src/Asana/Errors/GetTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsTasksResponse&gt; GetTasksForProject(GetTasksForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTasksForProject(new GetTasksForProjectRequest
    {
        ProjectGid = "1331",
        CompletedSince = "2012-02-22T02:06:58.158Z",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type ProjectsTasksResponse
}
catch (ApiException<GetTasksForProjectError> ex)
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

<code>[GetTasksForProjectRequest](src/Asana/Requests/Tasks/GetTasksForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsTasksResponse](src/Asana/Models/ProjectsTasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTasksForProjectError](src/Asana/Errors/GetTasksForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SectionsTasksResponse&gt; GetTasksForSection(GetTasksForSectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

*Board view only*: Returns the compact section records for all tasks within the given section.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTasksForSection(new GetTasksForSectionRequest
    {
        SectionGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type SectionsTasksResponse
}
catch (ApiException<GetTasksForSectionError> ex)
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

<code>[GetTasksForSectionRequest](src/Asana/Requests/Tasks/GetTasksForSectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SectionsTasksResponse](src/Asana/Models/SectionsTasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTasksForSectionError](src/Asana/Errors/GetTasksForSectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TagsTasksResponse&gt; GetTasksForTag(GetTasksForTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTasksForTag(new GetTasksForTagRequest
    {
        TagGid = "11235",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TagsTasksResponse
}
catch (ApiException<GetTasksForTagError> ex)
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

<code>[GetTasksForTagRequest](src/Asana/Requests/Tasks/GetTasksForTagRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsTasksResponse](src/Asana/Models/TagsTasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTasksForTagError](src/Asana/Errors/GetTasksForTagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UserTaskListsTasksResponse&gt; GetTasksForUserTaskList(GetTasksForUserTaskListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTasksForUserTaskList(new GetTasksForUserTaskListRequest
    {
        UserTaskListGid = "12345",
        CompletedSince = "2012-02-22T02:06:58.158Z",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type UserTaskListsTasksResponse
}
catch (ApiException<GetTasksForUserTaskListError> ex)
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

<code>[GetTasksForUserTaskListRequest](src/Asana/Requests/Tasks/GetTasksForUserTaskListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserTaskListsTasksResponse](src/Asana/Models/UserTaskListsTasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTasksForUserTaskListError](src/Asana/Errors/GetTasksForUserTaskListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksRemoveDependenciesResponse&gt; RemoveDependenciesForTask(RemoveDependenciesForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unlinks a set of dependencies from this task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.RemoveDependenciesForTask(new RemoveDependenciesForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksRemoveDependenciesRequest(),
    });
    // TODO: Handle 'response' of type TasksRemoveDependenciesResponse
}
catch (ApiException<RemoveDependenciesForTaskError> ex)
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

<code>[RemoveDependenciesForTaskRequest](src/Asana/Requests/Tasks/RemoveDependenciesForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksRemoveDependenciesResponse](src/Asana/Models/TasksRemoveDependenciesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveDependenciesForTaskError](src/Asana/Errors/RemoveDependenciesForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksRemoveDependentsResponse&gt; RemoveDependentsForTask(RemoveDependentsForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unlinks a set of dependents from this task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.RemoveDependentsForTask(new RemoveDependentsForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksRemoveDependentsRequest(),
    });
    // TODO: Handle 'response' of type TasksRemoveDependentsResponse
}
catch (ApiException<RemoveDependentsForTaskError> ex)
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

<code>[RemoveDependentsForTaskRequest](src/Asana/Requests/Tasks/RemoveDependentsForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksRemoveDependentsResponse](src/Asana/Models/TasksRemoveDependentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveDependentsForTaskError](src/Asana/Errors/RemoveDependentsForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksRemoveFollowersResponse&gt; RemoveFollowerForTask(RemoveFollowerForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.RemoveFollowerForTask(new RemoveFollowerForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksRemoveFollowersRequest(),
    });
    // TODO: Handle 'response' of type TasksRemoveFollowersResponse
}
catch (ApiException<RemoveFollowerForTaskError> ex)
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

<code>[RemoveFollowerForTaskRequest](src/Asana/Requests/Tasks/RemoveFollowerForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksRemoveFollowersResponse](src/Asana/Models/TasksRemoveFollowersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveFollowerForTaskError](src/Asana/Errors/RemoveFollowerForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksRemoveProjectResponse&gt; RemoveProjectForTask(RemoveProjectForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.RemoveProjectForTask(new RemoveProjectForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksRemoveProjectRequest(),
    });
    // TODO: Handle 'response' of type TasksRemoveProjectResponse
}
catch (ApiException<RemoveProjectForTaskError> ex)
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

<code>[RemoveProjectForTaskRequest](src/Asana/Requests/Tasks/RemoveProjectForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksRemoveProjectResponse](src/Asana/Models/TasksRemoveProjectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveProjectForTaskError](src/Asana/Errors/RemoveProjectForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksRemoveTagResponse&gt; RemoveTagForTask(RemoveTagForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a tag from a task. Returns an empty data block.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.RemoveTagForTask(new RemoveTagForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksRemoveTagRequest(),
    });
    // TODO: Handle 'response' of type TasksRemoveTagResponse
}
catch (ApiException<RemoveTagForTaskError> ex)
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

<code>[RemoveTagForTaskRequest](src/Asana/Requests/Tasks/RemoveTagForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksRemoveTagResponse](src/Asana/Models/TasksRemoveTagResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveTagForTaskError](src/Asana/Errors/RemoveTagForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesTasksSearchResponse&gt; SearchTasksForWorkspace(SearchTasksForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.SearchTasksForWorkspace(new SearchTasksForWorkspaceRequest
    {
        WorkspaceGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Text = "Bug",
        AssigneeAny = "12345,23456,34567",
        AssigneeNot = "12345,23456,34567",
        PortfoliosAny = "12345,23456,34567",
        ProjectsAny = "12345,23456,34567",
        ProjectsNot = "12345,23456,34567",
        ProjectsAll = "12345,23456,34567",
        SectionsAny = "12345,23456,34567",
        SectionsNot = "12345,23456,34567",
        SectionsAll = "12345,23456,34567",
        TagsAny = "12345,23456,34567",
        TagsNot = "12345,23456,34567",
        TagsAll = "12345,23456,34567",
        TeamsAny = "12345,23456,34567",
        FollowersNot = "12345,23456,34567",
        CreatedByAny = "12345,23456,34567",
        CreatedByNot = "12345,23456,34567",
        AssignedByAny = "12345,23456,34567",
        AssignedByNot = "12345,23456,34567",
        LikedByNot = "12345,23456,34567",
        CommentedOnByNot = "12345,23456,34567",
        DueOnBefore = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        DueOnAfter = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        DueOn = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        DueAtBefore = DateTimeOffset.Parse("2019-04-15T01:01:46.055Z"),
        DueAtAfter = DateTimeOffset.Parse("2019-04-15T01:01:46.055Z"),
        StartOnBefore = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        StartOnAfter = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        StartOn = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        CreatedOnBefore = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        CreatedOnAfter = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        CreatedOn = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        CreatedAtBefore = DateTimeOffset.Parse("2019-04-15T01:01:46.055Z"),
        CreatedAtAfter = DateTimeOffset.Parse("2019-04-15T01:01:46.055Z"),
        CompletedOnBefore = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        CompletedOnAfter = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        CompletedOn = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        CompletedAtBefore = DateTimeOffset.Parse("2019-04-15T01:01:46.055Z"),
        CompletedAtAfter = DateTimeOffset.Parse("2019-04-15T01:01:46.055Z"),
        ModifiedOnBefore = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        ModifiedOnAfter = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        ModifiedOn = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        ModifiedAtBefore = DateTimeOffset.Parse("2019-04-15T01:01:46.055Z"),
        ModifiedAtAfter = DateTimeOffset.Parse("2019-04-15T01:01:46.055Z"),
        IsBlocking = false,
        IsBlocked = false,
        HasAttachment = false,
        Completed = false,
        IsSubtask = false,
        SortBy = SortBy.Likes,
        SortAscending = true,
    });
    // TODO: Handle 'response' of type WorkspacesTasksSearchResponse
}
catch (ApiException<SearchTasksForWorkspaceError> ex)
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

<code>[SearchTasksForWorkspaceRequest](src/Asana/Requests/Tasks/SearchTasksForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesTasksSearchResponse](src/Asana/Models/WorkspacesTasksSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[SearchTasksForWorkspaceError](src/Asana/Errors/SearchTasksForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksSetParentResponse&gt; SetParentForTask(SetParentForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

parent, or no parent task at all. Returns an empty data block. When using `insert_before` and `insert_after`, at most one of those two options can be specified, and they must already be subtasks of the parent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.SetParentForTask(new SetParentForTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksSetParentRequest(),
    });
    // TODO: Handle 'response' of type TasksSetParentResponse
}
catch (ApiException<SetParentForTaskError> ex)
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

<code>[SetParentForTaskRequest](src/Asana/Requests/Tasks/SetParentForTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksSetParentResponse](src/Asana/Models/TasksSetParentResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[SetParentForTaskError](src/Asana/Errors/SetParentForTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksResponse1&gt; UpdateTask(UpdateTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.UpdateTask(new UpdateTaskRequest
    {
        TaskGid = "321654",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TasksRequest(),
    });
    // TODO: Handle 'response' of type TasksResponse1
}
catch (ApiException<UpdateTaskError> ex)
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

<code>[UpdateTaskRequest](src/Asana/Requests/Tasks/UpdateTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksResponse1](src/Asana/Models/TasksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateTaskError](src/Asana/Errors/UpdateTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TeamMemberships

> Source: [TeamMemberships](src/Asana/Api/TeamMemberships.cs)

<details>
<summary><code>Task&lt;TeamMembershipsResponse&gt; GetTeamMembership(GetTeamMembershipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete team membership record for a single team membership.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TeamMemberships.GetTeamMembership(new GetTeamMembershipRequest
    {
        TeamMembershipGid = "724362",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type TeamMembershipsResponse
}
catch (ApiException<GetTeamMembershipError> ex)
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

<code>[GetTeamMembershipRequest](src/Asana/Requests/TeamMemberships/GetTeamMembershipRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamMembershipsResponse](src/Asana/Models/TeamMembershipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTeamMembershipError](src/Asana/Errors/GetTeamMembershipError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamMembershipsResponse1&gt; GetTeamMemberships(GetTeamMembershipsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns compact team membership records.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TeamMemberships.GetTeamMemberships(new GetTeamMembershipsRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Team = "159874",
        User = "512241",
        Workspace = "31326",
    });
    // TODO: Handle 'response' of type TeamMembershipsResponse1
}
catch (ApiException<GetTeamMembershipsError> ex)
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

<code>[GetTeamMembershipsRequest](src/Asana/Requests/TeamMemberships/GetTeamMembershipsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamMembershipsResponse1](src/Asana/Models/TeamMembershipsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTeamMembershipsError](src/Asana/Errors/GetTeamMembershipsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamsTeamMembershipsResponse&gt; GetTeamMembershipsForTeam(GetTeamMembershipsForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact team memberships for the team.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TeamMemberships.GetTeamMembershipsForTeam(new GetTeamMembershipsForTeamRequest
    {
        TeamGid = "159874",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TeamsTeamMembershipsResponse
}
catch (ApiException<GetTeamMembershipsForTeamError> ex)
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

<code>[GetTeamMembershipsForTeamRequest](src/Asana/Requests/TeamMemberships/GetTeamMembershipsForTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamsTeamMembershipsResponse](src/Asana/Models/TeamsTeamMembershipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTeamMembershipsForTeamError](src/Asana/Errors/GetTeamMembershipsForTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsersTeamMembershipsResponse&gt; GetTeamMembershipsForUser(GetTeamMembershipsForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact team membership records for the user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TeamMemberships.GetTeamMembershipsForUser(new GetTeamMembershipsForUserRequest
    {
        UserGid = "me",
        Workspace = "31326",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type UsersTeamMembershipsResponse
}
catch (ApiException<GetTeamMembershipsForUserError> ex)
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

<code>[GetTeamMembershipsForUserRequest](src/Asana/Requests/TeamMemberships/GetTeamMembershipsForUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersTeamMembershipsResponse](src/Asana/Models/UsersTeamMembershipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTeamMembershipsForUserError](src/Asana/Errors/GetTeamMembershipsForUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Teams

> Source: [Teams](src/Asana/Api/Teams.cs)

<details>
<summary><code>Task&lt;TeamsAddUserResponse&gt; AddUserForTeam(AddUserForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.

Returns the complete team membership record for the newly added user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.AddUserForTeam(new AddUserForTeamRequest
    {
        TeamGid = "159874",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TeamsAddUserRequest(),
    });
    // TODO: Handle 'response' of type TeamsAddUserResponse
}
catch (ApiException<AddUserForTeamError> ex)
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

<code>[AddUserForTeamRequest](src/Asana/Requests/Teams/AddUserForTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamsAddUserResponse](src/Asana/Models/TeamsAddUserResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddUserForTeamError](src/Asana/Errors/AddUserForTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamsResponse&gt; CreateTeam(CreateTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a team within the current workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.CreateTeam(new CreateTeamRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Body = new TeamsRequest(),
    });
    // TODO: Handle 'response' of type TeamsResponse
}
catch (ApiException<CreateTeamError> ex)
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

<code>[CreateTeamRequest](src/Asana/Requests/Teams/CreateTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamsResponse](src/Asana/Models/TeamsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateTeamError](src/Asana/Errors/CreateTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamsResponse&gt; GetTeam(GetTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for a single team.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.GetTeam(new GetTeamRequest
    {
        TeamGid = "159874",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TeamsResponse
}
catch (ApiException<GetTeamError> ex)
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

<code>[GetTeamRequest](src/Asana/Requests/Teams/GetTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamsResponse](src/Asana/Models/TeamsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTeamError](src/Asana/Errors/GetTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsersTeamsResponse&gt; GetTeamsForUser(GetTeamsForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all teams to which the given user is assigned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.GetTeamsForUser(new GetTeamsForUserRequest
    {
        UserGid = "me",
        Organization = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type UsersTeamsResponse
}
catch (ApiException<GetTeamsForUserError> ex)
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

<code>[GetTeamsForUserRequest](src/Asana/Requests/Teams/GetTeamsForUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersTeamsResponse](src/Asana/Models/UsersTeamsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTeamsForUserError](src/Asana/Errors/GetTeamsForUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesTeamsResponse&gt; GetTeamsForWorkspace(GetTeamsForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all teams in the workspace visible to the authorized user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.GetTeamsForWorkspace(new GetTeamsForWorkspaceRequest
    {
        WorkspaceGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type WorkspacesTeamsResponse
}
catch (ApiException<GetTeamsForWorkspaceError> ex)
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

<code>[GetTeamsForWorkspaceRequest](src/Asana/Requests/Teams/GetTeamsForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesTeamsResponse](src/Asana/Models/WorkspacesTeamsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTeamsForWorkspaceError](src/Asana/Errors/GetTeamsForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamsRemoveUserResponse&gt; RemoveUserForTeam(RemoveUserForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The user making this call must be a member of the team in order to remove themselves or others.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.RemoveUserForTeam(new RemoveUserForTeamRequest
    {
        TeamGid = "159874",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new TeamsRemoveUserRequest(),
    });
    // TODO: Handle 'response' of type TeamsRemoveUserResponse
}
catch (ApiException<RemoveUserForTeamError> ex)
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

<code>[RemoveUserForTeamRequest](src/Asana/Requests/Teams/RemoveUserForTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamsRemoveUserResponse](src/Asana/Models/TeamsRemoveUserResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveUserForTeamError](src/Asana/Errors/RemoveUserForTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamsResponse&gt; UpdateTeam(UpdateTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a team within the current workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.UpdateTeam(new UpdateTeamRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Body = new TeamsRequest(),
    });
    // TODO: Handle 'response' of type TeamsResponse
}
catch (ApiException<UpdateTeamError> ex)
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

<code>[UpdateTeamRequest](src/Asana/Requests/Teams/UpdateTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamsResponse](src/Asana/Models/TeamsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateTeamError](src/Asana/Errors/UpdateTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TimePeriods

> Source: [TimePeriods](src/Asana/Api/TimePeriods.cs)

<details>
<summary><code>Task&lt;TimePeriodsResponse&gt; GetTimePeriod(GetTimePeriodRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for a single time period.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TimePeriods.GetTimePeriod(new GetTimePeriodRequest
    {
        TimePeriodGid = "917392",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type TimePeriodsResponse
}
catch (ApiException<GetTimePeriodError> ex)
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

<code>[GetTimePeriodRequest](src/Asana/Requests/TimePeriods/GetTimePeriodRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TimePeriodsResponse](src/Asana/Models/TimePeriodsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTimePeriodError](src/Asana/Errors/GetTimePeriodError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TimePeriodsResponse1&gt; GetTimePeriods(GetTimePeriodsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns compact time period records.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TimePeriods.GetTimePeriods(new GetTimePeriodsRequest
    {
        Workspace = "31326",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        StartOn = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
        EndOn = DateTimeOffset.Parse("2019-09-15T00:00:00Z"),
    });
    // TODO: Handle 'response' of type TimePeriodsResponse1
}
catch (ApiException<GetTimePeriodsError> ex)
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

<code>[GetTimePeriodsRequest](src/Asana/Requests/TimePeriods/GetTimePeriodsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TimePeriodsResponse1](src/Asana/Models/TimePeriodsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetTimePeriodsError](src/Asana/Errors/GetTimePeriodsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Typeahead

> Source: [Typeahead](src/Asana/Api/Typeahead.cs)

<details>
<summary><code>Task&lt;WorkspacesTypeaheadResponse&gt; TypeaheadForWorkspace(TypeaheadForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Typeahead.TypeaheadForWorkspace(new TypeaheadForWorkspaceRequest
    {
        WorkspaceGid = "12345",
        ResourceType = ResourceType.CustomField,
        Query = "Greg",
        Count = 20,
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type WorkspacesTypeaheadResponse
}
catch (ApiException<TypeaheadForWorkspaceError> ex)
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

<code>[TypeaheadForWorkspaceRequest](src/Asana/Requests/Typeahead/TypeaheadForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesTypeaheadResponse](src/Asana/Models/WorkspacesTypeaheadResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[TypeaheadForWorkspaceError](src/Asana/Errors/TypeaheadForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UserTaskLists

> Source: [UserTaskLists](src/Asana/Api/UserTaskLists.cs)

<details>
<summary><code>Task&lt;UserTaskListsResponse&gt; GetUserTaskList(GetUserTaskListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for a user task list.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UserTaskLists.GetUserTaskList(new GetUserTaskListRequest
    {
        UserTaskListGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type UserTaskListsResponse
}
catch (ApiException<GetUserTaskListError> ex)
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

<code>[GetUserTaskListRequest](src/Asana/Requests/UserTaskLists/GetUserTaskListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserTaskListsResponse](src/Asana/Models/UserTaskListsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetUserTaskListError](src/Asana/Errors/GetUserTaskListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsersUserTaskListResponse&gt; GetUserTaskListForUser(GetUserTaskListForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for a user's task list.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UserTaskLists.GetUserTaskListForUser(new GetUserTaskListForUserRequest
    {
        UserGid = "me",
        Workspace = "1234",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type UsersUserTaskListResponse
}
catch (ApiException<GetUserTaskListForUserError> ex)
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

<code>[GetUserTaskListForUserRequest](src/Asana/Requests/UserTaskLists/GetUserTaskListForUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersUserTaskListResponse](src/Asana/Models/UsersUserTaskListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetUserTaskListForUserError](src/Asana/Errors/GetUserTaskListForUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/Asana/Api/Users.cs)

<details>
<summary><code>Task&lt;UsersFavoritesResponse&gt; GetFavoritesForUser(GetFavoritesForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all of a user's favorites in the given workspace, of the given type.
Results are given in order (The same order as Asana's sidebar).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetFavoritesForUser(new GetFavoritesForUserRequest
    {
        UserGid = "me",
        ResourceType = ResourceTypeAsanaUsersApi.Portfolio,
        Workspace = "1234",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type UsersFavoritesResponse
}
catch (ApiException<GetFavoritesForUserError> ex)
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

<code>[GetFavoritesForUserRequest](src/Asana/Requests/Users/GetFavoritesForUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersFavoritesResponse](src/Asana/Models/UsersFavoritesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetFavoritesForUserError](src/Asana/Errors/GetFavoritesForUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsersResponse1&gt; GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full user record for the single user with the provided ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUser(new GetUserRequest
    {
        UserGid = "me",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type UsersResponse1
}
catch (ApiException<GetUserError> ex)
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

<code>[GetUserRequest](src/Asana/Requests/Users/GetUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersResponse1](src/Asana/Models/UsersResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetUserError](src/Asana/Errors/GetUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsersResponse&gt; GetUsers(GetUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter.
Results are sorted by user ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUsers(new GetUsersRequest
    {
        Workspace = "1331",
        Team = "15627",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type UsersResponse
}
catch (ApiException<GetUsersError> ex)
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

<code>[GetUsersRequest](src/Asana/Requests/Users/GetUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersResponse](src/Asana/Models/UsersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetUsersError](src/Asana/Errors/GetUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamsUsersResponse&gt; GetUsersForTeam(GetUsersForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all users that are members of the team.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUsersForTeam(new GetUsersForTeamRequest
    {
        TeamGid = "159874",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type TeamsUsersResponse
}
catch (ApiException<GetUsersForTeamError> ex)
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

<code>[GetUsersForTeamRequest](src/Asana/Requests/Users/GetUsersForTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamsUsersResponse](src/Asana/Models/TeamsUsersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetUsersForTeamError](src/Asana/Errors/GetUsersForTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesUsersResponse&gt; GetUsersForWorkspace(GetUsersForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all users in the specified workspace or organization.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUsersForWorkspace(new GetUsersForWorkspaceRequest
    {
        WorkspaceGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type WorkspacesUsersResponse
}
catch (ApiException<GetUsersForWorkspaceError> ex)
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

<code>[GetUsersForWorkspaceRequest](src/Asana/Requests/Users/GetUsersForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesUsersResponse](src/Asana/Models/WorkspacesUsersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetUsersForWorkspaceError](src/Asana/Errors/GetUsersForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Asana/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;WebhooksResponse1&gt; CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.CreateWebhook(new CreateWebhookRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new WebhooksRequest(),
    });
    // TODO: Handle 'response' of type WebhooksResponse1
}
catch (ApiException<CreateWebhookError> ex)
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

<code>[CreateWebhookRequest](src/Asana/Requests/WebhooksApi/CreateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksResponse1](src/Asana/Models/WebhooksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[CreateWebhookError](src/Asana/Errors/CreateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhooksResponse4&gt; DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.

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
        WebhookGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type WebhooksResponse4
}
catch (ApiException<DeleteWebhookError> ex)
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

<code>[DeleteWebhookRequest](src/Asana/Requests/WebhooksApi/DeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksResponse4](src/Asana/Models/WebhooksResponse4.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[DeleteWebhookError](src/Asana/Errors/DeleteWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhooksResponse1&gt; GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full record for the given webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhook(new GetWebhookRequest
    {
        WebhookGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type WebhooksResponse1
}
catch (ApiException<GetWebhookError> ex)
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

<code>[GetWebhookRequest](src/Asana/Requests/WebhooksApi/GetWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksResponse1](src/Asana/Models/WebhooksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetWebhookError](src/Asana/Errors/GetWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhooksResponse&gt; GetWebhooks(GetWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhooks(new GetWebhooksRequest
    {
        Workspace = "1331",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        Resource = "51648",
    });
    // TODO: Handle 'response' of type WebhooksResponse
}
catch (ApiException<GetWebhooksError> ex)
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

<code>[GetWebhooksRequest](src/Asana/Requests/WebhooksApi/GetWebhooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksResponse](src/Asana/Models/WebhooksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetWebhooksError](src/Asana/Errors/GetWebhooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhooksResponse1&gt; UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous `filters` array will be completely overwritten by the `filters` sent in the PUT request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.UpdateWebhook(new UpdateWebhookRequest
    {
        WebhookGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new WebhooksRequest1(),
    });
    // TODO: Handle 'response' of type WebhooksResponse1
}
catch (ApiException<UpdateWebhookError> ex)
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

<code>[UpdateWebhookRequest](src/Asana/Requests/WebhooksApi/UpdateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksResponse1](src/Asana/Models/WebhooksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateWebhookError](src/Asana/Errors/UpdateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WorkspaceMemberships

> Source: [WorkspaceMemberships](src/Asana/Api/WorkspaceMemberships.cs)

<details>
<summary><code>Task&lt;WorkspaceMembershipsResponse&gt; GetWorkspaceMembership(GetWorkspaceMembershipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete workspace record for a single workspace membership.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WorkspaceMemberships.GetWorkspaceMembership(new GetWorkspaceMembershipRequest
    {
        WorkspaceMembershipGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type WorkspaceMembershipsResponse
}
catch (ApiException<GetWorkspaceMembershipError> ex)
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

<code>[GetWorkspaceMembershipRequest](src/Asana/Requests/WorkspaceMemberships/GetWorkspaceMembershipRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceMembershipsResponse](src/Asana/Models/WorkspaceMembershipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetWorkspaceMembershipError](src/Asana/Errors/GetWorkspaceMembershipError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsersWorkspaceMembershipsResponse&gt; GetWorkspaceMembershipsForUser(GetWorkspaceMembershipsForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact workspace membership records for the user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WorkspaceMemberships.GetWorkspaceMembershipsForUser(
        new GetWorkspaceMembershipsForUserRequest
        {
            UserGid = "me",
            OptPretty = true,
            OptFields = ["followers", "assignee"],
            Limit = 50,
            Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        });
    // TODO: Handle 'response' of type UsersWorkspaceMembershipsResponse
}
catch (ApiException<GetWorkspaceMembershipsForUserError> ex)
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

<code>[GetWorkspaceMembershipsForUserRequest](src/Asana/Requests/WorkspaceMemberships/GetWorkspaceMembershipsForUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersWorkspaceMembershipsResponse](src/Asana/Models/UsersWorkspaceMembershipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetWorkspaceMembershipsForUserError](src/Asana/Errors/GetWorkspaceMembershipsForUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesWorkspaceMembershipsResponse&gt; GetWorkspaceMembershipsForWorkspace(GetWorkspaceMembershipsForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact workspace membership records for the workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WorkspaceMemberships.GetWorkspaceMembershipsForWorkspace(
        new GetWorkspaceMembershipsForWorkspaceRequest
        {
            WorkspaceGid = "12345",
            User = "me",
            OptPretty = true,
            OptFields = ["followers", "assignee"],
            Limit = 50,
            Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
        });
    // TODO: Handle 'response' of type WorkspacesWorkspaceMembershipsResponse
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

<code>[GetWorkspaceMembershipsForWorkspaceRequest](src/Asana/Requests/WorkspaceMemberships/GetWorkspaceMembershipsForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesWorkspaceMembershipsResponse](src/Asana/Models/WorkspacesWorkspaceMembershipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Asana/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/Asana/Api/Workspaces.cs)

<details>
<summary><code>Task&lt;WorkspacesAddUserResponse&gt; AddUserForWorkspace(AddUserForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a user to a workspace or organization.
The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.AddUserForWorkspace(new AddUserForWorkspaceRequest
    {
        WorkspaceGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new WorkspacesAddUserRequest(),
    });
    // TODO: Handle 'response' of type WorkspacesAddUserResponse
}
catch (ApiException<AddUserForWorkspaceError> ex)
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

<code>[AddUserForWorkspaceRequest](src/Asana/Requests/Workspaces/AddUserForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesAddUserResponse](src/Asana/Models/WorkspacesAddUserResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[AddUserForWorkspaceError](src/Asana/Errors/AddUserForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesResponse1&gt; GetWorkspace(GetWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full workspace record for a single workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspace(new GetWorkspaceRequest
    {
        WorkspaceGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
    });
    // TODO: Handle 'response' of type WorkspacesResponse1
}
catch (ApiException<GetWorkspaceError> ex)
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

<code>[GetWorkspaceRequest](src/Asana/Requests/Workspaces/GetWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesResponse1](src/Asana/Models/WorkspacesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetWorkspaceError](src/Asana/Errors/GetWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesResponse&gt; GetWorkspaces(GetWorkspacesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the compact records for all workspaces visible to the authorized user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspaces(new GetWorkspacesRequest
    {
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Limit = 50,
        Offset = "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9",
    });
    // TODO: Handle 'response' of type WorkspacesResponse
}
catch (ApiException<GetWorkspacesError> ex)
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

<code>[GetWorkspacesRequest](src/Asana/Requests/Workspaces/GetWorkspacesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesResponse](src/Asana/Models/WorkspacesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesError](src/Asana/Errors/GetWorkspacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesRemoveUserResponse&gt; RemoveUserForWorkspace(RemoveUserForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.RemoveUserForWorkspace(new RemoveUserForWorkspaceRequest
    {
        WorkspaceGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new WorkspacesRemoveUserRequest(),
    });
    // TODO: Handle 'response' of type WorkspacesRemoveUserResponse
}
catch (ApiException<RemoveUserForWorkspaceError> ex)
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

<code>[RemoveUserForWorkspaceRequest](src/Asana/Requests/Workspaces/RemoveUserForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesRemoveUserResponse](src/Asana/Models/WorkspacesRemoveUserResponse.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[RemoveUserForWorkspaceError](src/Asana/Errors/RemoveUserForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacesResponse1&gt; UpdateWorkspace(UpdateWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.UpdateWorkspace(new UpdateWorkspaceRequest
    {
        WorkspaceGid = "12345",
        OptPretty = true,
        OptFields = ["followers", "assignee"],
        Body = new WorkspacesRequest(),
    });
    // TODO: Handle 'response' of type WorkspacesResponse1
}
catch (ApiException<UpdateWorkspaceError> ex)
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

<code>[UpdateWorkspaceRequest](src/Asana/Requests/Workspaces/UpdateWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacesResponse1](src/Asana/Models/WorkspacesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Asana/Core/Exceptions/ApiException.cs)&lt;[UpdateWorkspaceError](src/Asana/Errors/UpdateWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

