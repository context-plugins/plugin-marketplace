using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Extensions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.Analytics;

namespace Basiq.Api;

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
    /// Connection Analytics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectionAnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetConnectionAnalyticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve connection analytics, including connection creation, status distribution, method distribution, and disruption rates over a given time interval.
    /// </remarks>
    public Task<ConnectionAnalyticsResponse> GetConnectionAnalytics(GetConnectionAnalyticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/connections"),
            [],
            [
                new Param("interval", request.Interval),
                new Param("fromDate", request.FromDate?.ToDate()),
                new Param("toDate", request.ToDate?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ConnectionAnalyticsResponse>(),
            GetConnectionAnalyticsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// User Analytics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserAnalyticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve user analytics, such as number of users and connections created for an application over a given time interval.
    /// </remarks>
    public Task<AnalyticsResponse> GetUserAnalytics(GetUserAnalyticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/users"),
            [],
            [
                new Param("interval", request.Interval),
                new Param("fromDate", request.FromDate?.ToDate()),
                new Param("toDate", request.ToDate?.ToDate()),
                new Param("connectionType", request.ConnectionType),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsResponse>(),
            GetUserAnalyticsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
