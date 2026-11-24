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
using AmazonLex.Requests.Versions;

namespace AmazonLex.Api;

public sealed class Versions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Versions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Bot Version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBotVersion2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permission for the lex:CreateBotVersion action.
    /// </remarks>
    public Task<ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi> CreateBotVersion2(CreateBotVersion2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bots/{name}/versions"),
            [new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi>(),
            CreateBotVersion2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Intent Version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateIntentVersionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateIntentVersionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new version of an intent based on the $LATEST version of the intent. If the $LATEST version of this intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last version you created. You can update only the $LATEST version of the intent. You can't update the numbered versions that you create with the CreateIntentVersion operation. When you create a version of an intent, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permissions to perform the lex:CreateIntentVersion action.
    /// </remarks>
    public Task<CreateIntentVersionResponse> CreateIntentVersion(CreateIntentVersionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/intents/{name}/versions"),
            [new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateIntentVersionResponse>(),
            CreateIntentVersionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Slot Type Version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateSlotTypeVersionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSlotTypeVersionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new version of a slot type based on the $LATEST version of the specified slot type. If the $LATEST version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a new version. It returns the last version that you created. You can update only the $LATEST version of a slot type. You can't update the numbered versions that you create with the CreateSlotTypeVersion operation. When you create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permissions for the lex:CreateSlotTypeVersion action.
    /// </remarks>
    public Task<CreateSlotTypeVersionResponse> CreateSlotTypeVersion(CreateSlotTypeVersionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/slottypes/{name}/versions"),
            [new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateSlotTypeVersionResponse>(),
            CreateSlotTypeVersionError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBotVersion2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This operation requires permissions for the lex:DeleteBotVersion action.
    /// </remarks>
    public Task<string> DeleteBotVersion2(DeleteBotVersion2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bots/{name}/versions/{version}"),
            [new TemplateParam("name", request.Name), new TemplateParam("version", request.Version)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteBotVersion2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Intent Version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteIntentVersionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific version of an intent. To delete all versions of a intent, use the DeleteIntent operation. This operation requires permissions for the lex:DeleteIntentVersion action.
    /// </remarks>
    public Task<string> DeleteIntentVersion(DeleteIntentVersionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/intents/{name}/versions/{version}"),
            [new TemplateParam("name", request.Name), new TemplateParam("version", request.Version)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteIntentVersionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Slot Type Version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSlotTypeVersion2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.
    /// </remarks>
    public Task<string> DeleteSlotTypeVersion2(DeleteSlotTypeVersion2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/slottypes/{name}/version/{version}"),
            [new TemplateParam("name", request.Name), new TemplateParam("version", request.Version)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteSlotTypeVersion2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Bot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetBotResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias. This operation requires permissions for the lex:GetBot action.
    /// </remarks>
    public Task<GetBotResponse> GetBot(GetBotOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bots/{name}/versions/{versionOrAlias}"),
            [new TemplateParam("name", request.Name), new TemplateParam("versionOrAlias", request.VersionOrAlias)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetBotResponse>(),
            GetBotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Bot Versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetBotVersionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBotVersionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about all of the versions of a bot. The GetBotVersions operation returns a BotMetadata object for each version of a bot. For example, if a bot has three numbered versions, the GetBotVersions operation returns four BotMetadata objects in the response, one for each numbered version and one for the $LATEST version. The GetBotVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetBotVersions action.
    /// </remarks>
    public Task<GetBotVersionsResponse> GetBotVersions(GetBotVersionsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bots/{name}/versions"),
            [new TemplateParam("name", request.Name)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetBotVersionsResponse>(),
            GetBotVersionsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Intent
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetIntentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIntentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about an intent. In addition to the intent name, you must specify the intent version. This operation requires permissions to perform the lex:GetIntent action.
    /// </remarks>
    public Task<GetIntentResponse> GetIntent(GetIntentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/intents/{name}/versions/{version}"),
            [new TemplateParam("name", request.Name), new TemplateParam("version", request.Version)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetIntentResponse>(),
            GetIntentError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Intent Versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetIntentVersionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIntentVersionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about all of the versions of an intent. The GetIntentVersions operation returns an IntentMetadata object for each version of an intent. For example, if an intent has three numbered versions, the GetIntentVersions operation returns four IntentMetadata objects in the response, one for each numbered version and one for the $LATEST version. The GetIntentVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetIntentVersions action.
    /// </remarks>
    public Task<GetIntentVersionsResponse> GetIntentVersions(GetIntentVersionsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/intents/{name}/versions"),
            [new TemplateParam("name", request.Name)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetIntentVersionsResponse>(),
            GetIntentVersionsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Slot Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetSlotTypeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSlotTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version. This operation requires permissions for the lex:GetSlotType action.
    /// </remarks>
    public Task<GetSlotTypeResponse> GetSlotType(GetSlotTypeOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/slottypes/{name}/versions/{version}"),
            [new TemplateParam("name", request.Name), new TemplateParam("version", request.Version)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetSlotTypeResponse>(),
            GetSlotTypeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Slot Type Versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetSlotTypeVersionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSlotTypeVersionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about all versions of a slot type. The GetSlotTypeVersions operation returns a SlotTypeMetadata object for each version of a slot type. For example, if a slot type has three numbered versions, the GetSlotTypeVersions operation returns four SlotTypeMetadata objects in the response, one for each numbered version and one for the $LATEST version. The GetSlotTypeVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetSlotTypeVersions action.
    /// </remarks>
    public Task<GetSlotTypeVersionsResponse> GetSlotTypeVersions(GetSlotTypeVersionsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/slottypes/{name}/versions"),
            [new TemplateParam("name", request.Name)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetSlotTypeVersionsResponse>(),
            GetSlotTypeVersionsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put Bot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PutBotResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutBotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum information, the bot is created or updated but Amazon Lex returns the response FAILED. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see how-it-works. If you specify the name of an existing bot, the fields in the request replace the existing values in the $LATEST version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the idleTTLInSeconds and privacySettings fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutBot action. For more information, see security-iam.
    /// </remarks>
    public Task<PutBotResponse> PutBot(PutBotOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bots/{name}/versions/$LATEST"),
            [new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PutBotResponse>(),
            PutBotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put Intent
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PutIntentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutIntentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an intent or replaces an existing intent. To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an OrderPizza intent. To create an intent or replace an existing intent, you must provide the following: Intent name. For example, OrderPizza. Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza." Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza. How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application. You can specify other optional information in the request, such as: A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?" A con
    /// </remarks>
    public Task<PutIntentResponse> PutIntent(PutIntentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/intents/{name}/versions/$LATEST"),
            [new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PutIntentResponse>(),
            PutIntentError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put Slot Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PutSlotTypeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutSlotTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a custom slot type or replaces an existing custom slot type. To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see how-it-works. If you specify the name of an existing slot type, the fields in the request replace the existing values in the $LATEST version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. When you update the $LATEST version of a slot type, if a bot uses the $LATEST version of an intent that contains the slot type, the bot's status field is set to NOT_BUILT. This operation requires permissions for the lex:PutSlotType action.
    /// </remarks>
    public Task<PutSlotTypeResponse> PutSlotType(PutSlotTypeOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/slottypes/{name}/versions/$LATEST"),
            [new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PutSlotTypeResponse>(),
            PutSlotTypeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
