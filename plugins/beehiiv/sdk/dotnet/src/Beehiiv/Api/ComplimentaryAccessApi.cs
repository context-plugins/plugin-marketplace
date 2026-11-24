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
using Beehiiv.Requests.ComplimentaryAccessApi;

namespace Beehiiv.Api;

public sealed class ComplimentaryAccessApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ComplimentaryAccessApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// List complimentary access OAuth Scope: complimentary_access:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IndexComplimentaryAccessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index8Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all complimentary access objects belonging to a specific publication.
    /// </remarks>
    public Task<IndexComplimentaryAccessResponse> Index8(Index8Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/complimentary_access"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("expand[]", request.Expand),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IndexComplimentaryAccessResponse>(),
            Index8Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get complimentary access OAuth Scope: complimentary_access:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ComplimentaryAccessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show5Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single complimentary access object belonging to a specific publication.
    /// </remarks>
    public Task<ComplimentaryAccessResponse> Show5(Show5Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/complimentary_access/{complimentaryAccessId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("complimentaryAccessId", request.ComplimentaryAccessId),
            ],
            [new Param("expand[]", request.Expand)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ComplimentaryAccessResponse>(),
            Show5Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
