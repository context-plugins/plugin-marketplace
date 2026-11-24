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
using AwsStepFunctions.Requests.AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem;

namespace AwsStepFunctions.Api;

public sealed class AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List State Machine Aliases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListStateMachineAliasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists aliases for a specified state machine ARN. Results are sorted by time, with the most recently created aliases listed first. To list aliases that reference a state machine version, you can specify the version ARN in the stateMachineArn parameter. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. Related operations: CreateStateMachineAlias DescribeStateMachineAlias UpdateStateMachineAlias DeleteStateMachineAlias
    /// </remarks>
    public Task ListStateMachineAliases(ListStateMachineAliasesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListStateMachineAliases"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListStateMachineAliasesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List State Machine Versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListStateMachineVersionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists versions for the specified state machine Amazon Resource Name (ARN). The results are sorted in descending order of the version creation time. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. Related operations: PublishStateMachineVersion DeleteStateMachineVersion
    /// </remarks>
    public Task ListStateMachineVersions(ListStateMachineVersionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListStateMachineVersions"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListStateMachineVersionsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
