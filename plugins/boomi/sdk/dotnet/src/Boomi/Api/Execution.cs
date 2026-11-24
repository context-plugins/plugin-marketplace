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
using Boomi.Requests.Execution;

namespace Boomi.Api;

/// <summary>
/// Execute integration processes and retrieve execution statistics and job results.
/// </summary>
public sealed class Execution
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Execution(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Boomi Execute a process
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExecutionRequestResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExecuteProcessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Triggers the execution of an integration process on a specified Atom. Returns an execution request ID that can be used to track the job.
    /// </remarks>
    public Task<ExecutionRequestResult> ExecuteProcess(ExecuteProcessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ExecutionRequest"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ExecutionRequestResult>(),
            ExecuteProcessError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Query execution records
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExecutionRecordQueryResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueryExecutionRecordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of process execution records matching the specified filter criteria. Useful for retrieving job history and execution statistics.
    /// </remarks>
    public Task<ExecutionRecordQueryResult> QueryExecutionRecords(QueryExecutionRecordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ExecutionRecord/query"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ExecutionRecordQueryResult>(),
            QueryExecutionRecordsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
