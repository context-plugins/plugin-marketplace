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
using Beehiiv.Requests.Authors;

namespace Beehiiv.Api;

public sealed class Authors
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Authors(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// List authors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuthorsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index4Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of authors available for the publication.
    /// </remarks>
    public Task<AuthorsListResponse> Index4(Index4Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/authors"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [new Param("limit", request.Limit), new Param("page", request.Page), new Param("name", request.Name)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AuthorsListResponse>(),
            Index4Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get author
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuthorsGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single author from a publication.
    /// </remarks>
    public Task<AuthorsGetResponse> Show(ShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/authors/{authorId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("authorId", request.AuthorId),
            ],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AuthorsGetResponse>(),
            ShowError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
