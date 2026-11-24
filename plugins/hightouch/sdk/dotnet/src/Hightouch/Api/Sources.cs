using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hightouch.Core;
using Hightouch.Core.Exceptions;
using Hightouch.Core.Models;
using Hightouch.Core.Request;
using Hightouch.Core.Response;
using Hightouch.Errors;
using Hightouch.Models;
using Hightouch.Models.AnyOf;
using Hightouch.Requests.Sources;

namespace Hightouch.Api;

public sealed class Sources
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Sources(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SourcesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new source
    /// </remarks>
    public Task<SourcesResponse1> CreateSource(CreateSourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sources"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SourcesResponse1>(),
            CreateSourceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Source"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve source from source ID
    /// </remarks>
    public Task<Source> GetSource(GetSourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sources/{sourceId}"),
            [new TemplateParam("sourceId", request.SourceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Source>(),
            GetSourceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Sources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SourcesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all the sources in the current workspace
    /// </remarks>
    public Task<SourcesResponse> ListSource(ListSourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sources"),
            [],
            [
                new Param("name", request.Name),
                new Param("slug", request.Slug),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("orderBy", request.OrderBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SourcesResponse>(),
            ListSourceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SourcesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing source
    /// <para>
    /// Patch a source based on its Hightouch ID
    /// </para>
    /// </remarks>
    public Task<SourcesResponse1> UpdateSource(UpdateSourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sources/{sourceId}"),
            [new TemplateParam("sourceId", request.SourceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SourcesResponse1>(),
            UpdateSourceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
