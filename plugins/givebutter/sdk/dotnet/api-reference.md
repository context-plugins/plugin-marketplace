# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GivebutterClient](src/Givebutter/GivebutterClient.cs)

## CampaignDiscountCodes

> Source: [CampaignDiscountCodes](src/Givebutter/Api/CampaignDiscountCodes.cs)

<details>
<summary><code>Task CampaignsDiscountCodesDestroy(CampaignsDiscountCodesDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CampaignDiscountCodes.CampaignsDiscountCodesDestroy(new CampaignsDiscountCodesDestroyRequest
    {
        Campaign = 1,
        DiscountCode = 1,
    });
}
catch (ApiException<CampaignsDiscountCodesDestroyError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsDiscountCodesDestroyRequest](src/Givebutter/Requests/CampaignDiscountCodes/CampaignsDiscountCodesDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsDiscountCodesDestroyError](src/Givebutter/Errors/CampaignsDiscountCodesDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CampaignsDiscountCodesResponse&gt; CampaignsDiscountCodesIndex(CampaignsDiscountCodesIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignDiscountCodes.CampaignsDiscountCodesIndex(new CampaignsDiscountCodesIndexRequest
    {
        Campaign = 1,
    });
    // TODO: Handle 'response' of type V1CampaignsDiscountCodesResponse
}
catch (ApiException<CampaignsDiscountCodesIndexError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsDiscountCodesIndexRequest](src/Givebutter/Requests/CampaignDiscountCodes/CampaignsDiscountCodesIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CampaignsDiscountCodesResponse](src/Givebutter/Models/V1CampaignsDiscountCodesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsDiscountCodesIndexError](src/Givebutter/Errors/CampaignsDiscountCodesIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CampaignDiscountCodeResource&gt; CampaignsDiscountCodesShow(CampaignsDiscountCodesShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignDiscountCodes.CampaignsDiscountCodesShow(new CampaignsDiscountCodesShowRequest
    {
        Campaign = 1,
        DiscountCode = 1,
    });
    // TODO: Handle 'response' of type CampaignDiscountCodeResource
}
catch (ApiException<CampaignsDiscountCodesShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsDiscountCodesShowRequest](src/Givebutter/Requests/CampaignDiscountCodes/CampaignsDiscountCodesShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignDiscountCodeResource](src/Givebutter/Models/CampaignDiscountCodeResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsDiscountCodesShowError](src/Givebutter/Errors/CampaignsDiscountCodesShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CampaignDiscountCodeResource&gt; CampaignsDiscountCodesStore(CampaignsDiscountCodesStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignDiscountCodes.CampaignsDiscountCodesStore(new CampaignsDiscountCodesStoreRequest
    {
        Campaign = 1,
        Body = new StoreCampaignDiscountCodeRequest
        {
            Type = DiscountCodeType.Percentage,
            Active = true,
            Amount = 1.5d,
            Code = "some example string",
        },
    });
    // TODO: Handle 'response' of type CampaignDiscountCodeResource
}
catch (ApiException<CampaignsDiscountCodesStoreError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsDiscountCodesStoreRequest](src/Givebutter/Requests/CampaignDiscountCodes/CampaignsDiscountCodesStoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignDiscountCodeResource](src/Givebutter/Models/CampaignDiscountCodeResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsDiscountCodesStoreError](src/Givebutter/Errors/CampaignsDiscountCodesStoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CampaignDiscountCodeResource&gt; CampaignsDiscountCodesUpdate(CampaignsDiscountCodesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignDiscountCodes.CampaignsDiscountCodesUpdate(
        new CampaignsDiscountCodesUpdateRequest
        {
            Campaign = 1,
            DiscountCode = 1,
            Body = new UpdateCampaignDiscountCodeRequest { Amount = 1.5d },
        });
    // TODO: Handle 'response' of type CampaignDiscountCodeResource
}
catch (ApiException<CampaignsDiscountCodesUpdateError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsDiscountCodesUpdateRequest](src/Givebutter/Requests/CampaignDiscountCodes/CampaignsDiscountCodesUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignDiscountCodeResource](src/Givebutter/Models/CampaignDiscountCodeResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsDiscountCodesUpdateError](src/Givebutter/Errors/CampaignsDiscountCodesUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignMembers

> Source: [CampaignMembers](src/Givebutter/Api/CampaignMembers.cs)

<details>
<summary><code>Task&lt;object&gt; CampaignsMembersDestroy(CampaignsMembersDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignMembers.CampaignsMembersDestroy(new CampaignsMembersDestroyRequest
    {
        Campaign = 1,
        Member = 1,
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<CampaignsMembersDestroyError> ex)
{
    if (ex.Error.TryGetModelNotFoundException1(out var error))
    {
        // TODO: Handle 'error' of type ModelNotFoundException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsMembersDestroyRequest](src/Givebutter/Requests/CampaignMembers/CampaignsMembersDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsMembersDestroyError](src/Givebutter/Errors/CampaignsMembersDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CampaignsMembersResponse1&gt; CampaignsMembersIndex(CampaignsMembersIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignMembers.CampaignsMembersIndex(new CampaignsMembersIndexRequest
    {
        Campaign = 1,
    });
    // TODO: Handle 'response' of type V1CampaignsMembersResponse1
}
catch (ApiException<CampaignsMembersIndexError> ex)
{
    if (ex.Error.TryGetModelNotFoundException1(out var error))
    {
        // TODO: Handle 'error' of type ModelNotFoundException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsMembersIndexRequest](src/Givebutter/Requests/CampaignMembers/CampaignsMembersIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CampaignsMembersResponse1](src/Givebutter/Models/AnyOf/V1CampaignsMembersResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsMembersIndexError](src/Givebutter/Errors/CampaignsMembersIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CampaignsMembersResponse11&gt; CampaignsMembersShow(CampaignsMembersShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignMembers.CampaignsMembersShow(new CampaignsMembersShowRequest
    {
        Campaign = 1,
        Member = 1,
    });
    // TODO: Handle 'response' of type V1CampaignsMembersResponse11
}
catch (ApiException<CampaignsMembersShowError> ex)
{
    if (ex.Error.TryGetModelNotFoundException1(out var error))
    {
        // TODO: Handle 'error' of type ModelNotFoundException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsMembersShowRequest](src/Givebutter/Requests/CampaignMembers/CampaignsMembersShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CampaignsMembersResponse11](src/Givebutter/Models/AnyOf/V1CampaignsMembersResponse11.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsMembersShowError](src/Givebutter/Errors/CampaignsMembersShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignTeams

> Source: [CampaignTeams](src/Givebutter/Api/CampaignTeams.cs)

<details>
<summary><code>Task CampaignsTeamsDestroy(CampaignsTeamsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CampaignTeams.CampaignsTeamsDestroy(new CampaignsTeamsDestroyRequest { Campaign = 1, Team = 1 });
}
catch (ApiException<CampaignsTeamsDestroyError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsTeamsDestroyRequest](src/Givebutter/Requests/CampaignTeams/CampaignsTeamsDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsTeamsDestroyError](src/Givebutter/Errors/CampaignsTeamsDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CampaignsTeamsResponse&gt; CampaignsTeamsIndex(CampaignsTeamsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignTeams.CampaignsTeamsIndex(new CampaignsTeamsIndexRequest { Campaign = 1 });
    // TODO: Handle 'response' of type V1CampaignsTeamsResponse
}
catch (ApiException<CampaignsTeamsIndexError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsTeamsIndexRequest](src/Givebutter/Requests/CampaignTeams/CampaignsTeamsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CampaignsTeamsResponse](src/Givebutter/Models/V1CampaignsTeamsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsTeamsIndexError](src/Givebutter/Errors/CampaignsTeamsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CampaignTeamResource&gt; CampaignsTeamsShow(CampaignsTeamsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignTeams.CampaignsTeamsShow(new CampaignsTeamsShowRequest
    {
        Campaign = 1,
        Team = 1,
    });
    // TODO: Handle 'response' of type CampaignTeamResource
}
catch (ApiException<CampaignsTeamsShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsTeamsShowRequest](src/Givebutter/Requests/CampaignTeams/CampaignsTeamsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignTeamResource](src/Givebutter/Models/CampaignTeamResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsTeamsShowError](src/Givebutter/Errors/CampaignsTeamsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignTickets

> Source: [CampaignTickets](src/Givebutter/Api/CampaignTickets.cs)

<details>
<summary><code>Task&lt;V1CampaignsItemsTicketsResponse&gt; CampaignsItemsTicketsIndex(CampaignsItemsTicketsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignTickets.CampaignsItemsTicketsIndex(new CampaignsItemsTicketsIndexRequest
    {
        Campaign = 1,
    });
    // TODO: Handle 'response' of type V1CampaignsItemsTicketsResponse
}
catch (ApiException<CampaignsItemsTicketsIndexError> ex)
{
    if (ex.Error.TryGetModelNotFoundException1(out var error))
    {
        // TODO: Handle 'error' of type ModelNotFoundException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsItemsTicketsIndexRequest](src/Givebutter/Requests/CampaignTickets/CampaignsItemsTicketsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CampaignsItemsTicketsResponse](src/Givebutter/Models/V1CampaignsItemsTicketsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsItemsTicketsIndexError](src/Givebutter/Errors/CampaignsItemsTicketsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CampaignItemTicketResource&gt; CampaignsItemsTicketsShow(CampaignsItemsTicketsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignTickets.CampaignsItemsTicketsShow(new CampaignsItemsTicketsShowRequest
    {
        Campaign = 1,
        TicketId = 1,
    });
    // TODO: Handle 'response' of type CampaignItemTicketResource
}
catch (ApiException<CampaignsItemsTicketsShowError> ex)
{
    if (ex.Error.TryGetModelNotFoundException1(out var error))
    {
        // TODO: Handle 'error' of type ModelNotFoundException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsItemsTicketsShowRequest](src/Givebutter/Requests/CampaignTickets/CampaignsItemsTicketsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignItemTicketResource](src/Givebutter/Models/CampaignItemTicketResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsItemsTicketsShowError](src/Givebutter/Errors/CampaignsItemsTicketsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CampaignItemTicketResource&gt; CampaignsItemsTicketsStore(CampaignsItemsTicketsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignTickets.CampaignsItemsTicketsStore(new CampaignsItemsTicketsStoreRequest
    {
        Campaign = 1,
        Body = new StoreCampaignItemTicketRequest { Name = "some example string", Price = 1.5d },
    });
    // TODO: Handle 'response' of type CampaignItemTicketResource
}
catch (ApiException<CampaignsItemsTicketsStoreError> ex)
{
    if (ex.Error.TryGetModelNotFoundException1(out var error))
    {
        // TODO: Handle 'error' of type ModelNotFoundException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsItemsTicketsStoreRequest](src/Givebutter/Requests/CampaignTickets/CampaignsItemsTicketsStoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignItemTicketResource](src/Givebutter/Models/CampaignItemTicketResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsItemsTicketsStoreError](src/Givebutter/Errors/CampaignsItemsTicketsStoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](src/Givebutter/Api/Campaigns.cs)

<details>
<summary><code>Task CampaignsDestroy(CampaignsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Campaigns.CampaignsDestroy(new CampaignsDestroyRequest { Campaign = 1 });
}
catch (ApiException<CampaignsDestroyError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsDestroyRequest](src/Givebutter/Requests/Campaigns/CampaignsDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsDestroyError](src/Givebutter/Errors/CampaignsDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CampaignsResponse&gt; CampaignsIndex(CampaignsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.CampaignsIndex(new CampaignsIndexRequest());
    // TODO: Handle 'response' of type V1CampaignsResponse
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

<code>[CampaignsIndexRequest](src/Givebutter/Requests/Campaigns/CampaignsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CampaignsResponse](src/Givebutter/Models/V1CampaignsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Givebutter/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CampaignResource&gt; CampaignsShow(CampaignsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.CampaignsShow(new CampaignsShowRequest { Campaign = 1 });
    // TODO: Handle 'response' of type CampaignResource
}
catch (ApiException<CampaignsShowError> ex)
{
    if (ex.Error.TryGetModelNotFoundException1(out var error))
    {
        // TODO: Handle 'error' of type ModelNotFoundException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsShowRequest](src/Givebutter/Requests/Campaigns/CampaignsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignResource](src/Givebutter/Models/CampaignResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsShowError](src/Givebutter/Errors/CampaignsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CampaignResource&gt; CampaignsStore(CampaignsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.CampaignsStore(new CampaignsStoreRequest
    {
        Body = new StoreCampaignRequest { Type = TypeEnum.General, Title = "some example string" },
    });
    // TODO: Handle 'response' of type CampaignResource
}
catch (ApiException<CampaignsStoreError> ex)
{
    if (ex.Error.TryGetValidationException1(out var error))
    {
        // TODO: Handle 'error' of type ValidationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsStoreRequest](src/Givebutter/Requests/Campaigns/CampaignsStoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignResource](src/Givebutter/Models/CampaignResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsStoreError](src/Givebutter/Errors/CampaignsStoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CampaignResource&gt; CampaignsUpdate(CampaignsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.CampaignsUpdate(new CampaignsUpdateRequest { Campaign = 1 });
    // TODO: Handle 'response' of type CampaignResource
}
catch (ApiException<CampaignsUpdateError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CampaignsUpdateRequest](src/Givebutter/Requests/Campaigns/CampaignsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignResource](src/Givebutter/Models/CampaignResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[CampaignsUpdateError](src/Givebutter/Errors/CampaignsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ContactActivities

> Source: [ContactActivities](src/Givebutter/Api/ContactActivities.cs)

<details>
<summary><code>Task ContactsActivitiesDestroy(ContactsActivitiesDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ContactActivities.ContactsActivitiesDestroy(new ContactsActivitiesDestroyRequest
    {
        Contact = 1,
        Activity = 1,
    });
}
catch (ApiException<ContactsActivitiesDestroyError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactsActivitiesDestroyRequest](src/Givebutter/Requests/ContactActivities/ContactsActivitiesDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactsActivitiesDestroyError](src/Givebutter/Errors/ContactsActivitiesDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ContactsActivitiesResponse&gt; ContactsActivitiesIndex(ContactsActivitiesIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactActivities.ContactsActivitiesIndex(new ContactsActivitiesIndexRequest
    {
        Contact = 1,
    });
    // TODO: Handle 'response' of type V1ContactsActivitiesResponse
}
catch (ApiException<ContactsActivitiesIndexError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactsActivitiesIndexRequest](src/Givebutter/Requests/ContactActivities/ContactsActivitiesIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ContactsActivitiesResponse](src/Givebutter/Models/V1ContactsActivitiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactsActivitiesIndexError](src/Givebutter/Errors/ContactsActivitiesIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactActivityResource&gt; ContactsActivitiesShow(ContactsActivitiesShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactActivities.ContactsActivitiesShow(new ContactsActivitiesShowRequest
    {
        Contact = 1,
        Activity = 1,
    });
    // TODO: Handle 'response' of type ContactActivityResource
}
catch (ApiException<ContactsActivitiesShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactsActivitiesShowRequest](src/Givebutter/Requests/ContactActivities/ContactsActivitiesShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactActivityResource](src/Givebutter/Models/ContactActivityResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactsActivitiesShowError](src/Givebutter/Errors/ContactsActivitiesShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactActivityResource&gt; ContactsActivitiesStore(ContactsActivitiesStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactActivities.ContactsActivitiesStore(new ContactsActivitiesStoreRequest
    {
        Contact = 1,
        Body = new StoreContactActivityRequest { Type = TypeGivebutterApiDocumentationContactActivitiesApi.Email },
    });
    // TODO: Handle 'response' of type ContactActivityResource
}
catch (ApiException<ContactsActivitiesStoreError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactsActivitiesStoreRequest](src/Givebutter/Requests/ContactActivities/ContactsActivitiesStoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactActivityResource](src/Givebutter/Models/ContactActivityResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactsActivitiesStoreError](src/Givebutter/Errors/ContactsActivitiesStoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactActivityResource&gt; ContactsActivitiesUpdate(ContactsActivitiesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactActivities.ContactsActivitiesUpdate(new ContactsActivitiesUpdateRequest
    {
        Contact = 1,
        Activity = 1,
    });
    // TODO: Handle 'response' of type ContactActivityResource
}
catch (ApiException<ContactsActivitiesUpdateError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactsActivitiesUpdateRequest](src/Givebutter/Requests/ContactActivities/ContactsActivitiesUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactActivityResource](src/Givebutter/Models/ContactActivityResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactsActivitiesUpdateError](src/Givebutter/Errors/ContactsActivitiesUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ContactTags

> Source: [ContactTags](src/Givebutter/Api/ContactTags.cs)

<details>
<summary><code>Task&lt;ContactResource&gt; ContactTagDestroy(ContactTagDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactTags.ContactTagDestroy(new ContactTagDestroyRequest
    {
        Contact = 1,
        Body = new V1ContactsTagsRemoveRequest { Tags = ["some example string"] },
    });
    // TODO: Handle 'response' of type ContactResource
}
catch (ApiException<ContactTagDestroyError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactTagDestroyRequest](src/Givebutter/Requests/ContactTags/ContactTagDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](src/Givebutter/Models/ContactResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactTagDestroyError](src/Givebutter/Errors/ContactTagDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactResource&gt; ContactTagStore(ContactTagStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactTags.ContactTagStore(new ContactTagStoreRequest
    {
        Contact = 1,
        Body = new V1ContactsTagsAddRequest { Tags = ["some example string"] },
    });
    // TODO: Handle 'response' of type ContactResource
}
catch (ApiException<ContactTagStoreError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactTagStoreRequest](src/Givebutter/Requests/ContactTags/ContactTagStoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](src/Givebutter/Models/ContactResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactTagStoreError](src/Givebutter/Errors/ContactTagStoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactResource&gt; ContactTagSync(ContactTagSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactTags.ContactTagSync(new ContactTagSyncRequest
    {
        Contact = 1,
        Body = new V1ContactsTagsSyncRequest { Tags = ["some example string"] },
    });
    // TODO: Handle 'response' of type ContactResource
}
catch (ApiException<ContactTagSyncError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactTagSyncRequest](src/Givebutter/Requests/ContactTags/ContactTagSyncRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](src/Givebutter/Models/ContactResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactTagSyncError](src/Givebutter/Errors/ContactTagSyncError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Contacts

> Source: [Contacts](src/Givebutter/Api/Contacts.cs)

<details>
<summary><code>Task&lt;ContactResource&gt; ContactRestore(ContactRestoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.ContactRestore(new ContactRestoreRequest { Contact = 1 });
    // TODO: Handle 'response' of type ContactResource
}
catch (ApiException<ContactRestoreError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactRestoreRequest](src/Givebutter/Requests/Contacts/ContactRestoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](src/Givebutter/Models/ContactResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactRestoreError](src/Givebutter/Errors/ContactRestoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ContactsDestroy(ContactsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Contacts.ContactsDestroy(new ContactsDestroyRequest { Contact = 1 });
}
catch (ApiException<ContactsDestroyError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactsDestroyRequest](src/Givebutter/Requests/Contacts/ContactsDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactsDestroyError](src/Givebutter/Errors/ContactsDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ContactsResponse&gt; ContactsIndex(ContactsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.ContactsIndex(new ContactsIndexRequest());
    // TODO: Handle 'response' of type V1ContactsResponse
}
catch (ApiException<ContactsIndexError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactsIndexRequest](src/Givebutter/Requests/Contacts/ContactsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ContactsResponse](src/Givebutter/Models/V1ContactsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactsIndexError](src/Givebutter/Errors/ContactsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactResource&gt; ContactsShow(ContactsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.ContactsShow(new ContactsShowRequest { Contact = 1 });
    // TODO: Handle 'response' of type ContactResource
}
catch (ApiException<ContactsShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactsShowRequest](src/Givebutter/Requests/Contacts/ContactsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](src/Givebutter/Models/ContactResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactsShowError](src/Givebutter/Errors/ContactsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactResource&gt; ContactsStore(ContactsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.ContactsStore(new ContactsStoreRequest());
    // TODO: Handle 'response' of type ContactResource
}
catch (ApiException<ContactsStoreError> ex)
{
    if (ex.Error.TryGetValidationException1(out var error))
    {
        // TODO: Handle 'error' of type ValidationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactsStoreRequest](src/Givebutter/Requests/Contacts/ContactsStoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](src/Givebutter/Models/ContactResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactsStoreError](src/Givebutter/Errors/ContactsStoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactResource&gt; ContactsUpdate(ContactsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.ContactsUpdate(new ContactsUpdateRequest { Contact = 1 });
    // TODO: Handle 'response' of type ContactResource
}
catch (ApiException<ContactsUpdateError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContactsUpdateRequest](src/Givebutter/Requests/Contacts/ContactsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](src/Givebutter/Models/ContactResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[ContactsUpdateError](src/Givebutter/Errors/ContactsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Funds

> Source: [Funds](src/Givebutter/Api/Funds.cs)

<details>
<summary><code>Task FundsDestroy(FundsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Funds.FundsDestroy(new FundsDestroyRequest { Fund = "some example string" });
}
catch (ApiException<FundsDestroyError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FundsDestroyRequest](src/Givebutter/Requests/Funds/FundsDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[FundsDestroyError](src/Givebutter/Errors/FundsDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1FundsResponse&gt; FundsIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Funds.FundsIndex();
    // TODO: Handle 'response' of type V1FundsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FundsResponse](src/Givebutter/Models/V1FundsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Givebutter/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FundResource&gt; FundsShow(FundsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Funds.FundsShow(new FundsShowRequest { Fund = "some example string" });
    // TODO: Handle 'response' of type FundResource
}
catch (ApiException<FundsShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FundsShowRequest](src/Givebutter/Requests/Funds/FundsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundResource](src/Givebutter/Models/FundResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[FundsShowError](src/Givebutter/Errors/FundsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FundResource&gt; FundsStore(FundsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Funds.FundsStore(new FundsStoreRequest
    {
        Body = new V1FundsRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type FundResource
}
catch (ApiException<FundsStoreError> ex)
{
    if (ex.Error.TryGetValidationException1(out var error))
    {
        // TODO: Handle 'error' of type ValidationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FundsStoreRequest](src/Givebutter/Requests/Funds/FundsStoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundResource](src/Givebutter/Models/FundResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[FundsStoreError](src/Givebutter/Errors/FundsStoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FundResource&gt; FundsUpdate(FundsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Funds.FundsUpdate(new FundsUpdateRequest
    {
        Fund = "some example string",
        Body = new V1FundsRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type FundResource
}
catch (ApiException<FundsUpdateError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FundsUpdateRequest](src/Givebutter/Requests/Funds/FundsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundResource](src/Givebutter/Models/FundResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[FundsUpdateError](src/Givebutter/Errors/FundsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HouseholdContacts

> Source: [HouseholdContacts](src/Givebutter/Api/HouseholdContacts.cs)

<details>
<summary><code>Task&lt;AppHttpResourcesApiHouseholdResource&gt; HouseholdsContactsDestroy(HouseholdsContactsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.HouseholdContacts.HouseholdsContactsDestroy(new HouseholdsContactsDestroyRequest
    {
        Household = 1,
        Contact = 1,
    });
    // TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
}
catch (ApiException<HouseholdsContactsDestroyError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HouseholdsContactsDestroyRequest](src/Givebutter/Requests/HouseholdContacts/HouseholdsContactsDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](src/Givebutter/Models/AppHttpResourcesApiHouseholdResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[HouseholdsContactsDestroyError](src/Givebutter/Errors/HouseholdsContactsDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HouseholdsContactsResponse&gt; HouseholdsContactsIndex(HouseholdsContactsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.HouseholdContacts.HouseholdsContactsIndex(new HouseholdsContactsIndexRequest
    {
        Household = 1,
    });
    // TODO: Handle 'response' of type V1HouseholdsContactsResponse
}
catch (ApiException<HouseholdsContactsIndexError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HouseholdsContactsIndexRequest](src/Givebutter/Requests/HouseholdContacts/HouseholdsContactsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HouseholdsContactsResponse](src/Givebutter/Models/V1HouseholdsContactsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[HouseholdsContactsIndexError](src/Givebutter/Errors/HouseholdsContactsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactResource&gt; HouseholdsContactsShow(HouseholdsContactsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.HouseholdContacts.HouseholdsContactsShow(new HouseholdsContactsShowRequest
    {
        Household = 1,
        Contact = 1,
    });
    // TODO: Handle 'response' of type ContactResource
}
catch (ApiException<HouseholdsContactsShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HouseholdsContactsShowRequest](src/Givebutter/Requests/HouseholdContacts/HouseholdsContactsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactResource](src/Givebutter/Models/ContactResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[HouseholdsContactsShowError](src/Givebutter/Errors/HouseholdsContactsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AppHttpResourcesApiHouseholdResource&gt; HouseholdsContactsStore(HouseholdsContactsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.HouseholdContacts.HouseholdsContactsStore(new HouseholdsContactsStoreRequest
    {
        Household = 1,
        Body = new V1HouseholdsContactsRequest { ContactId = 1 },
    });
    // TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
}
catch (ApiException<HouseholdsContactsStoreError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HouseholdsContactsStoreRequest](src/Givebutter/Requests/HouseholdContacts/HouseholdsContactsStoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](src/Givebutter/Models/AppHttpResourcesApiHouseholdResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[HouseholdsContactsStoreError](src/Givebutter/Errors/HouseholdsContactsStoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Households

> Source: [Households](src/Givebutter/Api/Households.cs)

<details>
<summary><code>Task HouseholdsDestroy(HouseholdsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Households.HouseholdsDestroy(new HouseholdsDestroyRequest { Household = 1 });
}
catch (ApiException<HouseholdsDestroyError> ex)
{
    if (ex.Error.TryGetModelNotFoundException1(out var error))
    {
        // TODO: Handle 'error' of type ModelNotFoundException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HouseholdsDestroyRequest](src/Givebutter/Requests/Households/HouseholdsDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[HouseholdsDestroyError](src/Givebutter/Errors/HouseholdsDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;HouseholdResource&gt;&gt; HouseholdsIndex(HouseholdsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Households.HouseholdsIndex(new HouseholdsIndexRequest());
    // TODO: Handle 'response' of type IReadOnlyList<HouseholdResource>
}
catch (ApiException<HouseholdsIndexError> ex)
{
    if (ex.Error.TryGetValidationException1(out var error))
    {
        // TODO: Handle 'error' of type ValidationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HouseholdsIndexRequest](src/Givebutter/Requests/Households/HouseholdsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[HouseholdResource](src/Givebutter/Models/HouseholdResource.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[HouseholdsIndexError](src/Givebutter/Errors/HouseholdsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AppHttpResourcesApiHouseholdResource&gt; HouseholdsShow(HouseholdsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Households.HouseholdsShow(new HouseholdsShowRequest { Household = 1 });
    // TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
}
catch (ApiException<HouseholdsShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HouseholdsShowRequest](src/Givebutter/Requests/Households/HouseholdsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](src/Givebutter/Models/AppHttpResourcesApiHouseholdResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[HouseholdsShowError](src/Givebutter/Errors/HouseholdsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AppHttpResourcesApiHouseholdResource&gt; HouseholdsStore(HouseholdsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Households.HouseholdsStore(new HouseholdsStoreRequest
    {
        Body = new HouseholdStoreRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
}
catch (ApiException<HouseholdsStoreError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HouseholdsStoreRequest](src/Givebutter/Requests/Households/HouseholdsStoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](src/Givebutter/Models/AppHttpResourcesApiHouseholdResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[HouseholdsStoreError](src/Givebutter/Errors/HouseholdsStoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AppHttpResourcesApiHouseholdResource&gt; HouseholdsUpdate(HouseholdsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Households.HouseholdsUpdate(new HouseholdsUpdateRequest { Household = 1 });
    // TODO: Handle 'response' of type AppHttpResourcesApiHouseholdResource
}
catch (ApiException<HouseholdsUpdateError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HouseholdsUpdateRequest](src/Givebutter/Requests/Households/HouseholdsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppHttpResourcesApiHouseholdResource](src/Givebutter/Models/AppHttpResourcesApiHouseholdResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[HouseholdsUpdateError](src/Givebutter/Errors/HouseholdsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Messages

> Source: [Messages](src/Givebutter/Api/Messages.cs)

<details>
<summary><code>Task&lt;V1MessagesResponse&gt; MessagesIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Messages.MessagesIndex();
    // TODO: Handle 'response' of type V1MessagesResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MessagesResponse](src/Givebutter/Models/V1MessagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Givebutter/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResource&gt; MessagesShow(MessagesShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Messages.MessagesShow(new MessagesShowRequest { Message = 1 });
    // TODO: Handle 'response' of type MessageResource
}
catch (ApiException<MessagesShowError> ex)
{
    if (ex.Error.TryGetModelNotFoundException1(out var error))
    {
        // TODO: Handle 'error' of type ModelNotFoundException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MessagesShowRequest](src/Givebutter/Requests/Messages/MessagesShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResource](src/Givebutter/Models/MessageResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[MessagesShowError](src/Givebutter/Errors/MessagesShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Payouts

> Source: [Payouts](src/Givebutter/Api/Payouts.cs)

<details>
<summary><code>Task&lt;V1PayoutsResponse&gt; PayoutsIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payouts.PayoutsIndex();
    // TODO: Handle 'response' of type V1PayoutsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PayoutsResponse](src/Givebutter/Models/V1PayoutsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Givebutter/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PayoutResource&gt; PayoutsShow(PayoutsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payouts.PayoutsShow(new PayoutsShowRequest { Payout = "some example string" });
    // TODO: Handle 'response' of type PayoutResource
}
catch (ApiException<PayoutsShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PayoutsShowRequest](src/Givebutter/Requests/Payouts/PayoutsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutResource](src/Givebutter/Models/PayoutResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[PayoutsShowError](src/Givebutter/Errors/PayoutsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pledges

> Source: [Pledges](src/Givebutter/Api/Pledges.cs)

<details>
<summary><code>Task&lt;V1PledgesResponse&gt; PledgesIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pledges.PledgesIndex();
    // TODO: Handle 'response' of type V1PledgesResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PledgesResponse](src/Givebutter/Models/V1PledgesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Givebutter/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PledgeResource&gt; PledgesShow(PledgesShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pledges.PledgesShow(new PledgesShowRequest { Pledge = 1 });
    // TODO: Handle 'response' of type PledgeResource
}
catch (ApiException<PledgesShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PledgesShowRequest](src/Givebutter/Requests/Pledges/PledgesShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PledgeResource](src/Givebutter/Models/PledgeResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[PledgesShowError](src/Givebutter/Errors/PledgesShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RecurringPlans

> Source: [RecurringPlans](src/Givebutter/Api/RecurringPlans.cs)

<details>
<summary><code>Task&lt;V1PlansResponse&gt; PlansIndex(PlansIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RecurringPlans.PlansIndex(new PlansIndexRequest());
    // TODO: Handle 'response' of type V1PlansResponse
}
catch (ApiException<PlansIndexError> ex)
{
    if (ex.Error.TryGetValidationException1(out var error))
    {
        // TODO: Handle 'error' of type ValidationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PlansIndexRequest](src/Givebutter/Requests/RecurringPlans/PlansIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PlansResponse](src/Givebutter/Models/V1PlansResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[PlansIndexError](src/Givebutter/Errors/PlansIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecurringPlanResource&gt; PlansShow(PlansShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RecurringPlans.PlansShow(new PlansShowRequest { Plan = "some example string" });
    // TODO: Handle 'response' of type RecurringPlanResource
}
catch (ApiException<PlansShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PlansShowRequest](src/Givebutter/Requests/RecurringPlans/PlansShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringPlanResource](src/Givebutter/Models/RecurringPlanResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[PlansShowError](src/Givebutter/Errors/PlansShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SsoAccounts

> Source: [SsoAccounts](src/Givebutter/Api/SsoAccounts.cs)

<details>
<summary><code>Task&lt;SsoAccountResource&gt; SsoAccount(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SsoAccounts.SsoAccount();
    // TODO: Handle 'response' of type SsoAccountResource
}
catch (ApiException<SsoAccountError> ex)
{
    if (ex.Error.TryGetAuthenticationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthenticationException1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SsoAccountResource](src/Givebutter/Models/SsoAccountResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[SsoAccountError](src/Givebutter/Errors/SsoAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SsoCampaigns

> Source: [SsoCampaigns](src/Givebutter/Api/SsoCampaigns.cs)

<details>
<summary><code>Task&lt;CampaignResource&gt; SsoCampaignsShow(SsoCampaignsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SsoCampaigns.SsoCampaignsShow(new SsoCampaignsShowRequest { Campaign = 1 });
    // TODO: Handle 'response' of type CampaignResource
}
catch (ApiException<SsoCampaignsShowError> ex)
{
    if (ex.Error.TryGetAuthenticationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthenticationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SsoCampaignsShowRequest](src/Givebutter/Requests/SsoCampaigns/SsoCampaignsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignResource](src/Givebutter/Models/CampaignResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[SsoCampaignsShowError](src/Givebutter/Errors/SsoCampaignsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tickets

> Source: [Tickets](src/Givebutter/Api/Tickets.cs)

<details>
<summary><code>Task&lt;V1TicketsResponse&gt; TicketsIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tickets.TicketsIndex();
    // TODO: Handle 'response' of type V1TicketsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TicketsResponse](src/Givebutter/Models/V1TicketsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Givebutter/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TicketResource&gt; TicketsShow(TicketsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tickets.TicketsShow(new TicketsShowRequest { Ticket = "some example string" });
    // TODO: Handle 'response' of type TicketResource
}
catch (ApiException<TicketsShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TicketsShowRequest](src/Givebutter/Requests/Tickets/TicketsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TicketResource](src/Givebutter/Models/TicketResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[TicketsShowError](src/Givebutter/Errors/TicketsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](src/Givebutter/Api/Transactions.cs)

<details>
<summary><code>Task&lt;V1TransactionsResponse&gt; TransactionsIndex(TransactionsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.TransactionsIndex(new TransactionsIndexRequest());
    // TODO: Handle 'response' of type V1TransactionsResponse
}
catch (ApiException<TransactionsIndexError> ex)
{
    if (ex.Error.TryGetValidationException1(out var error))
    {
        // TODO: Handle 'error' of type ValidationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TransactionsIndexRequest](src/Givebutter/Requests/Transactions/TransactionsIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TransactionsResponse](src/Givebutter/Models/V1TransactionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[TransactionsIndexError](src/Givebutter/Errors/TransactionsIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransactionResource2&gt; TransactionsShow(TransactionsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.TransactionsShow(new TransactionsShowRequest
    {
        Transaction = "some example string",
    });
    // TODO: Handle 'response' of type TransactionResource2
}
catch (ApiException<TransactionsShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TransactionsShowRequest](src/Givebutter/Requests/Transactions/TransactionsShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionResource2](src/Givebutter/Models/AnyOf/TransactionResource2.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[TransactionsShowError](src/Givebutter/Errors/TransactionsShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransactionResource2&gt; TransactionsStore(TransactionsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.TransactionsStore(new TransactionsStoreRequest
    {
        Body = new StoreTransactionRequest
        {
            Method = PaymentMethodEnum.Ach,
            TransactedAt = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
            Amount = "some example string",
        },
    });
    // TODO: Handle 'response' of type TransactionResource2
}
catch (ApiException<TransactionsStoreError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TransactionsStoreRequest](src/Givebutter/Requests/Transactions/TransactionsStoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionResource2](src/Givebutter/Models/AnyOf/TransactionResource2.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[TransactionsStoreError](src/Givebutter/Errors/TransactionsStoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransactionResource2&gt; TransactionsUpdate(TransactionsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.TransactionsUpdate(new TransactionsUpdateRequest
    {
        Transaction = "some example string",
    });
    // TODO: Handle 'response' of type TransactionResource2
}
catch (ApiException<TransactionsUpdateError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TransactionsUpdateRequest](src/Givebutter/Requests/Transactions/TransactionsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionResource2](src/Givebutter/Models/AnyOf/TransactionResource2.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[TransactionsUpdateError](src/Givebutter/Errors/TransactionsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhookActivities

> Source: [WebhookActivities](src/Givebutter/Api/WebhookActivities.cs)

<details>
<summary><code>Task&lt;V1WebhooksActivitiesResponse&gt; WebhooksActivitiesIndex(WebhooksActivitiesIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhookActivities.WebhooksActivitiesIndex(new WebhooksActivitiesIndexRequest
    {
        Webhook = "some example string",
    });
    // TODO: Handle 'response' of type V1WebhooksActivitiesResponse
}
catch (ApiException<WebhooksActivitiesIndexError> ex)
{
    if (ex.Error.TryGetModelNotFoundException1(out var error))
    {
        // TODO: Handle 'error' of type ModelNotFoundException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebhooksActivitiesIndexRequest](src/Givebutter/Requests/WebhookActivities/WebhooksActivitiesIndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebhooksActivitiesResponse](src/Givebutter/Models/V1WebhooksActivitiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[WebhooksActivitiesIndexError](src/Givebutter/Errors/WebhooksActivitiesIndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookActivityResource&gt; WebhooksActivitiesShow(WebhooksActivitiesShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhookActivities.WebhooksActivitiesShow(new WebhooksActivitiesShowRequest
    {
        Webhook = "some example string",
        Activity = "some example string",
    });
    // TODO: Handle 'response' of type WebhookActivityResource
}
catch (ApiException<WebhooksActivitiesShowError> ex)
{
    if (ex.Error.TryGetModelNotFoundException1(out var error))
    {
        // TODO: Handle 'error' of type ModelNotFoundException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebhooksActivitiesShowRequest](src/Givebutter/Requests/WebhookActivities/WebhooksActivitiesShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookActivityResource](src/Givebutter/Models/WebhookActivityResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[WebhooksActivitiesShowError](src/Givebutter/Errors/WebhooksActivitiesShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Givebutter/Api/WebhooksApi.cs)

<details>
<summary><code>Task WebhooksDestroy(WebhooksDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.WebhooksApi.WebhooksDestroy(new WebhooksDestroyRequest { Webhook = "some example string" });
}
catch (ApiException<WebhooksDestroyError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebhooksDestroyRequest](src/Givebutter/Requests/WebhooksApi/WebhooksDestroyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[WebhooksDestroyError](src/Givebutter/Errors/WebhooksDestroyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WebhooksResponse&gt; WebhooksIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.WebhooksIndex();
    // TODO: Handle 'response' of type V1WebhooksResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebhooksResponse](src/Givebutter/Models/V1WebhooksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Givebutter/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookResource&gt; WebhooksShow(WebhooksShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.WebhooksShow(new WebhooksShowRequest { Webhook = "some example string" });
    // TODO: Handle 'response' of type WebhookResource
}
catch (ApiException<WebhooksShowError> ex)
{
    if (ex.Error.TryGetAuthorizationException1(out var error))
    {
        // TODO: Handle 'error' of type AuthorizationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebhooksShowRequest](src/Givebutter/Requests/WebhooksApi/WebhooksShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResource](src/Givebutter/Models/WebhookResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[WebhooksShowError](src/Givebutter/Errors/WebhooksShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookResource&gt; WebhooksStore(WebhooksStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.WebhooksStore(new WebhooksStoreRequest
    {
        Body = new V1WebhooksRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type WebhookResource
}
catch (ApiException<WebhooksStoreError> ex)
{
    if (ex.Error.TryGetValidationException1(out var error))
    {
        // TODO: Handle 'error' of type ValidationException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebhooksStoreRequest](src/Givebutter/Requests/WebhooksApi/WebhooksStoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResource](src/Givebutter/Models/WebhookResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[WebhooksStoreError](src/Givebutter/Errors/WebhooksStoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookResource&gt; WebhooksUpdate(WebhooksUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.WebhooksUpdate(new WebhooksUpdateRequest
    {
        Webhook = "some example string",
        Body = new V1WebhooksRequest1 { Url = "https://example.com", Events = [Event.CampaignCreated] },
    });
    // TODO: Handle 'response' of type WebhookResource
}
catch (ApiException<WebhooksUpdateError> ex)
{
    if (ex.Error.TryGetModelNotFoundException1(out var error))
    {
        // TODO: Handle 'error' of type ModelNotFoundException1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebhooksUpdateRequest](src/Givebutter/Requests/WebhooksApi/WebhooksUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResource](src/Givebutter/Models/WebhookResource.cs)</code>

**OnError**: <code>[ApiException](src/Givebutter/Core/Exceptions/ApiException.cs)&lt;[WebhooksUpdateError](src/Givebutter/Errors/WebhooksUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

