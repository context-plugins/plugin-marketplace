using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonLex.Core;
using AmazonLex.Core.Exceptions;
using AmazonLex.Core.Models;
using AmazonLex.Core.Request;
using AmazonLex.Core.Response;
using AmazonLex.Errors;
using AmazonLex.Models;
using AmazonLex.Requests.Bots;

namespace AmazonLex.Api;

public sealed class Bots
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Bots(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Batch Create Custom Vocabulary Item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchCreateCustomVocabularyItemResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchCreateCustomVocabularyItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.
    /// </remarks>
    public Task<BatchCreateCustomVocabularyItemResponse> BatchCreateCustomVocabularyItem(BatchCreateCustomVocabularyItemOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchCreateCustomVocabularyItemResponse>(),
            BatchCreateCustomVocabularyItemError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch Delete Custom Vocabulary Item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchDeleteCustomVocabularyItemResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchDeleteCustomVocabularyItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.
    /// </remarks>
    public Task<BatchDeleteCustomVocabularyItemResponse> BatchDeleteCustomVocabularyItem(BatchDeleteCustomVocabularyItemOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchDeleteCustomVocabularyItemResponse>(),
            BatchDeleteCustomVocabularyItemError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch Update Custom Vocabulary Item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchUpdateCustomVocabularyItemResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchUpdateCustomVocabularyItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.
    /// </remarks>
    public Task<BatchUpdateCustomVocabularyItemResponse> BatchUpdateCustomVocabularyItem(BatchUpdateCustomVocabularyItemOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchUpdateCustomVocabularyItemResponse>(),
            BatchUpdateCustomVocabularyItemError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Build Bot Locale
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildBotLocaleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BuildBotLocaleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.
    /// </remarks>
    public Task<BuildBotLocaleResponse> BuildBotLocale(BuildBotLocaleOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BuildBotLocaleResponse>(),
            BuildBotLocaleError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Bot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateBotResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an Amazon Lex conversational bot.
    /// </remarks>
    public Task<CreateBotResponse> CreateBot(CreateBotOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateBotResponse>(),
            CreateBotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Bot Alias
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateBotAliasResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBotAliasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot. For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot.
    /// </remarks>
    public Task<CreateBotAliasResponse> CreateBotAlias(CreateBotAliasOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botaliases"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateBotAliasResponse>(),
            CreateBotAliasError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Bot Locale
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateBotLocaleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBotLocaleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.
    /// </remarks>
    public Task<CreateBotLocaleResponse> CreateBotLocale(CreateBotLocaleOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botversions/{botVersion}/botlocales"),
            [new TemplateParam("botId", request.BotId), new TemplateParam("botVersion", request.BotVersion)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateBotLocaleResponse>(),
            CreateBotLocaleError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Bot Replica
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateBotReplicaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBotReplicaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Action to create a replication of the source bot in the secondary region.
    /// </remarks>
    public Task<CreateBotReplicaResponse> CreateBotReplica(CreateBotReplicaOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/replicas"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateBotReplicaResponse>(),
            CreateBotReplicaError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Bot Version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateBotVersionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBotVersionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an immutable version of the bot. When you create the first version of a bot, Amazon Lex sets the version number to 1. Subsequent bot versions increase in an increment of 1. The version number will always represent the total number of versions created of the bot, not the current number of versions. If a bot version is deleted, that bot version number will not be reused.
    /// </remarks>
    public Task<CreateBotVersionResponse> CreateBotVersion(CreateBotVersionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botversions"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateBotVersionResponse>(),
            CreateBotVersionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Bot Version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelsLexCreateBotVersionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBotVersion1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permission for the lex:CreateBotVersion action.
    /// </remarks>
    public Task<ModelsLexCreateBotVersionResponse> CreateBotVersion1(CreateBotVersion1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{name}/versions"),
            [new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ModelsLexCreateBotVersionResponse>(),
            CreateBotVersion1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Intent
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateIntentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateIntentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an intent. To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must provide a name. You can optionally provide the following: Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents. Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application. How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available. A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?" A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza." A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with yo
    /// </remarks>
    public Task<CreateIntentResponse> CreateIntent(CreateIntentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateIntentResponse>(),
            CreateIntentError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Slot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateSlotResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSlotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user.
    /// </remarks>
    public Task<CreateSlotResponse> CreateSlot(CreateSlotOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("intentId", request.IntentId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateSlotResponse>(),
            CreateSlotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Slot Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateSlotTypeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSlotTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a custom slot type To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume.
    /// </remarks>
    public Task<CreateSlotTypeResponse> CreateSlotType(CreateSlotTypeOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateSlotTypeResponse>(),
            CreateSlotTypeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Bot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteBotResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes all versions of a bot, including the Draft version. To delete a specific version, use the DeleteBotVersion operation. When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot. If a bot has an alias, the DeleteBot operation returns a ResourceInUseException exception. If you want to delete the bot and the alias, set the skipResourceInUseCheck parameter to true.
    /// </remarks>
    public Task<DeleteBotResponse> DeleteBot(DeleteBotOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteBotResponse>(),
            DeleteBotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Bot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBot1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use the DeleteBotVersion operation. The DeleteBot operation doesn't immediately remove the bot schema. Instead, it is marked for deletion and removed later. Amazon Lex stores utterances indefinitely for improving the ability of your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the utterances, use the DeleteUtterances operation. If a bot has an alias, you can't delete it. Instead, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the DeleteBot operation is successful. This operation requires permissions for the lex:DeleteBot action.
    /// </remarks>
    public Task<string> DeleteBot1(DeleteBot1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{name}"),
            [new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteBot1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Bot Alias
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBotAlias1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the DeleteBotAlias operation is successful.
    /// </remarks>
    public Task<string> DeleteBotAlias1(DeleteBotAlias1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botName}/aliases/{name}"),
            [new TemplateParam("botName", request.BotName), new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteBotAlias1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Bot Alias
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteBotAliasResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBotAlias2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified bot alias.
    /// </remarks>
    public Task<DeleteBotAliasResponse> DeleteBotAlias2(DeleteBotAlias2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botaliases/{botAliasId}"),
            [new TemplateParam("botId", request.BotId), new TemplateParam("botAliasId", request.BotAliasId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteBotAliasResponse>(),
            DeleteBotAlias2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Bot Analyzer Recommendation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBotAnalyzerRecommendationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes the recommendations and analysis results for a specific bot analysis request. This operation is provided for GDPR compliance and cannot be undone. After deletion, the analysis results cannot be retrieved. The analysis request ID will still appear in the history list, but attempting to describe the recommendations will return a ResourceNotFoundException.
    /// </remarks>
    public Task<object> DeleteBotAnalyzerRecommendation(DeleteBotAnalyzerRecommendationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botanalyzer/{botAnalyzerRequestId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botAnalyzerRequestId", request.BotAnalyzerRequestId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            DeleteBotAnalyzerRecommendationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Bot Locale
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteBotLocaleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBotLocaleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.
    /// </remarks>
    public Task<DeleteBotLocaleResponse> DeleteBotLocale(DeleteBotLocaleOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteBotLocaleResponse>(),
            DeleteBotLocaleError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Bot Replica
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteBotReplicaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBotReplicaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The action to delete the replicated bot in the secondary region.
    /// </remarks>
    public Task<DeleteBotReplicaResponse> DeleteBotReplica(DeleteBotReplicaOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/replicas/{replicaRegion}"),
            [new TemplateParam("botId", request.BotId), new TemplateParam("replicaRegion", request.ReplicaRegion)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteBotReplicaResponse>(),
            DeleteBotReplicaError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Bot Version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteBotVersionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBotVersionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.
    /// </remarks>
    public Task<DeleteBotVersionResponse> DeleteBotVersion(DeleteBotVersionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botversions/{botVersion}"),
            [new TemplateParam("botId", request.BotId), new TemplateParam("botVersion", request.BotVersion)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteBotVersionResponse>(),
            DeleteBotVersionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Bot Version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBotVersion1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This operation requires permissions for the lex:DeleteBotVersion action.
    /// </remarks>
    public Task<string> DeleteBotVersion1(DeleteBotVersion1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{name}/versions/{version}"),
            [new TemplateParam("name", request.Name), new TemplateParam("version", request.Version)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteBotVersion1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Custom Vocabulary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteCustomVocabularyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomVocabularyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a custom vocabulary from the specified locale in the specified bot.
    /// </remarks>
    public Task<DeleteCustomVocabularyResponse> DeleteCustomVocabulary(DeleteCustomVocabularyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteCustomVocabularyResponse>(),
            DeleteCustomVocabularyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Intent
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteIntentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes the specified intent. Deleting an intent also deletes the slots associated with the intent.
    /// </remarks>
    public Task<string> DeleteIntent(DeleteIntentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("intentId", request.IntentId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteIntentError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Intent
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteIntent1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes all versions of the intent, including the $LATEST version. To delete a specific version of the intent, use the DeleteIntentVersion operation. You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see how-it-works), you must remove those references first. If you get the ResourceInUseException exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to DeleteIntent is successful. This operation requires permission for the lex:DeleteIntent action.
    /// </remarks>
    public Task<string> DeleteIntent1(DeleteIntent1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/intents/{name}"),
            [new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteIntent1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteSessionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes session information for a specified bot, alias, and user ID. You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again. You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours. If you specify a bot or alias ID that doesn't exist, you receive a BadRequestException. If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a BadRequestException.
    /// </remarks>
    public Task<DeleteSessionResponse> DeleteSession(DeleteSessionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botAliasId", request.BotAliasId),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("sessionId", request.SessionId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteSessionResponse>(),
            DeleteSessionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RuntimeLexDeleteSessionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSession1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes session information for a specified bot, alias, and user ID.
    /// </remarks>
    public Task<RuntimeLexDeleteSessionResponse> DeleteSession1(DeleteSession1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bot/{botName}/alias/{botAlias}/user/{userId}/session"),
            [
                new TemplateParam("botName", request.BotName),
                new TemplateParam("botAlias", request.BotAlias),
                new TemplateParam("userId", request.UserId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RuntimeLexDeleteSessionResponse>(),
            DeleteSession1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Slot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSlotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified slot from an intent.
    /// </remarks>
    public Task<string> DeleteSlot(DeleteSlotOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("intentId", request.IntentId),
                new TemplateParam("slotId", request.SlotId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteSlotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Slot Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSlotTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck parameter to true.
    /// </remarks>
    public Task<string> DeleteSlotType(DeleteSlotTypeOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("slotTypeId", request.SlotTypeId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteSlotTypeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Slot Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSlotType1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes all versions of the slot type, including the $LATEST version. To delete a specific version of the slot type, use the DeleteSlotTypeVersion operation. You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first. If you get the ResourceInUseException exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the DeleteSlotType call is successful. This operation requires permission for the lex:DeleteSlotType action.
    /// </remarks>
    public Task<string> DeleteSlotType1(DeleteSlotType1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/slottypes/{name}"),
            [new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteSlotType1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Utterances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteUtterancesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the ListAggregatedUtterances operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input.. Use the DeleteUtterances operation to manually delete utterances for a specific session. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the ListAggregatedUtterances operation are deleted after 15 days.
    /// </remarks>
    public Task<object> DeleteUtterances(DeleteUtterancesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/utterances"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            DeleteUtterancesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Utterances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteUtterances1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the GetUtterancesView operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input. Use the DeleteUtterances operation to manually delete stored utterances for a specific user. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the GetUtterancesView operation are deleted after 15 days. This operation requires permissions for the lex:DeleteUtterances action.
    /// </remarks>
    public Task<string> DeleteUtterances1(DeleteUtterances1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botName}/utterances/{userId}"),
            [new TemplateParam("botName", request.BotName), new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteUtterances1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Bot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeBotResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeBotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides metadata information about a bot.
    /// </remarks>
    public Task<DescribeBotResponse> DescribeBot(DescribeBotOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeBotResponse>(),
            DescribeBotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Bot Alias
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeBotAliasResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeBotAliasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get information about a specific bot alias.
    /// </remarks>
    public Task<DescribeBotAliasResponse> DescribeBotAlias(DescribeBotAliasOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botaliases/{botAliasId}"),
            [new TemplateParam("botId", request.BotId), new TemplateParam("botAliasId", request.BotAliasId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeBotAliasResponse>(),
            DescribeBotAliasError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Bot Analyzer Recommendation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeBotAnalyzerRecommendationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeBotAnalyzerRecommendationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the analysis results and recommendations for bot optimization. The analysis must be in Available status before recommendations can be retrieved. Recommendations are returned with pagination support. Each recommendation includes the issue location, priority level, detailed description, and proposed fix.
    /// </remarks>
    public Task<DescribeBotAnalyzerRecommendationResponse> DescribeBotAnalyzerRecommendation(DescribeBotAnalyzerRecommendationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botanalyzer/describe/{botAnalyzerRequestId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botAnalyzerRequestId", request.BotAnalyzerRequestId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DescribeBotAnalyzerRecommendationResponse>(),
            DescribeBotAnalyzerRecommendationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Bot Locale
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeBotLocaleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeBotLocaleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Describes the settings that a bot has for a specific locale.
    /// </remarks>
    public Task<DescribeBotLocaleResponse> DescribeBotLocale(DescribeBotLocaleOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeBotLocaleResponse>(),
            DescribeBotLocaleError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Bot Recommendation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeBotRecommendationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeBotRecommendationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides metadata information about a bot recommendation. This information will enable you to get a description on the request inputs, to download associated transcripts after processing is complete, and to download intents and slot-types generated by the bot recommendation.
    /// </remarks>
    public Task<DescribeBotRecommendationResponse> DescribeBotRecommendation(DescribeBotRecommendationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("botRecommendationId", request.BotRecommendationId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeBotRecommendationResponse>(),
            DescribeBotRecommendationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Bot Replica
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeBotReplicaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeBotReplicaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Monitors the bot replication status through the UI console.
    /// </remarks>
    public Task<DescribeBotReplicaResponse> DescribeBotReplica(DescribeBotReplicaOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/replicas/{replicaRegion}"),
            [new TemplateParam("botId", request.BotId), new TemplateParam("replicaRegion", request.ReplicaRegion)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeBotReplicaResponse>(),
            DescribeBotReplicaError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Bot Resource Generation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeBotResourceGenerationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeBotResourceGenerationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about a request to generate a bot through natural language description, made through the StartBotResource API. Use the generatedBotLocaleUrl to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.
    /// </remarks>
    public Task<DescribeBotResourceGenerationResponse> DescribeBotResourceGeneration(DescribeBotResourceGenerationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations/{generationId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("generationId", request.GenerationId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeBotResourceGenerationResponse>(),
            DescribeBotResourceGenerationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Bot Version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeBotVersionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeBotVersionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides metadata about a version of a bot.
    /// </remarks>
    public Task<DescribeBotVersionResponse> DescribeBotVersion(DescribeBotVersionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botversions/{botVersion}"),
            [new TemplateParam("botId", request.BotId), new TemplateParam("botVersion", request.BotVersion)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeBotVersionResponse>(),
            DescribeBotVersionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Custom Vocabulary Metadata
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeCustomVocabularyMetadataResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeCustomVocabularyMetadataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides metadata information about a custom vocabulary.
    /// </remarks>
    public Task<DescribeCustomVocabularyMetadataResponse> DescribeCustomVocabularyMetadata(DescribeCustomVocabularyMetadataOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeCustomVocabularyMetadataResponse>(),
            DescribeCustomVocabularyMetadataError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Intent
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeIntentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeIntentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns metadata about an intent.
    /// </remarks>
    public Task<DescribeIntentResponse> DescribeIntent(DescribeIntentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("intentId", request.IntentId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeIntentResponse>(),
            DescribeIntentError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Slot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeSlotResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeSlotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets metadata information about a slot.
    /// </remarks>
    public Task<DescribeSlotResponse> DescribeSlot(DescribeSlotOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("intentId", request.IntentId),
                new TemplateParam("slotId", request.SlotId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeSlotResponse>(),
            DescribeSlotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Slot Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeSlotTypeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeSlotTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets metadata information about a slot type.
    /// </remarks>
    public Task<DescribeSlotTypeResponse> DescribeSlotType(DescribeSlotTypeOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("slotTypeId", request.SlotTypeId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeSlotTypeResponse>(),
            DescribeSlotTypeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Generate Bot Element
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GenerateBotElementResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GenerateBotElementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generates sample utterances for an intent.
    /// </remarks>
    public Task<GenerateBotElementResponse> GenerateBotElement(GenerateBotElementOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generate"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GenerateBotElementResponse>(),
            GenerateBotElementError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Bots
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetBotsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBotsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns bot information as follows: If you provide the nameContains field, the response includes information for the $LATEST version of all bots whose name contains the specified string. If you don't specify the nameContains field, the operation returns information about the $LATEST version of all of your bots. This operation requires permission for the lex:GetBots action.
    /// </remarks>
    public Task<GetBotsResponse> GetBots(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetBotsResponse>(),
            GetBotsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetSessionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns session information for a specified bot, alias, and user. For example, you can use this operation to retrieve session information for a user that has left a long-running session in use. If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a BadRequestException. If the locale doesn't exist or is not enabled for the alias, you receive a BadRequestException.
    /// </remarks>
    public Task<GetSessionResponse> GetSession(GetSessionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botAliasId", request.BotAliasId),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("sessionId", request.SessionId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetSessionResponse>(),
            GetSessionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RuntimeLexGetSessionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSession1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns session information for a specified bot, alias, and user ID.
    /// </remarks>
    public Task<RuntimeLexGetSessionResponse> GetSession1(GetSession1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bot/{botName}/alias/{botAlias}/user/{userId}/session"),
            [
                new TemplateParam("botName", request.BotName),
                new TemplateParam("botAlias", request.BotAlias),
                new TemplateParam("userId", request.UserId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RuntimeLexGetSessionResponse>(),
            GetSession1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Aggregated Utterances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAggregatedUtterancesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAggregatedUtterancesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides a list of utterances that users have sent to the bot. Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response. You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn't activate an intent. Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time. Utterances statistics are not generated under the following conditions: The childDirected field was set to true when the bot was created. You are using slot obfuscation with one or more slots. You opted out of participating in improving Amazon Lex.
    /// </remarks>
    public Task<ListAggregatedUtterancesResponse> ListAggregatedUtterances(ListAggregatedUtterancesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/aggregatedutterances"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListAggregatedUtterancesResponse>(),
            ListAggregatedUtterancesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Bot Alias Replicas
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBotAliasReplicasResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBotAliasReplicasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The action to list the replicated bots created from the source bot alias.
    /// </remarks>
    public Task<ListBotAliasReplicasResponse> ListBotAliasReplicas(ListBotAliasReplicasOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/replicas/{replicaRegion}/botaliases"),
            [new TemplateParam("botId", request.BotId), new TemplateParam("replicaRegion", request.ReplicaRegion)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBotAliasReplicasResponse>(),
            ListBotAliasReplicasError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Bot Aliases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBotAliasesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBotAliasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of aliases for the specified bot.
    /// </remarks>
    public Task<ListBotAliasesResponse> ListBotAliases(ListBotAliasesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botaliases"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBotAliasesResponse>(),
            ListBotAliasesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Bot Analyzer History
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBotAnalyzerHistoryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBotAnalyzerHistoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of historical bot analysis executions for a specific bot. You can filter the results by locale and bot version. The history includes all analysis executions regardless of their status, allowing you to track past analyses and their outcomes.
    /// </remarks>
    public Task<ListBotAnalyzerHistoryResponse> ListBotAnalyzerHistory(ListBotAnalyzerHistoryOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botanalyzer/history"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBotAnalyzerHistoryResponse>(),
            ListBotAnalyzerHistoryError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Bot Locales
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBotLocalesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBotLocalesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of locales for the specified bot.
    /// </remarks>
    public Task<ListBotLocalesResponse> ListBotLocales(ListBotLocalesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botversions/{botVersion}/botlocales"),
            [new TemplateParam("botId", request.BotId), new TemplateParam("botVersion", request.BotVersion)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBotLocalesResponse>(),
            ListBotLocalesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Bot Recommendations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBotRecommendationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBotRecommendationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of bot recommendations that meet the specified criteria.
    /// </remarks>
    public Task<ListBotRecommendationsResponse> ListBotRecommendations(ListBotRecommendationsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBotRecommendationsResponse>(),
            ListBotRecommendationsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Bot Replicas
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBotReplicasResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBotReplicasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The action to list the replicated bots.
    /// </remarks>
    public Task<ListBotReplicasResponse> ListBotReplicas(ListBotReplicasOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/replicas"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBotReplicasResponse>(),
            ListBotReplicasError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Bot Resource Generations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBotResourceGenerationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBotResourceGenerationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the generation requests made for a bot locale.
    /// </remarks>
    public Task<ListBotResourceGenerationsResponse> ListBotResourceGenerations(ListBotResourceGenerationsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBotResourceGenerationsResponse>(),
            ListBotResourceGenerationsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Bot Version Replicas
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBotVersionReplicasResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBotVersionReplicasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Contains information about all the versions replication statuses applicable for Global Resiliency.
    /// </remarks>
    public Task<ListBotVersionReplicasResponse> ListBotVersionReplicas(ListBotVersionReplicasOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/replicas/{replicaRegion}/botversions"),
            [new TemplateParam("botId", request.BotId), new TemplateParam("replicaRegion", request.ReplicaRegion)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBotVersionReplicasResponse>(),
            ListBotVersionReplicasError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Bot Versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBotVersionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBotVersionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about all of the versions of a bot. The ListBotVersions operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the ListBotVersions operation returns for summaries, one for each numbered version and one for the DRAFT version. The ListBotVersions operation always returns at least one version, the DRAFT version.
    /// </remarks>
    public Task<ListBotVersionsResponse> ListBotVersions(ListBotVersionsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botversions"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBotVersionsResponse>(),
            ListBotVersionsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Bots
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBotsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBotsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of available bots.
    /// </remarks>
    public Task<ListBotsResponse> ListBots(ListBotsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBotsResponse>(),
            ListBotsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Custom Vocabulary Items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListCustomVocabularyItemsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomVocabularyItemsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.
    /// </remarks>
    public Task<ListCustomVocabularyItemsResponse> ListCustomVocabularyItems(ListCustomVocabularyItemsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListCustomVocabularyItemsResponse>(),
            ListCustomVocabularyItemsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Intent Metrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListIntentMetricsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListIntentMetricsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves summary metrics for the intents in your bot. The following fields are required: metrics – A list of AnalyticsIntentMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results. Note that an order field exists in both binBy and metrics. You can specify only one order in a given request.
    /// </remarks>
    public Task<ListIntentMetricsResponse> ListIntentMetrics(ListIntentMetricsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/analytics/intentmetrics"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListIntentMetricsResponse>(),
            ListIntentMetricsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Intent Paths
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListIntentPathsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListIntentPathsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following fields are required: startDateTime and endDateTime – Define a time range for which you want to retrieve results. intentPath – Define an order of intents for which you want to retrieve metrics. Separate intents in the path with a forward slash. For example, populate the intentPath field with /BookCar/BookHotel to see details about how many times users invoked the BookCar and BookHotel intents in that order. Use the optional filters field to filter the results.
    /// </remarks>
    public Task<ListIntentPathsResponse> ListIntentPaths(ListIntentPathsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/analytics/intentpaths"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListIntentPathsResponse>(),
            ListIntentPathsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Intent Stage Metrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListIntentStageMetricsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListIntentStageMetricsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves summary metrics for the stages within intents in your bot. The following fields are required: metrics – A list of AnalyticsIntentStageMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results. Note that an order field exists in both binBy and metrics. You can only specify one order in a given request.
    /// </remarks>
    public Task<ListIntentStageMetricsResponse> ListIntentStageMetrics(ListIntentStageMetricsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/analytics/intentstagemetrics"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListIntentStageMetricsResponse>(),
            ListIntentStageMetricsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Intents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListIntentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListIntentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of intents that meet the specified criteria.
    /// </remarks>
    public Task<ListIntentsResponse> ListIntents(ListIntentsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListIntentsResponse>(),
            ListIntentsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Recommended Intents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListRecommendedIntentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRecommendedIntentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents in the response are ordered by relevance.
    /// </remarks>
    public Task<ListRecommendedIntentsResponse> ListRecommendedIntents(ListRecommendedIntentsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("botRecommendationId", request.BotRecommendationId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListRecommendedIntentsResponse>(),
            ListRecommendedIntentsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Session Analytics Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSessionAnalyticsDataResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSessionAnalyticsDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of metadata for individual user sessions with your bot. The startDateTime and endDateTime fields are required. These fields define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results and the sortBy field to specify the values by which to sort the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results.
    /// </remarks>
    public Task<ListSessionAnalyticsDataResponse> ListSessionAnalyticsData(ListSessionAnalyticsDataOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/analytics/sessions"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListSessionAnalyticsDataResponse>(),
            ListSessionAnalyticsDataError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Session Metrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSessionMetricsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSessionMetricsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves summary metrics for the user sessions with your bot. The following fields are required: metrics – A list of AnalyticsSessionMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results. Note that an order field exists in both binBy and metrics. Currently, you can specify it in either field, but not in both.
    /// </remarks>
    public Task<ListSessionMetricsResponse> ListSessionMetrics(ListSessionMetricsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/analytics/sessionmetrics"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListSessionMetricsResponse>(),
            ListSessionMetricsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Slot Types
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSlotTypesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSlotTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of slot types that match the specified criteria.
    /// </remarks>
    public Task<ListSlotTypesResponse> ListSlotTypes(ListSlotTypesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListSlotTypesResponse>(),
            ListSlotTypesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Slots
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSlotsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSlotsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of slots that match the specified criteria.
    /// </remarks>
    public Task<ListSlotsResponse> ListSlots(ListSlotsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("intentId", request.IntentId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListSlotsResponse>(),
            ListSlotsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Utterance Analytics Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListUtteranceAnalyticsDataResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListUtteranceAnalyticsDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM policy to apply to the IAM role. Retrieves a list of metadata for individual user utterances to your bot. The following fields are required: startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results and the sortBy field to specify the values by which to sort the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results.
    /// </remarks>
    public Task<ListUtteranceAnalyticsDataResponse> ListUtteranceAnalyticsData(ListUtteranceAnalyticsDataOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/analytics/utterances"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListUtteranceAnalyticsDataResponse>(),
            ListUtteranceAnalyticsDataError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Utterance Metrics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListUtteranceMetricsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListUtteranceMetricsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM policy to apply to the IAM role. Retrieves summary metrics for the utterances in your bot. The following fields are required: metrics – A list of AnalyticsUtteranceMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of re
    /// </remarks>
    public Task<ListUtteranceMetricsResponse> ListUtteranceMetrics(ListUtteranceMetricsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/analytics/utterancemetrics"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListUtteranceMetricsResponse>(),
            ListUtteranceMetricsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PutSessionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutSessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.
    /// </remarks>
    public Task<PutSessionResponse> PutSession(PutSessionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botAliasId", request.BotAliasId),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("sessionId", request.SessionId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PutSessionResponse>(),
            PutSessionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RuntimeLexPutSessionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutSession1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot. For more information, see Managing Sessions.
    /// </remarks>
    public Task<RuntimeLexPutSessionResponse> PutSession1(PutSession1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bot/{botName}/alias/{botAlias}/user/{userId}/session"),
            [
                new TemplateParam("botName", request.BotName),
                new TemplateParam("botAlias", request.BotAlias),
                new TemplateParam("userId", request.UserId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RuntimeLexPutSessionResponse>(),
            PutSession1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Recognize Text
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecognizeTextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RecognizeTextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot. In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Completion message.
    /// </remarks>
    public Task<RecognizeTextResponse> RecognizeText(RecognizeTextOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botAliasId", request.BotAliasId),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("sessionId", request.SessionId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecognizeTextResponse>(),
            RecognizeTextError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Recognize Utterance
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecognizeUtteranceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RecognizeUtteranceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot. The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. requestAttributes sessionState The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. inputTranscript interpretations messages requestAttributes sessionState The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws
    /// </remarks>
    public Task<RecognizeUtteranceResponse> RecognizeUtterance(RecognizeUtteranceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botAliasId", request.BotAliasId),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("sessionId", request.SessionId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecognizeUtteranceResponse>(),
            RecognizeUtteranceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Associated Transcripts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchAssociatedTranscriptsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchAssociatedTranscriptsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for associated transcripts that meet the specified criteria.
    /// </remarks>
    public Task<SearchAssociatedTranscriptsResponse> SearchAssociatedTranscripts(SearchAssociatedTranscriptsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("botRecommendationId", request.BotRecommendationId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchAssociatedTranscriptsResponse>(),
            SearchAssociatedTranscriptsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Bot Analyzer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartBotAnalyzerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartBotAnalyzerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to identify potential issues and recommend improvements based on AWS best practices. The analysis examines your bot's configuration, including intents, utterances, slots, and conversation flows, to provide actionable recommendations for optimization.
    /// </remarks>
    public Task<StartBotAnalyzerResponse> StartBotAnalyzer(StartBotAnalyzerOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botanalyzer"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartBotAnalyzerResponse>(),
            StartBotAnalyzerError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Bot Recommendation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartBotRecommendationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartBotRecommendationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this to provide your transcript data, and to start the bot recommendation process.
    /// </remarks>
    public Task<StartBotRecommendationResponse> StartBotRecommendation(StartBotRecommendationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartBotRecommendationResponse>(),
            StartBotRecommendationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Bot Resource Generation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartBotResourceGenerationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartBotResourceGenerationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a request for the descriptive bot builder to generate a bot locale configuration based on the prompt you provide it. After you make this call, use the DescribeBotResourceGeneration operation to check on the status of the generation and for the generatedBotLocaleUrl when the generation is complete. Use that value to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.
    /// </remarks>
    public Task<StartBotResourceGenerationResponse> StartBotResourceGeneration(StartBotResourceGenerationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/startgeneration"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartBotResourceGenerationResponse>(),
            StartBotResourceGenerationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Conversation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartConversationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartConversationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts an HTTP/2 bidirectional event stream that enables you to send audio, text, or DTMF input in real time. After your application starts a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon Lex V2 processes the incoming events and responds with streaming text or audio events. Audio input must be in the following format: audio/lpcm sample-rate=8000 sample-size-bits=16 channel-count=1; is-big-endian=false. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Complet
    /// </remarks>
    public Task<StartConversationResponse> StartConversation(StartConversationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botAliasId", request.BotAliasId),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("sessionId", request.SessionId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartConversationResponse>(),
            StartConversationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop Bot Analyzer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StopBotAnalyzerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopBotAnalyzerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no recommendations will be generated.
    /// </remarks>
    public Task<StopBotAnalyzerResponse> StopBotAnalyzer(StopBotAnalyzerOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botanalyzer/{botAnalyzerRequestId}/stop"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botAnalyzerRequestId", request.BotAnalyzerRequestId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StopBotAnalyzerResponse>(),
            StopBotAnalyzerError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop Bot Recommendation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StopBotRecommendationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopBotRecommendationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stop an already running Bot Recommendation request.
    /// </remarks>
    public Task<StopBotRecommendationResponse> StopBotRecommendation(StopBotRecommendationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("botRecommendationId", request.BotRecommendationId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StopBotRecommendationResponse>(),
            StopBotRecommendationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Bot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateBotResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the configuration of an existing bot.
    /// </remarks>
    public Task<UpdateBotResponse> UpdateBot(UpdateBotOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}"),
            [new TemplateParam("botId", request.BotId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateBotResponse>(),
            UpdateBotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Bot Alias
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateBotAliasResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBotAliasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the configuration of an existing bot alias.
    /// </remarks>
    public Task<UpdateBotAliasResponse> UpdateBotAlias(UpdateBotAliasOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/bots/{botId}/botaliases/{botAliasId}"),
            [new TemplateParam("botId", request.BotId), new TemplateParam("botAliasId", request.BotAliasId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateBotAliasResponse>(),
            UpdateBotAliasError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Bot Locale
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateBotLocaleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBotLocaleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the settings that a bot has for a specific locale.
    /// </remarks>
    public Task<UpdateBotLocaleResponse> UpdateBotLocale(UpdateBotLocaleOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateBotLocaleResponse>(),
            UpdateBotLocaleError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Bot Recommendation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateBotRecommendationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBotRecommendationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing bot recommendation request.
    /// </remarks>
    public Task<UpdateBotRecommendationResponse> UpdateBotRecommendation(UpdateBotRecommendationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("botRecommendationId", request.BotRecommendationId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateBotRecommendationResponse>(),
            UpdateBotRecommendationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Intent
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateIntentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateIntentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the settings for an intent.
    /// </remarks>
    public Task<UpdateIntentResponse> UpdateIntent(UpdateIntentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("intentId", request.IntentId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateIntentResponse>(),
            UpdateIntentError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Slot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateSlotResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSlotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the settings for a slot.
    /// </remarks>
    public Task<UpdateSlotResponse> UpdateSlot(UpdateSlotOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("intentId", request.IntentId),
                new TemplateParam("slotId", request.SlotId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateSlotResponse>(),
            UpdateSlotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Slot Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateSlotTypeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSlotTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the configuration of an existing slot type.
    /// </remarks>
    public Task<UpdateSlotTypeResponse> UpdateSlotType(UpdateSlotTypeOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi(
                "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}"),
            [
                new TemplateParam("botId", request.BotId),
                new TemplateParam("botVersion", request.BotVersion),
                new TemplateParam("localeId", request.LocaleId),
                new TemplateParam("slotTypeId", request.SlotTypeId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateSlotTypeResponse>(),
            UpdateSlotTypeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
