using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.Publications;

namespace Beehiiv.Api;

public sealed class Publications
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Publications(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// List publications OAuth Scope: publications:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicationsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index18Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all publications associated with your API key.
    /// </remarks>
    public Task<PublicationsListResponse> Index18(Index18Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications"),
            [],
            [
                new Param("expand", request.Expand),
                new Param("limit", request.Limit),
                new Param("page", request.Page),
                new Param("direction", request.Direction),
                new Param("order_by", request.OrderBy),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicationsListResponse>(),
            Index18Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get publication OAuth Scope: publications:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicationsGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show13Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single publication
    /// </remarks>
    public Task<PublicationsGetResponse> Show13(Show13Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [new Param("expand", request.Expand)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicationsGetResponse>(),
            Show13Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
