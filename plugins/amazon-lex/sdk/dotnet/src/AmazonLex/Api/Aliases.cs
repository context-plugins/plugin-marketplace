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
using AmazonLex.Requests.Aliases;

namespace AmazonLex.Api;

public sealed class Aliases
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Aliases(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Bot Alias
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBotAliasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the DeleteBotAlias operation is successful.
    /// </remarks>
    public Task<string> DeleteBotAlias(DeleteBotAliasOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bots/{botName}/aliases/{name}"),
            [new TemplateParam("botName", request.BotName), new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteBotAliasError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Bot Alias
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetBotAliasResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBotAliasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about an Amazon Lex bot alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.
    /// </remarks>
    public Task<GetBotAliasResponse> GetBotAlias(GetBotAliasOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bots/{botName}/aliases/{name}"),
            [new TemplateParam("botName", request.BotName), new TemplateParam("name", request.Name)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetBotAliasResponse>(),
            GetBotAliasError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Bot Aliases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetBotAliasesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBotAliasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of aliases for a specified Amazon Lex bot. This operation requires permissions for the lex:GetBotAliases action.
    /// </remarks>
    public Task<GetBotAliasesResponse> GetBotAliases(GetBotAliasesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bots/{botName}/aliases"),
            [new TemplateParam("botName", request.BotName)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetBotAliasesResponse>(),
            GetBotAliasesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put Bot Alias
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PutBotAliasResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutBotAliasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:PutBotAlias action.
    /// </remarks>
    public Task<PutBotAliasResponse> PutBotAlias(PutBotAliasOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bots/{botName}/aliases/{name}"),
            [new TemplateParam("botName", request.BotName), new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PutBotAliasResponse>(),
            PutBotAliasError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
