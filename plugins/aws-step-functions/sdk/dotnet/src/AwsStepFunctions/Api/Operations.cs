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
using AwsStepFunctions.Requests.Operations;

namespace AwsStepFunctions.Api;

public sealed class Operations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Operations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Publish State Machine Version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PublishStateMachineVersion2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a version from the current revision of a state machine. Use versions to create immutable snapshots of your state machine. You can start executions from versions either directly or with an alias. To create an alias, use CreateStateMachineAlias. You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the DeleteStateMachineVersion API action. PublishStateMachineVersion is an idempotent API. It doesn't create a duplicate state machine version if it already exists for the current revision. Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn, name, and revisionId parameters. Requests with the same parameters return a successful idempotent response. If you don't specify a revisionId, Step Functions checks for a previously published version of the state machine's current revision. Related operations: DeleteStateMachineVersion ListStateMachineVersions
    /// </remarks>
    public Task PublishStateMachineVersion2(PublishStateMachineVersion2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#PublishStateMachineVersion"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PublishStateMachineVersion2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Redrive Execution
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RedriveExecutionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the last 14 days. These include failed, aborted, or timed out executions. When you redrive an execution, it continues the failed execution from the unsuccessful step and uses the same input. Step Functions preserves the results and execution history of the successful steps, and doesn't rerun these steps when you redrive an execution. Redriven executions use the same state machine definition and execution ARN as the original execution attempt. For workflows that include an Inline Map or Parallel state, RedriveExecution API action reschedules and redrives only the iterations and branches that failed or aborted. To redrive a workflow that includes a Distributed Map state whose Map Run failed, you must redrive the parent workflow. The parent workflow redrives all the unsuccessful states, including a failed Map Run. If a Map Run was not started in the original execution attempt, the redriven parent workflow starts the Map Run. This API action is not supported by EXPRESS state machines. However, you can restart the unsuccessful executions of Express child workflows in a Distributed Map by redrivin
    /// </remarks>
    public Task RedriveExecution(RedriveExecutionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#RedriveExecution"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RedriveExecutionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test State
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TestStateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Accepts the definition of a single state and executes it. You can test a state without creating a state machine or updating an existing state machine. Using this API, you can test the following: A state's input and output processing data flow An Amazon Web Services service integration request and response An HTTP Task request and response You can call this API on only one state at a time. The states that you can test include the following: All Task types except Activity Pass Wait Choice Succeed Fail The TestState API assumes an IAM role which must contain the required IAM permissions for the resources your state is accessing. For information about the permissions a state might need, see IAM permissions to test a state. The TestState API can run for up to five minutes. If the execution of a state exceeds this duration, it fails with the States.Timeout error. TestState only supports the following when a mock is specified: Activity tasks, .sync or .waitForTaskToken service integration patterns, Parallel, or Map states.
    /// </remarks>
    public Task TestState(TestStateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#TestState"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            TestStateError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Validate State Machine Definition
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ValidateStateMachineDefinitionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validates the syntax of a state machine definition specified in Amazon States Language (ASL), a JSON-based, structured language. You can validate that a state machine definition is correct without creating a state machine resource. Suggested uses for ValidateStateMachineDefinition: Integrate automated checks into your code review or Continuous Integration (CI) process to check state machine definitions before starting deployments. Run validation from a Git pre-commit hook to verify the definition before committing to your source repository. Validation will look for problems in your state machine definition and return a result and a list of diagnostic elements. The result value will be OK when your workflow definition can be successfully created or updated. Note the result can be OK even when diagnostic warnings are present in the response. The result value will be FAIL when the workflow definition contains errors that would prevent you from creating or updating your state machine. The list of ValidateStateMachineDefinitionDiagnostic data elements can contain zero or more WARNING and/or ERROR elements. The ValidateStateMachineDefinition API might add new diagnostics in the future, a
    /// </remarks>
    public Task ValidateStateMachineDefinition(ValidateStateMachineDefinitionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ValidateStateMachineDefinition"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ValidateStateMachineDefinitionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
