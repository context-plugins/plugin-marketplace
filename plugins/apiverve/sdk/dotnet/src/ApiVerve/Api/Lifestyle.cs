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
using ApiVerve.Requests.Lifestyle;

namespace ApiVerve.Api;

public sealed class Lifestyle
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Lifestyle(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Due Date Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DuedatecalculatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DuedatecalculatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate pregnancy due date from first day of last menstrual period
    /// </remarks>
    public Task<V1DuedatecalculatorResponse> Duedatecalculator(DuedatecalculatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/duedatecalculator"),
            [],
            [new Param("last_period", request.LastPeriod)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DuedatecalculatorResponse>(),
            DuedatecalculatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Menstrual Cycle Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MenstrualcycleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MenstrualcycleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate future menstrual cycles and phases
    /// </remarks>
    public Task<V1MenstrualcycleResponse> Menstrualcycle(MenstrualcycleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/menstrualcycle"),
            [],
            [
                new Param("last_period", request.LastPeriod),
                new Param("cycle_length", request.CycleLength),
                new Param("period_length", request.PeriodLength),
                new Param("cycles", request.Cycles),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MenstrualcycleResponse>(),
            MenstrualcycleError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ovulation Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1OvulationcalculatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OvulationcalculatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate ovulation date and fertile window
    /// </remarks>
    public Task<V1OvulationcalculatorResponse> Ovulationcalculator(OvulationcalculatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/ovulationcalculator"),
            [],
            [new Param("last_period", request.LastPeriod), new Param("cycle_length", request.CycleLength)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1OvulationcalculatorResponse>(),
            OvulationcalculatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
