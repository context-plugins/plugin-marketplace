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
using Beehiiv.Requests.PostTemplates;

namespace Beehiiv.Api;

public sealed class PostTemplates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal PostTemplates(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get post templates OAuth Scope: posts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PostTemplatesGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index16Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of post templates available for the publication.
    /// </remarks>
    public Task<PostTemplatesGetResponse> Index16(Index16Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/post_templates"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("limit", request.Limit),
                new Param("page", request.Page),
                new Param("order", request.Order),
                new Param("order_by", request.OrderBy),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PostTemplatesGetResponse>(),
            Index16Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
