using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonLex.Core;
using AmazonLex.Core.Exceptions;
using AmazonLex.Core.Models;
using AmazonLex.Core.Request;
using AmazonLex.Core.Response;
using AmazonLex.Errors;
using AmazonLex.Models;
using AmazonLex.Requests.Policy;

namespace AmazonLex.Api;

public sealed class Policy
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Policy(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Resource Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateResourcePolicyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateResourcePolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new resource policy with the specified policy statements.
    /// </remarks>
    public Task<CreateResourcePolicyResponse> CreateResourcePolicy(CreateResourcePolicyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/policy/{resourceArn}"),
            [new TemplateParam("resourceArn", request.ResourceArn)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateResourcePolicyResponse>(),
            CreateResourcePolicyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Resource Policy Statement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateResourcePolicyStatementResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateResourcePolicyStatementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created. You can't create a resource policy statement that allows cross-account access. You need to add the CreateResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API.
    /// </remarks>
    public Task<CreateResourcePolicyStatementResponse> CreateResourcePolicyStatement(CreateResourcePolicyStatementOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/policy/{resourceArn}/statements"),
            [new TemplateParam("resourceArn", request.ResourceArn)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateResourcePolicyStatementResponse>(),
            CreateResourcePolicyStatementError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Resource Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteResourcePolicyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteResourcePolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.
    /// </remarks>
    public Task<DeleteResourcePolicyResponse> DeleteResourcePolicy(DeleteResourcePolicyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/policy/{resourceArn}"),
            [new TemplateParam("resourceArn", request.ResourceArn)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteResourcePolicyResponse>(),
            DeleteResourcePolicyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Resource Policy Statement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteResourcePolicyStatementResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteResourcePolicyStatementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception. You need to add the DeleteResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API.
    /// </remarks>
    public Task<DeleteResourcePolicyStatementResponse> DeleteResourcePolicyStatement(DeleteResourcePolicyStatementOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/policy/{resourceArn}/statements/{statementId}"),
            [
                new TemplateParam("resourceArn", request.ResourceArn),
                new TemplateParam("statementId", request.StatementId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteResourcePolicyStatementResponse>(),
            DeleteResourcePolicyStatementError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Resource Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeResourcePolicyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeResourcePolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the resource policy and policy revision for a bot or bot alias.
    /// </remarks>
    public Task<DescribeResourcePolicyResponse> DescribeResourcePolicy(DescribeResourcePolicyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/policy/{resourceArn}"),
            [new TemplateParam("resourceArn", request.ResourceArn)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeResourcePolicyResponse>(),
            DescribeResourcePolicyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Resource Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateResourcePolicyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateResourcePolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.
    /// </remarks>
    public Task<UpdateResourcePolicyResponse> UpdateResourcePolicy(UpdateResourcePolicyOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/policy/{resourceArn}"),
            [new TemplateParam("resourceArn", request.ResourceArn)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateResourcePolicyResponse>(),
            UpdateResourcePolicyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
