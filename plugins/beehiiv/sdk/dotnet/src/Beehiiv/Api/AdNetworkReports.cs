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
using Beehiiv.Requests.AdNetworkReports;

namespace Beehiiv.Api;

public sealed class AdNetworkReports
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal AdNetworkReports(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get account ad network report summary OAuth Scope: posts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdNetworkReportSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AccountSummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This feature is currently in beta and the API is subject to change.
    /// <para>
    /// Retrieve one account-wide aggregate of advertisement performance and revenue across accessible publications.
    /// </para>
    /// </remarks>
    public Task<AdNetworkReportSummary> AccountSummary(AccountSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ad_network/reports/summaries"),
            [],
            [new Param("start_date", request.StartDate?.ToDate()), new Param("end_date", request.EndDate?.ToDate())],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdNetworkReportSummary>(),
            AccountSummaryError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get ad network reports OAuth Scope: posts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdNetworkReportsGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This feature is currently in beta and the API is subject to change.
    /// <para>
    /// Retrieve advertisement performance and payment reports for the publication.
    /// </para>
    /// </remarks>
    public Task<AdNetworkReportsGetResponse> Index2(Index2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/ad_network/reports"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("limit", request.Limit),
                new Param("page", request.Page),
                new Param("start_date", request.StartDate?.ToDate()),
                new Param("end_date", request.EndDate?.ToDate()),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdNetworkReportsGetResponse>(),
            Index2Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get ad network report summary OAuth Scope: posts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdNetworkReportSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This feature is currently in beta and the API is subject to change.
    /// <para>
    /// Retrieve aggregate advertisement performance and revenue for a publication.
    /// </para>
    /// </remarks>
    public Task<AdNetworkReportSummary> Summary(SummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/ad_network/reports/summaries"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [new Param("start_date", request.StartDate?.ToDate()), new Param("end_date", request.EndDate?.ToDate())],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdNetworkReportSummary>(),
            SummaryError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
