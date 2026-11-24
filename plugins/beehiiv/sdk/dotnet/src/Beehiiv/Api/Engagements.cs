using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Extensions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.Engagements;

namespace Beehiiv.Api;

public sealed class Engagements
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Engagements(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get publication engagements OAuth Scope: publications:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicationEngagementsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index12Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve email engagement metrics for a specific publication over a defined date range and granularity.
    /// <para>
    /// By default, the endpoint returns metrics for the past day, aggregated daily. The max number of days allowed is 31. All dates and times are in UTC.
    /// </para>
    /// </remarks>
    public Task<PublicationEngagementsResponse> Index12(Index12Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/engagements"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("start_date", request.StartDate?.ToDate()),
                new Param("number_of_days", request.NumberOfDays),
                new Param("granularity", request.Granularity),
                new Param("email_type", request.EmailType),
                new Param("direction", request.Direction),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicationEngagementsResponse>(),
            Index12Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
