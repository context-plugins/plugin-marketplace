using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AwsCodeBuild.Core;
using AwsCodeBuild.Core.Exceptions;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Core.Request;
using AwsCodeBuild.Core.Response;
using AwsCodeBuild.Errors;
using AwsCodeBuild.Requests.CommandExecutionApi;

namespace AwsCodeBuild.Api;

public sealed class CommandExecutionApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CommandExecutionApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Batch Get Command Executions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchGetCommandExecutionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about the command executions.
    /// </remarks>
    public Task BatchGetCommandExecutions(BatchGetCommandExecutionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#BatchGetCommandExecutions"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            BatchGetCommandExecutionsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Command Executions For Sandbox
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCommandExecutionsForSandboxError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of command executions for a sandbox.
    /// </remarks>
    public Task ListCommandExecutionsForSandbox(ListCommandExecutionsForSandboxRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListCommandExecutionsForSandbox"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListCommandExecutionsForSandboxError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Command Execution
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartCommandExecutionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a command execution.
    /// </remarks>
    public Task StartCommandExecution(StartCommandExecutionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartCommandExecution"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartCommandExecutionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
