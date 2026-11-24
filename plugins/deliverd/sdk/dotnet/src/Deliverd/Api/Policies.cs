using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Errors;
using Deliverd.Models;
using Deliverd.Requests.Policies;

namespace Deliverd.Api;

public sealed class Policies
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Policies(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// The policies this organisation has
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PoliciesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiV1PoliciesResponse1> GetApiV1Policies(GetApiV1PoliciesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/policies"),
            [],
            [new Param("limit", request.Limit), new Param("cursor", request.Cursor)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PoliciesResponse1>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Write a policy: what a registered action costs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PoliciesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1PoliciesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A policy is an identity that survives editing; a version is an immutable rule set. Pass <c>rules</c> to store them as version 1 and <c>activate: true</c> to put that version in force, so a push is one request rather than three that can fail between each other. Not an upsert, unlike registering an action: a second policy of the same name is refused, because overwriting one would silently replace the rules an organisation is running under. The key's holder must be an owner or an administrator — writing a rule is how authority is granted, so the scope alone is not enough — and an agent principal is refused outright, since policy decides whether an agent needs a person.
    /// </remarks>
    public Task<ApiV1PoliciesResponse> PostApiV1Policies(PostApiV1PoliciesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/policies"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PoliciesResponse>(),
            PostApiV1PoliciesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put a version in force
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PoliciesActivateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1PoliciesByIdActivateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Supersedes whichever version was active. A superseded version cannot be revived: copy its rules into a new version instead, because bringing one back would change what every decision pointing at it meant.
    /// </remarks>
    public Task<ApiV1PoliciesActivateResponse> PostApiV1PoliciesByIdActivate(PostApiV1PoliciesByIdActivateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/policies/{id}/activate"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PoliciesActivateResponse>(),
            PostApiV1PoliciesByIdActivateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a version: the next complete rule set
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PoliciesVersionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1PoliciesByIdVersionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The whole rule set, not a patch — a version has to be readable on its own, because it is what a past decision points at. It lands as a draft unless <c>activate</c> is set. Rules are validated against the action registry now rather than at activation: a condition naming a field the action's schema does not declare is refused here, since a rule that silently matches nothing looks exactly like one that has not fired yet. A version that has been in force can never be edited — the database refuses it, not only this endpoint.
    /// </remarks>
    public Task<ApiV1PoliciesVersionsResponse> PostApiV1PoliciesByIdVersions(PostApiV1PoliciesByIdVersionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/policies/{id}/versions"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PoliciesVersionsResponse>(),
            PostApiV1PoliciesByIdVersionsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// What a proposed policy would have done to past decisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PoliciesReplayResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Re-evaluates the organisation's recorded gate requests from the last <c>days</c> (default 30, newest 5,000) twice: under the rules in force, and with the proposal standing in for its policy's version in force. The proposal is a stored version (<c>policyId</c> and <c>version</c>) or a policy file not yet pushed (<c>name</c> and <c>rules</c>). Reports how many decisions change and which way, and the requests a person rejected that would now be allowed. <c>fail</c> applies <c>failOn</c>, for CI. Policy rules only: ethics checks are not replayed. Nothing is written.
    /// </remarks>
    public Task<ApiV1PoliciesReplayResponse> PostApiV1PoliciesReplay(PostApiV1PoliciesReplayRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/policies/replay"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PoliciesReplayResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// What would happen to this request, with nothing happening
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PoliciesSimulateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Evaluates a request against the rules in force and returns the decision and the rule that made it. Not scoped to one policy, because enforcement flattens every active version into one rule set and takes the first decisive rule by priority — simulating one policy in isolation would report that its rule fires when a higher-priority deny elsewhere is what a real request would meet. It runs the same evaluation enforcement runs, so the action must exist and the input must satisfy its schema here exactly as in production. Nothing is recorded: a simulation that wrote a decision row would put invented traffic into the autonomy rate.
    /// </remarks>
    public Task<ApiV1PoliciesSimulateResponse> PostApiV1PoliciesSimulate(PostApiV1PoliciesSimulateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/policies/simulate"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PoliciesSimulateResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run a policy file's test cases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PoliciesTestResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Evaluates each test case against the proposal, with every other policy in force as it is, after validating its input against the action's schema as a real request would be. A case passes when the effect, and the deciding rule when <c>expect.rule</c> is given, match. Nothing is written.
    /// </remarks>
    public Task<ApiV1PoliciesTestResponse> PostApiV1PoliciesTest(PostApiV1PoliciesTestRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/policies/test"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PoliciesTestResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
