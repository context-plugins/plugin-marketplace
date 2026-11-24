# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AmazonLexClient](src/AmazonLex/AmazonLexClient.cs)

## Aliases

> Source: [Aliases](src/AmazonLex/Api/Aliases.cs)

<details>
<summary><code>Task&lt;string&gt; DeleteBotAlias(DeleteBotAliasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the DeleteBotAlias operation is successful.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Aliases.DeleteBotAlias(new DeleteBotAliasOperationRequest
    {
        BotName = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteBotAliasError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBotAliasOperationRequest](src/AmazonLex/Requests/Aliases/DeleteBotAliasOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteBotAliasError](src/AmazonLex/Errors/DeleteBotAliasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetBotAliasResponse&gt; GetBotAlias(GetBotAliasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about an Amazon Lex bot alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Aliases.GetBotAlias(new GetBotAliasOperationRequest
    {
        BotName = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type GetBotAliasResponse
}
catch (ApiException<GetBotAliasError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBotAliasOperationRequest](src/AmazonLex/Requests/Aliases/GetBotAliasOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotAliasResponse](src/AmazonLex/Models/GetBotAliasResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetBotAliasError](src/AmazonLex/Errors/GetBotAliasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetBotAliasesResponse&gt; GetBotAliases(GetBotAliasesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of aliases for a specified Amazon Lex bot. This operation requires permissions for the lex:GetBotAliases action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Aliases.GetBotAliases(new GetBotAliasesOperationRequest
    {
        BotName = "some example string",
    });
    // TODO: Handle 'response' of type GetBotAliasesResponse
}
catch (ApiException<GetBotAliasesError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBotAliasesOperationRequest](src/AmazonLex/Requests/Aliases/GetBotAliasesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotAliasesResponse](src/AmazonLex/Models/GetBotAliasesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetBotAliasesError](src/AmazonLex/Errors/GetBotAliasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PutBotAliasResponse&gt; PutBotAlias(PutBotAliasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:PutBotAlias action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Aliases.PutBotAlias(new PutBotAliasOperationRequest
    {
        BotName = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type PutBotAliasResponse
}
catch (ApiException<PutBotAliasError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutBotAliasOperationRequest](src/AmazonLex/Requests/Aliases/PutBotAliasOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutBotAliasResponse](src/AmazonLex/Models/PutBotAliasResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[PutBotAliasError](src/AmazonLex/Errors/PutBotAliasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Bots

> Source: [Bots](src/AmazonLex/Api/Bots.cs)

<details>
<summary><code>Task&lt;BatchCreateCustomVocabularyItemResponse&gt; BatchCreateCustomVocabularyItem(BatchCreateCustomVocabularyItemOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.BatchCreateCustomVocabularyItem(new BatchCreateCustomVocabularyItemOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type BatchCreateCustomVocabularyItemResponse
}
catch (ApiException<BatchCreateCustomVocabularyItemError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchCreateCustomVocabularyItemOperationRequest](src/AmazonLex/Requests/Bots/BatchCreateCustomVocabularyItemOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchCreateCustomVocabularyItemResponse](src/AmazonLex/Models/BatchCreateCustomVocabularyItemResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[BatchCreateCustomVocabularyItemError](src/AmazonLex/Errors/BatchCreateCustomVocabularyItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchDeleteCustomVocabularyItemResponse&gt; BatchDeleteCustomVocabularyItem(BatchDeleteCustomVocabularyItemOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.BatchDeleteCustomVocabularyItem(new BatchDeleteCustomVocabularyItemOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type BatchDeleteCustomVocabularyItemResponse
}
catch (ApiException<BatchDeleteCustomVocabularyItemError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchDeleteCustomVocabularyItemOperationRequest](src/AmazonLex/Requests/Bots/BatchDeleteCustomVocabularyItemOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchDeleteCustomVocabularyItemResponse](src/AmazonLex/Models/BatchDeleteCustomVocabularyItemResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[BatchDeleteCustomVocabularyItemError](src/AmazonLex/Errors/BatchDeleteCustomVocabularyItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchUpdateCustomVocabularyItemResponse&gt; BatchUpdateCustomVocabularyItem(BatchUpdateCustomVocabularyItemOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.BatchUpdateCustomVocabularyItem(new BatchUpdateCustomVocabularyItemOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type BatchUpdateCustomVocabularyItemResponse
}
catch (ApiException<BatchUpdateCustomVocabularyItemError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchUpdateCustomVocabularyItemOperationRequest](src/AmazonLex/Requests/Bots/BatchUpdateCustomVocabularyItemOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchUpdateCustomVocabularyItemResponse](src/AmazonLex/Models/BatchUpdateCustomVocabularyItemResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[BatchUpdateCustomVocabularyItemError](src/AmazonLex/Errors/BatchUpdateCustomVocabularyItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildBotLocaleResponse&gt; BuildBotLocale(BuildBotLocaleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.BuildBotLocale(new BuildBotLocaleOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type BuildBotLocaleResponse
}
catch (ApiException<BuildBotLocaleError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BuildBotLocaleOperationRequest](src/AmazonLex/Requests/Bots/BuildBotLocaleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildBotLocaleResponse](src/AmazonLex/Models/BuildBotLocaleResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[BuildBotLocaleError](src/AmazonLex/Errors/BuildBotLocaleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateBotResponse&gt; CreateBot(CreateBotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Amazon Lex conversational bot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.CreateBot(new CreateBotOperationRequest());
    // TODO: Handle 'response' of type CreateBotResponse
}
catch (ApiException<CreateBotError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBotOperationRequest](src/AmazonLex/Requests/Bots/CreateBotOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateBotResponse](src/AmazonLex/Models/CreateBotResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateBotError](src/AmazonLex/Errors/CreateBotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateBotAliasResponse&gt; CreateBotAlias(CreateBotAliasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot. For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.CreateBotAlias(new CreateBotAliasOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type CreateBotAliasResponse
}
catch (ApiException<CreateBotAliasError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBotAliasOperationRequest](src/AmazonLex/Requests/Bots/CreateBotAliasOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateBotAliasResponse](src/AmazonLex/Models/CreateBotAliasResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateBotAliasError](src/AmazonLex/Errors/CreateBotAliasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateBotLocaleResponse&gt; CreateBotLocale(CreateBotLocaleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.CreateBotLocale(new CreateBotLocaleOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
    });
    // TODO: Handle 'response' of type CreateBotLocaleResponse
}
catch (ApiException<CreateBotLocaleError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBotLocaleOperationRequest](src/AmazonLex/Requests/Bots/CreateBotLocaleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateBotLocaleResponse](src/AmazonLex/Models/CreateBotLocaleResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateBotLocaleError](src/AmazonLex/Errors/CreateBotLocaleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateBotReplicaResponse&gt; CreateBotReplica(CreateBotReplicaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Action to create a replication of the source bot in the secondary region.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.CreateBotReplica(new CreateBotReplicaOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type CreateBotReplicaResponse
}
catch (ApiException<CreateBotReplicaError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBotReplicaOperationRequest](src/AmazonLex/Requests/Bots/CreateBotReplicaOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateBotReplicaResponse](src/AmazonLex/Models/CreateBotReplicaResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateBotReplicaError](src/AmazonLex/Errors/CreateBotReplicaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateBotVersionResponse&gt; CreateBotVersion(CreateBotVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an immutable version of the bot. When you create the first version of a bot, Amazon Lex sets the version number to 1. Subsequent bot versions increase in an increment of 1. The version number will always represent the total number of versions created of the bot, not the current number of versions. If a bot version is deleted, that bot version number will not be reused.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.CreateBotVersion(new CreateBotVersionOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type CreateBotVersionResponse
}
catch (ApiException<CreateBotVersionError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBotVersionOperationRequest](src/AmazonLex/Requests/Bots/CreateBotVersionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateBotVersionResponse](src/AmazonLex/Models/CreateBotVersionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateBotVersionError](src/AmazonLex/Errors/CreateBotVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelsLexCreateBotVersionResponse&gt; CreateBotVersion1(CreateBotVersion1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permission for the lex:CreateBotVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.CreateBotVersion1(new CreateBotVersion1Request { Name = "some example string" });
    // TODO: Handle 'response' of type ModelsLexCreateBotVersionResponse
}
catch (ApiException<CreateBotVersion1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBotVersion1Request](src/AmazonLex/Requests/Bots/CreateBotVersion1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsLexCreateBotVersionResponse](src/AmazonLex/Models/ModelsLexCreateBotVersionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateBotVersion1Error](src/AmazonLex/Errors/CreateBotVersion1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateIntentResponse&gt; CreateIntent(CreateIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an intent. To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must provide a name. You can optionally provide the following: Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents. Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application. How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available. A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?" A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza." A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with yo

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.CreateIntent(new CreateIntentOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type CreateIntentResponse
}
catch (ApiException<CreateIntentError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateIntentOperationRequest](src/AmazonLex/Requests/Bots/CreateIntentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateIntentResponse](src/AmazonLex/Models/CreateIntentResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateIntentError](src/AmazonLex/Errors/CreateIntentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateSlotResponse&gt; CreateSlot(CreateSlotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.CreateSlot(new CreateSlotOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        IntentId = "some example string",
    });
    // TODO: Handle 'response' of type CreateSlotResponse
}
catch (ApiException<CreateSlotError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSlotOperationRequest](src/AmazonLex/Requests/Bots/CreateSlotOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateSlotResponse](src/AmazonLex/Models/CreateSlotResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateSlotError](src/AmazonLex/Errors/CreateSlotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateSlotTypeResponse&gt; CreateSlotType(CreateSlotTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom slot type To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.CreateSlotType(new CreateSlotTypeOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type CreateSlotTypeResponse
}
catch (ApiException<CreateSlotTypeError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSlotTypeOperationRequest](src/AmazonLex/Requests/Bots/CreateSlotTypeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateSlotTypeResponse](src/AmazonLex/Models/CreateSlotTypeResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateSlotTypeError](src/AmazonLex/Errors/CreateSlotTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeleteBotResponse&gt; DeleteBot(DeleteBotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all versions of a bot, including the Draft version. To delete a specific version, use the DeleteBotVersion operation. When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot. If a bot has an alias, the DeleteBot operation returns a ResourceInUseException exception. If you want to delete the bot and the alias, set the skipResourceInUseCheck parameter to true.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteBot(new DeleteBotOperationRequest { BotId = "some example string" });
    // TODO: Handle 'response' of type DeleteBotResponse
}
catch (ApiException<DeleteBotError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBotOperationRequest](src/AmazonLex/Requests/Bots/DeleteBotOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteBotResponse](src/AmazonLex/Models/DeleteBotResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteBotError](src/AmazonLex/Errors/DeleteBotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteBot1(DeleteBot1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use the DeleteBotVersion operation. The DeleteBot operation doesn't immediately remove the bot schema. Instead, it is marked for deletion and removed later. Amazon Lex stores utterances indefinitely for improving the ability of your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the utterances, use the DeleteUtterances operation. If a bot has an alias, you can't delete it. Instead, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the DeleteBot operation is successful. This operation requires permissions for the lex:DeleteBot action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteBot1(new DeleteBot1Request { Name = "some example string" });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteBot1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBot1Request](src/AmazonLex/Requests/Bots/DeleteBot1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteBot1Error](src/AmazonLex/Errors/DeleteBot1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteBotAlias1(DeleteBotAlias1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the DeleteBotAlias operation is successful.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteBotAlias1(new DeleteBotAlias1Request
    {
        BotName = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteBotAlias1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBotAlias1Request](src/AmazonLex/Requests/Bots/DeleteBotAlias1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteBotAlias1Error](src/AmazonLex/Errors/DeleteBotAlias1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeleteBotAliasResponse&gt; DeleteBotAlias2(DeleteBotAlias2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified bot alias.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteBotAlias2(new DeleteBotAlias2Request
    {
        BotId = "some example string",
        BotAliasId = "some example string",
    });
    // TODO: Handle 'response' of type DeleteBotAliasResponse
}
catch (ApiException<DeleteBotAlias2Error> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBotAlias2Request](src/AmazonLex/Requests/Bots/DeleteBotAlias2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteBotAliasResponse](src/AmazonLex/Models/DeleteBotAliasResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteBotAlias2Error](src/AmazonLex/Errors/DeleteBotAlias2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteBotAnalyzerRecommendation(DeleteBotAnalyzerRecommendationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes the recommendations and analysis results for a specific bot analysis request. This operation is provided for GDPR compliance and cannot be undone. After deletion, the analysis results cannot be retrieved. The analysis request ID will still appear in the history list, but attempting to describe the recommendations will return a ResourceNotFoundException.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteBotAnalyzerRecommendation(new DeleteBotAnalyzerRecommendationOperationRequest
    {
        BotId = "some example string",
        BotAnalyzerRequestId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteBotAnalyzerRecommendationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBotAnalyzerRecommendationOperationRequest](src/AmazonLex/Requests/Bots/DeleteBotAnalyzerRecommendationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteBotAnalyzerRecommendationError](src/AmazonLex/Errors/DeleteBotAnalyzerRecommendationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeleteBotLocaleResponse&gt; DeleteBotLocale(DeleteBotLocaleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteBotLocale(new DeleteBotLocaleOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type DeleteBotLocaleResponse
}
catch (ApiException<DeleteBotLocaleError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBotLocaleOperationRequest](src/AmazonLex/Requests/Bots/DeleteBotLocaleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteBotLocaleResponse](src/AmazonLex/Models/DeleteBotLocaleResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteBotLocaleError](src/AmazonLex/Errors/DeleteBotLocaleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeleteBotReplicaResponse&gt; DeleteBotReplica(DeleteBotReplicaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to delete the replicated bot in the secondary region.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteBotReplica(new DeleteBotReplicaOperationRequest
    {
        BotId = "some example string",
        ReplicaRegion = "some example string",
    });
    // TODO: Handle 'response' of type DeleteBotReplicaResponse
}
catch (ApiException<DeleteBotReplicaError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBotReplicaOperationRequest](src/AmazonLex/Requests/Bots/DeleteBotReplicaOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteBotReplicaResponse](src/AmazonLex/Models/DeleteBotReplicaResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteBotReplicaError](src/AmazonLex/Errors/DeleteBotReplicaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeleteBotVersionResponse&gt; DeleteBotVersion(DeleteBotVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteBotVersion(new DeleteBotVersionOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
    });
    // TODO: Handle 'response' of type DeleteBotVersionResponse
}
catch (ApiException<DeleteBotVersionError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBotVersionOperationRequest](src/AmazonLex/Requests/Bots/DeleteBotVersionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteBotVersionResponse](src/AmazonLex/Models/DeleteBotVersionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteBotVersionError](src/AmazonLex/Errors/DeleteBotVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteBotVersion1(DeleteBotVersion1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This operation requires permissions for the lex:DeleteBotVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteBotVersion1(new DeleteBotVersion1Request
    {
        Name = "some example string",
        Version = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteBotVersion1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBotVersion1Request](src/AmazonLex/Requests/Bots/DeleteBotVersion1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteBotVersion1Error](src/AmazonLex/Errors/DeleteBotVersion1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeleteCustomVocabularyResponse&gt; DeleteCustomVocabulary(DeleteCustomVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a custom vocabulary from the specified locale in the specified bot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteCustomVocabulary(new DeleteCustomVocabularyOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type DeleteCustomVocabularyResponse
}
catch (ApiException<DeleteCustomVocabularyError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomVocabularyOperationRequest](src/AmazonLex/Requests/Bots/DeleteCustomVocabularyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteCustomVocabularyResponse](src/AmazonLex/Models/DeleteCustomVocabularyResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomVocabularyError](src/AmazonLex/Errors/DeleteCustomVocabularyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteIntent(DeleteIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified intent. Deleting an intent also deletes the slots associated with the intent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteIntent(new DeleteIntentOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        IntentId = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteIntentError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteIntentOperationRequest](src/AmazonLex/Requests/Bots/DeleteIntentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteIntentError](src/AmazonLex/Errors/DeleteIntentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteIntent1(DeleteIntent1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all versions of the intent, including the $LATEST version. To delete a specific version of the intent, use the DeleteIntentVersion operation. You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see how-it-works), you must remove those references first. If you get the ResourceInUseException exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to DeleteIntent is successful. This operation requires permission for the lex:DeleteIntent action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteIntent1(new DeleteIntent1Request { Name = "some example string" });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteIntent1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteIntent1Request](src/AmazonLex/Requests/Bots/DeleteIntent1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteIntent1Error](src/AmazonLex/Errors/DeleteIntent1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeleteSessionResponse&gt; DeleteSession(DeleteSessionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes session information for a specified bot, alias, and user ID. You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again. You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours. If you specify a bot or alias ID that doesn't exist, you receive a BadRequestException. If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a BadRequestException.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteSession(new DeleteSessionOperationRequest
    {
        BotId = "some example string",
        BotAliasId = "some example string",
        LocaleId = "some example string",
        SessionId = "some example string",
    });
    // TODO: Handle 'response' of type DeleteSessionResponse
}
catch (ApiException<DeleteSessionError> ex)
{
    if (ex.Error.TryGetRuntimeV2LexValidationException(out var error))
    {
        // TODO: Handle 'error' of type RuntimeV2LexValidationException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSessionOperationRequest](src/AmazonLex/Requests/Bots/DeleteSessionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteSessionResponse](src/AmazonLex/Models/DeleteSessionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteSessionError](src/AmazonLex/Errors/DeleteSessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RuntimeLexDeleteSessionResponse&gt; DeleteSession1(DeleteSession1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes session information for a specified bot, alias, and user ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteSession1(new DeleteSession1Request
    {
        BotName = "some example string",
        BotAlias = "some example string",
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type RuntimeLexDeleteSessionResponse
}
catch (ApiException<DeleteSession1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSession1Request](src/AmazonLex/Requests/Bots/DeleteSession1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RuntimeLexDeleteSessionResponse](src/AmazonLex/Models/RuntimeLexDeleteSessionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteSession1Error](src/AmazonLex/Errors/DeleteSession1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteSlot(DeleteSlotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified slot from an intent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteSlot(new DeleteSlotOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        IntentId = "some example string",
        SlotId = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteSlotError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSlotOperationRequest](src/AmazonLex/Requests/Bots/DeleteSlotOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteSlotError](src/AmazonLex/Errors/DeleteSlotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteSlotType(DeleteSlotTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck parameter to true.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteSlotType(new DeleteSlotTypeOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        SlotTypeId = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteSlotTypeError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSlotTypeOperationRequest](src/AmazonLex/Requests/Bots/DeleteSlotTypeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteSlotTypeError](src/AmazonLex/Errors/DeleteSlotTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteSlotType1(DeleteSlotType1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all versions of the slot type, including the $LATEST version. To delete a specific version of the slot type, use the DeleteSlotTypeVersion operation. You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first. If you get the ResourceInUseException exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the DeleteSlotType call is successful. This operation requires permission for the lex:DeleteSlotType action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteSlotType1(new DeleteSlotType1Request { Name = "some example string" });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteSlotType1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSlotType1Request](src/AmazonLex/Requests/Bots/DeleteSlotType1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteSlotType1Error](src/AmazonLex/Errors/DeleteSlotType1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteUtterances(DeleteUtterancesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the ListAggregatedUtterances operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input.. Use the DeleteUtterances operation to manually delete utterances for a specific session. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the ListAggregatedUtterances operation are deleted after 15 days.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteUtterances(new DeleteUtterancesOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteUtterancesError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteUtterancesOperationRequest](src/AmazonLex/Requests/Bots/DeleteUtterancesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteUtterancesError](src/AmazonLex/Errors/DeleteUtterancesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteUtterances1(DeleteUtterances1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the GetUtterancesView operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input. Use the DeleteUtterances operation to manually delete stored utterances for a specific user. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the GetUtterancesView operation are deleted after 15 days. This operation requires permissions for the lex:DeleteUtterances action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DeleteUtterances1(new DeleteUtterances1Request
    {
        BotName = "some example string",
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteUtterances1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteUtterances1Request](src/AmazonLex/Requests/Bots/DeleteUtterances1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteUtterances1Error](src/AmazonLex/Errors/DeleteUtterances1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeBotResponse&gt; DescribeBot(DescribeBotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metadata information about a bot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DescribeBot(new DescribeBotOperationRequest { BotId = "some example string" });
    // TODO: Handle 'response' of type DescribeBotResponse
}
catch (ApiException<DescribeBotError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeBotOperationRequest](src/AmazonLex/Requests/Bots/DescribeBotOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotResponse](src/AmazonLex/Models/DescribeBotResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeBotError](src/AmazonLex/Errors/DescribeBotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeBotAliasResponse&gt; DescribeBotAlias(DescribeBotAliasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a specific bot alias.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DescribeBotAlias(new DescribeBotAliasOperationRequest
    {
        BotId = "some example string",
        BotAliasId = "some example string",
    });
    // TODO: Handle 'response' of type DescribeBotAliasResponse
}
catch (ApiException<DescribeBotAliasError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeBotAliasOperationRequest](src/AmazonLex/Requests/Bots/DescribeBotAliasOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotAliasResponse](src/AmazonLex/Models/DescribeBotAliasResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeBotAliasError](src/AmazonLex/Errors/DescribeBotAliasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeBotAnalyzerRecommendationResponse&gt; DescribeBotAnalyzerRecommendation(DescribeBotAnalyzerRecommendationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the analysis results and recommendations for bot optimization. The analysis must be in Available status before recommendations can be retrieved. Recommendations are returned with pagination support. Each recommendation includes the issue location, priority level, detailed description, and proposed fix.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DescribeBotAnalyzerRecommendation(
        new DescribeBotAnalyzerRecommendationOperationRequest
        {
            BotId = "some example string",
            BotAnalyzerRequestId = "some example string",
        });
    // TODO: Handle 'response' of type DescribeBotAnalyzerRecommendationResponse
}
catch (ApiException<DescribeBotAnalyzerRecommendationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeBotAnalyzerRecommendationOperationRequest](src/AmazonLex/Requests/Bots/DescribeBotAnalyzerRecommendationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotAnalyzerRecommendationResponse](src/AmazonLex/Models/DescribeBotAnalyzerRecommendationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeBotAnalyzerRecommendationError](src/AmazonLex/Errors/DescribeBotAnalyzerRecommendationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeBotLocaleResponse&gt; DescribeBotLocale(DescribeBotLocaleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the settings that a bot has for a specific locale.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DescribeBotLocale(new DescribeBotLocaleOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type DescribeBotLocaleResponse
}
catch (ApiException<DescribeBotLocaleError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeBotLocaleOperationRequest](src/AmazonLex/Requests/Bots/DescribeBotLocaleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotLocaleResponse](src/AmazonLex/Models/DescribeBotLocaleResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeBotLocaleError](src/AmazonLex/Errors/DescribeBotLocaleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeBotRecommendationResponse&gt; DescribeBotRecommendation(DescribeBotRecommendationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metadata information about a bot recommendation. This information will enable you to get a description on the request inputs, to download associated transcripts after processing is complete, and to download intents and slot-types generated by the bot recommendation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DescribeBotRecommendation(new DescribeBotRecommendationOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        BotRecommendationId = "some example string",
    });
    // TODO: Handle 'response' of type DescribeBotRecommendationResponse
}
catch (ApiException<DescribeBotRecommendationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeBotRecommendationOperationRequest](src/AmazonLex/Requests/Bots/DescribeBotRecommendationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotRecommendationResponse](src/AmazonLex/Models/DescribeBotRecommendationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeBotRecommendationError](src/AmazonLex/Errors/DescribeBotRecommendationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeBotReplicaResponse&gt; DescribeBotReplica(DescribeBotReplicaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Monitors the bot replication status through the UI console.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DescribeBotReplica(new DescribeBotReplicaOperationRequest
    {
        BotId = "some example string",
        ReplicaRegion = "some example string",
    });
    // TODO: Handle 'response' of type DescribeBotReplicaResponse
}
catch (ApiException<DescribeBotReplicaError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeBotReplicaOperationRequest](src/AmazonLex/Requests/Bots/DescribeBotReplicaOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotReplicaResponse](src/AmazonLex/Models/DescribeBotReplicaResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeBotReplicaError](src/AmazonLex/Errors/DescribeBotReplicaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeBotResourceGenerationResponse&gt; DescribeBotResourceGeneration(DescribeBotResourceGenerationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a request to generate a bot through natural language description, made through the StartBotResource API. Use the generatedBotLocaleUrl to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DescribeBotResourceGeneration(new DescribeBotResourceGenerationOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        GenerationId = "some example string",
    });
    // TODO: Handle 'response' of type DescribeBotResourceGenerationResponse
}
catch (ApiException<DescribeBotResourceGenerationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeBotResourceGenerationOperationRequest](src/AmazonLex/Requests/Bots/DescribeBotResourceGenerationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotResourceGenerationResponse](src/AmazonLex/Models/DescribeBotResourceGenerationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeBotResourceGenerationError](src/AmazonLex/Errors/DescribeBotResourceGenerationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeBotVersionResponse&gt; DescribeBotVersion(DescribeBotVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metadata about a version of a bot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DescribeBotVersion(new DescribeBotVersionOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
    });
    // TODO: Handle 'response' of type DescribeBotVersionResponse
}
catch (ApiException<DescribeBotVersionError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeBotVersionOperationRequest](src/AmazonLex/Requests/Bots/DescribeBotVersionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotVersionResponse](src/AmazonLex/Models/DescribeBotVersionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeBotVersionError](src/AmazonLex/Errors/DescribeBotVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeCustomVocabularyMetadataResponse&gt; DescribeCustomVocabularyMetadata(DescribeCustomVocabularyMetadataOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metadata information about a custom vocabulary.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DescribeCustomVocabularyMetadata(
        new DescribeCustomVocabularyMetadataOperationRequest
        {
            BotId = "some example string",
            BotVersion = "some example string",
            LocaleId = "some example string",
        });
    // TODO: Handle 'response' of type DescribeCustomVocabularyMetadataResponse
}
catch (ApiException<DescribeCustomVocabularyMetadataError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeCustomVocabularyMetadataOperationRequest](src/AmazonLex/Requests/Bots/DescribeCustomVocabularyMetadataOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeCustomVocabularyMetadataResponse](src/AmazonLex/Models/DescribeCustomVocabularyMetadataResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeCustomVocabularyMetadataError](src/AmazonLex/Errors/DescribeCustomVocabularyMetadataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeIntentResponse&gt; DescribeIntent(DescribeIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata about an intent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DescribeIntent(new DescribeIntentOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        IntentId = "some example string",
    });
    // TODO: Handle 'response' of type DescribeIntentResponse
}
catch (ApiException<DescribeIntentError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeIntentOperationRequest](src/AmazonLex/Requests/Bots/DescribeIntentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeIntentResponse](src/AmazonLex/Models/DescribeIntentResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeIntentError](src/AmazonLex/Errors/DescribeIntentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeSlotResponse&gt; DescribeSlot(DescribeSlotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about a slot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DescribeSlot(new DescribeSlotOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        IntentId = "some example string",
        SlotId = "some example string",
    });
    // TODO: Handle 'response' of type DescribeSlotResponse
}
catch (ApiException<DescribeSlotError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeSlotOperationRequest](src/AmazonLex/Requests/Bots/DescribeSlotOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeSlotResponse](src/AmazonLex/Models/DescribeSlotResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeSlotError](src/AmazonLex/Errors/DescribeSlotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeSlotTypeResponse&gt; DescribeSlotType(DescribeSlotTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about a slot type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.DescribeSlotType(new DescribeSlotTypeOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        SlotTypeId = "some example string",
    });
    // TODO: Handle 'response' of type DescribeSlotTypeResponse
}
catch (ApiException<DescribeSlotTypeError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeSlotTypeOperationRequest](src/AmazonLex/Requests/Bots/DescribeSlotTypeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeSlotTypeResponse](src/AmazonLex/Models/DescribeSlotTypeResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeSlotTypeError](src/AmazonLex/Errors/DescribeSlotTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GenerateBotElementResponse&gt; GenerateBotElement(GenerateBotElementOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates sample utterances for an intent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.GenerateBotElement(new GenerateBotElementOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type GenerateBotElementResponse
}
catch (ApiException<GenerateBotElementError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GenerateBotElementOperationRequest](src/AmazonLex/Requests/Bots/GenerateBotElementOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenerateBotElementResponse](src/AmazonLex/Models/GenerateBotElementResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GenerateBotElementError](src/AmazonLex/Errors/GenerateBotElementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetBotsResponse&gt; GetBots(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns bot information as follows: If you provide the nameContains field, the response includes information for the $LATEST version of all bots whose name contains the specified string. If you don't specify the nameContains field, the operation returns information about the $LATEST version of all of your bots. This operation requires permission for the lex:GetBots action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.GetBots();
    // TODO: Handle 'response' of type GetBotsResponse
}
catch (ApiException<GetBotsError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotsResponse](src/AmazonLex/Models/GetBotsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetBotsError](src/AmazonLex/Errors/GetBotsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetSessionResponse&gt; GetSession(GetSessionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns session information for a specified bot, alias, and user. For example, you can use this operation to retrieve session information for a user that has left a long-running session in use. If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a BadRequestException. If the locale doesn't exist or is not enabled for the alias, you receive a BadRequestException.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.GetSession(new GetSessionOperationRequest
    {
        BotId = "some example string",
        BotAliasId = "some example string",
        LocaleId = "some example string",
        SessionId = "some example string",
    });
    // TODO: Handle 'response' of type GetSessionResponse
}
catch (ApiException<GetSessionError> ex)
{
    if (ex.Error.TryGetRuntimeV2LexValidationException(out var error))
    {
        // TODO: Handle 'error' of type RuntimeV2LexValidationException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSessionOperationRequest](src/AmazonLex/Requests/Bots/GetSessionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSessionResponse](src/AmazonLex/Models/GetSessionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetSessionError](src/AmazonLex/Errors/GetSessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RuntimeLexGetSessionResponse&gt; GetSession1(GetSession1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns session information for a specified bot, alias, and user ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.GetSession1(new GetSession1Request
    {
        BotName = "some example string",
        BotAlias = "some example string",
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type RuntimeLexGetSessionResponse
}
catch (ApiException<GetSession1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSession1Request](src/AmazonLex/Requests/Bots/GetSession1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RuntimeLexGetSessionResponse](src/AmazonLex/Models/RuntimeLexGetSessionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetSession1Error](src/AmazonLex/Errors/GetSession1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAggregatedUtterancesResponse&gt; ListAggregatedUtterances(ListAggregatedUtterancesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of utterances that users have sent to the bot. Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response. You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn't activate an intent. Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time. Utterances statistics are not generated under the following conditions: The childDirected field was set to true when the bot was created. You are using slot obfuscation with one or more slots. You opted out of participating in improving Amazon Lex.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListAggregatedUtterances(new ListAggregatedUtterancesOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type ListAggregatedUtterancesResponse
}
catch (ApiException<ListAggregatedUtterancesError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAggregatedUtterancesOperationRequest](src/AmazonLex/Requests/Bots/ListAggregatedUtterancesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAggregatedUtterancesResponse](src/AmazonLex/Models/ListAggregatedUtterancesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListAggregatedUtterancesError](src/AmazonLex/Errors/ListAggregatedUtterancesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBotAliasReplicasResponse&gt; ListBotAliasReplicas(ListBotAliasReplicasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to list the replicated bots created from the source bot alias.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListBotAliasReplicas(new ListBotAliasReplicasOperationRequest
    {
        BotId = "some example string",
        ReplicaRegion = "some example string",
    });
    // TODO: Handle 'response' of type ListBotAliasReplicasResponse
}
catch (ApiException<ListBotAliasReplicasError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBotAliasReplicasOperationRequest](src/AmazonLex/Requests/Bots/ListBotAliasReplicasOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotAliasReplicasResponse](src/AmazonLex/Models/ListBotAliasReplicasResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListBotAliasReplicasError](src/AmazonLex/Errors/ListBotAliasReplicasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBotAliasesResponse&gt; ListBotAliases(ListBotAliasesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of aliases for the specified bot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListBotAliases(new ListBotAliasesOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type ListBotAliasesResponse
}
catch (ApiException<ListBotAliasesError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBotAliasesOperationRequest](src/AmazonLex/Requests/Bots/ListBotAliasesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotAliasesResponse](src/AmazonLex/Models/ListBotAliasesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListBotAliasesError](src/AmazonLex/Errors/ListBotAliasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBotAnalyzerHistoryResponse&gt; ListBotAnalyzerHistory(ListBotAnalyzerHistoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of historical bot analysis executions for a specific bot. You can filter the results by locale and bot version. The history includes all analysis executions regardless of their status, allowing you to track past analyses and their outcomes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListBotAnalyzerHistory(new ListBotAnalyzerHistoryOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type ListBotAnalyzerHistoryResponse
}
catch (ApiException<ListBotAnalyzerHistoryError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBotAnalyzerHistoryOperationRequest](src/AmazonLex/Requests/Bots/ListBotAnalyzerHistoryOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotAnalyzerHistoryResponse](src/AmazonLex/Models/ListBotAnalyzerHistoryResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListBotAnalyzerHistoryError](src/AmazonLex/Errors/ListBotAnalyzerHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBotLocalesResponse&gt; ListBotLocales(ListBotLocalesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of locales for the specified bot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListBotLocales(new ListBotLocalesOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
    });
    // TODO: Handle 'response' of type ListBotLocalesResponse
}
catch (ApiException<ListBotLocalesError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBotLocalesOperationRequest](src/AmazonLex/Requests/Bots/ListBotLocalesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotLocalesResponse](src/AmazonLex/Models/ListBotLocalesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListBotLocalesError](src/AmazonLex/Errors/ListBotLocalesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBotRecommendationsResponse&gt; ListBotRecommendations(ListBotRecommendationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bot recommendations that meet the specified criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListBotRecommendations(new ListBotRecommendationsOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type ListBotRecommendationsResponse
}
catch (ApiException<ListBotRecommendationsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBotRecommendationsOperationRequest](src/AmazonLex/Requests/Bots/ListBotRecommendationsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotRecommendationsResponse](src/AmazonLex/Models/ListBotRecommendationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListBotRecommendationsError](src/AmazonLex/Errors/ListBotRecommendationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBotReplicasResponse&gt; ListBotReplicas(ListBotReplicasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to list the replicated bots.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListBotReplicas(new ListBotReplicasOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type ListBotReplicasResponse
}
catch (ApiException<ListBotReplicasError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBotReplicasOperationRequest](src/AmazonLex/Requests/Bots/ListBotReplicasOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotReplicasResponse](src/AmazonLex/Models/ListBotReplicasResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListBotReplicasError](src/AmazonLex/Errors/ListBotReplicasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBotResourceGenerationsResponse&gt; ListBotResourceGenerations(ListBotResourceGenerationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the generation requests made for a bot locale.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListBotResourceGenerations(new ListBotResourceGenerationsOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type ListBotResourceGenerationsResponse
}
catch (ApiException<ListBotResourceGenerationsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBotResourceGenerationsOperationRequest](src/AmazonLex/Requests/Bots/ListBotResourceGenerationsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotResourceGenerationsResponse](src/AmazonLex/Models/ListBotResourceGenerationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListBotResourceGenerationsError](src/AmazonLex/Errors/ListBotResourceGenerationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBotVersionReplicasResponse&gt; ListBotVersionReplicas(ListBotVersionReplicasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Contains information about all the versions replication statuses applicable for Global Resiliency.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListBotVersionReplicas(new ListBotVersionReplicasOperationRequest
    {
        BotId = "some example string",
        ReplicaRegion = "some example string",
    });
    // TODO: Handle 'response' of type ListBotVersionReplicasResponse
}
catch (ApiException<ListBotVersionReplicasError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBotVersionReplicasOperationRequest](src/AmazonLex/Requests/Bots/ListBotVersionReplicasOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotVersionReplicasResponse](src/AmazonLex/Models/ListBotVersionReplicasResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListBotVersionReplicasError](src/AmazonLex/Errors/ListBotVersionReplicasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBotVersionsResponse&gt; ListBotVersions(ListBotVersionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about all of the versions of a bot. The ListBotVersions operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the ListBotVersions operation returns for summaries, one for each numbered version and one for the DRAFT version. The ListBotVersions operation always returns at least one version, the DRAFT version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListBotVersions(new ListBotVersionsOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type ListBotVersionsResponse
}
catch (ApiException<ListBotVersionsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBotVersionsOperationRequest](src/AmazonLex/Requests/Bots/ListBotVersionsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotVersionsResponse](src/AmazonLex/Models/ListBotVersionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListBotVersionsError](src/AmazonLex/Errors/ListBotVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBotsResponse&gt; ListBots(ListBotsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of available bots.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListBots(new ListBotsOperationRequest());
    // TODO: Handle 'response' of type ListBotsResponse
}
catch (ApiException<ListBotsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBotsOperationRequest](src/AmazonLex/Requests/Bots/ListBotsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotsResponse](src/AmazonLex/Models/ListBotsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListBotsError](src/AmazonLex/Errors/ListBotsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListCustomVocabularyItemsResponse&gt; ListCustomVocabularyItems(ListCustomVocabularyItemsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListCustomVocabularyItems(new ListCustomVocabularyItemsOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type ListCustomVocabularyItemsResponse
}
catch (ApiException<ListCustomVocabularyItemsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomVocabularyItemsOperationRequest](src/AmazonLex/Requests/Bots/ListCustomVocabularyItemsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListCustomVocabularyItemsResponse](src/AmazonLex/Models/ListCustomVocabularyItemsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListCustomVocabularyItemsError](src/AmazonLex/Errors/ListCustomVocabularyItemsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListIntentMetricsResponse&gt; ListIntentMetrics(ListIntentMetricsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves summary metrics for the intents in your bot. The following fields are required: metrics – A list of AnalyticsIntentMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results. Note that an order field exists in both binBy and metrics. You can specify only one order in a given request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListIntentMetrics(new ListIntentMetricsOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type ListIntentMetricsResponse
}
catch (ApiException<ListIntentMetricsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListIntentMetricsOperationRequest](src/AmazonLex/Requests/Bots/ListIntentMetricsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIntentMetricsResponse](src/AmazonLex/Models/ListIntentMetricsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListIntentMetricsError](src/AmazonLex/Errors/ListIntentMetricsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListIntentPathsResponse&gt; ListIntentPaths(ListIntentPathsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following fields are required: startDateTime and endDateTime – Define a time range for which you want to retrieve results. intentPath – Define an order of intents for which you want to retrieve metrics. Separate intents in the path with a forward slash. For example, populate the intentPath field with /BookCar/BookHotel to see details about how many times users invoked the BookCar and BookHotel intents in that order. Use the optional filters field to filter the results.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListIntentPaths(new ListIntentPathsOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type ListIntentPathsResponse
}
catch (ApiException<ListIntentPathsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListIntentPathsOperationRequest](src/AmazonLex/Requests/Bots/ListIntentPathsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIntentPathsResponse](src/AmazonLex/Models/ListIntentPathsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListIntentPathsError](src/AmazonLex/Errors/ListIntentPathsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListIntentStageMetricsResponse&gt; ListIntentStageMetrics(ListIntentStageMetricsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves summary metrics for the stages within intents in your bot. The following fields are required: metrics – A list of AnalyticsIntentStageMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results. Note that an order field exists in both binBy and metrics. You can only specify one order in a given request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListIntentStageMetrics(new ListIntentStageMetricsOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type ListIntentStageMetricsResponse
}
catch (ApiException<ListIntentStageMetricsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListIntentStageMetricsOperationRequest](src/AmazonLex/Requests/Bots/ListIntentStageMetricsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIntentStageMetricsResponse](src/AmazonLex/Models/ListIntentStageMetricsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListIntentStageMetricsError](src/AmazonLex/Errors/ListIntentStageMetricsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListIntentsResponse&gt; ListIntents(ListIntentsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of intents that meet the specified criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListIntents(new ListIntentsOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type ListIntentsResponse
}
catch (ApiException<ListIntentsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListIntentsOperationRequest](src/AmazonLex/Requests/Bots/ListIntentsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIntentsResponse](src/AmazonLex/Models/ListIntentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListIntentsError](src/AmazonLex/Errors/ListIntentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListRecommendedIntentsResponse&gt; ListRecommendedIntents(ListRecommendedIntentsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents in the response are ordered by relevance.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListRecommendedIntents(new ListRecommendedIntentsOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        BotRecommendationId = "some example string",
    });
    // TODO: Handle 'response' of type ListRecommendedIntentsResponse
}
catch (ApiException<ListRecommendedIntentsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListRecommendedIntentsOperationRequest](src/AmazonLex/Requests/Bots/ListRecommendedIntentsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListRecommendedIntentsResponse](src/AmazonLex/Models/ListRecommendedIntentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListRecommendedIntentsError](src/AmazonLex/Errors/ListRecommendedIntentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSessionAnalyticsDataResponse&gt; ListSessionAnalyticsData(ListSessionAnalyticsDataOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of metadata for individual user sessions with your bot. The startDateTime and endDateTime fields are required. These fields define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results and the sortBy field to specify the values by which to sort the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListSessionAnalyticsData(new ListSessionAnalyticsDataOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type ListSessionAnalyticsDataResponse
}
catch (ApiException<ListSessionAnalyticsDataError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSessionAnalyticsDataOperationRequest](src/AmazonLex/Requests/Bots/ListSessionAnalyticsDataOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSessionAnalyticsDataResponse](src/AmazonLex/Models/ListSessionAnalyticsDataResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListSessionAnalyticsDataError](src/AmazonLex/Errors/ListSessionAnalyticsDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSessionMetricsResponse&gt; ListSessionMetrics(ListSessionMetricsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves summary metrics for the user sessions with your bot. The following fields are required: metrics – A list of AnalyticsSessionMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results. Note that an order field exists in both binBy and metrics. Currently, you can specify it in either field, but not in both.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListSessionMetrics(new ListSessionMetricsOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type ListSessionMetricsResponse
}
catch (ApiException<ListSessionMetricsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSessionMetricsOperationRequest](src/AmazonLex/Requests/Bots/ListSessionMetricsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSessionMetricsResponse](src/AmazonLex/Models/ListSessionMetricsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListSessionMetricsError](src/AmazonLex/Errors/ListSessionMetricsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSlotTypesResponse&gt; ListSlotTypes(ListSlotTypesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of slot types that match the specified criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListSlotTypes(new ListSlotTypesOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type ListSlotTypesResponse
}
catch (ApiException<ListSlotTypesError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSlotTypesOperationRequest](src/AmazonLex/Requests/Bots/ListSlotTypesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSlotTypesResponse](src/AmazonLex/Models/ListSlotTypesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListSlotTypesError](src/AmazonLex/Errors/ListSlotTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSlotsResponse&gt; ListSlots(ListSlotsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of slots that match the specified criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListSlots(new ListSlotsOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        IntentId = "some example string",
    });
    // TODO: Handle 'response' of type ListSlotsResponse
}
catch (ApiException<ListSlotsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSlotsOperationRequest](src/AmazonLex/Requests/Bots/ListSlotsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSlotsResponse](src/AmazonLex/Models/ListSlotsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListSlotsError](src/AmazonLex/Errors/ListSlotsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListUtteranceAnalyticsDataResponse&gt; ListUtteranceAnalyticsData(ListUtteranceAnalyticsDataOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM policy to apply to the IAM role. Retrieves a list of metadata for individual user utterances to your bot. The following fields are required: startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results and the sortBy field to specify the values by which to sort the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListUtteranceAnalyticsData(new ListUtteranceAnalyticsDataOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type ListUtteranceAnalyticsDataResponse
}
catch (ApiException<ListUtteranceAnalyticsDataError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListUtteranceAnalyticsDataOperationRequest](src/AmazonLex/Requests/Bots/ListUtteranceAnalyticsDataOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListUtteranceAnalyticsDataResponse](src/AmazonLex/Models/ListUtteranceAnalyticsDataResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListUtteranceAnalyticsDataError](src/AmazonLex/Errors/ListUtteranceAnalyticsDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListUtteranceMetricsResponse&gt; ListUtteranceMetrics(ListUtteranceMetricsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM policy to apply to the IAM role. Retrieves summary metrics for the utterances in your bot. The following fields are required: metrics – A list of AnalyticsUtteranceMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of re

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.ListUtteranceMetrics(new ListUtteranceMetricsOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type ListUtteranceMetricsResponse
}
catch (ApiException<ListUtteranceMetricsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListUtteranceMetricsOperationRequest](src/AmazonLex/Requests/Bots/ListUtteranceMetricsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListUtteranceMetricsResponse](src/AmazonLex/Models/ListUtteranceMetricsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListUtteranceMetricsError](src/AmazonLex/Errors/ListUtteranceMetricsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PutSessionResponse&gt; PutSession(PutSessionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.PutSession(new PutSessionOperationRequest
    {
        BotId = "some example string",
        BotAliasId = "some example string",
        LocaleId = "some example string",
        SessionId = "some example string",
    });
    // TODO: Handle 'response' of type PutSessionResponse
}
catch (ApiException<PutSessionError> ex)
{
    if (ex.Error.TryGetRuntimeV2LexValidationException(out var error))
    {
        // TODO: Handle 'error' of type RuntimeV2LexValidationException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutSessionOperationRequest](src/AmazonLex/Requests/Bots/PutSessionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutSessionResponse](src/AmazonLex/Models/PutSessionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[PutSessionError](src/AmazonLex/Errors/PutSessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RuntimeLexPutSessionResponse&gt; PutSession1(PutSession1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot. For more information, see Managing Sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.PutSession1(new PutSession1Request
    {
        BotName = "some example string",
        BotAlias = "some example string",
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type RuntimeLexPutSessionResponse
}
catch (ApiException<PutSession1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutSession1Request](src/AmazonLex/Requests/Bots/PutSession1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RuntimeLexPutSessionResponse](src/AmazonLex/Models/RuntimeLexPutSessionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[PutSession1Error](src/AmazonLex/Errors/PutSession1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecognizeTextResponse&gt; RecognizeText(RecognizeTextOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot. In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Completion message.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.RecognizeText(new RecognizeTextOperationRequest
    {
        BotId = "some example string",
        BotAliasId = "some example string",
        LocaleId = "some example string",
        SessionId = "some example string",
    });
    // TODO: Handle 'response' of type RecognizeTextResponse
}
catch (ApiException<RecognizeTextError> ex)
{
    if (ex.Error.TryGetRuntimeV2LexValidationException(out var error))
    {
        // TODO: Handle 'error' of type RuntimeV2LexValidationException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RecognizeTextOperationRequest](src/AmazonLex/Requests/Bots/RecognizeTextOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecognizeTextResponse](src/AmazonLex/Models/RecognizeTextResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[RecognizeTextError](src/AmazonLex/Errors/RecognizeTextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecognizeUtteranceResponse&gt; RecognizeUtterance(RecognizeUtteranceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot. The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. requestAttributes sessionState The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. inputTranscript interpretations messages requestAttributes sessionState The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.RecognizeUtterance(new RecognizeUtteranceOperationRequest
    {
        BotId = "some example string",
        BotAliasId = "some example string",
        LocaleId = "some example string",
        SessionId = "some example string",
    });
    // TODO: Handle 'response' of type RecognizeUtteranceResponse
}
catch (ApiException<RecognizeUtteranceError> ex)
{
    if (ex.Error.TryGetRuntimeV2LexValidationException(out var error))
    {
        // TODO: Handle 'error' of type RuntimeV2LexValidationException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RecognizeUtteranceOperationRequest](src/AmazonLex/Requests/Bots/RecognizeUtteranceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecognizeUtteranceResponse](src/AmazonLex/Models/RecognizeUtteranceResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[RecognizeUtteranceError](src/AmazonLex/Errors/RecognizeUtteranceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchAssociatedTranscriptsResponse&gt; SearchAssociatedTranscripts(SearchAssociatedTranscriptsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for associated transcripts that meet the specified criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.SearchAssociatedTranscripts(new SearchAssociatedTranscriptsOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        BotRecommendationId = "some example string",
    });
    // TODO: Handle 'response' of type SearchAssociatedTranscriptsResponse
}
catch (ApiException<SearchAssociatedTranscriptsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchAssociatedTranscriptsOperationRequest](src/AmazonLex/Requests/Bots/SearchAssociatedTranscriptsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchAssociatedTranscriptsResponse](src/AmazonLex/Models/SearchAssociatedTranscriptsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[SearchAssociatedTranscriptsError](src/AmazonLex/Errors/SearchAssociatedTranscriptsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartBotAnalyzerResponse&gt; StartBotAnalyzer(StartBotAnalyzerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to identify potential issues and recommend improvements based on AWS best practices. The analysis examines your bot's configuration, including intents, utterances, slots, and conversation flows, to provide actionable recommendations for optimization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.StartBotAnalyzer(new StartBotAnalyzerOperationRequest
    {
        BotId = "some example string",
    });
    // TODO: Handle 'response' of type StartBotAnalyzerResponse
}
catch (ApiException<StartBotAnalyzerError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartBotAnalyzerOperationRequest](src/AmazonLex/Requests/Bots/StartBotAnalyzerOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartBotAnalyzerResponse](src/AmazonLex/Models/StartBotAnalyzerResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[StartBotAnalyzerError](src/AmazonLex/Errors/StartBotAnalyzerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartBotRecommendationResponse&gt; StartBotRecommendation(StartBotRecommendationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this to provide your transcript data, and to start the bot recommendation process.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.StartBotRecommendation(new StartBotRecommendationOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type StartBotRecommendationResponse
}
catch (ApiException<StartBotRecommendationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartBotRecommendationOperationRequest](src/AmazonLex/Requests/Bots/StartBotRecommendationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartBotRecommendationResponse](src/AmazonLex/Models/StartBotRecommendationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[StartBotRecommendationError](src/AmazonLex/Errors/StartBotRecommendationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartBotResourceGenerationResponse&gt; StartBotResourceGeneration(StartBotResourceGenerationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a request for the descriptive bot builder to generate a bot locale configuration based on the prompt you provide it. After you make this call, use the DescribeBotResourceGeneration operation to check on the status of the generation and for the generatedBotLocaleUrl when the generation is complete. Use that value to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.StartBotResourceGeneration(new StartBotResourceGenerationOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type StartBotResourceGenerationResponse
}
catch (ApiException<StartBotResourceGenerationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartBotResourceGenerationOperationRequest](src/AmazonLex/Requests/Bots/StartBotResourceGenerationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartBotResourceGenerationResponse](src/AmazonLex/Models/StartBotResourceGenerationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[StartBotResourceGenerationError](src/AmazonLex/Errors/StartBotResourceGenerationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartConversationResponse&gt; StartConversation(StartConversationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an HTTP/2 bidirectional event stream that enables you to send audio, text, or DTMF input in real time. After your application starts a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon Lex V2 processes the incoming events and responds with streaming text or audio events. Audio input must be in the following format: audio/lpcm sample-rate=8000 sample-size-bits=16 channel-count=1; is-big-endian=false. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Complet

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.StartConversation(new StartConversationOperationRequest
    {
        BotId = "some example string",
        BotAliasId = "some example string",
        LocaleId = "some example string",
        SessionId = "some example string",
    });
    // TODO: Handle 'response' of type StartConversationResponse
}
catch (ApiException<StartConversationError> ex)
{
    if (ex.Error.TryGetRuntimeV2LexValidationException(out var error))
    {
        // TODO: Handle 'error' of type RuntimeV2LexValidationException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartConversationOperationRequest](src/AmazonLex/Requests/Bots/StartConversationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartConversationResponse](src/AmazonLex/Models/StartConversationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[StartConversationError](src/AmazonLex/Errors/StartConversationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StopBotAnalyzerResponse&gt; StopBotAnalyzer(StopBotAnalyzerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no recommendations will be generated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.StopBotAnalyzer(new StopBotAnalyzerOperationRequest
    {
        BotId = "some example string",
        BotAnalyzerRequestId = "some example string",
    });
    // TODO: Handle 'response' of type StopBotAnalyzerResponse
}
catch (ApiException<StopBotAnalyzerError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopBotAnalyzerOperationRequest](src/AmazonLex/Requests/Bots/StopBotAnalyzerOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StopBotAnalyzerResponse](src/AmazonLex/Models/StopBotAnalyzerResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[StopBotAnalyzerError](src/AmazonLex/Errors/StopBotAnalyzerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StopBotRecommendationResponse&gt; StopBotRecommendation(StopBotRecommendationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop an already running Bot Recommendation request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.StopBotRecommendation(new StopBotRecommendationOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        BotRecommendationId = "some example string",
    });
    // TODO: Handle 'response' of type StopBotRecommendationResponse
}
catch (ApiException<StopBotRecommendationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopBotRecommendationOperationRequest](src/AmazonLex/Requests/Bots/StopBotRecommendationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StopBotRecommendationResponse](src/AmazonLex/Models/StopBotRecommendationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[StopBotRecommendationError](src/AmazonLex/Errors/StopBotRecommendationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateBotResponse&gt; UpdateBot(UpdateBotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing bot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.UpdateBot(new UpdateBotOperationRequest { BotId = "some example string" });
    // TODO: Handle 'response' of type UpdateBotResponse
}
catch (ApiException<UpdateBotError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBotOperationRequest](src/AmazonLex/Requests/Bots/UpdateBotOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateBotResponse](src/AmazonLex/Models/UpdateBotResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[UpdateBotError](src/AmazonLex/Errors/UpdateBotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateBotAliasResponse&gt; UpdateBotAlias(UpdateBotAliasOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing bot alias.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.UpdateBotAlias(new UpdateBotAliasOperationRequest
    {
        BotId = "some example string",
        BotAliasId = "some example string",
    });
    // TODO: Handle 'response' of type UpdateBotAliasResponse
}
catch (ApiException<UpdateBotAliasError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBotAliasOperationRequest](src/AmazonLex/Requests/Bots/UpdateBotAliasOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateBotAliasResponse](src/AmazonLex/Models/UpdateBotAliasResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[UpdateBotAliasError](src/AmazonLex/Errors/UpdateBotAliasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateBotLocaleResponse&gt; UpdateBotLocale(UpdateBotLocaleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the settings that a bot has for a specific locale.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.UpdateBotLocale(new UpdateBotLocaleOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type UpdateBotLocaleResponse
}
catch (ApiException<UpdateBotLocaleError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBotLocaleOperationRequest](src/AmazonLex/Requests/Bots/UpdateBotLocaleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateBotLocaleResponse](src/AmazonLex/Models/UpdateBotLocaleResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[UpdateBotLocaleError](src/AmazonLex/Errors/UpdateBotLocaleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateBotRecommendationResponse&gt; UpdateBotRecommendation(UpdateBotRecommendationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing bot recommendation request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.UpdateBotRecommendation(new UpdateBotRecommendationOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        BotRecommendationId = "some example string",
    });
    // TODO: Handle 'response' of type UpdateBotRecommendationResponse
}
catch (ApiException<UpdateBotRecommendationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBotRecommendationOperationRequest](src/AmazonLex/Requests/Bots/UpdateBotRecommendationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateBotRecommendationResponse](src/AmazonLex/Models/UpdateBotRecommendationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[UpdateBotRecommendationError](src/AmazonLex/Errors/UpdateBotRecommendationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateIntentResponse&gt; UpdateIntent(UpdateIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the settings for an intent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.UpdateIntent(new UpdateIntentOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        IntentId = "some example string",
    });
    // TODO: Handle 'response' of type UpdateIntentResponse
}
catch (ApiException<UpdateIntentError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateIntentOperationRequest](src/AmazonLex/Requests/Bots/UpdateIntentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateIntentResponse](src/AmazonLex/Models/UpdateIntentResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[UpdateIntentError](src/AmazonLex/Errors/UpdateIntentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateSlotResponse&gt; UpdateSlot(UpdateSlotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the settings for a slot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.UpdateSlot(new UpdateSlotOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        IntentId = "some example string",
        SlotId = "some example string",
    });
    // TODO: Handle 'response' of type UpdateSlotResponse
}
catch (ApiException<UpdateSlotError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSlotOperationRequest](src/AmazonLex/Requests/Bots/UpdateSlotOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateSlotResponse](src/AmazonLex/Models/UpdateSlotResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[UpdateSlotError](src/AmazonLex/Errors/UpdateSlotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateSlotTypeResponse&gt; UpdateSlotType(UpdateSlotTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing slot type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bots.UpdateSlotType(new UpdateSlotTypeOperationRequest
    {
        BotId = "some example string",
        BotVersion = "some example string",
        LocaleId = "some example string",
        SlotTypeId = "some example string",
    });
    // TODO: Handle 'response' of type UpdateSlotTypeResponse
}
catch (ApiException<UpdateSlotTypeError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSlotTypeOperationRequest](src/AmazonLex/Requests/Bots/UpdateSlotTypeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateSlotTypeResponse](src/AmazonLex/Models/UpdateSlotTypeResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[UpdateSlotTypeError](src/AmazonLex/Errors/UpdateSlotTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Builtins

> Source: [Builtins](src/AmazonLex/Api/Builtins.cs)

<details>
<summary><code>Task&lt;GetBuiltinIntentResponse&gt; GetBuiltinIntent(GetBuiltinIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a built-in intent. This operation requires permission for the lex:GetBuiltinIntent action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builtins.GetBuiltinIntent(new GetBuiltinIntentOperationRequest
    {
        Signature = "some example string",
    });
    // TODO: Handle 'response' of type GetBuiltinIntentResponse
}
catch (ApiException<GetBuiltinIntentError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBuiltinIntentOperationRequest](src/AmazonLex/Requests/Builtins/GetBuiltinIntentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBuiltinIntentResponse](src/AmazonLex/Models/GetBuiltinIntentResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetBuiltinIntentError](src/AmazonLex/Errors/GetBuiltinIntentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetBuiltinIntentsResponse&gt; GetBuiltinIntents(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of built-in intents that meet the specified criteria. This operation requires permission for the lex:GetBuiltinIntents action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builtins.GetBuiltinIntents();
    // TODO: Handle 'response' of type GetBuiltinIntentsResponse
}
catch (ApiException<GetBuiltinIntentsError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBuiltinIntentsResponse](src/AmazonLex/Models/GetBuiltinIntentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetBuiltinIntentsError](src/AmazonLex/Errors/GetBuiltinIntentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetBuiltinSlotTypesResponse&gt; GetBuiltinSlotTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of built-in slot types that meet the specified criteria. For a list of built-in slot types, see Slot Type Reference in the Alexa Skills Kit. This operation requires permission for the lex:GetBuiltInSlotTypes action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builtins.GetBuiltinSlotTypes();
    // TODO: Handle 'response' of type GetBuiltinSlotTypesResponse
}
catch (ApiException<GetBuiltinSlotTypesError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBuiltinSlotTypesResponse](src/AmazonLex/Models/GetBuiltinSlotTypesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetBuiltinSlotTypesError](src/AmazonLex/Errors/GetBuiltinSlotTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBuiltInIntentsResponse&gt; ListBuiltInIntents(ListBuiltInIntentsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. To use a built-in intent as a the base for your own intent, include the built-in intent signature in the parentIntentSignature parameter when you call the CreateIntent operation. For more information, see CreateIntent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builtins.ListBuiltInIntents(new ListBuiltInIntentsOperationRequest
    {
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type ListBuiltInIntentsResponse
}
catch (ApiException<ListBuiltInIntentsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBuiltInIntentsOperationRequest](src/AmazonLex/Requests/Builtins/ListBuiltInIntentsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBuiltInIntentsResponse](src/AmazonLex/Models/ListBuiltInIntentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListBuiltInIntentsError](src/AmazonLex/Errors/ListBuiltInIntentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBuiltInSlotTypesResponse&gt; ListBuiltInSlotTypes(ListBuiltInSlotTypesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of built-in slot types that meet the specified criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builtins.ListBuiltInSlotTypes(new ListBuiltInSlotTypesOperationRequest
    {
        LocaleId = "some example string",
    });
    // TODO: Handle 'response' of type ListBuiltInSlotTypesResponse
}
catch (ApiException<ListBuiltInSlotTypesError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBuiltInSlotTypesOperationRequest](src/AmazonLex/Requests/Builtins/ListBuiltInSlotTypesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBuiltInSlotTypesResponse](src/AmazonLex/Models/ListBuiltInSlotTypesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListBuiltInSlotTypesError](src/AmazonLex/Errors/ListBuiltInSlotTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Channels

> Source: [Channels](src/AmazonLex/Api/Channels.cs)

<details>
<summary><code>Task&lt;string&gt; DeleteBotChannelAssociation(DeleteBotChannelAssociationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the association between an Amazon Lex bot and a messaging platform. This operation requires permission for the lex:DeleteBotChannelAssociation action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Channels.DeleteBotChannelAssociation(new DeleteBotChannelAssociationOperationRequest
    {
        BotName = "some example string",
        BotAlias = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteBotChannelAssociationError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBotChannelAssociationOperationRequest](src/AmazonLex/Requests/Channels/DeleteBotChannelAssociationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteBotChannelAssociationError](src/AmazonLex/Errors/DeleteBotChannelAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetBotChannelAssociationResponse&gt; GetBotChannelAssociation(GetBotChannelAssociationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the association between an Amazon Lex bot and a messaging platform. This operation requires permissions for the lex:GetBotChannelAssociation action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Channels.GetBotChannelAssociation(new GetBotChannelAssociationOperationRequest
    {
        BotName = "some example string",
        BotAlias = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type GetBotChannelAssociationResponse
}
catch (ApiException<GetBotChannelAssociationError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBotChannelAssociationOperationRequest](src/AmazonLex/Requests/Channels/GetBotChannelAssociationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotChannelAssociationResponse](src/AmazonLex/Models/GetBotChannelAssociationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetBotChannelAssociationError](src/AmazonLex/Errors/GetBotChannelAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetBotChannelAssociationsResponse&gt; GetBotChannelAssociations(GetBotChannelAssociationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all of the channels associated with the specified bot. The GetBotChannelAssociations operation requires permissions for the lex:GetBotChannelAssociations action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Channels.GetBotChannelAssociations(new GetBotChannelAssociationsOperationRequest
    {
        BotName = "some example string",
        BotAlias = "some example string",
    });
    // TODO: Handle 'response' of type GetBotChannelAssociationsResponse
}
catch (ApiException<GetBotChannelAssociationsError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBotChannelAssociationsOperationRequest](src/AmazonLex/Requests/Channels/GetBotChannelAssociationsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotChannelAssociationsResponse](src/AmazonLex/Models/GetBotChannelAssociationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetBotChannelAssociationsError](src/AmazonLex/Errors/GetBotChannelAssociationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Createuploadurl

> Source: [Createuploadurl](src/AmazonLex/Api/Createuploadurl.cs)

<details>
<summary><code>Task&lt;CreateUploadUrlResponse&gt; CreateUploadUrl(CreateUploadUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Createuploadurl.CreateUploadUrl(new CreateUploadUrlRequest());
    // TODO: Handle 'response' of type CreateUploadUrlResponse
}
catch (ApiException<CreateUploadUrlError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateUploadUrlRequest](src/AmazonLex/Requests/Createuploadurl/CreateUploadUrlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateUploadUrlResponse](src/AmazonLex/Models/CreateUploadUrlResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateUploadUrlError](src/AmazonLex/Errors/CreateUploadUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Exports

> Source: [Exports](src/AmazonLex/Api/Exports.cs)

<details>
<summary><code>Task&lt;CreateExportResponse&gt; CreateExport(CreateExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot. You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale. For more information about exporting bots, and about the structure of the export archive, see Importing and exporting bots

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Exports.CreateExport(new CreateExportOperationRequest());
    // TODO: Handle 'response' of type CreateExportResponse
}
catch (ApiException<CreateExportError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateExportOperationRequest](src/AmazonLex/Requests/Exports/CreateExportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateExportResponse](src/AmazonLex/Models/CreateExportResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateExportError](src/AmazonLex/Errors/CreateExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeleteExportResponse&gt; DeleteExport(DeleteExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a previous export and the associated files stored in an S3 bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Exports.DeleteExport(new DeleteExportOperationRequest
    {
        ExportId = "some example string",
    });
    // TODO: Handle 'response' of type DeleteExportResponse
}
catch (ApiException<DeleteExportError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteExportOperationRequest](src/AmazonLex/Requests/Exports/DeleteExportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteExportResponse](src/AmazonLex/Models/DeleteExportResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteExportError](src/AmazonLex/Errors/DeleteExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeExportResponse&gt; DescribeExport(DescribeExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a specific export.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Exports.DescribeExport(new DescribeExportOperationRequest
    {
        ExportId = "some example string",
    });
    // TODO: Handle 'response' of type DescribeExportResponse
}
catch (ApiException<DescribeExportError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeExportOperationRequest](src/AmazonLex/Requests/Exports/DescribeExportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeExportResponse](src/AmazonLex/Models/DescribeExportResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeExportError](src/AmazonLex/Errors/DescribeExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetExportResponse&gt; GetExport(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports the contents of a Amazon Lex resource in a specified format.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Exports.GetExport();
    // TODO: Handle 'response' of type GetExportResponse
}
catch (ApiException<GetExportError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetExportResponse](src/AmazonLex/Models/GetExportResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetExportError](src/AmazonLex/Errors/GetExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListExportsResponse&gt; ListExports(ListExportsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Exports.ListExports(new ListExportsOperationRequest());
    // TODO: Handle 'response' of type ListExportsResponse
}
catch (ApiException<ListExportsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListExportsOperationRequest](src/AmazonLex/Requests/Exports/ListExportsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListExportsResponse](src/AmazonLex/Models/ListExportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListExportsError](src/AmazonLex/Errors/ListExportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateExportResponse&gt; UpdateExport(UpdateExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the password used to protect an export zip archive. The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the DescribeExport operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Exports.UpdateExport(new UpdateExportOperationRequest
    {
        ExportId = "some example string",
    });
    // TODO: Handle 'response' of type UpdateExportResponse
}
catch (ApiException<UpdateExportError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateExportOperationRequest](src/AmazonLex/Requests/Exports/UpdateExportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateExportResponse](src/AmazonLex/Models/UpdateExportResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[UpdateExportError](src/AmazonLex/Errors/UpdateExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Imports

> Source: [Imports](src/AmazonLex/Api/Imports.cs)

<details>
<summary><code>Task&lt;DeleteImportResponse&gt; DeleteImport(DeleteImportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a previous import and the associated file stored in an S3 bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Imports.DeleteImport(new DeleteImportOperationRequest
    {
        ImportId = "some example string",
    });
    // TODO: Handle 'response' of type DeleteImportResponse
}
catch (ApiException<DeleteImportError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteImportOperationRequest](src/AmazonLex/Requests/Imports/DeleteImportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteImportResponse](src/AmazonLex/Models/DeleteImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteImportError](src/AmazonLex/Errors/DeleteImportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeImportResponse&gt; DescribeImport(DescribeImportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a specific import.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Imports.DescribeImport(new DescribeImportOperationRequest
    {
        ImportId = "some example string",
    });
    // TODO: Handle 'response' of type DescribeImportResponse
}
catch (ApiException<DescribeImportError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeImportOperationRequest](src/AmazonLex/Requests/Imports/DescribeImportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeImportResponse](src/AmazonLex/Models/DescribeImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeImportError](src/AmazonLex/Errors/DescribeImportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListImportsResponse&gt; ListImports(ListImportsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Imports.ListImports(new ListImportsOperationRequest());
    // TODO: Handle 'response' of type ListImportsResponse
}
catch (ApiException<ListImportsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListImportsOperationRequest](src/AmazonLex/Requests/Imports/ListImportsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListImportsResponse](src/AmazonLex/Models/ListImportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListImportsError](src/AmazonLex/Errors/ListImportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartImportResponse&gt; StartImport(StartImportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3 bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Imports.StartImport(new StartImportOperationRequest());
    // TODO: Handle 'response' of type StartImportResponse
}
catch (ApiException<StartImportError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartImportOperationRequest](src/AmazonLex/Requests/Imports/StartImportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartImportResponse](src/AmazonLex/Models/StartImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[StartImportError](src/AmazonLex/Errors/StartImportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Migrations

> Source: [Migrations](src/AmazonLex/Api/Migrations.cs)

<details>
<summary><code>Task&lt;GetMigrationResponse&gt; GetMigration(GetMigrationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration alerts and warnings related to the migration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Migrations.GetMigration(new GetMigrationOperationRequest
    {
        MigrationId = "some example string",
    });
    // TODO: Handle 'response' of type GetMigrationResponse
}
catch (ApiException<GetMigrationError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMigrationOperationRequest](src/AmazonLex/Requests/Migrations/GetMigrationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMigrationResponse](src/AmazonLex/Models/GetMigrationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetMigrationError](src/AmazonLex/Errors/GetMigrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetMigrationsResponse&gt; GetMigrations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Migrations.GetMigrations();
    // TODO: Handle 'response' of type GetMigrationsResponse
}
catch (ApiException<GetMigrationsError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMigrationsResponse](src/AmazonLex/Models/GetMigrationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetMigrationsError](src/AmazonLex/Errors/GetMigrationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartMigrationResponse&gt; StartMigration(StartMigrationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when you want to take advantage of the new features of Amazon Lex V2. For more information, see Migrating a bot in the Amazon Lex developer guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Migrations.StartMigration(new StartMigrationOperationRequest());
    // TODO: Handle 'response' of type StartMigrationResponse
}
catch (ApiException<StartMigrationError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartMigrationOperationRequest](src/AmazonLex/Requests/Migrations/StartMigrationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartMigrationResponse](src/AmazonLex/Models/StartMigrationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[StartMigrationError](src/AmazonLex/Errors/StartMigrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/AmazonLex/Api/Operations.cs)

<details>
<summary><code>Task&lt;string&gt; DeleteSlotTypeVersion(DeleteSlotTypeVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.DeleteSlotTypeVersion(new DeleteSlotTypeVersionOperationRequest
    {
        Name = "some example string",
        Version = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteSlotTypeVersionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSlotTypeVersionOperationRequest](src/AmazonLex/Requests/Operations/DeleteSlotTypeVersionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteSlotTypeVersionError](src/AmazonLex/Errors/DeleteSlotTypeVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetIntentsResponse&gt; GetIntents(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns intent information as follows: If you specify the nameContains field, returns the $LATEST version of all intents that contain the specified string. If you don't specify the nameContains field, returns information about the $LATEST version of all intents. The operation requires permission for the lex:GetIntents action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.GetIntents();
    // TODO: Handle 'response' of type GetIntentsResponse
}
catch (ApiException<GetIntentsError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIntentsResponse](src/AmazonLex/Models/GetIntentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetIntentsError](src/AmazonLex/Errors/GetIntentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetSlotTypesResponse&gt; GetSlotTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns slot type information as follows: If you specify the nameContains field, returns the $LATEST version of all slot types that contain the specified string. If you don't specify the nameContains field, returns information about the $LATEST version of all slot types. The operation requires permission for the lex:GetSlotTypes action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.GetSlotTypes();
    // TODO: Handle 'response' of type GetSlotTypesResponse
}
catch (ApiException<GetSlotTypesError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSlotTypesResponse](src/AmazonLex/Models/GetSlotTypesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetSlotTypesError](src/AmazonLex/Errors/GetSlotTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetUtterancesViewResponse&gt; GetUtterancesView(GetUtterancesViewOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the GetUtterancesView operation to get information about the utterances that your users have made to your bot. You can use this list to tune the utterances that your bot responds to. For example, say that you have created a bot to order flowers. After your users have used your bot for a while, use the GetUtterancesView operation to see the requests that they have made and whether they have been successful. You might find that the utterance "I want flowers" is not being recognized. You could add this utterance to the OrderFlowers intent so that your bot recognizes that utterance. After you publish a new version of a bot, you can get information about the old version and the new so that you can compare the performance across the two versions. Utterance statistics are generated once a day. Data is available for the last 15 days. You can request information for up to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot in the last 15 days. The response contains information about a maximum of 100 utterances for each version. If you set childDirected field to true when you created your bot, if you are using slot obfuscation with

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.GetUtterancesView(new GetUtterancesViewOperationRequest
    {
        BotName = "some example string",
    });
    // TODO: Handle 'response' of type GetUtterancesViewResponse
}
catch (ApiException<GetUtterancesViewError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUtterancesViewOperationRequest](src/AmazonLex/Requests/Operations/GetUtterancesViewOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetUtterancesViewResponse](src/AmazonLex/Models/GetUtterancesViewResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetUtterancesViewError](src/AmazonLex/Errors/GetUtterancesViewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PostContentResponse&gt; PostContent(PostContentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. The PostContent operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?". After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the message, Amazon Lex

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.PostContent(new PostContentOperationRequest
    {
        BotName = "some example string",
        BotAlias = "some example string",
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type PostContentResponse
}
catch (ApiException<PostContentError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostContentOperationRequest](src/AmazonLex/Requests/Operations/PostContentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostContentResponse](src/AmazonLex/Models/PostContentResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[PostContentError](src/AmazonLex/Errors/PostContentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PostTextResponse&gt; PostText(PostTextOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. In response, Amazon Lex returns the next message to convey to the user an optional responseCard to display. Consider the following example messages: For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the message, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.PostText(new PostTextOperationRequest
    {
        BotName = "some example string",
        BotAlias = "some example string",
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type PostTextResponse
}
catch (ApiException<PostTextError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostTextOperationRequest](src/AmazonLex/Requests/Operations/PostTextOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostTextResponse](src/AmazonLex/Models/PostTextResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[PostTextError](src/AmazonLex/Errors/PostTextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Policy

> Source: [Policy](src/AmazonLex/Api/Policy.cs)

<details>
<summary><code>Task&lt;CreateResourcePolicyResponse&gt; CreateResourcePolicy(CreateResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new resource policy with the specified policy statements.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policy.CreateResourcePolicy(new CreateResourcePolicyOperationRequest
    {
        ResourceArn = "some example string",
    });
    // TODO: Handle 'response' of type CreateResourcePolicyResponse
}
catch (ApiException<CreateResourcePolicyError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateResourcePolicyOperationRequest](src/AmazonLex/Requests/Policy/CreateResourcePolicyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResourcePolicyResponse](src/AmazonLex/Models/CreateResourcePolicyResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateResourcePolicyError](src/AmazonLex/Errors/CreateResourcePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateResourcePolicyStatementResponse&gt; CreateResourcePolicyStatement(CreateResourcePolicyStatementOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created. You can't create a resource policy statement that allows cross-account access. You need to add the CreateResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policy.CreateResourcePolicyStatement(new CreateResourcePolicyStatementOperationRequest
    {
        ResourceArn = "some example string",
    });
    // TODO: Handle 'response' of type CreateResourcePolicyStatementResponse
}
catch (ApiException<CreateResourcePolicyStatementError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateResourcePolicyStatementOperationRequest](src/AmazonLex/Requests/Policy/CreateResourcePolicyStatementOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResourcePolicyStatementResponse](src/AmazonLex/Models/CreateResourcePolicyStatementResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateResourcePolicyStatementError](src/AmazonLex/Errors/CreateResourcePolicyStatementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeleteResourcePolicyResponse&gt; DeleteResourcePolicy(DeleteResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policy.DeleteResourcePolicy(new DeleteResourcePolicyOperationRequest
    {
        ResourceArn = "some example string",
    });
    // TODO: Handle 'response' of type DeleteResourcePolicyResponse
}
catch (ApiException<DeleteResourcePolicyError> ex)
{
    if (ex.Error.TryGetResourceNotFoundException(out var error))
    {
        // TODO: Handle 'error' of type ResourceNotFoundException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteResourcePolicyOperationRequest](src/AmazonLex/Requests/Policy/DeleteResourcePolicyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteResourcePolicyResponse](src/AmazonLex/Models/DeleteResourcePolicyResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteResourcePolicyError](src/AmazonLex/Errors/DeleteResourcePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeleteResourcePolicyStatementResponse&gt; DeleteResourcePolicyStatement(DeleteResourcePolicyStatementOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception. You need to add the DeleteResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policy.DeleteResourcePolicyStatement(new DeleteResourcePolicyStatementOperationRequest
    {
        ResourceArn = "some example string",
        StatementId = "some example string",
    });
    // TODO: Handle 'response' of type DeleteResourcePolicyStatementResponse
}
catch (ApiException<DeleteResourcePolicyStatementError> ex)
{
    if (ex.Error.TryGetResourceNotFoundException(out var error))
    {
        // TODO: Handle 'error' of type ResourceNotFoundException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteResourcePolicyStatementOperationRequest](src/AmazonLex/Requests/Policy/DeleteResourcePolicyStatementOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteResourcePolicyStatementResponse](src/AmazonLex/Models/DeleteResourcePolicyStatementResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteResourcePolicyStatementError](src/AmazonLex/Errors/DeleteResourcePolicyStatementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeResourcePolicyResponse&gt; DescribeResourcePolicy(DescribeResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource policy and policy revision for a bot or bot alias.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policy.DescribeResourcePolicy(new DescribeResourcePolicyOperationRequest
    {
        ResourceArn = "some example string",
    });
    // TODO: Handle 'response' of type DescribeResourcePolicyResponse
}
catch (ApiException<DescribeResourcePolicyError> ex)
{
    if (ex.Error.TryGetResourceNotFoundException(out var error))
    {
        // TODO: Handle 'error' of type ResourceNotFoundException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeResourcePolicyOperationRequest](src/AmazonLex/Requests/Policy/DescribeResourcePolicyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeResourcePolicyResponse](src/AmazonLex/Models/DescribeResourcePolicyResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeResourcePolicyError](src/AmazonLex/Errors/DescribeResourcePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateResourcePolicyResponse&gt; UpdateResourcePolicy(UpdateResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policy.UpdateResourcePolicy(new UpdateResourcePolicyOperationRequest
    {
        ResourceArn = "some example string",
    });
    // TODO: Handle 'response' of type UpdateResourcePolicyResponse
}
catch (ApiException<UpdateResourcePolicyError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateResourcePolicyOperationRequest](src/AmazonLex/Requests/Policy/UpdateResourcePolicyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateResourcePolicyResponse](src/AmazonLex/Models/UpdateResourcePolicyResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[UpdateResourcePolicyError](src/AmazonLex/Errors/UpdateResourcePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/AmazonLex/Api/Tags.cs)

<details>
<summary><code>Task&lt;ListTagsForResourceResponse&gt; ListTagsForResource(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.ListTagsForResource(new ListTagsForResourceOperationRequest
    {
        ResourceArn = "some example string",
    });
    // TODO: Handle 'response' of type ListTagsForResourceResponse
}
catch (ApiException<ListTagsForResourceError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTagsForResourceOperationRequest](src/AmazonLex/Requests/Tags/ListTagsForResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTagsForResourceResponse](src/AmazonLex/Models/ListTagsForResourceResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResourceError](src/AmazonLex/Errors/ListTagsForResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelsLexListTagsForResourceResponse&gt; ListTagsForResource1(ListTagsForResource1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot channels can have tags associated with them.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.ListTagsForResource1(new ListTagsForResource1Request
    {
        ResourceArn = "some example string",
    });
    // TODO: Handle 'response' of type ModelsLexListTagsForResourceResponse
}
catch (ApiException<ListTagsForResource1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTagsForResource1Request](src/AmazonLex/Requests/Tags/ListTagsForResource1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsLexListTagsForResourceResponse](src/AmazonLex/Models/ModelsLexListTagsForResourceResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResource1Error](src/AmazonLex/Errors/ListTagsForResource1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; TagResource(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.TagResource(new TagResourceOperationRequest
    {
        ResourceArn = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<TagResourceError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TagResourceOperationRequest](src/AmazonLex/Requests/Tags/TagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[TagResourceError](src/AmazonLex/Errors/TagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; TagResource1(TagResource1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.TagResource1(new TagResource1Request { ResourceArn = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<TagResource1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TagResource1Request](src/AmazonLex/Requests/Tags/TagResource1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[TagResource1Error](src/AmazonLex/Errors/TagResource1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; UntagResource(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes tags from a bot, bot alias, or bot channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.UntagResource(new UntagResourceOperationRequest
    {
        ResourceArn = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<UntagResourceError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UntagResourceOperationRequest](src/AmazonLex/Requests/Tags/UntagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[UntagResourceError](src/AmazonLex/Errors/UntagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; UntagResource1(UntagResource1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes tags from a bot, bot alias or bot channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.UntagResource1(new UntagResource1Request { ResourceArn = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<UntagResource1Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UntagResource1Request](src/AmazonLex/Requests/Tags/UntagResource1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[UntagResource1Error](src/AmazonLex/Errors/UntagResource1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Testexecutions

> Source: [Testexecutions](src/AmazonLex/Api/Testexecutions.cs)

<details>
<summary><code>Task&lt;DescribeTestExecutionResponse&gt; DescribeTestExecution(DescribeTestExecutionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about the test execution.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testexecutions.DescribeTestExecution(new DescribeTestExecutionOperationRequest
    {
        TestExecutionId = "some example string",
    });
    // TODO: Handle 'response' of type DescribeTestExecutionResponse
}
catch (ApiException<DescribeTestExecutionError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeTestExecutionOperationRequest](src/AmazonLex/Requests/Testexecutions/DescribeTestExecutionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeTestExecutionResponse](src/AmazonLex/Models/DescribeTestExecutionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeTestExecutionError](src/AmazonLex/Errors/DescribeTestExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetTestExecutionArtifactsUrlResponse&gt; GetTestExecutionArtifactsUrl(GetTestExecutionArtifactsUrlOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The pre-signed Amazon S3 URL to download the test execution result artifacts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testexecutions.GetTestExecutionArtifactsUrl(
        new GetTestExecutionArtifactsUrlOperationRequest { TestExecutionId = "some example string" });
    // TODO: Handle 'response' of type GetTestExecutionArtifactsUrlResponse
}
catch (ApiException<GetTestExecutionArtifactsUrlError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTestExecutionArtifactsUrlOperationRequest](src/AmazonLex/Requests/Testexecutions/GetTestExecutionArtifactsUrlOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTestExecutionArtifactsUrlResponse](src/AmazonLex/Models/GetTestExecutionArtifactsUrlResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetTestExecutionArtifactsUrlError](src/AmazonLex/Errors/GetTestExecutionArtifactsUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTestExecutionResultItemsResponse&gt; ListTestExecutionResultItems(ListTestExecutionResultItemsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of test execution result items.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testexecutions.ListTestExecutionResultItems(
        new ListTestExecutionResultItemsOperationRequest { TestExecutionId = "some example string" });
    // TODO: Handle 'response' of type ListTestExecutionResultItemsResponse
}
catch (ApiException<ListTestExecutionResultItemsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTestExecutionResultItemsOperationRequest](src/AmazonLex/Requests/Testexecutions/ListTestExecutionResultItemsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTestExecutionResultItemsResponse](src/AmazonLex/Models/ListTestExecutionResultItemsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListTestExecutionResultItemsError](src/AmazonLex/Errors/ListTestExecutionResultItemsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTestExecutionsResponse&gt; ListTestExecutions(ListTestExecutionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The list of test set executions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testexecutions.ListTestExecutions(new ListTestExecutionsOperationRequest());
    // TODO: Handle 'response' of type ListTestExecutionsResponse
}
catch (ApiException<ListTestExecutionsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTestExecutionsOperationRequest](src/AmazonLex/Requests/Testexecutions/ListTestExecutionsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTestExecutionsResponse](src/AmazonLex/Models/ListTestExecutionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListTestExecutionsError](src/AmazonLex/Errors/ListTestExecutionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartTestExecutionResponse&gt; StartTestExecution(StartTestExecutionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to start test set execution.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testexecutions.StartTestExecution(new StartTestExecutionOperationRequest
    {
        TestSetId = "some example string",
    });
    // TODO: Handle 'response' of type StartTestExecutionResponse
}
catch (ApiException<StartTestExecutionError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartTestExecutionOperationRequest](src/AmazonLex/Requests/Testexecutions/StartTestExecutionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartTestExecutionResponse](src/AmazonLex/Models/StartTestExecutionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[StartTestExecutionError](src/AmazonLex/Errors/StartTestExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Testsetdiscrepancy

> Source: [Testsetdiscrepancy](src/AmazonLex/Api/Testsetdiscrepancy.cs)

<details>
<summary><code>Task&lt;CreateTestSetDiscrepancyReportResponse&gt; CreateTestSetDiscrepancyReport(CreateTestSetDiscrepancyReportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a report that describes the differences between the bot and the test set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testsetdiscrepancy.CreateTestSetDiscrepancyReport(
        new CreateTestSetDiscrepancyReportOperationRequest { TestSetId = "some example string" });
    // TODO: Handle 'response' of type CreateTestSetDiscrepancyReportResponse
}
catch (ApiException<CreateTestSetDiscrepancyReportError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTestSetDiscrepancyReportOperationRequest](src/AmazonLex/Requests/Testsetdiscrepancy/CreateTestSetDiscrepancyReportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateTestSetDiscrepancyReportResponse](src/AmazonLex/Models/CreateTestSetDiscrepancyReportResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateTestSetDiscrepancyReportError](src/AmazonLex/Errors/CreateTestSetDiscrepancyReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeTestSetDiscrepancyReportResponse&gt; DescribeTestSetDiscrepancyReport(DescribeTestSetDiscrepancyReportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about the test set discrepancy report.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testsetdiscrepancy.DescribeTestSetDiscrepancyReport(
        new DescribeTestSetDiscrepancyReportOperationRequest { TestSetDiscrepancyReportId = "some example string" });
    // TODO: Handle 'response' of type DescribeTestSetDiscrepancyReportResponse
}
catch (ApiException<DescribeTestSetDiscrepancyReportError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeTestSetDiscrepancyReportOperationRequest](src/AmazonLex/Requests/Testsetdiscrepancy/DescribeTestSetDiscrepancyReportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeTestSetDiscrepancyReportResponse](src/AmazonLex/Models/DescribeTestSetDiscrepancyReportResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeTestSetDiscrepancyReportError](src/AmazonLex/Errors/DescribeTestSetDiscrepancyReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Testsetgenerations

> Source: [Testsetgenerations](src/AmazonLex/Api/Testsetgenerations.cs)

<details>
<summary><code>Task&lt;DescribeTestSetGenerationResponse&gt; DescribeTestSetGeneration(DescribeTestSetGenerationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about the test set generation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testsetgenerations.DescribeTestSetGeneration(
        new DescribeTestSetGenerationOperationRequest { TestSetGenerationId = "some example string" });
    // TODO: Handle 'response' of type DescribeTestSetGenerationResponse
}
catch (ApiException<DescribeTestSetGenerationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeTestSetGenerationOperationRequest](src/AmazonLex/Requests/Testsetgenerations/DescribeTestSetGenerationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeTestSetGenerationResponse](src/AmazonLex/Models/DescribeTestSetGenerationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeTestSetGenerationError](src/AmazonLex/Errors/DescribeTestSetGenerationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartTestSetGenerationResponse&gt; StartTestSetGeneration(StartTestSetGenerationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to start the generation of test set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testsetgenerations.StartTestSetGeneration(new StartTestSetGenerationOperationRequest());
    // TODO: Handle 'response' of type StartTestSetGenerationResponse
}
catch (ApiException<StartTestSetGenerationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartTestSetGenerationOperationRequest](src/AmazonLex/Requests/Testsetgenerations/StartTestSetGenerationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartTestSetGenerationResponse](src/AmazonLex/Models/StartTestSetGenerationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[StartTestSetGenerationError](src/AmazonLex/Errors/StartTestSetGenerationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Testsets

> Source: [Testsets](src/AmazonLex/Api/Testsets.cs)

<details>
<summary><code>Task&lt;CreateTestSetDiscrepancyReportResponse&gt; CreateTestSetDiscrepancyReport2(CreateTestSetDiscrepancyReport2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a report that describes the differences between the bot and the test set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testsets.CreateTestSetDiscrepancyReport2(new CreateTestSetDiscrepancyReport2Request
    {
        TestSetId = "some example string",
    });
    // TODO: Handle 'response' of type CreateTestSetDiscrepancyReportResponse
}
catch (ApiException<CreateTestSetDiscrepancyReport2Error> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTestSetDiscrepancyReport2Request](src/AmazonLex/Requests/Testsets/CreateTestSetDiscrepancyReport2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateTestSetDiscrepancyReportResponse](src/AmazonLex/Models/CreateTestSetDiscrepancyReportResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateTestSetDiscrepancyReport2Error](src/AmazonLex/Errors/CreateTestSetDiscrepancyReport2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteTestSet(DeleteTestSetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to delete the selected test set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testsets.DeleteTestSet(new DeleteTestSetOperationRequest
    {
        TestSetId = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteTestSetError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteTestSetOperationRequest](src/AmazonLex/Requests/Testsets/DeleteTestSetOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteTestSetError](src/AmazonLex/Errors/DeleteTestSetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeTestSetResponse&gt; DescribeTestSet(DescribeTestSetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about the test set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testsets.DescribeTestSet(new DescribeTestSetOperationRequest
    {
        TestSetId = "some example string",
    });
    // TODO: Handle 'response' of type DescribeTestSetResponse
}
catch (ApiException<DescribeTestSetError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeTestSetOperationRequest](src/AmazonLex/Requests/Testsets/DescribeTestSetOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeTestSetResponse](src/AmazonLex/Models/DescribeTestSetResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DescribeTestSetError](src/AmazonLex/Errors/DescribeTestSetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTestSetRecordsResponse&gt; ListTestSetRecords(ListTestSetRecordsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The list of test set records.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testsets.ListTestSetRecords(new ListTestSetRecordsOperationRequest
    {
        TestSetId = "some example string",
    });
    // TODO: Handle 'response' of type ListTestSetRecordsResponse
}
catch (ApiException<ListTestSetRecordsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTestSetRecordsOperationRequest](src/AmazonLex/Requests/Testsets/ListTestSetRecordsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTestSetRecordsResponse](src/AmazonLex/Models/ListTestSetRecordsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListTestSetRecordsError](src/AmazonLex/Errors/ListTestSetRecordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTestSetsResponse&gt; ListTestSets(ListTestSetsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The list of the test sets

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testsets.ListTestSets(new ListTestSetsOperationRequest());
    // TODO: Handle 'response' of type ListTestSetsResponse
}
catch (ApiException<ListTestSetsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTestSetsOperationRequest](src/AmazonLex/Requests/Testsets/ListTestSetsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTestSetsResponse](src/AmazonLex/Models/ListTestSetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[ListTestSetsError](src/AmazonLex/Errors/ListTestSetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi&gt; StartTestExecution2(StartTestExecution2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to start test set execution.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testsets.StartTestExecution2(new StartTestExecution2Request
    {
        TestSetId = "some example string",
    });
    // TODO: Handle 'response' of type StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi
}
catch (ApiException<StartTestExecution2Error> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartTestExecution2Request](src/AmazonLex/Requests/Testsets/StartTestExecution2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi](src/AmazonLex/Models/StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[StartTestExecution2Error](src/AmazonLex/Errors/StartTestExecution2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateTestSetResponse&gt; UpdateTestSet(UpdateTestSetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to update the test set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Testsets.UpdateTestSet(new UpdateTestSetOperationRequest
    {
        TestSetId = "some example string",
    });
    // TODO: Handle 'response' of type UpdateTestSetResponse
}
catch (ApiException<UpdateTestSetError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateTestSetOperationRequest](src/AmazonLex/Requests/Testsets/UpdateTestSetOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateTestSetResponse](src/AmazonLex/Models/UpdateTestSetResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[UpdateTestSetError](src/AmazonLex/Errors/UpdateTestSetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Versions

> Source: [Versions](src/AmazonLex/Api/Versions.cs)

<details>
<summary><code>Task&lt;ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi&gt; CreateBotVersion2(CreateBotVersion2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permission for the lex:CreateBotVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.CreateBotVersion2(new CreateBotVersion2Request
    {
        Name = "some example string",
    });
    // TODO: Handle 'response' of type ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi
}
catch (ApiException<CreateBotVersion2Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBotVersion2Request](src/AmazonLex/Requests/Versions/CreateBotVersion2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi](src/AmazonLex/Models/ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateBotVersion2Error](src/AmazonLex/Errors/CreateBotVersion2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateIntentVersionResponse&gt; CreateIntentVersion(CreateIntentVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of an intent based on the $LATEST version of the intent. If the $LATEST version of this intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last version you created. You can update only the $LATEST version of the intent. You can't update the numbered versions that you create with the CreateIntentVersion operation. When you create a version of an intent, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permissions to perform the lex:CreateIntentVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.CreateIntentVersion(new CreateIntentVersionOperationRequest
    {
        Name = "some example string",
    });
    // TODO: Handle 'response' of type CreateIntentVersionResponse
}
catch (ApiException<CreateIntentVersionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateIntentVersionOperationRequest](src/AmazonLex/Requests/Versions/CreateIntentVersionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateIntentVersionResponse](src/AmazonLex/Models/CreateIntentVersionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateIntentVersionError](src/AmazonLex/Errors/CreateIntentVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateSlotTypeVersionResponse&gt; CreateSlotTypeVersion(CreateSlotTypeVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of a slot type based on the $LATEST version of the specified slot type. If the $LATEST version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a new version. It returns the last version that you created. You can update only the $LATEST version of a slot type. You can't update the numbered versions that you create with the CreateSlotTypeVersion operation. When you create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permissions for the lex:CreateSlotTypeVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.CreateSlotTypeVersion(new CreateSlotTypeVersionOperationRequest
    {
        Name = "some example string",
    });
    // TODO: Handle 'response' of type CreateSlotTypeVersionResponse
}
catch (ApiException<CreateSlotTypeVersionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSlotTypeVersionOperationRequest](src/AmazonLex/Requests/Versions/CreateSlotTypeVersionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateSlotTypeVersionResponse](src/AmazonLex/Models/CreateSlotTypeVersionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[CreateSlotTypeVersionError](src/AmazonLex/Errors/CreateSlotTypeVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteBotVersion2(DeleteBotVersion2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This operation requires permissions for the lex:DeleteBotVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.DeleteBotVersion2(new DeleteBotVersion2Request
    {
        Name = "some example string",
        Version = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteBotVersion2Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBotVersion2Request](src/AmazonLex/Requests/Versions/DeleteBotVersion2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteBotVersion2Error](src/AmazonLex/Errors/DeleteBotVersion2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteIntentVersion(DeleteIntentVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of an intent. To delete all versions of a intent, use the DeleteIntent operation. This operation requires permissions for the lex:DeleteIntentVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.DeleteIntentVersion(new DeleteIntentVersionOperationRequest
    {
        Name = "some example string",
        Version = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteIntentVersionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteIntentVersionOperationRequest](src/AmazonLex/Requests/Versions/DeleteIntentVersionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteIntentVersionError](src/AmazonLex/Errors/DeleteIntentVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; DeleteSlotTypeVersion2(DeleteSlotTypeVersion2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.DeleteSlotTypeVersion2(new DeleteSlotTypeVersion2Request
    {
        Name = "some example string",
        Version = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteSlotTypeVersion2Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSlotTypeVersion2Request](src/AmazonLex/Requests/Versions/DeleteSlotTypeVersion2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[DeleteSlotTypeVersion2Error](src/AmazonLex/Errors/DeleteSlotTypeVersion2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetBotResponse&gt; GetBot(GetBotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias. This operation requires permissions for the lex:GetBot action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.GetBot(new GetBotOperationRequest
    {
        Name = "some example string",
        VersionOrAlias = "some example string",
    });
    // TODO: Handle 'response' of type GetBotResponse
}
catch (ApiException<GetBotError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBotOperationRequest](src/AmazonLex/Requests/Versions/GetBotOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotResponse](src/AmazonLex/Models/GetBotResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetBotError](src/AmazonLex/Errors/GetBotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetBotVersionsResponse&gt; GetBotVersions(GetBotVersionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about all of the versions of a bot. The GetBotVersions operation returns a BotMetadata object for each version of a bot. For example, if a bot has three numbered versions, the GetBotVersions operation returns four BotMetadata objects in the response, one for each numbered version and one for the $LATEST version. The GetBotVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetBotVersions action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.GetBotVersions(new GetBotVersionsOperationRequest
    {
        Name = "some example string",
    });
    // TODO: Handle 'response' of type GetBotVersionsResponse
}
catch (ApiException<GetBotVersionsError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBotVersionsOperationRequest](src/AmazonLex/Requests/Versions/GetBotVersionsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotVersionsResponse](src/AmazonLex/Models/GetBotVersionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetBotVersionsError](src/AmazonLex/Errors/GetBotVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetIntentResponse&gt; GetIntent(GetIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about an intent. In addition to the intent name, you must specify the intent version. This operation requires permissions to perform the lex:GetIntent action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.GetIntent(new GetIntentOperationRequest
    {
        Name = "some example string",
        Version = "some example string",
    });
    // TODO: Handle 'response' of type GetIntentResponse
}
catch (ApiException<GetIntentError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIntentOperationRequest](src/AmazonLex/Requests/Versions/GetIntentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIntentResponse](src/AmazonLex/Models/GetIntentResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetIntentError](src/AmazonLex/Errors/GetIntentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetIntentVersionsResponse&gt; GetIntentVersions(GetIntentVersionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about all of the versions of an intent. The GetIntentVersions operation returns an IntentMetadata object for each version of an intent. For example, if an intent has three numbered versions, the GetIntentVersions operation returns four IntentMetadata objects in the response, one for each numbered version and one for the $LATEST version. The GetIntentVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetIntentVersions action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.GetIntentVersions(new GetIntentVersionsOperationRequest
    {
        Name = "some example string",
    });
    // TODO: Handle 'response' of type GetIntentVersionsResponse
}
catch (ApiException<GetIntentVersionsError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIntentVersionsOperationRequest](src/AmazonLex/Requests/Versions/GetIntentVersionsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIntentVersionsResponse](src/AmazonLex/Models/GetIntentVersionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetIntentVersionsError](src/AmazonLex/Errors/GetIntentVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetSlotTypeResponse&gt; GetSlotType(GetSlotTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version. This operation requires permissions for the lex:GetSlotType action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.GetSlotType(new GetSlotTypeOperationRequest
    {
        Name = "some example string",
        Version = "some example string",
    });
    // TODO: Handle 'response' of type GetSlotTypeResponse
}
catch (ApiException<GetSlotTypeError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSlotTypeOperationRequest](src/AmazonLex/Requests/Versions/GetSlotTypeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSlotTypeResponse](src/AmazonLex/Models/GetSlotTypeResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetSlotTypeError](src/AmazonLex/Errors/GetSlotTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetSlotTypeVersionsResponse&gt; GetSlotTypeVersions(GetSlotTypeVersionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about all versions of a slot type. The GetSlotTypeVersions operation returns a SlotTypeMetadata object for each version of a slot type. For example, if a slot type has three numbered versions, the GetSlotTypeVersions operation returns four SlotTypeMetadata objects in the response, one for each numbered version and one for the $LATEST version. The GetSlotTypeVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetSlotTypeVersions action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.GetSlotTypeVersions(new GetSlotTypeVersionsOperationRequest
    {
        Name = "some example string",
    });
    // TODO: Handle 'response' of type GetSlotTypeVersionsResponse
}
catch (ApiException<GetSlotTypeVersionsError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSlotTypeVersionsOperationRequest](src/AmazonLex/Requests/Versions/GetSlotTypeVersionsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSlotTypeVersionsResponse](src/AmazonLex/Models/GetSlotTypeVersionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[GetSlotTypeVersionsError](src/AmazonLex/Errors/GetSlotTypeVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PutBotResponse&gt; PutBot(PutBotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum information, the bot is created or updated but Amazon Lex returns the response FAILED. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see how-it-works. If you specify the name of an existing bot, the fields in the request replace the existing values in the $LATEST version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the idleTTLInSeconds and privacySettings fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutBot action. For more information, see security-iam.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.PutBot(new PutBotOperationRequest
    {
        Name = "some example string",
        Body = new PutBotRequest
        {
            Name = "DocOrderPizzaBot",
            Description = "Orders a pizza from a local pizzeria.",
            Intents = [new ModelsLexIntent { IntentName = "DocOrderPizza", IntentVersion = "$LATEST" }],
            ClarificationPrompt = new Prompt
            {
                Messages = [
                    new ModelsLexMessage
                    {
                        ContentType = ContentType2.PlainText,
                        Content = "I'm sorry, I didn't hear that. Can you repeat what you just said?",
                    },
                    new ModelsLexMessage { ContentType = ContentType2.PlainText, Content = "Can you say that again?" },
                ],
                MaxAttempts = 1,
            },
            AbortStatement = new Statement
            {
                Messages = [
                    new ModelsLexMessage
                    {
                        ContentType = ContentType2.PlainText,
                        Content = "I don't understand. Can you try again?",
                    },
                    new ModelsLexMessage
                    {
                        ContentType = ContentType2.PlainText,
                        Content = "I'm sorry, I don't understand.",
                    },
                ],
            },
            IdleSessionTtlInSeconds = 300,
            ProcessBehavior = ProcessBehavior.Save,
            Locale = Locale2.EnUs,
            ChildDirected = true,
        },
    });
    // TODO: Handle 'response' of type PutBotResponse
}
catch (ApiException<PutBotError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutBotOperationRequest](src/AmazonLex/Requests/Versions/PutBotOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutBotResponse](src/AmazonLex/Models/PutBotResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[PutBotError](src/AmazonLex/Errors/PutBotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PutIntentResponse&gt; PutIntent(PutIntentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an intent or replaces an existing intent. To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an OrderPizza intent. To create an intent or replace an existing intent, you must provide the following: Intent name. For example, OrderPizza. Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza." Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza. How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application. You can specify other optional information in the request, such as: A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?" A con

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.PutIntent(new PutIntentOperationRequest
    {
        Name = "some example string",
        Body = new PutIntentRequest
        {
            Name = "DocOrderPizza",
            Description = "Order a pizza from a local pizzeria.",
            Slots = [
                new ModelsLexSlot
                {
                    Name = "Type",
                    Description = "The type of pizza to order.",
                    SlotConstraint = SlotConstraint.Required,
                    SlotType = "DocPizzaType",
                    SlotTypeVersion = "$LATEST",
                    ValueElicitationPrompt = new Prompt
                    {
                        Messages = [
                            new ModelsLexMessage { ContentType = contentType, Content = content },
                            new ModelsLexMessage { ContentType = contentType, Content = content },
                            new ModelsLexMessage { ContentType = contentType, Content = content },
                        ],
                        MaxAttempts = 1,
                    },
                    Priority = 1,
                    SampleUtterances = ["Get me a {Type} pizza.", "A {Type} pizza please.", "I'd like a {Type} pizza."],
                },
                new ModelsLexSlot
                {
                    Name = "Crust",
                    Description = "The type of pizza crust to order.",
                    SlotConstraint = SlotConstraint.Required,
                    SlotType = "DocPizzaCrustType",
                    SlotTypeVersion = "$LATEST",
                    ValueElicitationPrompt = new Prompt
                    {
                        Messages = [
                            new ModelsLexMessage { ContentType = contentType, Content = content },
                            new ModelsLexMessage { ContentType = contentType, Content = content },
                        ],
                        MaxAttempts = 1,
                    },
                    Priority = 2,
                    SampleUtterances = ["Make it a {Crust} crust.", "I'd like a {Crust} crust."],
                },
                new ModelsLexSlot
                {
                    Name = "Sauce",
                    Description = "The type of sauce to use on the pizza.",
                    SlotConstraint = SlotConstraint.Required,
                    SlotType = "DocPizzaSauceType",
                    SlotTypeVersion = "$LATEST",
                    ValueElicitationPrompt = new Prompt
                    {
                        Messages = [
                            new ModelsLexMessage { ContentType = contentType, Content = content },
                            new ModelsLexMessage { ContentType = contentType, Content = content },
                        ],
                        MaxAttempts = 1,
                    },
                    Priority = 3,
                    SampleUtterances = ["Make it {Sauce} sauce.", "I'd like {Sauce} sauce."],
                },
            ],
            SampleUtterances = [
                "Order me a pizza.",
                "Order me a {Type} pizza.",
                "I want a {Crust} crust {Type} pizza",
                "I want a {Crust} crust {Type} pizza with {Sauce} sauce.",
            ],
            ConfirmationPrompt = new Prompt
            {
                Messages = [
                    new ModelsLexMessage
                    {
                        ContentType = ContentType2.PlainText,
                        Content = "Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
                    },
                ],
                MaxAttempts = 1,
            },
            RejectionStatement = new Statement
            {
                Messages = [
                    new ModelsLexMessage
                    {
                        ContentType = ContentType2.PlainText,
                        Content = "Ok, I'll cancel your order.",
                    },
                    new ModelsLexMessage { ContentType = ContentType2.PlainText, Content = "I cancelled your order." },
                ],
            },
            ConclusionStatement = new Statement
            {
                Messages = [
                    new ModelsLexMessage
                    {
                        ContentType = ContentType2.PlainText,
                        Content = "All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
                    },
                    new ModelsLexMessage
                    {
                        ContentType = ContentType2.PlainText,
                        Content = "OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
                    },
                ],
                ResponseCard = "foo",
            },
            FulfillmentActivity = new FulfillmentActivity
            {
                Type = TypeAmazonLexModelBuildingV2VersionsApi.ReturnIntent,
            },
        },
    });
    // TODO: Handle 'response' of type PutIntentResponse
}
catch (ApiException<PutIntentError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutIntentOperationRequest](src/AmazonLex/Requests/Versions/PutIntentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutIntentResponse](src/AmazonLex/Models/PutIntentResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[PutIntentError](src/AmazonLex/Errors/PutIntentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PutSlotTypeResponse&gt; PutSlotType(PutSlotTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom slot type or replaces an existing custom slot type. To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see how-it-works. If you specify the name of an existing slot type, the fields in the request replace the existing values in the $LATEST version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. When you update the $LATEST version of a slot type, if a bot uses the $LATEST version of an intent that contains the slot type, the bot's status field is set to NOT_BUILT. This operation requires permissions for the lex:PutSlotType action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Versions.PutSlotType(new PutSlotTypeOperationRequest
    {
        Name = "some example string",
        Body = new PutSlotTypeRequest
        {
            Name = "PizzaSauceType",
            Description = "Available pizza sauces",
            EnumerationValues = [new EnumerationValue { Value = "red" }, new EnumerationValue { Value = "white" }],
        },
    });
    // TODO: Handle 'response' of type PutSlotTypeResponse
}
catch (ApiException<PutSlotTypeError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutSlotTypeOperationRequest](src/AmazonLex/Requests/Versions/PutSlotTypeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutSlotTypeResponse](src/AmazonLex/Models/PutSlotTypeResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonLex/Core/Exceptions/ApiException.cs)&lt;[PutSlotTypeError](src/AmazonLex/Errors/PutSlotTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

