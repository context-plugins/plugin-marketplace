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
using Beehiiv.Requests.AdvertisementOpportunities;

namespace Beehiiv.Api;

public sealed class AdvertisementOpportunities
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal AdvertisementOpportunities(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get advertisement opportunities OAuth Scope: posts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdvertisementOpportunitiesGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index3Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of accepted advertisement opportunities for the publication.
    /// </remarks>
    public Task<AdvertisementOpportunitiesGetResponse> Index3(Index3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/advertisement_opportunities"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdvertisementOpportunitiesGetResponse>(),
            Index3Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
