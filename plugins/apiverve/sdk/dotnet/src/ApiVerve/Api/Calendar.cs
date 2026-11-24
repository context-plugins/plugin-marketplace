using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core;
using ApiVerve.Core.Exceptions;
using ApiVerve.Core.Models;
using ApiVerve.Core.Request;
using ApiVerve.Core.Response;
using ApiVerve.Errors;
using ApiVerve.Models;
using ApiVerve.Requests.Calendar;

namespace ApiVerve.Api;

public sealed class Calendar
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Calendar(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Age Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AgecalculatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AgecalculatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate age based on the date of birth provided
    /// </remarks>
    public Task<V1AgecalculatorResponse> Agecalculator(AgecalculatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/agecalculator"),
            [],
            [new Param("dob", request.Dob), new Param("timezone", request.Timezone)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AgecalculatorResponse>(),
            AgecalculatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Date Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DatecalculatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatecalculatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate date differences based on the dates provided
    /// </remarks>
    public Task<V1DatecalculatorResponse> Datecalculator(DatecalculatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/datecalculator"),
            [],
            [new Param("start", request.Start), new Param("end", request.End)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DatecalculatorResponse>(),
            DatecalculatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Liturgical Calendar
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LiturgicalcalendarResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LiturgicalcalendarError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the Catholic liturgical calendar for one month. The response data is an object keyed by ISO date (YYYY-MM-DD), and each date holds an array of the celebrations falling on it — a date can carry more than one, such as a weekday plus an optional memorial. The fields below describe one celebration in those arrays.
    /// </remarks>
    public Task<V1LiturgicalcalendarResponse> Liturgicalcalendar(LiturgicalcalendarRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/liturgicalcalendar"),
            [],
            [new Param("month", request.Month), new Param("year", request.Year)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1LiturgicalcalendarResponse>(),
            LiturgicalcalendarError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Working Days
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WorkingdaysResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WorkingdaysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Working Days is a simple tool for getting the number of working days in a month. It returns the number of working days in the given month.
    /// </remarks>
    public Task<V1WorkingdaysResponse> Workingdays(WorkingdaysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/workingdays"),
            [],
            [new Param("country", request.Country), new Param("month", request.Month), new Param("year", request.Year)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WorkingdaysResponse>(),
            WorkingdaysError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// World Holidays
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WorldholidaysResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WorldholidaysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the holidays of a country for a given year
    /// </remarks>
    public Task<V1WorldholidaysResponse> Worldholidays(WorldholidaysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/worldholidays"),
            [],
            [new Param("country", request.Country), new Param("year", request.Year)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WorldholidaysResponse>(),
            WorldholidaysError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
