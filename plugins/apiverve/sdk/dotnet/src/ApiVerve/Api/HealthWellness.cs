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
using ApiVerve.Requests.HealthWellness;

namespace ApiVerve.Api;

public sealed class HealthWellness
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal HealthWellness(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// BMI Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BmicalculatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BmicalculatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate BMI, ideal weight, BMR, TDEE, calorie targets and macros
    /// </remarks>
    public Task<V1BmicalculatorResponse> Bmicalculator(BmicalculatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/bmicalculator"),
            [],
            [
                new Param("weight", request.Weight),
                new Param("height", request.Height),
                new Param("unit", request.Unit),
                new Param("age", request.Age),
                new Param("gender", request.Gender),
                new Param("activityLevel", request.ActivityLevel),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BmicalculatorResponse>(),
            BmicalculatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Exercises
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ExercisesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExercisesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exercises is a simple tool for getting exercise information. It returns information on various exercises.
    /// </remarks>
    public Task<V1ExercisesResponse> Exercises(ExercisesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/exercises"),
            [],
            [
                new Param("muscle", request.Muscle),
                new Param("name", request.Name),
                new Param("equipment", request.Equipment),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ExercisesResponse>(),
            ExercisesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
