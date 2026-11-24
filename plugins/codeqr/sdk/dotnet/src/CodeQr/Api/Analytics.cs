using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CodeQr.Core;
using CodeQr.Core.Exceptions;
using CodeQr.Core.Models;
using CodeQr.Core.Request;
using CodeQr.Core.Response;
using CodeQr.Errors;
using CodeQr.Models.AnyOf;
using CodeQr.Requests.Analytics;

namespace CodeQr.Api;

public sealed class Analytics
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Analytics(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve analytics for a link, a domain, or the authenticated workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RetrieveAnalyticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve analytics for a link, a domain, or the authenticated workspace. The response type depends on the <c>event</c> and <c>type</c> query parameters.
    /// </remarks>
    public Task<AnalyticsResponse> RetrieveAnalytics(RetrieveAnalyticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics"),
            [],
            [
                new Param("event", request.Event),
                new Param("groupBy", request.GroupBy),
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
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsResponse>(),
            RetrieveAnalyticsError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);
}
