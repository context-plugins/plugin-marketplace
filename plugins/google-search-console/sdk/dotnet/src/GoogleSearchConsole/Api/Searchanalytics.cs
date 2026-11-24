using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleSearchConsole.Core;
using GoogleSearchConsole.Core.Authentication;
using GoogleSearchConsole.Core.Exceptions;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Core.Request;
using GoogleSearchConsole.Core.Response;
using GoogleSearchConsole.Errors;
using GoogleSearchConsole.Models;
using GoogleSearchConsole.Requests.Searchanalytics;

namespace GoogleSearchConsole.Api;

public sealed class Searchanalytics
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Searchanalytics(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Query searchanalytics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchAnalyticsQueryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebmastersSearchanalyticsQueryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.
    /// </remarks>
    public Task<SearchAnalyticsQueryResponse> WebmastersSearchanalyticsQuery(WebmastersSearchanalyticsQueryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webmasters/v3/sites/{siteUrl}/searchAnalytics/query"),
            [new TemplateParam("siteUrl", request.SiteUrl)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchAnalyticsQueryResponse>(),
            WebmastersSearchanalyticsQueryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
