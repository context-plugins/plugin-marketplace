# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [HightouchClient](src/Hightouch/HightouchClient.cs)

## Campaigns

> Source: [Campaigns](src/Hightouch/Api/Campaigns.cs)

<details>
<summary><code>Task&lt;BatchSendStatusResponse&gt; GetSendStatuses(GetSendStatusesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the delivery status of up to 100 sends in a single request, using the
`sendId` values returned from the start endpoint. Prefer this over polling
the single-send endpoint once per `sendId`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.GetSendStatuses(new GetSendStatusesRequest
    {
        CampaignId = "some example string",
        Body = new BatchSendStatusRequest { SendIds = ["some example string"] },
    });
    // TODO: Handle 'response' of type BatchSendStatusResponse
}
catch (ApiException<GetSendStatusesError> ex)
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

<code>[GetSendStatusesRequest](src/Hightouch/Requests/Campaigns/GetSendStatusesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchSendStatusResponse](src/Hightouch/Models/BatchSendStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetSendStatusesError](src/Hightouch/Errors/GetSendStatusesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CampaignsTriggerResponse&gt; TriggerCampaign(TriggerCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start an API-triggered campaign: send to the given recipients.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.TriggerCampaign(new TriggerCampaignRequest
    {
        CampaignId = "some example string",
        Body = new StartCampaignRequest { Recipients = [new HandleCampaignRecipient()] },
    });
    // TODO: Handle 'response' of type CampaignsTriggerResponse
}
catch (ApiException<TriggerCampaignError> ex)
{
    if (ex.Error.TryGetTriggerErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type TriggerErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TriggerCampaignRequest](src/Hightouch/Requests/Campaigns/TriggerCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignsTriggerResponse](src/Hightouch/Models/AnyOf/CampaignsTriggerResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[TriggerCampaignError](src/Hightouch/Errors/TriggerCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DecisionEngine

> Source: [DecisionEngine](src/Hightouch/Api/DecisionEngine.cs)

<details>
<summary><code>Task&lt;DecisionEngineFlowMessagesCloneResponse&gt; CloneMessage(CloneMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clone a message within a flow. The copy keeps the source message's
config, tags, guardrails, and variables, and is created disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DecisionEngine.CloneMessage(new CloneMessageRequest
    {
        FlowId = "some example string",
        MessageId = "some example string",
    });
    // TODO: Handle 'response' of type DecisionEngineFlowMessagesCloneResponse
}
catch (ApiException<CloneMessageError> ex)
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

<code>[CloneMessageRequest](src/Hightouch/Requests/DecisionEngine/CloneMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DecisionEngineFlowMessagesCloneResponse](src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesCloneResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[CloneMessageError](src/Hightouch/Errors/CloneMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DecisionEngineFlowMessagesResponse11&gt; CreateMessage(CreateMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a message in a flow

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DecisionEngine.CreateMessage(new CreateMessageRequest
    {
        FlowId = "some example string",
        Body = new DecisionEngineMessageCreate
        {
            Name = "some example string",
            ChannelId = "some example string",
            Config = new Dictionary<string, object>(),
        },
    });
    // TODO: Handle 'response' of type DecisionEngineFlowMessagesResponse11
}
catch (ApiException<CreateMessageError> ex)
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

<code>[CreateMessageRequest](src/Hightouch/Requests/DecisionEngine/CreateMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DecisionEngineFlowMessagesResponse11](src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesResponse11.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[CreateMessageError](src/Hightouch/Errors/CreateMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DecisionEngineFlowMessagesResponse13&gt; DeleteMessage(DeleteMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a message. The message is soft-deleted and disabled in the flow,
so it is no longer returned by the API and is ineligible for future sends.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DecisionEngine.DeleteMessage(new DeleteMessageRequest
    {
        FlowId = "some example string",
        MessageId = "some example string",
    });
    // TODO: Handle 'response' of type DecisionEngineFlowMessagesResponse13
}
catch (ApiException<DeleteMessageError> ex)
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

<code>[DeleteMessageRequest](src/Hightouch/Requests/DecisionEngine/DeleteMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DecisionEngineFlowMessagesResponse13](src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesResponse13.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[DeleteMessageError](src/Hightouch/Errors/DeleteMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DecisionEngineFlowResponse&gt; GetFlow(GetFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a decision engine flow by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DecisionEngine.GetFlow(new GetFlowRequest { FlowId = "some example string" });
    // TODO: Handle 'response' of type DecisionEngineFlowResponse
}
catch (ApiException<GetFlowError> ex)
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

<code>[GetFlowRequest](src/Hightouch/Requests/DecisionEngine/GetFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DecisionEngineFlowResponse](src/Hightouch/Models/AnyOf/DecisionEngineFlowResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetFlowError](src/Hightouch/Errors/GetFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DecisionEngineFlowMessagesResponse11&gt; GetMessage(GetMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single message by flow and message ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DecisionEngine.GetMessage(new GetMessageRequest
    {
        FlowId = "some example string",
        MessageId = "some example string",
    });
    // TODO: Handle 'response' of type DecisionEngineFlowMessagesResponse11
}
catch (ApiException<GetMessageError> ex)
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

<code>[GetMessageRequest](src/Hightouch/Requests/DecisionEngine/GetMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DecisionEngineFlowMessagesResponse11](src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesResponse11.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetMessageError](src/Hightouch/Errors/GetMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DecisionEngineFlowsResponse1&gt; ListFlows(ListFlowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List decision engine flows in the workspace

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DecisionEngine.ListFlows(new ListFlowsRequest());
    // TODO: Handle 'response' of type DecisionEngineFlowsResponse1
}
catch (ApiException<ListFlowsError> ex)
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

<code>[ListFlowsRequest](src/Hightouch/Requests/DecisionEngine/ListFlowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DecisionEngineFlowsResponse1](src/Hightouch/Models/AnyOf/DecisionEngineFlowsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListFlowsError](src/Hightouch/Errors/ListFlowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DecisionEngineFlowMessagesResponse1&gt; ListMessages(ListMessagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List messages for a flow

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DecisionEngine.ListMessages(new ListMessagesRequest { FlowId = "some example string" });
    // TODO: Handle 'response' of type DecisionEngineFlowMessagesResponse1
}
catch (ApiException<ListMessagesError> ex)
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

<code>[ListMessagesRequest](src/Hightouch/Requests/DecisionEngine/ListMessagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DecisionEngineFlowMessagesResponse1](src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListMessagesError](src/Hightouch/Errors/ListMessagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DecisionEngineFlowRunResponse&gt; RunFlow(RunFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a decision engine run for a specific flow

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DecisionEngine.RunFlow(new RunFlowRequest { FlowId = "some example string" });
    // TODO: Handle 'response' of type DecisionEngineFlowRunResponse
}
catch (ApiException<RunFlowError> ex)
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

<code>[RunFlowRequest](src/Hightouch/Requests/DecisionEngine/RunFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DecisionEngineFlowRunResponse](src/Hightouch/Models/AnyOf/DecisionEngineFlowRunResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[RunFlowError](src/Hightouch/Errors/RunFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DecisionEngineFlowMessagesResponse11&gt; UpdateMessage(UpdateMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a message

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DecisionEngine.UpdateMessage(new UpdateMessageRequest
    {
        FlowId = "some example string",
        MessageId = "some example string",
        Body = new DecisionEngineMessageUpdate(),
    });
    // TODO: Handle 'response' of type DecisionEngineFlowMessagesResponse11
}
catch (ApiException<UpdateMessageError> ex)
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

<code>[UpdateMessageRequest](src/Hightouch/Requests/DecisionEngine/UpdateMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DecisionEngineFlowMessagesResponse11](src/Hightouch/Models/AnyOf/DecisionEngineFlowMessagesResponse11.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[UpdateMessageError](src/Hightouch/Errors/UpdateMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Destinations

> Source: [Destinations](src/Hightouch/Api/Destinations.cs)

<details>
<summary><code>Task&lt;DestinationsResponse1&gt; CreateDestination(CreateDestinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new destination

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Destinations.CreateDestination(new CreateDestinationRequest
    {
        Body = new DestinationCreate
        {
            Name = "Webhook Website",
            Slug = "webhookwebsite",
            Type = "webhook",
            Configuration = new Dictionary<string, object>(),
        },
    });
    // TODO: Handle 'response' of type DestinationsResponse1
}
catch (ApiException<CreateDestinationError> ex)
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

<code>[CreateDestinationRequest](src/Hightouch/Requests/Destinations/CreateDestinationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DestinationsResponse1](src/Hightouch/Models/AnyOf/DestinationsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[CreateDestinationError](src/Hightouch/Errors/CreateDestinationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Destination&gt; GetDestination(GetDestinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a destination based on its Hightouch ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Destinations.GetDestination(new GetDestinationRequest { DestinationId = 1.5d });
    // TODO: Handle 'response' of type Destination
}
catch (ApiException<GetDestinationError> ex)
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

<code>[GetDestinationRequest](src/Hightouch/Requests/Destinations/GetDestinationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Destination](src/Hightouch/Models/Destination.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetDestinationError](src/Hightouch/Errors/GetDestinationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DestinationsResponse&gt; ListDestination(ListDestinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the destinations in the user's workspace

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Destinations.ListDestination(new ListDestinationRequest());
    // TODO: Handle 'response' of type DestinationsResponse
}
catch (ApiException<ListDestinationError> ex)
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

<code>[ListDestinationRequest](src/Hightouch/Requests/Destinations/ListDestinationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DestinationsResponse](src/Hightouch/Models/DestinationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListDestinationError](src/Hightouch/Errors/ListDestinationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DestinationsResponse1&gt; UpdateDestination(UpdateDestinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing destination

Patch a destination based on its Hightouch ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Destinations.UpdateDestination(new UpdateDestinationRequest
    {
        DestinationId = 1.5d,
        Body = new DestinationUpdate
        {
            Name = "Webhook Website code 201",
            Configuration = new Dictionary<string, object>(),
        },
    });
    // TODO: Handle 'response' of type DestinationsResponse1
}
catch (ApiException<UpdateDestinationError> ex)
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

<code>[UpdateDestinationRequest](src/Hightouch/Requests/Destinations/UpdateDestinationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DestinationsResponse1](src/Hightouch/Models/AnyOf/DestinationsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[UpdateDestinationError](src/Hightouch/Errors/UpdateDestinationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/Hightouch/Api/Events.cs)

<details>
<summary><code>Task&lt;EventsContractsResponse1&gt; CreateContract(CreateContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new event contract

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.CreateContract(new CreateContractRequest
    {
        Body = new EventContractCreate
        {
            Name = "My Contract",
            Events = [
                new Event2
                {
                    Schema = new Dictionary<string, object>(),
                    OnUndeclaredFields = OnUndeclaredFields.AllowEvent,
                    OnSchemaViolation = OnSchemaViolation.BlockEvent,
                    Name = "Checked Out",
                    Type = TypeEnum.Track,
                },
            ],
        },
    });
    // TODO: Handle 'response' of type EventsContractsResponse1
}
catch (ApiException<CreateContractError> ex)
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

<code>[CreateContractRequest](src/Hightouch/Requests/Events/CreateContractRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsContractsResponse1](src/Hightouch/Models/AnyOf/EventsContractsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[CreateContractError](src/Hightouch/Errors/CreateContractError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EventsDomainsResponse1&gt; CreateDomain(CreateDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new event domain, with its events and components.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.CreateDomain(new CreateDomainRequest
    {
        Body = new EventDomainCreate { Name = "some example string" },
    });
    // TODO: Handle 'response' of type EventsDomainsResponse1
}
catch (ApiException<CreateDomainError> ex)
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

<code>[CreateDomainRequest](src/Hightouch/Requests/Events/CreateDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsDomainsResponse1](src/Hightouch/Models/AnyOf/EventsDomainsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[CreateDomainError](src/Hightouch/Errors/CreateDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EventsContractsResponse1&gt; GetContract(GetContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a contract based on its contract ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.GetContract(new GetContractRequest { ContractId = "some example string" });
    // TODO: Handle 'response' of type EventsContractsResponse1
}
catch (ApiException<GetContractError> ex)
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

<code>[GetContractRequest](src/Hightouch/Requests/Events/GetContractRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsContractsResponse1](src/Hightouch/Models/AnyOf/EventsContractsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetContractError](src/Hightouch/Errors/GetContractError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EventsDomainsResponse1&gt; GetDomain(GetDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a domain by its id, including its events and components.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.GetDomain(new GetDomainRequest { DomainId = "some example string" });
    // TODO: Handle 'response' of type EventsDomainsResponse1
}
catch (ApiException<GetDomainError> ex)
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

<code>[GetDomainRequest](src/Hightouch/Requests/Events/GetDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsDomainsResponse1](src/Hightouch/Models/AnyOf/EventsDomainsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetDomainError](src/Hightouch/Errors/GetDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EventsContractsResponse&gt; ListContracts(ListContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all event contracts in the current workspace

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.ListContracts(new ListContractsRequest());
    // TODO: Handle 'response' of type EventsContractsResponse
}
catch (ApiException<ListContractsError> ex)
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

<code>[ListContractsRequest](src/Hightouch/Requests/Events/ListContractsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsContractsResponse](src/Hightouch/Models/EventsContractsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListContractsError](src/Hightouch/Errors/ListContractsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EventsDomainsResponse&gt; ListDomains(ListDomainsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all event domains in the current workspace.

Optional query `source`: filter to domains linked to that event source
(slug). When set, returned components are also filtered to those
applicable to the source.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.ListDomains(new ListDomainsRequest());
    // TODO: Handle 'response' of type EventsDomainsResponse
}
catch (ApiException<ListDomainsError> ex)
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

<code>[ListDomainsRequest](src/Hightouch/Requests/Events/ListDomainsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsDomainsResponse](src/Hightouch/Models/EventsDomainsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListDomainsError](src/Hightouch/Errors/ListDomainsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EventsContractsResponse11&gt; UpdateContract(UpdateContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing event contract

Patch an event contract based on its Hightouch ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.UpdateContract(new UpdateContractRequest
    {
        ContractId = "some example string",
        Body = new EventContractUpdate
        {
            Events = [
                new Event2
                {
                    Schema = new Dictionary<string, object>(),
                    OnUndeclaredFields = OnUndeclaredFields.BlockEvent,
                    OnSchemaViolation = OnSchemaViolation.BlockEvent,
                    Name = "Checked Out",
                    Type = TypeEnum.Track,
                },
            ],
        },
    });
    // TODO: Handle 'response' of type EventsContractsResponse11
}
catch (ApiException<UpdateContractError> ex)
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

<code>[UpdateContractRequest](src/Hightouch/Requests/Events/UpdateContractRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsContractsResponse11](src/Hightouch/Models/AnyOf/EventsContractsResponse11.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[UpdateContractError](src/Hightouch/Errors/UpdateContractError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EventsDomainsResponse1&gt; UpdateDomain(UpdateDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing event domain, replacing its events and components.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.UpdateDomain(new UpdateDomainRequest
    {
        DomainId = "some example string",
        Body = new EventDomainUpdate(),
    });
    // TODO: Handle 'response' of type EventsDomainsResponse1
}
catch (ApiException<UpdateDomainError> ex)
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

<code>[UpdateDomainRequest](src/Hightouch/Requests/Events/UpdateDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsDomainsResponse1](src/Hightouch/Models/AnyOf/EventsDomainsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[UpdateDomainError](src/Hightouch/Errors/UpdateDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IdGraphs

> Source: [IdGraphs](src/Hightouch/Api/IdGraphs.cs)

<details>
<summary><code>Task&lt;TriggerRunIdrOutput&gt; TriggerRunIdGraph(TriggerRunIdGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: use `/idr/{graphId}/trigger` instead

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IdGraphs.TriggerRunIdGraph(new TriggerRunIdGraphRequest
    {
        GraphId = "some example string",
    });
    // TODO: Handle 'response' of type TriggerRunIdrOutput
}
catch (ApiException<TriggerRunIdGraphError> ex)
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

<code>[TriggerRunIdGraphRequest](src/Hightouch/Requests/IdGraphs/TriggerRunIdGraphRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TriggerRunIdrOutput](src/Hightouch/Models/TriggerRunIdrOutput.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[TriggerRunIdGraphError](src/Hightouch/Errors/TriggerRunIdGraphError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Idr

> Source: [Idr](src/Hightouch/Api/Idr.cs)

<details>
<summary><code>Task&lt;ListIdrRunsOutput&gt; ListIdrRuns(ListIdrRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List runs for a given IDR graph

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Idr.ListIdrRuns(new ListIdrRunsRequest { GraphId = "some example string" });
    // TODO: Handle 'response' of type ListIdrRunsOutput
}
catch (ApiException<ListIdrRunsError> ex)
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

<code>[ListIdrRunsRequest](src/Hightouch/Requests/Idr/ListIdrRunsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIdrRunsOutput](src/Hightouch/Models/ListIdrRunsOutput.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListIdrRunsError](src/Hightouch/Errors/ListIdrRunsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IdrQueueForReprocessingOutput&gt; QueueForReprocessing(QueueForReprocessingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an async job to queue identifier values for reprocessing, optionally adding them to the blocklist.
If `block` is true (the default), identifier values will be added to the blocklist and ignored in future runs.
Clusters containing these identifier values will be queued for reprocessing.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Idr.QueueForReprocessing(new QueueForReprocessingRequest
    {
        GraphId = "some example string",
        Body = new IdrQueueForReprocessingInput
        {
            Identifiers = [
                new Identifier { Value = "a@b.com", IdentifierValue = "email" },
                new Identifier { Value = "1234567890", IdentifierValue = "phone" },
            ],
            Block = true,
        },
    });
    // TODO: Handle 'response' of type IdrQueueForReprocessingOutput
}
catch (ApiException<QueueForReprocessingError> ex)
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

<code>[QueueForReprocessingRequest](src/Hightouch/Requests/Idr/QueueForReprocessingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IdrQueueForReprocessingOutput](src/Hightouch/Models/IdrQueueForReprocessingOutput.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[QueueForReprocessingError](src/Hightouch/Errors/QueueForReprocessingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IdrReprocessStatusOutput&gt; ReprocessStatus(ReprocessStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of a reprocessing request

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Idr.ReprocessStatus(new ReprocessStatusRequest
    {
        GraphId = "some example string",
        RequestId = "some example string",
    });
    // TODO: Handle 'response' of type IdrReprocessStatusOutput
}
catch (ApiException<ReprocessStatusError> ex)
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

<code>[ReprocessStatusRequest](src/Hightouch/Requests/Idr/ReprocessStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IdrReprocessStatusOutput](src/Hightouch/Models/IdrReprocessStatusOutput.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ReprocessStatusError](src/Hightouch/Errors/ReprocessStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TriggerRunIdrOutput&gt; TriggerIdrRun(TriggerIdrRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a new IDR run for a graph

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Idr.TriggerIdrRun(new TriggerIdrRunRequest { GraphId = "some example string" });
    // TODO: Handle 'response' of type TriggerRunIdrOutput
}
catch (ApiException<TriggerIdrRunError> ex)
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

<code>[TriggerIdrRunRequest](src/Hightouch/Requests/Idr/TriggerIdrRunRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TriggerRunIdrOutput](src/Hightouch/Models/TriggerRunIdrOutput.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[TriggerIdrRunError](src/Hightouch/Errors/TriggerIdrRunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ModelsApi

> Source: [ModelsApi](src/Hightouch/Api/ModelsApi.cs)

<details>
<summary><code>Task&lt;ModelsResponse1&gt; CreateModel(CreateModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new model

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.CreateModel(new CreateModelRequest
    {
        Body = new ModelCreate
        {
            Name = "testModel3",
            Slug = "testModel3",
            QueryType = "raw_sql",
            SourceId = 1d,
            IsSchema = false,
            Raw = new Raw { Sql = "select id, last_name from users" },
            PrimaryKey = "id",
            Description = "Users with their last names",
        },
    });
    // TODO: Handle 'response' of type ModelsResponse1
}
catch (ApiException<CreateModelError> ex)
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

<code>[CreateModelRequest](src/Hightouch/Requests/ModelsApi/CreateModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsResponse1](src/Hightouch/Models/AnyOf/ModelsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[CreateModelError](src/Hightouch/Errors/CreateModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelsResponse11&gt; DeleteModel(DeleteModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a model

Deletes a model based on its Hightouch ID. Any syncs that use the model are
deleted as well. Deleting a parent model also deletes every audience built
on it. A model that is still referenced by a journey, priority list,
decision engine agent, dynamic content condition, saved chart, or identity
resolution graph cannot be deleted until those references are removed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.DeleteModel(new DeleteModelRequest { ModelId = 1.5d });
    // TODO: Handle 'response' of type ModelsResponse11
}
catch (ApiException<DeleteModelError> ex)
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

<code>[DeleteModelRequest](src/Hightouch/Requests/ModelsApi/DeleteModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsResponse11](src/Hightouch/Models/AnyOf/ModelsResponse11.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[DeleteModelError](src/Hightouch/Errors/DeleteModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelsSizeResponse1&gt; GetAudienceSize(GetAudienceSizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the state of an audience size job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.GetAudienceSize(new GetAudienceSizeRequest
    {
        ModelId = 1.5d,
        JobId = "some example string",
    });
    // TODO: Handle 'response' of type ModelsSizeResponse1
}
catch (ApiException<GetAudienceSizeError> ex)
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

<code>[GetAudienceSizeRequest](src/Hightouch/Requests/ModelsApi/GetAudienceSizeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsSizeResponse1](src/Hightouch/Models/AnyOf/ModelsSizeResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetAudienceSizeError](src/Hightouch/Errors/GetAudienceSizeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Model&gt; GetModel(GetModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve models from model ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.GetModel(new GetModelRequest { ModelId = 1.5d });
    // TODO: Handle 'response' of type Model
}
catch (ApiException<GetModelError> ex)
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

<code>[GetModelRequest](src/Hightouch/Requests/ModelsApi/GetModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Model](src/Hightouch/Models/Model.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetModelError](src/Hightouch/Errors/GetModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelsMatchBoosterRunsResponse&gt; ListEnrichmentRuns(ListEnrichmentRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Match Booster enrichment runs for a model, most recent first.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.ListEnrichmentRuns(new ListEnrichmentRunsRequest { ModelId = 1.5d });
    // TODO: Handle 'response' of type ModelsMatchBoosterRunsResponse
}
catch (ApiException<ListEnrichmentRunsError> ex)
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

<code>[ListEnrichmentRunsRequest](src/Hightouch/Requests/ModelsApi/ListEnrichmentRunsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsMatchBoosterRunsResponse](src/Hightouch/Models/AnyOf/ModelsMatchBoosterRunsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListEnrichmentRunsError](src/Hightouch/Errors/ListEnrichmentRunsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelsResponse&gt; ListModel(ListModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the models in the current workspace including parent and related models

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.ListModel(new ListModelRequest());
    // TODO: Handle 'response' of type ModelsResponse
}
catch (ApiException<ListModelError> ex)
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

<code>[ListModelRequest](src/Hightouch/Requests/ModelsApi/ListModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsResponse](src/Hightouch/Models/ModelsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListModelError](src/Hightouch/Errors/ListModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelsSizeResponse&gt; StartAudienceSizeJob(StartAudienceSizeJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a background job to compute audience size.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.StartAudienceSizeJob(new StartAudienceSizeJobRequest { ModelId = 1.5d });
    // TODO: Handle 'response' of type ModelsSizeResponse
}
catch (ApiException<StartAudienceSizeJobError> ex)
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

<code>[StartAudienceSizeJobRequest](src/Hightouch/Requests/ModelsApi/StartAudienceSizeJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsSizeResponse](src/Hightouch/Models/AnyOf/ModelsSizeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[StartAudienceSizeJobError](src/Hightouch/Errors/StartAudienceSizeJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelsMatchBoosterTriggerResponse&gt; TriggerEnrichment(TriggerEnrichmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a Match Booster enrichment run for a model. The model must have
Match Booster enabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.TriggerEnrichment(new TriggerEnrichmentRequest
    {
        ModelId = 1.5d,
        Body = new MatchBoosterTriggerInput { ForceFullEnrichment = false },
    });
    // TODO: Handle 'response' of type ModelsMatchBoosterTriggerResponse
}
catch (ApiException<TriggerEnrichmentError> ex)
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

<code>[TriggerEnrichmentRequest](src/Hightouch/Requests/ModelsApi/TriggerEnrichmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsMatchBoosterTriggerResponse](src/Hightouch/Models/AnyOf/ModelsMatchBoosterTriggerResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[TriggerEnrichmentError](src/Hightouch/Errors/TriggerEnrichmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelsResponse1&gt; UpdateModel(UpdateModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing model

Patch a model based on its Hightouch ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.UpdateModel(new UpdateModelRequest
    {
        ModelId = 1.5d,
        Body = new ModelUpdate
        {
            Name = "testmodel",
            Description = "Names of all users",
            Raw = new Raw { Sql = "select name from users" },
            PrimaryKey = "id",
        },
    });
    // TODO: Handle 'response' of type ModelsResponse1
}
catch (ApiException<UpdateModelError> ex)
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

<code>[UpdateModelRequest](src/Hightouch/Requests/ModelsApi/UpdateModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsResponse1](src/Hightouch/Models/AnyOf/ModelsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[UpdateModelError](src/Hightouch/Errors/UpdateModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Signups

> Source: [Signups](src/Hightouch/Api/Signups.cs)

<details>
<summary><code>Task&lt;SignupsResponse&gt; CreateSignup(CreateSignupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record a signup: consent for a delivery handle, plus the fields the form
collected.

Whether consent settles immediately or waits for a double opt-in
confirmation is the channel's configuration, so one call covers both and
the response says which happened.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Signups.CreateSignup(new CreateSignupOperationRequest
    {
        Body = new CreateSignupRequest { Channel = SignupChannel.Email, Handle = "some example string" },
    });
    // TODO: Handle 'response' of type SignupsResponse
}
catch (ApiException<CreateSignupError> ex)
{
    if (ex.Error.TryGetSignupErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type SignupErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSignupOperationRequest](src/Hightouch/Requests/Signups/CreateSignupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignupsResponse](src/Hightouch/Models/AnyOf/SignupsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[CreateSignupError](src/Hightouch/Errors/CreateSignupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sources

> Source: [Sources](src/Hightouch/Api/Sources.cs)

<details>
<summary><code>Task&lt;SourcesResponse1&gt; CreateSource(CreateSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new source

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sources.CreateSource(new CreateSourceRequest
    {
        Body = new SourceCreate
        {
            Name = "postgres-connection2",
            Slug = "postgres-connection2",
            Type = "postgres",
            Configuration = new Dictionary<string, object>(),
        },
    });
    // TODO: Handle 'response' of type SourcesResponse1
}
catch (ApiException<CreateSourceError> ex)
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

<code>[CreateSourceRequest](src/Hightouch/Requests/Sources/CreateSourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SourcesResponse1](src/Hightouch/Models/AnyOf/SourcesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[CreateSourceError](src/Hightouch/Errors/CreateSourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Source&gt; GetSource(GetSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve source from source ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sources.GetSource(new GetSourceRequest { SourceId = 1.5d });
    // TODO: Handle 'response' of type Source
}
catch (ApiException<GetSourceError> ex)
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

<code>[GetSourceRequest](src/Hightouch/Requests/Sources/GetSourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Source](src/Hightouch/Models/Source.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetSourceError](src/Hightouch/Errors/GetSourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SourcesResponse&gt; ListSource(ListSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the sources in the current workspace

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sources.ListSource(new ListSourceRequest());
    // TODO: Handle 'response' of type SourcesResponse
}
catch (ApiException<ListSourceError> ex)
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

<code>[ListSourceRequest](src/Hightouch/Requests/Sources/ListSourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SourcesResponse](src/Hightouch/Models/SourcesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListSourceError](src/Hightouch/Errors/ListSourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SourcesResponse1&gt; UpdateSource(UpdateSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing source

Patch a source based on its Hightouch ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sources.UpdateSource(new UpdateSourceRequest
    {
        SourceId = 1.5d,
        Body = new SourceUpdate { Name = "postgres-connection2", Configuration = new Dictionary<string, object>() },
    });
    // TODO: Handle 'response' of type SourcesResponse1
}
catch (ApiException<UpdateSourceError> ex)
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

<code>[UpdateSourceRequest](src/Hightouch/Requests/Sources/UpdateSourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SourcesResponse1](src/Hightouch/Models/AnyOf/SourcesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[UpdateSourceError](src/Hightouch/Errors/UpdateSourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SyncSequences

> Source: [SyncSequences](src/Hightouch/Api/SyncSequences.cs)

<details>
<summary><code>Task&lt;SyncSequenceStatusOutput&gt; GetSyncSequenceRun(GetSyncSequenceRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of a sync sequence run.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SyncSequences.GetSyncSequenceRun(new GetSyncSequenceRunRequest
    {
        SyncSequenceRunId = "some example string",
    });
    // TODO: Handle 'response' of type SyncSequenceStatusOutput
}
catch (ApiException<GetSyncSequenceRunError> ex)
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

<code>[GetSyncSequenceRunRequest](src/Hightouch/Requests/SyncSequences/GetSyncSequenceRunRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncSequenceStatusOutput](src/Hightouch/Models/SyncSequenceStatusOutput.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetSyncSequenceRunError](src/Hightouch/Errors/GetSyncSequenceRunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TriggerSequenceRunOutput&gt; TriggerSequenceRun(TriggerSequenceRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a new run for the given sync sequence.

A sequence never runs concurrently with itself. If a run is already in
progress, then where run queueing is enabled for the workspace, a single
follow-up run is queued and starts after the current run completes
(repeated triggers return the same queued run); otherwise the id of the
run already in progress is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SyncSequences.TriggerSequenceRun(new TriggerSequenceRunRequest
    {
        SyncSequenceId = "some example string",
    });
    // TODO: Handle 'response' of type TriggerSequenceRunOutput
}
catch (ApiException<TriggerSequenceRunError> ex)
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

<code>[TriggerSequenceRunRequest](src/Hightouch/Requests/SyncSequences/TriggerSequenceRunRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TriggerSequenceRunOutput](src/Hightouch/Models/TriggerSequenceRunOutput.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[TriggerSequenceRunError](src/Hightouch/Errors/TriggerSequenceRunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SyncTemplates

> Source: [SyncTemplates](src/Hightouch/Api/SyncTemplates.cs)

<details>
<summary><code>Task&lt;SyncTemplatesResponse1&gt; CreateSyncTemplate(CreateSyncTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new sync template

A sync template holds a destination configuration that syncs created from
it share. `overrideConfig` names the configuration fields those syncs may
set for themselves; every other field is locked to the template's value.
Create a sync from the template with `POST /syncs` and `syncTemplateId`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SyncTemplates.CreateSyncTemplate(new CreateSyncTemplateRequest
    {
        Body = new SyncTemplateCreate
        {
            Name = "Salesforce Contacts Template",
            ModelId = 42d,
            DestinationId = 17d,
            Configuration = new Dictionary<string, object>(),
            OverrideConfig = new Dictionary<string, SyncTemplateOverrideOption>
            {
                ["mappings"] = new SyncTemplateOverrideOption { Overridable = true },
            },
        },
    });
    // TODO: Handle 'response' of type SyncTemplatesResponse1
}
catch (ApiException<CreateSyncTemplateError> ex)
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

<code>[CreateSyncTemplateRequest](src/Hightouch/Requests/SyncTemplates/CreateSyncTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncTemplatesResponse1](src/Hightouch/Models/AnyOf/SyncTemplatesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[CreateSyncTemplateError](src/Hightouch/Errors/CreateSyncTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncTemplate&gt; GetSyncTemplate(GetSyncTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a sync template given its ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SyncTemplates.GetSyncTemplate(new GetSyncTemplateRequest { SyncTemplateId = 1.5d });
    // TODO: Handle 'response' of type SyncTemplate
}
catch (ApiException<GetSyncTemplateError> ex)
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

<code>[GetSyncTemplateRequest](src/Hightouch/Requests/SyncTemplates/GetSyncTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncTemplate](src/Hightouch/Models/SyncTemplate.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetSyncTemplateError](src/Hightouch/Errors/GetSyncTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncTemplatesResponse&gt; ListSyncTemplates(ListSyncTemplatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the sync templates in the current workspace

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SyncTemplates.ListSyncTemplates(new ListSyncTemplatesRequest());
    // TODO: Handle 'response' of type SyncTemplatesResponse
}
catch (ApiException<ListSyncTemplatesError> ex)
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

<code>[ListSyncTemplatesRequest](src/Hightouch/Requests/SyncTemplates/ListSyncTemplatesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncTemplatesResponse](src/Hightouch/Models/SyncTemplatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListSyncTemplatesError](src/Hightouch/Errors/ListSyncTemplatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncTemplatesResponse1&gt; UpdateSyncTemplate(UpdateSyncTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing sync template

Patch a sync template based on its Hightouch ID. The `destinationId` of a
sync template cannot be changed after creation. Syncs created from the
template pick up a new `configuration` on their next run; a new
`overrideConfig` replaces the previous one and applies to the next write
of each sync's `syncTemplateOverrides`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SyncTemplates.UpdateSyncTemplate(new UpdateSyncTemplateRequest
    {
        SyncTemplateId = 1.5d,
        Body = new SyncTemplateUpdate
        {
            Name = "Salesforce Contacts Template (v2)",
            SchedulePaused = true,
            OverrideConfig = new Dictionary<string, SyncTemplateOverrideOption>
            {
                ["mappings"] = new SyncTemplateOverrideOption { Overridable = true },
                ["externalIdMapping"] = new SyncTemplateOverrideOption { Overridable = true },
            },
        },
    });
    // TODO: Handle 'response' of type SyncTemplatesResponse1
}
catch (ApiException<UpdateSyncTemplateError> ex)
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

<code>[UpdateSyncTemplateRequest](src/Hightouch/Requests/SyncTemplates/UpdateSyncTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncTemplatesResponse1](src/Hightouch/Models/AnyOf/SyncTemplatesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[UpdateSyncTemplateError](src/Hightouch/Errors/UpdateSyncTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Syncs

> Source: [Syncs](src/Hightouch/Api/Syncs.cs)

<details>
<summary><code>Task&lt;SyncDraft&gt; ApproveSyncDraft(ApproveSyncDraftRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve a sync draft and apply its change. Fails with 409 and applies
nothing when the draft or the sync changed after the versions you send.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.ApproveSyncDraft(new ApproveSyncDraftRequest
    {
        SyncId = 1.5d,
        DraftId = "some example string",
        Body = new ApproveSyncDraftInput
        {
            ExpectedDraftVersion = "some example string",
            ExpectedResourceVersion = "some example string",
        },
    });
    // TODO: Handle 'response' of type SyncDraft
}
catch (ApiException<ApproveSyncDraftError> ex)
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

<code>[ApproveSyncDraftRequest](src/Hightouch/Requests/Syncs/ApproveSyncDraftRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncDraft](src/Hightouch/Models/SyncDraft.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ApproveSyncDraftError](src/Hightouch/Errors/ApproveSyncDraftError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncsResponse1&gt; CreateSync(CreateSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new sync

A sync either owns its configuration (`destinationId` and
`configuration`) or is created from a sync template (`syncTemplateId`).
A sync created from a template uses the template's destination and
configuration, and may set the fields the template's `overrideConfig`
marks as overridable through `syncTemplateOverrides`. The effective
configuration is validated for the destination either way, and
`configuration.` errors on a template sync refer to that merged
configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.CreateSync(new CreateSyncRequest
    {
        Body = new SyncCreate
        {
            Slug = "testsync3",
            ModelId = 4d,
            Schedule = new Schedule { Type = "some example string" },
            Disabled = false,
            DestinationId = 1d,
            Configuration = new Dictionary<string, object>(),
        },
    });
    // TODO: Handle 'response' of type SyncsResponse1
}
catch (ApiException<CreateSyncError> ex)
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

<code>[CreateSyncRequest](src/Hightouch/Requests/Syncs/CreateSyncRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncsResponse1](src/Hightouch/Models/AnyOf/SyncsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[CreateSyncError](src/Hightouch/Errors/CreateSyncError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncsResponse11&gt; DeleteSync(DeleteSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a sync

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.DeleteSync(new DeleteSyncRequest { SyncId = 1.5d });
    // TODO: Handle 'response' of type SyncsResponse11
}
catch (ApiException<DeleteSyncError> ex)
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

<code>[DeleteSyncRequest](src/Hightouch/Requests/Syncs/DeleteSyncRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncsResponse11](src/Hightouch/Models/AnyOf/SyncsResponse11.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[DeleteSyncError](src/Hightouch/Errors/DeleteSyncError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Sync&gt; GetSync(GetSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve sync from sync ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.GetSync(new GetSyncRequest { SyncId = 1.5d });
    // TODO: Handle 'response' of type Sync
}
catch (ApiException<GetSyncError> ex)
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

<code>[GetSyncRequest](src/Hightouch/Requests/Syncs/GetSyncRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Sync](src/Hightouch/Models/Sync.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetSyncError](src/Hightouch/Errors/GetSyncError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncDraftDetail&gt; GetSyncDraft(GetSyncDraftRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a sync draft with the sync as it is now and as approval would
leave it. Send its `draftVersion` and `resourceVersion` to approve it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.GetSyncDraft(new GetSyncDraftRequest
    {
        SyncId = 1.5d,
        DraftId = "some example string",
    });
    // TODO: Handle 'response' of type SyncDraftDetail
}
catch (ApiException<GetSyncDraftError> ex)
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

<code>[GetSyncDraftRequest](src/Hightouch/Requests/Syncs/GetSyncDraftRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncDraftDetail](src/Hightouch/Models/SyncDraftDetail.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[GetSyncDraftError](src/Hightouch/Errors/GetSyncDraftError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncDraftList&gt; ListDraftsForSync(ListDraftsForSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List one sync's drafts, oldest change first.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.ListDraftsForSync(new ListDraftsForSyncRequest { SyncId = 1.5d });
    // TODO: Handle 'response' of type SyncDraftList
}
catch (ApiException<ListDraftsForSyncError> ex)
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

<code>[ListDraftsForSyncRequest](src/Hightouch/Requests/Syncs/ListDraftsForSyncRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncDraftList](src/Hightouch/Models/SyncDraftList.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListDraftsForSyncError](src/Hightouch/Errors/ListDraftsForSyncError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncsResponse&gt; ListSync(ListSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the syncs in the current workspace

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.ListSync(new ListSyncRequest());
    // TODO: Handle 'response' of type SyncsResponse
}
catch (ApiException<ListSyncError> ex)
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

<code>[ListSyncRequest](src/Hightouch/Requests/Syncs/ListSyncRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncsResponse](src/Hightouch/Models/SyncsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListSyncError](src/Hightouch/Errors/ListSyncError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncDraftList&gt; ListSyncDrafts(ListSyncDraftsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List sync drafts across every sync in the workspace, oldest change first.
Poll with `status=pending` and read every page each time: the list shows
the current state, not a feed of changes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.ListSyncDrafts(new ListSyncDraftsRequest());
    // TODO: Handle 'response' of type SyncDraftList
}
catch (ApiException<ListSyncDraftsError> ex)
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

<code>[ListSyncDraftsRequest](src/Hightouch/Requests/Syncs/ListSyncDraftsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncDraftList](src/Hightouch/Models/SyncDraftList.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListSyncDraftsError](src/Hightouch/Errors/ListSyncDraftsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncsRunsResponse&gt; ListSyncRuns(ListSyncRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all sync runs under a sync

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.ListSyncRuns(new ListSyncRunsRequest { SyncId = 1.5d });
    // TODO: Handle 'response' of type SyncsRunsResponse
}
catch (ApiException<ListSyncRunsError> ex)
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

<code>[ListSyncRunsRequest](src/Hightouch/Requests/Syncs/ListSyncRunsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncsRunsResponse](src/Hightouch/Models/SyncsRunsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[ListSyncRunsError](src/Hightouch/Errors/ListSyncRunsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncDraft&gt; RejectSyncDraft(RejectSyncDraftRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reject a sync draft. The draft closes without applying its change; to try
again, the requester edits the sync.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.RejectSyncDraft(new RejectSyncDraftRequest
    {
        SyncId = 1.5d,
        DraftId = "some example string",
        Body = new RejectSyncDraftInput(),
    });
    // TODO: Handle 'response' of type SyncDraft
}
catch (ApiException<RejectSyncDraftError> ex)
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

<code>[RejectSyncDraftRequest](src/Hightouch/Requests/Syncs/RejectSyncDraftRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncDraft](src/Hightouch/Models/SyncDraft.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[RejectSyncDraftError](src/Hightouch/Errors/RejectSyncDraftError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TriggerRunOutput&gt; TriggerRun(TriggerRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a new run for the given sync.

If a run is already in progress, this queues a sync run that will get
executed immediately after the current run completes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.TriggerRun(new TriggerRunRequest { SyncId = "some example string" });
    // TODO: Handle 'response' of type TriggerRunOutput
}
catch (ApiException<TriggerRunError> ex)
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

<code>[TriggerRunRequest](src/Hightouch/Requests/Syncs/TriggerRunRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TriggerRunOutput](src/Hightouch/Models/TriggerRunOutput.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[TriggerRunError](src/Hightouch/Errors/TriggerRunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncsTriggerResponse&gt; TriggerRunCustom(TriggerRunCustomRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger a new run globally based on sync id or sync slug

If a run is already in progress, this queues a sync run that will get
executed immediately after the current run completes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.TriggerRunCustom(new TriggerRunCustomRequest
    {
        Body = new TriggerRunCustomInput(),
    });
    // TODO: Handle 'response' of type SyncsTriggerResponse
}
catch (ApiException<TriggerRunCustomError> ex)
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

<code>[TriggerRunCustomRequest](src/Hightouch/Requests/Syncs/TriggerRunCustomRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncsTriggerResponse](src/Hightouch/Models/AnyOf/SyncsTriggerResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[TriggerRunCustomError](src/Hightouch/Errors/TriggerRunCustomError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SyncsResponse1&gt; UpdateSync(UpdateSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing sync

Patch a sync based on its Hightouch ID. A sync bound to a sync template
takes its configuration from the template: change this sync's values
with `syncTemplateOverrides`, bind it to another template or detach it
with `syncTemplateId`, but do not set `configuration` while it is bound.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Syncs.UpdateSync(new UpdateSyncRequest
    {
        SyncId = 1.5d,
        Body = new SyncUpdate
        {
            Configuration = new Dictionary<string, object>(),
            Schedule = new Schedule { Type = "some example string" },
            Disabled = true,
        },
    });
    // TODO: Handle 'response' of type SyncsResponse1
}
catch (ApiException<UpdateSyncError> ex)
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

<code>[UpdateSyncRequest](src/Hightouch/Requests/Syncs/UpdateSyncRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncsResponse1](src/Hightouch/Models/AnyOf/SyncsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Hightouch/Core/Exceptions/ApiException.cs)&lt;[UpdateSyncError](src/Hightouch/Errors/UpdateSyncError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

