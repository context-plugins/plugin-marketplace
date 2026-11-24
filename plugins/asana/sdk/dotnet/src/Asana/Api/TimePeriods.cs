using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Extensions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.TimePeriods;

namespace Asana.Api;

/// <summary>
/// A time period is an object that represents a domain-scoped date range that can be set on goals.
/// </summary>
public sealed class TimePeriods
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TimePeriods(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a time period
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TimePeriodsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTimePeriodError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full record for a single time period.
    /// </remarks>
    public Task<TimePeriodsResponse> GetTimePeriod(GetTimePeriodRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/time_periods/{time_period_gid}"),
            [new TemplateParam("time_period_gid", request.TimePeriodGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TimePeriodsResponse>(),
            GetTimePeriodError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get time periods
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TimePeriodsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTimePeriodsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns compact time period records.
    /// </remarks>
    public Task<TimePeriodsResponse1> GetTimePeriods(GetTimePeriodsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/time_periods"),
            [],
            [
                new Param("workspace", request.Workspace),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("start_on", request.StartOn?.ToDate()),
                new Param("end_on", request.EndOn?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TimePeriodsResponse1>(),
            GetTimePeriodsError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
