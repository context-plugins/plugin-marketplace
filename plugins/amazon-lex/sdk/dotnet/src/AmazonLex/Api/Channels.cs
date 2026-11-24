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
using AmazonLex.Requests.Channels;

namespace AmazonLex.Api;

public sealed class Channels
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Channels(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Bot Channel Association
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBotChannelAssociationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the association between an Amazon Lex bot and a messaging platform. This operation requires permission for the lex:DeleteBotChannelAssociation action.
    /// </remarks>
    public Task<string> DeleteBotChannelAssociation(DeleteBotChannelAssociationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bots/{botName}/aliases/{botAlias}/channels/{name}"),
            [
                new TemplateParam("botName", request.BotName),
                new TemplateParam("botAlias", request.BotAlias),
                new TemplateParam("name", request.Name),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<string>(),
            DeleteBotChannelAssociationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Bot Channel Association
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetBotChannelAssociationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBotChannelAssociationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about the association between an Amazon Lex bot and a messaging platform. This operation requires permissions for the lex:GetBotChannelAssociation action.
    /// </remarks>
    public Task<GetBotChannelAssociationResponse> GetBotChannelAssociation(GetBotChannelAssociationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bots/{botName}/aliases/{botAlias}/channels/{name}"),
            [
                new TemplateParam("botName", request.BotName),
                new TemplateParam("botAlias", request.BotAlias),
                new TemplateParam("name", request.Name),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetBotChannelAssociationResponse>(),
            GetBotChannelAssociationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Bot Channel Associations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetBotChannelAssociationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBotChannelAssociationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all of the channels associated with the specified bot. The GetBotChannelAssociations operation requires permissions for the lex:GetBotChannelAssociations action.
    /// </remarks>
    public Task<GetBotChannelAssociationsResponse> GetBotChannelAssociations(GetBotChannelAssociationsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bots/{botName}/aliases/{botAlias}/channels"),
            [new TemplateParam("botName", request.BotName), new TemplateParam("botAlias", request.BotAlias)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetBotChannelAssociationsResponse>(),
            GetBotChannelAssociationsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
