using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AwsStepFunctions.Core;
using AwsStepFunctions.Core.Exceptions;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Core.Request;
using AwsStepFunctions.Core.Response;
using AwsStepFunctions.Errors;
using AwsStepFunctions.Requests.AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat;

namespace AwsStepFunctions.Api;

public sealed class AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Update State Machine Alias
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateStateMachineAliasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the configuration of an existing state machine alias by modifying its description or routingConfiguration. You must specify at least one of the description or routingConfiguration parameters to update a state machine alias. UpdateStateMachineAlias is an idempotent API. Step Functions bases the idempotency check on the stateMachineAliasArn, description, and routingConfiguration parameters. Requests with the same parameters return an idempotent response. This operation is eventually consistent. All StartExecution requests made within a few seconds use the latest alias configuration. Executions started immediately after calling UpdateStateMachineAlias may use the previous routing configuration. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases DeleteStateMachineAlias
    /// </remarks>
    public Task UpdateStateMachineAlias(UpdateStateMachineAliasRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateStateMachineAlias"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateStateMachineAliasError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
