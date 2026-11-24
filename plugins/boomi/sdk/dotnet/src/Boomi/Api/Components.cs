using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Boomi.Core;
using Boomi.Core.Exceptions;
using Boomi.Core.Models;
using Boomi.Core.Request;
using Boomi.Core.Response;
using Boomi.Errors;
using Boomi.Models;
using Boomi.Requests.Components;

namespace Boomi.Api;

/// <summary>
/// Manage packaged components and integration pack attachments.
/// </summary>
public sealed class Components
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Components(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Boomi Create a packaged component
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PackagedComponent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePackagedComponentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a packaged version of a Boomi component (process, connector, etc.) that can be deployed to environments.
    /// </remarks>
    public Task<PackagedComponent> CreatePackagedComponent(CreatePackagedComponentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/PackagedComponent"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PackagedComponent>(),
            CreatePackagedComponentError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Get a packaged component
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PackagedComponent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPackagedComponentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of a specific packaged component by its ID.
    /// </remarks>
    public Task<PackagedComponent> GetPackagedComponent(GetPackagedComponentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/PackagedComponent/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PackagedComponent>(),
            GetPackagedComponentError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
