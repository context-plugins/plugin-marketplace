using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleAnalytics.Core;
using GoogleAnalytics.Core.Authentication;
using GoogleAnalytics.Core.Exceptions;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Core.Request;
using GoogleAnalytics.Core.Response;
using GoogleAnalytics.Errors;
using GoogleAnalytics.Models;
using GoogleAnalytics.Requests.AccountSummaries;

namespace GoogleAnalytics.Api;

public sealed class AccountSummaries
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AccountSummaries(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List accountSummaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleAnalyticsAdminV1BetaListAccountSummariesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsadminAccountSummariesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns summaries of all accounts accessible by the caller.
    /// </remarks>
    public Task<GoogleAnalyticsAdminV1BetaListAccountSummariesResponse> AnalyticsadminAccountSummariesList(AnalyticsadminAccountSummariesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/accountSummaries"),
            [],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleAnalyticsAdminV1BetaListAccountSummariesResponse>(),
            AnalyticsadminAccountSummariesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
