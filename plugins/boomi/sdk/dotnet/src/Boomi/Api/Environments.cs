using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Boomi.Core;
using Boomi.Core.Exceptions;
using Boomi.Core.Models;
using Boomi.Core.Request;
using Boomi.Core.Response;
using Boomi.Errors;
using Boomi.Models;
using Boomi.Requests.Environments;

namespace Boomi.Api;

/// <summary>
/// Manage runtime environments where Boomi Atoms and Molecules are deployed to run integration processes.
/// </summary>
public sealed class Environments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Environments(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Boomi Create an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new runtime environment in the Boomi platform for deploying and running integration processes.
    /// </remarks>
    public Task<EnvironmentModel> CreateEnvironment(CreateEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Environment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnvironmentModel>(),
            CreateEnvironmentError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Delete an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a runtime environment from the Boomi platform.
    /// </remarks>
    public Task DeleteEnvironment(DeleteEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Environment/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteEnvironmentError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Get an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of a specific runtime environment by its ID.
    /// </remarks>
    public Task<EnvironmentModel> GetEnvironment(GetEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Environment/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EnvironmentModel>(),
            GetEnvironmentError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Query environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentQueryResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueryEnvironmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of runtime environments matching the specified query filter criteria.
    /// </remarks>
    public Task<EnvironmentQueryResult> QueryEnvironments(QueryEnvironmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Environment/query"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnvironmentQueryResult>(),
            QueryEnvironmentsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
