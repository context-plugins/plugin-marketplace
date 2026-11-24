using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonRekognition.Core;
using AmazonRekognition.Core.Exceptions;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Core.Request;
using AmazonRekognition.Core.Response;
using AmazonRekognition.Errors;
using AmazonRekognition.Requests.ProjectPolicyApi;

namespace AmazonRekognition.Api;

public sealed class ProjectPolicyApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ProjectPolicyApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Project Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteProjectPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing project policy. To get a list of project policies attached to a project, call ListProjectPolicies. To attach a project policy to a project, call PutProjectPolicy. This operation requires permissions to perform the rekognition:DeleteProjectPolicy action.
    /// </remarks>
    public Task DeleteProjectPolicy(DeleteProjectPolicyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteProjectPolicy"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteProjectPolicyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Project Policies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListProjectPoliciesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This operation applies only to Amazon Rekognition Custom Labels. Gets a list of the project policies attached to a project. To attach a project policy to a project, call PutProjectPolicy. To remove a project policy from a project, call DeleteProjectPolicy. This operation requires permissions to perform the rekognition:ListProjectPolicies action.
    /// </remarks>
    public Task ListProjectPolicies(ListProjectPoliciesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListProjectPolicies"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListProjectPoliciesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put Project Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutProjectPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This operation applies only to Amazon Rekognition Custom Labels. Attaches a project policy to a Amazon Rekognition Custom Labels project in a trusting AWS account. A project policy specifies that a trusted AWS account can copy a model version from a trusting AWS account to a project in the trusted AWS account. To copy a model version you use the CopyProjectVersion operation. Only applies to Custom Labels projects. For more information about the format of a project policy document, see Attaching a project policy (SDK) in the Amazon Rekognition Custom Labels Developer Guide. The response from PutProjectPolicy is a revision ID for the project policy. You can attach multiple project policies to a project. You can also update an existing project policy by specifying the policy revision ID of the existing policy. To remove a project policy from a project, call DeleteProjectPolicy. To get a list of project policies attached to a project, call ListProjectPolicies. You copy a model version by calling CopyProjectVersion. This operation requires permissions to perform the rekognition:PutProjectPolicy action.
    /// </remarks>
    public Task PutProjectPolicy(PutProjectPolicyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#PutProjectPolicy"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PutProjectPolicyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
