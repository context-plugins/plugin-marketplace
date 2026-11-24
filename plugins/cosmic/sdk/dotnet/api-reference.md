# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CosmicClient](src/Cosmic/CosmicClient.cs)

## Blocks

> Source: [Blocks](src/Cosmic/Api/Blocks.cs)

<details>
<summary><code>Task&lt;BlocksResponse&gt; ListBlocks(ListBlocksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the content Blocks configured on the Bucket. Returns an empty array when the Bucket has none.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Blocks.ListBlocks(new ListBlocksRequest { Slug = "my-bucket" });
    // TODO: Handle 'response' of type BlocksResponse
}
catch (ApiException<ListBlocksError> ex)
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

<code>[ListBlocksRequest](src/Cosmic/Requests/Blocks/ListBlocksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BlocksResponse](src/Cosmic/Models/BlocksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[ListBlocksError](src/Cosmic/Errors/ListBlocksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MediaApi

> Source: [MediaApi](src/Cosmic/Api/MediaApi.cs)

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteMedia(DeleteMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a media item from the Bucket. The file is removed from storage and the CDN caches are purged, so its URL stops working. Objects and Metafields that reference the media are not updated automatically: clear those references yourself. This is destructive and not reversible through the API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MediaApi.DeleteMedia(new DeleteMediaRequest
    {
        Slug = "my-bucket",
        MediaId = "602fd622853cca45f4c9fd96",
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteMediaError> ex)
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

<code>[DeleteMediaRequest](src/Cosmic/Requests/MediaApi/DeleteMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/Cosmic/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[DeleteMediaError](src/Cosmic/Errors/DeleteMediaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MediaResponse&gt; GetMedia(GetMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single media item by its id. To fetch by file name instead, query the media list endpoint with `query={"name":"..."}`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MediaApi.GetMedia(new GetMediaRequest
    {
        Slug = "my-bucket",
        MediaId = "602fd622853cca45f4c9fd96",
        Props = "id,slug,title,metadata.content,metadata.image.imgix_url",
    });
    // TODO: Handle 'response' of type MediaResponse
}
catch (ApiException<GetMediaError> ex)
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

<code>[GetMediaRequest](src/Cosmic/Requests/MediaApi/GetMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MediaResponse](src/Cosmic/Models/MediaResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[GetMediaError](src/Cosmic/Errors/GetMediaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MediaListResponse&gt; ListMedia(ListMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query media in the Bucket. This is also how you fetch a single media item by name: pass `query={"name":"7f9403a32f29-toucan.jpg"}`.

The `name` of a media item is the value you assign to a File or Image Metafield when creating or updating an Object. Upload is not part of this host: `POST /v3/buckets/{slug}/media` is served by `https://workers.cosmicjs.com`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MediaApi.ListMedia(new ListMediaRequest
    {
        Slug = "my-bucket",
        Query = "{\"type\":\"blog-posts\",\"metadata.featured\":true}",
        Props = "id,slug,title,metadata.content,metadata.image.imgix_url",
    });
    // TODO: Handle 'response' of type MediaListResponse
}
catch (ApiException<ListMediaError> ex)
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

<code>[ListMediaRequest](src/Cosmic/Requests/MediaApi/ListMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MediaListResponse](src/Cosmic/Models/MediaListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[ListMediaError](src/Cosmic/Errors/ListMediaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MediaResponse&gt; UpdateMedia(UpdateMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the folder, alt text, or user metadata on a media item. The underlying file is not replaced: to change the file, upload a new one via `https://workers.cosmicjs.com` and repoint the referencing Metafields.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MediaApi.UpdateMedia(new UpdateMediaRequest
    {
        Slug = "my-bucket",
        MediaId = "602fd622853cca45f4c9fd96",
        Body = new MediaUpdate { Folder = "national-parks", AltText = "Picture of Grand Teton National Park" },
    });
    // TODO: Handle 'response' of type MediaResponse
}
catch (ApiException<UpdateMediaError> ex)
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

<code>[UpdateMediaRequest](src/Cosmic/Requests/MediaApi/UpdateMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MediaResponse](src/Cosmic/Models/MediaResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[UpdateMediaError](src/Cosmic/Errors/UpdateMediaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ObjectRevisions

> Source: [ObjectRevisions](src/Cosmic/Api/ObjectRevisions.cs)

<details>
<summary><code>Task&lt;RevisionResponse&gt; CreateObjectRevision(CreateObjectRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new revision of an Object without publishing it. The revision is created with status `draft`; publish it by updating the Object itself with `status: published`. Use this to stage an edit for review rather than changing live content.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ObjectRevisions.CreateObjectRevision(new CreateObjectRevisionRequest
    {
        Slug = "my-bucket",
        ObjectId = "5ff75368c2dfa81a91695cec",
        Body = new RevisionCreate { Title = "Updated Blog Post Title", Status = Status.Draft },
    });
    // TODO: Handle 'response' of type RevisionResponse
}
catch (ApiException<CreateObjectRevisionError> ex)
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

<code>[CreateObjectRevisionRequest](src/Cosmic/Requests/ObjectRevisions/CreateObjectRevisionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RevisionResponse](src/Cosmic/Models/RevisionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[CreateObjectRevisionError](src/Cosmic/Errors/CreateObjectRevisionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RevisionResponse&gt; GetObjectRevision(GetObjectRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve one revision of an Object by its id, including the `metadata` values as they were at that point in history.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ObjectRevisions.GetObjectRevision(new GetObjectRevisionRequest
    {
        Slug = "my-bucket",
        ObjectId = "5ff75368c2dfa81a91695cec",
        RevisionId = "64fe8a1b24090e0008683e53",
        Props = "id,slug,title,metadata.content,metadata.image.imgix_url",
    });
    // TODO: Handle 'response' of type RevisionResponse
}
catch (ApiException<GetObjectRevisionError> ex)
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

<code>[GetObjectRevisionRequest](src/Cosmic/Requests/ObjectRevisions/GetObjectRevisionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RevisionResponse](src/Cosmic/Models/RevisionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[GetObjectRevisionError](src/Cosmic/Errors/GetObjectRevisionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RevisionListResponse&gt; ListObjectRevisions(ListObjectRevisionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the version history of an Object, newest first by default. Revisions are immutable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ObjectRevisions.ListObjectRevisions(new ListObjectRevisionsRequest
    {
        Slug = "my-bucket",
        ObjectId = "5ff75368c2dfa81a91695cec",
        Props = "id,slug,title,metadata.content,metadata.image.imgix_url",
    });
    // TODO: Handle 'response' of type RevisionListResponse
}
catch (ApiException<ListObjectRevisionsError> ex)
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

<code>[ListObjectRevisionsRequest](src/Cosmic/Requests/ObjectRevisions/ListObjectRevisionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RevisionListResponse](src/Cosmic/Models/RevisionListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[ListObjectRevisionsError](src/Cosmic/Errors/ListObjectRevisionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ObjectTypes

> Source: [ObjectTypes](src/Cosmic/Api/ObjectTypes.cs)

<details>
<summary><code>Task&lt;ObjectTypeResponse&gt; CreateObjectType(CreateObjectTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Object type, defining the content model that its Objects will follow. Only `title` is required; the `slug` is derived from the title when omitted. Define `metafields` here so that Objects created in this type can carry the corresponding `metadata` values.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ObjectTypes.CreateObjectType(new CreateObjectTypeRequest
    {
        Slug = "my-bucket",
        Body = new ObjectTypeCreate { Title = "Motorcycles" },
    });
    // TODO: Handle 'response' of type ObjectTypeResponse
}
catch (ApiException<CreateObjectTypeError> ex)
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

<code>[CreateObjectTypeRequest](src/Cosmic/Requests/ObjectTypes/CreateObjectTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ObjectTypeResponse](src/Cosmic/Models/ObjectTypeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[CreateObjectTypeError](src/Cosmic/Errors/CreateObjectTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteObjectType(DeleteObjectTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Object type and every Object in it. This is destructive and not reversible through the API: confirm with the user before calling it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ObjectTypes.DeleteObjectType(new DeleteObjectTypeRequest
    {
        Slug = "my-bucket",
        TypeSlug = "blog-posts",
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteObjectTypeError> ex)
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

<code>[DeleteObjectTypeRequest](src/Cosmic/Requests/ObjectTypes/DeleteObjectTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/Cosmic/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[DeleteObjectTypeError](src/Cosmic/Errors/DeleteObjectTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ObjectTypeResponse&gt; GetObjectType(GetObjectTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single Object type by its slug, including the full Metafield model. Use this when you already know the type and want its field definitions without listing every type in the Bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ObjectTypes.GetObjectType(new GetObjectTypeRequest
    {
        Slug = "my-bucket",
        TypeSlug = "blog-posts",
    });
    // TODO: Handle 'response' of type ObjectTypeResponse
}
catch (ApiException<GetObjectTypeError> ex)
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

<code>[GetObjectTypeRequest](src/Cosmic/Requests/ObjectTypes/GetObjectTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ObjectTypeResponse](src/Cosmic/Models/ObjectTypeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[GetObjectTypeError](src/Cosmic/Errors/GetObjectTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ObjectTypeListResponse&gt; ListObjectTypes(ListObjectTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve every Object type in the Bucket, each with its full Metafield model. Use this to discover the content model before creating or querying Objects: the `slug` of each type is what you pass as `type` in Object queries, and the `metafields` array tells you which `metadata` keys an Object of that type accepts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ObjectTypes.ListObjectTypes(new ListObjectTypesRequest { Slug = "my-bucket" });
    // TODO: Handle 'response' of type ObjectTypeListResponse
}
catch (ApiException<ListObjectTypesError> ex)
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

<code>[ListObjectTypesRequest](src/Cosmic/Requests/ObjectTypes/ListObjectTypesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ObjectTypeListResponse](src/Cosmic/Models/ObjectTypeListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[ListObjectTypesError](src/Cosmic/Errors/ListObjectTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ObjectTypeResponse&gt; UpdateObjectType(UpdateObjectTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Object type in place. Only the properties you send are changed. Sending `metafields` replaces the whole array, so read the type first and send the complete list rather than only the field you want to alter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ObjectTypes.UpdateObjectType(new UpdateObjectTypeRequest
    {
        Slug = "my-bucket",
        TypeSlug = "blog-posts",
        Body = new ObjectTypeUpdate { Title = "Motorcycles", Singular = "Motorcycle", Slug = "motorcycles" },
    });
    // TODO: Handle 'response' of type ObjectTypeResponse
}
catch (ApiException<UpdateObjectTypeError> ex)
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

<code>[UpdateObjectTypeRequest](src/Cosmic/Requests/ObjectTypes/UpdateObjectTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ObjectTypeResponse](src/Cosmic/Models/ObjectTypeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[UpdateObjectTypeError](src/Cosmic/Errors/UpdateObjectTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Objects

> Source: [Objects](src/Cosmic/Api/Objects.cs)

<details>
<summary><code>Task&lt;BatchResponse&gt; BatchObjects(BatchObjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform up to 25 Object operations in a single request. Each operation succeeds or fails independently, so inspect the `status` of every entry in the response rather than relying on the HTTP status alone. Prefer this over repeated single-Object calls when changing many Objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objects.BatchObjects(new BatchObjectsRequest
    {
        Slug = "my-bucket",
        Body = new BatchRequest
        {
            Operations = [
                new BatchOperation { Method = Method.Add },
                new BatchOperation { Method = Method.Edit, ObjectId = "5ff75368c2dfa81a91695cec" },
                new BatchOperation { Method = Method.Delete, ObjectId = "5ff75368c2dfa81a91695ced" },
            ],
        },
    });
    // TODO: Handle 'response' of type BatchResponse
}
catch (ApiException<BatchObjectsError> ex)
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

<code>[BatchObjectsRequest](src/Cosmic/Requests/Objects/BatchObjectsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchResponse](src/Cosmic/Models/BatchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[BatchObjectsError](src/Cosmic/Errors/BatchObjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ObjectResponse&gt; CreateObject(CreateObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a single Object. `title` and `type` are required; the `slug` is derived from the title when omitted. Values in `metadata` must satisfy any validation configured on the Object type's Metafields. To create several Objects at once, use the batch endpoint instead of looping over this one.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objects.CreateObject(new CreateObjectRequest
    {
        Slug = "my-bucket",
        Body = new ObjectCreate { Title = "Blog Post Example Title", Type = "blog-posts" },
    });
    // TODO: Handle 'response' of type ObjectResponse
}
catch (ApiException<CreateObjectError> ex)
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

<code>[CreateObjectRequest](src/Cosmic/Requests/Objects/CreateObjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ObjectResponse](src/Cosmic/Models/ObjectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[CreateObjectError](src/Cosmic/Errors/CreateObjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteObject(DeleteObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Object from the Bucket. This is destructive and not reversible through the API: confirm with the user before calling it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objects.DeleteObject(new DeleteObjectRequest
    {
        Slug = "my-bucket",
        ObjectId = "5ff75368c2dfa81a91695cec",
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteObjectError> ex)
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

<code>[DeleteObjectRequest](src/Cosmic/Requests/Objects/DeleteObjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/Cosmic/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[DeleteObjectError](src/Cosmic/Errors/DeleteObjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ObjectResponse&gt; GetObject(GetObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single Object by its id. To fetch by slug instead, query the Objects list endpoint with `query={"type":"...","slug":"..."}`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objects.GetObject(new GetObjectRequest
    {
        Slug = "my-bucket",
        ObjectId = "5ff75368c2dfa81a91695cec",
        Props = "id,slug,title,metadata.content,metadata.image.imgix_url",
    });
    // TODO: Handle 'response' of type ObjectResponse
}
catch (ApiException<GetObjectError> ex)
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

<code>[GetObjectRequest](src/Cosmic/Requests/Objects/GetObjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ObjectResponse](src/Cosmic/Models/ObjectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[GetObjectError](src/Cosmic/Errors/GetObjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ObjectListResponse&gt; ListObjects(ListObjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Objects in the Bucket. This is the main read endpoint and also the way to fetch a single Object by slug: pass `query={"type":"posts","slug":"my-post"}` and read the first element of `objects`.

The `query` parameter is a URL-encoded JSON object following MongoDB comparison and logical operator syntax. Use `props` to limit the response to the fields you need, which matters because the API rejects responses over roughly 6 MB with a 413. Use `depth` to resolve Object Relationship Metafields into nested Objects. For large collections, prefer cursor pagination with `after` over large `skip` offsets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objects.ListObjects(new ListObjectsRequest
    {
        Slug = "my-bucket",
        Query = "{\"type\":\"blog-posts\",\"metadata.featured\":true}",
        Props = "id,slug,title,metadata.content,metadata.image.imgix_url",
        Sort = "created_at",
    });
    // TODO: Handle 'response' of type ObjectListResponse
}
catch (ApiException<ListObjectsError> ex)
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

<code>[ListObjectsRequest](src/Cosmic/Requests/Objects/ListObjectsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ObjectListResponse](src/Cosmic/Models/ObjectListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[ListObjectsError](src/Cosmic/Errors/ListObjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ObjectResponse&gt; UpdateObject(UpdateObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Object in place. Only the properties you send are changed, and within `metadata` only the keys you send are changed, so you can update a single Metafield without resending the rest. Set `status` to `published` to publish a draft.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Objects.UpdateObject(new UpdateObjectRequest
    {
        Slug = "my-bucket",
        ObjectId = "5ff75368c2dfa81a91695cec",
        Body = new ObjectUpdate { Title = "New Title Edit" },
    });
    // TODO: Handle 'response' of type ObjectResponse
}
catch (ApiException<UpdateObjectError> ex)
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

<code>[UpdateObjectRequest](src/Cosmic/Requests/Objects/UpdateObjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ObjectResponse](src/Cosmic/Models/ObjectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[UpdateObjectError](src/Cosmic/Errors/UpdateObjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## StatusApi

> Source: [StatusApi](src/Cosmic/Api/StatusApi.cs)

<details>
<summary><code>Task&lt;OpenapiJsonResponse&gt; GetOpenApiSpec(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the machine-readable description of this API. Requires no authentication. Also served from `https://www.cosmicjs.com/openapi.json`, which proxies this endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StatusApi.GetOpenApiSpec();
    // TODO: Handle 'response' of type OpenapiJsonResponse
}
catch (ApiException<GetOpenApiSpecError> ex)
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

**OnSuccess**: <code>[OpenapiJsonResponse](src/Cosmic/Models/OpenapiJsonResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[GetOpenApiSpecError](src/Cosmic/Errors/GetOpenApiSpecError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatusResponse&gt; GetStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirm the API is reachable and learn which AWS region served the request. Requires no authentication, so it is safe to use as a connectivity check before supplying keys.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StatusApi.GetStatus();
    // TODO: Handle 'response' of type StatusResponse
}
catch (ApiException<GetStatusError> ex)
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

**OnSuccess**: <code>[StatusResponse](src/Cosmic/Models/StatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cosmic/Core/Exceptions/ApiException.cs)&lt;[GetStatusError](src/Cosmic/Errors/GetStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

