using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CodeQr.Core;
using CodeQr.Core.Exceptions;
using CodeQr.Core.Models;
using CodeQr.Core.Request;
using CodeQr.Core.Response;
using CodeQr.Errors;
using CodeQr.Models.OneOf;
using CodeQr.Requests.Events;

namespace CodeQr.Api;

public sealed class Events
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Events(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a list of events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="EventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a paginated list of events for the authenticated workspace.
    /// </remarks>
    public Task<IReadOnlyList<EventsResponse>> ListEvents(ListEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events"),
            [],
            [
                new Param("event", request.Event),
                new Param("domain", request.Domain),
                new Param("key", request.Key),
                new Param("linkId", request.LinkId),
                new Param("qrcodeId", request.QrcodeId),
                new Param("pageId", request.PageId),
                new Param("externalId", request.ExternalId),
                new Param("interval", request.Interval),
                new Param("start", request.Start),
                new Param("end", request.End),
                new Param("timezone", request.Timezone),
                new Param("continent", request.Continent),
                new Param("country", request.Country),
                new Param("city", request.City),
                new Param("device", request.Device),
                new Param("browser", request.Browser),
                new Param("os", request.Os),
                new Param("referer", request.Referer),
                new Param("url", request.Url),
                new Param("excludeRoot", request.ExcludeRoot),
                new Param("root", request.Root),
                new Param("tagId", request.TagId),
                new Param("utm_source", request.UtmSource),
                new Param("utm_medium", request.UtmMedium),
                new Param("utm_campaign", request.UtmCampaign),
                new Param("utm_content", request.UtmContent),
                new Param("utm_term", request.UtmTerm),
                new Param("type", request.Type),
                new Param("types", request.Types),
                new Param("page", request.Page),
                new Param("limit", request.Limit),
                new Param("order", request.Order),
                new Param("sortBy", request.SortBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<EventsResponse>>(),
            ListEventsError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);
}
