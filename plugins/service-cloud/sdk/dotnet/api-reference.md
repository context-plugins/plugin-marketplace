# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [SalesforceServiceCloudClient](src/SalesforceServiceCloud/SalesforceServiceCloudClient.cs)

## Bot

> Source: [Bot](src/SalesforceServiceCloud/Api/Bot.cs)

<details>
<summary><code>Task&lt;ChatMessageResponseEnvelope&gt; ContinueSession(ContinueSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to the bots API on an active session.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bot.ContinueSession(new ContinueSessionRequest
    {
        SessionId = "some example string",
        XOrgId = "00Dx0000000ALskEAG",
        XRequestId = "36a73651-a46d-4d16-9a8a-fd436ed62e1a",
        Body = new ChatMessageEnvelope { Message = new ChoiceMessage { SequenceId = 1L } },
    });
    // TODO: Handle 'response' of type ChatMessageResponseEnvelope
}
catch (ApiException<ContinueSessionError> ex)
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

<code>[ContinueSessionRequest](src/SalesforceServiceCloud/Requests/Bot/ContinueSessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChatMessageResponseEnvelope](src/SalesforceServiceCloud/Models/ChatMessageResponseEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/SalesforceServiceCloud/Core/Exceptions/ApiException.cs)&lt;[ContinueSessionError](src/SalesforceServiceCloud/Errors/ContinueSessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ChatMessageResponseEnvelope&gt; EndSession(EndSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to the bots API to end a session

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bot.EndSession(new EndSessionRequest
    {
        SessionId = "some example string",
        XOrgId = "00Dx0000000ALskEAG",
        XSessionEndReason = EndSessionReason.Transfer,
        XRequestId = "36a73651-a46d-4d16-9a8a-fd436ed62e1a",
    });
    // TODO: Handle 'response' of type ChatMessageResponseEnvelope
}
catch (ApiException<EndSessionError> ex)
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

<code>[EndSessionRequest](src/SalesforceServiceCloud/Requests/Bot/EndSessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChatMessageResponseEnvelope](src/SalesforceServiceCloud/Models/ChatMessageResponseEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/SalesforceServiceCloud/Core/Exceptions/ApiException.cs)&lt;[EndSessionError](src/SalesforceServiceCloud/Errors/EndSessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResponseEnvelope&gt; StartSession(StartSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to the bots API to start a new session.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bot.StartSession(new StartSessionRequest
    {
        BotId = "some example string",
        XOrgId = "00Dx0000000ALskEAG",
        XRequestId = "36a73651-a46d-4d16-9a8a-fd436ed62e1a",
        Body = new InitMessageEnvelope
        {
            ExternalSessionKey = "some example string",
            ForceConfig = new ForceConfig { Endpoint = "some example string" },
        },
    });
    // TODO: Handle 'response' of type ResponseEnvelope
}
catch (ApiException<StartSessionError> ex)
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

<code>[StartSessionRequest](src/SalesforceServiceCloud/Requests/Bot/StartSessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResponseEnvelope](src/SalesforceServiceCloud/Models/ResponseEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/SalesforceServiceCloud/Core/Exceptions/ApiException.cs)&lt;[StartSessionError](src/SalesforceServiceCloud/Errors/StartSessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](src/SalesforceServiceCloud/Api/Health.cs)

<details>
<summary><code>Task&lt;Status&gt; CheckHealthStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns whether the status of Einstein Bots API is up or down.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Health.CheckHealthStatus();
    // TODO: Handle 'response' of type Status
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

**OnSuccess**: <code>[Status](src/SalesforceServiceCloud/Models/Status.cs)</code>

**OnError**: <code>[ApiException](src/SalesforceServiceCloud/Core/Exceptions/ApiException.cs)&lt;[RawError](src/SalesforceServiceCloud/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Versions

> Source: [Versions](src/SalesforceServiceCloud/Api/Versions.cs)

<details>
<summary><code>Task&lt;SupportedVersions&gt; GetApiVersions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of supported Einstein Bots API versions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.GetApiVersions();
    // TODO: Handle 'response' of type SupportedVersions
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

**OnSuccess**: <code>[SupportedVersions](src/SalesforceServiceCloud/Models/SupportedVersions.cs)</code>

**OnError**: <code>[ApiException](src/SalesforceServiceCloud/Core/Exceptions/ApiException.cs)&lt;[RawError](src/SalesforceServiceCloud/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

