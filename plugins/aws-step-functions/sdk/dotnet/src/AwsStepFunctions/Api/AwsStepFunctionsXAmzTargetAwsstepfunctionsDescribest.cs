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
using AwsStepFunctions.Requests.AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest;

namespace AwsStepFunctions.Api;

public sealed class AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Describe State Machine Alias
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeStateMachineAliasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns details about a state machine alias. Related operations: CreateStateMachineAlias ListStateMachineAliases UpdateStateMachineAlias DeleteStateMachineAlias
    /// </remarks>
    public Task DescribeStateMachineAlias(DescribeStateMachineAliasRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeStateMachineAlias"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeStateMachineAliasError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
