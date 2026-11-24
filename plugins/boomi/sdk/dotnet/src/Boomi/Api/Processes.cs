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
using Boomi.Requests.Processes;

namespace Boomi.Api;

/// <summary>
/// Manage integration processes (recipes) within the Boomi platform.
/// </summary>
public sealed class Processes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Processes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Boomi Create a process
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Process"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateProcessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new integration process in the Boomi platform. The process definition is provided in the request body as XML or JSON.
    /// </remarks>
    public Task<Process> CreateProcess(CreateProcessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Process"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Process>(),
            CreateProcessError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Delete a process
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteProcessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes an integration process from the Boomi platform.
    /// </remarks>
    public Task DeleteProcess(DeleteProcessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Process/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteProcessError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Get a process
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Process"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProcessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of a specific integration process by its ID.
    /// </remarks>
    public Task<Process> GetProcess(GetProcessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Process/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Process>(),
            GetProcessError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Get process schedules
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProcessSchedules"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProcessSchedulesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the scheduling configuration for a specific integration process.
    /// </remarks>
    public Task<ProcessSchedules> GetProcessSchedules(GetProcessSchedulesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ProcessSchedules/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProcessSchedules>(),
            GetProcessSchedulesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Query processes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProcessQueryResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueryProcessesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of integration processes matching the specified query filter criteria. Supports filtering by folder ID, process name, and other properties.
    /// </remarks>
    public Task<ProcessQueryResult> QueryProcesses(QueryProcessesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Process/query"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProcessQueryResult>(),
            QueryProcessesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Update a process
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Process"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateProcessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing integration process by its ID.
    /// </remarks>
    public Task<Process> UpdateProcess(UpdateProcessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Process/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Process>(),
            UpdateProcessError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Update process schedules
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProcessSchedules"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateProcessSchedulesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the scheduling configuration for a specific integration process.
    /// </remarks>
    public Task<ProcessSchedules> UpdateProcessSchedules(UpdateProcessSchedulesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ProcessSchedules/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProcessSchedules>(),
            UpdateProcessSchedulesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
